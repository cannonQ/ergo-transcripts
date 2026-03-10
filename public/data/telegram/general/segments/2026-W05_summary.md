---
title: "Ergo General Chat — 2026-W05"
date_start: "2026-01-26"
date_end: "2026-02-01"
type: telegram_weekly
channel: general
week: "2026-W05"
source: telegram
message_count: 422
categories: [ecosystem, bridges, defi, marketing, technical, mining, community]
key_terms: [EKB, transcripts, searchable knowledge, community calls, AMAs, Rosen Bridge, component PRs, revenue distribution, developer incentives, DexyGold, DexyUSD, USE, ticker GOLDmg, grams, @ergo_platform, content moderation, delegate access, posting guidelines, Ergo Book, mdbook]
---
# Ergo General Chat — 2026-W05 Summary

## Key Topics Discussed

- **Ergo Book Project**: kushti initiated a comprehensive book on Ergo's monetary philosophy and technical foundations, structured with mdbook for online hosting. Includes sections on alternative monetary stacks, historical context, protocol design, applications (Oracle Pools, Rosen Bridge, SigmaUSD, Dexy), and practical scenarios. Contributors discussed adding sections on free banking, demurrage, and SilverCents.

- **Ergo Knowledge Base (EKB)**: cannon_q launched ergo-transcripts.vercel.app, a searchable archive of 76+ ecosystem videos, AMAs, and technical discussions (51+ hours) with executive summaries, speaker identification, and live YouTube timestamps. Tool trains on corrections to improve topic extraction.

- **Rosen Bridge Treasury & Revenue Distribution**: kushti presented a multi-address reward distribution system enabling external developers (from Nervos, Firo, Handshake, etc.) to earn output based on fee volume. Opens infrastructure monetization for crowdfunded projects.

- **Rosen Bridge Expansion Kit**: Armeanio celebrated the first external PR of a component built from the kit being merged, marking progress on the bridge extensibility roadmap.

- **Mining Centralization Concerns**: Community flagged 2miners holding 56% of network hashrate, Herominers 23%. Calls made to diversify pools; T Mas and Grayman discussed long-term mining resilience and 51% attack resistance despite hashrate concentration.

- **GraphQL Infrastructure Issues**: qx() reported main GQL endpoint having issues; directed users to p2p (graphql-p2p.ergoplatform.com) or SigmaSpace in Nautilus. Issue resolved and redundancy improvements planned.

- **Ergo Platform Twitter Governance**: qx() solicited contributors for @ergo_platform account management with clear guidelines: Ergo-centric content, no self-serving promotion, organizational voice. kushti and cannon_q offered to contribute; Armeanio remains excluded per prior agreement.

- **Matrix/Sub-blocks Devnet**: kushti relaunched Matrix (subblocks) devnet testing with two peers; identified as active development on potential speed improvements.

- **Hackathon Quality**: kushti noted 100% AI-generated ("vibe coded") submissions in Unstoppable hackathon, raising concerns about meaningful contribution. Proposed prediction market mini-hackathon ideas for greater engagement.

- **DexyGold Commercial Ticker**: Richi announced ticker symbol GOLDmg for Dexy Gold, following market psychology principles for clarity.

- **USE Stablecoin Progress**: Richi emphasized USE as critical foundation before Dexy Gold launch; platform implementation list described as "quite full."

- **Palmyra & Chainlink Partnership**: Dan discussed on-chain warehouse receipts for decentralized trade financing using proof of reserve, IoT sensors (camera, weight/motion), and Oracle Pools. Plan to build native Ergo oracles while utilizing multiple oracle providers.

- **Zero-Knowledge Proofs in ErgoScript**: kushti explained bulletproofs, Sigma protocols, and Groth one-out-of-many proofs as enabling cryptographic privacy in Ergo contracts without trusted setup—opening possibilities for hybrid on/off-chain verification.

