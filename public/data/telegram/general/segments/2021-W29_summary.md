---
title: "Ergo General Chat — 2021-W29"
date_start: "2021-07-19"
date_end: "2021-07-25"
type: telegram_weekly
channel: general
week: "2021-W29"
source: telegram
message_count: 3601
categories: [defi, governance, ecosystem, wallet, mining, community, nft, technical, marketing]
key_terms: [ErgoDEX, AMM, public testing, Yoroi connector, roadmap, Catalyst, voting, Plutus port, Liqwid, rigged reviews, bitcoin.com, exchange listing, July 29, Changelly, tier 1 exchange, Ledger, hardware wallet, integration, demo video, security]
---
## Key Topics Discussed

- **ErgoDEX Development Progress**: The AMM DEX public testing was imminent, with final Yoroi connector fixes underway. The team confirmed first version launch within 1-2 days, with incremental releases planned through early 2022. The DEX will use NIPoPoWs for cross-chain interoperability with Cardano without wrapping tokens, leveraging eUTXO compatibility. KYA (Know Your Assumptions) principles will inform users about trust assumptions and contract control levels.

- **SigmaUSD/AgeUSD Reserve Dynamics**: A whale redeemed approximately 2 million SigmaUSD (roughly 60% of minted supply), causing the reserve ratio to spike to over 1000% temporarily. This enabled SigRSV redemptions again after weeks of being locked above 400% reserve ratio. Discussion covered how the protocol is based on research from Emurgo, Ergo Foundation, and IOG for crypto-backed stablecoins without fiat backing.

- **Mining Pool Decentralization Concerns**: Nanopool controlled nearly 60% of network hashrate, creating security risks. Community pushed miners toward smaller pools (Woolypooly, Leafpool, 2miners) offering block finder bonuses. 2miners added Ergo with guides published, though concerns emerged about potentially becoming another dominant pool.

- **Ledger Integration Progress**: Developers demonstrated Ergo working on Ledger hardware wallet in video. Integration work continued with unclear timeline for public release, but appeared to be weeks away rather than months.

- **Exchange Listings Confirmed**: Bitcoin.com exchange listing confirmed for July 29th. Changelly and Changelly Pro listings announced as upcoming from same parent company. One undisclosed tier-1 exchange in wallet testing phase, with the exchange preferring to announce on listing day.

- **Kushti Tokens Community Initiative**: @Chris Ray distributed "kushti" tokens (named after nano-ergs/founder) as educational tools to teach wallet usage and token mechanics. Thousands distributed with plans to list on ErgoDEX. Community debate occurred about whether this was educational or spam, with majority viewing positively.

- **NIPoPoWs Interoperability**: Discussion of how Non-Interactive Proofs of Proof of Work enable cross-chain interaction between UTXO-based chains without wrapping. Atomic swaps built into Ergo core allow direct BTC↔ERG exchanges. This enables ErgoDEX cross-chain functionality with Cardano.

## Important Decisions or Announcements

