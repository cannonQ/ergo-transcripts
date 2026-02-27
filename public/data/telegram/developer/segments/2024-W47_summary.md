# Ergo Developer Chat Summary — 2024-W47

## Key Topics Discussed

- **Ergo Protocol 6.0.0 Release Cycle**: Reference client RC1 released for testnet. Multiple PRs finalized; focus on unsigned big int support, EIP-50 specification, and sub-blocks research. 5.0.25 candidate nearing release with indexer rollback fixes.

- **ErgoScript 6.0 Language Enhancements**: New methods being added including `Global.some()` and `Global.none()` for constructing `Option[]`, and verification of arbitrary byte array signatures via Schnorr signatures. Full diff available in LangSpec.md.

- **SigmaUSD & Oracle Pool v1**: Bootstrapping Oracle Pool v1 in testnet; requires active mining to proceed. Pool token issuance and bootstrapping pending block confirmations.

- **Dexy Protocol**: Developers being pushed to finalize Spectrum PR and commit to launch timeline. Whitepaper update needed.

- **Testnet Stability Issues**: Multiple fork events and persistent modifier errors encountered. Configuration standardization initiated to prevent bad peer connections. Ban list management and known peer configuration recommended.

- **SDK & Documentation**: AppKit updates blocked pending sigmastate-interpreter releases. Fleet SDK documentation gap identified; transition from Discord Q&A to GitHub Discussions recommended. iOS tutorial demand noted.

- **dApp Development Projects**: 
  - Paideia: Bug fixes and platform monitoring
  - ErgoPad: Mempool optimization for unstaking post-incident
  - Celaut: Service tags and import/export functionality
  - Bene: Form fixes and contract corrections
  - Netnotes: Tab UI system, KuCoin app refactoring, beta by year-end

- **Mining & Pool Operations**: Sigmanauts Mining Pool reactivating bonus token airdrop as standalone downloadable tool with KYA and documentation. API validation ongoing before swap release.

## Important Decisions or Announcements

- [@kushti, msg#31310, 2024-11-18]: Ergo protocol reference client v6.0.0-RC1 released for testnets only
- [@kushti, msg#31319, 2024-11-20]: 5.0.25 release expected in few days pending testing completion
- [@kushti, msg#31313, 2024-11-19]: Weekly Ergo Developers chat scheduled; feedback sought on financial contracts and 6.0 soft-fork
- [@Marc the Shark, msg#31324, 2024-11-20]: Sigmanauts Mining Pool resubmitted EF proposals with concrete deliverables; bonus airdrop code to be released as reusable tool
- [@kushti, msg#31366, 2024-11-22]: Call for testnet mining to support oracle pool and SigmaUSD testing
- [@mgpai, msg#31426, 2024-11-24]: Testnet configuration standardized; known peers and peer discovery settings documented

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#31352): Is there a list of what is added to ErgoScript in 6.0?
  **A** (@kushti, msg#31356, msg#31359): Two approved PRs to merge with changes reflected in LangSpec.md diff; full diff accessible via PR #930 files.

- **Q** (@Luivatra, msg#31362): Would verifying signature of arbitrary byte array be possible in ErgoScript?
  **A** (@dusek_, msg#31363): ChainCash uses Schnorr signatures inside ErgoScript; see reference implementation at https://github.com/ChainCashLabs/chaincash/blob/e4a22f13a0cefe73310f83fbaa4b9c3657799649/contracts/onchain/note.es#L67
  **A** (@kushti, msg#31374): Already possible; check Schnorr signature forum post.

- **Q** (@b_e_e_e_e_e, msg#31388): Generic way to write ErgoScript function checking if two boxes have same additional registers?
  **A** (@Luivatra, msg#31397-31398): Compare bytes directly; see bytesWithoutCreationInfo example at https://github.com/paideiadao/paideia-sdk/blob/dev/src/main/resources/ergoscript/lib/bytesWithoutCreationInfo/1.0.0/bytesWithoutCreationInfo.es for inspiration.

- **Q** (@b_e_e_e_e_e, msg#31399): Can box set R6 to `SSigmaProp(SGroupElement(userErgoAddress.getPublicKeys()[0]))` and verify with `SELF.R6[SigmaProp].get`?
  **A** (@c8e4d2a, msg#31402): This is the simplest case of m-of-n multisig (one single signature). Use Blockly tool to prototype transaction generation.

- **Q** (@Michael, msg#31389-31396): Error applying persistent modifier at block 1402187-1402188: "id is not defined"
  **A** (@kushti, msg#31391, msg#31393): Check if block is large and connection quality; clarify whether error header id is from block 1402186 and persistent modifier from 1402188.

- **Q** (@CannonQ, msg#31347): Where to find listing of open bounties?
  **A** (@Pgr456, msg#31348): Two sources: https://github.com/ergoplatform/grow-ergo/issues and https://github.com/kushti/bounties

## Links Shared

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/962]: Sigma interpreter improvements (approved, merged into 6.0.0)
- [https://github.com/ergoplatform/sigma-rust/issues/780]: Python bindings for sigma-rust with bounties
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC1]: Ergo protocol 6.0.0-RC1 release
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1029]: 6.0 activation details PR (finalized)
- [https://www.ergoforum.org/c/dev/research-and-development/7]: HashrateCoin / RandomCoin research ideas
- [https://github.com/SavonarolaLabs/options]: Retail options concept (CC0)
- [https://github.com/SavonarolaLabs/rosen-ui]: Rosen Bridge widget (CC0)
- [https://github.com/SavonarolaLabs/exle-html]: Loan UI with demo
- [https://github.com/ergoplatform/grow-ergo/issues]: Ergo bounties listing
- [https://github.com/kushti/bounties]: Additional bounties list
- [https://github.com/ergoplatform/sigma-rust/pull/781]: Deterministic nonces patch for sigma-rust
- [https://github.com/ergoplatform/ergo/pull/2196]: Testnet node fix (approved, merged)
- [https://github.com/ergoplatform/ergo/pull/2193]: Indexer rollback processing fix (under review)
- [https://escript.online/blockly]: ErgoScript Blockly visual editor
- [https://github.com/paideiadao/paideia-sdk/blob/dev/src/main/resources/ergoscript/lib/bytesWithoutCreationInfo/1.0.0/bytesWithoutCreationInfo.es]: Register comparison reference implementation
- [http://5.161.73.235:9052/panel]: mgPai's stable testnet node
- [https://drive.google.com/file/d/1XSQ0TPnu94V-i5U7hr45zQXfSY3tSAax/view?usp=sharing]: Latest testnet archive

## Unresolved Questions

- **6.0 Language Features**: Two PRs still unmerged — `Global.some()`/`Global.none()` methods and UnsignedBigInt support. Merge and LangSpec.md integration pending (@kushti, msg#31365).

- **Testnet Forking**: Multiple fork events at blocks 1402187-1402188 with persistent modifier errors. Root cause unclear; connection quality and large block handling suspected but unconfirmed (@Michael, msg#31389-31396, @mgpai, msg#31421).

- **Fleet SDK Documentation**: Gap identified between Discord Q&A and developer reference docs. Transition to GitHub Discussions recommended but implementation details TBD (@mgpai, msg#31335-31346).

- **Rosen Bridge UI**: Transaction building internals not publicly accessible, blocking implementation similar to reference widget (@CannonQ, msg#31322).

- **ErgoScript Register Equality**: Generic method for comparing all additional registers (R4-R9) returning `Any` type fails at runtime. Workaround identified but underlying type system issue unresolved (@b_e_e_e_e_e, msg#31388, @Luivatra, msg#31397-31398).