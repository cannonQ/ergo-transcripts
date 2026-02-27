# Ergo General Chat Summary — 2026-W03
**Period:** 2026-01-12 to 2026-01-18  
**Message Count:** 251 | **Active Participants:** 27

---

## Key Topics Discussed

- **Rosen Bridge Catalyst Proposals**: Both Rosen Bridge proposals (Base and INK integrations with CNTs in Coinbase and Kraken) passed the review process and are advancing to Catalyst voting. Community outreach to dReps and SPOs is underway [@Armeanio, msg#588128, 588166, 588175, 588176].

- **Lithos Protocol v3.0 Release**: Lithos 3.0 testnet version released on GitHub [@ArØhβΣ @Arohbe 🍪, msg#588268].

- **Keystone Hardware Wallet Integration Stalemate**: Nautilus Keystone integration bounty completed by @Pgr456, but blocked due to security concerns—Keystone's dependencies would add significant attack surface to Nautilus. Implementation awaiting protocol resolution [@Pgr456, msg#588305; @kushti, msg#588306].

- **Ergo Mobile Wallet Features and Node Syncing**: Discussion of wallet sync issues tied to node selection and explorer API configuration. Nautilus wallet and Ergo mobile wallet use different address derivation strategies (address reuse avoidance) [@kushti, msg#588203-588205; @Unknown, msg#588196-588223].

- **ErgoExplorer Token Market Cap Calculation**: Token market cap in ErgoExplorer incorrectly using circulating/liquid supply rather than accounting for locked or total supply. Flagged for investigation with Aco [@DiscordBridge/Pluno AI, msg#588455-588459].

- **VoltPay v2 Aggregator Development**: HQ3rr expanding VoltPay with multi-chain swap aggregator (Trocador + Exolix) for better pricing. Now supports buying Ergo natives (RSN, MEW, CYPX, USE) directly from any blockchain asset (ADA, BTC, XMR, ALPH, KDA, CKB, BNB) [@HQΣr, msg#588469].

- **Game of Prompts Bot Competition Platform**: Josemi implementing bot competition platform on Ergo applicable to trading bots and other fields. TG group launched for participation [@Josemi/DiscordBridge, msg#588466, 588470, 588561].

- **Speed Improvements Discussion (Block Time / Microblocks)**: kushti flagged upcoming community roundtable on scaling—potential consideration of sub-blocks, sidechains, or layer 2 solutions. Current on-chain contracts (GARD protocols, Rosen, Oracle Pools, Spectrum, Trade House, lending contracts) form concrete baseline for optimization [@kushti, msg#588423, 588435, 588436].

- **Basis & ChainCash Twitter Spaces**: Next Thursday (2026-01-23) scheduled for community discussion on Basis and ChainCash [@kushti, msg#588423].

- **AIAssisted Coding Community Call**: Ergo Community Call on AI-assisted coding held 2026-01-15, main website briefly down during troubleshooting [@DiscordBridge/IFTTT, msg#588320].

- **USE Stablecoin DeFiLlama Listing**: USE recategorized from crypto-backed to algorithmic on DeFiLlama. Already listed on MiniSwap, Taptools, and positioned for Midnight multichain deployment via Rosen Bridge [@Yulius Kristianto, msg#588156-588158; @LIFΣ OF IF₳, msg#588392].

- **NIPoPoWs and Radio-Based Transactions**: T Mas raised importance of NIPoPoWs for LoRaWAN networking and radio-based TXes in event of internet outage (Iran scenario). kushti confirmed relevance—need guides on continuing economic activity using Ergo tech under partial/full internet outage [@T Mas, msg#588482; @kushti, msg#588489].

- **Protocol Simplicity and Complexity Management**: kushti cited Vitalik Buterin's Ethereum simplification call (2026-01-18), noting Ergo has focused on this since 2017—backward/forward compatibility constraints and counterintuitive design tradeoffs discussed [@kushti, msg#588541-588556].

---

## Important Decisions or Announcements

- [@Armeanio, msg#588128, 2026-01-12]: **Catalyst Voting Opens Soon** — Both Rosen proposals passed review; voting imminent.

- [@ArØhβΣ @Arohbe 🍪, msg#588268, 2026-01-14]: **Lithos Protocol v3.0-test Released** — https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v3.0.0-test

- [@kushti, msg#588273, 2026-01-15]: **Will pin Lithos 3.0 announcement after chat**

- [@DiscordBridge/Quokka, msg#588181-588183, 2026-01-13]: **SkyHarbor NFT Marketplace Winding Down** — Quokka shifting focus to DuckPools as more impactful; open-source codebase available for future marketplace/escrow projects.

- [@Yulius Kristianto, msg#588158, 2026-01-13]: **USE Listed on DeFiLlama** — https://defillama.com/stablecoin/use (recategorized to algorithmic from crypto-backed).

- [@DiscordBridge/DiscordBridge, msg#588450, 2026-01-16]: **Nervos Vote for Rosen Bridge Integration Passes** — https://ift.tt/hTsEUj5

- [@kushti, msg#588423, 2026-01-16]: **Next Thursday: Twitter Spaces on Basis & ChainCash Scheduled**

- [@HQΣr, msg#588469, 2026-01-17]: **VoltPay v2 with Exolix Integration Now Live** — Better rates; supports XMR→USE swaps in ~5 minutes.

- [@Josemi/DiscordBridge, msg#588470, 2026-01-17]: **Game of Prompts TG Group Launched** — https://t.me/+xfGIN6e8k5U1YWQ0

---

## Technical Q&A Worth Preserving

- **Q** (@DiscordBridge/peterpan0708): Node won't sync.  
  **A** (@kushti, msg#588162): Disable mining and enable after sync.

- **Q** (@Unknown, msg#588196): Ergo Wallet showing phantom transactions and zero balance; Nautilus shows correct state.  
  **A** (@kushti, msg#588203-205; @Aco, msg#588212; @DiscordBridge/Michael, msg#588222-223):
  - Check node/explorer connection in settings; try `http://51.81.84.167:9053/` as fallback.
  - Ergo mobile wallet derives new addresses by default (address reuse avoidance); add more addresses in wallet settings to see balance across derived path.
  - In Nautilus, disable "Avoid address reuse" in settings → wallet if you want static address.

- **Q** (@DiscordBridge/ErgoMinnow, msg#588189): Can ErgoExplorer show token market cap when searching?  
  **A** (@Aco, msg#588191-192): Best current option is `emission * price`. Can integrate CruxFinance circulating supply data if available.

- **Q** (@Ollie, msg#588298): Status of Keystone hardware wallet integration?  
  **A** (@Pgr456, msg#588305; @HQΣr, msg#588304): Nautilus integration complete, but stalled—Keystone's dependencies add significant security surface. Awaiting resolution on integration requirements. Same blocker in FleetSDK [@HQΣr, msg#588304].

- **Q** (@DiscordBridge/ErgoMinnow, msg#588455-457): Token market cap for Comet appears incorrect (shows 12k but uses liquid supply, not total).  
  **A** (@Pluno AI via DiscordBridge, msg#588458): Confirmed—ErgoExplorer may be using liquid supply only. Flagged to @Aco for review in #ergexplorer channel.

- **Q** (@Manolo, msg#588516): Has Machina Finance launched? What's needed to trade there?  
  **A** (No explicit answer in segment, but referenced as available with other on-chain contracts).

---

## Links Shared

- [https://catalystexplorer.com/en/proposals/rosen-bridge-base-integration-cnts-in-coinbase-f15]: Rosen Bridge BASE integration proposal (Catalyst F15).
- [https://catalystexplorer.com/en/proposals/rosen-bridge-ink-integration-cnts-in-kraken-f15]: Rosen Bridge INK integration proposal (Catalyst F15).
- [https://defillama.com/stablecoin/use]: USE stablecoin listed on DeFiLlama (algorithmic category).
- [https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v3.0.0-test]: Lithos Protocol v3.0-test release.
- [https://skyharbor.io]: SkyHarbor NFT marketplace (now in maintenance; code open-sourced).
- [https://cyberverse-viewer.vercel.app/?=v2]: Cyberverse viewer app (referenced in community call discussion).
- [https://t.me/+xfGIN6e8k5U1YWQ0]: Game of Prompts Telegram group.
- [https://fitzdoud.substack.com/p/the-community-money-kit]: Fitz Doud article on community money kit.
- [https://x.com/Armeanio/status/2011710574166409383]: Armeanio Twitter update on Rosen Bridge (2026-01-16).
- [https://x.com/Armeanio/status/2012319357964312638]: Armeanio announcement on Rosen app colored chain icons (2026-01-16).
- [https://store.mewfinance.com]: MewFinance store (physical merchandise including Ergo mugs).

---

## Unresolved Questions

- **Keystone Integration Path**: How to resolve security concerns around Keystone dependencies in Nautilus without blocking hardware wallet support. Assignment: kushti to follow up with @anon_br [@kushti, msg#588306].

- **Token Market Cap Methodology**: Which supply metric (liquid, circulating, total, locked) should ErgoExplorer use for accurate token valuations? [@Aco, msg#588191-192; DiscordBridge/cannon_q, msg#588459].

- **Speed Improvements Roadmap**: Will community pursue sub-blocks, sidechains, layer 2, or on-chain optimizations? Requirements collection in progress; volunteers needed for testnet parameter tweaking [@kushti, msg#588435-436].

- **Basis & ChainCash Outreach**: Details of next Thursday's Twitter Spaces and follow-up Reddit AMA from GitCircles team timeline TBD [@kushti, msg#588423-424].

- **AIAssisted Coding Wallet Development**: Will @Arohbe and @qx() move forward with forked mobile wallet improvement project discussed during community call? [@qx(), msg#588361; @HQΣr, msg#588352-372].

---

**Archive Note:** This segment represents steady ecosystem development with emphasis on bridge integrations (Catalyst voting), wallet improvements (Keystone stalemate), stablecoin maturity (USE on DeFiLlama), and community tooling (VoltPay v2, Game of Prompts). Technical debt flagged (market cap calculation, node sync UX) but no blockers to core protocol operations.