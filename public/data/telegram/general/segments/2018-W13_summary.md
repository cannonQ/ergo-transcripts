# Ergo General Chat Summary — 2018-W13
**Period:** 2018-03-26 to 2018-04-06  
**Messages:** 139 | **Participants:** 18 | **Primary Voice:** @𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ (mentalist420)

---

## Key Topics Discussed

- **EFYT Token Emission & Supply**
  Total emission capped at 100M tokens over ~8 years. First-year emission rate defined post-Q&A (March 2018). Of initial 5M EFYT, ~3M burned, leaving ~1.97M circulating; current float ~600k with additional distributions planned to IOHK employees and general public.

- **Dual-Chain Architecture**
  Ergo planned to launch with two parallel chains: MoneyChain and DataChain with identical tech but different parameters. EFYT converts at 1:1 ratio to both chains (1 ErgoMoney + 1 ErgoData per EFYT).

- **Non-Outsourceability Protocol**
  Core mining incentive design to discourage pool participation and encourage solo mining. Protocol still in development; concept aims to minimize pool centralization while maintaining pool accessibility for low-resource miners. Complemented by mobile device validation rewards (digest mode, light node operation via ADProofs, but *not* mining eligibility).

- **GPU Mining & ASIC Resistance**
  Ergo uses Equihash algorithm (GPU-mineable, modified Zcash miner). Strategy against ASIC dominance: frequent algorithmic updates render ASIC development uneconomical. Contrasts with Monero's approach but avoids monthly algo changes; updates less frequent but sufficient to discourage ASIC ROI.

- **ErgoScript Language**
  Syntax borrowed from Scala and TypeScript. Features: high-order with first-class lambdas, call-by-value evaluation, static typing with local type inference, blocks as expressions, type constructors (Tuple, Array, Option). Sigma protocols enable zero-knowledge proofs without trusted setup.

- **Mainnet Timeline & TestNet Status**
  Clearer picture expected by end of Q2 2018 (or mid-Q3). TestNet v0.2.4 released 2018-04-05. Mining software not yet available; pools dependent on issue #218 resolution. Wallet functionality minimal in early TestNet (no .dat file equivalent yet, seed available via Swagger API).

---

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2483, 2018-03-28]: Ergo confirmed as GPU-based (Equihash), not ASIC-prone like Bitmain products.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2493, 2018-03-28]: Total supply definitively 100M tokens; earlier confusion resolved via GitHub PR #87cbf8e.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2498, 2018-03-30]: First-year supply concludes 1 year post-Mainnet launch.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2527, 2018-04-03]: ErgoScript language specification published with syntax & semantics details.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2567–2568, 2018-04-05]: TestNet v0.2.4 released.

