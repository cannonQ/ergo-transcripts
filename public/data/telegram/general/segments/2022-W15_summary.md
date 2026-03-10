---
title: "Ergo General Chat — 2022-W15"
date_start: "2022-04-11"
date_end: "2022-04-17"
type: telegram_weekly
channel: general
week: "2022-W15"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W15 Summary
**Period:** 2022-04-11 to 2022-04-17  
**Messages Analyzed:** 788  
**Unique Participants:** 84

---

## Key Topics Discussed

- **Wallet Infrastructure & Migration**: Discussion of Yoroi functionality issues, restoration workflows, and transition to Nautilus, SAFEW, Satergo, and Minotaur as primary wallet options. Multiple users reported Yoroi sync failures with mining wallets containing many transactions.

- **Ledger Hardware Wallet Support**: Tesseract team resolved signing issue and is actively working on integration. Support expected for Nautilus and SAFEW after final bug fix completion ([@Glasgow｜WON'T DM, msg#269868, 2022-04-15]).

- **Mining Difficulty Adjustment Mechanism**: Technical debate on Autolykos difficulty adjustment (every 1024 blocks using average of last 5 epochs). Community observed "rubberband effect" where GPU miners hop when difficulty is high, causing network instability and prolonged confirmation times ([@Flying Pig, msg#269369-389, 2022-04-13]; [@Kursat, msg#269383-398, 2022-04-13]).

- **UTXO Model vs. Account Model**: Discussion on eUTXO integration challenges for wallets supporting tax-on-transfer contracts. Clarification that spent UTXOs are immutable blockchain records, not prunable data ([@Aberg Satergo dev, msg#269195-206, 2022-04-12]).

- **Storage Rent & Node Size**: Confirmation that storage rent handles state pruning; current nodes are ~18 GB and archive nodes vs. light nodes may become necessary at scale ([@Aberg Satergo dev, msg#269214-220, 2022-04-12]).

- **Exchange Listings**: Two tier-1 CEX integrations in progress (node, wallet, matching engine, and testing required for each). Binance listing viewed as premature by some community members during market downturn ([@Armeanio, msg#270455-470, 2022-04-17]).

- **Block Time & Timestamp Dependencies**: Clarification that dApps relying on block height (not timestamp) are affected by faster blocks; increased block speed impacts emission contracts and tail emission schedules ([@kushti, msg#269-discussion, 2022-04-13]).

- **Privacy & Mixing**: ErgoMixer discussed as Monero-like mixing tech; note that it is optional (not protocol-enforced) unlike Monero, allowing regulatory compliance and business operations on-chain ([@Unknown, msg#270175-176, 2022-04-16]).

- **51% Attack Surface**: Nanopool at 30%+ hashrate; unlikely scenario due to lack of hash rental and decentralized GPU miner base. Multiple community members noted Bitcoin faces same risk; Charles Hoskinson mentioned Cardano has recovery protocol ([@Glasgow｜WON'T DM, msg#269417-442, 2022-04-13]).

---

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#269188, 2022-04-12]: **Ergo Chat Directory Created** — New @ErgoChats channel established to consolidate all Ergo-related Telegram groups for discoverability.

- [@CW, msg#269508-509, 2022-04-13]: **Ergo Mainnet Launch Date** — July 1, 2019 (first block mined). Community is organizing Ergoversary celebration in July 2022.

- [@Unknown, msg#269466, 2022-04-13]: **Ledger Tesseract Status** — Signing issue identified; team actively working on solution.

- [@Armeanio, msg#269839, 2022-04-15]: **AMA Format Changed** — YouTube AMA cancelled (2FA access issue); redirected to Reddit AMA format due to technical constraints.

- [@Eduardo (multiple), msg#269893-926, 2022-04-15]: **CEX Integration Updates** — Two tier-1 exchanges in active integration phase; timing dependent on node/wallet development. Community speculation suggests Binance/Huobi (unconfirmed); Coinbase, FTX mentioned as possibilities.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#269850): Does ErgoScript support iterators? With loops and recursion disabled, how can you sum register values across all inputs in one transaction?  
  **A** (@Glasgow｜WON'T DM, msg#269851): Use Discord dev-support and ergoscript-support channels (https://discord.gg/ergo) for detailed protocol design questions.

- **Q** (@blake starky, msg#269285): What is the maximum size allowed in the token description field on the explorer?  
  **A**: No explicit answer provided; technical specification not documented in chat.

- **Q** (@Koutelier || WONT DM, msg#269059-072): How to acquire addresses holding a specific token?  
  **A** (@Luivatra, msg#269072): Use Ergo Explorer API: `api.ergoplatform.com/api/v1/boxes/unspent/byTokenId/<tokenid>?offset=0&limit=100`. Loop with increasing offset to retrieve all ~10k addresses.

- **Q** (@Unknown, msg#269259-260): What is sub-block finality?  
  **A** (@Glasgow｜WON'T DM, msg#269260): Documented in Ergo scaling layer 1 guide: https://docs.ergoplatform.com/dev/protocol/scaling/#layer-1-blockchain

- **Q** (@gg, msg#269755): What is the difference between transactions and UTXOs on ergowatch?  
  **A**: Not explicitly answered in chat.

- **Q** (@Junior, msg#269938-966): How to restore a wallet and find the correct address after seedphrase recovery in Yoroi?  
  **A** (@Glasgow｜WON'T DM, msg#269947; @Unknown, msg#269941-942): Derive additional addresses using the "generate new address" button; you may need to generate many addresses if balance is on a derived address. Switching to Nautilus recommended to avoid Yoroi sync issues.

- **Q** (@gg, msg#269969): Where to find the extended public key of a wallet in Nautilus for read-only setup?  
  **A**: Not answered; technical specification unclear.

- **Q** (@Unknown, msg#270222): Does Ergo UTXO support script references (on-chain script storage) rather than inline script code?  
  **A** (@Unknown, msg#270225): Escalated to Discord dev-support; no definitive answer provided in Telegram.

---

## Links Shared

- [https://docs.ergoplatform.com/dev/protocol/scaling/#layer-1-blockchain]: Sub-blocks and layer 1 scaling documentation.

- [https://allquantor.at/blockchainbib/pdf/meshkov2017revisiting.pdf]: Paper justifying Ergo's difficulty adjustment mechanism ([@Gazza ｜WON'T DM, msg#269371, 2022-04-13]).

- [https://www.reddit.com/r/ergonauts/comments/u473pp/surprise_reddit_ama/]: Surprise Reddit AMA thread due to YouTube access issue ([@Armeanio, msg#269839, 2022-04-15]).

- [https://www.reddit.com/r/ergonauts/comments/u1emgd/psa_your_ergo_is_not_inside_yoroi_you_can_use/]: PSA on Yoroi limitations and wallet migration recommendations ([@Glasgow｜WON'T DM, msg#269869, 2022-04-15]).

- [https://ergoraffle.com/raffle/show/419c4109318843950d71ccd9273d2b9ee21e032c50b5e96c09ab1234ddad5126]: DeCo fundraising raffle (1500+ ERG collected) ([@kushti, msg#269715, 2022-04-14]).

- [https://docs.ergodex.io/docs/user-guides/nautilus-quick-start]: Nautilus + Spectrum DEX quick-start guide ([@Gazza ｜WON'T DM, msg#270014-015, 2022-04-15]).

- [https://sigmaverse.io/]: Ergo smart contracts directory ([@Glasgow｜WON'T DM, msg#269639, 2022-04-14]).

- [https://docs.ergoplatform.com/dev/]: Ergo developer documentation with ErgoScript language reference ([@Glasgow｜WON'T DM, msg#269641, 2022-04-14]).

- [https://cafebedouin.org/2021/12/09/why-ergo/]: "Why Ergo" paper/article shared as community resource ([@Unknown, msg#269788, 2022-04-14]).

- [https://t.me/ErgoToolsBot]: New bot for Ergo utilities by @ladopixel ([@Unknown, msg#269892, 2022-04-15]).

- [https://twitter.com/ergoplatformorg/status/1514063348786417665]: Twitter thread on NIPoPoWs ([@Jennie D, msg#269361, 2022-04-13]).

---

## Unresolved Questions

- **Difficulty Adjustment Trade-offs**: Community raised whether Autolykos's 5-epoch adjustment window (1024 blocks) should be reduced to 2 epochs to combat GPU hopping, but trade-offs with malicious attack resistance and hard fork complexity were not resolved ([@Flying Pig, msg#269388-391, 2022-04-13]).

- **Block Time Increase Impact**: Discussion on speeding up block time; unclear whether dApps need migration or if timestamp-agnostic designs fully mitigate risk ([@kushti, implied in discussions, 2022-04-13]).

- **CEX Listing Timeline**: Two tier-1 exchanges in integration; exact names, completion timeline, and whether Binance/Huobi are among them remain unconfirmed and unofficial ([@Eduardo, msg#269893-926, 2022-04-15]).

- **Script Reference Support (On-Chain)**: Whether Ergo supports storing script code on-chain with UTXO references pointing to it (instead of inline scripts) — question escalated to Discord dev-support with no resolution in this chat ([@Unknown, msg#270222, 2022-04-16]).

- **Ledger Integration ETA**: Final signing bug fix completion date not specified; support promised for Nautilus and SAFEW but no mainnet availability date given ([@Glasgow｜WON'T DM, msg#269868, 2022-04-15]).

- **Layer 2 Scaling Road Map**: L2 solutions mentioned as coming "soon," but no concrete proposals, timelines, or design decisions were discussed in depth ([@Gazza ｜WON'T DM, msg#269401, 2022-04-13]).

- **EIP-27 Activation Status**: Soft fork discussion began; proposed block 724,000 passed without activation. Next voting round and activation timeline unclear ([@Unknown, msg#269473-477, 2022-04-13]).

---

## Moderation & Community Notes

- **Support Channel**: Users with wallet/technical issues directed to @ergosupport (not DMs, to avoid scams).
- **Discord Integration**: Developer questions escalated to Discord (#dev-support, #ergoscript-support) for specialized technical responses.
- **Wallet Ecosystem Maturity**: Week saw significant organic migration away from Yoroi (maintenance issues) toward Nautilus, SAFEW, Satergo, and Minotaur, indicating healthy multi-wallet ecosystem adoption.