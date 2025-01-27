# Diffie-Hellman Key Exchange

1. Alice and Bob will agree on a primitive root $g$ and prime modulus $p$.
2. Alice and Bob create their own private keys, $a, b$
3. Alice and Bob calculate their public keys
	- $A=g^{a}\mod p$
	- $B=g^{b}\mod p$
4. Alice and Bob exchange private keys on a public channel
5. Alice and Bob independently calculate the shared secret
	- $s=A^{b}\mod p$
	- $s=B^{a}\mod p$
	- $s=g^{ab}\mod p$
