# Ergo General Chat — Week 2025-W40 Summary

## Key Topics Discussed

- **USE Stablecoin Launch & Dexy Protocol Integration**: Community stablecoin project using Dexy-based crypto-backed algorithmic USD-pegging mechanism. v2 USD pool launched with DORT (oracle reward token) liquidity pool bootstrapped. Led by @RichiTP and @Pgr456. Differs from SigmaUSD through design and trader attractiveness.
  
- **GitCircles Community Currency Framework**: Open-source developer payment system targeting sophisticated users. Early manual testing underway with liquidity pool establishment. Viral developer onboarding planned. Led by wishyoubalance and bro etiquet (new to Ergonauts).

- **Basis Protocol & Offchain Cash**: Simplified ChainCash variant with offchain cash backed by on-chain reserves. Tracker server testing initiated. Planned wallet for local p2p transactions and agent-to-agent payments with p2p network incentivization (potential DePIN replacement).

- **Rosen Bridge + Bitcoin Runes Integration**: Cross-chain control plane using Watchers and Guards enabling wrapped assets as Bitcoin Runes that travel across chains and redeem verifiably. First ADA demo funded by Cardano Catalyst, full loop demonstrated.

- **Sigma 6.0 Soft Fork Activation**: Protocol upgrade activating in ~20 hours from [2025-10-05T12:15]. Details at ergoforum forum link.

- **Merge Mining & Sidechain Design**: Discussion of trustless pegging for merge-mined sidechains (particularly Braid sidechain with multi-chain parent capability). BIP-301 referenced as comparison to Bitcoin sidechaining approaches. Ergo-specific improvements over Bitcoin noted.

- **Order Book DEX (Trade House) vs AMM Design**: Significant contrast between peer-to-peer order book systems (Trade House) offering transparency, depth visualization, and slippage control versus AMM-based systems (Spectrum) with concentrated liquidity. Partial order fills and multiple upgrade key models discussed.

- **Near Protocol "Intents" vs Rosen Bridge**: Community debate on whether Near's "intents" messaging represents genuine innovation or rebranding of atomic swaps (2012 primitive). Rosen Bridge positioned to cover crosschain swaps + crosschain liquidity pools niches; Near intents require backend marketplace/market makers.

- **AI Agents & Proof of Work Utility**: Speculation on autonomous agent preferences for PoW over PoS, GPU mining alignment with AI compute demand, agents choosing ERG as "hard programmable money," and utility companies load-balancing power via mining.

- **Liquid Staking Token (LST) Protocol Concept**: Community member pitched ERG-based LST protocol with no new token, powered by perps + yield collaterization DeFi products, fees returned to stakers/LPs. Design justified on non-PoS chains. Feedback mixed; supporter noted it builds DeFi ecosystem; critic cited risk profile despite only smart contract exposure claimed.

- **Misinformation & Regulation Clarification**: Debunking circulating false claims: infinite ERG supply, dev dumping, EF legal status. EF confirmed as DAO LLC (Marshall Islands) ~2 years ago; @glasgowm can sign US CEX listings. Previous Dubai registration denied by @kushti. Disinfo bots suspected.

- **Block Reward Emission**: Another scheduled reduction occurred; network now at 9 ERG per block [2025-10-05T01:46].

## Important Decisions or Announcements

