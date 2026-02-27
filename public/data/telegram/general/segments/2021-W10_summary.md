# Ergo General Chat — 2021-W10 Summary

## Key Topics Discussed

- **SigmaUSD (AgeUSD) v1 Exploit & Relaunch**: A whale arbitraged oracle price delays to exploit the protocol, draining ~$3,000 from early depositors. v2 protocol under development with improved safeguards (2% fees, 15–20 minute oracle updates, 0.5% smoothing caps).

- **Hotbit Withdrawal Issues**: Exchange wallet flooded with miner dust outputs; unable to process large withdrawals. kushti coordinated dust collection and advised users to withdraw 100–300 ERG in small batches; issue partially resolved by 2021-03-13.

- **BiKi Exchange Listing**: ERG announced for BiKi on 2021-03-10 with deposit opening, but trading delayed multiple times; trading eventually went live 2021-03-10 at 19:00 GMT+8.

- **ErgoSwap (DEX) Development**: UI development started; working groups formed for both orderbook-based and AMM-based DEX designs. Expected delivery in first half of 2021.

- **Autolykos v2 Upgrade**: Pool-resistance switched off in February hardcoin to enable fair pooled mining on GPUs (3–4 GB cards most profitable); memory-hardness now the primary defense against ASICs.

- **Mining Difficulty Adjustment**: Difficulty adjusts every ~1,000 epochs (~varies by network hashrate); discussion around minimum withdrawal thresholds to prevent spam.

- **Ergo–Cardano Partnership & Roadmap**: Charles Hoskinson publicly supports Ergo; Emurgo partnership confirmed. Roadmap includes stablecoins (v2), DEXes (Q1–Q2 2021), Oracle Pools (live), sidechains & LETS (Q2–Q3 2021).

- **NFT Auction House**: Audio NFT support added; some users experienced issues with transaction flow (requiring dual sends of ERG and token separately).

- **Community Marketing & Adoption**: Debate over exchange listing strategy vs. internal DEX development; consensus that organic growth via tech delivery (not paid listings) is preferable long-term.

- **Hardware Wallet Support**: Not yet available; Yoroi iOS reached 100k+ installs; Ledger support via Waves.exchange mentioned but not native to Ergo yet.

---

## Important Decisions or Announcements

