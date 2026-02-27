# Ergo Developer Chat Summary — 2025-W31

## Key Topics Discussed

- **Sub-blocks protocol development**: kushti added API methods for sub-block and best sub-block chain transactions, optimized code, and began composing a whitepaper for the feature targeting the 6.0.1 protocol candidate.

- **ChainCash progress**: Merged pull requests #60 and #62, discussing first end-to-end applications and UI implementations. Transaction collateralization and reserve configurations are now functional on mainnet.

- **Merged-mined sidechains (Braid framework)**: Finished first iteration of whitepaper and began specifying Ergo's merged-mined framework for sidechain data management using NFT-identified boxes and transaction class 2 (ordering block–only spendable).

- **Nautilus Wallet**: Added Banxa fiat on-ramp button, JSON transaction copying in dev mode, and fixed token blacklist bug. Fleet SDK v0.12.0 released with ErgoTree construction from ergoc JSON output.

- **Paideia DAO governance**: Fixed proposal change detection bug causing slow fetches; corrected virtual mempool parallelism issue for stable UX.

- **Game of Prompts & Celaut**: UI restyled with cancellation functionality WIP; poker mode finalized. Celaut service windows compatibility improved; Mac M1 testing starting next week.

- **Lithos Protocol**: Completed fraud proof contract testing, advancing difficulty contract (last ErgoScript contract). Preparing testnet launch pending off-chain code completion.

- **Minotaur Wallet v3.0.0 → v3.0.1**: Multi-sig communication format updated; v3.0.0 removed due to white screen bug. Includes AirDrop dApp, utils extraction, and transaction validation improvements.

