# Ergo General Chat — 2021-W01 Summary

## Key Topics Discussed

- **Proof of Work vs Proof of Stake debate**: Extended discussion on why Ergo chose PoW over PoS, with focus on accessibility, mining participation incentives, and proven security versus PoS theoretical advantages. Armeanio emphasized PoW as an open resource model enabling broader participation without requiring capital entry.

- **Autolykos v2 and pool resistance removal**: Community questioned the removal of pool resistance in the upcoming fork, with kushti directing users to the v4.0.0 branch for technical details. Reference miners (NVIDIA and AMD) were released.

- **Oracle Pools and Cardano interoperability**: Clarification that Ergo enables Oracle Pools on Cardano via Emurgo partnership; multiple layers (v1 and v2 for Dexy Gold with GORT rewards) in development. Discussed as a complementary oracle solution to Chainlink.

- **Yoroi wallet and dApp Bridge**: Unknown clarified that the Ergo dApp Bridge (EIP-12) allows dApps to integrate with Yoroi without embedding in the wallet itself, providing MetaMask-like UX for existing and future dApps.

- **Storage rent and post-emission incentives**: kushti outlined plans for storage rent to replace the emission tail (similar to Monero model), with modeling of end-of-emission economics expected ~2 years out.

- **Mixer recovery for legacy wallets**: Solution provided for users with old (pre-August 2020) wallet seed phrases: ErgoMixer can recover funds from legacy node setups without requiring full node re-sync.

- **ErgoScript and smart contract development**: Ongoing need for application developers; kushti encouraged starting with Playground, ErgoScript whitepaper, and real project examples. Developer chat occurs weekly on Discord.

- **Auction House and NFT use cases**: 14–17 concurrent auctions demonstrated functionality; discussion of expanding beyond digital art to real-world applications (limited-edition physical goods, collectibles, future prediction markets).

- **Stablecoin protocol (AgeUSD)**: Deferred to official announcement at Ergo Summit 2021 (January 23); no details released yet on mechanics or launch timeline.

- **NiPoPoWs and long-term security**: kushti clarified that NIPoPoWs remain viable post-emission because miners will continue receiving transaction fees and storage rent incentives; PoS cannot achieve NiPoPoWs due to mathematical properties of PoW.

- **Network improvements and interoperability roadmap**: Plans for 2021 include completing networking layer, alternative clients (like Cypra wallet), light full-node promotion, NiPoPoW-based bootstrapping, and Gravity protocol gateways (Ethereum, Binance Chain, Waves, Tron, etc.).

## Important Decisions or Announcements

