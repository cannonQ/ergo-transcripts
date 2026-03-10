---
title: "Ergo General Chat — 2021-W09"
date_start: "2021-03-01"
date_end: "2021-03-07"
type: telegram_weekly
channel: general
week: "2021-W09"
source: telegram
message_count: 2536
categories: [defi, governance, wallet, nft, ecosystem, marketing, bridges]
key_terms: [SigmaUSD, SigRSV, front-running, whale, oracle pool, contract freeze, reserve ratio, AgeUSD, v2.0, fee increase, redeployment, oracle pool governance, parameter changes, oracle pools, governance token, decentralization, parameter updates, anonymous developers, redemption, losses]
---
# Ergo General Chat — 2021-W09 Summary
## Period: 2021-03-01 to 2021-03-07

---

## Key Topics Discussed

- **SigmaUSD/SigRSV Front-Running Exploit and Oracle Pool Freeze**: A whale exploited the AgeUSD protocol by front-running oracle price updates, systematically shorting SigmaUSD to extract value from SigRSV holders. The oracle pool was frozen at $3.16/ERG on 2021-03-04 to prevent further losses. The team announced deployment of v2.0 with increased fees (2% vs 1%) and improved oracle pool design. Current v1 contract remains functional but frozen; users advised to redeem tokens.

- **SigmaUSD Reserve Ratio Mechanics and Early Holder Experience**: Extensive discussion on how reserve ratio affects SigRSV value. Early holders who minted at 5,000-7,000% reserve ratio experienced losses when redeeming, as high ratio meant their position was similar to holding ERG. Most holders saw ~7% losses on redemption. Community debated whether losses were due to whale manipulation, insufficient testing, or lack of clear risk disclosure.

- **Oracle Pool Governance and Decentralization Concerns**: Community raised concerns about oracle pool centralization after freeze. Oracle pools are currently run by "dozen of not anonymous people with governance token" who can freeze price feeds. Discussion about need for multiple independent oracle pools, governance token distribution, and whether contracts should be upgradeable or immutable.

- **UI Fee Removal and Reserve Fee Redistribution**: Anonymous UI developer (anon-real/DarkSideOfBrrrrr) removed 0.25% UI fee, redirecting it back to users. Total redemption fee reduced from 1.25% to 1%. The 1% protocol fee continues flowing back into reserves, benefiting remaining SigRSV holders.

- **Anonymous Developer Incentives in PoW**: Discussion on benefits/risks of anonymous developers in crypto. PoW enables anonymous developers to contribute and earn mining rewards without identity disclosure. Debate on whether anonymity enables bad actors vs. protecting contributors. Community consensus that open-source code with audits mitigates risk.

- **ErgoSwap/ErgoDEX Timeline and Yoroi dApp Connector**: ErgoSwap (rebranded from ErgoDEX) development continues with Q2 target, dependent on SigmaUSD v2 deployment. Yoroi metamask-like dApp connector dev version expected "in about a week" per Emurgo dev, initially for Ergo with Cardano interoperability when Plutus launches.

- **Mining Difficulty Increase**: Multiple users reported "very high difficulty" increase. Network hashrate growing rapidly week-over-week as more miners join.

- **Magnum Wallet Recovery**: Users with only 12-word mnemonic (no private key) from closed Magnum wallet directed to use ErgoMixer on sigmaverse.io for recovery, following YouTube tutorials.

- **NFT Auction House Updates**: ErgoAuctions UI updated with improved design. Audio NFT support added. Some users reported bugs with minting process requiring wrong amounts/funds.

---

## Important Decisions or Announcements

