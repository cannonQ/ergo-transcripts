---
title: Linux One-liners to download and run Ergo node
description: 'ErgoForum discussion: Linux One-liners to download and run Ergo node'
tags:
- addresses
- box
- ergoforum
- ergoscript
- full-node
- scorex
- support
category: forum
forum_category: Support
source: ergoforum
source_url: https://ergoforum.org/t/linux-one-liners-to-download-and-run-ergo-node/155
created: '2019-12-22'
last_activity: '2021-06-04'
posts_count: 12
views: 4111
likes: 17
glossary_hits:
- Addresses
- Box
- ErgoScript
- Full node
- Scorex
---

# Linux One-liners to download and run Ergo node

> **Forum thread:** [https://ergoforum.org/t/linux-one-liners-to-download-and-run-ergo-node/155](https://ergoforum.org/t/linux-one-liners-to-download-and-run-ergo-node/155)
> **Category:** Support | **Created:** 2019-12-22 | **Posts:** 12 | **Views:** 4111

**Related concepts:** Addresses, Box, ErgoScript, Full node, Scorex

---

### Post #1 — @kushti (2019-12-22)

Now it is possible to download and run Ergo with one command in Linux.

Basic command for non-mining full-node is:

```ergoscript
curl -s https://raw.githubusercontent.com/ergoplatform/ergo/master/ergo-installer.sh | sh -s -- --mode=full --app-dir=~/ergo --api-key=MY_API_KEY
```

just change folder where the node is to be installed (–app-dir, --app-dir=~/ergo in our example), and set your API key instead of MY\_API\_KEY in the example

The command above is downloading and running UTXO-storing and non-mining full node. To have a mining full node, run the script with --mode=mining flag:

```ergoscript
curl -s https://raw.githubusercontent.com/ergoplatform/ergo/master/ergo-installer.sh | sh -s -- --mode=mining --app-dir=~/ergo --api-key=MY_API_KEY
```

and then simply go to 127.0.0.1:9053/panel for initializing the wallet and then running miners with the mnemonic provided!

---

### Post #2 — @sogekingu (2019-12-23)

`sudo apt install daemon default-jre-headless`  
on ubuntu 19 for dependecies

---

### Post #3 — @sogekingu (2019-12-23)

<https://github.com/ergoplatform/ergo/blob/master/ergo-installer.sh#L199> possibly could add the address <http://localhost:9053/panel>

seems to me that till one of the 2 options (restore or initialize wallet) github .com/ergoplatform/ergo/wiki/Set-up-a-full-node#initialize-wallet everything should be managed from a script, also if that secret stuff is only for local encryption why isnt automatically generated and installed in the config? I dont see where is the interest of the user in setting that up.

also why is created an “Ergo” folder in the home path instead of “.ergo”? this isnt very nice.

PS seems i cant use more than 2 links, pls change this discourse setting XD

I do a little script to speed things up

```ergoscript
random=$(< /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c${1:-32})
blake_random=$(curl -sX POST "http://127.0.0.1:9053/utils/hash/blake2b" -H "accept: application/json" -H "Content-Type: application/json" -d "\"$random\""); 

echo "
ergo {
  directory = \${ergo.directory}"/.ergo"
  node {
    mining = false
  }
  wallet.secretStorage.secretDir = \${ergo.directory}"/wallet/keystore"
}
scorex {
 restApi {
apiKeyHash = $blake_random
  }
}
" > ~/.ergo/ergo.conf

echo "restart ergo.jar and put "$random" in 'Set API key' in http://localhost:9053/panel"
```

(im using the ~/.ergo folder so all you can do is change that if you use ~/Ergo one)

---

### Post #4 — @kushti (2019-12-23)

Hi [@sogekingu](/u/sogekingu) ! Welcome to the community!

1. The script is installing the node into the ~/Ergo by default, which is indeed pretty strange name for \*nix systems. Thus before script update it is better to run it with --app-dir setting.
2. It seems that the script is installing default-jre-headless and curl automatically? this <https://github.com/ergoplatform/ergo/blob/master/ergo-installer.sh#L126>
3. on API secret key, the script is getting API key via parameters and setting its hash into config automatically. API key is needed in order to prevent access to certain parts of the API (such as /wallet methods) in case of e.g. unintended API exposure or against malware etc.

---

### Post #5 — @sogekingu (2019-12-23)

1 - uh, well I don’t notice that ![:confused:](https://emoji.discourse-cdn.com/twitter/confused.png?v=9 ":confused:")

2 - strange on ubuntu 16 didn’t work, (on 19 does) anyway also daemon is needed right?

3 - yes, I see, the thing is that I don’t understand why the user have to set that up, I guess trying to automate it that is quite tricky, but I’m not sure about that being the real reason.

---

### Post #6 — @scalahub (2019-12-24)

It didn’t work for me on 16.04 as well.

EDIT: The following had to be done on 16.04 (fresh install)

```ergoscript
sudo apt install curl
sudo apt install daemon
sudo apt install openjdk-9-jre-headless
```

Script ran but got an error and empty application.conf created.

```ergoscript
sed: -e expression #1, char 18: unknown option to `s'
```

See transcript below

```ergoscript
zbox@vb:~$ curl -s https://raw.githubusercontent.com/ergoplatform/ergo/master/ergo-installer.sh | sh -s -- --mode=full --app-dir=~/ergo --api-key=MY_API_KEY
Ergo node with config file will be installed into '/home/zbox/Ergo' directory and will be named as '~/ergo' and has API key 'MY_API_KEY'.
Ergo directory '/home/zbox/Ergo' already exists.
Latest known Ergo release: v3.1.5, downloading it to /home/zbox/Ergo/ergo.jar with overwrite...
Ergo was downloaded to /home/zbox/Ergo/ergo.jar
Executing ergo node to obtain API key hash..................
API key hash obtained: 0e5751c026e543b2e8ab2eb06099daa1d1e5df47778f7787faab45cdf12fe3a8
Stopping Ergo node with PID=3784....
Stopped.
sed: -e expression #1, char 18: unknown option to `s'
Config file was written to /home/zbox/Ergo/application.conf
Starting node......................
Node started.
To stop the node later, use: kill 3926
zbox@vb:~$ 
zbox@vb:~$ cat Ergo/application.conf 
zbox@vb:~$ cd Ergo/
zbox@vb:~/Ergo$ ls -l
total 79936
-rw-rw-r-- 1 zbox zbox        0 Dec 24 21:06 application.conf
-rw-rw-r-- 1 zbox zbox 80026495 Dec 24 21:06 ergo.jar
-rw-r--r-- 1 zbox zbox  1820326 Dec 24 21:08 ergo.log
zbox@vb:~/Ergo$
```

Same with 19.10 (blank application.conf)

---

### Post #7 — @kushti (2019-12-24)

> yes, I see, the thing is that I don’t understand why the user have to set that up, I guess trying to automate it that is quite tricky, but I’m not sure about that being the real reason.

You mean why user needs to put API key into script parameters? What are simpler options then?

---

### Post #8 — @sogekingu (2019-12-24)

yes application.conf is blank

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> You mean why user needs to put API key into script parameters? What are simpler options then?

I mean that the thing could be setup in the script like the rest, generate a random secret, put the blake(secret) in the conf file and the secret in the interface, isnt that quite better? (I only see technical issue in this, at least using the API). Also atm you have to input the key every time on the interface, couldt this be handled by cookies or something (or better having an option to disable this if im on my local net)? I mean this is not the end of the planet but not really comfortable.

---

### Post #9 — @kushti (2019-12-26)

oh it seems script had some problems with non-default folder, a developer released a fix it seems: [Fix ergo-installer.sh by andyceo · Pull Request #1014 · ergoplatform/ergo · GitHub](https://github.com/ergoplatform/ergo/pull/1014)

Please try (from develop branch):

```ergoscript
curl -s https://raw.githubusercontent.com/ergoplatform/ergo/develop/ergo-installer.sh | sh -s -- --mode=full --app-dir=/tmp/ergo --api-key=MY_API_KEY
```

it creates (in /tmp/ergo) the following application.conf file:

> ergo.node.mining = false  
> scorex.network.nodeName = “kushti-laptop”  
> scorex.restApi.apiKeyHash = “0e5751c026e543b2e8ab2eb06099daa1d1e5df47778f7787faab45cdf12fe3a8”

On API , its web representation is auto-generated by Swagger, we need to take a look whether its possible to do relaxed authentication there.

/panel is built by us, is its rules okay for you?

---

### Post #10 — @sogekingu (2019-12-28)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/kushti/48/10_2.png) kushti:

> ```ergoscript
> curl -s https://raw.githubusercontent.com/ergoplatform/ergo/develop/ergo-installer.sh | sh -s -- --mode=full --app-dir=/tmp/ergo --api-key=MY_API_KEY
> ```

should be something like this:

```ergoscript
echo "\nAPI key used: ${APP_KEY}"
echo "\nAPI key hash obtained: ${API_KEY_HASH}"
```

so user can actually use the API key to log in, but yes relaxation would be the best, honestly users shouldnt even care about the api key hash, that’s only to be set in the conf, he only cares about the api key to connect via interface, /panel is ok, i dont really care, the important is adding also a line at the end with something like: “connect to <http://localhost:9053/panel> to interact with node”

---

### Post #11 — @scalahub (2019-12-28)

I have tested the fixed code and seems to work on 19.10. I’ll check and revert for 16.04 later.  
The directory used is `/tmp`. Perhaps it will be better to put it in home or let user specify.

But I don’t have any strong opinion on this.

---

### Post #12 — @Happyjew (2021-06-04)

Good day! I use the line from the theme header to install ergo on linux, enter the api-key which I made on windows OS and get an endless download of the api-key in node. Please, help! I tried to enter both Api-key itself and Api-key hash.
