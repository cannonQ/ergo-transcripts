# Ergo Developer Chat Summary — 2024-W17

## Key Topics Discussed

- **ErgoScript 6.0 enhancements**: `bigInt` constructor and custom Autolykos 2 PoW validation function for trustless relay and sidechain use cases (msg#26520).
- **Paideia contract parameter handling**: EIP-5 implementation with ConstantPlaceholder issues when contracts include parameterized inputs (msg#26516).
- **Address derivation path inconsistency**: Fleet SDK and ergo-lib producing different addresses from same seed phrase due to different derivation methods; resolved via `m/44'/429'/0'/0` path alignment (msg#26493–#26500).
- **Lithos Protocol GPU mining on sidechains**: New PoW validation function enables Autolykos variants with different "k" values useful for implementing Lithos on merge-mined sidechains (msg#26520–#26521).
- **Rosen Bridge infrastructure**: Scaling tests for peer discovery and direct messaging, Bitcoin integration, ARM v7 support for Watcher, and EVM address transaction extractor (msg#26524–#26525).
- **ErgoDevs DAO bootstrapping**: Multisig setup (3-of-5), Paideia instance for roadmap management, Telegram and Discord bridge coordination (msg#26504–#26551).

## Important Decisions or Announcements

- [@kushti, msg#26499, 2024-04-23]: Weekly Ergo Developers chat scheduled for Wednesday, 24 April at 1 PM UTC.
- [@LowKeyNerd - Blitz TCG, msg#26517, 2024-04-24]: Blitz TCG officially launched on Ergo with open-source repository and upcoming pack sale (Friday, 26 April).
- [@kushti, msg#26518, 2024-04-24]: Multiple protocol R&D PRs submitted for review: header PoW validation, node method extension tests, EIP-50 (Sigma 6.0) improvements, and unused code removal.
- [@kushti, msg#26522, 2024-04-24]: Decision to include `Global.powHit()` custom PoW check function in Sigma 6.0 for sidechain and PoW NFT use cases.
- [@kushti, msg#26531, 2024-04-25]: ErgoDevs DAO multisig finalized: ccellado, cannon_q, lgd, mgpai, kushti with 3-of-5 threshold (EF-tested standard).
- [@Marc the Shark, msg#26527, 2024-04-24]: Sigmanauts Mining Dashboard v2 live with planned backend database integration for 7-day, 3-day, and 24-hour hashrate metrics.
- [@cannon_q, msg#26530, 2024-04-24]: "The Field" peer-to-pool pledging DAO MVP contracts complete; full flow tested on-chain with open Discord for volunteers.

## Technical Q&A Worth Preserving

- **Q** (@jossemii, msg#26493): Fleet SDK returns different addresses than ergo-lib for the same seed phrase; which is correct?
  **A** (@Pgr456, msg#26500): Fleet SDK uses wallet derivation path `m/44'/429'/0'/0` (Nautilus standard). Use `ExtSecretKey.derive()` with DerivationPath in ergo-lib to match. [Link to Nautilus constant](https://github.com/nautls/nautilus-wallet/blob/d63645954c06ea0566b5d8eab13b3e2bc5a3b5d8/src/constants/ergo.ts#L4) and [ergo-lib derivation reference](https://github.com/ergoplatform/sigma-rust/blob/999ab8db0f77530a3923500329b908ee07ebad2e/ergo-lib/src/wallet/derivation_path.rs#L150-L164).

- **Q** (@jossemii, msg#26495): Paideia contract template with parameter `imPaideiaDaoKey: Coll[Byte]` throws TyperException; parameter definition wrong?
  **A** (@jossemii, msg#26497): Self-resolved; parameters required ConstantIndex mapping in JSON template (msg#26498 shows corrected JSON with constTypes and parameters array).

- **Q** (@jossemii, msg#26502): Should ergo-headless-dapp-framework be updated to modern ergo-lib (currently on 0.14.0)? Is it worth maintenance effort?
  **A** (@kushti, msg#26503): Clarification requested on framework features beyond ergo-lib. @jossemii indicated (msg#26509) willingness to update if features are useful; framework has transaction-building abstractions worth preserving.

- **Q** (@tsm121, msg#26532): Can dApps be developed without ErgoScript (e.g., using Python)?
  **A** (@Paul, msg#26533–#26534): ErgoScript required only for on-chain contract logic. Off-chain apps, tooling, and simple transactions can use Python via ergpy or direct REST calls. (@dΣathgripson, msg#26538 & @kii, msg#26548 confirmed ergpy exists; maintained status unclear).

- **Q** (@Flying Pig, msg#26540–#26541): What confirmation count represents practical finality for Ergo (CEX standard is 30, e.g., KuCoin)?
  **A** (@Pulsarz, msg#26542): CoinEx requires 10 confirmations. (No authoritative core finality number provided; implies variable CEX policy rather than protocol standard.)

- **Q** (@kushti, msg#26520): Is the new `Global.powHit()` custom PoW validation function needed?
  **A** (@cheeseenthusiast, msg#26521): "Quite useful for implementing Lithos on sidechains with different variations of Autolykos." (@kushti, msg#26522 decided to include in Sigma 6.0.)

- **Q** (@luis_avila_, msg#26558–#26559): Feasible to build camera-based NFT minting app for image verification with low cost and high security?
  **A** (@soupsa, msg#26560–#26561): Hash-only approach cheaper and sufficient for proof of existence; NFT minting unnecessary. Suggested ErgoHack project with BTC interoperability via Rosen Bridge to keep user costs low while leveraging Ergo's low fees.

## Links Shared

- [GitHub Issue #2093](https://github.com/ergoplatform/ergo/issues/2093): Storage rent and box cleanup discussion; testing needed.
- [Plasma-Toolkit v1.0.4 Release](https://github.com/K-Singh/Plasma-Toolkit/releases/tag/v1.0.4): Lithos Protocol tools (shared by Cheese Enthusiast).
- [PR #2143, #2146, #2148, #2151](https://github.com/ergoplatform/ergo/pulls): Node PRs polished for review (header handling, method extension, test examples).
- [PR #2149](https://github.com/ergoplatform/ergo/pull/2149): Extended header format test (too early to review, will be extended).
- [Sigmastate-Interpreter PR #967](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/967): BigInt constructor for ErgoScript 5.x.
- [Sigmastate-Interpreter PR #965](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/965): Custom Autolykos 2 PoW validation function.
- [Sigmastate-Interpreter PR #961](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/961): Unused code removal.
- [Oracle-Core PR #328](https://github.com/ergoplatform/oracle-core/pull/328): Oracle pool contract review.
- [Sigma-Rust PR #736](https://github.com/ergoplatform/sigma-rust/pull/736): Approved by kushti; noted for merged in few days.
- [Blitz TCG Collection](https://ergoauctions.org/collection/822ed9428a71bef65e667a6e35313c221711680f893614471a3c133049f9abfd?tab=0): Ergo auction listing.
- [Blitz TCG GitHub](https://github.com/Blitz-TCG): Now fully open-source.
- [Rosen Bridge rosenet Commits](https://github.com/rosen-bridge/rosenet): Direct messaging and peer discovery scaling test completions.
- [Rosen Bridge Guard-Service Bitcoin Integration](https://github.com/rosen-bridge/guard-service/commit/2a6232b6326a72487993ce42dd12b4029cd96cb1): Bitcoin support added.
- [Rosen Bridge Watcher Bitcoin Integration](https://github.com/rosen-bridge/watcher/commit/a2ea25316a165902b79e8e8e92a06ef948fc1d4d): Bitcoin support added.
- [Rosen Bridge Scanner EVM Extractor](https://github.com/rosen-bridge/scanner/tree/104-evm-address-tx-extractor): Under review and test.
- [The Field DAO Pledge Tx](https://explorer.ergoplatform.com/en/transactions/ed0f9b0175e00c17305a9a4620f96e97731e8b95baff8a0d8c3129bc48d6fcc1): On-chain userPayout test.
- [The Field DAO Discord](https://discord.gg/wa38bX57tY): Project coordination server.
- [Ergopy](https://github.com/mgpai22/ergpy): Python JVM wrapper for Ergo transaction construction.
- [Ergopy Example](https://github.com/mgpai22/ergpy/blob/main/examples/example_1.py): Code example.
- [DECO Education Docs](https://deco-education.github.io/deco-docs/docs/into-the-woods/prepwork-0-what-is-blockchain/blockchain-101): Blockchain and smart contract tutorial.
- [Capsule](https://www.slaternie.com/capsule): Historical image verification startup (mgpai's previous work).

## Unresolved Questions

- **Headless-dapp-framework maintenance**: Should the framework be updated to modern ergo-lib? Requires clarification on which features justify ongoing effort (msg#26502–#26509, @jossemii indicated willingness but decision pending).
- **Paideia EIP-5 parameter handling**: ConstantPlaceholder conversion for parameterized contracts not fully understood; workaround applied but root cause unclear (msg#26516, noted as "not sure how to turn them into ConstantPlaceholders").
- **Fee finality standard**: No authoritative protocol-level confirmation threshold documented; CEX practices vary (10–30 confirmations); unclear if Ergo consensus exists (msg#26540–#26542).
- **Ethereum oracle on testnet**: @kii asked if ETH oracle exists in testnet and whether Bitcoin oracle is planned (msg#26568); no response recorded.
- **Bitcoin oracle roadmap**: Implicit question whether Ergo will implement native Bitcoin oracle infrastructure post-Chainlink partnership (msg#26568, unresolved).