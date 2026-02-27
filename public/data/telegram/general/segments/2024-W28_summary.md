# Ergo General Chat — 2024-W28 Summary

## Key Topics Discussed

- **Storage Rent & Security Budget**: Extended discussion on storage rent as a mechanism for long-term security budgeting, ledger pruning, and dust management. kushti explained that storage rent is not merely about dust mitigation but about maintaining a predictable security budget, enabling safe ledger pruning if history older than 4 years is discarded (as all UTXOs are created within that window).

- **Autolykos & ASIC Resistance**: kushti clarified that Autolykos 2 is GPU-oriented and k-sum problem-based (not generalized birthday problem like Equihash), and discussed ongoing GPU farm profitability. A friend exploring 400 3090 GPUs for Ergo mining again after dormancy since 2022.

- **MEV & Block Delays in PoW**: Complex discussion on whether Proof-of-Elapsed-Time (PoEM) can mitigate selfish mining incentives. kushti noted PoEM is "velvet forkable" and can be included in any node release; ETH had significant MEV during 2021–22 PoW era when mining pools extracted value, which counterintuitively subsidized DeFi users' security budget while payment users paid less.

- **Throughput, TPS Metrics & L2 Scaling**: kushti emphasized TPS is misleading metric for UTXO-based systems (one TX can have 1000+ outputs). Physical p2p bandwidth limits prevent true 50k TPS without datacenter centralization. Discussed sidechains as more suitable scaling than L2s; only miners need to validate multiple chains, not all nodes.

- **Block Validation & Verifier's Dilemma**: Referenced academic paper on verifier's dilemma — if block validation is expensive, miners may skip validation or process asynchronously, risking security. Ergo worst-case validation ~8 seconds; Bitcoin unpublished worst-case ~3 minutes.

- **Fleet SDK Documentation Bounties**: kushti announced ErgoDevs is offering bounties for Fleet SDK tutorials to improve developer tooling accessibility. HQ3rr noted he had to learn half the SDK on his own.

- **P2P Finance (p2pFi) vs. EVM DeFi**: kushti introduced term "p2pFi" (also "self-sovereign DeFi") as distinct from EVM DeFi. In UTXO model, two parties create bonds/options directly; no central contract, DAO governance, or freeze buttons. EVM DeFi requires repository, admin keys, governance overhead.

- **Dexy Gold & Oracle Pools**: Token issuance for Dexy Gold LP tokens confirmed. Oracle Pool v1 and v2 discussed; v2 running for Dexy Gold with GORT rewards. Plans to invest in building out native Ergo oracles infrastructure.

- **RocksDB Stability**: kushti reported RocksDB (vs. LevelDB) is more stable and resistant to crashes. HQ3rr running old JAR still without corruption issues.

- **Block Size & Parameters**: Phillip Scheindlinger asked max block size; discussion reveals no hard limit (1GB mentioned in app), though current practical max ~8MB. Miners can vote to increase parameters.

- **DarkFi Code Review & Privacy**: kushti reviewing DarkFi codebase; noted basic Nym connections support, Tor hidden service capability, and robust ZK infrastructure (some possibly unused since 2018).

- **Keystone Hardware Wallet Integration**: Community interest in Keystone hardware wallet support (open-source, QR code support). kushti indicated willingness to buy when Ergo integration available.

---

## Important Decisions or Announcements

