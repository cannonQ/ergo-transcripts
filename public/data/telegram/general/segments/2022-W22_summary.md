# Ergo General Chat — 2022-W22 Summary

## Key Topics Discussed

- **Exchange Listings**: Community repeatedly inquired about tier-1 CEX listings promised for end of May. [@Armeanio, msg#279491, 2022-06-02] clarified integration was not completed by deadline and remains dependent on the exchange lifting its NDA. No official timeline given, speculation centered on Huobi, Kraken, or OKX.

- **Yoroi Wallet Recovery**: [@Unknown, msg#279561, 2022-06-03] shared EMURGO joint statement indicating Yoroi's new management is undertaking "massive refactoring back to front" to rebuild the wallet for scalability and eliminate memory issues. [@Armeanio, msg#279570–572] confirmed solid development plan in motion.

- **Storage Rent & Coin Longevity**: Extended discussion on ERG storage rent mechanics. [@MrStahlfelge, msg#278836–837] clarified that storage rent is charged per box, not per address, and to protect all funds users must send everything to themselves every 4 years (or transactions will create fresh boxes). Discussion clarified that ERG cannot be "burned" in the traditional sense.

- **Wallet Multi-Instance & Address Derivation**: [@MrStahlfelge, msg#279223] explained that Nautilus tends to move all funds to newly created addresses; users should go to the addresses tab and derive addresses in the mobile app to access moved funds across devices.

- **ErgoHack VI Winners & Projects**: Community excitement around hackathon submissions. [@Unknown, msg#279649–652] highlighted ErgoSphere (off-chain bots/mixer/node packaged UI) and [@Unknown, msg#279658] noted excitement for dApp Step and name/tags project. [@Unknown, msg#279661] linked full ErgoHack VI project list.

- **Chainlink Partnership for Palmyra**: [@Unknown, msg#279275] (session notes) summarized Dan Friedman's explanation that Palmyra will use Chainlink's proof-of-reserve functions through Winter Protocol to issue on-chain warehouse receipts for decentralized trade financing, with plans to integrate multiple oracles including Ergo oracles.

- **NIPoPoWs & Zero-Knowledge Protocols**: Technical discussion on bulletproofs as trustless alternative to SNARKs for zero-knowledge proofs. [@Unknown, msg#279] discussed verification in ErgoScript and potential use in verifiable credentials and Zcoin-style applications.

- **Layer 2 Scaling Philosophy**: [@R, msg#279180] articulated Ergo's approach: no in-built sharding like Kadena, but flexible architecture supporting multiple L2 solutions (sidechains, sub-block protocols) optimized per use case. Strong consistency prioritized over parallelism.

- **Ledger & Hardware Wallet Support**: Ledger Live integration in progress. [@Glasgow, msg#278987] noted Ledger app not yet on official app store but can be side-loaded on Nano S. [@Benny, msg#279415] confirmed iOS version developed but awaiting Ergo Foundation bank account resolution for testflight release.

- **Rosen Bridge & Merge Mining Sidechains**: [@kushti, msg#279] (from AMA notes in context) confirmed sidechain constructions being published on forum, working on trustless pegging via emission contracts to reward mainchain miners for delivering sidechain data.

- **Mixer Integration & Privacy**: [@J, msg#279866] announced Night Owl will auto-mix when swapping coins (SigmaUSD ↔ OWL). [@Unknown, msg#279873] expressed enthusiasm for ERG/SigmaUSD flows through mixer.

## Important Decisions or Announcements

- [@Armeanio, msg#279491, 2022-06-02]: Tier-1 exchange integration missed end-of-May deadline; awaiting exchange to lift NDA before announcement possible.

- [@Armeanio, msg#279569–572, 2022-06-03]: Yoroi wallet rebuild underway—massive refactoring for scalability, elimination of memory issues, solid development plan confirmed.

- [@Unknown, msg#279561, 2022-06-03]: EMURGO & Ergo Foundation joint statement on Yoroi recovery; new manager's leadership expected to deliver improvements.

- [@J, msg#279866, 2022-06-05]: Night Owl dApp will integrate mixer to auto-mix swaps (SigmaUSD ↔ OWL).

- [@Unknown, msg#279275, 2022-06-01]: Ergo Nation hackathon project launching immediately; first monthly ID verification event 7 June 2022 20:00 UTC. Requires anonymized wallet funded with 1 ERG via mixer.

- [@Unknown, msg#279656, 2022-06-04]: GetBlok.io announced subpooling milestone achievement.

## Technical Q&A Worth Preserving

**Storage Rent Mechanics**
- **Q** (@PalaZ, msg#278789): Can ERG be burned through an ErgoScript contract sending to a burn address to avoid storage rent permanently?
- **A** (@Glasgow, msg#278809, @MrStahlfelge, msg#278817): ERG cannot be burned. Moving ERG to a false contract is closer to burning but will be recycled by storage rent. [@MrStahlfelge, msg#278836–837]: Storage rent is charged per box, not address. To preserve all funds, send everything to yourself every 4 years; sending to the same address creates a fresh box safe for 4 more years.

**Wallet Address Derivation Across Devices**
- **Q** (@Shiv Chauhan, msg#279217): Opening same wallet seed in three phones results in funds showing as zero on non-last-used phones.
- **A** (@MrStahlfelge, msg#279223): Nautilus tends to move all funds to newly created addresses. Use the addresses tab in mobile app to derive addresses manually to access funds across devices.

**NFT Image Mutability**
- **Q** (@PalaZ, msg#278928): Can NFT images be updated after minting?
- **A** (@MrStahlfelge, msg#278936; @Koutelier, msg#278957): If NFT links to your own server, image can be changed but hash will differ. If minted on-chain (e.g., IPFS), image is immutable; updating IPFS deletion risks permanent loss.

**Chained Transactions in Mobile Wallet**
- **Q** (@Shiv Chauhan, msg#279203): Can same seed phrase wallet be opened simultaneously in multiple places?
- **A** (@MrStahlfelge, msg#279213): Mobile wallet supports chained transactions—new TX can be made before first is confirmed.

**Spectrum DEX & SigmaUSD Fees**
- **Q** (@gg, msg#279507): SigmaUSD 2% fee on bank is high for frequent swaps.
- **A** (@CW, msg#279504; @Unknown, msg#279508): SigmaUSD/SigmaRSV available on Spectrum DEX at consistent prices. Fee structure incentivizes focus on arbitrage trades and enhances stability.

**Cross-Chain ADA ↔ ERG Trading**
- **Q** (@Unknown, msg#279447): How far away is ADA ↔ ERG trading?
- **A** (@Unknown, msg#279449, msg#279454): Centralized: CoinEx available. Decentralized: awaiting cross-chain capability on Spectrum DEX.

**Nautilus Privacy Mode & Address Generation**
- **Q** (@Unknown, msg#279306): After receiving 1 ERG, Nautilus generated a second address. Must this new one be used?
- **A** (@Gazza, msg#279307): Can use either; privacy mode (auto address generation) can be disabled in settings.

**Ledger Integration Status**
- **Q** (@Buccoooo, msg#279000): Is Nautilus + Ledger Nano S safe?
- **A** (@Glasgow, msg#279006): Ledger team currently checking. Users have tested successfully for weeks; extra reassurance being gathered.

**Cardano Reference Inputs vs. Ergo Data Inputs**
- **Q** (@Siavash, msg#279009–012): With Vasil HF adding reference inputs to Cardano, will they use Ergo Oracle Pools or separate oracles?
- **A** (@Glasgow, msg#279011, msg#279015): Cardano builders will choose oracles suited to their needs. Oracle Pools are a framework, not in competition with oracle data providers.

## Links Shared

- [EMURGO & Ergo Foundation joint statement on Yoroi](https://emurgo.io/emurgo-and-ergo-foundation-joint-statement-on-yoroi-wallet/): Yoroi recovery underway with new management.
- [Ergo AppKit integration example (NightOwlCasino Twitter)](https://twitter.com/NightOwlCasino/status/1529452399475179520): Video tutorial on ergo-dapp-connector for React wallet integration.
- [NPM ergo-dapp-connector package](https://www.npmjs.com/package/ergo-dapp-connector): React package with built-in dApp connector.
- [Nautilus Wallet Telegram](https://t.me/NautilusWallet): Official support channel.
- [Nautilus Quick Start (ErgoDex docs)](https://docs.ergodex.io/docs/user-guides/nautilus-quick-start): Setup & transfer guide.
- [Ergo Explorer](https://explorer.ergoplatform.com/): On-chain data viewing.
- [Ergo Mobile Wallets](https://ergoplatform.org/en/mobile-wallets/): Official mobile wallet options; iOS on testflight pending bank account setup.
- [ErgoHack VI Full Project List](https://docs.ergoplatform.com/events/ergohack/#ergohackfest): All hackathon submissions.
- [ErgoSphere documentation](https://ergosphere.cloud/): Off-chain bot/mixer/node packaged UI.
- [ErgoSphere design doc](https://docs.google.com/document/d/1jdYS4Mt4Zkk3Hwl0CeA3ietaaIdAkETT/edit): Technical details.
- [GetBlok subpooling announcement](https://twitter.com/GetBlok_io/status/1532939688843087872): Mining pool achievement.
- [InERGitance GitHub documentation](https://github.com/inergitance/doc): Inheritance/tontine smart contract project.
- [InERGitance video demo](https://dlhameteo.eu/ergohackfest.mp4): Project walkthrough.
- [Ergo Names Twitter](https://twitter.com/ergonames/status/1531865031792418816): ENS-like naming service announcement.
- [SkyHarbor NFT marketplace](https://www.skyharbor.io/wallet): NFT listing interface via Nautilus.
- [Ergo Nation Telegram invite](https://t.me/+9Q22gjQI5Go1ZDUy): ID verification & ecosystem engagement project.
- [Reddit: Ergo vs. Kadena comparison](https://www.reddit.com/r/ergonauts/comments/pcff16/comment/haju2ts/): Technical scaling discussion.
- [Medium: Ergo vs. Kadena article](https://medium.com/@tritchcole/ergo-vs-kadena-656eb6f032fc): Comparative analysis.
- [Sigmanauts Programme](https://ergoplatform.org/en/blog/the-sigmanauts-programme/): Community contributor program.
- [Ergo Exchange Integration Guide](https://docs.ergoplatform.com/dev/Integration/guide/): Technical requirements for CEX listing.
- [Ergo Protocol Audit](https://docs.ergoplatform.com/dev/protocol/audit/): Independent security audit (not Certik).
- [Ergo Get ERG page](https://ergoplatform.org/en/get-erg/#Exchanges): List of supported exchanges.
- [Ergo tip bot info](https://www.reddit.com/r/ergonauts/comments/qrmbat/tip_bot_starting_up/): Restoration instructions.
- [ErgoLend Telegram](https://t.me/ErgoLend): Soft launch P2P lending platform.
- [Austin Ergo Meetup (Meetup.com)](https://www.meetup.com/zengate/events/286364848): In-person gathering, location TBA.
- [Ergo Weekly Dev Update (YouTube)](https://www.youtube.com/watch?v=el1hbNlSVhk): Regular development progress videos.

## Unresolved Questions

- **Exchange Listing Timeline**: No confirmed date or exchange announced. [@Armeanio, msg#279491] stated integration not completed by end-May deadline; awaiting NDA lift. Community speculation on Huobi, Kraken, OKX persists.

- **Ledger Live App Store Timeline**: [@Glasgow, msg#279987] notes Ledger team reviewing integration; no ETA given for official app store inclusion.

- **Yoroi Recovery ETA**: Refactoring underway but no completion date announced. [@Armeanio, msg#279570] mentioned "massive refactoring" without timeline.

- **Cross-Chain DEX (ADA ↔ ERG)**: Awaiting Spectrum DEX cross-chain capability; no deployment date confirmed.

- **Ergo Oracle Pool v2 Details**: [@Unknown, msg#279] (in context of Dan's explanation) references Oracle Pool v2 "running for Dexy Gold with GORT rewards," but full specifications not documented in chat.

- **Mixer Liquidity**: [@Unknown, msg#279851] flagged insufficient active mixes as a problem; solutions discussed (Night Owl integration) but broader ecosystem adoption timeline unclear.

- **Sidechain & Merge Mining Deployment**: Constructions being published to forum, but no mainnet or testnet activation date provided.

- **iOS Wallet Release**: [@Benny, msg#279415] states fully developed but "still on testflight until foundation can get bank acc sorted"—external blocker, no ETA.

---

**Summary Note**: Week 2022-W22 was moderately active with focus on infrastructure recovery (Yoroi), pending regulatory/exchange announcements, and hackathon project excitement. Most technical discussions centered on wallet UX, storage rent mechanics, and comparative blockchain design philosophy. The exchange listing saga dominated sentiment but remained opaque due to NDA constraints.