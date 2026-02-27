# Ergo General Chat — 2022-W10 Summary

## Key Topics Discussed

- **EIP-27 Soft Fork Activation**: Testnet activation completed on block ce3e9e73638a6c1880a2516d76791f71b8f52696f445f87f2eb737247306f203. Mainnet activation planned ~30 days after testnet testing, with activation height set to 724,000 and block reward reduced from 6 ERG to 3 ERG initially, with proposal to reduce to 2 ERG per block during re-emission phase. No block header voting mechanism; activation via node settings flag only.

- **Minotaur Wallet Launch**: Ready for use on desktop (iOS version coming). Supports cold wallet functionality, dApp integration for SigmaUSD and token issuance, and cold signing via external wallets. Available at https://github.com/minotaur-ergo/minotaur-wallet/releases and on sigmaverse.io.

- **Rosen Bridge Development**: Susy bridge Ergo support added to repo; Rosen Bridge design to be published by weekend with implementation starting next week. Proof-of-concept libs for Cardano, Bitcoin, and Ethereum successfully tested.

- **NIPoPoWs & Light Clients**: NIPoPoWs integration will enable light clients and light mining once integrated, reducing blockchain sync requirements from ~17GB to feasible light client sizes.

- **Emission Schedule Post-EIP-27**: With 2 ERG per block re-emission reward and activation height 724,000: total re-emission 14,337,600 ERG, sufficient for 7,168,800 blocks (~27.28 years until complete emission).

- **Wallet Ecosystem Expansion**: Aneta Wallet v1 public testing beginning with Ergo and ADA support (BTC support planned). Ergo Android/iOS mobile wallets (Benjamin Schulte) available with cold wallet features. iOS App Store listing pending (requires certified documents and character references).

- **Storage Rent Research**: Mentioned as key mechanism for long-term miner sustainability post-emission. Summer 2022 identified as timeline for research phase.

- **SigmaUSD Contract Issues**: Users reported "could not register the request" errors on sigmausd.io interface; workaround recommended via Spectrum DEX, ErgoMixer, or Minotaur.

- **Gate.io US/Canada Restrictions**: Exchange suspending US and Canadian accounts with April deadline for asset withdrawal; users advised to migrate to decentralized alternatives (Spectrum, DEXes, P2P).

## Important Decisions or Announcements

