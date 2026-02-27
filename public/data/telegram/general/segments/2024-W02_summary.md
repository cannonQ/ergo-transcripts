# Ergo General Chat — 2024-W02 Summary

## Key Topics Discussed

- **Rosen Bridge Progress & Cross-Chain Expansion**: Rosen Bridge (Ergo↔Cardano) launched and operational at app.rosen.tech. Ethereum and Bitcoin bridges in development; timeline discussed as 4-6 months if fully funded. Community exploring wrapped Ergo (rsERG) adoption and liquidity strategies on Cardano.

- **Exchange Listings & Market Access**: MEXC approached community again after previous failed listing (msg#466746). Kraken listing crowdfunding initiative proposed (msg#467395, msg#467450-467520)—community exploring 1% donation mechanism to fund listing fees, though some debate on whether metrics (liquidity depth, trading volume) are prerequisite to fundraising. CoinGecko Ergo ecosystem category launched (msg#466086).

- **Node Database Corruption Issues**: User reported persistent database corruption on 5.0.18 full node with extraIndex=true (msg#466152-166). Glasgow suspected storage/power supply issues; Vinicius resolved by running outside Docker Desktop on Mac (msg#314-316).

- **Subblocks & Block Time Improvements**: kushti indicated subblocks are being actively developed to address speed concerns (msg#467064). Discussion on whether faster block times compromise security; consensus that layer 2s will handle speed while L1 remains secure baseLayer (msg#467063, 467078).

- **DuckPools & Lending Growth**: rsADA pool launched on DuckPools (msg#466168). SigmaFi showing strong loan activity even in bear market; multiple high-value collateralized loan requests observed (msg#467334, etc.).

- **Oracle Pools v2 Status**: Oracle Pools v2 live and usable; Dexy Gold (Dexy protocol's oracle) operational on testnet (msg#467157). Comparisons to Chainlink discussed; Ergo oracles simpler but require participation incentives (msg#467159-163).

- **Lithos Protocol & Mining Governance**: Community interest in Decentralized Ergo Mining Alliance (D.E.M.A) and miner federation to discuss protocol parameters, governance, and coordination (msg#466237-249). Lithos monitoring and GPU/FPGA competitive dynamics raised (msg#466585-596).

- **Community Fundraising & Marketing**: Broader discussion on how grassroots Ergo differs from VC-backed chains; no major institutional funding but lower development costs and stronger long-term sustainability (msg#466980-466999). Marketing identified as critical gap; Sigmanauts testing Twitter ads and exploring market maker partnerships (msg#467094, 467507).

- **Paideia DAO Toolkit in Catalyst Fund 11**: Ergo community reminded to register for Fund 11 voting to support Paideia DAO proposals (msg#467614).

## Important Decisions or Announcements

- [@Glasgow, msg#466086, 2024-01-08]: Ergo ecosystem category now live on CoinGecko: https://www.coingecko.com/en/categories/ergo-ecosystem

- [@CW, msg#466168, 2024-01-08]: rsADA Pool launched on DuckPools with 7-month default max borrow duration; duckDAO vote pending on accepting rsADA as collateral on ERG pool.

- [@kushti_ru (kushti), msg#467232, 2024-01-12]: Created Ergo Raffle for interest-free loans to Kenyan cooperative; contributors receive GoodThingsDAO governance tokens.

- [@Ollie [THREE Pool], msg#467395, msg#467450-467520, 2024-01-13–01-14]: Kraken listing crowdfunding initiative launched with Telegram channel https://t.me/+Gg0xav9UqeJlMzQ8; seeking $500k (placeholder) via 1% community donations and developer support for donation prototype.

- [@qx(), msg#467783, 2024-01-14]: Ergo for Dummies livestream concluded; NFT prizes distributed (CyberCitizen, CyberPet, CyberCar from Cyberverse).

- [@MGpai, msg#467786, 2024-01-14]: hodlComet staking contract now live (https://twitter.com/PhoenixErgo/status/1746728498557780298).

- [@kushti, msg#467413, 2024-01-13]: 1.5-hour dev update recorded with qx(); subblocks development discussed.

## Technical Q&A Worth Preserving

- **Q** (@Vinicius, msg#466152–166): Node running 5.0.18 with extraIndex=true throwing "Ask timed out" errors and "Readers are not initialized" warnings despite multiple resync attempts.
  
  **A** (@Glasgow, msg#466160; @Vinicius, msg#466314–316): Likely Docker Desktop (Mac) database corruption. Resolved by running node outside Docker; SST files were being lost during Docker syncs.

---

- **Q** (@Hasnain, msg#466886–894): Does transaction confirmation time impact active trading? Why not reduce P2P transaction times to be competitive?
  
  **A** (@Glasgow, msg#466887–891): Bitcoin is industry standard; exchanges require confirmations to prevent 51% attacks—victims are exchanges, not chain. Confirmations needed will reduce as hashrate increases. Ergo designed for layer 2 speed, baseLayer remains secure.

---

- **Q** (@Unknown, msg#467143–152): Can expub (extended public key) only be generated with seed phrase? How to open wallet in read-only mode on Nautilus to view another user's SigmaFi positions?
  
  **A** (@Unknown, msg#467153): Workaround: Add wallet as read-only on SafeW, then connect SafeW to SigmaFi to see all positions.

---

- **Q** (@Shiv Chauhan, msg#467382–393): How to generate Ergo seed phrases & addresses offline (no blockchain/internet)? How does Terminus wallet secure cold storage?
  
  **A** (@Koutelier, msg#467384–387): Use https://ergopaperwallet.org (can fork repo locally). Terminus wallet has cold storage function. All wallets/seeds pre-exist on blockchain; users are assigned them (clarification: seeds are derived from entropy, not pre-assigned).

---

- **Q** (@Rj, msg#467159): What are differences between Ergo Oracle Pools v2 and Chainlink? Advantages/disadvantages?
  
  **A** (@Glasgow, msg#467160–163): See https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263 (4-year-old post). Ergo oracle design unchanged in v2 (optimizations only). Not current on Chainlink's recent changes.

---

- **Q** (@Me, msg#467323–353): How to launch Spectrum Finance locally from GitHub dev branch? Getting Node.js version errors.
  
  **A** (@HQΣr, msg#467324–328): Terminal in directory → `yarn` → `yarn start`. Error indicates Node.js version mismatch; check with `node --version` and upgrade if needed.

---

- **Q** (@Renshi, msg#467122–130): What is Rosen Bridge swap slippage vs CEX? Is there value loss compared to selling/buying on exchange?
  
  **A** (@Unknown, msg#467128): Depends on exchange rate offered on bridge. If ADA cheaper on bridge, could profit. Acceptable slippage limits exist (msg#467129).

---

- **Q** (@Hasnain, msg#467014): How to reduce/improve on-chain P2P transaction times? Improve chain throughput?
  
  **A** (@Glasgow, msg#467077–078): Subblocks planned. Most PoW chains slower than Ergo; faster ones use modified PoW (dPoW, blockDAG, simpler algos). Ergo scaling plan: build baseLayer securely, layer 2s for TPS. Design priority: assumptions over raw speed.

---

- **Q** (@Ian Lee, msg#467294): Why do people trade on Ethereum side if fees are high?
  
  **A** (@lexymon, msg#467296): Whales don't care about fees; Ethereum is whale playground. Liquidity depth draws even retail traders despite fees.

---

- **Q** (@Snowman Jason, msg#467155): Are Ergo Oracle Pools v2 usable now? What's the biggest hurdle—cost of running?
  
  **A** (@Glasgow, msg#467157): Live at https://explorer.ergoplatform.com/en/oracle-pool-state/xauerg

## Links Shared

- [https://www.coingecko.com/en/categories/ergo-ecosystem]: Ergo ecosystem category on CoinGecko (msg#466086)
- [https://www.duckpools.io]: DuckPools lending/borrowing platform, rsADA pool live (msg#466168)
- [https://app.rosen.tech]: Rosen Bridge interface (Ergo↔Cardano) (msg#466581)
- [https://ergoraffle.com/raffle/show/736b0bbead3d312e59ead548d25d3c39b92f66dce514a65dd9bd7767587739fe]: Ergo Raffle for Kenyan cooperative loans (msg#467232)
- [https://ergopaperwallet.org]: Offline Ergo wallet/seed generation (msg#467385)
- [https://explorer.ergoplatform.com/en/oracle-pool-state/xauerg]: Oracle Pool v2 (Dexy Gold) explorer link (msg#467157)
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Original Oracle Pools design discussion (msg#467160)
- [https://t.me/+Gg0xav9UqeJlMzQ8]: Kraken listing crowdfunding Telegram group (msg#467491, 467500, 467510)
- [https://ergo.watch/]: Ergo wallet & emission metrics tracker (msg#466851, 466855)
- [https://github.com/spectrum-finance/interface.git]: Spectrum Finance GitHub repo (dev branch) (msg#467323)
- [https://twitter.com/PhoenixErgo/status/1746728498557780298]: hodlComet staking launch (msg#467786)
- [https://discord.gg/JfQA92rJ]: Cyberverse Discord for bug reports & ideas (msg#467300)

## Unresolved Questions

- **Kraken Listing Cost & Requirements**: Exact fee unknown (msg#467395, 467479, 467606–610). Community unsure if cost-to-market-cap ratio is realistic or if volume/liquidity requirements must be met first. Marketing/MM strategy still being evaluated as alternative (msg#467507).

- **Ethereum Bridge Timeline**: Stated as "4-6 months if fully funded" (msg#467424, msg#467196) but no concrete milestones. Bitcoin bridge sequencing unclear.

- **FPGA Dominance on Autolykos**: Claimed but unproven; debate on whether algorithm should be changed to prevent FPGA mining (msg#466585–596). No consensus on decentralization impact vs GPU fairness.

- **Block Time Reduction Feasibility**: Subblocks in development but no testnet date announced (msg#467064). Questions remain on impact to emission contracts, timestamps, and dApp compatibility (msg#467071–080).

- **Market Maker Implementation**: Sigmanauts reportedly meeting with MM companies (msg#467507); report promised "soon" but not yet released.

- **Node Version Issues**: Spectrum Finance local build failing on Node.js version mismatch; no comprehensive build guide provided (msg#467353).

- **Mixer Activity Levels**: User asked how many simultaneous mixers needed for privacy pool to function (msg#467168); no answer given.

- **SigmaFi Read-Only Mode via Nautilus**: SafeW workaround provided but no native Nautilus solution confirmed for viewing loan portfolios.

---

## Additional Notes

- **Price Discussion**: Extensive speculation on $2–$100 targets; CoinGecko listing and ETF context mentioned but no material price driver identified. Consensus: emission reduction (2026, emission→3 ERG) and ecosystem maturity matter more than short-term listings.

- **Node Sync Issues**: Multiple users reported corruption; Docker on Mac particularly problematic. Migration to native binary recommended.

- **Community Morale**: Mixed sentiment. Strong recognition of tech superiority and AMA transparency (msg#467612), but frustration with marketing gaps and exchange access. Grassroots fundraising attempts (Kraken, MM) show proactive community, though some skepticism on ROI.