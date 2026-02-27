# Ergo Developer Chat Summary — 2025-W47

## Key Topics Discussed

- **Sub-blocks Implementation & Devnet Testing**: kushti testing reworked sub-blocks implementation in local devnet with two mining peers, polishing code before inviting additional contributors (~2-3 days out). Whitepaper work ongoing. Focus on forking processing rework and stability validation before public expansion.

- **Ergo 6.0 Testnet Launch & Features**: New testnet relaunched with 6.0 activated from first block. Reference client improvements include fix for `/scan/p2sRule` handling long p2s addresses (>256 chars). Contributor invitation pending PR review for 6.0.2.

- **Explorer Backend Optimization & Query Performance**: Major effort to optimize heavy database queries (address transactions, box lookups by token/ErgoTree) through strategic indexing. 16GB RAM node achieving 14-second response on previously slow queries via index tuning; 32GB node being tested for full query suite. Trade-off analysis between RAM upgrades vs. new index creation ongoing.

- **AI-Assisted Development Contribution Guidelines**: Community discussion on establishing `AGENTS.md` files across Ergo repos to govern AI-generated PRs. Concerns raised about scope creep (unrelated file changes), code quality burden on reviewers, and dependency on human verification before payment. Proposal for AI-friendly bounties (e.g., ErgoScript examples) vs. consensus-critical code lockdown.

- **Oracle Pool v1/v2 & Dexy Stable Launch**: USE stablecoin (DexyUSD with DexyGold-like parameters) launching soon. Palmyra integration with Chainlink partnership for on-chain warehouse receipts and trade financing via proof-of-reserve. Plan to build native Ergo Oracle infrastructure post-launch using raised capital.

- **Lithos Protocol Mining**: Testnet 1.1 released with bug fixes, stratum error handling improvements, and simplified config. Cheese Enthusiast leading development; mining integration path clarifying.

