---
title: "Ergo Developer Chat — 2024-W42"
date_start: "2024-10-14"
date_end: "2024-10-20"
type: telegram_weekly
channel: developer
week: "2024-W42"
source: telegram
message_count: 173
categories: [technical, wallet, governance, defi, mining, ecosystem]
key_terms: [6.0 activation, sub-blocks, voting parameters, soft-fork, protocol upgrade, sigmastate-interpreter, repository move, validation rules, pull requests, Nautilus, 0-conf, Manifest v3, browser extension, Ledger, Stax, Flex, Nano S discontinued, token limit increase to 100, Paideia, smart contracts]
---
# Ergo Developer Chat Summary — 2024-W42

## Key Topics Discussed

- **sigmastate-interpreter Repository Migration**: [@kushti, msg#30787, 2024-10-14] The sigmastate-interpreter repository was moved to the ergoplatform GitHub organization, consolidating Ergo protocol development infrastructure.

- **Protocol 6.0 Activation Planning**: [@kushti, msg#30808, 2024-10-16] Work underway on 6.0 soft-fork activation details including voteable sub-blocks-per-block parameter (range 2–2048, default 30), new validation rules replacing old method/type checks, and sub-blocks processing refactoring. Ergo protocol reference client 6.0.0 Alpha2 released for devnets only.

- **Sub-blocks Architecture**: [@kushti, msg#30852, 2024-10-17] Introduced voteable sub-blocks-per-block parameter enabling miners to adjust block structure post-6.0 activation; nodes < 6.0 will skip unknown parameters and remain on-chain. Default value 30 sub-blocks per block; minimum 2, maximum 2048 (58ms block time theoretically).

- **Nautilus Wallet 0-Conf Support**: [@anon_BR, msg#30800, 2024-10-16] Released v0.15.0-beta.0 with 0-conf support; awaiting Google Chrome Web Store review under Manifest v3. Ledger Nano S support removed per Ledger HQ request; token limit per transaction increased from 20 to 100 without Nano S constraints.

- **Ledger Integration Progress**: [@anon_BR, msg#30800, msg#30805, 2024-10-16] First version of Stax and Flex device implementation complete in ledger-app-ergo#19; memory optimizations still needed. Nano S discontinued and support being removed across embedded apps.

- **Paideia DAO Contracts Deployment**: [@luivatra, msg#30823, 2024-10-16] Updated contracts deployed with workaround for map ordering issue; proposal creation and voting tested successfully; infrastructure ready for mainnet launch.

- **Celaut (formerly Xelato) Project**: [@jossemii, msg#30816, 2024-10-16] Repository refactored and renamed to "paradigm"; demo service in development showing resource control and service execution patterns. Benefaction platform contract implementation ongoing with help from @b.wp and @ldgaetano.

- **Sigmanauts Mining Pool Miner ID System**: [@cannon_q, msg#30849, msg#30850, 2024-10-16] Miner ID vote passed at 3 ERG cost; enables miners to customize payout tokens (ERG, rsBTC, rsADA, CYPX, Gluon, etc.). Addresses ~20% of 2miners pool receiving BTC instead of ERG; token swaps rolling out November with hopes for diversifying mining returns.

- **SigmaUSD Bank Update**: [@kushti, msg#30808, 2024-10-16] Majority vote favors introducing limits; checking implementation path for bank (and possibly pool) update proposal.

- **Dexy Protocol Audit**: [@kushti, msg#30808, 2024-10-16] Received LP actions audit from Four Eyes Consulting; currently under review.

- **AppKit API Improvements**: [@Aberg, msg#30846, msg#30873-30879, 2024-10-16 to 2024-10-18] Multiple PRs opened to improve AppKit API; discussion on whether to deprecate old varargs methods or keep both varargs and new List<?> alternatives. Decision to keep both for backward compatibility per [@kushti, msg#30950, 2024-10-20].

- **Ergo Node on Flux Network**: [@glasshouse (via DiscordBridge), msg#30891-30893, 2024-10-18 to 2024-10-19] Dockerized Ergo node deployed on Flux decentralized cloud infrastructure; healthcheck PR submitted for fully-synced node validation. Working endpoint: https://ergo.app2.runonflux.io/info

- **FleetSDK Constant Encoding**: [@jossemii, msg#30897, 2024-10-19] Question on encoding tuples in FleetSDK; [@Aco, msg#30899] suggested SPair; [@c8e4d2a, msg#30931] provided SColl(SColl, [1, 2]) example pattern.

- **hodlbox Contract Critical Issue**: [@c8e4d2a, msg#30804, 2024-10-16] holdERG3 box contract has critical vulnerability allowing return of arbitrary tokens instead of holdERG3; locked ERG and holdERG3 sent back post-expiry; one 10 holdERG3 box left unlocked as exercise.

- **RocksDB Performance**: [@kushti, msg#30790, 2024-10-14] Testing 5.1.0 with RocksDB; identified slow performance; checking DB settings.

---

## Important Decisions or Announcements

- [@kushti, msg#30787, 2024-10-14]: sigmastate-interpreter repository moved to ergoplatform GitHub org.

- [@kushti, msg#30808, 2024-10-16]: Ergo protocol reference client 6.0.0 Alpha2 released (devnets only); 5.0.23 and 5.0.24 released with version config fix for SatErgo wallet compatibility.

- [@kushti, msg#30814, 2024-10-16]: ErgoDevs DAO seeking Rust developer for Keystone integration; current bounty 3K ERG with possible raffle increase. Also seeking help updating v1 pool and SigmaUSD bank on testnet.

- [@Glasgow (via DiscordBridge), msg#30863, 2024-10-18]: Ergo Foundation voted to add 3K ERG to Keystone integration bounty (6K total with ErgoDevs DAO).

- [@cannon_q, msg#30845, 2024-10-16]: Sigmanauts Mining Pool Miner ID cost vote passed at 3 ERGs; system rollout this week; token swap live targeted for next week.

- [@kushti, msg#30850, 2024-10-17]: Added voteable sub-blocks-per-block parameter; nodes < 6.0 will skip parameter changes and remain functional.

- [@kushti, msg#30956, 2024-10-20]: Ergo node 5.0.24 release addresses indexed node thread issue previously reported.

---

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#30794, 2024-10-16): Explorer APIs down? Balance endpoints returning undefined for addresses.
  **A** (@kushti, msg#30798): Quickly resolved (~4-5 minutes downtime per msg#30802).

- **Q** (@Marc the Shark, msg#30821, 2024-10-16): AppKit wallet generation failing; slf4j logging errors; unable to read from node; insufficient ERG in wallet.
  **A** (@Aberg, msg#30825, msg#30829, msg#30835): Requires 1.001 ERG minimum; code example using testnet API endpoints; change testnet references to mainnet API and configs.

- **Q** (@Marc the Shark, msg#30836, 2024-10-16): AppKit-generated address differs from node wallet address for same seed phrase.
  **A** (@Aberg, msg#30837): Node wallet may be from bugged legacy implementation; newly created wallets should not have this issue.

- **Q** (@wxip, msg#30819, 2024-10-16): Is `window.ergoConnector.nautilus.connect()` safe for verification or must signed message be validated?
  **A** (@anon_BR, msg#30820): Signed message must be verified against public key; example provided via Discord link.

- **Q** (@jossemii, msg#30897, 2024-10-19): How to encode tuple of two strings in FleetSDK?
  **A** (@Aco, msg#30899): Use `SPair`. (@c8e4d2a, msg#30931): Use `SColl(SColl, [1, 2])` pattern similar to Crystal Pool example.

- **Q** (@jossemii, msg#30927, 2024-10-19): Getting errors using SPair in FleetSDK; no examples found.
  **A** (@anon_BR, msg#30936): Test vectors at https://github.com/fleet-sdk/fleet/blob/master/packages/serializer/src/_test-vectors/constantVectors.ts#L472-L579 show SPair usage. (@anon_BR, msg#30938): STuple with >2 items not supported.

- **Q** (@jossemii, msg#30940, 2024-10-20): SPair blocking tx build; error with `R5: SConstant(SLong(1n))`.
  **A** (@anon_BR, msg#30943): Don't wrap SPair with SConstant. (@Aco, msg#30944): Use unwrapped `SPair(SLong(BigInt(...)), SLong(BigInt(...))).toHex()`.

- **Q** (@glasshouse, msg#30910, 2024-10-19): What do `/info` endpoint fields mean? fullHeight vs height vs headersHeight? How large is Ergo blockchain?
  **A** (@Aberg, msg#30919): Check `headersHeight == maxPeerHeight` AND `fullHeight == maxPeerHeight` to confirm node sync. (@Michael, msg#30921): ~45 GB for indexed node.

- **Q** (@glasshouse, msg#30912, 2024-10-19): If fullHeight == headersHeight, is node synced?
  **A** (@Aberg, msg#30913, msg#30914): No; must compare against network via `maxPeerHeight`.

- **Q** (@Paul, msg#30860, 2024-10-17): Do sub-blocks have mining rewards without hardfork or on-chain contracts?
  **A** (@cafebedouin, msg#30861): Miners earn transaction fees and storage rent from input (sub-)blocks; constant reward from ordering blocks (per Ergo scalability forum post).

- **Q** (@Aberg, msg#30846, 2024-10-16): AppKit API design: add new List<?> methods and deprecate old varargs, or keep both?
  **A** (@kushti, msg#30950, msg#30954): Keep both without deprecation to avoid breaking changes. Final approach: new List<?> methods with old varargs kept as alternatives.

---

## Links Shared

- [https://github.com/ergoplatform/sigmastate-interpreter]: sigmastate-interpreter moved to ergoplatform org.
- [https://github.com/ergoplatform/ergo/pull/2190]: PR adding voteable sub-blocks-per-block parameter.
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1029]: Sigma validation rules replacement (method/type check updates).
- [https://github.com/ergoplatform/ergo/pull/2152]: Tests for 6.0 scripts.
- [https://github.com/ergoplatform/ledger-app-ergo/pull/19]: Ledger Stax/Flex device implementation.
- [https://github.com/celaut-project/nodo/blob/master/docs/USAGE.md]: Celaut project documentation (Paradigm architecture).
- [https://gluon.gold]: Gluon frontend (SDK update in progress).
- [https://x.com/GluonStable/status/1845805133973856720]: Gluon SDK announcement.
- [https://github.com/zackbalbin/ErgoTutorials/tree/master/appkit/scala/minttoken]: AppKit Scala token minting example.
- [https://discord.com/channels/995968619034984528/1001372811979399179/1001374334780190771]: Djed Alliance Discord.
- [https://github.com/ergoplatform/ergo-appkit/pull/241]: AppKit PR (under review).
- [https://github.com/ergoplatform/ergo-appkit/pull/246]: AppKit API improvements ready for review.
- [https://docs.ergoplatform.com/dev/p2p/network/#sync-info-old]: Ergo P2P sync documentation.
- [https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/nodeView/history/ErgoSyncInfo.scala#L91]: ErgoSyncInfo v2 header ID retrieval logic.
- [https://ergo.app2.runonflux.io/info]: Working Flux Ergo node endpoint (healthcheck validated).
- [https://github.com/jkrek17/Ergo/blob/master/ergo-node-docker/docker-compose.yml]: Dockerized Ergo node for Flux.
- [https://github.com/fleet-sdk/fleet/blob/master/packages/serializer/src/_test-vectors/constantVectors.ts#L472-L579]: FleetSDK constant encoding test vectors (SPair examples).
- [https://github.com/SavonarolaLabs/crystal-pool/blob/0a89aff024a44d8c76eada450f105633cabe4aca/src/lib/wallet/deposit.ts#L38]: Crystal Pool SColl pattern example.
- [https://escript.online/]: EScript online IDE (restored after domain downtime).
- [https://playcyberverse.com/]: Cyberverse game.
- [https://www.duckpools.io/]: DuckPools.
- [https://sigmafi.app/#/]: SigmaFi.
- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/11]: Ergo scalability plan forum post (sub-blocks and mining rewards discussion).

---

## Unresolved Questions

- **Node Sync Confirmation** (msg#30918, 2024-10-19): Definitive parameters for confirming full node sync still sought; temporary resolution via `maxPeerHeight` comparison noted but no formal documentation cited.

- **AppKit Deprecation Policy** (msg#30846-30879, 2024-10-16-2024-10-18): Settled on keeping old varargs methods alongside new List<?> alternatives, but no formal deprecation timeline established.

- **RocksDB Performance Tuning** (msg#30790, 2024-10-14): Investigation into slow 5.1.0 RocksDB performance ongoing; settings still being checked (no resolution reported by week end).

- **Scala Compiler Infinite Loop** (msg#30957-30960, 2024-10-20): Infinite compilation loop triggered by varargs array conversion code in AppKit; root cause identified but no upstream Scala issue fix mentioned.

- **Sub-blocks Reward Mechanics Post-Emission** (msg#30862, 2024-10-17): Question raised on ordering block reward sustainability after emission exhaustion; deferred to broader protocol discussion.

- **Ordering Block Emission** (msg#30860-30861, 2024-10-17): Sub-blocks earn tx fees/storage rent; ordering blocks earn constant reward—but reward mechanism for ordering blocks after tail emission not explicitly clarified.