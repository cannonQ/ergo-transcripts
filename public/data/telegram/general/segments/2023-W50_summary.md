---
title: "Ergo General Chat — 2023-W50"
date_start: "2023-12-11"
date_end: "2023-12-17"
type: telegram_weekly
channel: general
week: "2023-W50"
source: telegram
message_count: 0
categories: [bridges, marketing, technical, wallet, defi, governance, mining, community, ecosystem]
key_terms: [RSN, Rosen Bridge, token launch, watchers, ISPO, market cap, liquidity, coinmarketleague, listing, GreasyCEX, Comet, QUACKS, SigmaUSD, ErgoScript, ErgoTree, authentication language, crypto-predicates, compilation, Ledger, connect-kit]
---
# Ergo General Chat — 2023-W50 Summary

## Key Topics Discussed

- **Ledger Connect-Kit Security Incident**: A compromised NPM package in Ledger's connect-kit library allowed attackers to drain wallets from dApps using the library. Ergo was not affected as it uses only the secure `@ledgerhq/hw-transport@6.27.7` library. The vulnerability was patched in v1.1.8.

- **Rosen Bridge Token (RSN) Market Dynamics**: Token shows strong momentum with ~$56M market cap (undiluted ~$4.25M circulating supply). Discussion of whale holdings (~8M RSN = 14% of circulating), watchers lock mechanism (2.7M RSN locked), and liquidity concerns on Spectrum DEX (shallow pool, ~58% dump risk for large FLUX collateral liquidation).

- **KuCoin USA Delisting**: KuCoin restricted USA access; ERG remains listed on KuCoin for non-US users. Liqwid Finance (Cardano lending) integration with Rosen Bridge enabling ERG as collateral was announced.

- **ErgoScript/ErgoTree Language Design**: Discussion of ErgoTree as typed abstract syntax tree (not stack-based imperative language like EVM). ErgoTree functions as authentication language combining predicates for secret data and blockchain context. Potential for lisp-like higher-level language compiling to ErgoTree noted as unexplored design space.

- **Block Speed/Scalability Research**: kushti announced revival of draft discussions for performance improvements post-Ergoversary, mentioning sub-blocks, sidechains, and microblocks as potential directions. Testnet available for parameter tweaking (difficulty levels, block timing) with call for community participation.

- **Transaction Consolidation Issue**: Users with fragmented UTXO sets report 57 ERG max send limits. Solution involves increasing miner reward payout threshold in future to avoid fragmentation. Affects adoption UX negatively.

- **DAO Use Cases (Paideia)**: Community discussion clarified DAO governance models: trustless fund management with on-chain voting, protocol parameter control, membership token revocation, decentralized mining pool control. Multi-chain DAO platforms exist; Paideia supports Ergo and Cardano.

- **NFT Locker Systems via Sub-blocks**: HQΣr proposed using sub-blocks for NFC event entry tickets with instant "confirmations" (1 sub-block = ~2 second confirmation vs ~2 minute block time).

- **Ergo Platform Twitter/X Incident**: Automated social media scheduling tool bug caused accidental promotion of BONK token on official @ergo_platform account. Acknowledged as software error, not compromise.

---

## Important Decisions or Announcements

