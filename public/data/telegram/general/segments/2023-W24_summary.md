---
title: "Ergo General Chat — 2023-W24"
date_start: "2023-06-12"
date_end: "2023-06-18"
type: telegram_weekly
channel: general
week: "2023-W24"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2023-W24
**Period:** 2023-06-12 to 2023-06-18  
**Messages analyzed:** 890  
**Active participants:** 52

---

## Key Topics Discussed

- **ErgoScript & Smart Contracts**: Reference client remains Scala-based; Rust SDK includes an ErgoScript compiler but node implementation is still Scala. Discussion of open sell contracts (no known buyer requirement) and EIP suggestion for such contracts lacking community interest.

- **UTXO Set Snapshots & Node Bootstrapping**: Ergo 5.0.12 introduces optional UTXO set snapshots (~1-1.5 GB additional storage). Snapshots taken every 52,224 blocks; currently only two nodes have pre-height 1,044,480 snapshots. New nodes can bootstrap from snapshots after sufficient network adoption. Storage rent enables pruning of UTXOs older than 4 years, making full blockchain history optional for wallets/apps.

- **NIPoPoWs & Fast Sync**: Ergo 5.0.14 will include NIPoPoWs bootstrapping support. Record sync achieved was ~20 minutes with NIPoPoWs and less conservative settings; Ethereum Snap Sync uses 128 snapshots vs. Ergo's 2-snapshot default (more conservative for reorg safety).

- **Client Diversity & Network Health**: Single full node client (Scala reference client) currently; plans for Rust-based client through sigma-rust. Multiple clients introduce complexity but provide resilience—eth experienced bugs in non-reference clients that didn't crash the chain. Ergo prioritizing feature completeness before client diversification.

- **SigmaUSD Protocol & Stability**: Protocol maintains 1:1 USD peg if collateralization >100%; unlike centralized stablecoins, protocol can't control OTC trading pairs (e.g., Seven Seas dip to $0.95 was market, not protocol failure). SigmaUSD v1 losses blamed on whale behavior; v2 profitable with proper exit timing. New iteration of Djed protocol to be presented at Ergoversary Summit.

- **Sidechain & Merge-Mining**: Kushti discussing sidechain constructions with trustless pegging via smart contracts, similar to BIP 301. Main chain emission contracts reward miners for delivering sidechain data. Ergo-specific improvements over Bitcoin's approach possible due to eUTXO model.

- **Storage Rent & Demurrage**: Storage rent is dynamic and retroactive; collects from UTXOs inactive >4 years, recycles into block rewards. Debate over terminology: "Demurrage" (more provocative) vs. "storage rent" (clearer). Unique feature: Ergo maintains perfect circulating supply forever (unlike BTC/others that lose coins to lost keys).

- **Node Configuration & Pruning**: UTXO snapshot bootstrapping is non-default; nodes can avoid storing snapshots via config. Pruning strategy: stateless clients prune continuously; others require caution. Goal is liberal network where clients prune independently without breaking history availability for others.

- **Zephyr Protocol (Monero + Djed Hybrid)**: New project combining Monero privacy with Djed stablecoin. Whitepaper uses moving averages + spot price to prevent flash attacks. Endgame unclear if privacy coin backing stablecoin is advantageous.

---

## Important Decisions or Announcements

