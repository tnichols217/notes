
## Some terms:

Broadcasting, multicasting, singlecasting, the castings, and diagrams, TLDR-ified

### HTTP

HTTP! Why do we need printf?

```bash
printf 'GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n' \
  | nc -v example.com 80

# This is with echo:
# GET / HTTP/1.1\nHost: example.com\nConnection: close\n\n
```

Let's write a web server!

```go
package main

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func main() {
  r := gin.Default()
  
  r.GET("/ping", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "pong",
    })
  })
  
  r.Run()
}```

So easy! So much magic!

### Postgres Binary

There are also binary **application** layer protocols

(from [here](https://ankushchadda.in/posts/postgres-understanding-the-wire-protocol/))
![](Pasted%20image%2020251003235823.webp)

### WebRTC

Realtime communication for the web!

A bit on WebRTC
```
[A:10.0.0.2]──[NAT A]──┐
                       │ Internet
[B:192.168.1.5]─[NAT B]┘
```

We have STUN which lets us ask "where are we coming from" to a central server and replies with our port and server that we appear to be

```
[Peer A] → STUN server → "Your IP is 203.0.113.10:53423"
[Peer B] → STUN server → "Your IP is 198.51.100.20:60012"

A sends UDP to B's public IP:port
B sends UDP to A's public IP:port
```

But sometimes you just cannot communicate with arbitrary real-world IP addresses or the ports do not pass through like you would expect.

```plaintext
[A behind NAT]───┐
                 │  UDP/TCP
             [TURN Server]
                 │
[B behind NAT]───┘
```

- "Get me started"
- "Ok, here is a IP and Port that you and your friends can use to talk to each other, 1.2.3.4:1234"
- "Awesome dude, here is a list of IPs and ports of my friends who I wanna talk to"
- "Hi guys! I am 1.2.3.4:1234 and here are some packets"
- \<those packets flow to server A through the TURN server>

It sucks! All packets have to go through TURN.

“Here are all the ways I could possibly reach you, and all the ways you could possibly reach me. Let’s test them all and pick the best one that actually works.”

Since we have fallbacks and life is complicated, we invent **ICE** (photo of Ice agents here may be funny)

```js
const pc = new RTCPeerConnection({
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },       // STUN
    { urls: 'turn:turn.example.com', username: 'x', credential: 'y' } // TURN
  ]
});
```

I asked chat to give me a WebRTC packet:
(we can totally omit this but if we can verify and add it that would be dope)

```plaintext
+---------------------------------------------------------------------------------------+
|                             Ethernet / Wi-Fi Frame                                    |
|   (L2: MAC addresses, VLAN tags if any, framing)                                      |
+---------------------------------------------------------------------------------------+
|                                     IP Header                                        |
|   (L3: IPv4 or IPv6, source/destination IPs, fragmentation info)                      |
+---------------------------------------------------------------------------------------+
|                                   UDP Header                                         |
|   (L4: source port, dest port, length, checksum)                                     |
+---------------------------------------------------------------------------------------+
|                                   DTLS Record                                       |
|   (Handshake initially, then encrypted data)                                        |
|   - Provides encryption, authentication, key exchange                               |
+---------------------------------------------------------------------------------------+
|                                 SRTP Packet                                         |
|   (RTP header + encrypted payload + authentication tag)                             |
|                                                                                     |
| RTP Header (~12 bytes):                                                             |
|   - Version, Padding, Extension, CSRC count                                        |
|   - Marker bit (e.g. signals frame boundaries)                                     |
|   - Payload Type (e.g. 96 for VP8, 98 for H.264)                                   |
|   - Sequence Number (increments per packet)                                       |
|   - Timestamp (sampling clock for media sync)                                     |
|   - SSRC (synchronization source ID)                                              |
|                                                                                     |
| RTP Payload (Encrypted):                                                            |
|   - Fragment of encoded video frame (e.g. VP8/VP9/H.264 NALU fragment)             |
+---------------------------------------------------------------------------------------+
|                             TURN Relay (Optional)                                   |
|  (If TURN is used, the above UDP packet is encapsulated in a TURN Data Indication)  |
+---------------------------------------------------------------------------------------+
```
### DNS


```bash
# Why do we use "sudo bash -c" ??
sudo bash -c '
  tshark -i any -a duration:2 -f "tcp port 53 and host 1.1.1.1" -V -O dns  &
  sleep 0.2
  dig @1.1.1.1 example.com A +tcp +norecurse >/dev/null
  wait
  cat /tmp/dns.txt
'
```

#### DNS Record Type TL;DR

| Type      | Name           | Purpose / What it Returns                                   | Common Use Case                                |
| --------- | -------------- | ----------------------------------------------------------- | ---------------------------------------------- |
| **A**     | Address        | IPv4 address (e.g. `93.184.216.34`)                         | Standard hostname → IPv4 lookup                |
| **AAAA**  | IPv6 Address   | IPv6 address (e.g. `2606:2800:220:1:248:1893:25c8:1946`)    | Hostname → IPv6 lookup                         |
| **CNAME** | Canonical Name | Alias pointing to another hostname                          | Domain redirection / aliases (e.g. www → root) |
| **TXT**   | Text           | Arbitrary text strings (SPF, DKIM, site verification, etc.) | Email authentication, domain verification      |
| **MX**    | Mail Exchange  | Mail server hostname + priority                             | Email routing                                  |
| **NS**    | Name Server    | Authoritative nameservers for a zone                        | Delegation and zone management                 |
| **PTR**   | Pointer        | Reverse DNS (IP → hostname)                                 | Reverse lookups, rDNS checks                   |

Recursive vs authoritative DNS server

```bash
monolith https://website.web -o website.html
```

```bash
#!/usr/bin/env bash
set -euo pipefail

DOMAIN=case.eduu

sudo systemctl stop systemd-resolved
cleanup() {
  pkill -P $$ dnsmasq || true
  sudo systemctl start systemd-resolved
}
trap cleanup EXIT INT TERM

sleep 1
sudo dnsmasq --no-daemon \
  --listen-address=127.0.0.53 \
  --address=/$DOMAIN/127.0.0.1 &
sleep 1

sudo python3 - <<'PY'
import http.server, socketserver
class H(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        with open('./website.html', 'rb') as f:
            body = f.read()
        self.send_response(200)
        self.send_header('Content-Type','text/html')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)
    def log_message(self, *args): pass
socketserver.TCPServer(('', 80), H).serve_forever()
PY
```

What is /etc/hosts (it just is hard coded DNS -> IP)

(from Allman slides)
![](8cab7bac-1e7f-4792-84cc-4b4679c030ea.webp)

### Special Topic: WebTransport API
Datagrams are coming to the browser!!

https://developer.mozilla.org/en-US/docs/Web/API/WebTransport

```ts
const t = new WebTransport("https://localhost:4433/wt");
await t.ready;
await t.datagrams.writable.getWriter().write(new TextEncoder().encode("hello"));
```

# Linux Topics

What is a network interface?
	- https://www.baeldung.com/linux/network-interface-configure
	- Virtual vs physical
	
How does wireguard work?

Where is stuff located:
- `/etc/resolv.conf`
- `nstat` linux network stats
- `cat /proc/net/snmp` network stats (this is cool)

Chat diagram that might be nice to add:

![](d94e58b9-a97e-4360-82b9-cdaf46bfa814.webp)

## Transport Layer

### Sockets

Finally some linux! 

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>       // for close()
#include <arpa/inet.h>    // for sockaddr_in, inet_ntoa, etc.

int main() {
    int server_fd, client_fd;
    struct sockaddr_in addr;
    char buffer[1024];

    // 1. Create a TCP socket (IPv4, stream-based)
    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (server_fd < 0) {
        perror("socket");  // print error message if socket creation fails
        exit(1);
    }

    // 2. Fill in the address structure for the server
    addr.sin_family = AF_INET;              // IPv4
    addr.sin_addr.s_addr = INADDR_ANY;      // listen on all network interfaces (0.0.0.0)
    addr.sin_port = htons(8080);            // convert port number to network byte order

    // 3. Bind the socket to the address (IP + port)
    if (bind(server_fd, (struct sockaddr*)&addr, sizeof(addr)) < 0) {
        perror("bind");
        exit(1);
    }

    // 4. Start listening for incoming connections
    // The "1" means allow a queue of up to 1 pending connection
    if (listen(server_fd, 1) < 0) {
        perror("listen");
        exit(1);
    }

    printf("Server listening on port 8080...\n");

    // 5. Accept a single incoming connection
    // This call blocks until a client connects
    client_fd = accept(server_fd, NULL, NULL);
    if (client_fd < 0) {
        perror("accept");
        exit(1);
    }

    // 6. Read data sent by the client
    int n = read(client_fd, buffer, sizeof(buffer) - 1);
    if (n < 0) {
        perror("read");
        exit(1);
    }
    buffer[n] = '\0';  // null-terminate the received data
    printf("Received from client: %s\n", buffer);

    // 7. Send a reply back to the client
    write(client_fd, "Hello from server", 17);

    // 8. Close both sockets (client first, then server)
    close(client_fd);
    close(server_fd);

    return 0;
}
```

![](3b657918-755e-48ed-a8fc-1813b8905326.webp)

## Special Topic: Virtual Ethernet

Virtual network switches on linux!!!!

This is sick!
https://man7.org/linux/man-pages/man4/veth.4.html

Note that this is all new to me and some of this is a mix of man / AI so it could use a review but I think it's fine

- A **network namespace** is a **copy of the kernel’s network stack**.
- Each namespace has its own:
    - Interfaces
    - Routing tables
    - ARP tables
    - Firewall rules
    - /proc/net files
	
```bash
# Create two namespaces and a veth pair
sudo ip netns add ns1
sudo ip netns add ns2
```
	
```bash
sudo ip link add veth1 type veth peer name veth2
```

```plaintext
[ ns1 ]                        [ ns2 ]
 veth1 <—— virtual cable ——> veth2
```

```bash
sudo ip link set veth1 netns ns1
sudo ip link set veth2 netns ns2
```

If you want to send packets to `10.1.1.2`, the kernel sees that `10.1.1.2` matches the `10.1.1.0/24` route, realizes it’s **on the same LAN**, and:
- Does ARP to find the MAC address of `10.1.1.2` (we have a fake MAC!!!!)
- Sends the packet directly out `veth1`
- “This network is **attached to me**. If you want to reach any IP in it, don’t send the packet out through a gateway or another machine — just emit it directly on this interface.” (so no NIC)
- It just directly pops out the other end

```bash
# Configure IPs and bring up
sudo ip netns exec ns1 ip addr add 10.1.1.1/24 dev veth1
sudo ip netns exec ns2 ip addr add 10.1.1.2/24 dev veth2
sudo ip netns exec ns1 ip link set veth1 up
sudo ip netns exec ns2 ip link set veth2 up

# Test connectivity
sudo ip netns exec ns1 ping -c 2 10.1.1.2
```

Linux is awesome and sick and you can simulate EVERYTHING!!!!!!!! VLAN, Virtual network switch, etc etc etc

```plaintext
                     +--------------------------+
                     |        Linux Host        |
                     |      (acts as switch)    |
                     |                          |
                     |       +------------+     |
                     |       |   br0      |     |
                     |       +------------+     |
                     |         |        |       |
                     |     eth0 trunk    |       |
                     +---------+---------+-------+
                               |
                        802.1Q trunk carrying
                       VLAN 10 and VLAN 20 tags
                               |
+-------------+          +-----------+          +-------------+
| ns1 (VLAN10)|          | ns3(VLAN20)|         | ns4(VLAN20) |
| 10.0.10.1   |          | 10.0.20.1  |         | 10.0.20.2   |
+-------------+          +-----------+         +-------------+
      |                        |
    veth1.10                 veth3.20
      |                        |
+-------------+          +-----------+
| ns2 (VLAN10)|          | ns4(VLAN20)|
| 10.0.10.2   |          | 10.0.20.2  |
+-------------+          +-----------+
```

## Common networking commands

```bash
sudo ip link add dummy0 type dummy
sudo ip addr add 10.55.0.1/32 dev dummy0
sudo ip link set dummy0 up

# ICMP
sudo tcpdump -i dummy0 -n
ping -I dummy0 10.55.0.1
```

```bash
traceroute example.com
```

```bash
# DNS A record lookup
dig example.com

# DNS reverse lookup
dig -x 8.8.8.8
```

We should talk about Wireshark but I don't really know how to use it
https://www.wireshark.org/
## Common networking services

Reverse proxies! Load balances!

### Reverse proxies

- The HOST header

```go
package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func main() {
	target, _ := url.Parse("http://localhost:8081")
	proxy := httputil.NewSingleHostReverseProxy(target)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		r.Host = target.Host
		proxy.ServeHTTP(w, r)
	})

	log.Println("Reverse proxy listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```