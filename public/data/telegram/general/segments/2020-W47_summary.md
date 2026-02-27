# Ergo General Chat — 2020-W47 Summary
## 2020-11-16 to 2020-11-22

---

## Key Topics Discussed

- **Storage Rent Mechanics**: Unused ERGs in wallets incur a storage rent fee (~0.13 ERG per UTXO over 4 years), which is charged by miners and returns lost coins into circulation. This provides miners with income after initial emission ends.

- **Autolykos v2 Hard Fork**: A memory-hard PoW algorithm upgrade coming to improve ASIC resistance and enable broader GPU/CPU mining participation. Expected to reduce hashrate by ~8x initially but improve decentralization.

- **Mixer v3.1 Release**: ErgoMixer v3.1.0 released with ability to import existing addresses (e.g., from Magnum), convert them to covert addresses, and maintain transaction privacy. Major performance refactoring completed.

- **Stablecoin Development**: Partnership with Emurgo and IOG (Input Output Global) to build a stablecoin on Ergo. Full UI integration planned for Yoroi wallet. Specs not yet released; expected late 2020/early 2021.

- **Emission Curve**: Ergo has ~97.74M total supply (not 100M) due to emission trailing off monthly starting July 2021. All coins will be mined in ~8 years (6.5 years remaining). Current emission is ~75 ERG per block, decreasing by 3 ERG every 3 months.

- **NIPoPoWs and Flash Loan Resistance**: Ergo's design prevents flash loan exploits (referenced against recent Solidity-based hacks). NIPoPoWs provide a trustless mechanism for light clients and SPV proofs.

- **Ergonaut NFT Auction**: First Ergo Foundation collectible NFT auctioned via ergoauctions.org. Reached 2,200 ERG with ~2 months remaining on auction period. Yoroi wallet support for NFT display coming in ~2 months.

- **Yoroi Wallet Expansion**: Yoroi being developed as a "MetaMask-like" solution supporting both ADA and ERG. Mobile app support for ERG still in development; browser extension currently available.

- **Mining Accessibility Concerns**: Discussion on whether current mining difficulty creates centralization barriers for non-technical users. Community expectation that Autolykos v2 fork will significantly improve accessibility for broader GPU mining population.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#65227, 2020-11-17]: Announced first Ergo Foundation collectible NFT auction live on ergoauctions.org; participation available via Yoroi wallet.

