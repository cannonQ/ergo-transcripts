---
title: "Ergo General Chat — 2023-W14"
date_start: "2023-04-03"
date_end: "2023-04-09"
type: telegram_weekly
channel: general
week: "2023-W14"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W14 Summary
**Period:** 2023-04-03 to 2023-04-09  
**Messages:** 957  
**Participants:** 68

---

## Key Topics Discussed

- **Rosen Bridge Public Beta Testing**: Rosen Bridge entered public beta testing with real ERG/ADA. Only 1 transaction rejected by guards; issue identified and patching underway. Bridge response times: Ergo → Cardano ~1-2 hours, Cardano → Ergo faster. Front-end refinements ongoing (transactions page, asset bridging UI). Client libraries being introduced for Ergo Explorer, Ergo Node, and Koios.

- **Emission Contract Clarification**: Discussion addressed FUD video claiming Ergo's emission contract lacks transparency. Emission is contract-enforced (not hardcoded), preventing overflow bugs like Bitcoin's. Soft/hard fork requiring >90% hashpower supermajority consensus for any monetary policy changes. Reemission activation required 90%+ mining hashrate approval.

- **Ergo vs. Cardano Technical Comparison**: Ergo handles ~1M transactions/day theoretical capacity (8Mb blocks, 2min block time) vs. Cardano's ~440kb capacity (88kb blocks, 20sec blocks). Ergo has fee market and data inputs from day 1; Cardano lacks fair transaction queue and fee market mechanisms. Storage rent is valuable Ergo feature; potential future enhancements discussed but implementation complexity noted.

- **ErgoHack VI Cypherpunk Finance Winners**: Announced winners receiving 18k SigmaUSD and 300k ErgoPad: 🥇 Ergo Tizen, 🥈 SigmaO, 🥉 Lithos. Community hackathons continuing to produce viable dApps.

- **Bulletproofs & Zero-Knowledge Protocols**: kushti explained bulletproofs as trustless zero-knowledge proof technique (no trusted setup unlike SNARKs). Compact Sigma protocols verification possible in ErgoScript. Application to verifiable credentials, generic statements, and hybrid contracts enabling privacy without data disclosure.

- **SigmaUSD & Stablecoin Fees**: SigmaUSD bank fee is 2% (both ways = -4% roundtrip). Lower fees increase bank vulnerability to price fluctuations. Sometimes Spectrum DEX offers better rates. Native token support in Ergo Mobile Wallet confirmed.

- **ErgoMonitor & Whale Alerts**: Pulsarz deployed ErgoMonitor bot tracking Rosen Bridge movements with decimal corrections. Bot supports multiple token types via ErgoTipperBot integration. Telegram rate limits ~30 messages/second; webhook architecture considered but deferred.

- **Ledger Live Integration**: Ergo app now discoverable in Ledger Live 2.55.0 catalog (outside dev mode). Wallet recovery process: public extended keys for address derivation only; private keys must stay on Ledger. Users cannot import hot wallet keys into Ledger hardware wallets.

- **ErgoCube Dashboard Development**: New tokens dashboard with price conversion, total supply, holders count (p2pk addresses only, not contracts), and Spectrum API fallback integration. Mobile UI responsiveness fixes pending.

- **Certificate of Deposit (Money Machine) Proposal**: TMR.ΣRG proposing ErgoScript implementation of HEX-like CD with inflation-based yield, early unstaking penalties distributed to loyal holders, no founder allocation. Seeking 1000+ SigmaUSD bounty for smart contract development. Distinguishes from ponzi by structural mechanics (loyalty rewards, no new-investor dependency).

- **Storage Rent & Fee Mechanisms**: Fixed minimum fee 0.001 ERG prevents network spam; client-configurable via settings. Node sorts mempool by fee/byte or fee/validation-cost (random at startup). Aberg questioned fixed minimum in high-price scenarios; kushti clarified protocol-level units are in ERG only. Fee market mechanisms discussed vs. Monero's dynamic approach.

---

## Important Decisions or Announcements

