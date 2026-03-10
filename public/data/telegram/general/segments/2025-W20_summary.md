---
title: "Ergo General Chat — 2025-W20"
date_start: "2025-05-12"
date_end: "2025-05-18"
type: telegram_weekly
channel: general
week: "2025-W20"
source: telegram
message_count: 0
categories: [technical, governance, bridges, ecosystem, community, defi, marketing, mining]
key_terms: [sub-blocks, weak blocks, block announcement, devnet, CPU mining, ordering blocks, Extended UTXO, AI agents, parallelism, smart contracts, Artificial Economic Intelligence, 6.0 final release, protocol upgrade, voting, soft-fork, RosenBridge, rsERG, liquidity, ADA correlation, cross-chain]
---
# Ergo General Chat — 2025-W20 Summary

## Key Topics Discussed

- **Sub-blocks (weak blocks) development**: kushti provided updates on efficient block announcement implementation, with private testing underway followed by public devnet deployment. Sub-blocks enable faster confirmations for low-security-requirement transactions while maintaining full security for high-value transfers through normal blocks.

- **Sub-blocks security and confirmation strategies**: Discussion on how double-spending is prevented in follow-up sub-blocks, whether contracts need rewriting, and how different applications can choose confirmation requirements (1-2 sub-blocks for fast confirmations, normal blocks for exchanges). Timestamp-based contracts cannot be spent in sub-blocks, only in ordering blocks.

- **Rosen Bridge liquidity and ERG/ADA correlation**: Extended debate about whether Rosen Bridge's rsERG liquidity on Cardano is creating artificial price correlation between ERG and ADA, with counterarguments that bridge enables arbitrage and price discovery rather than forcing pegging.

- **On-chain messaging and chat**: HQΣr deployed a prototype on-chain chat system (ergochats.vercel.app) with minimal transaction costs (0.0004 ERG per message). Discussion included storage rent implications, potential for stealth/mixer-based anonymous messaging, and architecture for persistent message history via smart contract chains.

- **AI-powered development tools**: Community members reported rapid prototyping using Lovable, Grok, and Cursor with Ergo documentation, with minimal manual code required. TMR.ΣRG built a wallet-connected dApp in ~half a day using AI-assisted development.

- **Ergo as "Plan B" infrastructure**: kushti framed Ergo ecosystem as emergency financial infrastructure for failed states, proposing tutorials on bootstrapping financial systems using Ergo tools (dApps, stable coins, DEXes, lending contracts).

- **6.0 protocol soft-fork and Dexy mainnet**: kushti announced "delivery season" with planned 6.0 final release and voting, Dexy mainnet launch, and sub-blocks devnet already live.

## Important Decisions or Announcements

