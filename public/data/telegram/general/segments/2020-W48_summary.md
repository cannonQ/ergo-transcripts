---
title: "Ergo General Chat — 2020-W48"
date_start: "2020-11-23"
date_end: "2020-11-29"
type: telegram_weekly
channel: general
week: "2020-W48"
source: telegram
message_count: 686
categories: [ecosystem, defi, marketing, wallet, nft, technical, mining, governance]
key_terms: [ErgoData, EFYT, sidechain, token snapshot, launch plans, oracle pools, refresh rate, 30 blocks, 2 minutes, datapoints, price manipulation, CMC, CoinGecko, Citex, wash trading, low volume, Hotbit, hidden orders, wash trading bots, market manipulation]
---
# Ergo General Chat Summary — 2020-W48 (2020-11-23 to 2020-11-29)

## Key Topics Discussed

- **ErgoData sidechain status**: Originally planned as a data-centric blockchain, ErgoData is now a concept without active development. It will only launch if users demand it and will likely be a sidechain of Ergo rather than a separate chain. EFYT holders received a snapshot, but no token distribution is scheduled (msgs #66068–#66101).

- **Oracle Pools datapoint refresh rate**: Oracle datapoints refresh every 30 blocks with an average block time of 2 minutes, providing ~60-minute refresh intervals in current configurations (msg #66165).

- **Decentralization and mining concerns**: Fewer miners than publicly visible in hashrate charts due to key rotation; p2p network probing needed to assess true decentralization. A Rust-based handshaking tool is in development for future network analysis (msgs #66456–#66479).

- **NIPoPoWs and sidechain research**: Ergo is researching improved sidechaining constructions, including BIP 301-style approaches, with Gravity working on gateways (msg #66495). Litecoin and Nimiq are exploring NIPoPoWs implementation.

- **Headless dApps architecture**: Released blog post on headless dApps decoupling backend logic from frontends, enabling multiple independent frontends to profit from the same protocol (msgs #66691, #66703).

- **Privacy via Sigma protocols**: Ergo is not a privacy coin by default but offers optional non-interactive mixing using Sigma protocols from the Zero Coin protocol. More powerful schemes expected in 2021 without requiring forks (msgs #66714–#66836).

- **Light node deployment**: Full-node light clients successfully running on Raspberry Pi and Rock Pi single-board computers, enabling decentralized node infrastructure at minimal hardware cost (msgs #66863–#66868).

- **Magnum wallet deprecation**: Magnum Wallet being suspended 2020-11-30 at 18:00 UTC. Users can restore mnemonics into Yoroi or ErgoMixer 3.1.0 (msgs #66920–#66935).

## Important Decisions or Announcements

- [@kushti, msg #66164, 2020-11-23]: Snapshot of Ergo blockchain known and will be used for airdrops; blockchain snapshot will be taken for airdrop distribution.

- [@kushti, msg #66165, 2020-11-23]: Oracle Pools datapoints refresh every 30 blocks (approximately 60 minutes given 2-minute average block time).

- [@Unknown, msg #66437–#66438, 2020-11-25]: ErgoMixer v3.1 released with Magnum user focus, ring refactoring, default covert address ring increased to 250 ERG, wallet persistence and asset page in progress, profit-sharing and token sale structures being designed.

- [@kushti, msg #66466, 2020-11-25]: PoW change needed with pool-resistance switched off to address mining centralization concerns.

- [@kushti, msg #66812, 2020-11-27]: Headless dApps blog post published, showcasing new decentralized frontend profit model.

- [@kushti, msg #66858, 2020-11-28]: Research on privacy schemes for Ergo planned for 2021, including evaluation of existing approaches like Lelantus.

- [@kushti, msg #66924–#66928, 2020-11-29]: Magnum Wallet suspension deadline: **2020-11-30 at 18:00 GMT** — all users must withdraw ERG immediately.

## Technical Q&A Worth Preserving

- **Q** (@Spire Blockchain, msg #66146): How current is Oracle Pool data and what is minimum refresh rate?  
  **A** (@kushti, msg #66165): Datapoints refresh every 30 blocks with 2-minute average block time (enabling ~60-minute refresh intervals).

- **Q** (@Unknown, msg #66461): How can we verify Ergo's decentralization level given hidden miner identities?  
  **A** (@kushti, msgs #66463–#66479): Decentralization metrics can be obtained via p2p network probing and nonce distribution analysis. A handshaking tool in Rust is being developed; nonce analysis will be added. Not currently public but research is published at ergoforum.org/t/ergo-nonce-distribution/243.

- **Q** (@Patryk, msg #66692): Restored Magnum wallet mnemonic in Yoroi but shows zero balance — what went wrong?  
  **A** (@Dmitry Usov, msg #66693; @kushti, msg #66700): Derivation paths differ between Magnum and Yoroi. Create a new Yoroi wallet and send ERG from Magnum to the new Yoroi address instead.

- **Q** (@Spire Blockchain, msg #66510): Can I restore Ergo node wallet in Yoroi using mnemonic? Seeing zero balance after sync.  
  **A** (@kushti, msg #66542): Works if Ergo node wallet was created in node version ≥ 3.3.4.

- **Q** (@UpwindStrategy, msg #66720–#66724): What advantage does Turing-complete ErgoScript have over Bitcoin post-Taproot, and why is Turing completeness important for Ergo?  
  **A** (@kushti, msg #66727): Contractual capabilities in Ergo are modest compared to Ethereum; Turing completeness was important in 2018 to demonstrate expressiveness of the language.

- **Q** (@Unknown, msg #66382–#66386): Why have a separate PoW blockchain for DeFi when Cardano's Goguen can handle stablecoins, DEX, and custom fees?  
  **A** (@mensrea, msg #66400): PoW vs PoS is not a simple apples-to-apples comparison; Bitcoin remains #1 despite PoS alternatives. UTXO vs account model is also a key architectural difference. Ergo offers capabilities Cardano won't have natively (msg #66406).

- **Q** (@Unknown, msg #66456): What does the hashrate chart showing "2 miners and others" mean?  
  **A** (@kushti, msgs #66457–#66467): Miners are hiding by rotating keys frequently, making individual miner identification difficult. The "others" category represents hidden mining operations.

- **Q** (@Unknown, msg #66708): What is Ergo's consensus algorithm?  
  **A** (@kushti, msg #66711): Proof-of-Work using Autolykos.

- **Q** (@Unknown, msg #66713): Is Ergo a privacy coin?  
  **A** (@kushti, msg #66714): No, but non-interactive mixing is available as a dApp (ErgoMixer).

- **Q** (@Unknown, msg #66749): API error when following wallet setup video on website — SwaggerHub returning error.  
  **A** (@kushti, msgs #66752–#66758): Likely bad API key or broken config file on Windows. Send first log lines and config file for debugging.

## Links Shared

- [https://www.coingecko.com/en/coins/ergo](https://www.coingecko.com/en/coins/ergo): CoinGecko price feed (accurate price source, unlike CMC).
- [https://www.ergoforum.org/t/dex-orders-with-buyback-guarantee-smart-order-based-dexes/486](https://www.ergoforum.org/t/dex-orders-with-buyback-guarantee-smart-order-based-dexes/486): Smart order-based DEX design discussion.
- [http://ergoauctions.org/#/auction/active](http://ergoauctions.org/#/auction/active): Live Ergo Auction House (2,200 ERG prize mentioned).
- [https://scholar.google.ru/citations?hl=en&user=AG_OSPgAAAAJ&view_op=list_works&sortby=pubdate](https://scholar.google.ru/citations?hl=en&user=AG_OSPgAAAAJ&view_op=list_works&sortby=pubdate): kushti's academic publication history.
- [https://www.adatainment.com/index.php?page=video_search_ama&query=Ergo](https://www.adatainment.com/index.php?page=video_search_ama&query=Ergo): Video search for Ergo content including Charles Hoskinson on Ergo.
- [https://twitter.com/chepurnoy/status/1330616544133586952](https://twitter.com/chepurnoy/status/1330616544133586952): kushti tweet on Oracle Pools.
- [https://www.ergoforum.org/t/susy-gateway-gravity/488](https://www.ergoforum.org/t/susy-gateway-gravity/488): Gravity gateway integration forum post.
- [https://ergoplatform.org/en/blog/2020-11-11-magnum-wallet-to-be-suspended-transfer-your-erg-to-yoroi/](https://ergoplatform.org/en/blog/2020-11-11-magnum-wallet-to-be-suspended-transfer-your-erg-to-yoroi/): Magnum Wallet suspension notice.
- [https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/](https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/): ErgoMixer (non-interactive mixing) documentation.
- [https://ergoplatform.org/en/blog/2020-11-27-an-introduction-to-headless-dapps/](https://ergoplatform.org/en/blog/2020-11-27-an-introduction-to-headless-dapps/): Headless dApps architecture and decentralized frontend economics.
- [https://www.ergoforum.org/t/ergo-nonce-distribution/243](https://www.ergoforum.org/t/ergo-nonce-distribution/243): Nonce distribution analysis for mining decentralization assessment.
- [https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468](https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468): Magnum Wallet closure announcement (2020-11-30).
- [https://github.com/ErgoWallet/ergowallet-desktop/releases](https://github.com/ErgoWallet/ergowallet-desktop/releases): Ergo Wallet desktop releases (pre-persistence version noted as development).
- [https://decrypt.co/49657/oracle-exploit-sees-100-million-liquidated-on-compound](https://decrypt.co/49657/oracle-exploit-sees-100-million-liquidated-on-compound): Compound oracle exploit article (cautionary example for DeFi risk).
- [https://www.gate.io/trade/erg_usdt](https://www.gate.io/trade/erg_usdt): Gate.io ERG/USDT trading pair.

## Unresolved Questions

- **Mining pool resistance mechanism**: Discussion of pool-resistance being switched off raised (msg #66466), but implementation details and timeline not specified.

- **Privacy scheme evaluation**: Research into Lelantus and other 2021 privacy improvements mentioned (msg #66858), but no timeline or specific schemes committed to.

- **Ledger hardware wallet support**: Multiple requests for Ledger support via Yoroi (msgs #66570, #66573, #66597, #66940) — no timeline provided.

- **Cardano partnership on stablecoins and oracles**: Community speculation (msg #66399) about whether Cardano will integrate Ergo's stablecoins or oracles, but no official confirmation.

- **True miner count and decentralization metrics**: p2p probing tool and nonce analysis promised (msgs #66476–#66479) but not yet public; exact timeline unclear.

---

## Notable Context

**Exchange price discrepancies**: CMC shows inflated prices ($0.69–$1.00) due to wash trading on Citex (closed withdrawal/deposit), while CoinGecko accurately reflects ~$0.30–$0.35 spot price on functional exchanges (Hotbit, Gate.io, CoinEx). Community explicitly warned against Citex (msgs #66157, #66550, #66551).

**Wallet migration urgency**: Magnum Wallet suspension with 6-day notice created time-pressure migration wave; several users reported transaction failures and UI glitches during bulk withdrawal (msgs #66920–#67004).