---
title: "Ergo General Chat — 2023-W15"
date_start: "2023-04-10"
date_end: "2023-04-16"
type: telegram_weekly
channel: general
week: "2023-W15"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W15 Summary
## Period: 2023-04-10 to 2023-04-16

---

## Key Topics Discussed

- **Emission Reduction and Block Rewards**: Block rewards reduced by 3 ERG to 39 ERG as of block height 979,200. Community discussion around mining incentives and emission schedule impact on price and miner behavior.

- **Rosen Bridge Update**: Public test ongoing with ADA<>ERG bridging. Team on vacation during week, but bridge working as expected with two known sigma-rust issues already fixed. $COMET to be added to bridge for expanded public testing. Bridge architecture allows direct chain-to-chain bridging (e.g., BTC to ADA) without routing through ERG, though all verification happens on Ergo smart contracts.

- **Wallet Migration from Yoroi**: Multiple users seeking help migrating from deprecated Yoroi wallet. Community directing users to restore seed phrases in Nautilus, Satergo, or Ergo Mobile Wallet. Ledger integration available via Nautilus extension in developer mode.

- **Babel Fees Discussion**: Technical explanation of how Babel fee boxes work - users can pay transaction fees using native tokens instead of ERG. Babel boxes contain ERG and accept tokens at specified rates. Community discussed creating and using Babel fee boxes, with suggestions for automated rate adjustment tools.

- **Storage Rent Mechanism**: Explanation of ERG's storage rent - boxes unused for 4+ years can have small amounts collected by miners to discourage blockchain bloat. Users advised to consolidate UTXOs periodically to reset the timer.

- **Seven Seas Exchange Listing**: New no-KYC exchange listed ERG and SigmaUSD rapidly (within 2 days of contact). Community excited about potential for native token support and UTXO-friendly exchange infrastructure. Order book-based CEX similar to TradeOgre model.

- **SigmaFi Lending Protocol**: Active discussion of P2P lending mechanics on SigmaFi. Protocol is fully on-chain with simple parameters: borrower posts collateral, lender funds loan, borrower either repays before deadline (gets collateral back) or defaults (lender gets collateral). No price-based liquidation - purely time-based. TVL reached $20k milestone.

- **Trade House and Order Book DEXes**: Discussion of order book DEX advantages over AMM - full transparency of liquidity depth, control over slippage, ability to set limit orders and capture specific price points. Supports partial fills unlike early Cardano order books.

- **Spectrum Yield Farming Public Test**: Testing ongoing with community invited to stress test backend updates. Users can claim test tokens via faucet to participate. First YF payments successfully processed.

- **DegFi and Auction Coin Concepts**: kushti posted forum proposals for "Auction Coin" (auction-based emission with automated buybacks) and "Rotating Savings and Credit Associations" (ROSCA/tontine-like schemes). Community discussion around KYA (Know Your Assumptions) degen finance vs fair launch principles.

- **KuCoin Withdrawal Issues**: Periodic suspension of ERG withdrawals on KuCoin due to node issues. Resolved during week but pattern of recurring problems noted.

- **Mining and Hashrate**: Network hashrate around 21-30 TH/s, historically strong post-merge. Discussion of miners potentially returning as ERG price increases.

---

## Important Decisions or Announcements