- [@kushti, msg#558489, 2025-05-12]: Sub-blocks update with initial rough version of new block announcement completed; latest 6.0 code merged into sub-blocks PR; public devnet pending testing and polish.

- [@kushti, msg#559530, 2025-05-17]: Sub-blocks devnet CPU mining node deployed at http://213.239.193.208:9058/info with example client config using "weak-blocks" branch; build instructions provided.

- [@kushti, msg#559533-535, 2025-05-17]: "Delivery season started" — next is 6.0 final release and voting, followed by Dexy mainnet launch.

- [@cannon_q, msg#558658, 2025-05-13]: US on/off ramp coming soon (TM); kushti pledged to donate to raffle for it.

- [@HQΣr, msg#559496 & msg#559599, 2025-05-17]: Deployed Ergo pixel canvas prototype (build-drab-nine.vercel.app) and on-chain chat system (ergochats.vercel.app) for community testing.

- [@kushti, msg#559390, 2025-05-16]: Created consultation token priced in Mew offering 2 hours of direct consultation in June.

- [@TMR.ΣRG, msg#559414-415, 2025-05-16]: Launched AI-powered game for ErgoHack: users pay 1 ERG per message to AI, solving 3 puzzles reveals seed phrase to claim vault. Target: 100 ERG raised via Ergo Raffle.

## Technical Q&A Worth Preserving

- **Q** (@Ioannis, msg#558535): What are the biggest improvements from sub-blocks? More TPS? Faster confirmation?
  **A** (@kushti, msg#558550): Double spending is not possible in follow-up sub-blocks. For confirmations, it is the same as with blocks — you wait for enough hash to confirm your transaction.

- **Q** (@Ioannis, msg#558546): Doesn't sub-blocks reduce security? What happens if a double-spend is done and found after the sub-block has been confirmed?
  **A** (@LouisLibre, msg#558551): They are still being mined and hashed with a smaller difficulty target (thus faster confirmation), so it's not "zero" security. Different use cases benefit: exchanges may require 1-2 normal blocks; coffee shops may require 1-2 sub-blocks.

- **Q** (@Pulsarz, msg#558596): What is the best way to check contracts — blockheight or timestamp?
  **A** (@kushti, msg#558599-600): Inputs with timestamp-based contracts cannot be spent in sub-blocks, only in ordering blocks.

- **Q** (@cannon_q, msg#558570): Will smart contract be required to dictate acceptable confirmation levels, or can users choose at signing time like fee adjustment?
  **A** (@HQΣr, msg#558574): Smart contract will require rewrite or a proxy.

- **Q** (@Patato, msg#559626): What happens when boxes are demurraged — does chat history still work?
  **A** (@HQΣr, msg#559627): Storage rent consumes the boxes. Workarounds: run a scraper to store in centralized DB, or users download chat history locally.

- **Q** (@TMR.ΣRG, msg#559507): How do I calculate how much SigmaUSD can be minted currently?
  **A** (@HQΣr, msg#559510): Check bank.mewfinance.com — current available: 10,177.28 SigmaUSD.

- **Q** (@TMR.ΣRG, msg#559203): How much code was written manually for your AI-assisted dApp?
  **A** (@TMR.ΣRG, msg#559211): Basically zero. Used Grok to search documentation and examples, created a guide for Cursor, then gave commands to use sample code. Minimal back-and-forth for errors once reference materials were found.

## Links Shared

- [http://213.239.193.208:9058/info]: Sub-blocks devnet CPU mining node endpoint.
- [https://gist.github.com/kushti/8f0753c454cab46244dbaee3b4d842c8]: Example sub-blocks client config.
- [https://build-drab-nine.vercel.app/]: Ergo pixel canvas prototype for testing.
- [https://ergochats.vercel.app/]: On-chain chat system prototype (0.0004 ERG per message).
- [https://ergoraffle.com/raffle/show/b12e2d26dbd3ec12151093f451e8d7cdb7a8f45eb102e502c2a30c01c66b4566]: TMR.ΣRG's AI game raffle (Honeypot Kickstart, 200 ERG target).
- [https://github.com/marctheshark3/AI-Project-Starter-Kit/tree/main]: Marc the Shark's AI project starter kit for ErgoHack.
- [https://x.com/erg_armeanio/status/1921969754245628261]: Armeanio updates on Rosen Bridge (Cookbook status, HNS bounty).
- [https://github.com/kushti/ergo-book/blob/master/From%20Ideas%20To%20Tech/SilverDollar]: Grayman's contribution to Ergo Book on silver dollar analogy.
- [bank.mewfinance.com]: MewFinance bank interface showing SigmaUSD minting availability.

## Unresolved Questions

- **Sub-blocks future compatibility**: Will future sub-block time decreases break existing on-chain contracts locked to current timing? [@Pulsarz, msg#558587-589] — addressed partially by kushti (timestamp contracts immune) but broader upgrade path unclear.

- **CEX listing strategy**: Community divided on whether Ergo should pursue proactive CEX expansion versus reactive wait-for-utility approach. [@DiscordBridge msg#558627-631 (Discord debate)]. No resolution on cost-benefit of exchange raffles.

- **Rosen Bridge price impact**: Unresolved empirical debate on whether rsERG liquidity on Cardano dictates ERG price movement or enables healthy arbitrage. [@Unknown, msg#558744-819] — kushti countered that supply/demand and trader overlap, not pegging, explain correlation, but quantitative analysis lacking.

- **Chat history persistence under demurrage**: Long-term viability of on-chain chat if boxes are consumed by storage rent — solutions mentioned (scraper, smart contract chain traversal) but no consensus on recommended architecture. [@Patato, msg#559626-640].

- **ErgoNames and payment gateway**: HQΣr flagged that mgPai hasn't completed ErgoNames, blocking integration with proposed payment gateway dApp. Status TBD. [@HQΣr, msg#559236].

- **Sub-blocks contract migration**: What's the recommended pattern for updating existing dApps to support sub-blocks without breaking historical logic? No guidance provided. [@HQΣr, msg#558574].