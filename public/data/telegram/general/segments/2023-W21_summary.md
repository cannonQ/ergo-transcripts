# Ergo General Chat Summary — 2023-W21
**Period:** 2023-05-22 to 2023-05-28  
**Messages Analyzed:** 974

---

## Key Topics Discussed

- **Storage Rent Implementation & Mechanics** (msg#392141, #393553)
  Discussion of when storage rent activation occurs and proposals for a "storage rent portal" to help miners validate and collect rent boxes, potentially creating dApp engagement.

- **Non-Recourse Lending Model in SigmaFi** (msg#392928–#392970)
  Clarification that SigmaFi implements P2P loans without automated liquidations on price drops—only triggered by missed payments. Suggestion to rebrand marketing with "No Forced Liquidation" messaging.

- **Mempool Transaction Dropping Behavior** (msg#393632, #393696, #393762–#393775)
  User reported transactions disappearing from mempool unexpectedly; clarification provided that transactions are only dropped if inputs are spent elsewhere or data inputs consumed. Explorer may show inconsistent state but nodes retain TXs per standard behavior.

- **Rosen Bridge & Cross-Chain Integration** (msg#392986, #393656–#393664)
  Updates on Rosen Bridge development: Rollup integration nearing completion, executable binaries for Mac/Windows/Linux forthcoming. Cardano/Koios network testing complete. Community asked when ADA/ERG pools will appear on Spectrum DEX—still in testing phase.

- **DuckPools Lending Protocol Progress** (msg#392168)
  Pool contracts audited with no issues found. Liquidation contract issue under resolution. Partial repayments in progress. Voting contracts being drafted. Full-launch private testing targeted for June 1.

- **Auction House V3 Launch & Issues** (msg#392923, #393515, #393525)
  Auction House V3 went live (msg#393515) but experienced API outages requiring team notification. Mobile UI reported as buggy but acknowledged as expected in beta testing phase.

- **Bitcoin Emission Code & Long-Term Supply** (msg#392600–#392658)
  Deep technical discussion on Satoshi's original code allowing infinite BTC supply with "gold mine discoveries" every 1024 years (BIP-42). Debate on whether this was intentional design or community misunderstanding. Autolykos v1 outpaced by private optimizations within weeks, leading to Merkle Tree Proof algorithm concerns in Firo.

- **Scala Language Barrier for Contributors** (msg#393146)
  @Aberg noted Scala as development barrier; @Pulsarz suggested Rust would be better for new client development, noting sigma-rust has proven valuable to ecosystem.

- **USD-Only / Stable-First Wallet Proposal** (msg#392663–#392702)
  Long-dormant forum idea (2017) to build wallet displaying only USD-denominated values. Discussion on whether Satergo or mobile wallets are better fit. @dayumbbbb volunteered to build PoC, noting demand in Latin America for low-fee stablecoin onboarding.

- **Monero vs. Ergo Privacy Model** (msg#393177–#393214)
  Consensus that transparent L1 (ERG) with privacy on L2 is better for institutional adoption than privacy-by-default (XMR). ETH/XMR atomic swaps unveiled at Monerotopia could enable XMR as private L2. Monero's regulatory kneecapping prevents institutional capital access.

- **PoW vs. PoS Security Trade-offs** (msg#393844–#393857)
  PoW attacks require sustained CapEx + OpEx; PoS attacks only CapEx. Autolykos provides better decentralization per mining unit than ASIC chains. If Bitcoin started as PoS, central banks would dominate.

- **Meme Token & Community Engagement** (msg#393386–#393407, #393828–#393851)
  ErgBass fishing mechanic gaining traction (currently manual TX only). Proposal to include $SNEK and $BANK in Rosen Bridge alongside $HOSKY for free marketing and liquidity redirect.

---

## Important Decisions or Announcements

- [@kushti, msg#392185, 2023-05-22]: **Welcomed new contributor aboard**

- [@Glasgow, msg#392159, 2023-05-22]: **15k ERG worth of assets affected by creation height bug**; Nautilus update includes warning; all affected wallets pinged with NFT notification.

- [@HQ3rr, msg#392132, 2023-05-22]: **Twitter API tier dropped**; free tier now 1,500/month tweets; Pro tier (5,000/month) at $100/month—suitable for bot revival.

- [@qx(), msg#392135, 2023-05-22]: **Rumor discussion restricted**; directive to keep speculation out of main chat.

- [@Unknown, msg#392168, 2023-05-22]: **DuckPools development update**: Pool contracts audited (no issues); liquidation fix in progress; staking/voting contracts draft phase; full-launch private testing June 1.

- [@Cheese, msg#392433, 2023-05-23]: **Lithos development paused**; burnout cited; personal issues taking priority; expects return with renewed passion after break.

- [@Unknown, msg#392905–#392911, 2023-05-25]: **Ergo Summit videos being gathered**; due ~July 1; call for TabbyPOS and community dev videos on EIP-writing and other ecosystem topics.

- [@Jennie D, msg#393515, 2023-05-27]: **Auction House V3 live**; staking already available.

- [@CW, msg#393059, 2023-05-25]: **Ergo Pulse episode delayed**; "rugged by daylight savings"—schedule misalignment mentioned.

- [@Glasgow, msg#393545, 2023-05-27]: **YouTube video released**; link shared (https://www.youtube.com/watch?v=yOdaZvLIyno).

---

## Technical Q&A Worth Preserving

- **Q** (@dayumbbbb, msg#393762): Do transactions not included in next block get dropped? Why drop instead of mempool wait?
  **A** (@Luivatra, msg#393766–#393774): TXs only dropped if inputs spent in another TX or data input consumed. Explorer mempool can show inconsistent state but doesn't reflect true node behavior. Standard mempool retention until fee too low or inputs conflict.

- **Q** (@rubens, msg#393667): How to use Ergo multisig wallet?
  **A** (@Benny, msg#393668–#393669): Minotaur wallet required; official announcement: https://www.ergoplatform.org/en/news/Ergo%E2%80%99s-First-Multi-signature%20Wallet-Has-Been-Launched-by-Minotaur/

- **Q** (@Baba Lowo, msg#393411–#393412): Is there iOS wallet?
  **A** (@lexymon, msg#393413): Minotaur works on iOS.

- **Q** (@dayumbbbb, msg#393127): Did Auction Coin launch in 2019?
  **A** (Implied yes, but discussion shifted to whether to implement it now.)

- **Q** (@HQΣr, msg#393553–#393554): Is storage rent portal with miner validation + dApp auction feasible?
  **A** (@Cheese, msg#393771): Feasible but requires off-chain bot; @Kirat has drafted non-liquidating contracts but not yet implemented.

- **Q** (@Thomas Eh, msg#393755): Why are Cyberverse transactions confirmed in seconds?
  **A** (Implicit: likely instant settlement on L2 or mempool-only; no explicit answer given.)

- **Q** (@dayumbbbb, msg#393779): Can ARK (Async Rollup Kit) be implemented on Ergo before Bitcoin?
  **A** (@kushti, msg#393812): Need to check whitepaper and contracts for affirmative answer; implies possible.

- **Q** (@Unknown, msg#392857): Is anyone developing token list app like TapTools (Cardano)?
  **A** (@HQΣr, msg#393858): Spectrum working on token dashboard (release timeline unknown).

---

## Links Shared

- [https://twitter.com/wublockchain/status/1660514043663372289](https://twitter.com/wublockchain/status/1660514043663372289): Crypto news
- [https://vxtwitter.com/ZengateGlobal/status/1660702433725800449](https://vxtwitter.com/ZengateGlobal/status/1660702433725800449): Palmyra project announcement
- [https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki): BIP-42 infinite Bitcoin supply proposal
- [https://www.ergoforum.org/t/usd-only-crypto-wallet/949](https://www.ergoforum.org/t/usd-only-crypto-wallet/949): Original USD-only wallet forum thread (2017)
- [https://www.ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287](https://www.ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287): Auction Coin proposal discussion
- [https://rpay.app/](https://rpay.app/): Best stable-first wallet UX reference (Ethereum-based, has KYC)
- [https://github.com/rosen-bridge/rollup-plugin-node-wasm](https://github.com/rosen-bridge/rollup-plugin-node-wasm): Rosen Bridge Rollup plugin for Node-targeted WASM
- [https://www.npmjs.com/package/@rosen-chains/cardano-koios-network](https://www.npmjs.com/package/@rosen-chains/cardano-koios-network): Cardano Koios network package
- [https://t.me/ergoplatform/392620](https://t.me/ergoplatform/392620): Hard 21M supply discussion thread
- [https://da-data.blogspot.com/2014/08/minting-money-with-monero-and-cpu.html](https://da-data.blogspot.com/2014/08/minting-money-with-monero-and-cpu.html): Bytecoin/Monero slow mining history
- [https://bitcointalk.org/index.php?topic=740112.0](https://bitcointalk.org/index.php?topic=740112.0): CryptoNote premine scam discussion
- [https://www.nobsbitcoin.com/darkpool-tarpit/](https://www.nobsbitcoin.com/darkpool-tarpit/): Darkpool privacy-preserving pool (Bitcoin); possible on Ergo
- [https://twitter.com/maritsaart/status/1652607506512846848](https://twitter.com/maritsaart/status/1652607506512846848): On-chain NFT Data URI encoding
- [https://youtu.be/lRXYoXzSF4k](https://youtu.be/lRXYoXzSF4k): Full episode coming soon (Ergo content)
- [https://github.com/glasgowm148/ErgoLLM](https://github.com/glasgowm148/ErgoLLM): ErgoLLM support bot & dev docs tool
- [https://www.youtube.com/watch?v=7q3Jq_OvhKY](https://www.youtube.com/watch?v=7q3Jq_OvhKY): Cold wallet alternatives discussion video
- [https://docs.ergoplatform.com/uses/blocked_web/](https://docs.ergoplatform.com/uses/blocked_web/): Blocked web access via Ergo (flip phone compatible)
- [https://twitter.com/chepurnoy/status/1645904554494689280](https://twitter.com/chepurnoy/status/1645904554494689280): kushti's degen idea (context unclear but linked)
- [https://twitter.com/sigmanaut/status/1662243721868394496](https://twitter.com/sigmanaut/status/1662243721868394496): Sigmanauts humor compilation videos
- [https://t.me/ErgoSocials](https://t.me/ErgoSocials): Community marketing group (mentioned for SNEK/BANK bridge coordination)
- [https://t.me/rosenbridge_erg](https://t.me/rosenbridge_erg): Rosen Bridge discussion channel

---

## Unresolved Questions

- **When will Ergo be listed on Tier 1 CEXes (Binance, Kraken)?** (msg#392814, #392815)
  Discussion: Community hasn't demanded it; Binance prioritizes volume over security; easier for CEX to add ERC-20 than integrate new blockchain. No timeline given.

- **What is the exact mempool retention policy for low-fee transactions?** (msg#393775)
  @dayumbbbb asked for block limit documentation; no formal answer provided.

- **Will Rosen Bridge support Monero?** (msg#393848)
  Question raised by @TMR.ΣRG; no response.

- **Can SNEK and BANK be added to Rosen Bridge alongside HOSKY?** (msg#393887–#393903)
  @dayumbbbb proposed for free marketing; @Glasgow noted straightforward addition but requires liquidity on Spectrum. Discussion moved to RosenBridge Telegram; no decision announced.

- **Should Ergo implement layer 2 solutions, sidechains, or microblocks?** (msg#392923–#392960)
  @kushti noted multiple speed-improvement drafts exist post-Ergoversary; discussion to be revived; no path chosen yet. Microblocks vs. sidechains vs. L2 still TBD.

- **What is the optimal tagging/branding for SigmaFi's non-liquidating model?** (msg#392957–#392971)
  @dayumbbbb suggested "Crypto Loans on Your Terms: No Liquidations, No Worries"; @Pulsarz acknowledged need for clearer front-page description but no update timeline given.

- **Will there be an automated version of ErgBass fishing mechanic?** (msg#393386–#393388)
  Currently manual; @Koutelier acknowledged interest (msg#392799) but no timeline.

- **Will Ledger support Ergo directly without workarounds?** (msg#392705)
  @Me celebrated Ledger open-sourcing hardware OS and deferring seed export; no confirmation Ergo support forthcoming.

- **Why was Auction House V3 API down on launch?** (msg#393525)
  Reported but root cause not explained in chat; team notified.

---

## Notable Community Sentiment & Patterns

- **Developer Burnout Acknowledged**: @Cheese's extended break from Lithos signals sustainability concerns in volunteer-driven ecosystem.
- **Marketing DAO Gap**: Multiple mentions of need for independent community marketing group; EF maintains neutrality; @Glasgow pointed to #ErgoSocials as existing channel.
- **DeFi Safety Focus**: Non-liquidating loan model gaining recognition as differentiator; SigmaFi documentation clarity needed.
- **Meme Token Ecosystem Integration**: Organic growth of $COMET, $BASS, $ERDOGE creating engagement; discussion on leveraging for cross-protocol marketing.
- **Cross-Chain Maturity Near**: Rosen Bridge testing advanced; Cardano integration timeline still open.