# Ergo General Chat — 2018-W15 Summary
**Period:** 2018-04-09 to 2018-04-22  
**Participants:** 10  
**Messages analyzed:** 63

---

## Key Topics Discussed

- **Ergo Proof of Work Mining**: Clarification that Ergo will use proof of work and be mineable with GPUs, addressing user questions about masternodes and mining profitability versus buying.

- **ErgoScript Smart Contracts**: Early documentation requests and capability questions about smart contract state management. Core limitation identified: contract data persistence (OOP-style memory) not yet implemented.

- **Tauchain Comparison**: Discussion of non-Turing-complete language design in competing Tauchain project. Ergo's development maturity highlighted (2000+ commits across 12+ repositories vs. 71 commits in Tauchain's single repo).

- **Pre-mine Model**: Community discussion of Ergo's pre-mine, with links to GitHub repositories and project QA materials for new members.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#2675): Is there any kind of documentation on Ergo smart contract capabilities?
  **A** (@Alex Slesarenko, msg#2676): Language specification available at https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/docs/LangSpec.md

- **Q** (@Unknown, msg#2677): Can contracts save data in its memory, kind of OOP style? (probably like Ethereum, on blockchain)
  **A** (@Alex Slesarenko, msg#2678): Not yet :)

- **Q** (@Ilya Cherevkov, msg#2727-2728): Questions about problem statements in hackathon project slide 2 regarding "private information at entrance" and "anonymous employee messages"
  **A** (@Unknown, msg#2729, 2018-04-22): They used Sigma language script to open gates, providing privacy features by design so nobody knows who opened gates; this won't be known after mainnet launch.

---

## Links Shared

- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/docs/LangSpec.md]: ErgoScript language specification
- [https://www.ergoplatform.org/qa_2018_02_06.html]: Project overview and QA document
- [https://github.com/ergoplatform]: Main Ergo platform GitHub organization
- [https://drive.google.com/drive/folders/1X0tfeurmITQVaUjJXr_ANJvDifXWUH9j]: Hackathon materials and winning project slides (msg#2721)
- [https://twitter.com/ergoplatformorg/status/983270152069316609]: Twitter announcement (msg#2646)
- [https://twitter.com/habrahabr/status/983962712236584960]: Habr coverage link (msg#2655)
- [https://twitter.com/ergoplatformorg/status/984131274595078145]: Hackathon-related announcement (msg#2658, msg#2718)
- [https://github.com/IDNI/tau/blob/master/README.md]: Tauchain non-Turing-complete language project (msg#2662)

---

## Unresolved Questions

- **Contract State Persistence**: Whether ErgoScript will eventually support persistent data storage similar to Ethereum's OOP-style memory model (flagged "Not yet" in msg#2678).
- **Price Volatility Trajectory**: Discussion of whether ERG could experience extreme price collapse post-mainnet (Zcash example of $2400 → $50 cited), concluded as low-probability but not formally addressed.
- **Fee Market Implementation**: Fee estimation API mentioned as existing but untested/unused by applications in later ecosystem context (not fully explored in this week).

---

## Notes

- Week consisted largely of community onboarding, documentation requests, and price/investment speculation.
- No major roadmap changes, releases, or governance decisions announced.
- Hackathon results referenced but details require external document review (Google Drive link).
- Early-stage testnet period; mainnet expectations present but timeline not discussed.