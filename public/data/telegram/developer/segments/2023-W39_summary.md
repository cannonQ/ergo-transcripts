# Ergo Developer Chat — 2023-W39 Summary

## Key Topics Discussed

- **Transaction Processing & Block Costs**
  [@kushti, multiple msgs 2023-09-25]: Clarified that pure TPS is misleading for smart contract chains due to variable transaction complexity. Current mainnet max block cost slightly exceeds 1MB; 10-12M recommended for ~50% throughput increase. Cost is ErgoTree complexity-based, not just size.

- **Alternative TPS Metrics**
  [@Luivatra, msg#19027; @Flying Pig, msg#19033]: Proposed BPM (Blocks Per Minute) as more relevant metric than raw TPS, as users care about confirmation time for sequential transactions, not absolute throughput.

- **Block Cost Governance**
  [@kushti, msg#19065]: Referenced voting proposal to increase maximum computational cost for blocks; parameters accessible via `/info` output at `parameters/maxBlockCost`.

- **DEX Price Discovery Without Spectrum**
  [@Luivatra, msg#19306]: Explained how to query pool prices directly from blockchain when Spectrum API is down: use Explorer API `boxes/unspent/byTokenId/{pool_id}` and divide token amounts by ERG value.

- **Fleet SDK Development**
  [@Capt. Nemo, msg#19114]: Nautilus v0.9.0 released with improved Ledger wallet signing flow. Fleet SDK's ergographql-client package nearing completion; removed @urql/core dependency in favor of custom fetch-based GraphQL client.

- **Accumulator Research**
  [@Unknown, msg#19270-19271]: Community discussing accumulators as mechanism to reduce full UTXO set requirements while maintaining security, similar to NIPoPoWs. Referenced Boneh-Bunz-Fisch paper (https://eprint.iacr.org/2018/1188).

## Important Decisions or Announcements

- [@Capt. Nemo, msg#19114, 2023-09-27]: **Nautilus v0.9.0 released** with improved Ledger wallet signing flow; Fleet SDK ergographql-client package mostly complete with unit tests pending.

- [@Austen Milbarge, msg#19119, 2023-09-27]: **GreasyCEX partnership with Cyberverse announced** for character NFT integration; Terahertz adding unique audio files to Character NFTs. Sponsors: Terahertz, Lilium, Sigmanauts, Comet, ErgCube, Spectrum, Grand Gambit.

- [@Glasgow, msg#19036, 2023-09-25]: **Ergo community survey launched** to gather feedback on ecosystem direction.

## Technical Q&A Worth Preserving

- **Q** (@kushti, msg#19056-19057): When a high-cost transaction reaches mining mempool but isn't included in blocks, what happens?
  **A** (@kushti, msg#19057): Block assembly removes it due to security buffer (~50k cost margin). If mining solo, vote to increase block cost limit. Max block cost on testnet ~1M.

- **Q** (@Luivatra, msg#19079, 2023-09-26): Is anyone using the ETH/USD oracle? Considering turning it off.
  (No response recorded; flagged as pending feedback)

- **Q** (@giuseppe, msg#19107, 2023-09-27): Erdoge swap stuck on Spectrum (can buy but not sell), tried mobile & Nautilus with slippage adjustments.
  **A** (@HQΣr, msg#19108): Directed to Spectrum Labs community Telegram for support.

- **Q** (@HQΣr, msg#19291-19304, 2023-09-30): How to get token prices when Spectrum DEX and APIs are down?
  **A** (@Luivatra, msg#19306): Query Explorer API directly: `boxes/unspent/byTokenId/{pool_id}`, then divide token value by ERG value to derive price from on-chain pool state.

- **Q** (@scalahub, msg#19082-19084, 2023-09-26): Is Exodus wallet safe/reliable for non-Ergo cryptos?
  **A** (@HQΣr, msg#19085): Exodus doesn't list Ergo, so devs wouldn't have specific knowledge; suggested clarifying if listing requires payment.

## Links Shared

- [GitHub: ErgoMiningThread.scala](https://github.com/ergoplatform/ergo/blob/a0577672637377fb0c333b56a7a5c5c45752a8a4/src/main/scala/org/ergoplatform/mining/ErgoMiningThread.scala#L12): Mining thread implementation reference.

- [Ergo Forum: Voting Proposal - Increasing Maximum Computational Cost](https://www.ergoforum.org/t/voting-proposal-increasing-maximum-computational-cost-for-block-again/722): Governance discussion on block cost limits.

- [Boneh-Bunz-Fisch Accumulators Paper](https://eprint.iacr.org/2018/1188): Academic reference for accumulator cryptography research.

- [Fleet SDK Documentation](https://fleet-sdk.github.io/docs/): Getting started guide for SDK development.

- [Ergo Auctions: Artwork](https://ergoauctions.org/artwork/40e464aa652ca4530c701fd822b7ff226f3ccbe609710e59d4cccacea3ace428): Referenced artwork listing.

- [GreasyCEX Twitter](https://vxtwitter.com/GreasyCex/status/1708215430945649021?s=20): GreasyCEX announcements & updates.

- [Sigmanauts Twitter](https://x.com/sigmanauts/status/1707450592388325700?s=46&t=9KXDXO0l5txB9npLRTxdmQ): Community discussion link.

- [Exodus Wallet](https://www.exodus.com/): Referenced multi-chain wallet platform.

## Unresolved Questions

- **ETH/USD Oracle Deprecation**: [@Luivatra, msg#19079, 2023-09-26] — Proposed turning off ETH/USD oracle; no community response or decision recorded.

- **Spectrum DEX Downtime Root Cause**: [@HQΣr, msg#19291-19302, 2023-09-30] — DEX and APIs experienced outage; technical cause not discussed or resolved in chat.

- **Block Cost Limit Consensus**: While 10-12M is "recommended" (msg#19070), no formal consensus on exact target or timeline for implementation vote.

---

**Week Assessment**: Low-to-moderate activity week focused on infrastructure updates, price discovery mechanisms, and long-term optimization discussions. Most conversations technical and substantive; limited actionable decisions made at community level.