- **Fleet SDK & Cryptographic Dependency Updates**: tsup replaced with tsdown for faster builds; @noble/* and @scure/* crypto dependencies bumped to v2 with significant performance gains. v1 stable release in sight; v2 API planning underway (greenhat/arobsn leading).

- **Nautilus Wallet Keystone Integration Security Concerns**: 160+ transient dependencies from Keystone integration represent supply chain attack surface. anon_br investigating mitigation strategies before merge.

- **NIPoPoWs & Zero-Knowledge Protocol Research**: kushti exploring bulletproof verification in ErgoScript for compact Sigma protocols; enables range proofs and generic zero-knowledge statements without trusted setup. Application to hybrid contracts (on-chain execution + off-chain proof verification) for sensitive data avoidance.

- **Basis & ChainCash Development**: Forum box scan testing, adding tracker box scan functionalities. Incentives for node operators and peer-to-peer activities being formalized.

- **Degens.World Project Launch**: Arohbe announcing 4 demo dApps built on Ergo (mostly live, ErgoPay support). AI contract builder using Fleet SDK available at ergolabs.degens.world for testing.

- **Cornell AAP BRICK Ecosystem**: qx() showcasing multi-faceted local currency system: Kintsugi staff appreciation portal, student BRICK portal (auto wallet creation), PoS integration, marketplace, fabrication shop incentives. Scaling to 3D filament, bursar, café payments.

- **Rosen Bridge Development**: Cleanup service TypeScript migration, fraud/slash tx work-in-progress; box-tracker implementing MempoolTracker & TxPotTracker with specialized box extractors; guard/rosen/watcher app UI improvements and validation fixes.

- **Network P2P & Messaging Layer Discussion**: No messaging layer or DHT storage currently on Ergo p2p network. kushti flagging 2019-20 discussions as worth reviving for cross-node coordination use cases (Arohbe exploring workaround via `/allpeers` node name lookup).

- **Funding for Ergo Development Raffle**: 9000 ERG goal met (100% funded, 5 contributors). Bounties available; GitHub repo: ErgoDevs/Ergo-Bounties. Additional bounty channel proposed; kushti considering "AI-friendly" labels for documentation/refactoring tasks.

## Important Decisions or Announcements

- [@kushti, msg#36941, 2025-11-18]: Subblocks devnet relaunched at 213.239.193.208:9058. Mining peer addition and contributor invitations pending stability validation.

- [@kushti, msg#36953 via DiscordBridge, 2025-11-18]: Weekly Ergo Developers chat confirmed for Wed, Nov 19th, 1PM UTC. Feedback requested on financial contract development, input/ordering blocks, sidechains, L2, and AI research.

- [@kushti, msg#36968-69, 2025-11-19]: Showtime vote (60+ participants) favors Thursdays at 5pm UTC. Dev chat timing alignment being discussed with @AndyLowe.

- [@cannon_q, msg#36954-56, 2025-11-18]: Explorer backend PR #260 compensation paid directly by kushti (avoiding DevDAO overhead per recommendation).

- [@Cheese, msg#37015 via DiscordBridge, 2025-11-19]: Lithos Protocol testnet 1.1 released (bug fixes, stratum improvements, config simplification). https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v1.1-test

- [@Armeanio, msg#36885, 2025-11-17]: Lithos-Client v1.0-test tagged and released.

- [@Arohbe, msg#36972 via qx(), 2025-11-19]: Degens.World officially announced with 4 live demo dApps and ergocentric vision. Full blog overview available.

- [@qx(), msg#37019-20, 2025-11-19]: Dev chat was busy and productive. Video update planned for later in week.

- [@cannon_q, msg#37125, 2025-11-22]: DuckPools v2 proxy contracts deployed & audited with new fee structure. Database resync underway (~24 hours); dashboards & portfolio stats coming.

- [@kushti, msg#37131-32, 2025-11-22]: PR #2255 for new mining reward API route under review. Approval pending careful inspection; documentation needed for miner reward tracking (internal wallet limitation noted).

## Technical Q&A Worth Preserving

- **Q** (@Benzel, msg#36876): Stuck on initial setup before running jar.  
  **A** (@kushti, msg#36877): Confirm jar provision and config details.  
  **Context**: TheStophe later resolved via `--testnet` flag issue (msg#36928).

- **Q** (@ArØhβΣ, msg#36881): Is it possible to send messages between nodes via config flag without knowing IP?  
  **A** (@kushti, msg#36883): No messaging layer on Ergo p2p network. Discussed in 2019-20; proper time to revive discussions.  
  **Workaround** (@ArØhβΣ, msg#36884): Using `/allpeers` + node name search + handshake confirmation works temporarily.

- **Q** (@TheStophe, msg#36895): Is testnet still running on ports 9020/9052, or 9023?  
  **A** (@qx(), msg#36896-97, 36899): Configurable per node; 9052 standard for UI. Must broadcast on designated port.

- **Q** (@TheStophe, msg#36900-02): No peers available; added known peers; no sync.  
  **A** (@qx(), msg#36905-14): Simplified config provided; key fixes: `declaredAddress` (external IP), `apiKeyHash`, `nodeName`. Firewall rule needed on port 9020.  
  **Resolution** (@TheStophe, msg#36928): Missing `--testnet` execution flag was root cause.

- **Q** (@Alien, msg#36893): Is USE stablecoin similar to SigmaUSD? How does it work?  
  **A** (@T Mas, msg#36894): Check ChainCash/Basis chats for mechanics.  
  **Clarification** (@kushti, msg#37034-35): USE is essentially DexyUSD with same parameters as Dexy Gold.

- **Q** (@Marc the Shark, msg#36882): Could AVL trees be used as code books for LLM RAG data on-chain?  
  **A** (implicit): Viable for storage; decoding API needed for user access.  
  **Context**: Storage rent economics & query efficiency TBD.

- **Q** (@Josemi, msg#37039, 37042): Template ID differs when using 32 zeros vs. other 32-char hex in Bene contract. Why?  
  **A** (@kushti, msg#37043, 37049-50): Compiler optimization likely stripping unused `isErgBased` variable from ErgoTree when value is all zeros; length difference causes template change.  
  **Resolution** (@Josemi, msg#37107): Will work with both template IDs; 0s treated as empty `Coll[Byte]`.

- **Q** (@anon_br, msg#36976): Help needed with GitHub issue #2254 (mempool behavior on block rollback).  
  **A** (@kushti, msg#37047): Transactions from rolled-back blocks resubmitted to mempool (respecting size limits). AI-assisted explanation provided.

- **Q** (@Pgr456, msg#36958): AI-generated PRs mixing changes, unrelated file modifications, poor descriptions. How to enforce standards?  
  **A** (@kushti, msg#36960): Propose `AGENTS.md` in every repo with rules: AI only on tests/docs/refactoring; consensus-critical code isolated from AI.

- **Q** (@Pgr456, msg#37119): How to optimize slow address/box queries further?  
  **A** (@Pgr456): Hash comparison index approach: `hashtextextended(address, 0)` with composite index on (hashtext, timestamp, spent, tx_id). Requires query modification.  
  **Trade-off** (@qx(), msg#37121): Current goal to reduce infrastructure costs by moving off Hetzner; query optimization being prioritized.

- **Q** (@qx(), msg#37054): What's the command for the heavy query optimization?  
  **A** (@qx(), msg#37111): Four major queries tested on 32GB node with new indexers. Three stable; last one times out occasionally but cached locally.

- **Q** (@Cheese, msg#37131): Can API route from PR #2255 be added to mainnet/testnet builds?  
  **A** (@kushti, msg#37132): PR looks good; review pending. Complexity: internal wallet doesn't track miner rewards; needs external tracking. Documentation required.  
  **Follow-up** (@Cheese, msg#37133): Lithos client will track; Nautilus should scan mining reward contract for new UTXOs.

- **Q** (@kushti, msg#37081): Any persistent AVL+ trees implementation in Rust?  
  **A**: No direct response; context suggests `AVL trees` are Ergo-native construct, not a missing dependency.

## Links Shared

- [https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v1.0-test]: Lithos-Client v1.0-test release (Armeanio, msg#36885).

- [https://github.com/Lithos-Protocol/Lithos-Client/blob/master/TestnetNode.md]: Simplified Lithos testnet node setup documentation (Arohbe, msg#36915).

- [https://github.com/ErgoDevs/Ergo-Bounties/tree/main]: Open bounties repository (Glasgow, msg#36939).

- [http://213.239.193.208:9058/info]: Subblocks devnet endpoint (kushti, msg#36941).

- [https://www.ergoforum.org/t/a-unified-approach-to-incentivizing-ergo-nodes-depin-p2p-networks-ai-tasks-and-so-on/5286/1]: Forum post on incentivizing Ergo nodes & p2p activities (kushti, msg#36966).

- [https://x.com/degens_worldx/status/1990914142203482444]: Degens.World announcement (qx(), msg#36972).

- [https://degens.world/blog/welcome-to-degens-world]: Degens.World vision overview & demo apps (qx(), msg#36972).

- [https://x.com/lithosprotocol/status/1990974720909672567]: Lithos protocol update (kushti, msg#36974).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1086]: Sigmastate PR with test pass, needs review (C B, msg#36942).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1088]: Sigmastate PR (C B, msg#36942).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1089]: Sigmastate PR (C B, msg#36942).

- [https://github.com/ergoplatform/explorer-backend/pull/260]: Explorer backend PR, compensation pending (C B, msg#36942).

- [https://github.com/ergoplatform/explorer-backend/pull/261]: Explorer backend PR needing review (C B, msg#36942).

- [https://github.com/ergoplatform/ergo/issues/2254]: Mempool behavior on block rollback (anon_br, msg#36976).

- [https://deepwiki.com/search/on-box-subscription-hergmes-qu_e601e815-0370-4a05-966b-f65469ad4dc2]: AI-assisted explanation of on-box subscription Hermes (anon_br, msg#37051).

- [https://ergolabs.degens.world]: Ergo Labs with sample contracts & AI contract builder (Arohbe, msg#37018).

- [https://blog.qiweimao.dev/blog/lora-network-file-transfer]: LoRa network file transfer research (kushti, msg#37117).

- [https://github.com/ergoplatform/explorer-backend/issues/265]: DB optimization tracking issue (kushti, msg#37043).

- [https://github.com/ergoplatform/explorer-backend/issues/264]: AI-friendly issue (explorer, msg#37044).

- [https://github.com/ergoplatform/explorer-backend/issues/263]: Explorer backend issue (kushti, msg#37045).

- [https://github.com/kushti/dexy-stable/pull/4]: Dexy stable PR merged (kushti, msg#36046).

- [https://github.com/ergoplatform/ergo/pull/2255]: Mining reward API route PR under review (Cheese, msg#37131).

- [https://github.com/StabilityNexus/BenefactionPlatform-Ergo/commit/ea59d6a1d1cc26eb16977d41742f287770dc7657]: Bene contract with template ID investigation (Josemi, msg#37042).

- [https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v1.1-test]: Lithos testnet 1.1 release (Cheese, msg#37015).

- [https://docs.ergoplatform.com/dev/lang/python/]: Ergo Python documentation (DiscordBridge, msg#37128).

- [https://github.com/ergoplatform/ergo-wallet-app]: Ergo Wallet App repository (DiscordBridge, msg#36952).

- [https://github.com/ergoplatform/ergo-wallet-app/pull/183]: Ergo Wallet App PR from Sept 2024 (DiscordBridge, msg#37123).

- [https://github.com/ergoplatform/ergo-wallet-app/issues/189]: iOS wallet issue tracking (DiscordBridge