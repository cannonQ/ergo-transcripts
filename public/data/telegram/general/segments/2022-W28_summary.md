---
title: "Ergo General Chat — 2022-W28"
date_start: "2022-07-11"
date_end: "2022-07-17"
type: telegram_weekly
channel: general
week: "2022-W28"
source: telegram
message_count: 602
categories: [ecosystem, technical, bridges, nft, governance, community, defi, wallet, marketing]
key_terms: [token burning, storage rent, dapp fees, long-term stability, babel fees, native tokens, transaction fees, liquidity pools, Rosen bridge, Susy bridge, Conceal, cross-chain, integration, COMET oniric NFT, lottery, minting, Sky Harbor, treasury, token burn, sigma-rust bug]
---
# Ergo General Chat Summary — 2022-W28

## Key Topics Discussed

- **Storage Rent & Post-Emission Security**: Extended discussion on whether storage rent will adequately incentivize miners after ERG emission ends. Multiple participants debated whether attacking the network post-emission becomes economically viable or whether storage rent + parameter flexibility will ensure security. Consensus: problem is solvable but depends on unknowable future variables (token price, mining costs, Moore's Law effects).

- **Token Burning & Ecosystem Sustainability**: Louis proposed token burning by dApps as a mechanism to support long-term network stability and storage rent reserves. Discussion touched on whether burning should be mandated, optional, or cultural norm for Ergo-branded projects.

- **Babel Fees (EIP-54)**: Technical walkthrough of how users can pay transaction fees in non-ERG tokens via babel boxes (order book–like smart contracts that swap tokens for ERG automatically). Identified as major UX improvement for mass adoption alongside NIPoPoWs.

- **Wallet UI/UX Feedback**: Users reported Ergo Mobile Wallet (iOS) has visual/interaction issues. MrStahlfelge defended Material Design choices but acknowledged prior feedback on iOS aesthetics. Open to community design contributions but noted high barrier to custom UI skinning on mobile platforms.

- **Bridge Status Updates**: 
  - **Rosen Bridge**: Testnet was too fast (5–10 sec blocks); switched to local mainnet. Integration in progress; debugging Sigma Rust multisig issue. Expected testnet timeline: "a few weeks" (as of 2022-07-12).
  - **SUSY Bridge**: Dead or severely delayed; one small code piece remains but GTON team unable to deliver. Armeanio hired new dev to finish.
  - **Ergodex Spectrum Network**: ~1 year out; separate L2 initiative.
  - **Conceal Bridge**: Still planned per their Telegram; community reports active involvement.

- **dApp Monetization Models**: Discussion on whether dApps automatically benefit from popularity (unlike websites). Consensus: no built-in protocol-level reward; dApps must implement fees, token models, or grants independently. Chained dApps (e.g., GuapSwap using ErgoDex) incur cumulative fees.

- **Speed Improvements & Faster Blocks**: kushti proposed revisiting micro-blocks, sidechains, and faster confirmation protocols. Community interest exists but requires champions willing to lead testnet effort with parameter tweaking. No decision made.

- **Native Token Burn Bug (Sigma Rust & Manual TX)**: Unintended token loss occurred when transactions failed to specify output destinations. Fixes: Nautilus added safeguards; Sigma Rust being patched; protocol-level failsafe discussion ongoing. Identified need for explorer API requirements to prevent accidental asset burns.

- **Ledger Wallet Integration**: Unofficial sideload version available (with 10-token TX limit due to Nano S memory). Official release still pending; last update May 2022. Expected "soon" but no firm ETA.

- **Comet Lottery NFTs**: Live minting at 15 ERG per NFT. Lottery smart contract not yet implemented; dev availability until ~September 2022. Treasury split: majority to treasury, small % to sales operators and team.

## Important Decisions or Announcements

- [@MHS_SAM, msg#289209]: Rosen Bridge integration testing ongoing; testnet schedule slipped due to block speed unsuitable for debugging. Local mainnet used instead.
- [@MHS_SAM, msg#289230]: Sigma Rust multisig issue identified and partially fixed in Rosen integration; blocking full system test.
- [@CW, msg#288441–msg#288447]: Ergo v.5.0 deployed to testnet; blog post published exploring improvements to costing and blockchain efficiency.
- [@Koutelier, msg#288278]: Ergo Wallet has built-in protection: max 100 tokens per single box to prevent accidental loss.
- [@Aberg Satergo dev, msg#288645]: Browser extension wallet bug identified that burns tokens if user has >255 tokens; status of fix unclear.
- [@Ilya, msg#289014–msg#289007]: KaChing raffle/transaction monitoring bot announced; 250 ERG bounty offered for Telegram raffle bot (first donation, threshold milestones, deadline alerts).

## Technical Q&A Worth Preserving

- **Q** (@K Chan, msg#288855–288861): Why does a simple p2p transaction from Ergo Wallet iPhone show 57 inputs and 3 outputs?
  **A** (@Unknown, msg#288863; @Luivatra, msg#288866): UTXOs are atomically created at each block payout/receipt. To send a larger amount, wallet consolidates multiple UTXOs as inputs. Example: 57 mining payouts = 57 UTXOs; consolidating them creates one change UTXO, one recipient UTXO, and one fee output.

- **Q** (@Michael Walrus DAO, msg#288930–288942): Can smart contracts auto-distribute NFT royalties to multiple wallets?
  **A** (@Unknown, msg#288933–288941): Smart contracts get their own address. Royalties go to minting address, not contract. Better approach: regular bot listening to minting address and relaying funds to contract or distributing directly. Or mint from contract address that includes distribution logic (complex).

- **Q** (@Ilya, msg#289183–289201): How do babel fees work on miner side? If someone pays in a token miners don't want, what happens?
  **A** (@Capt. Nemo, msg#289188–289199): Miner receives ERG, not the token. Babel box (order book) automatically swaps the token for ERG at a predetermined rate set by liquidity providers. Think of it as an atomic swap baked into the transaction.

- **Q** (@K Chan, msg#288786–288791): Why is Ergo block size per 100 transactions higher than BTC or BCH?
  **A** (@Unknown, msg#288791): [Confirmed as normal; no detailed explanation provided in chat.]

- **Q** (@Unknown, msg#288983–288989): Cold wallet transactions repeatedly fail on SigRSV minting. Why?
  **A** (@MrStahlfelge, msg#288987–288988): Oracle pool refreshes periodically; time delay between signing and submission can cause price mismatch rejection. Oracle warning text appears in UI but hard to notice. Cold wallet too slow for AgeUSD interaction.

- **Q** (@Unknown, msg#288955–288965): Do dApps automatically benefit when they become popular, or must they monetize explicitly?
  **A** (@Unknown, msg#288958–288962): No built-in protocol reward. dApps must implement their own monetization: fees, tokens, grants, sponsorship, ads. Transaction fees do not automatically route to dApp creators; only to miners.

- **Q** (@Michael Walrus DAO, msg#288932–288938): How can NFT minting emit royalties to a smart contract that distributes to multiple addresses?
  **A** (@Unknown, msg#288936–288941): Minting must originate from contract address to send royalties there. Requires custom minting contract with distribution logic, not currently standard.

- **Q** (@Ilya, msg#289198): With babel fees, doesn't every box require some ERG, making true token-only payments impossible?
  **A** (@Capt. Nemo, msg#289200): Yes, but babel boxes can be used to manage minimal ERG requirements; sender can receive change in minimal amounts.

## Links Shared

- [https://docs.ergoplatform.com/mining/governance/](https://docs.ergoplatform.com/mining/governance/): Mining governance and miner parameter voting (PoW-based).
- [https://ergonaut.space/en/Guides/yield](https://ergonaut.space/en/Guides/yield): Yield farming and staking opportunities aggregated guide.
- [https://sigmaverse.io/all-projects/?category=All](https://sigmaverse.io/all-projects/?category=All): Ergo dApp ecosystem directory.
- [https://ergoraffle.com/raffle/show/dfe947631c9b669a8aaeea1fcc25c175104891e5e6dad8279a9daa1ab548f77d](https://ergoraffle.com/raffle/show/dfe947631c9b669a8aaeea1fcc25c175104891e5e6dad8279a9daa1ab548f77d): kushti's raffle (fundraising).
- [https://explorer.ergoplatform.com/en/addresses/4L1ktFSzm3SH1UioDuUf5hyaraHird4D2dEACwQ1qHGjSKtA6KaNvSzRCZXZGf9jkfNAEC1SrYaZmCuvb2BKiXk5zW9xuvrXFT7FdNe2KqbymiZvo5UQLAm5jQY8ZBRhTZ4AFtZa1UF5nd4aofwPiL7YkJuyiL5hDHMZL1ZnyL746tHmRYMjAhCgE7d698dRhkdSeVy](https://explorer.ergoplatform.com/en/addresses/4L1ktFSzm3SH1UioDuUf5hyaraHird4D2dEACwQ1qHGjSKtA6KaNvSzRCZXZGf9jkfNAEC1SrYaZmCuvb2BKiXk5zW9xuvrXFT7FdNe2KqbymiZvo5UQLAm5jQY8ZBRhTZ4AFtZa1UF5nd4aofwPiL7YkJuyiL5hDHMZL1ZnyL746tHmRYMjAhCgE7d698dRhkdSeVy): Ergo Foundation treasury (on-chain tracking).
- [https://github.com/ergoplatform/eips/pull/54](https://github.com/ergoplatform/eips/pull/54): EIP-54 babel fees proposal (technical spec).
- [https://github.com/anon-br/ledger-ergo-js/tree/master/docs](https://github.com/anon-br/ledger-ergo-js/tree/master/docs): Ledger Ergo integration unofficial documentation and build instructions.
- [https://t.me/kaching_ergo_bot](https://t.me/kaching_ergo_bot): KaChing address tracking & transaction monitoring Telegram bot.
- [https://twitter.com/kaching_ergo/status/1547985667308720128](https://twitter.com/kaching_ergo/status/1547985667308720128): KaChing raffle bot bounty announcement.
- [https://www.ergoforum.org/t/recent-token-burns-a-discussion-on-how-loss-can-be-avoided-as-the-community-grows/3738](https://www.ergoforum.org/t/recent-token-burns-a-discussion-on-how-loss-can-be-avoided-as-the-community-grows/3738): Forum thread on accidental token burns and mitigation strategies.
- [https://bit.ly/3z7Y9AV](https://bit.ly/3z7Y9AV): Blog article on Ergo v.5.0 improvements to costing and security.
- [https://ergoplatform.org/en/blog/2021-05-07-ledger-network-integrates-ergo-network/](https://ergoplatform.org/en/blog/2021-05-07-ledger-network-integrates-ergo-network/): Ledger integration announcement (May 2021).
- [https://feedback.koinly.io/integrations/p/integrate-ergo-native-tokens](https://feedback.koinly.io/integrations/p/integrate-ergo-native-tokens): Koinly feature request for Ergo native token support (needs community upvotes).
- [https://www.reddit.com/r/cardano/comments/lt5f85/babel_fees_explained_how_users_of_cardano_will_be/](https://www.reddit.com/r/cardano/comments/lt5f85/babel_fees_explained_how_users_of_cardano_will_be/): External (Cardano) babel fees explanation applicable to Ergo model.

## Unresolved Questions

- **Storage Rent Adequacy Post-Emission**: Will storage rent alone sustain miner security incentives once block reward ends (decades away)? Multiple participants acknowledged the problem is real but unknowable without future price/cost/hashrate data. No protocol solution finalized.
- **Faster Block Time Trade-offs**: Should Ergo pursue sub-block (micro-block) proposals, sidechains, or faster confirmation protocols? Interest exists but no consensus on path forward. Requires community champion to lead testnet experimentation.
- **Bridge Timeline Certainty**: Rosen Bridge testnet "a few weeks away" (as of 2022-07-12) but had setbacks. SUSY Bridge on life support. Ergodex Spectrum ~1 year. No confirmed mainnet bridge launch date announced.
- **dApp Monetization Protocol Support**: Should Ergo protocol provide built-in mechanisms to auto-reward dApp creators based on usage, or remain user-implemented? Discussed but no proposal or roadmap item confirmed.
- **Ledger Wallet Official Release**: Status unclear beyond "in progress." Sideload unofficial version exists. No ETA provided despite request in May 2022.
- **Token Burning as Norm**: Should Ergo projects adopt fractional token burning as ecosystem standard or remain optional? Philosophical debate; no foundation guidance or incentive structure proposed.
- **Comet Lottery Implementation**: Smart contract design and dev availability constrained; "September 2022" placeholder mentioned but no binding commitment.