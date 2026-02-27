# Ergo General Chat Summary — 2024-W34
**Period:** 2024-08-19 to 2024-08-25  
**Messages Processed:** 387  
**Participants:** 46

---

## Key Topics Discussed

- **Ergo 6.0 Development & Testing**: kushti actively testing 6.0 transactions on devnet with improvements to cryptographic protocol support, cross-chaining, rollups, and Lithos. Cheese Enthusiast completed Lithos client initial development and began MEV integration and NISP contract work in anticipation of 6.0 devnet launch [@kushti khushi, msg#509874, 2024-08-21].

- **ChainCash Contract Extensions**: kushti proposing NFT-gating mechanism for ChainCash notes via CCIP-1, allowing input NFTs to impose different limitations on note usage, leveraging full ErgoScript contractual capabilities while keeping CCIP-0 for simple payments [@kushti khushi, msg#509875, 2024-08-21].

- **Lithos Protocol**: Cheese Enthusiast finished initial client development, working on MEV integration and NISP contracts; Lithos is blocked pending 6.0 devnet availability [@Glasgow, msg#510204, 2024-08-23].

- **Storage Rent UX**: Wallet developers discussing how to present storage rent feature to end-users; identified need for clear terminology ("Storage Rent Due" vs. "Mineable"), approximate dates, and optional consolidation UI rather than confusing technical terms [@Flying Pig, msg#509980-985, 2024-08-22].

- **Sigmanauts Mining Pool**: Finished storage rent integration for MiningCore [@kushti khushi, msg#509872, 2024-08-21].

- **Ergo vs. Other Blockchains**: Community discussion on Ergo's unique positioning (eUTXO model, economic sustainability, Schnorr signatures) and comparison to Bitcoin, Ethereum, Solana [@Ergo NEWS, msg#509708, 2024-08-20].

- **Scaling Solutions**: Hydra discussed as potentially suitable for Ergo but only for trusted state signer scenarios; Oracle Pools identified as more appropriate current focus; L1 scaling prioritized over layer 2 [@kushti khushi, msg#509718-720, 2024-08-21].

- **Marketing & Adoption Strategy**: Extended discussion on separating marketing/adoption initiatives from technical development; community debating whether marketing focus should follow product maturity (Rosen, Lithos v2 launch) or precede it [@Crimson Cryptos, msg#509590-636, 2024-08-19-20].

- **ErgoSphere Off-Chain Bot**: Community member successfully built and ran ErgoSphere (off-chain executor for Spectrum/CruxFinance orders) on Windows after compiling with Maven; discussed Docker compatibility issues with Windows LTSC [@Patato, msg#510313, 2024-08-23].

- **Wallet Seed Phrase Recovery**: Mobile wallet user recovered funds after discovering BIP-39 word misspelling during seed phrase entry; identified that Ergo mobile app does not enable auto-correct on seed phrase fields [@Mentalics, msg#509770-775, 2024-08-20].

- **CEX Alternatives & P2P Acquisition**: Discussion of acquiring ERG without centralized exchanges — ATM→BTC→ERG swaps, StealthEx, SimpleSwap (poor rates), Splash (ADA→ERG bridge), TradeOgre, CoinEx; noted no ATM infrastructure exists for direct ERG purchase [@Aberg, msg#510121-135, 2024-08-22].

- **DEX Fee Structures**: Comparison of Ergo DEXes — CruxFinance 50% lower fees, MewFinance 0% fees for Tier 6 holders, ErgoDex 0.15% on swaps [@HQΣr, msg#509826-827; Aco, msg#509839, 2024-08-21].

- **Cup of Sugar (LETS) Project Update**: Real-world deployment progress — deployed Svelte/nginx frontend, tested ChainCash server endpoints, market research at farmers markets showing positive interest, LLC formalization this week, 2 store locations identified for follow-up [@kushti khushi, msg#509970, 2024-08-22].

---

## Important Decisions or Announcements

- [@kushti khushi, msg#509874, 2024-08-21]: Running 6.0 initial devnet on local machine; close to launch.

- [@kushti khushi, msg#509933, 2024-08-21]: 6.0 improvements: better cryptographic protocol support, cross-chaining, rollups, Lithos, and various fixes.

- [@Cheese Enthusiast (per kushti), msg#509872, 2024-08-21]: Lithos client initial development complete; MEV integration and NISP contracts underway pending 6.0 devnet.

- [@Andy L, msg#509966-972, 2024-08-22]: Ergo Weekly Update and AMA held featuring kushti, qx(), and mgPai; stream link provided.

- [@HQΣr, msg#509708, 2024-08-25]: Spammed trusted community members with MewFinance product feedback request.

- [@Yulius Kristianto, msg#510623-629, 2024-08-24]: Whitepaper translations released for Indonesian community (Bober whitepaper, GIF token documentation); CoinGecko listing request ticket submitted (CL2408240031).

---

## Technical Q&A Worth Preserving

- **Q** (@DiscoverErgo, msg#509715): "Recently been seeing coverage of Doom running on Cardano's Hydra — do we have similar scaling solutions in the works or even now? I know architecture-wise both chains are eUTXO?"  
  **A** (@kushti khushi, msg#509718): "Hydra can be built on Ergo, but I think it is suitable for certain apps only where you can have a set of trusted state signers."  
  **A** (@Armeanio, msg#509719-720): "Oracle pools seem to make the most sense currently."

- **Q** (@Flying Pig, msg#509976-980): How should wallet UI present storage rent feature to non-technical users?  
  **A** (@Flying Pig, msg#509980-985): Use "Storage Rent Due" instead of "Mineable", show approximate dates, provide consolidated summary of all boxes with rent due dates, add optional consolidation button. Needs dedicated explainer page.

- **Q** (@Patato, msg#510257): "Why can't create a liquidity pool on any DEX?"  
  **A** (@Unknown, msg#510260): Consolidate wallet, disconnect/uninstall wallet extension, clear browser cache, restart, reinstall, try again.  
  **A** (@Patato, msg#510264): Tokens need proper decimal settings.

- **Q** (@Patato, msg#510284): "ErgoDex offchain execution — what is this for?"  
  **A** (@Flying Pig, msg#510286-289): "Spectrum uses offchain bots that scan for exchange transactions and then execute them. There's a race to find and execute them and the winner gets a small reward."  
  **A** (@kushti khushi, msg#510288): "Collect fees from orders submitted to the Ergo p2p network."

- **Q** (@Mentalics, msg#509746): Restored wallet on mobile shows 0 balance despite funds.  
  **A** (@Patato, msg#509760-761): Check for misspelled seed phrase words; BIP-39 list available. Mobile wallet accepts any word regardless of BIP-39 match.  
  **Resolution** (@Mentalics, msg#509770): Corrected misspelled word and recovered funds successfully.

- **Q** (@T F, msg#510242): "If Ergo gets added to Keystone hardware wallet, what software wallet is needed?"  
  **A** (@Pulsarz, msg#510243-245): "Most likely Nautilus. That's the plan afaik."

- **Q** (@Patato, msg#510303): How to compile ErgoSphere project on Windows?  
  **A** (@Glasgow, msg#510308): Install Maven, then run `mvn clean package` to build jar.  
  **Resolution** (@Patato, msg#510313): Successfully compiled with Maven and ran jar via PowerShell; Docker compatibility issue with Windows LTSC discovered; planning Linux VM approach.

- **Q** (@Son Nguyen, msg#509798): Why isn't wallet X in top 100 richlist?  
  **A** (@Aco, msg#509801): Because it only has 3,000 ERG and richlist tracks top 100 by holdings (millions).

---

## Links Shared

- [https://t.me/MewFinance](https://t.me/MewFinance): MewFinance Telegram group for announcements.

- [https://vxtwitter.com/Erg0ne/status/1825605639126790452](https://vxtwitter.com/Erg0ne/status/1825605639126790452): Ergo ecosystem content.

- [https://github.com/ergoplatform/ergo/pull/2179/files](https://github.com/ergoplatform/ergo/pull/2179/files): README improvements for developer onboarding (kushti's work on Ergo protocol messaging).

- [https://github.com/cornbelt-dev/sigma-subscriptions-manager](https://github.com/cornbelt-dev/sigma-subscriptions-manager): Base for decentralized subscription/content access using ERG NFT keys (Angular).

- [https://bitcoin/bips/blob/master/bip-0039/english.txt](https://bitcoin/bips/blob/master/bip-0039/english.txt): BIP-39 English word list for seed phrase validation.

- [https://www.ergexplorer.com/transactions#c86549ef0e939a197188a093a3887409a349f9265f67d7920a5321be00195d4c](https://www.ergexplorer.com/transactions#c86549ef0e939a197188a093a3887409a349f9265f67d7920a5321be00195d4c): Ergo transaction proof from pruned full node on Android wallet (Patato test).

- [https://github.com/jellymlg/ErgoSphere](https://github.com/jellymlg/ErgoSphere): Off-chain bot executor for Spectrum/CruxFinance orders; requires Maven to compile.

- [https://maven.apache.org/install.html](https://maven.apache.org/install.html): Maven installation guide (for ErgoSphere compilation).

- [https://www.twitch.tv/xbobmoris](https://www.twitch.tv/xbobmoris): Cyberverse minigames and Poker game stream.

- [https://youtube.com/watch?v=Kg8p0g2I0xI](https://youtube.com/watch?v=Kg8p0g2I0xI): "Bring Ergo to College Students" talk (kushti recommendation for future Twitter Spaces).

- [https://youtube.com/live/RZXXakw0O-w](https://youtube.com/live/RZXXakw0O-w): Ergo Weekly Update and AMA with kushti, qx(), mgPai (2024-08-22).

- [https://twitter.com/ergo_platform/status/1825975357968617602](https://twitter.com/ergo_platform/status/1825975357968617602): Ergo platform update announcement.

- [https://dex.crooks-fi.com/ergo/swap](https://dex.crooks-fi.com/ergo/swap): CruxFinance DEX (50% lower fees).

- [https://mewfinance.com](https://mewfinance.com): MewFinance DEX (0% fees for Tier 6).

- [https://www.ergdex.com/](https://www.ergdex.com/): ErgoDex (0% service fee; noted as good for testing worthless tokens).

---

## Unresolved Questions

- **Storage rent UI/UX standardization**: Flying Pig proposed consolidation auto-trigger on every wallet use; Aberg disagreed ("sounds like a bad idea in my opinion") — no resolution reached [@msg#509986-988, 2024-08-22].

- **Hydra vs. Oracle Pools for Ergo scaling**: Discussion identified Hydra as possible but limited (trusted signers only); Oracle Pools more suitable. No formal decision documented on which to prioritize beyond "L1 scaling focus" [@msg#509715-720, 2024-08-21].

- **Marketing group structure & funding**: Crimson Cryptos asked whether Sigmanauts is a marketing group and if it can receive EF funds. Glasgow directed to @ErgoSocials but no explicit structure confirmed [@msg#509604-609, 2024-08-19].

- **Hardware wallet integration (Keystone)**: Pulsarz stated Nautilus is "the plan afaik" but no formal announcement of status or timeline [@msg#510243-245, 2024-08-23].

- **AMA "huge secret"**: qx() hinted at a significant revelation during the 2024-08-22 AMA that Andy cut live; details not disclosed [@msg#510196-197, 2024-08-23].

- **ErgoSphere Docker on Windows**: Patato unable to resolve Docker incompatibility with Windows LTSC; planning Linux VM workaround but not tested [@msg#510313, 2024-08-23].

- **Ephemeral messages / privacy features**: Velvia raised need for easy-to-use privacy features; qx() replied "After sigmalok ser" but no timeline or specification [@msg#510728-729, 2024-08-25].

---

**Summary Notes:**
- Week dominated by Ergo 6.0 devnet preparation and testing; Lithos team awaiting 6.0 to complete development.
- Strong focus on UX/onboarding friction (storage rent terminology, wallet recovery, hardware wallet integration).
- Emerging real-world use case (Cup of Sugar/LETS) showing ecosystem maturity for practical applications.
- Community consensus that adoption follows product maturity, not vice versa; marketing strategy deferred pending major releases.