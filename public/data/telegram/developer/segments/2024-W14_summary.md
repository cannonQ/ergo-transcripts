---
title: "Ergo Developer Chat — 2024-W14"
date_start: "2024-04-01"
date_end: "2024-04-07"
type: telegram_weekly
channel: developer
week: "2024-W14"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo Developer Chat Summary — 2024-W14

## Key Topics Discussed

- **Ergo Protocol Reference Client Releases**: v5.0.21 released with v5.1.0 coming after testing; focus on issue cleanup, P2P network hardening, sub-blocks EIP completion, and sidechains refactoring.

- **Sigma 6.0 EIP Composition**: Major protocol work underway to formalize Sigma 6.0 (potentially EIP-50) including nbits encoding/decoding methods and removal of unused code in sigmastate-interpreter.

- **Dexy Protocol Rebalancing**: Dexy depegged in testnet; intervention and parameter adjustments planned for mainnet deployment in April.

- **SigmaUSD Update Keys**: New holders added: kushti, Luivatra, anon-real, anon2020s, and mgPai now manage protocol parameters.

- **Paideia DAO Contract Hardening**: Fool-proofing contracts, ensuring data type immutability in config updates, introducing read-only flags for governance token IDs; frontend upgraded to newer Node.js/Next.js versions.

- **Rosen Bridge TSS Enhancements**: Major updates to threshold signature scheme with separate ECDSA/EdDSA signer classes, signature recovery for ECDSA, and security fixes (salt checks on API key authentication) across guard-service, watcher, and CLI.

- **Flashloan Feasibility on Ergo**: Discussion of whether flashloan patterns are possible; consensus that atomic single-transaction execution across multiple protocols is difficult due to UTXO model constraints and risk of interference from other transactions in mempool.

- **Node Indexing Issues**: Reports of unknown token warnings and missing box errors in logs after 5.0.21 update; solution: deleting `/history/extra` directory and rescanning.

- **Ergo as Oracle for Other Blockchains**: Technical question raised but not fully addressed; context suggests Rosen Bridge provides cross-chain oracle capabilities.

- **Scanner Limitations**: Node scans only work forward from registration time; historical data requires `/wallet/rescan` or use of explorer APIs with additional indices.

## Important Decisions or Announcements

