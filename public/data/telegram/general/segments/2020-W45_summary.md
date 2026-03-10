---
title: "Ergo General Chat — 2020-W45"
date_start: "2020-11-02"
date_end: "2020-11-08"
type: telegram_weekly
channel: general
week: "2020-W45"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2020-W45 Summary

## Key Topics Discussed

- **Node 3.3.6 Release & P2P Improvements**: kushti released node 3.3.6 with significant P2P layer improvements after extensive disconnection testing during bootstrapping and synced states. Version 3.3.7 subsequently entered development with distributed signature support.

- **Exchange Listings Strategy**: Community and core team discussed exchange priorities post-gate.io withdrawals. Consensus emerged around Huobi and KuCoin as primary targets, with concerns raised about Binance leverage products and FTX regulatory issues. Coinbase listing form was highlighted as fee-free.

- **Autolykos PoW Optimization & Memory Requirements**: kushti outlined potential k-sum based Equihash variant requiring ~6 GB RAM for max efficiency, closing memory optimizations and switching off pool-resistance to prevent ASIC dominance.

- **ETH 2.0 PoS Transition as Mining Opportunity**: Recognition that Ethereum's transition to PoS would free millions of GPUs for alternative PoW chains like Ergo, creating recruitment potential for miners.

- **Mixer Tokenization & Non-Interactive Privacy**: anon2020s proposed token sales mechanism for ErgoMixer profit-sharing (not governance), emphasizing non-custodial, non-interactive mixing as superior to alternatives.

- **Auction House & Order Book DEXes**: qx() contrasted order book models (Trade House, spectrum DEX) with AMM designs, highlighting transparency of depth, slippage control, and peer-to-peer execution versus impermanent loss tradeoffs.

- **Storage Rent & Economic Sustainability**: kushti confirmed 8-year timeline for storage rent + transaction economy stabilization to sustain miners post-emission, with predefined contract preventing arbitrary supply increases without deep protocol changes.

- **Light Nodes & Syncing**: kushti signaled upcoming work on smart syncing to enable light nodes with full node security at minimal cost, reducing infrastructure barriers.

- **Ledger/Trezor Hardware Wallet Integration**: Seba Q raised concern that Ledger/Trezor support (previously announced) appeared stalled. kushti acknowledged the need and suggested parallel integration efforts.

- **Node Binaries for Desktop**: Dmitry Usov highlighted ability to build macOS binaries but noted Windows environment unavailable; desktop Ergo wallet development ongoing.

- **Wallet Recommendations & Migration**: Community converged on Yoroi as primary recommendation for new users (open source, Emurgo-maintained, interoperable mnemonics). CoinBarn (desktop + extension, Ergo co-founder-developed) and ErgoMixer presented as non-custodial alternatives.

## Important Decisions or Announcements