- [@kushti, msg#102115, 2021-03-04]: "EF paid first donations / salaries in SigmaUSD"

- [@Dmitry, msg#102680, 2021-03-04]: AgeUSD protocol frozen at $3.16/ERG oracle rate. Oracle pool funding cut to prevent further whale exploitation. Blog post published: https://ergoplatform.org/en/blog/2021_03_04-finding-right-balance/

- [@kushti, msg#103986, 2021-03-05]: Posted governance proposal for oracle pools and SigmaUSD bank on forum: https://www.ergoforum.org/t/governance-for-oracle-pools-and-the-sigmausd-bank/786

- [@Glasgow, msg#104512, 2021-03-06]: SigmaUSD v2.0 expected "next week" with 2%+ fees and improved oracle design.

- [@Glasgow, msg#104648, 2021-03-06]: Yoroi dApp connector dev version ready "in about a week", initially on Ergo, interoperable with Cardano when Plutus launches. Source: https://youtu.be/7apXqzbSfQM?t=970

- [@Dmitry, msg#103646, 2021-03-04]: UI fee (0.25%) disabled on sigmausd.io, purchase/mint functions disabled. Only redemption available.

- [@Glasgow, msg#102042, 2021-03-02]: New subreddit launched: https://www.reddit.com/r/ergonauts/

- [Unknown, msg#103929, 2021-03-05]: Ergo Article contest announced - 150/100/50 ERG prizes for top 3 articles, deadline March 31.

---

## Technical Q&A Worth Preserving

- **Q** (@Olli Tiainen): What is Ergo's vision? If Ergo succeeds, what has changed? Who are the losers if Ergo wins?
  **A** (@Glasgow): Ergo enables new financial interaction models with flexible Sigma protocols easily accessible to developers. Provides superior support for real-world financial agreements through multi-stage contracts, ErgoScript high-level language, formal verification, easy oracle creation, and complex signature schemes. Use-case is "contractual money."

- **Q** (@cymatic): Can you explain what bulletproofs are?
  **A** (@kushti): It's a zero-knowledge technique allowing specific statements to be proven (e.g., range proofs in Monero). Can also prove generic statements as trustless alternative to SNARKs with no trusted setup. Working to enable verification in ErgoScript, which would allow variety of zero-knowledge protocols (bulletproofs, Groth one-out-of-many, etc.) alongside Ergo contracts for hybrid execution with privacy.

- **Q** (@JCFishing): Does Ergo have Oracle solution that can compete with Chainlink?
  **A** (@Glasgow): "They're much better than chainlinks" - Oracle Pools provide new oracle model. See: https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263

- **Q** (@David F): Why is SigmaUSD price locked at $3.16? This isn't a decentralized system.
  **A** (@Glasgow, @c8, @kushti): The contract itself is decentralized and still running. The oracle pool (external data source) was frozen to prevent first-movers from exiting at cost of others. Oracle pool design and governance is separate from contract. Price frozen forever in v1; v2 deployment coming with improved parameters.

- **Q** (@Dan): What are you most excited about looking ahead?
  **A** (@JCFishing): ErgoSwap, Oracle for Cardano, ErgoMixer. (@A): ErgoDEX and Ledger wallet support.

- **Q** (@cymatic): Any guesses on ErgoSwap effect on overall liquidity?
  **A** (@Glasgow): About 6% of supply was in Sigma. ErgoSwap volume depends on what tokens are transferable. If there's something available on Binance/Coinbase that can move into it, people would use that instead of signing up for Hotbit/CoinEx. Yoroi connector launching around same time will help.

- **Q** (@Snowman Jason): Why can't oracle update more frequently like 30 seconds to avoid front-running?
  **A** (@Glasgow): They are being made more frequent in v2. (@c8): More frequent is not always better - there are tradeoffs. (@Max): Cost is a factor.

- **Q** (@weR1): How long does ERG transaction take to send?
  **A** (@Snowman Jason): Usually within an hour, rare occasions need technical attention. Depends on sender and network conditions.

- **Q** (@JMatatan): What are incentives to place funds in SigRSV?
  **A** (@Glasgow): 1% transaction fee goes back into reserve. SigRSV is call option on reserve percentage. Reserve Providers take responsibility ensuring all SigmaUSD is fully collateralized (minimum 400%). In return they receive potential gains if ERG price increases - like leveraged long position on ERG. No liquidation in market downturns.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021_03_04-finding-right-balance/]: Official blog post explaining SigmaUSD v1 freeze, whale front-running exploit, and v2 plans
- [https://veriumfellow.medium.com/introduction-to-ergos-sigmausd-stablecoin-risk-and-reward-mechanism-18690b52d672]: Community-written deep dive on SigmaUSD risk/reward mechanics by @veriumfellow (UpwindStrategy)
- [https://www.ergoforum.org/t/governance-for-oracle-pools-and-the-sigmausd-bank/786]: Kushti's proposal for oracle pool and SigmaUSD governance
- [https://www.ergoforum.org/t/sigmausd-dao-bank-is-a-complex-beast/767]: Pre-announcement forum discussion on SigmaUSD complexity
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Original Oracle Pools design document
- [https://ergonaut.space/]: Community knowledge base with articles on eUTXO, LETS, Sigma Protocols, use cases
- [https://www.reddit.com/r/ergonauts/]: New official Ergo subreddit
- [https://github.com/Emurgo/yoroi-frontend/tree/2d790dc2e5b6430bdc33555ccd2de42831488cad/app/ergo-connector]: Yoroi dApp connector code repository
- [https://docs.google.com/spreadsheets/d/1RgID2TA_5c0ecVSy0gJ1DKYp4yA8byx0oKtBHay_pJE/edit]: Community-created SigmaUSD valuation spreadsheet by Ile
- [https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md]: Technical specification for Oracle Pools including governance tokens
- [https://blockfolio.com/coin/ERG/signal/U5ZVWYOzU9]: Ergo added to Blockfolio Signal for push notifications
- [https://youtu.be/7apXqzbSfQM?t=970]: Video with Yoroi dev discussing dApp connector timeline

---

## Unresolved Questions

- **Variable Fee Structure**: Debate ongoing whether SigmaUSD v2 should have fixed 2% fees or dynamic fees that adjust based on market benchmarks (moving averages, volume, percentage changes). @Armeanio and community discussing oracle-driven floating rate system. Complexity vs. security tradeoff not resolved.

- **Governance Token Distribution**: How to distribute oracle pool governance tokens fairly? Debate between financial stake-based voting (whales control) vs. earned governance (contribution-based, activity-based, knowledge-based). No consensus on model. Kushti proposed governance tokens already part of Oracle Pool design but implementation details unclear.

- **Zero-Governance vs. Governed Protocols**: Philosophical split between hard-coded immutable protocols (requires relaunch when flawed) vs. upgradeable governed protocols (enables continuous improvement but introduces centralization risk). @Martin_mx argues for zero governance, @btt argues governed relaunch better than catastrophic failure. Related question: Can contracts be upgraded via multisig parameter changes or must always redeploy?

- **SigmaUSD v1 Long-Term Viability**: If ERG price appreciates significantly, could v1 SigRSV holders eventually recover losses through accumulating transaction fees? Oracle frozen at $3.16 forever but reserve continues growing from redemption fees. No clear answer on timeframe or feasibility.

- **Anonymous Developer Accountability**: How to balance benefits of anonymous PoW developers with risks of no accountability? Open source + audits mitigate but don't eliminate risk. Community split on whether anonymous development should be encouraged or discouraged.

- **ErgoSwap Launch Dependencies**: ErgoSwap Q2 target "dependent on SigmaUSD v2 deployment" but unclear if v2 is blocking or just preferred. What's minimum viable liquidity/stablecoin requirement for DEX launch?

- **Ledger Support Timeline**: JD (previous ledger integration developer) appears to have left project. No updated timeline provided for Ledger Nano S/X support. Waves Exchange with Ledger remains temporary workaround.

- **Exchange Listings**: Biki exchange listing mentioned as "soon" but no concrete date. Bitmart withdrawals remain disabled. Sistemkoin flagged as scam by community - unclear if Ergo will delist.