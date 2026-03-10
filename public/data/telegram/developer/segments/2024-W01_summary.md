---
title: "Ergo Developer Chat — 2024-W01"
date_start: "2024-01-01"
date_end: "2024-01-07"
type: telegram_weekly
channel: developer
week: "2024-W01"
source: telegram
message_count: 74
categories: [technical, ecosystem, wallet]
key_terms: [sub-blocks, weak confirmations, transaction speed, block time, scaling, sub-block fees, incentives, miners, sidechains, native tokens, dApp scaling, L2, p2p transactions, exchange confirmations, Rosen, mempool size, rebroadcast, transaction propagation, network efficiency, casino games]
---
# Ergo Developer Chat Summary — 2024-W01

## Key Topics Discussed

- **Sub-blocks and scaling**: Discussion of sub-block implementation as a dApp-layer scaling solution vs. mainchain transaction speed improvement. Consensus that sub-blocks improve dApp user experience and network throughput but do not reduce p2p transaction confirmation time without exchange/Rosen policy changes.

- **Mempool configuration**: Default mempool size is 1000 transactions; can be increased to 10k with rebroadcast setting changes, allowing nodes to propagate stuck transactions to peers that haven't yet accepted them.

- **Rosen settlement and weak confirmations**: Questions about whether sub-blocks or weak confirmations could speed Rosen Bridge settlement. Clarified that Rosen requires ~80 minutes of security guarantees regardless of block interval; faster blocks increase reorg depth.

- **Block confirmation requirements**: Exchange and bridge deposit confirmation times are artificial security limits (e.g., 20 confirmations), not inherent to block speed. Lowering confirmation requirements would be needed to reduce settlement time; sub-blocks alone cannot override these policies.

## Important Decisions or Announcements

- [@kushti khushi, msg#23590, 2024-01-03T08:20]: Will return to chat in a few hours (delayed response to sub-block questions).
- [@Michael, msg#23611, 2024-01-03T09:40]: "No incentives to generate and propagate sub-blocks are planned for the Ergo core protocols at the moment. At the same time, incentives can be provided on the sub-block based merge-mined sidechains, or via application-specific agreements (where applications may pay to miners for faster confirmations)."

## Technical Q&A Worth Preserving

- **Q** (@Hasnain, msg#23582): Will sub-blocks reduce p2p transaction time? If exchange confirmation requires 10–15 minutes, is sub-block impact only on dApps?

  **A** (@cafebedouin.org, msg#23626): Sub-blocks are a scaling solution for dApp users, not the mainchain itself. Exchanges impose artificial confirmation limits for security; sub-blocks improve UX and network utilization but won't lower these thresholds.

- **Q** (@Hasnain, msg#23622): Will 20 confirmations take less time after sub-block implementation?

  **A** (@Glasgow｜WON'T DM, msg#23655): 20 confirmations will take the same time. Sub-blocks are smaller blocks within the confirmation window with less difficulty—analogous to super-blocks used in NIPoPoWs. Exchanges and Rosen have manual limits; they would increase required confirmations if block time decreased.

- **Q** (@Hasnain, msg#23657): Can Ergo achieve ~10–15 second confirmation times without a hard fork?

  **A** (@Glasgow｜WON'T DM, msg#23661): Would require a hard fork to change the 2-minute block interval. [Rationale documented](https://docs.ergoplatform.com/mining/difficulty/#the-rationale-behind-a-2-minute-block-interval). Sub-blocks are the preferred solution for use cases where weak confirmations are acceptable.

- **Q** (@Michael, msg#23600–#23604): Should miners receive higher fees (0.01 ERG vs 0.001 ERG) as incentive to generate sub-blocks?

  **A** (@Michael, msg#23611): No core protocol incentives are planned. Incentives can be provided via merge-mined sidechains or application-specific fee agreements where dApps pay miners directly for faster confirmations.

- **Q** (@Hasnain, msg#23679): Could Rosen use a mixed approach—50% weak blocks, 50% strong blocks—to reduce settlement time?

  **A** (@Pulsarz, msg#23680–#23687): Rosen is not a good example; time is important, not block count. Faster blocks increase reorg depth and risk; Rosen wants ~80 minutes of security guarantees regardless of block structure.

- **Q** (@Luivatra, msg#23698–#23699): What benefit do sub-blocks provide to dApps already using mempool transaction chaining?

  **A** (@Luivatra, msg#23698–#23699): Sub-blocks improve transaction propagation and network load distribution. Wallets should offer unconfirmed balance display to resolve UX issues; sub-blocks may help reduce ghost transactions in the mempool.

## Unresolved Questions

- Whether dApp redeployment or contract changes are needed to leverage sub-blocks (e.g., separate liquidity pools for sub-block-aware DEXes).
- How wallets and dApps will signal or enforce weak confirmation thresholds in practice.
- Whether Spectrum or other dApps plan to build on plasma library for application-specific scaling.
- Exact mechanics of how sub-blocks interact with existing Spectrum or Trade House order book structures.

---

**Note**: This was a low-activity week with minimal announcements. The conversation centered on clarifying sub-block capabilities vs. user expectations around mainchain transaction speed.