- [@kushti, msg#105087, 2021-03-08]: SigmaUSD deposit relaunch imminent with improved protocol and parameter changes to prevent future exploits.

- [@kushti, msg#106104, 2021-03-11]: Immediate ban policy for marketing proposals sent to core devs via DM; redirect to team@ergoplatform.org or designated marketing contacts.

- [@kushti, msg#106129, 2021-03-11]: DEX UI started; working groups launched for both orderbook and AMM-based DEX designs; regular updates toward roadmap completion announced.

- [@kushti, msg#106157–106159, 2021-03-11]: BiKi AMA recap — SigmaUSD v2 launching soon; ErgoSwap and other DEXes coming H1 2021; sidechains & LETS in Q2–Q3 2021; Ergo positioned as "PoW Polkadot" with merge-mined sidechains.

- [@glasgowm, msg#105234, 2021-03-08]: ErgoNaut.space community resource aggregated — DEX info, roadmap, ecosystem projects centralized.

- [@Armeanio, msg#105361, 2021-03-09]: Argued against expensive tier-1 exchange listings due to regulatory risk; prioritize building Ergo DEX as long-term value play.

- [@kushti, msg#106249, 2021-03-12]: Hotbit began dust collection via new address; wallet backlog being cleared.

---

## Technical Q&A Worth Preserving

- **Q** (@Pizza, msg#106206): "How is it possible that pool-resistant Ergo can be mined on pools?"
  **A** (@btt, msg#106207 / @glasgowm, msg#106212–214): Pool-resistance (Non-Outsourceable PoW) was removed in Autolykos v2 hardcoin to enable fair pooled mining. Memory-hardness now primary defense against ASICs. Reference: "Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts" (Chepurnoy, FC 2020).

- **Q** (@cymatic, msg#106564): "What caused the huge hash rate drop-off at beginning of February?"
  **A** (@c8, msg#106565): Protocol upgrade (hardcoin); miners not upgraded dropped off network.

- **Q** (@Unknown, msg#106280): "What rate does difficulty change at? No specific timing?"
  **A** (@A, msg#106878): Adjusts every ~1,000 epochs; timeframe varies depending on network hashrate and miner count.

- **Q** (@Velvia, msg#106354): "Am I supposed to send token and ERG at the same time in same transaction or separately?"
  **A** (No direct answer in logs, but context from msg#105211: process requests dual sends to separate addresses; auction still commences even if second send fails.)

- **Q** (@Mr. Goose, msg#106576–580): "Is my ERG safe in SigRSV? Does freeze affect my ERG entry price?"
  **A** (@c8, msg#106577–578 / @cymatic, msg#106580): v1 SigRSV frozen; redeem for ERG now (no price change). Redemption fee structure; new v2 AgeUSD coming. Safe from theft but illiquid; no yield generation until v2 launches.

- **Q** (@Richi, msg#105652 / @Gazza, msg#105643–646): "How does Coinex AMM lock/impermanent loss work?"
  **A** (@Richi, msg#105652): Lock equal dollar value of ERG + USDT; earn ~20–30% APY but face impermanent loss if price swings dramatically (ERG pump → more USDT on withdrawal).

- **Q** (@Damon, msg#105270–274): "Why is Hotbit trading slow? How do limit orders work?"
  **A** (@Damon, msg#105270–274): Use manual limit orders against order book (not market buys). Hotbit's default order range may fall outside spread. Large orders (>10k ERG) require buying/selling the book sequentially.

- **Q** (@cymatic, msg#106530): "What are the v2 SigRSV protection mechanisms?"
  **A** (@cymatic, msg#106530): Fees raised 1% → 2% per transaction; oracles post every 15–20 min (vs. 60 min); 0.5% smoothing cap per posting. Whale needs to incur 4.5% fees (2% buy + 2% sell) and wait 2.5+ hours to profit after cap effects.

---

## Links Shared

- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808]: Community forum discussion on exchange strategy (Snowman Jason, msg#105220).
- [https://ergonaut.space/en/dex/home]: ErgoNaut community resource — DEX info, ecosystem overview (glasgowm, msg#105234).
- [https://ergoplatform.org/en/blog/2021_03_04-finding-right-balance/]: Blog post explaining SigmaUSD v1 exploit and v2 fixes (Dan, msg#106291).
- [https://glasagow.medium.com/whats-an-erg-82193c992f29]: Medium article explaining ERG and Ergo tech stack (multiple users, msg#105182, 105740).
- [https://www.reddit.com/r/cardano/comments/m1s5g6/ergo_subreddit_created_sign_up_for_the_updates/]: Reddit post on Ergo subreddit launch (glasgowm, msg#105660).
- [https://explorer.ergoplatform.com/en/charts/hash-rate?timespan=alltime]: Ergo network hash rate chart showing February hardcoin impact (cymatic, msg#106564).
- [https://ia.cr/2020/044]: IACR eprint on bypassing pool-resistance via smart contracts (glasgowm, msg#106212).
- [https://ergoplatform.org/en/exchanges/]: Official list of supported exchanges (Dmitry Usov, msg#106385).
- [https://t.me/ergosupport]: Ergo support Telegram group for user issues (Snowman Jason, msg#105407 & 106094).
- [https://t.me/ergo_mining]: Ergo Mining Telegram group (Gazza, msg#105763).
- [https://t.me/ErgoSocials]: Community-driven marketing group (Infinideez, msg#106037; kushti, msg#106050).
- [https://blog.plutomonkey.com/2021/01/generic-on-chain-ergo-swaps/]: Blog on generic on-chain swaps (msg#106178).
- [https://cryptokptx.medium.com/my-first-nft-a-collaboration-with-ergo-and-raivo-47bd1694b710]: NFT collaboration case study (kushti, msg#106194).

---

## Unresolved Questions

- **SigmaUSD v2 UI**: Will original sigmausd.io operator revamp the site for v2, or will a new UI be built? Status unclear as of 2021-03-11 (cymatic, msg#106509).

- **Hardware Wallet Integration Timeline**: When will native Ledger/Trezor support ship for Ergo? Flagged as priority but no ETA (Gazza, msg#105386; c8, msg#106228–229).

- **BiKi Trading Delay Root Cause**: Exact reason for 2–3 day trading opening delay not disclosed (multiple users, msg#106140, 106189).

- **Mining Reward Emission Schedule Post-July 2021**: How will the 3 ERG per-block reduction every 3 months affect network security and tokenomics beyond 2021? (msg#106871–875 touched on this but no deep analysis).

- **Rosen Bridge Sidechain Design**: When will merge-mined sidechain constructions be published to forum? kushti mentioned "soon" on 2021-03-11 but no firm date (msg#106129).

- **Oracle Pool Governance & Revenue Sharing**: Who controls oracle pools and how are profits distributed? Multi-operator structure mentioned but specific incentive mechanisms not detailed (msg#106341).

- **Ergo Foundation Fundraising & Marketing Budget**: Is there a dedicated marketing budget? Should community crowdfund tier-1 exchange listings? Debate ongoing (msg#106003–106030).

- **Cardano–Ergo Cross-Chain Mechanics**: When will atomic swaps or bridge protocols for ADA↔ERG trade go live? Blueprint exists but deployment timeline unclear (msg#105355).

---

## Notable Community Sentiment

- **Confidence in Tech Fundamentals**: High regard for eUTXO model, Sigma protocols, and privacy features; contrast with skepticism about marketing/adoption execution.
- **SigmaUSD Incident Impact**: Mixed — acknowledged as "learning moment" not project-ending; community focused on v2 improvements; some hesitancy to re-enter reserve coins immediately.
- **Charles Hoskinson Support**: Viewed as validation but also frustration ("talk vs. deliver") regarding Cardano–Ergo integration timeline.
- **Exchange Frustration**: Hotbit liquidity/withdrawal issues dominant recurring complaint; Coinex & Gate.io praised as functional alternatives.
- **Mining as Onramp**: New users frequently asked about GPU mining; community supportive of accessibility; concerns raised about dust spam from miner payouts.