- [@kushti, msg#576577, 2025-09-29]: Major upcoming launches: USE stablecoin, GitCircles community currency framework, Basis offchain cash protocol. Positioned as Ergo leadership in money issuance reworking from top-down to bottom-up approaches.

- [@richi, msg#576691, 2025-10-01]: USE stablecoin public Telegram group created at https://t.me/USE_stablecoin.

- [@glasgowm, msg#576948, 2025-10-03]: EF registered as DAO LLC (Marshall Islands) ~2 years ago; @glasgowm authorized to sign US CEX listings.

- [@Armeanio, msg#576953, 2025-10-03]: Stepped back from CEX listing involvement due to conflict of interest with Rosen Bridge focus.

- [@kushti, msg#577002, 2025-10-04]: Endorsement of GitCircles targeting open-source developers as correct entry strategy; acknowledged complexity translation and compelling narrative as success factors.

- [@kushti, msg#577036, 2025-10-04]: Basis tracker server testing initiated.

- [@kushti, msg#577055, 2025-10-05]: Block reward emission reduction occurred; network now at 9 ERG per block.

- [@kushti, msg#577158, 2025-10-05]: Sigma 6.0 activation in 20 hours; referenced forum proposal for details.

## Technical Q&A Worth Preserving

- **Q** (@Quibbix, msg#576587): What is difference between SigmaUSD and USE? Will SigmaUSD go away or perhaps stablecoin pairs (USE/SigmaUSD)?
  
  **A** (@kushti, implicit context from msg#576577): USE is Dexy-based crypto-backed algorithmic USD-pegged stablecoin already tested with Dexy Gold; SigmaUSD continues existing. Stablecoin pairs suggested as useful for ecosystem (msg#576593).

- **Q** (@Quibbix, msg#576589): What is DORT? Is that the USD coin?
  
  **A** (implicit from msg#576577): DORT is USD oracle reward token with liquidity pool bootstrapped; not the stablecoin itself.

- **Q** (@Quibbix, msg#576592): Can anyone be oracle? Details on protocol at easy-explain level? Buyback mechanism for reward token?
  
  **A** (Unresolved — redirected to community resources; no direct technical answer provided).

- **Q** (@Grayman, msg#576824): Would merge mining with Bitcoin enable Ergo smart contracts to execute based on Bitcoin state? Or must BTC move to rsBTC? Does merge mining enable BTC oracle?
  
  **A** (@Jayedii, msg#576831): Dual merge mining happens through Braid (third token/sidechain), not direct BTC-ERG merge mining.
  
  **Follow-up Q** (@Grayman, msg#576832): Could Braid execute ErgoScript with state from both parent chains? Multi-party?
  
  **A** (@Jayedii, msg#576845): Whitepaper at https://github.com/BetterMoneyLabs/braid/blob/master/whitepaper/whitepaper.pdf explains better.

- **Q** (@Jayedii, msg#576739): What drew you to Near initially? What happened to chain signatures for Bitcoin DeFi?
  
  **A** (@Jayedii, msg#576739): Lost interest when Near chased AI hype; mission seemed scattered; chain signatures idea didn't gain traction.

- **Q** (@Ergochampion, msg#576977): Has anyone read new SEC rules on listing crypto on stock exchange? Could Ergo get listed? Liquidity major concern?
  
  **A** (@cannon_q, msg#576978): Referenced Ergo Manifesto; doesn't align with SEC requirements/approach.
  
  **A** (@Armeanio, msg#576980): Ergo is fair-launched PoW coin; nobody asks Satoshi or node devs to handle SEC listings; community members can "take as much power as you want."

- **Q** (@Jayedii, msg#576901): What wallets does everyone use? Looking for Ledger option and specific UTXO control (like Eternl on Cardano).
  
  **A** (@Pulsarz, msg#577148-149): Nautilus Ledger integration fixed; WebHID transport method working; successful test sent ERG via Ledger Nano S+.

- **Q** (@DiscordBridge/cafebedouin, msg#576605, reply to Basis): Cannot replace DePIN, should partner with DEPINs for supplemental support.
  
  **A** (Implicit from @kushti's vision): Basis positioned for agent-to-agent payments and p2p incentivization; framed as potential alternative, not guaranteed replacement.

## Links Shared

- [Ergo Forum — Sigma 6.0 Soft Fork Proposal](https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005): Technical details on protocol upgrade.

- [GitHub — Braid Whitepaper](https://github.com/BetterMoneyLabs/braid/blob/master/whitepaper/whitepaper.pdf): Merge-mined sidechain design with multi-chain parent capability.

- [Ergo Raffle #69d9f9c7](https://ergoraffle.com/raffle/show/69d9f9c7aece4087b6cd934757226023932868099cefbfa697aa54e35faeb9f4): Community fundraiser to pay developers; kushti to disperse; nearly funded.

- [USE Stablecoin Telegram](https://t.me/USE_stablecoin): Public community group for USE stablecoin project.

- [YouTube — Community Chat October 2nd (Live Stream)](https://youtube.com/live/thVAsxgUo-Q): Developer updates + open discussion format.

- [CoinMarketLeague — Ergo Voting](https://coinmarketleague.com/coin/ergo): Community voting campaign; Ergo ranked #9 in top 10.

- [Ergo Platform X Post — Runes + Rosen Bridge](https://x.com/ergo_platform/status/1973249215804698836): Bridge design with traders, devs, DAOs in mind.

- [Near Intents Blog](https://www.near.org/blog/unpacking-near-intents-a-deep-dive): Near protocol documentation on intents mechanism.

- [GitHub — SigmaBot](https://github.com/Eeysirhc/sigmabot): Original community Discord bot; referenced for potential revival.

- [Ergo Forum — Daily Ergo Facts (2020 Archive)](https://www.ergoforum.org/t/daily-ergo-facts/166): Historical daily fact posts; suggested model for current Twitter-to-YouTube content strategy.

## Unresolved Questions

- **GitCircles Developer Onboarding Strategy**: Viral tools planned but specifics not detailed; rollout timeline unclear.

- **DORT Buyback/Reward Distribution Mechanics**: How oracle reward token buyback functions and fee distribution to stakers not explained beyond liquidity pool bootstrap.

- **Basis Agent-to-Agent Payment Integration**: How agent payment routing and settlement will function; specification TBD.

- **Merge Mining with Litecoin**: @Jayedii expressed desire to see Braid implemented on Litecoin; no roadmap commitment discussed.

- **LST Protocol Risk Profile**: @cannon_q cited risks beyond smart contract risk but specifics not elaborated; debate ongoing whether non-PoS-specific yield products create acceptable risk/reward.

- **Near Intents Auditability**: Whether Near intents architecture is fully auditable questioned; answer deferred to technical review.

- **CoinMarketCap Stock Exchange Listing Feasibility**: SEC rule interpretation and Ergo's structural fit not thoroughly analyzed.

- **Ergo Oracle (not Chainlink) Development Timeline**: @Dan mentioned potential capital allocation to build out native Ergo oracles from token sale funds; specifics deferred.