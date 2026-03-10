---
title: "Ergo General Chat — 2022-W08"
date_start: "2022-02-21"
date_end: "2022-02-27"
type: telegram_weekly
channel: general
week: "2022-W08"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2022-W08

## Key Topics Discussed

- **Mixer functionality & ErgoMixer performance**: Users reported issues with ErgoMixer transaction settlement and withdrawal delays. The mixer uses Sigma protocols to create anonymous transaction pools. ErgoUtils hops utility had issues with stuck deposits; anon_real can issue refunds via proxy contracts.

- **Nautilus wallet development**: Transaction history feature is on the Todo list. Connection issues with Yoroi led users to switch to Nautilus for DEX operations. Ledger integration awaited final bug fix for dApp compatibility.

- **SigmaUSD vs SigmaRSV investment thesis**: Extended debate on SigRSV as long-term hold. Consensus: not suitable for DCA long-term due to race conditions with SigUSD redemptions, better for short-term scalping. SigRSV performs well during choppy/sideways markets but loses value during sustained downtrends as SigUSD holders redeem.

- **Soft fork EIP-27 adoption**: ~93% acceptance rate as of 2022-02-23. Testing on testnet ongoing; activation timing longer than initially expected. Community sentiment positive despite bear market conditions.

- **Dexy Protocol refinements**: kushti confirmed ongoing design fixes; documentation will follow. Dexy intended for exchange-rate-tied stablecoin use cases; comparison made to Djed and alternative stablecoin approaches.

- **Babel fees (custom token transaction fees)**: ErgoMixer already implemented custom fee tokens swapped to ERG via contract before IOHK Babel paper. Blog post documented Ergo's prior art on this concept.

- **Node synchronization issues**: Users reported empty transactions in mempool on dual-location nodes during specific consensus-critical `chain{}` configuration changes (e.g., `minerRewardDelay`). Configuration changes require full network consensus; pools handle this via pre-funding payouts rather than config modification.

- **Speed improvements discussion (future work)**: Draft proposals exist for sub-blocks, sidechains, and layer 2 solutions. No consensus path chosen yet. Planned testnet for parameter tweaking (block time, difficulty) pending volunteer leadership. Block height and timestamp dependencies in contracts complicate faster block speeds.

- **Trade House (order book DEX) vs AMM**: Order books provide full transparency of depth, liquidity, and slippage control vs. impermanent loss risk in AMM pools. Trade House allows partial fills and peer-to-peer matching with single/multiple upgrade keys.

- **Sidechaining and merge mining**: kushti discussing BIP-301-style pegging for Ergo sidechains. Construction details being finalized; trustless relay mechanisms via smart contracts. Merge mining allows mainchain and sidechain miners to earn both chains' tokens simultaneously.

- **ErgoHack III results**: Announced during AMA session; winners featured privacy/security dApp solutions. Next hackathon planned May/June 2022.

## Important Decisions or Announcements

