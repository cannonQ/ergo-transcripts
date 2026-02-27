# Ergo General Chat — 2023-W46 Summary

## Key Topics Discussed

### Storage Rent & Demurrage
The community engaged in extensive discussion on Ergo's storage rent mechanism and demurrage policy. Key points: storage rent is fixed at ~0.14 ERG per UTXO per 4-year epoch; future governance may introduce percentage-based calculations; demurrage ensures true fixed supply (no inflation or contraction via lost coins) unlike Bitcoin; the mechanism requires miners to "charge" abandoned UTXOs. At current rates, a 100 ERG abandoned box takes ~2,857 years to be fully reclaimed. Multiple participants argued that percentage-based fees (e.g., 1-3% annually) may be needed when ERG price reaches high values; alternatively, exponential scaling factors could accelerate reclamation. [@dayumbbbb, @Mar Bondicat, @qx()]

### Sub-blocks (s-blocks) Development
Kushti confirmed s-blocks (1-second confirmation blocks) as the next network upgrade. Papers estimate 100x throughput improvement; Kushti conservatively estimates 15-20x under real conditions (rough estimate ~1000 TPS possible). Key distinction: s-blocks improve perceived confirmation time and UX (20 seconds for sub-confirmation vs. 2 minutes for full block), but do not increase absolute TPS unless proof aggregation is implemented. s-blocks enable chaining transactions in mempool and improve dApp UX without requiring layer 2. Early testing infrastructure is being set up; interested developers invited to DM kushti or contribute to testnet coordination. [@kushti khushi, @dayumbbbb, @Mar Bondicat, msg#451250-451300]

### CMC Data Fee Dispute Resolution
CoinMarketCap reached out to Glasgow (msg#449889) after Ergo's public complaint about exploitative data-correction practices. CMC apologized and committed to fixing inaccurate data and refining notice messaging on ERG's page. Glasgow is coordinating final text clarifications with the CMC team. This was framed as a community win achieved through transparent criticism rather than capitulation. [@Glasgow, msg#449889, msg#450111]

### ChainCash Whitepaper & Privacy Notes
Kushti released an updated ChainCash whitepaper emphasizing collateralized notes redeemable through previous owners' history (more sophisticated than simple Chaumian Mint). The design enables privacy-preserving multi-owner redemption and potential AI agent payment systems. Notes can be backed by tokenized resources (e.g., compute time). [@kushti khushi, msg#450096, msg#450120]

### eUTXO vs. Account Model Design
Mar Bondicat and others noted that Ergo's eUTXO model provides inherent advantages: (1) users never need to approve balance to AMMs (avoiding class of approve-related hacks); (2) local state is separated from global state, enabling better parallelization (multithread vs. Ethereum's single-thread model); (3) complex transactions can be batched/aggregated for concurrent execution. Spectrum Finance published a paper on eUTXO production design patterns. [@Mar Bondicat, msg#450991-450994]

### Rosen Bridge Status & Watchers
Rosen Bridge setup ongoing; Guard server setup is in progress. Dan Friedman mentioned EVM chains will be bridged next (not Bitcoin), enabling wrapped stablecoins on Ergo. Small transactions (e.g., $10) may not justify Rosen fees currently. Watcher UI version 2.2.1 released; node operators should update. A manual TX was sent to GARD's DAO to refund slashed permits from a prior failed transaction. [@Armeanio, @Dan Friedman, msg#450451-450462, msg#450955-451369]

### Paideia DAO Public Beta Launch
Paideia beta testing begins November 20th. Rebuilt from scratch using Plasma library; supports governance DAO operations on Ergo. [@Unknown, msg#450946]

### SigmaFi Mempool-Aware Operations
SigmaFi (new iteration) enables mempool-aware operations by default: users can open orders, lend, and repay in the same block without waiting for confirmations. Uses FleetSDK's blockchain-providers to organize box and chain transactions atomically. [@Unknown, msg#450079-450080, msg#450084]

### Demurrage Economics & Monetary Policy Debate
Extended philosophical debate on demurrage vs. fixed supply:
- Demurrage is necessary to prevent supply contraction from lost keys (Murphy's law).
- Bitcoin's "fixed" 21M supply is misleading; lost coins compound, creating effective hyperdeflation.
- Ergo's demurrage guarantees true fixed supply mathematically—no expansion, no contraction.
- Discussion of redomination (adding decimal places to divisibility) has documented inflationary psychological effects.
- Ergo represents Gesellian monetary policy (demurrage); Bitcoin/Kaspa are Austrian (fixed but contracting); Ethereum is Keynesian (inflationary).
- At Ergo's theoretical trillion-dollar valuation, 0.14 ERG would be substantial; percentage-based fees may become governance priority.
[@dayumbbbb, @Antonio, @Mar Bondicat, @qx(), msg#450949-452002]

### GPU Mining vs. ASIC Resistance & Censorship
F2Pool (Cayman Islands) began blacklisting OFAC-flagged addresses from mined Bitcoin blocks. This signals that even non-US private mining pools face regulatory pressure. Ergo's GPU PoW (Autolykos) provides inherent ASIC-resistance, making it harder for centralized authorities to force transaction censorship. [@dayumbbbb, msg#451844-451857, @kushti khushi msg#451851]

### Trading & DEX UX — Order Books vs. AMMs
qx() championed Trade House (order book DEX) over AMM pools: order books provide total transparency of depth and liquidity, full control over slippage, and the ability to set specific buy/sell price levels. Partial order fills and peer-to-peer control are key features. Multiple update keys enable multiple operators. Recommended as superior UX for strategic traders. Spectrum (AMM) and DuckPools (lending) are complementary tools. [@qx(), msg#450248, msg#450446-451493]

### Nautilus Wallet & Indexing
Nautilus wallet API does not currently return unconfirmed boxes; indexed nodes do. Indexed nodes provide additional API endpoints, reducing load on explorer. Wallets should offer indexed node support; dApps should leverage indexed nodes instead of explorer APIs. Terminus (Android) supports indexed nodes; iOS wallet stuck in static state due to Apple's 30% NFT purchase requirement. [@qx(), msg#451223-451231]

### Proof of Reserve & Chainlink Partnership (Palmyra)
Dan Friedman detailed Palmyra's use of Chainlink proof of reserve + Winter Protocol proxy functions for on-chain warehouse receipts. Commodity producers deposit goods into bonded warehouses; receipts issued on-chain via IoT sensors (weight, motion, camera) proving continuous existence. Decentralized trade financing eliminates need for traditional intermediaries. Plan to build out native Ergo oracles and tooling; Chainlink chosen for network size and diverse support (not exclusive). [@Dan Friedman, msg#450225-450702]

### Stealth Addresses & Privacy Features
Community interest in stealth address support for mobile wallets (passive stealth addresses not yet in production even on Bitcoin). Discussion of integrating mixer + stealth addresses into mobile wallet design. Potential wallet focusing on cypherpunk sensibilities: dark-mode only, non-reusable addresses by default, built-in privacy features. [@dayumbbbb, msg#450137-450237]

---

## Important Decisions or Announcements

- [@kushti khushi, msg#450906, 2023-11-15]: Confirmed that storage rent security model aligns with "gold vault storing bricks forever free" — incentives only charged when gold (value) moves, not on derivative holdings.
- [@Glasgow, msg#449889, 2023-11-13]: CoinMarketCap apologized and committed to fixing ERG data inaccuracies; Glasgow coordinating final clarification tweets with CMC team.
- [@Unknown, msg#450946, 2023-11-15]: Paideia public beta testing launches November 20th.
- [@Armeanio, msg#450951, 2023-11-15]: Rosen Bridge Guard server setup ongoing; no "soon" promised.
- [@qx(), msg#452101, 2023-11-19]: Released newcomer-oriented video (YouTube link provided).
- [@kushti khushi, msg#451979, 2023-11-19]: Spam on Ergo should be welcomed by miners; demurrage and storage rent compensate for blockchain bloat.

---

## Technical Q&A Worth Preserving

- **Q** (@Mar Bondicat, msg#450955): How are miners able to set the creation height of an expired box when claiming storage rent? Can they set it to any historical height or only current height?
  **A** (@dayumbbbb, msg#450958): The clock resets when the box gets charged with demurrage fee; creation height is reset to current height. Unspent output set ensures miners collect rent fairly. (@kushti khushi also confirmed testing address showing transaction pattern matching.)

- **Q** (@Mar Bondicat, msg#450197): If a 100 ERG box is lost, how long until demurrage exhausts it?
  **A** (@dayumbbbb, msg#450199-450201): Depends on wallet address reuse, future governance increases to demurrage fee, demurrage speed changes, and possible shift to percentage-based calculation. The important part is *modelability* — you can calculate liquid supply with certainty, unlike Bitcoin.

- **Q** (@qx(), msg#451478): What happens to ERG coins if a wallet private key is lost? Are they lost forever?
  **A** (@dayumbbbb, msg#451488): ERG supply never expands nor contracts. Demurrage ensures lost coins eventually re-enter circulation. This is "negentropic and thermo-resistant monetary policy."

- **Q** (@Flying Pig, msg#450122-450113): Can dApps chain unconfirmed transactions in mempool atomically within a single block?
  **A** (@qx(), msg#450108): With indexed nodes, yes. Mempool transactions can be treated as confirmed and infinite TXs built on top (if one fails, whole chain fails). Most dApps underutilize this feature.

- **Q** (@Cr Gu, msg#450433-450498): Transaction sent to address with spaces stripped by email—will it bounce or is ERG lost?
  **A** (@qx(), msg#450484-450485): Ergo is good at bouncing malformed addresses. TradeOgre should support you; request refund via their support. (@kushti khushi confirmed pattern: transaction pays mining fee to wrong address but fails, TradeOgre marks it "successful" incorrectly.)

- **Q** (@Pulsarz, msg#451355-451366): Do all sub-block transactions get included in normal blocks or only proofs?
  **A** (@Pulsarz, msg#451357-451358): Only proofs of sub-block transactions are included in normal blocks, so TPS does increase. Full implementation details TBD.

- **Q** (@Johnny, msg#451446): Can ERGO ecosystem confirm copyright/authorship of works on-chain (writer, physicist, marriage oath)?
  **A** (@Glasgow, msg#451447): Yes, via SigmaStamp project (GitHub: sigmastamp). Enables verifiable timestamps and ownership proofs on-chain.

- **Q** (@Mar Bondicat, msg#451020): How many full nodes does Ergo have vs. competitors?
  **A** (@Mar Bondicat, msg#451020): Ergo: 178 nodes; Kaspa: 91 nodes; Bitcoin: 16,000+ nodes; Ethereum: 3,000+ nodes.

- **Q** (@eπ, msg#451865): Can storage rent frequency (4-year epoch) be changed by miners without hard fork?
  **A** (@Glasgow, msg#451866): No, the 4-year frequency is fixed.

---

## Links Shared

- [https://spectrum.fi/eutxo_in_production.pdf](https://spectrum.fi/eutxo_in_production.pdf): Spectrum Finance paper on eUTXO design patterns and production optimization strategies.
- [https://github.com/sigmastamp](https://github.com/sigmastamp): SigmaStamp project—enables verifiable copyright/authorship timestamping on Ergo.
- [https://github.com/GetBlok-io/GetBlok-Plasma](https://github.com/GetBlok-io/GetBlok-Plasma): Plasma library used to rebuild Paideia from scratch.
- [https://chaincode.gitbook.io/seminars/lightning-protocol-development](https://chaincode.gitbook.io/seminars/lightning-protocol-development): Chaincode Lightning protocol seminars (referenced as gold-standard education model).
- [https://learnmeabitcoin.com/](https://learnmeabitcoin.com/): First-principles Bitcoin education (recommended format for Ergo tutorials).
- [http://karpathy.github.io/2021/06/21/blockchain/](http://karpathy.github.io/2021/06/21/blockchain/): Andrej Karpathy's raw first-principles Bitcoin transaction tutorial (referenced as exemplary educational approach).
- [https://github.com/ergoplatform/grow-ergo/issues/15](https://github.com/ergoplatform/grow-ergo/issues/15): Education bounties (500 ERG per content piece) for Ergo ecosystem documentation.
- [https://deadit.github.io/paizo/](https://deadit.github.io/paizo/): Interactive simulator for experimenting with demurrage and storage rent parameters.
- [https://www.noemamag.com/what-if-money-expired/](https://www.noemamag.com/what-if-money-expired/): Magazine article on Gesell and demurrage money concept.
- [https://www.duckpools.io/](https://www.duckpools.io/): DuckPools—pooled lending protocol on Ergo; SigmaUSD pool at 94% utilization with 88% APY.
- [https://youtu.be/PUiErwsgob8](https://youtu.be/PUiErwsgob8): qx() newcomer introduction video.
- [https://www.youtube.com/live/vIoLxUPe10A](https://www.youtube.com/live/vIoLxUPe10A): Weekly Ergo update and AMA livestream (Nov 16, 1 PM UTC).
- [https://twitter.com/RosenBridge_erg](https://twitter.com/RosenBridge_erg): Rosen Bridge official Twitter.
- [https://t.me/zengate_global](https://t.me/zengate_global): Zengate Global Telegram (Palmyra ecosystem).
- [https://t.me/ergo_mining](https://t.me/ergo_mining): Ergo mining community Telegram.

---

## Unresolved Questions

- **Storage Rent Percentage Model**: Should Ergo shift from fixed 0.14 ERG per UTXO to percentage-based fees (1-3% annually) or exponential scaling factors? Requires governance vote; targeted for future hard fork discussion. [@dayumbbbb, @Mar Bondicat, msg#450199-451838]

- **Sub-blocks Real-World Performance**: Exact TPS improvement under production load (papers claim 100x; conservative estimate 15-20x). Full testnet rollout needed to validate. [@kushti khushi, @dayumbbbb, msg#451293-451300]

- **Rosen Bridge EVM Integration Timeline**: When will wrapped stablecoins (USDT/USDC) on Ergo via Rosen be live? Likely 2025. [@Mint LkV, msg#451464-451469]

- **Covenants & Ark Layer 2**: Kushti noted Ark (covenants-based sidechains) would take "a few years" but expressed skepticism about Ark's specifications and clarity. [@kushti khushi, msg#452089-452094]

- **Demurrage Exponential Scaling Design**: Mar Bondicat proposed complex re-reemission and withdrawal guarantee contracts to allow large lost