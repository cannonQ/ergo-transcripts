# Ergo General Chat — 2022-W31 Summary

## Key Topics Discussed

- **Ledger Hardware Wallet Support**: Community inquiring about Ledger Live integration for Ergo. @Armeanio (msg#293863) confirmed the build is in GitHub, developer was on holiday with expected update the following week. Native support still pending; sideloading on Nano S and support via Waves Exchange as native asset mentioned as alternatives.

- **Rosen Bridge Security & Cross-Chain Bridges**: Discussion on bridge security assumptions following Nomad bridge $190M exploit. @kushti (msg#292770-774) emphasized Ergo's authenticated tree interface for dApps and noted Rosen reduces complexity to multisig on other chains. @CW raised questions about scaling watchers/guards (msg#292776) and sidechain-as-service models (msg#292783).

- **Proof of Useful Work (PoUW)**: Extended community discussion on feasibility and incentive structures. @kushti (msg#292784-788, 292824) noted security definition breakthroughs in Ofelimos paper but highlighted practical issues—miners may exploit or bypass useful work component. @Armeanio (msg#293298-300, 293323-330) skeptical: sees problematic incentives, external party dependencies, and insufficient algorithm specification. @Natanael proposed reinforcement learning examples (chess, data compression, protein folding) but acknowledged verification speed and governance complexity challenges (msg#293348, 293393-414).

- **Layer 2 Solutions & Sidechains**: @kushti discussed plasma, rollups, payment channels (msg#292763-809). @getblok already launched plasma pool; ErgoPad considering staking on plasma. Question of when to use plasma vs rollups vs sidechains remains open design choice (msg#292805-809). Discussion on whether faster blocks benefit PoUW mining or just increase emission pressure (msg#292800-804, 293272).

- **Storage Rent & Native Assets**: @qx() (msg#292937) asked if ERG native assets are mined via storage rent. @Glasgow (msg#292939-941) confirmed miners can claim boxes with tokens if insufficient ERG for rent; referenced EIP #68 in discussion.

- **ErgoPay Adoption & Mobile Wallet Architecture**: @Ilya argued ErgoPay is artificially overcomplicated; questions why backend server required when static frontend + Nautilus pattern works (msg#293097-123). @MrStahlfelge countered that ErgoPay backend enables mobile signing, caching benefits, and separates skillsets (dApp logic vs wallet interaction). Acknowledged that developers implementing ErgoPay found it smooth (msg#293131-132). @Aberg planned browser extension with native messaging to Satergo (msg#293135).

- **Ergo Mixer Usage & Privacy**: @Daniel (msg#293206-207) reported mixer taking many days at slow pace (5 hours for 2 rounds out of 180). @Unknown noted duration depends on pool size; 250 ERG took 3 days to 3 months. @kushti (msg#293271) suggested next mixer version should incentivize liquidity provision like JoinMarket.

- **Dust Attacks & Address Linking**: @Aberg (msg#293548-553) explained dust attacks: small amounts sent to one address hoping it gets combined with other addresses in same transaction, linking addresses together. Privacy compromised if any address tied to identity.

- **Wallet UI/UX & TokenJay**: Discussion on improving Satergo UI—designer Nadi provided sketches without seeking payment (msg#293030-033). @MrStahlfelge maintains mobile Ergo wallet and TokenJay; noted limited adoption of ErgoPay due to MetaMask-style expectations and mobile underestimation (msg#293058). Planning to move both to Mosaik UI (msg#293042).

- **Autolykos ASIC Resistance**: @Glasgow (msg#294028) clarified ASIC-resistant ≠ ASIC-proof; important early for emission distribution but ASICs/FPGAs possible in future (years away at scale).

- **Flash Loans Impossible on eUTXO**: @Glasgow (msg#293919, 293928-930) explained flash loans not feasible on eUTXO model—no on-chain contract triggering; borrower must construct transaction chain using UTXOs from both lending and exploitation protocols; no guarantee same block execution.

## Important Decisions or Announcements

- [@CW, msg#292722, 2022-08-02]: Community discussion scheduled for Tues, Aug 2 at 1pm UTC on Proof of Useful Work and Sidechains in main Telegram channel.

- [@kushti, msg#292802, 2022-08-02]: Autolykos DAG table growth is hardcoded (addressing concern about 3-4GB DAG making older GPUs obsolete post-ETH merge).

- [@Glasgow, msg#293247, 2022-08-03]: ErgoNation identity verification event #3 on Monday 15 Aug 2022, 20:00-20:30 UTC; requires fresh mixed ERG wallet; ΣID system for governance; in cooperation with TokenJay (@MrStahlfelge).

- [@Aberg, msg#293032-033, 2022-08-03]: Plans to compensate designer Nadi for Satergo UI improvements once complete, despite her volunteering.

- [@MrStahlfelge, msg#293053, 2022-08-03]: Mosaik beta UI for AgeUSD dashboard expected within days.

- [@Armeanio, msg#293671-675, 2022-08-05]: Announcing multiple community YouTube channels for decentralized content (7 channels listed); proposing bot for autoposts to telegram→discord/Reddit and potential Sigmaverse community directory (@Glasgow agreed to set up autoposters, msg#293684).

- [@kushti, msg#293269, 2022-08-04]: Node v4.0.37 would reduce storage by up to 2x compared to v4.0.24 after resync; concrete numbers to follow.

## Technical Q&A Worth Preserving

- **Q** (@qx(), msg#292937): Do ERG native assets get mined via storage rent? What happens to NFTs when stagnant wallets have rent collected?
  **A** (@Glasgow, msg#292939-941): Yes, miners can claim boxes with tokens if insufficient ERG for rent. EIP #68 discussing this. https://github.com/ergoplatform/eips/pull/68

- **Q** (@Daniel, msg#292948): Given two Ergo addresses, can someone determine if they belong to same wallet?
  **A** (@Aberg, msg#292949-952): Depends on usage. If any transaction combines boxes from both, they're easily linked. Fresh or carefully separated addresses not linkable. Change address amounts can reveal patterns (e.g., 141.18347 ERG → 100 sent + 41.18347 change).

- **Q** (@Rj, msg#292630): Can Ergo Mobile Wallet add search filter for transaction history by token?
  **A** (@MrStahlfelge, msg#292636): Good idea. (@theta decay, msg#293653): Ergopad dashboard displays this already; cool to see in wallet too.

- **Q** (@Rj, msg#292632): How to filter transaction history to see only trades of specific token in chronological order?
  **A** (@MrStahlfelge, msg#292638): Mobile app fetches prices from Spectrum DEX and SigmaUSD; public API needed for other tokens. (@Unknown, msg#292686): https://api.ergopad.io/asset/price/ergopad (@Unknown, msg#292690): danaides tooling by Leif has tokens and historical price info: https://github.com/ergo-pad/danaides

- **Q** (@Ilya, msg#293065-077): Why does ErgoPay require backend when MetaMask generates/signs transactions without backend?
  **A** (@MrStahlfelge, msg#293066, 293089-095): MetaMask uses centralized server to transport info; AppKit does same (fetches from explorer). Difference is skillset, not backend necessity. Explorer is a backend JSON API. ErgoPay allocates box-finding to dApp because dApp knows which boxes it wants.

- **Q** (@Ilya, msg#293148, 293156-160): Why not accept serialized transaction JSON as wallet parameter instead of backend?
  **A** (@MrStahlfelge, msg#293151-152): Static ErgoPay requests work but 400 chars QR limit constrains density; Sigma-rust can generate compact format. Works for few inputs but fails for users with many small boxes. Centralized server alternative introduces unwanted centralization (contradicts goal to move away from centralized explorer).

- **Q** (@Flying Pig, msg#293237-240): Transaction from 19 July appearing in mempool intermittently 3 weeks later with few thousand outputs—will it be cancelled?
  **A** (@kushti, msg#293268): Likely stuck in v4.0.24 node mempool; too heavy for v4.0.25+ nodes to propagate. Miner can tweak node settings to include it. Recent versions will have less of this issue.

- **Q** (@Siavash, msg#293856): Can we hope for Oracle support for Cardano?
  **A** (@glasgowm, implicit): Rosen Bridge forthcoming; Oracle Pools v1 has EF members and external members; v2 running for Dexy Gold with GORT rewards.

- **Q** (@Cheese, msg#293819): What security risks exist bridging L1↔L2? Lock-up times on Polygon Plasma Bridge—security measure?
  **A** (@CW, msg#292820): Plasma exits can take ~1 week. (@kushti, msg#292828): Not sure what exit means if network busy without it; Ethereum Plasma security model unclear.

- **Q** (@Cheese, msg#293840): What tooling needed for better L2 support beyond Plasma library?
  **A** (@CW, msg#292841): Scaling cookbook comparing solutions with use cases and pros/cons; help devs choose approach for needs.

- **Q** (@Aberg, msg#293116-120, 293135): Can wallet call website via custom URI scheme to return transaction data?
  **A** (@Aberg, msg#293120): Wallet needs way to call website; custom URI can't return data. Proposed browser extension with native messaging to Satergo using IPC protocol for ergo:// URIs.

- **Q** (@Ilya, msg#293089): Why use AppKit to fetch boxes when dApp could use explorer?
  **A** (@MrStahlfelge, msg#293089-090): AppKit fetches from explorer too (both use same API). Core is that building transactions is dApp's job; if dApp knows which boxes to use, why ask wallet to find them?

- **Q** (@DrTwentyOne, msg#293915-920): Can 24-word seed be chosen manually? Last word checksum?
  **A** (@MrStahlfelge, msg#293918): No—last word is checksum. Strongly recommend algorithm selection; randomizer better than manual unless lottery method used. @MrStahlfelge, msg#293924): Wallet warns if checksum incorrect. Bitcoin seed phrase generators (e.g., Electrum) produce valid 24 words with checksum included.

- **Q** (@DrTwentyOne, msg#293996-999): Different Satergo wallet generated when importing 24 words with trailing space?
  **A** (@Aberg, msg#293998): Don't put space at end. (@DrTwentyOne, msg#294009): Confirmed with space = completely different but functional wallet (likely different passphrase derivation).

- **Q** (@Unknown, msg#293917, 293925): Is flash loan possible on Ergo? Chained transactions in same block?
  **A** (@Glasgow, msg#293919, 293928-930): No. Flash loans need on-chain contract triggering during validation (account model). eUTXO requires pre-constructing transaction chain with all UTXOs; no guarantees of same-block execution. Borrowed tokens must be used in separate protocol's UTXOs—requires constructing complex transaction chain with no atomicity guarantee.

- **Q** (@Natanael, msg#293355): In RL-based PoUW (e.g., chess), can miners find better weights forever or must switch problems?
  **A** (@Natanael, msg#293363): Similar to PoW—same miner can stay forever if good enough. Once improvements take too long, equal-quality weights become lottery ticket for random validator selection. After time threshold, new problem/architecture introduced.

- **Q** (@Ile, msg#293371-375, 293397-417): Space of optimal weights limited? How to prevent best weights being found? How verify in non-RL domains (protein folding)?
  **A** (@Natanael, msg#293372-374, 293381, 293420): With complex enough net, space effectively infinite. Data compression example: size to store matters, easy reward (compression ratio), fast to verify. Protein folding not RL problem (no env/opponent). Need reinforcement learning examples for practical verification.

- **Q** (@Ile, msg#293395-397): Who hides test dataset in RL? How verify reinforcement learning?
  **A** (@Natanael, msg#293396-397): RL removes test dataset requirement—pitting agents against each other (e.g., chess player vs best current player) provides inherent verification without private test set.

- **Q** (@Abdulkrem, msg#293979-981): Is ASIC possible on Autolykos v2?
  **A** (@Glasgow, msg#294028): ASIC-resistant ≠ ASIC-proof. First years matter for distribution; eventually ASICs/FPGAs could appear (years away at scale).

- **Q** (@Unknown, msg#293886): Is Ergo Mobile Wallet official? Can use Nautilus/Yoroi seed phrases?
  **A** (@Unknown, msg#293887): Yes, official. Any wallet seed phrase works across all Ergo wallets (BIP39 standard).

- **Q** (@Unknown, msg#294016): How to tip across platforms (Telegram, Twitter, Reddit, Discord)?
  **A** (@Unknown): Use `/t <amount> <token>` syntax. Bot creates wallet; restore seed across platforms (same wallet on all).

## Links Shared

- [https://github.com/ergoplatform/eips/pull/68]: EIP for storage rent miner claiming boxes with native tokens

- [https://api.ergopad.io/asset/price/ergopad]: ErgoPad API for fetching token prices (change "ergopad" to token name)

- [https://github.com/ergo-pad/danaides]: danaides tooling with token list and historical price info

- [https://youtu.be/hPBIBwe2cnQ]: Weekly Ergo AMA with Alex Chepurnoy & Joe Armeanio (Thurs, Aug 4, 1 PM UTC)

- [https://youtu.be/bqUhSGVX4vY]: Profile/interview of @MrStahlfelge by @CW

- [https://ergonation.org/]: ErgoNation identity verification event #3 info (Aug 15, 2022)

- [https://t.me/ErgoNation_announcements]: ErgoNation community chat groups

- [https://github.com/ergo-pad/danaides]: danaides dev tool for tokens/historical prices

- [https://babygrenade.github.io/ergo-tokenautics-frontend/?token=%F0%9F%8D%86%F0%9F%92%A6&commit=58c7757a48af291bb6026b7c6fe97c8e8a13fc15]: Token explorer with multiple token options

- [https://ergoplatform.org/en/blog/Ergo-and-The-Autolykos-Consensus-Mechanism-Part-II/]: Technical writeup on Autolykos ASIC resistance (Part II; Part I also exists)

- [https://github.com/ergoplatform/ergo-wallet-app/blob/desktop/desktop/BUILD.md]: Desktop Ergo wallet build instructions

- [https://github.com/ergoplatform/ergo/blob/master/ergo