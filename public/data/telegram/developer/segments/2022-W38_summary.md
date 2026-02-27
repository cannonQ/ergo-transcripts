# Ergo Developer Chat — 2022-W38 Summary

## Key Topics Discussed

- **ContextExtension Access in ErgoScript**: Discussion on whether ErgoScript should allow querying ContextExtension of other inputs in a transaction. kushti confirmed this is possible via `Inputs(x).contextVars(y)`, addressing a feature gap noted in Cardano's PlutusV2 upgrade.

- **Node Version Updates & Spam Attack Vectors**: Version 4.0.43 was identified as creating network noise; 4.0.44 and subsequently 4.0.45 and 4.0.46 released with security fixes for spam attack vectors. Update to 4.0.46 strongly recommended.

- **Difficulty Adjustment Algorithm**: Discussion on interpolating difficulty adjustment via least-squares method rather than simple averaging. Ergo uses 1024-block epochs with 8 epochs considered in readjustment; changes occur every 1024 blocks.

- **Testnet Block Time Issues**: 5-second block targets on testnet showing unrealistic forking behavior. kushti recommended switching to `painet` and resetting other testnets. Slow blocks (~20 minutes) noted as normal due to difficulty variation.

- **Wallet Derivation Bug**: Java Ergo wallet crypto library (used by Satergo, mobile wallet) has a signed/unsigned integer bug causing ~1-in-32 key derivation mismatch with Sigma Rust library wallets (Yoroi, Nautilus). Bug originates in node codebase.

- **Difficulty Adjustment Proposal (EIP-79)**: Discussion on timestamp-interval-based difficulty adjustment as alternative to block-interval method. kushti flagged this as "uncharted territory" requiring careful security analysis and adaptive adversary modeling.

- **Soft Fork vs. Hard Fork Clarification**: If protocol rule changes allow old versions to continue working, it's a soft fork; otherwise, hard fork.

## Important Decisions or Announcements

- [@kushti, msg#6599, 2022-09-19]: "If anyone running 4.0.43, please update to 4.0.44" — version 4.0.43 creates network noise.

- [@kushti, msg#6672, 2022-09-19]: "4.0.45 just released, it fixes some spam attack vectors affecting all the versions which are now publicly known with this release, thus update is recommended" — https://github.com/ergoplatform/ergo/releases/tag/v4.0.45

- [@kushti, msg#6797, 2022-09-22]: "Ergo protocol reference client 4.0.46 released" — https://github.com/ergoplatform/ergo/releases/tag/v4.0.46

- [@kushti, msg#6832, 2022-09-23]: "Please update to 4.0.46, with slow blocks it seems one very old issue now shows in full"

- [@Aberg, msg#6907, 2022-09-25]: Removing testnet from Satergo's full node setup wizard due to instability; only remote node option will be offered.

- [@kushti, msg#6901-6902, 2022-09-25]: `painet` confirmed as working testnet; other testnets to be reset to painet configuration.

## Technical Q&A Worth Preserving

- **Q** (@Ilya Oskin, msg#6587): "Is it possible to query ContextExtension of another input in a transaction in ErgoScript?"  
  **A** (@kushti, msg#6597): "`Inputs(x).contextVars(y)` simply" — direct access is supported.

- **Q** (@Ilya Oskin, msg#6589): "The point is that one script must ensure that the other one got particular input"  
  **A** (@Ilya Oskin, msg#6591): Similar logic can be simulated by writing script inputs to registers of a replicated box.

- **Q** (@Luivatra, msg#6592): "is there a reason it is not supported or just an oversight? would it be possible to add in this functionality with a soft fork?"  
  **A** (@kushti, msg#6622): "We tried to do this in 2019, implementation from a contributor had some issues, can revisit it now"

- **Q** (implicit, msg#6627-6630): How does difficulty readjustment work?  
  **A** (@kushti): "Not avg, interpolating via least squares method, so readjustment algo tries to build function of diff during last 8 epochs to predict a new value. Epoch is 1024 blocks long... 8*1024 blocks are taken into account in diff recalc"

- **Q** (@Aberg, msg#6844): Wallet key derivation discrepancy between Satergo/mobile (Java lib) vs. Yoroi/Nautilus (Sigma Rust).  
  **A** (@Aberg, msg#6844-6845): "Wallets based on the java ergo wallet crypto lib... in some cases, i think one in 32, derive different private keys... because the java lib has a bug with signed vs unsigned somewhere. The lib comes from the node's code so naturally the node wallet also has the bug"

- **Q** (@Odiseus Me, msg#6686): "also normal for a tx not to be confirmed for ~ 1 hour?"  
  **A** (@kushti, msg#6687-6688): "3 confs now... blocks are slow" (normal variance due to difficulty).

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.45]: 4.0.45 release with spam attack vector fixes.

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.46]: 4.0.46 release addressing slow-block-related issues.

- [https://blocking.net/4856/six-of-the-most-notorious-51-attacks-the-survival-of-the-fittest-is-the-jungle-law-of-cryptocurrency/]: Context on 51% attacks; Verge attacks referenced as detailed examples.

- [https://www.ergoforum.org/t/difficulty-adjustment-at-regular-time-intervals/3907/4-5]: Forum discussion on timestamp-based difficulty adjustment proposal.

- [https://github.com/ergoplatform/eips/pull/79/files]: EIP-79 draft for difficulty adjustment via timestamp intervals, with simulation results added by kushti.

- [https://eprint.iacr.org/2022/1020.pdf]: Academic reference on mining difficulty issues.

- [https://github.com/mgpai22/paiNet]: painet testnet configuration and setup.

## Unresolved Questions

- **Timestamp-based Difficulty Adjustment Security**: kushti flagged EIP-79 timestamp interval approach as requiring careful security analysis, particularly against adaptive adversaries. Concrete specification and implementation approach still needed (msg#6852-6862).

- **Testnet Stability**: Multiple testnet instances remain unstable; painet designated as working testnet but broader testnet strategy unclear. Node & explorer reliability issues intermittently observed (msg#6674-6685).

- **Wallet Bug Fix Roadmap**: Java library signed/unsigned bug in key derivation identified but no timeline or fix proposal discussed (msg#6844-6845).

---

**Summary**: Week focused on node stability, spam mitigation, and difficulty adjustment algorithm design. Three critical releases (4.0.44, 4.0.45, 4.0.46) rolled out. Key technical gaps identified in testnet infrastructure and wallet library compatibility, with ongoing debate around timestamp-based difficulty proposals.