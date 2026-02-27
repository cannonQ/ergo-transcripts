# Ergo General Chat — 2022-W25 Summary

## Key Topics Discussed

- **EIP-27 Activation & Emission Reduction**: Block 777,217 on June 21 marked the activation of EIP-27, reducing block rewards from 63 ERG to 48 ERG via soft fork. Over 92% of miners' hash power voted in support. Next scheduled reduction (3 ERG decrease) expected ~10 days later.

- **Mining on Heterogeneous Hardware**: Discussion around mining Ergo on laptops with mixed AMD CPU + Nvidia GPU setups. Consensus that Autolykos is one of the lowest-heat mining algorithms; recommended software includes NBMiner, Terex, SRB, and Team-Red. Community emphasized pool mining (GetBlok/Enigmapool) over solo mining for ease of use.

- **Node Operations & Ergodex Bots**: Ubuntu Server with openjdk-11-jre-headless recommended for running Ergo nodes and deploying Ergodex bots. Users reported node stability issues on Ubuntu Desktop; Windows miniPC deployments proved more stable. Node hanging/crashing appears environmental rather than software-related.

- **Wallet & Hardware Security**: Satergo v0.0.3 released with 50% smaller program size, transaction history, password requirements for sends, and multi-address selection. Ledger support limited to Ledger S (side-load only on mainnet; Nano X support coming). SafeW and Paper Wallet discussed; concerns raised about paper wallet promotion given documented security issues.

- **Storage Rent & Mempool Protection**: Recent node versions (4.0.44+) implement spam filters and mempool limits to prevent dust attacks. Exchanges experienced issues with miner payout dust; miners depositing to exchange wallets lose all airdropped tokens (Neta, MiGoreng).

- **Re-emission Contract & EIP-27 Mechanics**: Two new tokens injected into emission contract: singleton token (for tracking emission box) and re-emission token (sent to mining reward boxes). Miners must spend boxes to trigger re-emission contract payments. Pool operators need to update configurations to reflect new reward structure; mining pools showing stale reward data.

- **SigmaUSD Reserve Ratio & Stablecoin Health**: SigmaUSD reserve ratio reached 400% (~June 23), indicating strong collateral backing. Discussion of combo strategies (redeem SigmaUSD, mint RSV) and factors affecting ratio (price movements, minting/redemption activity).

- **Palmyra Ecosystem & Chainlink Partnership**: Dan Friedman discussed Palmyra's use of Chainlink for proof-of-reserve on warehouse receipts. Infrastructure includes IoT devices (cameras, weight/motion sensors) for continuous reserve auditing. Plan to leverage multiple oracles including Ergo-native Oracle Pools; capital raised to build out Ergo oracle infrastructure.

- **Speed & Throughput Improvements**: kushti noted recent dev update discussions about potential microblocks, sidechains, or faster confirmation protocols. Consensus that concrete use-case patterns must exist before optimizing; current contract set (GARD protocols, Oracle Pools, Spectrum AMM, Trade House) provides optimization targets but network not currently congested.

- **Community Development & Bounties**: ErgoHack Fest voting open (top 5 proposals receive 40 ERG each, closes June 27 12pm UTC). Satergo dev submitted project but noted description missing key features. Good Whale Grant of 10K SigmaUSD awarded to GuapSwap for multi-token swap development.

## Important Decisions or Announcements

