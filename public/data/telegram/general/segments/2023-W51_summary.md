# Ergo General Chat — 2023-W51 Summary
**Period:** 2023-12-18 to 2023-12-24  
**Message Count:** 740  
**Key Participants:** kushti, Armeanio, qx(), Glasgow, HQΣr, Koutelier, Pulsarz, CW, Yulius Kristianto, and 60+ community members

---

## Key Topics Discussed

### Rosen Bridge Testing and Launch
Rosen Bridge entered active testing phase with live cross-chain transactions between Ergo and Cardano. Multiple test transactions reported (100 ERG → ADA, 1,899 ERG → Cardano, 4,000 rsADA → Ergo). Bridge fees observed at ~0.5% plus network fees. UI not yet launched but protocol layer operational. Expected to support liquidity-building phase before public release.

### Aneta BTC Sunsetting Ergo Development
Aneta BTC announced withdrawal from Ergo ecosystem after raising ~160k ERG (60k from community subpools + 100k from angels). Community criticism centered on minimal deliverables (~500 lines of GitHub code), outsourcing to inexperienced developers, and abandoned mobile wallet. Team proposed three options for remaining ERG allocation; Option 2 (MEXC listing fund) appeared favored. Debate over rugpull classification and whether remaining funds should be returned or used for exchange listing.

### Rosen Bridge Governance and Guard Expansion
Armeanio publicly addressed conflict-of-interest concerns regarding EF allocations and Rosen fund management. Noted that expanding the guard set and maintaining transparency on governance process are critical. Discussed differences between Rosen as hybrid exchange vs. smart contract bridge. Emphasized burden of proof should be on the system, not users, regarding censorship.

### SigmaO v2 Contract Upgrade
haileypdll announced SigmaO v2 under testing with significant smart contract improvements: options can now be delivered to arbitrary contracts; exercised option outputs and payments can route to smart contracts; option duration capped at 3 years; security defect fixed (malicious issuers could create fake tokens). Deployment pending; users advised to close long-running options before cutover to avoid disruption.

### Ergo Protocol Reference Client 5.0.17 Released
kushti announced release of Ergo node v5.0.17. Watcher UI updated to v2.2.1; users instructed to `docker compose pull` and `docker compose down && docker compose up -d` for updates. Bug reported in v3.01 release; community advised to update to latest.

### Spectrum Finance on CoinGecko
Spectrum Finance market data now verified on CoinGecko with accurate RSN pricing. Community discussion on verifying SigmaUSD and other native tokens; suggested decentralized projects apply individually rather than rely on single collective submission.

### ErgoSanta NFT Campaign
ErgoSanta key minting live with 0.2 ERG minimum entry; 20 keys per day max per wallet. Revenue currently directed to ErgoCube and ErgoExplorer; team planning grand prize pool and possible ERG recycling back to community. Chests open on 2023-12-26; participants able to mint additional keys to increase reward probability. Grand prize: 10M COMET tokens.

### Lithos Protocol (Cheese/K Singh) GPU Mining Update
Lithos Protocol development underway (lead: Cheese Enthusiast / K Singh). Raised 56.5k ERG through subpooling; liquidity pool received ~20k ERG. Community interest in faster block times, improved throughput, and parameter optimization for GPU mining; testnet infrastructure being prepared for community participation.

---

## Important Decisions or Announcements

