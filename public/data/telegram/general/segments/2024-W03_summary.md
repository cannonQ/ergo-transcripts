# Ergo General Chat — 2024-W03 Summary
**Period:** 2024-01-15 to 2024-01-21  
**Messages Reviewed:** 589  
**Key Contributors:** kushti, Armeanio, Dan Friedman, qx(), MGpai, Glasgow, Aberg

---

## Key Topics Discussed

- **Kraken Listing Fundraiser**: Community-driven initiative to raise funds for Kraken listing. [@Ollie, msg#467849, 2024-01-15]. Exploring contractual requirements with Kraken via Cardano Foundation intermediation. [@Damon AndTheSea, msg#468592, 2024-01-17]. Target discussed as ~$500k but not confirmed.

- **Rosen Bridge Liquidity & Cross-Chain Operations**: Discussion of how Rosen provides liquidity through wrapped tokens (rsERG on Cardano, rsADA on Ergo). [@Affable Villain, msg#467931, 2024-01-15]. Multiple discussions on escrow trades using Rosen without slippage vs. DEX swaps with impermanent loss.

- **SigmaUSD Stability & Lending**: Mining pool large SigmaUSD purchase ($30k+) to boost collateralized lending rates on Oracle Pool. [@TMR.ΣRG, msg#469167-469177, 2024-01-19]. APY recovery to 50-60% range discussed. Alternative to Spectrum: TokenJay escrow-based minting to avoid price impact.

- **ErgoSummit2024**: Five-day virtual summit with presentations on sidechains, zero-knowledge proofs, bulletproofs, Palmyra ecosystem, and trading mechanisms. [@Ergo NEWS $ERG, multiple msgs, 2024-01-15 through 2024-01-20].

- **Ergo Sidechains & Sub-blocks**: kushti presented work on merge-mined sidechains. [@kushti khushi, msg#468821, 2024-01-18]. Discussion of whether to pursue sub-blocks or layer 2 approaches for throughput increases. Sidechain constructions being published to forum for community discussion.

- **Order Book DEXes (Trade House, Auction House)**: Comparison to AMM-based Spectrum DEX. Order books offer full transparency, control over slippage, and partial fills without impermanent loss. [@qx(), msg#468513+, 2024-01-17]. Peer-to-peer order matching with single/multiple upgrade keys.

- **ErgoNames Subnaming System**: Recursive AVL tree registry enabling unlimited subname layers (e.g., sigma.noah.crux.erg). [@MGpai, msg#469412, 2024-01-21]. Wallet sign-off required at each level; use cases for families and team transparency.

- **Stealth Addresses (Mixer Privacy)**: Generates one-time addresses unlinkable to recipient public address; not mixing per se but enables fresh address per payment. [@Glasgow, msg#468662, 2024-01-18]. Caution: don't transfer stealth-received funds to previously-used addresses.

- **CEX & Liquidity Concerns**: Multiple voices expressing concern about limited CEX access (Kucoin, Huobi, Gate only for ERG). [@OxCapitulation, msg#468564, 2024-01-17]. Need for EVM bridge and Alephium bridge ASAP to capture hype from altseason. Discussion of MM bots for DEX volume creation.

- **Gluon Gold (SigmaGold rebranding)**: Logo contest underway on Djed Alliance Discord. [@Bruno Woltzenlogel Paleo, msg#469196, 2024-01-20].

- **Palmyra & Chainlink Oracle Integration**: Proof-of-reserve via Chainlink for on-chain warehouse receipts in decentralized trade financing. [@Dan Friedman, msg#468666+, 2024-01-18]. Plan to build native Ergo Oracle Pools (v1 & v2 with Dexy Gold rewards).

- **EVM Chain UX Friction**: User reports of MetaMask pending transactions, nonce conflicts, and gas fee failures costing hundreds of dollars. [@Me, msg#469245-469280, 2024-01-20]. Comparison: Ergo UTXO model avoids these failure modes.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#467829, 2024-01-15]: ErgoSummit2024 officially begins; all presentations available on Ergo YouTube channel.

- [@Armeanio, msg#468377-468378, 2024-01-16]: 2024 Ergo Foundation transparency report published. Treasury strengthened by donations from Spectrum and Rosen Bridge; holds ERG + BTC (but no ADA).

- [@kushti khushi, msg#468821-468823, 2024-01-18]: Sidechains video releasing tomorrow; chat available for discussion on any topic today.

- [@MGpai, msg#468622, 2024-01-17]: "Screw CEX listing, let's get ETG" (referencing Ergo Token Growth or similar initiative).

- [@MHS_SAM, msg#468967, 2024-01-19]: ErgoRaffle v2 planned to support any token (including wrapped tokens), multiple winners with different percentages, and NFTs as prizes. 90% of contracts complete; dependent on EVM and Bitcoin bridge completion.

- [@qx(), msg#469186, 2024-01-19]: Kenyan Cooperative fundraiser (GoodThingsDAO Pt. 2) exceeded $60k goal with 23 voting members for revolving loan DAO oversight.

- [@Ergo NEWS $ERG, msg#469200, 2024-01-20]: ErgoSummit2024 concluded with all performances available on YouTube.

- [@kushti khushi, msg#469354, 2024-01-21]: Casual check-in on community well-being (no major announcements).

---

## Technical Q&A Worth Preserving

- **Q** (@Shiv Chauhan, msg#467799, 2024-01-15): Is it possible for normal ERG holders to stake RSN tokens for rewards, with staked RSN distributed to watchers for permits, and watchers sharing profit with stakers?
  
  **A** (@Unknown, msg#467800): "Something to look into is lending your RSN on DuckPools.io" (though yields currently "absolutely tiny").
  
  [@Ian Lee, msg#467802]: Rosen tokenomics include staking rewards, likely to be implemented soon.

- **Q** (@Shiv Chauhan, msg#467805): Can COMET be bought on any Cardano DEX now?
  
  **A** (@Koutelier, msg#467809): "Only hosky/rs COMET pool atm" [@HQΣr, msg#467816]: "It's hosky, not COMET."

- **Q** (@Unknown, msg#467913): What have you learned studying other blockchains recently, as an Ergo-native dev?
  
  **A** (@MGpai, msg#467916): "Documentation sucks everywhere." [@MGpai, msg#467937-467941]: Noted goofy aspects on Cardano (fee handling via account model rather than UTXO).

- **Q** (@Unknown, msg#468036): Can someone buy ERG on a DEX?
  
  **A** (@Unknown, msg#468038-468039): "Spectrum DEX and Minswap" [@Unknown]: "Spectrum is in-house" but it is a DEX. No USDT pairing; must use Rosen for ADA.

- **Q** (@Renshi, msg#468447): If I want to buy 100K ERG, can I execute that using Rosen with ADA?
  
  **A** (@HQΣr, msg#468448): "Not sure if there is enough liquidity, but yes."
  
  [@Luivatra, msg#468454]: Two options: (1) swap ADA for rsERG on Cardano DEX, turn rsERG into ERG with Rosen; (2) turn ADA into rsADA with Rosen, swap rsADA into ERG. Best option depends on DEX liquidity.

- **Q** (@Me, msg#468657): How do stealth addresses work for the Ergo Mixer? Do you generate a stealth address and funds are mixed before arrival?
  
  **A** (@Glasgow, msg#468662): "It generates a one-time address that isn't linkable to the recipients public address."
  
  [@kushti khushi, msg#468669]: "Not exactly mixed but for every payment a new address can be used, without recipient linkability."
  
  [@qx(), msg#468674]: "Just don't transfer it to any addresses you've used before after you get it at the stealth address."

- **Q** (@Unknown, msg#469410): What's a TL;DR of ErgoNames and how wallets interact with subnames?
  
  **A** (@MGpai, msg#469412): ErgoNames tracked via AVL tree registry; each name has unique tokenId. Subnames are recursive—each ErgoName has its own registry. Create sigma.noah.crux.erg by holding noah.crux.erg, signing two transactions. Pattern repeats for further nesting.

- **Q** (@Rj, msg#468825): Is sidechain different from sub-block?
  
  **A** (@kushti khushi, msg#468826): "Yes, the video is not touching sub-blocks" (sidechains and sub-blocks are distinct scaling approaches).

- **Q** (@Unknown, msg#468938): (Implicit Q about APY recovery)
  
  **A** (@TMR.ΣRG, msg#469203-469204): After $30k SigmaUSD deposit by mining pool, APY rose to 50% then nearly 60% within hours.

---

## Links Shared

- [https://youtu.be/aZW1beIZreg](https://youtu.be/aZW1beIZreg): ErgoSummit2024 livestream (Day 1, 2024-01-15)
- [https://youtu.be/oHAgf3ZEUo8](https://youtu.be/oHAgf3ZEUo8): ErgoSummit2024 livestream (Day 2, 2024-01-15)
- [https://youtube.com/live/IFFxHDnhrZ0](https://youtube.com/live/IFFxHDnhrZ0): Weekly update and AMA (2024-01-18 2PM UTC)
- [https://youtu.be/G6xggrwA8ys](https://youtu.be/G6xggrwA8ys): kushti presents Ergo sidechains work (2024-01-17)
- [https://youtu.be/ZXRlL_Azsg8](https://youtu.be/ZXRlL_Azsg8): ErgoSummit2024 Day 4 (2024-01-18)
- [https://youtu.be/rZiGokqr9WA](https://youtu.be/rZiGokqr9WA): ErgoSummit2024 final day (2024-01-19)
- [https://docs.ergoplatform.com/ef/ergo-foundation/](https://docs.ergoplatform.com/ef/ergo-foundation/): EF 2024 transparency report [@Armeanio, msg#468377, 2024-01-16]
- [https://docs.ergoplatform.com/ef/ef-treasury/#historic-spending](https://docs.ergoplatform.com/ef/ef-treasury/#historic-spending): EF treasury spending history
- [https://ergoraffle.com/](https://ergoraffle.com/): Ergo Raffle fundraising & charity mechanism (multiple instances)
- [https://t.me/+Gg0xav9UqeJlMzQ8](https://t.me/+Gg0xav9UqeJlMzQ8): Kraken Fundraiser Telegram group [@Ollie, msg#467849]
- [https://t.me/ErgoKrakenFundraiser](https://t.me/ErgoKrakenFundraiser): Kraken fundraiser TG (alternate link, msg#468321)
- [https://docs.ergoplatform.com/tutorials/access-issues/](https://docs.ergoplatform.com/tutorials/access-issues/): Ergo wallet access troubleshooting [@Glasgow, msg#468350]
- [https://api.ergoplatform.com/info/supply](https://api.ergoplatform.com/info/supply): Ergo supply API endpoint [@Glasgow, msg#468356]
- [https://sigmaverse.io](https://sigmaverse.io): dApp discovery and testing [@Unknown, msg#468902]
- [https://discord.gg/YzDKeEfWtS](https://discord.gg/YzDKeEfWtS): Djed Alliance Discord (Gluon Gold logo contest) [@Bruno Woltzenlogel Paleo, msg#469196]
- [https://discord.gg/GAeBs7eSGj](https://discord.gg/GAeBs7eSGj): Djed Alliance logo contest channel (Gluon Gold)
- [https://twitter.com/shishirpai/status/1747719839571951799](https://twitter.com/shishirpai/status/1747719839571951799): MGpai giveaway thread [@MGpai, msg#468566]
- [https://twitter.com/ergonames/status/1749269285900308599](https://twitter.com/ergonames/status/1749269285900308599): ErgoNames subnaming system announcement [@MGpai, msg#469408]
- [https://docs.ergoplatform.com/uses/stealth-address/ess](https://docs.ergoplatform.com/uses/stealth-address/ess): Stealth address documentation [@Glasgow, msg#468662]

---

## Unresolved Questions

- **Kraken Listing Timeline & Cost**: Exact requirements, fee amount, and timeline remain exploratory. [@Damon AndTheSea, msg#468592]: "We're in an exploratory phase with Kraken to sort out their ask/requirements." No fundraiser active yet; details to be published before community donation phase.

- **Sub-blocks vs. Layer 2 Approach**: Community discussion ongoing on whether to prioritize merge-mined sidechains or sub-blocks for throughput scaling. [@kushti khushi, msg#468821-468826]: Sidechains video does not address sub-blocks; separate technical analysis needed.

- **EVM Bridge Timeline**: [@OxCapitulation, msg#468549-468550]: Catalyst EVM bridge mentioned as 6-month target. [@MGpai, msg#468622]: "Screw CEX listing, let's get ETG" implies alternative priorities exist.

- **Native Ergo Oracle Pools Funding**: [@Dan Friedman, msg#468666+]: Plan to build out native Oracle Pools (v1 & v2) using capital from Palmyra token sale, but execution timeline and funding amounts not specified.

- **MM Bot & DEX Volume Creation**: [@kushti khushi, msg#468577]: Volume on DEX increases volume on CEX "to some degree," but precise mechanics and efficacy of market-maker bots for Ergo DEXes (vs. CEXes) left unresolved.

- **ErgoRaffle v2 Wrapped Token Support**: [@MHS_SAM, msg#468967]: Plans to support wrapped tokens and native Ergo tokens equally, but implementation details (e.g., risk of wrapped token depegging) not discussed.

- **Token Price Appreciation Path**: [@OxCapitulation, msg#468564]: Broader concern about "spiral of not sufficient market access → token price stagnation → difficulty funding ecosystem development." No consensus resolution proposed.

- **Rosen Bridge to Monero**: [@TMR.ΣRG, msg#469009]: "Can't wait for Rosen to connect Ergo with Monero" mentioned in passing; no technical roadmap or timeline provided.

---

## Notable Community