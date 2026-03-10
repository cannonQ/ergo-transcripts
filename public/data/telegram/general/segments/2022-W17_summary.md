---
title: "Ergo General Chat — 2022-W17"
date_start: "2022-04-25"
date_end: "2022-05-01"
type: telegram_weekly
channel: general
week: "2022-W17"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W17 Summary
**Period:** 2022-04-25 to 2022-05-01 | **Messages analyzed:** 651

---

## Key Topics Discussed

- **Ledger Hardware Wallet Integration**: Extended discussion on delays; wallet developers now have necessary materials and are in testing/review phase. Cold wallet feature via QR code signing mentioned as current alternative.

- **Circulating Supply Data Discrepancy**: CoinMarketCap reports incorrect circulating supply (~32M ERG) vs. CoinGecko (~54M ERG, sourced from Ergo API). CMC issue has been flagged repeatedly but unresolved; impacts market cap calculations.

- **Scalability & Throughput Community Discussion**: Multi-participant discussion on layer 0/1 optimizations, sub-blocks, weak blocks, plasma frameworks, and L2 solutions. L0 improvements in 4.0.16 include optimized sync protocol and planned tx propagation rework from push to pull mode.

- **EIP-0027 Tokens & Emission Extension**: EIP-27 token issuance live; will extend mining emission but activation date not finalized.

- **Privacy Mode in Nautilus Wallet**: Multiple reports of unexpected derived address creation during swaps or when privacy mode enabled; causes apparent balance discrepancies between Nautilus and Android wallet.

- **MuesliSwap / Order Book vs. AMM Design**: Discussion on trade-offs between order book DEXes (full control, transparency, partial fills) and AMMs (liquidity pools, impermanent loss); Trade House and Spectrum DEX mentioned as implementations.

- **ErgoDex Scaling Approach**: Hybrid solution based on sidechains and cross-chain approaches with Roll-DPos consensus; detailed article planned for May release.

- **Weak Blocks & Mining Rewards**: Kushti outlined concept of weak blocks (difficulty/N) for share-like tracking; potential for rewarding weak block producers via contracts; relevance to merge-mined sidechains.

- **Explorer Infrastructure**: Need for more decentralized explorers; Armeanio working on TypeScript-based GraphQL server; dApp providers to host custom explorer instances.

- **Multi-wallet Transaction Signing**: Technical limitation: ErgoPay supports multi-wallet signatures but AppKit lacks UI implementation; workaround requires multiple transactions or smart contracts for true multi-sig escrow.

---

## Important Decisions or Announcements