- **Development Documentation Gap**: n1ur0 and cannon_q identified lack of integrated, step-by-step dev tutorials covering on-chain, off-chain, multi-stage smart contracts, and scanner integration. Suggested aggregating existing scattered docs and showcasing real dApp implementations.

- **Modular App Architecture**: kushti highlighted Bene, Game of Prompts, and other dApps sharing forum, reputation, and other components—enabling plug-and-play ecosystem integration without core protocol changes.

- **VoltPay Merchant Support**: HQΣr clarified USE stablecoin can be enabled on VoltPay alongside SigmaUSD if merchant configures payments; instant asset swap capability requires proxy/bot.

- **Mining Hardware Performance**: Community discussed AMD MI60 GPU performance (14–48 MH/s reported), with Grayman suggesting ~180 MH/s equivalent for Autolykos mining; directed users to Sigmanauts mining channel and Lithos Protocol discussions.

## Important Decisions or Announcements

- [@cannon_q, msg#589214, 2026-01-28]: Launched Ergo Transcripts (ergo-transcripts.vercel.app)—searchable knowledge base of 76+ ecosystem meetings with summaries, timestamps, and speaker identification.

- [@kushti, msg#589369, 2026-01-29]: Released Ergo Book outline structure via mdbook, featuring sections on monetary philosophy, protocol design, applications, and monetary systems. Chapters marked with * already drafted.

- [@qx(), msg#589179–180, 2026-01-28]: Open call for contributors to @ergo_platform Twitter with guidelines: Ergo-centric tweets, no self-serving promotion, organizational voice. Rules to prevent tribalism and pump-and-dump behavior.

- [@Armeanio, msg#589264, 2026-01-29]: First external PR from Rosen Bridge Expansion Kit merged, signaling ecosystem maturity.

- [@kushti, msg#589290, 2026-01-29]: Catalyst proposals for Rosen Bridge integration with Coinbase (BASE) and Kraken (INK) now open for community support and voting.

- [@kushti, msg#589588, 2026-02-01]: Matrix (subblocks) devnet relaunched for testing with two peers; active speed improvement experimentation.

- [@Richi, msg#588963, 2026-01-26]: DexyGold commercial ticker symbol confirmed as GOLDmg.

## Technical Q&A Worth Preserving

- **Q** (@wolfgrimm, msg#589399): AMD MI60 GPUs only achieving ~14 MH/s on teamredminer for Autolykos; seeking performance optimization.
  **A** (@Grayman, msg#589400–407): MI60 cards (1TB/s memory bandwidth) should perform equivalently to Radeon VII (~180 MH/s). Suggested joining Sigmanauts mining and Lithos Protocol channels for deeper optimization. User later achieved ~353 MH/s with SRB miner.

- **Q** (@Jackie Moon, msg#589031): Where to access Ergo richlist?
  **A** (@Aco Šmrkas, msg#589033): https://ergexplorer.com/rich-list

- **Q** (@Unknown, msg#589295): What is Ergo's trading channel on Telegram?
  **A** (@kushti, msg#589296): https://t.me/ERGtrading

- **Q** (@Bart Bartimeus, msg#589445): Is there a way to get yield on ERG for accumulation?
  **A** (@HQΣr, msg#589446): No direct ERG yield; yield farms exist on MewDex but mostly for off-native assets. Alternatives: check DuckPools, bonds on SigmaFi, liquidity provision on Spectrum DEX. (@kushti, msg#589448): All yield carries risk; this is by design.

- **Q** (@n1ur0, msg#589469): Should the Ergo Book include a practical dev section with setup, on-chain, off-chain examples?
  **A** (@cannon_q, msg#589472–473): Docs exist at docs.ergoplatform.com but lack seamless connection. Suggestion: separate repo aggregating dev info with step-by-step tutorials, multi-stage SC examples, scanner integration, and real dApp case studies.

- **Q** (@HQΣr, msg#589414): Can USE replace SigmaUSD on MewStore?
  **A** (@HQΣr, msg#589417–418): USE is supported; merchant must configure payments. (@Aco Šmrkas, msg#589419): Can instant asset swap enable any token? (@HQΣr, msg#589420): Requires proxy or off-chain bot but theoretically yes.

- **Q** (@qx(), msg#589377): Where is the site to register a node?
  **A** (@qx(), msg#589390): Will host on IPFS soon for easier discovery.

## Links Shared

- [https://ergo-transcripts.vercel.app/]: Ergo Knowledge Base—searchable transcripts of 76+ community calls, AMAs, technical discussions with summaries, speakers, and topics.
- [https://ergexplorer.com/rich-list]: Ergo blockchain richlist.
- [https://t.me/ERGtrading]: Ergo trading discussion channel on Telegram.
- [https://www.duckpools.io]: DuckPools—yield farming/mining pool platform.
- [https://sigmafi.app]: SigmaFi—P2P bond protocol.
- [https://ergodex.io]: Spectrum DEX (formerly ErgoDex)—liquidity provision.
- [https://docs.ergoplatform.com/building-on-ergo-developers/]: Ergo developer documentation.
- [https://catalystexplorer.com/en/proposals/rosen-bridge-base-integration-cnts-in-coinbase-f15]: Rosen Bridge BASE integration proposal.
- [https://catalystexplorer.com/en/proposals/rosen-bridge-ink-integration-cnts-in-kraken-f15]: Rosen Bridge INK (Kraken) integration proposal.
- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-incentives-for-rosen-contribution-standards-accdc43dc183]: Medium article on Rosen Treasury multi-address reward distribution.
- [https://graphql-p2p.ergoplatform.com/]: P2P GraphQL endpoint (fallback from main GQL).
- [https://voltpay.store]: VoltPay merchant payment processing (supports ERG/stablecoins).
- [https://github.com/cannonQ/ergo-transcripts]: GitHub repo for Ergo Transcripts project.
- [https://provably-fair-games.vercel.app/]: Provably fair gaming demo with server-side secret protection (cannon_q project).
- [YouTube links shared by Grayman, msg#589642–656]: Contextual monetary/economic education videos (13 links spanning topics from geopolitics to monetary history).

## Unresolved Questions

- **Hackathon Viability**: kushti flagged 100% AI-generated submissions, questioning whether traditional hackathons remain meaningful in LLM era. Proposed mini-hackathon with prediction markets as alternative. No resolution on format changes yet.

- **Dev Documentation Structure**: Community identified fragmentation of developer resources across multiple repos and docs. n1ur0 proposed integrated tutorials; cannon_q suggested separate repo but no owner/timeline assigned.

- **Ergo Book Publishing Format**: kushti targeting mdbook for online hosting; Panda (Discord) suggested Stripe Press for physical distribution. No decision made on print vs. digital-only strategy.

- **Mining Hashrate Concentration**: 2miners at 56%, Herominers at 23% flagged as risk. Calls for decentralization made but no concrete diversification campaign launched. Grayman noted historical resilience despite concentration but acknowledged 51% vulnerability.

- **Speed Improvements Path**: kushti mentioned drafts for sub-blocks, layer 2, sidechains, but noted "choosing a path" remains open. No timeline for decision or implementation roadmap confirmed.

- **Ergo Platform Twitter Contributor Onboarding**: qx() solicited volunteers but as of end of week only kushti and cannon_q confirmed. Joe Armeanio explicitly excluded. Status of additional delegate invites unclear.

- **Native Ergo Oracles Build Timeline**: Dan (Palmyra) noted intent to invest capital from token sale toward building native Ergo oracles but no start date or milestone targets provided.

---

**Summary**: Week 2026-W05 was moderately active with focus on documentation (Ergo Book, Knowledge Base), mining decentralization concerns, infrastructure scaling discussions (Rosen expansion, speed improvements), and ecosystem partnership announcements (Chainlink, Catalyst proposals). Most technical developments remain in early stages; governance and contributor recruitment for key projects ongoing.