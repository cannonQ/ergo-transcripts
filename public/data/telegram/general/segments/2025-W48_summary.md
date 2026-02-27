# Ergo General Chat — 2025-W48 Summary

## Key Topics Discussed

- **Rosen Bridge Bitcoin Runes Launch**: Rosen Bridge completed deployment of Bitcoin Runes support, enabling wrapped stablecoin runes on Bitcoin for the first time. Watchers required updating to 60%+ consensus on each network; permits at risk if operators remained on outdated versions.

- **USE Stablecoin Community Liquidity Bootstrap (CLB)**: Community-led fundraising campaign for USE (Universal Stablecoin) reached and exceeded 382,000 ERG goal (final: ~395k ERG). Event featured direct ERG contributions and wrapped Cardano rsERG, with airdrop distribution scheduled for Monday Nov 25. CLB tokens represent liquidity provider shares + two years of trading fees.

- **Bene V2 Launch**: Generalized fundraising platform went live supporting custom tokens (SigmaUSD, GAU, ERG) for campaigns. Version 2 built on Google Summer of Code project by Aditya Gupta, mentored by Josemi, kushti, and Luca. USE fundraising campaigns now running on Bene itself.

- **Unstoppable Hackathon & Spring of Code Sponsorship**: 3,000 ERG minimum reached to make Ergo an official sponsor. Campaign deadline extended due to tight schedule; fundraising continues at https://ergo.bene.stability.nexus/ with goal to attract developers via Google Summer of Code model.

- **Duckpools V2 Launch**: Live preview released with smarter contracts, upgraded dashboards, pool history integration. Backend improvements removed v1 slippage issues; Smart Reserves and lower fees deployed; further updates planned.

- **Lithos Protocol Phase Two**: Phase One testnet complete; moving to Fraud Proofs phase.

