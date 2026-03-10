---
title: "Ergo General Chat — 2022-W23"
date_start: "2022-06-06"
date_end: "2022-06-12"
type: telegram_weekly
channel: general
week: "2022-W23"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W23 Summary

## Key Topics Discussed

- **anetaBTC Mining Subpool Launch**: anetaBTC mining went live on GetBlok.io's subpool on Saturday, June 11th, 2022. Miners could earn wrapped BTC alongside ERG through the subpool mechanism, with discussion of how GuapSwap could enable automatic swaps of mined ERG to wBTC for distribution to miners.

- **Ergo Meetup & Live Event**: An in-person Ergo Meetup occurred during the week with a 4-hour recorded session. Virtual attendance was available via Zoom. CW and other core contributors presented on ecosystem projects and development updates.

- **GPU Mining Post-ETH Merge Transition**: Community discussed GPU mining profitability shifts following Ethereum's transition to PoS. Miners explored Ergo, Alephium, and Kaspa as alternative PoW chains. Wolf9466 shared FPGA miner development details, achieving ~640 MH/s across multiple XCVU35P FPGAs at 234W.

- **Wallet Sync Issues & Explorer Performance**: Users reported balance sync delays in Yoroi and Ergo Wallet (iOS). Issues were traced to explorer API responsiveness rather than node problems. Nautilus and Satergo were recommended as more reliable alternatives.

- **PoW vs. PoS Debate**: Extended discussion on whether Ergo should remain on permanent PoW or consider future migration to PoS. Community consensus: Ergo's design philosophy strongly favors PoW for decentralization, GPU accessibility, and security (kushti originally designed PoS before choosing PoW). NIPoPoWs mentioned as a PoW advantage.

- **Token Burn Mechanics**: Discussion of how tokens can be permanently destroyed in Ergo (excluding token outputs or sending to uncontrolled addresses). GramSwap incident where user tokens were burned due to missing outputs in transaction construction. Burned tokens are gone forever; storage rent recovery does not apply to burned tokens.

- **ErgoDex Nitro Parameter**: Clarification that "Nitro" on Ergo dEX allows faster execution via offchain bots during congestion, with associated cost. Not necessary on quiet network conditions.

- **Satergo Node Setup Issues**: Aberg (Satergo dev) identified that Satergo was incorrectly selecting partial releases marked for testnet only, causing startup failures. Hotfix released; users could manually configure node jar path.

- **anetaBTC Airdrop Load Testing**: eTOSI airdrop from anetaBTC tested Ergo's transaction throughput, initially attempting 10k outputs per transaction but breaking into smaller batches (eventually ~1750 outputs per TX). Successfully distributed to 20k addresses; considered a positive stress test for the network.

- **Comet Subpool & Token Distribution**: NETA mining pool hitting blocks with significant coinbase rewards. Discussion of COMET tokens as companion incentive to NETA. NETA positioned as the mineable utility token; COMET as memecoin with NFT lottery components.

## Important Decisions or Announcements

- [@GetBlok_io, @anetaBTC, 2022-06-06]: anetaBTC subpool mining goes live on GetBlok.io with wrapped BTC distribution mechanism.