- [@kushti, msg#63693, 2020-11-02]: Node 3.3.6 release imminent with major P2P layer improvements after extensive disconnection testing.

- [@kushti, msg#64048, 2020-11-04]: Node 3.3.6 released with GitHub release notes; devs chat scheduled on Discord.

- [@kushti, msg#64501, 2020-11-08]: Node 3.3.7 assembly underway with distributed signatures support finally enabled.

- [@Unknown, msg#63778, 2020-11-02]: Coinbase listing form identified as no-fee entry for digital assets meeting their standards.

- [@kushti, msg#64491, 2020-11-08]: Video on negative developer attitudes toward forking and hard-fork details coming tomorrow; roadmap video to follow.

- [@Martin_mx, msg#64495, 2020-11-08]: Updated roadmap infographic confirmed for November release.

- [@Unknown, msg#63850-63856, 2020-11-03]: ergo101 and P2S playground added to awesome-ergo repository.

- [@kushti, msg#63928, 2020-11-03]: Video planned on hard-fork changes and community forking debates.

- [@Dmitry Usov, msg#64340, 2020-11-06]: Major ergo team page update announced.

- [@kushti, msg#64357, 2020-11-06]: ErgoMixer v3.0.1 binaries released with emphasis on non-custodial, non-interactive design.

## Technical Q&A Worth Preserving

- **Q** (@Reuben): What proof-of-work changes is Ergo considering?
  **A** (@kushti, msg#63751): Close memory optimizations in Autolykos and switch pool-resistance off; then k-sum based Equihash variant requiring ~6 GB RAM for max efficiency.

- **Q** (@Dom1nant): Can I keep ERG in Magnum wallet?
  **A** (@Erik/Unknown, msg#63839-63840): kushti stated "please move out of Magnum now"; Yoroi recommended as open source, well-maintained alternative with more features planned.

- **Q** (@Unknown): How is Ergo's supply limited compared to Bitcoin and can PoS increase supply?
  **A** (@kushti, msg#64231): Supply limited by predefined contract; miners must make deep protocol changes (not just constant changes) to alter supply, effectively requiring a fork like Bitcoin Cash. Ergo supply immutable unless consensus forked.

- **Q** (@Unknown): Why 8 years for storage rent + transaction economy?
  **A** (@kushti, msg#64306): Plan is to have storage + transaction economy established and functioning within 8-year period to transition miner incentives post-emission.

- **Q** (@Unknown): What are advantages of Turing-complete smart contracts?
  **A** (@kushti, msg#64233, partial): Allows similar kinds of proofs (bulletproofs, Groth one-out-of-many) to be used in ErgoScript verification, enabling variety of zero-knowledge protocols combined with contracts while avoiding data disclosure.

- **Q** (@Moneyhun): How to move ERG from exchange to Yoroi wallet?
  **A** (@Unknown/chrom, msg#63845-63872): Yoroi Chrome Extension only; get address from extension and withdraw from exchange to that address.

- **Q** (@₿O₿O): Is Yoroi custodial or non-custodial?
  **A** (@Dmitry Usov, msg#64317-64320): Non-custodial; CoinBarn extension stores mnemonics on your computer (not Coinbarn's servers) and decrypts locally for each use.

- **Q** (@Dom1nant): Why is Yoroi transaction taking 19+ confirmations?
  **A** (@Unknown, msg#64219): Exchanges are quite slow issuing transactions; patience required.

- **Q** (@Erik): Can anyone start an auction on Auction House or does one need a node wallet?
  **A** (@kushti, msg#64484): Left ambiguous but implied yes with node wallet requirement.

## Links Shared

- [https://explorer.ergoplatform.com/en/addresses/9iKFBBrryPhBYVGDKHuZQW7SuLfuTdUJtTPzecbQ5pQQzD4VykC](https://explorer.ergoplatform.com/en/addresses/9iKFBBrryPhBYVGDKHuZQW7SuLfuTdUJtTPzecbQ5pQQzD4VykC): gate.io ERG holdings showing active withdrawals.

- [https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-october-2020/450](https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-october-2020/450): October 2020 ecosystem digest.

- [https://www.ergoforum.org/t/ergo-nonce-distribution/243](https://www.ergoforum.org/t/ergo-nonce-distribution/243): Nonce analysis showing darkening color patterns (less random) post-May 2020 matching difficulty increases.

- [https://discord.gg/kj7s7nb](https://discord.gg/kj7s7nb): Ergo mining Discord channel.

- [https://ergoplatform.org/en/blog/2020-11-03-the-us-election-and-blockchain-the-risk-of-hard-forks/](https://ergoplatform.org/en/blog/2020-11-03-the-us-election-and-blockchain-the-risk-of-hard-forks/): Blog post on US election, blockchain, and hard-fork risks.

- [https://github.com/ergoplatform/awesome-ergo](https://github.com/ergoplatform/awesome-ergo): awesome-ergo repository with P2S playground and primer added.

- [https://ergo101.org/](https://ergo101.org/): Community documentation site updated with team page, blog links, news, and documents.

- [https://listing.coinbase.com/](https://listing.coinbase.com/): Coinbase asset listing page with no application fees policy.

- [https://listing.coinbase.com/policy](https://listing.coinbase.com/policy): Coinbase listing policy.

- [https://docs.google.com/forms/d/e/1FAIpQLScZ9mMTmV-Vvj5P6ONT4vQwGSihpcFmNSpfE0s62lLf9VB97g/viewform](https://docs.google.com/forms/d/e/1FAIpQLScZ9mMTmV-Vvj5P6ONT4vQwGSihpcFmNSpfE0s62lLf9VB97g/viewform): Coinbase listing application form.

- [https://crates.io/crates/ergo-node-interface](https://crates.io/crates/ergo-node-interface): Rust Ergo Node Interface library published to crates.io.

- [https://github.com/ergoplatform/ergo/releases/tag/v3.3.6](https://github.com/ergoplatform/ergo/releases/tag/v3.3.6): Node 3.3.6 release notes.

- [https://www.ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443/1](https://www.ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443/1): TX assembler service discussion for dApps integration.

- [https://explorer.ergoplatform.com/en/addresses/2BggBDgr9nAP7qn7pTHhnuf3GvSKcdFk6Xd9o2jopeeG94dNcbqKNFoXLNVENytqtjkNScC7dSD86YbrQiN45ChwAj4xBeUP9sn96r2m79zJ3YudrMZEJ5iTqMe2xMgMwHDi3HjrJkiNNnQiWiCVrZ1db9MzfgNqxzc1jbMZMtfKftPyNUZwkRFjTzYq3zDYFWmWi7KAS5ECBjRBkpwae2AJ1sZf9p9CEdDMa9AQLSpkfxbKYTcFVvB7jWdFC1sgBrxiaYrofJharuCw3](https://explorer.ergoplatform.com/en/addresses/2BggBDgr9nAP7qn7pTHhnuf3GvSKcdFk6Xd9o2jopeeG94dNcbqKNFoXLNVENytqtjkNScC7dSD86YbrQiN45ChwAj4xBeUP9sn96r2m79zJ3YudrMZEJ5iTqMe2xMgMwHDi3HjrJkiNNnQiWiCVrZ1db9MzfgNqxzc1jbMZMtfKftPyNUZwkRFjTzYq3zDYFWmWi7KAS5ECBjRBkpwae2AJ1sZf9p9CEdDMa9AQLSpkfxbKYTcFVvB7jWdFC1sgBrxiaYrofJharuCw3): Dark Fund0 zero-knowledge treasury address.

- [https://github.com/ergoMixer/ergoMixBack/releases/tag/3.0.1](https://github.com/ergoMixer/ergoMixBack/releases/tag/3.0.1): ErgoMixer v3.0.1 binaries.

- [https://github.com/coinbarn/coinbarn-extension/blob/master/docs/add-desktop.md](https://github.com/coinbarn/coinbarn-extension/blob/master/docs/add-desktop.md): CoinBarn desktop binary instructions.

- [https://github.com/coinbarn/coinbarn-extension/releases/tag/v0.1.0](https://github.com/coinbarn/coinbarn-extension/releases/tag/v0.1.0): CoinBarn extension v0.1.0 release.

- [https://ergoplatform.org/en/wallets](https://ergoplatform.org/en/wallets): Official Ergo wallets page.

- [https://ergoplatform.org/en/hall_of_fame/](https://ergoplatform.org/en/hall_of_fame/): Ergo Hall of Fame.

- [https://twitter.com/ergoplatformorg/status/1323618494987030528](https://twitter.com/ergoplatformorg/status/1323618494987030528): Ergo platform announcement.

- [https://twitter.com/chepurnoy/status/1324099136178790405](https://twitter.com/chepurnoy/status/1324099136178790405): kushti tweet on Ethereum PoS transition opportunity for Ergo miners.

- [https://twitter.com/chepurnoy/status/1324798940454289410](https://twitter.com/chepurnoy/status/1324798940454289410): kushti tweet on Raspberry Pi nodes running light-fullnodes.

- [https://explorer.ergoplatform.com/en/addresses/9gck4LwHJK3XV2wXdYdN5S9Fe4RcFrkaqs4WU5aeiKuodJyW7qq](https://explorer.ergoplatform.com/en/addresses/9gck4LwHJK3XV2wXdYdN5S9Fe4RcFrkaqs4WU5aeiKuodJyW7qq): HotBit ERG holdings (dropped below 1M).

- [https://explorer.ergoplatform.com/en/transactions/02e456326b5c81a5acd065d26acf1dc8715d372db69cd9572abe259c64409503](https://explorer.ergoplatform.com/en/transactions/02e456326b5c81a5acd065d26acf1dc8715d372db69cd9572abe259c64409503): Auction house testing with Yoroi.

- [https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428/7](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428/7): Auction House details thread.

- [https://twitter.com/ergoplatformorg/status/1324800907352092672](https://twitter.com/ergoplatformorg/status/1324800907352092672): Ergo platform tweet on Raspberry Pi nodes.

- [https://twitter.com/ergoplatformorg/status/1324811535286444033](https://twitter.com/ergoplatformorg/status/1324811535286444033): Ergo platform development activity announcement.

## Unresolved Questions

- **Ledger & Trezor Integration Status**: Seba Q flagged