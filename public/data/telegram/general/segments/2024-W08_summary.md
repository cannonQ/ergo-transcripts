---
title: "Ergo General Chat — 2024-W08"
date_start: "2024-02-19"
date_end: "2024-02-25"
type: telegram_weekly
channel: general
week: "2024-W08"
source: telegram
message_count: 0
categories: [mining, governance, ecosystem, technical, defi, community, wallet, bridges]
key_terms: [decentralized pool, Lithos Protocol, mining, hashrate, ErgoDevs DAO, core development, research, infrastructure, MEXC listing, raffle, crowdfunding, market making, exchange access, Xeggex, listing, MM requirements, Sigmanauts pool, 10g/h, storage rent, subblocks]
---
# Ergo General Chat Summary — 2024-W08 (2024-02-19 to 2024-02-25)

## Key Topics Discussed

- **ErgoDevs DAO R&D initiative**: [@kushti, msg#475363, 2024-02-19] Formal announcement of a cyberspace-based DAO for Ergo protocol research, development, and off-chain infrastructure maintenance. Seeking co-contributors and feedback on forum post.

- **Decentralized mining pools**: [@Glasgow, msg#475354, 2024-02-19] Clarified that no truly decentralized pools currently exist; directed users to Lithos Protocol telegram as alternative to centralized options.

- **Sub-blocks and sidechain development**: [@kushti, msg#475980, 2024-02-23] Sub-blocks are actively in development with focus on sidechain prototype to incentivize miners and finishing testnet deployment for sub-block P2P messages.

- **Block speed parameter tweaking**: [@kushti, msg#475725 et seq.] Discussion of faster block time optimization and microblocksub-blocks as potential throughput improvements; testnet infrastructure being set up for community parameter experimentation.

- **MEXC listing campaign planning**: [@kushti, msg#476146, 2024-02-24] Identified consensus, agent fee offer, and market maker requirements as key prerequisites; discussion of crowdfunding mechanisms (multisig wallets for BTC/ADA/ERG donations) and community MM strategies using Hummingbot.

- **SigmaUSD stability and yield strategies**: [@Ole Isler et al., msg#475683–690, 2024-02-21] Confirmed SigmaUSD contract lives on-chain with multiple UIs; advised considering SigmaRSV as short-term speculation and SigmaUSD for lending yields (~25% on DuckPools, up to 125% mentioned with higher risk).

- **Mixing UI and token support**: [@kushti, msg#475981, 2024-02-23] Adding tokens to mixer UI is trivial; any token can currently be mixed but dedicated UI support would improve usability. SafeW attempted support but UI remains complex.

- **Centralized exchange listings and trust metrics**: [@CW et al., msg#476079–087, 2024-02-24] Debate over volume authenticity and trust score methodology on CoinGecko vs. CMC; MEXC volume assessment showed comparable metrics to Gate.io despite skepticism.

- **Dynamic miner configurations**: [@Armeanio, msg#476365–366, 2024-02-24] Emphasized flexibility of Ergo's miner-controlled parameters as underappreciated feature; miners have yet to explore internal levers once emissions stabilize.

---

## Important Decisions or Announcements

- [@kushti, msg#475472, 2024-02-20]: Defended original fair launch ceremony and mining competition, noting hundreds followed launch and winners retain earned ERG; early purchasers like York also participated legitimately.

- [@kushti, msg#475475, 2024-02-20]: **Emission schedule confirmed**: Next reduction in April 2024, followed by July and October.

- [@kushti, msg#475580, 2024-02-21]: Re-opened testnet pool at https://ergo.rkdn.app after 20-month drought; seeking community hashrate testing.

- [@kushti, msg#476158, 2024-02-24]: **MEXC funding commitment**: 2,000 ERG allocated from Xeggex raffle proceeds for MEXC listing; GreasyCex expected to contribute thousands as well.

- [@glasgowm, msg#476785, 2024-02-25]: Added DECO education documentation link (eUTXO boxes/addresses trail) to reference materials.

- [@kushti, msg#476461, 2024-02-24]: **Raffle v2 in development**: Current version supports ERG only; next version will support multiple token types.

---

## Technical Q&A Worth Preserving

- **Q** (@Patato, msg#475397): Can mining occur to a pruned full node?  
  **A** (@kushti, msg#475402): Yes, if running in UTXO mode.

- **Q** (@Patato, msg#475401): Is log-space mining involved?  
  **A** (@kushti, msg#475403): Almost (partial confirmation).

- **Q** (@Foyaz Sheikh, msg#475849–860, 2024-02-21): Can 100+ ERG be deposited to a Ledger wallet if the limit is noted as "not more than 20 tokens"?  
  **A** (@responder, context): The "20 tokens" constraint refers to token *types*, not quantity; ERG amounts are unrestricted.

- **Q** (@Hasnain, msg#475488, 2024-02-20): Does token explorer show token names?  
  **A** (@responder): Currently shows only token IDs, not names.

- **Q** (@JMASTERJ, msg#476839–851): How to acquire native ERG without bridging or KYC? Can MetaMask be used?  
  **A** (@Affable Villain): Use Simpleswap to swap ETH/other for native ERG into an Ergo wallet (Nautilus, Ergo Mobile, or Terminus). MetaMask cannot yet hold ERG natively; Metamask snap integration is in development. Once Rosen Bridge EVM support launches, wrapped ERG will be available on EVM chains.

- **Q** (@kii, msg#476074–075, 2024-02-24): Request for DECO eUTXO documentation link in resources.  
  **A** (@glasgowm, msg#476785): Added https://deco-education.github.io/deco-docs/docs/into-the-woods/trail1-eutxo-n-nfts/eutxo-boxes-addresses

- **Q** (@Shiv Chauhan, msg#475865–866, 2024-02-22): Early repayment on SigmaFi loans—does borrower get lender's full interest period? When is grace period before liquidation?  
  **A**: Unresolved in chat segment.

- **Q** (@Mewbie, msg#476797, 2024-02-25): What is contract `2zYV` on Ergo?  
  **A** (@glasgowm, msg#476803): Likely a proxy contract; insufficient data for definitive identification.

---

## Links Shared

- [Ergo Forum: ErgoDevs DAO Post](https://www.ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663): [@kushti, msg#475363] Formal proposal for core and ecosystem R&D DAO structure.

- [Ergo Weekly Developer Update](https://youtu.be/B62V63JcNgc): [@Ergo NEWS, msg#475394, 2024-02-19] Spectrum DEX discussion by qx() with Yasha Black; updates from RosenBridge, Lithos Protocol, Sigmanauts, kushti, Blitz TCG.

- [Ergo Platform Wallets](https://ergoplatform.org/en/get-erg/#Wallets): [@glasgowm, msg#475951, 2024-02-22] Comprehensive wallet options reference.

- [Ergonaut Yield Guide](https://ergonaut.space/en/Guides/yield#explore-yield-generating-strategies-on-ergo): [@glasgowm, msg#475693, 2024-02-21] Yield strategy documentation.

- [SigmaFi Lending Guide](https://ergonaut.space/en/Guides/yield/lending): [@glasgowm, msg#475926, 2024-02-22] Tutorial for SigmaUSD lending on DuckPools/SigmaFi.

- [Simpleswap](https://simpleswap.io/): [@glasgowm, msg#475947, 2024-02-22] Non-custodial swap service with best liquidity; no login required.

- [House of Chimera ERGO One-Pager](https://twitter.com/HouseofChimera/status/1760682990848622888): [@Diederick, msg#475919, 2024-02-22] Updated one-page resource for new user onboarding.

- [CruxFinance Landing Page](https://crooks-fi.com/): [@HQΣr, msg#475997, 2024-02-23] CruxFinance (Crooks Finance) project announcement.

- [Testnet Ergo Pool](https://ergo.rkdn.app): [@kushti, msg#475725, 2024-02-21] Community hashrate testing for sidechain prototype.

- [Hummingbot Strategies Documentation](https://hummingbot.org/developers/strategies/#what-is-a-strategy): [@qx(), msg#476202, 2024-02-24] Market making and arbitrage strategy reference.

- [Hummingbot Strategy Guide](https://github.com/hummingbot/hummingbot-site/tree/main/docs/strategies): [@qx(), msg#476203, 2024-02-24] Implementation guide for community MM operators.

- [DECO eUTXO Education](https://deco-education.github.io/deco-docs/docs/into-the-woods/trail1-eutxo-n-nfts/eutxo-boxes-addresses): [@kii, msg#476074] Recommended eUTXO and NFT tutorial by DeCo founder.

- [CoinGecko Methodology](https://www.coingecko.com/en/methodology): [@CW, msg#476083, 2024-02-24] Trust score and volume transparency standards.

---

## Unresolved Questions

- **Block time parameter changes**: [@kushti et al., msg#475728–729, 2024-02-21] "Wen S blocks?" — community asking for sub-blocks implementation; development status confirmed ongoing but no ETA given.

- **MEXC vs. KuCoin trade-off**: [@kushti, msg#476174, 2024-02-24] Is MEXC beneficial if KuCoin is already listed? No definitive answer; discussion notes saturation thresholds and liquidity distribution strategy remain unclear.

- **Binance listing speculation**: [@Nash et al., msg#476891–920, 2024-02-25] Coinpedia article claiming Ergo coming to Binance in February 2024 — Armeanio (@476906) declined to confirm; unverified rumor; article has disclaimer about press release format.

- **SigmaRSV deposit mechanism status**: [@Unknown, msg#476516, 2024-02-24] Is SigmaRSV deposit still operational? Not addressed in segment.

- **BTC-mixing dApp for smaller amounts**: [@Unknown, msg#476519, 2024-02-24] Proposed exploration of privacy tools for Bitcoin community; no response captured.

- **ErgOne CoinGecko listing**: [@HQΣr, msg#476746, 2024-02-25] Status of ErgOne token listing on CoinGecko — Giufa responded "Not yet, maybe soon" (msg#476746); timeline unclear.

- **Oracle Pool v2 design and rollout**: [@Jack Σ, msg#476354, 2024-02-24] Potential integration with Cardano C3 oracles and main developer attribution — question dismissed without answer.

- **Storage rent implementation timing**: [@qx(), msg#475755, 2024-02-21] "Hopefully seeing storage rent implementation soon!" — flagged as critical feature pending verification before pool expansion; no confirmed timeline.

---

## Community Sentiment & Notable Context

- **Whale activity**: [@Mint LkV, msg#476033, 2024-02-23] Large consolidation transaction (701,810 ERG ≈ $1.19M) across 11 addresses into single wallet noted; asset accumulation signal interpreted positively by community.

- **Price and listing focus**: Multiple threads emphasize urgency of CEX listings (MEXC, potential Binance) as key growth catalyst; price discussion subordinated to infrastructure maturity concerns.

- **Twitter account disruption**: [@Ergo NEWS, msg#475482, 2024-02-20] Temporary lock on official Ergo Twitter account; resolved by @qx() and @glasgowm; attributed to "silly fuck up" with ETC takeover referenced jokingly (@qx(), msg#475501).

- **Mixing and privacy infrastructure**: Acknowledged as underdeveloped despite strong protocol support; UI/UX barriers and lack of wallet integration cited as limiting adoption.