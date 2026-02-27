# Ergo Developer Chat Summary — 2024-W40

## Key Topics Discussed

- **Ergo 6.0 Protocol Development**: Multiple PRs in progress for the 6.0.0-alpha2 candidate release, including improvements to numeric operations (`toBytes`/`fromBigEndianBytes`), sub-blocks (input/ordering blocks) implementation, and various contract optimizations awaiting review.

- **Nautilus Wallet GraphQL Issues**: Non-deterministic transaction creation errors traced to outdated or misconfigured GraphQL server instances behind the load balancer; resolved by pointing clients to `https://explore.sigmaspace.io/api/graphql`.

- **Ledger Hardware Wallet Support**: Ledger team requesting support for new devices (Stax and Flex) before going live; 4,100+ ERG bounty available from ErgoDevs DAO plus Ergo Hall of Fame spot for C developer to implement new UI support in the Ledger app.

- **Satergo Wallet Development**: v1.8.0 released with Javanese translation support and continued Scala/JDK compatibility troubleshooting; Proguard JAR optimization creating invalid bytecode for Scala classes under JDK 23+.

- **Rosen Bridge Testing & Deployment**: Community ETH testnet trials ongoing; Guard, Watcher, and minimum fee apps being updated to align with latest API changes.

- **Lithos Protocol**: NISP contract prototypes completed; testing using 6.0 devnet; MEV-related improvements to client in progress.

- **Dexy Protocol**: Payout contract updated per audit results; whitepaper updates needed for other contracts before redeployment.

- **Sigmanauts Mining Pool**: Test pool for mining swaps operational; miners can swap to RSN, rsADA, rsBTC, CYPX, GAU; discussion on bonus reward frequency and distribution.

- **Node Infrastructure Reliability**: Single server outages cascading across dependent services (wallets, explorers); request for wallet auto-failover capability to automatically switch between node/GraphQL/explorer instances when one becomes unavailable or out-of-sync.

- **Paideia DAO**: Task delays preventing deployment and testing progress; expected news next week.

- **ChainCash**: Testing notes transfer with community members (Jumei, dusek).

---

## Important Decisions or Announcements

