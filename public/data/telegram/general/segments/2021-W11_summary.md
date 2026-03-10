---
title: "Ergo General Chat — 2021-W11"
date_start: "2021-03-15"
date_end: "2021-03-21"
type: telegram_weekly
channel: general
week: "2021-W11"
source: telegram
message_count: 943
categories: [ecosystem, defi, community, technical, mining, wallet, nft, bridges, governance, marketing]
key_terms: [Biki, liquidity, Hotbit, CoinEx, trading volume, exchange listing, SigmaUSD, SigmaRSV, v2 release, oracle manipulation, front-running, whale attack, price crash, 50% drop, market sentiment, DCA strategy, volatility, SigRSV redemption, token migration, protocol upgrade]
---
# Ergo General Chat Summary — 2021-W11 (2021-03-15 to 2021-03-21)

## Key Topics Discussed

- **SigmaUSD v1 Whale Manipulation & v2 Development**: A whale exploited latency in the v1 oracle price posting schedule (hourly updates) to profit from front-running. By purchasing large amounts of SigmaUSD at favorable rates before oracle updates and then dumping as ERG price fell, the whale drained reserves. The dev team froze the oracle at a fixed price to prevent further damage. SigmaUSD v2 addresses this through faster oracle refresh rates (15-minute intervals), higher transaction fees, and a 0.5% smoothing rate cap between updates to require 2.5+ hours of holding before profitable arbitrage becomes possible.

- **Biki Exchange Listing**: After delays announced mid-week, Biki opened ERG/USDT trading on 2021-03-18 at 18:00 GMT+8. Day-one volume was reported as solid. This represents the first major exchange listing for ERG since mainnet launch.

- **Spectrum DEX (ErgoDEX) Progress**: GitHub PR #27 showed DEX specification work advancing. The extended UTXO model allows simultaneous deployment of both AMM-based liquidity pools and order book contracts on the same chain, enabling shared liquidity between different exchange types—a unique capability not available on other blockchains.

- **Ergo-Cardano Interoperability & Charles Hoskinson Signal**: Charles Hoskinson's IOHK presentation highlighted Ergo prominently, reinforcing his earlier statement that he holds only three cryptocurrencies: BTC, ADA, and ERG. Community discussions emphasized that Ergo serves as a complementary DeFi layer to Cardano rather than a competitor.

- **Storage Rent & Autolykos Mining DAG Growth**: kushti confirmed that Autolykos DAG size will increase by 5% every 3 months starting at block ~600k, meaning current GPUs (1060 3GB, RX 570) remain profitable for at least 2-3 years.

- **ErgoScript & Smart Contract Development**: Community members discussed learning ErgoScript and contributing to a Ledger hardware wallet app (C programming required). Tutorials and examples were identified as lacking in accessibility, with requests for beginner-friendly guides and forum support.

- **Proof of Work Efficiency & Energy Consumption**: Questions raised about whether PoW was outdated and whether Ergo had energy efficiency advantages over Bitcoin and Ethereum. No definitive technical response provided.

- **Oracle Pool Governance & Centralization Concerns**: Discussion of whether Oracle Pools are decentralized led to clarification that the Ergo team retains admin keys, with decentralization planned for the future. Governance forum thread established structure for future community input.

- **Exchange Liquidity & KYC Requirements**: Ongoing frustration with small exchange volumes (Hotbit, CoinEx, Gate.io, Biki, TradeOgre) and varying KYC policies. Users noted Hotbit and CoinEx allow withdrawal without KYC up to certain limits ($5000/day on Biki), while Gate.io requires KYC for withdrawals.

## Important Decisions or Announcements

