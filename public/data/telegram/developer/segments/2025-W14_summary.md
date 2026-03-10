---
title: "Ergo Developer Chat — 2025-W14"
date_start: "2025-03-31"
date_end: "2025-04-06"
type: telegram_weekly
channel: developer
week: "2025-W14"
source: telegram
message_count: 78
categories: [wallet, technical, ecosystem, defi]
key_terms: [secp256k1, k256, sigma-rust-mini, firmware size, no_std, Prover trait, 6.0.0-RC4, protocol soft-fork, sub-blocks, p2p messages, mainnet sync, debug, inspect, callback, Verifier, AST, script evaluation, MAST, ErgoScript, context extension]
---
# Ergo Developer Chat Summary — 2025-W14
**Period:** 2025-03-31 to 2025-04-06  
**Participants:** 6 active (kushti, dusek_, novamon_25735, Pgr456, jozinek., ccellado, and others)

---

## Key Topics Discussed

- **Keystone Hardware Wallet Integration:** Pgr456 building no_std sigma-rust-mini for Keystone firmware due to size constraints; working with Keystone team to replace k256 with secp256k1 for security and size reduction. Ergo will be included in Keystone's cypherpunk firmware version alongside Bitcoin, Zcash, and Monero.

- **Sub-blocks P2P Protocol Development:** kushti completed p2p messages and constructing p2p logic for sub-blocks; testing 6.0.0 candidate on mainnet; seeking public IP devnet helpers to test sub-block messaging.

