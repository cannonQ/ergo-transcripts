# Ergo Developer Chat Summary — 2022-W07
**Period:** 2022-02-14 to 2022-03-25  
**Activity Level:** Moderate (50 messages, 9 participants)

---

## Key Topics Discussed

- **Mixing protocols & privacy**: @kushti shared discussion on mixing protocol design, with references to forum posts on protocol specifications.

- **Schnorr signature verification in ErgoScript**: @kushti linked forum post on implementing Schnorr signature verification within ErgoScript contracts.

- **Extended UTXO (eUTXO) development fundamentals**: @Luivatra emphasized understanding eUTXO model as prerequisite for dApp development, pointing contributors to documentation.

- **Ergo AppKit API design**: Multiple discussions between @Aberg and @MrStahlfelge on AppKit PR #134, including Scala object usage in API vs. implementation separation, and naming conventions (Asset vs. EIP-4 Token).

- **HD wallet key encoding**: @Aberg questioned use of hex encoding for xpub keys vs. base58, noting it lacks visible distinction from Bitcoin xpub and wastes space. Consensus reached that the decision is locked in.

- **EIP-27 activation on testnet**: @kushti announced EIP-27 activated on testnet, with follow-up work needed on pool accounting updates, explorer integration, and testing.

- **Node synchronization performance**: @Aberg noted Ergo syncs relatively quickly (~3 hours from scratch vs. Monero's full day), addressing scalability concerns.

- **Satergo UI improvements**: @Aberg indicated ongoing work on wallet UI refinements.

---

## Important Decisions or Announcements

- [@kushti, msg#1314, 2022-03-09]: EIP-27 activated in testnet at block `ce3e9e73638a6c1880a2516d76791f71b8f52696f445f87f2eb737247306f203`. Pools need to update accounting, explorer needs updates, and testing required.

- [@Aberg, msg#755, 2022-02-23]: xpub key hex encoding format decision is finalized and too late to change.

---

## Technical Q&A Worth Preserving

- **Q** (@Aberg, msg#852): "In your PR, I'm thinking Asset is a better name than Eip4Token, what do you think?"  
  **A** (@Aberg, msg#1211, referencing aslesarenko): `toErgoContract` would be better naming; `to` is preferred over `as` since it's already used in the JDK (e.g., `File::toPath`, `Path::toFile`).

- **Q** (@Aberg, msg#855): "Do the existing tokens follow this standard? Like can I trust using this class for random tokens?"  
  **A** (@Unknown, msg#857): Addressed for common tokens like NFTs and SigmaUSD (context incomplete in transcript).

- **Q** (@Unknown, msg#1313): Question about DNS team updates.  
  **A** (@kushti, msg#1314): Response directed, then announced EIP-27 testnet activation.

- **Q** (@Aberg, msg#1272): "Does it not defeat the entire purpose of decentralization to rely on one part to receive the blockchain?"  
  **A** (@Aberg, msg#1286): Ergo sync is not a bottleneck; syncing takes ~3 hours from scratch, faster than Monero (full day).

- **Q** (@Luivatra, msg#989): Best practice for dApp development.  
  **A** (@Luivatra, msg#989): Understanding eUTXO mechanics is essential—it fundamentally influences dApp architecture. Resources: https://docs.ergoplatform.com/dev/

---

## Links Shared

- [https://www.ergoforum.org/t/yet-another-mixing-protocol/3359]: Mixing protocol forum discussion (@kushti, msg#615)
- [https://github.com/dav009/ergo-puppet]: Ergo puppet tool (@Unknown, msg#637)
- [https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407]: Schnorr signature verification in ErgoScript (@kushti, msg#650)
- [https://github.com/ergoplatform/ergo-appkit/pull/134/files]: Ergo AppKit PR #134 on API design (@Aberg, msg#760)
- [https://docs.ergoplatform.com/dev/]: Ergo development documentation (@Luivatra, msg#990)
- [https://docs.ergoplatform.com/contribute/]: Contribution guide (@Glasgow, msg#1109)
- [https://github.com/mhssamadani/Autolykos2_AMD_Miner]: AMD Autolykos miner (@Armeanio, msg#1150)
- [http://213.239.193.208:9052/]: Node HTTP endpoint for testing (@MrStahlfelge, msg#1575)

---

## Unresolved Questions

- **AppKit Scala object usage in API**: @Aberg raised concern about Scala objects in the API layer; @MrStahlfelge noted dependency on @morphic's preference for wrapper vs. direct exposure. Status: Pending review in PR #134.

- **Transaction cost configuration**: @Luivatra reported that `maxTransactionCost` setting in node config doesn't seem effective; flagged as issue to be created (follow-up status unknown).

- **GraalVM polyglot performance for Ergo**: @Aberg asked about GraalVM performance characteristics but received no substantive response in this segment.