# Ergo General Chat — 2025-W29 Summary
**Period:** 2025-07-14 to 2025-07-20  
**Total Messages:** 827  
**Participants:** 59

---

## Key Topics Discussed

### DexyGold Launch
- **[@Ergo NEWS $ERG, msg#567571, 2025-07-15]:** DexyGold Beta went live on mainnet as a gold-pegged stablecoin backed by Bank and Liquidity Pool contracts plus upgraded Gold v2 oracle. Minting available on mainnet with trading on Crystal Pools; additional stablecoins (DexyUSD, etc.) planned.
- **[@kushti khushi, msg#567659, 2025-07-15]:** DexyGold bank reserves increasing nicely.
- **[@The Horticulturalist, msg#567515, 2025-07-14]:** Argued DexyGold and Gluon should carry lower interest rates than SigmaUSD due to gold-peg inflation hedge; lower risk premium benefits lenders with reduced taxation.

### Rosen Bridge & Cross-Chain Integration
- **[@Armeanio, msg#567995 & msg#567996, 2025-07-17]:** Indicated Rosen Bridge may have "backdoored all 3" major chains (implied BTC, ETH, others) based on cryptographic integration; noted as major achievement.
- **[@HQΣr, msg#567236, 2025-07-14]:** Asked about Rosen SDK timeline for FlowPay integration to avoid double-work integrating other chains.
- **[@Armeanio, msg#567240, 2025-07-14]:** Rosen SDK is a "stepchild" between other tasks; no estimates; joked "two weeks."
- **[@DiscoverErgo, msg#567960, 2025-07-17]:** Liquidity pool integration on Cardano needed; rsERG/ADA pair lacks depth for whale participation.

### EIP-50 / Protocol v6.0 Upgrade
- **[@kushti khushi, msg#567919, 2025-07-17]:** 32 epochs voting period required for soft fork activation.
- **[@Man ish, msg#568239 & mx (Discord), msg#568246, 2025-07-20]:** First 32 epochs is voting window; activation period another 32 epochs; protocol live expected near October Ergo Meetup. Block size, computational cost changes are dynamic epoch-to-epoch; difficulty retarget reduced from 1024 to 128 blocks.
- **[@Richi, msg#568209, 2025-07-20]:** Asked if falling below 90% support for 2-3 epochs out of 32 impacts activation.
- **[@kushti khushi, msg#568217, 2025-07-20]:** 90% support within 32 × 1024 blocks required to pass.

### InfraDAO (P2P Infrastructure)
- **[@qx(), msg#567850, 2025-07-17]:** InfraDAO launched with purpose to create p2p load-balanced nodes/explorers globally, retire EF infrastructure funding dependency, handle testnet/mining infra, integrate community explorer hosting.
  - Requirements: ≥50 Mbps upload, ≤100ms ping, public static IPv4, SSH/terminal access (Ubuntu, tmux, docker).
  - Initial: 4 members with imaged hardware ready to deploy.
  - Load balancing live: `explorer-p2p.ergoplatform.com`, `node-p2p.ergoplatform.com`, `graphql-p2p.ergoplatform.com`, `api-p2p.ergoplatform.com`.
  - Next: qx() to mint DAO token, create DAO on Paideia.

### Bulletproof Implementation & Privacy (DarkERG Concept)
- **[@kushti khushi, msg#567804 & msg#567805, 2025-07-16]:** Proposed bulletproof-based range proof verification in ErgoScript; if successful, enables DarkERG—privacy system with virtual UTXOs, hidden amounts, stealth addresses, 1:1 trustless swaps with ERG.
  - Issued bounty on GitHub: https://github.com/ergoplatform/sigmastate-interpreter/issues/1032
- **[@Ergochampion, msg#567823, 2025-07-16]:** If mineable privacy sidechain "DarkErgo" materialized, would be "massive pumpenomics."

### Wallet & Hardware Support
- **[@J. P. Costa, msg#567582 et seq., 2025-07-15]:** Ledger Nano S discontinued; EF stopped supporting it. S+ still works. Can restore seed to Nautilus or other hardware wallets.
- **[@Glasgow, msg#567591, msg#567596 & msg#567597, 2025-07-15]:** Only Nano S discontinued (too small to build on). No 20-token UTXO limit for S+. Can restore S seed to S+.
- **[@cannon_q, msg#567585, 2025-07-15]:** Keystone as alternative hardware option; testing ongoing. Also suggested old Android with mobile wallet.
- **[@Glasgow, msg#567609, 2025-07-15]:** Keystone signing/submission work ongoing ~1 month; `arobsn/keystone-ergo-js` released 2 weeks ago; hopes approval submission soon.
- **[@Flying Pig, msg#567717, msg#567728, 2025-07-16]:** Minotaur wallet slow with large transaction counts; uses explorer to sync. Requested wallets use nodes with configurable node selection.

### Hummingbot & Market Making
- **[@cannon_q, msg#568229 et seq., 2025-07-20]:** Hummingbot integration progressing; hackathon planned. Needed for liquidity arbitrage across bridges (vs. just access). 20k+ users. Major refactoring completed; delayed but advancing. Runes integration, Monero research underway; proposals pending vote push.

### Speed & Scaling
- **[@Chris Ray, msg#567544, msg#567595, 2025-07-14-15]:** Sub-blocks targeting ~2-second app transfer speed (vs. 2-minute base). Ergo maintains security-first approach unlike Solana's speed-at-all-costs.
- **[@Glasgow, msg#567552, 2025-07-15]:** Base time 2 minutes for security; sub-blocks and L2 solutions compatible per docs.
- **[@Alx, msg#567540, msg#567545, 2025-07-14-15]:** Raised concern about Ergo competing with Solana speed for launch pad viability; Chris/Community countered speed isn't everything; trustlessness/decentralization matter more.
- **[@kushti khushi, msg#567599, 2025-07-15]:** Solana is "fake datacenter-based pseudoblockchain centralized network"; incomparable to p2p networks. PayPal has better TPS anyway.

### CoolDogeCoin (CDC) Sidechain Proposal
- **[@Saphuza, msg#567870 & msg#567871, 2025-07-17]:** CoolDogeCoin v2.0 whitepaper shared—deflationary token ecosystem on Ergo with Raspberry Pi validator nodes supporting PoS, zk-SNARK proof submission, zkRollup-compatible broadcasting.
  - Staking minimum: 1,000 CDC; burn rates 0.25% per proof, 1% per epoch rotation.
  - Governance via multisig CDC holders.
  - Roadmap: Q3 2025 Groth16, Q4 2025 zkRollup, Q1 2026 NFT validator identity, Q2 2026 reward redistribution vote.
- **[@Saphuza, msg#567872, 2025-07-17]:** "Gangwars" 5v5 NFT club game with wager battles planned.

### Rosen Diversified Index (RDI) Concept
- **[@DiscordBridge, msg#567757 et seq., 2025-07-16]:** RDI proposed—on-chain index fund token backed 1:1 by rsBTC, rsETH, ERG, rsADA, rsDOGE; weighted by market cap (max 40% per asset). Mint via router swapping from any asset; rebalance at 6% drift or every 90 days; 0.2% mint fee.

### Banxa Fiat On-Ramp
- **[@Glasgow, msg#567664, 2025-07-15]:** Banxa "pretty much ready to go" awaiting MEXC to resolve "dust issues."
- **[@Pulsarz, msg#567665, 2025-07-15]:** Joke: "2 weeks /s" (sarcasm on delays).
- **[@Armeanio, msg#567667, 2025-07-15]:** "Babysitter has arrived" (re: watching MEXC progress).

### MEXC Integration Issues
- **[@kushti khushi, msg#567555, msg#567557, 2025-07-15]:** Asked for MEXC main address; found in Ergo Explorer address book.
- **[@cannon_q, msg#567482, 2025-07-14]:** MEXC "on erga time" for fix implementations.
- **[@DiscordBridge, mx (Discord), msg#567483, 2025-07-14]:** Exchanges don't maintain full nodes; Bybit hack example; MEXC shows "full ignorance."

### Community Infrastructure & Moderation
- **[@Nico, msg#568099 et seq., 2025-07-19]:** Scammer impersonation problem flagged—fake accounts mimicking admins (e.g., "Gazzza_SPF" vs. "Gazza_SPF") sending DMs. Multiple impersonators despite being in chat.
- **[@HQΣr, msg#568166, 2025-07-19]:** Auto-ban for impersonation called "awful solution."
- **[@Gazza, msg#568172, msg#568173, 2025-07-19]:** Confirmed fake Gazza still active; impersonators, not real admins.

### Solana vs. Ergo Comparison (Detailed Analysis)
- **[@Bye H8er, msg#567626 et seq., 2025-07-15]:** Multi-part comparison:
  - **Hardware:** Solana requires 128-core CPUs, 1.5TB RAM, 3.2 GHz NVMe; ~60% validators in professional datacenters (2023). Ergo: 4-8GB GPUs, ~1,200 nodes globally on consumer hardware.
  - **Decentralization:** Solana halted 9 times (2021-22); top 10 validators control ~33% stake; Nakamoto Coefficient ~19. Ergo: Nakamoto Coefficient >50; no single entity >2% hash power.
  - **Distribution:** 48% SOL to VCs/insiders; top addresses hold >35%. Ergo: no VC funding, no premine, fair mining distribution.
  - **RPC Centralization:** Solana RPC nodes (QuickNode, Alchemy) prioritize paying users; 80% voting power from 25 entities (Jan 2023). Ergo: decentralized P2P, no RPC bottleneck.
  - **Attack Resilience:** 2022 >51% hashrate attack; Ergo survived via organic mining redistribution.
- **[@kushti khushi, msg#567635, 2025-07-15]:** Last 12 months: Ergo +10.3%, Solana +4.5%, PayPal +22%. Sol lacks transparency, compliance, money transmitter licensing, KYC/AML enforcement. PayPal operates legitimately.
- **[@Unknown, msg#567634 et seq., 2025-07-15]:** Acknowledged Sol's marketing/whale HODL success despite technical issues; noted Ergo's challenge to compete on narrative/liquidity.

### Ledger, Yoroi, Mobile Wallet Gaps
- **[@Ergochampion, msg#567792, 2025-07-16]:** Yoroi was "SHIT from day 1."
- **[@Flying Pig, msg#567793, 2025-07-16]:** Lack of mobile dApp access "mindboggling"; built own secure gateway to PC at home to use Rosen on mobile.
- **[@DiscordBridge, bmfink (Discord), msg#567801 & msg#567802, 2025-07-15]:** Mobile Wallet → Button → dApps (Rosen, Pulse, FlowPay, AI, etc.) needed; dApps should use standardized UIX toolkits (Nautilus as exemplar).
- **[@kushti khushi, msg#567737, 2025-07-16]:** Open to Ergo Wallet feature requests via GitHub issues.

### Flux Bridge & Comparison
- **[@Unknown, msg#567845, 2025-07-17]:** Asked "Ergo vs Flux?"
- **[@cannon_q, msg#568051, 2025-07-17]:** "One is a company, this is P2P."
- **[@kushti khushi, msg#567854, 2025-07-17]:** "Not familiar with any aspect of Flux"; offered kushti2hrs token for 2-hour review if interested.

---

## Important Decisions or Announcements

- **[@Armeanio, msg#567423, 2025-07-14]:** Braid sigmachain rough introduction posted; "Energy is security" theme.
- **[@qx(), msg#567850, 2025-07-17]:** InfraDAO membership info released with requirements & load-balancing endpoints live.
- **[@Andy L, msg#567852, 2025-07-17]:** YouTube live stream scheduled (10 mins notice).
- **[@Ergo NEWS, msg#567571, 2025-07-15]:** DexyGold Beta mainnet live; Telegram group for community input.
- **[@HQΣr, msg#567527, msg#567528, 2025-07-19]:** FlowPay bot launched for prepaid card purchases with crypto (non-KYC, supports Ergo, Cardano, Alephium, Nervos).
- **[@josh, msg#568183, 2025-07-19]:** CoinSpot (Australian exchange, 2.5M users) added ERG to listing page; community requested to submit email support.
- **[@LIFΣ OF IF₳, msg#567753 & msg#567754, 2025-07-16]:** Rosen Watchers TCG developer partnership request—100 ERG + 30% sales revenue, full card set inclusion; cards selling at 10 SigmaUSD/pack.

---

## Technical Q&A Worth Preserving

### Bulletproof Range Proofs & DarkERG
- **Q** (@kushti khushi, msg#567804): Would bulletproof-based range proof verification contract in ErgoScript enable DarkERG (privacy system with virtual UTXOs, stealth addresses, trustless 1:1 ERG swaps)?
  - **A** (@kushti khushi): Yes; bounty issued (GitHub #1032). "Another privacy idea, and probably realistic."

### EIP-50 Voting & Activation Timeline
- **Q** (@Man ish, msg#568239): How many epochs until EIP-50 activation?
  - **A** (@mx, msg#568246): First 32 epochs voting window; activation period another 32 epochs; live expected October Ergo Meetup. Changes (block size, computational cost) dynamic per epoch; difficulty retarget reduced 1024→128 blocks.

### EIP-50 Support Threshold
- **Q** (@Richi, msg#568209): If support falls below 90% for 2-3 epochs within 32-epoch window, does it impact activation?
  - **A** (@kushti khushi, msg#568217): No; 90% support needed within 32 × 1024 blocks total (not per-epoch floor).

### Ledger Nano S Discontinuation