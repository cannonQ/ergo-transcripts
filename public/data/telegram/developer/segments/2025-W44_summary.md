# Ergo Developer Chat Summary — 2025-W44

## Key Topics Discussed

- **6.0.2 Protocol Release**: Multiple PRs under review for finalizing 6.0.2, including fixes for issue #2223 and input/ordering blocks handling. AppKit 6.0 compatibility testing is in progress.

- **Sub-blocks Development**: Forking processing improvements and whitepaper continuation. Implementation requires accounting for block cost limits during input blocks processing and handling rollbacks in node wallet. Critical PR #1069 in sigmastate-interpreter is under review.

- **Storage Rent Collection Bug**: Integer overflow in box size calculation during rent collection discovered. Box size multiplied by storage fee factor exceeds Int.MaxValue (e.g., 2239 × 1,250,000 = 2,798,750,000). Affecting 45+ boxes unable to collect rent; bounty assigned to sigmastate-interpreter#602.

- **SigmaUSD Oracle Pool Issues**: Multiple oracle operators disconnected from old pool, causing stalls at block 1644679. Issue resolved by bringing 4 operators back online. Monitoring gaps identified; proposal to display oracle status on public dashboard.

- **Explorer Backend Indexing**: GraphQL v0.5.5 released with fallback routing (height + timestamp sorting) when indexer detects corruption. Load balancers updated; API circulation amount bug fixed.

- **ChainCash/Basis Reserve Deployment**: First reserve deployment completed. Storage rent pattern documented: "claim box before rent if you burn tokens" after 3 years inactivity, potentially reusable by other dApps.

- **Nautilus Wallet Updates**: v1.3.1 released with Ledger transport internationalization. Hermes improved error handling and serialization; added mempool client. CHRIS45 working on language support (Javanese, Malaysian) with pending PR merges.

- **GitCircles Development**: Specification work ongoing for issue #11; GCTT payment calculations completed. kushti proposing to use GitCircles for ChainCash/Basis development coordination.

- **Lithos Protocol Progress**: HTML UI completed; contract documentation improved; testnet launch script added. Stratum fixes for Rigel and NBminer on low-difficulty mining. AppKit 6.0 tests being added.

- **Netnotes Plugin System**: Plugin manager integrates with GitHub for updates; streaming UI components with tab-based container support; forward-compatible binary abstraction for future OpenGL upgrade.

---

## Important Decisions or Announcements

