# Ergo General Chat — 2021-W05 Summary
**Period:** 2021-02-01 to 2021-02-07

---

## Key Topics Discussed

- **Hardening Hard Fork (Autolykos v2):** The network successfully completed the Autolykos v2 hard fork at block 417792 on 2021-02-02. The new PoW algorithm is memory-hard, GPU-friendly, and ASIC-resistant. Initial difficulty was high causing slow block times, but mining software was rapidly optimized with multiple releases from MHS_Sam, SRBMiner, and Nanominer showing 2-4x hashrate improvements for NVIDIA cards within days.

- **Exchange Withdrawal Issues Post-Fork:** Multiple exchanges (CoinEx, Hotbit, Probit) experienced transaction assembly problems after the fork, failing to check mempool state before broadcasting. CoinEx in particular used a flawed parallel withdrawal mechanism that generated invalid transactions. kushti worked directly with exchanges to implement fixes and is preparing an updated integration guide with code examples.

- **AgeUSD Stablecoin Naming Discussion:** Extensive community debate over naming the upcoming algorithmic stablecoin and reserve coin. Leading candidates were SigmaUSD (ΣUSD), CipherUSD (cUSD), kUSD (honoring kushti/Kornacki), AIR/EARTH pair, and USDe/eUSD. Concerns raised about keyboard accessibility of Σ symbol and SEO implications. Forum poll created at ergoforum.org/t/601 with plans for additional voting round.

- **Exchange Listings Progress:** Team confirmed 2-3 new exchange listings coming in February 2021, with at least one being USA-compliant and "top tier." Active exchanges at week's end: Gate.io, CoinEx, Hotbit, Tidex, Probit. Binance listing discussed as future goal once volume and community metrics improve.

- **Mining Pool Competition and Rewards:** Network hashrate dropped significantly post-fork (from ~27 TH/s to ~300-400 GH/s) during difficulty adjustment period. HeroMiners announced 33.75 ERG bonus rewards (50% boost) for blocks 417792-418816. Multiple pools actively competing with Nanopool, WoolyPooly (0% fees announced), and HeroMiners all soliciting hashpower.

---

## Important Decisions or Announcements

