# Ergo General Chat — 2026-W02 Summary

## Key Topics Discussed

- **Oracle Pool Infrastructure Updates**: Oracle Core v2.0.5 and v2.0.6 released to fix CoinGecko API integration issues. New data feeds added for robustness. Oracle stats visualization page deployed to aid epoch monitoring and health status tracking.

- **USE Stablecoin Listings & Integration**: USE token verified on multiple platforms (Taptools, GeckoTerminal, CMC Dex Terminals, DefiLlama). Chainspecs deployment spec clarification needed regarding decimal configuration (6 decimals vs 3 decimals for USE).

- **Sub-blocks (Matrix) Scalability Roadmap**: Development ongoing with target to reduce confirmation times to ~2 seconds. Input blocks specification document under active review. No firm mainnet activation date yet, but high priority for 2026.

- **VoltPay Cross-Chain Integration**: First official swap completed (ADA to USE). Backend uses multiple exchange providers (Exolix, Swapter, StealthEx) with integrated DEX layer. Further optimizations underway for faster swap execution.

- **Stablecoin Architecture & Minting**: Discussion on SigmaUSD vs USE architecture differences. Degens.World StableMiner v1.1 released with auto-mint capabilities. Auto-conversion of ERG from miners into USD stables directly on-chain now possible.

- **Ergo Node & Infrastructure Development**: Dark mode PR submitted for Ergo Node. Ergo wallet-app 2.5 release candidate prepared. GPU vanity address generator (320k addresses/sec on 3080 Ti) built using AI-assisted coding.

- **2026 Development Priorities**: ErgoDevs DAO scope, node releases, Matrix activation, dApp infrastructure needs, and LLM role in development discussed. Block reward final reduction to 3 ERG scheduled for April 2026.

- **Community Infrastructure & Tooling**: P2P messaging app development progressing. Oracle stats page deployed as self-hosted status monitoring tool. New emission monitoring dApp (ergoemissions.degens.world) launched.

- **Rosen Bridge Integration**: Nervos DAO voting open for CKB integration with Rosen Bridge. Multiple cross-chain partnerships in discussion phase.

---

## Important Decisions or Announcements

