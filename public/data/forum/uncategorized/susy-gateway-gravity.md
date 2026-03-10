---
title: SUSY Gateway (Gravity)
description: 'ErgoForum discussion: SUSY Gateway (Gravity)'
tags:
- addresses
- box
- context-extension
- ergoforum
- ergoscript
- ergoscript-context
- native-tokens
- token-id-rule
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/susy-gateway-gravity/488
created: '2020-11-25'
last_activity: '2020-11-27'
posts_count: 2
views: 746
likes: 5
glossary_hits:
- Addresses
- Box
- Context extension
- ErgoScript
- ErgoScript context
- Native tokens
- Token ID rule
---

# SUSY Gateway (Gravity)

> **Forum thread:** [https://ergoforum.org/t/susy-gateway-gravity/488](https://ergoforum.org/t/susy-gateway-gravity/488)
> **Category:** Uncategorized | **Created:** 2020-11-25 | **Posts:** 2 | **Views:** 746

**Related concepts:** Addresses, Box, Context extension, ErgoScript, ErgoScript context, Native tokens, Token ID rule

---

### Post #1 — @kushti (2020-11-25)

SUSY gateway:

Overview:

<https://arxiv.org/pdf/2008.13515.pdf>

LU-Port has already implemented on waves and eth chains:

<https://github.com/Gravity-Tech/gateway/blob/main/contracts/waves/luport.ride>

To work with another TargetChain (ERGO) we have to see the following functionality of IB port:

1. ERGO SC must support external call of “attachEventData” with parameters:

* Token ID (optional since different tokens will have their own gateways)
* Amount
* Receiver

Only one from 5 admin accounts have a chance to call this method.

2. After attachEventData Receiver must receive its amount of wrapped tokens
3. Holder of wrapped tokens has to have an ability to send tokens to the gateway address and this should trigger API (rpc) call.

For all statements 1-3 there must be an API (open and public).

Solidity example of IB (issue/burn port):

<https://github.com/Gravity-Tech/gateway/blob/main/contracts/ethereum/IBPort.sol>

# Ergo Solution

As Ergo is UTXO blockchain with in which contracts are focused on checking on-chain work done off-chain, Ergo solution for 1-2) would be quite different from Ethereum (as usually):

* create a lot of UTXOs (e.g. 50) with e.g. swETH tokens locked with a contract
* the lock contract is waiting for amount and receiver to be provided in context extension, checking admin signature and also that asked amount of swETH unlocked indeed. Something like:

> {  
> val amount = getVarLong.get  
> val receiver = getVarGroupElement.get

> val selfOut = OUTPUTS(0)  
> val selfAmt = ((SELF.tokens(0).\_2 - selfOut.tokens(0).\_2) == amount) && selfOut.tokens(0).\_1 == fromBase64(“swETHtokenid”)  
> val selfScript = selfOut.propositionBytes == SELF.propositionBytes  
> val rcvOut = OUTPUTS(1)  
> val rcvScript = rcvOut.propositionBytes == proveDlog(receiver).propBytes  
> val rcvAmt = (rcvOut.tokens(0).\_2 == amount) && selfOut.tokens(0).\_1 == fromBase64(“swETHtokenid”)

> val adminApproval = PK(“9eg2Rz3tGogzLaVZhG1ycPj1dJtN4Jn8ySa2mnVLJyVJryb13QB”) || PK(“9eg2Rz3tGogzLaVZhG1ycPj1dJtN4Jn8ySa2mnVLJyVJryb13QB”) || PK(“9eg2Rz3tGogzLaVZhG1ycPj1dJtN4Jn8ySa2mnVLJyVJryb13QB”) || PK(“9eg2Rz3tGogzLaVZhG1ycPj1dJtN4Jn8ySa2mnVLJyVJryb13QB”) || PK(“9eg2Rz3tGogzLaVZhG1ycPj1dJtN4Jn8ySa2mnVLJyVJryb13QB”)

> selfAmt && selfScript && rcvScript && rcvAmt && adminApproval  
> }

P2S playground link: [ErgoScript Playground | PlutoMonkey Wallet](https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBhbW91bnQgPSBnZXRWYXJbTG9uZ10oMSkuZ2V0CiAgdmFsIHJlY2VpdmVyID0gZ2V0VmFyW0dyb3VwRWxlbWVudF0oMikuZ2V0CgogIHZhbCBzZWxmT3V0ID0gT1VUUFVUUygwKQogIHZhbCBzZWxmQW10ID0gICgoU0VMRi50b2tlbnMoMCkuXzIgLSBzZWxmT3V0LnRva2VucygwKS5fMikgPT0gYW1vdW50KSAmJiBzZWxmT3V0LnRva2VucygwKS5fMSA9PSBmcm9tQmFzZTY0KCJzd0VUSHRva2VuaWQiKQogIHZhbCBzZWxmU2NyaXB0ID0gc2VsZk91dC5wcm9wb3NpdGlvbkJ5dGVzID09IFNFTEYucHJvcG9zaXRpb25CeXRlcwoKICB2YWwgcmN2T3V0ID0gT1VUUFVUUygxKQogIHZhbCByY3ZTY3JpcHQgPSByY3ZPdXQucHJvcG9zaXRpb25CeXRlcyA9PSBwcm92ZURsb2cocmVjZWl2ZXIpLnByb3BCeXRlcwogIHZhbCByY3ZBbXQgPSAocmN2T3V0LnRva2VucygwKS5fMiA9PSBhbW91bnQpICYmIHNlbGZPdXQudG9rZW5zKDApLl8xID09IGZyb21CYXNlNjQoInN3RVRIdG9rZW5pZCIpCgogIHZhbCBhZG1pbkFwcHJvdmFsID0gUEsoIjllZzJSejN0R29nekxhVlpoRzF5Y1BqMWRKdE40Sm44eVNhMm1uVkxKeVZKcnliMTNRQiIpIHx8IFBLKCI5ZWcyUnozdEdvZ3pMYVZaaEcxeWNQajFkSnRONEpuOHlTYTJtblZMSnlWSnJ5YjEzUUIiKSB8fCBQSygiOWVnMlJ6M3RHb2d6TGFWWmhHMXljUGoxZEp0TjRKbjh5U2EybW5WTEp5VkpyeWIxM1FCIikgfHwgUEsoIjllZzJSejN0R29nekxhVlpoRzF5Y1BqMWRKdE40Sm44eVNhMm1uVkxKeVZKcnliMTNRQiIpIHx8IFBLKCI5ZWcyUnozdEdvZ3pMYVZaaEcxeWNQajFkSnRONEpuOHlTYTJtblZMSnlWSnJ5YjEzUUIiKQoKICBzZWxmQW10ICYmIHNlbGZTY3JpcHQgJiYgcmN2U2NyaXB0ICYmIHJjdkFtdCAmJiBhZG1pbkFwcHJvdmFsCn0=)

For 3) we can have offchain component just and script which is checking that the only one output is merging all the input swETH tokens and output script is from above.

---

### Post #2 — @robert (2020-11-27)

Nice, this doesn’t seem too complicated overall even in the UTXO model.
