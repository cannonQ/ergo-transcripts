---
title: "Ergo General Chat — 2024-W52"
date_start: "2024-12-23"
date_end: "2024-12-29"
type: telegram_weekly
channel: general
week: "2024-W52"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — Week 2024-W52 Summary

## Key Topics Discussed

- **6.0 Soft Fork & Input Blocks (sub-blocks)**: kushti reported progress on the 6.0 devnet, including renaming sub-blocks to "input blocks" in code, completing initial linking logic, and beginning work on transaction packing and UTXO set commitment updates. A public testnet release is planned after devnet parameter review.

- **Demurrage as Monetary Policy**: Extended discussion about demurrage's role in reintroducing circulation of dormant UTXOs. Compared to gold mining's distributed emission model and contrasted with Bitcoin's fixed supply. Suggested demurrage and PoW together form Ergo's time-and-energy value foundation.

- **Gluon Stablecoin & CAT Tokens**: kushti clarified that contribution to Gluon pools yields contribution accounting tokens (CAT), not the stablecoin itself. Stablecoins (GAU/GAUC) are only minted when collateral is supplied. Fundraising campaign launched via Bene for Gluon security audit.

- **Rosen Bridge & Cross-Chain Development**: Armeanio announced bridge launch imminent. Discussion of RSBTC adoption challenges, integration with MewMart and other MewFinance extensions, and wallet support (moving from xDEFI to OKX).

- **Storage Rent in Action**: Marc the Shark highlighted real-world example of storage rent recirculating dormant ERG from long-inactive addresses, demonstrating demurrage mechanics live on mainnet.

- **Palmyra & Chainlink Partnership**: Dan Friedman detailed Palmyra's proof-of-reserve warehouse receipt system using Chainlink oracles + Winter Protocol. On-chain receipts enable decentralized trade financing with IoT verification (weight sensors, cameras, motion detection) depending on commodity type.

- **Order Book vs AMM DEXes**: qx() explained Trade House order book advantages—total transparency of depth, full slippage control, partial fills—versus AMM liquidity pools. Referenced MuesliSwap (Cardano) as first order book DEX model.

- **Quantum Cryptography & Ergo Security**: Question raised about quantum computing threat to Ergo. kushti referenced previous AMA and forum discussion; no new vulnerabilities identified.

- **Keystone Hardware Wallet Integration**: kushti reported good progress on Keystone SDK Rust integration, with draft PR open. Working on transaction/signing data display and firmware updates still pending.

- **Verification Dilemma & PoW Under Congestion**: kushti shared new 2024 research ("Nakamoto Consensus under Bounded Processing Capacity") showing teasing attacks exploiting congestion are worse than private attacks when network capacity is limited. Implications for protocol design under real-world constraints.

- **Merged Mining & Sidechains**: kushti outlined improved sidechain constructions (BAP 301–equivalent approach) with trustless pegging via smart contracts, emission contracts rewarding mainchain miners for sidechain data delivery. Better security properties than Bitcoin's BIP 301.

- **MewFund Liquidity Drive**: Community liquidity drive for RSN/SigUSD pool with 1% contribution fee, 95% LP tokens to contributors, 5% retained by MewFund. Multi-asset LP and cross-chain Rosen native token support emphasized.

- **ErgoSanta & Holiday Events**: ErgoSanta chest event concluded with key distribution; users can still redeem gifts. MewFUN lottery launched with 24-hour rounds and perpetual jackpot mechanism.

---

## Important Decisions or Announcements

