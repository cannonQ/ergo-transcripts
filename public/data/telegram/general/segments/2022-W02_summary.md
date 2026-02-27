# Ergo General Chat — 2022-W02 Summary

## Key Topics Discussed

- **KuCoin withdrawal outages**: Multiple users experienced delayed or failed ERG withdrawals starting 2022-01-10. Issues traced to KuCoin node maintenance and mempool problems. kushti confirmed resolution by 2022-01-11 and worked with KuCoin to reissue failed transactions.

- **EIP-0027 soft fork proposal (emission reduction)**: Core proposal to adjust ERG emission schedule to extend mining rewards beyond 2024. Miners vote via pool alignment; voting begins ~46 days after announcement. Community divided on long-term security vs. short-term mining profitability trade-offs.

- **Storage rent mechanics**: 0.14 ERG charged per simple UTXO every ~4 years; cost scales with data/asset count (0.14 per ~100 bytes). Wallets should implement consolidation to avoid fragmentation penalties. Miners can vote to adjust rent per-byte rate (0 to 2x current).

- **Transaction fee model**: Fees determined by byte size, not gas computation like Ethereum. EUTxO model enables known costs pre-execution; high network load doesn't cause unpredictable fee spikes. Miners sort by fee/byte and consider transaction families (chained TXs use average fee).

- **Ergo Mixer vs. Tornado Cash**: ErgoMixer based on solid DDH cryptography in groups; Tornado uses exotic zk-SNARK implementations with historical bugs (e.g., Zcash emission vulnerability). ErgoMixer supports any native Ergo token post-wrapping; Tornado limited to ETH.

- **Privacy DeFi use cases**: Discussion of dark liquidity pools, encrypted NFT metadata, bridge-integrated mixers, and P2P fiat onramps. kushti queried community on priority privacy features for DeFi.

- **Ledger hardware wallet integration**: Tesseract team fixed critical bug after ~2 months stalled development. No ETA announced, but progress described as "looking good" by 2022-01-14.

- **Rosetta API development**: Developer began implementing Coinbase Rosetta API. Required for tier-1 CEX listing; legal opinion on non-profit structure and US compliance also in progress.

- **Solana and cross-chain bridges**: Solana bridge in testing; BSC and ETH bridges expected "a couple of weeks" after Solana launch. USDT planned first SOL bridge asset.

- **anetaBTC and Cardano integration**: 1000 cNETA airdropped to Cardano stakers via DripDropz. Price collapsed from 1 ADA to ~0.065 ADA post-airdrop; governance + profit-sharing token for wrapped BTC protocol on Ergo.

- **Messari tokenomics data**: Ergo's tokenomics on Messari listed as outdated (still showing premine EFYT data). Application submitted ~1 month prior for correction.

- **Sigma Valley auction house**: Land NFT auctions ongoing; community considering using $COMET as in-game currency; users flagged 18/500 plots auctioned over 3+ days as scarcity mechanism.

- **ErgoLearn (DeCo) funding raffle**: Community funding campaign achieved 45+ backers; kushti committed to donate EF winnings back to program.

- **Yoroi wallet issues**: Desktop Nightly version had sync/UI blocking bugs with large pending transactions (e.g., 3000 output NETA airdrop TX). Mobile (Android/iOS) wallets recommended as alternatives. dApp connector permission update required for newer versions.

- **Hardware requirements for full nodes**: Raspberry Pi full nodes already runnable; tutorials needed. Video guide posted by Glasgow.

## Important Decisions or Announcements

