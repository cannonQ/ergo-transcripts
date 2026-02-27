# Ergo General Chat — 2025-W12 Summary

## Key Topics Discussed

- **ChainCash mechanics & use cases**: Discussion of ChainCash as a decentralized banking primitive enabling entities (businesses, DAOs) to issue their own stable notes backed by reserves, with redemption fees (2%) promoting circulation rather than speculation. Distinguished from simple token issuance by allowing smart contract logic attachment and reducing whale-induced volatility risks.

- **Real-world asset financing via Ergo**: Detailed exploration of hybrid on-chain/off-chain models for real estate debt management and property finance. Proposed using oracles or multisig "personal oracles" to report off-chain title registrations and trigger on-chain fund releases via smart contracts, with kushti suggesting Merkle tree proofs of title digests.

- **Rosen Bridge economics & Watcher setup**: Questions about Rosen Watcher profitability (avg ~25 RSN/week on Ergo, ~250 RSN/week on Bitcoin), node requirements (fully synced Ergo node ~20GB unindexed), and configuration. Clarified that Scorex API key is password-protected node interface access.

- **ChainCash redemption mechanics**: Explored whether users constantly redeeming appreciating IOUs undermines ChainCash stability. Consensus that redemption fees + entity reputation (on-chain visibility of reserves) + ability to attach SC logic differentiates it from raw token trading and enables stable entity-backed money systems.

- **Protocol speed improvements**: kushti outlined plans to revive community discussions on faster blocks/confirmations post-Ergoversary, including potential sub-blocks and sidechain constructions already sketched in PRs. Noted that any block time reduction affects timestamp-dependent contracts and requires careful parameter tuning on testnet.

- **Bulletproofs & zero-knowledge verification in ErgoScript**: kushti explained bulletproofs as compact Sigma protocol variants enabling range proofs and generic zero-knowledge statements without trusted setup. Highlighted opportunity to verify similar proofs (e.g., Groth one-out-of-many) directly in ErgoScript, unlocking verifiable credentials and hybrid contract patterns.

- **Privacy approaches for Ergo**: Discussion of mixer alternatives, stealth addresses, off-chain cash models, and potential DarkFi sidechains. kushti suggested community DAO-based ScritCash leveraging Ergo's on-chain reserves as more efficient pooling/unpooling than current mixer.

- **Storage rent implementation for mining pools**: Confirmed fork of MiningCore used by Sigmanauts pool collects storage rent; no commercial solution yet. Armeanio floated idea of special "babel boxes" for liquidity mixing/small yield accounts, with L2/sidechain as longer-term option.

- **Nautilus wallet v1.0.0 & v1.1.0**: Released to Chrome Web Store with SigmaUSD dApp integration; GraphQL API 0.5.3 updated and fixed for gql.ergoplatform.com usage in Nautilus.

- **Palmyra ecosystem & Chainlink partnership**: Dan Friedman outlined Palmyra's proof-of-reserve + on-chain warehouse receipts model coupled with IoT (camera, weight/motion sensors) for continuous commodity auditing. Plan to build native Ergo oracles alongside Chainlink; stablecoin insurance for physical lithium delivery in scope.

- **Dexy Gold & alternative monetary layers**: c8 noted Dexy Gold coming soon as countercyclical bear market hedge (stack ERG → bear → mint stable gold + pool liquidity = profit). kushti outlined Ergo's "complete stack" vision: programmable digital gold → trustless derivatives → monetary expansion tools.

- **Explorer & node infrastructure**: qx() rebuilding main explorer (temporarily redirected to personal instance); alternative explorers live at ergexplorer.com and sigmaspace.io. Ergo node syncing now ~20GB unindexed, much lighter than Cardano.

---

## Important Decisions or Announcements

