---
title: "Ergo General Chat — 2018-W29"
date_start: "2018-07-16"
date_end: "2018-07-22"
type: telegram_weekly
channel: general
week: "2018-W29"
source: telegram
message_count: 60
categories: [technical, mining, governance, ecosystem, community]
key_terms: [Sigma-State, Zero-Knowledge proofs, smart contracts, Bitcoin 2.0, scalability, state size, soft-forking, hardforks, interoperability, Equihash, PoW, GPU mining, proof-of-data-possession, pooling, voting system, miner governance, storage rent, parameter adjustment, lightweight fullnode, UTXO set]
---
# Ergo General Chat — 2018-W29 Summary
**Period:** 2018-07-16 to 2018-07-21  
**Participants:** 7 (mostly unknown/unregistered users, with Dmitry, Crypto Bunny 🐜, Crypto Rev, and others)

---

## Key Topics Discussed

- **Ergo's Differentiation & Design Philosophy**: Ergo positions itself as "real Bitcoin 2.0" emphasizing safe, practical smart contracts via Sigma-State language based on zero-knowledge proofs, light/secure clients, soft-forking only, and a scientific approach. Focus on long-term survivability over hard forks and centralized development dependency.

- **Smart Contract Architecture (Tail Recursion Pattern)**: Novel approach to smart contracts where loops are induced via transaction sequencing rather than loop constructs within the contract itself. Users noted this pattern as foundational to Ergo scripting.

- **PoW & Mining**: Ergo uses Equihash-like proof-of-work but plans to evaluate alternative PoW functions before Testnet2, considering proof-of-data-possession research and pool-resistance improvements. GPU mining will be possible; light-fullnodes may run on smartphones (though mobile mining rewards unclear).

- **Blockchain Economy & Governance**: Multi-layer governance approach: miners can vote to shift parameters per epoch (256 blocks); storage rent mechanism and computation fees for contract execution; two fullnode modes (Bitcoin-like and lightweight with NIPoPoWs-style verification).

- **Interoperability & Scaling**: Built-in sidechain support via NIPoPoWs; Σ-Cash and Σ-Data chain pairing model; soft-forking strategy; emphasis on flexible smart contract language for layer-2 and sidechain protocols. Scalability viewed beyond TPS to include user count and state size.

- **Testnet UI & Bugs**: Testnet explorer at testnet.ergoplatform.com underwent early testing; UI scroll-position preservation flagged as UX issue when navigating between pages.

---

## Important Decisions or Announcements

- [@Unknown, msg#3919, 2018-07-16]: Call for community testing of testnet explorer; request for bug reports.
- [@Crypto Bunny 🐜, msg#3940, 2018-07-18]: Confirmation that mainnet is not yet live.
- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3952, 2018-07-18]: GPU mining will be possible on Ergo.
- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3984, 2018-07-21]: Weekly update posted to BitcoinTalk thread.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#3930): Can a smart contract A call smart contract B and wait for a return value, then proceed? Would this create variable contract execution duration and associated problems?
  
  **A** (No direct answer recorded in segment). *Unresolved.*

- **Q** (@Rejinderi, msg#3931): How does the Avalanche protocol compare to Ergo? Avalanche appears to be a breakthrough implemented in many chains (NKN, Perlin, Ava).
  
  **A** (@Dmitry, msg#3933): Avalanche is far from production and contains unproven statements. 1300 TPS is unimpressive. Avalanche is only a network protocol; Ergo is a complete blockchain system with smart contracts, light client verification, and economy model. Implementations likely contain vulnerabilities.

- **Q** (@Rejinderi, msg#3938): Do we need expensive hardware to mine Ergo?
  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3952): GPU mining will be possible.

- **Q** (@Crypto Bunny 🐜, msg#3940): Is mainnet live?
  
  **A** (@Rejinderi, msg#3941): Not now, but in the future yes.

- **Q** (@Unknown, msg#3963): Where are executed orders appearing if they don't show on the Waves DEX orderbook?
  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3966): Orders are executing on the Waves/EFYT pair; check the timestamp. (@Unknown, msg#3970): Trading bots on Waves DEX are likely responsible for high-speed execution.

- **Q** (@Unknown, msg#3967): Why don't executed orders appear in the live orderbook if they're shown in history?
  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3968): If an order appears in history, it was executed; otherwise it would not show. (@Unknown, msg#3969): Execution happens very quickly.

---

## Links Shared

- [https://twitter.com/ergoplatformorg/status/1018919356682694656]: Ergo Platform Twitter announcement (2018-07-16).
- [https://twitter.com/ergoplatformorg/status/1002116968416268289]: Ergo Platform Twitter thread on Sigma-State language and ZK proofs (referenced as foundational explanation).
- [https://ergoplatform.org/tech.html#]: Ergo technical documentation.
- [https://ergoplatform.org/news_emission_curve.html]: Emission curve details and coin supply plan.
- [https://nipopows.com]: NIPoPoWs (Non-Interactive Proofs of Proof-of-Work) resource; referenced for light client verification and sidechain support.
- [http://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf]: "A Systematic Approach To Cryptocurrency Fees" paper on storage rent mechanism.
- [https://eprint.iacr.org/2016/994]: Paper on lightweight fullnode mode (Ergo's light client).
- [https://arxiv.org/pdf/1603.07926.pdf]: Research on proof-of-data-possession as PoW scheme.
- [https://github.com/ergoplatform/ergo/issues/218]: GitHub issue on pooling resistance and PoW outsourceability.
- [https://testnet.ergoplatform.com]: Ergo testnet explorer (active for testing in this period).
- [https://twitter.com/DmitryMeshkov/status/1019311829372276736]: Dmitry Meshkov Twitter post (2018-07-17).
- [https://bitcointalk.org/index.php?topic=2076657.msg42551922#msg42551922]: Weekly update on BitcoinTalk (week of 2018-07-21).

---

## Unresolved Questions

- **Smart Contract Inter-call Semantics** (msg#3930): Can contract A synchronously await a return value from contract B, and what are the implications for execution duration and atomicity? Not addressed in this segment.

- **Mobile Mining Incentives** (msg#3951): Whether light-fullnodes running on mobile devices can receive compensation/mining rewards is unclear.

- **PoW Algorithm Finalization** (msg#3918): Exact PoW function to replace Equihash-like algorithm was pending evaluation before Testnet2 launch; final decision not yet made in this period.

- **Mainnet Timeline** (msg#3983): ETA for mainnet launch requested but only answered with reference to weekly update link (msg#3984); no concrete date provided in segment.

- **EFYT Token Supply Accuracy** (msg#3975): Whether CMC's reported 5M EFYT total supply is correct; uncertainty noted about actual available supply on Waves DEX.

---