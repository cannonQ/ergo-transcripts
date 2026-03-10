---
title: "Ergo General Chat — 2022-W47"
date_start: "2022-11-21"
date_end: "2022-11-27"
type: telegram_weekly
channel: general
week: "2022-W47"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W47 Summary

## Key Topics Discussed

- **Wallet Options and Migration**: Discussion around Ergo wallet choices for users moving from Yoroi. Satergo (full node or remote node) and Nautilus were recommended as solid alternatives. MrStahlfelge's iOS wallet (Test Flight beta) expired, users directed to Terminus wallet which is now officially on the Apple Store.

- **Hardware Wallet Support**: Ledger integration is in beta/development, not yet officially released. Trezor support discussed as desirable (open source advantage over Ledger) but requires funding for development quotes. Users noted terminus wallet allows using old Android device offline as hardware wallet alternative.

- **Mining Discussion**: GPU hashrate optimization shared (3070 achieving ~170MH/s at 115W with specific OC settings: 1600 core, 2300 mem). Discussion of Kaspa's aggressive emission schedule (half mined in one year, all coins by 2025) compared to Ergo's more sustainable approach. SNISP (Succinct Non-Interactive Share Proofs) ErgoHack project introduced for decentralized mining pool paradigm.

- **Tax Compliance Complexity**: Extended discussion on cryptocurrency tax treatment, particularly in US/Canada. Key points: every transaction (including wallet-to-wallet transfers, swaps, DEX trades) triggers taxable event based on price difference at time of transfer. NFT sales, staking rewards, providing liquidity all create complex reporting requirements. Current tools like Koinly don't fully support Ergo tokens. Wash sale rules may not apply to crypto, allowing tax loss harvesting.

- **Privacy and Mixing**: Discussion of mixing use cases beyond illicit activity: preventing vendor tracking, protecting purchase history privacy, avoiding revealing wealth to casual recipients. Theoretical discussion of using Rosen Bridge for mixing (sending ERG→ADA→ERG in delayed/split amounts) - concluded trackable without sufficient liquidity but mixer-then-bridge could work. Babel fees allow paying transaction fees in tokens other than ERG, reducing tracking.

- **DuckPools Lending**: DuckPools launched allowing borrowing ERG with sigRSV collateral or vice versa. Leveraged positions possible by looping (borrow, swap, repeat). Question raised about 100% utilization scenario locking lender funds - directed to developer for clarification.

- **Grid Trading and Dexy**: Kushti developing decentralized grid trading orders that sit on blockchain until matched, no UI yet. Dexy stablecoin whitepaper comparison to Fei - Kushti noted significant differences in both design and implementation approach. Dexy can theoretically work with any oracle data stream.

- **JIT Costing (Just-In-Time)**: Ergo Node v5.0 introduces hybrid costing method combining Ahead-Of-Time (AOT) and Just-In-Time (JIT) costing for smart contract execution. AOT estimates costs before execution to reject over-expensive scripts; JIT calculates costs during actual execution. This should increase transactions per block, improve cost estimates, and enhance blockchain performance.

- **Community Projects**: ergflip.com launched as first Ergo app by @ergflip - centralized coinflip gambling (1:1.95 payout, not decentralized, will be open sourced). Emporas.io launched selling Ergo merchandise payable in ERG or SigmaUSD. SigmaBonds P2P lending protocol exists (contract level) with Captain Nemo/Nautilus working on UI integration.

- **Political/Philosophy Discussion**: Extended debate triggered by kushti tweet criticizing NYT panel with SBF, Zuckerberg, Yellen, and Zelensky. Community discussion on founder political opinions vs. protocol decentralization - general consensus that permissionless blockchain doesn't require ideological purity from creators. Kushti elaborated on monetary system impacts, Modern Monetary Theory, Central African Franc colonial dynamics, and need to focus on crypto ecosystem problems.

## Important Decisions or Announcements

