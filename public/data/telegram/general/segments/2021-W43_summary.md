# Ergo General Chat — 2021-W43 Summary
**Period:** 2021-10-25 to 2021-10-31

---

## Key Topics Discussed

- **ErgoScript Learning Sessions**: The ErgoLend team has been running weekly Thursday knowledge transfer sessions covering boxes, contracts, addresses, proxy contracts, registers, and ErgoScript fundamentals. Sessions are currently internal but plans exist to open them to broader community with structured beta sessions. [@kii, msg#224445, 2021-10-28]

- **Ledger Hardware Wallet Support**: Alpha version of Ledger support has been released for developers only. The Tesseract side is complete and Yoroi integration is in progress. No fixed ETA for public release but active development underway. [@CW, msg#224624, 2021-10-27; @MrStahlfelge, msg#224696, 2021-10-29]

- **ErgoDEX Launch Timeline**: UI v2 launch delayed awaiting stable Yoroi DApp Connector release. ErgoDEX will launch on Ergo first, then Cardano. Beta testing with real ERG already live at beta.ergodex.io. [@Ilya Oskin, msg#224775, 2021-10-29; @Gazza, msg#225437, 2021-10-31]

- **Sidechain and Velvet Fork Discussion**: Kushti explained velvet soft forks (activated by any noticeable hashrate) vs normal soft forks (require majority). NIPoPoWs already in protocol but can be improved via soft fork when hashrate grows. Just-in-time costing soft fork planned for ~5x faster script execution. [@kushti, msg#225103-225106, 2021-10-30]

- **Oracle Pool Infrastructure**: New ETH/USD oracle pool launched on Ergo, demonstrating infrastructure for anyone to create oracle pools. ERG/USD + ETH/USD pools can be combined to calculate ERG/ETH price. [@Dmitry Usov, msg#224634, 2021-10-27; @Luivatra, msg#224724, 2021-10-28]

- **Djed vs SigmaUSD Relationship**: Djed is COTI's KYC version of the AgeUSD protocol for Cardano. SigmaUSD is Ergo's non-KYC implementation of the same protocol, ERG-backed. Kushti's name appears on Djed paper. SigmaUSD will be available cross-chain once bridges are ready. [@Kevin, msg#224596, 2021-10-29; @kushti, msg#224629, 2021-10-29]

- **Storage Rent and Emission Schedule**: Discussion of emission curve with treasury receiving 7.5 ERG per block (10% of 75 total) until block 655,200 when treasury ends and miner rewards drop to 66 ERG. Links provided to emission schedule code and documentation. [@CW, msg#223684-223730, 2021-10-27]

- **Fair Launch Tokenomics**: No initial token allocation. Foundation receives 4.5% of block rewards programmed into emissions contract (miners essentially donated portion of rewards). Public sale refers to mining availability, not presale. [@Armeanio, msg#225493, 2021-10-31]

---

## Important Decisions or Announcements

- [@Glasgow, msg#224478, 2021-10-28]: Weekly dev update published covering ErgoDEX UI progress, Ledger alpha testing, iOS wallet porting, and ecosystem scaling solutions blog post.

- [@kushti, msg#225101, 2021-10-30]: Soft fork introducing just-in-time costing in script execution confirmed, enabling ~5x faster execution and simplifying execution engine. Emission prolonging still under discussion.

- [@kushti, msg#224752, 2021-10-27]: Confirmed EFYT holders will be included in ErgoData sidechain token distribution at moment of launch if possible, but ErgoData sidechain and distribution mechanism still undefined.

- [@Glasgow, msg#225158, 2021-10-30]: Ergo Foundation logo competition winner to be announced soon.

- [@Glasgow, msg#225159, 2021-10-30]: Singapore incorporation expected within couple weeks.

- [@Glasgow, msg#225459, 2021-10-31]: Exchange listing discussions in progress under NDA.

---

## Technical Q&A Worth Preserving

- **Q** (@user): How does ErgoScript relate to Scala?
  **A** (@kushti, msg#224392; @Gazza, msg#224438, 2021-10-28): ErgoScript is super primitive subset of Scala. Better to start directly with ErgoScript rather than learning full Scala, since you'd still need to learn ErgoScript-specific features afterward. No loops in ErgoScript—it's deterministic functional language.

- **Q** (@A, msg#224334-224336, 2021-10-28): How does Neutrino/USDN stablecoin staking work?
  **A** (@A): Stablecoin contract stakes underlying asset (Waves), you get percentage return while maintaining USD stability. You hold stablecoin so if underlying price increases, you still only get USD value.

- **Q** (@VLT 65, msg#225173, 2021-10-30): Is it possible to stake Ergo?
  **A** (@Aberg, msg#225174): No, Ergo is proof-of-work mining coin. Profit-sharing solutions being built on top but no native staking.

- **Q** (@John Seastar3, msg#225071, 2021-10-29): Can I send ERG to same address as ADA in Yoroi hardware wallet?
  **A** (@Glasgow, msg#225073): No, need to add new separate Ergo wallet in Yoroi.

- **Q** (@user, msg#224977, 2021-10-28): Can I transfer ERG from Waves wallet to mainnet?
  **A** (@kushti, msg#225004, 2021-10-29): Yes, ERG is verified asset with long-term support on Waves. It's already on mainnet, not just wrapped token.

- **Q** (@user, msg#225250, 2021-10-30): How many Ergo wallets exist?
  **A** (@Glasgow, msg#225276, 2021-10-30): Approximately 200k based on last manual check. Need to build explorer backend to check programmatically currently.

- **Q** (@Silvercue, msg#224711, 2021-10-29): Why does ErgoDEX beta say only use small amounts?
  **A** (@Klaus, msg#224716): Standard beta testing precaution. Join @ergodex_community for details.

---

## Links Shared

- [https://ergotutorials.com](https://ergotutorials.com): Ladopixel's ErgoScript tutorials [@Gazza, msg#224440, 2021-10-28]

- [https://ergohack.io/resources/](https://ergohack.io/resources/): ErgoHack resources including "Solving for Sigma" section for smart contracts [@Glasgow, msg#224454, 2021-10-28]

- [https://arxiv.org/pdf/1806.10116.pdf](https://arxiv.org/pdf/1806.10116.pdf): Paper on how Ergo creates "loops" without loops in deterministic functional language [@Gazza, msg#224467, 2021-10-28]

- [https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/](https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/): Blog post on scalability including zk-rollups on Ergo [@CW, msg#224837, 2021-10-29]

- [https://www.youtube.com/watch?v=HVHTvZvS4cA](https://www.youtube.com/watch?v=HVHTvZvS4cA): NiceHash NiceTalk Episode 3 featuring Ergo team discussing Autolykos, privacy, stablecoins [@Glasgow, msg#224814, 2021-10-29]

- [https://github.com/Luivatra/oracle-core/tree/eth-connector](https://github.com/Luivatra/oracle-core/tree/eth-connector): Setup guide for running ETH/USD oracle pool node [@Glasgow, msg#224651, 2021-10-27]

- [https://beta.ergodex.io/](https://beta.ergodex.io/): Live ErgoDEX beta for testing liquidity provision and swaps

- [https://ergoplatform.org/en/blog/2021-10-15-ergohack-ii-wrap-up/](https://ergoplatform.org/en/blog/2021-10-15-ergohack-ii-wrap-up/): ErgoHack II summary with projects [@Glasgow, msg#224973, 2021-10-28]

- [https://medium.com/@ergoplatformes/oct-25-2021-ergo-team-ama-every-answer-compiled-2d9e03e05f13](https://medium.com/@ergoplatformes/oct-25-2021-ergo-team-ama-every-answer-compiled-2d9e03e05f13): Compiled October 25 AMA answers [@Arohbe, msg#225092, 2021-10-30]

- [https://www.reddit.com/r/ergonauts/comments/qhwdy1/whats_going_on_behind_the_screens_ergo_weekly_dev/](https://www.reddit.com/r/ergonauts/comments/qhwdy1/whats_going_on_behind_the_screens_ergo_weekly_dev/): Weekly dev update October 28 [@Glasgow, msg#224478, 2021-10-28]

---

## Unresolved Questions

- **ErgoData Sidechain Specifics**: What types of data-intensive applications would ErgoData support beyond Ergo mainchain capabilities? Land registry, health records suggested but unclear if data volume justifies separate chain. [@A, msg#224771, 2021-10-29; @Glasgow, msg#224784, 2021-10-29]

- **Wallet Address Count**: No programmatic way to count total unique wallet addresses yet. Approximately 200k estimate from manual check but needs proper analytics tooling. [@CW, msg#225274, 2021-10-30]

- **iOS Wallet Timeline**: Android wallet being ported to iOS but no fixed ETA provided. ViaWallet works on iOS for ERG only (not SigmaUSD/NFTs) as interim solution. [@MrStahlfelge, msg#224696, 2021-10-29; @Glasgow, msg#225349, 2021-10-31]

- **Emission Prolonging**: Still under discussion whether to extend emission schedule beyond current 8-year plan. No decision announced. [@kushti, msg#225101, 2021-10-30]