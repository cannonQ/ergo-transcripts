---
title: "Ergo General Chat — 2018-W40"
date_start: "2018-10-01"
date_end: "2018-10-07"
type: telegram_weekly
channel: general
week: "2018-W40"
source: telegram
message_count: 62
categories: [governance, technical, mining, ecosystem, marketing]
key_terms: [mainnet, release date, Q1 2019, testnet2, scheduling, recursive calls, contract references, standard library, smart contracts, centralization, core developers, governance decentralization, community control, hardforks, ASIC resistant, PoW, pool resistance, light nodes, miners centralization, Waves pair]
---
# Ergo General Chat — 2018-W40 Summary

## Key Topics Discussed

- **MainNet Release Timeline & Delays**: Discussion of MainNet postponement from 2018 to Q1 2019, with emphasis that testing and debugging phases are unpredictable. TestNet v2 scheduled for November 2018 as a critical milestone that closely resembles the final MainNet environment.

- **Development Decentralization & Governance**: Exploration of how Ergo intends to prevent core development centralization through treasury systems, ASIC-resistant Autolykos PoW, and eventual community governance handoff within a year of MainNet launch—contrasted against other blockchains (Ethereum, Cardano, Waves) that pushed hardforks post-release.

- **Smart Contract Tooling & Composition**: Question raised about developer ergonomics when working with recursive ErgoScript calls and inter-contract dependencies at scale, with suggestion of a "standard library" model for contract imports.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4614, 2018-10-08]: TestNet v2 (closely resembling MainNet) scheduled for November 2018.

- [@𝖒𝖊𝖓𝖆𝖑𝖎𝖘𝖙կշօ, msg#4617, 2018-10-08]: Exchange listings will not be pursued until after MainNet launch.

- [@Dmitry, msg#4629, 2018-10-09]: Commitment to community governance handoff—"After the first year of mainnet community should be able to fire me, Alex and the whole dev team."

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Given recursive ErgoScript calls and need to reference numerous contracts in large projects, what tooling is planned to make composition seamless? Is a "standard library" model under consideration?
  **A** (implicit/unresolved): No direct answer provided in this segment; topic raised but not addressed by core team.

- **Q** (@Kaichao | Keyring, msg#4631): Is there a plan to switch to PoS after a few years?
  **A** (@Kim, msg#4632): "I dont think so or at least I didnt read anything about it" — no PoS transition documented as of this date.

- **Q** (@Unknown, msg#4620): What about centralization?
  **A** (@Unknown, msg#4623-624): Ergo's treasury system prevents governance and development centralization; ASIC and pool-resistant Autolykos prevents miner/pool centralization; light nodes prevent service centralization.

- **Q** (@Unknown, msg#4621): Are there plans to hand off governance to the community within a year or two after MainNet release?
  **A** (@Dmitry, msg#4629): Yes, explicit commitment to community-driven governance within one year of MainNet.

## Links Shared

- [https://twitter.com/1nst1tute/status/1046689953919504384]: Shared by @Unknown (context not provided in chat).

- [https://twitter.com/ergoplatformorg/status/1046870135787720704]: Official Ergo Platform Twitter announcement.

- [https://bitcointalk.org/index.php?topic=2076657.msg46453638#msg46453638]: BitcoinTalk discussion link.

- [https://twitter.com/kanzure/status/1048407690072875008]: Scaling Bitcoin-related discussion.

- [https://twitter.com/ScalingBitcoin/status/1048403651318824962]: Scaling Bitcoin event information.

- [https://tokyo2018.scalingbitcoin.org/presentations]: Scaling Bitcoin Tokyo 2018 presentations.

- [https://twitter.com/ergoplatformorg/status/1048470929922318337]: Official Ergo announcement.

- [https://github.com/ergoplatform/ergo/commits/master?after=afe12798c6a21fa62dcc37f01676a272538d172e+2750]: Ergo repository commit history, cited to demonstrate first commit was 2017-06-13, contradicting "3-year wait" perception.

- [https://medium.com/@EthAdvisor/how-verus-solved-nothing-at-stake-and-weak-subjectivity-proof-of-stake-problems-b4dd6a85086e]: VerusCoin's claimed PoS solution (skeptically received).

- [https://twitter.com/chbpap/status/1051506686173868033]: Link shared by @Unknown (context not provided).

## Unresolved Questions

- **Smart Contract Tooling**: No concrete answer provided on whether a standard library or import mechanism for ErgoScript contracts is planned or under design.

- **Exchange Listings**: Deferred to post-MainNet; specific exchanges or timeline not discussed.

- **PoS Transition**: Dismissed as not planned, but no formal design document or technical rationale provided.

- **Governance Implementation Details**: Community handoff committed to, but mechanism and delegation model not specified in this segment.

---

**Context**: This week's chat was primarily early-stage project updates and roadmap clarification, with low-volume participation (7 unique contributors, 62 messages). Emphasis on MainNet readiness and decentralization principles reflects pre-launch positioning.