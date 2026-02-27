# Ergo General Chat — 2018-W52
## Summary

This week (2018-12-25 to 2019-01-06) was low-activity with 54 messages across 5 participants. Discussion centered on pre-mainnet mechanics (bounties, airdrops, storage rent/demurrage), timeline expectations, and recruitment of a physics-background developer interested in Scorex.

---

## Key Topics Discussed

- **Storage rent / demurrage mechanism**: Users asked clarification on the 4-year coin dormancy period and how it prevents deflation. Answer: coins inactive for 4 years can be recirculated; simple UTXO movement resets the timer. [@Unknown, @Dmitry, msg#5497–5505]

- **Mainnet launch timeline**: Community speculated end-January 2019; core developer Dmitry corrected to March–May 2019 estimate pending testing and security audit. [@Unknown msg#5493, @Dmitry msg#5494]

- **EFYT → ERG swap mechanics**: Swap depends on ERG mining availability; expected Q2 2019 onward (late 2019–early 2020). Details not yet specified. [@Mu 🚀, @Unknown, msg#5512–5516]

- **Testnet participation and bounties**: Bounty program clarified as limited to security bug findings on TestNet; no formal "promoter" or "translator" bounties planned at time of discussion. [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, @Unknown, msg#5475–5481]

- **Developer onboarding and Scorex learning**: New contributor (Gozzy) with physics background expressed interest in learning Scorex framework and Scala; encouraged to join TestNet and connect with core team. [@Gozzy, @𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5537–5548]

---

## Important Decisions or Announcements

- [@Dmitry, msg#5494, 2018-12-30T02:41]: Mainnet timeline revised to **March (optimistic) to May (less optimistic)** — end-January prediction deemed "quite unrealistic" due to testing and security audit requirements.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5543–5547, 2019-01-06]: **Developer repository structure disclosed**: Ergo split across GitHub orgs with defined owner groups:
  - `ergoplatform/ergo` — kushti, DMeshkov, oskin1
  - `ScorexFoundation/sigmastate-interpreter` — ergomorphic, greenhat
  - `ScorexFoundation/scorex-util` — VictorMikheev
  - `ScorexFoundation/Scorex` — all contributors

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#5497): How does storage rent (demurrage) affect long-term hodlers? If coins inactive 4 years, do they vanish?
  
  **A** (@Unknown, msg#5498; @Dmitry, msg#5504–5505): Dormant coins recirculate after 4 years, preventing deflation like Bitcoin. Moving coins to a new wallet resets the countdown. 4-year period chosen as balance between user-friendliness (time to perform ≥1 tx) and system health relative to 8-year emission schedule.

- **Q** (@Mu 🚀, msg#5510–5515): What is total ERG supply? When can EFYT→ERG swap occur? Price implications?
  
  **A** (@Unknown, msg#5510, msg#5514, msg#5516): Total supply 100M ERG. Swap requires ERG mining to be live, estimated Q2 2019 (late 2019–early 2020). Swap mechanics and price parity not yet specified.

- **Q** (@Gozzy, msg#5542): Background and interest in Scorex/Scala learning path?
  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5543–5547): Encouraged to run TestNet, connect with DMeshkov for collaboration. Scala identified as high long-term value for blockchain core development. No specific reading materials recommended in thread.

---

## Links Shared

- [https://www.ergoplatform.org/qa_2018_02_06.html](https://www.ergoplatform.org/qa_2018_02_06.html): Q&A #3 containing last public mention of airdrop plans [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5484]

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): EFYT token details [@Unknown, msg#5510]

- [https://ergoplatform.org/news_emission_curve.html](https://ergoplatform.org/news_emission_curve.html): Ergo supply/emission curve [@Unknown, msg#5510]

- [https://github.com/ergoplatform/ergo/releases/tag/v1.8.1](https://github.com/ergoplatform/ergo/releases/tag/v1.8.1): TestNet v1.8.1 release; v1.9 announced as imminent [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5543–5544]

- [https://github.com/ergoplatform/ergo](https://github.com/ergoplatform/ergo), [https://github.com/ScorexFoundation/sigmastate-interpreter](https://github.com/ScorexFoundation/sigmastate-interpreter), [https://github.com/ScorexFoundation/scorex-util](https://github.com/ScorexFoundation/scorex-util), [https://github.com/ScorexFoundation/Scorex](https://github.com/ScorexFoundation/Scorex): Core development repositories [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5547]

---

## Unresolved Questions

- **Airdrop mechanics**: Currency (EFYT vs. ERG), distribution scope, and timing remain unspecified as of week end. [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5487]

- **Bounty program scope**: Whether translator or other community role bounties will be added remains TBD. [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5481]

- **EFYT→ERG swap terms**: Price parity, exact timing window, and mechanics deferred pending post-mining assessment. [@Unknown, msg#5516]

- **Scala learning resources**: No recommended materials provided in discussion; new developer (Gozzy) to explore independently.