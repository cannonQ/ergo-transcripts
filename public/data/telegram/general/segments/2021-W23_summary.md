---
title: "Ergo General Chat — 2021-W23"
date_start: "2021-06-07"
date_end: "2021-06-13"
type: telegram_weekly
channel: general
week: "2021-W23"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2021-W23
**Period:** 2021-06-07 to 2021-06-13  
**Messages analyzed:** 1263  
**Primary topics:** ErgoDex development, ErgoHack hackathon, mining, wallets, stablecoins, PoW vs PoS debate

---

## Key Topics Discussed

- **ErgoDex AMM Beta Launch**: Beta release targeted for end of June 2021. Initial iteration includes simple AMM evaluation with ERG/SigmaUSD and ERG/SigmaRSV pools. Yoroi Nightly required for early access; dApp connector integration ongoing with DeadIT. Wrapped assets (wrappedETH, wrappedBTC) will enable cross-chain trading. Cardano smart contract support planned for early October.

- **ErgoHack (First Hackathon)**: Launched June 11, 2021 (weekend event). Community judges evaluating proposals on tokenization, multisig tools, stealth address pools, NFT tooling. Core devs available as mentors in Discord. Day one recap posted on official blog.

- **Mining & Pool Decentralization**: SmartPool concept for decentralized mining pools discussed. Community expressed concern about Nanopool's dominance and desire for smaller pool alternatives. GPU mining efficiency highlighted as advantage over CPU-mined competitors.

- **Wallet Interoperability Issues**: Yoroi web wallet seed phrases (12 words) incompatible with desktop wallet (15 words). Users can transfer funds between wallets but cannot directly import Yoroi recovery phrases into desktop client. Full node wallet recovery mentioned as alternative. Android mobile wallet development in progress.

- **SigmaUSD vs. Dexy Protocol**: Competing stablecoin implementations on Ergo. Cardano expected to mint its own stablecoin on AgeUSD protocol. SigmaUSD will be primary for Ergo; Dexy USD under development as alternative design.

- **NIPoPoWs & Light Client Verification**: NIPoPoWs (Non-Interactive Proofs of Proof-of-Work) explained as method to verify blockchain events without downloading headers. Relevant for sidechains and cross-chain bridges via Rosen Bridge.

- **PoW vs. PoS Security Debate**: Discussion of Ergo's PoW stance vs. industry shift toward PoS. kushti argued CPU mining leads to botnet dominance; GPU mining acceptable despite eventual ASIC inevitability. Autolykos algorithm ASIC-resistant but not ASIC-proof. No planned fork to PoS.

- **ErgoDex Liquidity & Fee Mechanics**: No requirement to provide liquidity in pairs for initial AMM (economically irrational per Ilya Oskin). ERG/SigmaUSD trading will not bypass minting fees but LPs will price spreads to compensate. Wrapped assets on Ergo are tokens—no eth-side gas fees.

---

## Important Decisions or Announcements

