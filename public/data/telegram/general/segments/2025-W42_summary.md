---
title: "Ergo General Chat — 2025-W42"
date_start: "2025-10-13"
date_end: "2025-10-19"
type: telegram_weekly
channel: general
week: "2025-W42"
source: telegram
message_count: 0
categories: [wallet, mining, ecosystem, defi, marketing, community, bridges, governance, technical]
key_terms: [Trezor, Ledger, Nautilus, hardware wallet, Keystone, Lithos Protocol, mining pools, testnet, transparent payouts, miner-controlled blocks, GitCircles, GitHub contributions, developer rewards, smart contracts, open source, ChainCash, chain cash notes, monetary theory, basis, off-chain transactions]
---
# Ergo General Chat — 2025-W42 Summary

## Key Topics Discussed

- **ChainCash and Basis Reserve System**: Discussion of ChainCash mechanics where a company locks ERG in a smart contract, issues off-chain notes backed by that reserve, and enables peer-to-peer circulation with on-demand redemption. [@T F, msg#578268, 2025-10-16] Clarification emerged that unlike traditional ChainCash models, responsibility for redemption rests with the original issuer, not intermediate holders. [@T F, msg#578273, 2025-10-16]

- **Lithos Protocol Testnet Launch**: Public testnet opening week of November 2, featuring on-chain mining pools with transparent payouts and miner-controlled blocks. Non-interactive share proofs enable scalability and efficiency. [@Ergo NEWS $ERG, msg#578149, 2025-10-14]

- **Nautilus Wallet + Ledger Integration**: Ledger support development underway—update available on GitHub but not yet in production. [@HQΣr | Wont Dm 🐾 ⚡, msg#578166, 2025-10-14] Testing indicated the GitHub version has issues. [@Irp, msg#578168, 2025-10-14]

- **Machina Finance Development**: Timeline in flux; described as "long two weeks" in Ergo time. Discussion of AVL tree integration for position/trade imports from CSV or Python. [@Armeanio, msg#578511, 2025-10-19; @cannon_q, msg#578519, 2025-10-19]

- **Oracle Pool v2 and Dexy Gold**: Oracle Pool v2 now running for Dexy Gold with GORT rewards. [@Armeanio, msg#578254, 2025-10-15]

- **USE Stablecoin Bootstrap Event**: New USD oracle pool launched; USE parameters under finalization, liquidity bootstrapping event announcement pending. [@kushti khushi, msg#578255, 2025-10-15]

- **GitCircles Contribution Tracking**: GitHub contribution tracking system expanding to new communities; one PR away from broader deployment. [@kushti khushi, msg#578255, 2025-10-15]

- **Basis Tracker Server**: Initial version deployed and under testing; wallet development initiated. [@kushti khushi, msg#578255, 2025-10-15]

- **Rosen Bridge Activity**: 125k rsERG transferred from Cardano to Ergo over Rosen Bridge, execution time noted as fast. [@Grayman, msg#578523; @HQΣr | Wont Dm 🐾 ⚡, msg#578524-526, 2025-10-19]

- **Ecosystem Cross-Chain Outreach**: Proposal for monthly roundtable AMAs bringing together developers from Flux, Nervos, Alephium, Kaspa, Cardano, XMR, and other ecosystems. Stability Nexus already running bi-monthly dev-focused meetings. [@HQΣr | Wont Dm 🐾 ⚡, msg#578413-415, 2025-10-18; @Bruno Woltzenlogel Paleo, msg#578422, 2025-10-18]

- **GraphQL and API Infrastructure**: Multiple node operators and GraphQL endpoints experiencing issues requiring updates. Community provided alternative endpoints (P2P, Cornell, CodeUTXO). [@qx(), msg#578291-293, 2025-10-16]

## Important Decisions or Announcements

- [@Armeanio, msg#578117, 2025-10-15]: Ergo's block time is ~2 minutes; development cycle ~2 weeks—"time here is variable based on difficulty and luck."

- [@kushti khushi, msg#578255-256, 2025-10-15]: GitCircles expansion ongoing, Basis tracker deployed, USE liquidity bootstrap event incoming, all to be discussed in upcoming community call.

- [@qx(), msg#578276-278, 2025-10-16]: Community Chat held Thursday October 16, 13:00 UTC, streamed live with Zoom link.

- [@qx(), msg#578291-296, 2025-10-16]: Due to new Nautilus requirements, main GraphQL servers need updating; P2P endpoints available in interim. Provided comprehensive list of functioning explorers and APIs.

- [@cannon_q, msg#578364, 2025-10-17]: Community will not fund non-Tier-1 exchange listings (replying to Weex listing inquiry).

- [@cannon_q, msg#578416, 2025-10-18]: Zahnentferner initiating bi-monthly Stability Nexus tech seminars for cross-ecosystem developer outreach.

- [@kushti khushi, msg#578482-483, 2025-10-19]: Emphasized Ergo's fully open-source, permissionless ethos; no formal "team," only influential contributors; encourages DYOR.

## Technical Q&A Worth Preserving

- **Q** (@T F, msg#578268, 2025-10-16): Does ChainCash work as follows: company locks ERG on-chain, issues off-chain notes to employees who circulate them in a local economy, with redemption handled by the original issuer for a small fee, enabling lending/interest capture?
  
  **A** (@DiscordBridge Glasgow, msg#578269, 2025-10-16): "Sounds about right," with reference to practical examples in [Ergo docs](https://docs.ergoplatform.com/uses/chaincash/#practical-examples). Additional note: use custom GPTs like AskTheCode or Chat with Code for repository analysis.

- **Q** (@T F, msg#578273, 2025-10-16): In the ChainCash documentation model where notes can be redeemed against "any previous holder's reserves," doesn't that mean I become liable for backing a note I accepted and later spent? When does that responsibility stop?
  
  **A**: No resolution recorded in segment; question remains open regarding ChainCash liability model in multi-holder scenarios.

- **Q** (@Irp, msg#578165, 2025-10-14): Is Nautilus working again with Ledger?
  
  **A** (@HQΣr | Wont Dm 🐾 ⚡, msg#578166-167, 2025-10-14): Update available on GitHub but not yet in production; author uncertain on GitHub push status.

- **Q** (@Irp, msg#578168, 2025-10-14): The GitHub update isn't working.
  
  **A**: User reported Sunday testing failure; unresolved, awaiting author confirmation.

- **Q** (@Rootardio, msg#578288-289, 2025-10-16): Spectrum DEX and wallet not working.
  
  **A** (@qx(), msg#578291-296, 2025-10-16): New Nautilus requires newer GraphQL; main servers need updating. P2P GraphQL is current. Provided list of working explorers, APIs, and GraphQL endpoints across multiple providers.

- **Q** (@Rootardio, msg#578431, 2025-10-18): Is 1K ERG a good 10-year hold?
  
  **A** (@Windblow, msg#578432): "It is." (@Jayedii via Discord, msg#578434): "Yessir! Keep stacking, and more importantly, keep active."

- **Q** (@cannon_q, msg#578519, 2025-10-19): With AVL trees in Machina Finance, can trades/positions be imported from CSV or Python via a template file that posts to the tree?
  
  **A**: No response recorded; flagged as unresolved.

- **Q** (@2ndTL Mining via Discord, msg#578508, 2025-10-19): Timeline on Machina Finance?
  
  **A** (@Armeanio, msg#578509-515, 2025-10-19): "Current goals" referenced but not detailed; noted as "long two weeks" in Ergo time. Project has been discussed/thought about since early 2023.

- **Q** (@Snowman Jason, msg#578498, 2025-10-19): Is Machina live?
  
  **A** (@HQΣr | Wont Dm 🐾 ⚡, msg#578500): Not yet; joked "when it's up, I will rename it to MewChina."

## Links Shared

- [GitCircles on Ergo NEWS](https://ergo.news/): Contribution tracking system using GitHub data and on-chain rewards via smart contracts; low fees and transparency highlighted.

- [Lithos Protocol Testnet Announcement](https://ift.tt/j6UIam9): Testnet launch week of November 2; on-chain mining pools, transparent payouts, non-interactive share proofs for scalability.

- [Ergo Docs: ChainCash Practical Examples](https://docs.ergoplatform.com/uses/chaincash/#practical-examples): Reference for ChainCash mechanics and use cases.

- [CoinGecko Native Ranking — Week 41](https://www.coingecko.com): Ergo ranked #5 most-voted native project (2025-10-13), then #3 most-voted blockchain project (2025-10-14).

- [Ergo Explorer (Official)](https://explorer.ergoplatform.com/)

- [Ergo Explorer P2P](https://explorer-p2p.ergoplatform.com/)

- [Cornell Ergo Explorer](https://ergo.aap.cornell.edu/)

- [CodeUTXO Ergo Explorer](https://explorer.codeutxo.com/)

- [SigmaSpace Explorer](https://sigmaspace.io/)

- [Ergo API Docs](https://api.ergoplatform.com/api/v1/docs/)

- [Ergo P2P API](https://api-p2p.ergoplatform.com/api/v1/docs/)

- [Ergo GraphQL](https://gql.ergoplatform.com/)

- [Ergo P2P GraphQL](https://graphql-p2p.ergoplatform.com/)

- [Ergo.watch API](https://api.ergo.watch/docs): Public blockchain analysis with free access and donation option.

- [Ergo.watch Top 100 FAKU Holders](https://api.ergo.watch/lists/addresses/by/balance?token_id=f0cac602d618081f46db086726d3c4da53006b646b50e382989054dcf3c93bd8&limit=100)

- [Nautilus Wallet Telegram](https://t.me/NautilusWallet): Support and updates channel.

- [Armeanio X Post on Monetary Theory](https://x.com/ERG_Armeanio/status/1978156300425965660): Discussion of ChainCash and monetary alternatives.

- [Armeanio X Post on BTCfi / Proof of Reserve](https://x.com/erg_armeanio/status/1978598921816686860): Context on 20% APY sustainability and new BTCfi paradigm.

- [Bitcoin Talk 2010 Thread](https://bitcointalk.org/index.php?topic=2077.0): "More or less a straightforward continuation of an idea from 2010" per Armeanio.

- [PoW Roundtable YouTube Recording](https://youtu.be/17Rx27PwADI): Historical cross-chain discussion with Flux, Radix, Alephium.

- [Ergo Meetup 2025 Speakers & Recording](https://ift.tt/5KjL2k3): Post-event coverage.

## Unresolved Questions

- **Ledger + Nautilus Integration Status**: GitHub version available but non-functional per user testing; production deployment timeline uncertain. Awaits author confirmation on push status. [@Irp, msg#578168, 2025-10-14]

- **ChainCash Holder Liability Model**: Clarification needed on whether intermediate holders who accept and spend multi-signature ChainCash notes become liable for backing those notes, and when that liability terminates. [@T F, msg#578273, 2025-10-16]

- **Machina Finance AVL Tree CSV/Python Import**: No response on technical feasibility of importing trade/position data from files into AVL tree structures. [@cannon_q, msg#578519, 2025-10-19]

- **Machina Finance Release Timeline**: Status remains "long two weeks in Ergo time"; project under discussion since early 2023 but no concrete milestones shared. [@Armeanio, msg#578511-515, 2025-10-19]

- **Cross-Chain Roundtable Format**: Proposed monthly ecosystem roundtable AMA discussed but structure, cadence, and invitee list not finalized; Stability Nexus tech seminars mentioned as partial overlap. [@HQΣr | Wont Dm 🐾 ⚡, msg#578413-415; @Bruno Woltzenlogel Paleo, msg#578422, 2025-10-18]

---

**Notes:**
- Week was moderately active with strong technical discussions on ChainCash, protocol updates, and infrastructure. Price speculation and off-topic messages were largely omitted.
- Ergo Meetup 2025 concluded during this period; positive sentiment on upcoming development cycles noted.
- Community health: ~1k bot/scam accounts removed from Discord. [@Glasgow, msg#578411, 2025-10-18]