# Ergo Developer Chat Summary — 2025-W10
**Period:** 2025-03-03 to 2025-03-09  
**Participants:** 14 | **Messages:** 213

---

## Key Topics Discussed

- **SigmaUSD Bank Update Box Refresh**: Voting completed with 2 votes to refresh the update box with 10 ERG for storage rent sustainability. Update executed in transaction `fb7947eb2627d85661f07cdf9489c0e82a6027d0ad4aaee679e2775347b3e441`. Protocol and key management decisions deferred.

- **Scala Ecosystem & JDK Compatibility**: Discussion on dropping Scala 2.11/2.12 support. Key concern: Android 8-9 device compatibility depends on JDK version; newer Scala 3 targets JDK 17, which breaks older devices. GraalVM mentioned as potential mitigation.

- **Ergo 6.0 Protocol Development**: Input-blocks implementation ongoing with fork resolution work. Several PRs under review for code cleanup. 6.0 activation voting date not yet announced but expected soon.

- **Nautilus Wallet Bug Fix**: Fresh wallet connection fails with `code: -2, "No addresses found"` error when calling `get_used_addresses()` on wallets without prior transaction history. Fix queued for priority in next release with internationalization support planned.

- **Light Node Configuration for Android**: User reported difficulty syncing with UTXO bootstrap + NIPoPoWs. Recommended full node for Android; stateless/light modes have unresolved compatibility issues with wallet software.

- **Testnet 6.0 Peer Connectivity**: Node discovery issues on 6.0-RC2; manual peer configuration required. Nodes actively setting up new seed peers for testnet infrastructure.

- **ErgoScript Developer Experience**: Improvements requested: console logging/print statements, multi-parameter functions, and module imports for code reuse. Current tooling lacks structured debugging and code organization.

- **Demurrage Collection**: Sigmanauts mining pool collected 37 ERG in demurrage across block submissions. DAO voting proposed to increase demurrage fee collection from 0% to 1%.

---

## Important Decisions or Announcements

