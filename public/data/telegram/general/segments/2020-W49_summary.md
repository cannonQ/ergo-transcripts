---
title: "Ergo General Chat — 2020-W49"
date_start: "2020-11-30"
date_end: "2020-12-06"
type: telegram_weekly
channel: general
week: "2020-W49"
source: telegram
message_count: 1023
categories: [wallet, technical, ecosystem, defi, mining, governance, marketing, community]
key_terms: [Yoroi, Ledger, Trezor, mobile wallet, desktop support, Headless dApps, Rust framework, UTXO-based, Robert Kornacki, EMURGO, NiPoPoW, cross-chain, Dionysis Zindros, interoperability, light clients, Autolykos v2, pool-resistance, ASIC-resistant, block candidates, mining]
---
# Ergo General Chat — 2020-W49 Summary

## Key Topics Discussed

- **Ledger Hardware Wallet Support**: Development in progress with grant assigned to Jason Davies; expected completion soon. [@Dmitry Usov, msg#67031-67032; @Jason Davies, msg#67845, 2020-12-04]

- **Autolykos v2 (Hard Fork January 2021)**: Pool-resistance disabled; block candidate changes during mining now permitted (enables fast confirmation protocols); ASIC resistance strengthened; large update scheduled for release next week. [@kushti, msg#68016, 2020-12-04]

- **Ergo Node & Wallet Setup**: Multiple users successfully deployed full nodes; CoinBarn wallet extension (v0.1.0) became available for token issuance; wallet synchronization issues resolved with proper ergo.conf configuration. [@kushti, msg#68178; @Dmitry Usov, msg#68325, 2020-12-06]

- **Token Issuance & Auctions**: Auction house (ergoauctions.org) operational for any Ergo-issued tokens; singleton tokens used for NFTs (quantity = 1); panel UI will add token issuance feature in next release; ~250 tokens already issued (mostly for testing). [@kushti, msg#67821-67827, 2020-12-04]

- **Oracle Pools**: Oracle Pool v1 operational with EF members and external participants; Oracle Pool v2 running for Dexy Gold with GORT rewards; plan to build out native Ergo oracles with raised capital for Palmyra ecosystem. [@Armeanio, msg#67641-67649, 2020-12-03]

- **Mining Economics & GPU Requirements**: Current version requires 4 GB RAM; next version 2 GB minimum; RX-580 GPUs viable; ordinary gaming GPU sufficient. [@kushti, msg#67207-67215, 2020-12-01]

- **Stablecoin Stability & Market Cap**: Low market cap ($10M at time) can be beneficial for stablecoin stability; constant but stable growth needed; no ICO/VC support or disclosed market-making; mysterious 2K sat price floor observed across months. [@kushti, msg#67124-67195, 2020-12-01]

- **NIPoPoWs & Cross-Chain Communication**: Episode 5 Ergo Cast featured Dionysis Zindros discussing Non-Interactive Proofs of Proof-of-Work; Ergo has UTXO set commitments for more efficient protocols; most innovative PoW feature. [@kushti, msg#67405-67407, 2020-12-02]

- **Scalability Planning**: Ergo block extension section allows BitcoinNG-style microblocks, Aspen-like service-chains, or generic sidechains via velvet/soft forks; research starting Jan-Feb 2021. [@kushti, msg#67645, 2020-12-03]

- **Bulletproofs & Zero-Knowledge Verification**: Bulletproofs enable trustless zero-knowledge proofs without trusted setup; ErgoScript verification possible; variety of zero-knowledge protocols can be used in contracts for hybrid privacy. [@kushti, msg#68016, 2020-12-04]

- **Sidechain & Merge-Mining**: Sidechain constructions to be published on forum; BAP 301 (Bitcoin Improvement Proposal) mentioned for trustless pegging; merge-mined sidechains reward mainchain miners. [@kushti, msg#68022-68080, 2020-12-04]

- **Headless dApp Framework**: Robert Kornacki released Ergo Headless dApp Framework (Rust) on GitHub; first library for UTXO-based headless dApps; simplifies off-chain logic. [@Unknown, msg#67054, 2020-11-30]

- **Regulatory & Stablecoin Compliance**: US Congressional bill proposes stablecoin regulation; Wyoming charter & PRISM mentioned as potential solutions; global adoption requires KYC automation while preserving privacy. [@UpwindStrategy, msg#67472-67485, 2020-12-03]

## Important Decisions or Announcements

- [@kushti, msg#67119, 2020-12-01]: New Ergo Cast episode published ("very good" technical content with special guest).

- [@kushti, msg#67202, 2020-12-01]: Hard fork coming around January 2021.

- [@kushti, msg#67231-67232, 2020-12-01]: Requesting community locate old pinned message.

- [@kushti, msg#67835, 2020-12-04]: Ergo node version 3.3.7 finalized; release expected next week after testing.

- [@Dmitry Usov, msg#67812, 2020-12-04]: Panel token issuance feature coming in next release (hoped for December).

- [@Unknown, msg#67238, 2020-12-01]: Ergo Cast Episode 5 featuring Dionysis Zindros on NIPoPoWs published (https://youtu.be/OUjxar1WCmo).

- [@Unknown, msg#67555, 2020-12-03]: Ergo Smart DEX orders with buyback guarantees feature announced.

- [@kushti, msg#68329-68330, 2020-12-06]: Node 3.3.7 next week; 3.3.8 in ~3 weeks.

- [@kushti, msg#68327, 2020-12-06]: Yoroi-mobile integration in progress.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): How to create ERG address on Yoroi wallet?
  **A** (@Jude FOMO, msg#67053): Click "My Wallet" → "Add new wallet" → "Create wallet" → Select "Ergo" → proceed.

- **Q** (@Unknown): Does Yoroi desktop support Ergo?
  **A** (@Unknown, msg#67025): Yes, Yoroi does support Ergo on desktop.

- **Q** (@Unknown): How much does Ledger or Trezor support cost?
  **A** (@kushti, msg#67035): Grant was assigned to Jason Davies for Ledger support; current status is dev in progress.

- **Q** (@Unknown): Can you issue multiple copies of the same token for contests?
  **A** (@kushti, msg#67815): Yes, PM quantity, description, ticker; tokens are native to Ergo and tracked on explorer.

- **Q** (@Unknown): What's the difference between Autolykos v1 and v2?
  **A** (@kushti, msg#68016): Pool-resistance switched off; block candidate changes during mining now permitted (enables fast confirmation protocols); some possible optimizations closed.

- **Q** (@Unknown): Why is pool resistance disabled in Autolykos v2?
  **A** (@kushti, msg#68022): To get small miners onboard; pools are possible with collateral barriers; research published at https://eprint.iacr.org/2020/044.

- **Q** (@Unknown): Will frequent hard forks be needed like Bitcoin forks (BTC, BCH, BSV)?
  **A** (@kushti, msg#68089): One hard fork planned first 12 months to fix basic assumptions; Ergo focused on soft forks; community-based decisions.

- **Q** (@Unknown): How does the mixer work without running a node?
  **A** (@kushti, msg#67254): Mixer works with public nodes and explorer; no need to run a node.

- **Q** (@Unknown): How does CoinBarn token issuance work?
  **A** (@kushti, msg#67448-67809): Simplest option is CoinBarn wallet; panel issuance feature coming next release; users can PM kushti for token issuance help.

- **Q** (@Unknown): Why is Ergo considering multiple oracles instead of just Chainlink?
  **A** (@Armeanio, msg#67641-67649, 2020-12-03): Not zero-sum game; chose Chainlink for network size and support but plan to utilize various oracles including native Ergo oracles for Palmyra ecosystem.

- **Q** (@Unknown): How will Ergo prevent centralized mining pools like Bitcoin?
  **A** (@kushti, msg#68060): Hard to say at the moment; hardware centralization is the core issue; Ethereum 1.0 is good PoW example; will assess in 3-4 years.

- **Q** (@Unknown): What prevents a large GPU farm from controlling the network?
  **A** (@Unknown, msg#68038): Autolykos v2 designed to reduce hardware advantage; not about preventing farms but reducing advantage of one hardware type over another.

- **Q** (@Unknown): Are Bulletproofs used in Ergo smart contracts?
  **A** (@kushti, msg#68016): Verification done in ErgoScript possible; enables variety of zero-knowledge protocols for hybrid privacy in contracts.

- **Q** (@Unknown): What vector commitment scheme does Ergo use?
  **A** (@kushti, msg#67602-67604): Edrax VC scheme (co-authored by kushti); stateless client solutions simpler in UTXO model; based on hash functions only (simple, non-standard crypto unnecessary).

- **Q** (@Unknown): How do storage rent and stateless fullnodes work?
  **A** (@kushti, msg#67602-67606): Ergo uses sparse Merkle tree solution; hash-function-based approach enables stateless fullnodes without exotic cryptography; presentation: https://www.youtube.com/watch?v=PHY7JnLrK5o (RealWorldCrypto'2017).

- **Q** (@Ali): Why transition from PoW to PoS?
  **A** (@kushti, msg#67619-67620): Not sure why transition needed aside from Vitalik's fantasies; Ergo remains PoW with planned scalability.

- **Q** (@Unknown): What's the SimpleFunds address format and why does it start with "88"?
  **A** (@kushti, msg#68198): Recreate wallet with mining address box checked; sync to match Yoroi balance.

- **Q** (@Unknown): Why does my full node wallet show 0 balance despite confirmed transaction on-chain?
  **A** (@Richi, msg#68236-68238): Ensure full node is synchronized; recommend using Yoroi instead (https://yoroi-wallet.com); full node wallets recommended for technical users.

## Links Shared

- [https://github.com/Emurgo/ergo-headless-dapp-framework](https://github.com/Emurgo/ergo-headless-dapp-framework): Ergo Headless dApp Framework (Rust) with tutorials by Robert Kornacki (EMURGO).

- [https://ergoplatform.org/en/blog/2020-11-27-an-introduction-to-headless-dapps/](https://ergoplatform.org/en/blog/2020-11-27-an-introduction-to-headless-dapps/): Introduction to Headless dApps concept.

- [https://youtu.be/OUjxar1WCmo](https://youtu.be/OUjxar1WCmo): Ergo Cast Episode 5 — Dionysis Zindros on NIPoPoWs and cross-chain communication.

- [https://ergocast.io/episode/nipopows-ergo-cast-episode-5/](https://ergocast.io/episode/nipopows-ergo-cast-episode-5/): Episode page with further reading & enrichment links.

- [https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-november-2020/495](https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-november-2020/495): Ergo Platform Ecosystem Digest (November 2020).

- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226): Ergo Scalability Plan (sidechains, microblocks, service-chains).

- [https://eprint.iacr.org/2020/044](https://eprint.iacr.org/2020/044): Ergo paper on pool-resistant mining with entry barriers.

- [https://www.youtube.com/watch?v=PHY7JnLrK5o](https://www.youtube.com/watch?v=PHY7JnLrK5o): kushti presentation on vector commitments (RealWorldCrypto 2017).

- [https://eprint.iacr.org/2018/968](https://eprint.iacr.org/2018/968): Edrax vector commitment scheme (kushti co-author).

- [https://explorer.ergoplatform.com/en/issued-tokens](https://explorer.ergoplatform.com/en/issued-tokens): List of all issued Ergo tokens.

- [https://explorer.ergoplatform.com/en/rich-list](https://explorer.ergoplatform.com/en/rich-list): Ergo rich list.

- [http://ergoauctions.org/#/auction/active](http://ergoauctions.org/#/auction/active): Ergo Auction House (live auctions).

- [https://github.com/coinbarn/coinbarn-extension/releases/tag/v0.1.0](https://github.com/coinbarn/coinbarn-extension/releases/tag/v0.1.0): CoinBarn wallet extension v0.1.0 release.

- [https://www.gate.io/en/trade/erg_usdt](https://www.gate.io/en/trade/erg_usdt): Gate.io ERG/USDT trading pair.

- [https://coinsbit.io/trade/ERG_BTC](https://coinsbit.io/trade/ERG_BTC): CoinsBit ERG/BTC trading pair.

- [https://ergoplatform.org/en/blog/2020-12-02-new-ergo-smart-dex-orders-with-buyback-guarantees/](https://ergoplatform.org/en/blog/2020-12-02-new-ergo-smart-dex-orders-with-buyback-guarantees/): Ergo Smart DEX orders with buyback guarantees announcement.

- [https://ergoplatform.org/en/blog/2019_12_22_mining_for_fun/](https://ergoplatform.org/en/blog/2019_12_22_mining_for_fun/): Mining for Fun guide.

- [https://yoroi-wallet.com/#/](https://yoroi-wallet.com/#/): Yoroi wallet (recommended for non-technical users).

- [https://ergo101.org](https://ergo101.org): Ergo 101 marketing summary.

- [https://twitter.com/solana/status/1334928208836272129](https://twitter.com/solana/status/1334928208836272129): kushti shares Solana as "pseudo-blockchain" example.

## Unresolved Questions

- **Mining pool centralization risks**: Will Ergo develop mechanisms beyond hardware resistance to prevent pool dominance as seen in Bitcoin? [@Unknown, msg#68029-68058, 2020-12-04] — kushti noted hard to predict; monitoring needed in 3-4 years.

- **Sidechain security model**: What guarantees trustless relay of sidechain data to Ergo mainchain? BAP 301 referenced but details pending forum publication. [@kushti, msg#68022-68080, 2020-12-04]

- **Fast confirmation protocols**: Will faster block time (or sub-blocks) be implemented? Research phase starting Jan-Feb 2021; community discussion needed on micro-blocks vs. sidechains. [@kushti, msg#67645, 2020-12-03]

- **Stablecoin DAO governance**: How will SigmaUSD collateralization and liquidation be governed long-term? [@Ali, msg#67601, 2020-12-03] — partially addressed via Oracle Pools but governance model TBD.

- **Regulatory compliance**: How will Ergo handle jurisdiction-specific stablecoin regulation without compromising