- [@kushti, msg#587712, 2026-01-05]: Update PR ready for release (specific context unclear from excerpt).

- [@cannon_q, msg#587718, 2026-01-05]: Ergo wallet-app 2.5 release candidate created; PR #208 requires review and testing.

- [@kushti, msg#587754, 2026-01-05]: USE deployment spec needs review; master branch shows outdated token ID and 6 decimals (should be 3).

- [@Aco Šmrkas, msg#587752, 2026-01-05]: Third-party price supplier API issue fixed (over-eggnog problem).

- [@kushti, msg#587998, 2026-01-09]: Oracle Core v2.0.5 released with CoingGecko API fix. Robustness improvements added via PR #343.

- [@kushti, msg#587998, 2026-01-09]: All oracle pools previously affected by CoinCap API outage + CoinGecko user-agent requirement.

- [@kushti, msg#588041, 2026-01-10]: Oracle Core v2.0.6 released.

- [@ArØhβΣ @Arohbe 🍪, msg#587953, 2026-01-08]: Stable Miner v1.1 released with auto-mint capabilities and improved README documentation.

- [@cannon_q, msg#587894, 2026-01-08]: Matrix (sub-blocks/input blocks) still in testing phase with updated specification document available.

- [@HQΣr, msg#587813, 2026-01-06]: First official VoltPay swap completed (ADA to USE).

- [@kushti, msg#588046, 2026-01-10]: Oracle stats visualization page deployed via GitHub Pages at https://error1100.github.io/oracle-stats/.

- [@Yulius Kristianto, msg#588065, 2026-01-10]: USE listed on DefiLlama stablecoin tracker.

- [@qx(), msg#588107, 2026-01-11]: Ergo node spin-up incentive announced: 25k MEW for participants posting about node setup on P2P apps.

---

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#588038): How can a token appear with its full emission amount in two separate output boxes simultaneously? Token example provided.
  **A** (@Luca D'Angelo, msg#588039): Token uniqueness enforced by token ID, not amount distribution. Emission amounts can be spread across multiple UTXOs. [@kushti, msg#588042]: Detailed answer provided in dev group (context not shown in excerpt).

- **Q** (@The Horticulturalist, msg#588006): Is there intention to build stablecoin products? Timing opportune for Silver market?
  [Unresolved — no direct response in chat excerpt]

- **Q** (@T F, msg#587797): Book recommendation for local community currency education.
  **A** (@kushti, msg#587820, msg#587822): "Rethinking Money" by Lietaer and Dunne recommended as one of Lietaer's best works. Short online resources also available.

- **Q** (@cannon_q, msg#587802, msg#587806): Local currency sustainability challenges discussed. How to maintain movement momentum after leader engagement?
  **A** (@cannon_q): Voluntary social element creates tribal behavior challenges. Leader fade/disengagement often creates vacuum that consumes movement. (@Armeanio): Voluntary social-driven element is challenging because people tend toward tribalism.

---

## Links Shared

- [https://github.com/ergoplatform/ergo-wallet-app/pull/208]: Ergo wallet-app 2.5 release candidate PR requiring review.

- [https://github.com/kushti/dexy-stable/blob/master/spec/deployment-usd.md]: USE deployment specification (flagged as outdated).

- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.5]: Oracle Core v2.0.5 release with CoinGecko API fix.

- [https://github.com/ergoplatform/oracle-core/pull/343]: Oracle Core PR #343 adding robust data feeds.

- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.6]: Oracle Core v2.0.6 release.

- [https://github.com/ergoplatform/ergo/blob/weak-blocks/papers/inputblocks/main.pdf]: Matrix/sub-blocks/input blocks specification paper under review.

- [https://github.com/ArOhBeK/Stable-Miner/tree/v1.1]: StableMiner v1.1 with auto-mint capabilities.

- [https://github.com/arkadianet/erg-vanity-gpu]: OpenCL GPU vanity address generator for Ergo (320k addresses/sec on 3080 Ti).

- [https://error1100.github.io/oracle-stats/]: Deployed oracle stats visualization page (self-hosted option available).

- [https://defillama.com/stablecoin/use]: USE stablecoin listing on DefiLlama.

- [https://dao.ckb.community/thread/vot-ckb-integration-for-rosen-bridge-66568]: Nervos DAO voting for Rosen Bridge CKB integration.

- [https://www.sozialoekonomie.info/archive/archiv-geld-und-bodenreform.html]: Polyglot language catalog with Gesell (monetary theory reference).

- [https://playcyberverse.com/]: Cyberverse game relaunch (15,000+ Cyberverse-related NFTs/FTs minted on Ergo).

- [https://bvb.ergexplorer.com/funding]: Bulls vs Bears prediction game on Ergo seeking funding.

- [https://t.me/BullsVsBearsErgo]: Telegram for Bulls vs Bears decentralized prediction game.

- [https://mewpump.vercel.app]: Mew Finance trading interface.

- [https://faku.lol/]: FAKU movement website.

- [https://centerforneweconomics.org/]: Center for New Economics resources (local currency discussion).

- [https://repozytorium.uwb.edu.pl/jspui/bitstream/11320/18325/1/SUP_8_2024_E_Mielech_The_Significance_of_Local_Currencies.pdf]: Academic paper on local currency significance.

- [https://open.spotify.com/show/2PGOrNjQnwOAEkmkKLZPle?]: Spotify podcast series featuring local currency implementation stories.

- [https://www.geckoterminal.com/bsc/pools/0xb042fe39b91d2f607cf19a036740c79ceac31849]: GeckoTerminal USE pool listing.

- [https://dex.coinmarketcap.com/token/bsc/0x04458bD623824e7e7DF04Be619B553FC5f286151/]: CoinMarketCap DEX terminal USE listing.

- [https://www.taptools.io/charts/token/f5808c2c990d86da54bfc97d89cee6efa20cd8461616359478d96b4c.b1fb52e54d32b4ccdf704e8d29b1c548202fc99120d4b7efe5ff27d254562124]: Taptools USE token verification.

---

## Unresolved Questions

- **USE Deployment Spec Accuracy** (msg#587753): Decimal configuration mismatch (spec lists 6, actual is 3) causing confusion. Status of correction unclear.

- **Sub-blocks Mainnet Timeline**: No firm activation date provided. "Probably another year or so" was speculative; cannon_q requested more constructive discussion focused on 2026 development priority.

- **Silver Stablecoin Products**: Question raised about intention to build silver-backed stablecoins and optimal timing, but no response recorded.

- **Local Currency Sustainability Model**: Theoretical discussion opened but not resolved — how to maintain movement momentum when founder/leader engagement fades.

- **Chainspect Listing Requirements**: Platform appears to use pay-to-play model; value of pursuit unclear.