- [@kushti, msg#33362, 2025-03-06]: SigmaUSD bank update completed. Bank contract unchanged; update box now has 10 ERG for decades of storage rent coverage.

- [@kushti, msg#33251, 2025-03-04]: Weekly Ergo Developers chat announced for Wed, Mar 5th, 1PM UTC with focus on financial contract development, 6.0 soft-fork, input-blocks EIP, Sigmachains, and L2 research.

- [@anon_br Σ, msg#33376, 2025-03-06]: Nautilus wallet internationalization prioritized following user request for Russian/English support for non-English-speaking users.

- [@Aberg Satergo dev, msg#33285, 2025-03-05]: Satergo update imminent; launched private Maven repository for Bluetooth and Ledger libraries to decouple dependencies from main codebase.

- [@Unknown, msg#33312, 2025-03-05]: Ergo Node for Android resurrected and functional after year-long dependency issues. One-click installation now available.

---

## Technical Q&A Worth Preserving

**Light Node Bootstrapping & Wallet Integration**
- **Q** (@Unknown, msg#33321): What is the best config for a light node? UTXO+NIPoPoWs bootstrap fails to sync; digest-only mode syncs but doesn't work with Ergo Wallet.
  **A** (@MrStahlfelge, msg#33361; @kushti, msg#33328): Stateless nodes did not exist during MrStahlfelge's tenure. kushti confirmed testing UTXO+NIPoPoWs on their end; confirmed need for UTXO snapshot download progress reporting (msg#33339).

**Android & JDK Compatibility for Scala**
- **Q** (@Luivatra, msg#33218): What is the significance of Scala 3? Why is it needed?
  **A** (@kushti, msg#33223): For established codebases like Ergo stack, Scala 3 switching provides little value. (@novamon_25735, msg#33271): Scala 3 is more Pythonic in syntax but libraries haven't caught up; problem is adoption lag, not language capability.
- **Q** (@CannonQ, msg#33237): Would Scala 2.13+ require rendering old Android phones (used for cold wallets) unusable?
  **A** (@novamon_25735, msg#33243): Provides JDK-to-Android version mapping table. Apps built pre-upgrade retain compatibility; only new builds are affected. GraalVM may rectify compatibility (msg#33239).

**Nautilus Wallet Connection Error**
- **Q** (@Anastasia Polozova, msg#33353, #33366): New wallet fails with error code `-2, "No addresses found"` on Safari/Firefox after Chrome development. Connection confirms but returns error.
  **A** (@anon_br Σ, msg#33369, #33371): `get_used_addresses()` throws on brand-new wallets without prior transactions. Fix queued for next version to return empty array instead.

**DeserializeRegister Default Value Extraction**
- **Q** (@kushti, msg#33327): PR #1055 needs test coverage where default value is successfully extracted from DeserializeRegister.
  **A** (@novamon_25735, msg#33332): No existing successful extraction cases exist; tests intentionally fail to debug output. For Coll[Byte] returns Some(value); for Int/SigmaProp throws without checking default value.

**Testnet 6.0 Node Compilation**
- **Q** (@c8e4d2a, msg#33404): How to compile ergo-6.0.0-RC2 when `sigmaStateVersion = "5.0.14-518-ca2df921-SNAPSHOT"` is missing?
  **A** (@kushti, msg#33415): Must publish sigma version locally via `sbt publishLocal` from v6.0.0-RC2 sigma branch.

**Testnet Peer Configuration**
- **Q** (@mgpai, msg#33393): Testnet node cannot connect to main testnet node; connection timeout on 213.239.193.208:9022.
  **A** (@kushti, msg#33416): Remove `.ergo/peers` and set `peerDiscovery = false`; manually define `knownPeers = ["5.161.73.235:9022", "74.69.128.24:9022", "176.9.15.237:9021", "213.239.193.208:9020"]`.

**Block Data Indexing Strategy**
- **Q** (@arkadias, msg#33421): Should I use sigma-rust/ergo-lib or ergo-node-interface-rust for indexing block data? Encountering OutOfBounds errors.
  **A** (@Marc the Shark, msg#33426, #33429): Use Ergo MCP (model context protocol) tool for node/explorer API access with chain context. Alternatively, scrape indexed node into custom DB for specialized lookup patterns.

---

## Links Shared

- [https://gist.github.com/kushti/56c7678274c674fddfaf23e36d2e92a6]: SigUSD bank update ballot contract requests and parameter specifications.
- [https://github.com/kushti/sigmausd/blob/master/src/main/scala/sigmausd/update/SigUsdBankDeploymentAndUpdate.scala]: SigmaUSD update and ballot contract source code.
- [https://github.com/mgpai22/sigusd-ballot]: TypeScript tool for signing and submitting SigmaUSD ballot transactions using FleetSDK.
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1054]: PR for 6.0 Sigma code cleanup and review.
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1055]: DeserializeRegister implementation PR with default value extraction edge cases.
- [https://github.com/ergoplatform/sigmastate-interpreter/issues/2199]: Node issue tracker for input-blocks fork resolution.
- [https://github.com/ergoplatform/sigmastate-interpreter/issues/2200]: Node issue tracker for block encoder fix (openapi.yaml update needed).
- [https://github.com/ergoplatform/sigmastate-interpreter/issues/1053]: Performance style guide compliance issue for review.
- [https://github.com/rustinmyeye/ErgoNodeAndroid]: Ergo Node for Android installation repository (revived after year of dependency issues).
- [https://github.com/ergoplatform/ergoweb]: Website repository flagged for PR opportunities and quick fixes.
- [https://github.com/input-output-hk/scrypto/pull/112]: Scrypto dependency upgrade PR pending review.
- [https://github.com/ScorexFoundation/scorex-util/pull/31]: Scorex-util dependency PR pending review and release v0.11.0.
- [https://github.com/ScorexFoundation/debox]: Debox library awaiting v0.11.0 release for upstream dependency updates.
- [https://docs.scala-lang.org/tutorials/scala-on-android.html]: Scala on Android official documentation regarding JDK/Android version compatibility.
- [https://www.scala-lang.org/blog/next-scala-lts.html]: Scala LTS roadmap; next version likely targets JDK 17 (drops JDK 8, may skip 11).
- [https://github.com/ergoplatform/sigma-rust/pull/810]: Sigma-Rust PR pending review.
- [https://github.com/ErgoDevs/Ergo-Bounties]: Ergo bounties tracker. Week of Mar 5: 100 open issues, 39,855.80 ERG + SigmaUSD bounties; 2 cleared, 3 added.
- [https://ergo-node-explorer.vercel.app]: Node explorer experiencing API timeout/rate limiting issues; retry strategy added.
- [http://213.239.193.208:9053/blockchain/token/byId/6c35aa395c7c75b0f67f7804d6930f0e11ef93c3387dc1faa86498d54af7962c]: Mew token missing from 213 index; present on other nodes.
- [https://github.com/rustinmyeye/ergo-node-interface]: Ergo node interface repository.
- [https://github.com/ergoplatform/ergo-node-interface/pull/64]: Node interface PR under review.
- [https://x.com/IOHK_Charles/status/1896791646962090427]: Charles Hoskinson fork/layer 2 discussion (L2 centralization vs. security tradeoff).

---

## Unresolved Questions

- **SigmaUSD Protocol & Key Management** [@kushti, msg#33362]: Deferred decision on what to do with SigmaUSD protocol and keys following update box refresh. No timeline given.

- **Scala 3 Performance Impact** [@Aberg Satergo dev, msg#33261]: Claim that Scala 3 "forces functional style" less performant — not verified. Requires deeper discussion.

- **Scala Community Viability** [@Aberg Satergo dev, msg#33265]: How will Ergo attract contributors in stagnating Scala ecosystem? No resolution offered.

- **Testnet Node Discovery Infrastructure** [@c8e4d2a, msg#33398]: Where is comprehensive list of active testnet nodes? [@mgpai, msg#33401]: "Working on it" — status unknown.

- **Node API Rate Limiting** [@Flying Pig, msg#33383]: Has rate limiting been added to node API recently? Reports of timeouts after ~10 calls. No clear answer provided.

- **Token Index Inconsistency** [@Flying Pig, msg#33385]: Mew token (ID `6c35aa395c7c75b0f67f7804d6930f0e11ef93c3387dc1faa86498d54af7962c`) missing from node 213 index despite presence on other nodes. Issue status unknown.

- **6.0 Mainnet Activation Timeline** [@kushti, msg#33220]: Voting date for 6.0 mainnet activation "still not announced, but I guess we are close to it." Exact date TBD.

- **ErgoScript Debugging & Tracing** [@mgpai, msg#33334, #33340, #33343]: Requests for console logging, traces, multi-parameter functions, and module imports. No prioritization or roadmap shared.

- **L2 Censorship & Centralization Tradeoff** [@mgpai, msg#33408-#33410]: Raised concern that L2 solutions more centralized = less security/more censorship risk. [@kushti, msg#33412]: Response questions utility of "L2 blocks" in centralized payment systems; debate left open.