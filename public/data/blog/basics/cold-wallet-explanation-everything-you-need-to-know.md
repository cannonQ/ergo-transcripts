---
title: 'Cold Wallet Explanation: Everything You Need To Know

  '
date: '2022-12-18'
author: Ergo Platform
tags:
- addresses
- basics
- ergo-blog
- ergoscript-context
- liquidation
- native-tokens
- nautilus
- transaction
category: blog
blog_tag: Basics
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Cold-Wallet-Explanation-Everything-You-Need-To-Know
glossary_hits:
- Addresses
- ErgoScript context
- Liquidation
- Native tokens
- Nautilus
- Transaction
---

# Cold Wallet Explanation: Everything You Need To Know


> **Published:** 2022-12-18 | **Author:** Ergo Platform | **Tag:** Basics | **Type:** blog

**Related concepts:** Addresses, ErgoScript context, Liquidation, Native tokens, Nautilus, Transaction

---

## What is a cold wallet?

Cold wallets allow for the offline storage of cryptocurrency, providing the strongest form of security and self-custody. Cold storage wallets can receive crypto without an internet connection, and some types of cold storage, such as hardware wallets, can sign outgoing transactions without directly connecting to the internet. Cold wallets are resilient against hackers, who require network access to hack devices.

Hot wallets are more versatile wallets that are used to quickly transact and interact with decentralized applications. These wallets are stored and connected online, often as web browser extensions, allowing users to interact with the blockchain by signing transactions with a typed password. Examples include browser wallets such as Nautilus (Ergo) or Metamask (Ethereum), as well as centralized exchange (CEX) wallets. It is important to note that not all types of hot wallets are equal in their security assumptions. For instance, you do not own the keys of the exchange wallets you use, whereas you do own the keys to your private browser wallets. Having said that, all hot wallets are still open to vulnerabilities due to the fact that they are connected online.

Hot wallets can be more versatile and convenient to use, but they are also more vulnerable to hacks. Users are encouraged to use cold wallets in order to maximize security and mitigate risk.

## How does a cold storage wallet work?

There are two main types of cold storage wallets. “Paper wallets” are read-only and can only receive funds. Cold storage devices, such as offline cellphones and hardware wallets (Ledger, Trezor, etc), can be used to sign and authorize transactions. Crypto wallets in general do not hold funds, but act as portals to view or access funds stored on the blockchain protocol.

All cold storage wallets come with a seed phrase, private key, public key and addresses that can receive crypto (the addresses are on the blockchain that you are interacting with). The seed phrase can be used to recover the wallet if you lose access to, or destroy, the cold wallet storage device. By inputting a seed phrase, a user can regain access to a wallet’s respective public and private key. You can think of the seed phrase as the seed from which the public and private keys are grown. The private key is used to sign transactions when using hardware cold wallet devices. The public key and addresses serve the same purpose as your bank account number and are used as the receiving addresses of your wallet. On Ergo, the public key is used to securely view the balance of the entire wallet and to derive all addresses for receiving crypto.

### Examples of cold wallets

