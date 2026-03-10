---
title: "Ergo General Chat — 2022-W20"
date_start: "2022-05-16"
date_end: "2022-05-22"
type: telegram_weekly
channel: general
week: "2022-W20"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W20 Summary

## Key Topics Discussed

- **TPS and Transaction Throughput**: Community discussed how TPS metrics are misleading for UTXO-based systems since a single transaction can output to thousands of addresses. Ergo positioned as a settlement layer for rollups rather than a high-TPS chain.

- **Stablecoin Design (SigmaUSD/Djed/AgeUSD)**: Clarified the naming lineage: AgeUSD is the protocol; SigmaUSD is the minimal Djed implementation in ErgoScript; Djed and Extended-Djed are broader specifications. Discussion of fiat-backed vs. crypto-backed stablecoins and regulatory capture risk.

- **Wallet Support Erosion**: Emurgo/Yoroi dropped Ergo support; users are migrating to Nautilus, Minotaur, SafeW, and mobile wallets. Yoroi sync issues widespread.

- **ETH Merge Timing**: Ethereum shifting to Proof of Stake in August 2022 (hoped to not be postponed again), expected to release GPU miners toward Ergo.

- **Marketing and Visibility**: Debate on whether Ergo needs more aggressive marketing or should maintain grassroots ethos. Consensus that "build it and they will come" is insufficient without community-led visibility efforts (e.g., Sigmaverse content, YouTube channels).

- **LETS (Local Exchange Trading Systems)**: Explored blockchain-based LETS for local communities and peer-to-peer credit. Proposal team mentioned for ErgoHack; acknowledged as early-stage but potentially high-impact for RealFi.

- **Node Operation and Benefits**: Clarified that running private, non-public nodes behind firewalls does support network resilience, similar to Bitcoin.

- **Ergo vs. Competitors**: CKB, Alephium, and Ravencoin identified as potential competitors. Unique Ergo strengths: PoW + eUTXO + smart contracts + storage rent + Rosen Bridge + Oracle Pools + no premine/VC. "RealFi" positioning (real-world applications over speculation) identified as underexplored differentiator.

- **Ledger Wallet Support**: Beta in Nautilus; full hardware wallet integration still in progress ("almost ready").

- **EIP-0027 (Emission Change Proposal)**: If passes, will reduce block reward by 12 ERG and lengthen emission schedule. Expected decision later in 2022.

- **NIPoPoWs and Data Asymmetry**: Mentioned as tool for addressing data asymmetry, though debate continued on information asymmetry (knowledge gaps) vs. protocol-level transparency.

---

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#276586, 2022-05-17]: **18 teams participating in ErgoHack** — largest cohort yet announced.