- [@Armeanio, msg#459307, 2023-12-14]: Weekly AMA with kushti and Armeanio scheduled for 2 PM UTC Thursday Dec 14 on YouTube.

- [@qx(), msg#459093, 2023-12-13]: Fleet SDK rewritten in C# by Pulsarz, enabling pure Java/C# interaction with Ergo blockchain without reference client.

- [@glasgowm, msg#459507, 2023-12-14]: Ergo support on Ledger hardware wallet remains in developer mode (not production ready).

- [@CML_Bee, msg#458411-414, 2023-12-11]: CoinMarketLeague now lists Ergo tokens free of charge; GreasyCEX and Rosen Bridge listed as examples.

- [@Armeanio, msg#459376, 2023-12-14]: Rosen Bridge weekly AMA completed (reference to dev update video with sam).

---

## Technical Q&A Worth Preserving

- **Q** (@Jon theRealJfox): Why can I only send 57 ERG at once from Ergo Mobile wallet?
  **A** (@Luivatra, msg#459251): Fragmented UTXO set from small miner payouts. Set miner reward payout threshold higher to avoid future fragmentation. Current workaround requires consolidating via multiple transactions.

- **Q** (@Jon theRealJfox, msg#459268): Can send limits be increased?
  **A** (@jon, msg#459272): Increasing the miner fee threshold works; limit grows with successive consolidations.

- **Q** (@Serg_Vasilyev, msg#459750): How do I extract seed phrase from expired Ergo Beta wallet on iOS to restore in Terminus?
  **A** (@glasgowm, msg#459756): You cannot access expired beta wallet. Restore new wallet using seed phrase written down from original setup. If Terminus shows zero balance, try Nautilus wallet instead (msg#459791); suggests possible seed input error or different derivation path.

- **Q** (@Johnny, msg#458573): Which wallet receives SPF tokens when providing ADA liquidity on Spectrum Finance?
  **A** (@glasgow, msg#458574): Direct to Spectrum Labs community channel for dApp-specific questions (not answered in chat).

- **Q** (@HQΣr, msg#458394): How does transaction cancellation work on Ergo?
  **A** (@HQΣr, msg#458396): Transactions cannot be cancelled once submitted; UTXO model prevents reversal.

- **Q** (@Shiv_Chauhan, msg#459959): Is there a Taptools equivalent for Ergo NFTs?
  **A** (@Bye_H8er, msg#459961): Click hamburger menu (upper right) → select "tokens" for NFT/token overview.

- **Q** (@Unknown, msg#459931): Excel/Google Sheets command to fetch ERG price?
  **A** (@Unknown, msg#460021): Solution provided but specific command not captured in transcript.

---

## Links Shared

- [https://github.com/Luivatra/ergotipper-tokens#readme]: ErgoTipper token list repository by Luivatra, comprehensive token registry.

- [https://cruxfinance.io/tokens/8b08cdd5449a9592a9e79711d7d79249d7a03c535d17efaee83e216e80a44c4b]: CruxFinance token chart for RSN with accurate pricing from Spectrum DEX liquidity.

- [https://coinmarketleague.com/coin/home?network=ergo]: CoinMarketLeague Ergo blockchain listing (first token listed by Yulius).

- [https://docs.ergoplatform.com/dev/scs/ergotree/evaluation/]: ErgoTree evaluation semantics and typed AST design documentation.

- [https://www.ergoforum.org/t/ergotree-as-an-authentication-language/274]: Forum discussion of ErgoTree's dual role as authentication language combining crypto-predicates and context evaluation.

- [https://www.slideshare.net/ChristopherA/smart-signaturesexperiments-in-authentication-stanford-bpase-2018-final]: Historical Smart Signatures research (pre-mainnet) foundational to ErgoTree design.

- [https://github.com/LedgerHQ/connect-kit/releases/tag/ck-v1.1.8]: Ledger connect-kit v1.1.8 security patch for supply-chain compromise.

- [https://github.com/LedgerHQ/connect-kit/blob/main/packages/connect-kit-loader/src/index.ts#L83C49-L83C68]: Vulnerable code location (jsdelivr CDN link not pinned to specific version).

- [https://www.therefour.org/rosen-bridge]: Rosen Bridge documentation link shared for technical questions.

- [https://defillama.com/protocol/phoenix-ergo]: DeFiLlama Phoenix Finance Ergo protocol metrics.

- [https://veil.exchange/]: Veil Exchange (private swap service supporting ERG via Union Chain liquidity with built-in mixer).

- [https://youtube.com/live/5p-xmILkS2c]: Weekly AMA stream link (Thursday Dec 14, 2 PM UTC with kushti and Armeanio).

- [https://gitlab.com/0353F40E/ebaa]: Bitcoin Cash Adaptive Algorithmic Blocksizes implementation (alternative scalability referenced by dayumbbbb).

---

## Unresolved Questions

- **Sub-blocks utility for lockers**: HQΣr's NFC event ticket locker proposal (msg#458391-393) described use case but no technical feasibility assessment or roadmap status confirmed.

- **Block speed parameter testing**: kushti's call for testnet community participation (msg#458689 area) lacks specifics on timeline, target block interval, or decision criteria for mainnet changes.

- **Lisp-like language for ErgoScript**: kushti interest (msg#458682) noted but no commitment or design phase announced; identified as low priority vs. existing ErgoScript adoption.

- **Ergo on Ledger hardware wallet**: Remains "in developer mode" (msg#459507) with no production release ETA given.

- **NDAX direct ERG listing**: Spencer noted dependency on Fireblocks integration (msg#459815) blocking deposit capability; blocker status and timeline unclear.

- **Satergo development status**: Aberg mentioned deleting WIP updates for AI carrot generation (msg#458798, joking context); actual roadmap impact unconfirmed.

- **Rosen Bridge "two weeks"** (msg#459212): Recurring meme about Rosen timeline; Ruben's cryptic "two weeks" (msg#459205) not aligned with any announced target date in this segment.

---

## Community Sentiment & Misc. Notes

- **Ledger incident response praised**: anon_br's explanation of Fleet SDK provenance (msg#459358) highlighted superior security practices vs. supply-chain vulnerability.

- **RSN momentum bullish but cautious**: Community monitoring whale behavior; 8M RSN holder (~35% slippage if market-sold) identified as systemic risk but no dump detected by end of week.

- **Ergo adoption metrics flat**: Discussion of stable 21k daily active addresses since 2021 despite new use cases (AVL trees, chained TXs suppressing TX count metrics); noted as similar issue across blockchains.

- **CoinmarketCap/CoinGecko pricing unreliable**: RSN showing poor chart data due to low volume on listed CEXs; Spectrum DEX and CruxFinance recommended for accurate pricing.

- **Community welcoming new contributors**: Yulius and others actively onboarding projects to CoinMarketLeague and ecosystem integrations (e.g., Liqwid, Veil Exchange).