- [@Armeanio, msg#245191, 2022-01-10]: EIP-0027 motivation is storage rent economy modeling 4+ years forward; miners and traders have conflicting incentives; discussion should focus on long-term viability over short-term noise.

- [@kushti, msg#245540, 2022-01-11]: Mempool issues fully resolved; KuCoin pushing to reissue stuck transactions.

- [@Glasgow, msg#245865, 2022-01-12]: Dev update published; weekly cadence confirmed.

- [@MrStahlfelge, msg#246256, 2022-01-14]: EF wallet is now full-time role (merged with personal development).

- [@kushti, msg#246615-246618, 2022-01-15]: Transaction priority uses fee/byte sorting + transaction family averaging (chained TX consideration).

- [@Armeanio, msg#246014, 2022-01-12]: Published "EIP-0027: kushti's Feedback" article clarifying proposal intent.

- [@Kevin, msg#246046, 2022-01-13]: Kairon Labs gate.io listing underway; ErgoDex yield incentives, SigmaUSD-USDT pairing, Tessaract mixer bug fixed, privacy hackathon active.

- [@Glasgow, msg#247002, 2022-01-16]: Projects can submit PRs to Sigmaverse for listing updates.

## Technical Q&A Worth Preserving

- **Q** (@T F, msg#245275): Does joining a single decentralized mining pool like GetBlok increase network decentralization?
  **A** (@ArØhβΣ, msg#245287-302): Yes, smaller pools reduce 51% attack risk. GetBlok committed to split if >40% hashrate. Infrastructure maintenance by unrelated entities critical for true decentralization. Multi-pool setup necessary for complete security.

- **Q** (@Hamilton Filho, msg#246005): Is there a limit to eUTXO consolidation?
  **A** (@glasgowm, msg#246007): Limit exists on NR of assets and consolidation size, but both can be adjusted. See docs.ergoplatform.org/dev/protocol/eutxo/ for details.

- **Q** (@Stasis, msg#246181): How to avoid storage rent for multi-year HODLers?
  **A** (@CW, msg#245961 & @MrStahlfelge, msg#245964): Send all ERG to new address in same wallet via intra-wallet transfer once every 4 years. Don't need new address—same address generates new box per block. Wallets will automate this.

- **Q** (@David Tortosa, msg#246966-967): Can "send all" function target same wallet address?
  **A** (@glasgowm, msg#246979): Generate new address within same wallet, then send.

- **Q** (@Ian Lee, msg#246510): Does ERG use FIFO transaction priority or fee-based like Ethereum?
  **A** (@kushti, msg#246615-618): Fee/byte sorting + transaction family consideration (chained TXs use average fee/byte). Not pure FIFO.

- **Q** (@Joseph, msg#246678-699): Current Ergo TPS and oracle pool status?
  **A** (@TMR.ΣRG, msg#246681-682): Two pools live; more can be created. SigmaUSD uses ERG pool. Ergo v2 upgrade pending (needs data-inputs in June per Waves Enterprise partnership).

- **Q** (@Mini cow, msg#246753-755): Is 100-block confirmation for CEX→wallet normal?
  **A** (@TMR.ΣRG, msg#246754): Yes, exchanges use long confirmation times. Wallet-to-wallet typically 5 min.

- **Q** (@kushti, msg#246253): Why are KuCoin deposit addresses spammed with NFTs?
  **A** (@Unknown, msg#246261 & @glasgowm, msg#246255): Accidental user transfers to wrong address; KuCoin will auto-burn them.

- **Q** (@Nik 🐈‍⬛, msg#246367-390): Difference between ErgoMixer and Tornado Cash?
  **A** (@glasgowm, msg#246380 & @kushti, msg#246455): Tornado only ETH, complex zk-SNARKs with past bugs. ErgoMixer trustless, simple cryptography (DDH), supports all native Ergo tokens (including wrapped assets).

## Links Shared

- [https://curiaregiscrypto.medium.com/eip-0027-soft-fork-proposal-187db1163caa]: EIP-0027 soft fork proposal explainer by Armeanio
- [https://curiaregiscrypto.medium.com/the-value-of-storage-rent-mining-on-ergo-b9e22d788d2]: Storage rent economics and mining impact
- [https://curiaregiscrypto.medium.com/eip-0027-kushtis-feedback-2313492787a5]: kushti's technical feedback on EIP-0027
- [https://www.figma.com/file/pd92vgB3xNFThaacIKodYs/Guide-ID]: Ergo branding guide (design assets)
- [https://sigmaverse.io/]: Ecosystem dApp directory (updated with categories 2022-01-12)
- [https://ergoplatform.org/en/exchanges/]: Official exchange listing page
- [https://ergonaut.space/en/Guides/yield]: Yield farming opportunities guide (impermanent loss warnings)
- [https://ergo.watch/emission]: Emission curve tracker
- [https://ergoauctions.org/]: Sigma Valley auction house (NFT land plots)
- [https://sigmavalley.org/]: Sigma Valley project portal
- [https://ergopad.io]: ErgoPad launchpad platform
- [https://www.reddit.com/r/ergonauts/wiki/index]: Ergo subreddit wiki comparison resources
- [https://beincrypto.com/learn/ergo-crypto/]: BeInCrypto Ergo explainer
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto (economic freedom thesis)
- [https://docs.ergoplatform.org/dev/protocol/scaling/]: Protocol scaling documentation
- [https://explorer.ergoplatform.com/en/oracle-pools-list]: Live oracle pool tracker
- [https://linktr.ee/ergoplatform]: Master link tree (all official Ergo resources)
- [https://dripdropz.io/explore-projects/ErgoPool]: DripDropz airdrop platform (ErgoPool token)
- [https://github.com/ross-weir/rosetta-ergo]: Rosetta API implementation (Coinbase integration)
- [https://ccvault.io/]: CCVault browser wallet (Cardano, potential Ergo support)
- [https://ergotokens.org/]: Token explorer for Ergo assets
- [https://youtu.be/bpak6PabFhM]: Ergo AMA video (2022-01-14)
- [https://www.youtube.com/watch?v=yDqhlgz0244]: Raspberry Pi full node tutorial

## Unresolved Questions

- **EIP-0027 voting outcome**: Will miners achieve 90% consensus for soft fork? Competing short-term profit vs. long-term security incentives. Vote spans 46 days starting ~2022-01-17; result determines emission schedule.

- **Price support and market recovery catalyst**: Multiple participants flagged price decline below $4 without clear catalyst. Unconfirmed expectations: tier-1 CEX listings (Coinbase post-Rosetta), functional bridges (SOL live, ETH/BSC pending), and ecosystem maturation (dApp launches).

- **Ledger integration timeline**: No specific ETA; critical bug fixed but integration pending. Described as "looking good" but hardware wallet support remains blocklist item for enterprise/institutional users.

- **Storage rent 4-year window rationale**: Question raised whether 4-year period is too short for long-term HODLers (5+ years). Miners can adjust; no public discussion of alternative windows.

- **Messari data correction timeline**: Application submitted ~1 month prior (2022-01-14 timestamp); no follow-up on when outdated tokenomics will update.

- **Oracles v2 upgrade**: Dependent on Cardano data-inputs (June 2022). Partnership with Waves Enterprise confirmed but no release date or feature scope defined.

- **Sigma Valley Comet integration**: Community interest in using $COMET as in-game currency; no official team commitment. Only 18/500 plots auctioned; speculation on future auction pricing/mechanics.

- **Yoroi sync stability**: Desktop Nightly fixes applied but large transaction handling regression not fully resolved by week end. Alternative mobile wallets working; unclear if core issue persists.