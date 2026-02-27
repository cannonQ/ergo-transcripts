# Ergo General Chat — 2021-W12 Summary
**Period:** 2021-03-22 to 2021-03-28

---

## Key Topics Discussed

- **SigmaUSD v2 Protocol Relaunch**: New oracle pool with 12-minute posting intervals (5x faster than v1) deployed successfully. Updated fee structure increased to 3.25% total (3% + 0.25%) to prevent front-running attacks. UI deployment was in progress throughout the week with expected Monday launch. Contract deployed by DarkSide, update contracts and voting tokens scheduled before Monday deployment.

- **Exchange Listing Challenges**: CoinEx experienced extended maintenance affecting ERG deposits/withdrawals for multiple days. Community discussion about future exchange listings favored KuCoin over Binance due to concerns about centralization and Binance's practices (requiring ~$250k + token supply). Current exchanges (Hotbit, Gate.io, TradeOgre) considered adequate but seen as barrier to mainstream adoption.

- **Mining Pool Centralization Concerns**: Nanopool exceeded 51% network hashrate, raising centralization concerns. Discussion clarified that Ergo's self-amendable protocol and on-chain voting mechanism treats miner consensus as governance rather than attack vector. Parameters like block size and computational cost can be adjusted through miner voting to prevent rented hashpower attacks.

- **Cardano Ecosystem Integration**: kushti appeared on Cardano 360 livestream discussing Ergo-Cardano relationship and eUTXO model. Charles Hoskinson mentioned Ergo in multiple contexts, calling it "most underrated project in crypto." Community discussion about bringing Cardano NFT activity (like SpaceBudz) to Ergo Auction House, though sidechain functionality requires smart contracts first.

- **BiKi Exchange Airdrop**: BiKi ran promotional airdrop distributing 1000 ERG to first participants, causing significant telegram spam with UIDs. Event brought ~300 new members but disrupted normal chat activity for 24-48 hours.

- **NFT Platform Development**: Ergo Auction House seeing increased activity. Technical discussion about NFT image display issues resolved (checkbox selection required). Community members exploring creating NFT collections similar to Cardano projects. Suggestion to create "ERGnomes" or "Ergonauts" character series.

- **Transaction Fees and Network Performance**: Standard transaction fees remain ~0.0011 ERG. Block time target remains 2 minutes. Network seeing transaction volume spikes from 2.5k to 4.5k per day. Discussion about potential future speed improvements through microblocks, sidechains, or on-chain optimizations after current DApp set stabilizes.

- **Ledger Integration Status**: GitHub shows no commits since February. Previous developer left due to inability to deliver on contract. Foundation giving ledger integration priority for Q1 but delayed. Hardware wallet support seen as critical barrier to entry for security-conscious users.

---

## Important Decisions or Announcements

