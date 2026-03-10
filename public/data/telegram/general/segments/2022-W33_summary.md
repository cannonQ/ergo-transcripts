---
title: "Ergo General Chat — 2022-W33"
date_start: "2022-08-15"
date_end: "2022-08-21"
type: telegram_weekly
channel: general
week: "2022-W33"
source: telegram
message_count: 1729
categories: [governance, technical, wallet, defi, mining, ecosystem, community, marketing]
key_terms: [AnetaBTC, code review, open source, GitHub, wrapped BTC, mixer, privacy, Tornado Cash, ErgoMixer, sanctions, Node 5.0, storage rent, soft fork, voting, costing, Ledger, Nano S, sideload, token limit, hardware wallet]
---
# Ergo General Chat Summary — 2022-W33
**Period:** 2022-08-15 to 2022-08-21

---

## Key Topics Discussed

- **Ergo Mixer vs Tornado Cash security**: Discussion of ErgoMixer's decentralized architecture compared to Tornado Cash's smart contract approach. ErgoMixer uses a family of protocols with no single contract or p2s address to ban, making censorship more difficult. Frosty and kushti explained the technical differences [@kushti, msg#297608-609, 2022-08-16].

- **AnetaBTC project scrutiny**: Community raised concerns about AnetaBTC's lack of visible code after a year of development, focus on NFT sales over wrapped BTC protocol, and closed-source approach. Team agreed to show code to Ergo core developers before public release [@Frosty, @wm, various msgs, 2022-08-18]. Key concerns: no public commits showing wrapped protocol work, reliance on Interlay's code, use of GetBlok/ErgoPad infrastructure without clear development attribution.

- **Ledger hardware wallet integration**: Nano S support available via sideloading but unofficial. Current limitation: can only handle transactions with 10 or fewer tokens due to RAM constraints. If transaction has more tokens, box cannot be spent with Ledger but funds not burned (recoverable with seed phrase) [@MrStahlfelge, @Pulsarz, msgs #299322-335, 2022-08-19]. Ledger approval process ongoing.

- **Babel fees implementation questions**: Technical discussion on how babel fee boxes work and wallet implementation challenges. Key issue: how to prevent users accepting unfavorable exchange rates when no market price exists for token XYZ. Suggested wallet should compare babel fee rate to DEX price and warn if excessive [@MrStahlfelge, @Koutelier, msgs #299763-782, 2022-08-21].

- **Ergo vs Cardano development speed**: Community discussed why Ergo shipped smart contracts, NIPoPoWs, SigmaUSD, and babel fees faster than Cardano despite both being eUTXO. @Armeanio explained Ergo core team are "developers first" while Cardano splits between academics and developers, creating speed differences [@Armeanio, msg#299270, 2022-08-19].

- **Node 5.0 costing model progress**: New transaction costing model in development for 1.5 years, will be soft fork requiring node operator voting. Voting live since v4.0.37, expected within a month [@Benny, msg#299735, 2022-08-21]. Will improve block processing performance.

- **Oracle Pool v2 development**: Bootstrap update in progress to generate full OracleConfig automatically. Partnership with Wave Enterprise was research/business-focused on efficiency and use cases, not just Chainlink comparison [@Glasgow, msgs #299513-516, 2022-08-20].

- **Plasma library 1.0 release**: GetBlok released Plasma library for scalable on-demand NFT minting without pre-minting. Example use case: 1000+ NFT collections can mint on-demand with randomness [@Cheese, msgs #298899-904, 2022-08-18]. Repository: https://github.com/GetBlok-io/GetBlok-Plasma

- **ErgoScript education via DeCo**: @Cheese and @lgd will teach ErgoScript class in upcoming DeCo semester. Emphasized that ErgoScript alone insufficient—off-chain code required for full dApp development [@Cheese, msg#299578, 2022-08-20].

---

## Important Decisions or Announcements

- [@Glasgow, msg#299189, 2022-08-19]: Spectrum published development roadmap: https://spectrumlabs.medium.com/spectrum-development-paths-bcb146d53904

- [@CW, msg#298970, 2022-08-18]: New community video interview released on NFT use cases including property tokenization and dickbutt commentary: https://youtu.be/KdLJKPJdM7w

- [@Dan Friedman, msg#299079, 2022-08-19]: Palmyra (zenGate) Discord server launched: https://discord.gg/FQRA8wqRWa

- [@MHS_SAM, msg#298964, 2022-08-18]: ErgoRaffle upgrade plan announced: raising funds in tokens (e.g. SigmaUSD), refundable creation fees to prevent scams, multiple winners, NFT/token prizes, dApp connector/ErgoPay support. Requested community feedback with #raffleimprovement hashtag.

- [@Gazza, msg#299802, 2022-08-21]: Spectrum hosting Twitter AMA on 2022-08-22: https://twitter.com/spectrumlabs_/status/1561309849656479744

- [@wm, msg#298479, 2022-08-18]: AnetaBTC testnet planned for Q3, will clean up code and share with Ergo core developers first before public release.

- [@rustinmyeye, msg#299819, 2022-08-21]: Ergo Developer Update podcast now on Spotify, Apple Podcasts, Google Podcasts, Amazon Music, Deezer: https://rss.com/podcasts/erg/590048/

---

## Technical Q&A Worth Preserving

- **Q** (@user, msg#297572): With storing UTXO sets, can it be toggled on/off for resource-constrained devices like Raspberry Pi?
  **A** (@kushti, msg#297573-576): Yes, storage can be turned off. Note "digest" mode already exists for light clients like 1GB RPis where UTXO set not stored at all. Full node still downloads all headers but doesn't maintain full UTXO set.

- **Q** (@Marty, msg#297591): How does Ergo's scaling roadmap compare to ETH, ADA, or BTC?
  **A** (@kushti, msgs #297600-649): Bitcoin has no clear plan beyond L2, many limitations possibly imaginary. Ethereum's three-fold approach (PoS, sharding, rollups) has issues—PoS not scalability solution, rollups add ecosystem mess. Sharding still has open questions and no proper formal security definitions. Ergo has concrete application set (Oracle Pools, Rosen, Spectrum AMM, Trade House, lending, stablecoins) making optimization easier. Can consider sidechains, sub-blocks, microblocks now that real usage patterns known.

- **Q** (@Mint, msg#297611): During last pump explorer was slow, spectrum/ergopad dashboards non-functional. Is there plan to improve?
  **A** (@kushti, msg#297616): Multiple parallel improvement attempts emerged. Pragmaxim reported alternative backend engine ~10x more performant. Fanta added optional indexes for node. Wallets/apps can migrate to alternative APIs freeing up Explorer instances. @Marty noted ErgoPad released Danaides backend that doesn't use Explorer at all, stores boxes in custom database: https://github.com/ergo-pad/danaides

- **Q** (@Filip, msgs #298127-138): Ergo mobile wallet transactions failing/slow with large amounts, small amounts work. What's wrong?
  **A** (@MrStahlfelge, msgs #297136, #299419-434): Too many UTXOs. Transaction combining them all together. Solution: reduce number of derived addresses/wallets in wallet config. Sync loops through all addresses—connection issue on one cancels sync. Remove empty unused addresses.

- **Q** (@Ivan K, msg#299021): If ERG hashrate is 12 TH/s now and I get 10 ERG/day, after merge if hashrate goes 30x to 360 TH/s, will reward be exactly 30x less (0.33 ERG/day)?
  **A** (@Flying Pig, msg#299022): Yes, that's exactly how difficulty works. Increased network hash does not directly translate to price increase.

- **Q** (@VeganCatLover, msg#299738): If Ergo has 5000 outputs per tx vs Bitcoin's 1 output, and same PoW, can you say Ergo is 5000x more energy efficient?
  **A** (No direct answer provided, but context: Ergo block time targets 2 minutes, supports up to 3000 outputs per transaction based on msg#299102 example)

- **Q** (@Aberg, msg#299784): Don't babel fees require providing ERG either way, making them uninteresting?
  **A** (@Glasgow, msgs #299790-801): No. Babel fee box created by LP contains ERG. User spends that box in their transaction, only needs babel token (e.g. SigUSD). Must recreate box with same parameters plus required babel tokens. Smart contract ensures (primary tokens difference) ≤ (inserted babel tokens × price). LPs trying to make money off people using babel.

- **Q** (@gg, msg#299272): Is it true anetaBTC hasn't written a single line of code?
  **A** (@cometeer, msg#299275): FUD. GitHub exists: https://github.com/anetabtc. However, community analysis found mostly forked boilerplate templates with minimal original development visible.

---

## Links Shared

- [https://docs.ergoplatform.com/dev/protocol/scaling/](https://docs.ergoplatform.com/dev/protocol/scaling/): Summary of Ergo scaling solutions with roadmap from Dec 2021
- [https://github.com/GetBlok-io/GetBlok-Plasma](https://github.com/GetBlok-io/GetBlok-Plasma): Plasma library 1.0 for scalable on-demand NFT minting
- [https://www.ergoforum.org/t/scalable-on-demand-nft-minting/3770](https://www.ergoforum.org/t/scalable-on-demand-nft-minting/3770): Discussion of large-scale NFT minting solutions (1000+) avoiding pre-mint with Plasma
- [https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/](https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/): Node 5.0 hybrid costing model explanation
- [https://ergoplatform.org/en/blog/Ergo-Node-v.5.0-The-Next-Evolution-of-the-Ergo-Platform](https://ergoplatform.org/en/blog/Ergo-Node-v.5.0-The-Next-Evolution-of-the-Ergo-Platform): Node 5.0 overview
- [https://github.com/ergoplatform/oracle-core/milestone/1](https://github.com/ergoplatform/oracle-core/milestone/1): Oracle Pool v2 progress tracking
- [https://github.com/ergo-pad/danaides](https://github.com/ergo-pad/danaides): ErgoPad's custom backend replacing Explorer dependency
- [https://api.tokenjay.app/peers/list?unreachable=false&limit=50](https://api.tokenjay.app/peers/list?unreachable=false&limit=50): List of alternative Ergo nodes for mobile wallet
- [https://docs.ergoplatform.com/dev/stack/mosaik/intro/](https://docs.ergoplatform.com/dev/stack/mosaik/intro/): Mosaik tutorial for dApp UI framework
- [https://spectrumlabs.medium.com/spectrum-development-paths-bcb146d53904](https://spectrumlabs.medium.com/spectrum-development-paths-bcb146d53904): Spectrum development roadmap
- [https://youtu.be/KdLJKPJdM7w](https://youtu.be/KdLJKPJdM7w): Community interview on NFTs and on-chain property
- [https://rss.com/podcasts/erg/590048/](https://rss.com/podcasts/erg/590048/): Ergo Developer Update podcast on multiple platforms
- [http://www.paulgraham.com/disagree.html](http://www.paulgraham.com/disagree.html): Essay on how to disagree productively, shared after heated AnetaBTC discussion

---

## Unresolved Questions

- **AnetaBTC wrapped protocol timeline**: Team committed to showing code to core developers and Q3 testnet, but specific review date not set. Community skepticism remains about development progress given lack of public commits.

- **Babel fees wallet UX**: No consensus on how wallets should handle arbitrary token pricing. @MrStahlfelge raised concern about protecting users from unfavorable rates when no DEX price exists for token XYZ. Suggestions included DEX price checks and warnings, but no standard defined [@MrStahlfelge, msgs #299763-779].

- **Node peer dropping issue**: @Flying Pig reported nodes dropping peers again (down to 20-51 from usual 100+) on v4.0.37-38, similar to previous v4.0.36 issue. Updating to v4.0.40 to test if persists [@Flying Pig, msgs #300128-135, 2022-08-21].

- **Ledger Nano S+ RAM capacity**: Unknown if Nano S+ has more RAM than Nano S. Storage increased but unclear if 10-token transaction limit will remain [@Luivatra, @Pulsarz, msgs #299294-305, 2022-08-19].

- **NIPoPoW sidechains and sub-block protocols**: @cometeer asked about progress, no detailed response provided [@cometeer, msgs #299261-263, 2022-08-19].

- **Tier 1 exchange listing timing**: Multiple hints of "soon" before ETH merge but no confirmation or announcement [@Glasgow, @HQx, various msgs, 2022-08-20-21].