- [@CW, msg#280120, 2022-06-06]: Ergo meetup announced on Twitter; virtual + in-person attendance.

- [@Aberg Satergo dev, msg#280683, 2022-06-09]: Satergo hotfix released to address testnet release variant selection bug.

- [@Gazza, msg#280491, 2022-06-09]: Confirmed Ergo will remain on PoW permanently; kushti originally designed PoS chain before deciding PoW superior.

- [@Glasgow, msg#280531, 2022-06-09]: 13 blocks found on NETA/COMET subpool with 3.15M COMET tokens mined; NFT block finder rewards announced.

- [@Chris Ray (Won't DM First), msg#281179, 2022-06-12]: Announced developer education initiative compressing DeCo information into abbreviated timeline; seeking participants.

- [@CW, msg#281199, 2022-06-12]: 4-hour Ergo meetup recording captured; to be edited into segments.

- [@Unknown, msg#281173, 2022-06-12]: Burn warning added to Nautilus wallet UI.

## Technical Q&A Worth Preserving

- **Q** (@Stan, msg#279983): Is there a wallet to log in with secret key instead of mnemonic?
  **A** (@MrStahlfelge, msg#280001): For programmatic transaction sending, ask in #developer-support. JavaScript stack should try AppKit or JavaScript libraries; Java/Kotlin/Scala/Python via AppKit.

- **Q** (@Stan, msg#279993): Sending transactions via ergo-lib-wasm-nodejs and mempool/transactions/submit both return TX ID but no confirmation.
  **A** (@MrStahlfelge, msg#280001): Issue suggests malformed transaction. Recommend asking in #developer-support or #appkit channels with error details.

- **Q** (@Ustin, msg#280244): ergo API sync stops randomly; bestFullHeaderId field missing from https://api.ergoplatform.com/api/v1/info
  **A** (@Unknown, msg#280246): Devs more active on Discord; try @ErgoSupport channel.

- **Q** (@Giufa OnliאΣ, msg#280963): What FPGA models enable mining? Can consumer NEoGeo FPGAs be used?
  **A** (@Wolf9466, msg#280967–968): XCVU35P FPGA does 200+ MH/s; Xilinx E300 with three FPGAs achieves 600+ MH/s. Small gaming FPGAs (NEoGeo chips) are not equivalent; require miner development expertise.

- **Q** (@Giufa OnliאΣ, msg#280974): How do I start mining with FPGA? Are there tutorials?
  **A** (@Wolf9466, msg#280976–978): Requires significant expertise. Start with small FPGA (e.g., LED blink exercises) before attempting miner development. Not beginner-friendly.

- **Q** (@Shiv Chauhan, msg#281324–326): Did eTOSI airdrop achieve single-transaction 20k-output record or split across multiple TXs?
  **A** (@Brandon, msg#281332–333): Airdrop split across 4 transactions (3 failed/cancelled, 1 successful). Sent to ~1800 addresses for ~$4 in fees, demonstrating good throughput efficiency.

- **Q** (@João Campos, msg#280824): What's the best Ergo wallet? Yoroi is problematic.
  **A** (@Molina, msg#280825): Mobile: Ergo Wallet. Desktop: Nautilus. (@Benny also noted Satergo good for full node setup.)

- **Q** (@Dani, msg#281126–134): Ergo Wallet app won't sync; need correct Node URL?
  **A** (@Unknown, msg#281133): Node URL http://213.239.193.208:9053/ works. Explorer was slow; pulling from top (Android refresh) triggers resync.

- **Q** (@Unknown, msg#281208–209): What does "Nitro" mean on ErgoDex swap? Shows 1.2 value.
  **A** (@Gazza, msg#281210–211 & @Armeanio, msg#281224–225): Nitro enables faster tx execution via offchain bots if network congested. Default is safe; extra cost only needed if race conditions present.

## Links Shared

- [sigmaverse.io](https://sigmaverse.io): Ergo dApp ecosystem overview; featured in Dmitry Usov's design update.

- [https://docs.ergodex.io/docs/user-guides/advanced/setup-ergo-bots](https://docs.ergodex.io/docs/user-guides/advanced/setup-ergo-bots): ErgoDex bot setup guide.

- [https://docs.ergodex.io/docs/protocol-overview/fees](https://docs.ergodex.io/docs/protocol-overview/fees): ErgoDex fees and Nitro parameter documentation.

- [https://ergo.watch/emission](https://ergo.watch/emission): ERG block reward emission schedule and correct circulating supply (vs. incorrect CMC data).

- [https://curiaregiscrypto.medium.com/ergo-why-proof-of-work-47c9b25fae70](https://curiaregiscrypto.medium.com/ergo-why-proof-of-work-47c9b25fae70): Medium article defending Ergo's permanent PoW design philosophy.

- [https://github.com/zackbalbin/candy-wallet](https://github.com/zackbalbin/candy-wallet): In-development GUI full node wallet for Ergo.

- [https://golfgl.de/ergopayshowcase/#burn-token](https://golfgl.de/ergopayshowcase/#burn-token): ErgoPay token burn showcase for mobile wallets.

- [https://thierrym1212.github.io/tokenminter/burn.html](https://thierrym1212.github.io/tokenminter/burn.html): Token minter tool with burn functionality.

- [https://ergotutorials.com/](https://ergotutorials.com/): Wallet setup tutorials and guides.

- [https://arxiv.org/abs/2203.00671](https://arxiv.org/abs/2203.00671): Academic paper on maximum flow algorithms (shared without context).

- [https://medium.com/@factchecker9000/nothing-is-worse-than-proof-of-stake-e70b12b988ca](https://medium.com/@factchecker9000/nothing-is-worse-than-proof-of-stake-e70b12b988ca): Critique of PoS systems (Ethereum, Polkadot specifically).

- [https://cafebedouin.org/2021/12/09/why-ergo/](https://cafebedouin.org/2021/12/09/why-ergo/): "Why Ergo?" explainer comparing Ergo to Solana/Ethereum.

- [https://docs.ergoplatform.com/dev/protocol/eutxo/](https://docs.ergoplatform.com/dev/protocol/eutxo/): eUTXO model documentation.

- [https://api.tokenjay.app/peers/list](https://api.tokenjay.app/peers/list): Public Ergo node peer list.

- [youtu.be/0wAfWqgI6Tw](https://youtu.be/0wAfWqgI6Tw): Ergo Weekly Developer Update with CW & Joseph Armeanio (NIPoPoW, Sigma updates, EIP-27, Oracles v2, Node v5.0).

- [https://us02web.zoom.us/j/88516458182 (Password: 2813308)](https://us02web.zoom.us/j/88516458182): Ergo Meetup Zoom livestream (June 11, 2022).

- [@t.me/swampoflife](https://t.me/swampoflife): Swamp Audio (music project) Telegram community.

- [@t.me/SatergoWallet](https://t.me/SatergoWallet): Satergo wallet support Telegram.

## Unresolved Questions

- **Exchange Listing Timeline**: "Tier 1" centralized exchange listing repeatedly mentioned as "coming soon" with last contact June 30th. Multiple unconfirmed rumors (Kraken, Huobi, Binance mentioned). Status remains opaque; no official announcement made during this week.

- **Rosen Bridge / Non-Custodial Bridge Status**: @Jad asked for update (msg#280663); @CW reported testnet status with no recent update from MHS team (msg#280664). No confirmation of mainnet readiness.

- **Ledger Hardware Wallet Support**: Ongoing requests for ETA. Multiple users asked (msg#279938, #280375). No timeline provided; appears to be in development but not prioritized.

- **ErgoDex Token (Spectrum) Launch & Airdrop Criteria**: @RETRO mentioned airdrop coming to liquidity providers but criteria TBD; admin to clarify on Monday (msg#281079). No details on distribution mechanism or token supply.

- **Storage Rent Activation**: Discussion of block reward reduction and storage rent mechanisms mentioned but no implementation timeline discussed.

- **eTOSI Airdrop Transaction Batching**: Unclear if airdrops will consolidate into single mega-transactions or continue splitting. Flying Pig noted technical limitations led to 1750-output batches; no protocol changes mentioned.

- **Layer 2 / Sidechain Roadmap**: kushti mentioned drafts and discussions on sub-blocks vs. sidechains but no concrete decision or timeline. Infrastructure needed for faster confirmations left as future work.