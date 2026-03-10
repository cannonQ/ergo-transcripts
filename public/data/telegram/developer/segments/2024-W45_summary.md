---
title: "Ergo Developer Chat — 2024-W45"
date_start: "2024-11-04"
date_end: "2024-11-10"
type: telegram_weekly
channel: developer
week: "2024-W45"
source: telegram
message_count: 94
categories: [technical, defi, wallet, mining, ecosystem, community]
key_terms: [Sigma 6.0, UnsignedBigInt, bitwise operations, sigmastate-interpreter, protocol upgrade, zmqpub, ErgoSocket, magic bytes, message protocol, event publishing, SigmaUSD, oracle pool, bank update, mainnet deployment, pool 1.0, reference client 5.1.0, indexer, rollback, EIP-1 scans, network issues]
---
# Ergo Developer Chat Summary — 2024-W45

## Key Topics Discussed

- **Sigma 6.0 Protocol Development**: kushti completing final PRs for numeric methods (bitwise operations, shifts, big-endian byte conversions) in UnsignedBigInt, with all code targeted for ready-to-review status by end of week. EIP proposal and miner discussion planned for next week.

- **Ergo Reference Client 5.1.0**: Under review at https://github.com/ergoplatform/ergo/pull/2115; issues identified with rollbacks in indexer requiring fixes per PR #2193.

- **Sub-blocks and L2 Constructions**: kushti investigating variety of post-subblock options including sidechains vs layer 2 solutions, with research notes expected soon.

- **Rosen Bridge Network Testing**: Test results analyzed; direct messaging achieved >98% delivery with ~1s latency across US/Europe/Asia; pubsub ~0.5s latency with ~85% delivery. Traffic observed ~25MB/s up, 15MB/s down.

- **SigmaUSD Oracle Pool Update**: Proposal to migrate SigmaUSD to Oracle Pool v1.0 (current pool described as "disaster") with plan for v2.0 afterwards requiring bank modifications for buyback contract payment. Testnet deployment and co-voting assistance needed.

- **Satergo Development**: Mac aarch64 (ARM64) Ledger support added.

- **Nautilus Wallet**: Extensive dApp Connector feature documentation in progress; 0-conf backend research/design underway for mempool handling; Ledger integration undergoing functional review with build CI updates.

- **Keystone Hardware Wallet**: Transaction detail display and signing flow implementation active; sigma-rust compilation for non-std environments (Keystone target) planned by dusek; silver price oracle support being implemented.

- **Paideia DAO**: Last deployment bits pending across timezones; expected completion by end of week.

- **Celaut Project**: Demo service development complete, video planned for current week.

- **Bene Fundraising Platform**: Bug fixes ongoing for token add/withdrawal functionality.

- **Fleet SDK Token Minting**: Non-standard token minting (minting same token into multiple boxes in single transaction) requires manual transaction construction outside EIP-4 safeguards; tokenId must be taken from first input's boxId.

## Important Decisions or Announcements

- [@kushti, msg#31127, 2024-11-05]: Finishing last big Sigma 6.0 PR #997; all code targeted ready by end of week, then focus shifts to sub-blocks.

- [@kushti, msg#31129, 2024-11-05]: Sigmastate 5.0.15 release planned with scrypto update and executeFromVar.

- [@kushti, msg#31152, 2024-11-06]: SigmaUSD pool update will target v1.0 first (current pool is "disaster"), with v2.0 considered as second update requiring bank modifications.

- [@Marc the Shark, msg#31132, 2024-11-06]: Sigmanauts Mining Pool 11.11 Swap going live; planning weekly token distribution for bonus tokens; Miner Rights Protocol submitted to ErgoHack IX with testnet validation complete.

- [@kushti, msg#31139, 2024-11-06]: Call for participants interested in launching sigmachains (Ergo sidechains, merge-mined or not).

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#31120): Getting `IllegalStateException: Incorrect magic [65, 0, 0, 3]` error from ergo-node-zmqpub after running for a while — should this be handled via reconnection or indicates a broken node?
  **A** (@Aberg, msg#31122): Not supposed to happen unless node is broken, which is probably not the case.

- **Q** (@Michael, msg#31147): Moving SigmaUSD to Oracle v2.0, can provide infrastructure and testing support?
  **A** (@kushti, msg#31152): Current update targets v1.0 first; v2.0 requires bank modifications for buyback contract payment, considered as second update. Bounty available for testnet deployment and co-voting help.

- **Q** (@Michael, msg#31160): What type of testnet node required for SigmaUSD oracle pool update — normal or indexed?
  **A** (@kushti, msg#31175): Normal node sufficient; oracle-core uses EIP-1 scans only.

- **Q** (@a787978, msg#31177): How to pull SigmaUSD info from smart contract?
  **A** (@Michael, msg#31180, #31181, #31182): Query unspent boxes by token ID via API endpoint; price in R4 register, SigmaRSV in R5. Provided contract address for SigmaUSD bank.

- **Q** (@a787978, msg#31194): Is the smart contract essentially an NFT?
  **A** (@Flying Pig, msg#31195, @kushti msg#31211): Contract is an address; Ergo uses boxes (unspent transaction outputs with up to 10 registers) not standalone contract instances. Singleton NFT tokens mark contract instances (e.g., SigmaUSD bank). Ergo oriented toward programmable money, not replicated calculators.

- **Q** (@b_e_e_e_e_e, msg#31198): Attempting to mint non-EIP-4 token into multiple boxes in single transaction, getting "NonStandardizedMinting" error from Fleet SDK — way to disable safeguard?
  **A** (@arobsn, msg#31202, #31203): Non-standard minting requires manual transaction construction; tokenId from first input's boxId; use OutputBuilder#addTokens for regular token distribution; optional metadata via OutputBuilder#setAdditionalRegisters. (Note: User resolved own issue — was using wrong input box.)

- **Q** (@b_e_e_e_e_e, msg#31210): Any updates on PR for https://github.com/nautls/ergo-graphql/issues/68 unaddressed since 2022?
  **A** (@mgpai, msg#31219): Suggested asking @arobsn (no detailed response provided).

- **Q** (@b_e_e_e_e_e, msg#31220): Tooling to debug "Transaction signing error" when have pretty-printed expr and env values?
  **A** (@mgpai, msg#31221): Response incomplete ("send" — likely truncated).

## Links Shared

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/997]: Sigma 6.0 numeric methods and UnsignedBigInt PR (tests in progress)
- [https://github.com/ergoplatform/ergo/pull/2115]: Ergo reference client 5.1.0 under review
- [https://github.com/ergoplatform/ergo/pull/2193]: Rollback and indexer issue fixes
- [https://github.com/SavonarolaLabs/memepool]: Mempool visualization tool with live display
- [https://github.com/fleet-sdk/fleet/blob/master/packages/core/src/builder/transactionBuilder.spec.ts#L1069-L1113]: Fleet SDK non-standard token minting example
- [https://github.com/nautls/ergo-graphql/issues/68]: Pending GraphQL feature request (unaddressed since 2022)
- [https://x.com/avslesarenko/status/1810362253159374861]: Query about EIP-47 status

## Unresolved Questions

- Sub-block implementation approach (multiple PRs exist, path to be chosen post-Ergoversary)
- Layer 2 construction designs and comparisons with sidechain approach (research notes pending)
- Oracle Pool v2.0 deployment timeline and exact bank modifications required
- Nautilus 0-conf backend design details (marked "soon™")
- iOS development guide/setup updates for Nautilus wallet
- DDoS spam attack mitigation strategy ongoing research
- Mesh network setup for Valencia flood relief internet access (HQΣr seeking assistance)