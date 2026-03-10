---
title: "Ergo Developer Chat — 2022-W25"
date_start: "2022-06-20"
date_end: "2022-06-26"
type: telegram_weekly
channel: developer
week: "2022-W25"
source: telegram
message_count: 101
categories: [wallet, ecosystem, technical, community, governance]
key_terms: [Satergo, v0.0.3, release, UI optimization, transaction history, price chart, mobile app, B4X, Visual Basic, wallet creation, address generation, API integration, TabbyPOS, payment terminal, wallet module, transaction receiving, testnet, 5.0 activation, tx cost, staking]
---
# Ergo Developer Chat Summary — 2022-W25

## Key Topics Discussed

- **Satergo v0.0.3 Release**: Desktop wallet with 50% smaller program size, improved UI responsiveness, price charts (24h–max), optimized multi-address selection, keyboard navigation, and improved node downloader.

- **Testnet 5.0 Relaunch**: kushti announced testnet relaunch mid-week with 5.0 activation testing. Luivatra prepared tx cost comparison tests between 4.0.31 and 5.0 for staking scenarios.

- **Java Version Compatibility**: Discussion on building Ergo source code; consensus that Java 8 is minimum required for published jars, Java 11 is latest LTS standard, though language-level support still targets Java 7 for Android/iOS cross-compiler compatibility.

- **P2P Layer Implementation**: Aberg implementing entire peer-to-peer layer in Satergo, including message types and modifiers (transaction objects), with detailed questions about ModifierTypeId (byte) vs ModifierId (byte[32]) serialization.

- **Mobile Wallet Development**: Lee attempted to build Ergo wallet functionality in Visual Basic (via B4X framework) for Android/iOS POS terminal; discussion clarified that direct wallet address generation requires cryptographic key math similar to Bitcoin.

- **Seed Node Resilience**: Discussion on limited mainnet seed peers (176.9.15.237, 213.239.x.x) and vulnerability to DDoS; identified disk failure on node 213. kushti noted testnet port changed in 5.0-RC1.

- **EIP-27 Activation**: kushti indicated eip27 can be activated in testnet if needed; noted 720 confirmations now required (previously inconsistent between mainnet/testnet).

- **Faucet Accessibility**: Request to remove Discord verification requirement from testnet faucet (Captcha sufficient); Moein agreed to remove it for testnet.

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#3277, 2022-06-22]: **Satergo v0.0.3 released** with major UI improvements: 50% smaller binary, transaction history, password protection for sending, multi-address selection, price charts, optimized background operations, token icons, responsive layout, keyboard navigation on seed phrase entry.

- [@kushti khushi, msg#3386, 2022-06-27]: **Testnet relaunch this week** to test 5.0 activation.

- [@kushti khushi, msg#3388, 2022-06-27]: **5.0 activation will be tested on testnet**.

- [@Aberg Satergo dev, msg#3485, 2022-06-30]: **Request to remove Discord verification from ergofaucet testnet** — Captcha was sufficient, Discord wall adds friction.

- [@Moein Zargarzadeh, msg#3629, 2022-07-03]: **Agreed to remove Discord requirement from testnet faucet**.

- [@kushti khushi, msg#3640, 2022-07-03]: **Testnet reset poorly coordinated** — seed node outage, no blog announcement, Explorer on wrong chain, faucet broken; acknowledged server failure was unpredictable.

## Technical Q&A Worth Preserving

- **Q** (@Lee # TabbyPOS, msg#3372): Can I develop a POS terminal to receive ERG using B4X (Visual Basic-like)?
  **A** (@MrStahlfelge, msg#3374–3375): For receiving, you're passive—just need an address. Address generation requires cryptographic key math. Most code similar to Bitcoin; may find Bitcoin libraries for BASIC. If you skip address creation on device, you simplify significantly.

- **Q** (@Lee # TabbyPOS, msg#3372): Do I need to build a wallet module into my POS app?
  **A** (@MrStahlfelge, msg#3374): Receiving is passive (someone else sends to you). You only need an address. For address creation, cryptographic math is required; alternatively, generate addresses offline and import them.

- **Q** (@Aberg Satergo dev, msg#3550): Which Java version for Ergo source code? Tried Java 17 but get sbt errors.
  **A** (@MrStahlfelge, msg#3551–3560): Published jars built with Java 8. Java 11 is latest LTS that works; Java 17 has compatibility issues. Language-level target is Java 7 for Android/iOS cross-compiler support (@MrStahlfelge, msg#3575).

- **Q** (@Aberg Satergo dev, msg#3585): ModifierTypeId vs ModifierId confusion in protocol—are they bytes or byte[32]?
  **A** (@Aberg Satergo dev, msg#3586, self-resolved): Found distinction: ModifierTypeId is `byte`, ModifierId is `byte[32]`.

- **Q** (@kushti khushi, msg#3403): Are consecutive leaf proofs more compact in UTXO trees?
  **A** (@kushti khushi, msg#3403–3404): Yes; proof is a subtree needed to compute new root.

## Links Shared

- [https://api.ergoplatform.com/api/v1/docs/](https://api.ergoplatform.com/api/v1/docs/): Ergo REST API documentation; referenced for wallet creation and balance queries.

- [https://api.tokenjay.app/peers/list](https://api.tokenjay.app/peers/list): Peer list discovery endpoint; swap port to 9052 to find working seed nodes.

- [https://github.com/ergoplatform/ergo/blob/205eabf79806b428f86d4b8c866b4df0581b9458/.github/workflows/ci.yml#L66](https://github.com/ergoplatform/ergo/blob/205eabf79806b428f86d4b8c866b4df0581b9458/.github/workflows/ci.yml#L66): Ergo CI configuration specifying Java 8 build target.

- [https://github.com/Satergo/Satergo/blob/master/wallet-format.md](https://github.com/Satergo/Satergo/blob/master/wallet-format.md): Satergo wallet format specification.

## Unresolved Questions

- **Testnet coordination**: Aberg flagged poor planning for testnet reset—no advance blog post, Explorer pointed to wrong chain, faucet broken. kushti acknowledged but noted server failure was unpredictable; blog post followup unclear.

- **Seed node resilience**: Node 213.239.x.x unavailable (disk failure); risk of DDoS on limited seed peers remains. kushti noted "makes sense to enhance the list in follow-up releases" (msg#3604) but no timeline given.

- **EIP-27 necessity**: kushti indicated conditional activation ("if eip27 is needed in testnet can activate it") but rationale for conditional gating not explained.