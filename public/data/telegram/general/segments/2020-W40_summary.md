# Ergo General Chat — 2020-W40 Summary

## Key Topics Discussed

- **Yoroi Wallet Integration**: Ergo support fully implemented in Yoroi Nightly with wallet creation, history, and transaction sending. Pending transaction display awaits explorer API updates. Public release expected shortly after pending transaction support resolves.

- **ErgoMixer v3.0.0 Release**: Major update shipping by October 6 with covert addresses, Tor support, multiple node distribution, backup/restore, data pruning, and backward compatibility. Over 110,000 ERG mixed cumulatively across v2 and v3.

- **Node Version 3.3.4**: Finalized with EIP-3 support, updated panel, MacOS crash fixes, memory leak improvements, and p2p efficiency gains. Release expected Monday, October 5. Version 3.3.5 follows with distributed signatures API.

- **DEX Development Status**: Core functionality and CLI for contracts completed. Matcher deployed. UI/UX remains bottleneck. Initial DEX likely embedded in desktop wallet rather than standalone. Wrapped token partnerships discussed but timeline uncertain.

- **Oracle Pools & Stablecoins**: Oracle Pool v1 operational with EF members and external participants. v2 running for Dexy Gold with GORT rewards. Stablecoin will be ERG-collateralized (not algorithmic as previously stated). Multiple oracle implementations planned including native Ergo oracles.

- **Hardware Wallet Support**: Jason Davies indicates support "coming soon" but no concrete timeline. Trust Wallet, Ledger, and other integrations discussed but not confirmed.

- **Ergo/Cardano Interoperability**: Oracle Pools and stablecoins launching on Ergo first, then adopted by Cardano on its own chain. Extended UTXO model enables features Cardano's account model cannot easily replicate. Charles Hoskinson confirmed partnership; both projects benefit from exposure through each other.

- **Mining & Difficulty**: GPU mining operational but prehash memory issues documented (8GB+ recommended). Hashrate ATH reached with lag in difficulty adjustment. Slightly more than one miner dominating sell pressure currently.

- **Exchange Listing Challenges**: Primary obstacle is listing fees rather than technical integration. Huobi podcast vote shows strong community support. PoW preference and recent regulatory scrutiny on new cryptocurrencies complicates large exchange onboarding.

- **Proof of Work Consensus & Storage Rent**: Discussed as core differentiators from PoS alternatives. Storage rent ensures long-term network sustainability beyond block rewards. No premine/presale tokenomics positioned as pure compared to Ethereum-style distributions.

- **Privacy & Zero-Knowledge**: Bulletproofs integration into ErgoScript enabling trustless zero-knowledge proofs for complex statements. Ring signatures and threshold signatures enable non-custodial, non-interactive mixing. Sigma Protocols provide flexible, privacy-centric cryptography.

- **Hard Fork Planning**: Minimal fork incoming with: (1) PoW memory-hardness fix, (2) security fixes, (3) contractual layer soft-fork support. No token swaps or new issuance. Update transparent to end-users; full node operators must update.

## Important Decisions or Announcements

