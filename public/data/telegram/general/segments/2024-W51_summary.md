# Ergo General Chat — 2024-W51 Summary

## Key Topics Discussed

- **Rosen Bridge Integration & Cross-Chain Development**
  Rosen Bridge reached $207k USD in Cardano→Ergo transfers mid-week. Binance Smart Chain integration is under testing with improved MetaMask support. Discussion of Rosen's design vs theoretical Bitcoin_OS alternatives, with focus on trustless pegging mechanisms for sidechains post-6.0.

- **Sub-blocks & Network Scaling**
  kushti outlined sub-blocks architecture as a modern approach to blockchain scaling, referencing Prism and Parallel PoW research. Sub-blocks enable mobile nodes and faster confirmations. Implementation challenges center on softest possible network upgrades; discussion of naming conventions (input/ordering blocks vs. transaction blocks).

- **Storage Rent & Node Optimization**
  kushti identified RocksDB as more SSD-oriented; storage optimization by pushing blocks to disk (vs. database) proposed in 2022 as alternative. Discussion of pruned vs. full node models and how storage rent design helps prevent bloat.

- **6.0 Release & Demurrage Emphasis**
  kushti confirmed 6.0 activation timeline (releasing "after tomorrow" or Monday from 2024-12-20). Demurrage highlighted as critical feature missing in BlocX fork; kushti stressed demurrage stability over centuries outperforms Bitcoin's fixed supply in monetary terms. Plans to update community on 6.0 and sub-blocks over the weekend.

- **DuckPools Phase 2 IDO & Token Sales**
  DuckPools Phase 2 sale raised ~$31.5k in 22 hours with 16% discount to market (100 ERG = 5,616 QUACKS vs. DEX 4,669). Supports SigmaUSD, SigmaRSV, ERG, and native ADA contributions.

- **MewFinance Christmas Sale & MEW Token Expansion**
  2M MEW tokens available Dec 20 at 0.01 ERG/MEW to strengthen LP. Bundle packs launched; MewMart (formerly MewStore) expanded with Mac Pro M1 sales (570 ERG). Lottery feature added for entertainment.

- **Oracle Pools & Decentralized Trade Finance (Palmyra Context)**
  Armeanio detailed Oracle Pool v1 (EF members + external) and Oracle Pool v2 (running for Dexy Gold with GORT rewards). Chainlink partnership for proof of reserve + on-chain warehouse receipts using IoT sensors (camera, weight, motion sensors) for commodity verification. Plan to build native Ergo oracles using raised capital.

- **Sigmanauts Mining Pool Airdrop & Growth**
  Marc the Shark announced storage rent ERG airdrop (37 ERG total, weekly going forward) — first-ever such distribution. Pool seeking partnerships with Cardano SPOs interested in merge-mined sidechain mining to diversify hash to Ergo.

- **BlocX Fork (Autolykos 2, C++ Rewrite)**
  kushti noted BlocX forked only PoW header structure, rewritten in C++, but critically omitted demurrage. Community discussed sidechain option post-6.0 as superior to independent fork maintenance.

- **Spectrum DEX → ErgoDEX Rebranding**
  Yulius coordinated with CoinGecko to update listing from Spectrum Finance to ErgoDEX; same API, name/logo/URL change only. Gazza_SPF tasked with direct Comet communication.

- **Ergo Book & Community Documentation**
  kushti planning to open Ergo Book for contributors; LouisLibre ⚡️ interested in writing demurrage piece (awaiting structure draft and existing content examples).

- **Modena Art Event & Property Rights in Programmable Money**
  kushti recorded talk "Property Rights in the age of Programmable Money" for Modena phygital art event (Dec 21). Luigi organized event in Modena, Italy; discussion of artists using Ergo blockchain tools.

- **CEX Listing & Access Challenges**
  RETRO (India lead) noted CoinDCX listing declined by Ergo admins (requesting $20k fee); discussion of whether India market (millions with $1 USD + phone) justifies cost vs. Tier 2 exchange momentum.

- **P2P Podcast Revival**
  Episode 5 & 6 released; TMR.ΣRG coordinating Episode 7 scheduling with kushti, Marc the Shark, and others. Audio available on Spotify/Apple Podcasts; community encouraged to rate/review for algorithm support.

- **Demurrage as Monetary Philosophy**
  LouisLibre ⚡️ engaged in extended discussion: gold has tail emission (declining yield from mines), Bitcoin has none (→ supply→0), Ergo has demurrage (constant water analogy). Tariff wars thesis: high trade tariffs (>100%) will drive digital goods transactions to crypto to avoid fiat banking overhead.

- **Hash Rate Distribution & 51% Attack Critique**
  Discussion on r/cc about single pool operator >51% hash control. cafebedouin.org rebutted: Lithos Protocol incentivizes miners to mine within protocol vs. centralized pools; reputational cost of 51% attack defeats purpose.