- [@Pulsarz, msg#378252, 2023-04-05]: Rosen Bridge tracking fully integrated into ErgoMonitor; movements logged to @ErgoWhaleAlert for testing.

- [@MHS_SAM, msg#378305, 2023-04-06]: Rosen public beta launch after successful airdrop. Only 1 rejected transaction (cause identified). Available to Sigmanauts with test/real tokens; public only with real ERG/ADA. Front-end features (Bridge Assets, transaction history) rolling out.

- [@CW, msg#378309, 2023-04-06]: ErgoHack VI results announced live in weekly update & AMA (Thursday 1 PM UTC on YouTube).

- [@CW, msg#378830, 2023-04-07]: Ergo app now visible in Ledger Live 2.55.0 catalog (not requiring dev mode); integration status pending confirmation.

- [@HQΣr, msg#378654, 2023-04-04]: ErgoCube tokens dashboard launched with total supply, contract/p2pk distribution, and holder metrics.

- [@qx(), msg#378019, 2023-04-04]: Sigmanauts community group clarified as volunteer (no treasury yet); contributors encouraged to participate for ecosystem value.

- [@TMR.ΣRG, msg#379279, 2023-04-09]: 1000 SigmaUSD bounty offered for ErgoScript smart contracts implementing decentralized certificate of deposit; willing to fundraise for higher budget.

---

## Technical Q&A Worth Preserving

- **Q** (@Grigore, msg#377439): How to restore Ergo wallet without seed phrase after phone damage?  
  **A** (@HQΣr, @Pulsarz, msg#377453-377462): Without seed phrase, recovery impossible unless phone repaired to extract it. Advised to repair phone or accept loss. Recommendation: new wallet on different device with written-down seed.

- **Q** (@Hassen, msg#378456-377477): Can I export private keys from Ergo wallet connected to Ledger?  
  **A** (@Flying Pig, msg#378470-378478): If Ledger-connected, exported key is extended public key (derivation only), not private key. Cannot use to sign transactions. Ledger requires 24-word seed; cannot import 15-word keys.

- **Q** (@qx(), msg#378744-378746): Test-markets API not showing data, only old markets API working.  
  **A** (@HQΣr, msg#378746): Issue resolved (implied API fix applied).

- **Q** (@A P, msg#378163): Is 2% ERG→AgeUSD fee high? Fee comparison with SigmaUSD? Mobile wallet support?  
  **A** (@kushti, @Glasgow, msg#378170-378172): 2% goes to bank reserve (not individuals) per contract. Prevents bank vulnerability to price swings. Sometimes Spectrum has better rates. Mobile wallet supports native tokens.

- **Q** (@A P, msg#378173-378178): How much ERG recovered after 2% fee both directions?  
  **A** (@Glasgow, msg#378178): -4% total (2% each way). Start with 100 ERG → 98 after mint → ~94 after redeem at same rate.

- **Q** (@Fred Clark Jr, msg#378184): How long until all ERG in circulation? (MAX_SUPPLY - CIRCULATING) / (REWARD * TX_PER_DAY)?  
  **A** (kushti, msg#378162): See section 2.6 of ErgoScript whitepaper for emission contract details.

- **Q** (@Marty ErgoPad, msg#378210-378211): Can ErgoExplorer search auto-detect input type (address vs token ID)?  
  **A** (@Flying Pig, msg#378208): Yes, dedicated address search in navbar could work. Simple function distinguishing p2pk from token IDs.

- **Q** (@Mint LkV, msg#378295-378299): When Rosen pools added to DEX, will swaps be as fast as normal?  
  **A** (@Luivatra, msg#378297): Once bridged, token is standard; swaps will be fast (~<1min) like normal Spectrum trades.

- **Q** (@MHS_SAM, msg#378854-378856): How does Ergo scalability compare to Cardano?  
  **A** (@MHS_SAM): Ergo ~1M daily txns capacity (8Mb blocks, 2min); Cardano ~440kb/2min (88kb blocks, 20sec). Ergo has fee market & data inputs day 1; Cardano lacks both. Better metric: block capacity, not TPS (eUTXO model-specific).

- **Q** (@kushti, msg#379013): Why fixed minimum fee instead of dynamic like Monero?  
  **A** (@kushti, msg#379015): Fixed minimum prevents spam. Dynamic fees during high load can backfire; better to raise minimum when network congested.

- **Q** (@Aberg, msg#379009-379014): Why 0.001 ERG fixed minimum? At $1000/ERG that's $1 per transaction.  
  **A** (@qx(), @kushti, msg#379010-379013): At extreme price, layer 2 & sidechains handle micro-transactions. Protocol measures in ERG only (unit-agnostic). Monero's approach not necessarily superior when network under load.

- **Q** (@Pulsarz, msg#378704-378708): Are wrapped tokens pre-minted on destination chains or minted on-demand?  
  **A** (@Gazza, msg#378708): Pre-minted and locked (likely). Cannot burn/remint on-demand on Ergo; same assumed on destination chains.

---

## Links Shared

- [https://github.com/nirvanush/whale-alerts-twitter-bot](https://github.com/nirvanush/whale-alerts-twitter-bot): Ka'Ching bot code for whale alerts (Glasgow, msg#377391)

- [https://t.me/ErgoWhaleAlert](https://t.me/ErgoWhaleAlert): Ergo Whale Alert Telegram (Glasgow, msg#377420; Pulsarz monitoring Rosen)

- [https://ergcube.com/index.php?do=static&page=tokens-dashboard](https://ergcube.com/index.php?do=static&page=tokens-dashboard): ErgoCube tokens dashboard with price, supply, holders (HQΣr, msg#378654)

- [https://soft.rosen.tech/#/bridge](https://soft.rosen.tech/#/bridge): Rosen Bridge soft-launch testnet (Green_Diamond, msg#378111)

- [https://djed.one/](https://djed.one/): Djed Alliance website featuring SigmaUSD & Tokenjay (msg#378424)

- [https://medium.com/@rosenbridgeerg/introducing-the-rosen-bridge-a-distributed-network-for-cross-chain-settlement-92b577bd8a27](https://medium.com/@rosenbridgeerg/introducing-the-rosen-bridge-a-distributed-network-for-cross-chain-settlement-92b577bd8a27): Rosen Bridge introduction (HQΣr, msg#377959)

- [https://github.com/ergoplatform/eips/blob/reproducible-assets/eip-0040.md](https://github.com/ergoplatform/eips/blob/reproducible-assets/eip-0040.md): EIP-40 reproducible assets proposal (Gazza, msg#378715)

- [https://www.ergoforum.org/t/reproducible-assets/4040](https://www.ergoforum.org/t/reproducible-assets/4040): Ergo Forum thread on reproducible assets/token burning (Gazza, msg#378715)

- [https://ergonodes.net/list](https://ergonodes.net/list): Public Ergo nodes list (qx(), msg#378962)

- [https://twitter.com/mhs_sam/status/1644476669850165250](https://twitter.com/mhs_sam/status/1644476669850165250): Rosen Bridge update thread (Jennie D, msg#378892)

- [https://youtu.be/Xsiy-yPJQ6w](https://youtu.be/Xsiy-yPJQ6w): Deep-dive technical video on Rosen (Green_Diamond, msg#378105; Gazza, msg#378755)

- [https://twitter.com/chepurnoy/status/1644091803765809152](https://twitter.com/chepurnoy/status/1644091803765809152): kushti on emission contract philosophy (msg#378488)

- [https://twitter.com/0xedenau/status/1644016993996247040](https://twitter.com/0xedenau/status/1644016993996247040): "Tested it, go live, it'll be fine" thread (kushti, msg#378483)

- [https://hackernoon.com/sigma-protocols-for-the-working-programmer](https://hackernoon.com/sigma-protocols-for-the-working-programmer): Sigma Protocols article by Alexander Siesarenko (chrom, msg#378498)

- [https://github.com/ergo-pad/nft-market/blob/main/utilities/general.ts#L34](https://github.com/ergo-pad/nft-market/blob/main/utilities/general.ts#L34): Number formatting utility (Marty ErgoPad, msg#378199)

- [https://youtu.be/NDaM26u7MeQ](https://youtu.be/NDaM26u7MeQ): Weekly AMA livestream (Andy L, msg#378320)

- [https://medium.com/@paideia.dao/the-paideia-advantage-a-dao-toolkit-af2443d1bacf](https://medium.com/@paideia.dao/the-paideia-advantage-a-dao-toolkit-af2443d1bacf): Paideia DAO toolkit comparison (kushti, msg#378772)

- [https://twitter.com/SpectrumLabs_/status/1644373059900518400](https://twitter.com/SpectrumLabs_/status/1644373059900518400): Spectrum Labs announcement (Gazza, msg#378773)

- [https://twitter.com/PaideiaDAO/status/1644334935870775298](https://twitter.com/PaideiaDAO/status/1644334935870775298): "The Paideia Advantage" article (msg#378758)

- [https://twitter.com/SigmaOptions/status/1643315299129888768](https://twitter.com/SigmaOptions/status/1643315299129888768): SigmaOptions announcement (kushti, msg#378180)

- [https://twitter.com/Ergo_Platform/status/1643969305086951425](https://twitter.com/Ergo_Platform/status/1643969305086951425): ErgoHack VI winners announcement (chrom, msg#378498)

- [https://docs.ergoplatform.com/events/ergohack/](https://docs.ergoplatform.com/events/ergohack/): ErgoHack projects documentation (chrom, msg#378498)

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.8](https://github.com/ergoplatform/ergo/releases/tag/v5.0.8): Ergo Node 5.0.8 release (chrom, msg#378498)

- [https://ergcube.com/index.php?newsid=366](https://ergcube.com/index.php?newsid=366): Ledger guide (Glasgow, msg#377454)

- [https://youtu.be/41qFUKe7mJQ](https://youtu.be/41qFUKe7mJQ): FUD video sparking emission discussion (gg, msg#377899)

- [https://twitter.com/CheeseEnth/status/1641662086206959617](https://twitter.com/CheeseEnth/status/1641662086206959617): Cheese Enthusiast's response to F