- [@kushti, msg#55088, 2020-10-01]: 3.3.4 finalized and under review on GitHub PR #1198
- [@Sebastien, msg#55362, 2020-10-03]: Ergo full support deployed in Yoroi Nightly with all core features
- [@kushti, msg#55405, 2020-10-03]: 3.3.4 release scheduled Monday with EIP-3 support; 3.3.5 follows with distributed signatures API
- [@kushti, msg#55416, 2020-10-03]: DarkFund0 to launch with 3.3.5 preview; community member pledges (1k ERG each from kushti, filippounits, others)
- [@Unknown, msg#55574, 2020-10-04]: ErgoMixer v3.0.0 shipping by October 6 with covert addresses, Tor, backward compatibility
- [@Unknown, msg#55692, 2020-10-04]: Hard fork confirmed minimal; contains PoW memory fix, security patches, soft-fork contractual layer support
- [@kushti, msg#55119-122, 2020-10-01]: Acknowledges miner sell pressure; "working on updates"

## Technical Q&A Worth Preserving

**Mining & GPU Setup**
- **Q** (@Mike, msg#54427): "ERROR [main thread] Some of expected fields not present in /block/candidate" on miner setup
  **A** (@kushti, msg#54442-445): Related to GPU miner issue #66; use commit 7b0d424 before latest PR with specific git reset command

- **Q** (@Mike, msg#54475): Can compute_75 be used instead of compute_30; prehash crashing with GTX 1080
  **A** (@kushti, msg#54649-651): prehash memory-intensive; without it OS reclaims memory, impacting performance

- **Q** (@scalahub, msg#54652): 8GB GPU card with prehash never worked
  **A** (implicit): Prehash requires 8GB+ dedicated VRAM; Windows allocation issues common

**Node Setup & Configuration**
- **Q** (@Unknown, msg#55197): "Bad API key" error on wallet initialization following official setup video
  **A** (@kushti, msg#55201): Verify correct config file picked up; (@Hedges, msg#55199): Confirm ergo.conf path matches setup
- **Q** (@Unknown, msg#55206): Config file saved as .txt prevented proper node operation
  **A** (resolved): Correcting file extension to proper config format resolved issue

**Wallet Derivation & Migration**
- **Q** (@Unknown, msg#55397): Why CoinBarn→Yoroi works but Yoroi→CoinBarn fails
  **A** (@Sebastien, msg#55398-400): CoinBarn single-address vs Yoroi multi-address (HD wallet). Multiple address use breaks CoinBarn recovery.
- **Q** (@Unknown, msg#55402): Derivation paths explanation
  **A** (implicit): Different wallets use different BIP44 paths; HD wallets incompatible with single-address standards

**Magnum Wallet Fee Issue**
- **Q** (@Unknown, msg#55036): Custom fee setting ignored; always sends 0.001 ERG despite adjustment
  **A** (@kushti, msg#55052): Custom fee not implemented in Magnum; work-around via Yoroi or alternative wallets

**Transaction Mempool & Fee Markets**
- **Q** (@Unknown, msg#54768-771): Why Hotbit deposit required 1.5+ hours despite sent immediately
  **A** (@Dante22): Network confirmation lag common; deposits eventually arrive after multiple block confirmations

**ERG Contract Confusion**
- **Q** (@Unknown, msg#55005): How to add Ergo to Atomic Wallet; found ERC-20 contract on Etherscan
  **A** (@filippounits, msg#55016-19): ERG is pure PoW coin, not ERC-20. No Ethereum contract exists. Atomic Wallet doesn't support ERG yet.

**DEX & Trading Pairs**
- **Q** (@Kookster, msg#55169): What trading pairs available on launch DEX; timeline for other assets
  **A** (@kushti, msg#55170-171): Wrapped tokens and stablecoin will be primary pairs; partnerships under discussion for wrapped assets from other chains

**Oracle Pool Architecture**
- **Q** (@Unknown, msg#54662-665): Can Chainlink easily copy Oracle Pool design; must it rebuild from scratch like Eth 2.0
  **A** (@Unknown, msg#54664): Oracle Pools implementation tied to UTXO model; ChainLink would need fundamental protocol redesign, not simple copy

**Stablecoin Design**
- **Q** (@Eduardo, msg#54644-645): Is stablecoin an airdrop to ERG holders
  **A** (@Unknown, msg#54648): Stablecoin built on Ergo (like USDN on Waves), not airdropped; separate token with ERG collateral

**Interoperability Model**
- **Q** (@Ohi, msg#54615-622): Will Cardano's oracle pool run on Ergo or copy the model on Cardano
  **A** (@Unknown, msg#54618-620): Pools run on Ergo first; Cardano adopts model on its chain later. ADA/ERG highly interoperable but independent deployments. Separate stablecoin instances expected.

**Wrapped Token Timeline**
- **Q** (@Unknown, msg#55181): When will wrapped tokens (eADA, etc.) be offered; part of DEX rollout or separate
  **A** (@kushti, msg#55184-187): Wrapped tokens needed for full DEX tokenomics. eADA wrapping discussed; mixing eADA also planned.

## Links Shared

- [Ergo Platform](https://ergoplatform.org/en/): Official website
- [Ergo Explorer](https://explorer.ergoplatform.com/en/): Block explorer and address lookup
- [Ergo Forum](https://www.ergoforum.org/): Community research and proposals
- [Awesome Ergo GitHub](https://github.com/ergoplatform/awesome-ergo): Resources and tools
- [Ergo Platform Ecosystem Digest — September 2020](https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-september-2020/411): Monthly development summary
- [What Will DeFi Look Like in 10 Years?](https://ergoplatform.org/en/blog/2020-10-04-what-will-defi-look-like-in-10-years/): Strategic vision post
- [Ergo Use Cases](https://ergoplatform.org/en/use_cases/): Public-facing use case documentation
- [Welcome to Smart Money](https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/): Foundational philosophy piece
- [Oracle Pools: A New Oracle Model](https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263): Technical specification
- [ErgoMixer (ZeroJoin) Mixer Specification](https://www.ergoforum.org/t/ergomixer-zerojoin-mixer-for-erg-and-tokens/318/5): Privacy protocol details
- [EMURGO Partnership Announcement](https://emurgo.io/blog/emurgo-to-partner-with-ergo-and-build-blockchain-based-decentralized-financial-solutions): Cardano/Ergo collaboration
- [GitHub PR #1198 — 3.3.4 Release](https://github.com/ergoplatform/ergo/pull/1198): Node version review
- [GitHub PR #1199 — Compatibility Discussion](https://github.com/ergoplatform/ergo/pull/1199#discussion_r498738618): Wallet/node compatibility topic
- [ErgoCast Podcast](https://ergocast.io/): Community media (revived)
- [ErgoCast Episode 3 — Oracle Pools](https://ergocast.io/episode/decentralized-oracle-pools/): Deep dive with ScalaHub
- [Autolykos GPU Miner Issue #66](https://github.com/ergoplatform/Autolykos-GPU-miner/issues/66): Mining technical problem
- [Explorer API — Pending Transactions Ticket](https://github.com/ergoplatform/explorer-backend/issues/78): Wallet feature blocker
- [Yoroi Nightly Instructions — Cardano Discord](https://discord.gg/jChSTwJ): Testing builds channel
- [Ergo Wallets](https://ergoplatform.org/en/wallets/): Wallet support matrix

## Unresolved Questions

- **Exchange Listing Timeline**: Community frequently asked about mainstream exchange (Binance, Kraken, Gate.io, KuCoin) support. Contributors acknowledge high listing fees but no confirmed partnerships or timelines announced. Contributor RO claimed "October listing" but status unclear and not officially confirmed.

- **Ledger Hardware Wallet Support**: Jason Davies indicated "coming soon" (msg#54411) but no ETA provided. Multiple users noted security concerns holding ERG on centralized exchanges without hardware wallet option.

- **DEX UI/UX Timeline**: kushti identified UI as "biggest problem" for DEX (msg#55173) but specific delivery date remains TBD. Embedded wallet integration vs. standalone interface not finalized.

- **Full Node BIP44 Compatibility**: Migration between CoinBarn, Yoroi, and full node wallets blocked until BIP44 support released; kushti indicated "planned for this week" (msg#55387, Oct 3) but no confirmation of completion by week end.

- **Wrapped Token Partnerships**: kushti mentioned "some partnerships can be built" and "already discussing some" (msg#55179-180) for wrapped assets but no specific chains or dates committed.

- **Block Time Optimization Discussion**: Initiated regarding faster blocks vs. timestamp-dependent smart contracts, but consensus not reached. Trade-offs between throughput and application compatibility flagged as needing formal analysis.

- **Speed Improvements Prioritization**: kushti indicated multiple competing proposals (sub-blocks, sidechains, layer 2, faster confirmations) will be discussed post-Ergoversary but no decision made on technical direction.

- **Mixer Covert Address Security**: v3.0.0 ships with covert address feature and "security bug fix (not exploited ever)" per announcement (msg#55574) but detailed disclosure timeline TBD.

---

**Note**: Week-of-2020-W40 (Sept 28 — Oct 4) was highly active with 823 messages. This summary prioritizes technical content, roadmap updates, and substantive Q&A over price speculation and casual discussion. Ergo core team (kushti, Sebastien) active in responding to community; significant progress on Yoroi integration and node releases confirmed.