---
title: "Ergo General Chat — 2024-W18"
date_start: "2024-04-29"
date_end: "2024-05-05"
type: telegram_weekly
channel: general
week: "2024-W18"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2024-W18 (2024-04-29 to 2024-05-05)

## Key Topics Discussed

- **MEXC Exchange Listing**: Ergo ($ERG) was successfully listed on MEXC on April 29, 2024 at 10:30 UTC. The Sigmanauts organized an Ergo Raffle that raised over 28,000 $ERG, and the Ergo Foundation provided market-making funds to secure the listing (msg#490105). MEXC ranks 11th on CoinMarketCap and holds over $4 billion in assets.

- **BlitzTCG Card Game**: Community discussing pack openings, card rarity (including Margo cards with <1.5% mint rate), and mechanics. Packs cost ~$5, with 152 total cards collectible. Game playability timeline remains unconfirmed (msg#490286, msg#490300–#490301).

- **Demurrage as Options Contracts**: @dayumbbbb reframed demurrage not as a fee but as an options contract executed by miners if UTXOs remain inactive for 4+ years (msg#490540–#490542). Discussion expanded into storage rent mechanics, creation height adjustments, and potential use cases for short-lived oracles (msg#490579–#490602).

- **Sigma 6.0 and Sub-blocks**: kushti confirmed focus is fully on Sigma 6.0 activation (targeting Nov 2024 per Lithos team request) and resolution of long-standing issues per EIP-50. Sub-blocks work deferred to post-Sigma 6.0 implementation phase; contributors needed (msg#491058–#491059).

- **Autolykos2 Adoption by BlockX**: Discussion of why BlockX chose Autolykos2 for their new blockchain. kushti clarified Autolykos2 is ASIC-resistant as a side effect, not explicit design goal; ASICs can be designed for any algo but with less advantage (msg#490532, msg#490548–#490549).

- **Rosen Bridge Bitcoin Runes Support**: vorujack's update showed work on Bitcoin Runes compatibility in Rosen Bridge design phase, with potential to bring Runes tokens onto Ergo (msg#490509–#490510).

- **Storage Rent & Deflation Mechanics**: Şerafettin Bayrakdar raised concerns about lost coins causing supply deflation over time (similar to Bitcoin). Glasgow explained Ergo's 0.14 ERG demurrage every 4 years on unmoved boxes; heritage tools documented (msg#490337–#490343).

- **Crooks Finance Comet Staking**: HQΣr announced 100k HODLCOMET10 emission completed; stakers should redeem stakes (msg#490901).

- **GreasyCEX Liquidity Surge**: qx() noted GreasyCEX "woke up" with significant liquidity available (msg#490970).

- **Bober 1-Month Anniversary Puzzle Event**: 48-hour event with 12-word seed phrase challenge. Reward escalated from 10 to 52 ERG worth of Bober tokens after ~12 hours unsolved. Clue provided: Linktree-based website pathway (msg#490527, msg#490573, msg#490609, msg#491050).

- **Ledger Integration Status**: WitchyCake asked when Ledger exits experimental mode. No direct answer given; status remains "soon" (msg#490645–#490647).

## Important Decisions or Announcements

- [@Pulsarz, @Ergo NEWS $ERG, msg#490105, 2024-04-29]: **MEXC listing confirmed** — ERG/USDT trading pair live on MEXC with fiat support for 15 currencies and 10M+ users across 170+ countries.

- [@kushti khushi, msg#491059, 2024-05-05]: **Sigma 6.0 prioritized** — Full developer focus on Sigma 6.0 activation targeting November 2024. Sub-blocks deferred post-implementation; EIP-50 contributors sought.

- [@HQΣr, msg#490901, 2024-05-04]: **HODLCOMET10 emission concluded** — Comet stakers in Crooks Finance should redeem their stakes; 100k token emission cap reached.

- [@qx(), msg#491139, 2024-05-05]: **Ergo Platform dev stream** — Live development update posted; Joe (Armeanio) and qx() streamed with tequila for Cinco de Mayo.

## Technical Q&A Worth Preserving

- **Q** (@Şerafettin Bayrakdar, msg#490337): Once Ergo supply is fully mined, will mining cease? What happens to forgotten/lost coins and inheritance?
  **A** (@Glasgow, msg#490338–#490343): Ergo has storage rent (0.14 ERG every 4 years on unmoved boxes), recoverable by miners. Heritage tools documented; Bitcoin coins are simply lost. See docs on storage rent and ErgöHack inheritance track.

- **Q** (@TMR.ΣRG, msg#490277): Does burning a token reduce supply in the explorer or just sit in an unused address?
  **A** (@TMR.ΣRG, msg#490285): Supply changes reflected in explorer when querying token ID (via burning mechanism).

- **Q** (@TMR.ΣRG, msg#490286): How many Blitz packs needed for a playable deck?
  **A** (@TMR.ΣRG, msg#490286): ~5–10 packs should get essentials, depending on common vs. legendary preference. Free starter cards available but may disadvantage gameplay.

- **Q** (@qx(), msg#490170): How many unique cards exist in Blitz packs?
  **A** (@qx(), msg#490168–#490172): 25,000 pack limit, each with 5-card mint capability. Technically 125,000 card slots total for every card; many unopened packs remain, so unburned cards needed for future opens (msg#490171).

- **Q** (@Unknown, msg#490181): What is the rarity of Margo cards?
  **A** (@Unknown, msg#490187, @qx(), msg#490188): 183 Margos among 91 holders (~1.14% of ~15,975 minted cards). Less than 1% possible, max ~800 estimated; unlikely but technically possible for all Margos.

- **Q** (@Alien, msg#490151): How do I view my opened packs?
  **A** (@Unknown, msg#490157): Visit Blitz website, sign in, click "Open Packs" → "View Cards"; also shown in Collectibles. Use Ergexplorer (not ErgoExplorer—"big difference," msg#490153).

- **Q** (@Şerafettin Bayrakdar, msg#490361): Can stolen wallet coins be recovered via IP tracking?
  **A** (@Luivatra, msg#490362): IP is not stored on-chain (thankfully). (@cafebedouin, msg#490366): Ergo is immutable; key custody is owner's responsibility, not a centralized bank.

- **Q** (@dayumbbbb, msg#490539–#490542): What is demurrage really?
  **A** (@dayumbbbb, msg#490540–#490543): Demurrage is an **options contract**, not a fee or tax. Miners *can* execute if UTXO unmoved >4 years; not automatic. Every UTXO is inherently an options contract with miner strike eligibility after 4-year inactivity.

- **Q** (@TMR.ΣRG, msg#491164): Does running a public node disclose physical location?
  **A** (Unresolved): Asked but no answer given; VPN recommendation implied by context.

- **Q** (@kushti khushi, msg#491058): Is sub-blocks still being worked on?
  **A** (@kushti khushi, msg#491059): Deferred until after Sigma 6.0 implementation (targeting Nov 2024). Contributors sought for Sigma 6.0 per EIP-50 specs.

- **Q** (@dayumbbbb, msg#490579): Can demurrage be triggered early by adjusting creation time?
  **A** (@kushti khushi, msg#490580): Yes, creation time can be shifted into the past (not future). (@qx(), msg#490581): Creation height can be set manually.

## Links Shared

- [https://www.mexc.com/support/articles/17827791515518]: MEXC official listing details for Ergo ($ERG).

- [https://twitter.com/RosenBridge_erg/status/1776395826795041199]: Rosen Bridge announcement (msg#490108).

- [https://vxtwitter.com/BlockX_Official/...]: BlockX using Autolykos2 announcement (msg#490513).

- [https://vxtwitter.com/chepurnoy/status/1785790391347822672]: kushti's Twitter share on technical matter (msg#490571).

- [https://github.com/rosen-bridge/rosen-chains]: Rosen Bridge implementation repository (implied from msg#490509).

- [https://docs.ergoplatform.com/mining/revenue/]: Storage rent documentation (msg#490339).

- [https://docs.ergoplatform.com/dev/protocol/storage-rent/]: Detailed storage rent specification (msg#490342).

- [https://docs.ergoplatform.com/events/ergohack/#inergitance]: ErgoHack inheritance track (msg#490343).

- [https://ergoplatform.org/en/blog/Ergo-and-the-Autolykos-Consensus-Mechanism-Part-I/]: Autolykos design Part I (msg#490535).

- [https://ergoplatform.org/en/blog/Ergo-and-The-Autolykos-Consensus-Mechanism-Part-II/]: Autolykos design Part II (msg#490536).

- [https://storage.googleapis.com/ergo-cms-media/docs/whitepaper.pdf]: Ergo whitepaper (msg#490549).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md]: ErgoScript language specification (msg#490882).

- [https://docs.ergoplatform.com/dev/scs/ergotree/ergotree-lang/]: ErgoTree language documentation (msg#490883).

- [https://docs.ergoplatform.com/dev/scs/ergoscript-primer/]: ErgoScript primer (msg#490883).

- [https://github.com/ergoplatform/awesome-ergo/tree/master/graphics/ErgoDex]: ErgoDex brand assets (msg#490493).

- [https://app.ergodex.io/og-image.png]: ErgoDex OG image (msg#490496).

- [https://app.ergodex.io/android-chrome-512x512.png]: ErgoDex icon 512×512 (msg#490498).

- [https://dex.crooks-fi.com/ergo/...]: Crooks Finance GCX/GIF swap and yield farm (msg#490922–#490923).

- [https://www.youtube.com/@ErgoPlatform/streams]: Ergo Platform YouTube streams (msg#491172).

- [https://www.youtube.com/watch?v=Cej4jVj1ZTM]: Ergo dev update live stream (May 5, 2024, msg#491174).

- [https://twitter.com/maritsaart/status/1786300302271950879]: Maritsa Art NFT collections announcement (msg#491018).

- [https://github.com/sigmagallery/maritsaart/]: Maritsa Art avatar/banner repository (msg#491018).

- [https://github.com/sigmagallery/powjpgs/]: PoW JPGs avatar/banner repository (msg#491018).

- [https://sigmaspace.io]: SigmaSpace explorer (msg#491023).

- [https://decrypt.co/53718/kim-dotcom-officially-joins-the-bitcoin-cash-movement]: Kim Dotcom / Bitcoin Cash context (msg#491087).

## Unresolved Questions

- **Ledger Experimental Mode Exit Timeline**: When will Ledger integration leave experimental status? Status remains unconfirmed (msg#490645–#490647).

- **Sub-blocks Development Roadmap**: Exact timeline and resource allocation for sub-blocks post-Sigma 6.0 unclear; contributors actively sought (msg#491058–#491059).

- **Charles Hoskinson / Cardano Intentions**: Community debate unresolved about whether CH's Ergo promotion is genuine or leveraging Ergo tech for Cardano benefit (msg#491084–#491103). Antonis countered with evidence of CH's repeated praise for Ergo tech (msg#491176).

- **Decentralized Market Making Feasibility**: Discussion of decentralized AMM-based market making or mining-style liquidity provision; concept floated but no concrete proposal emerged (msg#490754–#490768).

- **Blitz TCG Game Playability Date**: No ETA confirmed for game launch or competitive play (msg#490283–#490287).

- **CEX Expansion Pipeline**: Which exchanges beyond MEXC are next targets? Speculation on Uniswap, OKX, Upbit; no official roadmap shared (msg#490106–#490635).

- **MEXC Futures Trading**: Whether MEXC will add ERG futures trading requested but no response from management (msg#490724–#490752).

- **Runes Bridge Compatibility Details**: BlockX Autolykos2 adoption and Bitcoin Runes support in Rosen Bridge—design phase ongoing; full specs/timeline TBD (msg#490509–#490514).

---

## Notes

- **Low engagement on core protocol discussions**: Most substantive technical exchange centered on demurrage mechanics and storage rent (msg#490539–#490602). Sigma 6.0 roadmap confirmed but contributors lacking.
- **Community morale themes**: Persistent discussion of undervaluation vs. marketing (msg#490351–#490357, msg#491104–#491127). HQΣr concluded people care about USD value, not tech; Crooks Finance and community tokens driving adoption (msg#491124–#491127).
- **Ecosystem maturity**: BlitzTCG, Bober, GIF, Crooks Finance, and GreasyCEX activity signals growing dApp and token ecosystem; DeFi/DAO tooling (Paideia, CruxFinance, Satergo) mentioned as underutilized (msg#491011–#491023).