- [@kushti, msg#460503, 2023-12-19]: Ergo protocol reference client 5.0.17 released — https://github.com/ergoplatform/ergo/releases/tag/v5.0.17

- [@Glasgow｜WON'T DM, msg#460433, 2023-12-19]: Watcher UI v2.2.1 released; users instructed to update via docker compose commands

- [@HQΣr | Wont Dm 🐾 ⚡, msg#460744, 2023-12-20]: ErgoSanta key minting and Santa inbox now live at https://ergexplorer.com/ergosanta (Ergo Mobile and Nautilus support)

- [@qx(), msg#460484, 2023-12-19]: Ergo Platform Twitter spaces AMA confirmed — https://twitter.com/ergo_platform/status/1737147149496762383

- [@Armeanio, msg#461580, 2023-12-22]: Armeanio announced potential recusal from Rosen fund management to avoid conflict-of-interest concerns; committed to expanding guard set transparency

- [@Frosty, msg#460968, 2023-12-20]: Aneta team confirmed 20% voting power on NETA token; acknowledged community feedback and proposed Option 2 (MEXC listing) as likely winning outcome

- [@Yulius Kristianto (cg listing boss), msg#460115, 2023-12-18]: GreasyCex successfully listed on Blockspot.io tracking platform — https://blockspot.io/coin/greasycex/

---

## Technical Q&A Worth Preserving

### Node Wallet Setup Issues

- **Q** (@Kukrapok Fr, msgs#460116–460122): "Cannot connect to Discord due to node setup issues on smartphone; invitation may have been missed due to delayed validation."
  **A** (@Glasgow｜WON'T DM, msg#460113): Directed to https://t.me/ErgoWalletApp; suggested waiting for dev in Telegram channel

- **Q** (@Serg Vasilyev, msgs#460108–460111): "Nautilus wallet doesn't help recover access; how to contact app developer?"
  **A** (@Glasgow｜WON'T DM, msg#460113): Provided Telegram link to ErgoWallet developer channel

- **Q** (@Unknown, msg#461007): "Can I mint multiple ErgoSanta keys with more ERG? Is there an advantage?"
  **A** (@HQΣr | Wont Dm 🐾 ⚡, msg#461009): Revenue currently directed to ErgoCube/ErgoExplorer; team planning future grand prize and possible community ERG recycling. Maximum 20 keys per day per wallet.

### Liquidity and LP Token Recovery

- **Q** (@Paulo J., msg#460519): "Provided liquidity on former Ergo platform; can I recover funds?"
  **A** (@Pulsarz, msg#460525): "ErgoDex rebranded to Spectrum Finance. If you still have LP tokens in wallet, redeem them via Spectrum app."

- **Q** (@Paulo J., msg#460537–460556): "How to search for liquidity tokens in wallet?"
  **A** (@Pulsarz, msg#460531–msg#460561): Guided user to check Nautilus wallet for LP tokens; explained token identification and redemption process

### Ledger Hardware Wallet Support

- **Q** (@Unknown, msg#461667): "Attempting to stake Ergopad via Nautilus + Ledger Nano Plus; getting 'cannot sign messages' error."
  **A** (@Pulsarz, msg#461670): "Ledger signing is not supported yet" for ErgoAuth-based staking

- **Q** (@Flying Pig (™), msg#461800): Confirmed ErgoAuth works with Ergo Mobile wallet (used by Ergopad) but not Ledger

### Hashrate and Security Metrics

- **Q** (@Jack Σ, msg#461451–461499): "Does Ergo hashrate need to match Bitcoin hashrate for equal security? How to measure and compare chains?"
  **A** (@digdug, msgs#461452–461477): "Hashrate is algorithm-specific; cross-chain comparison is not direct. As Ergo hashrate grows, difficulty increases, making majority takeover harder. Read Ergo Manifesto (https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/) for core values; Ergo scientists could develop comparison standards for PoW chains and UTXO models."

### Transaction Confirmation Times

- **Q** (@Gareth, msg#461843): "TX pending for 30+ minutes adding liquidity; is this normal?"
  **A** (@Gareth, msg#461848–461849): Self-resolved by canceling transaction and splitting liquidity into two separate TXs

### NFT Transfer in Nautilus

- **Q** (@Hrhrhr Hrhrhr, msg#461973): "How to send NFT to another address via Nautilus?"
  **A** (@Unknown, msg#461998): "Hit the letter button or 'send' next to 'receive' when you open wallet. What are you selling?"

### Layer2/Sidechain Optimization Discussion

- **Q** (@kushti discussion, msg#460509–msg#460535): "Why upgrade block speed if contracts are based on block height not timestamps? How do dependencies affect optimization?"
  **A** (@kushti): "Some contracts tie to block height, affecting difficulty and emission. Faster blocks require careful parameter tuning. Testnet infrastructure available; DM for Telegram invite if interested in contributing."

---

## Links Shared

- [https://blockspot.io/coin/greasycex/](https://blockspot.io/coin/greasycex/): GreasyCex listing tracker (verified on Blockspot.io)
- [https://t.me/ErgoWalletApp](https://t.me/ErgoWalletApp): Ergo Wallet developer Telegram channel
- [https://ergexplorer.com/ergosanta](https://ergexplorer.com/ergosanta): ErgoSanta key minting dApp (live 2023-12-20)
- [https://www.coingecko.com/en/exchanges/spectrum-finance](https://www.coingecko.com/en/exchanges/spectrum-finance): Spectrum Finance on CoinGecko (verified)
- [https://www.coingecko.com/en/coins/rosen-bridge](https://www.coingecko.com/en/coins/rosen-bridge): Rosen Bridge market data on CoinGecko (verified)
- [https://app.spectrum.fi/ergo](https://app.spectrum.fi/ergo): Spectrum DEX Ergo pools
- [https://ergoauctions.org/](https://ergoauctions.org/): Auction House NFT marketplace with offer system
- [https://ergotutorials.com](https://ergotutorials.com): Ergo tutorials and guides
- [https://ergonaut.space/en/Ergo/explorer](https://ergonaut.space/en/Ergo/explorer): Ergonaut.space explorer documentation
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/): Ergo Manifesto (core values and principles)
- [https://github.com/anetabtc/aneta_contracts](https://github.com/anetabtc/aneta_contracts): Aneta smart contract repository (~500 lines of code)
- [https://ibb.co/fGGx7MH](https://ibb.co/fGGx7MH): SigmaO v2 transaction diagram (options contracts)
- [https://shorturl.at/hzHR6](https://shorturl.at/hzHR6): SigmaO v2 live test transactions
- [https://t.me/rosenbridge_erg](https://t.me/rosenbridge_erg): Rosen Bridge official Telegram
- [https://t.me/RosenBridgeMonitor](https://t.me/RosenBridgeMonitor): Rosen Bridge transaction monitoring channel
- [https://ergonaut.space/id/ergoexplorer](https://ergonaut.space/id/ergoexplorer): Indonesian Ergo Explorer documentation (completed 2023-12-20)
- [https://sigma.gallery/issuers/greasycex/#9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD](https://sigma.gallery/issuers/greasycex/#9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD): GreasyCex ErgoFans Trading Card collection (Sigma Gallery)
- [https://t.me/ErgoNFTs](https://t.me/ErgoNFTs): Ergo NFT trading Telegram channel
- [https://t.me/ergoauctionhouse](https://t.me/ergoauctionhouse): Ergo Auction House Telegram channel
- [https://veil.exchange/](https://veil.exchange/): Veil privacy exchange (mentioned for DEX integration)
- [https://bitcoinwisdom.io/markets/kucoin/ergusdt](https://bitcoinwisdom.io/markets/kucoin/ergusdt): KuCoin ERGO/USDT charting on BitcoinWisdom (newly supported)

---

## Unresolved Questions

### CEX Listing Priorities and Timing
- **Status:** Ongoing debate. Aneta team offering remaining ERG to fund MEXC listing (Option 2); community skeptical of MEXC given fraud allegations. No confirmed timeline for listing; governance vote required.

### Guard Set Expansion and Governance Transparency
- [@Armeanio, msg#461581, 2023-12-22]: "Growing the guard set over time and having clear assumptions of that process needs to be transparent" — no specific expansion roadmap or timeline published yet.

### Rosen Bridge UI Launch and Fee Structure
- [@Glasgow｜WON'T DM, msg#461047, 2023-12-21]: "UI isn't launched yet" despite protocol layer operational. Bridge fee observed at ~0.5% but fee structure not formally documented. No ETA provided for UI release.

### SigmaUSD and SigmaRSV CoinGecko Verification
- [@Unknown, msg#460309–msg#460338, 2023-12-19]: Community consensus that SigmaUSD and SigmaRSV should be verified on CoinGecko, but unclear who will submit application or coordinate verification process.

### Spectrum Finance / Splash Cross-Chain Integration
- [@Anthony M, msg#461831, 2023-12-24]: Concern raised that Splash.fi may be keeping Cardano and Ergo DEX instances separate rather than true integration. Worried team focus shifting to Cardano side. No response from Spectrum team clarifying roadmap.

### Faster Block Speed Implementation
- [@kushti discussion, msg#460509–msg#460535, 2023-12-19]: Community interest in block speed optimization; identified need for testnet parameter exploration and scientific study. Few volunteers; needs leadership/coordination. Testnet resources available but no formal project lead assigned.

### Ergo Ecosystem Exchange (Rosen Alternative)
- [@Armeanio, msg#461589–msg#461597, 2023-12-22]: Discussed vision for ecosystem-controlled market access tool (distinct from Rosen Bridge). Noted VC-heavy centralized exchanges are problem. Concept flagged but no development timeline or scope defined.

### Layer 2 and Sidechain Roadmap
- [@kushti discussion, msg#460509–msg#460535, 2023-12-19]: Multiple drafts and sketches discussed (sub-blocks, sidechains, faster confirmation protocols) but no chosen path or implementation priority established.

### nETA Token Future
- [@Frosty, msg#460600, 2023-12-19]: Community called remaining nETA "biggest piece of shit scammer for years on ergo chain" but Frosty defended team's "good faith." No agreement on whether remaining funds should be returned, donated, or used for exchange listing.

---

## Community Highlights

### ErgoSanta Grand Prize Announcement
ErgoSanta campaign exceeded expectations with 1.6M COMET tokens donated by qx() to grand prize pool (msg#461910). Grand