#### Ergo Paper Wallet
The paper wallet is arguably the best [cold crypto wallet](https://ergopaperwallet.org/) because it is the easiest to set up (while offering the same security as other more complicated options). Simply put, the paper wallet is a document on a physical piece of paper that contains a public and private key on it. The keys will typically be in the form of a QR code that can be easily scanned to receive transactions. One downside of using a paper wallet is that it is read-only and cannot be used to authorize outgoing transactions. However, the seed (mnemonic) phrase can be used to restore your wallet (via hardware wallet or hot wallet) in order to enable the ability to send funds from the respective wallet. On Ergo, users can use their seed phase to restore access to their funds with several wallets, such as Nautilus browser wallet, Terminus iPhone wallet, or the Android hot wallet. 

#### Ergo Android wallet “Cold Wallet”
An offline android device with the Ergo Wallet app can be used as a cold wallet to securely hold and sign transactions. The Ergo cold wallet can send transactions offline by using a second device. By using an old android device as a cold storage wallet in tandem with your daily android device (or any hot wallet), you can safely sign transactions. The cold wallet functions off-chain and does not require an internet connection. The cold wallet will produce single-use QR codes to verify your transaction via the use of your gateway/hot wallet. With the gateway wallet and the single-time QR code, you will be able to safely interact with the Ergo blockchain without connecting the Android cold wallet to the internet.

#### Hardware wallet
A hardware wallet is a type of cold storage crypto wallet that stores private keys - the critical information needed to authorize outgoing transactions on the blockchain network. These devices can be used to create secure private/public keys for a variety of crypto protocols, and many readers may already be familiar with some of these devices (Ledger, Trezor, etc). Currently, Ledger support for the Ergo Platform is in its final stages, and it is expected to be available to the community in the near future. 

## How to use a cold wallet?

### Ergo Paper Wallet
The Ergo paper wallet can only be used to receive assets and view the contents of the wallet. To retrieve funds the seed phrase or mnemonic must be used with a hot wallet.

This wallet is fairly easy to set up and is available via the [Ergo Paper Wallet website](https://ergopaperwallet.org/). The paper wallet contains:
1. A public key that is used to securely check your balance and/or get additional addresses for this read-only wallet.
2. Three addresses that can be used to receive any assets on the Ergo protocol, including coins, tokens and NFTs.
3. A seed phrase (or mnemonic) that can be used in a hot wallet to gain full access to the funds stored in the paper wallet.

### Ergo Android Wallet “Cold Wallet"

Setting up the Cold Wallet:

1. Prepare a cold offline android device without internet access (no WiFi set up, airplane mode)
2. It is recommended that you sideload the wallet app on the offline android device. You can download the Ergo Wallet App apk [here](https://apkcombo.com/ergo-wallet-app/org.ergoplatform.android/).
3. Create a new wallet in the Ergo Wallet App.
4. On your daily online android device: Add the wallet you've created in read-only mode.
5. Start sending funds from your online device. 

Steps to send funds:

1. Create a transaction in your daily online android wallet application and then select the "Sign With Cold Wallet" button.
2. The online android wallet application shows a QR code with serialized transaction bytes on the screen
3. You scan the QR code from step 2 with the offline android device, which signs the transaction and then displays the QR code of the signed transaction.
4. To send the transaction to the blockchain, you scan the QR code of the signed transaction produced by the offline android device with your online device.

For a more in-depth guide please consult the [tutorial video](https://www.youtube.com/watch?v=maau3TDC19k&ab_channel=ErgoPlatform) by MrStahlfelge. 

## Is it worth getting a cold wallet?

If you are acquiring cryptocurrency to hold as a long-term investment, then a cold storage wallet might be your best solution. Cold storage wallets offer a secure and offline option that will protect your investment as long as you keep the physical storage device safe and secure. Storing large sums of assets in hot wallets, especially within exchanges, can leave your investments vulnerable to potential risks. 

It might be slightly easier to avoid risks of hacks and scams with a private hot wallet, but there are also risks associated with holding money in a CEX (centralized exchange). Traditional banks are regulated by government institutions and have insurance on deposits. A CEX is a weakly regulated corporation, and it is ultimately under the control of its owners and shareholders. Without proper regulation, users holding their funds within a CEX are at risk of falling prey to withdrawal limitations. Macroeconomic circumstances and fraudulent behavior can lead to bank runs when CEX holdings are undercollateralized, which can be catastrophic and cause permanent loss for retail users holding funds in these platforms.

Insolvency amongst big exchanges and protocols may seem improbable, but it has happened. People have lost their investments on CEXs, as happened with the FTX collapse of November 2022. The best thing to do to avoid these risks is to assume the responsibility of your assets with the security solutions that cold storage wallets provide. As they say: not your keys, not your coins.

### Can a cold wallet be hacked?

Cold storage wallets hold funds offline, so they are practically impervious to online hacks, but there are still some risks. Cold wallets are physical storage devices, such as hardware wallets, offline android wallets or paper wallets, that can be damaged or even stolen. Make sure that you keep your cold storage wallet in a secure location, ideally a durable and secret location, such as a home safe. Paper wallets should be treated the same as money. If the paper is lost, then you lose the value it holds. To ensure that the paper is secure, keep it in a safe location with low humidity to protect it from water damage. Hardware wallets and offline phones are more resilient to damage and are password protected. They should still be kept in a secure and private location, with the respective seed phrase stored like a paper wallet (ideally in a different location from the cold storage wallet device).

## Is a cold wallet better than a hot wallet?

Cold wallets and hot wallets both have their trade-offs. Hot wallets are more versatile and have more functionality with decentralized applications, such as decentralized finance (exchanges) and NFT platforms. Cold wallets are more secure if you ensure that the storage of your private key is physically safe and secure.

It is safest to keep most of your crypto in a cold storage wallet, only transferring small amounts to your hot wallets (browser/desktop) when transacting and using decentralized applications.

## How to choose a cold wallet?

Each type of cold wallet has its advantages and disadvantages. Paper wallets are easy to set up and are best suited for long term storage. All that is needed is an internet connection, a printer, and a sheet of paper. You can also choose to encrypt a paper wallet pdf and store it on an offline device. One disadvantage of paper wallets is that they are read-only and can only receive funds as long as the physical paper document is available. In order to have complete access to the funds, you would have to input the respective seed phrase with a hot wallet.

Hardware wallets have higher upfront costs but are also versatile. These cold storage wallets are able to sign transactions, thereby offering you stronger security and complete access over your funds.

#### Conclusion

Cold storage wallets are vital to holding assets safely and securely over long periods of time. Storing your crypto in cold storage is like holding gold in secure vaults. The funds may not be as accessible when compared to hot wallets, but they are protected with a greater degree of security.

When it comes to Ergo, users currently have two cold storage options available: the Ergo paper wallet and the offline Ergo Android wallet. With Ledger integration in the near future, those who use the Ergo blockchain will soon enjoy another option for keeping their private keys offline.
