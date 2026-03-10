---
title: "Ergo General Chat — 2025-W07"
date_start: "2025-02-10"
date_end: "2025-02-16"
type: telegram_weekly
channel: general
week: "2025-W07"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2025-W07 Summary

## Key Topics Discussed

- **Oracle Pool v2 Migration**: ERG/USD oracle pool operators successfully updated the pool, enabling transition to Oracle Pool v2. Update took ~20 minutes and was nearly unnoticed, demonstrating operational maturity [@kushti khushi, msg#546101, 2025-02-14].

- **6.0 Testnet Activation**: Ergo protocol 6.0.0-RC2 released with public testnet voting underway. Soft-fork activated in public testnet by week's end [@kushti khushi, msg#546115, 2025-02-15].

- **SigmaSDK 5.0.15 Release**: Enables P2SH, Merklized Finite State Machines, and arbitrary conditions on unconfirmed transactions in ErgoScript [@Ergo NEWS $ERG, msg#545273, 2025-02-10].

- **Sub-blocks Implementation**: First API methods implemented for sub-blocks (currently suitable for local miner-based devnets only) [@Ergo NEWS $ERG, msg#545273, 2025-02-10].

- **Rosen Bridge BSC Support**: Deployment of Binance Smart Chain support begun; Watchers and Guards to set up instances [@CW, msg#545536, 2025-02-11].

- **Ledger Integration Progress**: Firmware mostly complete with minor fixes/testing remaining; Rust SDK and Javascript Base SDK done awaiting review; Web/WebUSB/wallet integration still pending [@Ergo NEWS $ERG, msg#545273, 2025-02-10].

- **ErgoScript Developer Tooling Gap**: Consensus that ErgoScript needs standalone Language Server Protocol (LSP) with Debug Adapter Protocol (DAP) for code navigation, syntax highlighting, and debugging to enable reusable utility libraries [@c8, msg#545372-545379, 2025-02-10].

- **Chain Cash and Free Banking**: Discussion of Chain Cash as transparent alternative to legacy banking; relationship to free banking system design; concerns about reserve opacity and governance alignment [@cannon_q, msg#546062, 2025-02-13].

- **Monetary Innovation and BRICS Currency**: kushti discusses private entities in BRICS working on alternative "BRICS currency" framework with free banking principles and transparent reserves, contrasting with dormant Bitcoin innovation [@kushti khushi, msg#545992-545999, 2025-02-13].

- **Programmable Money Experiments**: kushti states programmable money experiments possible immediately without waiting for 6.0 or sub-blocks [@kushti khushi, msg#546225, 2025-02-15].

## Important Decisions or Announcements

- **Ergo Protocol Reference Client 5.0.25 Released**: Finalized, reviewed, and released [@kushti khushi, msg#545332, 2025-02-10].

- **Ergo Protocol Reference Client 5.1.2 Released**: Identical changes to 5.0.25 but on RocksDB [@kushti khushi, msg#546097, 2025-02-14].

- **Minotaur Wallet 2.4.0 Released** [@Ergo NEWS $ERG, msg#545273, 2025-02-10].

- **Rosen: BSC Testing Complete**: "Issue identified in test scenario on BSC has been successfully resolved, and we have completed final stages of testing" [@Ergo NEWS $ERG, msg#545273, 2025-02-10].

- **ChainCash Contract Updates**: Updates underway with new paper forthcoming; AI successfully producing tests [@Ergo NEWS $ERG, msg#545273, 2025-02-10].

- **Mew Finance Lottery Resumed**: After updates, running lotteries again (Round #41 ongoing) [@Ergo NEWS $ERG, msg#545273, 2025-02-10].

- **Hummingbot DAO Integration Passed**: Rosen forked Hummingbot, built Spectrum DEX connector, obtained DAO vote approval; DAO now maintains integration forward [@Glasgow｜WON'T DM, msg#545278, 2025-02-10].

- **Wednesday AMA Scheduled**: Weekly update and AMA moved to Wednesday Feb 12 at 13 UTC with Dan Friedman and qx() [@Andy L, msg#545535, 2025-02-11].

- **New Decentralized Block Explorer**: nodeview.xyz launched, relies on node only [@Ergo NEWS $ERG, msg#545273, 2025-02-10].

- **Ledger Live App Store Approval Path**: Fuzzing tests requirement completed and submitted; awaits standard Ledger App Store approval (not Ledger Live integration yet) [@Glasgow｜WON'T DM, msg#545337, 2025-02-10].

- **6.0 Soft-fork Activated**: Public testnet soft-fork activation confirmed [@kushti khushi, msg#546115, 2025-02-15].

## Technical Q&A Worth Preserving

- **Q** (@• msg#545360): "To learn ergoscript code have to learn before scala right?"
  **A** (@kushti khushi, msg#545361-545363): "No, ErgoScript is like 100x easier. And different paradigm actually. You are composing a logical statement for spending condition."

- **Q** (@• msg#545365): "If I'm not a coder do you recommend some language to begin or can I begin with the ergoscript directly?"
  **A** (@c8, msg#545369): "All things considered javascript. If you know that will never build a user interface and enjoy working and staying in a console window, then learn scala. You need basic knowledge of a language first. ErgoScript second."
  **A** (@kii, msg#545370-545371): "Not sure if there are ways to test contracts in javascript yet. But i find scala helpful to make sure your contracts are working good. I tend to write a crap tonne of tests when i used to develop ergoscript... very good to find bugs... javascript and ergoscript is the way to go. It's just more universal."

- **Q** (@kii, msg#545373): "whats lsp"
  **A** (@Aberg Satergo dev, msg#545374-545375): "Language server. For syntax highlighting and completion suggestions."
  **A** (@c8, msg#545376-545379): "The critical part is goto definition -> enables utility libraries. Without that we will for ever stay in one script file and rewrite/rediscover same solutions for same problems. LSP AND DAP! (you can debug)"

- **Q** (@Alex, msg#545349-545356): Inquiry about emitting ChainCash tied to marketplace app for community-created digital goods.
  **A** (@cafebedouin.org, msg#545357): "The idea of Chain Cash is you have a chain of guarantees. Everyone that uses it for payment is saying it is worth the face value. The more people use it, the more guarantees it has."
  **A** (@cafebedouin.org, msg#545359): "People tend to use apps because they do something they want. Not because it forces them to do things they aren't already doing." [Philosophical pushback on mandatory currency model]

- **Q** (@kii, msg#545756): "Eli5 nipopows"
  [No direct answer in transcript, but NIPoPoWs referenced in context of non-interactive proofs of proof-of-work for light clients]

- **Q** (@Michael P. Henry, msg#545512): "The new ergo node contains additional compiled versions for Linux. Should I switch to these instead of using the Java version?"
  [Question asked but no explicit answer recorded in chat]

- **Q** (@HQΣr, msg#546102): "Wen can I run the oracle ser????"
  [Question about running oracle pool v2; no direct answer in transcript]

## Links Shared

- [https://youtu.be/fYeueI4UDZw](https://youtu.be/fYeueI4UDZw): Dev update video (Feb 9th)
- [https://www.youtube.com/watch?v=8jpf6ickEnI](https://www.youtube.com/watch?v=8jpf6ickEnI): Dev update episode (Feb 2nd)
- [https://www.youtube.com/@P2Pod](https://www.youtube.com/@P2Pod): New Peer-to-Peer podcast channel
- [https://www.youtube.com/watch?v=5A7_guoo0QI](https://www.youtube.com/watch?v=5A7_guoo0QI): "Cannon, PHP and The Field" P2P podcast
- [https://www.youtube.com/watch?v=-S2rxSMRts4](https://www.youtube.com/watch?v=-S2rxSMRts4): "Crypto can be so disappointing" P2P podcast
- [https://www.youtube.com/watch?v=I4FzoLHz79o](https://www.youtube.com/watch?v=I4FzoLHz79o): "Mining Misconceptions" P2P podcast (latest)
- [https://github.com/ergoplatform/sigmastate-interpreter/releases/tag/v5.0.15](https://github.com/ergoplatform/sigmastate-interpreter/releases/tag/v5.0.15): SigmaSDK 5.0.15 release
- [https://www.ergoforum.org/t/attaching-arbitrary-conditions-to-unconfirmed-transactions/214](https://www.ergoforum.org/t/attaching-arbitrary-conditions-to-unconfirmed-transactions/214): ERG Forum discussion on attaching conditions to unconfirmed TXs
- [https://github.com/ergoplatform/ergo/pull/2189](https://github.com/ergoplatform/ergo/pull/2189): Protocol reference client 5.0.25 PR
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC2](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC2): Ergo 6.0.0-RC2 release
- [https://nodeview.xyz/](https://nodeview.xyz/): Decentralized block explorer
- [https://github.com/The-Last-Byte-Bar/SharkNet](https://github.com/The-Last-Byte-Bar/SharkNet): SharkNet repository for LLM fine-tuning on ErgoScript/Scala Q&A pairs
- [https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.4.0](https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.4.0): Minotaur Wallet 2.4.0 release
- [https://explorer.ergoplatform.com/en/transactions/164cce0f6e6d2162f2f249146c9256cce572c884a6e5a7a44ad51c56c06e826f](https://explorer.ergoplatform.com/en/transactions/164cce0f6e6d2162f2f249146c9256cce572c884a6e5a7a44ad51c56c06e826f): ERG/USD oracle pool update transaction
- [https://github.com/ergoplatform/ledger-app-ergo/pull/31](https://github.com/ergoplatform/ledger-app-ergo/pull/31): Ledger fuzzing tests PR
- [https://github.com/ErgoDevs/Ergo-Bounties/](https://github.com/ErgoDevs/Ergo-Bounties/): Ergo Bounties (35,764.72 ERG available)
- [https://x.com/Luivatra/status/1885444081431490707](https://x.com/Luivatra/status/1885444081431490707): Luivatra notebook on DuckPools SigmaUSD loans
- [https://www.youtube.com/watch?v=r16nibO68E4](https://www.youtube.com/watch?v=r16nibO68E4): Video on PoEM for input sub-block chain sorting
- [https://github.com/ergoplatform/ergo/releases/tag/v5.1.2](https://github.com/ergoplatform/ergo/releases/tag/v5.1.2): Ergo protocol reference client 5.1.2 release
- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.25](https://github.com/ergoplatform/ergo/releases/tag/v5.0.25): Ergo protocol reference client 5.0.25 release
- [https://github.com/Satergo/Satergo/pull/30](https://github.com/Satergo/Satergo/pull/30): Satergo PR updates
- [https://docs.ergoplatform.com/dev/wallets/](https://docs.ergoplatform.com/dev/wallets/): Ergo wallet documentation
- [https://ergowallet.io/](https://ergowallet.io/): Ergo Wallet (desktop versions for Windows/macOS/Linux)
- [https://youtu.be/--5tBLiE1Fk?feature=shared](https://youtu.be/--5tBLiE1Fk?feature=shared): Video clip for kushti appearance search contest
- [https://youtube.com/live/m3MdlXmfj-Q](https://youtube.com/live/m3MdlXmfj-Q): Wednesday AMA live stream (Feb 12)
- [https://x.com/RosenBridge_erg/status/1889403778241028394](https://x.com/RosenBridge_erg/status/1889403778241028394): Rosen Bridge BSC deployment announcement
- [https://x.com/ergo_platform/status/1890997945580834950](https://x.com/ergo_platform/status/1890997945580834950): Ergo Platform dev update tweet
- [https://ergoraffle.com/raffle/show/8c284f0aa6abc8899ce890b7ea099a29058e899fd0f2287e83f06c2779cd52f6](https://ergoraffle.com/raffle/show/8c284f0aa6abc8899ce890b7ea099a29058e899fd0f2287e83f06c2779cd52f6): Li3re Prize crowdfunding raffle
- [https://www.li3re.com/](https://www.li3re.com/): Li3re Prize Italian art competition website
- [https://skyharbor.io/](https://skyharbor.io/): SkyHarbor dApp
- [https://fund.mewfinance.com/contribute](https://fund.mewfinance.com/contribute): MewFinance funding page
- [https://exle.io/](https://exle.io/): ExLE (mentioned in loan context)
- [https://docs.ergoplatform.com/dev/get-started/#ergoscript](https://docs.ergoplatform.com/dev/get-started/#ergoscript): ErgoScript documentation and courses
- [https://docs.ergoplatform.com/dev/stack/frameworks/](https://docs.ergoplatform.com/dev/stack/frameworks/): Ergo development frameworks
- [https://tgdev.io/bot/wikirobot](https://tgdev.io/bot/wikirobot): Wiki robot for Telegram scheduled posting
- [https://app.ergone.io](https://app.ergone.io): Ergo dApp
- [https://ergoauctions.org](https://ergoauctions.org): Ergo Auctions
- [https://duckpools.io](https://duckpools.io): DuckPools
- [https://cruxfinance.io/portfolio](https://cruxfinance.io/portfolio): CruxFinance
- [https://tokenjay.app