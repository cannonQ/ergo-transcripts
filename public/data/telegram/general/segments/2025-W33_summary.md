# Ergo General Chat — 2025-W33 Summary

## Key Topics Discussed

- **Ergo Protocol Maturity & Decentralization**: kushti articulated that Ergo is a mature, uncontrolled asset where protocol control requires sufficient hardware voting power. No central "Ergo" entity exists — the ecosystem is a constellation of for-profit companies, nonprofits, DAOs, and individuals. (@kushti, msg#571224, msg#571350, msg#571677)

- **Regulatory Pressure & Non-KYC Exchange Closures**: Discussion of TradeOgre seizure and other non-KYC CEX shutdowns creating pressure on PoW cryptocurrency liquidity. TradeOgre and Xeggex were highlighted as critical infrastructure now gone, leaving only KYCed services. (@filippounits, @kushti, msg#571232–571237)

- **Lithos Protocol Progress**: Armeanio reported work on off-chain fraud proof contracts, stratum code optimization, and contract cleanup — testnet preparation underway. (@Armeanio, msg#571249)

- **Sub-blocks (6.0) Testnet & Mainnet Timeline**: Early October confirmed for 6.0 mainnet release; testnet coming "soonTM". Community interest in perpetuals/options platforms on sub-blocks. (@Richi, msg#571698; @cannon_q, msg#571696–571697)

- **Infrastructure & P2P Load Balancers**: GEO/proximity routing now live on P2P load balancers (USA/East and Australia); additional peers coming. Managed by InfraDAO members. (@qx(), msg#571587)

- **Merge-Mined Sidechains & Security**: Discussion of double merge-mined GPU-based sidechains for Monero 51% attack mitigation and Ergo hashrate boost. Merge-mining increases security budget per unit time without preventing 51% "takeover" in permissionless setting. (@kushti, msg#571446–571452)

- **DeFi Dapp Ecosystem Gaps**: Community seeking perpetuals, options platforms, and tighter Rosen Bridge integration into Cardano DeFi (Liqwid, Minswap, Splash). MewFinance highlighted as playful DeFi toolkit. (@DiscordBridge / yea.ok 🍉, msg#571354–571359)

- **Crypto Industry Headwinds**: kushti stated "crypto" as a category is effectively dead (2012–2024), with only p2p money or corporate co-option viable. Bank chains (Stripe, Tether, Circle exploring L1s) and state resistance becoming central dividing line. (@kushti, msg#571217–571219, msg#571256–571259)

- **Token Thumbnails & Registry**: Process clarified: submit token metadata to Nautilus repo via Aco (@AcoSmrkas) for DEX/wallet display. (@cannon_q, msg#571720)

- **Autolykos DAO & Collateralized Equity Token (CET)**: LIFΣ OF IF₳ proposed governance/venture capital DAO token with profit-sharing equity model: investors own stake, receive ROI as funded projects generate revenue. (@LIFΣ OF IF₳, msg#571723, msg#571726)

---

## Important Decisions or Announcements

- [@Armeanio, msg#571249, 2025-08-12]: **Lithos Protocol testnet prep** — Off-chain fraud proof contracts, stratum efficiency improvements, documentation/variable cleanup underway.

- [@Richi, msg#571698, 2025-08-17]: **Ergo 6.0 mainnet timeline confirmed for early October** with sub-blocks enabled.

- [@qx(), msg#571587, 2025-08-15]: **P2P load balancers with GEO/proximity routing live** — USA/East, Australia endpoints active; two more peers coming in following weeks.

- [@Glasgow, msg#571229–571230, 2025-08-12]: **TradeOgre not using Salesforce** — unlikely target of Snowflake/Salesforce breaches; alleged ransomware group mocking seizure and pitching RaaS alternatives.

- [@Andy L, msg#571460, 2025-08-14]: **AMA cancelled** — remote location prevented hosting; normal service resumes next Thursday.

---

## Technical Q&A Worth Preserving

- **Q** (@Ioannis, msg#571403): Realistically how many days until sub-blocks on mainnet?  
  **A** (@Ruben, msg#571410): October ~

- **Q** (@Unknown, msg#571238): How much would it cost to attack Ergo?  
  **A** (@cannon_q, msg#571243): About 12–14k 3090 GPUs to get half the hash. (@cannon_q, msg#571287): Current is around 9,500 @ 3090Ti to do half the hash; fluctuating.

- **Q** (@HQΣr, msg#571449): What prevents a 51% attack on merge mine?  
  **A** (@kushti, msg#571450): Nothing prevents 51% "attack" in permissionless environment — anyone can take control via PoW. All fixes replace permissionless with permissioned. Merged-mined sidechains increase security budget (cost of ownership per unit time).

- **Q** (@DiscordBridge / yea.ok 🍉, msg#571354): Would perpetuals/strike-finance-like dapp be good on sub-blocks?  
  **A** (@kushti, msg#571432): Would be happy to help with sub-blocks API on testnet. (@DiscordBridge / kb, msg#571439): Perpetuals/options was next dapp target; working on DuckPools v2 first (ETA Oct/Nov).

- **Q** (@Matus, msg#571197–571198): Where is the Telegram group for testnet discussion?  
  **A** (@kushti, msg#571199): https://t.me/ErgoDevelopers

- **Q** (@LIFΣ OF IF₳, msg#571719): How do I set token thumbnail for Nautilus/DEX display?  
  **A** (@cannon_q, msg#571720): Submit to Nautilus repo; coordinate with @AcoSmrkas for processing.

- **Q** (@Ergochampion, msg#571646): Is there an iPhone Ergo wallet with buy function?  
  **A** (@HQΣr, msg#571648–571650): Not in Apple App Store. Use Banxa or VoltPay.store instead.

---

## Links Shared

- [https://vxtwitter.com/chepurnoy/status/1954989265122914404]: kushti sharing Twitter/X thread on governance or ecosystem topic (2025-08-11)

- [https://t.me/ErgoDevelopers]: Ergo Developers Telegram group for protocol/testnet coordination (@kushti, msg#571199)

- [https://docs.ergoplatform.com/dev/start/]: Ergo developer documentation entry point (@kushti, msg#571398 via sigmabot)

- [https://github.com/ergoplatform/ergo-appkit]: Ergo AppKit GitHub repository (@kushti, msg#571398 via sigmabot)

- [https://fleet-sdk.github.io/docs/]: Fleet SDK documentation (@kushti, msg#571398 via sigmabot)

- [https://www.youtube.com/@decoeducation9394]: DeCo Education video channel (@kushti, msg#571398 via sigmabot)

- [https://deco-education.github.io/deco-docs/docs/intro/]: DeCo Education documentation (@kushti, msg#571398 via sigmabot)

- [https://ergohack.io/]: ErgoHack event/competition platform (@kushti, msg#571398 via sigmabot)

- [https://www.coinex.com/]: CoinEx CEX (non-KYC option for Ergo trading) (@kushti, msg#571288)

- [https://voltpay.store/]: VoltPay fiat-to-crypto gateway (@cannon_q, msg#571286)

- [https://explorer-p2p.ergoplatform.com/]: Ergo P2P explorer load balancer (@qx(), msg#571587)

- [https://api-p2p.ergoplatform.com/]: Ergo P2P API load balancer (@qx(), msg#571587)

- [https://graphql-p2p.ergoplatform.com/]: Ergo P2P GraphQL endpoint (@qx(), msg#571587)

- [https://node-p2p.ergoplatform.com/]: Ergo P2P node endpoint (@qx(), msg#571587)

- [https://github.com/moon-miner/feeless-Ergodex-run-script]: Bash script for running Spectrum DEX locally with zero fees (@Patato, msg#571747)

- [https://x.com/autolykos_io]: Autolykos DAO project (venture capital + governance token) (@LIFΣ OF IF₳, msg#571173, msg#571726)

- [https://socradar.io/salesforce-data-breach-affecting-multiple-companies/]: Salesforce data breach context (relevant to TradeOgre speculation) (@filippounits, msg#571227)

- [https://github.com/networkspore/ai-censorship-boundary-bug]: AI censorship boundary research (Claude Sonnet 4.0 behavioral analysis) (@DiscordBridge / iospore, msg#571662)

- [https://ergo.getgrist.com/jf9KPR1HUDJH/Project-Management/p/45]: Ergo project management tracking (@Glasgow, msg#571477)

- [https://docs.ergoplatform.com/contribute/bounties/#development-reward-program]: Ergo Foundation bounty program (@Glasgow, msg#571477)

---

## Unresolved Questions

- **XMR Bridge**: Community asked "When Xmr bridge?" with note "It would be the most useful bridge ever." No response on timeline or feasibility. (@Unknown, msg#571716–571718)

- **Perpetuals Platform Leadership**: Interest expressed in building perpetuals/options on sub-blocks, but no core developer committed. Community seeking to recruit. (@DiscordBridge / yea.ok 🍉, msg#571429–571439)

- **Monero Merge-Mine Proposal**: Whether Ergo Foundation should forward double merge-mined sidechain proposal to Monero devs/community — raised but no decision given. (@The Horticulturalist, msg#571448)

- **iPhone Wallet Support**: Nautilus mobile app status on iOS App Store remains unresolved; only Android currently available. (@Ergochampion, msg#571612–571646)

- **Ledger Integration**: Nautilus + Ledger connection issues reported; directed to Discord for support tickets but no immediate resolution provided. (@DiscordBridge / bkauii_ensō, msg#571482–571509)

- **Investment/Partnership Proposal**: Unsolicited OTC investment proposal for $500k–$10M mentioned; kushti reiterated Ergo is decentralized and no central entity to negotiate with. No outcome. (@Unknown, msg#571666–571680)

---

## Community Sentiment & Noteworthy Discussions

- **Ecosystem Fragmentation**: kushti emphasized Ergo's decentralization means no single "team" controls resource allocation — devs/communities must self-coordinate. This framed responses to complaints about marketing, dApp quality, and investment priority.

- **State Resistance as North Star**: Armeanio summarized the regulatory environment: bank chains (Stripe, Tether, Circle building L1s) vs. permissionless PoW. "State resistance or bust" framing suggests Ergo positions itself as the alternative, not a competing smart contract platform.

- **Scammer Vigilance**: Multiple warnings about fake developer hirings and North Korean hacker infiltration (per Binance CSO). Patato and kushti highlighted recruitment risks; community flagged suspicious DMs.

- **Trending on CoinGecko**: Brief positive sentiment spike from MewFinance article driving Ergo visibility. (@DiscordBridge, msg#571301, msg#571379–571382)