- [@kushti, msg#107496, 2021-03-16]: "Please note, 'DM Check' messages leading to immediate ban!" — Administrative notice about spammy "check PM" messages in public chat.

- [@Unknown, msg#107230, 2021-03-16]: BiKi opening times confirmed: deposit already open; trading opens 2021-03-18 19:00 GMT+8; withdrawal opens 2021-03-19 16:00 GMT+8.

- [@Glasgow, msg#107361, 2021-03-16]: "Oracle testing and bank update contract testing rn. Oracle's refreshing every 15m" — SigmaUSD v2 oracle moving to 15-minute refresh intervals.

- [@cymatic, msg#107207, 2021-03-20]: "Getting close...if everything goes well with final testing then possibly Monday or Tuesday" — SigmaUSD v2 expected deployment around 2021-03-22 to 2021-03-23.

- [@Unknown, msg#107931, 2021-03-19]: "NBMiner added Ergo support for NVidia GPUs" — Mining software support expanded.

- [@Unknown, msg#107817-108819, 2021-03-19]: GitHub EIP #27 merged, showing DEX specification nearing completion with order book and AMM features combined.

## Technical Q&A Worth Preserving

- **Q** (@Gazza, msg#107030): In Yoroi, when mining to different addresses within the same wallet, does the balance aggregate like Daedalus/ADA, or must addresses be manually consolidated?
  **A** (@A, msg#107031-107034): Multiple addresses in one Yoroi wallet do aggregate. Confirmed working correctly without manual consolidation.

- **Q** (@Gazza, msg#107326): What are the differences between Ergo's Oracle Pools and Chainlink's oracle architecture?
  **A** (@cymatic, msg#107385): Linked to Robert Kornacki's comparison post on the forum showing architectural differences between Oracle Pools and Chainlink's network model.

- **Q** (@Ivan, msg#107242): How to search for ERG on TradingView?
  **A** (@wunderbaer, msg#107243-244): ERG is not yet on a TradingView-supported major exchange; alternative: use CoinMarketCap or CoinGecko.

- **Q** (@cymatic, msg#107331): What was the core problem with SigmaUSD v1?
  **A** (@cymatic, msg#107333): No protocol bugs; whale exploited 1-hour oracle latency + 2.5% fees to buy at old prices, sell at new prices, repeating until reserves drained. v2 fixes: 15-min oracle refresh + higher fees + 0.5% smoothing cap (requires 2.5+ hour hold to profit).

- **Q** (@c8, msg#107393): Can a single Oracle Pool produce multiple price pairs (e.g., both ERG-USD and ERG-EUR) instead of deploying separate pools?
  **A** (@c8, msg#107394): Creating EUR stablecoin is technically simple: deploy new oracle pool for ERG-EUR pair + redeploy AgeUSD contract with new oracle. Effectively a contract copy with different price feed.

- **Q** (@Ilya Sofronov, msg#107862-867): How long will GTX 1060 3GB remain profitable for Ergo mining given DAG growth?
  **A** (@kushti, msg#107866-869): Couple of years minimum. DAG grows 5% every 3 months starting block ~600k.

- **Q** (@Brian Kent, msg#108108): How to deploy simple ErgoScript smart contracts? Deployment process unclear.
  **A** (@cymatic, msg#108134-136): Contracts are not deployed externally; they are compiled into strings, then deployed *within* UTXO boxes in transactions. Contract script is included directly in the transaction box.

- **Q** (@Unknown, msg#107967): How did Ergo team freeze the SigmaUSD oracle pool? Who controls the Oracle Pools?
  **A** (@Unknown, msg#107970 & msg#107974): Ergo team retains admin keys. Not yet decentralized but planned for future.

- **Q** (@Unknown, msg#108215): Why is SigmaUSD trading above 1 USD if it's a stablecoin?
  **A** (@Unknown, msg#108216): Market price vs. peg; compared to EUR-USD parity example. v1 was paused; v2 should restore stability.

## Links Shared

- [https://github.com/ergoplatform/eips/pull/27]: DEX specification (EIP-0014) showing order book + AMM combined liquidity design.
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Robert Kornacki's Oracle Pools vs. Chainlink comparison.
- [https://www.ergoforum.org/t/governance-for-oracle-pools-and-the-sigmausd-bank/786]: Governance framework for Oracle Pools and SigmaUSD bank; later updates at msg#107951.
- [https://github.com/ergoplatform/ergoscript-by-example]: ErgoScript examples including Pin Lock and Single Chain Swap contracts.
- [https://github.com/ergoplatform/ergo/wiki/ErgoScript-Overview]: Short ErgoScript tutorial overview.
- [https://github.com/NebuTech/NBMiner/releases]: NBMiner GPU mining software added Ergo support for NVidia.
- [https://ergoplatform.org/en/blog/2021-03-18-ergo-art-competition-winners-announced/]: Ergo art competition winners announced mid-week.
- [https://www.ergoforum.org/t/ergo-is-listed-on-sistemkoin/250]: Community forum post on Sistemkoin listing (flagged for removal due to exchange unresponsiveness on withdrawals).
- [https://twitter.com/IOHK_Charles/status/1373313974616215557]: Charles Hoskinson highlighting Ergo in IOHK ecosystem chart.
- [https://forum.cardano.org/t/ergo-will-complement-cardano/45412]: Forum article on Ergo-Cardano complementarity (shared by @Siavash, msg#108281).
- [https://github.com/ergoplatform/eips/blob/eip14/eip-0014.md]: EIP-0014 DEX specification details.
- [https://messari.io/asset/ergo]: Messari Crypto registry for Ergo (noted as missing logo and metadata updates).

## Unresolved Questions

- **SigmaUSD v2 UI Timeline**: When will the user interface for v2 be deployed? No specific date given; team was actively testing backend but UI creator status uncertain as of week's end.

- **Ledger Hardware Wallet Support**: Interest expressed in developing Ledger app for Ergo (C programming required), but no commitment or timeline established.

- **Spectrum DEX Launch Timeline**: EIP-0014 specification advanced but no public release date announced.

- **Ergo-Cardano Smart Contract Interoperability**: Questions about whether Ergo smart contracts can interact with Cardano contracts in the same way — discussed but not fully answered.

- **Future Decentralization of Oracle Pools**: kushti confirmed plans to decentralize, but no timeline or roadmap detail provided.

- **Energy Efficiency vs. Bitcoin**: Whether Autolykos provides measurable energy improvements over Bitcoin PoW — raised but not resolved with technical comparison.

- **NFT Preview Upload Bug in Ergo Auction House**: Multiple users (msg#107998, msg#108018, msg#108034) reported uploaded NFTs missing preview images despite following UI instructions; support flagged as investigating but no root cause confirmed by week's end.

- **Transaction Confirmation Delays (2021-03-20)**: Ergo Explorer briefly lagged behind mainnet; transactions stuck at 9 confirmations. Resolved by 2021-03-20 11:02 UTC, but underlying cause not explained.

---

**Summary**: Week 11 centered on Biki exchange listing success, aggressive final testing of SigmaUSD v2 with expected deployment mid-following week, and Spectrum DEX specification maturation. Charles Hoskinson's public signal of Ergo holdings boosted community confidence in Cardano interoperability roadmap. Operational issues (Sistemkoin withdrawal freeze, NFT preview bugs, brief Explorer lag) were noted but resolved or flagged for follow-up. Community remained focused on long-term fundamentals despite price volatility and small-cap exchange liquidity constraints.