---
title: "Ergo Developer Chat — 2025-W06"
date_start: "2025-02-03"
date_end: "2025-02-09"
type: telegram_weekly
channel: developer
week: "2025-W06"
source: telegram
message_count: 100
categories: [governance, technical, defi, bridges, ecosystem, wallet, community]
key_terms: [6.0, soft-fork, voting, testnet, block version, parameter 120, sub-blocks, DAG, input blocks, ordering blocks, P2P network, SigUSD, pool update, oracle pool, update box, Dexy, liquidity pool, SDK integration, mainnet launch, Rosen Bridge]
---
# Ergo Developer Chat — Week 2025-W06 Summary

## Key Topics Discussed

- **Protocol 6.0 Soft-Fork Voting**: Public testnet voting for version 6.0 is active with 780,000 votes recorded. Block version parameter (ID 120) signals soft-fork activation when >90% hashrate consensus achieved. Voting occurs every 128-block epoch.

- **Sub-Blocks (Input/Ordering Blocks) Development**: kushti working on DAG representation of input and ordering blocks in RAM. Initial API methods `bestInputBlock` and `bestInputChain` nearing completion; P2P network DAG storage required for distributed testing.

- **SigmaUSD Pool Maintenance**: Data preparation underway for mainnet pool update to refresh update box and enable v2 upgrade in subsequent voting cycle.

- **Dexy Protocol Testnet Deployment**: LP contracts deployed to testnet; @code.for.uss continuing integration testing with Dexy SDK.

- **Rosen Bridge Bitcoin Runes Integration**: R&D phase complete on integrating Bitcoin Runes with Rosen Bridge. Documentation and proof-of-concepts finalized; development phase to begin soon despite rate limit concerns on certain APIs.

- **Nautilus Wallet Refactoring**: Ledger device integration work includes Device lifecycle methods (closeApp, openApp, getCurrentAppInfo). UI components refactored for improved state management; minor fixes and code quality improvements deployed.