- [@Armeanio, msg#168836, 2021-07-23]: Nanopool dropped below 50% hashrate dominance after address change
- [@Ilya (via @Gazza), msg#169569, 2021-07-24]: ErgoDEX public testing release estimated 1-2 days away
- [@Armeanio, msg#168419-421, 2021-07-23]: ERG added to Moneroocean pool API, pool code implementation pending
- [@Glasgow, msg#169661, 2021-07-24]: Tier-1 exchange in wallet testing, prefers to list and announce same day without advance notice
- [@kushti, msg#168911, 2021-07-24]: Requested community support smaller mining pools to reduce centralization
- [@Armeanio, msg#168200, 2021-07-19]: Working with Coinswitch Kuber exchange in India for listing, process slow

## Technical Q&A Worth Preserving

- **Q** (@user): How can Cardano smart contracts reference Ergo oracle data if it lives on Ergo's ledger?
  **A** (@Ron, @Glasgow): Integration work needed, potentially translating ErgoScript to Plutus. ErgoScript and Plutus translation is nearly trivial due to eUTXO compatibility. Data inputs concept from Ergo may need implementation on Cardano side.

- **Q** (@user): Can Ergo mixer be used for tax evasion or money laundering?
  **A** (@Peppers, @Ron): Similar to cash - possible but not unique to crypto. Ergo's mixer is optional, not obligatory like privacy coins. Main legitimate use is preventing address balance disclosure when sending transactions, important in countries with corrupt governments.

- **Q** (@user): How do you move Bitcoin to Ergo without wrapping it?
  **A** (@Glasgow): Atomic swaps built into Ergo core. NIPoPoWs enable cross-chain interaction between UTXO-based chains. See https://ergoplatform.org/en/blog/2020_04_24_atomic_swaps/

- **Q** (@user): How does Ledger improve security vs. Yoroi?
  **A** (@Infinideez, @CW): Ledger requires physical button press to sign transactions. If computer compromised with keylogger/RAT, attacker still cannot sign transactions without physical device. Seed phrase remains secured - losing device doesn't lose funds if seed backed up.

- **Q** (@user): Will fees support network security after emission ends?
  **A** (@Chris Ray): Miners leave when unprofitable, remaining miners get adequate rewards. Transaction volume and fees should increase over time. Ergo designed for long-term sustainability with storage rent providing additional miner revenue.

- **Q** (@Lorem): How can sigUSD be useful without fiat offramps?
  **A** (@Lorem, @Peppers): Needs exchange listings for fiat redemption. Cross-chain bridges like potential Meld integration could provide pathways. Primary use initially for trading pairs and stable value storage within ecosystem.

## Links Shared

- [https://ergoplatform.org/en/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/]: Blog post on NIPoPoW mining in logarithmic space
- [https://ergoplatform.org/en/blog/2021-07-21-ergodex-a-cross-chain-workhorse/]: ErgoDEX architecture and cross-chain functionality explanation
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-july-21st-6d5dfc9412cc]: Weekly dev update July 21st covering ErgoDEX progress
- [https://twitter.com/bitcoincomexch/status/1418202642799468548]: Bitcoin.com exchange announcing ERG listing July 29th
- [https://2miners.com/blog/how-to-mine-ergo-a-detailed-guide-for-beginners-and-miner-setup/]: Complete mining setup guide for 2miners pool
- [https://ergoplatform.org/en/blog/2020_04_24_atomic_swaps/]: Technical explanation of atomic swaps on Ergo
- [https://drive.google.com/file/d/1JF7XMnPjH4mFkacoUkYBIX_iNDry_meq/view]: Ledger integration demo video
- [https://eprint.iacr.org/2021/907.pdf]: Zero-knowledge KYC research paper mentioning Ergo
- [https://github.com/MrStahlfelge/ergo-wallet-android/releases]: Android mobile wallet download
- [https://ergodex.io/]: ErgoDEX roadmap and information
- [https://sigmausd.io/]: SigmaUSD stablecoin protocol interface
- [https://ergnomes.io/]: ERGnomes NFT collectibles project
- [https://youtu.be/PNkkmy0qBrQ]: Mining setup video tutorial for 2miners

## Unresolved Questions

- Timeline for Changelly/Changelly Pro listings - confirmed as "soon" but no specific date
- Identity of tier-1 exchange in wallet testing - exchange controls announcement timing
- Exact mechanism for ErgoDEX to share liquidity between Ergo and Cardano chains - technical implementation details pending
- How Ergo Whale pool will distribute ERG staking rewards to ADA stakers - mechanism not explained
- Whether Cardano needs to implement data inputs concept for full Ergo oracle integration
- How users will link ERG addresses to ADA stake pool participation for rewards distribution
- Total GNOMECOINs supply determination - depends on future gaming implementation requirements
- ErgoDEX governance token decision - may only be introduced if needed, earned through DEX usage