- [@kushti, msg#30492, 2024-10-01]: Weekly Ergo Developers chat scheduled for Wed Oct 2, 1PM UTC; feedback requested on financial contracts, 6.0 soft-fork, upcoming ErgoHack.

- [@kushti, msg#30496, 2024-10-02]: Updated 5.0.23 / 5.1.0 candidates released with dedicated thread pools for extra indexer/API; testing requested especially for limited devices (Raspberry Pi).

- [@kushti, msg#30500–30502, 2024-10-02]: PR #1013 merged into 6.0.0 candidate; multiple PRs awaiting review (#1016, #1011, #1010, #1008, #979, #965, #962); 6.0.0-alpha2 assembly in progress; first Sigma Rust 6.0 PR (#773) completed and under review.

- [@cheeseenthusiast, msg#30531–30532, 2024-10-03]: 6.0.0-alpha2 release prioritized; `numeric.toBytes` support needed for Lithos NISP contract testing.

- [@chris45new, msg#30524, 2024-10-03]: Ergo Manifesto Javanese translation completed and posted to ergonaut.space.

- [@kushti, msg#30563, 2024-10-04]: Ledger app support bounty: 2K ERG + Stax/Flex hardware + Hall of Fame spot for C developer to add UI support; bounty raised to 4,100 ERG as of msg#30574.

- [@Aberg, msg#30622, 2024-10-06]: Satergo v1.8.0 released with Javanese translation support.

- [@Dmitry Usov, msg#30602, 2024-10-06]: GraphQL server issue at gql.ergoplatform.com identified as nginx container not restarting after graphql-server update; reverted to previous version for investigation.

---

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig, msg#30525): How do you force a reindexing of a node?
  **A** (@kushti, msg#30527): Stop the node, remove `/history/extra` folder in data folder, restart the node. An API method for this would be helpful.

- **Q** (@Moein Zargarzadeh, msg#30483): Nautilus clients getting errors on new versions.
  **A** (@anon_br, msg#30484–30488): Issue likely outdated GraphQL server instance. Investigate load balancer; direct clients to `https://explore.sigmaspace.io/api/graphql` as temporary workaround.

- **Q** (@jossemii, msg#30599): How to determine if a node is on testnet or mainnet?
  **A** (@Dmitry Usov, msg#30600): Check `http://<node-ip>:9052/info` endpoint; inspect **Network field** in response.

- **Q** (@jossemii, msg#30611–30618): Where does Nautilus specify which node it uses? How are transactions sent?
  **A** (@Aberg, msg#30615–30617): Nautilus does not directly use a node—only GraphQL endpoint and Explorer API. Transactions are sent via Explorer API, which routes to the Explorer's node.

- **Q** (@ioannisleontiadis, msg#30503): Master's thesis project on decentralized online tutoring with Ergo; seeking guidance.
  **A** (@kushti, msg#30506–30509): Willing to help. Research paper ideas posted on forum; manifesto and technical resources available for study (eUTXO, ErgoScript, proof-of-work blockchain).

- **Q** (@jossemii, msg#30535): Is there a template or guide to write KyA (Know Your Asset)?
  **A** (@wombo22, msg#30536): KyA documentation at https://docs.ergoplatform.com/contribute/standards/kya/; Reddit discussion available.

- **Q** (@Aberg, msg#30625–30627): Can JSON.java auto-generated file be edited to remove unused java.sql imports?
  **A** (implicit): File is auto-generated but has existing code comments; requires clarification on generation process; PR #240 filed on ergo-appkit.

---

## Links Shared

- [github.com/ScorexFoundation/sigmastate-interpreter/pull/1016]: 6.0 PR awaiting review (numeric operations and other improvements).

- [ergexplorer.com]: Corrected explorer URL (not ergoexplorer.com).

- [explore.sigmaspace.io/api/graphql]: Recommended GraphQL endpoint for Nautilus during load balancer issues.

- [ergoplatform.com]: Main documentation and node info endpoint.

- [storage.googleapis.com/ergo-cms-media/docs/AdvancedErgoScriptTutorial.pdf]: Advanced tutorial covering reversible and timed payments (ErgoHack9 project ideas #10, #11).

- [ift.tt/oOfuIZz]: ErgoHack9 ideas compilation (msg#30511).

- [ergoforum.org/t/possible-topics-for-a-thesis-or-a-research-paper/4872]: Thesis and research paper topic ideas (msg#30543).

- [mart.mewfinance.com]: NFT marketplace on Ergo (msg#30539).

- [skyharbor.io]: NFT marketplace alternative (msg#30539).

- [ergoauctions.org]: NFT auction marketplace (msg#30539).

- [docs.ergoplatform.com/contribute/standards/kya/]: KyA standards documentation.

- [github.com/tesseract-one/Ledger-app-ergo]: Ledger app repository requiring UI support for new devices.

- [github.com/ccgarant/ergo-full-node-raspi/pull/8]: Improved Raspberry Pi node setup script on "ccg-dev" branch (msg#30579).

- [github.com/ergoplatform/sigma-rust/pull/773]: First Sigma Rust 6.0 PR (msg#30501).

- [t.me/SatergoUpdates/97]: Satergo v1.8.0 release notes.

- [satergo.com]: Satergo wallet homepage.

- [github.com/ergoplatform/ergo-appkit/pull/240]: PR to address JSON.java auto-generation and java.sql dependency issue (msg#30627).

- [ergonaut.space/id/manifesto-javanese]: Ergo Manifesto in Javanese (newly translated, msg#30524).

---

## Unresolved Questions

- **Node/Wallet Infrastructure Decentralization**: @Paul (msg#30608–30609) and @kushti (msg#30621) flagged that single server failures cascade across ecosystem; no consensus on auto-failover strategy or wallet implementation of node/GraphQL endpoint rotation yet defined.

- **Ledger Hardware Wallet Timeline**: Bounty posted but no confirmed developer assigned yet (as of msg#30574). Unknown when C developer will claim bounty and start implementation.

- **GraphQL Server Reliability**: @Dmitry Usov reverted changes after nginx restart issue (msg#30602); unclear what specific graphql-server update was problematic or when re-rollout will be attempted.

- **Scala/JDK Compatibility**: @Aberg identified Proguard-generated bytecode invalid under JDK 23+ but unsure if regression is in JDK or Proguard; Java bug database check not yet filed (msg#30561, #30570–#30572). Workaround is building with JDK ≤22.

- **6.0.0-alpha2 Release Date**: Multiple PRs still awaiting review; no confirmed release date announced despite priority indicated by @cheeseenthusiast.

---