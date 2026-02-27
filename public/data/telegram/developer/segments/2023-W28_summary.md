# Ergo Developer Chat Summary — 2023-W28
**Period:** 2023-07-10 to 2023-07-16  
**Participants:** 13 | **Messages:** 75

---

## Key Topics Discussed

- **UTXO Set Snapshots & Node Bootstrapping**: Nodes on v5.0.12 generated the first UTXO set snapshot at height 1,044,479, unlocking faster bootstrapping on mainnet. [@kushti, msg#15138, 2023-07-12]

- **Integer Overflow in Price Calculations**: Converting `Long` to `BigInt` resolves integer overflow in pricing formulas like `(reserveIn.toBigInt * precisionFactor) / hodlCoinsCircIn`. [@kushti, msg#15112–15114, 2023-07-10]

- **P2P vs. ZeroMQ for Node Event Broadcasting**: Discussion about whether TCP-based P2P layer (already used for transaction broadcasting) could replace ZeroMQ for mempool event subscriptions. Concerns raised about node weight and dependency complexity. [@Aberg, msg#15143–15188, 2023-07-12]

- **ErgoScript Development Resources & Language Options**: Clarified that validators must be written in **ErgoScript only**. Off-chain TX construction uses AppKit (Scala/Java), Sigma-Rust, or language wrappers (Go, JS, etc.). [@Pulsarz, msg#15305–15309; @Cheung Wai Lok, 2023-07-15]

- **Sigma-State Maven Dependencies**: Discussion of Scala version suffixes (2.11, 2.12, 2.13) when importing sigma-state-interpreter, and challenges with SBT/Scala toolchain setup. [@Aberg, msg#15323–15332, 2023-07-16]

- **Block Height vs. Timestamp Dependency**: Question about how faster block times affect on-chain logic that depends on block height and timestamp. Acknowledged as an interesting edge case requiring careful analysis. [@kushti, 2023-07-12]

---

## Important Decisions or Announcements

- [@kushti, msg#15138, 2023-07-12]: **UTXO set snapshot unlocked on mainnet** — v5.0.12 nodes generated first snapshot at height 1,044,479, enabling snapshot-based bootstrapping.

- [@kushti, msg#15280, 2023-07-13]: **Technical WG Participation** — Call for developers to participate in UTXO Alliance Technical Working Group meeting (Friday, 3 PM UTC).

---

## Technical Q&A Worth Preserving

- **Q** (@kushti): Does converting to `BigInt` solve integer overflow in price calculations with `Long` values?  
  **A** (@kushti): Yes. Integer overflow is the issue; `val price: Long = (reserveIn.toBigInt * precisionFactor) / hodlCoinsCircIn` resolves it without error. [@msg#15112–15114, 2023-07-10]

- **Q** (@Aberg): Why is ZeroMQ needed if nodes already broadcast transactions over TCP P2P?  
  **A** (@Aberg): TCP layer already exists and is provided by all nodes. You can listen for Inv messages and request modifiers directly. Concern: node becoming too heavy with additional systems. [@msg#15143–15172, 2023-07-12]

- **Q** (@Кирилл): How do I get raw serialized transaction bytes from Node API for use with `/validateBytes`?  
  **A** (Implied): Use Sigma-Rust or language wrappers. Go wrapper in progress but incomplete. AppKit available for JVM. [@msg#15251–15278, 2023-07-13]

- **Q** (@Cheung Wai Lok): Can I write smart contract validators in Rust or Go, or only ErgoScript?  
  **A** (@Pulsarz): **Only ErgoScript for on-chain validators**. Rust/Go/JS are for off-chain transaction construction via AppKit, Sigma-Rust, or wrappers. [@msg#15305–15309, 2023-07-15]

- **Q** (@Cheung Wai Lok): What are good resources for ErgoScript development with Cardano UTXO background?  
  **A** (@Flying Pig, @Cheung Wai Lok): Official docs, **ergoscript-by-example** GitHub repo recommended. Clear examples of core functionalities. [@msg#15290–15303, 2023-07-15]

- **Q** (@Aberg): Which Maven artifact suffix (2.11/2.12/2.13) for sigma-state? Can I use ErgoTree parts without the ErgoScript compiler?  
  **A** (@kushti): Refactor status unclear; requires follow-up. [@msg#15323, 2023-07-16]

---

## Links Shared

- [https://github.com/Satergo/ergonnection](https://github.com/Satergo/ergonnection): P2P connection library for Ergo. Updated version to be pushed. [@Aberg, msg#15184–15185]

- [https://tn-faucet.ergohost.io/](https://tn-faucet.ergohost.io/): Testnet faucet (alternative to testnet.ergofaucet.org which was returning 502 errors). [@Aberg, msg#15249]

- [https://github.com/sigmaspace-io/ergo-lib-go](https://github.com/sigmaspace-io/ergo-lib-go): Sigma-Rust wrapper for Go (partial implementation). Offered for extension. [@Pgr456, msg#15278]

- [https://docs.ergoplatform.com/dev/scs/ergoscript/](https://docs.ergoplatform.com/dev/scs/ergoscript/): Official ErgoScript documentation. [@Flying Pig, msg#15293]

- [https://github.com/ergoplatform/ergoscript-by-example](https://github.com/ergoplatform/ergoscript-by-example): Curated examples with clear explanations of ErgoScript core functions. [@Cheung Wai Lok, msg#15301]

- [https://github.com/pepenger/ergo-golang/blob/2523795a77e6e0b433e3e933c917c1e4ec0c628f/pkg/transaction/transaction.go#L306](https://github.com/pepenger/ergo-golang): Go serialization attempt (validation issue reported). [@Кирилл, msg#15252]

---

## Unresolved Questions

- **Sigma-state Maven dependency version**: Which Scala suffix (2.11/2.12/2.13) should be used? Refactor status for decoupling ErgoTree from ErgoScript compiler unclear. [@Aberg, msg#15323; @kushti, msg#15351]

- **Block time effects on height/timestamp logic**: How would faster block times (via speed improvement proposals) affect contracts with assumptions about block height ↔ timestamp correlation? Requires careful security analysis. [@kushti, 2023-07-12]

- **ZeroMQ necessity vs. TCP adequacy**: Is ZeroMQ genuinely required for mempool event subscription, or can P2P TCP layer be adapted instead? Trade-off between simplicity and dependency management. [@Aberg, msg#15143–15172]

- **Go Sigma-Rust wrapper completeness**: What functions remain unimplemented in `ergo-lib-go`? Can transaction serialization/validation be achieved with current state? [@Pgr456, @Кирилл, msg#15278]

---