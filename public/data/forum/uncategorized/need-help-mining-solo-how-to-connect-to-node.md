---
title: Need help mining Solo- How to connect to node
description: 'ErgoForum discussion: Need help mining Solo- How to connect to node'
tags:
- addresses
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/need-help-mining-solo-how-to-connect-to-node/2035
created: '2021-07-31'
last_activity: '2022-01-02'
posts_count: 6
views: 1540
likes: 3
glossary_hits:
- Addresses
- ErgoScript
- Full node
---

# Need help mining Solo- How to connect to node

> **Forum thread:** [https://ergoforum.org/t/need-help-mining-solo-how-to-connect-to-node/2035](https://ergoforum.org/t/need-help-mining-solo-how-to-connect-to-node/2035)
> **Category:** Uncategorized | **Created:** 2021-07-31 | **Posts:** 6 | **Views:** 1540

**Related concepts:** Addresses, ErgoScript, Full node

---

### Post #1 — @sudoScientist (2021-07-31)

I have tried using the NVIDIA miner, but keep getting libeay32.dll errors. I have used NBminer in the past for pool mining, but am not sure how to point the miner to my node. When I use <http://127.0.0.1:9053> as my URL, it says invalid format in the logs.

Also, is anyone knowledgeable on how to connect another machine to this same node for solo mining?

I would really like to help decentralize the network and diverge from pools, but I am not sure what I am doing wrong. Any guidance is greatly appreciated.

EDIT: I had manually found a libeay32.dll file and added it in the miner directory. It seems to be working for NVminer now, but I would like to mine from another machine using this node. Any advice?

---

### Post #2 — @sudoScientist (2021-12-31)

[@kushti](/u/kushti) [@anon\_real](/u/anon_real) Any help would be appreciated, I know I am probably missing something stupid

---

### Post #3 — @sudoScientist (2021-12-31)

I am aware of needing a Stratum Server for connecting non-local machines to the node, but the guide on Github is not helpful in successfully get it to work!

Any help is greatly appreciated…

---

### Post #4 — @sudoScientist (2022-01-01)

The problem is Windows!

Ran node and server in Ubuntu, and worked first try…

The question is now properly setting up the server. How do I properly find my node url to config the server?

---

### Post #5 — @Ergosmergo (2022-01-01)

Windows can be hard work sometimes. Windows for mining is terrible. From constant updates to recognizing just about all mining software as a virus. Windows is sure not your friend when it comes to mining. I switched to HiveOS and I have been enjoying a lot of Hive’s features. However I am not sure Hive supports Solo mining ERG without a pool as full node is required.

You can’t go wrong with Ubuntu. Another good Linux OS is PopOS if you have NVIDIA graphics [PopOS](https://pop.system76.com/) comes with the proprietary NVIDIA driver preinstalled.

I’m no expert when it comes to Solo mining ERG without a pool but from what I gather you need to set the full node software up, be fully synced with the blockchain and set some parameters in your Ergo config file. After you will need to create a file within the same directory as your Ergo node pointing to your nodes IP address.

If we refer to this Wiki in GitHub on Mining-Ergo-after-The-Hardening-Upgrade we can find information on Mining ERG Solo without a Pool.

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/wiki/Mining-Ergo-after-The-Hardening-Upgrade)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/e/e602aedf71ba2875144a062ad0658e02eb09e4f2_2_690x345.png)

### [Mining Ergo after The Hardening Upgrade · ergoplatform/ergo Wiki](https://github.com/ergoplatform/ergo/wiki/Mining-Ergo-after-The-Hardening-Upgrade)

Ergo protocol description & reference client implementation - Mining Ergo after The Hardening Upgrade · ergoplatform/ergo Wiki

In order to solo mine, you need the following setup:

1. A full node with wallet initialized and fully synced.
2. A computer with a GPU (or multiple GPUs)
3. Ergo mining software for your operating system. Ergo supports both AMD and NVidia GPUs.

The links for setting up the mining software are:

* [Nvidia Miner](https://github.com/mhssamadani/Autolykos2_NV_Miner/releases)
* [AMD Miner](https://github.com/mhssamadani/Autolykos2_AMD_Miner/releases)

Solo mining requires a configured and synchronized Ergo node and at least one GPU for mining. You may use multiple GPUs if you wish (to multiply your hashing power) but you only need one Ergo node.

In Ergo full node config file change the parameter for ergo.node.mining to true.  
`ergo.node.mining = true`

In the same folder of miner executable, create a file called `config.json` with the following content

```ergoscript
{ 
    "node": "http://127.0.0.1:9053"
}
```

Rather then running your mining software directly through full node you could use a pool with low fee Ergo SOLO mining features.

If you are 100% on mining ERG without a pool there are some good discussions on this over at /r/erg\_miners <https://www.reddit.com/r/erg_miners/comments/nupwvj/solo_mining_erg_without_a_pool/>.

The IP address 127.0.0.1 is a special-purpose IPv4 address and is called the localhost or loopback address. Application software contain IP addresses for their intended recipients. TCP/IP recognizes 127.0.0.1 as a special IP address. The protocol checks each message before sending it to the physical network. Then, it automatically re-routes any messages with a destination of 127.0.0.1 back to the receiving end of the TCP/IP stack.

Do you have port 9053 forwarded in Linux set firewall rules.

```ergoscript
sudo ufw allow 9053/tcp
```

```ergoscript
sudo ufw enable
```

---

### Post #6 — @sudoScientist (2022-01-02)

I already have a synced node. The question is how to connect a miner to the Stratum Server. How do I know my IP address to input in the mining config file?