- **Sigma Protocol & Zero-Knowledge Improvements:** Multiple PRs merged for 5.0.16 release (sigmastate-interpreter #1055, #1063, #1058, #1060); ongoing Scala 3 cross-compilation work for sigmastate-interpreter with JS causing complexity.

- **Debug & Inspection Framework:** novamon_25735 implementing ErgoScript debug/inspection callback infrastructure; coordinating between bouncy castle rollover and secp256k1 migration; designing callback injection into Verifier rather than Prover.

- **MAST (Merklized Abstract Syntax Tree) Implementation:** ccellado implementing MAST support; resolved SBoolean→Boolean conversion issue; context-based secret construction and testing in ErgoScript.

- **Ergo AppKit & Fleet SDK:** jozinek working on cross-compilation, AppKit #235 test failures being investigated; sigmastate-interpreter #1061/#1062 pending additional type coverage.

- **Crux Finance (CruxFinance) Development:** Luivatra loading LP token data to enable portfolio value display and LP position tracking with charts for t2t pools.

- **SkyHarbor v2 Frontend Open-Sourced:** Quokka released frontend code at https://github.com/skyharbor-market/frontend-skyharbor-ts.

---

## Important Decisions or Announcements

- [@kushti0978, msg#33902, 2025-04-02]: Merged ergo PR #2208 into 5.0.26 candidate release.

- [@kushti0978, msg#33913, 2025-04-02]: Approved PRs for 5.0.16 sigmastate-interpreter release; 5.0.26 reference client targeting next-week release pending final review.

- [@kushti0978, msg#33960, 2025-04-06]: **Ergo protocol reference client 6.0.0-RC4 released** — now able to sync with mainnet. https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC4

- [@kushti0978, msg#33919, 2025-04-02]: Posted two R&D forum proposals:
  - "Insuring Bitcoin on-ramp with Ergo contracts" (ergoforum.org/t/5121)
  - "Offchain money with free creation but limited redemption" (ergoforum.org/t/5122)

- [@kushti0978, msg#33896, 2025-04-01]: Weekly Ergo Developers chat scheduled for 2025-04-02 1PM UTC; call for feedback on financial contracts, 6.0 soft-fork, input ordering EIP, Sigmachains, and L2 research.

---

## Technical Q&A Worth Preserving

**Q** (@Pgr456, msg#33874): How to replace k256 with secp256k1 in sigma-rust-mini for Keystone firmware size constraints, specifically in Prover trait?

**A** (@dusek_, msg#33876–33877): 
- Replace EcPoint types with secp256k1 equivalents in dlog_protocol.rs (compute_commitment_deterministic, second_message)
- k256 Scalar → secp256k1 SecretKey (note: secp256k1 Scalar not constant-time suitable for signing)
- k256 ProjectivePoint → secp256k1 PublicKey
- Point-scalar multiplication via PublicKey::mul_tweak
- ECPoint addition via PublicKey::combine (or delete compute_commitment if only used for signature verification)

---

**Q** (@ldgaetano, msg#33885): How to extract tuple of two Sigma propositions from box register in Fleet SDK for ErgoTree comparison?

**A** (@arobsn, msg#33887): Use `decode<[UInt8Array, UInt8Array]>(register)` or `SConstant.from(register)`

---

**Q** (@Pgr456, msg#33879): Does hardware wallet receive reduced transactions to sign? Potential issues with sigma-rust-mini if not?

**A** (@Pgr456, msg#33880): Yes, transferring reduced transactions (mitigates contract-in-inputs edge cases).

---

**Q** (@ccellado, msg#33897): How to convert context-stored SigmaProp bytes to prop using getVar/executeFromVar for MAST example?

**A** (@kushti0978, msg#33900): Use `executeFromVar[SBoolean](idx)` not `getVar`; retrieve bytes via `getVar[Coll[Byte]](idx)`. executeFromVar is macro-like (pre-AST execution), deserializing context extension; getVar reads evaluated typed values.

**Resolution** (@ccellado, msg#33931): Issue was Boolean vs SBoolean type in ErgoScript.

---

**Q** (@ccellado, msg#33932): For MAST, is secret construction still external, inserted in context, then tested inside ErgoScript?

**A** (@kushti khushi, msg#33933): Yes, but secret is not strictly necessary.

---

**Q** (@Pgr456, msg#33957): How to replace k256 generator() and identity() with secp256k1 equivalents in EcPoint wrapper?

**A** (@dusek_, msg#33958–33959):
- Generator: `PublicKey::from_bytes(concat(4, GENERATOR_X, GENERATOR_Y))` using secp256k1 constants
- Identity: secp256k1 lacks point-at-infinity in affine coords; alternative—check `InvalidPublicKeySum` error on key combine instead of is_identity()

---

**Q** (@novamon_25735, msg#33881): What output channel for debug output—console or specific channel?

**A** (@c8e4d2a, msg#33882): Stdout.

---

**Q** (@Anastasia Polozova, msg#33949–33955): Seeking mentorship on offchain code for smart-contract ↔ website integration; unclear on offchain architecture.

**A** (@HQΣr, msg#33952–33955): Requested contract details; noted some smart contracts don't require offchain bot execution.

**Status:** Unresolved—awaiting contract specifics.

---

## Links Shared

- [github.com/Alesfatalis/sigma-rust-mini/tree/no_std]: no_std version of sigma-rust-mini for Keystone firmware (msg#33874)

- [github.com/ergoplatform/sigmastate-interpreter/pull/1043]: PR on review for 5.0.16 release (msg#33889, #33916)

- [github.com/ergoplatform/sigmastate-interpreter/pull/1066]: MAST implementation PR (msg#33940)

- [github.com/KeystoneHQ/keystone3-firmware/pull/1676]: Keystone firmware integration progress (msg#33926)

- [github.com/ergoplatform/sigma-rust/pull/820, #819, #804]: Multiple sigma-rust PRs for review (msg#33921)

- [github.com/ergoplatform/sigmastate-interpreter/pull/1062, #1061]: Ready-to-merge and polishing PRs; AppKit #235 (msg#33927)

- [ergoforum.org/t/5121]: "Insuring Bitcoin on-ramp with Ergo contracts" (msg#33919)

- [ergoforum.org/t/5122]: "Offchain money with free creation but limited redemption" (msg#33919)

- [github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC4]: Ergo protocol reference client 6.0.0-RC4 release (msg#33960)

- [github.com/skyharbor-market/frontend-skyharbor-ts]: SkyHarbor v2 frontend open source (msg#33934)

- [discord.com/channels/.../1311349222850826324]: IDE tooling callback proposal (msg#33888)

---

## Unresolved Questions

- **secp256k1 Generator/Identity Workaround Validation:** Pgr456's implementation of secp256k1 generator and identity replacements needs testing and validation against k256 behavior (msg#33957–33958).

- **Debug Output Callback Architecture:** kushti to review novamon_25735's callback injection approach into Verifier; optimal design pattern TBD (msg#33903, #33909, #33924).

- **6.0.0 Mainnet Sync Issues:** kushti identified tree version anomaly and subsequent client hang on 6.0 mainnet testing; fixes applied but additional issues pending verification (msg#33915).

- **Test Coverage for SOption Types:** kushti requesting test on `SOption[SUnit]` in register for sigmastate-interpreter #1062 (msg#33936).

- **Offchain Code Mentorship:** Anastasia Polozova seeking mentor; HQΣr requested contract details to advise on whether offchain code is actually needed (msg#33949–33955).

- **Sub-blocks DevNet Hosting:** kushti seeking public IP node hosts; multiple volunteers (mgpai, Pgr456, Luivatra, odybhoja) offered but no formal assignment confirmed (msg#33938–33946).