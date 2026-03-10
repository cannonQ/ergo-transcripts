---
title: "Ergo Developer Chat — 2022-W52"
date_start: "2022-12-26"
date_end: "2023-01-01"
type: telegram_weekly
channel: developer
week: "2022-W52"
source: telegram
message_count: 50
categories: [technical, wallet, defi, ecosystem, governance]
key_terms: [transaction, script verification, data inputs, UTXO, input validation, block propagation, TPS, throughput, consensus, scalability, Satergo, wallet, release, UI redesign, derived addresses, auto-update, keyboard navigation, Android, APK, Linux]
---
# Ergo Developer Chat Summary — 2022-W52
**Period:** 2022-12-26 to 2023-01-15  
**Participants:** 10 (kushti, Aberg, CW, HQΣr, Koutelier, Luivatra, qx(), scalahub, Grand Gambit, Unknown)

---

## Key Topics Discussed

- **Transaction validation and data inputs:** kushti debugged transaction rejection issues, identifying that data inputs were being spent and causing script verification failures during block assembly.

- **Block propagation and throughput:** kushti shared research on new block propagation protocols claiming 100x TPS increase for Bitcoin without security compromise, flagging it for review.

- **AppKit 5.0.0 type mismatch bug:** scalahub reported a regression with `ErgoValue[Coll[Byte]]` type handling; Luivatra suggested using the new `ErgoValueBuilder` as a workaround.

- **Satergo v1.5.0/v1.5.1 release:** Major UI redesign by Nadi, automatic derived address restoration, keyboard-only navigation support, auto-update for node, custom stylesheet loading.

- **GitHub dependency risk:** Acknowledged as significant for the ecosystem; Aberg noted self-hosted git forge as the only realistic alternative given lack of better solutions.

- **Ergo Improvement Proposals (EIPs) process:** Discussion on how to lower barriers for non-developers to contribute ideas via community engagement rather than technical proposal format, with reference to Cardano's CIP model.

- **Python smart contracts:** HQΣr inquired about Python on Ergo; Luivatra noted existing ErgoScript is sufficient and doesn't warrant a Python-to-ErgoTree compiler effort.

- **Direct purchase links / ErgoPaylinks:** HQΣr raised feasibility of creating transaction links for token sales (e.g., sell 5 Comet tokens via a shareable link).

- **State verification and ZeroSync:** Unknown raised questions about ZeroSync's feasibility and security compared to NIPoPoWs-based approaches; no detailed response captured.

- **Storage rent and genesis box spending:** Unknown flagged potential issue with treasury box (one of three genesis boxes) being spent for first time via storage rent mechanism.

---

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#9868, 2022-12-28]: Satergo v1.5.0 and v1.5.1 released with complete UI redesign, automatic address restoration, keyboard navigation, auto-update, and custom stylesheet support.

- [@CW, msg#10128, 2023-01-12]: Ergo Improvement Proposals discussion scheduled for Friday, Jan 13 at 2 PM UTC in Developers channels to drive standards and platform improvements.

- [@Grand Gambit, msg#9905, 2022-12-29]: Continued work on roulette; private testing underway with public release expected if testing succeeds.

---

## Technical Q&A Worth Preserving

- **Q** (@scalahub, msg#10008): Getting type mismatch error in AppKit 5.0.0: `ErgoValue[Coll[Byte]]` expects `Coll[scala.Byte]` but receives `Coll[java.lang.Byte]`.
  
  **A** (@Luivatra, msg#10009–10010): Use the new `ErgoValueBuilder` instead. Reference: https://github.com/ergoplatform/ergo-appkit/blob/develop/common/src/main/java/org/ergoplatform/appkit/scalaapi/ErgoValueBuilder.scala

- **Q** (@Unknown, msg#10019): Feasibility and security assumptions of ZeroSync approach compared to NIPoPoWs-based state verification?
  
  **A** (No response captured in segment)

- **Q** (@HQΣr, msg#10124–10127): Can transaction authorization links (ErgoPaylinks) be created to directly sell tokens from a seller's address, triggering buyer confirmation automatically?
  
  **A** (No definitive response; flagged as potential feature need for WhiteList token sales and NFT discovery)

- **Q** (@HQΣr, msg#10109): Do we have any Python smart contracts running on Ergo?
  
  **A** (@Luivatra, msg#10110): No—existing ErgoScript is sufficient; effort to build a Python-to-ErgoTree compiler is unnecessary.

- **Q** (@Unknown, msg#10028): Transaction rejection involving genesis box spending via storage rent?
  
  **A** (Partial—flagged as potential recurrence when "proof of no-premine" box gets spent for first time)

---

## Links Shared

- [https://arxiv.org/pdf/2101.00378.pdf]: Block propagation protocols research; claimed 100x TPS increase for Bitcoin without compromising security (kushti, msg#9849)

- [https://www.ergoforum.org/t/scalability-and-smooth-mining-rewards-for-ergo-with-prism/3954/10]: kushti's thoughts on Prism scalability proposal (msg#9930)

- [https://github.com/ZeroSync/ZeroSync/tree/main/docs]: ZeroSync documentation for state verification feasibility discussion (Unknown, msg#10019)

- [https://twitter.com/oskkkin/status/1612072265922879489]: Teased announcement (Luivatra expressed curiosity, msg#10023)

- [https://github.com/TapTools/status/1613330377669484546]: Cardano Python smart contract announcement (HQΣr, msg#10108)

- [https://github.com/ergoplatform/eips]: Ergo Improvement Proposals repository (qx(), msg#10173)

- [https://cips.cardano.org/]: Cardano CIP model example for EIP process comparison (qx(), msg#10173)

---

## Unresolved Questions

- **AppKit 5.0.0 regression scope:** Unclear whether type handling issue affects only Scala or broader type binding in ErgoValue construction.

- **ZeroSync vs. NIPoPoWs comparison:** Feasibility and security trade-offs remain unaddressed in this segment.

- **Genesis box storage rent spending:** Potential systemic issue flagged but root cause and mitigation strategy not discussed.

- **ErgoPaylink technical feasibility:** Whether transaction authorization links can support direct token sales without intermediate custody or market intermediary.

- **Forum engagement barriers:** How to structure public discourse and decision-making to encourage non-developer participation without creating curation overhead.

- **GitHub migration path:** Self-hosting mentioned as alternative but no concrete roadmap shared for Ergo ecosystem migration.

- **ergo.watch API stability:** Repeated outages reported (msg#9908, #10014, #10096) but no status or resolution discussed.

---

## Notes

- Low activity week overall; primarily technical troubleshooting and infrastructure discussion.
- No consensus decisions on major protocol changes or roadmap items.
- EIP process discussion highlights ongoing effort to decentralize proposal governance beyond core developers.