- [@kushti, msg#501461, 2024-07-08]: **Happy emission reduction!** — Marked 5th Ergoversary with emission reduction event.

- [@kushti, msg#501810, 2024-07-10]: Another emission reduction scheduled **October 2024** (23→[next amount] ERG/block); January 2025: 18 ERG/block; January 2026: 6 ERG/block.

- [@kushti, msg#501605–501606, 2024-07-09]: **Fleet SDK bounty program launched** — ErgoDevs offering bounties for tutorials to improve developer accessibility.

- [@kushti, msg#502122–502123, 2024-07-11]: **GluonW GAU token issued** (100M supply, Djed Alliance v1 neutrons); multi-video conference call planned for next week.

- [@qx(), msg#502499–502503, 2024-07-14]: **ErgoHack community rewards distributed** — 630 BOBER (~200 ERG value) sent to kushti; announcement pending on Twitter.

- [@HQΣr, msg#501495, 2024-07-08]: Crux Finance (CrooksMart/CrooksFinance) infrastructure downtime due to VPS provider billing issues; services restored by msg#501500.

- [@MavΣrickBg, msg#502353, 2024-07-12]: **Bober Poker Night 9 scheduled** for Sunday, 14 July, 6pm UTC; flexible buy-in in $Bober/$CYPX; targeting 20+ players across 3 tables (previous record: 19).

- [@kushti, msg#501835, 2024-07-10]: Possible **talk at Dubai local meetup on Saturday** (to be announced).

---

## Technical Q&A Worth Preserving

- **Q** (@Rj, msg#501561): Do we have a list of wallets with substantial ERG that haven't moved and are subject to storage rent?
  **A** (@kushti, msg#501545): Yes, there are lost coins and some Ergonauts have passed away. Storage rent mechanisms account for this.

- **Q** (@TMR.ΣRG, msg#501563): What happens to boxes older than 4 years if unclaimed (dust/worthless) and ledger is pruned? Does supply get eliminated?
  **A** (@qx(), msg#501566–501569): Collecting storage rent is "pruning" itself. Boxes older than 4 years currently exist; Sigmanauts pool will grab them once they integrate code. After that, only boxes reaching 4-year mark will have rent collected.

- **Q** (@Pulsarz, msg#502052–502053): Is the testnet node indexed? Other public testnet API options?
  **A** (@Pulsarz, msg#502087–502092): Official Ergo Platform testnet GraphQL at `gql-testnet.ergoplatform.com/`. Node API querying for bulk token info and multi-block calls now possible; moving away from GraphQL desired but low priority.

- **Q** (@HQΣr, msg#502427–502428): Is peer-to-peer encrypted messaging possible on-chain? Can data in registers be encrypted with decryption handled by dApp?
  **A** (@kushti, msg#502429, msg#502434): Possible, yes. AES is quantum-secure (ref: eprint.iacr.org/2019/272), as is other symmetric encryption.

- **Q** (@HQΣr, msg#502438): How to send private keys or messages to a wallet on-chain without others reading (e.g., poker invite keys)?
  **A** (@kushti, msg#502457): Standard approach is Diffie-Hellman key derivation (no off-chain interaction), but encryption is not quantum-secure. Quantum adversary could recover shared secret key efficiently.

- **Q** (@Phillip Scheindlinger, msg#502097–502103): What is the largest block size Ergo can scale to?
  **A** (@Pulsarz, msg#502111–502113): Current max 8MB. No real hard limit (1GB mentioned in testing app); miners can vote to increase governance parameters.

- **Q** (@kushti, msg#501689): Is Autolykos generalized birthday problem based like Equihash?
  **A** (@kushti, msg#501688): No—Autolykos is k-sum problem based. Original Equihash paper mentions both approaches, but Autolykos uses k-sum variant for improved ASIC resistance.

- **Q** (@qx(), msg#501563): How much ERG per day is actually being swapped for BTC currently?
  **A** (@kushti, msg#501550–501552): Unknown exact figure; big GPU farms mostly offline, so GPU mining currently unprofitable for most. Kushti's friend exploring 400 3090 GPU farm restart suggests some profitability window exists.

---

## Links Shared

- [https://www.youtube.com/watch?v=vWEQtHl3pXo](https://www.youtube.com/watch?v=vWEQtHl3pXo): P2P Podcast (kushti recommendation, msg#501466)

- [https://x.com/palmeconomy/status/1810282508019171723](https://x.com/palmeconomy/status/1810282508019171723): Palmyra ecosystem update (msg#501497)

- [https://eprint.iacr.org/2018/078](https://eprint.iacr.org/2018/078): Storage rent / security budget paper (kushti, msg#501523)

- [https://github.com/fleet-sdk/docs/issues/8](https://github.com/fleet-sdk/docs/issues/8): Fleet SDK bounty issue (kushti, msg#501605)

- [https://www.docdroid.net/mcoitvK/ergopow-pdf](https://www.docdroid.net/mcoitvK/ergopow-pdf): Autolykos 2 GPU-oriented spec (kushti, msg#501629)

- [https://www.staff.city.ac.uk/~ross/papers/FingerTree.html](https://www.staff.city.ac.uk/~ross/papers/FingerTree.html): Finger Trees data structure paper (kushti, msg#501682)

- [https://eprint.iacr.org/2018/968](https://eprint.iacr.org/2018/968): Sparse Merkle trees from Ergo initial version (kushti, msg#501685)

- [https://explorer.ergoplatform.com/en/transactions/2fb0bb3fddd24aa9e8f847254f3dc326fa6a35168530bc75aad71f5e64133b30](https://explorer.ergoplatform.com/en/transactions/2fb0bb3fddd24aa9e8f847254f3dc326fa6a35168530bc75aad71f5e64133b30): Dexy LP token issuance (msg#501700)

- [https://arxiv.org/abs/2305.09032](https://arxiv.org/abs/2305.09032): Delays profitable in PoS context (kushti, msg#501781)

- [https://eprint.iacr.org/2015/702.pdf](https://eprint.iacr.org/2015/702.pdf): Verifier's Dilemma paper (kushti, msg#501933)

- [https://bitcoin.org/en/alert/2015-07-04-spv-mining#solution](https://bitcoin.org/en/alert/2015-07-04-spv-mining#solution): SPV mining vulnerability in Bitcoin history (kushti, msg#501944)

- [https://www.youtube.com/watch?v=G6xggrwA8ys&t=2s](https://www.youtube.com/watch?v=G6xggrwA8ys&t=2s): Ergo Sidechains overview (kushti, msg#501909)

- [https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367/](https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367/): Plasma-like / optimistic rollup designs discussion (kushti, msg#501915)

- [https://delvingbitcoin.org/t/great-consensus-cleanup-revival/710?u=antoinep](https://delvingbitcoin.org/t/great-consensus-cleanup-revival/710?u=antoinep): Bitcoin worst-case block validation timing (kushti, msg#501920)

- [https://eprint.iacr.org/2019/272](https://eprint.iacr.org/2019/272): AES quantum security analysis (kushti, msg#502433)

- [https://gql-testnet.ergoplatform.com/](https://gql-testnet.ergoplatform.com/): Official Ergo testnet GraphQL endpoint (Pulsarz, msg#502087)

- [https://www.youtube.com/watch?v=Dl9eUp28R7k](https://www.youtube.com/watch?v=Dl9eUp28R7k): Video on money quality & elasticity (kushti, msg#501887)

- [https://ramics.org/7th-congress-rome-2024/](https://ramics.org/7th-congress-rome-2024/): RAMICS 2024 Rome conference (kushti, msg#501904)

- [https://x.com/anon_real_anon/status/1812184886981111933](https://x.com/anon_real_anon/status/1812184886981111933): Shared liquidity for Auction House / Trade House (~$4K funding proposal, msg#502454)

- [https://tokenjay.app/app/#ageusd](https://tokenjay.app/app/#ageusd): TokenJay platform link (msg#502557)

---

## Unresolved Questions

- **GPU Mining Profitability Window** (msg#501550–501555): Exact current hashrate distribution and profitability parameters for GPU farming unclear. Kushti's friend exploring 400 3090 restart suggests margin exists, but no precise ROI figures disclosed.

- **Quantum-Secure On-Chain Messaging** (msg#502457): How to transmit encrypted messages on-chain between two parties without off-chain key agreement (which breaks quantum security). Diffie-Hellman approach acknowledged but trade-off (quantum vulnerability) noted as unsolved.

- **Kaspa Contract Execution Model** (msg#501989–msg#501994): How Kaspa executes smart contracts at extremely high block-per-second rate remains unclear; explorers missing early blocks. Kushti speculates slower sidechains may be necessary.

- **Fleet SDK Documentation Adoption** (msg#501612–501613): Whether tutorials will be written and how bounties will incentivize community participation beyond intrinsic motivation remains TBD.

- **Dexy Gold v2 Rollout Timeline** (msg#502412–502413): Specific deployment and token issuance schedule for Dexy Protocol v2 on mainnet not detailed; wallet syncing prerequisite noted.

- **Telegram Privacy & Migration** (msg#502522–502549): Discussion on Telegram's regulatory pressure (UK/US); whether Ergo community will migrate to alternative platforms (Session, Discord) unresolved. Migration to Matrix/IRC also mentioned but not acted upon.

---

**Summary**: Week 28 featured deep technical discussions on storage rent security economics, GPU mining viability, MEV in PoW, and UTXO-based scaling strategies. Infrastructure updates (Fleet SDK bounties, Dexy Gold issuance, hardware wallet integration) announced. Bober Poker community events continued. Some off-topic noise on music/privacy, but core discussions valuable for protocol understanding.