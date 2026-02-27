# Ergo General Chat Summary — 2023-W30
**Period:** 2023-07-24 to 2023-07-30  
**Messages Analyzed:** 1148

---

## Key Topics Discussed

- **Storage Rent Implementation** — Storage rent officially began at block 1,051,200 (July 20, 2023). Miners now have the option to charge storage rent on unspent outputs after four years, with fees approximately 0.14 ERG per four years for simple boxes. This reduces state bloat and serves as an additional miner reward source.

- **NIPoPoWs (Non-Interactive Proof of Proof of Work) Release in 5.0.13** — Final piece of NIPoPoW implementation shipped July 29. Node can now bootstrap from NIPoPoW proof (~180KB) replacing ~400MB of headers, reducing verification time from ~90 minutes to <500ms. Enables stateless clients and light wallets.

- **Node Bootstrapping Performance** — Multiple users confirmed rapid syncing: 7-11 minutes to full sync with nipopow + UTXO snapshot on 1Gbps connections; Raspberry Pi 4 synced in <10 minutes; headers-only sync on Raspberry Pi 4 in 3 minutes. Storage after bootstrapping ~100-2.4GB depending on configuration.

- **Rosen Bridge Development** — Bridge infrastructure nearing launch. Watchers (off-chain bots) will monitor transactions across chains; GARD's (on-chain guards) verify and achieve consensus before executing cross-chain actions. Watchers lock ERG as collateral to prevent dishonest behavior. 70% of rewards go to watchers for the hard work of transaction monitoring.

- **Dexy Gold and Oracle Pool v2** — Oracle Pool v1 includes Ergo Foundation members and external contributors. Oracle Pool v2 running for Dexy Gold with GORT rewards. Discussion around whether to add BTC pair to Spectrum DEX alongside existing USD pair for wrapped assets.

- **Palmyra Ecosystem and Chainlink Partnership** — Palmyra (formerly ZenGate) using Chainlink's proof-of-reserve and proxy functions via Winter Protocol for on-chain warehouse receipts. IoT devices (weight sensors, cameras, motion sensors) provide continuous proof-of-existence for commodities in bonded warehouses, enabling decentralized trade financing.

- **Curve Finance Exploit (Ethereum Drama)** — Vyper compiler bug from 2021 exploited on July 30, draining multiple Curve pools. CRV price collapsed; liquidations triggered. Several projects affected beyond Curve. Highlighted Ergo's stability by contrast.

- **Fleet SDK v0.1.3** — JavaScript SDK for Ergo Platform released with updates to support latest features.

---

## Important Decisions or Announcements