- [@kushti khushi, msg#73308, 2021-01-04]: Reference NVIDIA and AMD miners for Autolykos v2 released; full miners with Stratum support coming soon.

- [@kushti khushi, msg#73319, 2021-01-04]: Twitter announcement of upcoming content.

- [@Unknown, msg#73575-73577, 2021-01-06]: Ergo dApp Bridge (EIP-12) clarification: no dApps embedded in Yoroi; Yoroi provides native support for DEX and other dApps via the bridge API.

- [@kushti khushi, msg#74016, 2021-01-08]: AMA planned for February post-summit.

- [@Dmitry Usov, msg#74593, 2021-01-10]: Summit announcement link will be added to ergoplatform.org landing page.

- [@kushti khushi, msg#74747, 2021-01-10]: 2021 roadmap confirmed: networking improvements, NiPoPoW-based bootstrapping, Gravity protocol gateways, velvet fork sidechaining, superior interop solutions.

- [@Jonesy, msg#74433, 2021-01-09]: ergo101.org updated with Ergo Summit link and promoted as video of month.

## Technical Q&A Worth Preserving

- **Q** (@ニック ᴏʟᴇᴜᴍ, msg#73341-73362): How to recover ERG from pre-August 2020 wallet with 15-word seed phrase not supported by Yoroi?
  **A** (@kushti khushi, msg#74385): Use ErgoMixer (v3.2.0+) as described in forum post. No full node required; mixer can recover funds from legacy wallet setups. GitHub: https://github.com/ergoMixer/ergoMixBack/releases

- **Q** (@ニック ᴏʟᴇᴜᴍ, msg#74398): Do I need to run a node to use the mixer?
  **A** (@kushti khushi, msg#74399): No node is needed for the mixer.

- **Q** (@Unknown, msg#73712): How does ERG relate to ADA? Are they competitors or can they cooperate?
  **A** (Implied via msg#73975-73976): Ergo provides Oracle Pools for Cardano via Emurgo partnership; interoperability planned through Oracle Pools and Gravity protocol.

- **Q** (@UpwindStrategy | King de' Medici, msg#74600-74602): How will NIPoPoWs function after emission ends? Will miners still create PoW blocks? What determines max computational cost per block?
  **A** (@kushti khushi, msg#74766): Storage rent will replace emission tail (similar to Monero). Miners continue receiving transaction fees and storage rent, maintaining PoW difficulty. Max computational cost per block is analogous to gas limit in Ethereum, addressing the verifier's dilemma (msg#74768).

- **Q** (@UpwindStrategy | King de' Medici, msg#74261): What is the difference between UTXO and extended UTXO (eUTXO)?
  **A** (@Unknown, msg#74270): Data inputs are unique to eUTXO (Ergo and Cardano). Reference: https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md

- **Q** (@Albermonte ⬣, msg#74081-74089): Why were two rapid tips rejected as double-spends? How should ergo-ts handle mempool inputs?
  **A** (@kushti khushi, msg#74089): Input chaining (spending mempool outputs) is needed. ergo-ts must consider mempool state; alternatively, use `/transactions/check` method before posting via `/transactions` asynchronously.

- **Q** (@Żeśo NiPoPau, msg#74750): REST API spec recommendations for Explorer v1.
  **A** (@kushti khushi, msg#74751, msg#74756): v0 is fixed due to existing app usage; v1 in progress can adopt improvements. Pass feedback to explorer dev on Discord.

- **Q** (@Eysteinh, msg#74200): Can NIPoPoWs verify transactions from Cardano to Ergo?
  **A** (Implied response): NIPoPoWs enable PoW chain verification; PoS→PoW verification possible but not reverse without alternative mechanisms.

- **Q** (@Premere.ONE, msg#74648): Is ERG ASIC-resistant?
  **A** (@UpwindStrategy, msg#74650-654): Memory-hardness increases ASIC difficulty but cannot be 100% ASIC-proof. Hardening protocol will add dynamic hardening. Goal is to attract ETH miners post-Merge as alternative hash power destination.

- **Q** (@UpwindStrategy | King de' Medici, msg#74705-714): Does a conditional escrow tipping bot exist for OTC cross-currency swaps?
  **A** (@V, msg#74715-718): No automated escrow solution exists (major platforms use manual teams). For ERG OTC, use Ergo team members as escrow. Trust remains a fundamental issue even with bots.

## Links Shared

- [ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/](ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/): Welcome to Smart Money overview.
- [ergoforum.org/t/oracle-pools-a-new-oracle-model/263](ergoforum.org/t/oracle-pools-a-new-oracle-model/263): Oracle Pools technical discussion and Chainlink comparison.
- [ergoforum.org/t/autolykos-v-2-details/480](ergoforum.org/t/autolykos-v-2-details/480): Autolykos v2 technical details.
- [github.com/ergoplatform/ergo/releases/tag/v3.3.7](github.com/ergoplatform/ergo/releases/tag/v3.3.7): Autolykos v2 release.
- [ergo.herominers.com/](ergo.herominers.com/): Herominers pool for GPU mining.
- [ergoforum.org/t/magnum-wallet-closing-in-20-days/468/6](ergoforum.org/t/magnum-wallet-closing-in-20-days/468/6): Legacy wallet recovery via ErgoMixer.
- [github.com/ergoMixer/ergoMixBack/releases](github.com/ergoMixer/ergoMixBack/releases): ErgoMixer releases.
- [github.com/mhssamadani/Autolykos2_NV_Miner](github.com/mhssamadani/Autolykos2_NV_Miner): Reference NVIDIA miner.
- [github.com/mhssamadani/Autolykos2_AMD_Miner](github.com/mhssamadani/Autolykos2_AMD_Miner): Reference AMD miner.
- [ergosummit.org/](ergosummit.org/): Ergo Summit 2021 landing page (January 23).
- [ergo101.org/](ergo101.org/): Community resource site.
- [explorer.plutomonkey.com/ergo/oracle/](explorer.plutomonkey.com/ergo/oracle/): Oracle Pool v1 pricing data visualization.
- [blog.plutomonkey.com/2021/01/generic-on-chain-ergo-swaps/](blog.plutomonkey.com/2021/01/generic-on-chain-ergo-swaps/): Jason Davies blog on on-chain swaps.
- [ergoauctions.org/](ergoauctions.org/): Auction House with running NFT auctions.
- [youtube.com/watch?v=2sbTMrQwWOw](youtube.com/watch?v=2sbTMrQwWOw): Robert Kornacki podcast on storage rent and post-emission economics.
- [github.com/coinbarn/ergo-ts](github.com/coinbarn/ergo-ts): ergo-ts TypeScript client library.
- [github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md](https://github.com/Emurgo/Emurgo-Research): eUTXO model whitepaper.
- [reddit.com/r/cardano/comments/kslmrl/in_support_of_creating_a_larger_community_for_ergo/](https://www.reddit.com/r/cardano/comments/kslmrl/in_support_of_creating_a_larger_community_for_ergo/): Cross-ecosystem discussion.
- [cointelegraph.com/news/a-new-cardano-based-project-is-handling-oracles-a-lot-differently-than-chainlink](https://cointelegraph.com/news/a-new-cardano-based-project-is-handling-oracles-a-lot-differently-than-chainlink): Cointelegraph article on Ergo Oracle Pools.
- [ergoplatform.org/en/blog/2020-11-09-first-steps-towards-interoperability-with-cardano-oracles/](ergoplatform.org/en/blog/2020-11-09-first-steps-towards-interoperability-with-cardano-oracles/): Cardano interoperability announcement.
- [forum.cardano.org/t/ergo-powered-cardano-oracles/42054](forum.cardano.org/t/ergo-powered-cardano-oracles/42054): Cardano forum discussion.
- [cryptowat.ch/charts/GATEIO:ERG-USDT](https://cryptowat.ch/charts/GATEIO:ERG-USDT): CryptoWatch ERG/USDT chart.
- [ergoforum.org/t/zero-knowledge-treasury-on-top-of-ergo/354](ergoforum.org/t/zero-knowledge-treasury-on-top-of-ergo/354): Zero-Knowledge Treasury technical discussion.
- [twitter.com/dlabvc/status/1346135182529634306](twitter.com/dlabvc/status/1346135182529634306): Announcement video.

## Unresolved Questions

- **Stablecoin (AgeUSD) details**: Deferred to January 23 summit announcement. Mechanics, launch timeline, and wallet support TBD.

- **Hardware wallet support (Ledger)**: @Damon AndTheSea (msg#73952) asked for update; @kushti khushi (msg#74981) confirmed still in progress with unclear timeline.

- **Exchange listings**: No confirmation on Binance or other major CEX listings; community repeatedly requested clarity.

- **Legacy seed phrase encoding**: @ニック ᴏʟᴇᴳ noted 15-word phrase encoding differs from Yoroi standard; workaround provided but underlying compatibility issue unresolved.

- **Ergo Summit promotion**: @Żeśo NiPoPau (msg#74373) flagged that summit not mentioned on ergoplatform.org homepage as missed visibility opportunity; acknowledged as good suggestion (msg#74424).

- **REST API v1 design**: Feedback on RESTful redesign for v1 provided by @Żeśo NiPoPau; accepted but implementation timeline unclear.

- **Speed improvements**: Community requested faster block times; kushti confirmed plans for discussion post-summit but technical feasibility and parameter choices remain open.

- **Mixer API applications**: kushti noted (msg#74761) that apps built on mixer API would be valuable; subject to DarkFund0 grants but no specific projects announced.

- **Cross-chain bridge to Cardano**: @CryptoTeller asked about Cardano bridge (msg#73324); community hinted as "coming very soon" (msg#73328) but no timeline or technical spec released.