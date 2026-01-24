# OS and Network Security

## 1 - Configure Firewall

Using `ufw`, configure the firewall to allow https from any IP address, but http from only the following subnet: 192.168.0.0/24

Submit a screenshot of your firewall rules.

```
ufw allow 443/tcp
ufw allow from 192.168.0.0/24 to any port 80 proto tcp
```

![[attachments/Pasted image 20251006001539.png]]

## 2 - Configure SSH Host Access

Configure the server to only allow the following 3 IPs to login to the server. Please note, this change should be made in hosts.allow:
- 192.168.1.101  
- 192.168.1.102  
- 192.168.1.103

Submit a screenshot of the configuration file you modified by using the `cat` command to show the contents of the file.

![[attachments/Pasted image 20251006002734.png]]

## 3 - Configure Server Username Access

Configure the server to only allow the following accounts to sign in. Please note. This change should be made in access.conf:

- Your username for the system and a new user named "compsecprof"
- Submit a screenshot of the configuration file you modified by using the tail command to show the contents of the file.

![[attachments/Pasted image 20251006002930.png]]

## 4 - Perform a NMAP Scan

Perform a nmap scan of `scanme.nmap.org` where you can determine the version of software running on the server.

Submit a screenshot of the command and the result.  

![[attachments/Pasted image 20251006003428.png]]

## 5 - Configure SSHD

Configure SSHD to not allow password based authentication and to not allow root to directly login to the server. Also only allow 2 active sessions at a time and 2 max authentication tries. This change should be made within the SSH configuration file.

Submit a screenshot of the changes within vi or nano. Please be sure it includes all changes.

![[attachments/Pasted image 20251006003723.png]]
