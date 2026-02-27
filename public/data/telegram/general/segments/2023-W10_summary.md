# Ergo General Chat — 2023-W10 Summary

## Key Topics Discussed

**Oracle Pools v2 Release & Reward Mechanism**
- [@kushti, msg#371685-371686, 2023-03-07]: v2.0.0-beta6 released with new protocol design that eliminates dust and rewards pool operators in custom reward tokens rather than ERG. Main features documented in EIP pull request #41.
- [@kushti, msg#371692-371704, 2023-03-07]: Protocol reward tokens gain value through a symbiotic feedback loop where stablecoin protocols (Dexy, ChainCash) split protocol fees to buy reward tokens from liquidity pools, incentivizing oracle operators.

**Dexy Stablecoin Development**
- [@kushti, msg#371708-371715, 2023-03-07]: Dexy backend, UI, and Spectrum LP integration in active development. Bank stats and minting UI to be hosted separately. Pay-to-oracle fees and contract review still pending.
- [@kushti, msg#371712, 2023-03-07]: Dexy flexible for multiple asset types (gold, others) — requires only new LP and oracle setup.
- [@kushti, msg#371714-371715, 2023-03-07]: SigGold planned as alternative to run first with SIPS protocol and Oracle Pools v2 for testing.

**ChainCash (Elastic P2P Money)**
- [@kushti, msg#371719, 2023-03-07]: ChainCash documentation and video in progress to improve accessibility and understanding.

**SigmaUSD Upgrade Considerations**
- [@kushti, msg#371713, 2023-03-07]: Good opportunity to consider Oracle Pools v2 upgrade to SigmaUSD after Dexy testing complete.
- [@Armeanio, msg#371718, 2023-03-07]: Reserve of Last Resort (RoLR) payout structure under consideration; could use above-threshold percentage or re-emission model.
- [@Armeanio, msg#371743-371753, 2023-03-07]: Optimal RoLR distribution should prioritize oracles (security), SigmaRSV holders (dilution offset), and potentially miners (security subsidy) under overcollateralization conditions.

**Rosen Bridge Development Progress**
- [@msg#371813, 2023-03-08]: Public beta launch pending sigma-rust fix. Guard service investigating wasm/prover timeout bugs (non-deterministic). New CLI package and asset download utilities in progress. Minotaur wallet working on multisig co-signing server.

**Spectrum Finance Yield Farming**
- [@Gazza, msg#371604, 2023-03-06]: Yield farming launch imminent ("last push now").

**ErgoPOS & Tabby App Launch**
- [@Gazza, msg#372025-372026, 2023-03-10]: Tabby App released on Google Play Store as test version for small ERG amounts; explicitly not for large transactions, using minimal server, security not prioritized in testing phase.

**Ergo Summit: Cypherpunk Finance**
- [@CW, msg#371560, 2023-03-06]: Announced post-ErgoHack VI video submissions showcase community projects and achievements.

**Community Wallet & Security Discussions**
- [@Aberg, msg#372121-372126, 2023-03-10]: Desktop wallet Satergo supports full Ergo node operation, Ergo-only (no Cardano), file-based wallet control, mitigates browser extension distribution risks and automatic update vulnerabilities.
- [@MrStahlfelge, msg#372124, 2023-03-10]: Mobile apps (Android/iOS) provide stronger process isolation than desktop; desktop security comparable to mobile only under Qubes OS.

---

## Important Decisions or Announcements

- [@CW, msg#371514, 2023-03-06]: Community chat scheduled for Tues Mar 7 17:00 UTC covering Oracle Pools v2, Dexy, and ChainCash.
- [@kushti, msg#371685-371686, 2023-03-07]: Oracle Pools v2.0.0-beta6 released; all oracle operators requested to update immediately.
- [@glasgowm, msg#371562, 2023-03-06]: Ergo Summit video published.
- [@CW, msg#371560, 2023-03-06]: Ergo Summit: Cypherpunk Finance series launched featuring post-ErgoHack community projects.
- [@Gazza, msg#372025-372026, 2023-03-10]: Tabby App (ErgoPOS payment system) released as public test version on Google Play Store.
- [@CW, msg#371865, 2023-03-09]: Ergo weekly AMA scheduled Thurs Mar 9 1 PM UTC (YouTube + Twitter Spaces); discussion topic: crypto "black boxes" and user assumptions.
- [@CW, msg#371866, 2023-03-09]: Hash It Out weekly series episode published discussing crypto black boxes with Armeanio and Noah.

---

## Technical Q&A Worth Preserving

**Oracle Pools v2 Reward Token Economics**

- **Q** (@Unknown, msg#371690-371691, 2023-03-07): How will Oracle Pools v2 reward tokens be used/swapped, and who determines their value?
  **A** (@kushti, msg#371694-371704, 2023-03-07): Dexy protocol splits fees into two parts — one to bank reserves, another to buy reward tokens from LP. This creates feedback loop: stablecoin adoption → fee generation → token buyback → oracle incentivization. ChainCash uses same pool mechanism. Other dApps using pools will also buy tokens back, creating self-driven incentive alignment.

- **Q** (@Unknown, msg#371698-371699, 2023-03-07): What happens if Dexy doesn't generate enough fees to sustain token buybacks?
  **A** (@kushti, msg#371701-371703, 2023-03-07): LP token price drops, reducing protocol-based oracle incentives. Manual sponsorship (as with v1) and revenue from other dApps using the same pool provide fallback support.

**SigmaUSD Future Development Path**

- **Q** (@Unknown, msg#371707, 2023-03-07): Was Oracle Pools v2 reward buyback mechanism suggested for SigmaUSD in SIPS?
  **A** (@Armeanio, msg#371718, 2023-03-07): If implemented, RoLR could pay above a threshold percentage or be structured for re-emission and added post-testing.

**Dexy Asset Flexibility**

- **Q** (@Unknown, msg#371711, 2023-03-07): How flexible is Dexy for assets beyond gold?
  **A** (@kushti, msg#371712, 2023-03-07): Requires only new LP and oracle feed; protocol design is asset-agnostic.

**Desktop vs. Mobile Wallet Security**

- **Q** (@eπ, msg#372120, 2023-03-10): Are browser extension wallets as safe as app wallets?
  **A** (@Aberg, msg#372121, 2023-03-10): No. Browser extensions face risks from browser bugs allowing inter-extension data access, centralized distribution control (bans, malicious updates), loss of software control (can be delisted), and shared browser-managed data storage vulnerable to OS failures. Desktop apps provide explicit wallet file control.

- **Q** (@eπ, msg#372125, 2023-03-10): Does Satergo support Cardano?
  **A** (@Aberg, msg#372126, 2023-03-10): No, Ergo-only. Supports full node operation if desired.

**Wallet Restoration After Device Loss**

- **Q** (@Grigore, msg#371981-371984, 2023-03-09): Can wallet be restored without mnemonic phrase if phone is broken?
  **A** (@HQΣr, msg#371729, 2023-03-07): If you have seed phrase, download Minotaur wallet and restore via seed import. [Implicit: seed phrase is the only recovery method.]

---

## Links Shared

- [https://docs.ergoplatform.com/eco/oracles-v2/](https://docs.ergoplatform.com/eco/oracles-v2/): Oracle Pools v2 documentation
- [https://github.com/kushti/dexy-stable/blob/master/paper/dexy.pdf](https://github.com/kushti/dexy-stable/blob/master/paper/dexy.pdf): Dexy whitepaper
- [https://github.com/kushti/chaincash](https://github.com/kushti/chaincash): ChainCash repository
- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.0-beta6](https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.0-beta6): Oracle Pools v2.0.0-beta6 release
- [https://github.com/ergoplatform/eips/pull/41](https://github.com/ergoplatform/eips/pull/41): Oracle Pools v2 EIP main features
- [https://docs.ergoplatform.com/ergo-foundation-2022/#exchanges](https://docs.ergoplatform.com/ergo-foundation-2022/#exchanges): Ergo Foundation exchange listings
- [https://www.youtube.com/watch?v=A6eMT5Yu5ow](https://www.youtube.com/watch?v=A6eMT5Yu5ow): Ergo Summit video
- [https://www.youtube.com/ergoplatform](https://www.youtube.com/ergoplatform): Ergo Platform YouTube channel
- [https://twitter.com/i/spaces/1djGXlAQNakGZ](https://twitter.com/i/spaces/1djGXlAQNakGZ): Ergo AMA Twitter Spaces (Mar 9)
- [https://youtu.be/U3E3jOnWoAc](https://youtu.be/U3E3jOnWoAc): Hash It Out episode on crypto black boxes
- [https://www.figma.com/file/6Hcec52oXE4JklvmmSoffn/Dexy-Bank-(Dark)?node-id=1%3A3&t=ctrZKOBPCl9ZVB4i-1](https://www.figma.com/file/6Hcec52oXE4JklvmmSoffn/Dexy-Bank-(Dark)?node-id=1%3A3&t=ctrZKOBPCl9ZVB4i-1): Dexy bank UX mockups (requires Google login for comments)
- [https://t.me/sigmafi](https://t.me/sigmafi): SigmaFi Telegram
- [https://sigmafi.app](https://sigmafi.app): SigmaFi application
- [https://ergcube.com](https://ergcube.com): Ergo ecosystem directory
- [https://play.google.com/store/apps/details?id=com.kolmentech.tabby](https://play.google.com/store/apps/details?id=com.kolmentech.tabby): Tabby App (ErgoPOS) on Google Play Store
- [https://t.me/ergopos](https://t.me/ergopos): ErgoPOS Telegram channel
- [https://docs.ergoplatform.com/mining/emission/#what-is-efyt](https://docs.ergoplatform.com/mining/emission/#what-is-efyt): Ergo Foundation Year Token (EFYT) documentation
- [https://www.ergoforum.org/t/reddit-strategy/4104](https://www.ergoforum.org/t/reddit-strategy/4104): Reddit strategy community discussion
- [https://ergcube.com/index.php?do=cat&category=wallets](https://ergcube.com/index.php?do=cat&category=wallets): Ergo wallets directory
- [https://github.com/FlyingPig69/Ergo_Explorer_Queries](https://github.com/FlyingPig69/Ergo_Explorer_Queries): Ergo Explorer queries repository

---

## Unresolved Questions

- **SigmaUSD Upgrade Timeline**: When/whether SigmaUSD will adopt Oracle Pools v2 reward mechanism unclear; depends on Dexy testing completion and Armeanio's SIPS proposal refinement [@kushti, msg#371713; @Armeanio, msg#371736-371737].
- **ChainLink Payout Mechanism**: Exact structure of how ChainLink dApps compensate oracle providers not resolved in discussion; historical articles referenced but not cited [@kushti, msg#371732-371734].
- **Tabby App Security Roadmap**: Explicit timeline for production-grade security improvements, server optimization, and dApp integration support not announced [@Gazza, msg#372026].
- **Rosen Bridge Timeline**: Exact date for public beta launch pending "sigma-rust fix" not specified; wasm/prover timeout issues remain non-deterministic and difficult to reproduce [@msg#371813].
- **Dexy Multi-Asset Expansion**: No specific roadmap announced for non-gold assets beyond technical feasibility confirmation [@kushti, msg#371712].