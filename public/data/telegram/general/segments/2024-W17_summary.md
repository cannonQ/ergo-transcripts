# Ergo General Chat — 2024-W17 Summary

## Key Topics Discussed

- **MEXC Exchange Listing**: ERG detected on MEXC with listing expected within 1 week; confirmation of listing announced late in the week with community encouraged to participate in trading rewards programs [@Pulsarz, msg#489287; @Hasnain, msg#489782].

- **Block Time Inconsistency & User Experience**: Discussion of Ergo's variable 2-minute average block time creating poor UX perception (users experience longer waits more frequently); debate between security benefits of unpredictable timing vs. end-user experience [@Rj, msg#489214-489215; @lexymon, msg#489236-489237].

- **Sub-blocks Implementation**: Community members mentioned sub-blocks coming "soon" as a solution to improve UX without compromising security [@TMR.ΣRG, msg#489255; @kii, msg#489278].

- **Storage Rent (Demurrage)**: Discussion of how Ergo's storage rent clears abandoned UTXOs over time while active wallets consolidating on schedule can maintain indefinite message/box retention; comparison to SWIFT message clearing [@dayumbbbb, msg#489748-489763; @cannon_q, msg#489760-489762].

- **Rosen Bridge Development**: kii's team working on a "port" (cross-chain transaction abstraction) with Rosen team; goal is all-chains support, not Ergo-exclusive; expected 1-2 month timeline [@kii, msg#489176, msg#490005].

- **Sigma Protocol & Zero-Knowledge Proofs**: kushti explained bulletproofs for zero-knowledge proofs, their use in range proofs and generic statements, and ErgoScript verification possibilities; discussion of verifiable credentials and Groth one-out-of-many proofs [@kushti, msg#489404+ (from recorded AMA session)].

- **CruxFinance (CRUX) Token**: CRUX added to CoinGecko; 1k swaps and 50k volume created by CruxFinance dApp [@Unknown, msg#489323; @HQΣr, msg#489242].

- **Emission Curve Status**: Circulating supply projected to increase 7.4% by next year (final major inflation year), then 3.4% year after, then ~0.9%; MCap roughly flat 2022-2024 despite supply doubling [@Unknown, msg#489367-msg#489375].

- **Bitcoin Consensus Issues (External)**: kushti shared Bitcoin Great Consensus Cleanup revival discussion highlighting worst-case block validation times (3 min on laptop, 1.5 hrs on RPi4); raised questions about whether Ergo faces similar vulnerabilities [@kushti, msg#489199-msg#489201; @Rj, msg#489207].

- **Wallet & Recovery**: Discussion of wallet options (Nautilus, Terminus, Minotaur v2, Ergo Wallet for Android); seed phrase recovery process for old Yoroi wallets [@Unknown, msg#489877-msg#489887].

- **DeFi Risks (Lenfi)**: Warning about Lenfi lending platform risks — potential stuck assets if interest rates don't shift dynamically and borrowers can manipulate pools [@Unknown, msg#489943-msg#489944].

- **Ergo Mixer Privacy**: Discussion of GitHub takedown risk for Ergo mixer; consensus that mixer itself is resilient (runs on-chain) but distribution/download is chokepoint; stealth addresses mentioned for privacy [@qx(), msg#489407-msg#489451].

- **Forbes "Zombie Chain" Article**: Kaspa, Monero, and Cardano among projects labeled "zombie chains"; debate over journalistic validity and regulatory capture bias [@Bye H8er, msg#489968-msg#489971; @dayumbbbb, msg#489974-msg#489982].

- **Hardware Wallet Token Limits**: Ledger app doesn't support >20 tokens; sending ERG may require consolidation if wallet holds many tokens [@Unknown, msg#490006].

---

## Important Decisions or Announcements

- [@kushti, msg#489541, 2024-04-25]: YouTube video link shared for upcoming Ergo discussion including MEXC update; 50-minute session scheduled.

- [@Ergo NEWS $ERG, msg#489567, 2024-04-25]: **ErgoHack VIII announcement** — "Ergo as a Smart Layer" hackathon focused on Bitcoin-Ergo interoperability. Prize pool: $9k (1st), $5k (2nd), $4k (3rd). Registration open.

- [@Pulsarz, msg#489285-msg#489289, 2024-04-23]: MEXC listing detected; typical timeline ≤1 week from detection to listing announcement.

- [@Hasnain, msg#489782, 2024-04-28]: MEXC listing officially announced.

- [@qx(), msg#489192-msg#489197, 2024-04-22]: Good Things DAO token distributed to ~50 Kenyan raffle donors; Paideia DAO integration live; only 2 participants found their way to Paideia and Telegram so far.

- [@CW, msg#489294, 2024-04-23]: CW confirmed still active; stepped down from EF (Ergo Foundation) [@Benny, msg#489257, 2024-04-22].

- [@kii, msg#490005, 2024-04-28]: Rosen Bridge port/bus implementation timeline: 1-2 months pending coordination with Rosen team.

---

## Technical Q&A Worth Preserving

- **Q** (@Rj, msg#489207): Is Ergo susceptible to Bitcoin's timewarp vulnerability and Merkle tree attacks?  
  **A** (@qx(), msg#489210-msg#489212): kushti discussed how inconsistent block times can be a security feature; timing attacks harder to execute. Specific vulnerability analysis not provided in chat.

- **Q** (@BTCMini, msg#489329): Is the 6.0 Sigma update by kushti the same as the Reference Client?  
  **A** (@Glasgow｜WON'T DM, msg#489330, 2024-04-23): Different — reference client is the node software; 6.0 is for Sigma Lang (ErgoScript). [GitHub milestone](https://github.com/ScorexFoundation/sigmastate-interpreter/milestone/5)

- **Q** (@Bye H8er, msg#489512): Could developers create a yield aggregator to simplify liquidity provision across DuckPools, Spectrum, and SigmaFi?  
  **A** (@qx(), msg#489514, 2024-04-24): Lending is best for avoiding impermanent loss; can farm yields to offset IL; SigmaUSD holders especially well-positioned via DuckPools lending. No aggregator announced yet.

- **Q** (@Jack Σ, msg#489679): Can a tax reporting dApp be built on Ergo to track taxable events?  
  **A** (@Unknown, msg#489680): Yes, historical data is retrievable from on-chain via wallet address; recommended joining CruxFinance Telegram for specifics.

- **Q** (@Dream Big, msg#489583-msg#489606): Can Nautilus receive rsERG from Rosen Bridge, then swap on Cardano DEXes? Why does Rosen take 60-90 minutes?  
  **A** (@Pulsarz, msg#489598, 2024-04-25): Rosen is security-oriented, not instant like an exchange. Bridge time is architectural trade-off for safety. Nautilus connection to Cardano wallets coming via Rosen [@Dream Big, msg#489586].

- **Q** (@Alien, msg#489480, msg#489484): How do I download files from GitHub (Ergo mixer)?  
  **A** (@qx(), msg#489495-msg#489502, 2024-04-24): Right-side "releases" tab (landscape on mobile); direct link provided. Mac requires code execution + security settings; Windows works directly.

- **Q** (@Alien, msg#489457): What are stealth addresses for and can they hide activity?  
  **A** (Implicit from context, msg#489463): Mined ERG is naturally in stealth mode (new coins); stealth addresses provide privacy without mixer.

- **Q** (@cannon_q, msg#489760): Does storage rent only clear truly abandoned UTXOs, or can active wallets keep boxes forever if they consolidate regularly?  
  **A** (@dayumbbbb, msg#489761-msg#489763, 2024-04-27): Abandoned UTXOs get collected; active consolidation keeps boxes indefinite. Property is ephemeral unless maintained.

---

## Links Shared

- [Bitcoin Great Consensus Cleanup Revival](https://delvingbitcoin.org/t/great-consensus-cleanup-revival/710?u=antoinep): kushti shared discussion of worst-case block validation times and Bitcoin's timewarp vulnerability [@kushti, msg#489200, 2024-04-22].

- [Ergo Podcast / Sigmanauts](https://sigmanauts.com/podcast/): Recorded AMA available to listen/download [@Unknown, msg#489640, 2024-04-25].

- [ErgoHack VIII Registration](https://ergoraffle.com/ or similar): Bitcoin-Ergo interop hackathon with $9k prize pool [@Ergo NEWS $ERG, msg#489567].

- [Paideia DAO - Good Things](https://app.paideia.im/goodthingsdao): DAO token distribution and governance for Kenyan raffle participants [@qx(), msg#489192, 2024-04-22].

- [CruxFinance Telegram](https://t.me/CruxFinance): Support for tax reporting and ecosystem questions [@Unknown, msg#489683, 2024-04-26].

- [Ergo Mixer GitHub Releases](https://github.com/ergoMixer/ergoMixBack/releases): Direct download link for Ergo mixer [@qx(), msg#489498, 2024-04-24].

- [Rosen Bridge App](https://app.rosen.tech): Bridge interface for rsERG ↔ ERG, rsADA, rstBTC [@Unknown, msg#489771-msg#489775, 2024-04-28].

- [Sigma Lang Milestone 6.0](https://github.com/ScorexFoundation/sigmastate-interpreter/milestone/5): ErgoScript/Sigma protocol improvements [@Glasgow｜WON'T DM, msg#489330, 2024-04-23].

- [Sigma Rust (GitHub)](https://github.com/aslesarenko/sigma-rust): Reference mentioned for Sigma protocol implementations.

- [Yoroi Wallet Recovery Tool](https://github.com/satsen/yoroi-ergo-wallet-recover): Recovery aid for old Yoroi seeds [@Unknown, msg#489877, 2024-04-28].

---

## Unresolved Questions

- **Sub-blocks ETA**: Community repeatedly asked when sub-blocks will ship; responses were "soon" and "coming soon" without firm date [@TMR.ΣRG, msg#489255; @W || Mafia, msg#489288].

- **Block Time Optimization Roadmap**: Multiple discussions about whether to pursue sub-blocks, layer 2, sharding, or sidechains; kushti indicated this would be re-discussed post-Ergoversary but no decision documented [@kushti, from AMA session context].

- **Yield Aggregator Status**: No announcement of a project building aggregated yield across DuckPools / Spectrum / SigmaFi, though it was flagged as valuable UX improvement [@Bye H8er, msg#489512].

- **Ledger App Token Limit Workaround**: Suggested consolidation but no clear fix documented for users hitting >20 token limit [@Unknown, msg#490006].

- **DF0 (Dark Fund Zero) Status**: Mentioned as potentially at risk long-term if privacy tech faces regulatory pressure; no active grants or policy updates shared [@filippounits, msg#489438; @Unknown, msg#489444].

- **Coinbase Listing Possibility**: Community asked if MEXC trading revenue could fund Coinbase listing; no response from EF [@Bye H8er, msg#490014].

- **Rosenbridge Cardano Wallet Integration**: When will Cardano wallet connection be available on Rosen for direct ADA→rsERG swaps and bridge back? Timeline not specified [@Dream Big, msg#489586].

---

## Community Sentiment & Miscellaneous

- **MEXC listing received mixed enthusiasm**: Some community members celebrated; others noted emission inflation pressure and questioned why price wasn't rising despite news [@Chris Ray, msg#489371; @Saphuza, msg#489341-msg#489346].

- **Forbes "zombie chain" article polarized discussion**: Ergo not explicitly named, but debate highlighted that regulatory capture vs. genuine metrics is hard to distinguish [@dayumbbbb, msg#489974-msg#489982; @kushti, msg#489977-msg#489978].

- **Privacy mixer legitimacy affirmed**: Community consensus that Ergo mixer is resilient and development proceeding responsibly; concern is about app distribution if GitHub is pressured [@qx(), msg#489420-msg#489451].

- **Scam/spam moderation issues**: Multiple calls for moderation (bans of scam bots, spam accounts); Pulsarz requested mod rights [@Pulsarz, msg#489895; @Unknown, msg#489870].