# Ergo General Chat — 2023-W03 Summary

## Key Topics Discussed

- **Sigmanauts Program Structure & Transparency**: Extended discussion about the organization's role, accessibility to newcomers, voting processes, and potential conflicts of interest with EF members. Emphasis on making the program more transparent and inclusive while maintaining quality standards. First public posting of weekly meeting notes and transcripts initiated per Vote 23.

- **Lithos Protocol Launch**: Presentation of decentralized mining protocol as successor to GetBlok, featuring on-chain share processing via NIPoPoWs, smart contract-based payments, and miners' ability to choose risk-to-reward ratios. Twitter Space held 2023-01-19 with detailed technical breakdown.

- **SigmaUSD Reserve Ratio Dynamics**: Reserve ratio dropped below 400% (to ~389%), restricting new SigmaUSD minting. Community discussion on how large minting events (400k+ SigmaUSD in 3 days) affect protocol stability. Multiple workarounds noted: price appreciation, SigmaRSV minting, Spectrum DEX trading.

- **Rosen Bridge Development Progress**: Multi-week debugging of watcher bugs completed; public testnet deployment imminent. Added features: logging APIs, PostgreSQL support, Koios updates, P2P optimizations, cold storage fixes. Minotaur wallet dApp connector testing in progress.

- **ErgoMixer Privacy & Compliance**: Technical discussion distinguishing ErgoMixer (self-run, non-custodial on-chain mixing) from Tornado Cash model. Hop feature explained as mitigation for CEX transaction filtering. No central service means no arrest vectors, but wallet identity exposure remains a risk if CEX deposit is traced.

- **Node Version 6.0 Planning**: Community discussion on block speed improvements—confirmed that changes to block time affect applications relying on block height (vs. timestamp). Testnet 6.0 setup with configurable parameters announced; need for community-driven testing and observation gathering.

- **Spectrum Finance IDO & SPF Token**: Community Round IDO launched mid-week. qx() prepared to make initial LP. Token integration into tipper bot proposed but pending actual distribution.

- **Merged Mining Expansion**: KAS, ALPH, RXD already supported on Ergo pools (visible on miningpoolstats.stream/ergo). Community interest in technical feasibility and further opportunities.

- **Wallet Migration from Legacy Electrum-based Wallet**: Old Ergo Electron-based wallet no longer supported. Recommended migrations to Nautilus (desktop extension), Minotaur, or Satergo (desktop standalone). Ledger support available in developer mode with tutorial.

---

## Important Decisions or Announcements