---

## Important Decisions or Announcements

- [@kushti, msg#534346, 2024-12-20]: 6.0 release "will be released after tomorrow or Monday"
- [@kushti, msg#534612, 2024-12-21]: Will update on 6.0 and sub-blocks over the weekend; planning to open Ergo Book for contributors
- [@Marc the Shark, msg#533651-533652, 2024-12-17]: Airdropped 37 ERG storage rent rewards to Sigmanauts pool members, with weekly distribution going forward (first time ever)
- [@HQΣr, msg#533242, 2024-12-16]: MEW Christmas Sale: 2M MEW tokens at 0.01 ERG/MEW on Dec 20
- [@Σddie Lin, msg#533409-410, 2024-12-16]: DuckPools Phase 2 sale live with 16% discount, supporting SigmaUSD, SigmaRSV, ERG, native ADA
- [@Ergo NEWS $ERG, msg#533431, 2024-12-16]: ErgoHack 9 results: 1st Satergo, 2nd Stable Benefaction Platform, 3rd Last Byte Bar
- [@Armeanio, msg#534011, 2024-12-17]: Rosen Bridge CKB integration discussion opened on Nervos forum
- [@Yulius, msg#533524-546, 2024-12-17]: Spectrum Finance→ErgoDEX rebranding coordinated; CoinGecko confirmed name/logo/URL swap needed
- [@qx(), msg#534406, 2024-12-20]: MewMart Mac Pro M1 ready for shipping (570 ERG)
- [@qx(), msg#534226-227, 2024-12-22]: New Sigma Mart sale: MacBook Pro M1 (570 ERG) with original box

---

## Technical Q&A Worth Preserving

- **Q** (@HelixEvo, msg#534371): "In regards to storage rent. Does ERGO run pruned nodes and also full nodes? Trying to see how the rent helps bloat"
  **A** (@kushti, msg#534373-374): Implied affirmative; storage rent mechanism prevents UTXO set bloat by requiring periodic maintenance fees for dormant boxes.

- **Q** (@Richi [MANA], msg#535219): "After 6.0 trustless bridge between Ergo and Cardano should be pretty easy to do, no? Why talk about bringing BTC when easier task isn't done yet?"
  **A** (implicit/implied kushti context): BTC bridges more publicized for marketing; Cardano sidechain is viable post-6.0 but lower priority than core infrastructure.

- **Q** (@Σddie Lin, msg#534614): "Sub-block = Easy mobile nodes?!"
  **A** (implicit kushti): Sub-blocks enable lighter clients and mobile node participation via faster confirmation mechanisms.

- **Q** (@HQΣr, msg#534135, 2024-12-19): "What meeting?" (re: Cardano package sales in December)
  **A** (unresolved, but context from msg#534010 implies Cardano December sales event)

- **Q** (@Olu, msg#534790-834): Multiple tipping bot clarifications (ErgoTipperBot vs. ERGO TIP BOT, syntax differences)
  **A** (@HQΣr, @c8, others): Demonstrated `/t amount token` syntax; different bots handle different tokens; demurrage affects tip account balances.

- **Q** (@anon_br, msg#533909): Does Nautilus store seed?
  **A** (@anon_br, msg#533909): "Nautilus stores the seed, but it's encrypted, that's why it asks for your password every time you need to sign something."

- **Q** (@HQΣr, msg#533873-883): Can NFT lending be done via UTXO-based delegation (unspent box with lender/borrower registers)?
  **A** (@HQΣr, @Luivatra): Possible but MewFinance lending uses more advanced collateral-lock model. Sigmavalley had working NFT renting contracts (unclear if open source).

- **Q** (@kushti, msg#534338): Is BlocX "developing fast"?
  **A** (@kushti, msg#534338): "Not sure they are developing fast, from checking their code 😁" (suggesting sloppy fork implementation).

- **Q** (@cannon_q, msg#534666): "Can anyone do [sidechain] or need ergo dev/you to complete process?"
  **A** (implicit kushti msg#534659): Post-6.0 Ergo sidechain is best option; anyone can attempt, but requires dev expertise similar to ProgPoW projects.

---

## Links Shared

- [https://www.youtube.com/watch?v=z-MEe8tZ6Wg](YouTube P2P Podcast Episode 5)
- [https://ergexplorer.com/](Ergo Explorer, referenced for transaction verification)
- [https://ergoplatform.org/en/get-erg/#Wallets](Ergo official wallet list)
- [https://mart.mewfinance.com](MewMart store)
- [https://dex.mewfinance.com](MewFinance DEX)
- [https://dao.duckpools.io/ido](DuckPools Phase 2 IDO)
- [https://ergoraffle.com/](Ergo Raffle, official funding channel)
- [https://sigmanauts.com/podcast](Sigmanauts Podcast hub)
- [https://mewfinance.com/sale](MEW Christmas Sale)
- [https://github.com/ergoplatform/oracle-core/pull/329](Oracle Core PR #329, commodities tokenization)
- [https://talk.nervos.org/t/dis-rosen-bridge-connecting-ckb-to-cardano-ergo-and-beyond/8539](Nervos forum: Rosen Bridge CKB integration)
- [https://www.youtube.com/watch?v=gTJyDtuWvUQ](Prism blockchain scaling presentation)
- [https://eprint.iacr.org/2023/1663](Parallel PoW research paper)
- [https://www.sciencedirect.com/science/article/abs/pii/S1389128622000238](ScienceDirect: Blockchain scaling research)
- [https://github.com/ergoplatform/ergo-wallet-app](Ergo Wallet App GitHub)
- [https://docs.ergoplatform.com/dev/wallet/payments/ledger/](Ergo Docs: Ledger integration)
- [https://mastodon.world/@ergoplatform](Ergo Platform on Mastodon)
- [https://www.threads.net/@ergo_platform](Ergo Platform on Threads)
- [https://x.com/Mew_finance/status/1870830187052777676](MEW Lottery announcement)
- [https://vxtwitter.com/chepurnoy/status/1870068614050599157](kushti vxtwitter: BlocX fork commentary)
- [https://open.spotify.com/episode/40H4PhNFPXlSogcI60tH0d](P2P Podcast Episode 6 on Spotify)
- [https://www.modenatoday.it/eventi/arte-metaverso-universo-spacegallery-phi-hotel-canalgrande-21-dicembre-2024.html](Modena SpaceGallery phygital event, Dec 21, Italian)
- [https://github.com/Telefragged/off-the-grid](Off-the-Grid grid trading bot GitHub)
- [https://github.com/hummingbot/hummingbot/pull/7152](Hummingbot PR #7152)

---

## Unresolved Questions

- **Sub-blocks Naming Convention**: kushti considering "input/ordering blocks" vs. "transaction blocks" vs. "voter blocks" (Prism terminology); final terminology TBD.
- **RocksDB vs. Alternative Storage**: kushti noted swaydb attempt in 2022; block-to-disk optimization remains proposed but not implemented.
- **Cardano↔Ergo Trustless Bridge Priority**: Richi raised why Cardano sidechain not prioritized over BTC bridges; kushti did not directly respond on prioritization logic.
- **BlocX Sidechain Viability**: ibilbo69 asked if BlocX (Autolykos 2 fork) could partner with Sigmanauts mining pool; kushti suggested sidechain option post-6.0 as superior, but no formal partnership discussion initiated.
- **CEX Listing Economics for India**: RETRO flagged CoindCX $20k fee as potential blocker; HQΣr questioned if cheaper than Tier 1, but no decision made on funding mechanism.
- **Ergo Book Contribution Process**: kushti plans to share structure draft "in few days" but exact opening timeline unconfirmed (as of 2024-12-18).
- **Mobile Node Feasibility via Sub-blocks**: Confirmation that sub-blocks enable mobile nodes, but no UX/performance benchmarks shared.
- **Oracle Pool v2 Reward Mechanics**: GORT rewards mentioned for Dexy Gold operations, but distribution mechanics not detailed.
- **Palmyra Native Ergo Oracle Build-out**: Armeanio stated plan to use token sale capital to build native Ergo oracles, but timeline and resource allocation unconfirmed.
- **Lithos Protocol GPU Mining Incentives**: cafebedouin.org mentioned Lithos as solution to centralized pool hash concentration, but no 6.0 roadmap integration details provided.

---

## Community Highlights

- **Victus Capital Partnership Outreach** (msg#534715-754): Oluwaferanmi Alao (Business Developer Associate) pitched $500k–$5M strategic partnership with 20–22% product discount in exchange for market making, KOL connections, and user acquisition. Community response: c8 deferred to community funding via Ergo Raffle; HQΣr noted no marketing bags to support VAS proposals; Olu remained engaged and appreciative of ecosystem transparency.

- **Ergoversary/Holiday Activity**: ErgoSanta merchandise sold out in <5 minutes (3 units); ErgoHack 9 winners announced; community gaming (Bober Game Night with Monopoly, Comet rewards).

- **Modena Phygital Art Event** (msg#534600, #534608-613): Luigi on-site in Modena, Italy; kushti's recorded talk on property rights in programmable money; togella (Modena pasta dish) enjoyed; community wishing luck to Ergonauts present.

- **Demurrage Education Push**: LouisLibre ⚡️ engaged in multi-message demurrage vs. Bitcoin comparison; interested in contributing demurrage chapter to Ergo Book; positioning demur