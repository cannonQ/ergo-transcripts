---
title: tERGminal - dApp in python for terminal
description: 'ErgoForum discussion: tERGminal - dApp in python for terminal'
tags:
- addresses
- ergo-python-appkit
- ergoforum
- ergoscript
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/tergminal-dapp-in-python-for-terminal/3673
created: '2022-06-01'
last_activity: '2022-06-02'
posts_count: 3
views: 332
likes: 3
glossary_hits:
- Addresses
- ErgoScript
- ergo-python-appkit
---

# tERGminal - dApp in python for terminal

> **Forum thread:** [https://ergoforum.org/t/tergminal-dapp-in-python-for-terminal/3673](https://ergoforum.org/t/tergminal-dapp-in-python-for-terminal/3673)
> **Category:** Uncategorized | **Created:** 2022-06-01 | **Posts:** 3 | **Views:** 332

**Related concepts:** Addresses, ErgoScript, ergo-python-appkit

---

### Post #1 — @Ladopixel (2022-06-01)

## tERGminal

I have finished the pocket Swiss army knife. It is written in python and tested on a MAC, Raspberry Pi 4 and Raspberry Pi Zero w. [Its code is Open Source](https://github.com/ladopixel/tERGminal/) 

**Infinite thanks** to the [ergpy repository.](https://github.com/mgpai22/ergpy)

[![tERGminal](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/5/503e4124b184fb8f61f06ee2736f4c6a846e442e_2_500x500.jpeg)

tERGminal1280×1280 163 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/5/503e4124b184fb8f61f06ee2736f4c6a846e442e.jpeg "tERGminal")

### Requirements

```ergoscript
Java 8 or higher
```

```ergoscript
pip install JPype1
```

```ergoscript
pip install ergpy
```

### Usage

```ergoscript
python ergpyMenu.py
```

Once configured with your seed phrase, you can perform the following operations:

[![Captura de Pantalla 2022-05-31 a las 21.53.09](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/9/9daf3d7c00312b9d689f7508b1d23a99d68be565_2_690x466.png)

Captura de Pantalla 2022-05-31 a las 21.53.09797×539 165 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/9/9daf3d7c00312b9d689f7508b1d23a99d68be565.png "Captura de Pantalla 2022-05-31 a las 21.53.09")

  

```ergoscript
whiteList.py
```

The whiteList file includes an array in which the wallet addresses for options 2 and 5 can be included.

```ergoscript
colorsPython.py
```

Is for the graphic part on the screen.

  
Remember that this is a \*\*non-audit application,\*\* although I want you to have no problems with your ERGs, I recommend that the seed phrase you enter (it will never be stored) corresponds to a wallet that is not your main wallet.

**The seed phrase is not stored anywhere,** it needs to be entered every time the dapp is run

  
For the options that display information (9, 10 and 11) there is no need to configure the wallet.

### tERGminal in action

In this tweet you can see tERGminal in action sending NFT to a random wallet.

[twitter.com](https://twitter.com/LadoPixel/status/1527720771530915841?s=20&t=qAJV0kG9seZhmtTigczDIA)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/0/0956f14c4e3a16a9640d79eb8491d3cd31afd816_2_690x388.jpeg)

#### [LADOPIXΣL](https://twitter.com/LadoPixel/status/1527720771530915841?s=20&t=qAJV0kG9seZhmtTigczDIA)

[@LadoPixel](https://twitter.com/LadoPixel/status/1527720771530915841?s=20&t=qAJV0kG9seZhmtTigczDIA)

I keep playing with #python + @ergoplatformorg and I'm more and more in love ❤️
Application to randomly send a NFT to a list of wallets (check yours if you are on the ERGOZX whiteList).
#ErgoNFT #ENFT #HenryNFTs #openSource #Ergonauts $ERG https://t.co/RuMyLGBEIs

[11:39 AM - 20 May 2022](https://twitter.com/LadoPixel/status/1527720771530915841?s=20&t=qAJV0kG9seZhmtTigczDIA)

67

14

If you try to use tERGminal and don’t succeed easily because you don’t have experience with python or Raspberry Pi, feel free to ask me any questions you need.

  
Any suggestions are welcome.

---

### Post #2 — @RealisticClock (2022-06-01)

![:star_struck:](https://emoji.discourse-cdn.com/twitter/star_struck.png?v=12 ":star_struck:") cant wait to test it out!

---

### Post #3 — @Ladopixel (2022-06-02)

Thanks!!  
Let me know how it went when you try it.
