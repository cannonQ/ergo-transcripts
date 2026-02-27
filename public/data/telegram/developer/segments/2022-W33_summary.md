# Ergo Developer Chat Summary — 2022-W33

## Key Topics Discussed

- **Transaction indexing & node performance**: Discussion of whether Ergo nodes have transaction indexing by default, how large such indexes are, and whether scanning degrades performance. Comparison to Bitcoin's `txindex` flag and its off-by-default design pattern.

- **Node API design & categories**: Debate over organizing blockchain-related API endpoints under a "blockchain" category versus "extra", with discussion of adding geolocation data (country codes, city, latitude/longitude) to Ergonodes API.

- **NIPoPoWs support in AppKit**: kushti flagged that NIPoPoWs are a key selling point of Ergo but lack proper support in wallet applications, especially as the ecosystem moves away from centralized explorers. Opened GitHub issue #1813 requesting core support.

- **SPV client architecture**: Discussion of `ergo-spv` library and building alternative lightweight clients using NIPoPoWs, HTTP API, or peer-to-peer protocols. AppKit integration as the forward path for HTTP-based verification.

- **Privacy-preserving data access**: kushti noted that anonymity in Bitcoin-style Bloom filter queries is difficult; mentioned oblivious transfer-based solutions exist but are complex and require additional server-side storage. Proxy layer on nodes suggested as interim approach.

- **Contract design patterns for grid-based trading**: kushti proposed creating price grids via many simple orders with the same contract but different prices, paired with AMM LP trades. Preference expressed for simple contracts with multiple UTXOs over complex single-contract designs.

- **Storage & data gaps in state trees**: Question raised whether congestion over 10 blocks could cause gaps in merkle tree data updates. kushti confirmed this is possible, notes more designs to be published on forum.

- **ErgoTree serialization & execution**: Technical clarification that stored ErgoTree cannot contain `executeFromVar`, but `executeFromRegister` works similarly.

- **Fee estimation API**: kushti noted Ergo has a fee estimation API that is underutilized by applications and not yet tested; should be properly integrated and hardened similar to Bitcoin wallet patterns.

- **JIT costing in testnet**: kushti reminded developers to test contracts on testnet with JIT costing activated (v5.0 interpreter under review).

---

## Important Decisions or Announcements

- [@kushti, msg#5246, 2022-08-16]: **Ergo protocol reference client 4.0.39 released** — https://github.com/ergoplatform/ergo/releases/tag/v4.0.39

- [@kushti, msg#5323, 2022-08-17]: **Testnet explorer fixed** — https://testnet.ergoplatform.com/en/

- [@kushti, msg#5332, 2022-08-18]: **Ergo protocol reference client 4.0.40 released** — https://github.com/ergoplatform/ergo/releases/tag/v4.0.40

- [@Aberg, msg#5261, 2022-08-17]: **Satergo v1.4.1 released** with fixes for Windows node updating, sync blocking, IPv6 support, address renaming, node shortcut improvements, and Portuguese translation added.

- [@kushti, msg#5422, 2022-08-20]: **Opened GitHub issue #1813** requesting core project support for NIPoPoWs in AppKit as a priority, given their importance as a selling point and the ecosystem's shift away from explorer dependency.

- [@kushti, msg#5423, 2022-08-20]: **Currently focused on**: optimizations for unconfirmed transactions PR, UTXO set snapshot downloads, PR reviews, and final review of 5.0 interpreter.

---

## Technical Q&A Worth Preserving

- **Q** (@Aberg, msg#5197): Does Ergo have a transaction index by default, or does this change create one? Does searching through the blockchain degrade node performance?
  
  **A** (@kushti, implicit): Following Bitcoin's pattern, transaction indexing is optional; the overhead depends on implementation specificity. Aberg later notes (msg#5234) that Bitcoin has `txindex` off by default, suggesting this is a good precedent unless overhead is negligible.

- **Q** (@Aberg, msg#5206): If not all nodes store the blockchain, what happens when you try to access such a node?
  
  **A** (implied): Nodes without full blockchain storage cannot serve historical transaction queries. Luivatra (msg#5219) suggests allowing use of full nodes for certain APIs as a workaround.

- **Q** (@卡卡罗特, msg#5243): If I send three transactions at 10:00, 10:01, and 10:02 AM, will confirmations be queued by submission time?
  
  **A**: No explicit answer in chat; implied answer is that transactions compete by fee in mempool, not submission time.

- **Q** (@Luivatra, msg#5362): Could a gap in the data occur if the merkle tree isn't updated within 10 blocks due to congestion?
  
  **A** (@kushti, msg#5363): Yes, it could.

- **Q** (@kushti, msg#5380): Can stored ErgoTree contain `executeFromVar`?
  
  **A** (@kushti, msg#5380-5381): No, stored ErgoTree cannot contain `executeFromVar`. However, `executeFromRegister` works similarly and is supported.

- **Q** (@kushti, msg#5509): Implicit question about contract verification and costs.
  
  **A** (@kushti, msg#5509): Developers should test contracts on testnet where JIT costing is activated (part of 5.0 interpreter review).

---

## Links Shared

- [https://papers.orbisprotocol.com/whitepaper.pdf]: Orbis Protocol whitepaper on zk-rollups for Cardano; shared as potentially translatable scaling concept to Ergo (msg#5210).

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.39]: Ergo protocol reference client 4.0.39 release (msg#5246).

- [https://testnet.ergoplatform.com/en/]: Testnet explorer, fixed as of 2022-08-17 (msg#5323).

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.40]: Ergo protocol reference client 4.0.40 release (msg#5332).

- [https://github.com/ergoplatform/ergo/issues/1813]: GitHub issue requesting NIPoPoWs support in AppKit (msg#5422).

- [https://www.ergoforum.org/t/scalable-on-demand-nft-minting/3770]: Ergo forum thread related to scalable NFT minting contract patterns (msg#5474).

- [https://en.wikipedia.org/wiki/Tower_of_Babel]: Reference for "Tower of Babel" in context of language/protocol etymology discussion (msg#5411).

---

## Unresolved Questions

- **NIPoPoWs integration timeline**: When will NIPoPoWs be prioritized for AppKit and wallet integration? Who will be assigned? (msg#5422)

- **Privacy for SPV clients**: What is the best practical approach to anonymity for lightweight clients? Oblivious transfer solutions are complex; proxy layer viability TBD. (msg#5436-5438, msg#5441-5448)

- **Fee estimation API adoption**: Why is the existing fee estimation API underutilized and untested? What hardening is needed before recommending it to applications? (msg#5422 implicit)

- **Contract design optimization**: What additional contract design patterns will kushti publish on the forum for grid-based and state machine approaches? (msg#5370, msg#5508)

- **EIP-32 review**: kushti promised to review a proposed EIP-32 ASAP (msg#5445); status unknown.