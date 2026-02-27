# Ergo General Chat — 2023-W22 Summary
## Period: 2023-05-29 to 2023-06-04

---

## Key Topics Discussed

- **Storage Rent / Demurrage as Fixed Supply Mechanism**: @dayumbbbb advocated that storage rent (demurrage) is Ergo's unique innovation enabling a guaranteed ~100M ERG fixed supply forever, contrasting Bitcoin's deflationary loss of coins and Ethereum's inflationary uncertainty. Discussion centered on how this makes Ergo's authorized shares, outstanding shares, and floating shares converge mathematically.

- **Spectrum DEX & Order Book vs. AMM UI Design**: @qx() and community discussed Trade House and Auction House order book models as alternatives to Uniswap-style AMM interfaces, emphasizing transparency of market depth and user control over slippage vs. liquidity.

- **SigmaUSD Minting & SigmaRSV Rewards**: @qx() explained the 2.25% minting fee that accrues to SigmaRSV holders, and how bull runs trigger high minting activity that benefits RSV holders while locking ERG into contracts as a pump mechanism for price discovery.

- **Rosen Bridge Multi-Chain Integration**: @Glasgow shared dev updates on improved chain abstraction, fixed CIP-14 dependency issues, and progress on Watcher APIs (Assets, Info, Observations, Events) with EVM chain R&D ongoing.

- **Paideia DAO On-Chain Deployment**: @Unknown reported that Paideia contract implementations are now operational on-chain, with remaining work integrating DB and Web 2 demo to provide seamless user experience and full on-chain governance voting.

- **Dexy Protocol Launch Timeline**: @kushti confirmed Dexy launch date tied to Ergo Summit announcement and Oracle Pools v2 testing completion; making slides for summit presentation.

- **ErgoAuth Cold Wallet Signing**: @MrStahlfelge clarified that cold wallet support was added in v2.2.2221 (2022-11-17), but @Flying Pig reported continued QR code scanning failures ("Unknown QR format") when attempting to sign from cold phone using Paideia dApp.

- **AI Code Generation for dApps**: @qx() and community discussed feasibility of AI (via GPT/similar) writing functional ErgoScript contracts from natural language; consensus that it's already possible for simple dApps with appropriate training, raising broader automation concerns for developers.

- **Transcription & Voice-to-Text Infrastructure**: @qx() demonstrated OpenAI Whisper integration with RTX 3900 GPU achieving ~4-5 min transcription for 1-hour audio (tiny model) and ~10 min (large model); built headless portal for team use with file submission, backend processing, and multi-format output delivery.

- **Mempool Transaction Disappearance During Confirmation**: @dayumbbbb asked why transactions disappear briefly when moving from unconfirmed to confirmed state; @Flying Pig explained this is due to explorer using multiple node instances with slight sync delays (~5 seconds scan interval) plus DB insertion lag, not atomic update issues.

- **Tokenomics Transparency & Public Sale Clarity**: Discussion centered on misleading infographics claiming 95% "public sale"; @dayumbbbb clarified actual distribution: ~4.4% Foundation, ~1.4% airdrop, ~94.2% mining, with treasury emission only during first two years. Noted existing blog post is first Google result and may confuse newcomers.

- **meme coins & Bass Fishing Mechanics**: @Bass project added fishing lottery to Ergo ecosystem; community debated sustainability vs. fun/learning. @Dan advocated for transparency over shilling; @HQΣr working on stat dashboards for token tracking. 2MB blocks and 222 tx seen during peak activity.

- **Ergoversary (4th Anniversary) July 1-3 Event**: Officially announced; large celebration planned with multi-day schedule. Community encouraged to spread word and contribute.

---

## Important Decisions or Announcements