- [@kushti, msg#551225, 2025-03-17]: **Nautilus v1.0.0 officially released** — https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai

- [@kushti, msg#551282, 2025-03-17]: **6.0 security audit raffle completed successfully** — https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a

- [@kushti, msg#551433, 2025-03-18]: **Ergo protocol reference client 6.0.0-RC3 released (testnet only)** — Can now be built locally without issues; Docker image published on DockerHub

- [@kushti, msg#551449, 2025-03-18]: **Nautilus v1.1.0 released with SigmaUSD dApp integration** — Already live in Mozilla Add-on Store — https://github.com/nautls/nautilus-wallet/releases/tag/v1.1.0

- [@kushti, msg#551792, 2025-03-21]: **ChainCash paper near completion** — Going to preprint server

- [@qx(), msg#551400, 2025-03-18]: **GraphQL API updated to 0.5.3** — Fixed for https://gql.ergoplatform.com usage in Nautilus

- [@cannon_q, msg#551845, 2025-03-21]: **DuckPools testnet live** — https://test.duckpools.io; test QUACKS distribution and announcement pending

- [@Andy L, msg#551553, 2025-03-19]: **Weekly Update & AMA scheduled** — 13 UTC, March 20; featuring Armeanio, kushti, qx()

---

## Technical Q&A Worth Preserving

### Real Estate Finance & Oracles

- **Q** (@iVacuum, msg#551188): For a property development loan, how can off-chain proof that a charge has been registered on title trigger on-chain fund release? Is an oracle the only way?

  **A** (@cannon_q, msg#551222): Likely need an oracle or fractional transactions similar to Rosen's federated Guards.

  **A** (@kushti, msg#551223): Ergo can post a short digest of all property titles at posting time; on-chain contract uses the title + proof it belongs to current digest (can do forum post on details). Alternatively, off-chain validators execute scripts against augmented context (titles) producing results that unlock on-chain vaults.

  **A** (@kii, msg#551258): For POC, point contract to a multisig wallet (the certifier). When loan approved, certifier creates a box with loan ID. Loan contract checks certifier's wallet for matching box → releases funds. "Personal oracle" approach simpler than building full oracle.

### Rosen Watcher Setup

- **Q** (@J. P. Costa, msg#551287): Average earnings per week for running a Watcher are just 25 RSN on Ergo (250 RSN on Bitcoin). Is it worth the investment?

  **A** (@qx(), msg#551291): ERG and RSN cheaper now than future; startup cost lower. Running now gives experience & channel support before rush. Supports Rosen's growth, increasing future payments.

- **Q** (@J. P. Costa, msg#551292): Do I need a fully synced Ergo node? Is it used for locking/unlocking TXs?

  **A** (@qx(), msg#551294-295): Node reads chain on Ergo side; all chains report via TXs. Used for submitting lock TX and sending rewards. Needs to be fully synced; indexing not required.

- **Q** (@J. P. Costa, msg#551296): Can I use public nodes like Ergopool instead of running my own?

  **A** (@qx(), msg#551300): No password needed for TX submissions, could use any mode. Bad thing about using others: at their whim for uptime.

- **Q** (@J. P. Costa, msg#551303): Ergo node is only ~20GB?

  **A** (@qx(), msg#551305): Unindexed is around 20GB. Storage rent keeps running state small!

- **Q** (@J. P. Costa, msg#551324): What is the Scorex API key in config file? Should I change it?

  **A** (@qx(), msg#551326-328): Hash of the node API password. Whatever you set there is how you unlock node interface at 127.0.0.1:9053. Not ideal to keep default "hello" — someone could use node for things.

### ChainCash & Monetary Systems

- **Q** (@Harris, msg#551562): What stops people constantly redeeming ChainCash IOUs for collateral if price appreciates? Doesn't that make it volatile like raw ERG?

  **A** (@qx(), msg#551569-572): ChainCash is certificate of value backed by trusted entity/org (e.g., Sigmanauts). Can be used collateralized, but better as its own stable note: spendable, addable, subtractable, splittable, passed on. Avoid disclosure of sensitive underlying assets via smart contract logic.

  **A** (@qx(), msg#551579): Entities (businesses, DAOs) issue their own money backed by treasury/reserves (mix of stable & others). Sigmanauts example: issue notes backed by treasury instead of dumping token on DEX (whale can tank value). ChainCash prevents that, enabling stable org-issued money supply. Involves trust/reputation + on-chain visibility of reserves.

### Storage Rent for Mining Pools

- **Q** (@Unknown, msg#551418): How can Ergo pool update itself to collect storage rent? Where are FAQs/manual?

  **A** (@Unknown, msg#551420): Fork of MiningCore that Sigmanauts pool uses collects storage rent — https://github.com/K-Singh/miningcore-SR. Sigmanauts pool guys can answer detailed questions.

- **Q** (@Unknown, msg#551520): How to collect storage rent for pool?

  **A** (@qx(), msg#551534): Run modified node file (can replace current jar without restart) + new service alongside MiningCore. No tutorial yet; check GitHub; ask for help if stuck.

### Bulletproofs & Zero-Knowledge

- **Q** (@Crypto Quokka, msg#551458): Recommended books/readings on philosophy of decentralized finance before Bitcoin?

  **A** (@kushti, msg#551932): Papers over books for p2p money:
  - "Peer-to-peer money: Free currency over the Internet" by K. Saito
  - "Money as IOUs in a Social Trust Network" (original Ripple whitepaper)
  - "Peer-to-Peer Economics for Post Catastrophic Recovery"
  
  Books on alternative monetary systems:
  - *The Ecology of Money* by Richard Douthwaite
  - *Rethinking Money* by B. Lietaer et al.

---

## Links Shared

- [https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai](https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehhldlphhljhpnlddaodbjjcchai): Nautilus v1.0.0 wallet release
- [https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a](https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a): Ergo 6.0 security audit raffle
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC3](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC3): Ergo 6.0.0-RC3 release (testnet)
- [https://github.com/nautls/nautilus-wallet/releases/tag/v1.1.0](https://github.com/nautls/nautilus-wallet/releases/tag/v1.1.0): Nautilus v1.1.0 with SigmaUSD integration
- [https://gql.ergoplatform.com](https://gql.ergoplatform.com): Ergo GraphQL API (updated to 0.5.3)
- [https://github.com/K-Singh/miningcore-SR](https://github.com/K-Singh/miningcore-SR): MiningCore fork with storage rent support
- [https://test.duckpools.io](https://test.duckpools.io): DuckPools testnet
- [https://www.ergoforum.org/t/physical-or-digital-gold-simple-insurance-on-ergo/4715](https://www.ergoforum.org/t/physical-or-digital-gold-simple-insurance-on-ergo/4715): Physical/Digital Gold Insurance on Ergo (forum post on Palmyra's approach)
- [https://ergexplorer.com](https://ergexplorer.com): Alternative Ergo Explorer
- [https://sigmaspace.io](https://sigmaspace.io): Alternative Ergo Explorer
- [https://v2ui.skyharbor.io/](https://v2ui.skyharbor.io/): SkyHarbor v2 DEX interface
- [https://bitcoinwiki.org/wiki/e-gold](https://bitcoinwiki.org/wiki/e-gold): E-gold historical reference (mentioned re: independent exchange services)
- [https://njump.me/nevent1qqsg250r9yzl39gqv04meqt94gqjgsk5v9wvuu65fj50hkrmfe39tfspzfmhxue69uhkummnw3eryvfwvdhk6tczyqnuqe22tletseetqar9y0skuc6j9js6r3jlz0fn67q3rk80pxl27qcyqqqqq2qfrmljm](https://njump.me/nevent1qqsg250r9yzl39gqv04meqt94gqjgsk5v9wvuu65fj50hkrmfe39tfspzfmhxue69uhkummnw3eryvfwvdhk6tczyqnuqe22tletseetqar9y0skuc6j9js6r3jlz0fn67q3rk80pxl27qcyqqqqq2qfrmljm): Public Ergo Nostr channel
- [https://x.com/ERG_Armeanio/status/1901709853292417269](https://x.com/ERG_Armeanio/status/1901709853292417269): Armeanio on dApp fee structures
- [https://www.youtube.com/live/mHjPigJjbOU](https://www.youtube.com/live/mHjPigJjbOU): Weekly Update & AMA (March 20, 13 UTC)
- [https://pwa-pages.github.io/rosen-watcher-pwa/chainperformance](https://pwa-pages.github.io/rosen-watcher-pwa/chainperformance): Rosen Watcher earnings/performance tracker

---

## Unresolved Questions

- **Protocol speed improvements roadmap**: When will faster block confirmations / sub-blocks be prioritized post-Ergoversary? Which approach (microblocks, sidechains, parameter tuning) is preferred? Communities interested in testing should DM kushti.

- **ChainCash paper availability**: When will the ChainCash paper be posted to preprint server? (kushti indicated "more or less done" but no date given)

- **Dexy Gold & Lithium stablecoin timeline**: When is Dexy Gold launching? When will Lithos Protocol stablecoin (for Palmyra physical lithium insurance) be ready?

- **Palmyra oracle pool v2 status**: What is the timeline for Oracle Pool v2 running for Dexy Gold with G