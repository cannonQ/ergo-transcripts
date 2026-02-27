# Ergo Developer Chat Summary — 2022-W49
**Period:** 2022-12-05 to 2022-12-23  
**Participants:** 10  
**Message Volume:** 62

---

## Key Topics Discussed

- **Node v5.0 Deployment & Payment Issues**: Mining pool payment transactions affected by EIP-27 output creation height initialization (height = 0). [@kushti, msg#9179, 2022-12-06]

- **P2S vs P2PK Context Variables & Message Encoding**: Discussion of whether context variables can be accessed across different output types (p2pk, p2s) and optimal encoding for message/attachment fields. Consensus that p2s contracts are too flexible for standardized assumptions; p2pk may be more practical for message attachments. [@Cheese, msg#9517-9525, 2022-12-19]

- **Dexy Protocol Contract Refactoring**: Scalahub working on splitting Dexy LP contract into smaller parts following kushti's review comments. [@scalahub, msg#9612, 2022-12-21]

- **Satergo v1.5.0 Release**: Major UI redesign, auto-restore of derived addresses, keyboard navigation in setup, auto-update for node, custom stylesheet support. [@Aberg, msg#9802, 2022-12-23]

- **Akka Dependency Management**: Akka library closed-source transition flagged; team still on old version, checking status of new releases. [@Aberg, msg#9261; @kushti, msg#9266, 2022-12-08-09]

---

## Important Decisions or Announcements

- [@kushti, msg#9187, 2022-12-06]: Community chat scheduled for December 6 at 17:00 UTC discussing v5.0 node update, NIPoPoWs, and full node wallet (Satergo).

- [@CW, msg#9354, 2022-12-15]: Announced alternating weekly community chats on Fridays — Ergo Improvement Proposals and road to v6.0. EIP chat on Discord, Dec 16, 2 PM UTC.

- [@kushti, msg#9541, 2022-12-19]: Community chat scheduled for December 20 at 17:00 UTC on FPGA/ASIC resistance maintenance and useful proof of work.

- [@Aberg, msg#9802, 2022-12-23]: **Satergo v1.5.0 released** with major UI overhaul, derived address auto-restore, keyboard navigation, node auto-update, and custom stylesheet support. [Twitter announcement](https://twitter.com/SatergoWallet/status/1606470698528022528)

- [@HQΣr, msg#9277, 2022-12-13]: ErgCube marketing initiative: daily visual dev update slides; requesting project logos for easier sharing.

- [@Aberg, msg#9325-9326, 2022-12-14]: Ergonodes.net collapsed node versions older than 4.0.30 into single pie slice; behavior can be restored with `?noVersionCollapse=on` URL parameter.

---

## Technical Q&A Worth Preserving

**Output Creation Height in Payment Transactions**
- **Q** (@kushti): EIP-27 output in payment transaction has creation height = 0, affecting mining pool payments in v5.0. What is the root cause?
  **A** (@kushti): Identified issue; investigation ongoing. [@kushti, msg#9179, 2022-12-06]

**P2S Register Access Across Inputs**
- **Q** (@Luivatra): Can order book-style p2s contracts set registers that are only accessed by a second input, not the box itself?
  **A** (@Cheese): Yes. P2s contracts have flexibility to set registers on a box while only checking the second input's script hash. Registers need not be accessed only by the box they're set on. This makes p2s too complex for standardized message encoding assumptions. [@Cheese, msg#9519, msg#9521, 2022-12-19]

**P2PK vs P2S for Message/Attachment Fields**
- **Q** (@Luivatra): Should message/attachment context variables be standardized, and does p2s work?
  **A** (@Cheese): Restricting to p2pk and multisig outputs makes most sense. P2s is too complex; order book contracts and others may use registers in non-standard ways. [@Cheese, msg#9517, 2022-12-19]

**Soft-fork Flexibility for Output Fields**
- **Q** (@Luivatra): Can new fields be added to outputs without breaking compatibility?
  **A** (@kushti): Depends on serializers. Some allow extra bytes, enabling new field addition via soft-fork. [@kushti, msg#9564, 2022-12-19]

**P2SA Special Encoding Justification**
- **Q** (@Luivatra): Should P2SA have special encoding given bytes 4–15 are free?
  **A** (@kushti): No clear benefit compared to p2s. [@kushti, msg#9571-9572, 2022-12-19]

**Inclusion Height in Boxes**
- **Q** (@scalahub): What is the possibility of adding true inclusion height to boxes?
  **A** (unresolved, flagged as GitHub issue #1214) [@scalahub, msg#9789-9790, 2022-12-23]

**JavaScript Fetch & DOM Integration**
- **Q** (@HQΣr): How to fetch Ergo block height from API and display in HTML?
  **A** (@Aberg): Use `document.getElementById("id").innerText = data.height` to extract and display the height property from JSON response. [@Aberg, msg#9642, 2022-12-21]

**Hashrate & Difficulty API**
- **Q** (@HQΣr): From which API can current difficulty and total hashrate be fetched?
  **A** (@qx): Use https://api.ergoplatform.com/info. Cache hourly to avoid explorer overload. [@qx, msg#9666-9668, 2022-12-22]

**Number Formatting in JavaScript**
- **Q** (@HQΣr): How to limit API response values to 4 digits?
  **A** (@qx): Follow-up pending. [@HQΣr, msg#9669; @qx, msg#9670, 2022-12-22]

---

## Links Shared

- [https://github.com/ross-weir/ergo-stealth-address-example](https://github.com/ross-weir/ergo-stealth-address-example): ErgoScript stealth address example. [@kushti, msg#9505, 2022-12-19]

- [https://twitter.com/SpectrumLabs_/status/1602966568492679168](https://twitter.com/SpectrumLabs_/status/1602966568492679168): Spectrum Labs/Spectrum DEX update. [@Gazza, msg#9283, 2022-12-14]

- [http://discord.gg/kj7s7nb - #EIPs channel](http://discord.gg/kj7s7nb): EIP community chat venue. [@CW, msg#9354, 2022-12-15]

- [https://api.ergoplatform.com/info](https://api.ergoplatform.com/info): Ergo network info API (difficulty, hashrate). [@qx, msg#9666, 2022-12-22]

- [https://api.ergo.watch/sync_height](https://api.ergo.watch/sync_height): Ergo block height API. [@HQΣr, msg#9635, 2022-12-21]

- [https://satergo.com](https://satergo.com): Satergo v1.5.0 release page. [@Aberg, msg#9802, 2022-12-23]

- [https://twitter.com/SatergoWallet/status/1606470698528022528](https://twitter.com/SatergoWallet/status/1606470698528022528): Satergo v1.5.0 release announcement. [@Aberg, msg#9802, 2022-12-23]

- [https://github.com/duckpools/lend-protocol-contracts](https://github.com/duckpools/lend-protocol-contracts): DuckPools lending protocol (name changed). [@qx, msg#9674, 2022-12-22]

- [https://github.com/ergoplatform/ergo/issues/1214](https://github.com/ergoplatform/ergo/issues/1214): GitHub issue: true inclusion height in boxes. [@scalahub, msg#9790, 2022-12-23]

---

## Unresolved Questions

- **Akka Library Status**: What is the current status of new Akka versions post-closed-source transition? Team still on very old version. [@kushti, msg#9266, 2022-12-09]

- **Inclusion Height Feature**: Feasibility and timeline for adding true inclusion height to boxes (tracked as GitHub #1214). [@scalahub, msg#9789-9790, 2022-12-23]

- **Number Formatting in Fetch Responses**: Specific method for limiting API numeric responses to 4 significant digits in JavaScript. [@HQΣr, msg#9669, 2022-12-22]

- **DuckPools Lending Protocol Availability**: Original GitHub repo pulled offline ~1 month prior; renamed version confirmed but current status unclear. [@qx, msg#9673-9677, 2022-12-22]