---
title: "Ergo Developer Chat — 2022-W41"
date_start: "2022-10-10"
date_end: "2022-10-16"
type: telegram_weekly
channel: developer
week: "2022-W41"
source: telegram
message_count: 50
categories: [technical, defi, wallet, ecosystem]
key_terms: [block version 3, interpreter 5.0, 5.0.0-RC3, protocol upgrade, 4.0.104, PaiNet settings, node development, monotonic creation height, EIP, "PR #1865", protocol review, grid trading, offchain bots, contract tracking, Dexy, payment identifier, iOS wallet, QR code, payment portal, local economy wallet]
---
# Ergo Developer Chat Summary — 2022-W41

## Key Topics Discussed

- **Block Version 3 & Interpreter 5.0**: kushti announced that block version 3 activates interpreter 5.0. The AppKit needs to recognize block version 3 in the header to function correctly.

- **Node & Protocol Development (4.0.x and 5.0.x)**: Active release cycle with 4.0.104 released, 5.0.0-RC3 published with PaiNet settings, and latest 4.0.x codebase merged. Multiple EIPs under review (monotonic creation height, EIP-37).

- **Dexy Protocol Development**: Payout path implementation details discussed; decentralized grid trading contract modified with node tracking rules; offchain trading bots planned as next phase.

- **Payment Portal Integration**: Discussion around whether payment identifiers (e.g., "Sony") are stored on-chain or retained locally in payment portal implementations.

- **Local Economy Wallet Concept**: Community member koukarin proposed a supplemental design to LETS that applies local fees when ERG or SigmaUSD transfers occur between cities, incentivizing local trade. kushti endorsed the idea as combinable with LETS, ChainCash, and L2 implementations.

- **TPS and Layer 1 Scalability**: Question raised about Ergo's transaction throughput (TPS) compared to Ethereum and traditional systems; Luivatra clarified that high TPS is properly a layer 2 concern, not a layer 1 design goal.

## Important Decisions or Announcements

- [@kushti khushi, msg#7641, 2022-10-12]: 5.0.0-RC3 released with PaiNet settings and latest 4.0.x codebase merged. https://github.com/ergoplatform/ergo/releases/tag/5.0.0-RC3

- [@kushti khushi, msg#7654, 2022-10-12]: 4.0.104 released; multiple EIP reviews in progress (monotonic creation height EIP, EIP-37); Dexy payout path implementation details finalized.

- [@kushti khushi, msg#7733, 2022-10-16]: Endorsed koukarin's Local Economy Wallet concept as viable and compatible with LETS, ChainCash, and potentially L2 solutions.

## Technical Q&A Worth Preserving

- **Q** (@Lee # TabbyPOS, msg#7632): Is the Payment Identifier "Sony" stored on-chain or retained locally for reference?
  **A** (@HQΣr, msg#7633): "Ur reference I think" — stored locally, not on-chain. (@MrStahlfelge later clarified he was unfamiliar with that specific portal.)

- **Q** (@Lee # TabbyPOS, msg#7643): Should the payment identifier be stored in R4 or R5 (registers)?
  **A** (@MrStahlfelge): Implied context-dependent answer, but specifics not fully elaborated in chat.

- **Q** (@白白 🍑, msg#7699-7707): How many TPS does Ergo achieve, and can it compete with Ethereum's claimed throughput?
  **A** (@Luivatra, msg#7704): "high tps is the domain of L2, doesnt make sense to cause bloat on L1" — emphasizing that layer 1 design is not meant for throughput maximization.

- **Q** (@koukarin - Σ, msg#7725): Can a Local Economy Wallet (applying local fees between cities) be implemented in ErgoScript?
  **A** (@kushti khushi, msg#7733): "Very interesting idea. Can be combined with LETS, chain cash and other designs I suppose. Also, can be done on L2 I guess, to significantly reduce mining fees"

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/1867](https://github.com/ergoplatform/ergo/pull/1867): PR with comments from Aberg on development (2022-10-11)

- [https://github.com/ergoplatform/ergo/releases/tag/5.0.0-RC3](https://github.com/ergoplatform/ergo/releases/tag/5.0.0-RC3): Release notes for 5.0.0-RC3 with PaiNet settings (2022-10-12)

- [https://github.com/ergoplatform/ergo/pull/1841](https://github.com/ergoplatform/ergo/pull/1841): Merged PR for protocol development (2022-10-12)

- [https://github.com/ergoplatform/ergo/pull/1865](https://github.com/ergoplatform/ergo/pull/1865): Monotonic creation height EIP implementation PR (2022-10-12)

- [https://github.com/ergoplatform/eips/pull/80#pullrequestreview-1138072377](https://github.com/ergoplatform/eips/pull/80#pullrequestreview-1138072377): Review of monotonic creation height EIP (2022-10-12)

- [https://thierrym1212.github.io/paymentportal/about.html](https://thierrym1212.github.io/paymentportal/about.html): Payment portal referenced in discussion (2022-10-12)

- [https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/](https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/): Ergo blog post on storage rent calculation methodology (2022-10-14)

- [https://ergoplatform.org/en/blog/2021_03_26_eth_vs_erg/](https://ergoplatform.org/en/blog/2021_03_26_eth_vs_erg/): Ergo blog comparison of Ergo vs Ethereum design philosophy (2022-10-14)

- [https://gql.mempoolnode.live/](https://gql.mempoolnode.live/): GraphQL endpoint for mempool node queries (2022-10-15)

- [https://github.com/koukarin/Local-Economy-Wallet/blob/main/README.md](https://github.com/koukarin/Local-Economy-Wallet/blob/main/README.md): Detailed proposal for Local Economy Wallet concept (2022-10-16)

## Unresolved Questions

- **AppKit compatibility with block version 3**: While Luivatra mentioned AppKit "just needs to see block version 3 in the header," whether all AppKit-dependent tools had been tested against RC3 at time of chat is unclear.

- **EIP-37 scope**: Mentioned as under discussion by kushti, but specific details or decision status not elaborated in this chat.

- **Payment portal standardization**: Multiple payment portal implementations appear to exist (e.g., hailypdll on Discord, thierrym1212's version); unclear whether there is a canonical or recommended implementation.

- **L2 implementation timeline for Local Economy Wallet**: kushti suggested L2 as an option to reduce fees, but no timeline or specific L2 roadmap discussed.