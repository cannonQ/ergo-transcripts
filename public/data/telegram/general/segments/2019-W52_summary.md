---
title: "Ergo General Chat — 2019-W52"
date_start: "2019-12-23"
date_end: "2019-12-29"
type: telegram_weekly
channel: general
week: "2019-W52"
source: telegram
message_count: 80
categories: [technical, ecosystem, community, defi, wallet]
key_terms: [api-key, secret, installer, automation, ERG, ERGO, Waves exchange, token symbol, mobile app, medium of exchange, store of value, barter, free markets, PoW cryptocurrencies, Scala, ErgoTree, ErgoScript, sigmastate-interpreter, minimal state representation, atomic swaps]
---
# Ergo General Chat — 2019-W52 Summary
**Period:** 2019-12-23 to 2019-12-28 | **Messages:** 80 | **Participants:** 13

---

## Key Topics Discussed

- **API Key Generation:** Discussion of whether to pass user secrets directly or auto-generate API keys from hashed secrets during installer setup. [@MHS_SAM, msgs #15721–#15731, 2019-12-23]

- **Token Symbol Confusion on Waves Exchange:** Query about duplicate ERG/ERGO symbols appearing on Waves mobile app; clarification needed on which represents Ergo Platform. [@scalahub, msgs #15755–#15762, 2019-12-25]

- **Cross-Chain Atomic Swaps:** Discussion of Komodo HyperDEX capabilities and applicability to Ergo. Noted that Ergo has atomic exchange built into core for assets, potentially simpler than older blockchain generations. [@Unknown et al., msgs #15873–#15885, 2019-12-27]

- **Node Stability Issues:** Report of Ubuntu VM node crashes after sustained operation with logs provided for debugging. [@pietrod, msgs #15866–#15867, 2019-12-27]

- **Wallet Development:** Coinbarn wallet desktop version released; browser extension pending review. Mobile app development dependent on demand. [@Dmitry, msgs #15928–#15930, 2019-12-28]

---

## Important Announcements

- [@Unknown, msg#15742, 2019-12-23]: Ergo Platform Twitter announcement — https://twitter.com/ergoplatformorg/status/1209173611124330501

- [@Unknown, msg#15815, 2019-12-26]: kushti tweet on economic models — https://twitter.com/chepurnoy/status/1210141831197007872

- [@Dmitry, msg#15928, 2019-12-28]: Coinbarn wallet desktop version available; browser extension in review stage — https://twitter.com/coinbarn/status/1211026427686064133

- [@Unknown, msg#15923, 2019-12-28]: New exchange outreach initiated; exchange agreed to review Ergo for listing

---

## Technical Q&A Worth Preserving

**Q** (@蓝天): Is Ergo written 100% in Scala?
**A** (@Unknown): Implied affirmative via reference to Scala GitHub repo — https://github.com/ScorexFoundation/sigmastate-interpreter/

**Q** (@Unknown): How do atomic swaps work in Ergo vs. older blockchains?
**A** (@Unknown, msg#15878): "Ergo has atomic exchange built in the core for assets. A standard atomic swap is also more simple in Ergo than in older generations of blockchains, additionally the design with no bloat. Matching should be off-chain; different protocols could be built on top."

**Q** (@Unknown): What is slowing HyperDEX performance — confirmations or order matching?
**A** (@Charles Gonzalez, msg#15882): "Order matching is instant if there are orders available. The slow part is the block confirmations."

**Q** (@pietrod): Why does the Ubuntu node crash after sustained operation?
**A** (@pietrod): Unresolved — logs posted to https://termbin.com/ieft pending investigation.

---

## Links Shared

- https://twitter.com/ergoplatformorg/status/1209173611124330501 — Ergo Platform announcement (2019-12-23)
- https://github.com/ScorexFoundation/sigmastate-interpreter/issues/629 — GitHub issue reference (2019-12-23)
- https://twitter.com/chepurnoy/status/1210141831197007872 — kushti economic models discussion (2019-12-26)
- http://chepurnoy.org/blog/2016/03/cryptocurrency-minimal-state-representation-boxes-vs-accounts/ — Boxes vs. accounts design philosophy (2019-12-27)
- https://github.com/ScorexFoundation/sigmastate-interpreter/ — SigmaState interpreter repository (2019-12-27)
- https://explorer.ergoplatform.com/en/charts/hash-rate — Ergo hashrate chart (2019-12-27)
- https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/sigmastate/src/test/scala/sigmastate/utxo/examples/AtomicSwapExampleSpecification.scala — Atomic swap example code (2019-12-27)
- https://termbin.com/ieft — Node crash logs (2019-12-27)
- https://twitter.com/coinbarn/status/1211026427686064133 — Coinbarn wallet desktop release (2019-12-28)

---

## Unresolved Questions

- **Waves Exchange Token Symbols:** Need confirmation of which ERG/ERGO symbol on Waves corresponds to Ergo Platform. [@scalahub, msgs #15755–#15762]
- **Node Stability:** Ubuntu VM crashes after sustained operation; root cause investigation pending. [@pietrod, msgs #15866–#15867]
- **Coinbarn Mobile Support:** Whether mobile app development will proceed dependent on community demand. [@Dmitry, msg#15930]
- **Exchange Listing:** Timeline and feasibility of new exchange adding Ergo listing unclear.

---

**Notes:**
- Week contained significant price speculation and trading discussion; filtered per guidelines.
- Most technical content centered on wallet integration, atomic swaps (conceptual), and node operations rather than protocol development.
- Community sentiment mixed regarding market conditions and exchange dilution.