- [@Glasgow, msg#272479, 2022-04-29]: Ledger integration "v. close" — wallet devs now have all required materials and are in active testing phase.

- [@Glasgow, msg#272435, 2022-04-28]: Ledger delays attributed to developer departures, bugs, and geopolitical conflict (Russia-Ukraine); wallet dev team now has needed materials for review/testing.

- [@Ilya Oskin, msg#272336, 2022-04-28]: ErgoDex scaling article to be released in May with hybrid sidechain/cross-chain approach details.

- [@Armeanio, msg#272345, 2022-04-28]: Building TypeScript-based GraphQL server on top of explorer database schema for better dApp integration and static typing.

- [@Glasgow, msg#272505, 2022-04-29]: New Ergo website switchover in progress; developer moving old blog content and setting up redirects.

- [@Ergo NEWS, msg#272712, 2022-05-01]: ErgoGames launch on Spectrum DEX scheduled for 2022-05-01.

- [@CW, msg#272173, 2022-04-28]: CMC circulating supply error flagged multiple times; correct figure available via Ergo API and CoinGecko.

---

## Technical Q&A Worth Preserving

**Multi-wallet Escrow Transactions**
- **Q** (@Unknown, msg#272014): Can ErgoPay enable multi-wallet transaction signatures where all details are in one transaction, only executing when all parties sign?
- **A** (@MrStahlfelge, msg#272018–272020): ErgoPay protocol supports it; transaction structure is compatible. **Limitation:** No current UI or AppKit implementation for multi-key signing. Workaround exists if addresses are derived from same wallet (same signing model). For true multi-sig, either use multiple transactions or embed logic in smart contracts.

**Escrow Service Design**
- **Q** (@Unknown, msg#272028): How to build an escrow service where two parties submit agreed trade, each signs, and contract atomically swaps assets?
- **A** (@MrStahlfelge, msg#272029): Place token in box secured by smart contract defining: outbox with p2pk address of counterparty + agreed ERG amount, block height check (or timestamp), second outbox with token to counterparty's address. Buyer can execute if conditions met; seller can refund after timeout. Contract controls execution, not wallet signatures. See Auction House and AgeUSD contracts for real-world examples.

**Privacy Mode Derived Addresses**
- **Q** (@johnjones, msg#272252): Why does Nautilus show 9 fewer ERG than Android wallet?
- **A** (@Hasnain, msg#272257–272262): Nautilus privacy mode enabled by default creates derived addresses for swaps and privacy purposes. Android wallet unaware of these derived addresses. Solution: check Nautilus sub-wallets. Multiple users reported this confusion; marked as UX issue by @MrStahlfelge (msg#272265) — privacy mode should be off by default.

**Paper Wallet Security & Address Collision**
- **Q** (@Fabulaowski, msg#272054): How are seed phrases/addresses generated offline, and can two offline paper wallets generate the same address?
- **A** (@Kallo Shaman, @Glasgow, msg#272057–272075): Addresses already exist mathematically; seed phrase is a 256-bit entropy combination (~10^77 possibilities). Probability of collision is astronomically low — "like picking the same molecule of water twice in an ocean." Quantum tunneling into a desk is more probable. See [@Glasgow's quote](msg#272075) referencing seed phrase entropy.

**Transaction Propagation & Mempool Management**
- **Q** (@Unknown, msg#272295): How does L0 optimization impact node transaction handling?
- **A** (@kushti, msg#272295–272303): 4.0.16 merged optimized sync protocol. Plan: rework tx propagation from **push mode** (nodes announce, peers download unconditionally) to **pull mode** (nodes filter by execution cost, download selectively). Nodes can filter high-cost transactions from bad actors; bottleneck becomes processing capability, which can be optimized via multi-threaded processing, shared signature caching per p2pk script.

**Finality on PoW vs. PoS**
- **Q** (@Unknown, msg#272320): Do sub-blocks provide finality equivalent to PoS chains' few-second finality?
- **A** (@kushti, msg#272326, msg#272391–272392): Sub-blocks only speed tx inclusion, not finality. PoS chains claim fast finality but assume fast propagation globally — unrealistic for heavy blocks supporting smart contracts. Weak blocks can improve finality but require careful design. Few-second finality on PoW would require fastest block propagation globally, which conflicts with meaningful block time.

**Weak Blocks as Mining Shares**
- **Q** (@Cheese, msg#272321): Are weak blocks analogous to mining pool shares? Who receives rewards and from where?
- **A** (@kushti, msg#272324): Yes, weak block is a "share." Currently discarded. Could be rewarded via smart contracts if network supports it; rewards can come from block producer or protocol. Relevant for merge-mined sidechains where weak block producers incentivized.

**Sidechain Security via NIPoPoWs vs. Federated Models**
- **Q** (@Cheese, msg#272307): Do NIPoPoWs enable trustless two-way pegs like ZK-rollups on Ethereum?
- **A** (@scalahub, msg#272314–272316): NIPoPoWs challenging for Bitcoin bridging (Bitcoin doesn't support them). Instead researching SPV (Simplified Payment Verification) approaches for Ergo-BTC bridge; leaning toward federated solutions for security.

**Tx Sorting & Mempool Fairness**
- **Q** (@Unknown, msg#272298): Are there plans for faster tx finality or better guarantees against reorg?
- **A** (@kushti, msg#272301–272305): Current mempool tx sorting unfair to computationally heavy transactions (no per-cost compensation). Planned update around 5.0 activation. Weak blocks can improve finality without "controversial PoW enhancements."

**Fee Estimation API**
- **Q** (@Unknown, msg#272298): Can fees be dynamically set to ensure next-block inclusion?
- **A** (@kushti, msg#272328): JIT costing in 5.0 will enable miners to propose increased TPS. Node has fee estimation API but untested and unused by applications; would benefit from implementation and wallet integration (like Bitcoin wallets offer).

---

## Links Shared

- [Cointelegraph PoW mining moratorium article](https://cointelegraph.com/news/new-york-legislators-to-vote-on-pow-mining-moratorium-this-week): NY mining regulation concerns.
- [Charles Hoskinson video on Doge/Ergo](https://www.youtube.com/watch?v=iQd9XjEm8EE): Bridge opportunity discussion.
- [Gemini State of Crypto 2022 study](https://www.gemini.com/state-of-crypto): Crypto adoption statistics (18% of population holds crypto, 35% for high-income brackets).
- [EIP-0030 spec (typo noted)](https://github.com/ergoplatform/eips/blob/eip30/eip-0030.md): Oracle pool redemption rate clarification needed.
- [GetBlok Plasma repository](https://github.com/GetBlok-io/GetBlok-Plasma): L2 plasma framework implementation.
- [Kushti's mempool fairness forum post](https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/231): Detailed tx sorting issue analysis.
- [StrongChain USENIX paper](https://www.usenix.org/conference/usenixsecurity19/presentation/szalachowski): Weak block consensus mechanism reference.
- [Ergonaut Space yield guide](https://ergonaut.space/en/Guides/yield): Yield farming opportunities for ERG holders.
- [GitHub Sigma Rust contributing guide](https://github.com/ergoplatform/sigma-rust/blob/develop/CONTRIBUTING.md): Development contribution process.
- [Nautilus Wallet GitHub](https://github.com/capt-nemo429/nautilus-wallet): Browser wallet source.
- [SAFEW Discord](https://discord.gg/u3K65xRAtv): Cold wallet community.
- [ErgoExplorer burning address](https://ergoexplorer.com/): Address `4MQyMKvMbnCJG3aJ` used for token burns.
- [ErgoPay showcase with burn example](https://golfgl.de/ergopayshowcase/#burn-token): ErgoPay integration example.
- [TokenJay node peer list](https://api.tokenjay.app/peers/list): Alternative node selection for wallets.
- [Ergo cold wallet blog](https://ergoplatform.org/en/blog/2021-10-18-ergo-cold-wallet/): Offline signing workflow.
- [Ergo manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/): Core philosophy.
- [Ergo DeFi whitepaper](https://ergoplatform.org/en/blog/2020-09-17-defi-finance-but-not-always-decentralised/): Decentralization principles.
- [MrStahlfelge EIP-0028 ErgoAuth blog](https://bit.ly/38tWNpn): Wallet authentication tool.
- [Weekly AMA YouTube](https://youtu.be/maK3mO1X7mw): April 29 2022 video (kushti, Armeanio, Dan).
- [ErgoNFTs Telegram](https://t.me/ErgoNFTs): NFT community channel.
- [DECO Discord](https://discord.com/invite/deco): Developer education program.
- [Ergo Exchanges list](https://ergoplatform.org/en/exchanges/): Official exchange directory.
- [Indigo Protocol tweet on Oracle Pool rate](https://twitter.com/Indigo_protocol/status/1519473318394572801): Rate discussion.
- [Ergohack.io](https://ergohack.io): Hackathon information and sign-ups.
- [Conceal Network roadmap](https://conceal.network/#roadmap): Q3 2022 bridge release planned.

---

## Unresolved Questions

- **CoinMarketCap Data**: CMC continues to report incorrect circulating supply (~32M vs. 54M actual) despite repeated flagging; no timeline for correction.

- **EIP-27 Activation**: Emission extension tokens ready but hard fork activation date not confirmed.

- **Nautilus Privacy Mode Default**: Confirmed UX issue but not yet resolved; @MrStahlfelge noted it should be disabled by default.

- **Mempool Tx Sorting**: Kushti flagged unfair tx cost-sorting as ongoing issue; planned fix around 5.0 but no confirmed timeline.

- **AppKit Multi-sig UI**: ErgoPay protocol supports multi-wallet signing, but AppKit implementation missing; no ETA for resolution.

- **L2 Execution Models**: ErgoDex hybrid sidechain approach to be detailed in May article; consensus mechanism (Roll-DPos) mentioned but full specification pending.

- **Weak Block Incentive Design**: Concept outlined but implementation details and smart contract reward mechanisms still in discussion phase.

- **Ledger App Testing**: "V. close" status confirmed but no specific release date announced; depends on Tesseract team progress.

---

**Compilation date:** 2022-W17 archive review  
**Quality note:** Week includes substantive scalability discussion (2022-04-28 community roundtable with kushti, scalahub, Cheese, Ilya Oskin) and important technical Q&A on wallet functionality and tx design. Price discussion and casual chat filtered out per guidelines.