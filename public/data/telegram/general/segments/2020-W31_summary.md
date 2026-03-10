---
title: "Ergo General Chat — 2020-W31"
date_start: "2020-07-27"
date_end: "2020-08-02"
type: telegram_weekly
channel: general
week: "2020-W31"
source: telegram
message_count: 251
categories: [ecosystem, bridges, wallet, mining, technical, defi, governance, marketing]
key_terms: [CoinEx, listing, trading event, 8000 ERG reward, Call Auction, Cardano, Shelley, Yoroi wallet, integration, stablecoin, DeFi, Ledger, hardware wallet, support, Ergo Foundation, mining, token dump, miner reserves, daily withdrawals, 4.0 release]
---
# Ergo General Chat — 2020-W31 Summary

## Key Topics Discussed

- **CoinEx Listing & Trading Event**: CoinEx exchange listing went live on July 28, 2020 with an 8,000 ERG promotional reward pool distributed by trading volume over July 28-31. The exchange received 254K+ ERG deposits within hours, establishing a new trading venue ahead of previously discussed exchanges.

- **Ledger Hardware Wallet Support**: Implementation is being funded by the Ergo Foundation with target delivery in 2020. Yoroi wallet integration is expected first (EMURGO/IOHK partnership), with Daedalus support following.

- **Cardano & Ergo Partnership**: Cardano recently completed Shelley upgrade and will integrate ERG as the first coin supported in Yoroi wallet. The partnership enables stablecoin, privacy-enabled smart contracts, and DeFi services through Ergo on the Cardano ecosystem.

- **Protocol 4.0 Development**: Final fixes completed for version 4.0, which includes more memory-hard PoW, security fixes, and preparation for soft-fork to improve the contractual layer. Version 3.3.0 (massive wallet rework + external application support) slated for next week release.

- **Compact Blocks & Merkle Tree Optimization**: kushti discovered Ergo has suitable Merkle tree construction for efficient compact blocks (Bitcoin BIP for L0 scalability / faster block propagation) as an alternative to current design.

- **P2P Layer Documentation & NIPoPoWs**: After 3.3.0 release, P2P layer documentation will be prioritized. This enables light nodes and NIPoPoW-based ultra-light nodes to operate on the network, addressing scalability without compromising decentralization.

- **Decentralized Finance Philosophy**: Ergo positioned as "be-your-own-bank" rather than just peer-to-peer money—enabling custom financial protocols with optional privacy preservation on top of digital asset guarantees.

- **Exchange Delisting Discussion**: Community debated whether to request CoinMarketCap/CoinGecko removal of low-quality exchange pairs (Citex). Consensus: CMC/CoinGecko will only delist if community reports are substantial; marking as suspicious requires significant volume of reports.

- **Miner Behavior & Reserve Accumulation**: Analysis of on-chain miner activity shows ~20K ERG daily withdrawals from two major miners with different patterns. Some accumulation noted alongside reserves being held for strategic timing around exchange listings.

- **PoW Algorithm Research**: Community discussion continues on ProgPoW vs. Autolykos improvements. ASIC researchers contributing open-source solutions. kushti expects PoW EIP from Jason before announcing miner voting on protocol changes.

## Important Decisions or Announcements

