# Ergo General Chat — 2018-W23 Summary

## Key Topics Discussed

- **Equihash Security & ZenCash Attack**: Discussion of private block injection vulnerability (38 blocks) that allowed scamming exchanges. Team acknowledged awareness and commitment to staying ahead of similar attack vectors. [@Unknown, msg#3095-3101]

- **Token Supply & Mainnet Migration**: Clarification that EFYT (Ergo First Year Token) on Waves has a max supply of ~2M (5M initial minus 3M burned), with swap ratio of 1 EFYT = 1 ERG + 1 ERGOdata at mainnet launch. Circulating supply at launch will be 0 (PoW mining only), with 100M total supply over 8 years. [@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#3109-3297]

- **Early Inflation Concerns**: Community raised concerns about steep early-stage inflation curve and lack of incentives for early adopters holding EFYT. Suggestions made to extend mining timeline and reduce block rewards proportionally. [@Unknown/@C S, msg#3177-3226]

- **TestNet Participation & Phases**: TestNet1 (~60% of final environment) running for ~90 days; TestNet2 (95-100% final environment) to follow before mainnet launch. Anyone can participate; bug reports may earn rewards. [@𝖒𝖊𝖓𝖷𝖆𝖎𝖘𝖙կշօ, msg#3261-3263]

- **Mining & ASIC Resistance**: Ergo will support GPU mining and be ASIC-resistant. No specific timeline given beyond "clearer picture after TestNet1 completion (around 90 days)". [@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#3248-3255]

- **Node Operation & Accessibility**: Discussion about running full nodes (hardware requirements, Raspberry Pi viability, incentives) left open for Q&A session. GitHub instructions available but noted as needing refinement for user-friendliness. [@Unknown, msg#3232-3267]

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3230, 2018-06-07]: **Q&A Session Scheduled** — Live on Telegram, June 14th at 15:00 Moscow time. Questions being collected from community; answers to be provided before and during session.

- [@Dmitry, msg#3175, 2018-06-07]: **Ergo Explorer Release Imminent** — Official explorer to be released "quite soon"; announcement pending. (Replaces volunteer-run node checker at ergo.dsalab.de)

- [@𝖒𝖊𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ, msg#3227, 2018-06-07]: **Burn Clarification** — Total of 5 million EFYT were burned (not 3M as stated in earlier confusion).

## Technical Q&A Worth Preserving

- **Q** (@Unknown): What is the circulating supply at mainnet launch?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ): Circulating supply will be 0 at launch, similar to Bitcoin. All coins mined according to published emission curve. Founders receive 10% of first-year mined coins (~1.971M) for foundation development. [msg#3109, 3275, 3284, 3290]

- **Q** (@Unknown): Will EFYT holders receive swap to mainnet coins?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ): Yes, 1:2 swap — 1 EFYT = 1 ERG + 1 ERGOdata. Swap occurs during first year of mainnet operation. [msg#3290]

- **Q** (@Unknown): What exactly is tested on TestNet without consensus?
  **A** (@𝖒𝖊𝖊𝖙𝖆𝖎𝖘𝖙կշօ): TestNet1 replicates ~60% of final environment with multiple nodes/miners participating. Aspects pushed to limits; adjustments/upgrades made accordingly. TestNet2 (95-100%) is final phase before mainnet. [msg#3261]

- **Q** (@Unknown): Will coins mined on testnet convert to real coins?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ): No, but significant bug discoveries can be rewarded. [msg#3258]

- **Q** (@Unknown): Can anyone participate in testnet without technical background?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖙կշօ): Yes, more participants welcome. GitHub instructions available; refinement to improve user-friendliness encouraged. [msg#3263, 3267]

- **Q** (@Unknown): Will Ergo be ASIC-resistant or ASIC-friendly?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖎𝖘𝖞𝖈կշօ): ASIC-resistant as far as aware. (Flagged for confirmation during Q&A.) [msg#3250-3251]

## Links Shared

- [https://www.ergoplatform.org/news_list.html]: Previous Q&A sessions and announcements
- [https://www.ergoplatform.org/qa_2018_02_06.html]: Detailed Q&A on token supply and emission
- [https://ergoplatform.org/news_emission_curve.html]: Emission curve specification (8-year timeline, 100M max supply)
- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT asset data on Waves blockchain
- [https://coinranking.com/coin/ergo-efyt]: EFYT pricing and supply data (alternate to CMC)
- [https://twitter.com/ergoplatformorg]: Official Twitter account
- [https://t.co/s8n8VEgOBD]: BTCtalk thread
- [https://youtu.be/MWJTC55tk-s]: ZenCash Equihash vulnerability discussion (timestamp: 10:20)
- [https://twitter.com/ergoplatformorg/status/1002575649431785472]: TestNet participation announcement
- [https://github.com/ergoplatform]: Official GitHub repository (explorer & node instructions)
- [https://twitter.com/ergoplatformorg/status/1005131958240927747]: Announcement thread
- [https://twitter.com/DmitryMeshkov/status/1004677384627478528]: Dmitry's updates

## Unresolved Questions

- **ASIC Resistance Confirmation**: Community requested formal confirmation during Q&A that Ergo will remain ASIC-resistant. [@Unknown, msg#3251]

- **Full Node Incentives & Requirements**: What will incentivize running a full node? Can nodes run on Raspberry Pi? Hardware/bandwidth requirements? [@Unknown, msg#3232]

- **Early Adopter Incentives**: Should EFYT holders receive additional bonuses or extended mining timelines beyond 1:2 swap? Community consensus that current incentives insufficient. [@C S/@Unknown, msg#3225-3226]

- **CMC Data Discrepancy**: Supply figures on CMC appeared incorrect (397k vs actual ~691k circulating); flagged for follow-up with CMC but unresolved. [@Unknown, msg#3126-3134]

- **Developer Address Transparency**: Identity and allocation rationale for addresses #3 and #4 (received 100k+ coins from dev team, actively selling). Deferred to Q&A. [@Unknown, msg#3155-3157]

- **Z9 Antminer Position**: Formal team stance on Z9 ASIC miner compatibility/threat not addressed during chat. [@Unknown, msg#3223]

---

**Chat Statistics**: 196 messages, 8 participants; activity concentrated on 2018-06-06 to 2018-06-08. Primary focus: token mechanics, supply concerns, and testnet readiness. Tone: constructive; community raised substantive concerns about tokenomics and early-stage inflation that went partially unaddressed pending June 14th Q&A.