- [@kushti, msg#258499, 2022-03-07]: JIT costing improvements completed in interpreter; additional documentation and simplifications needed; new devs working on interpreter and node.

- [@kushti, msg#258501, 2022-03-07]: EIP-27 mainnet activation chat scheduled for following day; testnet activation planned for that day.

- [@kushti, msg#258509-510, 2022-03-07]: Will tweet announcement later that day; suggested evening/night Russia timing for maximum awareness.

- [@kushti, msg#258519, 2022-03-07]: Shared work on Spats (Spark Assets) enabling Lelantus Spark privacy system for asset type hiding in tokenization layer. (https://eprint.iacr.org/2022/288)

- [@kushti, msg#259082-084, 2022-03-09]: EIP-27 activated on testnet; now updating explorer, informing pools on accounting changes, and conducting testing before mainnet.

- [@kushti, msg#259265, 2022-03-10]: Confirmed activation height 724,000 with 2 ERG per block reemission; total reemission 14,337,600 ERG sufficient for 27.28 years.

- [@kushti, msg#259320, 2022-03-10]: Announced next DeFi community chat with updates on bridges, dApps, and next hackathon.

- [@Frosty, msg#259303, 2022-03-10]: Aneta Wallet v1 live for testing with Telegram group.

- [@kushti, msg#259213, 2022-03-10]: 5.0 soft fork coming (scope not detailed in this chat).

- [@AllCloudy, msg#259396, 2022-03-10]: GetBlok.io consultant coordination for BitsBeTrippin AMA with kushti.

- [@Dmitry Usov, msg#259048, 2022-03-09]: Sigmaverse.io updated with new project/wallet sections and styling improvements.

## Technical Q&A Worth Preserving

- **Q** (@Ian Lee, msg#258657): If running a full node, do I need to download the entire 17GB blockchain?
  **A** (@CW, msg#258658): Yes, that's a full node. NIPoPoWs will enable light clients/light mining once integrated.

- **Q** (@Ian Lee, msg#258666): Which p2p port number is required for node?
  **A** (@CW, msg#258668-678): Discussed 9053 (API), 9083, and 9030; final consensus unclear. See node documentation for authoritative specification.

- **Q** (@Ian Lee, msg#258752): Need to port forward the p2p port to the node PC?
  **A** (@Glasgow, msg#258758): Yes, behind a webserver with nginx configuration. Reference: https://github.com/glasgowm148/ergoscripts/blob/main/misc/nginx.config

- **Q** (@Francis, msg#258764): Must I create a website to run a public FullNode?
  **A** (@Glasgow, msg#258765): Don't need a website, but a webserver yes (to appear on Nodespyder).

- **Q** (@Zzzz, msg#258843): Can Ergo wallet support multiple native assets like BTC, ETH, ADA, SOL?
  **A** (@Glasgow, msg#258844): Would require building/maintaining individual network components for each. Wrapped assets possible once bridges live; native assets per-network not feasible.

- **Q** (@Zzzz, msg#258845): How does Exodus maintain multi-coin support?
  **A** (@Armeanio, msg#258852): Large team of devs maintaining each network integration individually; very resource-intensive project.

- **Q** (@Unknown, msg#259998): How does proposed on-chain identity system compare to Atala Prism?
  **A** (@Unknown, msg#259998): Described as "similar on the surface" (limited discussion in chat).

- **Q** (@Ergo Boy, msg#259463): How to perform private sale of tokens trustlessly?
  **A** (@Unknown, msg#259466): Suggested atomic swap P2P dApp needed; referenced atomic-swap.io as model.

- **Q** (@Cheese, msg#259191): Will soft fork activation settings be reflected in block header voting?
  **A** (@kushti, msg#259225): No block header voting; simpler to release version with activation inbuilt.

- **Q** (@Unknown, msg#259307): Will data from remote nodes be signed to prove accountability?
  **A** (@Glasgow, msg#259304): Planning function allowing light wallet to call specific nodes; signature verification not explicitly confirmed.

## Links Shared

- [https://docs.ergoplatform.com/contribute/]: Ergo contribution documentation
- [https://ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432]: kushti's public good stablecoin proposal
- [https://ergoforum.org/t/ergoplatform-erg-harmony-1erg-xclaim-bridge-ergo-foundation-support/3435]: Harmony bridge proposal discussion
- [https://ergo.nodespyder.io/]: Global Ergo node map (public nodes only)
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: GitHub node setup guide (older, redirected to docs)
- [https://docs.ergoplatform.com/node/platforms/tutorial/]: Updated node setup tutorial
- [https://ergotokens.org]: Token ID lookup
- [https://ergonfts.org/]: NFT lookup
- [https://sigmaverse.io/]: Ergo ecosystem hub (projects, wallets, dApps)
- [https://github.com/minotaur-ergo/minotaur-wallet/releases]: Minotaur Wallet releases
- [https://eprint.iacr.org/2022/288]: Spats (Spark Assets) academic paper
- [https://twitter.com/shakirov2036/status/1500649169454878724]: Russian internet isolation rumor debunked
- [https://www.ergoforum.org/t/a-proposal-for-a-public-good-pseudonymous-on-chain-identity/3438]: On-chain identity proposal
- [https://figma.com/]: Recommended free design tool (mentioned for logo work)
- [https://cafebedouin.org/2021/12/09/why-ergo/]: "Why Ergo?" ELI5 explainer
- [https://twitter.com/sigmaverse_ergo/status/1501594411628593152]: Minotaur Wallet announcement
- [https://ergodex.medium.com/cardano-launch-how-why-and-wen-ba94036ee62a]: ErgoDex Cardano launch article
- [https://youtube.com/playlist?list=PLmtsMNDRU0BxryRX4wiwrTZ661xcp6VPM]: Ergo course playlist
- [https://skyharbor-git-beta-enftexchange.vercel.app/]: Sky Harbor NFT marketplace beta
- [https://atomic-swap.io/home]: Atomic swap P2P dApp model reference
- [https://www.reddit.com/r/GateioExchange/comments/tcg2s9/]: Gate.io US/Canada account suspension PSA

## Unresolved Questions

- **Emission reduction to 2 ERG**: Whether to reduce from 3 ERG to 2 ERG per block was proposed by kushti (@msg#259195) with poll suggested (@msg#259203), but outcome not confirmed in this chat.

- **5.0 Soft Fork Details**: kushti announced 5.0 soft fork coming (@msg#259213) with no scope, timeline, or technical details provided.

- **iOS App Store Listing**: Ergo mobile wallet iOS version availability blocked by Apple's character reference/certified document requirements; timeline unclear.

- **Yoroi Ledger Support**: Multiple users asked when Ledger hardware wallet support will be available for Ergo via Yoroi; answer given was "not yet" with no timeline.

- **L2 Scaling Timeline**: General agreement that layer 2 solutions needed, but specific timeline for implementation not committed.

- **Waves Platform Token Bridge**: User reported inability to transfer Ergo tokens from Waves platform to Ergo wallet (address validation error); no resolution provided.

- **SigmaUSD Contract Errors**: Root cause of "could not register the request" errors on sigmausd.io not identified; workarounds suggested but underlying issue not explained.

- **High-Frequency Trading Capability**: @Max raised question whether Ergo can enable HFT solutions via L2 and cross-chain swaps; @Unknown responded "not even Matic or Fantom are fast enough" but discussion left open.