- [@kushti khushi, msg#41534, 2020-07-27]: Ledger support implementation paid by Ergo Foundation targeting delivery in 2020.

- [@kushti khushi, msg#41535-41536, 2020-07-27]: Ledger implementation is being progressed actively.

- [@kushti khushi, msg#41580-41581, 2020-07-28]: CoinEx listing opened with Call Auction mechanism (UTC times specified). Orders placeable 8:00-8:50, locked 8:50-9:00, trading commenced 9:00 July 28.

- [@kushti khushi, msg#41628, 2020-07-28]: Ergo developers weekly chat scheduled for Wednesday 1 PM UTC on Discord.

- [@kushti khushi, msg#41784-41785, 2020-07-30]: Exchange list updated; P2PB2B and Citex temporarily removed from official listing.

- [@kushti khushi, msg#41851, 2020-07-31]: New blog post published: "Decentralized Exchange Contracts on Ergo" with technical depth for developers.

- [@kushti khushi, msg#41911-41917, 2020-08-01]: Version 3.3.0 complete with wallet rework; infrastructure issues being resolved for testnet release next week. PoW EIP awaited from Jason before miner voting. P2P layer documentation to follow 3.3.0 release. Hints at faster-than-expected PoW developments (cannot provide details).

- [@kushti khushi, msg#41912-41913, 2020-08-01]: 4.0 finalization in progress; discovered compact blocks BIP alternative leveraging Ergo's Merkle tree construction for L0 scalability.

## Technical Q&A Worth Preserving

- **Q** (@Reuben, msg#41687-41688): Unable to access ErgoPow.pdf documentation link—Error 522 on ergoplatform.com  
  **A** (@kushti khushi, msg#41690-41691): Use https://ergoplatform.org/docs/ErgoPow.pdf (updated domain).

- **Q** (@Reuben, msg#41705): Were there plans for switching PoW algorithm?  
  **A** (@kushti khushi, msg#41708): ProgPoW still appears to be the favorite under community consideration.

- **Q** (@Unknown, msg#41763): Will ERG be compatible with Daedalus or Yoroi first?  
  **A** (@Kookster, msg#41765): Yoroi integration is proceeding first since EMURGO is leading the integration work.

- **Q** (@Emm Ess, msg#41883): Any details about the hard fork?  
  **A** (@Unknown, msg#41884, quoting kushti): "Last fix for 4.0 done, now activation parameters to be considered, and also we're going to prepare infrastructure for the new testnet."

- **Q** (@Ollie [THREE Pool], msg#41859): Why was ERG so highly valued at one point / what was EFYT?  
  **A** (@Unknown, msg#41860): Due to ERG's emission schedule—very low supply in the beginning caused early valuation spikes. (EFYT was the pre-rebrand token name before rebranding to ERG.)

## Links Shared

- [https://ergoplatform.org/en/]: Official Ergo Platform homepage.
- [https://github.com/ergoplatform/awesome-ergo]: Community-curated resources repository.
- [https://www.ergoforum.org/]: Official Ergo forum for technical discussion.
- [https://twitter.com/chepurnoy/status/1287348682090848256]: kushti's tweet (content not specified in chat).
- [https://twitter.com/ergoplatformorg/status/1287777728272502784]: Ergo official AMA announcement.
- [https://twitter.com/ergoplatformorg/status/1287878032133369857]: Official ecosystem update tweet.
- [https://twitter.com/emurgo_io/status/1288133470674280448]: EMURGO announcement regarding Ergo partnership.
- [https://twitter.com/SebastienGllmt/status/1288138746827661314]: Sébastien Guillemot's message on Robert Kornacki joining Ergo Foundation.
- [https://announcement.coinex.com/hc/en-us/articles/360046643071]: CoinEx official announcement on ERG listing.
- [https://twitter.com/ergoplatformorg/status/1288201136487501824]: Ergo official update (content not specified).
- [https://twitter.com/jp_koning/status/1288499073205633025]: Referenced economics/market commentary (shared by kushti).
- [https://twitter.com/NagatoDharma/status/1288919040040239108]: Twitter thread on Cardano + Ergo partnership details.
- [https://ergoplatform.org/en/blog/2020-07-31-decentralized-exchange-contracts-on-ergo/]: Technical blog post on DEX contract design.
- [https://www.youtube.com/watch?v=ouLLi_nYScc]: YouTube channel explaining DeFi projects correctly (recommended for oracle solution explanation).
- [https://www.youtube.com/watch?v=GsF05B8TFWg]: Video on hard fork mechanics (humor reference).
- [https://ergoplatform.org/en/exchanges/]: Official exchange listing page (updated regularly with verified pairs).

## Unresolved Questions

- **PoW Algorithm Final Decision**: Community preference leans ProgPoW, but final protocol decision awaits EIP submission from Jason and subsequent miner voting (@kushti khushi, msg#41911). Timeline for vote announcement TBD.

- **Hard Fork Scope & Timeline**: While 4.0 fixes are complete, activation parameters for hard fork not yet finalized. Full roadmap for network upgrade not published as of 2020-08-02.

- **CMC/CoinGecko Delisting Feasibility**: Whether CMC/CoinGecko will delist suspicious exchange pairs remains uncertain—community consensus that substantial organized reporting would be required, but no formal action initiated.

- **Tier-1 Exchange Listing Path**: Community noted that tier-1 exchanges (Binance, Kraken) require community voting or development partnerships; simple fee payment insufficient. No confirmed roadmap shared for tier-1 expansion.

- **Sidechain & Merged Mining Details**: kushti hinted at IOHK/Cardano possibly releasing PoW-based products but "cannot provide details" (msg#41917). Scope and timeline unknown.