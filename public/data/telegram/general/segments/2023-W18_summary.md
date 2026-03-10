---
title: "Ergo General Chat — 2023-W18"
date_start: "2023-05-01"
date_end: "2023-05-07"
type: telegram_weekly
channel: general
week: "2023-W18"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W18 Summary

## Key Topics Discussed

### SigmaFi Bond Market Activity
Multiple bond requests and fulfillments discussed throughout the week. Notable discussion about collateralization ratios, interest rates (ranging 30-50% APR), and term lengths (12-20 months). Community members observed increasingly "ballsy" lending terms with longer duration commitments [@qx(), msg#386454, 2023-05-03]. Concerns raised about SigmaFi complexity [@gg, msg#386463, 2023-05-03] noting it's "tougher than chess" due to potential arbitrage loops.

### Satergo Node Management Tool
@Aberg promoted Satergo as standardized node management solution, even for existing manually-configured nodes. Discussion about enabling auto-updates and consolidating infrastructure to reduce manual maintenance overhead [@Aberg Satergo dev, msg#386228-386239, 2023-05-01].

### Block Time and Speed Improvements
Community discussion about potential block time reductions triggered concerns about contract maturity assumptions. Multiple dApps rely on ~2 minute average block time; faster blocks would cause bonds and other time-dependent contracts to mature prematurely [@qx(), msg#386704, 2023-05-04]. Suggested testnet experimentation with difficulty adjustments if community interest materializes [@kushti, msg#386565-586, 2023-05-04].

### Minotaur Wallet Multisig Vulnerability Investigation
@dayumbbbb reported potential threshold function bug in `deriveNewMultiSigWalletAddress`, setting minimum threshold as 1-of-n instead of intended values [@dayumbbbb, msg#386662-690, 2023-05-04]. @MHS_SAM confirmed not an issue—multisig database stores `minSig` value in seed column, not hex seed [@MHS_SAM, msg#386748, 2023-05-05]. @kushti verified generated addresses had correct thresholds (e.g., 4-of-7) [@kushti, msg#386789-791, 2023-05-05]. Funds confirmed safe.

### EIP-27 Reemission Merge Implementation
@kushti announced "great merging" has started per EIP-27: miners now pay rewards to pay-2-reemission contracts, and reemission merge script consolidates these boxes [@kushti, msg#386771, 2023-05-05]. Linked EIP-27 specification showing implementation progress.

### Ergo vs EVM Chain UX Differences
@Dan noted Ergo's "just works" design philosophy contrasts sharply with Ethereum/Polygon usability issues—gas fees spike rendering transactions unfeasible [@Me/Dan, msg#386908, 2023-05-05]. @Aberg highlighted counter-intuitive EVM requirement to hold native token separately for transaction fees [@Aberg, msg#386923, 2023-05-05].

### Spectrum DEX CoinMarketCap/CoinGecko Integration
@Gazza announced Spectrum Labs completed all required APIs for Ergo DeFi integration with CMC and CoinGecko; awaiting platform approval [@Gazza, msg#386441, 2023-05-03].

### Trade House vs AMM Order Book Design
@qx() explained significance of Trade House order book model: provides total transparency of depth/liquidity levels, full slippage control, and arbitrage opportunities vs impermanent loss of AMM liquidity provision. Discussion referenced MuesliSwap (Cardano's first DEX) as early order book implementation.

### Loan Offers Beta (SigmaBonds)
@Glasgow shared Loan Offers (lender-based bond contract offers) ready for beta testing with details in SigmaBonds GitHub [@Glasgow, msg#386353, 2023-05-02].

### Storage Rent and Emission Reduction Timeline
@kushti noted aggressive emission reduction coming; by 2-3 years, complaint may shift to emission being *too low* rather than high [@kushti, msg#386082, 2023-05-06]. @Mint LkV raised concern about responsible business holding capital during 20-30% circulating supply inflation period [@Mint LkV, msg#387200, 2023-05-07].

### Scalability Solutions Discussion (L2, Sidechains, Hydra)
@kushti confirmed Lightning Network possible on Ergo with modular design (needs Bitcoin-specific RPCs adapted for Ergo, Eclair client modifications) [@kushti, msg#386940, 2023-05-05]. Hydra mentioned for smart contract applications vs payment channels. Sidechain constructions mentioned as published/in-progress with merge-mined sidechains covered in BIP 301 analogs.

### ChainCash Balance Between On-Chain/Off-Chain
@kushti proposed ChainCash as "perfect balance of onchain and offchain guarantees" in context of Bitcoin inscriptions vs rollups discussion [@kushti, msg#387058, 2023-05-06].

### Paideia Governance Initiative
@Unknown shared Paideia blog post introducing on-chain governance series [@Unknown, msg#387047, 2023-05-06]. Link: https://www.paideia.im/blog/agovernanceseries:episode1:introduction

### Ergo Monthly Wrap-Up Content
@Ergo NEWS and @qx() promoted Ergo Platform Substack monthly wrap-up as concise information-dense alternative to long Discord/YouTube dev updates [@TheStophe, msg#386358, 2023-05-02]. Community appreciated format consolidation.

### BRC-20 and Bitcoin Ordinals Limited Guarantees
@kushti assessed Bitcoin inscriptions/BRC-20 as interesting from L2 perspective but lacking on-chain guarantees vs Ergo's approach [@kushti, msg#386774, 2023-05-05].

### Spectrum Liquidity Farming Mechanics
@qx() encouraged participation in Spectrum YF (yield farming) and SPF farm; explained LP token creation process requiring equal value ERG + SPF paired deposits [@qx(), msg#386526-530, 2023-05-03].

### Fake Admin Impersonation Warning
@qx() and @Glasgow noted presence of fake impersonators in chat; admins won't DM first [@qx(), msg#387156-157, 2023-05-06]. Community reminded to be cautious of unsolicited admin DMs.

## Important Decisions or Announcements

- [@Ergo NEWS, msg#387012, 2023-05-06]: Blog post published on stablecoin mechanisms and why they matter; stablecoin market at $150B and growing but subject to collapse risk.

- [@CW, msg#386735, 2023-05-05]: Attempting to get Australian exchange Swyftx to list ERG; "keeping the heat on."

- [@kushti, msg#386771, 2023-05-05]: EIP-27 reemission merge implementation now live—miners paying rewards to pay-2-reemission contracts and script merging outputs.

- [@Gazza, msg#386441, 2023-05-03]: Spectrum Labs completed CoinMarketCap/CoinGecko integration APIs for Ergo DeFi; awaiting approval responses.

- [@Glasgow, msg#386353, 2023-05-02]: SigmaBonds Loan Offers ready for beta testing; details in GitHub.

- [@Unknown, msg#386198, 2023-05-01]: Ergo node v5.0.10 released.

- [@Pulsarz, msg#386724, 2023-05-04]: Implemented SigmaUSD library; could build reserve ratio alert system.

- [@qx(), msg#386569-570, 2023-05-04]: Purchased NFT for Sigmanauts treasury (on-chain investment).

## Technical Q&A Worth Preserving

### SigRSV Price Determination
- **Q** (@Crypto Chad, msg#386612, 2023-05-04): How is SigRSV price determined? What formula produces "1 Ergo = 2162 SigRSV"?
  **A** (@Glasgow, msg#386615, 2023-05-04): Posted formal calculation referencing AgeUSD Smart Contract Protocol. Formula: `rcRate = equity / rcCirc` where equity derives from `baseReserve - liabilities`, and liabilities is the minimum of baseReserve or `usdErgRate * scCirc`. Default fallback rate if equity/circulation is zero.

### Multisig Wallet Threshold Bug Investigation
- **Q** (@dayumbbbb, msg#386662, 2023-05-04): Spotted function bug in Minotaur setting minimum multisig threshold to 1 regardless of parameter.
  **A** (@MHS_SAM, msg#386748, 2023-05-05): Not an issue; multisig wallets store minSig value in database seed column (number, not hex), preventing the problem described. Confirmed by @kushti address inspection showing correct 4-of-7 thresholds [@kushti, msg#386789-791, 2023-05-05].

### Running Nodes and Network Security
- **Q** (@gg, msg#386473, 2023-05-03): How does running a node secure the network vs mining?
  **A** (@qx(), msg#386475, 2023-05-03): Nodes provide consensus distribution and transaction routing resilience; difficult for nation-states to block all individual nodes. More nodes = more consensus options against bad actors, harder for censorship.
  **A** (@kushti, msg#386565, 2023-05-04): Makes p2p network resilient to censorship and active attacks (eclipse attacks).

### Lightning Network on Ergo
- **Q** (@Pulsarz, msg#386958, 2023-05-05): Would Lightning Network on Ergo work only for ERG transfers without smart contracts or tokens?
  **A** (@kushti, msg#386960, 2023-05-05): Correct—for transfers only. Other applications use different constructions like Hydra.

### Trade House Order Book Model
- **Q** (@qx(), implicit from msg#386210+, 2023-05-04): What significance does Trade House order book design have vs AMM?
  **A** (@qx(), msg#386210-225+, 2023-05-04): Order books provide total transparency of market depth and liquidity levels, full control over slippage (choose exact price), and enable arbitrage between pools without impermanent loss. Allows partial order fills and peer-to-peer matching.

### SigmaFi Loan Economics
- **Q** (@gg, msg#386462, 2023-05-03): Could borrowers arbitrage own loans with different interest rates?
  **A** (@gg, msg#386463, 2023-05-03): Theoretically yes—person taking SigUSD loan could lock SigUSD as collateral in new Ergo loan at different rate. Noted as making SigmaFi "tougher than chess."

### Block Time Dependencies
- **Q** (@qx(), msg#386704, 2023-05-04): What breaks if block time is reduced?
  **A** (@qx(), msg#386704, 2023-05-04): Many dApps assume ~2 min average block time. Bonds (SigmaFi) and time-dependent contracts would mature early. Block height-based contracts less affected than timestamp-based ones.

### Spectrum DeFi Integration Status
- **Q** (@Unknown, msg#386323, 2023-05-02): Why can't you add more liquidity to Spectrum farm without removing existing position?
  **A** (@Glasgow, msg#386325, 2023-05-02): You can—additional deposits show as separate positions on unstaking.

### Node Count Reliability
- **Q** (@Unknown, implicit, 2023-05-05): Why did reported node count fluctuate?
  **A** (@Aberg, msg#386996-998, 2023-05-06): Nodes were not halved; broken node broadcast incorrect peer data (too many dead nodes, then too few). Fixed in v5.0.7. "Reachable nodes" count always accurate; full broadcast count unreliable during fixes.

### Ergo Uniqueness and Use Cases
- **Q** (@JG, msg#387007, 2023-05-06): What makes Ergo different from other L1s? Real-world use cases?
  **A** (@Luivatra, msg#387008, 2023-05-06): eUTXO model has more potential than account model; Ethereum gas fees prohibitive. Few fair-launch PoW L1s with smart contracts exist.
  **A** (@kushti, msg#387055, 2023-05-06): Tooling for adoption mostly ready: p2p lending (bonds/EXLE), lending pools, Paideia (DAOs), multisig (Minotaur), auctions. Recently provided loan to Kenyan farmers' cooperative via SigmaUSD + EXLE. Multiple L2 designs available. Balance between on-chain logic (eUTXO) and off-chain efficiency (ChainCash) differentiates Ergo.
  **A** (@Glasgow, msg#387096, 2023-05-06): Opportunity for true open-source economy. Base layer with solid foundations. Use case: contractual money, built from ground up with that in mind.

### Storage Rent and Emission Trajectory
- **Q** (@Mint LkV, msg#387067, 2023-05-06): Is it risky putting capital in Ergo now with 30% circulating supply inflation?
  **A** (@kushti, msg#387082, 2023-05-06): Heading toward aggressive emission reduction; in 2-3 years complaint will reverse—emission too low. Early holders captured value, but trajectory improves.

### Loan Term Trends
- **Q** (@Unknown, msg#386952, 2023-05-05): Why is a 20-month bond term so long?
  **A** (@Pulsarz, msg#386954, 2023-05-05): If leveraging ERG with bullish case, won't choose 1-month term. Longer commitment requires confidence in bull thesis.

---

## Links Shared

- [https://github.com/K-Singh/Sigma-Finance/blob/master/SigmaBonds.MD]: SigmaBonds Loan Offers beta spec and details.

- [https://ergoplatform.substack.com/p/ergo-platform-monthly-wrap-up]: Ergo Platform monthly wrap-up blog—information-dense dev update alternative.

- [https://youtu.be/pdONkT1Uw7A]: Ergo NEWS shared link (video content).

- [https://sigmafi.gitbook.io/sigmafi-docs/]: SigmaFi documentation recommended for understanding protocol mechanics.

- [https://twitter.com/SpectrumLabs_/status/1653772004535746560]: Spectrum Labs announcement of CoinMarketCap/CoinGecko integration completion.

- [https://youtu.be/-Wa-2Cw9Bfo?t=1573]: 90-minute discussion video featuring @kushti (Alephium/Ergo cross-chain discussion).

- [https://github.com/minotaur-ergo/minotaur-wallet/issues/14]: Minotaur multisig threshold vulnerability report and resolution.

- [https://github.com/ergoplatform/eips/blob/master/eip-0027.md]: EIP-27 reemission specification.

- [https://explorer.ergoplatform.com/en/addresses/...]: Multiple Ergo Explorer address links referenced for transaction analysis (SigmaFi collateral addresses, exchange wallets, reemission merge contracts).

- [https://docs.ergoplatform.com/dev/protocol/scaling/atomic-composability/]: Ergo scaling and atomic composability documentation.

- [https://www.ergoforum.org/t/chaincash-a-spender-signed-currency-on-ergo/4015]: ChainCash forum discussion thread.

- [https://ergoplatform.org/en/get-erg/#Wallets]: Updated wallet list (Yoroi removed).

- [https://www.paideia.im/blog/agovernanceseries:episode1:introduction]: Paideia governance blog series introduction.

- [https://twitter.com/DjedAlliance/status/1654380412096114688]: Djed Alliance tweet shared by @