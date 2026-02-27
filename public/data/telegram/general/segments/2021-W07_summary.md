# Ergo General Chat — 2021-W07 (Feb 15–21, 2021)

## Key Topics Discussed

- **BitMart Exchange Listing**: BitMart announced ERG listing for Feb 24, 2021. BitMart is registered as MSB with FinCEN, requires strict KYC, has ~$2-3B daily volume (ranked #30 by volume). Community discussion noted this is smaller than target exchanges but represents progress toward liquidity.

- **Hotbit Withdrawal Issues**: Hotbit experienced withdrawal problems throughout the week due to wallet spamming from miners depositing directly to exchange addresses. kushti worked directly with Hotbit to resolve node configuration issues, adjusted wallet settings, and recommended miners use personal wallets. Issues largely resolved by Feb 20.

- **SigmaUSD/AgeUSD Stablecoin Launch Preparation**: Testing UI deployed for SigmaUSD stablecoin (AgeUSD protocol implementation). Community clarification that AgeUSD is the protocol name, SigmaUSD is the stablecoin, SigmaRSV is the reserve coin. Launch planned for following week pending final testing and security checks.

- **Node Version Updates**: Multiple node releases during week (4.0.5, 4.0.6, 4.0.7) addressing performance optimizations, API key hash requirements, and wallet settings for exchanges. kushti working on 10x faster ErgoTree interpreter for complex scripts in 5.0 soft-fork.

- **Network Congestion and Mempool Issues**: Temporary congestion experienced, kushti proposed miners could increase TPS. Discussion of fee estimation API in nodes (not widely used by applications). Minimum fee defaults to 0.001 ERG but configurable.

- **Yoroi Wallet Integration**: Yoroi desktop extension supports ERG. Mobile support not yet available but in roadmap. Community exploring workarounds including Kiwi Browser for Android and Waves exchange as temporary mobile wallet option.

- **Marketing and Exchange Strategy**: Community discussion about timing of marketing pushes (suggested after stablecoin launch). Debate about targeting YouTubers (Coin Bureau, Ivan on Tech, BitBoy). Consensus to wait for better liquidity/exchanges before major marketing efforts.

- **Magnum Wallet Closure**: Users migrating from defunct Magnum wallet using ErgoMixer to recover funds. Some users reporting issues with mixer withdrawal process.

- **Mining Profitability and Hashrate**: Difficulty adjustments following hard fork stabilizing. Hashrate around 1TH/s. Community discussion of mining rewards and equipment requirements. Non-outsourceable puzzles backstory explained (turned off after smart contract workaround discovered).

## Important Decisions or Announcements

- [@kushti, msg#90496, 2021-02-15]: BitMart exchange listing confirmed for ERG, officially registered as MSB with FinCEN
- [@kushti, msg#90505, 2021-02-15]: Next exchange to be announced will be bigger but Chinese (end of month)
- [@kushti, msg#91239, 2021-02-17]: New ERG/USD oracle pool which will be used in stablecoin launching today
- [@kushti, msg#92090, 2021-02-19]: AgeUSD bank contract deployed to testnet, testing UI deployment, real contract deployment next week
- [@kushti, msg#92245, 2021-02-19]: Ergo Protocol Reference Client 4.0.7 released
- [@kushti, msg#91510-91511, 2021-02-18]: Ergo Protocol reference client 4.0.5 released; testing stablecoin bank contract deployed
- [@kushti, msg#92074, 2021-02-19]: Recommends downgrading to 4.0.4 from 4.0.5-6 if experiencing node problems
- [@kushti, msg#90465, 2021-02-15]: Node got fee estimation API in 4.0.3
- [@kushti, msg#93322, 2021-02-21]: Fixed HTTP to HTTPS redirect for sigmaverse.io and ergoplatform.org

## Technical Q&A Worth Preserving

- **Q** (@Joonatan): Why was non-outsourceability turned off?
  **A** (@kushti, video link): Was not foreseen that mining pools could form via smart contracts. When community figured out the loophole using Ergo's smart contract capability to work around the intent, feature was disabled. Also not attractive for small miners.

- **Q** (@cymatic): Was the smart contract loophole foreseen when non-outsourceability was first envisioned?
  **A** (@kushti): No, it wasn't foreseen. Watch video from 14:45 to understand: https://youtu.be/2sbTMrQwWOw

- **Q** (@various): What is the purpose/advantage of being PoW rather than PoS?
  **A** (@Richi, @chrom): NiPoPoWs from genesis enable true light clients. Cardano has no native light clients - must use 3rd party services lowering security. Charles discusses aggregating computation capability in PoW at https://youtu.be/Y27Q3wL_Hko?t=207

- **Q** (@Orhan): How much will tx cost when ERG is $150?
  **A** (@kushti): Tx fees not fixed by protocol, 0.001 is default node fee value. By that time hopefully TPS increased 10-100x per scalability plan. Node got fee estimation API in 4.0.3.

- **Q** (@c8): Does ergo have a minimal fee?
  **A** (@kushti, implied): Default is 0.001 ERG but miners can set their own thresholds. Mempool filters can raise minimum propagation fee rates.

- **Q** (@Lowell): What happens to spammers' transactions in mempool if not picked up?
  **A** (@kushti): Will eventually flush out. Transactions time out after couple hours if never picked up. Miners prioritize higher fees.

- **Q** (@yernar): Getting "API key hash must be set" error when running ergo.jar
  **A** (@kushti): Need to set API key hash in config. Follow wiki setup guide, use blake2b hash tool like https://toolkitbay.com/tkb/tool/BLAKE2b_256. In 4.0.8 will have default value.

- **Q** (@ponte): Node showing "synced" but on wrong height, wallet rescan stuck
  **A** (@implied): Full resync may be needed. Version 4.0.4 more stable than 4.0.5-6 for some configurations.

- **Q** (@Kyle R): Can you stake Ergo?
  **A** (@community): Ergo is PoW not PoS so no staking. However, upcoming SigmaUSD reserve coin system allows ERG holders to mint reserve coins and earn from fees and price appreciation.

- **Q** (@Kyle R): Risk of loss when transferring ERG to AgeUSD dApp?
  **A** (@Chris): Only risk is if redeeming reserve coins while ERG devalued - would get less ERG back. Similar to impermanent loss concept.

- **Q** (@Josh): How much money do ERG holders make from participating in stablecoin system?
  **A** (@Snowman Jason): Factors in ERG appreciation while deposited, available payouts from fees, and lost SigmaUSD value when ERG rises. If ERG goes up 100%, get original ERG plus additional ERG from reserve ratio gains, minus 1% fee.

- **Q** (@Fingers Crossed): Is SigmaUSD useful without DEXes where USD are used?
  **A** (@Glasgow): SigmaUSD is very useful as stablecoin that balances itself and provides stability. SigmaRSV allows rewards from liquidity providers. DEX integration separate concern.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.5]: Ergo Protocol Reference Client 4.0.5 release
- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.7]: Ergo Protocol Reference Client 4.0.7 release
- [https://explorer.ergoplatform.com/en/transactions/a0d4de6b075f124de451fe1c7244fc34d5c0c6f9142ed87b5a85612bce9806d8]: Testing stablecoin bank contract deployment
- [https://support.bmx.fund/hc/en-us/articles/1260802411229]: BitMart exchange listing announcement for ERG
- [https://hotbit.zendesk.com/hc/en-us/articles/360061348634]: Hotbit announcement regarding ERG-USDT and ERG-ETH trading pairs opening Feb 18/23
- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226]: Scalability plan for 10-100x TPS increase
- [https://www.thecryptoassociate.com/what-is-ergo/]: Comprehensive article about Ergo platform
- [https://www.altcoinbuzz.io/cryptocurrency-news/product-release/bitcoin-like-ergo-poised-to-solve-most-crucial-stablecoins-problems/]: Article on Ergo stablecoin advantages
- [https://ergo-mixr.phenotype.dev/]: Hosted version of ErgoMixer (for preview only, must install locally for security)
- [https://ergosummit.org/]: Ergo Summit recordings with technical presentations on AgeUSD
- [https://youtu.be/2sbTMrQwWOw]: Video explaining non-outsourceability decision
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Wiki guide for setting up Ergo full node
- [https://toolkitbay.com/tkb/tool/BLAKE2b_256]: Blake2b hash tool for API key generation
- [https://youtu.be/Y27Q3wL_Hko?t=207]: Charles Hoskinson discussing PoW vs PoS advantages
- [https://github.com/anon-real/sigma-usd]: SigmaUSD UI GitHub repo (for testing)
- [https://sigmaverse.io/]: Ergo dApps ecosystem portal
- [https://ergo101.org/]: Educational resource for Ergo
- [https://thecoinperspective.com/?c=ERG]: Market cap comparison tool for ERG

## Unresolved Questions

- Exact launch date for SigmaUSD mainnet (stated "next week" from Feb 18, pending final testing)
- Second major exchange announcement timing (stated "end of month" but not confirmed which exchange)
- Yoroi mobile support timeline (roadmap shows Q1 but no specific date)
- Ledger hardware wallet integration timeline (roadmap shows Q1 but developer availability unclear per @Seba Q msg#92784)
- Tax implications for US users minting/redeeming SigmaUSD and reserve coins (flagged as concern by community but no clear guidance)
- ErgoDEX timeline and integration with Cardano (mentioned Q3 for Yoroi support but full DEX launch unclear)
- Detailed reserve coin profit mechanics still causing confusion (formulas exist but community not fully understanding calculations)
- Whether Binance listing is desirable given centralization concerns (@S. Dbros msg#93101 advocating against early Binance listing)