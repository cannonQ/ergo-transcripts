# Ergo General Chat — 2023-W31 Summary
**Period:** 2023-07-31 to 2023-08-06
**Activity:** 984 messages across 70 participants

---

## Key Topics Discussed

### NIPoPoWs Release & Node Bootstrapping
NIPoPoWs (Non-Interactive Proof of Proof of Work) functionality released in Ergo reference client v5.0.13, enabling rapid full node syncing on mobile devices and single-board computers. Community members reported syncing complete nodes in under 20 minutes on phones and ~5 minutes on Raspberry Pi 4 with ~100MB storage footprint. Discussion centered on making node operation accessible to average users.

### NDAX Exchange Listing Poll Victory
Ergo won a community polling competition run by NDAX (Canadian exchange) for listing consideration. Strong community mobilization via Twitter and Reddit polls resulted in clear victory. Moderate skepticism about whether listing would actually materialize given typical exchange listing fee structures.

### Rosen Bridge Progress
Rosen Bridge mainnet launch expected "any day now" after beta testing since April 2023. Initial bridge target is Cardano with plans to expand to Bitcoin and Ethereum. Bridge performs security assumptions on Ergo side with novel cross-chain swap mechanism designed to prevent exploit patterns seen in other bridges.

### Spectrum DEX Expansion to Cardano
Spectrum Finance launched AMM DEX on Cardano blockchain (first DEX built on Ergo, now expanding cross-chain). Testnet for cross-chain AMM protocol in development. Team plans to build Spectrum Network for multi-chain AMM trading without CEX intermediaries.

### Storage Rent vs. Transaction Fees Mechanics
Discussion clarifying storage rent motivation per CKM18 paper: designed for predictable miner income and adjustable parameters, not primarily as response to negligible tx fees. Current tx fees contribute ~14 ERG/24hrs across ~5k transactions (0.003 ERG average per tx). Rational miners can charge storage rent amounts when users refresh UTXOs near expiration. Storage rent provides more predictable income than volatile tx fees.

### Sub-Block Confirmation Protocols & Speed Improvements
Community interest in sub-block confirmation protocols as alternative to faster block times (which create issues for height-based smart contracts and timestamp-dependent logic). kushti indicated this is potential area for future research alongside other speed improvements, with discussion of merkle-based proofs and existing PR sketches on GitHub.

### Kaspa Archive Loss & History Preservation
External topic: Kaspa lost first 3 months of blockchain history; core dev dismissed importance. Discussion about Ergo's advantages: byte-deterministic transaction representation allows reconstruction of serialized transactions and merkle tree verification even without full signatures. Ergo can restore state transformations and verify against header hashes. kushti suggested uploading first 500k blocks to torrents as redundant archive copy.

### hodlERG Token Relaunch
hodlERG3 relaunched ~2 days before Aug 5, 2023. Token mechanics: redeem ERG for hodlERG, 3% tax to burn hodlERG back for ERG (deflationary game mechanic). Over 24k ERG committed by 35 holders early on, tracking toward exceeding previous round's 100k ERG.

### Satergo v1.6.0 Release
New features: DeFi/dApp support via ErgoPay integration (e.g., Spectrum DEX swaps), Windows installer, fiat currency conversions, improved transaction history, Indonesian and Malaysian language translations. Node log level fixes for compatibility with latest Ergo versions, VM argument customization.

---

## Important Decisions or Announcements