- [@kushti, msg#398225, 2023-06-14]: **Ergo protocol reference client 5.0.12 released** with UTXO set snapshot support (opt-in via config). 5.0.14 will include NIPoPoWs bootstrapping.

- [@kushti, msg#398827, 2023-06-12]: **Node version 5.0.12 planned for Wednesday** (mid-week release); last tests of master branch ongoing.

- [@kushti, msg#398652, 2023-06-16]: **Ergo Summit ("Ergoversary") scheduled** with major announcements planned; kushti requesting 1-2 large community chats around the event.

- [@kushti, msg#398971, 2023-06-17]: **New iteration of Djed stablecoin protocol to be presented at Ergoversary Summit**.

- [@Armeanio, msg#398487, 2023-06-15]: **Successful AMA with @DanielTetsuyama & @Armeanio** on Rosen Bridge / Palmyra ecosystem (recorded).

- [@qx(), msg#398686, 2023-06-12]: **YouTube livestream postponed 24 hours** due to platform restrictions; planning multi-platform broadcast (YouTube, Twitter Spaces, Twitch simultaneously).

- [@Bitrue, msg#397892, 2023-06-13]: **Bitrue x Ergo Platform AMA announced** for 2023-06-13 12:30 UTC; 160 ERG prize pool.

- [@SkyHarbor, msg#398521, 2023-06-15]: **SkyHarbor API endpoint moved** from skyharbor-server.net to https://api.skyharbor.io/; added ErgoPay & SAFEW support.

- [@CruxFinance, msg#398853, 2023-06-16]: **Crux Finance IDO announced on ErgoPad**; portfolio tracking/management dApp for Ergo.

---

## Technical Q&A Worth Preserving

### UTXO Snapshots & Bootstrapping

- **Q** (@Unknown, msg#398482): Is the UTXO set snapshot optional, or mandatory on node update?
  **A** (@qx(), msg#398483 + @Glasgow, msg#398486): Not mandatory; configured via config file (`application.conf`). Additional ~1-1.5 GB per snapshot.

- **Q** (@kushti, msg#398391): Why warning about snapshots before height 1,044,480?
  **A** (@kushti, msg#398391, 2023-06-14): Snapshots taken every 52,224 blocks. Currently only two nodes have pre-1,044,480 snapshots (released only on pre-5.0.10). After next snapshot (~1 month), more 5.0.12+ nodes will have snapshots available.

- **Q** (@Flying Pig, msg#398505): What happens if every node bootstraps? Wouldn't pre-snapshot txs be lost?
  **A** (@qx(), msg#398506): Yes, both pre-snapshot history and explorer function would require full-synced nodes. Explorers currently hardcoded to few nodes.

### Storage Rent & Pruning

- **Q** (@kushti, msg#398532): How does storage rent interact with pruning?
  **A** (@kushti, msg#398532, 2023-06-15): All UTXOs are max 4 years old; wallets/apps functional with blocks ≤4 years. Blocks >4 years only for history analysis. Upper bound for pruning without breaking other nodes' ability to find full history.

- **Q** (@qx(), msg#398543): Could you bootstrap with just filtered UTXO set (no tx data)?
  **A** (@kushti, msg#398545–546): Yes, possible. Would need efficiency check on filtering, but more performant than filtering blocks.

- **Q** (@qx(), msg#398424): Do light clients resync after pruning, or prune rolling windows?
  **A** (@kushti, msg#398425): Stateless clients prune all the time (rolling windows). Others require careful configuration.

### Block Time & Speed Optimization

- **Q** (@Unknown, msg#399159): If Ergo hits top 10, would network speed become bottleneck?
  **A** (@R, msg#399164): No throughput issue; 2-minute blocks prevent PoW attacks. Same speed under load.

### Client Diversity

- **Q** (@Shiv Chauhan, msg#398157): Does Ergo have client diversity or depend on single client?
  **A** (@Pulsarz, msg#398158–176): Single full node client (Scala). Sigma-rust endgame is Rust client, but requires feature parity. Multiple clients hard during active development; Bitcoin mostly runs reference client; Ethereum's multiple clients have caused bugs both ways.

- **Q** (@Aberg, msg#398190): Didn't non-reference Ethereum client prevent chain death once?
  **A** (@Aberg, msg#398190 + @Pulsarz, msg#398191–192): Yes; ref client had bug, others didn't. Cuts both ways—non-ref could have bug and fork.

### SigmaUSD & Collateralization

- **Q** (@Unknown, msg#398498–501): SigmaUSD fluctuates on DEX (e.g., $0.95 on 2023-05-19). Isn't that protocol failure?
  **A** (@Unknown, msg#398501): Confusing decentralized protocol with CEX liquidity. Protocol fixes peg at >100% collateral; 7 Seas DEX pair ≠ protocol behavior. SigmaUSD/USDT pair depends on market makers, not protocol.

### Storage Rent Mechanics

- **Q** (@Unknown, msg#398393): After next snapshot, will it be easier to bootstrap?
  **A** (@kushti, msg#398396): Yes, more 5.0.12+ nodes will have snapshots, increasing peer options.

---

## Links Shared

- [https://github.com/ergoplatform/eips/pull/76]: MrStahlfelge EIP suggestion for open sell contract (no known buyer).

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.12]: Ergo 5.0.12 release notes (UTXO snapshots, NIPoPoWs coming in 5.0.14).

- [https://docs.ergoplatform.com/node/modes/]: Node modes documentation (pruned, full, light).

- [https://github.com/ergoplatform/ergo/blob/e63ea9bd39b676e5ce601bb766e774a2dc8f3a78/src/main/resources/application.conf#L26]: Application config for snapshot settings.

- [https://ergo.aap.cornell.edu/en/addresses/2WB8dMU...]: Sigmanauts treasury address (on Ergo Explorer).

- [https://ergmonitor.com/]: Ergo Monitor (wallet/address tracker; 92 trackers at time of discussion).

- [https://skyharbor.io/]: SkyHarbor API endpoint (moved from skyharbor-server.net).

- [https://docs.ergoplatform.com/ergo-foundation-2022/#treasury]: Ergo Foundation treasury & monthly outgoings transparency report.

- [https://github.com/ZephyrProtocol/Zephyr]: Zephyr whitepaper (Monero + Djed hybrid stablecoin).

- [https://static1.squarespace.com/static/64707f0b29789a5633c33117/t/6486fe5a300eb9556ff3f54b/1686568545016/Zephyr_Whitepaper_v1.pdf]: Zephyr full whitepaper (comparisons to Luna/Haven/DAI).

- [https://cruxfinance.medium.com/introducing-crux-finance-d73847f5e1d1]: Crux Finance introduction (portfolio tracking dApp).

- [https://bit.ly/3J9H91Z]: Ergo NEWS article on Auction House V3 improvements.

- [https://bit.ly/3PbcjKd]: Ergo NEWS article on ErgoRaffle Kenya cooperative funding.

- [https://sigmanauts.com/]: Sigmanauts membership/contribution page.

- [https://ergonodes.net/list]: List of Ergo nodes (can see which run 5.0.12+).

---

## Unresolved Questions

- **Storage Rent Retroactivity**: @dayumbbbb flagged that storage rent is retroactive (shouldn't be), but no resolution given (msg#399086, 2023-06-18).

- **Client Diversity Timeline**: When will sigma-rust Rust client reach feature parity with Scala reference client? No ETA given.

- **Speed Optimization Roadmap**: Kushti mentioned community chats will discuss microblocks, sidechains, and faster confirmations after Ergoversary, but no specific proposals finalized yet (msg#398836–857).

- **Djed Improvements in New Iteration**: Kushti noted new Djed will be "presented" at summit but details withheld pending announcement.

- **Zephyr Viability**: Unknown whether Monero+Djed hybrid can survive bearwhale scenarios or flash attacks better than pure Djed (discussion ongoing, msg#398686–699).

- **SigmaUSD v2 Fate**: Kallo Shaman asked if v2 is still active/profitable post-launch, but no clear answer on current collateralization or user adoption.

- **Security Regulatory Status**: Discussion of whether Ergo could be classified as security under Howey test (has foundation, identifiable leader kushti, roadmap) but @dayumbbbb dismissed as short-term politics; unresolved (msg#398618–640).

---

## Community Highlights

- **Demurrage as Marketing Angle**: @dayumbbbb heavily promoted "Demurrage" terminology over "storage rent" as more compelling narrative for Ergo's unique monetary stability (msgs#398060–061, 399084–089). Community debated effectiveness.

- **Sigmanauts Treasury Activity**: Donations received (2M comet, 10 ERG, 80.8 ERG); qx() established transparency on holdings via Ergo Monitor integration (msg#398230–265).

- **Grand Gambit Gambling Stream**: qx() livestreamed probabilistic game ("Grand Gambit") on multiple platforms, losing/winning live with community participation and prizes (msg#397898–925, 398902–916). GG modified speed pots to allow >100 ERG stakes.

---