- [@kushti, msg#536145, 2024-12-26]: 6.0 testnet RC release planned after public devnet parameter review. "Exciting times ahead."

- [@kushti, msg#536597, 2024-12-27]: Confirmed there will be GluonUSD in addition to DexyUSD stablecoins.

- [@Armeanio, msg#535609, 2024-12-23]: "Bridge soon" (Rosen Bridge launch imminent).

- [@cannon_q, msg#535464, 2024-12-23]: Walrus DAO now live on Paideia mainnet; next step is transferring beta DAO funds to mainnet.

- [@Andy L, msg#536107, 2024-12-26]: Weekly update AMA cancelled this week due to holiday commitments; resuming next week.

- [@HQΣr, msg#536184, 2024-12-26]: Announced becoming a father; will be less active short-term but available for urgent pings.

- [@Bruno Woltzenlogel Paleo, msg#536458, 2024-12-27]: Gluon security audit fundraising campaign launched via Bene; first fundraising via Bene platform (2nd place in last ErgoHack).

---

## Technical Q&A Worth Preserving

- **Q** (@cafebedouin.org, msg#535418): If rsErg is sent to a Cardano wallet and the passphrase is lost, is there a recovery mechanism to retrieve the ERG secured in the Rosen wallet?
  **A** (not directly answered in logs; topic flagged as unresolved).

- **Q** (@Shiv Chauhan, msg#535421): Is MewFinance connected to Spectrum DEX?
  **A** (@Windblow, msg#535720): Ergo is a coin; Mew is a token of the DEX. (Implicit: separate but integrated assets.)

- **Q** (@•, msg#535508): How can quantum computing impact Ergo blockchain security?
  **A** (@kushti, msg#535509, @Grayman, msg#535512): Extensively discussed in forum and last AMA. Reference: https://www.youtube.com/watch?v=z0vlCVoNFAw

- **Q** (@Chris Ray, msg#536471): What block does mining rewards drop to 18 ERG?
  **A** (@cannon_q, msg#536472): Check ergo.watch (though noted as not granular enough; answer incomplete).

- **Q** (@Luigi🇵🇸, msg#536633): Is 13:02:57, 7/1/2019 the date of the first Ergo mined block? How to get more data?
  **A** (not answered in logs; topic flagged as unresolved).

- **Q** (@Unknown, msg#535998): How can Ergo integrate bank transfers like El Salvador's Chivo wallet?
  **A** (@Unknown, msg#536546): Ergo is permissionless/decentralized; bank integration requires regulated institutions. No technical barrier, but regulatory adoption needed. Current option: centralized exchanges with local regulation support.

- **Q** (@cafebedouin.org, msg#536553): Are payment tools available for Ergo merchant acceptance today?
  **A** (@cafebedouin.org): Bitcoin already works with Mullvad VPN. EPOS terminal supports Ergo, Solana, others. Ergo has QR payment capability natively. Problem is cultural/social, not technical.

- **Q** (@cafebedouin.org, msg#536558): What is the exact fee structure for MewFund RSN/SigUSD pool contribution?
  **A** (@HQΣr, msg#536579): 1% fee on contributions; 95% of LP tokens to contributors (proportional); 5% retained by MewFund for growth/support.

---

## Links Shared

- [https://ergohub.xyz/](https://ergohub.xyz/): Ergo projects directory (alternative to Cyberverse when working).

- [https://www.ergoforum.org/t/sigmausd-protocol-state-of-affairs/5028](https://www.ergoforum.org/t/sigmausd-protocol-state-of-affairs/5028): SigmaUSD protocol status discussion.

- [https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005](https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005): 6.0 soft fork proposal and roadmap details.

- [https://www.ergoforum.org/t/core-protocol-development-principles/4866/2](https://www.ergoforum.org/t/core-protocol-development-principles/4866/2): Core protocol development principles, including commitment to non-breaking protocol changes and immutability of Autolykos 2 PoW function.

- [https://iacr.steepath.eu/2023/381-NakamotoConsensusunderBoundedProcessingCapacity.pdf](https://iacr.steepath.eu/2023/381-NakamotoConsensusunderBoundedProcessingCapacity.pdf): "Nakamoto Consensus under Bounded Processing Capacity" — research showing teasing attacks worse than private attacks under congestion.

- [https://x.com/chepurnoy/status/1871318019689116090](https://x.com/chepurnoy/status/1871318019689116090): kushti lecturing on money and AI value capture.

- [https://x.com/KeystoneWallet/status/1871216696608145686](https://x.com/KeystoneWallet/status/1871216696608145686): Keystone hardware wallet announcement (content unclear from log).

- [https://github.com/KeystoneHQ/keystone-sdk-rust/pull/105](https://github.com/KeystoneHQ/keystone-sdk-rust/pull/105): Draft PR for Keystone SDK Rust integration (SDK part mostly finished).

- [https://github.com/KeystoneHQ/keystone3-firmware/pull/1427](https://github.com/KeystoneHQ/keystone3-firmware/pull/1427): Firmware PR for Keystone integration (not yet updated with latest changes).

- [https://santa.mewfinance.com](https://santa.mewfinance.com): ErgoSanta 2024 chest unlock event (concluded; users can still redeem with keys).

- [https://fun.mewfinance.com](https://fun.mewfinance.com): MewFUN lottery platform (1 ERG per ticket, 24-hour rounds, perpetual jackpot).

- [https://fund.mewfinance.com/contribute](https://fund.mewfinance.com/contribute): MewFund liquidity contribution interface for RSN/SigUSD pool.

- [https://www.paradigm.xyz/2020/12/uniswaps-alchemy](https://www.paradigm.xyz/2020/12/uniswaps-alchemy): Paradigm research on Uniswap fee dynamics and LP rebalancing benefits.

- [https://www.google.de/books/edition/The_Enigma_of_Money/RgRSDQAAQBAJ](https://www.google.de/books/edition/The_Enigma_of_Money/RgRSDQAAQBAJ): "The Enigma of Money" — referenced for "money is self-fulfilling idea" and AI-powered central planning concepts (see pg 11+).

- [https://x.com/erg_armeanio/status/1871259163638284790](https://x.com/erg_armeanio/status/1871259163638284790): Armeanio announcement (content unclear, likely Rosen Bridge related).

- [https://x.com/StabilityNexus/status/1872685559380099099](https://x.com/StabilityNexus/status/1872685559380099099): Gluon security audit fundraising campaign via Bene.

- [https://x.com/NeuralYogi/status/1871563695534280876](https://x.com/NeuralYogi/status/1871563695534280876): Storage rent example—dormant UTXO recirculated to active address.

- [https://x.com/NeuralYogi/status/1872425384786182390](https://x.com/NeuralYogi/status/1872425384786182390): ErgoSanta chest reveal details.

- [https://x.com/HobbyistMiner/status/1873029724974498249](https://x.com/HobbyistMiner/status/1873029724974498249): Call to vote for Ergo in mining poll.

- [https://hemingwayapp.com/](https://hemingwayapp.com/): Hemingway Editor tool for plain-language technical writing (suggested for Ergo Book contributions).

- [https://ergoraffle.com/raffle/show/8c284f0aa6abc8899ce890b7ea099a29058e899fd0f2287e83f06c2779cd52f6](https://ergoraffle.com/raffle/show/8c284f0aa6abc8899ce890b7ea099a29058e899fd0f2287e83f06c2779cd52f6): Italian Ergo art competition raffle (fundraiser, 1st official art competition with crypto prizes starting Jan 15).

- [https://www.youtube.com/watch?v=z0vlCVoNFAw](https://www.youtube.com/watch?v=z0vlCVoNFAw): Ergo AMA discussing quantum cryptography threat assessment.

- [https://www.youtube.com/watch?v=DhUpDWE-6eM](https://www.youtube.com/watch?v=DhUpDWE-6eM): Video shared by kushti (content unclear from log).

- [https://docs.google.com/spreadsheets/u/0/d/1lx9w3PJaCbFwfhFyOg82-E_8oEU8iOllu0ohOVbbgiQ/htmlview](https://docs.google.com/spreadsheets/u/0/d/1lx9w3PJaCbFwfhFyOg82-E_8oEU8iOllu0ohOVbbgiQ/htmlview): Reddit r/cryptocurrency banner pricing reference.

- [https://www.reddit.com/r/cardano/s/70W4yUoqfb](https://www.reddit.com/r/cardano/s/70W4yUoqfb): Cardano subreddit link shared by Nabz (content unclear).

- [https://vxtwitter.com/cometmooning/status/1873043883447451731](https://vxtwitter.com/cometmooning/status/1873043883447451731): Comet-related announcement (content unclear).

---

## Unresolved Questions

- **Recovery of Lost rsErg**: If rsErg is sent to a Cardano wallet and the passphrase is lost, is there a mechanism to recover the underlying ERG in the Rosen Bridge contract? (@cafebedouin.org, msg#535418)

- **Exact Block Height for Reward Drop**: At what block height do Ergo mining rewards drop to 18 ERG? ergo.watch referenced but noted as not granular enough. (@Chris Ray, msg#536471)

- **Genesis Block Timestamp**: Is 13:02:57, 7/1/2019 the official first block timestamp? How to verify and access additional genesis block data? (@Luigi🇵🇸, msg#536633)

- **Multi-Stablecoin Strategy**: What is the roadmap for DexyUSD, GluonUSD, and future variants (DexyEUR, GluonEUR, etc.)? (@Man ish, msg#536768; kushti confirmed existence but no detailed roadmap shared)

- **Sub-blocks / Input Blocks Finality**: Will sub-blocks remain a chain structure or transition to DAG as mentioned by kushti (msg#535818)? Decision deferred ("maybe will stay the same").

- **Mars-Ready Coin Architecture**: Can sub-blocks enable local consensus on Mars with periodic reconciliation to Earth's main block? Is Ergo positioned for long-latency interplanetary deployment? (@LouisLibre, msg#536574–#536575; speculative, not resolved)

---

## Notable Community Activity

- **Ergo Book Initiative**: Proposed opening contributions Thu-Fri post-Ergoversary. Grayman offered to read, edit, and help expand/condense ideas into book strategy. cafebedouin.org suggested Hemingway Editor for plain-