- [@kushti, msg#84836-84838, 2021-02-05]: Called for community mining support during the "last hard epoch" of difficulty adjustment, asking GPU owners to join pools to help stabilize block times.

- [@kushti, msg#84175, 2021-02-03]: Announced plan to conduct two AMAs with exchanges in February and one community AMA, plus appearance on next ErgoCast episode.

- [@kushti, msg#84817, 2021-02-06]: Announced node operators should add `ergo.chain.voting.version2ActivationDifficultyHex = "6f98d5000000"` to configs (later revised when v4.0.3.1 released requiring no manual config).

- [@kushti, msg#85714-85760, 2021-02-07]: Confirmed CoinEx fixed their transaction assembly issues, verified via test withdrawals showing proper chained transaction support.

- [@SavoRPC/team, msg#84715, 2021-02-06]: Confirmed 2-3 new exchange listings coming in February 2021.

---

## Technical Q&A Worth Preserving

- **Q** (@Joonatan, msg#83112): AgeUSD can use both Ergo and ADA as base token, correct? How does someone make the choice?
  **A** (@kushti, msg#83121): Contracts not deployed yet. [Note: Question about dual-collateral mechanism implementation details left partially unresolved]

- **Q** (@Snowka, msg#84719): How will oracle pools work?
  **A** (@Martin_mx, msg#84721): Pointed to medium article and technical resources. Oracle Pool v1 has EF members and external operators; v2 running for Dexy Gold with GORT rewards; planning 7-10 day timeline for AgeUSD launch with improved deviation checking.

- **Q** (@Snowka, msg#84950-84952): Is there a treasury fund built in? Concerned about relying on community goodwill.
  **A** (@kushti, msg#84955): There is a ZK treasury built in. Current emission includes ~10% to treasury for first 2 years, then drops to ~4%.

- **Q** (@The Horticulturalist, msg#83353-83411): Could AgeUSD framework support algorithmic precious metals stablecoins (e.g., gold/silver backed by ERG)?
  **A** (@SavoRPC/Armeanio, msg#83372-83415): Discussed feasibility. Physical redemption model more appropriate for precious metals than algorithmic approach. If algorithmic, would need crypto collateral (ERG) not physical metal, functioning as price-tracking derivative rather than physically-backed instrument.

- **Q** (@mensrea, msg#84514): Will Ergo support flash loans?
  **A** (@kushti, msg#84891-84892): No flash loans found in Ergo, likely not possible [due to eUTXO model differences from account-based chains].

- **Q** (@Snowka, msg#85441-85446): Does Ergo PoW have power consumption advantages over Bitcoin? Friend criticized environmental impact.
  **A** (@community/Erik, msg#85466): Linked to storage rent mechanism and long-term sustainability features. GPU mining vs ASIC discussion noted but specific power consumption comparisons not definitively provided.

- **Q** (@ApophisRO, msg#85619-85643): What percentage is premined/allocated to devs?
  **A** (@Orhan/A, msg#85623-85640): Zero premine. Treasury receives ~10% of emission for first 2 years (until July 2021), then drops to ~4%. Proof of no premine exists.

- **Q** (@Kduderino, msg#84996): Hardware wallet support?
  **A** (@Żeśo, msg#84997): Not yet, but Ledger integration being worked on.

---

## Links Shared

- [https://www.ergoforum.org/t/hardening-hard-fork-post-mortem/599]: Post-mortem analysis of the Autolykos v2 hard fork
- [https://www.ergoforum.org/t/stablecoin-and-reservecoin-names/601]: Forum poll for naming the algorithmic stablecoin and reserve coin
- [https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468]: Instructions for migrating from deprecated Magnum wallet using ErgoMixer
- [https://github.com/mhssamadani/Autolykos2_NV_Miner/releases]: NVIDIA miner releases with progressive optimization (v1.1.0, v2.0.0)
- [https://github.com/doktor83/SRBMiner-Multi]: SRBMiner-Multi for AMD cards (recommended for Autolykos v2)
- [https://nanominer.org/]: Nanominer v3.2.0 release with Autolykos algorithm support
- [https://miningpoolstats.stream/ergo]: Mining pool statistics and hashrate distribution
- [https://explorer.ergoplatform.com/en/addresses/9fPiW45mZwoTxSwTLLXaZcdekqi72emebENmScyTGsjryzrntUe]: CoinEx hot wallet address for monitoring withdrawal queue
- [https://veriumfellow.medium.com/what-will-ergo-bring-to-cardano-2f7ae911a9bd]: Overview of Ergo-Cardano collaboration and technical synergies
- [https://youtu.be/zG-rxMCDIa0]: Full Ergo Summit 2021 video with timestamps for AgeUSD explanation, oracle pools discussion, and technical presentations
- [https://ergoauctions.org/#/auction/active]: Ergo Auction House for NFT trading
- [https://ergo101.org/]: Educational resources and video tutorials
- [https://sigmaverse.io/]: Ecosystem overview and project directory
- [https://t.me/ErgoSocials]: Coordination group for spreading awareness and social media engagement
- [https://t.me/ergo_mining]: Dedicated mining discussion channel
- [https://t.me/ERGtrading]: Price and trading discussion channel

---

## Unresolved Questions

- **Optimal exchange listing strategy:** Community debated whether to pay large listing fees (Binance reportedly wants 5% of token supply) versus waiting for organic growth to attract free listings. kushti suggested trying to reach major exchanges after upcoming listings complete.

- **Dual-chain AgeUSD implementation:** While framework supports both ERG and ADA collateral, specific details about how users choose between chains and whether there will be separate deployments versus unified implementation remain unclear.

- **Storage rent and long-term mining incentives:** Discussions about emission schedule (ending ~2027) and storage rent providing ongoing miner incentives occurred but detailed economic modeling not presented.

- **ErgoScript bulletproof verification:** kushti working on implementing bulletproof verification in ErgoScript to enable zero-knowledge proofs for privacy features and hybrid contract designs. Timeline and technical feasibility still being explored.

- **Sidechain constructions:** kushti mentioned upcoming publication of merge-mined sidechain designs with trustless pegging mechanisms (better than BIP-301), rewarding mainchain miners for delivering sidechain data. Details and timeline TBD.

- **Concrete power consumption metrics:** While Ergo's advantages (memory-hard algorithm, storage rent sustainability) were discussed in response to environmental concerns, specific kWh comparisons versus Bitcoin were not provided.