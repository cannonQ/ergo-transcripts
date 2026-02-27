# Ergo General Chat — 2023-W40 Summary

## Key Topics Discussed

- **Twitter Account Crisis & Resolution**: The @ergo_platform Twitter account was deleted after Armeanio gained access and ran analytics showing 43-92.5k bots (80-90% of followers). Following community discussion, the account was nuked. The Sigmanauts account (@Sigmanauts) will be used as the primary Ergo community account going forward, with Ergo Foundation potentially reclaiming an official account. Discussion spanned governance, decentralization messaging, and professionalism in marketing.

- **Demurrage Terminology & Messaging**: @dayumbbbb proposed renaming "demurrage" to "opt-in demurrage" or "inactivity demurrage" for better normie adoption, emphasizing that storage rent is voluntary and users can consolidate to avoid it. Storage rent was clarified as Ergo's implementation of demurrage, recycling lost/burned coins back into the network while maintaining a fixed 97 million ERG supply.

- **GORT Token Launch & Oracle Pool v2**: First Dexy Gold oracle pool participation token reached Auction House (msg#436121). GORT tokens reached approximately 1:1 parity with ERG. Oracle Pool v2 will run Dexy Gold with GORT rewards (msg#436127). Discussion included GORT price speculation, emission contracts lasting ~90 years, and buyback mechanisms via Spectrum DEX.

- **Block Speed Improvements & Weak Blocks**: Community debate on terminology ("weak blocks" vs. "light blocks" vs. "quick blocks"). Kushti indicated R&D discussions around sub-blocks and faster confirmation protocols are underway. Flying Pig raised concerns about 40% hashrate fluctuations causing block times to vary 85-144 seconds, requesting weak blocks with incentive mechanisms to solve mining pool volatility (msg#437048-437055).

- **Ergo Raffle Progress**: Multiple updates on Ergo raffle funding via Sigmanauts community. Raffle reached 37.5% completion (msg#435694), then 50% (msg#435741). Community members offered GORT swaps and SPO single-transaction swaps via Spectrum to fund the raffle (msg#435744-435752).

- **Paper Wallet & QR-Code Onboarding UX**: Proposal for simple paper wallet experience to give away ERG, with normie-to-crypto onboarding journey. Discussion of QR code mechanics: per-wallet claiming vs. per-code claiming, integration with Vesper or other wallets, and comparison to Lightning.gifts model (msg#435682-435711).

- **Rosen Bridge & Cross-Chain Strategy**: Armeanio discussed Palmyra ecosystem and Rosen Bridge as suppliers of smart finance for all chains, not tribal exclusivity. Chainlink partnership for proof of reserve and warehouse receipts for decentralized trade financing mentioned. Plan to build out native Ergo oracles alongside Chainlink integration (msg#436208 onwards).

- **Exchange Access & Regional Liquidity Crises**: Critical regional access issues: KuCoin, Gate.io, CoinEx unavailable in SE Asia and some North American regions. Users report KYC blocks and withdrawal restrictions in Malaysia, Singapore, and other countries. Identified as a major blocker for adoption and marketing (msg#437591-437599).

- **SigmaGold / Gluon Token Naming**: Discussion of renaming SigmaGold to avoid confusion with SigmaUSD. Gluon is the Djed Alliance contribution accounting token distributed by Bruno to SigmaUSD contributors. Uncertainty about token name finalization (msg#436839-436862).

- **Demurrage ERC20 Implementation on Ethereum**: @dayumbbbb flagged emergence of ERC20 demurrage tokens on Ethereum (nolash/erc20-demurrage-token), enabling 2% per-month or 1% per-year demurrage on custom tokens. Identified as potential positive for demurrage education, potential threat if takes off on EVM chains first (msg#437430-437447).

## Important Decisions or Announcements

- [@Armeanio, msg#436383, 2023-10-05]: Deleted @ergo_platform Twitter account after analytics showed bot infestation (80-90% of 500k followers were bots). Account will undergo 30-day deactivation hold before permanent deletion.

- [@qx(), msg#437176, 2023-10-07]: Launched 3-day community vote on Sigmanauts account regarding official Ergo social media strategy. Poll options to be finalized in Twitter thread.

- [@qx(), msg#437253-437254, 2023-10-07]: Scheduled Twitter Space for Sunday 4 PM UTC to discuss account situation before vote deadline. Seeking cohost.

- [@kushti, msg#436121, 2023-10-04]: First Dexy Gold oracle pool participation token reached Auction House with all ERG from auction going into GORT/ERG LP.

- [@kushti, msg#436127, 2023-10-04]: Announced GORT call option contract (85 GORT for 5 ERG) on SigmaO allowing price speculation over 30-day period.

- [@Lee # TabbyPOS, msg#436856, 2023-10-02]: TabbyPOS offered to sponsor ErgoHack VII prizes.

- [@Unknown, msg#436234, 2023-10-05]: ErgoHack VII announced for Oct 13-15 with SigmaUSD and ERG rewards. Applications open until Oct 13.

## Technical Q&A Worth Preserving

- **Q** (@W || Mafia, msg#435693): What if 2 people scan the same QR code for the Ergo raffle?
  **A** (@qx(), msg#435703): Can structure as payment request transaction that pops up in wallet, sending 0.0001 ERGs to smart contract which returns prizes. Smart contract tracks claims. Would require Terminus dev integration for "already claimed" wallet feedback without sending actual transaction (msg#435706).

- **Q** (@CaptainTFox, msg#436199): How many coins needed to run a validator node and what is the yield?
  **A** (No direct response captured; linked to AMA)

- **Q** (@Siavash, msg#436178): Is Terminus wallet safe for iOS?
  **A** (@Glasgow, msg#436182): It's fairly popular but doesn't support Ergo.

- **Q** (@Unknown, msg#436256-436259): Does Ergo support any programming language to develop smart contracts and dApps?
  **A** (No direct response captured in chat; ErgoScript is the primary language).

- **Q** (@Unknown, msg#437258): Only if there isn't enough ERG in the same UTXO, all tokens can be claimed if there isn't?
  **A** (@Unknown, msg#437262): If there's not enough ERG to pay the fee. Best practice is to consolidate semi-frequently.

- **Q** (@Aberg, msg#436596-436600): What is the procedure for signing a transaction, and can Keystone hardware wallet be integrated?
  **A** (@Aberg, msg#436600): Keystone supports USB as well as QR codes, making GUI integration feasible. Planning to contact Keystone team.

- **Q** (@Flying Pig, msg#437034-437035): Why do block times fluctuate 85-144 seconds with hashrate swings of 40%?
  **A** (@Flying Pig, msg#437038-msg#437039): Large mining pools profit 20-30% more by mining through low-difficulty cycles, then switching to other coins. Fixing requires hardfork and miner approval, which won't pass due to pool incentives. Issue may resolve with price discovery and hashrate influx.

- **Q** (@Unknown, msg#437490): What is a UTXO?
  **A** (@Glasgow, msg#437494): Unspent Transaction Output. If you send yourself three 5 ERG transactions, you'll have 3 UTXOs with 5 ERG each.

- **Q** (@Unknown, msg#437400-437401): Is Ergo premined? "Miners are just securing network and don't know it"?
  **A** (@qx(), msg#437404): No. Premining = creation of tokens before public launch, typically for founders/ICO. Ergo has proof of no premine. Emissions contract != premining.

- **Q** (@M B, msg#437043): How can I get passive income from my Ergo?
  **A** (@Flying Pig, msg#437044): Provide liquidity on Spectrum Finance, lend on SigmaFi, lend on DuckPools, stake on ErgoPad. All carry some risk but not significant.

## Links Shared

- [https://ergoraffle.com/raffle/show/b0af5ddb58f2a7d96049d4278d53b56773624e0c46e0742972ae8ecc77af3e91]: Ergo raffle progress tracker (37.5% → 50% complete during week)

- [https://ergopaperwallet.org/]: Existing paper wallet implementation (noted as too crypto-oriented for normie onboarding)

- [https://lightning.gifts/]: Model for simple QR-based fund distribution referenced for Ergo paper wallet UX

- [https://github.com/ergoplatform/awesome-ergo/tree/master/graphics/Logo]: Ergo logo resources on GitHub

- [https://ergcube.com/]: Ergo project discovery tool mentioned in ecosystem resources

- [https://sigmaverse.io/]: Ergo ecosystem project directory

- [https://ergonaut.space/en/home]: Comprehensive Ergo information resource

- [https://github.com/nolash/erc20-demurrage-token/tree/dev-0.5.6]: ERC20 demurrage-enabled token implementation flagged as emerging on Ethereum

- [https://www.youtube.com/watch?v=J-tR7x28PZ0&t=253s]: Video on ERC20 demurrage token creators' vision for community tokens

- [https://twitter.com/chepurnoy/status/1710076766977503291]: Kushti post on Woergl demurrage experiment historical reference

- [https://ergoauctions.org/artwork/6183680b1c4caaf8ede8c60dc5128e38417bc5b656321388b22baa43a9d150c2]: Dexy Gold oracle pool participation token auction

- [https://www.sigmao.cc/option-details/53c587a7e6ef6a2b9a4fc4e5c3964c24251b9422998f0244c661a5bf3cb07c17]: GORT call option contract on SigmaO

- [https://ergoplatform.org/en/blog/2020-11-27-an-introduction-to-headless-dapps/]: Headless dApps architecture reference (msg#436945)

- [https://x.com/Sigmanauts/status/1710686785422962900]: Twitter Space vote announcement on official Ergo account strategy

- [https://x.com/sigmanauts/status/1710826725091737660]: Community Twitter Space discussion recording link

- [https://www.youtube.com/watch?v=Z-7p4_AMRvA&ab_channel=ErgoPlatform]: Ergo Weekly Developer Update (Oct 8, 2023)

- [https://docs.ergoplatform.com/fud-faq/#all-erg-was-pre-mined]: Ergo premine FAQ addressing FUD claims

- [https://anchor.fm/thesigmacast/episodes/Ergo-Community-Discussion-on-TwitterX-e2aauun]: Podcast recording of Ergo Community Twitter Space discussion

## Unresolved Questions

- **Block Speed Improvements Timeline**: kushti indicated R&D on sub-blocks and faster confirmation protocols but no concrete roadmap timeline given for implementation or testing (msg#436980).

- **Weak Blocks Incentive Mechanism**: Pulsarz noted weak blocks currently receive no emission and kusht is working on incentive structure, but details remain TBD (msg#437053-437055).

- **MEXC Exchange Listing**: Fundraising target of 50k ERG for MEXC listing fell far short at only 750 ERG collected. Status unclear (msg#437264).

- **Official Ergo Foundation Twitter Account Status**: Unclear whether EF will reclaim a separate account or consolidate under Sigmanauts. Community vote happening but outcome not finalized during this week (msg#437176).

- **Rosen Bridge Token Distribution**: @Dilema asked how Rosen tokens will be distributed but no response captured in chat. IDO status unclear (msg#437567).

- **Gluon Token Supply & Distribution**: Uncertainty whether Gluon token contract has been deployed and where/how to acquire it. Bruno mentioned manual distribution to SigmaUSD contributors but full distribution plan not detailed (msg#436839-436895).

- **Next Emission Reduction Schedule**: @kushti asked "Wen next emission reduction?" with no response; @prime mentioned "1 day left for 3 ergo cut per block" but full schedule/roadmap not discussed (msg#436955, msg#437452).

- **North American Exchange Access**: Identified as critical blocker for adoption but no solutions proposed or timeline given. CoinEx potentially returning "soon" but unconfirmed (msg#437587-437599).