- [@qx(), msg#363024, 2023-01-16]: **Vote 23 Passed**: Sigmanauts meeting screen share, notes, and transcript will be made public; warning to be announced at start of each Zoom allowing privacy name changes; policy effective starting 2023-01-22.

- [@kushti khushi, msg#363346, 2023-01-17]: **ErgoMixer 4.3.0 Released**: Major updates including AppKit 5.0.0, frontend React improvements, node version 16, SigmaUSD scenario fixes, installation script improvements.

- [@kushti khushi, msg#363960, 2023-01-20]: **Ergo Protocol Reference Client 5.0.6 Released**.

- [@CW, msg#363737, 2023-01-19]: **ErgoHack VI – Cypherpunk Finance announced**: Registration open Jan 19 – Feb 21; hackathon Feb 8–22; prize pool 18k SigmaUSD + 300k ErgoPad tokens; register at ergohack.io.

- [@qx(), msg#364398, 2023-01-22]: **First Public Posting of Sigmanauts Weekly Meeting Notes**: Comprehensive meeting log published with agenda, accomplishments (SigmaVote app, distributed Twitter access, Twitter Spaces hosting capability, mission statement, org structure drafts, meeting recording/publishing), discussions on TikTok/YouTube Shorts outreach, weekly/bi-weekly Spaces planning, treasury legal considerations, Dexy logo voting, and onboarding page modifications in progress.

- [@CW, msg#364494, 2023-01-22]: **Community Chats Moving to Reddit Format**: Decentralized lending protocols discussion (collateralized, uncollateralized, pool-based, options, bonds) to launch Tuesday; questions invited at r/ergonauts link.

- [@Armeanio, msg#363953, 2023-01-16]: **No ICO/Premine Confirmed as Unique Advantage**: Ergo's fair launch from genesis with PoW-only distribution cited as differentiator vs. other chains.

- [@Glasgow｜WON'T DM, msg#363975, 2023-01-20]: **Ergo Added to Electric Capital Crypto Ecosystems GitHub**: Community registry documentation expanded with wallet, core, dApp repositories.

---

## Technical Q&A Worth Preserving

- **Q** (@TMR.ΣRG, msg#362913): When people say "Monero can be built on top," what does that mean exactly—sidechain? Bridge ERG over for privacy functions? Different coin altogether?
  **A** (@qx(), msg#362932): The dApp itself can use ring signatures for ERG to support privacy. No sidechain needed.

- **Q** (@eπ, msg#363513): How will staking rewards be counted on wrapped Cardano in Rosen Bridge?
  **A** (@qx(), msg#363518): Currently an "interesting idea" without public implementation details. Tracking would require off-chain oversight since Rosen's current design doesn't know if a user is returning or new—just processes the swap.

- **Q** (@Unknown, msg#364170): Who is the counterparty when I exercise a SigmaO option token? Say I buy a $10 call, ERG goes to $20—who sells me ERG at $10?
  **A** (@Unknown, msg#364178): Similar to writing covered calls; option tokens trade on a DEX, so counterparty is whoever holds the token position.

- **Q** (@Unknown, msg#364194): How do I calculate instantaneous leverage of SigmaRSV token? If ERG increases by Y%, how much does SigRSV NAV increase?
  **A** (@Unknown, msg#364202): At 4:1 collateralization with 10% ERG price increase: collateral rises $4→$4.4, equity $3→$3.4, yielding ~1.33x leverage (13.33% SigRSV gain).

- **Q** (@Unknown, msg#364023): Where can I find my node URL for mobile wallet integration?
  **A** (@Pulsarz, msg#364026-364031): Local network IP (e.g., `http://192.168.1.100:9052/`); mobile won't work on 4G—WiFi or VPN (Wireguard) required.

- **Q** (@Unknown, msg#363618-363650): Can I create a wallet + token restricted to my ecosystem only, transacting only with business partners?
  **A** (@qx(), msg#363624-363628): Tokens created on Ergo are tradeable anywhere on-chain; wallet restrictions can't prevent seed restoration to another wallet. Consider a fake wallet interface swapping to/from smart contract, or build your own sidechain. Referred to ErgoPad for similar implementations.

- **Q** (@Unknown, msg#363037-363081): How do Sigmanauts balance selective membership (voting) with accessibility for newcomers wanting to contribute?
  **A** (@qx(), msg#363081): Sigmanauts is *one* organized path, not the *only* way to have a voice. Non-members can still create groups, build trust, and gain access to channels. Organization, accountability, and standards are necessary for efficiency; community should propose changes or build alternatives if dissatisfied.

- **Q** (@Kenan93, msg#363379-363391): Which wallets work locally without MetaMask-style extension requirements?
  **A** (@ArØhβΣ @Arohbe 🍪, msg#363398): Minotaur or Satergo both support local storage; Satergo is Electron-based desktop app with transaction history restoration.

- **Q** (@Unknown, msg#364159): What happened around April 10, 2020, when addresses holding >1k/10k ERG 10x'd in a few days?
  **A** (@Unknown, msg#364160): Likely Coinbase integration/listing event (largest single address activity spike historically tied to exchanges).

---

## Links Shared

- [ergoplatform.org/en/blog/the-sigmanauts-programme/](https://ergoplatform.org/en/blog/the-sigmanauts-programme/): Sigmanauts Program official description and mission statement.

- [docs.google.com/document/d/1J6PdyyxoEEqI0nEr64ZZBGU4Lkr8Cr37GqNSs4qHo7Q](https://docs.google.com/document/d/1J6PdyyxoEEqI0nEr64ZZBGU4Lkr8Cr37GqNSs4qHo7Q/): Sigmanauts mission statement and principles document.

- [ergoforum.org/c/marketing/marketingdao/20](https://www.ergoforum.org/c/marketing/marketingdao/20): Marketing DAO forum for community ideas.

- [github.com/Lithos-Protocol/LitePaper](https://github.com/Lithos-Protocol/LitePaper): Lithos Protocol technical documentation and vision.

- [t.me/LITHOS_Protocol](https://t.me/LITHOS_Protocol): Lithos Protocol community Telegram.

- [github.com/ergoMixer/ergoMixBack/releases/tag/4.3.0](https://github.com/ergoMixer/ergoMixBack/releases/tag/4.3.0): ErgoMixer 4.3.0 release with AppKit 5.0.0 and UI updates.

- [docs.ergoplatform.com/ergo-foundation-2022/](https://docs.ergoplatform.com/ergo-foundation-2022/): Ergo Foundation 2022 spending transparency report (~$7.2m on development, tooling, infrastructure, hackathons, research, grants).

- [ergoplatform.org/en/get-erg/#Wallets](https://ergoplatform.org/en/get-erg/#Wallets): Official list of maintained Ergo wallets (Minotaur, Nautilus, Satergo, Terminus, Ergo Wallet App).

- [ergohack.io](https://ergohack.io): ErgoHack VI registration and details.

- [medium.com/@soysor/practical-nipopows-for-spv-on-ergo-beb99d610365](https://medium.com/@soysor/practical-nipopows-for-spv-on-ergo-beb99d610365): Practical NIPoPoWs writeup for Ergo.

- [miningpoolstats.stream/ergo](https://miningpoolstats.stream/ergo): Ergo mining pool stats showing merge mining support (KAS, ALPH, RXD).

- [github.com/electric-capital/crypto-ecosystems](https://github.com/electric-capital/crypto-ecosystems): Electric Capital ecosystem registry with Ergo entry (repositories, organizations, wallets).

- [ergoplatform.org/en/blog/Earning-ERG-in-2023-and-Beyond/](https://ergoplatform.org/en/blog/Earning-ERG-in-2023-and-Beyond/): Blog post on ERG earning mechanisms (mining, lending, staking via community protocols).

- [anchor.fm/thesigmacast](https://anchor.fm/thesigmacast): The Sigmacast podcast featuring Ergo AMAs and Twitter Spaces recordings.

- [reddit.com/r/ergonauts/comments/10j58ip/community_chat_tuesdays_decentralized_lending/](https://www.reddit.com/r/ergonauts/comments/10j58ip/community_chat_tuesdays_decentralized_lending/): Community chat on decentralized lending protocols moved to Reddit format.

- [sigmaverse.io](https://sigmaverse.io): Ergo dApp directory and ecosystem overview.

---

## Unresolved Questions

- **Binance Listing Likelihood & Timing**: Ongoing speculation about whether Ergo will be listed on Binance. Some community members argue listing is unnecessary or harmful due to Binance's practices (wash trading, BUSD backing claims); others believe it would increase trading volume and legitimacy. No official announcement or timeline confirmed.

- **SigmaO (Option Protocol) Implementation Details**: Technical specifics of how option premium is determined at minting, counterparty mechanics, and Black-Scholes pricing integration remain unclear. kushti noted review of contracts is ongoing, but public documentation is under development.

- **Rosen Bridge ADA Staking Rewards Handling**: Exact mechanism for users to maintain Cardano staking rewards while transacting on wrapped ADA via Rosen Bridge remains "an interesting idea" without finalized design.

- **Node 6.0 Block Speed Improvements**: Community interest in faster blocks exists, but no consensus on specific parameters (block time, difficulty adjustment) has been reached. Testnet setup announced to gather scientific observations, but leadership needed for proposal formulation.

- **Sigmanauts Treasury Setup & Legal Structure**: Multiple options discussed (DAO, WY DAO LLC, anon structures) for treasurer management, but legal guidance from ErgoPad and Spectrum pending. Minotaur multisig test planned with burner tokens before real deployment.

- **Ergo Mobile Wallet Status**: Multiple legacy wallets (Electron-based, Yoroi) no longer actively maintained. Current mobile options limited to Terminus (iOS). Desktop Minotaur and Satergo available but adoption/UX feedback limited in logs.

- **CPU/GPU Mining Hardware Optimization**: Wolf9466 noted no well-optimized Ergo CUDA/RDNA3 miner exists; currently testing on Kaspa with custom AMD tools. Potential opportunity for community miner development unresolved.

---

**Note**: This week featured significant organizational progress (Sigmanauts transparency, Lithos launch, community channel migrations) alongside technical depth on protocol economics (SigmaUSD reserve dynamics, option mechanics) and infrastructure (Rosen Bridge debugging, node upgrades). Price speculation and off-topic chatter were filtered; focus retained on actionable development and community structure decisions.