- [@kushti, msg#36485, 2025-10-29]: Sub-blocks devnet will relaunch in few days after forking processing fixes; CPU mining with 2-3 nodes requested to generate forks frequently.

- [@kushti, msg#36481, 2025-10-29]: Proposal to establish open-source development practices: report developments early via GitHub issues to avoid duplication and improve ecosystem efficiency.

- [@kushti, msg#36528, 2025-10-29]: Development coordination should use GitHub issues + public channel pings, not direct messages ("broken phone" protocol rejected).

- [@qx(), msg#36521, 2025-10-29]: EF explorer load balancers updated; GQL v0.5.5 deployed with automatic indexer health detection; stale API circulation amount bug fixed on LB #1.

- [@kushti, msg#36557, 2025-10-30]: Node 213 maintenance window announced (10 minutes downtime).

- [@kushti, msg#36551, 2025-10-30]: 100 ERG bounty assigned to explorer-backend#258.

- [@kushti, msg#36579, 2025-10-31]: Bounty assigned to sigmastate-interpreter#602 (storage rent integer overflow).

---

## Technical Q&A Worth Preserving

- **Q** (@anon_br, msg#36466): What should I do when API method finds box in UTXO state but it's already spent in mempool with spending proof missing?
  **A** (@kushti, msg#36457): API searches both UTXO state and mempool; race condition exists where inputs are spent but spending TX not yet cleared. In this case, you get boxId + spendingProof. Consider querying `/blockchain` endpoints for complete box data.

- **Q** (@Cheese_Enthusiast, msg#36467): Is there a 6.0.1 testnet without sub-blocks generating nodes, and do you have peer addresses?
  **A** (@kushti, msg#36474): Public testnet does not have sub-blocks generating nodes yet. Node `http://176.9.15.237:9052/info` is running 6.0.1 and looks good.

- **Q** (@Cheese_Enthusiast, msg#36468): Implemented similar code for Lithos; have not participated in dev bounties before. Anything specific besides creating PR?
  **A** (@cannon_q, msg#36469): Create the PR and should be good from there. (@kushti, msg#36473): Is AppKit 6.0 ready on your side?

- **Q** (@anon_br, msg#36548): Is it safe to dispose transactions with incomplete boxes?
  **A** (@anon_br, msg#36559): (Self-answered in GH issue #259)

- **Q** (@Luca_D'Angelo, msg#36581): If N inputs share same script and reference an ErgoTree in a data-input register, is TX size smaller than if each input had the ErgoTree in its own register with no data-input?
  **A** (@kushti, msg#36582): Yes, the former approach is more compact.

- **Q** (@Pgr456, msg#36583): Growing number of boxes unable to collect storage rent (45+ past rent collection height). What is the issue?
  **A** (@kushti, msg#36587): Integer overflow in sigma-rust box size function. Box size × storage fee factor exceeds Int.MaxValue (e.g., 2239 × 1,250,000 = 2,798,750,000 > 2,147,483,647).

- **Q** (@BlendChiller, msg#36571): Full node fails to connect to peers on Ubuntu. Is there a network restriction?
  **A** (@cannon_q, msg#36572): See full-node Raspberry Pi setup instructions (applicable to any Linux). (@kushti, msg#36577): Check `/info` or panel output. No peers connected is problematic; share logs (no sensitive data) for debugging.

---

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2244]: Fix for issue #2223 (6.0.2 candidate)
- [https://github.com/ergoplatform/ergo/pull/2247]: Another 6.0.2 PR
- [https://github.com/ergoplatform/ergo/pull/2242]: Sub-block implementation PR
- [https://github.com/ergoplatform/ergo/issues/2248]: Input/ordering blocks handling issue
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1069]: Critical sub-blocks PR under review
- [https://docs.ergoplatform.com/dev/protocol/storage-rent/]: Storage rent documentation with implications for developers
- [https://github.com/BetterMoneyLabs/chaincash/blob/master/contracts/onchain/receipt.es]: ChainCash storage rent pattern (claim before rent if tokens burned)
- [https://github.com/nautls/nautilus-wallet/pull/316]: Javanese language support for Nautilus
- [https://github.com/nautls/nautilus-wallet/pull/317]: Malaysian language support for Nautilus
- [https://github.com/GitCircles/GitCircles-Github/issues/11]: GitCircles specification work
- [https://explorer.ergoplatform.com/en/transactions/9342f78bd290c8057632588b6dc908c71b19fb9a33e859716a0c323d1eb5a346]: ChainCash first reserve deployment TX
- [https://reputation-systems.github.io/forum-application/]: Reputation-based forum system (Josemi project)
- [https://github.com/reputation-systems/forum-application]: Forum application GitHub
- [https://github.com/ergoplatform/explorer-backend/issues/259]: GlobalIndex query ordering issue
- [https://github.com/ergoplatform/explorer-backend/issues/258]: Explorer backend issue (100 ERG bounty)
- [https://sigmaspace.io/en/storage-rent]: Storage rent collection monitoring (45+ affected boxes listed)
- [https://github.com/ergoplatform/ergo/blob/21ca898f21b01345913fbdea68c183bcd8be0134/ergo-wallet/src/main/scala/org/ergoplatform/wallet/interpreter/ErgoInterpreter.scala#L43]: Box size calculation (overflow location identified)
- [https://github.com/ergoplatform/ergo-wallet-app/pull/183]: Ergo Wallet App PR for testing
- [https://github.com/ergoplatform/ergo-wallet-app/pull/182]: Ergo Wallet App PR for testing
- [https://github.com/ergoplatform/ergo-wallet-app/issues/185]: Wallet app issue with bounty assigned
- [https://github.com/ergoplatform/sigmastate-interpreter/issues/602]: Storage rent integer overflow (bounty assigned)
- [https://github.com/ergoplatform/sigmastate-interpreter/issues/398]: SigmaSDK issue (bounty assigned)
- [https://github.com/TheStophe/ergo-full-node-raspi]: Full node setup guide for Raspberry Pi
- [http://176.9.15.237:9052/info]: Public testnet node (6.0.1)
- [https://x.com/ergo_platform/status/1983867529152925709]: Twitter/X announcement link

---

## Unresolved Questions

- **Sub-blocks Devnet Peers**: Cheese Enthusiast unable to find syncing peers for testnet nodes; explorer and qx nodes either offline or aborting handshake (possible version mismatch). Resolution: synced with 176.9.15.237:9052.

- **SigmaSpace API Methods**: kushti asked if original Explorer API methods could be added to SigmaSpace as fallback; Pgr456 noted frontend is not open-source, uncomfortable taking bounties.

- **Repository Maintenance Funding**: kushti proposed monthly bounties for repo maintenance (reviews, dependency updates) via ErgoDevs DAO. cannon_q agreed but process/recipients TBD; details to be updated later in week.

- **Node Panel Updates**: kushti tagged wrong person (TMRERG) regarding node panel update issues; actual owner/status unclear.

- **Reputation Proof Integration**: Josemi working on forum reputation system; kushti experienced `ergo.get_current_height is not a function` error during profile creation with SafeW wallet. Works with Nautilus; alert/documentation needed.