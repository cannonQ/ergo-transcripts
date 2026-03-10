---
title: "Ergo General Chat — 2023-W13"
date_start: "2023-03-27"
date_end: "2023-04-02"
type: telegram_weekly
channel: general
week: "2023-W13"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W13 Summary

## Key Topics Discussed

- **Rosen Bridge Public Beta Launch**: The Rosen Bridge entered public beta testing on both Ergo and Cardano with soft-launch tokens. Watchers and guards are configured, final testing underway. Plans include deploying assets page, connecting to rosen-api, and acquiring additional guards before full public launch (~1 month timeline). [msg#376256, msg#377042]

- **Dexy Stablecoin Development**: kushti updated simulations and payout contract, with whitepaper update and video planned. Testnet deployment largely complete. [msg#376548-#376550]

- **Quantum Computing & Post-Quantum Cryptography**: Discussion of whether Ergo's Sigma protocols are vulnerable to quantum computers. Consensus that concrete changes are premature until quantum threat is imminent; better to monitor developments and plan migration strategy if needed. [msg#375838]

- **Ergo Explorer Search Functionality**: Known issue with search function being broken for extended period. Dmitry Usov flagged for fix. [msg#376807-#376814]

- **Nautilus Wallet Price Display Issues**: Some users reported missing ERG/fiat price conversions. Root cause identified as API delays or explorer connectivity — switching to non-default explorer/GraphQL endpoints (e.g., Boris's nodes) resolved issues. [msg#376529-#376546]

- **Block Time & Speed Improvements**: Community discussion on whether Ergo should reduce 2-minute block time. Consensus that 2 minutes is appropriate; speedups best addressed via sidechains, layer 2, or rollups rather than L1 changes. Applications dependent on block height/timestamp create compatibility constraints. [msg#376881-#376905, msg#376688]

- **Spectrum Finance DEX & Order Books vs. AMMs**: Detailed explanation of order book design (Trade House) vs. AMM (Spectrum) — order books offer transparency, full control, and arbitrage opportunities; AMMs offer liquidity but expose to impermanent loss. Both coexist as complementary tools. [msg#376972 via qx()]

- **Satergo Wallet Updates**: Upcoming release includes Windows installer, Ergopay support, Ergo address links, Ledger support, deeper node configuration, transaction history recognition (DeFi labeling), all fiat currencies via CoinGecko. ETA: end of next week. [msg#375882-#375884]

- **Paper Wallets & QR Restoration**: HQΣr proposed adding QR code scanning to restore paper wallet mnemonics for gift cards and peer-to-peer tipping use cases. Anon_BR and MrStahlfelge agreed to implement mnemonic string QR feature over following week. [msg#376608, #376628, #376634]

- **ChainCash Peer Network**: kushti explained ChainCash as peer-to-peer sovereign agents creating and accepting money per personal filters, using blockchain as enforcement for agreements — opens possibility for different onchain contract types and monetary universe exposing agreements via contracts. [msg#376616-#376623]

- **Airdrop Transaction Limits**: Current 96KB block size limit allows ~1,000-1,500 recipients per airdrop tx (previously could do 10k). Multiple txs can be chained. [msg#376313-#376319]

- **Ergo Ecosystem Growth & Exchange Listings**: Discussion on Binance/Kraken listings vs. organic ecosystem development. Consensus: build strong foundations and adoption will follow; avoid overcommitting treasury to questionable partnerships. Rosen Bridge and yield farming identified as key catalysts. [msg#376731-#376747]

- **Ledger Support Status**: Ergo app requires developer mode on Ledger; not in standard Ledger Live. Works with Nautilus wallet. Initial dev faced setback; support still pending full mainline integration. [msg#377274-#377283]

- **Whale Alert & Notification Bot**: Kaching Twitter/Telegram bot no longer maintained. Pulsarz developing replacement with telegram command interface (/register, /list, etc.) and mempool scanning; basic functionality working, token support and polish planned for following week. [msg#377083-#377189]

- **Rosen Bridge Incentives & Operations**: Rosen uses test version of incentive tokens for guards/watchers. Watchers relatively simple to set up; guards require more technical knowledge. Finality depends on source chain speed (BSC faster than Bitcoin, for example). [msg#376929-#376960, msg#377042]

- **Ergo Mixer (Ergomixer)**: Mixer is p2p peer-to-peer exchange contract, not centralized service like Tornado Cash. Creates ring signatures via smart contracts; no central killswitch possible or needed on UTXO model. Dev is anonymous. [msg#377214-#377271]

- **Multisig Wallets & Minotaur**: Minotaur requires M-of-N signatures; partners must provide keys upfront. TX approval flows through signers in succession. No way to mandate specific key holder approval. [msg#377362-#377370]

---

## Important Decisions or Announcements

- [@kushti_ru, msg#376548-#376550, 2023-03-30]: Dexy simulations updated, payout contract being reworked, whitepaper and video updates planned.

- [@MHS_SAM, msg#376256, 2023-03-29]: Rosen Bridge public beta configured with watchers, guards, test tokens. Final tests ongoing; assets page WIP; soft launch tokens to be distributed to testers; ~1 month to public launch pending guard acquisition.

- [@Andy L, msg#376356, 2023-03-29]: AMA time change for 2023-03-30 to 16:00 UTC (3 hours later than normal) due to scheduling constraints.

- [@glasgowm, msg#376003, 2023-03-28]: Next Rosen Bridge connectors in development: BTC, BSC, ETH. Wrapped ERG on other chains improves market access.

- [@Aberg Satergo dev, msg#375860-#375861, 2023-03-27]: EU lawmakers voting on limited ban on self-hosted crypto payments — sentiment: "Lately it feels like all the EU is doing is coming with terrible ideas."

- [@qx(), msg#376137-#376138, 2023-03-28]: Sigmanauts onboarding documentation shared — Google Doc with program details.

- [@Armeanio, msg#376884, 2023-04-01]: "Scaling on L1 is a bad idea long term imo" — advocates for sidechains/L2 solutions.

- [@Dmitry Usov, msg#376814, 2023-04-01]: Ergo Explorer search function will be fixed.

- [@Anon_BR Σ, msg#376628, msg#376634, 2023-03-31]: Paper wallet QR restoration feature to be implemented over next week (mnemonic string format).

- [@Pulsarz, msg#377189, 2023-04-02]: Whale Alert bot with telegram integration — basic functionality working, polish and token support next week.

---

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig, msg#376495): How accurate is ChatGPT's generated ErgoScript for posting multiple transactions?
  **A** (@Glasgow, msg#376497-#376499): Multiple issues — createProof, getTransaction, TxUtil.createTx, serialize, encode58 don't exist in ErgoScript; these are Appkit functions (Scala). ErgoScript defines spending conditions only; use Appkit (JVM SDK) to construct and sign transactions for submission.

- **Q** (@Misfit Toy, msg#375920-#375922): Why is Ergo GPU-focused vs. Monero's RandomX (memory/floating-point/branch-prediction hard)?
  **A** (@Glasgow, msg#375926): RandomX more ASIC-resistant but susceptible to botnets. (@qx, msg#375938-#375941): GPU targeting aimed at miners being stakeholders and capturing existing hash market.

- **Q** (@Unknown, msg#376002): Should Ergo support wrapped ERG on other chains (BSC, ETH)?
  **A** (@Glasgow, msg#376003): Yes, next connectors planned. Wrapped tokens improve market access.

- **Q** (@Hassen, msg#376938-#376949): Best wallet for Ergo with Ledger support?
  **A** (@HQΣr, @Pulsarz, msg#376940, #376955): Nautilus or SafeW work with Ledger. Ergo app in dev mode on Ledger (both buttons when pending review). SafeW has more advanced features; Nautilus simpler. [msg#376952-#376961: Ledger often disconnects initially; spam clicking works or restart Ledger app].

- **Q** (@Flying Pig, msg#376547): Why does Nautilus use explorer for transaction submission instead of nodes (more centralized)?
  **A** (@Aberg Satergo dev, msg#376558): Browser extensions need HTTPS; most nodes don't have HTTPS. (@qx, msg#376563-#376565): HTTPS requests cannot load HTTP content (mixed content policy). (@MrStahlfelge, msg#376566): Nautilus explorer relay requirement confirmed.

- **Q** (@Unknown, msg#376983): Is ERG supply truly capped?
  **A** (@Unknown, msg#376985-#376988): Yes, hard cap written in code; no more ERG can be minted. (@A P, msg#376986): Confirmed in protocol. (@Pulsarz, msg#376995): Hard max supply is real (comparable to Bitcoin's 21M cap).

- **Q** (@Siavash, msg#376765): What's the difference between Rosen Bridge and Spectrum?
  **A** (@qx, msg#376767): Spectrum is a DEX for Ergo native assets. Rosen bridges multiple chains (currently Cardano) and can wrap tokens; working on sidechain for direct Cardano-to-Ergo swaps (longer timeline). (@qx, msg#376775): Rosen requires only multisig wallet from other chain — minimal requirements.

- **Q** (@A, msg#377321-#377341): Can wallets prevent receiving unsolicited tokens (spam)?
  **A** (@A): Wallet-side "junk folder" filtering could work. Currently tokens must be manually burned. Not urgent but could matter at scale.

- **Q** (@K Chan, msg#377308): Can Ergo handle 10k transactions in a single block given 8MB limit?
  **A** [No response recorded; remains open question].

- **Q** (@qx, msg#376930, 2023-04-01): How does Rosen Bridge incentive system work?
  **A** (@MHS_SAM, msg#376934, msg#377037): Test version of incentive tokens in use; example transaction trace provided showing lock, watcher commitments, trigger, repayment, and reward flow.

---

## Links Shared

- [Ergo Weekly Developer Update (2023-03-26)](https://youtu.be/mhs0hcHk8B4): Node 5.0.8, Rosen Bridge, UTXO Set Snapshot, Oracles v2, Dexy updates.

- [The Sigma Update (ep 12, part 1)](https://youtu.be/uns0WxUZVZ0): CW & qx() interview Gazza (Spectrum Finance).

- [The Sigma Update (ep 12, part 2)](https://youtu.be/M1u7EiketqM): kushti discusses SigmaFi, GridBots, DuckPools.

- [ZenGate March Community Update](https://youtu.be/el1br0n8mZQ): Real-world application of Palmyra via Chainlink partnership.

- [Satergo Discussion Telegram](https://t.me/Satergo): Wallet development updates.

- [ErgoPad Dashboard](http://ergopad.io/dashboard): Track & manage ERG holdings.

- [Ergo Documentation — Contribute](https://docs.ergoplatform.com/contribute/): Access to logos, images, resources.

- [Ergo Platform Blog — Sigmanauts Programme](https://ergoplatform.org/en/blog/the-sigmanauts-programme/): Program overview.

- [Sigmanauts Onboarding Doc](https://docs.google.com/document/d/1J6PdyyxoEEqI0nEr64ZZBGU4Lkr8Cr37GqNSs4qHo7Q/edit): Detailed program info.

- [Ergo Education Event](https://twitter.com/ErgoChampions/status/1642176908824653829): Scheduled for 2023-04-02.

- [Ergcube Wallet Directory](https://ergcube.com/index.php?do=cat&category=wallets): Curated list of Ergo wallets.

- [Sigmaverse Ecosystem Overview](https://sigmaverse.io/): Visual ecosystem map.

- [ErgoUtils Auction House](https://ergoutils.org/): Auction/option tool.

- [ChainCash Repository](https://github.com/kushti/chaincash): P2P monetary system code.

- [ChainCash Explanation Video](https://youtu.be/NxIlIpO6ZVI): Visual walkthrough.

- [Dexy Stable Testnet Deployment](https://github.com/kushti/dexy-stable/blob/master/spec/deployment.md): TestNet specs & transaction IDs.

- [Ergo Explorer](https://ergoexplorer.com/): Official block explorer (note: search function broken during this week).

- [Whale Alert Bot — Ergo](https://t.me/ErgoWhaleAlert): Telegram channel for large transaction alerts.

- [Ergo Marketing/RT Coordination Telegram](https://t.me/+UK_XV2FBqY8zMjg0): Organized tweet coordination & content sharing.

- [Earning ERG in 2023 and Beyond Blog Post](https://ergoplatform.org/en/blog/Earning-ERG-in-2023-and-Beyond/): Overview of yield opportunities.

- [Rosen Bridge Transaction Example](msg#377037): Public testnet transfer trace showing lock → commitments → trigger → repayment → reward flow.

- [VXTwitter — Rosen Bridge Public Beta Launch](https://www.vxtwitter.com/crandano/status/1640931520801124353): Community announcement.

- [Sigmanauts Twitter Handle Change Announcement](https://twitter.com/sigmaverse_ergo/status/1642195391075749891): April 1 rebrand (humorous).

---

## Unresolved Questions

- **Ledger app mainstream release timeline**: Currently in dev mode only; unclear when full Ledger Live integration will occur. [msg#376949]

- **Spectrum Finance sidechain for Cardano swaps**: Working on it, but lengthy development timeline. Details sparse. [msg#376896]

- **Rosen Bridge token economics**: Whether Rosen will have its own token still being finalized. [msg#376779-#376780]

- **Block time reduction feasibility**: Community discussion open on whether faster blocks are worth the complexity; consensus leans toward "no" but technical research ongoing in testnet channel. [msg#376881-#376930]

- **Ergo Explorer search fix ETA**: Flagged for repair but no timeline provided. [msg#376814]

- **Kaching bot source code availability**: Original dev (Ilya from Sigma Valley) hasn't open-sourced; Pulsarz developing replacement but timeline extends into following weeks. [msg#377041, #377083-#377189]

- **Can Ergo scale to 10k tx/block under 8MB limit?**: Question raised but not resolved. [msg#377308]

---