- [@kushti, msg#416005, 2023-07-29]: **Ergo 5.0.13 released** — Protocol reference client now includes complete NIPoPoW implementation, enabling rapid node bootstrapping.

- [@kushti, msg#416011-416012, 2023-07-29]: Node 5.0.13 can sync from scratch to current height (~block 1,045,000) in ~50 minutes with weak connection using NIPoPoW + UTXO snapshot bootstrap.

- [@chrom, msg#414016, 2023-07-24]: Storage rent officially began at block 1,051,200 (July 20, 2023).

- [@CW, msg#415340, 2023-07-27]: **Infographic competition launched** with 5 themes (Privacy, Ergo DeFi dApps, NIPoPoWs, Rosen Bridge, Babel Fees). Prize pool: 200 ERG + additional contributions. Deadline: Aug 31. Encouraged community graphic designers to submit.

- [@kushti, msg#415352-353, 2023-07-27]: Contributed 1.5M COMET to infographic competition prize pool (~300K per theme).

- [@kushti, msg#416019, 2023-07-29]: NIPoPoW proof size is only 180KB; full-blocks synced requires downloading all headers first (no shortcuts for full-node security).

- [@filippounits, msg#416545, 2023-07-30]: New Sigmanauts announced: @Rafael_Pasold, @Sonotkumar21, @filippounits.

- [@Yulius Kristianto, msg#416227, 2023-07-30]: Successfully translated Spectrum DEX interface to Bahasa Indonesia.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): How can I check if a mystery transaction in my wallet is storage rent?  
  **A** (@Pulsarz, msg#415005-415007): Some dApps created boxes with creationHeight=0, so even recently-mined boxes can be charged storage rent. If a box lacks sufficient ERG to pay rent, non-miners cannot collect it; only miners running with storage rent collection enabled can charge it on remaining boxes.

- **Q** (@Unknown): Can you use NIPoPoW bootstrap without UTXO bootstrap for full-block sync?  
  **A** (@kushti, msg#416282, msg#416292): No. NIPoPoW only accelerates header downloading. If downloading full blocks, you must download all headers anyway, so NIPoPoW gains are minimal. For additional indices (extraIndex), you must scan all blocks and cannot use UTXO bootstrap at all.

- **Q** (@Pulsarz): Can Oracle Pool v2 and Rosen guards run in NIPoPoW + UTXO snapshot mode?  
  **A** (@Pulsarz, msg#416301-304): Oracle requires full block scan; Rosen likely the same. These require full blocks for security. NIPoPoW + UTXO snapshot modes are mainly for light clients and wallets.

- **Q** (@filippounits): Can Oracle/Rosen operate with only UTXO set scans instead of full-block scans?  
  **A** (@kushti, msg#416315-317): Potentially, if apps only need unspent outputs. How to combine both types of scanning is an open question — requires further design work.

- **Q** (@Unknown): What is a stateless client?  
  **A** (@kushti, msg#416452): Full-node security without storing UTXO set. Downloads and verifies proofs of UTXO set transformation correctness. Stores only ~32 bytes of state hash. Cannot mine or broadcast others' transactions, but supports wallets and custom scans.

- **Q** (@CW): Where does keepfullblocks configuration go?  
  **A** (@kushti, msg#416505, msg#416519): Place in main ergo block: `ergo { node.blocksToKeep = 1440 }`. Will be added to README in next version. Reduces storage to ~100MB after bootstrapping (digest mode).

- **Q** (@Unknown): Does Satergo have NIPoPoW support yet?  
  **A** (@Aberg, msg#416673): Not in this update; coming someday. Currently requires manual config editing.

- **Q** (@Unknown): Can Satergo support NIPoPoW without editing config?  
  **A** (@Aberg, msg#416673): Not yet in this update cycle.

- **Q** (@Unknown): Is mobile full-node feasible in wallet given lite-node capabilities?  
  **A** (@filippounits, msg#416706): Shared reference to @ergogo_ demonstrating feasibility, but built-in wallet support would offer better UX than standalone node.

---

## Links Shared

- [https://docs.ergoplatform.com/mining/rent/](https://docs.ergoplatform.com/mining/rent/): Storage rent documentation and parameters.

- [https://github.com/fleet-sdk/fleet](https://github.com/fleet-sdk/fleet): Fleet SDK v0.1.3 JavaScript SDK for Ergo.

- [https://ergoplatform.org/en/blog/2022-04-01-nipopows-on-ergo-innovations-in-blockchain/](https://ergoplatform.org/en/blog/2022-04-01-nipopows-on-ergo-innovations-in-blockchain/): NIPoPoWs overview and applications.

- [https://ergoplatform.org/en/blog/2021-08-26-nipopow-applications-light-clients-and-side-chains/](https://ergoplatform.org/en/blog/2021-08-26-nipopow-applications-light-clients-and-side-chains/): NIPoPoW applications for light clients and sidechains.

- [https://www.youtube.com/watch?v=WzLxa9f4-hE](https://www.youtube.com/watch?v=WzLxa9f4-hE): Weekly Update & AMA video (July 20, 2023).

- [https://youtu.be/_SNodNbqEn0](https://youtu.be/_SNodNbqEn0): Weekly Dev Update (July 23, 2023).

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.13](https://github.com/ergoplatform/ergo/releases/tag/v5.0.13): Ergo Node 5.0.13 release notes with NIPoPoW details.

- [http://fc16.ifca.ai/bitcoin/papers/KLS16.pdf](http://fc16.ifca.ai/bitcoin/papers/KLS16.pdf): Original PoPoW paper for deep dive into NIPoPoW theory.

- [https://youtube.com/live/lHSdoE6lmlU](https://youtube.com/live/lHSdoE6lmlU): Weekly AMA livestream (July 27, 2023).

- [https://www.eventbrite.com/e/web3-lebanon-dev-meet-tickets-684658059687](https://www.eventbrite.com/e/web3-lebanon-dev-meet-tickets-684658059687): Web3 Lebanon Meetup where kushti will speak Aug 2.

- [https://anchor.fm/thesigmacast/episodes/Catalyst-Spectrum--ZenGate--Rosen-Bridge-e27cgn4](https://anchor.fm/thesigmacast/episodes/Catalyst-Spectrum--ZenGate--Rosen-Bridge-e27cgn4): The Sigmacast episode featuring Spectrum Finance, Palmyra (ZenGate), and Rosen Bridge.

- [https://ergoauctions.org/](https://ergoauctions.org/): Ergo Auction House for NFT and artwork trading.

- [https://phoenixfi.app/](https://phoenixfi.app/): MewFinance (Phoenix) testnet frontend.

- [https://app.hodlcoin.co.in/](https://app.hodlcoin.co.in/): HodlCoin testnet version.

- [https://github.com/ergoplatform/ergo-appkit/issues/187](https://github.com/ergoplatform/ergo-appkit/issues/187): GitHub issue tracking AppKit UTXO snapshot implementation.

- [https://docs.ergoplatform.com/node/modes/light-spv-node/](https://docs.ergoplatform.com/node/modes/light-spv-node/): SPV node documentation.

- [https://docs.ergoplatform.com/crypto/](https://docs.ergoplatform.com/crypto/): Cryptography documentation.

- [https://docs.ergoplatform.com/dev/scs/sigma/](https://docs.ergoplatform.com/dev/scs/sigma/): Sigma protocols documentation.

- [https://docs.ergoplatform.com/dev/protocol/zkp/](https://docs.ergoplatform.com/dev/protocol/zkp/): Zero-knowledge proofs documentation.

- [https://docs.ergoplatform.com/dev/protocol/eutxo/](https://docs.ergoplatform.com/dev/protocol/eutxo/): Extended UTXO model documentation.

- [https://twitter.com/Sigmanauts/status/1682380751952662531](https://twitter.com/Sigmanauts/status/1682380751952662531): Sigmanauts Treasury Fundraiser announcement.

- [https://twitter.com/groddofcrypto/status/1683626452837621760](https://twitter.com/groddofcrypto/status/1683626452837621760): Twitter poll requesting votes for Ergo vs. other projects.

- [https://twitter.com/sigmanaut/status/1685395851307565056](https://twitter.com/sigmanaut/status/1685395851307565056): Sigmanauts announcement regarding NIPoPoW infographics.

- [https://vxtwitter.com/chepurnoy/status/1684642209314820096](https://vxtwitter.com/chepurnoy/status/1684642209314820096): kushti's post about NIPoPoW testing.

- [https://github.com/ergoplatform/ergo/pull/2018](https://github.com/ergoplatform/ergo/pull/2018): PR addressing bug found during final 5.0.13 testing.

---

## Unresolved Questions

- **Prebuilt node configs for common use cases** — Community requested standardized configurations for Raspberry Pi, low-RAM setups, mining nodes, oracle nodes, etc. to be documented on GitHub. @kushti acknowledged will add to README in next version, but comprehensive config library still pending.

- **Mobile wallet with full-node capability** — Feasibility demonstrated but UX integration into mobile wallets not yet designed. @MrStahlfelge tagged for wallet team input.

- **Raspberry Pi 3 (1GB RAM) sync failures** — @filippounits unable to complete sync on Pi 3 despite success on Pi 4. Logs sent to kushti; root cause TBD. Possible RAM limitations or OS-level issues.

- **Combining UTXO set scans with full-block scans for Oracle/Rosen** — @kushti identified as open design question: how to allow applications like Oracle Pool v2 and Rosen guards to operate with optimized UTXO-only scanning vs. full-block validation.

- **Spectrum DEX BTC pair addition** — Discussion ongoing whether to add BTC/ERG pair to complement existing USD pairs for wrapped assets. Cost low but adoption uncertain.

- **Stateless client production readiness** — Proof-of-concept shown but no timeline for production release or wallet integration.

---

## Community Highlights

- **Strong developer participation in bootstrapping tests**: Users across different hardware (Pi 3/4, T400, Ryzen 5, RockPi) sharing sync benchmarks and configurations. @filippounits, @CW, @Daskre, @Vinicius, @Netim actively testing and reporting.

- **International localization efforts**: @Yulius Kristianto completed Spectrum DEX Indonesian translation, emphasizing importance of avoiding machine translation for technical projects. Received tips and recognition from @kushti.

- **Infographic competition momentum**: Community contributed additional prizes (900 SPF, mage NFT, 1.5M COMET from @kushti) beyond initial 200 ERG pool, signaling enthusiasm for marketing assets.

- **Cross-ecosystem recognition**: TabbyPOS received grants and ecosystem inclusion from IoTeX; integration with W3bStream platform beginning.

---

## Market & Ecosystem Context

- **Curve Finance exploit (July 30)** highlighted vulnerabilities in EVM-based DeFi; Ergo community noted stability and prudent approach by contrast.

- **Regulatory challenges**: Discussion of US CEX restrictions (OKX ban for US users), prompting interest in Rosen Bridge as solution for non-custodial cross-chain access.

- **Exchange listings**: Ongoing work toward Tier 1 and Tier 2 exchange integrations; volume metrics remain low due to EF's conservative market-making approach (intentional to avoid wash trading and insider liquidity harvesting).