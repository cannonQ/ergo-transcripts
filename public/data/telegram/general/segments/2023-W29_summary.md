# Ergo General Chat — 2023-W29 (July 17-23, 2023)

## Key Topics Discussed

- **Storage Rent Activation (July 20, 2023)**: Storage rent went live at block height 1,051,200. Community developers competed to claim boxes with creation height 0 (affected by a Spectrum bug). Partial spending of boxes requires miners to include transactions directly in blocks bypassing mempool validation. Mining pools showed no participation in collecting storage rent despite potential additional revenue for miners.

- **Mining Pool Centralization Concerns**: 2miners controlled ~48% of network hashrate (including solo pool). Community discussed lack of pool participation in storage rent collection and concerns about centralization. Herominers was contacted about implementing storage rent distribution to miners.

- **Twitter Account Drama Resolution**: Extended discussion about the @Ergo_Platform Twitter account (formerly ETC, gifted by Charles Hoskinson). Community debated returning it to ETC, keeping it, or repurposing as "PoW Alliance" for GPU mining projects. Consensus emerged toward GPU-focused PoW alliance to support post-merge mining community.

- **Sigmanauts Treasury Funding**: Community raffle to seed Sigmanauts treasury reached funding goal of ~450 ERG. Treasury will be used for community-driven marketing and initiatives decided collectively by Sigmanauts members.

- **Rosen Bridge Development**: Rosen Bridge approaching testnet launch (late July mentioned for Dexy Gold). Light version expected in ~2 weeks. Guards selected, watchers can be run by anyone with the software. 30% of fees go to guards, remainder to watchers based on verification participation.

## Important Decisions or Announcements

- [@kushti, msg#410828, 2023-07-20]: Storage rent activation confirmed for "in few hours" at approximately 1,051,200 block height
- [@error, msg#411211, 2023-07-20]: Announced will refund all tokens claimed from Spectrum-related boxes affected by creation height 0 bug
- [@Glasgow｜WON'T DM, msg#411861, 2023-07-21]: Paideia private internal testing starts in 2 weeks, public testing in approximately 4 weeks
- [@Armeanio, msg#413294, 2023-07-23]: Proposed GPU PoW Alliance for the Twitter account to support post-merge GPU mining community

## Technical Q&A Worth Preserving

- **Q** (@Cheese): How does storage rent work for miners and pools?
  **A** (@kushti, msg#411272-411280): Partial spending requires `output.creationHeight == currentHeight` which mempool rejects. Miners must use `/mining/candidateWithTxs` endpoint to include rent collection transactions directly in blocks. Full spending (boxes under 0.14 ERG) has relaxed conditions and can go through mempool.

- **Q** (Community): Can DDoS attack like Kaspa's happen to Ergo?
  **A** (@kushti, msg#410842): Ergo has spam protection from version 4.0.44 with limits on transaction downloads per peer. Fee market handles congestion - users adjust transaction fees via slider in wallets like Nautilus. Mempools eventually flush low-fee transactions that aren't picked up.

- **Q** (@Aberg): Why can't smart contracts be interacted with directly on block explorer like Etherscan?
  **A** (@Pulsarz, msg#412100-412103): In eUTXO most code is off-chain; on-chain scripts only validate. In EVM all code is in contract with triggerable functions. ErgoTree can be decompiled but you'd still need transaction builder and off-chain logic. Some contracts like SigmaUSD could be implemented but defeats the purpose.

- **Q** (Community): How does Rosen Bridge handle security vs centralized bridges?
  **A** (@Armeanio, msg#411763-411772): Guards earn 30% fees and emission rewards. They verify watcher consensus, manage settlements, and maintain hot/cold wallets. Acting maliciously or before consensus = loss of collateral and removal from multisig. All transactions posted on-chain for auditability, providing better assumptions than exchanges.

- **Q** (@Allen): What happens when 2miners has 51% hashrate?
  **A** (@R, msg#409986): Mining pool with non-anon team won't attack rank 300 coin and ruin business with dozen other coins they mine. 51% attack from established pool is virtually impossible due to reputational and business risks.

## Links Shared

- [https://ergoraffle.com/raffle/show/1c7afc6e6c8ceea827f98d2b26fa1795c1632b58ea518948c7ba394ccb63c159]: Sigmanauts treasury funding raffle (kushti)
- [https://sigmafi.app/#/]: SigmaFi bonds platform for P2P lending
- [https://docs.ergoplatform.com/mining/rent/rent-spending/]: Technical documentation on storage rent spending mechanism
- [https://docs.google.com/spreadsheets/d/1ZVy643BcjlEOgPiPZ5pbXhQTycY2rQNVqMiSYaNOggg/edit?usp=sharing]: Spreadsheet tracking storage rent claimable boxes (qx())
- [https://github.com/pulsarz/FleetSharp]: C# port of Fleet SDK by Pulsarz for .NET development
- [https://t.me/zengate_global]: New Telegram chat for Palmyra (formerly ZenGate)
- [https://twitter.com/paideiaDAO/status/1681764356000808960]: Paideia announcement - private testing in 2 weeks, public testing in 4 weeks

## Unresolved Questions

- **Storage Rent Pool Implementation**: No mining pools have implemented storage rent collection despite potential for additional miner rewards. Community discussed need for MiningCore pull request or individual pool implementations.

- **Twitter Account Final Decision**: While PoW Alliance proposal has support, no final decision announced by Ergo Foundation on repurposing @Ergo_Platform account. Logistics and partnerships still being discussed.

- **Mempool Modification for Rent Collection**: Discussion of whether modifying mempool to accept `creationHeight == currentHeight` transactions would be beneficial, but concerns about incompatibility with non-updated nodes. Alternative of direct submission to miners via modified nodes suggested but not implemented.

- **Fee Estimation API**: Node has fee estimation API showing cost to get into next blocks, but not tested or used by applications according to kushti (msg#410376-410377). Would benefit from community testing and wallet integration.

- **Lithos Storage Rent Distribution**: Cheese noted (msg#411351) that with Lithos, storage rent becomes bonus reward for whichever miner mines the block since each miner creates blocks individually. Implications for pool vs solo mining incentives not fully explored.