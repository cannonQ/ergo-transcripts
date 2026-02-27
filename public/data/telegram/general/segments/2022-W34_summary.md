# Ergo General Chat — 2022-W34 Summary

## Key Topics Discussed

- **EIP-27 Emission Schedule & Storage Rent**: The protocol takes 12 ERG (out of 60) and places it in a contract to maintain 3 ERG/block rewards until ~2045. Storage rent taxes 0.14 ERG on inactive addresses every 4 years to recycle funds back into circulation. [@Unknown, msg#300220, 2022-08-22]

- **Node v5.0 Soft-Fork Voting**: Nodes began voting from block 823297 (within 24 hours of discussion). Voting reached 95% approval in the last 100 blocks of the epoch. [@kushti, msg#300756-757; @Glasgow, msg#301934, 2022-08-23]

- **Ledger Integration Status**: Ergo app code is complete on Ergo side; Ledger Live team review is ongoing. Sideload instructions exist for Nano S and S+. iOS Wallet requires DUNS number for App Store listing; currently on TestFlight. [@Koutelier, msg#300323-335, 2022-08-22; @MrStahlfelge, msg#300530, 2022-08-23]

- **Smart Pools & Collateralized ERG**: GetBlok is building decentralized mining pools with collateral-based lending. Miners can run their own nodes and select transactions/votes while earning additional token rewards. [@Glasgow, msg#300784; @Cheese, msg#301013, 2022-08-24]

- **Rosen Bridge Testnet on Cardano**: Bridge is in testnet for Cardano mainnet. Enables ADA↔ERG swaps and wrapped asset transfers via multisig contracts. Mainnet timeline remains "soon". [@Koutelier, msg#301762-764, 2022-08-27]

- **Spectrum DEX Roadmap**: Order book functionality (like Kujira's FIN) is planned. Spectrum liquidity pools are live at app.spectrum.fi. [@Glasgow, msg#300776-780, 2022-08-23]

- **Mixer Privacy & Functionality**: Mixer rounds represent "joins" or pairings with other boxes. Cancelled mixes return funds; PC crashes resume from last backup. No APY currently, but mixer token planned. [@error, msg#301657; @Gazza, msg#300943, 2022-08-24]

- **Wallet Options & Cold Storage**: Ergo Mobile Wallet (Android/iOS TestFlight) recommended for cold storage on unused device. Satergo provides node-integrated GUI. Paper wallet via GitHub repo (offline). Nautilus browser extension for dApp connections. [@Glasgow, msg#300351; @Unknown, msg#300432, 2022-08-22]

- **Ethereum Merge Mining Opportunity**: Post-merge, GPU miners expected to move to Ergo mining. Multiple media outlets (CryptoSlate, CoinRepublic) highlighted Ergo as miners' preference over Ravencoin/ETC. [@Unknown, msg#300576, 2022-08-23; @Siavash, msg#301248, 2022-08-25]

- **Ergo Raffle Scam Prevention**: Multiple fake raffles posted by scammers; failed raffles refund participants. Proposal for verified raffle section (Twitter confirmation link) or 10 ERG collateral fee. [@MHS_SAM, msg#302004; @Unknown, msg#301995, 2022-08-28]

- **ErgoNames Domain Registration**: Community project to create handles for Ergo addresses. [@Glasgow, msg#300565, 2022-08-23]

- **Discover Ergo Day (Sept 15)**: Community-driven trending campaign with hashtag #DiscoverErgo, 20 top tweets funded (50% engagement, 50% random draw). Coordinated before ETH merge. [@J, msg#300994, 2022-08-24]

## Important Decisions or Announcements

- [@kusht, msg#300756-757, 2022-08-23]: Node v5.0 voting started from block 823297; within 24 hours of announcement.
- [@Koutelier, msg#300621-628, 2022-08-23]: Ledger Nano S Plus app tutorial video promised by weekend.
- [@MrStahlfelge, msg#300530, 2022-08-23]: iOS Wallet requires DUNS organizational number for App Store; currently TestFlight-only.
- [@Dmitry Usov, msg#301289, 2022-08-25]: ergoplatform.org website optimized for faster load times.
- [@MHS_SAM, msg#302004, 2022-08-28]: Proposed 10 ERG collateral fee for raffle creation; refunded if raffle succeeds (failed raffles keep collateral for service).
- [@Armeanio, msg#302146, 2022-08-28]: KuCoin upgrading ERG-USDT Trading Bot pair on Aug 31, 2022 (1-hour maintenance window).

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Can checksum alone recover an Ergo address?  
  **A** (@Glasgow): Address format is `prefix byte || content bytes || checksum`. Checksum alone cannot recover the full address. [@Glasgow, msg#300728, 2022-08-23]

- **Q** (@Unknown): How are transactions consolidated and sent via UTXO on mobile wallets?  
  **A** (@Zzzz, @MrStahlfelge): "Send all" button already exists as convenience method; compound wallet consolidation feature being discussed. [@MrStahlfelge, msg#300254, 2022-08-22]

- **Q** (@Flying Pig): If PC crashes during mixer operation, what happens to mixed boxes?  
  **A** (@error): Mixer continues from last backup point. Database backups preserve state; recovery possible with backed-up DB. [@error, msg#301657, 2022-08-26]

- **Q** (@Unknown): Why do many blocks contain exactly 7 transactions?  
  **A** (@Luivatra): These are ErgoPad staking transaction blocks. [@Luivatra, msg#301687, 2022-08-26]

- **Q** (@T F): Will UTXO consolidation ever be automatic behind-the-scenes for mass adoption?  
  **A** (@HQΣr): Infrastructure improvements ongoing; wallet UX will improve but users may need basic understanding. [@HQΣr, msg#300638, 2022-08-23]

- **Q** (@Unknown): What text can be searched in file recovery for lost seed phrases?  
  **A** (@qx): Any unique text from the seed phrase file. Tiny files (5KB) survive overwrites better than large files on formatted drives. [@qx, msg#300714-717, 2022-08-23]

- **Q** (@Cheese, @Unknown): How does collateralized ERG in smart pools help decentralization?  
  **A** (@Cheese): Miners can run their own node while staking collateral, gaining transaction selection & voting power without relying on pool operator. [@Cheese, msg#301013, 2022-08-24]

- **Q** (@Unknown): Is Ergo wallet available on iOS?  
  **A** (@MrStahlfelge): iOS wallet is production-ready but on TestFlight; requires corporate Apple Developer account (€99/year) for App Store release. [@MrStahlfelge, msg#301928; @Unknown, msg#301463, 2022-08-22]

- **Q** (@Unknown): Can I use Ergo on Trust Wallet or MetaMask?  
  **A** (@Unknown): No native Ergo support on either; use dedicated Ergo wallets (Nautilus, Mobile Wallet, Satergo). Trust Wallet integration not recommended. [@Unknown, msg#301947-948, 2022-08-28]

- **Q** (@Richi): Why do node v5.0 votes appear on specific blocks?  
  **A** (@Glasgow): Voting reflects node version decisions; miners can switch pools if pool's voting stance disagrees with theirs. [@Glasgow/ArØhβΣ, msg#300835, 2022-08-23]

## Links Shared

- [ergo.watch/emission](https://ergo.watch/emission): Real-time emission schedule visualization. [@Unknown, msg#300221, 2022-08-22]
- [ergoplatform.org/en/get-erg/#Wallets](https://ergoplatform.org/en/get-erg/#Wallets): Official wallet recommendations. [@Unknown, msg#300432, 2022-08-22]
- [ergoplatform.org/en/get-erg/#Exchanges](https://ergoplatform.org/en/get-erg/#Exchanges): List of supported exchanges. [@Glasgow, msg#301419, 2022-08-26]
- [github.com/anon_BR/ergo-paper-wallet](https://github.com/anon-br/ergo-paper-wallet): Paper wallet repo (download, run offline). [@Unknown, msg#300510, 2022-08-22]
- [satergo.com](https://satergo.com): GUI node wallet for Windows/Linux/Mac. [@Unknown, msg#300490, 2022-08-22]
- [ergonames](https://github.com/ergonames): Community domain registry project. [@Glasgow, msg#300565, 2022-08-23]
- [app.spectrum.fi/ergo/swap](https://app.spectrum.fi/ergo/swap): Spectrum DEX liquidity pools. [@Unknown, msg#300279, 2022-08-22]
- [ergoraffle.com](https://ergoraffle.com): Community raffle platform (scam warnings apply). [@Unknown, msg#300648, 2022-08-23]
- [Ergo Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/): Core philosophy document. [@J, msg#301006, 2022-08-24]
- [iOS Ergo Wallet TestFlight Guide](https://ergoplatform.org/en/blog/2021-12-21-ios-ergo-wallet-how-to-guide/): Instructions for iOS beta. [@J, msg#301791, 2022-08-27]
- [Ledger Dev Docs (Nano App Load)](https://developers.ledger.com/docs/nano-app/load/): Sideload instructions for Nano S/S+. [@Flying Pig, msg#300545, 2022-08-23]
- [github.com/ThierryM1212/SAFEW](https://github.com/ThierryM1212/SAFEW): SafeW browser wallet alternative. [@Unknown, msg#301133, 2022-08-24]
- [ergonaut.space/en/Guides/yield](https://ergonaut.space/en/Guides/yield): Yield farming guide. [@Glasgow, msg#300563, 2022-08-23]
- [ergoplatform.com/dev/stack/mosaik/intro/](https://docs.ergoplatform.com/dev/stack/mosaik/intro/): Mosaik plugin system documentation. [@Unknown, msg#301058, 2022-08-24]
- [Ergo Mobile Wallet Desktop Version](https://github.com/ergoplatform/ergo-wallet-app/releases/tag/v2.0.2215-desktop4): Windows MSI release. [@MrStahlfelge, msg#301929, 2022-08-28]
- [github.com/MrStahlfelge/ergopay-payment-portal](https://github.com/MrStahlfelge/ergopay-payment-portal/): Self-hosted ErgoPayment gateway. [@MrStahlfelge, msg#301440, 2022-08-26]
- [cryptocurrencycheckout.com/coin/ergo](https://cryptocurrencycheckout.com/coin/ergo): WooCommerce Ergo integration via third-party processor. [@Glasgow, msg#301449, 2022-08-26]
- [KuCoin Announcement (Aug 31 Upgrade)](https://www.kucoin.com/news/en-announcement-regarding-the-upgrade-of-partial-trading-pairs-on-august-31): Trading Bot upgrade notice. [@Armeanio, msg#302146, 2022-08-28]
- [CryptoSlate: Miners Prefer Ergo Post-Merge](https://cryptoslate.com/most-pow-miners-intend-to-mine-ergo-not-ravencoin-or-ethereum-classic-post-merge/): Media coverage. [@Unknown, msg#300576, 2022-08-23]
- [Coinbase Curse Reddit Thread](https://www.reddit.com/r/ergonauts/comments/s6c81j/the_coinbase_curse/): Discussion of major exchange listing dynamics. [@Unknown, msg#302116, 2022-08-28]

## Unresolved Questions

- **Binance/Major Exchange Listing**: Why is Ergo not on Binance, Coinbase, or FTX despite GPU mining shift post-merge? Answer: Team has completed integration work; listing depends on exchange interest and regulatory requirements. Discussion flagged for trading channel to avoid repetition. [@Leo, msg#302114-117, 2022-08-28]

- **EVM Compatibility**: Will Ergo ever support EVM or EVM-compatible sidechains for easier contract migration? Mentioned in context of Cardano's EVM sidechain but no confirmed roadmap. [@The Horticulturalist, msg#300724-740, 2022-08-23]

- **Dexy Gold & Demurrage Stablecoin**: Status and timeline for Dexy Gold and "basket of goods" stablecoin remains TBD. [@Snowman Jason, msg#301831, 2022-08-27]

- **Oracle Pool v2 Rewards**: Unclear whether Oracle Pool v2 (running for Dexy Gold) uses court rewards or different incentive structure. [@Richi, msg#300751, 2022-08-23]

- **Scam Raffle Prevention UX**: Optimal solution for decentralized raffle verification not finalized. Proposals include verified Twitter links, collateral fees, or on-chain NFT identity systems. Concerns raised about self-serving governance. [@Unknown, msg#302027-050, 2022-08-28]

- **Rosen Bridge Mainnet Launch**: No ETA confirmed for Rosen Bridge mainnet or Rosen token distribution. [@Luivatra, msg#301827, 2022-08-27]

- **Mining Pool Decentralization Details**: Full whitepaper and specifics on GetBlok smart pool collateral mechanisms not yet published. [@A, msg#300998, 2022-08-24]

- **Block Speed Improvements**: Proposal to increase block time discussed; security implications & timestamp-dependent contracts flagged but no consensus reached. [@kushti, msg#300756-761, 2022-08-23]