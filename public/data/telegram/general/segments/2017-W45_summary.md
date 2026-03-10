---
title: "Ergo General Chat — 2017-W45"
date_start: "2017-11-06"
date_end: "2017-11-12"
type: telegram_weekly
channel: general
week: "2017-W45"
source: telegram
message_count: 178
categories: [governance, technical, mining, ecosystem, marketing]
key_terms: [supply, inflation, 50M first year, 100M total, market valuation, EFYT conversion, TestNet, internal testing, debugging, December 4 release, benchmarks, Equihash, smartphone validation, transaction fees, rewards, validators, authenticated data structures, verifiers, provers, balance information]
---
# Ergo General Chat — 2017-W45 Summary

## Key Topics Discussed

- **Ergo Platform Architecture & Vision**: The project aims to fundamentally change blockchain design through innovative approaches to scalability, authenticated data structures, and economic models. Multiple discussions confirm Ergo is built on the Scorex framework (shared with Waves) and will eventually launch its own independent blockchain.

- **Authenticated Dynamic Dictionaries (AVL+ Trees)**: Detailed technical excerpt shared explaining how miners hold full data structures and publish proofs of correct modifications, while verifiers maintain only a 32-byte digest. This allows verification without trusting the prover and minimal storage overhead.

- **Token Economics & EFYT Distribution**: The first-year supply will be 50M ERG maximum (potentially reduced), with total supply capped at ~100M. The team retains 10% of first-year emission. EFYT tokens (Ergo First Year Token) currently trade on Waves DEX and will convert 1:1 to mainnet ERG upon launch. Buyback programs and further airdrops are planned.

- **Mining & Validation**: Ergo uses Equihash proof-of-work. Validators can be lightweight (smartphone-capable), earning transaction fees as rewards. The consensus mechanism differs from pure PoW in that miners will be rewarded for more than block rewards alone.

- **Scalability Claims**: Mentalist claims Ergo achieves "1000 to the power of 1000" transactions/second throughput (building on Waves NG), far exceeding Visa's ~32k tx/s and Bitcoin Cash's ~20 tx/s. Technical details on how this is achieved remain incomplete in these logs.

- **Waves Integration**: Ergo and Waves share founding team history and the Scorex framework; they evolve "in synergy." EFYT is currently an asset on Waves platform; the migration path to independent Ergo mainnet is confirmed but not yet detailed.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#350, 2017-12-01]: Ergo TestNet release scheduled for December 4, 2017. Users advised to contact kushti for involvement.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#417, 2017-12-02]: TestNet "2nd drive" planned for the following week with surprise announcements for social media followers.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#372-376, 2017-12-01]: Future airdrops planned for WCT holders, WAVES holders, and/or EFYT holders (details TBD).

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#420, 2017-12-02]: Official team expansion announcement to follow; current team is kushti (Alexander Chepurnoy) and Dmitry Meshkov with expanding collaborators.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#285, 2017-11-19]: Economic whitepaper expected to release alongside main platform whitepaper "soon."

## Technical Q&A Worth Preserving

- **Q** (@druidEast, msg#287): Can we mine with smartphones?  
  **A** (@Crypto Rev, msg#288-289): You will be able to validate (not mine) from a smartphone.

- **Q** (@druidEast, msg#290): Will validators get rewarded for validating transactions?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#291): Yes, validators earn transaction fees as rewards—one of the solutions offered by the platform.

- **Q** (@Kaper024, msg#265-267): How is Ergo valued at 50M supply × $10 without inflation killing the price?  
  **A** (@Terri, msg#268): First-year supply capped at 50M, total supply at ~100M (both subject to reduction). Inflation curve not yet finalized; current price reflects market demand/supply dynamics at early stage.

- **Q** (@Unknown, msg#292): Do validators/miners get transaction fees or block rewards?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#296): "Miners" get rewards based on Equihash PoW.

- **Q** (@pietrod, msg#406-408): What is the connection between EFYT and Ergo? Is Ergo still under construction?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#410): EFYT = "Ergo First Year Token." It is a Waves asset that will convert 1:1 to mainnet ERG upon launch. Full details in token distribution page and Q&A sessions.

- **Q** (@pietrod, msg#419): Has the economic paper mentioned in Q&A been released?  
  **A** (@𝖒𝖊𝖓𝖆𝖑𝖎𝖘𝖙կշօ, msg#421): Not yet; draft is being edited.

- **Q** (@Scavangerr bogy, msg#443-444): How does Ergo differ from Waves, and will Ergo support Waves?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#446-457): Ergo builds on Waves NG and "takes NG to the next level." Both share Scorex framework and founding team history; they evolve in synergy. Ergo will eventually have its own blockchain as part of roadmap.

## Links Shared

- [https://ergoplatform.org/benchmarks/scoverage-report/]: TestNet progress and code coverage report (2017-11-13)
- [https://ergoplatform.org/qa_2017_06_09.html]: Q&A session #1 archive
- [https://ergoplatform.org/news_list.html]: Ergo news and Q&A sessions archive
- [https://eprint.iacr.org/2016/994.pdf]: Academic paper on "Improved Authentic Dynamic Dictionaries" (authenticated data structures)
- [https://ergoplatform.org/news_token_distribution.html]: Token distribution and EFYT conversion details
- [https://ergoplatform.org/qa_2017_05_29.html]: Q&A session #2 with economic model details
- [https://waveswallet.io/]: Waves DEX where EFYT is traded
- [http://www.waveswiki.org/index.php?title=Tutorials:_The_User_Interface#Waves_Decentralized_Exchange]: Waves DEX trading tutorial
- [https://journal.binarydistrict.com/dmitry-meshkov-nobody-knows-how-to-make-some-aspects-of-blockchains-better/]: Interview with Dmitry Meshkov on blockchain challenges
- [https://www.youtube.com/watch?v=kwLgQF5lfd4]: Ergo presentation from ETC gathering in Hong Kong
- [https://twitter.com/DmitryMeshkov/status/927910222915624960]: Twitter updates on development progress
- [https://twitter.com/mentalist420/status/928973858299768832]: TestNet progress announcement

## Unresolved Questions

- **Economic model finalization**: Inflation curve and total supply cap (50M–100M) not yet finalized; paper still in draft review as of 2017-12-02.
- **TestNet debugging timeline**: Multiple technical variables remain unresolved before public TestNet release; no firm date beyond "early December 2017."
- **Airdrop recipient criteria**: EFYT, WCT, and/or WAVES holders eligible for future airdrops, but distribution terms and dates announced "right before" the event.
- **Mainnet launch timeline**: No date specified; roadmap confirms Ergo will have its own blockchain, but migration path from EFYT→ERG and mainnet launch details pending.
- **Scalability mechanism details**: "1000^1000 tx/sec" claim stated but technical architecture to achieve it not explained in these logs.