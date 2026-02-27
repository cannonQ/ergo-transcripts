# Ergo General Chat — 2025-W41 Summary

## Key Topics Discussed

- **6.0 Soft Fork Activation**: 6.0 protocol was successfully activated on mainnet with 5.0 and 6.0 nodes in consensus. Mining network performing well. 6.0 will propagate 6.0-only transactions while 5.0 nodes can run indefinitely. [@kushti khushi, msg#577230, 2025-10-06]

- **Sub-blocks Implementation**: Community discussion ongoing about sub-blocks development. Current status depends on community consensus and code review rather than pre-agreement. Miners voting required on protocol updates (unlike some PoW chains with developer dictatorships). [@kushti khushi, msg#577236, msg#577238, 2025-10-06]

- **Rosen Bridge & Bitcoin Integration**: Discussion of Rosen Bridge as infrastructure for cross-chain asset bridging, including potential rune support on Bitcoin. Strategy for native ERG and project tokens as first external runes being explored. Token map expected to move on-chain, enabling asset addition without infrastructure updates. [@Armeanio, msg#577447-449, msg#577453, msg#577472-474, 2025-10-07]

- **Palmyra & Trade Finance Use Cases**: Palmyra project utilizing Chainlink oracles and proof of reserve for decentralized trade financing via on-chain warehouse receipts. IoT devices (cameras, weight sensors, motion sensors) paired with oracles for continuous reserve auditing. Oracle version v1 (EF-run) and v2 (running for Dexy Gold with GORT rewards). [@Armeanio, msg#577425-449, 2025-10-07]

- **Lithos Protocol Deep Dive**: Kirat Singh (CheeseEnthusiast) presented Lithos Protocol as blockchain-agnostic GPU mining solution at Ergo Meetup 2025. [@qx(), msg#577907, msg#577921, 2025-10-11]

- **Liquid Staking & DeFi Ecosystem**: Community member pitching LST protocol design incorporating three yield generators: perps DEX (similar to Strike on Cardano), yield collaterization (similar to Pendle), and lending protocols. Discussion of stablecoin protocol alternatives and emphasis on Rosen Bridge assets as collateral. [@DiscordBridge (yea.ok 🍉), msg#577721-730, msg#577806-811, 2025-10-10]

- **Stealth Addresses in Ergo Mixer**: Stealth addresses implemented in Ergo Mixer via recent PR. Enhanced privacy features now available. [@kushti khushi, msg#577419, 2025-10-07]

- **Trustless Bitcoin Client**: kushti proposed vibe-coding trustless Bitcoin client on Ergo leveraging 6.0 activation and existing trustless relay work. [@kushti khushi, msg#577321, 2025-10-07]

- **Pitch Deck Development**: Community effort to create simplified pitch deck for Ergo targeting non-technical audience. Focus on "money as public good" narrative and peer-to-peer accessibility. Feedback collected on design, messaging, and technical depth. [@Amh, msg#577208-210, msg#577371-396, 2025-10-06 to 2025-10-10]

- **Ergo X Raider Group**: Established Ergo X raiders group (https://t.me/ergraider) for coordinated social media awareness and FUD refutation across platforms. [@Amh, msg#577211, @kushti khushi, msg#577623, 2025-10-06 to 2025-10-09]

- **Ledger Integration Issues**: Nautilus wallet Ledger support broken due to Ledger firmware update and device renaming. Nautilus dev traveling; issue forwarded to team for fix. Users can use Banxa alternative via Voltpay.store for ADA-to-ERG swaps. [@DiscordBridge, msg#577816-822, @kushti khushi, msg#577880-881, 2025-10-10 to 2025-10-11]

- **P2P Asset Lending on Ergo**: HQ3rr highlighted peer-to-peer lending contracts already functioning (QUACKS-for-ERG loans with collateral). Proposed expansion to Oracle Pool tokens, LP tokens, Cyberverse NFTs, Rosen watcher tokens, and stablecoin yields. [@HQΣr | Wont Dm, msg#578004-005, 2025-10-12]

- **Banxa Integration Effectiveness**: Inquiry into Banxa onboarding volume and effectiveness. kushti clarified Banxa uses centralized exchanges under the hood with no clear on-chain footprint. Community noted Banxa provides card-based onramps but questions whether VoltPay alternative deserves equal resources. [@HQΣr | Wont Dm, msg#577423-548, @kushti khushi, msg#577538-547, 2025-10-08]

## Important Decisions or Announcements

- [@kushti khushi, msg#577230, 2025-10-06]: 6.0 soft fork activated on mainnet with full network consensus between 5.0 and 6.0 nodes.

- [@kushti khushi, msg#577307, 2025-10-06]: Call for Papers — 1st Stability Workshop (Hybrid, LNM IIT Jaipur, India; Dec 15, 2025; deadline Oct 19). Seeking zero-knowledge and blockchain stability papers.

- [@qx(), msg#577309, 2025-10-06]: Ergo Meetup 2025 announced for Colorado Springs, Oct 11 (setup Friday, main event Saturday, optional Sunday activities). Speakers include Armeanio, mgPai/Luca, CheeseEnthusiast (Lithos), CannonQ, Marc the Shark (mining), anon_br (Machina Finance). Livestreamed and recorded.

- [@Andy L, msg#577313, 2025-10-06]: Weekly Community Chat continues Thursday, Oct 9 @ 13:00 UTC on Zoom and YouTube live.

- [@kushti khushi, msg#577401, 2025-10-07]: Vibe-coded trustless hashrate oracle example published for review (PR #1085 on sigmastate-interpreter).

- [@kushti khushi, msg#577799, 2025-10-10]: Digital twin insurance example ErgoScript application completed and pending manual review/publication.

- [@HQΣr | Wont Dm, msg#578000, 2025-10-12]: FAKU bounty announced — $100 USD worth of FAKU to first person who delivers FAKU in person at meetup.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#577241): Can Ergo see sub-blocks implemented this year given years of discussion and zero results on chain activity?
  **A** (@kushti khushi, msg#577236-238): Sub-blocks implementation depends on community discussion and code review consensus, not pre-agreement. Miners must vote on protocol updates (unlike developer-dictatorships like ZEC/ETH). No activation timeline set without broader agreement.

- **Q** (@DiscordBridge/Jayedii, msg#577325-326): What does trustless Bitcoin client on Ergo mean?
  **A** (implied context from msg#577321): Building vibe-coded trustless Bitcoin client on top of existing trustless relay implementation, enabled by 6.0 activation.

- **Q** (@S, msg#577286): Is sub-blocks testnet mining? Can I join with 3GH?
  **A** (@kushti khushi, msg#577293): DevNet running with CPUs sufficient for now. Non sub-block nodes can still participate as mainnet sub-block nodes will be injected into non sub-block network. Join via https://t.me/ErgoDevelopers for instructions.

- **Q** (@Jayedii, msg#577698): What's the risk of a mining pool controlling majority hash rate?
  **A** (@A, msg#577699): Pools contain many miners who can switch if pool attacks; most miners won't care as long as rewards continue. Individual miner exit possible but unlikely en masse.

- **Q** (@Jayedii, msg#577702-705): How can miners be convinced to vote on protocol changes like PoS transition?
  **A** (@kushti khushi, msg#577705-712): In Ergo, miners do vote on protocol updates (unlike ZEC/ETH with developer dictatorships). If PoS asset is digital commodity, what does it represent after switching PoS?

- **Q** (@DiscordBridge/yea.ok 🍉, msg#577721-730): What stablecoin design and build order for LST protocol?
  **A** (@Richi [MANA], msg#577798): CDP-based stablecoins aren't scalable; should be treated as isolated DeFi projects with liquidations. USE/Dexy have far greater potential.

- **Q** (@DiscordBridge/yea.ok 🍉, msg#577769): Can sub-blocks enable perps DEX? Is it suited for this?
  **A** (@DiscordBridge/Jayedii, msg#577772-773): Sub-blocks could serve as settlement layer for L2; need transaction finality design (throttling every 2 minutes possible) but "someone smarter" may have better answer.

- **Q** (@Jayedii, msg#577839-842): Use case for digital twins in crypto space leveraging oracles and sensors for supply chain modeling?
  **A** (@DiscordBridge/yea.ok 🍉, msg#577848): How would economics/incentives/flywheel work for such a system? (Unresolved — Jayedii interested in pursuing this area.)

- **Q** (@DiscordBridge/Jayedii, msg#577687-695): Why is community chat policing my question about mining pool dominance?
  **A** (@kushti khushi, msg#577670): Politics, pricing, and trading are discouraged per 6-year chat consensus to respect all participants. ViaBTC dominance and PoW narrative discussion acceptable. Miners should be reached for engagement.

- **Q** (@B B, msg#577346): Why does a specific address show confirmed balance when it should show 0?
  **A** (@kushti khushi, msg#577351): "Will check later today" (resolution not documented in segment).

## Links Shared

- [https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005]: 6.0 soft fork technical specification and details

- [https://workshop.stability.nexus]: 1st Stability Workshop website (Dec 15, 2025, Jaipur)

- [https://easychair.org/cfp/STABILITY-2025]: Call for Papers submission portal

- [https://t.me/ergraider]: Ergo X Raider Group for coordinated social media awareness

- [https://t.me/ErgoDevelopers]: Developer group with sub-blocks testnet instructions

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1085]: Trustless hashrate oracle vibe-code PR for review

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1084]: Stealth addresses in Ergo Mixer implementation

- [https://x.com/chepurnoy/status/1975692152463364598]: kushti's tweet (content not specified)

- [https://x.com/ergo_platform/status/1975771920273436940]: Ergo Meetup 2025 announcement/details

- [https://curiaregiscrypto.medium.com/a-runes-strategy-for-rich-cross-chain-assets-c6868b7d4ac3]: Runes strategy for cross-chain assets via Rosen

- [https://curiaregiscrypto.medium.com/runes-on-rosen-serialized-bridging-data-across-multiple-utxos-60337bed1fe6]: Runes serialization across UTXOs on Rosen

- [https://rodarmor.com/blog/runes/]: Minimalist Runes token protocol specification (by ord creator)

- [https://curiaregiscrypto.medium.com/sigmausd-vs-the-competition-e70b23fe37a3]: SigmaUSD vs competing stablecoin designs (Armeanio)

- [https://shieldedlabs.net/crosslink-roadmap-q1-2025/]: ZEC Crosslink roadmap (hybrid PoW/PoS transition)

- [https://shieldedlabs.net/roadmap/]: ZEC full roadmap

- [https://github.com/ErgoDevs/Ergo-Bounties]: Developer bounties for Ergo protocol work

- [https://www.youtube.com/watch?v=FlSTE7PVDik]: Ergo Meetup 2025 livestream (full event recording)

- [https://x.com/ergo_platform/status/1977039145047593164]: X amplification call for Ergo announcements

- [https://t.me/+fHoZiXsgK6U1ZGZh]: Ergo Meetup 2025 Telegram group

- [https://ergo.watch/charts]: Ergo on-chain volume and metrics dashboard

- [https://voltpay.store]: VoltPay ADA-to-ERG direct swap alternative to Banxa

- [https://litescribe.io]: Litecoin marketplace (context for multi-chain strategy)

- [https://chikun.market]: Litecoin DEX (multi-chain context)

- [https://liteverse.io]: Litecoin ecosystem (comparison for Rosen Bridge expansion)

## Unresolved Questions

- **Sub-blocks timeline**: When will sub-blocks activate? Depends on community consensus and miner voting; no pre-agreed timeline. Initial PRs still under review. [@kushti khushi, msg#577236-237, 2025-10-06]

- **Perp DEX architecture on sub-blocks**: Is sub-blocks suitable for perps DEX v1? Transaction finality design needed. [@DiscordBridge/Jayedii, msg#577769-773, 2025-10-10]

- **Digital twin economics**: How would incentive flywheel work for oracle-powered digital twin supply chain modeling? [@DiscordBridge/yea.ok 🍉, msg#577849, 2025-10-10]

- **Banxa effectiveness metrics**: Does Banxa publish onboarding volume/effectiveness stats? kushti indicated no clear on-chain footprint, mixed with CEX balances. [@HQΣr | Wont Dm, msg#577546-548, 2025-10-08]

- **Ledger Nautilus integration**: When will Ledger firmware compatibility fix be released? Dev traveling; no ETA provided. [@kushti khushi, msg#577880-881, 2025-10-11]

- **Stablecoin for LST protocol**: Should LST prioritize stablecoin implementation or pooled lending first? yea.ok 🍉 unsure about USE stablecoin participation; suggested perps DEX highest yield potential. [@DiscordBridge, msg#577721-741, 2025-10-10]

- **ViaBTC ZEC dominance implications**: Is ZEC moving to hybrid PoW/PoS to suppress mining via centralized staking? Concern raised but not resolved. [@Jayedii, msg#577648-653, 2025-10-09]