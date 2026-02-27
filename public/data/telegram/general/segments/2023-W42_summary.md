# Ergo General Chat — 2023-W42 Summary

## Key Topics Discussed

- **Weak Blocks / Fast Blocks Naming**: Extended discussion on naming the protocol feature currently called "weak blocks." Community debated alternatives including "flash blocks," "lite blocks," "fast/strong blocks," and "lightning blocks." @dayumbbbb advocated strongly for "Fast/Strong Blocks" as most natural for marketing and user communication (e.g., "23 fast confirmations and 2 strong confirmations"). [@dayumbbbb msg#440479, msg#440490-493]

- **Storage Rent / Demurrage Terminology**: @dayumbbbb identified "Supply Security" as superior framing for demurrage and storage rent — emphasizing that demurrage fixes both mining security (via tail emission) and supply security (fixed supply forever), whereas other chains have "insecure" supply (inflation or deflation). [@dayumbbbb msg#440536-543]

- **Auction Coin (AC) Protocol**: Launched during ErgoHack VII. Dynamic auction mechanism where token price starts at 2x LP price and decays to -5% of LP over 3-day auctions (10 auctions every 4 days, 1k AC each). kushti noted theoretical debate on whether AC will pump, stabilize, or dump; current parameters include no slippage on Auction House and buyback contract cycles ERG from auctions back into LP. [@qx() msg#440032-090; @kushti msg#441194-220]

- **Emission Schedule & Supply Dynamics**: Confirmed that Ergo has ~97.7M total supply with 75 ERG initial emission, reducing every 3 months after first 2 years. Current emission is ~3 ERG/block; will drop to 3 ERG/block in March 2026 (final tail emission phase). Community noted this is the only truly fixed-supply cryptocurrency. [@kushti msg#440310; @dayumbbbb msg#440004-008, msg#441164-180]

- **Autolykos2 RAM Requirements Evolution**: kushti confirmed Autolykos2 will increase RAM requirements over time (inspired by Ethash) to protect against ASIC dominance. As old 4GB GPUs phase out, newer hardware optimizations will force adaptive mining landscape. [@kushti msg#441126, msg#441135]

- **Rosen Bridge Status & Strategy**: Armeanio clarified that Rosen supports multiple tokens (not just ERG), wraps assets bidirectionally, and exchanges will likely see wrapped tokens but EF/Sigmanauts recommend users bridge to native chain for long-term holding. Wrapped ERG on exchanges is "messy" — users frequently send coins to wrong addresses. Bridge availability requires oracle validation and operator support. [@Armeanio msg#440667-674, msg#441237-239]

- **Difficulty Adjustment & Hashrate Volatility**: kushti noted difficulty recalculates every 128 blocks (not per-block) and current volatility is expected; some large farms mine during low-difficulty windows then migrate. Higher hashrate generally reduces variance. Autolykos2's RAM-scaling is one mitigation strategy. [@kushti msg#441081, msg#441103, msg#441126, msg#441132]

- **Elliptic Curve Migration (e521)**: kushti discussed potential move to e521 curve for increased security but noted cofactor-4 issues create small-subgroup attack risks (citing 2017 Monero bug). Would require developers to implement Sigma protocol defenses on every curve-dependent app; only realistic path is cofactor-1 curves. Montgomery ladder performance trade-offs also relevant. [@kushti msg#440508, msg#440583, msg#440602; @Mahdyar msg#440571, msg#440601-602]

- **Cartesi/BigInt Issues in DeFi**: @Pulsarz noted Spectrum farm tokens tested BigInt support across wallets; JavaScript's int58 limitation broke handling of large farm token balances until proper 64-bit integers used. [@Pulsarz msg#441540-543]

- **Cardano Comparison & PoW vs PoS Philosophy**: Community consensus that Cardano's fake fixed supply (no demurrage/tail emission) is disadvantage; PoS makes rich richer, PoW is commodity-based money vs equity shares. kushti: "PoW is commodity, PoS tokens are shares." [@dayumbbbb msg#440106-110; @kushti msg#441146-149]

- **Fee Market & Spam Protection**: kushti explained mempool spam protections from v4.0.44: nodes can raise minimum propagation fee rates to block low-fee transactions from reaching mempool entirely. Also discussed fee estimation API (underutilized by wallets) and transaction refund mechanics when stuck in mempool. [@kushti msg#440337, msg#440338]

- **ErgoMixer 4.4.0**: Released with stealth address support, allowing receivers to create stealth addresses (not directly payable) while senders generate stealth payment addresses for privacy. Full changelog included changelog improvements to ChainScanner and box rescan logic. [@kushti msg#439802]

- **Sidechain Construction & Merge Mining**: kushti indicated sidechain constructions (including merge-mined variants) will be published on forum post-Ergoversary. Discussion of trustless pegging, emission contracts rewarding mainchain miners for delivering sidechain data, and BAP 301 / BIP 301 comparison. [@kushti msg#440337-338, msg#441555]

- **NIPoPoWs & Satergo Wallet**: Satergo integrating NIPoPoWs for faster, secure full-node wallets (ErgoHack VII project). NIPoPoWs relevant to sidechaining and cross-chain validation. [@Ergo NEWS msg#440585]

- **Oracle Pools v1 & v2; Palmyra Integration**: Dan discussed Oracle Pool v1 (EF members + external), Oracle Pool v2 running for Dexy Gold with GORT rewards. Plan to invest capital in building native Ergo oracles (more secure than external) and tooling specifically for Palmyra's trade-finance use case (on-chain warehouse receipts via Chainlink + IoT devices for proof of reserve). [@Dan msg#440619-752; @Armeanio msg#440667-799]

- **Palmyra Trade Finance & Chainlink Partnership**: Palmyra uses proof of reserve + proxy functions to enable decentralized trade financing via on-chain warehouse receipts. Commodity producers deposit goods into bonded warehouses → receipt issued on-chain via oracle (Chainlink + IoT weight/motion/camera sensors) → collateral for borrowing. Combines traditional warehouse receipt mechanics with blockchain settlement. Not zero-sum with other oracles (plan to use multiple including Ergo-native). [@Dan msg#440937-752]

## Important Decisions or Announcements

- [@kushti, msg#439802, 2023-10-16]: **ErgoMixer 4.4.0 released** with stealth address support; improves ChainScanner and box rescan logic.

- [@Ergo NEWS, msg#440585, 2023-10-18]: **ErgoHack VII concluded** with key projects: Satergo (NIPoPoWs), SideChainProto (trustless sidechains), Lilium (NFT ticketing), Atomic Swap (cross-chain), Metamask Integration, Hodlbox (gamified holding), Reputation System, Poor Man's Wallet, Auction Coin.

- [@kushti, msg#440310, 2023-10-17]: **Emission schedule clarified**: ~97.7M total supply, 75 ERG initial emission, reduction every 3 months after 2-year delay, final 3 ERG/block tail emission through 2045.

- [@Armeanio, msg#440779, 2023-10-19]: **Rosen Bridge supports multiple tokens** (not ERG-specific); wrapped tokens planned but users advised to bridge to native chain for long-term holding.

- [@qx(), msg#440430, 2023-10-21]: **Spectrum Swaps channel shared 10,000 swaps** with community; DEX bot for tracking Spectrum activity announced.

- [@HQΣr, msg#441411, 2023-10-21]: **Spectrum Swaps channel milestone**: 10,000 swaps shared; Ergo Cube swap bot tracking announced.

- [@Crypto Quokka, msg#441587-590, 2023-10-22]: **SkyHarbor website rebuild underway** to fix activity page errors and improve overall site speed; deployment imminent.

- [@lexymon, msg#440307, 2023-10-17]: **Bitpanda listing rationale**: "nice number" (97.7M supply) chosen by kushti; EF funded remainder after community raffle for marketing.

## Technical Q&A Worth Preserving

- **Q** (@Mahdyar, msg#440523): How is a cofactor >1 problematic in elliptic curves?
  **A** (@kushti, msg#440525): See Monero 2017 bug — small-subgroup attacks exploitable when cofactor >1 unless every Sigma protocol application implements defenses. Only safe option is cofactor-1 curves, but they don't support Montgomery ladder (performance impact on large keys). No perfect solution; this is why secp256k1 (cofactor 1) was chosen for Ergo initially.

- **Q** (@Unknown, msg#441546): How do Spectrum farm tokens handle large balances in wallets?
  **A** (@Pulsarz, msg#441541-543): Farm tokens test BigInt support; JavaScript's int58 limitation broke handling until proper int64 support added. FleetSDK dev had to ensure correct integer handling.

- **Q** (@Flying Pig, msg#441232): Why does hashrate volatility affect block times?
  **A** (@kushti, msg#441236): Pricing affects large farms' decision to mine; they enter/exit based on difficulty windows. Difficulty only adjusts every 128 blocks, so short-term hashrate swings cause temporary block time variance. Fast blocks would eliminate this UX impact.

- **Q** (@Chris Ray, msg#440369): Can we use Logarithmic mining from Professor Kias to reduce ledger size?
  **A** (@Chris Ray, msg#440395): With NIPoPoWs + eUTXO together, ledger compression becomes feasible (cannot truly push eUTXO model without both tools).

- **Q** (@Unknown, msg#440546): What's a hard fork and why is it dangerous?
  **A** (@dayumbbbb, msg#440548-554): Hard fork = consensus rule change breaking backward compatibility; old nodes diverge unless upgraded. Requires heavy coordination. Danger: incompatible chain split if upgrade fails.

- **Q** (@Unknown, msg#440557): What's a soft fork? Different from hard fork?
  **A** (@dayumbbbb, msg#440560): Soft fork is backward-compatible upgrade; old nodes remain synchronized. No forced upgrade needed.

- **Q** (@Ilya Oskin, msg#441527-535): Why do Cardano dApps blame eUTXO for performance with many tokens, but Spectrum had no such issues?
  **A** (@Ilya Oskin, msg#441535): Most likely poor coin selection / inefficient UTXO consumption by app developers creating unnecessary outputs. Not an eUTXO architectural flaw.

- **Q** (@koukarin, msg#441525): Is Ergo as sensitive to UTXO management issues as Cardano?
  **A** (@Ilya Oskin, msg#441528): Spectrum has no such issues; architecture is not the problem.

- **Q** (@Chris Ray, msg#440652): How would insurance contracts for DeFi investments work on Ergo?
  **A** (@Chris Ray, msg#440633-651): Lender submits 10% loan into insurance contract, pays 20% of expected ROI to insurer → insurer guarantees repayment → lender nets 8% risk-free ROI. Requires oracle to validate claim triggers. Feasible in smart contracts but needs oracle infrastructure.

- **Q** (@Me, msg#441112): Should miners be required to hold ERG collateral?
  **A** (@kushti, msg#441128): Would disincentivize solo mining since pools could combine collateral for advantage. Not desirable.

## Links Shared

- [ErgoMixer Stealth Address Release](https://ergomixer.github.io/stealth/): Receiver-side stealth address creation, sender-side stealth payment address generation for privacy-preserving mixing.
- [ErgoMixer v4.4.0 Changelog](https://github.com/ergoMixer/ergoMixBack/releases/tag/4.4.0): Bug fixes in ChainScanner, Full box rescan, admin charging.
- [Mt. Pélerin Bridge Exchange](https://www.mtpelerin.com): Swiss FINMA-regulated exchange with Lightning, Arbitrum, multi-chain support; no ERG yet but mentioned as potential fiat onramp.
- [Safe Curves Database](https://safecurves.cr.yp.to/): Resource for evaluating elliptic curve security properties.
- [Monero 2017 Cofactor Bug Disclosure](https://www.getmonero.org/ru/2017/05/17/disclosure-of-a-major-bug-in-cryptonote-based-currencies.html): Reference for small-subgroup attacks on high-cofactor curves.
- [Modern Crypto Discussion on Cofactors](https://moderncrypto.org/mail-archive/curves/2017/000846.html): Technical details on cofactor vulnerabilities.
- [Auction Coin Whitepaper](https://auctioncoin.app/assets/whitepaper.pdf): Formal specification of auction-based token emission protocol.
- [Auction Coin GitHub Discussion](https://www.ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287): Community forum thread on AC design and degen finance mechanics.
- [ErgoHack VII Results](https://bit.ly/491nbBC): Full list of winning projects and prize details.
- [ErgoPad CoinGecko Listing](https://www.coingecko.com/en/coins/ergopad): ErgoPad token metrics.
- [Ergo Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/): Core community guiding document.
- [Sigmanauts Portal](https://sigmanauts.com/): Community hub for contributors.
- [DuckPools](https://www.duckpools.io): Yield farming / lending on SigmaUSD.
- [Spectrum DEX](https://spectrum.fi): Automated Market Maker for Ergo.
- [SigmaFi.App](https://sigmafy.app): Lending protocol (mentioned as alternative yield source).
- [Hodlbox NFT Vaults](https://hodlbox.xyz): Gamified holding NFTs with price-target unlocks.
- [Satergo Wallet GitHub](https://github.com/epmw/epmw/): Hardware wallet implementation with NIPoPoWs.
- [Ergo Poor Man's Wallet](GitHub link implied but not provided): ErgoHack VII project for affordable hardware wallet.
- [Bitcoin Dev Mailing List - October 2023](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-October/021999.html): Bitcoin protocol discussion (shared by @filippounits, context unclear).
- [Compound Interest Calculator](https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator): Tool for projecting yield from DeFi protocols.
- [ErgoCube](https://ergocube.com/index.php?newsid=746): Community news site.
- [Ergo Forum](https://www.ergoforum.org/): Core discussion and proposal tracking.

## Unresolved Questions

- **Weak Block Naming Still Unresolved**: Community debate produced strong advocates for multiple names ("Fast/Strong Blocks," "Flash Blocks," "Lite Blocks," "Neutrino Blocks"). No official decision announced. Decision likely pending Paideia DAO vote or core team decision. [@kushti, msg#440344 onwards through msg#441068]

- **Auction Coin Price Dynamics Uncertain**: kushti acknowledged "really hard to say" whether AC will pump, stabilize, or dump despite auction theory literature. Current LP is thin (~5k AC, 