- [@kushti, msg#151662, 2021-06-10]: ErgoHack starting June 11 at 9 AM UTC with Discord participation link.

- [@Glasgow, msg#151719, 2021-06-10]: Developer tools article published covering Oracle Pools, AgeUSD, NFT Auction House, ErgoDex integration points.

- [@Ilya Oskin, msg#151881, 2021-06-11]: Beta AMM DEX launch "end of this month" contingent on Yoroi dApp Connector stability.

- [@Ilya Oskin, msg#152300, 2021-06-13]: Cardano native token trading on ErgoDex targeted for early October 2021 (pending Plutus support).

- [@Ilya Oskin, msg#152314, 2021-06-13]: ErgoDex this month will require Yoroi Nightly (unstable); "public beta test of the ecosystem."

- [@A. Matthias @ ssv.network, msg#151318, 2021-06-09]: BiKi exchange ERG maintenance and upgrade completed; withdrawals/deposits restored.

---

## Technical Q&A Worth Preserving

### Wallet & Key Derivation

- **Q** (@Raphael, msg#150992, 2021-06-07): Can multiple API keys be configured in ergo.conf to support two wallets simultaneously?
  **A** (@kushti, msg#151006, 2021-06-07): Second config overwrites first simply; requires separate node instances or sequential wallet switching.

- **Q** (@Unknown, msg#152225, 2021-06-12): Possible to have two separate wallets on local Ergo node?
  **A** (@Unknown, msg#152235, 2021-06-12): Use deriveNextKey or deriveKey endpoint via Swagger API; additional API keys required.

### ErgoDex & AMM Mechanics

- **Q** (@Gazza, msg#152313, 2021-06-13): Will initial AMM require paired tokens or allow single-asset provision?
  **A** (@Ilya Oskin, msg#152317, 2021-06-13): Pairing required; single asset economically irrational (funds arbitraged immediately).

- **Q** (@Gazza, msg#152304, 2021-06-13): Will ERG/SigmaUSD on ErgoDex avoid minting/redemption fees?
  **A** (@Ilya Oskin, msg#152312, 2021-06-13): No direct fee avoidance, but LPs may maintain price spreads to compensate.

- **Q** (@Gazza, msg#152301, 2021-06-13): Which pairs available at launch?
  **A** (@Ilya Oskin, msg#152302, 2021-06-13): Any Ergo token; likely ERG/SigmaUSD and ERG/SigmaRSV pools first.

- **Q** (@poko pen, msg#152285, 2021-06-13): Can ErgoDex trade ERG, ADA, and Cardano native tokens immediately?
  **A** (@Ilya Oskin, msg#152286-287, 2021-06-13): Ergo-first launch; Cardano support phased in (incremental rollout).

### Mining & Difficulty

- **Q** (@Unknown, msg#152233, 2021-06-12): Why does difficulty respond so quickly to hashrate spikes if recalculated at set intervals?
  **A** (@Unknown, msg#152246, 2021-06-13): Epoch = 1024 blocks (~34.13 hours); difficulty based on past few epochs. Recent epochs mined faster than target, so difficulty continues rising despite hashrate staying constant.

- **Q** (@Kryptik, msg#151737, 2021-06-10): Will Ergo move toward CPU mining to avoid GPU e-waste?
  **A** (@kushti, msg#151738-744, 2021-06-10): No current plan; CPU mining invites botnets and Chinese datacenter dominance. Autolykos GPU-resistant; ASICs inevitable but acceptable. Ongoing community discussion; no policy committed.

### Wrapped Assets & Cross-Chain

- **Q** (@Autolykos, msg#152877, 2021-06-11): Will wrapped ETH on Ergo incur Ethereum gas fees?
  **A** (@Ilya Oskin, msg#151880, 2021-06-11): Wrapped ETH is native Ergo token; transfers within blockchain carry no eth-side fees.

- **Q** (@Unknown, msg#152650, 2021-06-10): With Gravity and cross-chain developments, can native ADA be purchased via ErgoDex?
  **A** (Implicit in context): Only wrapped assets cross-chain; native trading requires bridge peg-in/out.

### ScriptSig Verification & Zero-Knowledge

- **Q** (@Unknown, msg#151370, 2021-06-09): Are NIPoPoWs analogous to blind credentials usable as on-chain proofs?
  **A** (@Glasgow, msg#151373-374, 2021-06-09): NIPoPoWs are block header strings verifiable without full sync; role differs from blind credentials.

- **Q** (@Kryptik, msg#151378-382, 2021-06-09): When are NIPoPoW strings produced and how do they establish transaction authority?
  **A** (Implicit from kushti/Glasgow): Strings generated in blocks; DEX/sidechains query them for proof of past events without full blockchain query.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-06-04-ergo-community-launches-its-first-hackathon-ergohack/]: ErgoHack announcement with judges and submission details.

- [https://ergoplatform.org/en/blog/2021-06-08-meet-your-judges/]: Meet Your Judges post highlighting hackathon evaluators.

- [https://ergoplatform.org/en/blog/2021-06-10-building-ergo-developer-tools/]: Developer tools guide for building on Ergo (AppKit, ErgoScript, state management).

- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-june-9th-5a94b835dd35]: Weekly dev update covering ErgoDex contract polish, dApp connector, Explorer improvements.

- [https://ergoplatform.org/en/blog/2021-06-12-ergohack-day-one/]: ErgoHack Day One recap post.

- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Forum discussion on staking solutions (ErgoMixer tokenization referenced).

- [https://www.ergoforum.org/t/dexy-usd-simplest-stablecoin-design/1430]: Dexy USD alternative stablecoin proposal.

- [https://nipopows.com/]: NIPoPoWs technical explanation and documentation.

- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Full node setup guide (relevant for wallet recovery).

- [https://ergoplatform.org/en/blog/2019_12_02_how_to_setup/]: Legacy full node setup documentation.

- [https://www.reddit.com/r/ergonauts/comments/nrmcyp/what_is_ergodex_ergo_deck_slides_submitted_to/]: ErgoDex explainer slides.

- [https://www.wrapassets.io/]: Wrapped Assets project for cross-chain ETH/BTC integration.

- [https://github.com/input-output-hk/cardano-node/issues/2820]: Cardano node issue with fix for TxIn serialization (relevant to ErgoDex integration).

- [https://bdkent.github.io/sigmausd-history/]: SigmaRSV value tracking dashboard.

- [https://t.me/ergo_mining]: Ergo mining community Telegram (referenced for mining questions).

- [https://ergonaut.space/]: Ergonaut community hub (roadmap, ecosystem overview).

---

## Unresolved Questions

- **dApp Connector Timeline**: Yoroi dApp Connector targeting June release but remains in beta; exact stability gate unclear. Ilya cautioned users may need Nightly version for first weeks. (@Gazza msg#152315, @Ilya msg#152314)

- **Mobile Wallet Release Date**: Android wallet development "going well" but no firm ETA given. iOS support not mentioned. (@Gazza msg#151435, @Unknown msg#151445)

- **Ledger Integration**: Integration "in process" with 2-month estimate given June 9, but no updated confirmation by week end. (@Nik An msg#151312)

- **Binance & Major Exchange Listing**: Community frequently asked; no official timeline or announcement. Armeanio deferred; mentioned raise ongoing. (@Guilherme msg#151931)

- **SmartPool Implementation Details**: Decentralized mining pool concept discussed but exact Ergo protocol integration unspecified. Gazza linked Usenix SmartPool paper as reference point. (@Gazza msg#152128)

- **SigmaUSD vs. Dexy Competition**: Will both stablecoins coexist on Ergo? Ron speculated Cardano will mint its own AgeUSD variant; market competition outcome unclear. (@Ron msg#152167-168)

- **Fee Market & Mempool Spam Protection**: Discussed but inconsistent details on minimum propagation fee, timeout window, and miner behavior under sustained low-fee spam. (@Kryptik/@cushti conversation msg#151737-744)

- **Block Time Optimization**: Faster blocks discussion touched on timestamp vs. block height dependencies but no concrete protocol changes proposed. (@Kryptik msg#151733-742)

---

**Notes:**
- ErgoHack discussions and technical Q&A dominated; price speculation filtered to trading channel but some bleed-through.
- Significant participation from core devs (kushti, Ilya Oskin, Armeanio, Glasgow) provided clarity on roadmap but timelines remain fluid.
- Community engagement strong on mining, wallet, and DEX mechanics; less consensus on PoW philosophy.