- [@CW, msg#349190, 2022-11-26]: Ergo Mining and Minting Mini Summit scheduled for Saturday 11am UTC, featuring videos from ErgoHack V winners: SNISP, CYTI, ErgoNames, Paizo, Obolflip, ErgoAudit, ErgoPayroll, DumDumDum, EIP-38 partial voting demonstration, and kushti presentation on PoW/eUTXO advantages.

- [@Ergo_NEWS, msg#348210, 2022-11-23]: ErgoHack V results announced: 1st Prize (EF + Flux): CYTI (Choose Your Token ID); 2nd Prize (EF + Flux): ErgoNames; 3rd Prize (EF): Paizo; 3rd Prize (Flux): Obolflip; Extra Prize (EF): SNISP.

- [@CW, msg#349206, 2022-11-25]: New weekly show "The Sigma Update" launched with hosts qx() and CW, covering Ergo community updates, dev updates for non-technical users, and Sigmanauts updates. Airs Fridays.

- [@chrom, msg#349260, 2022-11-25]: Ergo 5.0 soft fork activation approximately 10 days away (from 2022-11-25).

- [@Koutelier, msg#349280, 2022-11-26]: Emporas.io launched - Ergo merchandise store accepting ERG or SigmaUSD payment. PayPal ditched based on community vote.

- [@Armeanio, msg#349183, 2022-11-26]: Rosen Bridge guard set currently testing with 30 guards. Plan is to include actors beyond Ergo ecosystem for better distribution and scaling.

## Technical Q&A Worth Preserving

- **Q** (@Camori, msg#347559): Can anyone recommend a really good Ergo wallet apart from Yoroi?
  **A** (@Gazza, msg#347561): Satergo and Nautilus are both good options. Satergo can be full node or remote node.

- **Q** (@Flying_Pig, msg#348215): Does Zelcore wallet support ergo?
  **A** (@MrStahlfelge, msg#348217): It supports Ergo but typical cross-platform JavaScript solution. Need to edit settings to show ERG tokens properly. Ergo wallet app aims for better newcomer UX.

- **Q** (@Vladiслав, msg#347680): Can anyone explain how coin marketcap gets bigger?
  **A** (@Kallo_Shaman, msg#347700-347702): Market cap = price of token × circulating supply. Price on exchange is price of last trade. If cheapest offer is $150 and you're willing to pay it, trade happens and price changes to $150.

- **Q** (@Derrick, msg#348107): When mining a coin is not profitable, what can help that coin exist? Is there risk project stops forever?
  **A** (@qx, msg#348113): Not everyone mines for profit - reasons include: supporting investment security, staying in ecosystem, heating needs, supporting pools. When miners drop, difficulty automatically decreases bringing mining to similar profitability level for remaining miners.

- **Q** (@Unknown, msg#348079): What is box consolidation in simple words?
  **A** (@qx, msg#348082-348092): Deposits to address create separate boxes. If you have 1 ERG here, 2 ERG there, and need to spend 3 ERG, too many boxes can cause issues. Sending everything to your wallet again puts it in one box. Boxes are UTXO model - you can't add to a box, you must spend boxes and create new ones. Transaction fee pays miners to consolidate.

- **Q** (@steven, msg#348510): What is RocksDB?
  **A** (@scalahub, msg#348513): Database system used by Ergo node. RocksDB is a high-performance embedded database for key-value data.

- **Q** (@Unknown, msg#348586): Does minotaur wallet function?
  **A** (@Gazza, msg#348595): Minotaur is functional, primarily focuses on multisig capabilities.

- **Q** (@qx, msg#349522): Can't I use Rosen Bridge as mixer - send ERG→ADA→clean wallets→back to ERG in bits?
  **A** (@NoahErgo, msg#349523-349530): Amounts/timestamps would make it obvious. Could look at bridge wallet inputs/outputs and correlate. Not private without huge delays and splintering, but even then bridge transfers create receipts. Better: mix pre-Rosen transfer, then bridge to chain without mixer.

- **Q** (@Mark, msg#349587): What is point of wanting privacy from purchasing coins?
  **A** (@NoahErgo/@qx, msg#349590-349610): Oppressive governments (Iran freezing accounts), vendor tracking (Amazon tracing all transactions for ads), govt finding any reporting mistakes, preventing wealth revelation (nephew Jimmy discovering uncle is crypto millionaire). Privacy isn't important until it's too late to have it.

- **Q** (@TMR.ERG, msg#349374): What happens if lending pool (like DuckPools) reaches 100% utilization - would lender funds be stuck?
  **A** (@NoahErgo, msg#349376): Should ask @KrasaviceBlasen for clarification on this mechanism.

- **Q** (@Rj, msg#349249): Any ELI5 for Just in time costing?
  **A** (@NoahErgo, msg#349250-349253): Ahead-Of-Time Costing (AOT) estimates costs before script execution to reject over-expensive scripts. Just-In-Time Costing (JIT) calculates costs during actual execution. Two-part method establishes costs more efficiently with less expense than AOT alone. Result: increases transactions per block, improves cost estimates, enhances blockchain performance.

- **Q** (@Mark, msg#349775): Do you owe money if you buy ERG at $5, send from wallet at $10 (but don't off-ramp), then ERG goes to $1?
  **A** (@NoahErgo, msg#349778-349785): Yes - you realized gains at $10 transfer and owe capital gains on that $5 profit, even though current value is $1. Can realize losses later but in USA capped on amount per year to offset gains. If turned $1000→$100k→$0 by trading, still owe on realized gains during that process.

- **Q** (@Unknown, msg#350021): How does ERG 10x daily transactions?
  **A** (@NoahErgo, msg#350023-350024): Combination of factors: more users, more dApps, faster confirmation times, layer 2 solutions, efficiency improvements like JIT costing.

- **Q** (@Unknown, msg#350074): Any literature on sub-block confirmation protocols for faster point-of-sale and DEX use?
  **A** (@Hans, msg#350078-350084): "Prism: deconstructing the blockchain to approach physical limits" paper. PoW can achieve near-instant confirmation and network bandwidth throughput theoretically. Exists for a while but Bitcoin/Ethereum had tunnel vision. Ergo has had less time/resources but is already more advanced - implementing Prism requires time/resources Ergo didn't have yet.

## Links Shared

- [https://ergoplatform.org/en/blog/2022-03-17-mining-ergo-on-windows/]: Mining Ergo on Windows guide
- [https://docs.ergoplatform.com/dev/Integration/guide/]: Exchange Integration guide (open source)
- [https://explorer.ergoplatform.com/en/rich-list]: Ergo rich list
- [https://ergo.watch/metrics/addresses]: Ergo Watch address metrics
- [https://github.com/kushti/dexy-stable/blob/main/spec/paper/dexy.pdf]: Dexy stablecoin whitepaper
- [https://bisq.network/]: Bisq decentralized BTC/fiat and BTC/altcoin exchange
- [https://ergoplatform.org/en/blog/Ergo-Node-v.5.0-The-Next-Evolution-of-the-Ergo-Platform]: Ergo Node v5.0 announcement with JIT costing explanation
- [https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/]: Ergo's hybrid costing method deep dive
- [https://github.com/GetBlok-io/GetBlok-Plasma]: GetBlok Plasma L2 implementation
- [https://github.com/GetBlok-io/Getblok-Toolkit]: Toolkit for pulling wallet transactions and CoinGecko pricing for tax purposes
- [https://koinly.io/cryptocurrency-taxes/]: Koinly cryptocurrency tax guide
- [https://coinledger.io/blog/is-transferring-crypto-between-wallets-taxable]: Guide on wallet-to-wallet transfer tax implications
- [https://matrix.org/]: Matrix.org open communication protocol and manifesto
- [https://youtu.be/eA0KnTt4O7E]: Matrix protocol overview video
- [https://ergflip.com]: First Ergo gambling dApp (coinflip, centralized, 1:1.95 payout)
- [https://emporas.io]: Ergo merchandise store accepting ERG/SigmaUSD
- [https://github.com/K-Singh/SigmaBonds]: SigmaBonds P2P decentralized bond protocol on Ergo
- [https://sigmaverse.io]: Sigmaverse Ergo dApp directory
- [https://twitter.com/i/spaces/1yNGaNMkLYEJj?s=20]: Spectrum Finance Q&A Mehen Twitter Space recording
- [https://youtube.com/playlist?list=PL8-KVrs6vXLT67ZiKrtIumqoSoZOi5tjY]: Ergo Mining & Minting Mini Summit playlist
- [https://www.ergoforum.org/t/ergo-as-a-currency/49]: Ergo Forum discussion on monetary systems and "The Ecology of Money" book questions
- [https://www.ergoforum.org/t/lets-discussion-summary/3492]: LETS (Local Exchange Trading System) discussion summary

## Unresolved Questions

- Ledger official release timeline: In beta, expected "by end of year" but dependent on Ledger devs (@Nico, msg#348001-348002)
- Trezor support: Discussed as desirable but requires funding for development quotes (@Fifajs, @Armeanio, msg#348491-348493)
- DuckPools 100% utilization scenario: What happens to lender funds at max utilization? (@TMR.ERG, msg#349374) - flagged for @KrasaviceBlasen to answer
- Grid trading UI: Kushti developing decentralized grid order contracts, no UI exists yet. Who will build? (@Chris_Ray, msg#349505-349509)
- Dexy UI and adoption: Protocol exists, how to make it mainstream product? (@Chris_Ray, msg#349506-349509)
- NFT/token tax reporting for Ergo: How to properly report complex DeFi interactions (staking, liquidity provision, NFT flips) when tools like Koinly don't fully support Ergo ecosystem? (@Mark, msg#349723-349731; @NoahErgo, msg#349726-349729)
- Rosen Bridge guard selection mechanism: What game theory prevents collusion? Ideally guards are miners and node reads other chains, but current mechanism unclear (@NoahErgo, msg#349180-349188)
- Charles Hoskinson + Dan Friedman Spectrum space: Being organized but no date/time finalized (@filippounits, @Gazza, msg#348309-348320)
- Layer 2 development status: Plasma exists via Spectrum, kushti working on L2 cookbook when time permits, but general L2 chat inactive (@Unknown, msg#349392-349394)