- [@CW, msg#379364, 2023-04-10]: Block rewards reduced by 3 ERG to 39 ERG as of block height 979,200 per emission schedule.

- [@mhs_sam via HQ, msg#380347, 2023-04-12]: Rosen Bridge public test ongoing, team on vacation this week. Two sigma-rust issues fixed pending stable release. $COMET to be added to bridge next week for public testing.

- [@kushti_ru, msg#380370, 2023-04-12]: EIP finalized for wallet devs to implement (context unclear which EIP).

- [@Gazza_SP, msg#380831, 2023-04-14]: Spectrum Yield Farming public test launched with backend updates to fix stuck transaction issues.

- [@kushti_ru, msg#380374, 2023-04-14]: Reminder to community to use SigmaUSD to fix positions and profit from volatility using available DeFi instruments.

- [@kushti_ru, msg#380863, 2023-04-13]: Posted Rotating Savings and Credit Associations (ROSCA) forum proposal for community feedback.

- [@seedubya/CW, msg#381687, 2023-04-15]: Seven Seas Exchange listed ERG with fast integration (< 2 days), no listing fees, crypto-to-crypto only.

- [@NoahErgo, msg#382522, 2023-04-16]: SigmaFi TVL surpassed $20k milestone. Quick start guide added to docs.

---

## Technical Q&A Worth Preserving

- **Q** (@M, msg#381222): Can Rosen Bridge transfer ETH from Ethereum to Polygon in wrapped version, secured by ERG?
  **A** (@dadreboi, msg#381228): Yes, Rosen will allow direct bridging between chains without stopping at Ergo. All verification/security work done on Ergo side. Bridge can function even if sigmafi.app goes down - contracts are fully on-chain.

- **Q** (@M, msg#381269): Where to get SigmaUSD?
  **A** (@dadreboi, msg#381280): Mint at https://tokenjay.app/app/#sigusd or swap on Spectrum DEX.

- **Q** (@stenolog, msg#381582): Does Ergo support vesting/locking (funds released over time)?
  **A** (@dadreboi/@LuivatraEP, msg#381586-626): Yes, smart contracts can lock funds with time-based release. ErgoUtils has vesting contract templates. Lock ERG, give NFT "key" to recipient, unlocks after specified time. Max 4 years to avoid storage rent.

- **Q** (@stenolog, msg#381640): What is storage rent?
  **A** (@dadreboi, msg#381638-651): After 4 years of inactivity, small amount collected from box for miners. Discourages bloat, keeps active UTXO set small. Prevent by sending all funds to yourself periodically to reset timer.

- **Q** (@abebeos, msg#381719): Why do I need 0.001 ERG in every UTXO box?
  **A** (@LuivatraEP, msg#381725-733): Each UTXO needs minimum ERG per byte (360 nanoERG/byte). Prevents spam and pays for blockchain storage. Size varies based on box contents.

- **Q** (@2025will FTW, msg#380944): Can oracle be used on DEX so prices match CEX?
  **A** (@ibetuwill/@gg, msg#380945-956): No, DEX prices are free market based on LP ratio. Oracles used in lending protocols for collateralization ratios, not for price control on DEXes.

- **Q** (@Ian Lee, msg#382630-646): How does SigmaFi loan repayment and liquidation work?
  **A** (@dadreboi, msg#382631-694): Single payment before deadline, not monthly. Interest charged once. No price-based liquidation. If loan not repaid by deadline, lender liquidates collateral. If ERG price crashes below loan value, lender takes loss on collateral. Fully on-chain smart contract with only time-based triggers.

- **Q** (@Mohamed, msg#382240): Why do exchanges hold big balances if users trade between each other?
  **A** (@Andy L/@LuivatraEP, msg#382242-253): Exchange wallet holds sum of all user deposits. Users trade IOUs, actual coins in exchange custody. Not your keys, not your coins.

- **Q** (@stenolog, msg#381559): How much disk space for local full node?
  **A** (@Pulsarz, msg#381560): < 30GB as of this date.

---

## Links Shared

- [https://ergo.watch/emission]: Emission schedule tracker showing block reward reduction
- [https://soft.rosen.tech/]: Rosen Bridge test interface (private alpha)
- [https://zealy.io/c/ergo]: Ergo sprint/referral competition platform
- [https://ergofaucet.org]: Testnet token faucet for Spectrum Yield Farming testing
- [https://spectrumlabs.medium.com/yield-farming-public-test-a-guide-for-participants-8c5a01ac69d4]: Spectrum Yield Farming test guide
- [https://www.ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287]: kushti's Auction Coin proposal
- [https://www.ergoforum.org/t/rotating-savings-and-credit-associations/4289]: kushti's ROSCA/tontine proposal
- [https://sigmafi.gitbook.io/sigmafi-docs/]: SigmaFi documentation (new)
- [https://www.sigmao.cc/]: SigmaO options trading platform
- [https://tokenjay.app/app/#sigusd]: TokenJay SigmaUSD minting interface
- [https://ergcube.com]: HQ's community dashboard with token stats and guides
- [https://docs.ergoplatform.com/dev/protocol/tx/babel-fees/]: Babel fees documentation
- [https://satergo.com/]: Satergo desktop wallet
- [https://7seasexchange.com]: Seven Seas Exchange (new no-KYC CEX with ERG listing)
- [https://medium.com/@Haileypdll/sigmao-options-on-ergo-tokens-18adaa098416]: SigmaO explainer article
- [https://medium.com/zengate-global/an-overview-of-the-palmyracomdex-litepaper-f0c5214cebbc]: Palmyra litepaper overview
- [https://paideia.im]: Paideia DAO platform (MVP releasing April)

---

## Unresolved Questions

- Timing for public Rosen Bridge testnet expansion beyond current private alpha group
- Which EIP was finalized for wallet implementation (msg#380370)
- Status of Oracle Pool v2 deployment and GORT reward mechanism
- Machina Finance, Duckpools, and other announced projects' release timelines
- Ledger native desktop app support (currently only via browser extensions)
- Automated Babel fee rate adjustment tooling
- Best practices for SigmaFi lending/borrowing strategies and risk management
- Seven Seas Exchange plans for native token support beyond ERG/SigmaUSD
- Full details on Palmyra's development status and whether Dan is sole developer or leading a team