- [@kushti khushi, msg#26244, 2024-04-03]: Ergo protocol R&D roadmap confirmed — next releases focus on additional indices testing, P2P polishing, sub-blocks EIP completion, and sidechains refactoring.

- [@kushti khushi, msg#26244, 2024-04-03]: v5.1.0 release scheduled for Monday (2024-04-08) after testing.

- [@Glasgow｜WON'T DM, msg#26248, 2024-04-03]: Ergo Foundation reincorporating as DAO LLC; multisig handovers and 2FA upgrades underway; Ergo Matrix server initialized, waiting on `.well-known` config deployment.

- [@Glasgow｜WON'T DM, msg#26248, 2024-04-03]: MEXC integration progressing — anon_br added signing capabilities to FleetSDK; MEXC team resuming work.

- [@moein_z (Rosen Bridge), msg#26249, 2024-04-03]: TSS signature recovery and ECDSA keygen/sign scenarios completed; salt-based API key authentication deployed across guard-service, watcher, and CLI to prevent precomputed hash attacks.

- [@MavΣrickBg (bober), msg#26267, 2024-04-03]: $Bober token launch successful with 100+ participants, bots filtered; LP locked in 10 batches over 3 months; website and domain (BoberToken.io) nearly complete.

- [@Marc the Shark, msg#26276, 2024-04-03]: Sigmanauts Mining Pool UI beta released; currently testing and refactoring code.

- [@Koutelier, msg#26264, 2024-04-03]: $COMET liquidity rewards program announced for Spectrum COMET/ERG pair with 20% hodl incentives for 1M+ COMET locked one year.

## Technical Q&A Worth Preserving

- **Q** (@jossemii, msg#26283): Recommended way to connect Rust code to testnet node — local vs. provider, peer list?
  **A** (@cafebedouin.org, msg#26284–26287): Use TokenJay peer list (swap ports for testnet), or reference testnet docs at ergoplatform.com.

- **Q** (@jossemii, msg#26308): How to query unspent boxes with a specific asset using scans and node API?
  **A** (@kushti khushi, msg#26309): Scans only work forward from registration; must run `/wallet/rescan` to find boxes created before scan registration. For historical data, use explorer APIs with additional indices.

- **Q** (@jossemii, msg#26310): Should Rust development use ergo-node-interface, sigma-rust, or explorer APIs? What's the relationship between sigma-rust and FleetSDK?
  **A** (@kushti khushi, msg#26311): If finding historical unspent boxes is inconvenient via rescan, use explorer + additional indices. Sigma-rust and FleetSDK serve different purposes (sigma-rust is lower-level cryptographic bindings; FleetSDK provides higher-level transaction building).

- **Q** (@Luivatra, msg#26259–26261): Can arbitrage between 3 LPs (ERG/A, A/B, ERG/B) be done atomically in one transaction?
  **A** (@Paul, msg#26260–26262): Possible with interface building chained txs for best price, but vulnerable to fee-bidding interference from other users breaking the chain; higher mining fee expectation recommended.

- **Q** (@kushti khushi, msg#26291): How to fix "object fleetSdkCommon is not a member of package sigmastate" error in IntelliJ after importing build.sbt?
  **A** (@ergomorphic, msg#26292–26293): IntelliJ doesn't run sbt plugins properly; regenerate Scala.js wrappers by running `compile` and `test` in sbt command line.

- **Q** (@Luivatra, msg#26285): Example config for current testnet node?
  **A** (@mgpai, msg#26289): Provided full testnet node configuration with testnet networkType, genesis digest, reemission checks, and peer list.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.21]: Ergo protocol v5.0.21 release notes.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/960]: nbits encoding/decoding methods for Sigma 6.0 EIP.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/957]: Unused code removal in sigmastate-interpreter.

- [https://github.com/OpShin/opshin/pull/363]: OpShin flashloan discussion (referenced for Ergo feasibility comparison).

- [https://github.com/rosen-bridge/tss-api]: Rosen Bridge TSS API with ECDSA keygen/sign implementation.

- [https://github.com/rosen-bridge/utils/tree/185-tss-signature-recovery]: Rosen Bridge TSS signature recovery branch.

- [https://github.com/marctheshark3/sigmanaut-mining-pool-ui]: Sigmanauts Mining Pool UI beta repository.

- [https://api.tokenjay.app/peers/list]: TokenJay mainnet peer discovery (swap ports for testnet).

- [https://docs.ergoplatform.com/node/testnet/testnet-resources/]: Ergo testnet documentation and resources.

- [https://docs.ergoplatform.com/contribute/standards/#v3-community-administration]: Community administration standards (updated automod recommendations).

- [https://colab.research.google.com/drive/13O_6XEHi7xbjuhzby0s7YGX0rshrClXK]: Analytics notebook for Ergo ecosystem.

- [https://ergo.getgrist.com/jf9KPR1HUDJH/Project-Management/p/46]: Grist project management database (806 repos tracked, new Analytics category).

- [https://app.artemis.xyz/developer-activity?ecosystemValue=Ergo]: Artemis developer activity tracker for Ergo (826+ repos).

- [https://t.me/ergoplatform/431900]: GARD DAO announcement in Ergo Telegram.

- [http://213.239.193.208:9052/info]: Testnet node info endpoint.

- [http://176.9.15.237:9052/info]: Testnet node info endpoint.

## Unresolved Questions

- **Flashloan atomicity**: Whether true flashloans (borrow → swap → repay in single atomic tx) are feasible on Ergo given UTXO model constraints; discussed but consensus unclear whether partial solutions via chained txs with higher fees suffice.

- **Ergo as cross-chain oracle**: Question raised whether Ergo can serve as oracle for other blockchains (#msg26237) — raised but not substantively answered in chat; Rosen Bridge context suggests capability but no direct answer given.

- **IntelliJ compilation issue persistence**: `fleetSdkCommon` import error after sbt command-line recompilation suggested as fix (#msg26291–26294); unclear if issue fully resolved for kushti.

- **Gluon mainnet launch timing**: Testnet testing underway, UI updates and multisig setup remain (#msg26245); exact launch date TBD.