- **Degens.World Ecosystem Expansion**: 
  - Node Explorer (https://ergonodeexplorer.degens.world/) and API Explorer launched
  - MemevsMeme dApp updated with Comet meme contest integration
  - Xergon (Decentralized Proof-of-Node-Work Network for AI Compute on Ergo) in development

- **Coingecko & Ecosystem Listings**: ergoblockchain.org, Ergo Explorer, SigmaSpace, and additional explorers added to Coingecko Ergo page. Integration of Bitmart and other CEX listings discussed.

## Important Decisions or Announcements

- [@kushti, msg#583006, 2025-11-25T05:30]: "Runes are up!" — Rosen Bridge Bitcoin Runes deployment completed and operational.

- [@Armeanio, msg#582999, 2025-11-25T02:51]: "The final deployment process has been initiated. We will be live in a few hours." — Rosen Bridge deployment finalized.

- [@MHS_SAM, msg#583022, 2025-11-25T08:50]: Urgent notice: "Guys, please update your watchers! From now on, being on previous watchers means you're losing rewards for runes transfers. Also, your permits might be at risk of seizure due to bad reports."

- [@Richi, msg#583032, 2025-11-25T13:14]: "THe Event is up and running clb.mewfinance.com" — USE CLB event launched.

- [@Aco, msg#583328, 2025-11-28T11:52]: "100% goal met." — USE CLB campaign reached 382k ERG target.

- [@Bruno, msg#583256-259, 2025-11-28T00:47]: Bene V2 announced live across StabilityNexus, GluonStable, and DjedAlliance Twitter accounts.

- [@Josemi, msg#583029, 2025-11-25T12:42]: Unstoppable Hackathon registered nearly 2,000 participants; sponsorship contribution campaign active.

- [@kushti, msg#583508, 2025-11-30T23:06]: "3,000 ERG minimum reached for Unstoppable Hackathon and Spring of Code sponsorship, please feel free to donate more!"

- [@cannon_q, msg#583480, 2025-11-30T00:00]: Games Hub officially live inside CyberVerse with Racer, Wolf & Sheep, Archer, and Rocket Rush minigames.

- [@Armeanio, msg#583049, 2025-11-25T15:02]: "Also please note these are the first stablecoin wrapped runes in the history of Bitcoin 🫡" — Historic achievement: USE-wrapped runes on Bitcoin.

## Technical Q&A Worth Preserving

- **Q** (@CW, msg#583477): "Been having a think about front running orders on order books and what not. Could dark liquidity pools be set up and manage orders in a way that scanning bots and front running is minimised or nullified in order books and or amm?"
  **A** (@CW, msg#583478): "Maybe something for Machina @Armeanio" — Flagged as potential Machina Finance feature exploration.

- **Q** (@Luca, msg#583059-060, 2025-11-25T16:53): Node explorer not showing all reachable nodes vs ergonodes.net; incorrect country mapping for nodes.
  **A** (@ArØhβΣ, msg#583070-072, 2025-11-25T17:40): Acknowledged WebGL caching bug conflicting with live data; node type distinction (mining/full/light) not yet available in API.

- **Q** (@HQΣr, msg#583202, 2025-11-27T08:38): "When send msg to node?"
  **A** (@ArØhβΣ, msg#583203-207, 2025-11-27T08:40): Node messaging implementation requires node modification; alternative: dust transactions with NFTs or node wallet exposure + pulse messaging. Consensus-building discussion on messaging architecture.

- **Q** (@kushti, msg#583213, 2025-11-27T10:29): "What are liq requirements for hl?" (Likely referring to high-liquidity pool thresholds)
  **A** (@Armeanio, msg#583214-216, 2025-11-27T10:40): "It's expensive to buy a ticker at their auction. Also a non zero probability of getting rugged on the frontend."

- **Q** (@Koutelier, msg#583310, 2025-11-28T10:10): "Does this count like burning tokens?" (referring to tip transfers)
  **A** (@Grayman, msg#583313): "No, demurrage will bring it back." — Confirmed demurrage mechanics apply to tipped tokens.

## Links Shared

- [https://clb.mewfinance.com/contribute]: USE Community Liquidity Bootstrap event portal
- [https://clb.mewfinance.com/stats]: USE CLB contribution tracking and statistics
- [https://ergo.bene.stability.nexus/]: Bene v2 fundraising campaign hub (USE and Hackathon sponsorship)
- [https://docs.google.com/spreadsheets/d/1htHF3LlPnjG1U3WWFjEaUBn3-3RFkbS1mIyoiZ_BNMU/edit]: USE CLB airdrop allocation sheet
- [https://ergonodeexplorer.degens.world/]: Degens.World Node Explorer (WebGL globe visualization)
- [https://ergonexus.degens.world/]: Degens.World API Explorer
- [https://memevsmeme.degens.world/]: MemevsMeme Comet meme contest dApp
- [https://github.com/ArOhBeK/Xergon-Network]: Xergon Decentralized Proof-of-Node-Work Network litepaper
- [https://ergoblockchain.org/infographics/what-we-are-fighting-against-financial-repression-stack]: Community hub educational material on financial repression
- [https://ergoforum.org/ or https://ergoforum.aap.cornell.edu/]: Ergo Forum (migrated; both URLs functional)
- [https://coinmarketleague.com/coin/ergo]: Ergo voting page (community voting campaign)
- [https://open.substack.com/pub/murmurationstwo/p/bitcoin-and-the-quantum-problem-part-47f]: Bitcoin and Quantum Security article shared by Luca

## Unresolved Questions

- **Spectrum DEX Status**: User asked about Spectrum DEX closure and alternatives; Pluno bot referenced ErgoDex, Crystal Pool, Machina Finance, and MewFinance as alternatives, but no official statement on Spectrum's status provided.

- **CometHODL Token Redemption**: @T Mas asked how to swap CometHODL to regular Comet; @Koutelier indicated mgPai may have shut down HODL Comet for maintenance with no confirmed reopening date.

- **Meme Token Inclusion in USE Airdrop**: @Velvia raised whether memecoins can be added to bonus airdrop pool. Poll was above 70% threshold but @Richi stated decision pending final poll results (closing "tonight" relative to Nov 28).

- **Dark Liquidity Pools for Order Books**: @CW's question about front-running mitigation via dark liquidity remains exploratory; no concrete implementation plan confirmed beyond potential Machina Finance consideration.

- **Bitcoin Runes & Lightning Network Interoperability**: @Armeanio noted missing pieces for Lightning integration with Runes; @kushti asked which specific pieces but conversation didn't reach resolution on implementation roadmap.

- **Prediction Market Protocols Development**: @kushti mentioned two invented prediction market protocols for yield opportunities, one partially implemented but currently on hold due to developer availability constraints. No timeline for resumption without Spring of Code funding.