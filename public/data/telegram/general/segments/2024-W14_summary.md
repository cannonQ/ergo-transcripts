# Ergo General Chat — 2024-W14 Summary

## Key Topics Discussed

- **Rosen Bridge cross-chain integration**: BTC testnet launching the following week, with ETH testnet to follow after mainnet BTC deployment. Volume between ERG and ADA currently $100k+ on some days [@kushti khushi, msg#486617-486619, 2024-04-05].

- **MEXC listing integration**: In active development using FleetSDK (first CEX to use it), causing delays due to Ergo's UTXO model being fundamentally different from EVM chains. Expected mid-April to mid-May, with 60k listing fee mentioned [@qx(), msg#486837, 2024-04-07; @kushti khushi, msg#486468-469, 2024-04-05].

- **Storage rent (demurrage)**: Each UTXO loses ~0.12 ERG (~0.14 ERG per 4 years per address) if unspent for ~4 years; wallets have built-in consolidation to reset the timer. Parameter can be adjusted via miner vote if needed [@TMR.ΣRG, msg#486169-170, 2024-04-03].

- **Emission reduction schedule**: Block reward reduces every 3 months (33→30→27→24→21 ERG/block until reaching 3 ERG/block for ~18 years). Next reduction in ~2 days from 2024-04-05 [@kushti khushi, msg#486622; @Flying Pig, msg#486774-777, 2024-04-06].

- **Dexy Protocol status**: Live on testnet, mainnet deployment in progress with tracking contracts planned to deploy same day (2024-04-04). Will release alongside Gluon and Oracle Pool v2 [@kushti khushi, msg#486273, 2024-04-04; @TMR.ΣRG, msg#485983, 2024-04-02].

- **Sidechain constructions**: Being finalized for publication, with improved merge-mined sidechain designs incorporating trustless pegging similar to BIP 301 mechanisms. Allows mainchain miners to earn sidechain tokens while maintaining security [@kushti khushi, msg#486190-192, 2024-04-03].

- **Meme coin ecosystem revival**: Crooks Finance (fork of Spectrum focused on meme tokens) launched with successful Bober token; heisenbERG emerged as mystery token with full supply liquidity locked until 2026/2028, generating $2.6k+ trading volume [@HQΣr, msg#485871, 486352-353, 2024-04-02, 2024-04-04].

- **Wallet cold storage pattern**: Ergo Wallet supports read-only wallet on primary device + offline signing wallet on secondary device with GrapheneOS, offering superior cold storage without hardware wallet vendor lock-in [@Unknown, msg#486076, 2024-04-03].

- **NIPoPoWs and Sigma protocols for off-chain verification**: Bulletproof range proofs and Sigma protocols enable zero-knowledge statement verification in ErgoScript without trusted setup, allowing sensitive data to avoid disclosure while still verifying on-chain conditions [@kushti khushi, msg#485726+ context, 2024-04-02].

- **Trade House vs. AMM architecture**: Order book DEXes (Trade House, Spectrum's order book mode) provide full transparency of depth/liquidity and control over slippage vs. AMM-based pools; both models coexist on Spectrum [@qx(), msg#486111+, 2024-04-02 transcript].

## Important Decisions or Announcements

- [@kushti khushi, msg#486617, 2024-04-05]: BTC testnet for Rosen Bridge launching the following week; ETH testnet to follow after mainnet BTC is live.

- [@kushti khushi, msg#486622, 2024-04-05]: Ergo emission reduction scheduled in ~2 days from that date (block reward dropping from 33 to 30 ERG).

- [@qx(), msg#486412, 2024-04-04]: Backup Ergo Explorer (ergo.aap.cornell.edu) scheduled downtime 7am–11am UTC for physical facility power maintenance; restoring by 12pm UTC.

- [@kushti khushi, msg#486273, 2024-04-04]: Dexy Protocol mainnet contracts under review for deployment, tracking contracts planned same day.

- [@qx(), msg#486837, 2024-04-07]: MEXC team using FleetSDK integration (first CEX adoption), currently in active development with learning curve due to Ergo's UTXO architecture.

- [@TMR.ΣRG, msg#485983, 2024-04-02]: Oracle Pool v2 planned release alongside Dexy Gold and Gluon.

- [@Luivatra, msg#486054-055, 2024-04-03]: Procedure for adding tokens to ergofaucet.org via GitHub PR; requires sending ERG and CYPX to load the faucet.

## Technical Q&A Worth Preserving

- **Q** (@Rocky P, msg#485648): How to check main account balance from secondary address?
  **A** (@Unknown, msg#486078+): Ergo Wallet supports read-only wallet mode on primary device with offline signing on secondary device. Use GrapheneOS on signing device for enhanced security. Alternative: manually send transactions between addresses to consolidate [@Unknown, msg#486076, 2024-04-03].

- **Q** (@TMR.ΣRG, msg#485668-670): How to find xpub equivalent on Ergo?
  **A** (@TMR.ΣRG, msg#485671): Available on mobile wallet; for Nautilus, check extended view. (Specific path not fully documented in transcript.)

- **Q** (@Fabulaowski, msg#485678-679): How to attach image/logo to minted fungible token so DEXes display icon?
  **A** (Implicit): DEXes fetch icons from standardized token registries; no direct answer in segment but token logos stored in registry metadata.

- **Q** (@Sky, msg#486161-172): Explain storage rent (demurrage) simply?
  **A** (@TMR.ΣRG, msg#486166-170): If coins not moved for 4 years, miners take ~0.14 ERG per address as fee. Incentivizes consolidation for network efficiency and allows lost coins to return as mining rewards. Parameter adjustable via miner vote [@TMR.ΣRG, 2024-04-03].

- **Q** (@ROB, msg#486176): Can you reset storage rent timer by sending transaction between wallets?
  **A** (@TMR.ΣRG, msg#486178, 486180): Yes. Wallets have built-in consolidation button that does this automatically [@TMR.ΣRG, 2024-04-03].

- **Q** (@Jack Σ, msg#486670): Why is Ergo CPU mining so hard? Why not lower difficulty for small miners?
  **A** (@Luivatra, msg#486671): Algorithm difficulty kept high to maintain ~2-minute average block time. Cannot be easily loosened without compromising network security [@Luivatra, 2024-04-06].

- **Q** (@Lakshay Dagar, msg#486267): How to approach Ergo for partnership on NFT indexer/API?
  **A** (@kushti khushi, msg#486271-272): Contact core devs; specify need: dev support, marketing, partner status, or other. [@Glasgow, msg#486276]: Direct inquiries to @AngieHar [@kushti khushi, 2024-04-04].

- **Q** (@Unknown, msg#486492): What if rsERG on Ethereum gets rugged or blacklisted in dApps?
  **A** (Unresolved debate): @cannon_q, @Armeanio flagged as open question with differing risk perspectives. No consensus reached [@cannon_q, msg#486499, 2024-04-05].

## Links Shared

- [https://ergo.watch/dashboards/emission](https://ergo.watch/dashboards/emission): Live emission schedule and block reward timeline.

- [https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/](https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/): LETS (Local Exchange Trading Systems) concept as Ergo's circular economy play.

- [https://defillama.com/protocol/spectrum-finance](https://defillama.com/protocol/spectrum-finance): Spectrum DEX volume metrics.

- [https://ergoexplorer.com](https://ergoexplorer.com): Token and holder overview tool.

- [https://ergocube.com](https://ergocube.com): Ecosystem aggregator dashboard showing on-chain action across dApps.

- [https://ergo.watch](https://ergo.watch): Oracle pool pricing data and network statistics.

- [https://ergoapparel.com/](https://ergoapparel.com/): Ergo merchandise (t-shirts, apparel) for community/event use.

- [https://ergoauctions.org](https://ergoauctions.org): NFT auction platform (example: Aliens NFTs listed).

- [https://dex.crooks-fi.com](https://dex.crooks-fi.com): Crooks Finance DEX (fork of Spectrum for meme tokens).

- [https://duckpools.io](https://duckpools.io): Lending/pool platform (v2 upcoming).

- [https://sigmafi.org](https://sigmafi.org): Implied reference to lending protocol without token (mentioned as fair project).

- [https://github.com/abchrisxyz/ergowatch](https://github.com/abchrisxyz/ergowatch): Ergo Watch source code; schema details for exchange addresses.

- [https://www.dropbox.com/scl/fo/yky69yt4elfallpsbijjn/h](https://www.dropbox.com/scl/fo/yky69yt4elfallpsbijjn/h): Ergo brand assets (logos, design files) for merchandise [@Glasgow, msg#486343].

- [https://ergofaucet.org](https://ergofaucet.org): Testnet ERG faucet; token submissions via GitHub PR.

- [https://twitter.com/chepurnoy/status/1774760093264835019](https://twitter.com/chepurnoy/status/1774760093264835019): kushti's post (link shared by Glasgow, context not provided in segment).

- [https://youtu.be/249n8Yp6c8I](https://youtu.be/249n8Yp6c8I): Community AMA/stream (2024-04-07, still live at time of post).

## Unresolved Questions

- **MEXC listing timeline**: Expected "first week of April" per community rumors, but no official confirmation. Realistic window cited as mid-April to mid-May due to FleetSDK integration learning curve [@Alexander, msg#486878, 2024-04-07; @qx(), msg#486837, 2024-04-07].

- **Sub-blocks implementation**: Multiple queries about timeline ([@W || Mafia, msg#486197, 2024-04-03]; [@Koutelier, msg#486206, 2024-04-03]). kushti did not provide ETA in visible responses.

- **RsERG blacklist/rug risk on Ethereum**: Whether wrapped ERG on Ethereum could be blacklisted or lost if underlying dApps are exploited remains an open debate. Cannon and Armeanio flagged but no consensus [@cannon_q, msg#486499, 2024-04-05].

- **Hardware wallet support**: Ledger integration not prioritized; Keystone preferred but not yet integrated. Status unclear [@Glasgow, msg#486070, 2024-04-03].

- **Sidechain security trade-offs**: Specific fork choice rule, NIPoPoW relay security, and comparative advantage vs. BIP 301 not fully discussed in this segment [@kushti khushi, context from speed improvement discussion].

- **Pool concentration risk**: dxPool now 44.53%+ of hashrate over recent blocks. Community raised concern; no stated mitigation plan beyond "leave dxPool" [@Mewbie, msg#486236-264, 2024-04-03-04].

---

**Week Summary**: W14 was dominated by exchange listing logistics (MEXC integration challenges), protocol parameter updates (emission schedule), and ecosystem expansion (Crooks Finance, meme coins). Core development proceeded on Rosen Bridge (BTC testnet imminent) and Dexy (mainnet contracts under review). Community concern emerged over mining pool centralization (dxPool >44% hashrate).