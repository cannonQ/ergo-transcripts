# Ergo General Chat Summary — 2021-W03 (2021-01-18 to 2021-01-24)

## Key Topics Discussed

- **Ergo Protocol Reference Client 4.0.0 Release**: Node version 4.0.0 was released with activation set for block height 417,792 (around Feb 1st). Exchanges needed to update their nodes, causing temporary deposit/withdrawal issues on HotBit which had to rescan wallets from version 3.2.7. Other exchanges on 3.3.x had simpler updates.

- **Magnum Wallet Recovery**: Users with funds in the closing Magnum wallet were instructed to use ErgoMixer to recover funds using their mnemonic, as Yoroi has different derivation paths from Magnum. The process was documented on the forum.

- **Elamite's Recovery Phrase Hunt**: A 444 ERG puzzle wallet was claimed via brute force before final clues were released. With only 3 words remaining unknown, the winner was able to iterate through possibilities. The event highlighted the security considerations around seed phrase entropy.

- **Storage Rent and Network Economics**: Discussion of how storage rent prevents spam by making it expensive to send unwanted tokens, and how it contributes to long-term ERG recirculation after inactive wallets. This was identified as a key advantage over Bitcoin's permanently lost coins.

- **Mining Discussion**: Autolykos v2 requires GPUs with 2GB+ memory (not 4GB as previously documented). Mining setup guides and pool information were shared. Post-hardening mining parameters and pool resistance were discussed.

- **AgeUSD Stablecoin Architecture (from Summit)**: Detailed explanation of the two-token system: StableCoins (tracking $1 USD) and ReserveCoins (representing shares of the reserve). Reserve Providers absorb volatility, profiting when ERG appreciates but also absorbing downside risk. The system requires careful parameter selection for over-collateralization to prevent undercollateralization during price crashes.

- **Oracle Pools Design**: Oracle pools operate without requiring an intermediary token (unlike Chainlink), with posting schedules configurable at creation. Data comes from multiple sources and is aggregated on-chain. The pools are designed to work with both Ergo and Cardano smart contracts.

- **Ergo Bootstrap**: A development tool for easy cluster deployments of dApps was demonstrated, showing docker-based setup for local development environments.

- **ErgoSwap and DEX Development**: Plans discussed for Uniswap-like AMM-based DEX on Ergo. Atomic swap capability is implemented at the core protocol level, allowing anyone to discover and match orders with incentives. Multiple DEX models can coexist (AMM, order book, etc).

- **Cross-chain Atomic Swaps with Bitcoin**: Private atomic swaps with Bitcoin will be possible after Schnorr signature activation in Bitcoin. This was included in the roadmap but timing depends on Bitcoin's development schedule.

- **Ledger Hardware Wallet Integration**: @jasondavies is working on Ledger support through a community grant. Yoroi mobile for ERG is also in development but not yet available.

- **NFT and Token Support in Yoroi**: Visual NFT display is being developed for Yoroi. Native multi-asset support was demonstrated during the summit, showing future capability to view tokens directly in wallet UI.

- **Sidechains and Merge Mining**: Detailed discussion of merge-mined sidechains for Ergo, where mainchain miners can earn rewards for delivering sidechain data. The design differs from Bitcoin's BIP 301 with improved trustless pegging through smart contracts and better security properties.

- **Network Optimization Paths**: Discussion of sub-blocks/microblocks, faster confirmation protocols, and layer 2 solutions. The concrete set of applications now deployed (Rosen, Oracle Pools, DEX contracts, lending, stablecoins) makes optimization easier than optimizing empty chains.

- **DeFi Composability**: Examples given of composing AgeUSD bank with ErgoSwap, minting stablecoins directly to order scripts for automatic fulfillment. ErgoScript's design enables complex contract interactions.

## Important Decisions or Announcements

