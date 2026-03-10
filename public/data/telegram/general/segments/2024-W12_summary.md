---
title: "Ergo General Chat — 2024-W12"
date_start: "2024-03-18"
date_end: "2024-03-24"
type: telegram_weekly
channel: general
week: "2024-W12"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2024-W12
**Period:** 2024-03-18 to 2024-03-24  
**Messages Processed:** 781  
**Active Participants:** 67

---

## Key Topics Discussed

- **SigmaUSD Protocol Updates**: Discussion on whether to cap mints, burn update keys, or save changes for larger upgrades. Consensus emerging around smaller, incremental updates for easier review and testing. (@Armeanio, @Bruno, @kushti, msg#483476–483553)

- **Gluon Gold (Dexy Gold) Launch**: Testnet deployment imminent with full immutability planned from day 0 (no update keys). GORT buyback contracts already operational for fee distribution. Video demonstration available. (@Bruno, msg#483526–483530)

- **Djed Variant Implementations Across Ecosystems**: SigmaUSD (Ergo), Djed on Cardano (COTI), Milkomeda Osiris, and Zephyr all use the same underlying protocol. SigmaUSD noted as most successful deployment. Zephyr uses dual-oracle approach (latest price + moving average) vs. min/max. (@Bruno, msg#483520–483560)

- **Gluon Gold Oracle Integration**: Two-oracle approach (Shu model) under consideration but not yet finalized. Moving average vs. Kalman filtering debated. Implementation complexity acknowledged as significant. (@Bruno, @Ile, msg#483529–483560)

- **ChainCash Development**: Server design and development continuing. Public group announcement planned. Rust developers being invited to contribute. (@kushti, msg#483517–483555)

- **Ergo-Bitcoin RGB++ Compatibility**: Question raised whether Ergo could implement RGB or RGB++ protocol similar to Nervos. kushti noted some concerns about RGB++ and asked for playable demos. Viewed as potentially doable but questioned if necessary. (@Fkn A Jared, @kushti, msg#482882–482981)

- **Block Speed & Network Optimizations**: Discussion on faster blocks, sub-blocks, and sidechains. Acknowledged that block height-based smart contracts would be affected. Testnet (6.0) available for community experimentation on block time parameters. (@kushti, @qx(), msg#482923–483607)

- **Rosen Bridge as Data Layer**: Potential for Rosen to carry cross-chain price data and oracle information beyond transaction events. Joe Armeanio mentioned in dev updates discussing Rosen as cross-chain data transfer system, not just tx events. (@Jack Σ, @qx(), msg#483722–483732)

- **Trade House (Order Book DEX) vs. AMM**: Order books provide full transparency of depth, liquidity levels, full slippage control, and no impermanent loss risk. Partial order fills and peer-to-peer matching highlighted as key advantages over AMM models. (@qx(), msg#483878 context)

- **Sidechain Merge Mining**: Discussion on trustless pegging, BIP 301 comparison, and mainchain miner rewards for sidechain data delivery. Implementation complexity and security model clarification needed. (@kushti context, multiple messages)

- **Early Mining Fairness & Explorer Issues**: Investigation into blocks 23830–32838 mining distribution. Explorer bugs in early days caused false appearance of blockchain failures; now resolved. Community tooling (ErgoVision) available for wallet mapping/analysis. (@Mewbie, @Glasgow, msg#483372–483390)

- **Wallet Consolidation & UTXO Management**: Community member with 7,000+ unspent boxes (dust attack victim). Minimum box value ~0.001 ERG. Consolidation tools and strategies discussed (Satergo, manual consolidation scripts). (@HQΣr, @Aco, msg#483101–483307)

- **NFT Profile Avatars & Community Integration**: Community members requesting Telegram NFT integration for Ergo-based NFTs. AllcyberpunkCom on Twitter noted as avatar creator. Requested feature: Telegram support for Ergo NFTs as profile pictures. (@Jack Σ, msg#483748–483753)

- **DuckPools Lending Platform**: 100% APY earning rates mentioned for liquidity providers. Decentralized lending infrastructure gaining traction. (@cannon_q, msg#483265)

- **SigmaFi Launch**: Mentioned as new lending dApp alongside DuckPools ecosystem growth. (@CW, msg#483000; @mgPai context)

---

## Important Decisions or Announcements

- **[@Armeanio, msg#483476–483481, 2024-03-22]**: Proposes either capping SigmaUSD mints or saving changes for larger upgrade. Expresses willingness to burn update key eventually.

- **[@kushti, msg#483484, 2024-03-22]**: Willing to propose burning Dexy update keys in ~6 months; actively seeking holders for voting tokens.

- **[@Bruno, msg#483492, 2024-03-22]**: Gluon Gold will be **fully immutable from day 0** — no update keys planned.

- **[@Bruno, msg#483526–483527, 2024-03-22]**: Gluon Gold testnet now live at https://gluon.gold — requires Nautilus Testnet wallet. Frontend still under development.

- **[@kushti, msg#483517–483518, 2024-03-22]**: ChainCash video released; public group announcement coming soon.

- **[@kushti, msg#483544–483548, 2024-03-22]**: DarkSide promised to send Gluon voting tokens soon. Seeking holders with testnet + mainnet node capability and Swagger API knowledge.

- **[@Glasgow, msg#483879–483880, 2024-03-20]**: Gluon Gold testnet bugs being fixed; final internal tests underway. "Matter of days" to launch.

- **[@Yulius Kristianto, msg#482774, 2024-03-19]**: QUACKS token successfully listed on CoinGecko after resubmission.

- **[@Glasgow, msg#482947–482949, 2024-03-20]**: MEXC listing ETA still uncertain; "maybe" first week of April. No official announcement yet.

- **[@TMR.ΣRG, msg#482899–482901, 2024-03-20]**: Ergo described as "smart layer" for Bitcoin — Rosen Bridge enables Layer 2–like functionality without centralization. Term credited to Ile.

- **[@qx(), msg#483841, 2024-03-22]**: "Vote passed. See you all in Vegas!" — Community vote result, details unclear from context.

- **[@Chris Ray, msg#484117–484118, 2024-03-24]**: "Its coming soon. soon mexc" — MEXC listing imminent.

---

## Technical Q&A Worth Preserving

- **Q** (@Z J, msg#482557): "Is there any way for a new user to quickly understand and apply the ergo ecosystem? Just like iOS, an elderly person who has never touched a computer can quickly become proficient."
  **A** (@Glasgow, msg#482559): Linked guide at https://ergonaut.space/en/Guides/yield#explore-yield-generating-strategies-on-ergo with step-by-step progression from wallet setup to DeFi participation.

- **Q** (@Rj, msg#482572): "New chain new infrastructure so devs will have to do more effort adding a new chain than let's say an evm token or eth clone."
  **A** (@Armeanio, msg#482584): Depends on exchange engineers, internal resources, and allocation. Asset addition process has been streamlined internally through repetition; added one asset in a day once.

- **Q** (@cannon_q, msg#483071–483073): Explanation of transaction throughput claims (e.g., "450 transactions for $1" vs. "4M transactions").
  **A** (@cannon_q, msg#483071): 1:1 transactions cost ~0.001 ERG ($0.0022). But ErgoScript allows batching: single transaction with 10,000 outputs costs same 0.001 ERG, making cost-per-output ~$0.00022. Documented example: 10,000 airdrop recipients for 0.0011 ERG total.

- **Q** (@Ioannis, msg#482832–482837): "Is it normal for Ergo Mixer to take so long to catch up with the latest block?"
  **A** (@qx(), msg#483101): On M1 MacBook Pro, taking 2+ hours for synchronization. Suggested installing Satergo or consolidating wallet to reduce box count.

- **Q** (@Fkn A Jared, msg#482882): "Could Ergo consider implementing compatibility with or an alternative to the RGB protocol on Bitcoin, similar to Nervos RGB++?"
  **A** (@kushti, msg#482981, msg#482885): RGB++ implementation "seems doable" per light paper, but concerns exist (linked to Nervos discussion). Questioned necessity: "why is it needed?"

- **Q** (@qx(), msg#483726–483732): Can Rosen Bridge carry cross-chain price/oracle data?
  **A** (@qx(), msg#483727–483729): Currently records transaction confirmation events. Development underway for additional data types. Joe Armeanio mentioned building Rosen as cross-chain data transfer system (not just tx events).

- **Q** (@Affable Villain, msg#483133): "Could you consolidate 7015 boxes in someone's wallet?"
  **A** (@HQΣr, msg#483101–483102): Install Satergo or consolidate wallet. (@Aco, msg#483297): Optimal consolidation found at 2,000 boxes per transaction at 0.00005 ERG/box.

- **Q** (@Aco, msg#483292–483297): "More boxes = need bigger value per box?"
  **A** (@Aco, msg#483297): Confirmed empirically — optimal: 2,000 boxes at 0.00005 ERG per box.

- **Q** (@kii, msg#483135): "Are you looking to just work on a project potentially without getting paid?"
  **A** (No direct response, but context: @Chris Ray, msg#484115 offers Tontine/DID developer role as "mostly charitable contribution unless DAO supports compensation.")

- **Q** (@Mewbie, msg#483315–483321): "What is this smart contract?" [references Bitcoin address bc1q4hn...]
  **A** (@Pulsarz, @HQΣr, msg#483317–483320): Bitcoin address, not Ergo smart contract. 2Miners ERG solo mining pool uses optional BTC payout address.

- **Q** (@ROB, msg#483626): "As someone very new to crypto/blockchain/Ergo with developer background, where do I start?"
  **A** (@Glasgow, msg#483629–483632): Crash courses at https://docs.ergoplatform.com/dev/get-started/#ergo-platform-overview. AI chatbot on https://ergoplatform.org/ trained on Ergo docs. Dev/ecosystem chats available via @ergo_chats.

- **Q** (@digdug, msg#483599): "Is a sidechain unnecessary for sub-blocks? Is the sidechain solely for rewarding miners mining sub-blocks?"
  **A** (No direct resolution in transcript; flagged as open discussion topic.)

- **Q** (@Luivatra, msg#483125–483129): UTXO minimum value constraints in Ergo.
  **A** (@Luivatra, msg#483127–483129): Each UTXO needs 360 nanoerg × byte size minimum (exact constant uncertain). Cannot escape via batch techniques — each box requires ERG. Kudos noted for dust identification technique.

- **Q** (@Aco, msg#483888–483893): Transaction speed/confirmation and explorer API issues.
  **A** (@Aco, msg#483888–483891): Depends on official explorer API; sometimes instant, sometimes slow. SigmaSpace.io has independent implementation for speed. Change output handling complex with privacy mode wallets.

- **Q** (@Alien, msg#484022–484032): "Can a wallet be slashed if someone rugs community?"
  **A** (@qx(), msg#484028–484030): **No.** Ergo decentralization prevents slashing. Community can slow non-devs through mixer monitoring and CEX blocking (if police involved), but no protocol-level censorship. Mixer + DEX contracts = fully irrecoverable if used correctly.

---

## Links Shared

- **[https://ergonaut.space/en/Guides/yield](https://ergonaut.space/en/Guides/yield)**: Step-by-step DeFi participation guide from wallet setup to yield farming.

- **[https://docs.ergoplatform.com/dev/get-started/](https://docs.ergoplatform.com/dev/get-started/)**: Official Ergo documentation with crash courses and platform overview.

- **[https://ergoplatform.org/](https://ergoplatform.org/)**: Homepage with AI chatbot trained on Ergo docs for Q&A.

- **[https://www.ergoforum.org/t/physical-or-digital-gold-simple-insurance-on-ergo/4715](https://www.ergoforum.org/t/physical-or-digital-gold-simple-insurance-on-ergo/4715)**: Forum discussion on gold insurance contracts on Ergo.

- **[https://www.ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660](https://www.ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660)**: GORT dev treasury contract details and Dexy/Oracle Pool bootstrapping discussion.

- **[https://gluon.gold](https://gluon.gold)**: Live Gluon Gold testnet (requires Nautilus Testnet wallet).

- **[https://www.youtube.com/watch?v=fk8ZFvNFDYc](https://www.youtube.com/watch?v=fk8ZFvNFDYc)**: ChainCash announcement video.

- **[https://www.youtube.com/watch?v=IHaOfucxzxw](https://www.youtube.com/watch?v=IHaOfucxzxw)**: Bruno Woltzenlogel Paleo video demonstrating Gluon Gold (Backdrop Build v3).

- **[https://github.com/CryptoCream/ErgoVision](https://github.com/CryptoCream/ErgoVision)**: Wallet mapping tool for transaction analysis and early mining distribution audits.

- **[https://sigmausd.io](https://sigmausd.io)**: SigmaUSD status page.

- **[https://tokenjay.app/app/#ageusd](https://tokenjay.app/app/#ageusd)**: SigmaUSD minting interface.

- **[https://rankmywallet.com/](https://rankmywallet.com/)**: Wallet ranking by ERG holdings (shrimp, guppy, goldfish, etc.).

- **[https://rankmywallet.com/species/ergo](https://rankmywallet.com/species/ergo)**: Ergo species classification chart with holding thresholds.

- **[https://ergo-node-explorer.vercel.app/](https://ergo-node-explorer.vercel.app/)**: Community-built Ergo explorer with simplified in/out format.

- **[https://ergexplorer.com/](https://ergexplorer.com/)**: Official Ergo Explorer (premium features available for 1 ERG: CSV export, Koinly integration).

- **[https://sigmaspace.io/](https://sigmaspace.io/)**: Alternative Ergo explorer with independent API.

- **[https://dex.crooks-fi.com/](https://dex.crooks-fi.com/)**: CruxFinance DEX with swap lottery (first 1,000 swaps; 5% of fees to random winner).

- **[https://cruxfinance.io/tokens](https://cruxfinance.io/tokens)**: Crux Finance token information.

- **[https://cruxfinance.medium.com/crux-