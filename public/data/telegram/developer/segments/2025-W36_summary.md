# Ergo Developer Chat Summary — 2025-W36

## Key Topics Discussed

- **Sub-blocks (input blocks) and p2p protocol rework**: [@kushti, msg#35756]: P2P layer heavily reworked with announcements now done via INV messages; transactions stored in mempool are not re-downloaded, only diffs. Testing and polishing ongoing. Further rework needed for more aggressive propagation of input blocks [@kushti, msg#35754].

- **ChainCash/Basis contract design**: [@kushti, msg#35758-35759]: Reworked Basis design focused on micropayments and p2p network incentivization using minimally trusted trackers to track mutual debt off-chain. On-chain contract-based redemption prevents double-redemptions; tracker commits state digests to chain periodically. Contract code to be published.

- **Hermes (real-time box streamer)**: [@anon_br Σ, msg#35762]: Real-time and mempool-aware box streamer on top of indexed node, initially designed for Machina Finance but generic enough for any dApp and to replace GraphQL on Nautilus.

- **EPMW hardware wallet progress**: [@nitram147, msg#35767-35779]: Significant firmware updates including entropy generation via multiple sources (button taps, clock phase shift, thermal noise), transaction signing with Schnorr algorithm, and transaction parser in development. Timeline uncertain due to limited availability (4-6 month cycles), but targeting completion in upcoming months.

- **MCP server for dApp development**: [@kushti, msg#35787]: Proposal to use custom MCP server fed with solutions at different levels (contracts, off-chain, UI) to generate dApp code with LLM. [@Marc the Shark, msg#35785]: MCP server can be used for agent trading and various tasks like crossing Rosen Bridge or purchasing from MewMart if APIs/code tools are available.

- **Testnet node connectivity and configuration**: [@Patato, msg#35722-35724]: Initial node setup issue resolved—testnet peers are on ports 9020/9021, not 9022 by default. After port configuration update, node synced successfully.

- **DevNet seed node issues**: [@kushti, msg#35725, msg#35754]: Redeployed DevNet seed node; input block delivery check logic customization needed. P2p protocol later identified as not aggressive enough for propagating input blocks.

- **CodeUTXO.com infrastructure**: [@qx(), msg#35739-35741]: VM crash over weekend caused downtime; explorer and node catching up. Explorer at explorer.codeutxo.com now monitoring added.

- **Sub-blocks log analysis**: [@kushti, msg#35742]: Initiative to collect stats/visualizations on sub-blocks (e.g., full blocks assembled from sub-blocks, orphaned sub-blocks). [@Patato, msg#35743]: Volunteer willing to use AI/Python scripts with proper technical specifications.

- **Stability Workshop and Dexy papers**: [@kushti, msg#35791]: 1st Stability Workshop date/location chosen; remote participation now allowed. Call for papers on Dexy Protocol.

- **Community chat format shift**: [@qx(), msg#35732]: Ergo PoW AMA rebranded as "Ergo Community Chat" (Thursdays, 1pm UTC). Format includes dev update overviews, community AMA, and Ergo-centric topics. Seeking ecosystem core and community developers to present updates.

- **CyberVerse server maintenance**: [@pxl, msg#35805]: Servers offline Sept 6 for ~30 days for major update; combat system v1 and HUD redesign in progress.

## Important Decisions or Announcements

- [@kushti, msg#35747, 2025-09-02]: Weekly Ergo Developers chat scheduled Wed, Sep 3rd, 1PM UTC to discuss development updates, research, upcoming 6.0 protocol soft-fork, input/ordering blocks, sidechains, L2, and financial contracts feedback.

- [@kushti, msg#35765, 2025-09-03]: GitCircles contributors proceeding with initial prototype; Basis contract and writing to be presented this week, followed by off-chain tests/bots; merged mined sidechains spec to follow from next week.

- [@kushti, msg#35797-35799, 2025-09-04]: ChainCash Telegram group created (https://t.me/chaincashtalks) for roadmap sharing and contract testing. Discord bridge not yet available.

- [@kushti, msg#35788, 2025-09-03]: Seed node update scheduled for next day; users requested to update their nodes.

## Technical Q&A Worth Preserving

- **Q** (@kushti, msg#35728): What is the state of MCP server and how can it be used?
  **A** (@Marc the Shark, msg#35783-35785): MCP server is live on git with hackathon video use cases; can be used for agent trading, crossing Rosen Bridge, MewMart purchases, and various dApp tasks if APIs/code tools are provided. Rosen, Mew MCPs, and others can be built to enable LLM tool execution.

- **Q** (@kushti, msg#35761): What is Hermes?
  **A** (@anon_br Σ, msg#35762-35763): Real-time and mempool-aware box streamer on top of indexed node; initially designed for Machina Finance but generic for any dApp; can replace GraphQL on Nautilus. Repo: https://github.com/arobsn/hergmes

- **Q** (@kushti, msg#35744): Plan to use AI agent like Crush for log analysis; offering paid DeepSeek API access.
  **A** (@Patato, msg#35745): Claude AI works best for such tasks; DeepSeek/ChatGPT require own technical knowledge which requester lacks. Would need detailed log message specs and expected statistics.

- **Q** (@kushti, msg#35735): Is CodeUTXO site working?
  **A** (@qx(), msg#35738-35741): Site was down due to VM crash over weekend. Now back up with node catching up and explorer at explorer.codeutxo.com. MCP gateway and monitoring to be added.

- **Q** (@Patato, msg#35810, 2025-09-05): Seeing "invalid modifiers" messages and peer penalizations at 300ms latency to devnet seed; logs provided.
  **A** (@kushti, msg#35811, msg#35816): Asked if on latest commit; will investigate logs. Issue appears related to p2p layer behavior with high-latency peers.

## Links Shared

- [https://github.com/charmbracelet/crush]: Crush tool, an agent-based CLI tool for various tasks.
- [https://discord.com/channels/668903786361651200/1372218573946093568/1379122814237278258]: CodeUTXO MCP resources (Discord channel).
- [https://github.com/GitCircles/GitCircles-Github/issues/1]: GitCircles persistence tracking.
- [https://explorer.codeutxo.com/]: CodeUTXO Ergo Explorer.
- [https://github.com/arobsn/hergmes]: Hermes real-time box streamer repository.
- [https://www.ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221]: Forum thread on p2p economies and free banking initiatives.
- [https://workshop.stability.nexus]: 1st Stability Workshop details and paper submission.
- [https://x.com/ergo_platform/status/1962663819357900911]: Ergo Community Chat announcement (Thursdays, 1pm UTC).
- [https://x.com/ergo_platform/status/1963583803529568279]: Stability Workshop announcement.
- [https://t.me/chaincashtalks]: ChainCash Telegram group.
- [https://termbin.com/ccvc, https://termbin.com/rqgi, https://termbin.com/m1ia, https://termbin.com/3vh9]: Log excerpts from DevNet node testing.
- [https://8005968aa229.ngrok-free.app/info]: Patato's node info endpoint via ngrok tunnel.

## Unresolved Questions

- **Input block propagation aggressiveness**: [@kushti, msg#35754]: p2p protocol "not aggressive enough in regards with propagating input blocks"—rework needed but incomplete as of 2025-09-02.

- **DevNet seed node database crashes**: [@kushti, msg#35804]: Database layer occasionally crashes on seed node due to uncaught exception; investigation ongoing as of 2025-09-05.

- **High-latency peer "invalid modifiers" penalization**: [@Patato, msg#35810-35815]: Nodes at ~300ms latency experiencing "invalid modifiers" errors and peer blacklisting; root cause under investigation as of 2025-09-06.

- **EPMW timeline and integration**: [@nitram147, msg#35779]: Uncertain delivery timeline; seeks dedicated time. Wallet integration into Nautilus and other wallets TBD pending HW device shipment to developers.

- **Sub-blocks log analysis execution**: [@kushti, msg#35742-35746]: Initiative launched but specific implementation plan not finalized; awaiting Patato's availability and detailed technical specs.

- **CyberVerse server downtime duration**: [@pxl, msg#35805]: ~30-day downtime announced but exact end date not specified.