- [@Glasgow｜WON'T DM, msg#276854, 2022-05-18]: **RealFi focus identified as underexplored competitive advantage** — DeFi focused on real-world applications and counter-economies, not speculation. Ergo positioned to lead if properly marketed.

- [@Glasgow｜WON'T DM, msg#277033, 2022-05-19]: **Oracle Pool v2 live announcement** — running Dexy Gold with GORT rewards.

- [@Armeanio, msg#277399, 2022-05-22]: **Clarified "proof of no premine" mechanics** — all ERGs minted upfront and transferred to transparent on-chain emission box; no developer pre-allocation or hidden inflation.

---

## Technical Q&A Worth Preserving

### UTXO Model and Transaction Semantics
- **Q** (@K Chan, msg#276269): "Someone can tell me TPS data for ergo? I can't find out and Tx is so small."  
  **A** (@Pulsarz, msg#276270–276272): "TPS is bullshit number on UTXO though… 1 tx can output to 15k addresses for example… so is that counted as 1 TPS or..? you get the point"

### Yoroi Wallet Sync Issues
- **Q** (@Louis, msg#276745): "Sent some ergo from kucoin to my yoroi ergo wallet. 2 days ago and did not arrive. Is this normal?"  
  **A** (@Unknown, msg#276746–276747): "Restore your seed in a different ergo wallet… Yoroi fails at syncing properly"  
  **A** (@Unknown, msg#276619): "They [funds] will be in the wallet, yoroi is just unable to sync properly. If you restore the seed phrase in a different ergo wallet it'll be fine"

### SigmaUSD Reserve Ratio and Redemption
- **Q** (@LPTakerK, msg#277157): "I tried to redeem SigRSV in exchange for ERG… is it even possible to get the SigRSV back since the transaction didn't go through?"  
  **A** (@TMR.ΣRG, msg#277158): "You can't redeem sigRSV while the reserve is so low. Needs to be above 400%"  
  **A** (@TMR.ΣRG, msg#277161): "There is a refund button for txns that didn't go through"

### Ergo Node Operation Benefits
- **Q** (@Amh, msg#277104): "What are the benefits of running a node? (Ergo Community/individual)"  
  **A** (@Glasgow｜WON'T DM, msg#277105): [Link to docs FAQ](https://docs.ergoplatform.com/node/install/faq/#is-there-any-benefits-for-running-a-node)

### EIP-0027 and Circulating Supply
- **Q** (@HelixEvo, msg#277239): "Assuming EIP027 goes live… What will happen with the circulating supply number? Will the stored tokens in the remission contract be classed as circulating supply?"  
  **A** (@Richi [MANA], msg#277240): "No, it will not… All 97 mil [are] now issued, but smart contract holds 42 millions and gives to miners as per determined schedule"

### Transaction Fee Mechanics
- **Q** (@Dejan, msg#277039): "What do you need ergo for if gas fee is zero?"  
  **A** (@Glasgow｜WON'T DM, msg#277041): "There's a transaction fees, just no unpredictable 'gas'."  
  **A** (@Unknown, msg#277044): "The address that begins with 2iHkR7CWvD1R4j1yZ... is a transaction fee, typically 0.001 Erg but can be higher depending on what the transaction does and the amount of data processed."

### Block Reward Emission Schedule
- **Q** (@Unknown, msg#277433): "What's the next reward emission value?"  
  **A** (@Unknown, msg#277434–277435): "Reduced by 3 erg about every 3 months… so 63 to 60."  
  **A** (@Unknown, msg#277436): "If the eip-0027 passes and goes live later this year, that will take away an additional 12erg per block, and lengthen the emission."

### Djed/SigmaUSD Protocol Naming
- **Q** (@miwal, msg#276334): "Is Djed the same thing as AgeUSD?… but elsewhere 'SigmaUSD is based on AgeUSD.' So is Djed a renaming of AgeUSD?"  
  **A** (@Rxfraktal 111Hz, msg#276335): "From what I understand, AgeUSD is the name of the protocol. SigUSD and Djed are both implementations of said protocol"  
  **A** (@Glasgow｜WON'T DM, msg#276357): "AgeUSD -> SigmaUSD -> SigmaUSD v2 -> Djed & Extended-Djed"

### Seed Phrase Security
- **Q** (@PalaZ ♾️, msg#277374): "Does nautilus has recovery phrase feature?"  
  **A** (@Unknown, msg#277383): "Can restore seedphrase but you cannot reveal it again"

---

## Links Shared

- [Sigmaverse Dev Tools](https://sigmaverse.io/): Ergo community resource hub with new Dev Tools tab.
- [Ergo Docs — Scaling](https://docs.ergoplatform.com/dev/protocol/scaling/): Protocol documentation on scaling approaches.
- [Cafe Bedouin — Why Ergo](https://cafebedouin.org/2021/12/09/why-ergo/): Community educational article.
- [IOHK Djed Paper](https://iohk.io/research): Referenced 87-page peer-reviewed paper on stablecoin protocols (SigmaUSD discussed in Section 8).
- [Public Goods Stablecoin Proposal](https://www.ergoforum.org/t/a-proposal-for-a-public-good-stablecoin/3432): Forum discussion on native fiat-backed or crypto-backed options.
- [LETS Discussion Summary](https://www.ergoforum.org/t/lets-discussion-summary/3492): Ergo Forum on Local Exchange Trading Systems implementation.
- [Ergo vs. Ethereum Comparison](https://ergoplatform.org/en/blog/2021_03_26_eth_vs_erg/): Official blog post.
- [Ergo Mobile Wallets](https://ergoplatform.org/en/mobile-wallets/): Official list of mobile wallet options.
- [SafeW Blog — Storing Ergo](https://ergoplatform.org/en/blog/2022-03-25-storing-ergo-safew/): SafeW wallet features including mixer implementation.
- [Koinly Ergo Integration Feedback](https://feedback.koinly.io/integrations/p/integrate-ergo-native-tokens): Community request for tax software support.
- [Ergo Raffle](https://ergoraffle.com/): Donation/raffle site for ErgoHack and community initiatives.
- [ErgoHack Medium Article](https://medium.com/): Described ErgoHack goals (linked via @J, msg#276911).
- [Night Owl Casino YouTube Announcement](https://m.youtube.com/watch?v=XDu5zP_FQMk): Decentralized gambling dApp arriving in "a few months."
- [Ergo Tokenautics Frontend](https://babygrenade.github.io/ergo-tokenautics-frontend/?token=%F0%9F%8D%86%F0%9F%92%A6): Token holder analysis tool.
- [Blockonomi — Stablecoins & Systemic Risk](https://blockonomi.com/stablecoins-ust-systemic-risk-ergos-sigmausd/): Article on UST collapse and SigmaUSD robustness comparison.
- [Ergo Overview Video](https://www.youtube.com/watch?v=s0VNCwE_oFc): Ergo Prism educational content (~10k views).
- [Ergo Node Installation](https://docs.ergoplatform.com/node/install/): Official documentation.
- [Ergo Node FAQ](https://docs.ergoplatform.com/node/install/faq/): Node operation benefits.
- [Nautilus Wallet — Chrome](https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai): Official browser extension.

---

## Unresolved Questions

- **Binance Listing Timeline**: Repeatedly asked; no official date given. Consensus: "between tomorrow and 100 years from now" (msg#277135). NDA prevents public announcement.

- **ETH Miner Influx Strategy**: While August 2022 PoS merge expected to release miners, no concrete Ergo marketing plan shared for capturing them.

- **RealFi Marketing Push**: Identified as key differentiator but noted as underprioritized. How should ecosystem coordinate visibility for real-world use cases?

- **CMC Circulating Supply Accuracy**: Reported as wrong for months; EF attempted correction but CMC refused (msg#277413). Unresolved.

- **Ledger Hardware Wallet Support**: Status "almost ready" but no release date confirmed (msg#276951–277057).

- **Institutional Partnerships & Commercial Adoption**: Dan Friedman working on this but only announces completed deals. Current progress opaque.

- **LETS Practical Implementation**: ErgoHack team assigned but technical and social barriers to local adoption unclear.

- **Stablecoin Strategy Post-Fiat Bridge**: Will Ergo accept official USDC/USDT bridges, or prioritize native crypto-backed SigmaUSD? Debate ongoing; Armeanio favors internal stables (msg#276377).

- **Ergo vs. Alephium Long-Term Positioning**: Alephium mentioned as "potential future competitor" but differentiation unclear.

---

## Notable Community Sentiment

- **Grassroots ethos valued but marketing gap acknowledged**: Community recognizes tension between "no shilling" philosophy and visibility needed for mainstream adoption.
- **Developer quality and ethics appreciated**: Multiple comments on Ergo team's integrity and technical rigor; contrasted favorably with other projects.
- **Wallet ecosystem fragmentation a pain point**: Yoroi failure has scattered users across 4+ wallet options; consolidation desired.
- **Newcomer education improving**: Ergo Prism and Sigmaverse content gaining traction; Dan Friedman's AMAs well-received.
- **Skepticism on "efficiency" marketing for PoW**: Armeanio argues power efficiency claims are vanity metrics; miners and data centers scale power use regardless of algorithm (msg#277193–277212).