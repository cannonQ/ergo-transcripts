# Ergo General Chat — 2018-W06 Summary

## Key Topics Discussed

- **EFYT to ERG Token Swap Mechanics**: EFYT holders will exchange tokens 1:1 for ERG via a gateway on Waves DEX at mainnet launch. The process is user-initiated (send EFYT to gateway address) but automated on the backend. No pre-issued coins at launch—ERG starts at zero, with 10% of mined coins going to Ergo Foundation to exchange back for EFYT during year one.

- **Dual Chain Architecture (MoneyChain & DataChain)**: Ergo will launch two parallel chains with identical technology but different parameters. EFYT converts at 1+1 ratio (1 ErgoMoney + 1 ErgoData per token), with matching emission schedules.

- **Mining Algorithm & Hardware**: Ergo uses Equihash-based proof of work, GPU-minable. Regular GPU mining rigs are sufficient for initial participation.

- **Anonymity Design Philosophy**: Ergo adopts lightweight anonymity via wallet-level ring signatures (reasonable ring size as default), explicitly rejecting SNARKs (to avoid new cryptographic assumptions and efficiency concerns) and ZCash-style shielded pools.

- **Smart Contracts & ErgoScript**: Early development uses Sigma protocol-based transaction language. Specification available in code repositories; formal roadmap includes TestNet1 release with Sigma language in April 2018.

- **Airdrop Plans**: 100K tokens planned for IOHK employees (~100+), plus 100K for general public later. No current airdrops for EFYT holders; future formal grant programs announced for Summer 2018 onwards.

- **Testnet Roadmap**: TestNet0 (v0.2.1) → TestNet1 (Sigma transaction language, April 2018) → TestNet2 (rollerchain, new economy model, parameters) → MainNet (conditional on successful parameter tuning).

---

## Important Decisions or Announcements

- [@Dmitry, msg#1941, 2018-02-06]: Ergo Foundation will exchange EFYT↔ERG at 1:1 rate via Waves DEX gateway; 10% of first-year emission reserved for foundation to buy back EFYT.

- [@Dmitry, msg#1968, 2018-02-06]: Mining algorithm confirmed as Equihash-based PoW (GPU-minable).

- [@Dmitry, msg#1944, 2018-02-06]: Version 0.2.1 released; [link provided](https://github.com/ergoplatform/ergo/releases/tag/0.2.1).

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2006, 2018-02-06]: MainNet roadmap clarity deferred to Q2 2018.

- [@Dmitry, msg#1985, 2018-02-06]: Confirmed dual-chain conversion: 1 EFYT = 1 ErgoMoney + 1 ErgoData.

---

## Technical Q&A Worth Preserving

- **Q** (@Andrey Kochkin, msg#1961): When are smart contracts planned, and where is specification available?  
  **A** (@Dmitry, msg#1969): Current code at [sigmastate-interpreter repo](https://github.com/ScorexFoundation/sigmastate-interpreter); roadmap shows TestNet1 with Sigma transaction language in April 2018.

- **Q** (@MMAforMoney, msg#1966): How does Ergo's privacy protocol compare to Zerocoin? Pros/cons?  
  **A** (@Dmitry, msg#1973): Ergo avoids SNARKs (new cryptographic assumptions, inefficiency); uses simpler building blocks for efficiency. ZCash privacy superior due to larger anonymity set, but Ergo prioritizes practicality and lightweight wallet-level anonymity.

- **Q** (@Guang Guang, msg#1970): If 10% of mined ERG goes to foundation, is that correct?  
  **A** (@Dmitry, msg#1967): At launch, 0 ERG exist. EFYT converts during year one; 10% of issued tokens go to foundation, who exchange them back for EFYT (no direct mining tax implied in later clarification).

- **Q** (@Fn Ln, msg#1991): Can Ergo be compiled and run natively on Windows without Docker?  
  **A** (@Dmitry, msg#1992): Yes, as standard Java program. Download JAR from release, execute: `java -jar ergo-assembly-0.2.1.jar`.

- **Q** (@Unknown, msg#2028): Will EFYT↔ERG swap be manual or automatic?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2029–2031): User initiates transfer of EFYT to provided gateway address; backend automation handles swap. Simple transaction from user end; step-by-step guide provided at launch.

---

## Links Shared

- [GitHub Release 0.2.1](https://github.com/ergoplatform/ergo/releases/tag/0.2.1): TestNet0 binary release.
- [SigmaState Interpreter Repository](https://github.com/ScorexFoundation/sigmastate-interpreter): Smart contract specification & code.
- [Q&A Session Video](https://youtu.be/zSgiXGELjbc): Recorded 2018-02-06 AMA.
- [Twitter: Chepurnoy Status #1](https://twitter.com/chepurnoy/status/960832467149164544): Referenced architectural discussion (2018-02-06).
- [Twitter: Chepurnoy Status #2](https://twitter.com/chepurnoy/status/961595518588776448): Referenced follow-up (2018-02-11).

---

## Unresolved Questions

- **Early Investor Rewards**: User @Waylay (msg#1994) flagged concern that 1:1 swap rate lacks special incentive for early EFYT purchasers. Admin referenced vague "rewarding mechanism" (@Dmitry, msg#1972) but no concrete details provided; dual-chain (1+1 ratio) clarified later but timing vs. value remains ambiguous.

- **Circulating Supply Details**: @Unknown (msg#1956) asked for concrete total/circulating supply at launch. @Dmitry deferred: "We'll show concrete emission curve in few weeks" (msg#1941); no curve materialized in this chat segment.

- **Grant Program Specifics**: Formal grant application process promised "not earlier than Summer 2018" (msg#1941); mechanics (application, selection, vesting) not detailed.

- **Testnet Parameter Tuning**: @Unknown (msg#2027) asked whether EFYT conversion must await specific ERG mining threshold. Implicit answer (conversion during year one, phased) but explicit block height/time triggers not stated.

---

**Note**: This week's chat was dominated by a single structured Q&A session (2018-02-06). Follow-up questions were light, suggesting community acceptance of core tokenomics and roadmap. Conversation tone remained constructive; no major disputes or technical debates emerged.