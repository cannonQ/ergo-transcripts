# Ergo Developer Chat Summary — 2022-W39
**Period:** 2022-09-26 to 2022-10-02 | **Messages:** 54 | **Participants:** 12

---

## Key Topics Discussed

- **EIP-37 Hard Fork Activation & Voting:** Rapid deployment of a difficulty adjustment mechanism to address poor user experience caused by extreme block time variance. Voting window opened at block height 844,800 with a 90%+ supermajority threshold (232 of 256 votes). Shortest possible activation ~10 days at current hashrate. [@kushti, multiple msgs, 2022-09-27 to 2022-09-29]

- **Protocol Version Incompatibility Constraints:** Versions 1.0x and 1.03 have different block candidate generation logic but identical verification protocols, allowing nodes to vote independently without compatibility breaks. Incrementing protocol version number cannot happen until v5.0 due to contract interpreter implications. [@kushti, msgs#7093–7104, 2022-09-29]

- **Time-Based Difficulty Reset Security:** Options allowing difficulty to drop significantly after elapsed time introduce additional trust assumptions in NTP time providers. Reference client behavior (gravity well fallback) creates attack surface via NTP hijacking. [@kushti, msgs#7061, 7084, 2022-09-28 to 2022-09-29]

- **AppKit & Address Handling:** Error handling around `Address.create()` when using AppKit; reference to Scala language friction for C-family programmers. [@MrStahlfelge, Capt. Nemo, Aberg, msgs#6924–6944, 2022-09-26]

- **Community Sentiment on EIP-37 Urgency:** Debate over whether rapid EIP-37 deployment bypassed proper governance. User experience degradation (multi-minute block times) creates churn risk during low-profitability environment. Counterargument: price improvements via economic intervention could stabilize mining equilibrium faster than block time alone. [@Flying Pig™, MHS_SAM, msgs#7122–7130, 2022-09-29]

---

## Important Decisions or Announcements

- [@kushti, msg#6943, 2022-09-27]: **EIP-37 Activation Timeline** — With current hashrate, shortest activation window is ~10 days. All exchange nodes must upgrade or face fork-out.

- [@Glasgow, msgs#7013–7014, 2022-09-28]: **Voting Parameters Confirmed** — Voting starts at block height 844,800; 232 votes out of 256 required to activate.

- [@Armeanio, msg#6992, 2022-09-27]: **Hard Fork Infrastructure Coordination** — Published tracking spreadsheet for coordinating exchange and infrastructure upgrades during EIP-37 deployment.

- [@kushti, msg#7155, 2022-10-01]: **Testnet Reset** — testnet nodes reset to paiNet; testnet explorer reset forthcoming.

- [@Jennie D, msg#7048, 2022-09-28]: **ErgoHack Registration** — Reminder to share news about upcoming ErgoHack; registration deadline Sunday.

---

## Technical Q&A Worth Preserving

- **Q** (@MrStahlfelge, msg#7090): Why is version check insufficient for detecting EIP-37 activation?
  
  **A** (@MrStahlfelge, msg#7092): Version check only works for reference client. Alternative client implementations would fail the check, requiring a more robust detection mechanism.

- **Q** (@MrStahlfelge, msg#7095–7096): How can nodes determine if EIP-37 activation occurred? Is protocol version incremented?
  
  **A** (@kushti, msgs#7097, 7099): No—protocol version increment is reserved for v5.0. Incrementing now would trigger contract interpreter changes. Block candidate generation logic differs, but verification protocol remains identical.

- **Q** (@Pulsarz, msg#7101): Is there incompatibility between nodes running v1.00/1.01 vs v1.03 due to voting logic differences?
  
  **A** (@kushti, msgs#7102–7104): No incompatibility. Differences exist only in block candidate generation, not verification protocol. All nodes verify blocks identically.

- **Q** (@MHS_SAM, msg#7119–7120): Can miners abstain from voting on EIP-37?
  
  **A** (@MHS_SAM, msg#7120): No abstain mechanism. Miners vote yes or no by mining blocks with vote bits set; abstention occurs by not mining at all.

- **Q** (@MrStahlfelge, msg#7089): Should EIP-37 be added to v1.03 instead of waiting?
  
  **A** (@MrStahlfelge, msg#7089): "Better to 103 than never" — suggesting conditional backport.

---

## Links Shared

- [GitHub Fleet ErgoAddress Implementation](https://github.com/capt-nemo429/fleet/blob/master/src/models/ergoAddress.ts#L183): Capt. Nemo's reference for Address handling in Fleet SDK. [@Capt. Nemo, msg#6929, 2022-09-26]

- [EIP-37 Hard Fork Infrastructure Tracking](https://docs.google.com/spreadsheets/d/1bsq36vUh3j_I4Uy4s1oSFMWKWxB3gW3YvcsFFFXIvM8/edit#gid=0): Community coordination spreadsheet for exchange and node upgrades. [@Armeanio, msg#6992, 2022-09-27]

- [First EIP-37 Vote Block](https://explorer.ergoplatform.com/en/blocks/70a430bda72645a7ced33d5e6eb1a340c81f87451ba2dbbdebaf463c7b2283df): Block #844800+ showing first vote bits for EIP-37. [@kushti, msg#7108, 2022-09-29]

- [Sigmanauts Voting Dashboard](https://votes.sigmaspace.io/): Real-time EIP-37 voting progress. [@Flying Pig™, msg#7170, 2022-10-02]

- [Testnet Node Info Endpoints](http://213.239.193.208:9052/info and http://195.201.82.115:9052/info): paiNet testnet node status after reset. [@kushti, msg#7155, 2022-10-01]

- [GitHub Issue #1857](https://github.com/ergoplatform/ergo/issues/1857): Flagged for community review. [@Aberg, msg#7181, 2022-10-02]

- [ErgoHack Registration](https://twitter.com/ergomergoadargo/status/1574262584806494208): Tweet with registration link; deadline mentioned as "Sunday" from 2022-09-28 context. [@Jennie D, msg#7048, 2022-09-28]

---

## Unresolved Questions

- **UTXO JSON Onchain Commitment vs. Full Inclusion** (@kushti, msg#6988): 4 KB per-UTXO limit raises question: why store full JSON onchain rather than hash commitment? No resolution recorded.

- **NTP Security Hardening** (@kushti, msgs#7061, 7084): Reference client gravity well allows zero-work blocks after 2+ hours via NTP hijacking. No concrete mitigation discussed; noted as requiring investigation.

- **EIP-37 Governance Precedent** (Flying Pig™ debate thread, msgs#7122–7130): Did rapid deployment bypass proper community deliberation? Counterargument invoked price stabilization efforts, but no formal governance adjustment decided.

- **GitHub Issue #1857 Status** (@Aberg, msg#7181, 2022-10-02): Flagged for community review but context/resolution not provided in chat segment.