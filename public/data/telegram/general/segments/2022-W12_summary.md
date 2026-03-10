---
title: "Ergo General Chat — 2022-W12"
date_start: "2022-03-21"
date_end: "2022-03-27"
type: telegram_weekly
channel: general
week: "2022-W12"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W12 (2022-03-21 to 2022-03-27)

## Key Topics Discussed

- **Wallet Migration from Yoroi to Nautilus**: Throughout the week, numerous users reported issues with Yoroi wallet (slow loading, failed transactions, incorrect balances). Community members consistently recommended migrating to Nautilus wallet by restoring the same seed phrase, eliminating the need to transfer funds. Yoroi has been problematic for months, particularly for wallets with many transactions.

- **Mi Goreng Airdrop Impact on Network**: A large Mi Goreng token airdrop (~15k outputs per transaction) temporarily clogged the mempool and caused KuCoin withdrawal delays. The drop tx was eventually included in block #711908 (5983kB) with help from WoolyPooly mining pool. Kushti noted that newer node versions (≥4.0.23) filter out such large transactions, but some mining nodes were still running older versions.

- **DeFi Chat on Stablecoins and Lending**: Kushti initiated discussion on expanding Ergo's stablecoin offerings beyond SigmaUSD. Proposals include Yield Protocol-based stables, Dexy USD, spender-signed currency, and LETS (local exchange trading systems). The team is working on protecting Dexy from whale attacks before launching. ErgoLend development is progressing with front-end testing underway and Kenyan pilot programs being organized for microfinance loans.

- **SuSy Bridge Development**: Kushti announced plans to meet with the SuSy bridge team. The bridge will initially bring centralized stablecoins (USDT, USDC) to Ergo, which the team considers crucial for algo stablecoins, ErgoDex, ErgoPad, and broader ecosystem growth. The bridge is operating on testnet.

- **Rosen Bridge Progress**: Separate from SuSy, the Rosen Bridge (Ergo-centric design by MHS) is progressing with Cardano watcher nearly complete, implementation started, and tokenomics nearly finalized. This bridge uses a novel architecture detailed in the GitHub repository.

- **EIP-27 Activation Timeline**: The soft fork is planned for block height 724000 (approximately one month from discussion), pending final testnet validation and miner voting. This will reduce block rewards from ~67 ERG to ~51 ERG per block, putting a portion into re-emission contract extending rewards until 2045.

- **Node Stability Issues**: Ivan from Flypool reported nodes getting stuck with different highest block hash/id, requiring full resync. Kushti requested logs and chain database for debugging. Issue #1657 on GitHub is tracking fork header ordering problems.

- **Mining Pool Fee Discussion**: Discussion about transaction fee markets and spam protection. Node version 4.0.44+ includes limits on downloading transactions from single peers. Mempool filters allow raising minimum propagation fee rates to prevent spam.

- **Output Cost Voting Proposal**: Kushti suggested miners vote on increasing transaction output cost from 100 units to 1000-1500 units per output to prevent future large-transaction spam issues. Each input currently adds 2000 units, outputs are heavily undervalued.

## Important Decisions or Announcements

