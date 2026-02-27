# Ergo General Chat — 2020-W25 Summary

## Key Topics Discussed

- **Cypra Wallet & Multi-Currency Support**: Cypra (led by Dmitry Zuikov, NC) is building a non-custodial multi-currency wallet with BIP-158 filters, privacy focus, and integration of CoinJoin (BTC) and ErgoMix (Ergo with token mixing). Initial MVP targets end of June 2020 for basic BTC/Android support, with ErgoMix mixing planned for October–November 2020. Cypra's team chose UTXO-based design and selected Ergo as first-tier support currency after recognizing alignment with their state machine critique.

- **ErgoMixer v1.0.0 Release**: Anonymous developer released ErgoMixer with improved UI (browser-based, not CLI). v1.0.1 update published mid-week. Token mixing support coming soon. Docker images available for Linux deployment; Windows/macOS binaries still needed.

- **Ergo Node 3.2.7 & ergopool.io**: Version 3.2.7 merged into master with block assembly logic improvements. ergopool.io mining pool operational launch imminent (targeting after 3.2.7 release). Miners voting to increase block cost limit to accept more transactions per block.

- **DeFi & Smart Contracts on Ergo**: kushti noted example contracts on forum: tethered stablecoin, yAssets protocol (decentralized bonds), LETS (local exchange trading system), targeted microloans, zero-interest loans. Emphasized difference from Ethereum due to UTXO model and ErgoScript flexibility.

- **Hash Rate & Network Growth**: Hash rate reached 7.79 TH/s (claimed ATH). Excitement about ecosystem development pace and dense news cycle during June.

## Important Decisions or Announcements

