# Ergo Developer Chat — 2024-W38 Summary

## Key Topics Discussed

- **API Infrastructure & Node Issues**: api.ergoplatform.org experienced disk space exhaustion (PostgreSQL error). Fixed by kushti; subsequent versions 5.0.23 and 5.1.0 candidates tested with threading improvements to indexer block caching.

- **Token Issuance & EIP-4 Standard**: Discussion on whether new tokens must be placed in a single "issuance output" or can be distributed across outputs. kushti clarified that preservation law applies only to new tokens (id = first input id), enabling flexible multi-output distribution. Proposal to enforce stricter EIP-4 compliance for indexing consistency.

- **Sigma 6.0 Protocol Development**: Multiple PRs under review for unsigned big int type support and optimizations. DevNet 6.0.0-alpha1 released for testing. Sigma-Rust 6.0 support being scoped with bounties for contributors.

- **Sub-blocks Implementation**: kushti outlined work on adding datatypes and best sub-block update procedures; part of ongoing performance optimization discussion.

- **Dexy Protocol Refinements**: Payout contract parameter discussions ongoing with community contributors; timelock redemption feature being added to ChainCash notes.

- **Nautilus Wallet v0.14.0**: Added Transaction History view, set 1,000 USD minimum liquidity threshold, switched sigmaspace.io as default explorer backend.

- **Fleet SDK v0.7.0**: Released with `ensureInclusion` flag for input ordering guarantee, breaking change to `decode` function returning `SConstant` objects, improved Babel Box validation.

- **ErgoNames & Keystone Progress**: Contracts nearly complete; end-to-end minting tested on testnet. Keystone task breakdown for bounties in progress.

- **Paideia DAO Contracts**: Context variable optimization completed (5+ variable contracts reduced to 3 affected). Ready for next testing round prior to mainnet launch.

- **SigmaSpace Explorer API**: Three endpoints implemented and documented at https://api.sigmaspace.io/docs; open for community testing with no caching currently enabled.

- **Lithos Protocol & Mining Pools**: Research into NISP contracts and MEV support; discussion of decentralized mining pool constructions on ErgoForums.

- **IPFS Gateway Migration**: Cloudflare IPFS gateway deprecation (deadline August 14, 2024 passed) requires all NFT platforms (SkyHarbor, ErgExplorer, ErgTokens) to migrate image URLs to ipfs.io or dweb.link mirrors.

## Important Decisions or Announcements

