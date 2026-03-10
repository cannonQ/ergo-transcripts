---
title: "Ergo Developer Chat — 2024-W18"
date_start: "2024-04-29"
date_end: "2024-05-05"
type: telegram_weekly
channel: developer
week: "2024-W18"
source: telegram
message_count: 159
categories: [technical, community, nft, governance, mining, bridges, defi, ecosystem, wallet]
key_terms: [Nipopow, proof generation, NoSuchElementException, extra indexer, node error, Sigma 6.0, EIP-50, PoW check, bigInt constructor, bounty tasks, mempool, orphan transactions, double-spend, cleanup duration, invalid txs, sigma-rust, transaction signing, 900 inputs, performance bottleneck, context recreation]
---
# Ergo Developer Chat Summary — 2024-W18

## Key Topics Discussed

- **NIPoPoWs proof generation failure**: Node error in proof generation with `NoSuchElementException` in `NipopowProverWithDbAlgs` — issue flagged but determined to be non-critical (proof bytes simply not written to DB); root cause of indexer stoppage remained unclear [@Aco Šmrkas, msg#26571–26576].

- **Sigma 6.0 protocol upgrade**: Core focus with multiple merged and in-review PRs. New PoW check method, BigInt ErgoScript constructor, and unused code removal completed. EIP-50 updated with outstanding issues and bounties. Target activation around November as requested by Lithos team [@kushti, msg#26607].

- **Mempool orphan transaction cleanup**: Transactions spending already-confirmed UTXOs lingering in mempool for multiple blocks. Default `mempoolCleanupDuration` config value too high; lowered to 1s recommended. PR #2156 implemented automatic removal of double-spend transactions [@kushti, msg#26622–26680].

- **sigma-rust performance bottleneck with large input sets**: Signing transaction with 900 inputs takes 30+ minutes; sigma-rust recreates context per input. PR #740 addresses Rust toolchain and CI issues. Performance scaling problem acknowledged but long-term fix not ready [@Pgr456, msg#26595–26613].

- **Sub-blocks design and GHOST algorithm**: Discussion on whether GHOST (Greedy Heaviest-Observed Subtree) fork-choice rule should be used for sub-blocks. kushti indicated GHOST not in current draft proposal; deferred to post-Sigma 6.0 community discussion around Ergoversary. Sub-blocks currently a "velvet fork" (backward compatible), not requiring protocol upgrade [@ergomorphic & kushti, msg#26713–26734].

- **Rosen Bridge feature expansion**: Implementation of `signTransaction` for EvmChain, Bitcoin Runes support being designed, RoseNet node discovery and spec updates, Swagger-UI and axios dependency updates [@vorujack, msg#26616].

- **Dexy tracking contracts deployment**: Tracking contracts deployed to mainnet; seeking update key holders. Forum post forthcoming [@kushti, msg#26607, msg#26668].

- **SigmaUSD update key holder rotation**: New holders assigned (Luivatra, anon-real, anon2020s, mgpai, kushti); Darkside to send keys in 1–2 days [@kushti, msg#26607].

- **ErgoHack VIII announcement**: May 25 – June 2, 2024, co-hosted with CKB. Graphics and articles being prepared; targeting BTC/Nostr communities for outreach [@Glasgow, msg#26594, msg#26604].

- **Blitz TCG card sale launch**: 3,000+ packs sold on launch day (~15,000 cards distributed). Secondary market active; burn contract in development for card-to-BLTZ token conversion with halving mechanics [@LowKeyNerd - Blitz TCG, msg#26611].

- **Paideia DAO platform updates**: New auth system live (invisible to enduser, improves UX). Proposals can now have no action or multiple actions. Staked token representation corrected to use DAO-specific token rather than hardcoded PAI [@luivatra, msg#26606].

- **Sigmanauts mining pool growth**: ~$2,700 in bonus tokens added to pool (18 daily random payouts). Now 10th largest pool; Aco voted in as Sigmanaut; advertising on mining pool stats approved [@qx(), msg#26596].

- **On-chain limit order exchange (Shadow Mempool)**: ErgoHack proposal using time-limited multisig with temporary unlock height. User retains L1 control; worst case is temporary hold. Simple P2PK multisig tested in TypeScript [@c8, msg#26609].

- **ChainCash development**: Abstract paper nearing publication; working on persistence layer and transaction builders via PR #43, issues #40–41 tracking multiparty tests [@kushti, msg#26607].

- **ErgoDevs DAO formation**: Telegram group established; collecting public keys for multisig. Basic principles and DAO management rules to be discussed [@kushti, msg#26608].

## Important Decisions or Announcements

- [@kushti, msg#26659, 2024-05-02]: Mempool orphan transaction cleanup will be included in version 5.0.22.

- [@kushti, msg#26720, 2024-05-05]: Sigma 6.0 is the current priority with target activation around November. Sub-blocks deferred post-Sigma 6.0. Contributors needed for Sigma 6.0 work per EIP-50 instructions.

- [@Glasgow, msg#26604, 2024-05-01]: Graphics and articles for ErgoHack VIII being prepared; CKB co-hosting confirmed.

- [@dusek_, msg#26683, 2024-05-02]: sigma-rust PR #740 (CI/Rust toolchain fixes) will be merged soon.

- [@Pgr456, msg#26696, 2024-05-03]: Proposal to publish c-bindings as downloadable shared libraries on GitHub releases (avoiding per-project builds).

- [@kushti, msg#26672, 2024-05-02]: PR #2156 (mempool orphan cleanup) available in non-merged branch for testing.

## Technical Q&A Worth Preserving

- **Q** (@Pgr456): Sigma-rust performance issue — signing transaction with 900 different ergoTrees and 900 secrets takes 30+ minutes. Does performance scale with input count?
  **A** (@dusek_): Confirmed — sigma-rust recreates context per input; doesn't scale well. Long-term fix in progress but not ready. PR #740 won't directly help. Error "not enough witness for prover" occurs above ~900 inputs [@msg#26595–26605].

- **Q** (@Pgr456): Should c-bindings for sigma-rust be published as pre-built shared libraries on GitHub releases?
  **A** (@Pgr456): Proposal raised; would simplify adoption in wrapper projects. Feasibility: need to set up CI pipeline to build and attach binaries [@msg#26696].

- **Q** (@Aco Šmrkas): Node reporting NIPoPoWs proof generation error — is this critical?
  **A** (@kushti via DiscordBridge): Error is logged but ignored in code; NIPoPoW bytes simply not written to DB. Root cause of indexer stoppage needs investigation [@msg#26571–26576].

- **Q** (@luivatra): Should mempool cleanup be configured on Explorer nodes?
  **A** (@kushti): Some explorer nodes already have custom mempool settings. Lowering `mempoolCleanupDuration` default (currently very high) is worth testing [@msg#26622–26629].

- **Q** (@Flying Pig): Can we clear mempool of transactions spending already-confirmed UTXOs via API?
  **A** (@kushti): Node should do this automatically, but doesn't due to lack of indices. Implemented in PR #2156 — will be in 5.0.22 [@msg#26645–26680].

- **Q** (@ergomorphic): Why was GHOST fork-choice rule not selected for Ergo? Relevant for fast-block scenarios and sub-blocks.
  **A** (@kushti): GHOST not considered; Bitcoin-NG microblocks were discussed 2016–17. Sub-blocks currently use longest-chain rule in draft (velvet fork). GHOST can be proposed as alternative on top of sub-blocks branch; discussion deferred to post-Sigma 6.0 Ergoversary chat [@msg#26713–26734].

- **Q** (@kii): When all Sigma 6.0 issues are fixed, will protocol be ready?
  **A** (unresolved): @kushti did not respond directly. Implied: EIP-50 lists straightforward tasks; activation targeted for November [@msg#26720, msg#26736].

## Links Shared

- [ErgoHack VIII Announcement](https://ergoplatform.org/en/news/ErgoHack-8-Ergo-as-a-Smart-Layer/): May 25 – June 2, 2024; CKB co-hosting [@msg#26594].

- [EIP-50 (Sigma 6.0 spec)](https://github.com/ergoplatform/eips/pull/100): Updated with bounties and outstanding issues [@msg#26607].

- [sigma-rust PR #740](https://github.com/ergoplatform/sigma-rust/pull/740): Rust toolchain, CI, and clippy fixes; ready for merge [@msg#26682–26691].

- [sigma-rust Issue #741](https://github.com/ergoplatform/sigma-rust/issues/741): Adding missing c-bindings types (ExtPubKey, DerivationPath, etc.) [@msg#26630].

- [Sub-blocks draft proposal](https://github.com/ergoplatform/ergo/pull/2055/files): Current design without GHOST [@msg#26725].

- [Mempool cleanup PR #2156](https://github.com/ergoplatform/ergo/pull/2156): Automatic removal of orphan transactions; for testing in non-merged branch [@msg#26672].

- [Dexy tracking contracts forum post](https://www.ergoforum.org/t/bootstrapping-of-gold-oracle-pool-and-dexy/4660/4): Tracking contract deployment and use cases [@msg#26668].

- [Vector oracles research](https://www.ergoforum.org/t/scaling-oracle-price-feeds-with-vector-oracles/4772): kushti left feedback [@msg#26665].

- [Bitcoin-NG paper reference (screenshot)](https://cdn.discordapp.com/attachments/669989266478202917/1236709104303734995/bitcoin-ng.png): Historical discussion from January on sub-blocks incentivization [@msg#26723].

- [Velvet forking paper](http://diyhpl.us/~bryan/papers2/bitcoin/A%20wild%20velvet%20fork%20appears:%20Inclusive%20blockchain%20protocol%20changes%20in%20practice%20-%202018.pdf): Sub-blocks design approach [@msg#26734].

- [Paideia DAO proposal — token liquidation](https://app.paideia.im/Sigmanauts/proposal/gentle-token-liquidation-rights-b9f46af8-c7d0-42a9-8c23-f4c149a18e69): SigmaUSD lending on DuckPools [@msg#26596].

- [Sigmanaut mining pool bonus treasury spend](https://app.paideia.im/Sigmanauts/proposal/social-mining-boost-and-pool-rewards-6863ff19-9004-435c-93be-c6a49553aecc): Approved on Paideia [@msg#26596].

- [Sigmanauts mining pool advertising proposal](https://app.paideia.im/Sigmanauts/proposal/advertising-for-sigmanaut-mining-pool-da3c7b6e-73cd-4bbf-b800-af7b0e7152eb): Passed [@msg#26596].

- [The Field pledge protocol](https://discord.gg/wa38bX57tY): DAO-driven peer-to-pool pledging; MVP contracts complete, dApp UI integration started [@msg#26599].

- [Blitz TCG explorer (imgur)](https://imgur.com/a/uBpDORS): Marketing banners for Sigmanauts mining pool [@msg#26631].

- [sigmaspace.io testnet explorer](sigmaspace.io): Testnet node + DB setup needed; future development [@msg#26712].

- [Crux Harmony repository](https://github.com/cruxfinance/crux-harmony): Used to restart node and clear mempool without losing RPC availability [@msg#26606].

- [Fleet SDK multisig test](https://github.com/SavonarolaLabs/fleet-serializer-import/blob/txchaining/src/lib/multisig/multisig.spec.ts): TypeScript P2PK multisig for Shadow Mempool [@msg#26609].

## Unresolved Questions

- **Root cause of indexer stoppage (msg#26571–26576)**: NIPoPoWs proof generation fails with `NoSuchElementException`, but error is caught and ignored. Why does indexer then stop? Logs unclear.

- **Optimal mempool cleanup configuration**: Test results for lowered `mempoolCleanupDuration` and `mempoolReCheckTimeout` (30s default proposed) not yet reported. Need real-world testing feedback [@msg#26622–26627].

- **Sub-blocks and GHOST adoption**: Technical rationale for rejecting GHOST in draft not detailed. kushti deferred to Ergoversary discussion. Whether ergomorphic will propose GHOST alternative is TBD [@msg#26724–26731].

- **Sigma 6.0 contributor recruitment**: EIP-50 lists straightforward bounties, but few contributors signed up. No timeline provided for issue resolution [@msg#26720].

- **Ledger wallet transaction signing discrepancy**: Non-Ledger Nautilus wallet signs identical transaction successfully; Ledger-connected wallet fails with script verification error. Cause not identified — possibly serialization or timestamp-related [@msg#26587, msg#26671].

- **Testnet mining activity**: Testnet went offline for ~24h; mining restarted by community members. No formal root cause analysis or mitigation plan discussed [@msg#26697–msg#26712].