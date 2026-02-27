# Ergo General Chat — 2021-W25 Summary

## Key Topics Discussed

- **SigmaUSD Stability & Reserve Ratio**: Discussions on how SigmaUSD maintains its peg below $2 and what reserve ratios (RR) mean for minting/redeeming. RR at 337% provides substantial backing; below 100% means insufficient collateral. Storage rent mechanism incentivizes RSV minting when price drops.

- **Spectrum DEX (ErgoDex) Launch Timeline**: Backend complete and heavily tested; UI refinement is priority. Yoroi dApp Connector improvements critical for user experience. Estimated launch late June/early July 2021, pending Cardano Alonzo compatibility work.

- **Gravity Network & Cross-Chain Integration**: SUSY (Gravity's atomic swap platform) enables ERG/ETH/Waves asset bridges. Can mint/mix tokens across chains and bring liquidity to Spectrum DEX. Early infrastructure for interoperability.

- **Proof of Work vs Proof of Stake Trade-offs**: Ergo committed to PoW indefinitely; no conversion to PoS planned. Discussion of security model differences; Bitcoin-like fee-based miner incentives after emission ends (8 years). Layer 2 solutions (sidechains, faster blocks) under exploration.

- **Storage Rent Mechanism**: 0.13 ERG per 4 years per UTXO—low fee designed for long-term blockchain survivability. Goes to miners as alternative revenue source alongside transaction fees after block rewards cease.

- **NIPoPoWs & Light Client Bootstrap**: Used for ultra-efficient light clients and quick chain synchronization via mathematical proofs instead of full state downloads. Mentioned as part of Ergo's scalability roadmap.

- **Ledger Integration**: Tesseract team refining Ergo Ledger Protocol v3; Ledger Live app availability TBD.

- **Mining Hardware & Profitability**: AMD RDNA (RX 5700 XT, RX 6000 series) most profitable. NVIDIA LHR cards underperform. CPU mining still possible but not competitive. RTX 3070 LHR viable but limited. No Ledger support announced for mining directly.

## Important Decisions or Announcements

- [@glasgowm, msg#154432, 2021-06-21]: Announced ErgoHack results and blog post covering ecosystem projects and community initiatives.

- [@Ilya Oskin, msg#154856, 2021-06-23]: Confirmed Yoroi dApp Connector fixed; AMM beta available for public next week (late June).

- [@Armeanio, msg#154881, 2021-06-23]: Posted pre-Ergoversary reflection on Reddit; shared developer update blog linking backend completion and UI prioritization for ErgoDex.

- [@Armeanio, msg#154923, 2021-06-23]: Weekly dev update stating: ErgoDex backend done, extensive testing complete, UI is primary focus. Yoroi dApp Connector working with Emurgo to accelerate.

- [@glasgowm, msg#155104, 2021-06-25]: Reminder for upcoming Team Anniversary AMA; requested questions on Reddit thread.

- [@Armeanio, msg#155557, 2021-06-27]: Noted exchange listings bottlenecked on exchange side; pushing for news permission by Ergoversary (July 1); delayed beyond Ergo team's control.

## Technical Q&A Worth Preserving

- **Q** (@Arbion Halili, msg#154373-374): How does Ergo's light client configuration work? Does it use state roots, witnesses, or stateless solutions like Ethereum?
  **A** (@glasgowm, msg#154375): Ergo uses NIPoPoWs for light clients; UTXO set snapshots on roadmap for quick bootstrapping.

- **Q** (@Ronald, msg#154380): Can other stablecoins like sigmaEUR be created on Ergo?
  **A** (@glasgowm, msg#154382): Yes, any oracle-backed stablecoin is possible; referenced SHMP example.

- **Q** (@A, msg#154381-383): How has the price dump affected SigmaUSD's backing?
  **A** (@glasgowm, msg#154385-386): Reserve ratio at 337%; would need to drop to $2 without minting/withdrawals to fall below 100%. Lower prices incentivize RSV minting, protecting the peg.

- **Q** (@poko pen, msg#154370): What tokens can be swapped on Spectrum DEX at beta launch?
  **A** (@Snowman Jason, msg#154371): ERG/ADA initially; @Olli Tiainen clarified (msg#154482) ADA-ERG pair first.

- **Q** (@Mint LkV, msg#154495): What pairs will be tradable on ErgoDex after launch?
  **A** (@Mint LkV, msg#154495): ERG/SigmaUSD/SigmaRSV first; ADA pairs likely end of year. Minting is separate from DEX trading fees.

- **Q** (@Glasgow｜WON'T DM, msg#154512): Will SigmaUSD trade below the minting fee on Spectrum DEX?
  **A** (@Glasgow｜WON'T DM, msg#154509, 516-517): Unlikely—SigmaUSD always redeemable; sellers won't undercut redemption cost. Possible if contract is locked, but price spikes when unlocked.

- **Q** (@Unknown, msg#154374): What is Ergo's approach to state management compared to Ethereum stateless solutions?
  **A** (@glasgowm, msg#154375): NIPoPoWs enable efficient light clients; UTXO set snapshots planned for faster sync.

- **Q** (@Snowman Jason, msg#155114-117): What is the storage rent rate? Is 0.13 ERG per block too high?
  **A** (@glasgowm, msg#155118): 0.13 ERG per 4 years (not per block). Minimal impact; designed for long-term UTXO survival without becoming expensive.

- **Q** (@Chris Ray, msg#155096): Can ERG holders stake to Cardano pools via Yoroi dApp Connector and smart contracts?
  **A** (@Chris Ray speculates): Theoretically possible via trustless smart contracts similar to SigmaUSD architecture, but unexplored.

- **Q** (@Bharat, msg#155340): Will transaction speed increase over time?
  **A** (@Klaus, msg#155345): Optimal block time is 2 minutes; layer 2 solutions (Lightning-like sidechains, Hydra equivalents) under consideration for scaling.

- **Q** (@Sugon Deez, msg#155424): Can limit orders be set on DEXes?
  **A** (@Unknown, msg#155425, 431): Yes—ErgoDex/Spectrum support limit orders. Waves also offers them; different from Uniswap-style AMMs.

- **Q** (@Foeniculum NFTs, msg#155452): How do NFT auctions with auto-extend timers work for price discovery?
  **A** (@Foeniculum NFTs, msg#155452-453): Auto-extend triggers when <30 min remain. Bidding at 30th minute mark avoids extension; allows fair price discovery.

## Links Shared

- [https://ergoplatform.org/en/blog/2021-05-10-defi-ecosystem/]: Ecosystem projects and DeFi initiatives overview.
- [https://nipopows.com/]: NIPoPoW technical documentation and light client methodology.
- [https://sigmausd.io/]: SigmaUSD minting interface.
- [https://twitter.com/SHMPCoin]: Example of alternate stablecoin built on Ergo oracle infrastructure.
- [https://ergoplatform.org/en/blog/2021-05-17-ergo-%C4%B1ntegration-with-gravity-network/]: Gravity integration announcement.
- [https://www.reddit.com/r/ergonauts/comments/ndn7h3/can_anyone_explain_gravity_to_me_like_im_5_i_dont/]: Community explanation of Gravity/SUSY atomic swaps.
- [https://susy.gravity.tech/swap/]: Live Gravity swap interface.
- [https://youtu.be/aFbid_m5JGw]: Developer onboarding video for building dApps on Ergo.
- [https://sigmaverse.io/]: Ergo dApps directory and ecosystem explorer.
- [https://ergoauctions.org/]: Ergo Auction House for NFTs and smart contract interactions.
- [https://www.reddit.com/r/ergonauts/comments/o745k3/ergo_team_anniversary_ama/]: Team Anniversary AMA thread (live Q&A).
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-june-23rd-5a2b65b14a0c]: Weekly dev update covering ErgoDex, exchange delays, Ledger integration status.
- [https://www.reddit.com/r/ergonauts/comments/o6mepo/pre_ergoversary_perspective/]: Pre-Ergoversary community reflection.
- [https://www.reddit.com/r/ergonauts/comments/o5y9p8/the_case_for_ergo_the_spiritual_successor_to/]: "The Case for Ergo" community infographic post.
- [https://curiaregiscrypto.medium.com/ergohack-results-f7d72711a9db]: ErgoHack results and winning projects.
- [https://ergoplatform.org/en/blog/2021-05-26-trading-and-staking-erg-in-swop-dex-with-usdn/]: SWOP DEX liquidity pool guide (USDN trading on Waves).
- [https://finance.yahoo.com/quote/ERG-USD]: ERG-USD market data on Yahoo Finance (recently added).
- [https://www.coinmarketcal.com]: CoinMarketCal voting (for Ergo event calendar listing).

## Unresolved Questions

- **Exchange Listings**: Four exchanges in progress but delayed on exchange side; Armeanio unable to share details due to NDA. No firm timeline; announcement possibly by Ergoversary (July 1).

- **ErgoDex Launch Date**: Consistently stated as "late June/early July" but tied to Cardano Alonzo testnet progress. UI refinement may cause further delays; no hard launch date confirmed.

- **Governance Token for Spectrum DEX**: Uncertain whether ErgoDex will have its own governance token or rely on ERG. If separate token exists, likely distributed to liquidity providers.

- **Layer 2 & Sidechain Strategy**: Multiple proposals discussed (microblocks, sidechains, faster blocks, state channels) but no decision made on which to prioritize. kushti noted difficulty optimizing without concrete application patterns.

- **Mobile Wallet Support for Ergo**: Yoroi mobile doesn't support ERG wallets; only desktop extension works. No ETA for mobile integration.

- **Ledger Live Integration**: Tesseract working on Ledger Protocol v3 but no release timeline given.

- **Ergo Staking Mechanism**: PoW tokens don't natively stake like PoS. Discussions of potential smart contract-based staking to Cardano pools via dApp Connector remain theoretical.

- **Storage Rent Burn Rate & Economics**: Minimal at 0.13 ERG/4yr but long-term impact on UTXO set cleanup and miner incentives post-emission not deeply modeled in chat.

---

**Note**: Week 2021-W25 (June 21–27) was active with ecosystem building, DeFi readiness discussions, and exchange roadblock frustration. Community engagement high; technical depth solid. No major protocol changes or controversial votes beyond the Sergey chat moderation poll (unrelated to core development).