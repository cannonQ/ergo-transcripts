# Ergo General Chat Summary — 2022-W26 (2022-06-27 to 2022-07-03)

## Key Topics Discussed

- **KuCoin Mainnet Support & Regulatory Nomenclature**: KuCoin reopened ERG deposits/withdrawals on mainnet. Community corrected media terminology—ERG is the native coin of the Ergo blockchain, not a "token"; ~50 native tokens exist on-chain. [@RETRO, msg#285356, 2022-06-27]; [@Unknown, msg#285300, 2022-06-27]

- **Ergo Fair Launch & Security Classification**: Ergo was fair-launched (no premine, VC investments, or premint). Treasury receives 4% of mined blocks. Legal review concluded Ergo is not classified as a security. Distributed over time via mining, unlike many PoS coins with large premints. [@Unknown, msg#285300, msg#285315, 2022-06-27]

- **Demurrage as Economic Design**: Storage rent (demurrage) recycles old/dormant coins back to miners, providing an alternative to fixed supply cap. Highlighted as advantage over Bitcoin in resilience to exchange insolvency. [@Unknown, msg#285383; msg#286509, msg#286523, 2022-06-27; 2022-07-01]

- **Autolykos GPU Mining Resistance**: Confirmed Ergo remains ASIC-resistant, GPU-only mining. GetBlock pool working on subpool concepts allowing mining rewards in Ergo-native tokens rather than ERG alone, enabling direct project support. [@Unknown, msg#285458; msg#285441, 2022-06-28]

- **EIP-27 Block Reward Reduction**: 12 ERG reduction (one-time event) moved to emission extension contract; normal 3 ERG reduction every 64,800 blocks continues. No further one-time reductions planned. Block reward emission scheduled to complete ~2044. [@kushti khushi, msg#286727, msg#286728; @Flying Pig, msg#286753, 2022-07-02]

- **Dexy Stablecoin Design**: Paper draft available in SigmaUSD channel. Dexy uses oracles and can be pegged to any commodity with price feed. Discussion of hypothetical Costco hotdog peg as stable reference. [@Armeanio, msg#285624; @J, msg#285622, 2022-06-28]

- **Oracle Pools v1 & v2**: Oracle Pool v1 run by EF members and external contributors. Oracle Pool v2 running for Dexy Gold with GORT rewards. Plan to invest capital in building native Ergo Oracles infrastructure as alternative to Chainlink. [@Dan Friedman, context from msg#285624; @Armeanio implied in thread, 2022-06-28]

- **Rosen Bridge Palmyra Use Case**: Rosen Bridge enables smart contract-driven bridging without requiring native support on target chain. Chainlink partnership for proof of reserve via Winter Protocol supports on-chain warehouse receipts for decentralized trade financing. IoT devices (cameras, weight sensors, motion sensors) feed proof of commodity existence. [@Dan Friedman, implied discussion, 2022-07-01]

- **ErgoDEX Token Verification & Scam Prevention**: Implemented verified token list (default display); unverified tokens require manual import. Filtering reduces memetic token spam while preserving decentralization—anyone can create pools, but verified list curates. [@Gazza, msg#286022, msg#286023, msg#286027, msg#286029, 2022-06-30]

- **Speed & Throughput Optimization (Draft Stage)**: Community discussion on potential microblocks, sidechains, and faster confirmations to increase throughput. kushti notes challenges: block height/timestamp dependencies, hard to optimize without concrete application set. Test environment available for parameter tweaking. No consensus path chosen yet. [@kushti, implied; multiple contributors, 2022-07-01]

- **Ergoversary (3-Year Mainnet Anniversary)**: July 1, 2022 marked 3-year anniversary of Ergo mainnet launch. Video marathon released covering diverse topics. [@Andy L, msg#286277; @CW, msg#286347, 2022-07-01]

- **Yoroi Wallet Issues & Migration to Nautilus**: Yoroi experiencing ongoing loading/sync issues. Community strongly recommends Nautilus wallet (Chrome/Firefox extension) as robust alternative. SafeW integrates local mixer via wallet link. [@Glasgow, msg#286137; @Green_Diamond II, msg#286137, 2022-06-30]

- **ErgoHack Judging Transparency & Criteria**: Community feedback on need for formalized judging criteria (5-8 weighted scoring points). Current process perceived as opaque; some winners submitted minimal code. [@J, msg#286421; @Armeanio, msg#286430, 2022-07-01]

- **KuCoin Withdrawal Delays & Rumors**: Post-FTX/Celsius turmoil, unconfirmed rumors of KuCoin insolvency circulated. Multiple users reported 4+ hour withdrawal delays (likely batching). KuCoin issued statement confirming operational status ($150M funding round noted). [@Unknown, msg#285679; @Armeanio, msg#286547, 2022-06-29; 2022-07-02]

- **eUTXO Alliance Formation**: Only two true eUTXO blockchains: Ergo and Cardano. Nervos uses "cell model," Alephium uses "stateful UTXO." UTXO Alliance formed for collaborative research. [@Flying Pig, msg#286469; @Unknown, msg#286472; @CW, msg#286477, 2022-07-01]

## Important Decisions or Announcements

- [@Andy L, msg#286277, 2022-07-01]: Ergoversary video marathon announced, launching 10am UTC with wide range of content topics.

- [@Armeanio, msg#286430, 2022-07-01]: ErgoHack judging feedback and scoring system data can be released; formalization needed.

- [@Gazza, msg#286982, 2022-06-30]: ErgoDEX default token verification repository will implement curated token list via GitHub PR process; unverified tokens importable locally.

- [@Unknown (implicit EF decision), msg#286727, 2022-07-02]: EIP-27 one-time 12 ERG block reward reduction (completed); standard 3 ERG reductions every 64,800 blocks resume; no additional one-time reductions planned.

- [@Unknown, msg#286388, 2022-06-27]: ErgoNation identity verification event #2 scheduled Monday, July 11, 2022, 13:00–13:30 UTC; ΣID setup recommended (requires mixer participation).

## Technical Q&A Worth Preserving

- **Q** (@PalaZ, msg#285292): Where can I find Autolykos algorithm?
  **A** (@Unknown, implied context): Algorithm is central to Ergo's PoW; GPU-resistant by design. See docs/code for full specs.

- **Q** (@Hakan, msg#285634): How can I mine on my own Ergo Full Node (Windows HiveOS)?
  **A** (@Unknown, implied in context): Configure miner to point to node's stratum endpoint; contact Herominers or GetBlock for pool setup guidance.

- **Q** (@J, msg#285424): How can mixing be made more accessible? Should there be a web interface?
  **A** (@Unknown, msg#285425, msg#285427): Non-custodial desktop/local-server model (like SafeW's wallet integration) preferred over web for OpSec. Code refactoring in progress; new mixer version pending before extension implementation.

- **Q** (@Agent 47, msg#285403): When I mix coin in Ergo mixer, what will that coin be, and where can I sell it?
  **A** (@Unknown, msg#285409): Same coin—same ERG. Mixing obfuscates origin/transaction history. Speed depends on available mixing boxes (more participants = faster).

- **Q** (@co met, msg#286468): What are eUTXO-based blockchain projects besides Cardano and Ergo?
  **A** (@Unknown, msg#286472; @CW, msg#286477): Only Cardano and Ergo use explicit eUTXO model. Nervos uses "cell model"; Alephium uses "stateful UTXO." UTXO Alliance collaborative research group formed.

- **Q** (@Michael, msg#286240): How do I upload metadata when minting NFTs on Auction House?
  **A** (@Unknown, msg#286243, msg#286246): Metadata goes in "artwork description" field on Auction House; SkyHarbor parses metadata into property boxes separately. Ensure JSON formatting is correct.

- **Q** (@Edd, msg#286831, msg#286968): Ergo sent from KuCoin to Yoroi wallet not received after 15+ hours; what happened?
  **A** (@Unknown, msg#286832; @CW, msg#286782): Switch to Nautilus (Yoroi unreliable). Check explorer for transaction confirmation. KuCoin experiencing batching delays; withdrawal may still be in progress on their end.

- **Q** (@Mint LkV, msg#287035): When is the next block reward reduction?
  **A** (@CW, msg#287036, msg#287038): ~3 months; track at ergo.watch/emission for exact countdown.

- **Q** (@M J, msg#287048, msg#287050): Can I stake ERG?
  **A** (@CW, msg#287049): Ergo is PoW, not PoS—no native staking. Can provide liquidity on Spectrum DEX, stake ErgoPad, or explore yield options on ergonaut.space/Guides/yield (watch for impermanent loss).

- **Q** (@Luigi, msg#286241): How do I fix "–app-dir requires absolute paths" Linux node error?
  **A** (@Unknown, implied): Use absolute paths (starting with `/`) instead of `~/` in config; e.g., `/home/user/ergo`.

- **Q** (@André, msg#286262): Testnet is down; which version syncs?
  **A** (@Aberg, msg#286263, msg#286264, msg#286265): Testnet blockchain was wiped (new chain). Delete local blockchain, run in new directory with v5.0.0 or later.

## Links Shared

- [https://www.kucoin.com/news/en-kucoin-opens-mainnet-ergo-tokens-deposit-and-withdrawal-services-20220627]: KuCoin mainnet ERG support announcement.

- [https://spookyhunt.netlify.app]: Beta game project with ErgoAuth integration; discord for feedback.

- [https://ergonation.vercel.app/]: ΣID identity verification event platform (co-operated with tokenjay.app).

- [https://ergoplatform.org/en/get-erg/#Wallets]: Official wallet list & resources.

- [https://tokenjay.app/]: SigmaUSD minting service integrated with Ergo Mobile Wallet.

- [https://ergoauctions.org/]: Auction House NFT marketplace.

- [https://www.skyharbor.io/]: SkyHarbor NFT marketplace with metadata parsing.

- [https://sigmaverse.io/]: Ergo ecosystem project directory.

- [https://www.ergoforum.org/t/dexy-usd-simplest-stablecoin-design/1430]: Dexy stablecoin forum proposal.

- [https://github.com/kushti/dexy-stable/blob/main/spec/paper/dexy.pdf]: Dexy specification paper.

- [https://stack.money/?sortField=dev_rank_percentile]: Developer activity ranking tool.

- [https://utxo-alliance.org/]: UTXO Alliance website.

- [https://t.me/utxoalliance]: UTXO Alliance Telegram group.

- [https://twitter.com/janhxie/status/1542099331440087040]: Ergo vs. CKB (Nervos) architect thread comparison.

- [https://miningpoolstats.stream/ergo]: Mining pool statistics & hash rate charts.

- [https://explorer.ergoplatform.com/en/charts/hash-rate?timespan=180days]: Ergo Explorer hash rate chart (180-day view).

- [https://ergo.watch/emission]: Block reward emission countdown & epoch tracking.

- [https://ergonaut.space/en/Guides/yield]: Yield farming & staking guides (non-native).

- [https://chrome.google.com/webstore/detail/nautilus/gjlmehlldlphhljhpnlddaodbjjcchai]: Nautilus wallet (Chrome).

- [https://addons.mozilla.org/en-US/firefox/addon/nautilus/]: Nautilus wallet (Firefox).

- [https://github.com/anon-br/ledger-ergo-js/tree/master/docs]: Ledger Ergo JS documentation.

- [https://youtu.be/bPPNO-V721g]: Glasgow interview (Ergoversary content).

- [https://youtu.be/Jg5IzoqhChI]: Dexy explanatory video (Ergoversary).

- [https://youtu.be/ztLYJumbJY8]: Ergoversary interview (CW link).

- [https://youtu.be/GRPVDdNQYA0]: Ergoversary video content.

- [https://youtu.be/m-AmozMuIyo]: Ergoversary video content.

- [https://youtu.be/ynen1DUHSP8?t=56]: NFT utility discussion video (MrStahlfelge).

- [https://youtube.com/playlist?list=PL8-KVrs6vXLQt19_nnKcbFMMetx7F-CXq]: Ergoversary video marathon playlist (10am UTC launch).

- [https://twitter.com/ergoplatformorg/status/1542756913431007235]: Ergo official Twitter announcement.

- [https://twitter.com/getblok_io/status/1543004064266403841]: GetBlock announcement (subpool development).

- [https://twitter.com/lyu_johnny/status/1543062668051120128]: KuCoin operational status statement (responding to insolvency rumors).

## Unresolved Questions

- **Speed/Throughput Path Forward**: Community drafts exist for microblocks, sidechains, and faster confirmation protocols, but no consensus decision made on implementation. kushti noted challenges with block height/timestamp dependencies and difficulty optimizing without concrete application patterns. Test environment available but awaiting champion/motivation. [@kushti, implied; multiple contributors, 2022-07-01]

- **Native Ergo Oracle Network Timeline**: Dan Friedman indicated plan to invest capital in building Ergo Oracles infrastructure to complement/supplement Chainlink, but no ETA or detailed roadmap released. [@Dan Friedman, implied in discussion, 2022-07-01]

- **KuCoin Insolvency Rumors Resolution**: Unconfirmed reports circulated; KuCoin issued statement but no independent audit or formal clarification released. Community advised caution. [@Unknown; @Armeanio contact attempt, 2022-06-29 to 2022-07-02]

- **ErgoHack Judging Criteria Formalization**: Armeanio acknowledged need to formalize scoring system; timeline/release date for detailed criteria matrix not specified. [@Armeanio, msg#286431, 2022-07-01]

- **Mixer Liquidity & UX Improvements**: SafeW integration and extension implementations discussed but no concrete release timeline. [@Unknown, msg#285427, 2022-06-27]