# Ergo Developer Chat Summary — 2024-W51
**Period:** 2024-12-16 to 2024-12-22  
**Participants:** 19 | **Messages:** 248

---

## Key Topics Discussed

### Infrastructure & Node Issues
- **Network DoS & Rate Limiting:** @kushti khushi banned an Azerbaijan subnet with unusual API activity and implemented rate limiting on the 213... server. A Hetzner server was making requests with tens-of-megabyte responses; flagged but not yet banned. Single public node reliance creates security risks — wallets/dApps should avoid hardcoded node dependencies (msg#32018).
- **RocksDB Stability:** Multiple node operators experiencing OutOfMemoryError and block checksum mismatches. @error encountered disk-level corruption (msg#32241); @Michael's indexed full node running on 512MB RAM crashes after days (msg#32250). kushti clarified 1GB was acceptable in 5.0, needs verification in 5.1 (msg#32245, msg#32249).

### Ergo Protocol 6.0 Development
- **Sub-blocks & RBF:** Double-spend cannot be included in follow-up sub-block after lock-in protocol completion (msg#32048). Sub-blocks will affect timestamp-based logic and block reward emission (msg#32053, msg#32037–msg#32038).
- **Tree-based Versioning:** kushti finishing rework of tests for tree-based versioning in PR#1043 with nuanced serialization versioning (PR#1041) to merge into 6.0 (msg#32053).
- **Protocol Speed Improvements:** Community interested in faster blocks; topic flagged for post-Ergoversary discussion. Tweaking parameters requires testnet coordination; kushti offers to invite interested developers (msg#32053).

### Smart Contract Auditing & Security
- **Paideia Staking Exploit:** @Luivatra discovered critical vulnerability in Paideia staking contracts — missing validation allowed staking zero or negative token amounts, exploitable via AVL tree manipulation. Removed 55M staked Paideia; offering 25k bounty for exploit disclosure and community bug hunt (msg#32023, msg#32054). Proposal passed for Sigmanauts DAO; 5-day voting period ongoing for Paideia DAO. Fix deployed and verified (msg#32054).
- **Auditing Culture Gap:** Developers on shoestring budgets cannot afford professional audits. @cannon_q and others available for protocol "reking" work (msg#32027, msg#32041).

### Oracle Pool V1 Stability & V2 Migration
- **SigmaUSD Oracle Downtime:** Oracle pool operators offline for several hours; not enough operators to reach 4-node consensus (msg#32091–msg#32106). Root cause: incentivization gap — bank/protocol not paying oracle operators, unlike Gluon/Dexy reward schemes (msg#32108).
- **V2 Proposal Path:** kushti proposed Oracle Pool V2 migration: new update NFT with fixed contract, remove token check, update pool contract, migrate to V2 (msg#32253). Requires fixing update contract (EIP PR#29) to allow DORT token injection.

### SigmaUSD Bank & Wallet UX
- **UI Development:** c8e4d2a developing new SigmaUSD UI with on-chain transparency (talks to node, not explorer). UI "soonTM" but quality-of-life features pending (msg#32114–msg#32116). Voting concluded; bank contract update forum discussion live (msg#32230).
- **Direct vs. Proxy Interaction:** Debate on ErgoPay's role — c8e4d2a argues proxy contracts enable insecure design without clear checkmarks for address verification (msg#32153–msg#32163). MrStahlfelge counters that ErgoPay is transport-agnostic; issue is dApp design. Alternative: verified contract repository (EIP-5 style JSON with templates) in ergo-address-labels repo (msg#32208, msg#32211–msg#32215).
- **Nautilus & ErgoPay:** No ErgoPay support in Nautilus; @cafebedouin notes Captain Nemo opposes running backend services (msg#32218). @MrStahlfelge: "It isn't even hard to implement" (msg#32151); @HQΣr suspects philosophical objection to backend (msg#32152).

### Sigma Rust & Keystone Hardware Integration
- **Sigma Rust PR Merged:** @dusek_ merged Sigma Rust PR#782; Pgr456 integrated firmware build successfully (msg#32022, msg#32050–msg#32051).
- **Keystone Hardware Wallet:** Transaction parsing and signing in progress; deterministic signing for reduced transactions added (PR#796). Bluetooth added to Satergo, enabling larger UR-standard QR payloads vs. single-frame limits (msg#32220, msg#32225–msg#32227).

### Blockchain Applications
- **Cornell University Ergo Payment System:** @qx() deployed tipper-bot-based blockchain payment for large-format plotting. Users upload files, receive Discord QR with preset tipper command, server scans wallet for ERG or Cornell Brick (LETS token) payment. Launching next semester in production (msg#32083). Potential replication model for other institutions (msg#32087–msg#32090).
- **Cyberverse Gen4 Launch:** Launching Gen4 Citizens on Ronin L1 (EVM, low-fee); Christmas event with Santa NPC and candy collection (msg#32068).
- **Crux Matching Engine:** @Luivatra working on order matching; proposed hybrid arbitrage: buy on DEX until price aligns with SigmaUSD bank, then mint from bank (msg#32145).

### Documentation & Developer Experience
- **Docs Expansion:** Mark Glasgow expanded docs.ergoplatform.com — added Rosen Bridge token integration guide, Babel Fees, Merkle Trees, soft-fork mechanics, Sigma protocols internals, signature scheme details, ErgoScript compiler phases, data model overview (msg#32059).
- **Node Installation Guide:** Community requesting comprehensive start/stop/installation guide for "normies." References: ergo-installer.sh, Christophe Garant's docker-compose + Raspberry Pi setup (msg#32257–msg#32270).

### ErgoScript Compilation & Decompilation
- **Determinism:** Compilation is deterministic per compiler version (tested extensively in test suite). Decompilation possible but compiler optimizations mean original source cannot be fully recovered except for trivial scripts (msg#32069–msg#32078).

---

## Important Decisions or Announcements

- [@kushti khushi, msg#32084, 2024-12-19]: Releasing Ergo Node 5.1.0 with completed review.
- [@Luivatra, msg#32023, 2024-12-16]: Discovered and exploited critical Paideia staking contract vulnerability; removed 55M staked tokens preemptively; offering 25k Paideia bounty for exploit disclosure.
- [@kushti khushi, msg#32253, 2024-12-21]: Proposed Oracle Pool V2 migration strategy: new update NFT + contract fix + DORT token support.
- [@qx(), msg#32083, 2024-12-18]: Cornell Ergo payment system complete and launching next semester; tipper-bot integration with LETS token.
- [@kushti khushi, msg#32270, 2024-12-22]: Pool update will proceed solo on mainnet; Scalahub did not distribute ballot tokens.

---

## Technical Q&A Worth Preserving

- **Q** (@DiscordBridge/c8e4d2a): How exactly will RBF (replace-by-fee) work with sub-blocks?  
  **A** (@kushti khushi, msg#32048): Double-spend cannot be included in follow-up sub-block after complete lock-in of the protocol.

- **Q** (@Aco Šmrkas): Is this a valid way to check if some token is in any of inputs using ErgoScript nested iteration?  
  **A** (@Luivatra, msg#32043): "Yeah looks fine to me" (code pattern preserved in msg#32042).

- **Q** (@jossemii): Can it be demonstrated that an ErgoScript is equivalent to an ergoTree?  
  **A** (@Luivatra, msg#32070–msg#32071): Compile ErgoScript to ergoTree and compare; however, future compilers may produce different tree shapes with same semantics. ErgoTree can be printed as ErgoScript but will differ from original source due to optimizations and lost variable names.  
  **Follow-up** (@jossemii, msg#32074): For equivalence demonstration this is sufficient.  
  **Additional** (@kushti khushi, msg#32078): Deterministic for the same compiler version; many tests rely on this.

- **Q** (@HQΣr): Was the Paideia exploit related to the DEX transaction issue I encountered?  
  **A** (@Luivatra, msg#32033): No clear connection; your issue looked like a normal DEX tx with a stake key in change box.

- **Q** (@DiscordBridge/Pgr456): Found tests hitting CoinGecko rate limits; should we mock or deactivate CI tests?  
  **A** (@Pgr456, msg#32057): Deactivating API tests for CI, using mocked/local development only.

- **Q** (@Odiseus Me): Where to find comprehensive node start/stop guide for non-technical users?  
  **A** (@Aco Šmrkas, msg#32258): Refer to docs.ergoplatform.com/node/install/manual and node-faq. @Christophe Garant provided Docker Compose setup + cheatsheet commands and Raspberry Pi guide (msg#32260–msg#32264).

- **Q** (@DiscordBridge/mgpai): Any node branches need testing?  
  **A** (@kushti khushi, msg#32256): PR#2193 with extra indices needs testing; will test 5.1.0.

---

## Links Shared

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1043](https://github.com/ergoplatform/sigmastate-interpreter/pull/1043): Tree-based versioning rework (6.0 protocol).
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1041](https://github.com/ergoplatform/sigmastate-interpreter/pull/1041): Nuanced serialization versioning (to merge into #1043).
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1038](https://github.com/ergoplatform/sigmastate-interpreter/pull/1038): Fixed tests, under review.
- [https://github.com/ergoplatform/ergo/pull/2179](https://github.com/ergoplatform/ergo/pull/2179): README update merged to master.
- [https://github.com/ergoplatform/ergo/pull/2115](https://github.com/ergoplatform/ergo/pull/2115): Fanta's commits on sub-blocks reviewed.
- [https://github.com/ergoplatform/ergo/pull/2193](https://github.com/ergoplatform/ergo/pull/2193): Node with extra indices; needs testing (msg#32256).
- [https://github.com/paideiadao/paideia-sdk/tree/dev/src/main/resources/ergoscript/Stake/1.0.0](https://github.com/paideiadao/paideia-sdk/tree/dev/src/main/resources/ergoscript/Stake/1.0.0): Vulnerable Paideia staking contract (msg#32036).
- [https://github.com/ergoplatform/eips/pull/29](https://github.com/ergoplatform/eips/pull/29): Oracle Pool V2 update contract fixes proposed (msg#32253).
- [https://github.com/ergoplatform/oracle-core/pull/329](https://github.com/ergoplatform/oracle-core/pull/329): ERG/XAG and RSN/XAG oracle pairs.
- [https://github.com/nautls/projects/3](https://github.com/orgs/nautls/projects/3): Nautilus Mobile build tracker.
- [https://github.com/ergoplatform/sigma-rust/pull/782](https://github.com/ergoplatform/sigma-rust/pull/782): Sigma Rust merged (Keystone integration).
- [https://github.com/ergoplatform/sigma-rust/pull/796](https://github.com/ergoplatform/sigma-rust/pull/796): Deterministic reduced transaction signing.
- [https://www.ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874](https://www.ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874): SigmaUSD bank contract voting thread.
- [https://github.com/cruxfinance/ergo-address-labels](https://github.com/cruxfinance/ergo-address-labels): Ergo address labels repository (proposed curated contract metadata).
- [https://github.com/nautls/ergo-meta/tree/master/metadata/contracts](https://github.com/nautls/ergo-meta/tree/master/metadata/contracts): Existing contract metadata (unused).
- [https://github.com/jkrek17/Ergo](https://github.com/jkrek17/Ergo): Node installation package.
- [https://github.com/ccgarant/ergo-full-node-raspi](https://github.com/ccgarant/ergo-full-node-raspi): Raspberry Pi Ergo node setup with cheatsheet.
- [https://github.com/BlockchainCommons/Research/blob/master/papers/bcr-2020-005-ur.md](https://github.com/BlockchainCommons/Research/blob/master/papers/bcr-2020-005-ur.md): UR standard for multi-frame QR codes (used by Keystone).
- [https://vxtwitter.com/chepurnoy/status/1870068614050599157](https://vxtwitter.com/chepurnoy/status/1870068614050599157): kushti's Twitter post (msg#32149).

---

## Unresolved Questions

- **Oracle Pool V1 Operator Incentives:** Low participation linked to lack of protocol rewards. Migration to V2 with DORT (Dollar Oracle Reward Token) contingent on bank update proposal and community consensus — currently no proposals active (msg#32108–msg#32121).
- **Sub-blocks Impact on DeFi Contracts:** Unclear how faster blocks and microblocks affect existing AMM/lending contracts; discussion scheduled for post-Ergoversary technical roundtable (msg#32053).
- **Node Memory Requirements 5.1:** Conflicting data on acceptable RAM for indexed full node. 1GB verified in 5.0; 512MB crashes after days in 5.1. Needs formal documentation (msg#32245–msg#32251).
- **RocksDB vs. LevelDB Stability:** Multiple disk-level corruption reports on indexed nodes. @Pulsarz switched to RocksDB node; outcome pending (msg#32252).
- **ErgoPay Architecture:** Ongoing debate on proxy contract verification, centralization, and UX. No consensus on path forward; flagged as potential ErgoHack topic (msg#32153–msg#32212).
- **Nautilus ErgoPay Support:** Why not implemented remains disputed — either philosophical objection to backends or practical concerns around UX/security (msg#32146–msg#32152).
- **Contract Metadata Repository:** Who will maintain curated list (Ergo Foundation, ErgoDevs DAO, or community)? How to handle address changes due to compilation/parameterization? (msg#32208–msg#32215).
- **SigmaUSD Bank UI Timeline:** c8e4d2a aiming for "mid January" (msg#32080); quality-of-life blockers not specified.

---

## Notable Metrics & Achievements

- **Sigmanauts Mining Pool:** Reached all-time high >110 