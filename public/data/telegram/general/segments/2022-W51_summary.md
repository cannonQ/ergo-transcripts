---
title: "Ergo General Chat — 2022-W51"
date_start: "2022-12-19"
date_end: "2022-12-25"
type: telegram_weekly
channel: general
week: "2022-W51"
source: telegram
message_count: 0
categories: [mining, bridges, technical, defi, governance, wallet, ecosystem, nft, community]
key_terms: [FPGA, ASIC, EIP-37, pool resistance, difficulty adjustment, tx fees, 0.001 erg, miners profitability, fee increase, pool operators, Rosen Bridge, Cardano, Bitcoin bridge, wrapped tokens, smart contracts, Useful PoW, UPOW, decentralized science, protein folding, Spectrum Finance]
---
# Ergo General Chat — 2022-W51 Summary
**Period:** 2022-12-19 to 2022-12-25  
**Messages:** 1060 | **Participants:** 81

---

## Key Topics Discussed

- **FPGA/ASIC Resistance & Mining Economics**
  Extensive community discussion on whether ASIC/FPGA resistance is viable. Consensus: ASICs not currently economically viable due to memory requirements and manufacturing lead times. EIP-37 was implemented reactively. Discussion centered on whether decentralization is better served by engaged "high-tier" miners (who care about chain survival) or many small miners (easily coin-hop). Pool concentration identified as real security risk.

- **Transaction Fee Economics & Miner Incentives**
  Debate on raising base transaction fee (currently 0.001 ERG) to improve miner security incentives. At $100 ERG = $0.10/tx; at $1,000 = $1.00/tx. Current fees negligible relative to block rewards (~3-4 ERG). Miners passive on governance; no organized effort to increase fees despite it being a simple config change at pool level. Concern: fee discussion becomes urgent when block reward < 5 ERG.

