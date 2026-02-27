# Ergo General Chat — 2024-W25 Summary
**Period:** 2024-06-17 to 2024-06-23
**Messages Processed:** 959 across 52 participants

---

## Key Topics Discussed

- **ErgoHack VIII Projects & Community Vote**: Eight days of project presentations culminated in a community vote. Mining BTC swap (Sigmanauts) won 1st place, followed by Crystal Pool (2nd), DuckPools & SigmaRand (3rd), with over 6,000 ERG in total awards distributed. High-quality submissions across DEX tooling, mining configuration NFTs, random number generation, cross-chain bridging, and wallet research.

- **Crystal Pool (C8's Real-Time DEX)**: A self-custodial exchange with centralized batcher enabling near-CEX-like UX while maintaining on-chain settlement. Can share liquidity with Spectrum AMM pools and Trade House order books through composable contract design. Discussed compatibility with other DeFi primitives and potential UX edge cases.

- **Trade House & Order Book DEX Design**: Order-based DEX with total transparency of depth and slippage control. Key advantage over AMM: users choose exact execution prices and can avoid impermanent loss. Enables arbitrage tools and partial order fills. Composable with Spectrum LPs and other protocols.

- **Palmyra (Zengate) & Chainlink Partnership**: Zengate using Chainlink for proof-of-reserve oracle feeds for decentralized trade financing of warehouse receipts. Core protocol (Winter Protocol) and tokenization built on Ergo. Uses IoT devices (cameras, weight/motion sensors) coupled with Chainlink for commodity auditing. Ergo Oracles v2 development planned; current approach is pragmatic given Chainlink turnkey availability.

- **Cross-Chain Bridging & Rosen Bridge Expansion**: Multiple initiatives announced: EVM adaptor, Bitcoin Runes support, R&D for Monero, RosenFast service, Bridge Expansion Kit, Bridge SDK, Doge/BCH support, sponsor chain partnerships, Hummingbot integration. Rosenport (batching service for smaller cross-chain transfers) presented to reduce fees via bulk processing.

- **SigmaFi UI Revamp**: kushti spending spare time improving SigmaFi usability with UI overhaul. Live at https://sigmafi.app/.

- **Ergo 6.0 Testnet & Speed Improvements**: Multiple protocol acceleration discussions flagged but deferred to post-Ergoversary. Block time reduction has implications for timestamp-dependent dApps and emission contracts. Proposed investigations into sub-blocks, sidechains, and faster confirmation protocols. Testnet available for community participation; needs motivated lead to coordinate parameter tweaking and scientific observations.

- **SigmaRand (True Random Number Generation)**: Noob77777 presented solution for generating cryptographically secure randomness on Ergo, addressing blockchain randomness challenge for gaming/lottery protocols.

- **Moria Finance (Smart Contract Fund Management)**: mgPai & LGD presented platform leveraging Ergo's smart contracts for multisig wallets and decentralized fund management.

- **Analogue Ergo & Wallet Wonderland**: Two community projects: Analogue Ergo (unclear scope from chat) and Wallet Wonderland survey project by Cannon_q & ErgoMinnow mapping user wallet preferences and habits.

- **EIP-Based Token Registry & Updateable Metadata**: HQ3rr explored CIP-68-like mechanism for Ergo: mint token once, update metadata in registers without changing token ID. Use cases for logistics, POS systems, and token tracking. kushti confirmed possible but requires offchain indexer modifications; EIP proposal would be useful.

- **Privacy & Security Discussions**: Reuben (privacy space developer) engaged; discussion of Spark (anonymity/curve tree techniques for global anon sets and asset support) mentioned but deferred details. Earlier mention of Cypra (privacy-oriented atomic swap wallet, Korean-sponsored, now defunct).

- **SigmaBounties/Rust Development**: @dayumbbbb pivoting from React Native → full Rust stack (Leptos frontend, Tauri mobile) after WASM/RN integration challenges. Plans for SigmaWallet mobile, ErgoBounties web dApp, TwoDo clone with Ergo login. Offered to contribute to ChainCash server (Rust-based).

- **Mobile Wallet Status**: Minotaur wallet in development (better than Stahlfelge's mobile wallet); iOS blocked by Apple Store issues. PGR working on mobile wallet/app. Nautilus wallet remains robust browser extension option.

- **Ergo's Market Position & Tribalism Discussion**: Extensive meta-discussion on community framing: emphasis on inclusive partnerships (Rosen Bridge, Chainlink integration) vs. tribalistic "Ergo-only" mentality. Consensus that multi-chain partnerships strengthen rather than weaken Ergo's positioning.

---

## Important Decisions or Announcements

- [@qx(), msg#497889, 2024-06-18]: **ErgoHack VIII Community Vote Results Announced**: 1st place – Mining BTC Swap (Sigmanauts); 2nd – Crystal Pool; 3rd (tied) – DuckPools & SigmaRand; 5th (tied) – Analogue Ergo & Wallet Wonderland; 7th – Rosenport; 8th – Moria Finance; 9th – Huangians. 6,000+ ERG awarded total.

- [@qx(), msg#497354, 2024-06-17]: **Spectrum DEX/Splash LP Migration Alert**: Liquidity providers on ADA/rsERG Spectrum pair urged to switch to Splash LP.

- [@Andy L, msg#497331, 2024-06-17]: **ErgoHack VIII Videos Releasing Throughout Week**: YouTube playlist published; high-quality projects across ecosystem (relay, atomic swaps, finance, mining, etc.).

- [@Armeanio, msg#498123, @498132, @498259, 2024-06-20]: **Zengate/Palmyra Chainlink Integration Announcement**: Winter Protocol (tokenization) on Ergo; Chainlink used for proof-of-reserve; Rosen Bridge for asset movement; MGPai/LGD implementing trustless Chainlink data reads into Ergo.

- [@CW, msg#498953, 2024-06-21]: **Rosen Bridge Expansion Roadmap**: EVM adaptor, Bitcoin Runes, Monero R&D, RosenFast, Bridge Expansion Kit, Bridge SDK, Doge/BCH/sponsor chain support, Hummingbot integration (no priority order given).

- [@kushti khushi, msg#499296, 2024-06-23]: **SigmaFi UI Revamp Live**: Improved usability deployed; kushti dedicating spare time to maintenance/improvement.

- [@cannon_q, msg#497444, 2024-06-17]: **Wallet Wonderland Survey Results**: 74 ERG, 10M BUNS (GreasyCex/GIF Missions), 104 NFTs distributed to survey participants. Community voting open for ErgohackVIII awards on Paideia DAO.

- [@kushti khushi, msg#497450-451, 2024-06-17]: **rsBTC Bonus Rewards Raffle for Sigmanauts Mining Pool**: 200 ERG funding goal created by Marc the Shark; fully funded by 6 contributors as of 2024-06-18.

- [@HQΣr, msg#497654, 2024-06-18]: **rsBTC Bonus Raffle Fully Funded**: 200 ERG goal reached.

---

## Technical Q&A Worth Preserving

- **Q** (@dayumbbbb, msg#497373-375): How does the Bitcoin relay contract work? Who updates it with latest blocks? Can dApps build on top?
  **A** (@kushti khushi, msg#497380): "Trustless oracle indeed" — implied relay requires oracle service to update with new Bitcoin block headers; dApps can then validate/reference via the relay contract.

- **Q** (@Rj, msg#497964): Explain trustless Bitcoin relay in simple terms.
  **A** (@qx(), implied via msg#497970 context): Video too technical; suggested ELI5 translator needed for complex ErgoHack projects. (Unresolved — no simple explanation provided in chat.)

- **Q** (@Luivatra, msg#497704-717, @kushti khushi, msg#497710-714): Can Crystal Pool orders share liquidity with Spectrum LPs? How do context extension reads work in ErgoScript?
  **A** (@kushti khushi, msg#497710, 497697-700): ChainCash uses context extension reads for reactive FSM-like processing (action IDs encode output paths). 6.0 scope adds ability to read context extension of another input. ChainCash pattern: `if (action >= 0) { spending path } else { redemption path }`. Grid trading orders made compatible with Spectrum LPs via contract design for composability.

- **Q** (@HQΣr, msg#499045-051, @kushti khushi, msg#499049-051, 499074): Can we implement CIP-68-like updateable token metadata on Ergo (mint once, update registers without changing token ID)? Is this useful for tracking/logistics?
  **A** (@kushti khushi, msg#499049-051, 499074): "Possible for sure" but requires offchain scanner modifications. "You can have a box committing to a database and then set update rules in its contract." EIP proposal would be useful for standardization.

- **Q** (@HQΣr, msg#499061-063): Can a smart contract address be used as a token registry database?
  **A** (@Pulsarz, msg#499062-064): "Define database" — pointed to ErgoNames repository as example. (@kushti khushi, msg#499074 confirms: yes, via box with database commitment and update rules in contract.)

- **Q** (@Rj, msg#497791-838, @Pulsarz, msg#497799-835): Is Rosenport like Lightning Network for cross-chain? Would it need pre-bridged liquidity?
  **A** (@Pulsarz, msg#497801-805, 498801-805): No "pre" bridging; Rosenport is a batching contract (bus) that collects transactions up to liquidity limit, then processes them. Slower than direct bridge but cheaper for small amounts. No centralization; users can exit before batch departs. Risk of fund lock if batch breaks in mempool (edge case discussed but not fully resolved).

- **Q** (@dayumbbbb, msg#499077-078): Why couldn't I deliver Sigma Wallet on React Native?
  **A** (@dayumbbbb, msg#499077-078): WASM support in React Native limited; wasm/javascript didn't work as-is. Pivoting to Rust + Leptos (frontend) + Tauri (mobile binaries) instead.

- **Q** (@BTCMini, msg#499317): Will Eth bridge link with MetaMask?
  **A** (@Unknown, msg#499321): Bridge locks native asset with multisig, creates rsToken on other side. MetaMask is just one EVM wallet; any Ethereum wallet works.

---

## Links Shared

- [https://youtu.be/mx3n6j3OsdE](https://youtu.be/mx3n6j3OsdE): kushti's trustless Bitcoin relay presentation (ErgoHack VIII).
- [https://youtu.be/aYH110rQKk4](https://youtu.be/aYH110rQKk4): Deathgripson's atomic swaps (Ergo ↔ Bitcoin Lightning).
- [https://youtu.be/pRiAqPdOLaU](https://youtu.be/pRiAqPdOLaU): mgPai & LGD – Moria Finance (multisig fund management).
- [https://youtu.be/jcGb3hpJU2A](https://youtu.be/jcGb3hpJU2A): qx() & Marc the Shark – Sigmanauts mining NFT config tool.
- [https://youtu.be/V_ZYRap1iDo](https://youtu.be/V_ZYRap1iDo): C8 – Crystal Pool (real-time DEX).
- [https://youtu.be/gJQiAB7H8J4](https://youtu.be/gJQiAB7H8J4): KrasaviceBlasen & DuckPools – Option Pools primitive.
- [https://youtu.be/flJWESKXOug](https://youtu.be/flJWESKXOug): Noob77777 – SigmaRand (secure randomness).
- [https://youtu.be/AmMQns6ECL8](https://youtu.be/AmMQns6ECL8): sangeet24, kii, hammermann – Rosenport (cross-chain batching).
- [https://youtu.be/bfoiaC24F7o](https://youtu.be/bfoiaC24F7o): Cannon_q & ErgoMinnow – Wallet Wonderland survey.
- [https://youtu.be/Kg8p0g2I0xI](https://youtu.be/Kg8p0g2I0xI): Reva & Henry (Cornell) – Ergo Platform university education expansion.
- [https://github.com/SavonarolaLabs/crystal-pool/](https://github.com/SavonarolaLabs/crystal-pool/): Crystal Pool smart contract source code.
- [https://sigmafi.app/](https://sigmafi.app/): SigmaFi revamped UI (live).
- [https://dex.crooks-fi.com/](https://dex.crooks-fi.com/): CruxFinance DEX (Ergo meme coin liquidity).
- [https://app.paideia.im/ergohackviiicommunityawards/proposal](https://app.paideia.im/ergohackviiicommunityawards/proposal): Paideia DAO voting for ErgoHack VIII community awards.
- [https://x.com/zengateglobal/status/1803789800312275164](https://x.com/zengateglobal/status/1803789800312275164): Zengate/Palmyra Chainlink partnership announcement (Armeanio share).
- [https://x.com/ERG_Armeanio/status/1803821186477904040](https://x.com/ERG_Armeanio/status/1803821186477904040): Armeanio's perspective on Zengate ecosystem positioning.
- [https://x.com/auction_house_/status/1802874118527656332](https://x.com/auction_house_/status/1802874118527656332): Auction House dApp surprise announcement.
- [https://youtu.be/xeVyfiP0cLk](https://youtu.be/xeVyfiP0cLk): Video on generational cycles & institutional change (shared by Glasgow).
- [https://dex.crooks-fi.com/ergo/liquidity/47a811c68e49f6bfa6629602037ee65f8d175ddbc7b64bdb65ad40599b812fd0](https://dex.crooks-fi.com/ergo/liquidity/47a811c68e49f6bfa6629602037ee65f8d175ddbc7b64bdb65ad40599b812fd0): rsBTC liquidity pool on CruxFinance.
- [https://docs.ergoplatform.com/eco/ergomixer/mixer-android/](https://docs.ergoplatform.com/eco/ergomixer/mixer-android/): ErgoMixer Android documentation (running on Termux).
- [https://blog.casa.io/security-issues-with-browser-based-bitcoin-wallets/](https://blog.casa.io/security-issues-with-browser-based-bitcoin-wallets/): Security analysis of browser-based wallets (why PWAs not recommended for crypto).
- [https://www.youtube.com/watch?v=42RgroGf02I](https://www.youtube.