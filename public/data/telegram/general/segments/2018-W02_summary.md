---
title: "Ergo General Chat — 2018-W02"
date_start: "2018-01-08"
date_end: "2018-01-14"
type: telegram_weekly
channel: general
week: "2018-W02"
source: telegram
message_count: 165
categories: [governance, mining, technical, ecosystem, marketing, community]
key_terms: [token swap, "1:1 conversion", early adopter rewards, funding wallet, mainnet launch, TestNet0, 3+ months, yellow paper, team expansion, Equihash, PoW, light-full node, mobile mining, hardware decentralization, Sigma language, non-Turing complete, safe contracts, formal verification, contract security, 400k tokens]
---
# Ergo General Chat — 2018-W02 Summary

## Key Topics Discussed

- **EFYT-to-ERG token swap mechanics**: Discussion of 1:1 conversion ratio, early investor rewards, and timing. Multiple clarifications that swap rate would be 1:1 but the team intended to reward early supporters through other mechanisms not yet finalized.

- **Ergo positioning vs. other blockchains**: Ergo differentiated from Ethereum by being non-Turing complete (safer smart contracts), based on Equihash algorithm like Zcash, featuring mobile mining via light-full nodes, and incorporating privacy features post-Sigma implementation.

- **Token distribution and supply**: Circulating supply ~400k EFYT tokens out of 5M total. Estimated 50M tokens mined in first year post-mainnet (10% collected by team as fees). Majority of tokens remain in funding wallet (3PK9QAbwufVJQ2YVLdNxgVnAqG4iciw9LYE).

- **Non-Turing completeness in smart contracts**: Detailed explanation that Turing-complete languages (like Ethereum's) enable loops and recursion which have caused historical exploits. Ergo's non-Turing-complete approach prevents certain bug classes. Preliminary research suggests ~75% of Ethereum contracts could be implemented without Turing completeness.

- **TestNet development status**: TestNet0 underway with version 0.2.0 released. Team still recruiting developers and completing Yellow Paper + Economic Model.

- **Equihash mining and hardware barriers**: Ergo's Equihash-based PoW designed to democratize mining by allowing mobile devices and full-light nodes to mine profitably, removing ASIC dominance barriers.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1515, 2018-01-14]: EFYT is neither PoW nor PoS; it is a commemorative token. ERGO will launch on its own Equihash-based chain post-mainnet.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1521, 2018-01-14]: Team formally has 2 full-time developers announced on website; 5 additional developers to be announced soon.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1534, 2018-01-15]: TestNet0 version 0.2.0 released, getting back on track.

- [@𝖒𝖊𝖞𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1509, 2018-01-13]: Mainnet launch will require more than 3 months from that date to complete TestNet.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1545, 2018-01-16]: Yellow Paper currently being edited.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#1475): Will Ergo add privacy features?  
  **A** (@Dmitry, msg#1476): Monero-like privacy will be included right after Sigma-language implementation; more complicated schemes may be implemented later.

- **Q** (@Unknown, msg#1514): Why is Ergo using PoW when most projects move to PoS?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1515): Ergo's PoW (Equihash-based) aims to decentralize mining by allowing light-full node operation without downloading the whole chain, removing hardware barriers that plague other PoW systems.

- **Q** (@Unknown, msg#1520): How many full-time developers are on the project?  
  **A** (@𝖒𝖊𝖞𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1521-1522): 2 officially announced; 5 more developers to be announced soon.

- **Q** (@pietrod, msg#1477): How much EFYT is in dev hands vs. circulation?  
  **A** (@𝖒𝖊𝖞𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1480-1485): ~400k circulating; majority remains in funding wallet. During first year post-mainnet, ~50M tokens estimated to be mined (10% collected by team as fees).

- **Q** (@Unknown, msg#1553): Will early investors be rewarded above 1:1 conversion?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1488): 1:1 swap ratio confirmed, but mechanics and reward structure still being determined to "fairly reward early supporters."

- **Q** (@hawky, msg#1611): Is there a grammar description for Sigma already?  
  **A** (@hawky, msg#1611): No substantive answer provided; flagged as open question.

- **Q** (@Unknown, msg#1610): Will Sigma follow Scala's grammar?  
  **A** (@hawky): Not directly answered.

- **Q** (@gd1551, msg#1642): What do you mean by "safe smart contracts"?  
  **A** (@𝖒𝖊𝖞𝖆𝖑𝖎𝖘𝖙կշօ, msg#1646): It's about the way it's coded, not about auditing. (@hawky provided detailed explanation via msg#1649-1652 on non-Turing completeness.)

- **Q** (@hawky, msg#1649-1652): Detailed explanation of non-Turing completeness: Ethereum uses Turing-complete language enabling loops/recursion, which have caused hacks. Non-Turing-complete languages prevent these errors but cannot implement every function. Preliminary research: ~75% of Ethereum contracts could work without Turing completeness.

## Links Shared

- [https://github.com/ScorexFoundation/Scorex/commits/master]: Scorex Foundation rebuild progress
- [https://github.com/ScorexFoundation/sigmastate-interpreter/commits/master]: Sigma State Interpreter completion progress
- [https://github.com/ergoplatform/ergo/commits/master]: TestNet0 implementation progress
- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf]: Configuration example for Ergo node (v0.2.0)
- [http://ergo.dsalab.de]: Ergo project resource (referenced for learning)
- [https://ergoplatform.org/news_list.html]: Official news and Yellow Paper status
- [https://twitter.com/ergoplatformorg]: Official Ergo Twitter account
- [https://twitter.com/chepurnoy/status/943754075149144064]: Post on scalability via BTC-NG protocol
- [https://vtsol.org/datastore/EFYT_BTC/24hours.htm]: EFYT-BTC market depth visualization
- [https://vtsol.org/datastore/EFYT_BTC/EFYT_BTC_cls.htm]: In-depth EFYT-BTC trading data
- [https://en.wikipedia.org/wiki/Alan_Turing]: Reference on Turing completeness theory

## Unresolved Questions

- **Early investor reward mechanism**: Multiple users asked how early investors would be rewarded if conversion is 1:1 (msg#1469, #1609, #1673, #1678). Answer: mechanics still being determined but team intends to reward early supporters "fairly"—no specific structure confirmed.

- **Sigma language grammar specification**: Whether Sigma will follow Scala grammar conventions (msg#1610, #1611)—flagged as open but not answered.

- **Post-swap exchange listing**: Whether ERGO will be available on Waves DEX after swap or only on other exchanges (msg#1565-#1568). Answer speculative: "perhaps" Waves DEX will list ERGO; atomic swaps may eventually replace gateways.

- **Total supply cap**: User questioned whether first-year supply (4M-10M) represents 50% of total supply, implying total supply 8M-20M (msg#1571)—no clear confirmation provided.

- **Fee estimation in mempool**: Not discussed in this week's chat but would become relevant later.

---

**Chat Activity Summary**: Low-to-moderate activity (165 messages, 16 unique participants). Primarily educational with community members asking fundamental questions about token economics, technology differentiation, and development status. Dominated by @𝖒𝖊𝖞𝖙𝖆𝖑𝖎𝖘𝖙կշօ and @hawky providing clarifications. No major disagreements or technical controversies. Focus on onboarding and building confidence among potential early investors.