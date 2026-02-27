# Ergo General Chat — Week 2025-W46 Summary

## Key Topics Discussed

- **Rosen Bridge Bitcoin Runes+ Integration**: Armeanio announced deployment of SigmaUSD and Gluon Gold to Bitcoin as Runes+, creating the first algorithmic dollar stablecoin as a Runes+ on Bitcoin Layer 1. This enables multi-chain asset backing with decentralized security and real-time auditability ([msg#581596](https://t.me/ergo_general/581596)).

- **Lithos Protocol Testnet Launch**: Cheese Enthusiast (qx() clarified as Kirat Singh) requested ERG from testnet mining to create initial collateral UTXOs for Lithos testing. Testnet parameters were proposed by kushti with restart expected within 3-4 hours ([msg#581768](https://t.me/ergo_general/581768), [msg#581770](https://t.me/ergo_general/581770)).

- **Sub-blocks Processing Rework**: kushti reported finishing sub-blocks processing rework ([msg#581011](https://t.me/ergo_general/581011)), later proposing new testnet parameters for testing ([msg#581771](https://t.me/ergo_general/581771)).

- **Mahadex RWA Marketplace Development**: T Mas detailed a decentralized exchange for real-world assets built on Ergo with IPFS/OrbitDB backend, 3.7% seller-only fees, fiat on-ramps via Banxa and VoltPay, and escrow with delayed signing mechanisms. Whitepaper released with plans for ChainCash physical backing and private address support ([msg#581121](https://t.me/ergo_general/581121)–[msg#581123](https://t.me/ergo_general/581123)).

- **Storage Rent (Demurrage) Mechanics**: Discussion of storage rent as a deflationary mechanism. kushti clarified that collected rent is recycled to miners, not burned, while Ergo has programmable reserve layer design to avoid tokenomics issues seen in DePIN projects ([msg#581282](https://t.me/ergo_general/581282), [msg#581293](https://t.me/ergo_general/581293)).

- **Privacy Features on Ergo**: Community emphasized stealth addresses and mixer functionality as native Ergo capabilities. cannon_q noted that private transactions via mixers and stealth addresses are available; Armeanio proposed using stealth addresses for redemptions in Basis cash schemes ([msg#581104](https://t.me/ergo_general/581104), [msg#581129](https://t.me/ergo_general/581129)).

- **Community Event Format Restructuring**: Discussion of renaming "AMA" to "Ergo Live Community Discussion" and shifting from weekly to monthly cadence. Dev updates proposed weekly (possibly Saturday/Sunday nights UTC with Armeanio); community chats monthly to reduce saturation and improve engagement metrics ([msg#581449](https://t.me/ergo_general/581449)–[msg#581514](https://t.me/ergo_general/581514)).

- **Ergo Foundation Transition**: kushti confirmed EF will be dissolved soon; Glasgow (Discord) clarified it will not be dissolved but will transition to community/DevDAO governance. Discussion touched on foundation's role in early growth vs. current ecosystem maturity ([msg#581311](https://t.me/ergo_general/581311), [msg#581312](https://t.me/ergo_general/581312)).

- **Ergo Blockchain Website Launch**: New ergoblockchain.org site launched with expanded developer documentation and educational content. Community praised design; Aco flagged "fast confirmation" as aspirational rather than current feature ([msg#581614](https://t.me/ergo_general/581614), [msg#581620](https://t.me/ergo_general/581620)).

- **Early Mining Distribution Analysis**: Discussion of early Ergo whale (~36.3% mined in first period, 75-90% of early blocks). Consensus that early mining concentration is standard for PoW launches; holder has not dumped, suggesting belief in project ([msg#581259](https://t.me/ergo_general/581259)–[msg#581277](https://t.me/ergo_general/581277)).

---

## Important Decisions or Announcements

- [@kushti, msg#581129, 2025-11-11]: Proposed stealth addresses for redemptions in off-chain cash schemes like Basis to enable fast private cash with on-chain backing.

- [@Armeanio, msg#581133, 2025-11-11]: Confirmed Ergo design philosophy: privacy protocols as apps, not hardcoded features, to avoid hard forks when new schemes discovered.

- [@Armeanio, msg#581368, 2025-11-12]: Announced deployment of SigmaUSD and Gluon Gold to Bitcoin as Runes+, followed by use support once available.

- [@Armeanio, msg#581376, 2025-11-12]: Proposed structuring Rosen subdomains and runes+ asset naming (e.g., ROSEN•TECH = RSRSN) with clear documentation.

- [@Armeanio, msg#581596, 2025-11-14]: Announced Rosen Runes+ as first Bitcoin L1 stablecoin implementation combining on-chain visibility, multi-chain backing, and real-time auditability.

- [@Armeanio, msg#581631–581636, 2025-11-14]: Emphasized Lithos Protocol priorities: testnet stability and open-source code over token distribution; requested community testing.

- [@T Mas, msg#581121–581123, 2025-11-11]: Released Mahadex whitepaper v1.0 with detailed architecture for IPFS-hosted RWA marketplace, escrow, and delayed signing.

- [@qx(), msg#581449–581514, 2025-11-13]: Consensus reached on reformatted event schedule: Monthly Ergo Live Community Discussion (first week), monthly YouTube AMA (third week), weekly dev updates.

- [@kushti, msg#581768–581771, 2025-11-16]: Proposed new testnet parameters; dadreboi tasked with restarting Lithos testnet.

- [@Bruno Woltzenlogel Paleo, msg#581116, 2025-11-11]: Announced plans for independent Spring of Code 2026 to build Ergo projects (similar to Bene and Bounty in GSoC 2025).

- [@Josemi, msg#581108, 2025-11-11]: Reported completion of Game of Prompts and Bene v2.0 (via Google Summer of Code). Starting Bounty fork development and Celaut implementation.

- [@kushti, msg#581338, 2025-11-12]: Announced constant funding for Dusek to maintain Rust libraries and develop new features.

---

## Technical Q&A Worth Preserving

- **Q** (@T Mas, msg#581151): Does Ergo have private DAO function?
  **A** (@Armeanio, msg#581152–581162): Multisig already discloses spenders minimally; pointed to Ergo's first apps (mixer and zero-knowledge treasury from 2020) as privacy-focused roots. Linked docs on zero-knowledge treasury (msg#581159, msg#581161).

- **Q** (@Edko, msg#581099): Does Ergo support private transaction features like ZCash, Monero, Dash?
  **A** (@cannon_q, msg#581104): Yes—search chat for Mixer and stealth address examples in documentation.

- **Q** (@T Mas, msg#581963): How to connect GoDaddy domain to Flux hosting?
  **A** (@T Mas, msg#581963): Provided step-by-step instructions: Deploy on Flux, use Cloudflare as DNS intermediary, update GoDaddy nameservers. (@HQΣr, msg#581969): Alternative: buy HNS domain via Handshake, @jumeijumei can assist with deployment including FTP root access.

- **Q** (@Mewbie, msg#581358–581363): What is address 9h5X2DwtprD2xPJs7WqNhnJJvpge3zYsiMV8qn1KV5t9PuZAtDL?
  **A** (@BΣΣ, msg#581362): That is the Ergo Wallet address. (@cannon_q, msg#581377): Check ErgoExplorer addressbook.

- **Q** (@TheStophe, msg#581814): Couldn't get testnet node working; peer list in config needs update?
  **A** (@ArØhβΣ @Arohbe, msg#581816): qx() posted peer IPs in Ergo Developers channel; those should resolve connectivity. (@TheStophe, msg#581817): IPv4 now works (ISP update); will retry.

- **Q** (@impulse, msg#581350–581353): What is the killer app for crypto? Interested in your thoughts, @kushti.
  **A** (@kushti, msg#581366–581367): Acknowledged need to write treatise on stablecoins/flatcoins protecting purchasing power; promised writeup.

- **Q** (@Richi [MANA], msg#581692): Why did Ergo hashrate increase significantly?
  **A** (@Richi, msg#581692–581694): ERG is dual-mined with Midnight for next 4 days. (@R, msg#581697): Mostly from dxpool (large solo miners), minimal increase on Sigmanauts pool.

---

## Links Shared

- [https://x.com/buildonergo/status/1987896774976303241](https://x.com/buildonergo/status/1987896774976303241): kushti sharing Ergo announcement.

- [https://github.com/ergoplatform/ergo-wallet-app/pull/188](https://github.com/ergoplatform/ergo-wallet-app/pull/188): Ergo Wallet App PR requesting testing help ([msg#580972](https://t.me/ergo_general/580972)).

- [https://deepwiki.com/rosen-bridge/rcs](https://deepwiki.com/rosen-bridge/rcs): Rosen Bridge documentation on cross-chain swaps ([msg#581107](https://t.me/ergo_general/581107)).

- [https://powhub-nine.vercel.app/chains/ergo](https://powhub-nine.vercel.app/chains/ergo): PoW Hub Ergo stats ([msg#581076](https://t.me/ergo_general/581076)).

- [https://ergoblockchain.org/](https://ergoblockchain.org/): New Ergo blockchain educational website with dev docs ([msg#581618](https://t.me/ergo_general/581618), [msg#581708](https://t.me/ergo_general/581708)).

- [https://ergoraffle.com/raffle/show/db8263813fb254502d91905a18f59e1c1cc6c646e07763396c3f1e0c9949df54](https://ergoraffle.com/raffle/show/db8263813fb254502d91905a18f59e1c1cc6c646e07763396c3f1e0c9949df54): Ergo Development Funding Raffle ([msg#581341](https://t.me/ergo_general/581341)).

- [https://x.com/LithosProtocol/status/1988643200530280694](https://x.com/LithosProtocol/status/1988643200530280694): Lithos Protocol announcement ([msg#581365](https://t.me/ergo_general/581365)).

- [https://x.com/erg_armeanio/status/1988642782144303154](https://x.com/erg_armeanio/status/1988642782144303154): Armeanio sharing updates.

- [https://ordiscan.com/rune/MEWROSENTECH](https://ordiscan.com/rune/MEWROSENTECH): Mew Finance on Bitcoin Runes ([msg#581538](https://t.me/ergo_general/581538)).

- [https://x.com/ergo_platform/status/1988984972863009047](https://x.com/ergo_platform/status/1988984972863009047): Ergo Platform official post on Runes ([msg#581551](https://t.me/ergo_general/581551)).

- [https://www.ergoforum.org/t/zero-knowledge-treasury-on-top-of-ergo/354](https://www.ergoforum.org/t/zero-knowledge-treasury-on-top-of-ergo/354): Zero-Knowledge Treasury historical forum post from 2020 ([msg#581161](https://t.me/ergo_general/581161)).

- [https://docs.ergoplatform.com/uses/zkt/](https://docs.ergoplatform.com/uses/zkt/): Ergo docs on zero-knowledge treasury ([msg#581159](https://t.me/ergo_general/581159)).

- [https://t.me/ERGtrading](https://t.me/ERGtrading): ERG Trading Telegram chat ([msg#581739](https://t.me/ergo_general/581739)).

- [https://x.com/rosenbridge_erg/status/1989233681760940111](https://x.com/rosenbridge_erg/status/1989233681760940111): Rosen Bridge thread on Runes+ stablecoin implementation ([msg#581598](https://t.me/ergo_general/581598)).

---

## Unresolved Questions

- **Stablecoin Reserve Design**: impulse raised the need for an "unfreezable, immutable, decentralized stablecoin/flatcoin that protects purchasing power" and asked kushti's thoughts. kushti acknowledged need for detailed writeup but no concrete solution specified yet ([msg#581350](https://t.me/ergo_general/581350), [msg#581366](https://t.me/ergo_general/581366)).

- **Lithos Protocol Token**: Community asked if Lithos will have a token. Armeanio clarified there is no token yet and emphasized testnet stability over distribution, but long-term tokenomics remain TBD ([msg#581625](https://t.me/ergo_general/581625), [msg#581631](https://t.me/ergo_general/581631)).

- **Event Format Engagement Metrics**: qx() noted community discussion format has 30% lower viewership than old-style AMA (~150–450 views after one week vs. upper range for traditional AMAs). Cause unclear; proposed alternating monthly format as potential remedy ([msg#581458](https://t.me/ergo_general/581458), [msg#581496](https://t.me/ergo_general/581496)).

- **Fast Block Confirmation Trade-offs**: kushti raised concerns about increased block speed affecting timestamp-based contracts and dApps relying on block height. Full impact analysis of faster blocks on existing contracts pending ([msg#581457](https://t.me/ergo_general/581457)–[msg#581470](https://t.me/ergo_general/581470)).

- **Ergo Foundation Legal Status**: Conflicting statements—kushti stated "EF will be dissolved soon" but Glasgow (Discord) clarified "EF will not be dissolved," only transitioned to community/DevDAO governance. Exact timeline and legal entity retention TBD ([msg#581311](https://t.me/ergo_general/581581), [msg#581312](https://t.me/ergo_general/581312)).

- **Mahadex Governance & Private DAO**: T Mas inquired about private DAO structures for whitelisted investors. Armeanio confirmed Paideia can handle this but no concrete integration timeline specified ([msg#581155](https://t.me/ergo_general/581155), [msg#581171](https://t.me/ergo_general/581171)).

- **Palmyra Development Progress**: Community observed slow progress despite team size compared to solo developers (Aco, kush