- [@kushti, msg#256889-890, 2022-02-24]: Design fixes underway for Dexy Protocol; documentation to follow.

- [@glasgowm, msg#257181, 2022-02-27]: Ledger integration with dApps awaiting final bug fix; already integrated with several wallets.

- [@glasgowm, msg#257187, 2022-02-27]: EIP-27 testing on testnet; 90%+ support; activation timing uncertain but progressing.

- [@Unknown, msg#257216-217, 2022-02-27]: ErgoPad staking now live—first staking option in Ergo ecosystem. Staking provides access to tiered allocations for future IDOs plus token rewards.

- [@Glasgow, msg#257093-094, 2022-02-26]: ErgoDesk Digest published; highlights ErgoMixer as first permissionless, non-custodial mixer using Sigma protocols.

- [@Armeanio, msg#256730, 2022-02-23]: Reference to Dan Friedman—suggested as expert for explaining Sigma protocols to critics.

- [@kushti, msg#256921, 2022-02-25]: Confirmed ErgoHack IV timeline as May or June 2022.

## Technical Q&A Worth Preserving

- **Q** (@Velvia, msg#256509-510): How long for ERG to clear mixer? Used 6 hops; confirmation stuck in explorer.
  **A** (@Unknown, msg#256549-554 & @glasgowm, msg#256573-582): Mixer sends ERG to multiple addresses. If using ErgoUtils hops, withdrawal may be stuck in proxy contract. Contact anon_real for refund; latest ErgoMixer has built-in refund option.

- **Q** (@Unknown, msg#256584): Does Ergo support Babel fees?
  **A** (@Chris Ray, msg#256585): Not natively; miners rewarded via TX fees + ERG emissions. (@kushti, msg#256591): ErgoMixer already uses custom fee tokens swapped to ERG via contract before IOHK Babel paper.

- **Q** (@Unknown, msg#256679-681): Adding to ERG/SigmaUSD liquidity pool on Spectrum fails silently—no error message.
  **A** (@Gazza, msg#256688): Yoroi has connection issues. Switch to Nautilus wallet. (@CW, msg#256624-625): Price may have moved outside slippage range; swap remains on-chain until execution conditions met.

- **Q** (@André, msg#256897): Full node sync stuck with empty transactions in mempool on two co-located nodes.
  **A** (@kushti, msg#256928-933): `chain{}` consensus-critical settings (e.g., `minerRewardDelay`) break sync if mismatched. Pools handle maturation via pre-funding, not config changes (Bitcoin uses 100-block lock). Herominers pays out after 72 blocks from own reserves.

- **Q** (@jino gami, msg#256048-058): What gives Ergo edge over other PoW? Will it shift to PoS?
  **A** (@Unknown, msg#257050-051): Ergo scales without PoS shift via sidechains/layer 2. (@glasgowm, msg#257056): Core Dev (kushti) deliberately chose PoW after working on early PoS and Cardano. Oracle Pools ≠ PoS mechanics.

- **Q** (@HQΣr, msg#256777-801 & @Kevin, msg#256776): Status of core developers in Russia/Ukraine during conflict?
  **A** (@kushti, msg#256805): Confirmed safe; thanked community. (@HQΣr, msg#257143): Personal aid effort—receiving 560 Ukrainian children in province; coordinating food assistance.

- **Q** (@Unknown, msg#256626): Can default 0.0011 ERG/TX fee be circumvented via custom token fees?
  **A** (implicit from context, msg#256586-591): Yes—ErgoMixer already implements this. Tokens swap to ERG at contract level, enabling fee abstraction.

- **Q** (@Francis, msg#257224-225): Nautilus failing to build transaction for ErgoPad staking.
  **A** (no resolution in transcript; flagged as open support issue).

## Links Shared

- [https://ergoplatform.org/en/blog/2022-02-22-defi-on-ergo-custom-token-fees/]: DeFi custom token fees concept (pre-dates Babel paper).
- [https://ergonaut.space/en/roadmap]: Ergo roadmap (graphic update in progress).
- [https://ergo.watch/metrics]: On-chain analytics dashboard.
- [https://ergo.watch/metrics/contracts]: Contract deployment tracker (2,072 contracts as of 2022-02-25).
- [https://sigmaverse.io/]: Ergo projects directory.
- [https://docs.ergoplatform.com/dev/protocol/scaling/]: Scaling solutions documentation.
- [https://thecryptodrip.com/ergo-deep-dive/]: Community deep dive article.
- [https://docs.ergoplatform.com/contribute/]: Contribution guidelines.
- [https://ergopad.io/staking]: ErgoPad staking interface (went live 2022-02-27).
- [https://ergonaut.space/en/Guides/yield]: Yield/lending options guide (Gate.io mentioned).
- [https://youtu.be/cdTcRCr-4_o]: AMA with Matt Kairon Labs, Dan Friedman, Joseph Armeanio (2022-02-25).
- [https://youtu.be/xo7NvKsxYR4]: Sunday dev update (2022-02-27).
- [https://youtu.be/R-6jdHSMysc]: Reuben Firo privacy tech overview (referenced).
- [https://www.youtube.com/watch?v=pc3GEqMik48]: Technical video (Glasgow share, 2022-02-22).
- [https://ergoraffle.com/raffle/show/1906eef5f695adb07f928b2898cc8691c5d52b50d3f1493b897cf23cf32edec8]: Ergo Film Part 2 fundraising raffle (80–90 ERG production costs goal).
- [https://ergopad.medium.com/introducingpaideia-74a7fc03bf42]: Paideia project summary.
- [https://docs.google.com/document/d/1G8iN_9sFJ3k5UuSAIbRHdkUIhqVGhpmeA_XQXVyZW94/]: Paideia whitepaper.
- [https://docs.google.com/spreadsheets/d/1ReMuHvrn-ZNIAkk7F0fezmWEvjWeYzUg8PNfXyEwNm4/]: Paideia tokenomics.
- [https://stack.money/?sortField=dev_rank_percentile&page=2]: Dev-rank percentile blockchain comparison (Ergo ranks 90th fundamentals).
- [https://docs.ergodex.io/docs/user-guides/nautilus-quick-start]: Nautilus wallet quickstart.
- [https://ergoplatform.org/en/blog/2021-12-21-ios-ergo-wallet-how-to-guide/]: iOS Ergo Wallet TestFlight setup.

## Unresolved Questions

- **Soft fork EIP-27 exact activation date**: Testing underway; 90%+ support; timing longer than expected—no fixed date announced.

- **Dexy Protocol v2 design details**: kushti flagged ongoing fixes and promised documentation—specifics not yet public.

- **Speed improvements path forward**: Multiple draft proposals (sub-blocks, sidechains, layer 2) exist but no consensus chosen. Testnet for block-speed experiments needs volunteer leadership to launch.

- **Sidechain construction publication**: kushti indicated sidechain designs and BIP-301-style pegging under finalization; forum publication promised but delayed.

- **ErgoHack IV venue & format**: Announced May/June 2022 but no location or theme confirmed.

- **Ledger dApp integration status**: Final bug fix pending; exact timeline not specified.

- **Node memory/sync tuning for consensus configs**: André's specific setup unresolved in transcript—routed to Discord development channel.

- **Future of Oracle Pool v2 infrastructure**: Dan Friedman indicated intent to invest in building out native Ergo oracles beyond two current pools; funding mechanism and timeline TBD.

- **Palmyra (ZenGate) ecosystem scope**: Dan outlined Chainlink partnership and on-chain warehouse receipts; full roadmap not detailed.

---

**Data Quality Notes:**
- Week saw moderate activity (538 messages) across 77 participants.
- Heavy price speculation and off-topic chatter excluded per guidelines.
- Ukraine conflict support discussions preserved for historical/community context.
- Several technical issues (mixer, wallet, node sync) escalated to support channels but resolutions not captured in this chat.