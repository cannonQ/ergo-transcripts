# Ergo Developer Chat Summary — 2024-W34
**Period:** 2024-08-19 to 2024-08-25  
**Messages processed:** 130  
**Primary participants:** kushti, mgPai, anon_br, Cheese Enthusiast, deathgripson, Luivatra, Marc the Shark, others

---

## Key Topics Discussed

- **Sigma 6.0 Activation & Testnet**: kushti completed costing tests for multiple Sigma 6.0 PRs (#1013, #1015, #1016, #979) and polished 6.0.0 for testnet. Activation details being checked and tweaked in PR #2152. Expected instructions in 1–2 days.

- **Sub-blocks & Weak-blocks Development**: Merkle proof refactoring underway for committing to new sub-block transactions and history. Tailstorm proposal flagged for review as alternative sub-blocks scheme.

- **Mempool & Transaction Confirmation**: PR #2164 by pgr456 refreshes blocks every 20 seconds to include new mempool transactions, reducing confirmation latency. Changes are to reference client behavior, not consensus rules.

- **Signature & Cryptography Questions**: Discussions on secp256k1 cofactors, whether different generator points can change curves in ErgoScript, and DDH security assumptions. kushti confirmed GroupElements have deserialization checks enforcing curve validity.

- **Box Selection & AppKit Issues**: ergpy using outdated AppKit; box selector logic unchanged in 3 years. Manual workarounds documented; AppKit maintainability flagged.

- **NIPoPoWs & Zero-Knowledge Proofs**: Bulletproofs and Groth one-out-of-many proofs reviewed for ErgoScript verification. Discussion on whether errors should reduce to false in lazy evaluation (deemed potentially unsafe for all deployed contracts).

- **Nautilus Wallet**: Migrated from `qrcode` to `uqr` library, removing 29 sub-dependencies. Transaction History view in progress. External type resolution fixed in ledger-ergo-js.

- **Lithos Protocol**: Initial client finished; MEV integration and NISP (NIPoPoWs in smart contracts?) development started for 6.0 devnet. Details requested for forum discussion.

- **Crux & Paideia DAO**: Backend synchronization completed; detected Nautilus/sigma-rust bug (#763) and contract issue (#232) during testing.

- **ChainCash**: Server updated post-testing; mainnet test round planned.

- **Dexy Protocol**: Arbitrage mint contract ready for deployment and testing of bank actions.

- **Sigmanauts Mining Pool**: Storage rent integration for MiningCore complete. Grant proposal finalizing. Concept proposed for Paideia DAO vote to approve pull requests to mining-core (e.g., bonus reward parameter changes).

- **Cup of Sugar (Local Commodity Trading)**: Frontend/backend deployed (Svelte/nginx, full node, ChainCash-rs). CICD pipeline and wallet connector in progress. Market research ongoing with producers; LLC formalization this week; two store locations identified.

- **Cyberverse**: Item prices adjusted, reward accumulation bug fixed, minigame point boosters added, BAN message text corrected, energy item bug fixed, fuel mechanics introduced for cybercars.

- **The Field** (peer-to-pool pledging): MVP contracts complete; offchain bot adjustments ongoing; dApp UI functional, mainchain testing active; private pool testing finding bugs in posted events.

- **Chain Indexer & REST API**: Indexing prototype complete; REST API + client in prototyping phase (evaluating autogeneration vs. hand-written+WASM). WASM integration producing mysterious bugs; high effort expected.

- **Analog Ergo / Atomic Swap Software**: Python API documentation drafted for official site (Config Tools, ElGamal, Initiator/Responder, Swap Tools, Atomicity interfaces).

- **Peer-2-Peer Pod**: Episode #2 recorded; episodes #3 & #4 being scheduled.

---

## Important Decisions or Announcements

- [@kushti, msg#29604, 2024-08-19]: Approved PR #2164 but will do another round of review.

- [@Cheese Enthusiast, msg#29667, 2024-08-21]: Lithos client initial development finished; MEV integration and NISP contracts for 6.0 devnet initiated.

- [@kushti, msg#29672, 2024-08-21]: Requested PR to add `https://maven.scijava.org/content/repositories/public/` resolver for leveldbjni dependency; promised PR in ~12 hours.

- [@kushti, msg#29694, 2024-08-22]: Approved and merged Aberg's AppKit module compatibility PR; discussed release and vulnerable dependency remediation.

- [@kushti, msg#29715, 2024-08-23]: Still testing Sigma 6.0 activation details and manual 6.0-specific transactions on devnet; will notify when ready.

- [@kusht, msg#29719, 2024-08-23]: Flagged documentation gaps and announced intent to cover on forum: Merkle tree format, Extension block section format, soft-forkability rules, signature scheme internals, ErgoScript compiler phases.

---

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#29597): What can cause a transaction to sign fine with sigma-rust but be rejected by the node?  
  **A** (@kushti, msg#29606): If tx IDs differ between sigma-rust and node, the signature generated for rust-txid fails validation for node-txid because the signature is checked against tx ID as a message. This is a serialization issue.

- **Q** (@Luivatra, msg#29615): Could `context.preheader.timestamp` cause different tx IDs?  
  **A** (@kushti, msg#29641): Context is not included in tx, but sigma-rust may take preheader from a different event, causing divergence.

- **Q** (@deathgripson, msg#29603): Could you set a different generator point in ErgoScript to use a different curve?  
  **A** (@kushti, msg#29605, msg#29611): secp256k1 subgroup has cofactor = 1. GroupElements have deserialization checks enforcing curve validity.

- **Q** (@deathgripson, msg#29608): What if a different `dlogGroup().generator()` value was given in the contract?  
  **A** (@kushti, msg#29642): Not all curves are DDH secure; need to check info carefully on specific candidates.

- **Q** (@krasaviceblasen, msg#29648): Would ErgoScript ever treat errors as false in OR expressions, allowing lazy evaluation?  
  **A** (@kushti, msg#29655): Not sure laziness can be secure for all deployed contracts.

- **Q** (@Michael, msg#29617): Does PR #2164 affect CEX confirmation requirements?  
  **A** (@Pgr456, msg#29618): No; change affects average confirmation times by refreshing blocks every 20s to include mempool transactions, not CEX backend polling.

- **Q** (@Adaptive Blocksize Limit, msg#29625): Can Ergo handle EVM smart contracts in UTXO model?  
  **A** (@kushti, msg#29643): Contracts are done very differently in Ergo; a program provides a guarding condition for spending a UTXO, not account-based execution.

- **Q** (@Adaptive Blocksize Limit, msg#29633): How does Ergo handle bridged USDC given its UTXO model?  
  **A** (@kushti, msg#29644): Deploy needed functionalities on Ergo side. Wormhole was previously implemented, then superseded by Rosen Bridge.

- **Q** (@jossemii, msg#29724): Why does ergpy's `buildUnsignedTransaction()` select InputBox 2 (smaller balance) over InputBox 1 (larger) for a 795.5 ERG output?  
  **A** (@dΣathgripson, msg#29731, msg#29732): Hard to reproduce (depends on address box state). Workaround: manually fetch many boxes, then filter to pick minimal set needed without triggering "too many boxes" errors, accounting for min fee.  
  **A** (@kushti, msg#29737): Will check box selector AppKit is using and provide answer shortly.

- **Q** (@zackbalbin, msg#29738): What sigma-rust tutorials should be prioritized?  
  **A** (@zackbalbin): Building examples of constructing different transaction types; sigma-rust source had to be reverse-engineered for understanding.

---

## Links Shared

- [https://docs.ergoplatform.com/node/testnet/mine-your-own-chain/](https://docs.ergoplatform.com/node/testnet/mine-your-own-chain/): Forking Ergo guide.

- [https://docs.ergoplatform.com/dev/get-started/](https://docs.ergoplatform.com/dev/get-started/) & [https://docs.ergoplatform.com/dev/scs/ergoscript/](https://docs.ergoplatform.com/dev/scs/ergoscript/): Protocol & ErgoScript introduction.

- [https://t.me/ergoplatform/508814](https://t.me/ergoplatform/508814): Bridged USDC on UTXO model discussion (referenced by @Glasgow).

- [https://github.com/ergoplatform/ergo/pull/2164](https://github.com/ergoplatform/ergo/pull/2164): Block refresh PR for faster mempool confirmation.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1013, #1015, #1016, #979, #1025](https://github.com/ScorexFoundation/sigmastate-interpreter): Sigma 6.0 PRs (costing, refactoring).

- [https://github.com/ergoplatform/ergo/pull/2152](https://github.com/ergoplatform/ergo/pull/2152): Sigma 6.0.0 testnet activation PR.

- [https://github.com/ergoplatform/ergo/pull/2177](https://github.com/ergoplatform/ergo/pull/2177): 5.0.24 candidate PR review.

- [https://mmaker.github.io/stdsigma/draft-orru-zkproof-sigma.html](https://mmaker.github.io/stdsigma/draft-orru-zkproof-sigma.html): Sigma protocol ZK proof draft.

- [https://github.com/dzyphr/AtomicAnalogSwapWebsite](https://github.com/dzyphr/AtomicAnalogSwapWebsite): Analog Ergo atomic swap documentation (Config Tools, ElGamal, Initiator, Responder, Swap Tools, Atomicity).

- [https://github.com/pragmaxim-com/chain-indexer](https://github.com/pragmaxim-com/chain-indexer): Chain indexing prototype.

- [https://github.com/pragmaxim-com/openapi-wasm-client](https://github.com/pragmaxim-com/openapi-wasm-client): REST API + WASM client prototype.

- [https://github.com/paideiadao/paideia-sdk/issues/232](https://github.com/paideiadao/paideia-sdk/issues/232): Paideia SDK contract bug.

- [https://github.com/ergoplatform/sigma-rust/issues/763](https://github.com/ergoplatform/sigma-rust/issues/763): Nautilus/sigma-rust compatibility bug.

- [https://explorer.ergoplatform.com/transactions/14ee89106c6d6441d3f2a10b39a1dd3e535d350284bc4b87055eceb2071097cb](https://explorer.ergoplatform.com/transactions/14ee89106c6d6441d3f2a10b39a1dd3e535d350284bc4b87055eceb2071097cb): Storage rent collection transaction (solo miner testing Sigma 6.0).

- [https://bitcoincashresearch.org/t/tailstorm-a-secure-and-fair-blockchain-for-cash-transactions/1357](https://bitcoincashresearch.org/t/tailstorm-a-secure-and-fair-blockchain-for-cash-transactions/1357): Tailstorm sub-blocks proposal.

- [https://github.com/ergoplatform/eips/blob/master/eip-0031.md](https://github.com/ergoplatform/eips/blob/master/eip-0031.md): Babel fees documentation (EIP-0031).

- [https://www.ergoforum.org/t/question-about-box-selection-in-transaction-construction-using-ergpy/4844](https://www.ergoforum.org/t/question-about-box-selection-in-transaction-construction-using-ergpy/4844): ergpy box selection forum discussion.

- [https://discord.gg/wa38bX57tY](https://discord.gg/wa38bX57tY): The Field project Discord.

- [https://t.me/ErgoDevelopers/11225](https://t.me/ErgoDevelopers/11225): Referenced Telegram discussion (Discord bridge nuked).

---

## Unresolved Questions

- **AppKit vulnerable dependencies**: Aberg identified multiple CVEs but did not specify which at time of chat (promised to check next day). Status of remediation unclear.

- **AppKit module compatibility**: Merged PR fixes modular project usage, but release timeline TBD.

- **Graal VM usage**: kushti asked if anyone uses GraalVM anymore for Ergo AppKit. Luivatra tried years ago but hit roadblocks; current status unknown.

- **sigma-rust box selector logic**: Root cause and optimal fix for ergpy's box selection behavior still under investigation by kushti.

- **Lazy evaluation safety in ErgoScript**: Whether error-as-false semantics can be safely implemented without breaking existing contracts remains open.

- **Sigma 6.0 activation timeline**: Exact mainnet activation date not finalized; devnet testing ongoing.

- **Documentation gaps**: kushti flagged 5 topics needing forum coverage (Merkle tree format, Extension block format, soft-forkability rules, signature scheme internals, ErgoScript compiler phases); work not yet started.

- **NISP in Lithos context**: Specific details on how NIPoPoWs integrate with Lithos smart contracts deferred to forum discussion TBD.

---