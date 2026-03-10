---
title: "Ergo General Chat — 2025-W05"
date_start: "2025-01-27"
date_end: "2025-02-02"
type: telegram_weekly
channel: general
week: "2025-W05"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — Week 2025-W05 Summary

## Key Topics Discussed

### Sub-blocks Implementation & Network Performance
- Sub-blocks development is progressing with a "very rough local miner based devnet" implementation completed and available in a branch [@kushti khushi, msg#543098]. Discussion centered on implications for dApps, mempool behavior, and whether applications need adaptation, with consensus that "if you're sending tx where there's no competition for a box current mempool works fine" [@Flying Pig, msg#542177].
- Block time reduction was debated; concern raised about dependencies on block height vs. timestamp, with implications for storage rent and emission contracts [@kushti khushi, msg#542460-543001]. No final decision announced.

### Demurrage & Monetary Policy
- "Demurrage" and "Ultra-Fixed Money" emerged as key memes for protocol evangelism [@kushti khushi, msg#542467, msg#542458]. kushti announced a townhall (Feb 4, 4pm UTC) on "Monetary aspects of the Ergo protocol: algorithmic monetary policies, demurrage, custom emission contracts" [@kushti khushi, msg#542582].
- Storage rent mechanism discussed relative to Bitcoin UTXO consolidation [@Shiv Chauhan, msg#542480-542510]. Storage rent in Ergo allows miners to collect dust ("dust collection") while normal users cannot, unlike Bitcoin [@kushti khushi, msg#542492].

### Ledger & Hardware Wallet Integration
- **Ledger Live integration passed audit** with one low-level issue fixed; auditor reviewing changes before final report [@Ergo NEWS, msg#543098].
- **Keystone wallet integration** progressing: Firmware mostly done, Rust SDK and Javascript Base SDK awaiting review. Remaining work: Web SDK, Web USB SDK, integration into Nautilus/Satergo [@kushti khushi, msg#543131].

### Version 6.0 Testnet Activation
- Public testnet activation imminent; "if no more issues will be found in next few days, public testnet activation will be started (it will take ~4 days)" [@Ergo NEWS, msg#543098]. kushti confirmed "hopefully 6.0 RC for public testnet will be released today" [@kushti khushi, msg#543835].
- Sub-blocks feature testing being conducted; volunteers needed to "spin up test nets and tweak them" [@kushti khushi, msg#542460].

### Rosen Bridge & Cross-Chain Integration
- **Rosen team final testing Binance Smart Chain integration** [@Ergo NEWS, msg#543098].
- Wrapper token strategy clarified: "rs" prefix indicates wrapped version; send rsERG to Ergo chain to receive native ERG [@Affable Villain, msg#543630].
- Discussion on Solana DEX liquidity for rsERG and potential token launches on Solana redeemable for Rosen on Ergo [@J, msg#543566-543575].

### AI, LLMs & Code Generation
- **Glasgow trained LLM on ErgoScript** available on ergoplatform.com; trained on multiple chats (dev support, development, ErgoScript-support) but hallucinates like any LLM [@Glasgow, msg#542247].
- kushti noted "AI development in regards with code generation is going to be extremely beneficial to Ergo...financial products here do have max density of open-sourced and free solutions" [@kushti khushi, msg#542242-542244].
- Marc the Shark announced collection of ErgoScript data for fine-tuning LLM: https://github.com/The-Last-Byte-Bar/SharkNet/tree/main [@Marc the Shark, msg#543461].

### Ergo as Endgame Crypto
- kushti published forum post "Ergo as the Endgame for Crypto" (https://www.ergoforum.org/t/ergo-as-the-endgame-for-crypto/5076) framing Ergo as "Proof-of-Work commodity layer" and 1000x bigger than oracle equivalents [@kushti khushi, msg#543636, msg#544029].

### Development & Bounties
- **Fleet SDK v0.8.2 released** [@Ergo NEWS, msg#543098].
- **100 open bounties (27,512.25 ERG)** on ErgoDevs/Ergo-Bounties (excluding Keystone integration) [@Ergo NEWS, msg#543098].
- **Blitz trading card game** resumed development with security updates and Ergo wallet query fixes [@Ergo NEWS, msg#543098].

### Wallets & dApp Integration
- **Minotaur v2.4.0 released** with token detail display, animated QR codes, transaction details UI improvements [@kushti khushi, msg#543132].
- **Satergo wallet** preannounced new release [@Ergo NEWS, msg#543098].
- Wallet selection guidance: Firefox → Nautilus or SafeW; iPhone → Terminus or Minotaur (self-build) [@Unknown, msg#543802].

### New Projects & Ecosystem Growth
- **Ergo Index Funds** announced by kushti as a new project similar to ETFs, potentially with tradeable fund tokens and privacy features [@kushti khushi, msg#542536, msg#542551].
- **MewFinance dashboard UI** live with real-time token tracking, DeFi opportunities [@HQΣr, msg#542273, msg#543869].
- **Destiny Protocol** creating prediction pools rather than order book markets [@Ergo NEWS, msg#543098].
- **Satergo integration with Dexy** in progress [@Ergo NEWS, msg#543098].

### Community & Marketing
- **Ergo Meetup in Berlin** mentioned; kushti will be at Consensus (Feb 17–23) in Hong Kong [@kushti khushi, msg#542247, msg#543247].
- **Sigmacast podcast** launching with episodes on Ergo protocol developments [@Unknown, msg#543161, msg#543165].
- **Kraken listing resubmission**: New application submitted per request from Peter Dimitrakos [@qx(), msg#542544, msg#542545].
- **Li3re Prize fundraising campaign** ongoing (deadline Feb 20) for Italian national art competition using Ergo crowdfunding [@Ergo NEWS, msg#543098].

### Trade House & Order Book DEX
- **Trade House order book model** discussed as alternative to AMMs, enabling partial order fills, full slippage control, and peer-to-peer trading [@qx(), msg#542536-542551]. Trade House orders can be partially filled with leftover boxes recreated automatically.

---

## Important Decisions or Announcements

- **[@kushti khushi, msg#543834-543836, 2025-02-01]**: "Happy weekend Ergonauts! I am mostly around during weekend...also hopefully 6.0 RC for public testnet will be released today, fixing some weird issues before the release."

- **[@kushti khushi, msg#542582, 2025-01-28]**: "Spaces or Townhall call next Tue (Feb 4th), 3 or 4 PM UTC, topic: 'Monetary aspects of the Ergo protocol and ecosystem: algorithmic monetary policies, demurrage, custom emission contracts and so on.'"

- **[@Ergo NEWS, msg#543098, 2025-01-29]**: **Ledger integration passed audit** (one low-level issue fixed, awaiting final auditor review); **Rosen final testing BSC integration**; **Fleet v0.8.2 released**; **100 bounties open (27,512.25 ERG)**; **Minotaur v2.4.0 released**.

- **[@qx(), msg#542544-545, 2025-01-28]**: New Kraken listing application submitted per request from Peter Dimitrakos; "we are obliging and jumping through another hoop."

- **[@c8, msg#544072, 2025-02-02]**: **Lilium NFT minting live** (Singleton ID: 84afe6606da6d829bc028d871c9ccedde3d1814978c5ff0c8c7e64af0f8f7847) on https://www.liliumergo.io/buy.

- **[@cannon_q, msg#543025, 2025-01-28]**: Removed off-topic messages from general chat; reminded of channel norms.

---

## Technical Q&A Worth Preserving

### Sub-blocks & Transaction Finality

- **Q** (@Man ish, msg#542167): "After subblocks I will immediately receive token I swap from dex? and immediately receive tokens from other wallet tx?"
  **A** (@c8, msg#542169): "Yes in average case, onchain, but if you are selling something off-chain for a bigger amount, you still want to have a few block confirmations."

- **Q** (@Flying Pig, msg#542172): "I thought dapps would need to be adapted to make use of sub blocks?"
  **A** (@Flying Pig, msg#542176-177): "There are no race conditions for Paideia. If you're sending tx where there's no competition for a box current mempool works fine."

### Block Time Reduction Implications

- **Q** (@kushti khushi, msg#542460): Discussion of block time acceleration effects on timestamp-dependent contracts.
  **A** (@kushti khushi, msg#542460-543001): "Unless that's correct then...so unless that's correct then...so that's interesting" — left open; concerns raised about emission contracts, difficulty adjustment, and security under faster confirmations. Consensus: "if we're talking about worst-case scenarios...that's Ergo's ethos with your thoughts in there when you designed it for sure."

### Storage Rent & UTXO Management

- **Q** (@Shiv Chauhan, msg#542480): "Like its really cheap to consolidate ergo multiple utxos..Do you know or have any solution for bitcoin utxo consolidation"
  **A** (@kushti khushi, msg#542492): "I guess so with storage rent like in Ergo miners can collect dust and normal users cant."

- **Q** (@RETRO, msg#543347-363): User unable to transfer 48 ERG; receiving "too many boxes" error.
  **A** (@cannon_q, msg#543304, msg#543310): "Click 'dApps' inside the mobile wallet → click 'Box Consolidation' → select the main wallet with 61 tokens."

- **Q** (@RETRO, msg#543312): "Why do I have to pay storage rent?"
  **A** (@cannon_q, msg#543314): "You don't have to pay rent, but there are times when there are too many boxes for the wallet to handle...cost is 0.001 ERG." [@MrStahlfelge, msg#543383]: "The error message tells exactly what to do."

### Wallet Node Configuration

- **Q** (@RETRO, msg#543352): "Ergo wallet isn't maintained and supported well like older times...Does [old maintainer] even work for ergo now?"
  **A** (@kushti khushi, msg#543371): "It should work still, if there are some bug fixes or improvements needed please lemme know we will do GH issues and update the wallet."

- **Q** (@qx(), msg#543359): User has many boxes; what to try?
  **A** (@qx(), msg#543359): "Too many boxes yeah, just try sending it in two parts." [@kushti khushi, msg#543372]: "What have you tried. Which node the wallet is working with btw, check in settings."

### Migrate Between Jurisdictions Using Crypto

- **Q** (@Gnawa Pirate, msg#542383): "How do people who are 100% in crypto navigate state laws...if you want to change where you officially live...given they don't have official companies?"
  **A** (@Ergochampion, msg#543199-543243): Cambodia and Laos allow tourist visa entry with low regulation; can pay local company ~$500 to be registered as employee (done legitimately through proper channels). Laos has "BX Trade" — underground USDT/Lao Kip traders offering ~15% premium. **Warning**: Laos and Thailand dangerous for scam risk; Cambodia safer.

### Rosen Wrapped Tokens

- **Q** (@Archer, msg#543627): "When bridging over with rsERG, do you then have to swap rsERG with ERG?"
  **A** (@Affable Villain, msg#543630): "'rs' is the wrapped version. Sending to the original chain unwraps it. ie send rsADA to Cardano and receive ADA. Send rsERG to Ergo and receive ERG."

### Discord/Telegram Bridges & Bot Code

- **Q** (@Unknown, msg#543106, 2025-01-29): "Are you developing a DiscordBridge?"
  **A** (@kushti khushi, msg#543152): "Discord bridge bot? I guess so."

- **Q** (@Unknown, msg#543512, 2025-01-30): "I didn't find the code for the robots, who is the developer?"
  **A** (@Unknown, msg#543631): "It is listed on the site and in the bio of each robot." [@kushti khushi, msg#543616-620]: tgdev bot dev is kusati's friend with support group.

---

## Links Shared

- [https://www.ergoforum.org/t/ergo-as-the-endgame-for-crypto/5076]: kushti's major forum post framing Ergo as PoW commodity layer and crypto endgame.
- [https://www.ergoforum.org/t/ergo-index-funds/5070]: Ergo Index Funds concept announcement by kushti.
- [https://www.ergoforum.org/t/transmute-a-metal-backed-algorithmic-ecosystem-for-decentralized-finance/5066]: Forum discussion on algorithmic ecosystems.
- [https://www.ergoforum.org/t/please-allow-me-to-introduce-myself/5068]: Forum introduction of potential new community member.
- [https://www.chatbase.co/chatbot-iframe/zxB2uzZfYoHIpA98eTzgM]: Glasgow's trained ErgoScript LLM chatbot.
- [https://github.com/The-Last-Byte-Bar/SharkNet/tree/main]: Marc the Shark's ErgoScript data collection for LLM fine-tuning.
- [https://github.com/ergoplatform/ergo]: Ergo main GitHub repository.
- [https://github.com/KeystoneHQ/keystone-sdk-rust/pull/105]: Keystone Rust SDK for Ergo (awaiting review).
- [https://github.com/KeystoneHQ/keystone-sdk-base/pull/185]: Keystone Javascript Base SDK (awaiting review).
- [https://liliumergo.io/buy]: Lilium NFT minting (Walrus DAO collection).
- [https://youtu.be/5A7_guoo0QI]: Ergo-related YouTube video.
- [https://youtu.be/8jpf6ickEnI]: Video related to Ergo protocol discussion.
- [https://mewfinance.com]: MewFinance dashboard and trading platform.
- [https://satergo.com/]: Satergo wallet (macOS, announced new release).
- [https://ergonaut.space/en/Ergo/manifesto]: Ergo Manifesto translations (Arabic now linked).
- [https://www.li3re.com/]: Li3re Prize fundraising campaign (Ergo crowdfunding, deadline Feb 20).
- [https://x.com/ergo_platform/status/1885821616652775645]: Walrus DAO announcement.
- [https://x.com/ergo_platform/status/1885488552391131417]: Ergo Community Town Hall announcement (Feb 4, 4pm UTC).

---

## Unresolved Questions

### Block Time & Performance
- **Should Ergo reduce block time?** Debate ongoing on implications for timestamp-based contracts, difficulty adjustment, and security. No consensus or formal decision reached. Volunteers sought to run 6.0 testnet with tweaked parameters for "scientific observations."

### Wallet Maintenance & Support
- **Ergo Wallet (mobile) ongoing issues**: User (@RETRO) experienced persistent "too many boxes" errors even