- [@chrom, msg#416773, 2023-07-31]: Ergo Protocol Reference Client 5.0.13 released with NIPoPoWs; fresh node sync achieved in 11 minutes; Rosen Bridge being redeployed with improvements.

- [@Aberg Satergo dev, msg#416838, 2023-07-31]: Satergo v1.6.0 released with DeFi/dApp support, Windows installer, fiat conversions, Indonesian/Malaysian translations.

- [@Unknown, msg#417149, 2023-08-01]: DuckPools Phase 1 development complete; official full launch announced for August 15, 2023. GitHub repos for smart contracts, off-chain bot, front-end, and IDO landing page published.

- [@Unknown, msg#417270-417275, 2023-08-01]: Ergo won NDAX (Canadian exchange) listing poll; community mobilized strongly via Twitter and Reddit voting.

- [@kushti khushi, msg#418433-418436, 2023-08-04]: Workshop announced for 2023-08-04, starting at 11:00 Beirut time (from Web3 Lebanon Dev Meet).

- [@kushti khushi, msg#419099, 2023-08-06]: Confirmed responsible behavior regarding external project security issues.

- [@Unknown, msg#419040, 2023-08-06]: Loans now live on exle.io; zero-interest charitable loans posted by Kenyan loan cooperative supporting underbanked communities.

---

## Technical Q&A Worth Preserving

### NIPoPoWs Node Configuration
- **Q** (@Velvia, msg#417083): Is `p2pNipopows = 2` setting required in ergo.conf? I don't have it and it seems to work.
  **A** (@HQΣr, implicit): Configuration works without explicit setting; kushti's posted Twitter guidance is sufficient.

### Node Snapshot & Oracle Data Provision
- **Q** (@Vinicius, msg#416971-416972): What configuration makes my node most useful to peers—providing snapshots and NIPoPoWs?
  **A** (@HQΣr, msg#416973): Run full node with default .conf, port forward, and make it open to public.

### Storage Rent & Miner Economics
- **Q** (@Benny, msg#418728): Has anyone modeled impact of transaction fee increases on mining profitability?
  **A** (@Armeanio, msg#418729): Not that I have seen.

- **Q** (@Benny, msg#418745-418760): Should miners increase fees to compensate for block reward reduction?
  **A** (discussion with @Glasgow, msgs#418748-418751): Storage rent is adjustable mechanism; business logic suggests miners will increase fees if chain usage permits, but high fees would reduce adoption. Transaction fees currently negligible (~14 ERG/24hrs).

### Proxy Contracts in Spectrum DEX
- **Q** (@qx(), msg#418277): What benefit does a proxy contract provide when original contract is also a vector?
  **A** (@Pulsarz, msg#418280-418287): Proxy boxes provide UX benefit during high-transaction periods to avoid submission congestion with direct contract interaction. Old UI uses bank contract directly; new UI uses proxy for load distribution. No additional security benefit since underlying contract remains vulnerable.

### NFT/Token Minting Costs
- **Q** (@CW, msg#419107): What is minimum cost to mint an NFT/token and send?
  **A** (@TMR.ΣRG, msg#419112): Minting tokens cost 0.013 ERG + 0.001 ERG transaction fee (0.014 total). Boxes require minimum 0.0001 ERG to exist; storage rent affects boxes <0.14 ERG after 4 years.

### UTXO History & Merkle Tree Verification
- **Q** (@dayumbbbb, msg#418125-418131): How critical is preserving full archival node history for data analysis and fund flow tracing?
  **A** (@kushti, msg#418185): In Ergo, blocks can be restored from Explorer data by checking Merkle and AVL trees. Transactions are deterministically serializable, so state transformations can be verified against header hashes even without full signature history.

### Order Book DEX vs. AMM Trade-offs
- **Q** (@qx(), msg#418273-418289): What security benefit does proxy contract provide in DEX design?
  **A** (@Pulsarz, msg#418280-418287): Proxy is UX-only. Both proxy and original contracts have same attack surface; proxy just distributes transaction load during congestion.

### Sub-Block Confirmation Protocols
- **Q** (@Pulsarz, msg#418226-418227): What's next after NIPoPoWs? Sub-block confirmations?
  **A** (@kushti, implicit discussion): Sub-block confirmation protocols and faster confirmation protocols are being considered as design alternatives to faster blocks. Faster blocks create issues with height-based contract logic and timestamp dependencies.

---

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.13](https://github.com/ergoplatform/ergo/releases/tag/v5.0.13): Ergo Reference Client 5.0.13 with NIPoPoWs
- [https://twitter.com/RosenBridge_erg/status/1685707406901489665](https://twitter.com/RosenBridge_erg/status/1685707406901489665): Rosen Bridge beta redemption notice
- [https://www.youtube.com/watch?v=lHSdoE6lmlU](https://www.youtube.com/watch?v=lHSdoE6lmlU): Weekly Update & AMA - July 27, 2023
- [https://youtu.be/2n3b9a_cqAM](https://youtu.be/2n3b9a_cqAM): Weekly Dev Update - July 30, 2023
- [https://ergoplatform.org/en/blog/The-Importance-of-Know-Your-Assumptions/](https://ergoplatform.org/en/blog/The-Importance-of-Know-Your-Assumptions/): Know-Your-Assumptions (KYA) article on Ergo Foundation blog
- [https://satergo.com](https://satergo.com): Satergo v1.6.0 release with DeFi/dApp support, Windows installer
- [https://docdro.id/tRQlEOL](https://docdro.id/tRQlEOL): DuckPools Phase 1 completion of works document
- [https://github.com/duckpools/lend-protocol-contracts](https://github.com/duckpools/lend-protocol-contracts): DuckPools smart contracts
- [https://github.com/duckpools/off-chain-bot](https://github.com/duckpools/off-chain-bot): DuckPools off-chain bot
- [https://beta-testing.duckpools.io/](https://beta-testing.duckpools.io/): DuckPools beta front-end
- [https://ido.duckpools.io/](https://ido.duckpools.io/): DuckPools token sale landing page
- [https://twitter.com/ndaxio/status/1686038414251180032](https://twitter.com/ndaxio/status/1686038414251180032): NDAX listing poll (Twitter)
- [https://www.reddit.com/r/NDAX/comments/159p0ou/poll_what_is_your_1_top_asset_choice_of_the_bunch/](https://www.reddit.com/r/NDAX/comments/159p0ou/poll_what_is_your_1_top_asset_choice_of_the_bunch/): NDAX listing poll (Reddit)
- [https://ergoplatform.substack.com/p/ergo-monthly-wrap-up-july](https://ergoplatform.substack.com/p/ergo-monthly-wrap-up-july): Ergo Monthly Wrap-Up: July 2023
- [https://sigmafi.app/#/](https://sigmafi.app/#/): SigmaFi loan protocol interface
- [https://github.com/Telefragged/off-the-grid/](https://github.com/Telefragged/off-the-grid/): Off-the-grid decentralized grids project
- [https://docs.ergoplatform.com/node/modes/pruned-full-node/](https://docs.ergoplatform.com/node/modes/pruned-full-node/): Pruned full node documentation
- [https://docs.google.com/spreadsheets/u/0/d/1OAznXauj22l0Zm0DTnKnLBdR5Ui0yajMdU41_xNJxLE/htmlview](https://docs.google.com/spreadsheets/u/0/d/1OAznXauj22l0Zm0DTnKnLBdR5Ui0yajMdU41_xNJxLE/htmlview): Exchange comparison spreadsheet (for non-KYC trading)
- [https://www.coinex.com/swap/usdt-erg](https://www.coinex.com/swap/usdt-erg): CoinEx USDT-ERG swap (non-US)
- [https://github.com/rustinmyeye/phonenodescriptsnshit/tree/main](https://github.com/rustinmyeye/phonenodescriptsnshit/tree/main): Phone node setup script for Termux
- [https://ergo.watch/emission](https://ergo.watch/emission): Ergo emission tracking and supply information
- [https://eprint.iacr.org/2018/078](https://eprint.iacr.org/2018/078): A Systematic Approach To Cryptocurrency Fees (CKM18 paper on storage rent)
- [https://eprint.iacr.org/2017/644](https://eprint.iacr.org/2017/644): Earlier version of Ergo fees paper (heavily revised for CKM18)
- [https://github.com/Lithos-Protocol/LitePaper](https://github.com/Lithos-Protocol/LitePaper): Lithos Protocol white paper / litepaper
- [https://www.youtube.com/watch?v=x-9x_PveRog](https://www.youtube.com/watch?v=x-9x_PveRog): Lithos Protocol explainer video 1
- [https://www.youtube.com/watch?v=PFdZAWxpwJM](https://www.youtube.com/watch?v=PFdZAWxpwJM): Lithos Protocol explainer video 2
- [https://exle.io/loans](https://exle.io/loans): Exle loans platform (community lending for underbanked)
- [https://koinly.io/integrations/ergo/](https://koinly.io/integrations/ergo/): Koinly Ergo tax integration
- [https://ergonodes.net](https://ergonodes.net): Ergo node statistics dashboard
- [https://ergocube.com](https://ergocube.com): ErgoCube Spectrum tracking and visualization

---

## Unresolved Questions

- **Node operator incentives**: How to incentivize more nodes to run? Discussion of node faucet concept (rewarding reachable nodes monthly) but implementation details remain unclear—no mechanism yet to link nodes to wallet addresses for payment.

- **Transaction fee vs. block reward tradeoff**: With block rewards declining over years and current tx fees negligible (~14 ERG/24hrs), how will mining remain profitable long-term? Storage rent expected to help but timeline uncertain (4-year cycles). Debate left open on whether fee increases would be acceptable to users.

- **6.0 release timeline**: Reference to upcoming core protocol v6.0 was mentioned but no concrete timeline provided.

- **Sub-block confirmations design**: Multiple community members interested but no formal specification or ETA. kushti indicated research ongoing.

- **Mobile/smartphone node usability**: Clear technical capability demonstrated (sub-20 minute syncs) but UX barrier remains—no "click to run node" app yet. 269 reachable nodes as of msg#418458 (Aug 4), relatively flat despite new capability.

- **Rosen Bridge mainnet launch date**: Expected "any day now" as of multiple August messages, but no specific date confirmed.

- **Market making on Spectrum DEX**: Ongoing discussion about order book vs. AMM trade-offs; no resolution on whether order books (Trade House) will capture significant volume vs. Spectrum's AMM design.

-