- [@kushti, msg#37428, 2020-06-19T09:50]: Node 3.2.7 merged into master; binary release imminent.
- [@kushti, msg#37431, 2020-06-19T10:16]: "ergopool.io is coming?"
- [@kushti, msg#37432, 2020-06-19T10:16]: Community chat scheduled for Wednesday, June 24th, 13:00 UTC.
- [@Dmitry Zuikov, msg#37076, 2020-06-15T14:06]: Cypra wallet session summary — MVP ETA July 2020, blockchain testnet September 2020, mainnet TBD.
- [@NC, msg#37043, 2020-06-15T14:31]: Cypra ecosystem to be open source, MIT licensed.
- [@NC, msg#37026, 2020-06-15T13:20]: ErgoMix mixing expected October–November 2020 after basic BTC/Ergo support milestone.
- [@kushti, msg#37570, 2020-06-21T08:19]: Future airdrops will require involvement in ecosystem development (e.g., running full node).

## Technical Q&A Worth Preserving

**Q** (@Kookster, msg#37011): Will token mixing be integrated as standard ErgoMix?
**A** (@NC, msg#37017): Yes, planning to integrate CoinJoin for BTC and ErgoMix for Ergo with token mixing.

**Q** (@Unknown, msg#37012): Given Haskell for Cypra, will mobile (Android/iOS) be long-term goal?
**A** (@NC, msg#37023): Android and Linux desktop are major focus now. Haskell is good for cross-compilation; significant optimization work done for mobile privacy requirements.

**Q** (@Unknown, msg#37020): Will atomic swaps work only among Cypra users or with external sources?
**A** (@NC, msg#37031): Manual atomic swap feature; users find external partners, wallet guides coordination. No automatic matching or partial TX exchange initially.

**Q** (@Unknown, msg#37035): What is an indexer in Cypra's architecture?
**A** (@NC, msg#37039): Public node scanning BTC/Ergo blockchains, constructing BIP-158 filters required for wallet operation. Also acts as bulletin board for atomic swaps. Token mining incentivizes indexer operation; miners earn TX fees and token emission.

**Q** (@Dmitry Zuikov, msg#37024): Why own blockchain instead of launching DEX directly on existing chains?
**A** (@Dmitry Zuikov, msg#37030, #37032): Need blockchain to distribute & verify transactions, reward node holders, and implement distributed order book fabric.

**Q** (@Unknown, msg#37048): Does Cypra's model improve atomic swaps for cryptocurrency broadly?
**A** (@NC, msg#37049): Added distributed bulletin board for automatic matching of buyers/sellers. Atomic swap slower than CEX but claims no deployed system currently swaps BTC+USDT via true atomic swaps without intermediate sidechain.

**Q** (@Unknown, msg#37055): Could bulletin-board chain be replaced with state-channel mechanism?
**A** (@NC, msg#37057, #37059): Debated; decided to stick with consensus for now. Acknowledge channel-protocol solution should exist; want fast/robust solution first, continue researching channel approach.

**Q** (@Unknown, msg#37048): What is an indexer?
**A** (@NC, msg#37039): Public node scanning BTC and Ergo blockchains, constructing BIP-158 filters for wallet operation, serving as distributed bulletin board for atomic swaps to prevent DoS.

**Q** (@scalahub, msg#37240–243): What distinguishes Ergo from other cryptocurrencies?
**A** (@scalahub, msg#37250): Key features: UTXO-based (not account), predicate scripts on full transactions/block headers, advanced ErgoScript, storage rent, custom tokens, data inputs, deterministic execution, pool-resistant Autolykos mining, Sigma protocols, lightweight client support (Raspberry Pi).

**Q** (@adi, msg#37573): What might DeFi look like on Ergo? Comparable platforms?
**A** (@kushti, msg#37576–577): Contracts very different from Ethereum due to UTXO model. Examples: tethered stablecoin, yAssets (decentralized bonds), LETS, targeted microloans, zero-interest loans on forum.

## Links Shared

- [ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/]: Welcome to Smart Money blog post (pinned introductory message).
- [github.com/ergoplatform/awesome-ergo]: Awesome Ergo resources.
- [discord.com/invite/kj7s7nb]: Ergo Discord.
- [ergoforum.org]: Ergo Forum (primary technical discussion).
- [twitter.com/chepurnoy](msg#36923, #36963, #36969, #37513, #37574): kushti's tweets on development updates.
- [twitter.com/IOHK_Charles/status/1272574777115340801](msg#36969): Charles Hoskinson tweet (shared, context unclear).
- [twitter.com/Sistemkoin/status/1272848151523753987](msg#37139, #37197): Sistemkoin exchange updates.
- [github.com/bitcoin/bips/blob/master/bip-0158.mediawiki]: BIP-158 filter specification (Cypra reference).
- [explorer.ergoplatform.com/en/charts/hash-rate](msg#37147): Ergo Explorer hash rate chart.
- [ergoforum.org/t/a-modified-version-of-ergomix-and-transaction-with-threshold-signature/239/](msg#37104, #37287): Forum thread on ErgoMixer.
- [github.com/ergoMixer/ergoMixBack/releases/download/1.0.0/ergoMixer-1.0.0.jar](msg#37288): ErgoMixer v1.0.0 binary.
- [github.com/ergomixer](msg#37288): ErgoMixer source code.
- [hub.docker.com/r/ergomixer/mixer](msg#37288, #37295): ErgoMixer Docker image.
- [youtube.com/watch?v=xwnLJHuMx8Q](msg#37326): ErgoMixer video demo.
- [ergoplatform.org/en/blog/2020_03_20_ergo_mixer/](msg#37328): Ergo Mixer blog post.
- [youtube.com/watch?v=-3jRSgjLMzU](msg#37337, #37577): Smart contract possibilities video (EMURGO Research).
- [ergopool.io/](msg#37431, #37478): Ergo mining pool website.
- [ergoplatform.org/en/exchanges/](msg#37525): Ergo exchange listing page.
- [ergoforum.org/c/research-and-development/7](msg#37582): Ergo forum R&D category (DeFi examples).
- [ergoplatform.org/en/documents/](msg#37586, #37591): Ergo documentation portal (ErgoScript, whitepaper).
- [explorer.ergoplatform.com/en/charts/total](msg#37588): Ergo total supply chart.
- [explorer.ergoplatform.com](msg#37145): Ergo Explorer general.
- [twitter.com/ergoplatformorg](msg#37297, #37315, #37359, #37439, #37498, #37574): Official Ergo Twitter.
- [twitter.com/emurgo_io/status/1273701060616601600](msg#37359): EMURGO research tweet (linked by Unknown).
- [cypra.io](msg#37078): Cypra wallet website.
- [t.me/cypraio](msg#37080): Cypra Telegram channel.

## Unresolved Questions

- **Cypra Blockchain Security**: NC mentioned using SAT solvers to prevent 51% attack at start, paper planned for future publication (msg#37054). Details not yet available.
- **Atomic Swap Optimization**: NC notes Cypra's atomic swaps will be "significantly slower than centralized exchanges" but faster than CEX withdrawal cycle. No performance metrics provided (msg#37052).
- **ErgoMixer Platform Binaries**: Windows (.exe/.msi) and macOS (.dmg) binaries still needed for easy distribution beyond Docker/JAR (msg#37306–308). kushti noted ways to generate these exist "AFAIK" but not yet implemented.
- **Ergo DeFi Roadmap**: No specific applications named; forum examples given as prototypes. Unclear which projects are actively developing (msg#37576–582).
- **Future Airdrop Mechanics**: kushti indicated future airdrops require ecosystem participation (e.g., running full node), but specifics TBD (msg#37570).
- **Mining Pool Functionality**: ergopool.io launch timing confirmed "coming" but exact date left open (msg#37431–432).
- **Community Chat Platform**: kushti polled whether June 24 community chat should be on Telegram or Discord; Kookster and Unknown favored Telegram and Discord respectively. Resolution not stated (msg#37432–438).