- [@Terri, msg#2561, 2018-04-05]: **No ICO planned** for Ergo.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2620, 2018-04-06]: Mainnet launch pushed to **Q2/mid-Q3 2018** (not summer).

---

## Technical Q&A Worth Preserving

- **Q** (@Anton Bogdanovich, msg#2500): "For 'non-outsourceability' protocol, if single person owns multiple mining rigs, would it be possible to share work between them assuming they are all trusted?"  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2501): Protocol still in development and testing phase; concept aims to minimize pool aspect while keeping it technically viable for trusted setups.

- **Q** (@Natanael, msg#2492): "Why does Herb say total supply is 100M while Dmitry says 8M–20M?"  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2493): Total supply always 100M; confusion arose from undefined first-year *emission rate* (resolved post-Q&A; see GitHub PR).

- **Q** (@pietrod, msg#2513): "Explain dual-chain conversion: EFYT → MoneyChain + DataChain?"  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2513): 1 EFYT converts to 1 ErgoMoney + 1 ErgoData; both chains feature identical tech, different parameters, identical first-year emission.

- **Q** (@Unknown, msg#2480–2481): "Will Ergo prevent ASIC dominance like Monero does with frequent algo changes?"  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2483–2484, @hawky msg#2486): Ergo uses Equihash (GPU-mineable); ASIC development discouraged via infrequent (not monthly) algo updates + non-outsourceability protocol. ASICs remain hard to develop for rapidly-changing algos.

- **Q** (@Weetgeennaam123, msg#2584): "Can Ergo be mined with same algo as ETH?"  
  **A** (@Unknown, msg#2585): No; Ergo uses Equihash (modified Zcash miner), not Ethash.

- **Q** (@Сергей Иванов, msg#2625): "Does non-outsourceability intentionally make pool formation inefficient?"  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2627): Yes, main goal is mechanism discouraging pool participation; still in development.

- **Q** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2616): "Will mobile devices be rewarded for validating transactions via ADProofs?"  
  **A** (@Unknown, msg#2617, @𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ msg#2628–2630): Mobile reward incentives expected but in SPV mode (digest mode, light node); mobile mining itself unavailable.

---

## Links Shared

- [https://github.com/ergoplatform/ergo/commit/87cbf8ece12f0dc0d3a8cbdb6d730566f9813298](https://github.com/ergoplatform/ergo/commit/87cbf8ece12f0dc0d3a8cbdb6d730566f9813298): First-year emission rate specification PR.

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): EFYT circulating supply tracker (~600k current).

- [https://ergoplatform.org/qa_2018_02_06.html](https://ergoplatform.org/qa_2018_02_06.html): Q&A addressing token supply & dual-chain details.

- [https://github.com/ergoplatform/ergo/issues/218](https://github.com/ergoplatform/ergo/issues/218): Mining pool formation & non-outsourceability protocol issue (gates mining software availability & pool existence).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/src/test/scala/sigmastate/utxo/ErgoInterpreterSpecification.scala](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/src/test/scala/sigmastate/utxo/ErgoInterpreterSpecification.scala): Sigma state language examples.

- [https://github.com/ScorexFoundation/Scorex](https://github.com/ScorexFoundation/Scorex): Scorex blockchain framework (modular, compact).

- [https://ergoplatform.org/tech.html](https://ergoplatform.org/tech.html): Ergo whitepaper & technical papers.

- [https://github.com/ergoplatform/ergo/releases/tag/v0.2.4](https://github.com/ergoplatform/ergo/releases/tag/v0.2.4): TestNet v0.2.4 release (2018-04-05).

- [https://github.com/ergoplatform/ergo/wiki/Node-Configuration-File](https://github.com/ergoplatform/ergo/wiki/Node-Configuration-File): Node configuration documentation (wallet section, seed parameter).

- [https://github.com/ergoplatform/ergo/blob/master/papers/yellow/main.pdf](https://github.com/ergoplatform/ergo/blob/master/papers/yellow/main.pdf): Yellow paper (mining incentives, full/pruned node rewards).

- [https://twitter.com/ergoplatformorg/status/978724354769989632](https://twitter.com/ergoplatformorg/status/978724354769989632): Official Ergo Twitter announcement (2018-03-27).

- [https://twitter.com/ergoplatformorg/status/979815733529063427](https://twitter.com/ergoplatformorg/status/979815733529063427): First-year supply & emission details (2018-03-30).

- [https://twitter.com/chepurnoy/status/973619791738167296](https://twitter.com/chepurnoy/status/973619791738167296): Contribution rewards announcement.

- [https://twitter.com/chepurnoy/status/961595518588776448](https://twitter.com/chepurnoy/status/961595518588776448): Contribution bounties info.

---

## Unresolved Questions

- **Mining software availability & pool viability**: Depends on GitHub issue #218 (non-outsourceability protocol finalization). Timeline unclear; mentioned as blocking factor but not yet resolved.

- **Mobile device reward mechanism**: Confirmed as in-scope but specifics not finalized (ADProofs validation model, incentive structure, integration timeline all TBD).

- **Wallet implementation in TestNet**: Early stage; no wallet.dat equivalent yet. Seed management via Swagger API noted as returning "rubbish" — usability issues flagged but not resolved.

- **Optimal GPU hardware recommendation**: @𝖒𝖊𝖓𝖙𝖆𝖒𝖉𝖓𝖎𝖘𝖙կշօ advised using existing hardware or second-hand GTX cards; no definitive optimization model published.

- **Exact Mainnet launch date**: Roadmap states "end of Q2 or mid-Q3 2018"; precision pending technical milestones.

- **Excess 1.4M EFYT distribution mechanism**: Identified as outstanding but no allocation plan disclosed (msg#2515 raised; no response recorded).