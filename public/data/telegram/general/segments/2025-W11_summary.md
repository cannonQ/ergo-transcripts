# Ergo General Chat — 2025-W11 Summary

## Key Topics Discussed

- **Sub-blocks Development**: kushti reported out-of-order sub-block application is working, fork handling in progress, P2P messaging being developed. Fork rollbacks must be efficient; quick sub-block propagation is critical (msg#550064, #550067-069).

- **Quantum Resistance & Cryptography**: Discussion of quantum threats to Bitcoin; c8 posted detailed narrative on Ergo's quantum-resistant design (Schnorr signatures, Lamport schemes, post-quantum cryptography already in blueprints) (msg#550043, #550050).

- **SigmaUSD Bank Update**: Bank's update box refreshed for storage rent safety "for decades to come" (msg#550217). MewFinance now has UI for SigmaUSD bank (dev.mewfinance.com).

- **Storage Rent / Demurrage**: kushti clarified Ergo uses demurrage instead of tail emission; LouisLibre discussed demurrage as functional tax in fixed-money-supply systems (msg#550636, #550172-182).

- **Emission Reduction Milestone**: Next emission reduction in 25 days (from 18 to 3 ERG per block); Flying Pig noted emissions drop dramatically over next 15 months (msg#550160, #550159).

- **Rosen Bridge Activity**: 0.5 BTC ($39k USD) bridged Bitcoin → Ergo; multiple discussions on Rosen integration with Runes and metadata embedding via RuneScript (msg#550650, #550608).

- **Mobile Node Implementation**: Ergo Node Android now supports stateless (~1GB), NIPoPoW, and full node (~3GB) modes; lighthouse.ergoplatform.org provides IPFS gateway fix for Ergo Android Wallet NFT display (msg#550662-664, #551082).

- **Free Banking & P2P Lending**: kushti clarified transparent permissionless cryptocommodity + monetary expansion removes government crackdown vectors for free banking (msg#550870). Exle protocol remains operational, collateralless, with public APIs; kii emphasized it's a protocol, not an organization—no traditional success/failure metric applies (msg#551123-124).

- **Ergolend/Exle Revival Proposal**: Gnawa Pirate proposed incorporating Exle as a company in Tanzania (leveraging local tech valley incentives) to scale P2P lending; community sentiment mixed; Chris Ray advocates for concrete proposal before treasury deployment (msg#550900, #550924, #551051-067).

- **Nautilus Wallet v1.0.0-beta.1**: First refactored release available; testnet build requires unpacking Chrome extension from GitHub releases (msg#550217, #550584-586).

- **Satergo v1.9.0 Release**: Ledger hardware wallet support, Satergo Offline Vault (Android), update functionality, more secure wallet format (msg#550606, #550619).

- **ChatGPT Models for Ergo**: Two trained models released—Ergo Platform Developer Support (by Glasgow) and ErgoScript Wizard (by Luca D'Angelo) (msg#550123-124).

- **Speculation on CEX Listing Effects**: c8 argued Binance listing may trigger dump (citing MEXC experience, negative ACPU); Windblow expressed optimism Binance's size would support price. Disagreement unresolved. c8 proposed prediction market (willbinancedumponme.com) (msg#549952-998).

- **Community Townhalls & Spaces**: "Ergo as Endgame for Crypto" townhall held (recording on Nostr); upcoming Spaces on "Programmable Reserve Assets" (msg#550217, #550555, #550698).

- **Ergo Book Project**: kushti initiating collaborative document on ideological foundations, P2P money, grassroots finance, programmable onchain reserves; LouisLibre, Armeanio, Grayman contributing (msg#551156).

## Important Decisions or Announcements

- [@kushti khushi, msg#550022, 2025-03-10]: Will provide sub-blocks and 6.0 updates later that day.
- [@kushti khushi, msg#550064, 2025-03-10]: Sub-block out-of-order application working; fork handling and P2P messaging in progress; testnet with multiple peers can be set up once complete.
- [@Ergo NEWS $ERG, msg#550217, 2025-03-11]: Ecosystem weekly update (covering Feb 23–Mar 9): SigmaUSD bank refreshed, MewFinance UI for bank + DuckPools dashboard live, Nautilus v1.0.0-beta.1 released, Sigmanauts Mining Pool finalized Sigma Bytes frontend with NFT minting for 3 ERG, Ergo Node Android getting updates again. Charles Hoskinson proposed forking DogeCoin with Ergo tech. Satergo update reported close.
- [@cannon_q, msg#550028, 2025-03-10]: Set community priorities for exchange onboarding: (1) USA on/off ramp with Tier 1 exchange, (2) see #1 above.
- [@Aberg Satergo dev, msg#550606, 2025-03-12]: Satergo v1.9.0 released with Ledger support, Offline Vault, update functionality, secure wallet format.
- [@kushti khushi, msg#550635, 2025-03-13]: No AMA today; Spaces townhall tomorrow instead.
- [@Andy L, msg#550568, 2025-03-12]: Weekly AMA and update postponed; Friday townhall substitutes; updates resume next Thursday.
- [@qx(), msg#550721, 2025-03-14]: 50-min warning for Spaces event.
- [@cannon_q, msg#550480, 2025-03-11]: Sub-blocks ETA "summer-ish" (acknowledged "could be wrong, known to happen").

## Technical Q&A Worth Preserving

- **Q** (@kushtoshi ergomoto, msg#550581): How to create testnet wallet?
  **A** (@qx(), msg#550582-586): Download Nautilus testnet build from GitHub releases (nautilus-testnet-chrome-1.0.0.zip), unzip, load unpacked extension in Chrome extensions manager.

- **Q** (@blake starky, msg#550889): Experiencing "Waiting for connection with ErgoPay" hang when using Terminus Wallet on iPhone with ErgoDex or MewFinance DEX.
  **A** (@HQΣr, msg#550893): Recommended switching to dex.mewfinance.com. Note: blake still reported same issue; likely wallet/browser compatibility problem unresolved.

- **Q** (@Dimi, msg#550016-017): Has anyone created a coin tracking S&P500 or individual stocks (Tesla, Nvidia)?
  **A** (@c8, msg#550018-019): Vector oracles needed; without them, hard to find consistent infrastructure operators for each new price feed (#vectororacles).

- **Q** (@iVacuum, msg#551004): Started learning ErgoScript; seeking resources beyond ChatGPT.
  **A** (@cannon_q, msg#551007): DECO videos are "pretty great" for learning. Recommended ChatGPT trained models: ErgoScript Wizard (msg#551013).

- **Q** (@c8, msg#551075): Why talk to node directly instead of API; what additional data does API provide?
  **A** (@kii, msg#551121): Data is on-chain; API filters and organizes it. No technical barrier; API is convenience layer.

- **Q** (@kushti khushi, msg#550385): What is Solaris?
  **A**: No answer recorded; context unclear.

## Links Shared

- [https://nostr.band/note1aelp589ud3vem3nfu2whdjeqzn479ya3dsfccca59d479f7hyt0qtg3fjl]: "Ergo as Endgame for Crypto" community townhall recording (Nostr).
- [https://dev.mewfinance.com/]: MewFinance SigmaUSD bank UI preview.
- [https://trading.mewfinance.com/duckpools]: MewFinance DuckPools loans dashboard.
- [https://github.com/marctheshark3/ergo-mcp]: Ergo-MCP (AI aware of Ergo blockchain data); usage guide in Twitter broadcast.
- [https://v2ui.skyharbor.io/]: SkyHarbor V2 preview.
- [https://github.com/nautls/nautilus-wallet/releases/tag/v1.0.0-beta.1]: Nautilus Wallet refactored release.
- [https://chromewebstore.google.com/detail/nautilus-abyss/moaohjebjfiodfiegjnjkbnalepemcpf]: Nautilus Abyss (Abyss Channel Chrome extension).
- [https://sigmaspace.io/en/storage-rent]: SigmaSpace explorer showing Sigmanauts Mining Pool demurrage profits.
- [https://github.com/rustinmyeye/ErgoNodeAndroid]: Ergo Node Android repository.
- [https://x.com/IOHK_Charles/status/1896791646962090427]: Charles Hoskinson proposing DogeCoin fork with Ergo tech.
- [https://chatgpt.com/g/g-2ymxwcWp8-ergo-platform-developer-support]: Ergo Platform Developer Support ChatGPT model (by Glasgow).
- [https://chatgpt.com/g/g-8QjeXEXQC-ergoscript-wizard]: ErgoScript Wizard ChatGPT model (by Luca D'Angelo).
- [https://x.com/ergo_platform/status/1899871828278903164]: Townhall announcement (March 12, Spaces on "Programmable Reserve Assets").
- [https://satergo.com]: Satergo v1.9.0 release page.
- [https://curiaregiscrypto.medium.com/diving-in-integrating-runes-into-rosen-bridge-be41e338a56a]: Medium article on Runes integration via Rosen Bridge (Armeanio).
- [https://curiaregiscrypto.medium.com/runescript-embedding-metadata-into-runes-using-the-rosen-bridge-approach-28afb5294b95]: Medium article on RuneScript metadata embedding (Armeanio).
- [https://curiaregiscrypto.medium.com/building-a-trustless-future-money-abstraction-and-technology-dc4af3063e36]: Medium article on trustless money abstraction (Armeanio).
- [https://app.rosen.tech/assets]: Rosen Bridge asset page showing locked ERG and cross-chain deployment.
- [https://github.com/code-for-uss/dexy-sdk-ts]: Dexy SDK TypeScript (c8 recommendation for Dexy Gold integration).
- [https://github.com/StabilityNexus/Gluon-Ergo-SDK]: Gluon Ergo SDK (c8 recommendation).
- [https://sigmanauts.com/questions/]: Sigmanauts community questions submission form (for Friday AMA).
- [https://github.com/nautls/nautilus-wallet/releases]: Nautilus Wallet releases (includes testnet builds).
- [https://njump.me/nevent1qqsxyuc2cca6x09hlt2aezlpuh4d0ea7utqd52kuqnatsrt75vxclyqpz4mhxue69uhhyetvv9ujuerpd46hxtnfduhsygp8cpj55hljhpnjkp6x2glpde34yt9p58r97y7n84upz8vw7zd74upsgqqqqqqswzt93w]: Nostr note on Ergo Node Android (by rustinmyeye).

## Unresolved Questions

- **Sub-blocks Performance Target**: No concrete latency or throughput spec defined; "summer-ish" ETA only (msg#550480).
- **Binance Listing Price Impact**: c8 argues listing will cause dump; Windblow predicts bull. Unresolved philosophical disagreement on CEX effects. c8 proposed prediction market to settle (msg#549952-998).
- **Kraken USA On-Ramp Status**: Mentioned as priority but no update on timeline or negotiations (msg#550028).
- **Solaris Reference**: kushti asked what it is (msg#550385); no answer recorded.
- **Exle/Ergolend Governance Path**: Chris Ray open to proposals but requires community vote on treasury deployment; Gnawa Pirate committed to writing proposal but concrete plan still TBD (msg#550924, #551051-067).
- **Nautilus Testnet Wallet Settings**: blake starky reports iPhone ErgoPay connection hang persists after switching DEXes; underlying browser/wallet compatibility issue not diagnosed (msg#550889-896).
- **Mobile Node Public API**: kushti suggested making Ergo Node Android nodes public; kii noted WiFi/port-forwarding or VPN (Wireguard/Tailscale) tunneling required for cellular (msg#550688, #550693-694).
- **Community Structure for Ergo Book**: kushti noted structure "under consideration"; contributors TBD (msg#551156).