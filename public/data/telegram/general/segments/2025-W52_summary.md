---
title: "Ergo General Chat — 2025-W52"
date_start: "2025-12-22"
date_end: "2025-12-28"
type: telegram_weekly
channel: general
week: "2025-W52"
source: telegram
message_count: 347
categories: [technical, defi, bridges, mining, community, governance, marketing, ecosystem]
key_terms: [quantum computing, ECC security, quantum-resistant, cryptography, USE, stablecoin, reserve ratio, peg stability, mint, arb, RosenBridge, multi-chain, Firo, HNS, CKB, KDA, bridge access, block reward, emission reduction, miners]
---
# Ergo General Chat — 2025-W52 Summary

## Key Topics Discussed

- **Quantum Computing & Cryptography**: Discussion of when quantum computing becomes a practical threat vs. theoretical concern. Consensus that we are "still decades away" from 128-bit ECC being compromised; focus should remain on real-world usefulness over speculative threats. [@kushti_ru, msg#585931-585932]

- **USE Stablecoin Protocol Performance**: USE algorithmic stablecoin demonstrating stronger peg stability than SigmaUSD despite having 4x fewer reserves. Reserve ratio tracking shows encouraging growth trajectory, with protocol remaining solvent and scaling potential. [@kushti_ru, msg#586539-586540]

- **Storage Rent as Spam Prevention**: Bitcoin's UTXO bloat from Ordinals/Stamps sparking discussions of permanent dust UTXOs. Ergo's storage rent mechanism presented as effective preventative. [@kushti_ru, msg#585993-585994]

- **Block Speed & Fast Blocks Development**: Whitepaper for faster blocks nearing completion; devnet testing to resume with peer invitations after New Year. Concerns raised about timestamp-based contracts and difficulty adjustment under increased block speed. [@kushti_ru, msg#586114, msg#586399]

- **Sub-blocks (Matrix Protocol)**: Sub-blocks being tested on devnet; construction details to be published on forum soon. Planned as throughput improvement alongside sidechaining considerations. [@kushti_ru, msg#586114]

- **Rosen Bridge Ecosystem Expansion**: Three new chains (Firo, HNS, CKB) requesting Rosen integration; Kadena interested for 2026. Emphasis on p2p market access without external censorship risk. [@kushti_ru, msg#586127; @Armeanio, msg#586130-586132]

- **Lithos Protocol Testnet**: Lithos coming alive on testnet; v2.2.0-test release available. Pre-built binaries and setup assistance available from community. [@kushti_ru, msg#586090; @ArØhβΣ @Arohbe 🍪, msg#586529]

- **Demurrage & Monetary Emission**: Block reward reduction in 7 days will bring Ergo's inflation below ADA and below USD inflation. Demurrage mechanism described as core innovation that will "truly shine" in low-inflation conditions. [@Richi [MANA], msg#586381, msg#586388]

- **Community Governance Structure**: Proposed "partial leadership" model with distributed leaders across five directions: core dev, tooling, research, community growth, funding. Current state described as "funding & research in chaos." [@kushti_ru, msg#586354, msg#586360]

- **Sigmanauts Community Standards**: Sigmanauts meeting (28 Dec, 4pm UTC, 11 attendees across 4-5 continents) discussed chat moderation, positive community impact, and enforcement of voted-upon guidelines. Finance, Paideia infrastructure, and mining pool monitoring reviewed. [@qx(), msg#586510; @cannon_q, msg#586535]

- **On-Chain Chat vs. Telegram Trade-offs**: Debate over building decentralized on-chain messenger (Pulse) vs. Twitter-style p2p interactions. Key friction: TG groups enforce participation through social pressure; on-chain filters can mute but not prevent speech. [@kushti_ru, msg#586206-586221]

---

## Important Decisions or Announcements

- [@kushti_ru, msg#586114, 2025-12-25]: **Fast blocks whitepaper nearing completion** — will be sent to peers this week for feedback; public discussions to begin Jan 2-3. Devnet running, more peers to be invited.

- [@kusyti_ru, msg#586508-586509, 2025-12-28]: **Administrative changes** — Made @Sigmanaut admin, granted additional rights to Richi. Instructed to "clean trash shows up ASAP regardless participants."

- [@Richi [MANA], msg#586966, 2025-12-23]: **USE bridge fees reduced** — Minimum transfer fee on Rosen for USE dropped to $5.00; transfers above 5,000 USE charged 0.1%.

- [@Aco Šmrkas, msg#586120, 2025-12-25]: **ErgoSanta airdrop issued** — NFT airdrop released (tx: e6beaacdb84d5520a03ae2c14ced3e06cb7b2871631aaabb70aab2b805bc9913).

- [@canon_q, msg#586145, 2025-12-25]: **Ergo Explorer funding crisis** — Service has 2 months of runway remaining without support; contribution link provided (https://fund.mewfinance.com/contribute).

- [@Armeanio, msg#586400, 2025-12-27]: **2026 roadmap announced** — Goals include: Lithos mainnet, Rosen Bridge incentive exploration (random coin/hashrate coin), Base + Monero integration, Machina Finance launch, potential sigma chain.

- [@kushti_ru, msg#586500-586502, 2025-12-28]: **Sigmanauts meeting scheduled** — 4pm UTC on Zoom (Cornell link provided); likely shifting future meetings to 12:00 UTC to accommodate Asia timezone.

---

## Technical Q&A Worth Preserving

- **Q** (@Anonymous, msg#585928): At what point would Ergo consider quantum computing a practical threat rather than theoretical? What measurable indicators would trigger protocol changes?
  
  **A** (@kushti_ru, msg#585931): "I am not a member of the Ergo team... I dunno any developer in cryptocurrency space who is proficient enough in quantum computing to make any predictions. Specialists are providing very different estimations but most likely we are still decades away talking about 128 bits secure ECC."
  
  **A** (@Armeanio, msg#585930): Conservative approach recommended — wait for standardizations, widespread adoption, and ongoing progress. "No urgent need to pick a horse in the race for now, give it a few years."

- **Q** (@huskar, msg#586001): How do I mint USE rather than swap it on DEX?
  
  **A** (@Richi [MANA], msg#586002): "Bank.mewfinance.com or Crystalpool.cc (ticker DexyUSD)."

- **Q** (@huskar, msg#586004): Is there a limit to how many USE can be minted within a time period? ("freemint available says 900+")
  
  **A** (@Richi [MANA], msg#586006): "Yes. 1% of bank reserves in 12 hours. So that is 2000 ERG worth."

- **Q** (@huskar, msg#586005): Is Dexy USD the same as USE?
  
  **A** (@Richi [MANA], msg#586007): "Yes. Just a bit awkward dev there decided to name USE on his own, but that is the same token."

- **Q** (@Manolo, msg#586526): Does anyone have a pre-built lithos-client.zip for Testnet (v2.2.0)? GitHub releases only have source; sbt dist build fails on leveldbjni-all 1.18.3.
  
  **A** (@ArØhβΣ @Arohbe 🍪, msg#586529): Pre-built release available at https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v2.2.0-test; contact via Lithos Telegram for direct binary share.

- **Q** (@LIFΣ OF IF₳, msg#586550): Can you explain how USE keeps its peg better than SigmaUSD, even though SigmaUSD has "never lost its peg"?
  
  **A** (@Ant, msg#586551-552): "Algorithmic stable coins when faced with extreme volatility have traditionally taken a while to absorb market pressure. USE design mechanics aid in absorbing said volatility quickly; potentially making algorithmic stable coins scalable and decentralized."

---

## Links Shared

- [https://ergotree.degens.world/](https://ergotree.degens.world/) — ErgoTree viewer tool [@cannon_q, msg#585992]

- [https://criaregiscrypto.medium.com/ergos-vision-for-sovereign-money-26f520426c05](https://curiaregiscrypto.medium.com/ergos-vision-for-sovereign-money-26f520426c05) — Medium article on Ergo's sovereign money vision [@kushti_ru, msg#586302]

- [https://curiaregiscrypto.medium.com/the-coming-bifurcation-of-crypto-incentives-first-control-later-4b343da42fc0](https://curiaregiscrypto.medium.com/the-coming-bifurcation-of-crypto-incentives-first-control-later-4b343da42fc0) — Armeanio article on crypto incentive bifurcation [@Armeanio, msg#586328]

- [https://cruxfinance.io/tokens/a55b8735ed1a99e46c2c89f8994aacdf4b1109bdcf682f1e5b34479c6e392669](https://cruxfinance.io/tokens/a55b8735ed1a99e46c2c89f8994aacdf4b1109bdcf682f1e5b34479c6e392669) — CruxFinance token swap page for USE [@Richi [MANA], msg#585999]

- [https://fund.mewfinance.com/contribute](https://fund.mewfinance.com/contribute) — Ergo Explorer funding contribution portal [@cannon_q, msg#586145]

- [https://t.me/LITHOS_Protocol](https://t.me/LITHOS_Protocol) — Lithos Protocol Telegram (for build support) [@Affable Villain, msg#586534]

- [https://cornell.zoom.us/j/96191098460?pwd=RkJFY1kybWQ5WS9pRHFCMnRmdUFOUT09](https://cornell.zoom.us/j/96191098460?pwd=RkJFY1kybWQ5WS9pRHFCMnRmdUFOUT09) — Sigmanauts meeting Zoom (28 Dec, 4pm UTC) [@qx(), msg#586510]

- [https://coinmarketleague.com/coin/ergo](https://coinmarketleague.com/coin/ergo) — CoinMarket voting page for Ergo [@Yulius Kristianto, msg#586113, msg#586507]

- [https://t.me/ERGtrading](https://t.me/ERGtrading) — Ergo Trading group (for price/trading discussions) [@kushti_ru, msg#586088]

- [https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v2.2.0-test](https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v2.2.0-test) — Lithos Client v2.2.0-test release [@ArØhβΣ @Arohbe 🍪, msg#586529]

- [https://mindhealer.cloud/](https://mindhealer.cloud/) — Mental health service on Ergo [@T Mas, msg#586421]

---

## Unresolved Questions

- **Fast blocks impact on contract execution** — Raised whether timestamp-based or block-height-based contracts would be affected by increased block speed; answer partially given but implementation details TBD. [@kushti_ru, msg#586399]

- **Sub-blocks public timeline** — Construction details promised to be published on forum "soon," but exact date not specified. [@kushti_ru, msg#586114]

- **On-chain messaging architecture** — Debate unresolved: whether Pulse (Telegram-like on-chain chat) or Twitter-style p2p interactions (Nostr-like) better serves p2p ethos. Tradeoffs (censorship vs. moderation) acknowledged but no decision finalized. [@kushti_ru, msg#586219-586221]

- **USE reserve growth scaling** — Protocol showing encouraging reserve ratio growth, but method to "speed up reserve growth by adding more functions" mentioned as TBD. [@kushti_ru, msg#586540]

- **Funding & research direction chaos** — Identified as unresolved structural issue in "partial leadership" model. No concrete remediation plan announced. [@kushti_ru, msg#586360]

- **Block reward reduction market impact** — Richi bullish on 7-day emission cut effect; broader community skeptical adoption will follow. No data-driven forecast provided. [@Richi [MANA], msg#586381; @huskar, msg#586350]

- **CruxFinance acquisition by HQΣr** — Announced as "time to revive crooksfinance" with "Use full stuff," but no roadmap or launch timeline given. [@HQΣr | Wont Dm 🐾 ⚡, msg#586016]

---

## Community & Moderation Notes

**Significant interpersonal conflict** occurred 27 Dec between @kushti_ru and @Glasgow (Discord) regarding group moderation, moderation decisions, and allegations of harassment. Kushti instructed to "clean trash shows up ASAP" and elevated @Sigmanaut to admin; @TMas (msg#586275, msg#586285) called for resolution outside public chat. [msgs#586245-586294]

**Sigmanauts governance meeting** (28 Dec) addressed chat moderation standards and enforcement of community-voted guidelines. Time shifted to 12:00 UTC (from 4pm UTC) to improve Asia timezone inclusion. Monitoring and mod recruitment flagged as ongoing needs. [@qx(), msg#586510; @cannon_q, msg#586535]