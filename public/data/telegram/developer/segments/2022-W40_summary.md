# Ergo Developer Chat Summary — 2022-W40

## Key Topics Discussed

- **Storage Rent and Creation Height Validation**: Extended discussion of how storage rent calculation uses self-reported creation height rather than settlement height, the security implications for smart contracts, and potential protocol-level mitigations via monotonic height rules.

- **Spectrum DEX Creation Height Bug**: Community developer using modified Sigma Rust bot inadvertently created boxes with creation height 0, exposing a gap in contract developer awareness around storage rent protection measures.

- **Hard Fork 4.0 and Node Updates**: Discussion of node compatibility post-hard fork, difficulty adjustment parameter changes, and Bitcoin difficulty integration. Testnet Explorer updated to show parameters.

- **Box Consolidation and Creation Height Inspection**: MrStahlfelge's Mosaik-based consolidation utility (`mosaikboxconsolidation`) revealed long-standing creation height issues, particularly in Spectrum pool boxes.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#7349, 2022-10-05]: Creation height rules can be narrowed in 5.0 before final release; next soft fork will address token handling during storage rent events.

- [@kushti khushi, msg#7352, 2022-10-08]: Monotonic creation height rule code completed, tests finishing, PR opening tomorrow.

- [@kushti khushi, msg#7403, Aberg Satergo dev, 2022-10-05]: Ergonodes.net update with improved node count charts (reachable/unreachable separation), version usage over time, and version market share charts; daily snapshots now accessible via API.

- [@MrStahlfelge | Won't DM, msg#7238, 2022-10-04]: Mosaik consolidation feature created in 4 hours; code available OSS on GitHub.

---

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#7244): Is storage rent based on creation height or settlement height?
  **A** (@MrStahlfelge, msg#7245): According to kushti's forum post, it uses creation height. (@kushti khushi, msg#7248–7249): Settlement height would break useful box properties (you couldn't know box bytes pre-inclusion) and complicate design significantly. Storage rent uses self-reported creation height.

- **Q** (@Luivatra, msg#7250): If decentralized off-chain code allows anyone to spend, how do we prevent malicious creation height setting to 0?
  **A** (@kushti khushi, msg#7252): Creation height is stored in the box and protected by transaction signatures.

- **Q** (@Luivatra, msg#7263): Can contracts protect against malicious creation height manipulation via `outbox.creationHeight > self.creationHeight`?
  **A** (@kushti khushi, msg#7264): Possible. (@MrStahlfelge, msg#7267): This should be standard practice (like checking `SELF.id`) but most developers are unaware.

- **Q** (@Luivatra, msg#7331–7332): Can a miner taking storage rent set the resulting UTXO's creation height to 0 and take rent again next block?
  **A** (@kushti khushi, msg#7334–7335): Miner must set the inclusion block height as creation height on updated output; the protocol enforces precise timestamping in this case.

- **Q** (@Luivatra, msg#7346): Should monotonic creation height rule be discussed on forum?
  **A** (@kushti khushi, msg#7351–7352): Yes, monotonic creation height rule solves observed issues without creating new ones.

- **Q** (@kii, msg#7476): Is it possible to create a box that cannot be spent but whose registers can be altered?
  **A** (No response in this segment)

---

## Links Shared

- [Ergo Explorer testnet](https://testnet.ergoplatform.com/en/): Testnet Explorer showing parameters (updated post-hard fork).
- [GitHub: mosaikboxconsolidation](https://github.com/MrStahlfelge/mosaikboxconsolidation): OSS Mosaik-based box consolidation utility revealing creation height inspection capabilities.
- [Ergo Forum: Storage Rent Details](https://www.ergoforum.org/t/storage-rent-details/256): Storage rent mechanism documentation by kushti.
- [Ergo Forum: ChainCash – Spender-Signed Currency on Ergo](https://www.ergoforum.org/t/chaincash-a-spender-signed-currency-on-ergo/4015): New protocol proposal by kushti (details to be expanded).
- [GitHub Issue #1860](https://github.com/ergoplatform/ergo/issues/1860#issuecomment-1266334802): Referenced for scam comment removal request.

---

## Unresolved Questions

- **Token Handling During Storage Rent**: What should happen to tokens in boxes with insufficient ERG when storage rent is collected? Options discussed: miner takes all tokens, tokens are burned, or tokens sent to reemission contract for smoother release. No final decision recorded.

- **EIP vs. Forum Discussion Format**: Debate over whether monotonic creation height rule warrants an EIP or forum discussion; kushti indicated EIPs are the path forward for node release but MrStahlfelge questioned if a "very short" rule change justifies full EIP format.

- **Settlement Height Feasibility**: Whether settlement height could replace creation height in future protocol versions (rejected as infeasible for 5.0 but left open for long-term exploration).

- **Scope of Monotonic Rule Coverage**: Whether `outbox.creationHeight >= max(input.creationHeight)` rule covers all edge cases, particularly for contracts accepting additional inputs without explicit creationHeight checks. Consensus that it addresses discussed cases but may not be exhaustive.