- **Sigma State Interpreter PRs**: Multiple fix PRs under review (sigmastate-interpreter #1043, #1047, #1048, #1050, #1052) for 6.0 release candidate 2.

- **Machine Learning for Contract Testing Automation**: mgPai proposing GRPO (Group Relative Policy Optimization) fine-tuning using 8 A100 GPUs (80GB VRAM each) to automate contract test generation and verification. Goal is to reduce time-consuming manual verification bottleneck.

- **Fleet SDK Frontend Infrastructure**: fantaerik created nodeview.xyz—new indexed node frontend with Swagger TypeScript API generation. No API dependency required; any node can be queried locally.

- **ChainCash Paper Updates**: Ongoing revisions to ChainCash documentation.

- **Minotaur Wallet Features**: Address book selection, wallet archiving, favorite wallet pinning, and toggle for archived wallet visibility.

- **Paideia DAO Creation Debugging**: @luivatra and @cannon_q resolved issues in DAO creation process; working toward Sigma SDK 5.0.15 integration for new ErgoScript functions.

## Important Decisions or Announcements

- [@kushti, msg#32862, 2025-02-04]: Merged candidate 5.0.25 release requires review from maintainers.

- [@kushti, msg#32864, 2025-02-04]: SigUSD Oracle pool operators scheduled to update update box and script with 30–60 minute downtime window. Post-update discussion planned on SigUSD bank update possibilities.

- [@kushti, msg#32865, 2025-02-04]: Weekly Ergo Developers chat scheduled for Wed, Feb 5, 1 PM UTC with focus on financial contract feedback, 6.0 protocol soft-fork, input/ordering blocks EIP, and L2 research.

- [@kushti, msg#32870, 2025-02-05]: 6.0.0-RC2 released with public testnet voting support. Voting to begin next 120-block epoch.

- [@kushti, msg#32892-32893, 2025-02-06]: Voting for 6.0 in public testnet now live; 780,000 votes recorded.

- [@kushti, msg#32937, 2025-02-09]: Sigma SDK 5.0.15 released. escript.online update requested to support new ErgoScript functions `bigInt` and `executeFromVar`.

- [@mgpai, msg#32923-32930, 2025-02-08]: Launched dedicated Discord server for LLM fine-tuning collaboration. Sharing Unsloth documentation and GRPO reinforcement learning approach for contract testing automation.

## Technical Q&A Worth Preserving

- **Q** (@TheStophe, msg#32852): What does "120 = 1" in the testnet mining node config represent?
  **A** (@cannon_q, msg#32853 / @dusek_, msg#32854): Parameter ID 120 is a votable soft-fork signal. When >90% of hashrate votes for it, block version increments (soft-fork activation). Miners can also vote on block size (ID 3), cost per transaction output (ID 8), and storage fee (ID 1). Reference: [voting.tex](https://github.com/ergoplatform/ergo/blob/8e1489314c06406b2979df27e08efa2c71b45adb/papers/yellow/voting.tex#L48)

- **Q** (@kushti, msg#32857): Is "Introduction to Programmable Cryptography" (0xPARC) recommended for devs entering cryptography?
  **A** (@c8, msg#32858-32860): Book requires solid abstract algebra background. GPT-4o recommended as alternative—allows adaptive depth, fills knowledge gaps, and personalizes learning path. Suggest prompting GPT to create tailored courses (e.g., hash functions CRC32→complex) rather than reading foundational material repeatedly if expertise varies.

- **Q** (@kushti, msg#32876): Why only 176 blocks per day in testnet despite minimum difficulty?
  **A**: Unresolved—flagged for @qx() investigation.

- **Q** (@code.for.uss, msg#32880, reply to ergfi update): Did you use dexy-sdk-ts for Dexy actions?
  **A** (@c8e4d2a, implicit): Yes, library-level actions completed for LP swap, bank freemint/arbmit, LP mint/redeem. UI integration and ErgoPay in progress.

- **Q** (@Anastasia Polozova, msg#32941): Invalid tuple declaration error in Fleet SDK register setup.
  **A** (@anon_br, msg#32950): Fleet @fleet-sdk/core version 0.1.2 is outdated. Bump all Fleet packages to 0.8.* to resolve tuple type issues.

- **Q** (@Marc the Shark, msg#32920, reply GRPO discussion): Does GRPO apply to fine-tuning or only training from scratch?
  **A** (@Marc the Shark, msg#32922): GRPO uses reinforcement learning typically for training. Suggests exploring fine-tuning application with GRPO—no technical reason it couldn't work in that mode; worth experimenting.

## Links Shared

- [kushti Twitter/X thread on sub-blocks voting](https://vxtwitter.com/chepurnoy/status/1886494697696453110): Design context for testnet voting parameter 120.
- [Ergo voting.tex specification](https://github.com/ergoplatform/ergo/blob/8e1489314c06406b2979df27e08efa2c71b45adb/papers/yellow/voting.tex#L48): Formal voting parameter documentation.
- [ergo PR #2189](https://github.com/ergoplatform/ergo/pull/2189): Extra indices fix candidate awaiting review.
- [ergo-node-interface-rust PR #23](https://github.com/ergoplatform/ergo-node-interface-rust/pull/23): Rust node interface pending merge and release.
- [Ergo 6.0.0-RC2 release](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC2): Release candidate with public testnet voting support.
- [nodeview.xyz GitHub](https://github.com/jellymlg/nodeview.xyz): Indexed node frontend using Swagger TypeScript API generation.
- [Swagger TypeScript API generator](https://github.com/acacode/swagger-typescript-api): Tool used to build nodeview.xyz.
- [Ergo Bounties GitHub](https://github.com/ErgoDevs/Ergo-Bounties/): Keystone Wallet Integration (3,000 ERG), Fleet SDK Tutorials (775 SigUSD).
- [SharkNet GitHub](https://github.com/The-Last-Byte-Bar/SharkNet): Marc the Shark's network infrastructure project.
- [0xPARC Intro to Programmable Cryptography](https://github.com/0xPARC/0xparc-intro-book/releases/tag/v1.1.1): Referenced cryptography learning resource.
- [ChainCash test commit](https://github.com/ChainCashLabs/chaincash/commit/1626e1103dbecab51fd28fcbdf89bf3dd753c5a0#diff-e3da01b2ae14583b8f66fccbda90cf3689bd096b7de1e27e7e1e4707afd3ab27R537): LLM-generated test example for Dexy/SigmaUSD/ChainCash patterns.
- [Phoenix HODLcoin contracts](https://github.com/PhoenixErgo/phoenix-hodlcoin-contracts): High-quality auditable contracts for LLM training data.
- [Phoenix Scala test suite](https://github.com/PhoenixErgo/phoenix/tree/main/src/test/scala/mockchain): Comprehensive mockchain tests.
- [Unsloth fine-tuning notebooks](https://docs.unsloth.ai/get-started/unsloth-notebooks): GRPO fine-tuning framework.
- [Unsloth GRPO/RL documentation](https://docs.unsloth.ai/basics/reasoning-grpo-rl-ppo): Reinforcement learning approach for LLM optimization.
- [LLM fine-tuning Discord server](https://discord.gg/VkUNG5Ba): Collaboration hub for contract testing automation project.
- [NeuralYogi ErgoScript contribution request](https://x.com/NeuralYogi/status/1885001596620194216): Call for community ErgoScript code samples.
- [Sigma SDK 5.0.15 Sonatype](https://central.sonatype.com/artifact/org.scorexfoundation/sigma-state_2.12/versions): New SDK release with `bigInt` and `executeFromVar` functions.

## Unresolved Questions

- **Testnet block production low**: Why only 176 blocks/day in public testnet despite minimum difficulty? (@kushti, msg#32876) — Flagged for @qx() review; no resolution recorded.

- **SigUSD UI update timeline**: When will SigUSD bank UI update resume after interruption? (@anon_real, msg#32890) — Stated "shortly" but no concrete ETA given.

- **ChainCash paper status**: What are remaining revisions needed for ChainCash documentation? (@kushti, msg#32872) — Ongoing work; no completion date specified.

- **GRPO fine-tuning feasibility**: Will GRPO successfully apply to contract test generation, or is reinforcement learning approach untested for this domain? (@mgpai et al., msg#32912-32930) — Framework identified (Unsloth), but no proof-of-concept results shared yet.

- **LLM training data formatting**: What is the exact format specification for converting Dexy/SigmaUSD/ChainCash/Phoenix contracts into LLM training datasets? (@Marc the Shark, msg#32934) — Marc committed to testing this week; results pending.