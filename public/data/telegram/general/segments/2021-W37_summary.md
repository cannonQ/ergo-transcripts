# Ergo General Chat — 2021-W37 (2021-09-13 to 2021-09-19)

## Key Topics Discussed

- **Solana Network Outage**: Solana blockchain experienced a complete halt for 7+ hours on 2021-09-14, with no new blocks being produced. Discussion centered on centralization concerns (50%+ nodes in 2 data centers, ~2% public float) and barriers to running nodes ($1M+ to break even). Community contrasted this with Ergo's decentralized PoW approach.

- **ErgoMixer Privacy Implementation**: Community discussed how ErgoMixer provides privacy through zero-knowledge proofs using Sigma protocols. Mixer uses 2-person box splitting where outputs are randomized, making transactions untraceable. Multiple mixing rounds increase anonymity, with the mixer potentially offering stronger privacy than Monero given sufficient pool participants.

- **Oracle Pools v2.0 Draft Release**: Oracle Pools v2.0 specification released addressing key limitations: reward dust generation, transferability of oracle/ballot tokens, simplified pool box structure, and improved update mechanisms. This enables scaling of oracle business operations.

- **ErgoDEX Beta Usage and Features**: ErgoDEX running in public beta on Ergo with over 2,000 swaps completed. No governance token planned initially; fees paid natively in ERG/ADA. Cross-chain functionality with Cardano expected mid-October. Discussion of order book features, limit orders, and partial fills distinguishing it from competitors like SundaeSwap.

- **Sidechains and Merge Mining**: kushti discussed upcoming sidechain constructions enabling merge mining where miners earn both ERG and sidechain tokens. Trustless pegging mechanism using smart contracts similar to BIP-301 but with improved security. Emission contracts will reward mainchain miners for delivering sidechain data.

- **Network Performance and Scaling**: Discussion of block time (2 minutes), finality considerations for payment use cases, and potential layer 2 solutions. Community exploring faster confirmation protocols, microblocks, and on-chain optimizations. Call for testnet experiments with different block parameters.

- **Graviton Bridge Integration**: Graviton protocol integration progressing to enable interoperability with multiple chains (ETH, BSC, Waves, Fantom, Polygon). Will allow wrapped ERG on other chains and foreign assets on Ergo. GTON team building bridge for ErgoHack II.

- **Storage Rent Mechanism**: Explained as key differentiator where inactive UTXOs can have value reclaimed by miners after 4 years, preventing blockchain bloat. Contrasted with account-based models that accumulate dust indefinitely.

- **NFT Infrastructure on Ergo**: Discussion of ErgoAuctions capabilities including immutable listings via smart contracts (no rug pulls), royalty support, and community-driven copyright reporting. Concerns raised about stolen NFT listings with community compiling suspicious wallet addresses.

- **Wallet Development Status**: Yoroi Ergo support improving with dApp connector in beta, Changelly integration coming. Android Ergo Wallet supports tokens and derived addresses. Ledger hardware wallet support in final testing phases. iOS wallet in development by MrStahlfelge porting from Android codebase.

- **Exchange Listings and Liquidity**: Available on KuCoin (0.01 ERG withdrawal), CoinEx (10 confirmations), Gate.io (0.5 ERG withdrawal), Bitcoin.com. CoinEx experienced node upgrade delays causing withdrawal issues (resolved). Community prefers organic growth over paid Binance listing to avoid whale manipulation.

- **SigmaUSD/RSV Mechanics**: Clarification on proxy contract requirements - must send 0.01 ERG minimum with tokens for redemption to cover subsequent transaction fees. 2% minting fee goes to reserve, 0.25% to UI developers. Cannot mint SigmaUSD when reserve ratio below 400%.

- **Mining Difficulty and Hashrate Growth**: Network hashrate hit 40 TH/s all-time high. Difficulty increasing as more miners join ahead of Ethereum 2.0 transition. Autolykos algorithm noted as more efficient than Ethash (cooler running, better power efficiency).