- [@kushti, msg#394200]: Proposed creating all-over print pants with kushti's face as Ergo merch (later implemented by @TMR.ΣRG at opensauce.store)

- [@kushti, msg#395120]: Created raffle for zero-interest loans to Kenyan cooperative with DAO repayment structure (https://ergoraffle.com/raffle/show/f3d8d94c2af7a9bc7ea8615cc4bacb827960a60392d0264944b3638bce1c8ff9)

- [@TMR.ΣRG, msg#394268]: Launched Kushti pants merch at https://opensauce.store/products/kushtis-new-pants

- [@TMR.ΣRG, msg#394278]: Released additional BASS and Erdoge merch, working on cheaper sticker options via custom-made supply chain

- [@TMR.ΣRG, msg#395131]: Released bargain-bin t-shirt options at https://opensauce.store/collections/bargain-bin

- [@Ergo NEWS, msg#394532]: Announced Ergoversary July 1-3, 2023 celebration with major community event

- [@Glasgow, msg#394842]: Rosen Bridge dev update: generic type abstraction complete, CIP-14 dependency removed, Watcher APIs in code review (Assets/Info done; Observations/Events pending)

- [@CW, msg#394883]: Weekly AMA scheduled Thursday Jun 1 1 PM UTC on YouTube

- [@Unknown, msg#394880-881]: DuckPools security audit completed; contract changes required per audit; checklist tests underway before private testing

- [@MrStahlfelge, msg#395460]: Clarified ErgoAuth cold wallet support added in v2.2.2221 (2022-11-17); @Flying Pig still reporting issues on latest app version

- [@Aberg, msg#395793]: Plans to finish Satergo update and publish Yoroi recovery tool this week

- [@Glasgow, msg#395185]: May 2023 Monthly Wrap-Up published covering ecosystem, projects, NFTs, gaming, development, articles, and media

---

## Technical Q&A Worth Preserving

- **Q** (@Ace, msg#394668): "Will Rosen bridge allow a user to directly trade ERG and ADA, or will there need to be wrapped tokens?"
  **A** (@qx, msg#394675-676): Cross-chain swaps require bridging via wrapped assets (rAda, rErg); Spectrum Finance sidechain will eventually enable direct ERG/ADA pairs, but current model uses wrapped token pools on each chain.

- **Q** (@Ace, msg#394687): "Why can't a decentralized order book DEX connect two wallets (one on Cardano, one on Ergo) for cross-chain atomic swaps without wrapped tokens?"
  **A** (@Unknown, msg#394689): Blockchains are isolated ledgers; trustless settlement requires either bridges (introducing wrapping) or layer-2 solutions like Spectrum's sidechain.

- **Q** (@F, msg#395507): "Is there a formula to calculate SigmaRSV received when redeeming ERG at a specified price?"
  **A** (@Klaus, msg#395512-515): No formula; price alone insufficient — reserve ratio, total collateral, and redemption queue state all affect output. Playing with SigmaUSD calculator helps build intuition.

- **Q** (@qx, msg#395664): "How far are we from AI writing functional smart contracts from natural language descriptions?"
  **A** (@qx, msg#395667-668): Already possible for simple dApps if trained on target language (ErgoScript); full functional programming feasible, but trust/audit requirements remain; AI-generated code still needs human review.

- **Q** (@dayumbbbb, msg#395434-435): "Why do transactions briefly disappear from explorer when transitioning from unconfirmed to confirmed?"
  **A** (@Flying Pig, msg#395436): Explorer queries multiple node instances with slight sync delays (~5 second scan interval); transaction appears confirmed on faster instance before slower instances update. DB insertion lag also contributes. Not atomic issue — just eventual consistency.

- **Q** (@Flying Pig, msg#395462-469): "ErgoAuth QR code scan from cold wallet shows 'Unknown QR format' error. Hot phone provides QR, cold phone rejects it."
  **A** (@MrStahlfelge, msg#395463-468): ErgoAuth cold wallet support was added v2.2.2221. Requested screenshot of failing QR to debug; issue may be version mismatch or Paideia website implementation.

- **Q** (@TMR.ΣRG, msg#395697-698): "Can BTCPayServer accept ERG payments?"
  **A** (@dayumbbbb, msg#394708): Unknown direct implementation; suggested cryptocurrencycheckout.com portal as alternative for ERG payment processing.

- **Q** (@HQΣr, msg#395109): "Is exchange calculator for token conversions useful to add to token dashboard?"
  **A** (@qx, msg#395597): Yes — data transparency for token swaps and tracking dumpers serves educational purpose; "show it all bro."

---

## Links Shared

- [https://ergcube.com/](https://ergcube.com/): Token dashboard with holder tables, richlist, price metrics, volume, TVL, supply, staking, burning, LP totals; newly added whale/shark/shrimp categorization; swap integration pending
- [https://opensauce.store/](https://opensauce.store/): Ergo merch store (Kushti pants, BASS/Erdoge merch, stickers, embroidered hoodies)
- [https://opensauce.store/collections/bargain-bin](https://opensauce.store/collections/bargain-bin): Cheaper t-shirt options
- [https://ergoraffle.com/](https://ergoraffle.com/): Community raffle platform (open-source, self-hostable)
- [https://ergoraffle.com/raffle/show/f3d8d94c2af7a9bc7ea8615cc4bacb827960a60392d0264944b3638bce1c8ff9](https://ergoraffle.com/raffle/show/f3d8d94c2af7a9bc7ea8615cc4bacb827960a60392d0264944b3638bce1c8ff9): kushti's Kenyan cooperative zero-interest loan raffle
- [https://ergoraffle.com/raffle/show/2ba18e988f0e9ba205b7157c9ee1ae100ecdd9e6d88155acc6b6510c31f049b2](https://ergoraffle.com/raffle/show/2ba18e988f0e9ba205b7157c9ee1ae100ecdd9e6d88155acc6b6510c31f049b2): Legitimate raffle promoted by kushti (as opposed to scam raffles)
- [https://ergoplatform.org/en/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/](https://ergoplatform.org/en/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/): Official tokenomics blog (first Google result; may mislead on distribution)
- [https://ergoplatform.substack.com/p/ergo-platform-monthly-wrap-up-may](https://ergoplatform.substack.com/p/ergo-platform-monthly-wrap-up-may): May 2023 Monthly Wrap-Up
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/): Ergo Manifesto (referenced for new user onboarding)
- [https://pod-genius-app.vercel.app/](https://pod-genius-app.vercel.app/): @dayumbbbb's podcast transcription frontend (sample; backend ETL pipeline pulling top 200 Spotify/Apple podcasts, transcoding to WAV, running Whisper, paragraphing)
- [https://cryptocurrencycheckout.com/](https://cryptocurrencycheckout.com/): Payment portal for accepting ERG and other cryptocurrencies without extra fees
- [https://twitter.com/chrisblec/status/1664365331400228864](https://twitter.com/chrisblec/status/1664365331400228864): Chris Blec soliciting funding for research/reporting on Ergo (community funded 200+ ERG with no formal agreement)
- [https://ergoplatform.org/en/](https://ergoplatform.org/en/): Official Ergo Platform website
- [https://github.com/Luivatra/ergotipper-tokens](https://github.com/Luivatra/ergotipper-tokens): ErgoTipperBot supported token list

---

## Unresolved Questions

- **Cold Wallet Signing in ErgoAuth**: @Flying Pig reports persistent "Unknown QR format" errors on latest mobile app despite MrStahlfelge claiming v2.2.2221 support. Awaiting debug screenshot; may be app version, Paideia website integration, or qr format encoding issue.

- **Spectrum DEX Sidechain Timeline**: @qx mentioned "Spectrum is working on a side chain" for cross-chain trading, but no launch date or detailed technical roadmap shared.

- **Dexy Protocol Launch Date**: @kushti tied launch to Ergo Summit slides (July 1-3 event) and Oracle Pools v2 testing completion, but exact timeline not committed; "soon TM" language used.

- **ErgoAuth Cold Wallet Adoption**: @Marty noted Paideia will rely on cold wallet signing but uptake unclear; @MrStahlfelge said extending cold wallet support "no problem" if usage justifies it, but engagement metrics not discussed.

- **Curated vs. Open Raffle Policy**: Community debated whether ErgoRaffle UI should whitelist/curate raffles (like Monero CCS) or remain fully permissionless. @kushti said scams can be removed from hosted UI but not blockchain; no formal policy decided.

- **AI-Generated dApp Auditing Standards**: @qx suggested AI can write functional ErgoScript, but community flagged that trust/audit requirements remain open. No framework proposed for vetting AI-generated contracts.

- **Gate.io Stability Rumors**: @Jennie and others flagged withdrawal concerns following Twitter speculation; no official statement from Gate.io or community leadership on Ergo support continuity.

- **Mining Pool Fee Market Spam Attacks**: @kushti discussed spam protection from v4.0.44 (node limits on single-peer downloads), but questioned whether all nodes are configured to use these filters; adoption/effectiveness unclear.

- **Gang Wars Game Funding & Art**: @Unknown soliciting developer and artist funding for multi-NFT project crossover game; no commitments secured, timeline TBD pending "bull run" fundraising.

- **Shark vs. Dolphin Ecosystem Dynamics**: @Filip and @yasha lamented lack of entrepreneurial "sharks" willing to push Ergo visibility despite dev work; question of incentives (meat vs. smell) left unresolved.

---

**Note**: This week included heavy activity on memecoin discussion (BASS fishing lottery), merch launches, and tokenomics clarity. Core protocol work (Rosen, Dexy, Paideia, Oracle v2) progressed but remained developer-focused with limited timeline commitments. Community sentiment mixed: gratitude for bear-market builders offset by frustration over stalled grants and visibility gaps.