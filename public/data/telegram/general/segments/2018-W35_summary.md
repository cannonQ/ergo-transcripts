---
title: "Ergo General Chat — 2018-W35"
date_start: "2018-08-27"
date_end: "2018-09-02"
type: telegram_weekly
channel: general
week: "2018-W35"
source: telegram
message_count: 85
categories: [technical, ecosystem, marketing, wallet, community]
key_terms: [mainnet, testnet, launch, 2018, development, EFYT, token swap, ergo, waves platform, emission curve, ergoscript, compiler, static type safety, zero knowledge, cost estimation, clutch ico, rating, voting, community engagement, waves token]
---
# Ergo General Chat — 2018-W35 Summary
**Period:** 2018-08-27 to 2018-09-22  
**Active Participants:** 8  
**Message Count:** 85

---

## Key Topics Discussed

- **Ergo First Year Token (EFYT) and Mainnet Swap**: Community members inquired about token mechanics. $EFYT is a Waves-based token that will swap 1:1 to a combination of ERGOcash + ERGOdata upon Ergo mainnet launch. The swap is only possible after mainnet deployment and new coins are minted.

- **Mainnet Launch Timeline**: Multiple inquiries about mainnet launch date. Team indicated progress on schedule for TestNet with target of launching mainnet in 2018, though exact timeline remained conditional on TestNet stability and upgrades.

- **ErgoScript Compiler Capabilities**: Detailed technical breakdown of ErgoScript's compile-time and runtime safety guarantees, including static type safety, zero-knowledge operation validation, termination guarantees, execution cost limits, and memory consumption bounds.

- **Formal Verification Roadmap**: Community raised interest in formal verification tooling (similar to Coq, Agda, Lean, Liquid Haskell approaches). Team acknowledged value but deferred to long-term roadmap; noted ErgoScript's non-recursive design already provides termination guarantees.

---

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4382, 2018-09-14]: "The progress so far indicates that launch can happen this year, however as each upgrade is made to TestNet we get closer to the target"

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4355, 2018-09-10]: Community asked to rate and review Ergo on Clutch.co platform to raise project visibility.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4413, 2018-09-18]: Clarified that Waves tokens will be swapped for ERG coins after mainnet launch (not "cash and data" subdivision as initially queried).

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#4423): "Any plans thus far to eventually incorporate tooling to support formal verification of smart contracts? I imagine it'd probably be easier than most languages due to the lack of looping which really narrows down what can be done."
  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4447): [Detailed technical breakdown provided] ErgoScript compiler enforces: (1) static type safety, (2) zero-knowledge operation validation, (3) termination guarantee via non-recursive/non-looping design, (4) execution cost limit guarantees ("gas-free" contracts), (5) memory consumption bounds. Developer response noted value of formal verification for long-term roadmap and mentioned IOHK's work on refinement types for Plutus as reference.

- **Q** (@0xSeb, msg#4410): "Can you explain what is: 1 $EFYT = 1 ERGOcash + 1 ERGOdata or where can i find an explanation about this?"
  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4413): Waves token will be swapped for ERG coins after launch. (Note: The "cash and data" subdivision was later clarified to be token nomenclature under development, pending yellow paper specification.)

- **Q** (@0xSeb, msg#4407): "May i know how many tokens you will generate in total?"
  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4408): Emission curve details available at https://www.ergoplatform.org/news_emission_curve.html

---

## Links Shared

- [https://bitcointalk.org/index.php?topic=2076657.msg44753965#msg44753965]: BitcoinTalk thread for tracking Ergo progress between releases
- [https://www.ergoplatform.org/news_emission_curve.html]: Emission curve documentation
- [https://github.com/ergoplatform/ergo/tree/master/papers/yellow]: Yellow paper (draft specification for ERGOcash and ERGOdata use cases)
- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf]: Updated TestNet configuration (requires resync from scratch)
- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: Official EFYT (Ergo First Year Token) asset on Waves
- [https://t.me/ergoplatform/3039]: Telegram announcement regarding Waves platform choice
- [https://t.me/ergoplatform/4406]: Official EFYT token clarification post

---

## Unresolved Questions

- **Formal Verification Tooling**: Community interest expressed but no concrete roadmap committed. Team deferred to long-term planning.
- **ERGOcash vs ERGOdata Use Cases**: Yellow paper listed as draft; specific use cases "will be defined shortly" but remained unspecified at week end (msg#4416).
- **Exact Mainnet Launch Date**: Timeline remained conditional on TestNet progress; target was 2018 but no firm date provided.

---

## Summary Context

This week was primarily dominated by **token swap mechanics clarification** and **early formal verification discussions**. Activity was moderate with mostly community members asking foundational questions about the upcoming mainnet launch and token economics. The team (represented primarily by 𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ) provided clear technical responses on ErgoScript capabilities but deferred specification details to yellow paper and longer-term roadmap items. No major protocol decisions or breaking changes were announced.