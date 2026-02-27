# Ergo Developer Chat Summary — Week 2025-W21

## Key Topics Discussed

- **Sub-blocks Devnet Release**: @kushti released a sub-blocks devnet with P2P layer improvements pending. Issues reported; further refinement needed before production readiness.

- **6.0 Protocol Soft-Fork**: Sigma and Ergo PRs under review with additional tests. Tree serialization issue identified and being addressed (GitHub #2214). SigmaChains support refactoring planned as next step.

- **Dexy Protocol Deployment**: Contracts deployed on mainnet. UI deployment and private testing underway with @code_For_Uss, @c8, and @savonarola before public announcement. Contracts released under CC0 license.

- **Fleet SDK Enhancement**: @anon_br added ErgoTree constant extraction/replacement, template extraction, OutputBuilder construction from Box, and constant bytes memoization. EIP-5 support next.

- **Rosen Bridge Updates**: Bitcoin Runes UI integration started (6 MRs, first under review). Dogecoin testing ongoing with rate-limit edge cases requiring backend or RPC solutions. Wallet Connect protocol implementation for Ethereum and dashboard UI improvements in progress.

- **P2S Address Cross-Chain Constraints**: Technical discussion on why P2S addresses cannot be used as target addresses in Rosen Bridge due to data size limitations across chains, particularly affecting Bitcoin's 80-byte OP_RETURN constraint.

- **Sub-blocks Devnet Synchronization Issues**: Multiple nodes reported getting stuck despite various configurations (mining enabled/disabled). Appears to be sync-related rather than mining-specific; requires closer investigation.

## Important Decisions or Announcements

- [@kushti, msg#34396, 2025-05-21]: Sub-blocks devnet released; P2P layer improvements and issue fixes planned.
- [@kushti, msg#34397, 2025-05-21]: Dexy contracts deployed on mainnet with UI deployment and private testing underway.
- [@kushti, msg#34399, 2025-05-21]: Dexy Protocol contracts released under CC0 (public domain) license for unrestricted use.
- [@⭐Fanta⭐, msg#34400, 2025-05-21]: Orphan block indexing bug identified and fixed; token creation now verified against first input box ID.
- [@kushti, msg#34438, 2025-05-24]: PR #2216 merged; conflicts in PR #2215 need resolution.

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#34386): Is it possible with Rosen Bridge to allow a Cardano box to be spent only if a transaction is sent through the bridge, depositing value and data into an Ergo box with a specific script?
  **A** (@kushti, msg#34394): Should be theoretically possible, but uncertain how far the current implementation supports this.
  **A** (@zargarzadehmoein, msg#34405): Theoretically possible for Cardano specifically, but P2S addresses cannot be used as target addresses for Ergo due to data size limitations across chains, especially Bitcoin's 80-byte OP_RETURN constraint.

- **Q** (@Josemi, msg#34406): Are there limitations to this approach from account-based chains?
  **A** (@zargarzadehmoein, msg#34405): P2S restrictions apply across chains; no direct answer for account-based chains given, but general cross-chain data constraints apply.

- **Q** (@kushti, msg#34418): Why not use P2SH addresses, which are limited in size?
  **A** (@ZzZzBYE, msg#34428): P2SH is fixed at 44 bytes raw, but encoded P2SH addresses can exceed Bitcoin's 80-byte OP_RETURN limit (leaving ~60 bytes for the address).

- **Q** (@Josemi, msg#34412): Does ErgoScript support logs for debugging? How do you typically debug?
  **A** (No direct response recorded; @Josemi noted current workaround: commenting/uncommenting conditions incrementally—tedious for large contracts.)

- **Q** (@MGpai, msg#34440): Is there a way to deserialize a transaction from hex/base64 representation in Fleet SDK?
  **A** (Unresolved; @anon_br referenced serialization code but no deserialization answer provided in chat.)

## Links Shared

- [https://github.com/ergoplatform/ergo/issues/2214]: Tree serialization issue in 6.0 protocol.
- [https://github.com/ergoplatform/ergo/issues/2210]: Unresolved issue requiring review.
- [https://github.com/ergoplatform/sigma-rust/pull/824]: Approved Sigma Rust PR.
- [https://github.com/ergoplatform/ergo/pull/2215]: PR with conflicting changes needing resolution.
- [https://github.com/ergoplatform/ergo/issues/2218]: Issue assigned bounty for explorer template search API methods.
- [npm snapshot @fleet-sdk/core@02bdf05](https://pkg.pr.new/@fleet-sdk/core@02bdf05): Fleet SDK test package for new ErgoTree features.
- [https://github.com/fleet-sdk/fleet/blob/master/packages/serializer/src/serializers/transactionSerializer.spec.ts]: Transaction serialization spec referenced in deserialization question.

## Unresolved Questions

- **Sub-blocks devnet sync stability**: Multiple node operators reporting stuck nodes despite different configurations; root cause under investigation by @kushti.
- **ErgoScript logging/debugging**: No native log support; current workaround (conditional commenting) flagged as tedious for larger contracts—potential UX improvement.
- **Fleet SDK transaction deserialization**: No clear deserialization API identified in current codebase for hex/base64 transaction representations.
- **Rust contributor availability**: @kushti inquired whether more Rust contributors are needed; @dusek responded "should be sufficient at the moment," but this may change as 6.0 work progresses.
- **Keystone hardware wallet state**: @Pgr456 reported opening a PR with all requested changes 2 weeks prior with no feedback; requires re-review ping.