- **Ergo Foundation Treasury Sustainability**
  [@Glasgow｜WON'T DM, msg#357214, 2022-12-25]: EF "is there to bootstrap the ecosystem then it's up to the community." Transparency report forthcoming. Disclosed ~662,000 ERG spent in 2022; ~800,000 ERG remaining in treasury. Foundation designed not to last forever; largest historical expense is CEX listing costs. Post-6.0 roadmap completion, community governance/associations expected to take over core development roles.

- **Rosen Bridge Cross-Chain Status**
  Development ongoing. Known issues: Koios bug in reporting previous block (workaround being implemented); p2p connection bugs under fix. Tokenomics and whitepaper still in development. Tests still active; not yet safe for mainnet Bitcoin bridge.

- **Dexy Gold Protocol**
  [@TMR.ΣRG, msg#356483, 2022-12-21]: Dexy creating gold-pegged stablecoin. [@Armeanio, msg#356493-494]: Framework interesting for composability; natural whale-attack prevention built-in; requires battle testing. Slower initial rollout but more sustainable long-term for retail users.

- **Palmyra & Chainlink Oracle Partnership**
  [@Armeanio, msg#355904-957, 2022-12-20 AMA]: Utilizing Chainlink proof of reserve + proxy functions via Winter Protocol for decentralized trade financing. On-chain warehouse receipts paired with IoT sensors (camera/weight/motion) for continuous commodity auditing. Plan to build out native Ergo Oracle Pools as well (v1 and v2 running). Not zero-sum game with other oracle providers; strategy is to use multiple oracles.

- **Node 6.0 Roadmap Discussion**
  [@kushti khushi, msg#356136, 2022-12-20]: Next community chat focused on funding schemes. Core discussions on speed improvements (sub-blocks, sidechains, layer 2, faster confirmations). Parameter tweaks to block time require careful consideration of timestamp-based logic and emission curves. Testnet setup available for interested miners/developers to experiment with configurations.

- **Spectrum DEX Pool Queries & Liquidity**
  [@Gazza｜WON'T DM, msg#356457, 2022-12-21]: Shared exact smart contract addresses for N2T and T2T pool pairs. All Spectrum txs queryable via single shared P2S address on Ergo Explorer. LP fees set by pool creator; some low-liquidity pools have 90% fee. Yield farming mechanism nearly complete to attract deeper liquidity.

- **Satergo Wallet v1.5.0 Release**
  [@Aberg Satergo dev, msg#357058, 2022-12-23]: Major UI redesign. Auto-restoration of derived addresses. Full keyboard navigation support. Auto-update feature for node. Custom stylesheet loading (community-designed themes). v1.5.1 released 24h later with critical fixes. Desktop full-node wallet; open-source, audited by community including core devs.

- **Mixer v2 Updates**
  [@kushti khushi, msg#356528, 2022-12-21]: Updates expected after New Year.

- **ErgoPad & Fundraising Infrastructure**
  Question raised on whether to add INO (Initial NFT Offering) alongside existing IDO. Multiple fundraising tools now available: ErgoPad, EXLE (private test mode), ErgoRaffle.

---

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#357058, 2022-12-23]: Satergo v1.5.0 released with complete UI redesign, custom stylesheet support, derived address auto-restoration.
- [@Aberg Satergo dev, msg#357136, 2022-12-24]: Satergo v1.5.1 released with critical fixes and design improvements.
- [@Glasgow｜WON'T DM, msg#357214, 2022-12-25]: Ergo Foundation transparency report coming in coming days; EF runway extends longer than treasury size suggests due to price-adjusted spending.
- [@kushti khushi, msg#356444, 2022-12-21]: Proposed next community chat focused on fundraising schemes on Ergo; invited ErgoPad, EXLE, ErgoRaffle teams.
- [@qx(), msg#356086, 2022-12-20]: Will add miner engagement to Sigmanauts agenda after New Year; critical that miners organize to participate in governance.
- [@Armeanio, msg#356012, 2022-12-20]: EF exploring potential partnership to experiment with useful proof of work (UPoW).
- [@kushti khushi, msg#356727, 2022-12-22]: Live Rosen Bridge ERG → Cardano (RsERG) cross-chain swap demonstrated with transaction details published.
- [@qx(), msg#356644, 2022-12-21]: Explanation of chained transactions (UTXOs) and confirmation requirements documented.

---

## Technical Q&A Worth Preserving

- **Q** (@MatrixMaarten, msg#357109): How much is in the Ergo Foundation treasury?
  **A** (@HQΣr, msg#357122): Explorer address provided; fully transparent on-chain. [@Glasgow, msg#357214]: ~800k ERG remaining; largest historical expenses are CEX listings; spending adjusted for price volatility; runway extends beyond superficial assessment.

- **Q** (@hoodieonwho, msg#356408-412): Mobile wallet says "use lower amount" when sending > 20 ERG; slow confirmations (5+ min).
  **A** (@MrStahlfelge, msg#356415-418): UTXO consolidation issue—small 0.2 ERG boxes require 100 inputs for 20 ERG tx, increasing tx size and confirmation time. Use box consolidation dApp to merge UTXOs. Higher tx fee accelerates confirmation. Not a wallet bug; network behavior.

- **Q** (@MatrixMaarten, msg#357111): Is EF treasury sufficient for 2+ years of bearmarket?
  **A** (@Glasgow, msg#357214): "We're fine to get through the 6.0 roadmap." Post-roadmap, expectation is for decentralized community/association governance rather than EF-driven development.

- **Q** (@Grand Gambit, msg#356447): How to view latest transactions on Spectrum DEX?
  **A** (@Gazza｜WON'T DM, msg#356457): Query the shared smart contract P2S address. All pools share same address; pool IDs are token IDs. Provided exact addresses and referenced EIP-14 for script details.

- **Q** (@qx(), msg#355900): If ASIC rigs turn hashrate to Ergo, what happens?
  **A** (@kushti khushi, msg#355903): Long-term for Bitcoin holders, ASICs did nothing bad. [@Armeanio, msg#355904]: ASIC manufacturing bottleneck + memory requirements + higher profitability on other chains = no current threat. Xilinx only credible ASIC threat, but doesn't fit their business model.

- **Q** (@Sergey Antonov, msg#356065): Could mining algo vary randomly per epoch to reduce ASIC efficiency?
  **A** (@kushti khushi, msg#356084): Difficult to ensure all random algos equally hard for all hardware types; creates coin-hopping incentive on new algorithm release.

- **Q** (@TMR.ΣRG, msg#356130): How to approximate GPU miners on network?
  **A** (@Unknown, msg#356131): MiningPoolStats provides hashrate context.

- **Q** (@Pulsarz, msg#356063): How would old pool-resistance algo have scaled for small miners in top-10 adoption scenario?
  **A** (@kushti khushi, msg#356074): ErgoPool bypassed non-outsourceability paper but required miners to run nodes + post collateral. [@kushti khushi, msg#356078]: Consider launching without pool resistance, enabling it after public mining software maturity.

- **Q** (@qx(), msg#356644): How do chained transactions (multi-tx sequences) work in Ergo?
  **A** (@qx(), msg#356644): Chained txs "assume" everything is perfect and funds remain in UTXO from previous tx. Allows spending from newly-created box before on-chain confirmation (normally 5 min wait). Risk: if any tx in chain refers to funds no longer present, all subsequent chained txs fail.

---

## Links Shared

- [ergoplatform.org/en/blog/Cold-Wallet-Explanation-Everything-You-Need-To-Know/]: Cold wallet safety guide
- [github.com/ross-weir/ergo-stealth-address-example]: Stealth address implementation example
- [github.com/ergoplatform/eips/pull/87/files]: EIP-41 stealth address spec discussion
- [ergoplatform.org/en/ecosystem/]: Ergo ecosystem roadmap & projects
- [satergo.com]: Satergo desktop full-node wallet with latest v1.5.x release
- [ergoraffle.com]: Community-run raffle platform (multiple specific raffle links shared)
- [spectrum.fi]: DEX and yield farming platform
- [miningpoolstats.stream/ergo]: Ergo hashrate and pool statistics
- [t.me/dexygold]: Dexy Gold Telegram group
- [deadit.github.io/paizo/]: Paideia governance voting tool (Beta)
- [github.com/deadit/paizo]: Paideia tool source code
- [soft.rosen.tech/#/bridge]: Rosen Bridge soft launch testnet
- [explorer.ergoplatform.com/en/addresses/4L1ktFSzm3SH1UioDuUf5hyaraHird4D2dEACwQ1qHGjSKtA6KaNvSzRCZXZGf9jkfNAEC1SrYaZmCuvb2BKiXk5zW9xuvrXFT7FdNe2KqbymiZvo5UQLAm5jQY8ZBRhTZ4AFtZa1UF5nd4aofwPiL7YkJuyiL5hDHMZL1ZnyL746tHmRYMjAhCgE7d698dRhkdSeVy]: Ergo Foundation Treasury Address (explorer link)
- [github.com/ergoplatform/eips/blob/eip14/eip-0014.md]: Spectrum DEX smart contract spec (EIP-14)
- [youtube.com/playlist?list=PLxOL51kA_KWSt5XSZbTJW8L0-V8S_yBHk]: Hash It Out video series playlist
- [twitter.com/ZengateGlobal]: Palmyra/Zengate Twitter (trade financing dApp)
- [ergcube.com]: ErgoCube (Ergo ecosystem resource directory with wallets, exchanges, dApps)
- [sigmaverse.io]: Ecosystem explorer (mentioned for dev updates)
- [twitter.com/SatergoWallet/status/1606470698528022528]: Satergo v1.5.0 announcement
- [github.com/duckpools/lend-protocol-contracts]: DuckPools lending protocol contracts (recently made public)
- [youtu.be/02r6iZo7TOs]: 2022 Recap & AMA video (Dec 22)
- [youtu.be/5HuhKIuNrqw]: Hash It Out episode with CW, Armeanio, Noah (Dec 22)
- [youtu.be/WvF-PRmwMlQ]: Dev Update video (Dec 18)
- [ergoflip.com]: Ergo gambling dApp (coin flip, roulette in development)
- [bisq.network]: Bisq p2p fiat onramp (mentioned for ERG)

---

## Unresolved Questions

- **ASIC/FPGA Threat Timeline**: Community consensus that threat is not imminent, but no formal timeline for when/if threat materializes. Monitoring approach vs. proactive algorithm changes left open.

- **Miner Fee Governance**: How to incentivize miners to organize and propose fee increases? No mechanism yet established; pool operators are "lazy." Proposal to use Sigmanauts ambassador outreach to GPU mining influencers (Seb, Panda) pending.

- **Foundation Long-Term Sustainability**: How should decentralized governance transition from EF occur? When exactly should EF "disappear"? Discussed but no roadmap committed.

- **Storage Rent Mechanism**: Mentioned as critical for security post-emission tail-off, but no detailed discussion of implementation or parameters.

- **Useful Proof of Work Integration**: [@Armeanio, msg#356012]: EF exploring UPoW partnership, but acknowledged many unknowns (problem consistency, solution verification, emission model if problem is solved). Characterized as "decentralized science experiment" vs. core consensus upgrade.

- **Light Clients & Sharding**: [@kushti khushi, msg#355851-852]: Contract interaction requirements make light clients and sharding hard; Vitalik's proposed contract interaction restrictions not yet implemented.

- **Rosen Bridge Tokenomics**: [@Unknown, msg#356471-479]: Guards' stake/exit scam prevention unknown; tokenomics and whitepaper still in development.

- **Palmyra DEX Design Details**: [@Foeniculum NFTs, msg#356497]: Whether Palmyra will use Dexy Protocol framework unconfirmed; Dan's AMA tomorrow expected to clarify.

- **ErgoPad INO Integration**: Poll raised on whether to add INO alongside IDO fundraising; community preference not determined.

- **Cross-Chain Point-of-Sale Integration**: [@Unknown, msg#356511-520]: Speculative discussion on using Rosen Bridge + custom TX signing to enable Ergo payments at Bitcoin-accepting POS terminals. No concrete proposals or feasibility study.

---

**Notes:**
- Week was moderately active with strong developer participation, particularly around mining economics and protocol design.
- Holiday period (Dec 19-25) shows sustained engagement despite seasonal slowdown.
- Major ecosystem progress: Satergo redesign, Rosen Bridge live demo, Dexy Gold announcement, community fundraising discussions.
- Tone: Professional with moments of levity; minimal spam/FUD relative to message volume.