- [@kushti, msg#108396-108397, 2021-03-22]: Update functionality tested successfully. New oracle pool is running with 12-minute posting intervals.

- [@kushti, msg#108537-108538, 2021-03-22]: After stablecoin relaunch will provide regular updates on ledger, dex, sidechains. Marketing rework in progress to allow more development time.

- [@Glasgow, msg#108918, 2021-03-23]: SigmaUSD v1 will be on old.sigmausd.io, v2 will be the normal sigmausd.io domain.

- [@Armeanio, msg#112023, 2021-03-27]: Contract deployed by DarkSide, UI being tested. Update contract will be deployed before Monday, voting tokens sent out before Monday. Everything should be fine by then.

- [@kushti, msg#112208, 2021-03-27]: Presented at BPSAA Webinar discussing Ergo features, TurtleNetwork, and sidechains with more details coming in ~2 months.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Can Ergo be easily 51% attacked right now and what consequences could it have?
  **A** (@Glasgow, msg#112001): It's a feature. Ergo doesn't care much if it's 51%+ as there are several parameters like block size and computational cost that can be changed by miners through Ergo's self-amendable protocol to prevent rented mining power attacks. We follow an honest mining assumption - if 51% want to change the chain, it's voting, not an attack.

- **Q** (@Misfit Toy): Do you mind explaining the difference between SigmaUSD and SigRSV, and what you earn if you lock up ERG?
  **A** (@Gazza, msg#109610-109611): See GitHub for full explanation: https://github.com/Emurgo/age-usd#how-does-the-ageusd-protocol-work. When you lock ERG you receive SigRSV. You can redeem later for more ERG if price has gone up and the ratio between SigUSD and SigRSV is in certain bracket (400%-800%). The extra ERGs come from 2% transaction fees charged on every SigmaUSD/SigRSV buy/sell.

- **Q** (@Ergo Boy): Has anyone received their free ERG from the BiKi promotion?
  **A** (@Community, msg#111375+111451): Promotion ended early, was only for first participants distributing 1000 ERG total.

- **Q** (@A): Can you explain how sidechains will work on Ergo in practice?
  **A** (@Glasgow, msg#111857+111867): Sidechains provide higher level of interoperability allowing projects to utilize features from both chains when needed. Some smart contracts may require consensus-theoretic security features of PoW for execution. Ergo brings proven security of PoW for complex DApps on top of common UTxO model. Research focused on ADA compatibility first, Bitcoin compatible after their next hard-fork.

- **Q** (@Vaios Laschos): What is the "gas" price for transferring ERG?
  **A** (@Foeniculum, msg#112227): Standard transfer fee is 0.0011 ERG from Yoroi wallet. Exchange withdrawal fees are higher (~1 ERG) due to exchange markup.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021_03_26_eth_vs_erg/]: Article comparing Ethereum vs Ergo, describing Ergo as "advanced UTXO-based blockchain protocol for efficient and secure financial contracts platform"
- [https://youtu.be/ULBLgPgxtN8?t=11260]: Cardano 360 livestream timestamped to kushti's presentation on Ergo-Cardano relationship
- [https://github.com/Emurgo/age-usd#how-does-the-ageusd-protocol-work]: Technical explanation of AgeUSD protocol mechanics
- [https://veriumfellow.medium.com/introduction-to-ergos-sigmausd-stablecoin-risk-and-reward-mechanism-18690b52d672]: Detailed article explaining SigmaUSD risk/reward mechanism for SigRSV holders
- [https://eprint.iacr.org/2020/044]: Academic paper on Ergo's approach to preventing 51% attacks through self-amendable protocol
- [https://eprint.iacr.org/2018/1048.pdf]: IOHK paper on sidechains
- [https://eprint.iacr.org/2017/232.pdf]: TwinsCoin paper - last paper kushti published before starting Ergo, exploring PoW/PoS hybrid
- [https://komodoplatform.com/en/events/bpsaa-webinar.html]: BPSAA Webinar where kushti presented keynote
- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808]: Community discussion about future exchange listings, preference for KuCoin over Binance
- [https://finance.yahoo.com/news/binance-accepted-250-000-list-131310409.html]: Article on Binance listing fees (~$250k)
- [https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/]: Technical explanation of ErgoMixer functionality
- [https://github.com/ergoplatform/ledger-app-ergo]: Ledger integration GitHub repository showing no recent commits
- [https://ergoplatform.org/en/blog/2019_09_06_crowdfund/]: Ergo crowdfunding contract documentation
- [https://docs.google.com/document/d/1jH5xkyR-GiQ-XZDsjb-hgwWnAq2SnIZ4Be_fBU6nmUQ/edit]: Liqwid Finance FAQs explaining $LQ token acquisition will be through liquidity provision

---

## Unresolved Questions

- **CoinEx Maintenance Duration**: Deposits/withdrawals suspended for "network upgrade" with no specific timeline. Community uncertain if issue is exchange-side or blockchain-side. Multiple users waiting 2+ days for resolution.

- **Ledger Integration Timeline**: Last GitHub activity February 2021. Previous developer unable to deliver. Foundation stated Q1 priority but Q1 ending with no release. No concrete updated timeline provided.

- **ErgoSwap Cross-Chain Functionality**: Discussion about whether ErgoSwap will allow ADA-ERG direct swaps. Community speculation about AgeUSD on Cardano enabling trading between chains, but no official confirmation. Requires sidechain functionality which depends on smart contracts.

- **SigmaUSD v2 Launch Date**: Multiple mentions of "today or tomorrow" throughout March 24-28 but no final launch confirmed by end of week. UI deployment and final testing ongoing.

- **Storage Rent Energy Implications**: Community member asked about how storage rent addresses energy consumption concerns for PoW but no detailed technical response provided.

- **NFT Display Issues**: Some users reporting NFTs not displaying properly in Auction House despite checkbox selection. Reported to volunteer dev anon_real but resolution unclear.

- **Mining Pool Diversification**: Nanopool >51% hashrate concerning but no concrete action plan discussed. Community noted miners prefer Nanopool for "fast payments/stable hashrate/low difficulty of shares" and other pools need to improve competitiveness.