- [@Koutelier, msg#283875-283877, 2022-06-20]: EIP-27 confirmed as emission soft fork for miners; provided link to blog post and GitHub PR documentation.

- [@Glasgow, msg#283596, 2022-06-20]: Mining calculator linked: https://docs.ergoplatform.com/mining/setup/solo/

- [@MrStahlfelge, msg#283619, 2022-06-20]: Recommended mining software: HiveOS, SRB, NBMiner, Team-Red. Community pools: GetBlok and Enigmapool.

- [@Andy L, msg#283898, 2022-06-20]: Acknowledged short notice of Ergo Meetup; promised better audio recording for future events.

- [@Aberg Satergo dev, msg#284310, 2022-06-22]: Satergo v0.0.3 released with 50% size reduction, node operations, transaction history, password protection, and price charts (24h/7d/30d/90d/1y/Max).

- [@Unknown, msg#284235, 2022-06-22]: ErgoHack Fest voting announced with timestamps and submission link.

- [@Unknown, msg#285111, 2022-06-25]: Swamp Audio seed round deadline extended to June 28, 17:00 UTC due to API optimization.

- [@Unknown, msg#285132, 2022-06-25]: GuapSwap received 10K SigmaUSD Good Whale Grant; working on multi-token swap feature for next version.

## Technical Q&A Worth Preserving

**Q** (@Ada's Dream, msg#283607): Why is Ergo mining so hard? Shouldn't there be a one-click download program for Linux, Windows, and Mac?
**A** (@Glasgow, msg#283609): Someone created a one-click solution for ErgoHack, but most miners already have setups and just need to switch pools or coins. Simple pool mining (file editing) is the standard approach.

**Q** (@Ada's Dream, msg#283676): Why not include mining in the official wallet like Monero does?
**A** (@Unknown, msg#283678 implied): Choice and modularity allow different software for different needs; Monero's bundled approach sacrifices flexibility for simplicity.

**Q** (@Daniel, msg#283640): If I run a node without mining, does it help the blockchain and provide rewards?
**A** (@Unknown, msg#283639): Nodes help the blockchain but provide no rewards unless used for mining, oracle operation, or running off-chain bots (arbitrage, transaction building).

**Q** (@Gazza, msg#283645, reply to #283643): How do off-chain bots work on Ergo?
**A** (@Luivatra, msg#283646-283647): GitHub repos for ergo-offchain-execution, ergopad-offchain, paideia-offchain; not well documented yet.

**Q** (@zhang zee, msg#284218): Why does the block explorer still show 63 ERG sent to miner address after EIP-27 activation?
**A** (@CW, msg#284223): Pools must spend the box (pay miners) before the emission is sent to the re-emission contract.

**Q** (@Aberg Satergo dev, msg#284371): Can wallets without mnemonic password support restore wallets created with a mnemonic password?
**A** (@Aberg, msg#284371-284380): No. Wallets without mnemonic password support can only restore wallets created with empty mnemonic password. Mnemonic password treated as separate field (not appended as word); unclear if internal representation differs across implementations.

**Q** (@kushti, msg#284997-285000): Which pool is behind address `88dhgz...`? Request to set `ergo.wallet.checkEIP27 = true`.
**A** (implied community action): Public request for pool identification and EIP-27 configuration compliance.

**Q** (@Daniel, msg#284967): Ubuntu node keeps hanging/terminal closes. Ideas?
**A** (@Unknown, msg#285002-285004): Use openjdk-11-jre-headless instead of default Java; Ubuntu Server better than Desktop for bots. Check error logs (if available) before reinstalling.

**Q** (@CryptoHash, msg#284553): How to use Ledger with Nautilus wallet?
**A** (@Glasgow, msg#284554-284556): Ledger S requires side-load (check Nautilus chat pinned message). Nano X support coming soon ("bientôt").

**Q** (@edgar, msg#284948): Is the 0.001 ERG transaction fee fixed forever regardless of token price?
**A** (No direct response; implied protocol constant).

**Q** (@Ahmad, msg#285263): Can personal wallets "go down" like Mount Gox?
**A** (@Unknown, msg#285266): Non-custodial wallets are access methods to the blockchain. For a wallet to "go down," the entire blockchain would need to go down. Analogy: wallet is like a bank ATM card; funds live on the blockchain (bank), not on the card.

## Links Shared

- [https://docs.ergoplatform.com/mining/setup/solo/]: Mining calculator and solo mining setup documentation.

- [https://docs.ergoplatform.com/mining/setup/join/]: Pool mining and software recommendations.

- [https://ergoplatform.org/en/blog/2022-03-17-mining-ergo-on-windows/]: Windows mining setup guide.

- [https://github.com/ergo-pad/ergo-offchain-execution]: Ergo off-chain execution framework.

- [https://github.com/ergo-pad/ergopad-offchain]: ErgoPad off-chain module.

- [https://github.com/ergo-pad/paideia-offchain]: Paideia off-chain module.

- [https://docs.ergodex.io/docs/protocol-overview/bots]: Spectrum DEX bot documentation.

- [https://ergo.watch/emission]: Live emission schedule and reduction tracking.

- [https://github.com/ergoplatform/eips/pull/52/files]: EIP-27 GitHub pull request.

- [https://youtu.be/3EBXpwiprEQ]: EIP-27 explainer video.

- [https://ergoplatform.org/en/blog/Ergos-Reemission-Vote-EIP27-A-Path-to-Sustained-Growth/]: EIP-27 blog post.

- [https://www.sigmavalley.org/airdrop]: SigmaValley airdrop platform.

- [https://sigmaverse.io/all-projects/?category=Wallets]: Sigmaverse wallet category with category-specific links.

- [https://explorer.ergoplatform.com/en/addresses/22WkKcVUvboYCZJe1urbmvBL3j67LKb5KEAvFhJXqA6ubYvHpSCvbvwvEY3xzUr7QvxpEtqjzMAPMsVdZh1VGWmZphvKoJdVzL1ayhsMftTtEFoA3YYdq3zKeeYXavVrrPUmK3fRXJ2HWEbZexewtBWcgAnHBw5tKvYFy9dEUi645gE2fYMUvVBtbvMExE9mjZ2W9goWkqu1VtThAsMZWZWjHxDjX116HpeQKu9b9neEUBj4kE5sX8QXaV6ZeReXxYHFJFg2rmaTknSPMxHXA8NpQKgzryBwLssp5EJ1QTqn5R6xuvGgFCEUZicCEo8qk8UNbE7e2d4WqW5qzpQPzJkKoPa5UtJEPYDWNhaCKmCpzdSc77]: Re-emission contract address explorer link.

- [https://github.com/ergoplatform/eips/blob/master/eip-0027.md]: EIP-27 full specification on GitHub.

- [https://satergo.com/]: Satergo desktop wallet.

- [https://tokenjay.app/escrow]: TokenJay escrow service.

- [https://tokenjay.app/app/]: TokenJay app (requires Ergo Mobile Wallet).

- [https://cometgag.netlify.app/]: CometGag beta meme platform (image/GIF upvoting, future Nautilus + tip bot integration).

- [https://docs.ergoplatform.com/events/ergohack/#ergohackfest]: ErgoHack Fest proposals and voting information.

- [https://strawpoll.com/polls/3RnYpElazye]: ErgoHack Fest voting poll (closed).

- [https://docs.ergoplatform.com/contribute/]: Ergo contribution and grants documentation.

- [https://www.reddit.com/r/ErgoDevelopers/comments/vc2wgq/ergoplatformorg_github_now_open_for_prs/]: Reddit post on Ergo GitHub PRs.

- [https://ergoplatform.org/en/blog/emission/]: Tokenomics and emission schedule.

- [https://golfgl.de/ergopayshowcase/#burn-token]: ErgoScript token burn showcase.

- [https://youtu.be/xn1Fy8wF3SE]: Night Owl project team introduction video.

## Unresolved Questions

- **Node Stability on Ubuntu Desktop**: Multiple reports of nodes hanging/crashing; root cause unclear. Suggested mitigation: switch to Ubuntu Server or Windows miniPC, use openjdk-11-jre-headless. Underlying issue (memory, Java version, config) not definitively diagnosed.

- **Ledger Nano X Support Timeline**: @Glasgow indicated support "coming soon" but no specific date provided.

- **Pool Identification for EIP-27 Compliance**: kushti requested identification of mining pool behind address `88dhgz...` to encourage `ergo.wallet.checkEIP27 = true` configuration. No explicit response confirming pool identity in logs.

- **Paper Wallet Promotion**: @Aberg Satergo dev flagged security concerns with paper wallet prominence in official wallet list; @MrStahlfelge countered that Bitcoin paper wallet wiki issues may not all apply to Ergo. Debate unresolved; no action taken on wallet list reordering.

- **EIP-27 Re-emission Pool Data Accuracy**: Pools showing stale reward data (still displaying 63 ERG instead of 48 ERG post-activation). @zhang zee confirmed pools need to spend boxes to trigger re-emission, but update timeline for major pools not specified.

- **Palmyra iOS Release**: @PalaZ asked "Wen iOS"; @Koutelier directed to TestFlight beta and latest AMA. Specific App Store release date not disclosed.

- **Speed Improvements & Microblock Implementation**: kushti noted community drafts and sketches for microblocks/sidechains/faster confirmations exist but no concrete path chosen. Discussion deferred pending concrete use-case patterns and implementation feasibility study.

---

**Note on Activity Level**: This week was moderately active with clear technical focus on EIP-27 activation, mining onboarding, node operations, and ecosystem development. Price speculation and off-topic banter were filtered per guidelines.