- [@kushti, msg#262693, 2022-03-22]: Next node version will implement protection for exchanges from spam via GitHub issue #1664.

- [@kushti, msg#262696, 2022-03-22]: Proposed miners vote on increasing tx output cost to 1000-1500 units per output to solve spam problems across all node versions.

- [@Armeanio, msg#263548, 2022-03-23]: Finished Rosen Bridge presentation, video coming soon.

- [@kushti, msg#263567, 2022-03-23]: Announced need for multiple stablecoin designs: Yield protocol-based, Dexy USD, spender-signed currency, and LETS.

- [@kushti, msg#263612, 2022-03-23]: Dexy USD team is discussing protection from whale attacks before proceeding with EIP, then frontend/backend development.

- [@Armeanio, msg#264163, 2022-03-25]: Weekly AMA format changed - daylight savings adjustment affected scheduling.

- [@Glasgow, msg#264231, 2022-03-25]: Daniel working to bring company featured in linked video to Ergo ecosystem.

## Technical Q&A Worth Preserving

- **Q** (@Richi, msg#262694): Is it possible to put limitations at protocol level to avoid ultra large transactions?
  **A** (@kushti, msg#262696): Node-level limits are more flexible. Can prevent 5K+ output txs that create load during bootstrapping, increase orphan rates, and cause light client problems. Suggests miners vote on increasing tx output cost - outputs currently heavily undervalued at 100 units vs 2000 per input.

- **Q** (@user, msg#263120): Is it possible to send ERG from Yoroi to Nautilus wallet?
  **A** (@Gazza, msg#263122 / @Glasgow, msg#264198): Just restore same seed phrase in Nautilus - no need to send funds, addresses are derived from the same seed.

- **Q** (@vidicmu, msg#264074): Funds stuck in proxy address using sigmausd.io, refund showing error?
  **A** (@Glasgow, msg#264252): Send 0.01 ERG to the long proxy contract address, refund, then retry with double the fee when redeeming.

- **Q** (@Hash, msg#264422): Don't you think 2 min block interval is high for DeFi? Plan to improve?
  **A** (@CW, msg#264423): Block time is conservative improvement over BTC. Can be improved with sub-blocks and faster txs on L2s/sidechains. Ergo L1 designed with many scalability options, not intended as fast processor of simple transactions.

- **Q** (@Hash, msg#264435): What's the plan to secure network once 8 year emission is over?
  **A** (@CW, msg#264439-441): EIP-27 extends block rewards to 2045 via re-emission contract. Storage rent will provide additional miner revenue (can claim tokens/wrapped assets if insufficient ERG in box). Other incentives include projects distributing tokens through miners for fair launch.

- **Q** (@Hash, msg#264443): Any tools to port Solidity to ErgoScript?
  **A**: No response provided, but ErgoScript fundamentally different from Solidity due to UTXO vs account model.

- **Q** (@Jad, msg#264618): If I send 0.1 ERG to BTC address and recover BTC seed on Ergo, can I find the ERG?
  **A** (@MrStahlfelge, msg#264621): BTC addresses aren't valid Ergo addresses - same elliptic curve but different address derivation.

## Links Shared

- [https://github.com/ergoplatform/ergo/issues/1664]: Protection for exchanges from spam (upcoming node feature)
- [https://github.com/mhssamadani/RosenBridge]: Rosen Bridge detailed design and specifications
- [https://www.ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432/4]: Kushti's response on public good stablecoin proposal
- [https://www.ergoforum.org/t/bonds-based-on-ergo-or-the-yield-protocol/128]: Yield protocol-based stablecoin proposal
- [https://www.ergoforum.org/t/dexy-usd-simplest-stablecoin-design/1430]: Dexy USD stablecoin design
- [https://www.youtube.com/watch?v=LyyD-clUvyI]: Armeanio interview explaining Ergo (highly praised by community as best overview)
- [https://www.youtube.com/watch?v=ryRGMm-6224]: Company Daniel attempting to bring to Ergo
- [https://sigmaverse.io]: Updated UI for Ergo ecosystem overview (new desktop version released)
- [https://docs.ergoplatform.com/dev/protocol/scaling/]: Scaling documentation including L2 tutorials
- [https://ergonaut.space/en/Guides/yield]: Guide for earning yield on Ergo
- [https://github.com/ergolabs/ergo-dex-asset-icons]: New requirements for ErgoDex pool verification
- [https://ergo.nodespyder.io/]: Public node count tracker (85 public nodes, miners run private nodes)

## Unresolved Questions

- **Ledger Hardware Wallet Integration**: Repeatedly asked throughout week. Team confirmed developers back working on it after Ukraine displacement, expected "soon" but no specific date. Third-party dependency caused delays.

- **Exchange Listings**: Daniel mentioned potential 2 exchange listings during Dubai Crypto Expo, but details remain unconfirmed. Community speculation about tier-1 exchanges (Binance, Coinbase) but no official announcements.

- **SuSy Bridge Interface and Timeline**: Kushti to meet with SuSy team and get UI details. No specific launch timeline provided beyond "testnet operational."

- **ErgoLend Launch Date**: Front-end testing ongoing with Keith, Kenyan pilot program in planning stages with entrepreneur identification underway. No mainnet launch date announced.

- **Storage Rent Activation**: Mentioned as future miner revenue source but no timeline for when it becomes active or what parameters will be set.

- **Dexy USD Protection Mechanism**: Team discussing whale attack prevention but no details shared publicly on chosen approach.