- [@kushti, msg#77700, 2021-01-18]: Ergo Protocol Reference Client 4.0.0 released, activation at block height 417,792 (around Feb 1st). All node operators must update.

- [@SavoRPC, msg#78991, 2021-01-23]: Announced new exchanges and PR/marketing efforts coming soon during Ergo Summit presentation.

- [@kushti, msg#79685, 2021-01-24]: Proposed AgeUSD stablecoin AMA for next day (January 25th) to discuss details and launch.

- [@kushti, msg#79532, 2021-01-24]: Will contact exchanges to verify nodes are updated and ready for "The Hardening" (4.0.0 activation).

- [@kushti, msg#79316, 2021-01-23]: Suggested creating #social channel on Discord for LETS (Local Exchange Trading System) and credit cooperative applications.

- [@martin_mx, msg#79846, 2021-01-24]: Clarified that Yoroi desktop extension does not yet support Ledger for ERG, only for ADA. Mobile Yoroi for ERG expected before Ledger support.

## Technical Q&A Worth Preserving

- **Q** (@AlctoinFacts, msg#77539): I had ERG in Magnum wallet, but entering seed in Yoroi gives different address?
  **A** (@kushti, msg#77540): Use ErgoMixer to recover from Magnum mnemonic as shown in forum post. Yoroi has different derivation path. Link: https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468/6

- **Q** (@Velvia, msg#78986): Will there be an easier way to mine ERG, like wallet with built-in miner?
  **A** (@filippounits, msg#78987): See mining guide: https://github.com/ergoplatform/ergo/wiki/Mining-Ergo-for-Fun-and-Profit

- **Q** (@pepeblue, msg#79117): Do oracle pools pull data from Chainlink or Band Protocol? Where does data come from?
  **A** (discussion context): Oracle pools aggregate data from multiple external sources directly, without requiring an intermediary token layer like Chainlink.

- **Q** (@CryptoTeller, msg#78526): Could the value of supply of AgeUSD ever be larger than underlying reserves during huge price drop?
  **A** (@kushti, msg#78531): Yes, so parameters must be chosen carefully with over-collateralization in the first place.

- **Q** (@S.Dbros, msg#78956): What's the difference between going long with ReserveCoin and just holding ERG?
  **A** (@kushti, msg#78970): With ReserveCoin you're also profiting from fees earned by the bank, not just ERG price appreciation.

- **Q** (@Żeśo, msg#78463): Will there be deposit required to create new tokens to avoid spam tokens like on Waves?
  **A** (@kushti, msg#78467): Sending crappy tokens to anyone would be much more expensive in Ergo due to storage rent.

- **Q** (@Żeśo, msg#79070): On Oracle Pools - is posting schedule configurable and can it be updated once operational?
  **A** (unresolved - question raised during summit discussion)

- **Q** (@301231, msg#78710): Does memory matter much more than computing power for mining?
  **A** (@Żeśo, msg#78704): Autolykos is memory-hard, requiring 4GB RAM (later corrected to 2GB for v2) with pool-resistance design.

- **Q** (@S.Dbros, msg#78393): Voting only done by miners? Isn't that monopoly?
  **A** (@SavoRPC, msg#78394): In all PoW voting is done by miners (like Bitcoin), but exploring additional governance mechanisms while miners ultimately decide.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.0]: Ergo Protocol Reference Client 4.0.0 release notes
- [https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468/6]: Guide for recovering ERG from Magnum wallet using ErgoMixer
- [https://ergoauctions.org]: Ergo Auction House with NFT functionality
- [https://ergosummit.org]: Ergo Summit 2021 website with agenda and livestream
- [https://www.youtube.com/watch?v=zG-rxMCDIa0]: Full Ergo Summit 2021 recording with timestamps
- [https://cointelegraph.com/press-releases/ergo-and-cardano-teams-to-explore-key-defi-challenges-at-ergo-summit]: CoinTelegraph press release about Ergo Summit
- [https://www.altcoinbuzz.io/cryptocurrency-news/product-release/bitcoin-like-ergo-poised-to-solve-most-crucial-stablecoins-problems/]: AltcoinBuzz article on Ergo stablecoin
- [https://explorer.plutomonkey.com/ergo/oracle/]: Oracle pool price tracking with charts (by @jasondavies)
- [https://github.com/Emurgo/age-usd]: AgeUSD stablecoin GitHub repository
- [https://ergoplatform.org/en/blog/2021-01-20-how-ergo-makes-the-most-of-blockchain/]: Blog post on Ergo's blockchain optimizations
- [https://link.medium.com/Xz5rHKkcidb]: Community article by @veriumfellow on Ergo philosophy and comparison with Cardano (received significant engagement)
- [https://www.ergoforum.org/t/ergo-summit-2021-full-video-links-to-chapters-included/559]: Forum post with Ergo Summit chapter links
- [https://twitter.com/NicoArqueros/status/1353203943195734017]: AgeUSD one-pager (technical/mathematical)
- [https://ergoplatform.org/en/mining/]: Updated mining information page
- [https://discord.gg/kj7s7nb]: Ergo Discord server for technical discussions
- [https://github.com/ergoplatform/awesome-ergo]: Awesome Ergo resource collection
- [https://t.me/ERGtrading]: Ergo trading-specific Telegram channel
- [https://t.me/ergo_mining]: Ergo mining-specific Telegram channel
- [https://t.me/ErgoSocials]: Ergo community marketing coordination channel

## Unresolved Questions

- Exact timeline for Ledger hardware wallet support (in progress by @jasondavies)
- Timeline for Yoroi mobile ERG support (mentioned as coming soon)
- Specific date for AgeUSD mainnet launch (AMA scheduled for Jan 25)
- Which new exchanges will list ERG and when (mentioned as "coming soon")
- Oracle pool posting schedule configuration details
- Exact parameters for AgeUSD over-collateralization ratios
- Timeline for ErgoSwap DEX launch (shown on roadmap)
- Bitcoin Schnorr activation timeline affecting atomic swap capability
- Details on "The Hardening" activation process at block 417,792