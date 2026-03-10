---
title: Magnum Wallet Closing in 20 days!
description: 'ErgoForum discussion: Magnum Wallet Closing in 20 days!'
tags:
- addresses
- box
- covert-addresses
- ergoforum
- ergomixer
- full-node
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/magnum-wallet-closing-in-20-days/468
created: '2020-11-11'
last_activity: '2021-10-21'
posts_count: 18
views: 4885
likes: 11
glossary_hits:
- Addresses
- Box
- Covert Addresses
- ErgoMixer
- Full node
- Transaction
---

# Magnum Wallet Closing in 20 days!

> **Forum thread:** [https://ergoforum.org/t/magnum-wallet-closing-in-20-days/468](https://ergoforum.org/t/magnum-wallet-closing-in-20-days/468)
> **Category:** Uncategorized | **Created:** 2020-11-11 | **Posts:** 18 | **Views:** 4885

**Related concepts:** Addresses, Box, Covert Addresses, ErgoMixer, Full node, Transaction

---

### Post #1 — @Martin-mx (2020-11-11)

From Magnum`s Telegram post:

*"Dear users,*  
*today we are forced to inform you that in 20 days Magnum Wallet will be suspended.*  
*It was a difficult year and a difficult decision for us.*

*We remind you that Magnum Wallet is a non-custodial wallet. Magnum Wallet doesn’t have access to and doesn’t store your personal data, and only provides you with viewing data from the blockchain. You can use any other cryptocurrency wallets to access the blockchain through your private keys.*

*We also remind you that it is you who should keep your private keys. We regularly suggest that you save them from Magnum Wallet. If you haven’t done this yet or don’t remember the place where you store your private keys, then below are instructions on how to do it right now.*  
*We highly recommend doing this soon.*  
*Magnum Wallet will be suspended on the 30-th of November at 6pm GMT.*

*Thank you for using our product.*  
\*For downloading your Private keys, \*  
*1) Click a link "Download Private Keys " in the Top of the web site*  
*2) Copy or Save Private Keys"*

We’ll check their key derivation procedure, so then it will be possible to import keys into the node at least. Maybe we’ll do some special migration website, depends on how many users will have their coins associated with Magnum keys after Nov, 30th.

Please use wallet in-built in full node, Yoroi or Coinbarn <https://ergoplatform.org/en/wallets/>

---

### Post #2 — @gagarin55 (2020-11-11)

Another option is to use desktop wallet from <https://ergowallet.io> and transfer all funds from Magnum Wallet

---

### Post #3 — @Martin-mx (2020-11-15)

"anon2020s Yesterday at 23:35

good news for magnum wallet users! ErgoMixer will support your current magnum wallet’s addresses. Your current ERG addresses will be imported into mixer and converted into covert addresses. so you can keep using your previous addresses, however as covert addresses. stay tuned!"

---

### Post #4 — @Pat (2020-12-06)

Hi,  
Unfortunately, I was not able to send my Ergo before the closing of Magnum wallet on Yoroi. Are you going to do a website migration? If not, I did install an ergo mixer, but I’m not really sure how to make it work. It scares me to make a mistake and lose my Ergo. Can you help me?  
Thank you for your help and best regards,  
Patrick

---

### Post #5 — @kushti (2020-12-06)

Hello Pat,

[@anon2020s](/u/anon2020s) can you do some guide please ? Or I will do it tomorrow maybe

---

### Post #6 — @anon2020s (2020-12-07)

It is safe and easy, just have your key for each magnum wallet and download the [mixer v3.1.0](https://github.com/ergoMixer/ergoMixBack/releases/tag/3.1.0).

[![download](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/5b7ae82243584e40a64927dc25e483ad44d0e35c_2_489x375.jpeg)

download1521×1166 115 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/5b7ae82243584e40a64927dc25e483ad44d0e35c.jpeg "download")

Install and run the mixer.  
navigate to Covert Address page and click the button NEW COVERT ADDRESS:

[![covert page](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/ba45a5cb604243028758bf3a9ea5de849a8f9456_2_517x252.jpeg)

covert page1549×758 52.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/ba45a5cb604243028758bf3a9ea5de849a8f9456.jpeg "covert page")

Optionally, choose a name for this address; for example: MyMagnumWallet. And, check the box *I want to import an existing private key.*  
A new checkbox will appear, *I know what I am doing.*, check it too.  
A new input field will appear, enter your exported private key and click NEXT button:

[![newCovertEnterPrivateKey](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/d761e6a2acdd4d4f4c44d637a20776c74600e101_2_517x357.jpeg)

newCovertEnterPrivateKey1552×1074 98.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/d761e6a2acdd4d4f4c44d637a20776c74600e101.jpeg "newCovertEnterPrivateKey")

At the second step, choose your desired mixing level (I recommend 90 since the fees are rather low and security gain is high), and click NEXT:

[![chooseLevel](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/9b19871e0c021a2d0cd6e5834d75d15604155fa4_2_517x327.jpeg)

chooseLevel1558×988 90 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/9b19871e0c021a2d0cd6e5834d75d15604155fa4.jpeg "chooseLevel")

At the third step, you can enter your withdrawal addresses; each box is being withdrawn automatically to one of these addresses (chosen randomly) after being mixed.  
Simply choose SET LATER and click CREATE COVERT ADDRESS button, OR, user a node to load some addresses, OR, enter a list of addresses manually in the USING JSON tab, as shown in the picture below:

[![loadAddresses](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/e2f0737a2494ac52f88f970961273bc2e8f65be3_2_518x500.jpeg)

loadAddresses1585×1529 154 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e2f0737a2494ac52f88f970961273bc2e8f65be3.jpeg "loadAddresses")

finally click the CREATE COVERT ADDRESS button.  
You are done importing the magnum wallet. If you have several addresses in the magnum wallet, repeat the steps for each private key.

notes:

* For now the default ring is 250 ERG, so your funds will be divided into 250 ERG boxes. You can change your desired ring anytime by clicking on ALL ASSETS button of your covert address. The new mixes will respect this change.
* This is the only option, as far as I know, to keep using your magnum address
* We encourage you to do periodic backups from the Configuration page.

---

### Post #7 — @Pat (2020-12-07)

Hi,

Thank you very much for your help. The last step is for me still not quite clear. The goal for me is to be able to send my Ergo in Yoroi wallet. If I understood correctly, I will have one address per box of 250 Ergo? That’s right? And then how do I send the Ergos with these addresses?

Thank you for your answer and best regards,

Patrick

---

### Post #8 — @anon2020s (2020-12-07)

Hi,  
you have two options:

1. Send Magnum’s funds to Yoroi directly.  
   since the yoroi does not support Magnum’s path, you cannot import or sweep key. So you should do some coding and sign a transaction manually to send the funds to your yoroi wallet. If you are not completely know what to do, please do not use this option since there is high chance of losing all your funds.  
   Using this option, you might also need to do it regularly if you receive funds on Magnum address again.
2. Use ErgoMixer and KEEP YOUR PREVIOUS ADDRESS. just import its key and set your withdraw addresses with your yoroi wallet. This way any funds in your magnum will be mixed and then withdrawn to your yoroi addresses, form now on.

if you need more help, discord channel would be a better place to follow.

---

### Post #9 — @Pat (2020-12-07)

Hi,

One more clarification please: to use your solution 2, what do I have to do in step 3 of your tutorial? (I’m not sure I understood)

---

### Post #10 — @anon2020s (2020-12-07)

* Generate one or more addresses in your Yoroi wallet to receive ERG
* Enter those addresses in the third step, following the template: [“address1”,“address2”,“address3”]

the funds will be withdrawn from the mixer when finished and will be sent to these addresses

---

### Post #12 — @Marco (2021-01-14)

Hi,

Like Patrick, I was not able to send my Ergo before the closing of Magnum wallet to Yoroi. After reading this post, I decided to follwom the steps suggest by anon2020s in order to send my Ergo from Magnum wallet to ErgoMixer then to Yoroi wallet. I would like to know how long it takes this process. At the time of this message, all my ERG boxes have the status “running”.

[![ErgoMixer](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/1cd26ed3704faf1991ec270a77bf1bf2c8864123_2_690x341.jpeg)

ErgoMixer1598×792 140 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/1cd26ed3704faf1991ec270a77bf1bf2c8864123.jpeg "ErgoMixer")

Thak you for your time, best regards,

Marco Augusto

---

### Post #13 — @scalahub (2021-01-15)

Can you try the “Withdraw now” option? I guess it should withdraw immediately (in 10 mins or so).

---

### Post #14 — @Marco (2021-01-15)

Yes, it work. I thought the withdraw as automatic once the mixer process was over.

Thank you very much.

Best regards,

Marco Augusto.

---

### Post #15 — @kushti (2021-01-16)

Withdraw is automatic indeed, but you can withdraw manually also before mixing is fully done.

---

### Post #16 — @gracco (2021-03-06)

Hello. I also didn’t recover my ERG before the Magnum wallet closed. I don’t have a private key, but only the 12 words seed. Do you have suggestions?

---

### Post #17 — @Sandbar (2021-03-10)

Me too. Would like to know what to do. Did not receive any notification from Magnum. Tried to download the other wallet recommended by blocked by my firewalls.

---

### Post #18 — @gagarin55 (2021-03-10)

Check this topic, please - [From Magnum Wallet to Ergo Wallet](https://www.ergoforum.org/t/from-magnum-wallet-to-ergo-wallet/817)

---

### Post #19 — @d1g174l (2021-10-21)

Is there a similar way to recover a Yoroi wallet using the 15 phrase mnemonic?

Ergowallet seems to support only a 12 phrase mnemonic. Yoroi browser extension broke for me and has locked up my 722 ERGO. I’m trying to figure out how to take them back out of there, as Yoroi always chokes on my wallet, no matter what OS or browser I load it into.

And their own IOS app doesn’t recognize their own mnemonic phrases either. It’s a rediculous joke.
