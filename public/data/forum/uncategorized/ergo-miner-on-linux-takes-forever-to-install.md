---
title: Ergo miner on linux takes forever to install
description: 'ErgoForum discussion: Ergo miner on linux takes forever to install'
tags:
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-miner-on-linux-takes-forever-to-install/3348
created: '2022-02-09'
last_activity: '2023-02-19'
posts_count: 7
views: 370
likes: 3
glossary_hits:
- ErgoScript
- Full node
---

# Ergo miner on linux takes forever to install

> **Forum thread:** [https://ergoforum.org/t/ergo-miner-on-linux-takes-forever-to-install/3348](https://ergoforum.org/t/ergo-miner-on-linux-takes-forever-to-install/3348)
> **Category:** Uncategorized | **Created:** 2022-02-09 | **Posts:** 7 | **Views:** 370

**Related concepts:** ErgoScript, Full node

---

### Post #1 — @cheff (2022-02-09)

I’m trying to install ergo on linux for 2 days. I can’t finish the instalation and I can’t keep my terminal opened for two days because its a remote machine, I’m not installing this node locally but udner a SSH terminal.  
I’m asking if there’s anyway to make it easier or to run in background.

This is the command I’m trying  
curl -s <https://raw.githubusercontent.com/ergoplatform/ergo/master/ergo-installer.sh> | sh -s – --mode=mining --app-dir=/home/cardano/ergo --api-key=APYKEY

Ergo node with config file will be installed into ‘/home/cardano/ergo’ directory and will be named as HOSTNAME and has API key ‘…’.

Ergo directory ‘/home/cardano/ergo’ already exists.

Latest known Ergo release: v4.0.23, downloading it to /home/cardano/ergo/ergo.jar with overwrite…

Ergo was downloaded to /home/cardano/ergo/ergo.jar

Executing ergo node to obtain API key hash…

---

### Post #2 — @Ergosmergo (2022-02-09)

If the SSH session is closed or terminated by the user the install will stop to avoid this you could attach the Terminal Session with Screen. Include the screen command in your Linux command arguments. By using the screen command will allow you to perform a long-running task on a remote machine.

`apt-get install screen`

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/1/16d88932fe8ed6ebe5e0c880950f60e42b08478a.png)
[linux.die.net](https://linux.die.net/man/1/screen)

### [screen(1) - Linux man page](https://linux.die.net/man/1/screen)

Screen is a full-screen window manager that multiplexes a physical terminal between several processes (typically interactive shells).

---

### Post #3 — @cheff (2022-02-09)

I can try that, thank you. is that normal take so long? what are minimum hardware requirements?

the node is suposidelly sync but I can open the swagger at <http://myip:9053/swagger#/utils/hashBlake2b>

I tried the installer but never could make it return it prints forever dots and the command java -Xmx4g -jar ergo-.jar --mainnet -c ergo.conf  
Is what I’m trying now.  
I’m following this tutorial

![](https://github.githubassets.com/favicons/favicon.svg)
[GitHub](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/c/c16d7c96f9b8c8d83ce499e97635ae0241e55869_2_690x345.png)

### [Set up a full node · ergoplatform/ergo Wiki](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node)

Ergo protocol description & reference client implementation - Set up a full node · ergoplatform/ergo Wiki

---

### Post #4 — @Ergosmergo (2022-02-09)

It does usually take some time to sync the full chain.

Download Ergo Java file from <https://github.com/ergoplatform/ergo/releases/>

Then create a folder called ergo inside that folder add the java installer file and also create a config file.

`touch ergo.conf`

```ergoscript
ergo {
  node {
    mining = true
  }
}
```

then try and launch the command.

`java -Xmx4g -jar ergo-4.0.23.jar --mainnet -c ergo.conf`

Or in your case you could try using screen.

`screen java -Xmx4g -jar ergo-4.0.23.jar --mainnet -c ergo.conf`

---

### Post #5 — @cheff (2022-02-09)

hello my node is sync now and running, I think the issue was the firewal so I disabled it completely. Now, I need to know what ports I need to open.  
Thank. you very much this looks very good

---

### Post #6 — @Ergosmergo (2022-02-10)

The API must not be accessible from the Internet. 9053 is the port used for the node interface and the swagger ultiliy. Node interface should not be accessible over the internet and only be accessible locally for security reasons.

---

### Post #7 — @Ergonaut (2023-02-19)

(post deleted by author)