- **ErgoHack II Registration**: 150+ participants registered (up from ~40 in ErgoHack I). Registration temporarily closed to scale infrastructure, then reopened. Resources page added to ergohack.io with development materials.

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#206980, 2021-09-15]: Oracle Pools 2.0 draft published by ScalaHub addressing reward dust, token transferability, and pool box structure simplification.

- [@kushti, msg#207567, 2021-09-17]: Sidechain construction papers will be published soon on forum, enabling merge mining with trustless pegging mechanisms superior to BIP-301.

- [@Armeanio, msg#206309, 2021-09-13]: Weekly dev updates will continue covering core protocol (node v5, AppKit, Sigmastate) separately from dApp ecosystem updates to maintain focus.

- [@Armeanio, msg#208134, 2021-09-17]: New mining pool launched at cool2mine.com.

- [@Dmitry Usov, msg#206228, 2021-09-18]: Sigmaverse.io updated with ErgoRaffle and ErgoDEX additions.

- [@Glasgow｜WON'T DM, msg#207930, 2021-09-17]: ErgoHack II resource page launched with development materials for participants.

- [@Glasgow｜WON'T DM, msg#208787, 2021-09-19]: Multiple new core developers hired in recent weeks, additional job listings in draft.

- [@root7Z, msg#207284, 2021-09-16]: Bounties up to 1K ERG offered for developer tutorials (video tutorials receive higher rewards than text).

## Technical Q&A Worth Preserving

- **Q** (@Robby): Is ERG used as the main currency for all dApps?
  **A** (@Gazza_ERG): ERG is used for transaction fees on Ergo blockchain. Individual dApps can have their own tokens, but network fees are always paid in ERG.

- **Q** (@MoigreS): Why are only a few dApps on Ergo, and why do they start with "Ergo"?
  **A** (@Glasgow｜WON'T DM): More dApps exist than most blockchains. Naming convention irrelevant - ecosystem is young and growing organically through ErgoHacks and community development.

- **Q** (@Francesco): Is ErgoScript very different from Plutus?
  **A** (@Glasgow｜WON'T DM): Different language but similar logic. Porting between Cardano and Ergo requires substantial rewrite work, visible in ergolabs GitHub comparing implementations.

- **Q** (@Exupery): How long does ErgoMixer take to mix ERG?
  **A** (@Glasgow｜WON'T DM): Depends on rounds selected (standard options available), typically couple hours. Must run mixer client locally.

- **Q** (@MrStahlfelge): What ERG amount needs to be sent with tokens for SigmaUSD redemption?
  **A** (@Glasgow｜WON'T DM / @Dmitry Usov): Proxy contracts require 0.01 ERG minimum sent with tokens to cover subsequent transaction fees. Yoroi handles automatically; Android wallet requires manual specification. SigmaUSD UI should explicitly state this requirement.

- **Q** (@ragnar lothbrok): How does Ergo privacy compare to Monero?
  **A** (@Glasgow｜WON'T DM): Optional privacy allows rich smart contracts. ErgoMixer can be more anonymous than Monero with sufficient pool participants. Could implement full XMR-level privacy on top of Ergo if needed.

- **Q** (@Srdjan): Why are people claiming Ergo violated whitepaper for early investor profit?
  **A** (@Unknown): FUD from those who missed fair launch. Ergo had no ICO, no VC funding, proof of no premine. Comments lack context and end with "could be scam" showing uncertainty.

- **Q** (@Veyloris): What's the difference between HiveOS and Windows for mining?
  **A** (@シトラスクリスプ): Mining-specific question, redirected to @Ergo_Mining chat for expert assistance.

- **Q** (@Habeeb K): Can I stake ERG bought from KuCoin?
  **A** (@Unknown): No staking (Proof of Work), but future yield mechanisms possible. Can provide liquidity on ErgoDEX beta currently.

- **Q** (@Bruno): Plans to make ERG transfers faster/almost instant?
  **A** (Discussion): 2-minute blocks, layer 2 solutions being explored. Testnet for parameter tweaking available. For instant payments, layer 2 or sidechain solutions needed.

- **Q** (@Hero Grinder): Should auction house have copyright warning for stolen NFTs?
  **A** (Community discussion): Smart contract immutability is feature protecting collectors. Community tracking suspicious wallets manually. Suggestion for flagging system where community can label suspicious auctions.

## Links Shared

- [https://ergoplatform.org/en/blog/2021-09-16-how-ergo-changes-crypto/]: Overview of Ergo's unique features and value propositions
- [https://thecryptodrip.com/ergo-deep-dive/]: Comprehensive deep-dive article explaining Ergo's technology and ecosystem
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto outlining philosophical principles and goals
- [https://ergoplatform.org/en/blog/2021_03_26_eth_vs_erg/]: Comparison of Ergo vs Ethereum architectures
- [https://ergoplatform.org/en/blog/2021-08-17-ergo-advancing-on-bitcoin/]: How Ergo advances Bitcoin's original vision
- [https://ergoplatform.org/docs/CBT_2020_ZeroJoin_Combining_Zerocoin_and_CoinJoin_v3.pdf]: ZeroJoin paper explaining mixer cryptography
- [https://thecoinperspective.com/?c=ERG]: Market cap comparison tool for understanding ERG valuation potential
- [https://sigmaverse.io/]: Directory of Ergo ecosystem projects and dApps
- [https://ergohack.io/]: ErgoHack II hackathon information and resources
- [https://beta.ergodex.io/]: ErgoDEX public beta interface
- [https://ergoauctions.org/]: Ergo NFT auction platform
- [https://ergonfts.org/]: Ergo NFT directory and marketplace
- [https://ergonaut.space/en/home]: Community knowledge base with technical documentation
- [https://github.com/ergoMixer/ergoMixBack]: ErgoMixer backend repository for running mixer locally
- [https://www.ergoforum.org/t/interest-free-loan-contract/67]: Interest-free loan smart contract design discussion
- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Alternative staking mechanism proposal for PoW chain
- [https://youtu.be/kStni_eslxE]: Video explaining Ergo's technology and advantages
- [https://youtu.be/zocWhRFyPLU]: Chico Crypto video mentioning Ergo (timestamp 8:15)
- [https://open.spotify.com/episode/0bdO4QVauapKiBa3JZqgDK]: First English episode of ErgoTalk podcast
- [https://twitter.com/ergoplatformorg/status/1438860296181927941]: Twitter thread collecting community reasons for supporting Ergo
- [https://www.nasdaq.com/articles/7-things-to-know-before-you-buy-ergo-erg-2021-09-17]: Nasdaq article covering Ergo basics
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-september-16th-52b8e20f0f08]: Weekly dev update September 16th

## Unresolved Questions

- Specific Cardano-Ergo partnership announcement content: Confirmed for Cardano Summit (Sep 25-26) but exact nature unclear. Community speculation includes NIPoPoWs for light clients, Hydra integration, or layer 2 collaboration.

- Ledger hardware wallet release timeline: In final testing but no firm date given. Referenced as "soon™" multiple times.

- Changelly listing ETA: Internal trade engine optimizations needed first, no specific timeline provided.

- ErgoDEX governance token decision: Community poll active asking if governance token should be added. Originally no token planned, but may be introduced later with anti-plutocracy distribution.

- iOS wallet release schedule: Kotlin/Java SDK compiled for iOS, but UI and persistence layer remain to be built. No timeline given.

- Node v5 upgrade details and timeline: Mentioned as next major protocol upgrade but specifics not discussed beyond sub-blocks, sidechains, and faster confirmation exploration.

- Network speed improvements implementation: Community discussing microblocks, sidechains, and parameter tweaks. Testnet available for experiments but no committed roadmap for mainnet changes. Block height vs timestamp dependencies complicate faster blocks.

- Video NFT support: Currently not supported on ErgoAuctions (audio, images only). Can convert to animated GIF but loses sound. Feature requested but no implementation timeline.

- Binance listing timeline: Community consensus to avoid paid listing for now to prevent whale accumulation and manipulation. Focus on organic growth first.

- ErgoFund and ErgoTeams development status: Mentioned as "in development" for community project funding but no demos or release timeline provided.