- [@kushti khushi, msg#65288, 2020-11-18]: AnonymousMiner reported ErgoMixer v3.1 release targeting Saturday with ability to import and convert existing addresses to covert addresses. Node-independent mixer and token sale follow-up.

- [@kushti khushi, msg#65336-65341, 2020-11-18]: Autolykos v2 details published. Miners/pools can remain anonymous. Anyone can submit proposals to Ergo Foundation, especially in early days.

- [@kushti khushi, msg#65701-65719, 2020-11-20]: Grant proposal review actively underway. Plans for new video within days. Video topic to be determined by community input (roadmap vs. light clients).

- [@kushti khushi, msg#66010-66011, 2020-11-22]: ErgoMixer v3.1.0 officially released with changelog including covert address import, naming, and performance refactoring. Hard fork coming to improve mining accessibility.

- [@Dmitry Usov, msg#66013-66015, 2020-11-22]: Next node panel versions will include "Send max ERG" button, multi-asset transfers, copy address, custom fee, improved number formatting, and transaction status table. Asset support and custom fee coming next. Explorer will display token balance and transaction input/output amounts.

---

## Technical Q&A Worth Preserving

- **Q** (@Tri Origin, msg#65163): If I hold ERG in a wallet for 4 years without spending, do I lose it due to storage rent?
  
  **A** (@kushti khushi, msg#65164-65167): No. Miners charge a small fee (~0.13 ERG per UTXO per 4-year period under current parameters). You retain your ERGs; the fee is simply deducted.

---

- **Q** (@Unknown, msg#65475-65477): Is new coin issuance similar to Bitcoin? Is there a fixed amount per block that changes over time?
  
  **A** (@kushti khushi, msg#65476, msg#65473): Each block a miner can claim coins from an emission contract. Emission decreases monthly starting July 2021 (3 ERG reduction every 3 months) rather than halving events. All coins mined in ~8 years.

---

- **Q** (@Unknown, msg#65490): Why has hashrate dropped significantly recently? Why has block size changed?
  
  **A** (@Bag Holder, msg#65491): Likely due to lack of price support reducing miner profitability. (@kushti khushi, msg#65519): No recent drop—hashrate stable at ~15 TH/s in recent days.

---

- **Q** (@Unknown, msg#65521-65525): Will hashrate stay the same after the hard fork? What is expected post-fork behavior?
  
  **A** (@Richi [MANA], msg#65522): Hashrate will grow because mining pools will become accessible to general public. (@Unknown, msg#65525 via BigEvilSoloMinerToday): V1 and V2 hashrates approximately equal; expect hashrate drop by factor of ~8x post-fork due to algorithm change. Difficulty should be reduced proportionally (~1892959591071744 / 8).

---

- **Q** (@Unknown, msg#65742-65745): What is the purpose of a stablecoin if Ergo itself can serve that purpose? Won't Ergo price volatility affect stablecoin stability?
  
  **A** (@Unknown, msg#65744): Full stablecoin UI will be released inside Yoroi wallet. Specs not yet released; expected late 2020. (@Unknown, msg#65746): Implementation details coming with CLI release at year-end.

---

- **Q** (@Unknown, msg#65771): What is the reason for the hard fork?
  
  **A** (@Unknown, msg#65774): Main reason: bring memory hardness back to new PoW algorithm, making it accessible to regular miners and users (no ASICs). (@Unknown, msg#65776): New algorithm should compete against 8GB HBM ASICs and enable 2.5–4GB GPUs to mine competitively.

---

- **Q** (@Unknown, msg#65799-65804): Why is the "How to Mine Ergo" article out of date and incomplete?
  
  **A** (@Unknown, msg#65804): Will update documentation after hard fork completes. Prefers more convenient environment for everyone before revising guides.

---

- **Q** (@Unknown, msg#65910-65917): Why is my transaction taking so long?
  
  **A** (@Unknown, msg#65917): Transaction speed depends on transaction fee paid. Many wallets don't yet allow fee selection. (@Dom1nant, msg#65914): Transfers to/from HotBit notably slower. (@Dream Big, msg#65915): HotBit withdrawals typically ~1 hour.

---

- **Q** (@Mercury, msg#66005-66007): How is Ergo "no premine" if only technical people can mine it? Isn't this centralization?
  
  **A** (@UpwindStrategy, msg#66009): Mining may be cheaper to buy than produce given current miner hardware costs. Hard fork coming will expand GPU competitive range. Community is exceptionally technical with broad priorities; simple mining wallet may come later but not highest priority currently. (@kushti khushi, msg#66011): Fork coming will hopefully change this accessibility barrier. (@Unknown, msg#66020-66023): High daily miner selloff (~50K ERG/day at ~1 BTC equivalent) actually improves distribution by preventing hoarding. Lowest historical prices + highest emission = highest potential upside if adoption increases.

---

- **Q** (@Unknown, msg#65899): Is Ergo based on ADA? Is Ergo a coin or token?
  
  **A** (@chrom, msg#65902-65904): Ergo is a separate project not implemented on mobile Yoroi yet—only browser extension. You can use Chrome on phone with Yoroi extension to create an Ergo wallet. Mobile Yoroi is being worked on.

---

## Links Shared

- [https://www.ergoforum.org/t/storage-rent-details/256]: Storage rent mechanics and calculation details.

- [https://twitter.com/vitexexchange/status/1327449106063659008]: ViteX AMA series featuring Ergo Platform on advanced cryptographic features and DeFi functionality.

- [https://youtu.be/19hP4T6svBI]: ViteX AMA video with Ergo guest.

- [http://ergoauctions.org/#/auction/active]: Live Ergonaut NFT auction platform.

- [https://ergoplatform.org/en/blog/2020-11-17-introducing-the-ergonaut-the-ergo-foundation-nft-sale/]: Ergonaut NFT announcement and details.

- [https://www.ergoforum.org/t/autolykos-v-2-details/480]: Autolykos v2 algorithm specifications.

- [https://ergoplatform.org/en/blog/2020-11-18-ergo-foundation-makes-key-dapp-infrastructure-grant/]: Ergo Foundation dApp infrastructure grant announcement.

- [https://github.com/ergoplatform/ergo-dex-backend/pull/1]: Spectrum DEX backend implementation PR.

- [https://twitter.com/jp_koning/status/1328665349240262656]: Discussion on flash loan vulnerability patterns in Solidity (referenced by kushti as non-issue in Ergo).

- [https://github.com/ergoMixer/ergoMixBack/releases/tag/3.1.0]: ErgoMixer v3.1.0 release with full changelog.

- [https://github.com/ergoplatform/awesome-ergo]: Awesome Ergo community curated resources.

- [https://www.ergoforum.org/t/darkfund0-zk-fund-for-privacy-applications/398/2]: DarkFund0 zero-knowledge privacy funding discussion.

- [https://twitter.com/chepurnoy/status/1329727861238980610]: kushti's tweet on recent developments.

- [https://twitter.com/chepurnoy/status/1329932578577584135]: kushti's tweet acknowledging contributors (Amitabh, Robert, Jason, anon2020*, anon_real) for building app framework understanding.

- [https://ergocast.io]: Ergo podcast featuring recent discussions on Yoroi wallet MetaMask-like integration and ADA/ERG support.

- [https://twitter.com/Ergobug/status/1329527692040036352]: Ergobug updates on development progress.

- [https://twitter.com/ergoplatformorg/status/1328711499683127297]: Ergo Foundation official announcement.

---

## Unresolved Questions

- **Stablecoin specifications**: Exact mechanism, collateralization design, and stability guarantees still TBD. Expected release late 2020/early 2021 with full Yoroi UI.

- **Mining accessibility roadmap**: Simple one-click mining wallet for non-technical users mentioned as eventual goal but not scheduled. Post-fork GPU accessibility expected to improve significantly, but timeline for simplified UX unclear.

- **Major exchange listings**: Discussion of potential Huobi, Kraken, and Binance listings; no confirmations. Community consensus is "too early" for Binance-type listing to avoid instability (referenced Akro post-listing crash). Timing and execution strategy unresolved.

- **Top rich list addresses**: Composition of top ERG-holding addresses not fully analyzed in chat. Assumed to be foundation and exchanges, but detailed breakdown not confirmed.

- **Atomic swaps with Cardano**: Mentioned in podcast context and Emurgo partnership, but specific implementation timeline and design unresolved.

- **Video topic priority**: kushti asked community (msg#65733-65734) whether next video should cover roadmap or light clients. Poll inconclusive; "roadmap in details" received one vote as "hot" topic.

---