- [@kushti, msg#30219, 2024-09-17]: Weekly Ergo Developers chat scheduled for Wednesday, Sep 18, 1PM UTC to discuss tooling updates, financial contract feedback, and 6.0 protocol soft-fork.

- [@kushti, msg#30268, 2024-09-19]: Ergo reference protocol client **6.0.0-alpha1** released (DevNets only) at https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha1.

- [@kushti, msg#30273, 2024-09-20]: Release of version **5.0.23** planned for Monday with indexer threading fixes; current latest commit with single lock caching performs well.

- [@arobsn, msg#30240, 2024-09-18]: **Fleet SDK v0.7.0** released with `ensureInclusion` flag and breaking serialization changes.

- [@arobsn, msg#30240, 2024-09-18]: **Nautilus v0.14.0** released with transaction history, liquidity minimum, and sigmaspace.io default.

- [@kushti, msg#30255, 2024-09-18]: Bruno seeking developers for new degen game based on HODLcoin pools.

- [@Yulius, msg#30297-298, 2024-09-21]: Javanese language added to Satergo; PR #24 merged.

- [@kushti, msg#30306, 2024-09-22]: **Sigma-Rust 3.0.0 published**; updating Sigma 6.0.0 with it.

## Technical Q&A Worth Preserving

- **Q** (@Aberg, msg#30197): Why does `DerivationPath.fromEncoded("m/44'/429'/0'")` return a path with initial 0 in decodedPath, breaking equality checks with paths created from ints?
  **A** (@kushti, msg#30205, msg#30221): Constructor taking Scala IndexedSeq[ints] includes 0 as well. This follows BIP-32 where `DerivationPath(List(0), publicBranch = false)` corresponds to master key, with 44'/429'/0' derived from it.

- **Q** (@mgpai, msg#30200): Is it possible to mint a 2-unit token with one unit in the issuance output and one unit in another output?
  **A** (@cheeseenthusiast, msg#30201 & @kushti, msg#30202): Yes. No "issuance output" requirement exists; only preservation law (sum in outputs ≤ sum in inputs) is waived for new tokens (id = first input id).

- **Q** (@mgpai, msg#30204): Token overview shows 2 "doe" emission amount but transaction has 2 in first output + 1 in third output (3 total minted).
  **A** (@kushti, msg#30207-208): First output follows EIP-4 standard; explorer treats EIP-4 outputs differently. Proposal to enforce stricter standard requiring all tokens in EIP-4 output for consistent indexing.

- **Q** (@owies, msg#30258-259): How to use testnet wallet with Nautilus Chrome plugin for `sign_message` testing?
  **A** (@Michael, msg#30260): Nautilus testnet version available at https://github.com/nautls/nautilus-wallet/releases.

- **Q** (@owies, msg#30265): `sign_data` via Nautilus returns false when verifying signature backend-side (simple test case provided).
  **A** (@kushti, msg#30269): Suggests Fleet SDK as the solution (directed to @capt_nemo429 for implementation details).

- **Q** (@mgpai, msg#30251): Updates on ErgoNames and Keystone?
  **A** (@mgpai, msg#30263): ErgoNames contracts nearly done; first end-to-end testnet minting completed. Keystone: breaking up task for bounties.

- **Q** (@Michael, msg#30228): Node 213 down; mobile wallet showing huge token values (only this node). Any idea why?
  **A** (@kushti, msg#30230-232): Downgraded 213 to 5.0.22 due to frozen API (indexer grabbing threads). Found threading issue in 5.0.23. Wallet may be using extra indices; checking explorer API dependency.

- **Q** (@mgpai, msg#30266): Thoughts on Sui's Mysticeti consensus (https://sui.io/mysticeti)?
  **A** (@kushti, msg#30267): Clarified he meant efficient BFT for permissioned systems from the arxiv paper (2310.14821), then asked what aspect of interest.

- **Q** (@peterpan0708, msg#30301): Is it possible to set maxInputs=10000?
  **A** (@kushti, msg#30310): Risky; 1000 is acceptable for CEX settings.

- **Q** (@kushti, msg#30223): Has anyone tried generating offchain/tests (like Dexy) with AI?
  **A** (@mgpai, msg#30224-226): Requested test examples; kushti provided Dexy BuybackSpec.scala and Phoenix hodlERG PhoenixSpec.scala as typical references.

## Links Shared

- https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1017 — Sigma 6.0 polished PR under review
- https://github.com/ScorexFoundation/sigmastate-interpreter/pull/989 — Sigma 6.0 optimization PR under review
- https://github.com/ScorexFoundation/sigmastate-interpreter/pull/997 — Unsigned big int type support WIP
- https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1025 — 6.0 testnet candidate with latest updates and unsigned big int
- https://github.com/ergoplatform/ergo/issues/2185 — Issue referenced for PR review
- https://testnet.ergoplatform.com/en/transactions/66e86e4f46a7b5ac5cf3d0001b68fb51c59c3751c41ae2f86184bf30624387bf — Example token minting transaction with multi-output distribution
- https://testnet.ergoplatform.com/en/token/3cb832f84a2f8f1ea11922728d0d017cd221b8ac3c07e03dc0137bfd04238d2b — Token overview showing emission amount discrepancy
- https://github.com/ergoplatform/ergo/pull/2186 — Merged PR with reward pending
- https://github.com/ergoplatform/ergo/pull/2177 — PR awaiting addressed notes before reward
- https://github.com/fleet-sdk/fleet/blob/master/packages/core/src/builder/transactionBuilder.spec.ts#L825 — Fleet SDK ensureInclusion feature test example
- https://api.sigmaspace.io/docs — SigmaSpace explorer API documentation (3 endpoints, open for testing)
- https://www.ergoforum.org/t/decentralized-mining-and-non-interactive-share-proofs/4860 — Lithos NISP research discussion
- https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha1 — Ergo 6.0.0-alpha1 DevNet release
- https://github.com/ergoplatform/sigma-rust/issues — Bounties added to Sigma-Rust 6.0 issues
- https://github.com/kushti/dexy-stable/blob/master/src/test/scala/dexy/bank/BuybackSpec.scala — Dexy test example
- https://github.com/PhoenixErgo/phoenix/blob/40564dbbc41e7538aba2714f2a6c4c989d52f7ca/src/test/scala/mockchain/hodlERG/PhoenixSpec.scala#L15 — Phoenix test example for tuning
- https://github.com/nautls/nautilus-wallet/releases — Nautilus testnet version
- https://sui.io/mysticeti — Sui Mysticeti consensus article
- https://arxiv.org/pdf/2310.14821 — Academic paper on efficient BFT
- https://blog.cloudflare.com/cloudflares-public-ipfs-gateways-and-supporting-interplanetary-shipyard/ — Cloudflare IPFS gateway deprecation notice
- https://playcyberverse.com — Cyberverse gameplay
- https://cyberversewiki.com/updates.html — Cyberverse patch notes wiki

## Unresolved Questions

- Thread pooling optimization strategy in 5.0.23: kushti noted threading issues discovered; considering rework of indexer block caching vs. tuning thread pools—final approach not yet confirmed.
- Token distribution EIP-4 strictness: Proposal to enforce all new tokens into single EIP-4 output for indexing consistency mentioned as good idea, but no formal decision documented.
- Signing code implementation for `sign_message`: owies' signature verification issue flagged but marked as awaiting Fleet SDK team feedback (directed to @capt_nemo429).
- ChainCash timelock feature: kushti announced need to add timelock to notes for redemption but no completion date specified.
- Scrypto 3.0.0 release timing: kushti apologized for delay (msg#30246), then published 3.0.0 (msg#30306); status of integration into 6.0.0 unclear at week end.
- Sub-block implementation details: Datatypes and best update procedure mentioned as work-in-progress with no completion target specified.