- **Keystone hardware wallet integration**: Final serialization/deserialization for Keystone custom format; JSON support added to sigma-rust (PR #834). Nautilus integration PR pending; full integration tests to follow.

- **Metadata fragmentation vs. centralization**: Discussion on centralized metadata repository for token logos/names: fragmentation preserves censorship-resistance but multiple repos create maintenance burden.

- **Node infrastructure**: Ergonodes.net restored after 1-year hosting sponsorship. Public node list reflects reachable IP:port addresses; private nodes run without listing. UPnP handles dynamic IPs; CGNAT can block port forwarding.

## Important Decisions or Announcements

- [@kushti, msg#35228, 2025-07-30]: **6.0.1 protocol candidate ready for review** ([PR#2222](https://github.com/ergoplatform/ergo/pull/2222)); sonatype publishing fixed; sub-block API methods merged.

- [@kushti, msg#35232, 2025-07-30]: **Weekly Ergo Developers chat scheduled** discussing financial contracts feedback, 6.0 soft-fork, input/ordering blocks WIP, sidechains, and L2 research.

- [@arobsn, msg#35232, 2025-07-30]: **Fleet SDK v0.12.0 released** with ErgoTree named constant replacement support; ergoc v0.5.0 adds JSON output.

- [@Michael, msg#35243, 2025-07-30]: **Lithos Protocol fraud proofs testing complete**; difficulty contract last ErgoScript piece before testnet launch.

- [@vorujack, msg#35244-35245, 2025-07-30]: **Minotaur v3.0.0 released, immediately patched to v3.0.1** due to white screen bug; multi-sig format incompatible with older versions.

- [@kushti, msg#35277, 2025-08-01]: **Ergonodes.net hosting secured for 1 year** via sponsor (kushti_ru); geographic distribution shows strong presence in Singapore.

- [@Pgr456, msg#35255, 2025-07-30]: **Keystone serialization support merged into sigma-rust** awaiting final build; Nautilus integration PR imminent.

- [@kushti, msg#35262, 2025-07-31]: **PR#2234 approved and merged** into 6.0.1 candidate.

## Technical Q&A Worth Preserving

- **Q** (@_): How do light clients work with known peers lists? Are they served differently?  
  **A** (@kushti, msg#35248): Active connections still work; some failed messages are expected. Can proceed with transactions using individually set collateralization on mainnet with low reserve options.

- **Q** (@Michael): Should metadata (token names, logos) live in a centralized Ergo GitHub repo instead of fragmented per-dApp?  
  **A** (@c8, msg#35198): Fragmentation provides censorship resistance. [@Pulsarz, msg#35199-35200]: A base repo with forking/extension capability is preferable; allows customization while reducing duplication.

- **Q** (@_): What's the minimum testnet.conf for running an Ergo node?  
  **A** (@Michael, msg#35215-35217): Minimal config requires `mining = false` and known peers list; start with `java -jar -Xmx2G ergo-6.x.x.jar --testnet -c ergo.conf`. Heap can be as low as 512MB; 2GB is not mandatory.

- **Q** (@_): Why are failed peer connections appearing (192.168.x, 100.x IPs)?  
  **A** (@kushti, msg#35248): Normal behavior; indicates active sync. [@Aberg, msg#35293]: Unreachable nodes listed via p2p; private IPs broadcast when not explicitly configured in config.

- **Q** (@Josemi): Can Nautilus expose user-configured explorer URL via Fleet SDK?  
  **A** (@arobsn, msg#35252): No, only UI-based configuration supported.

- **Q** (@_): How many Ergo nodes exist and do pool miners require individual nodes?  
  **A** (@HQΣr, msg#35283): Solo miners require nodes; pool miners connect to mining pool node. [@Pulsarz, msg#35285]: Ergonodes.net lists public API nodes only; private nodes without port forwarding aren't listed but function normally.

- **Q** (@kushti, msg#35297): Is Python 3.11 required for Celaut, or does 3.12 work?  
  **A** (@Josemi, msg#35302): Python 3.11 required; use `python3-venv` for isolation. Ubuntu 22 recommended; Ubuntu 24.04 has docker version compatibility issues.

- **Q** (@MGpai): Is the new `/inputs` API response breaking existing methods by adding full box details?  
  **A** (@kushti, msg#35268): Suggests creating new endpoints; unclear if existing consumers will break. [@MGpai, msg#35281]: Clarified `boxId` and `spendingProof` persist; no removal of existing keys. [@kushti, msg#35273]: Confirmed `deepMerge` aligns with `IndexedErgoTransaction` schema.

## Links Shared

- [vxtwitter.com/educhainmag/status/1949316139269398749](https://vxtwitter.com/educhainmag/status/1949316139269398749): External education content (context unclear from chat).

- [ergoplatform.org/pull/2233](https://github.com/ergoplatform/ergo/pull/2233): Sub-block PR under review.

- [ergoplatform.org/pull/2231](https://github.com/ergoplatform/ergo/pull/2231): Merged into 6.0.1 candidate.

- [ergoplatform.org/pull/2222](https://github.com/ergoplatform/ergo/pull/2222): **6.0.1 protocol candidate ready for review**.

- [BetterMoneyLabs/chaincash-rs/pull/60](https://github.com/BetterMoneyLabs/chaincash-rs/pull/60): ChainCash PR merged.

- [BetterMoneyLabs/chaincash-rs/pull/62](https://github.com/BetterMoneyLabs/chaincash-rs/pull/62): ChainCash PR merged.

- [BetterMoneyLabs/braid/whitepaper](https://github.com/BetterMoneyLabs/braid/blob/master/whitepaper/whitepaper.pdf): **Merged-mined sidechains (Braid) whitepaper first iteration**.

- [GitCircles/GitCircles-Roadmap](https://github.com/GitCircles/GitCircles-Roadmap/): Roadmap published.

- [x.com/ergo_platform/status/1950329130093879435](https://x.com/ergo_platform/status/1950329130093879435): Dev funding discussion announcement.

- [ergoplatform.org/pull/2234](https://github.com/ergoplatform/ergo/pull/2234): Approved and merged into 6.0.1.

- [ergoplatform.org/pull/2235](https://github.com/ergoplatform/ergo/pull/2235): Input box proofs API enhancement (format discussion ongoing).

- [ergoplatform.org/issues/2230](https://github.com/ergoplatform/ergo/issues/2230): Potential API behavior issue flagged for review post-6.0.1.

- [ergoplatform.org/pull/834](https://github.com/ergoplatform/sigma-rust/pull/834): Keystone JSON serialization support (reduced transaction format).

- [ergoforum.org/t/sidechain-ideas-global-transfer-policies/5199/4](https://www.ergoforum.org/t/sidechain-ideas-global-transfer-policies/5199/4): Global Transfer Policies via soft-fork proposed using sidechain data box pattern.

## Unresolved Questions

- **API response format compatibility** [@MGpai, msg#35235-35281]: Ongoing clarification whether new `/inputs` endpoint breaks existing API contracts; PR review flagged to proceed post-6.0.1 release [@kushti, msg#35261].

- **Metadata repository governance**: No consensus reached on centralized vs. fragmented approach; discussion deferred pending community feedback.

- **Sidechain data box semantics** [@kushti, msg#35274-35275]: Clarity needed on whether current input/ordering block documentation sufficiently explains NFT-identified box updates, class 2 transaction constraints, and R4/R5 register usage for refresh logic.

- **Sub-block whitepaper scope**: Still in composition; unclear what protocol milestones depend on its finalization.