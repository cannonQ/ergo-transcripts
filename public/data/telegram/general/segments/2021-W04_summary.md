# Ergo General Chat Summary — 2021-W04
**Period:** 2021-01-25 to 2021-01-31  
**Message Range:** #80059 to #82357

---

## Key Topics Discussed

- **Autolykos v2 and The Hardening Fork**: Protocol upgrade scheduled for block #417,792 (~February 1-3). Reduces GPU memory requirements from 4GB to 2GB initially. Pool resistance disabled in v2 after community feedback. SRBMiner and reference miners available for testing on testnet.

- **AgeUSD Stablecoin Protocol**: Collateralized algorithmic stablecoin using ERG reserves. Users mint stablecoins (ReserveCoins for speculators, stablecoins for USD peg). Oracle pools required for price feeds. Design emphasizes simplicity, transparency, low fees, and compatibility with Cardano via EMURGO partnership.

- **Rosen Bridge and Cross-Chain Interoperability**: Enables ERG liquidity on Ethereum, Binance Chain, Waves, Tron. Uses Chainlink oracles for proof of reserve. Also planning Ergo oracle integration for decentralized alternatives. Focused on decentralized trade financing with on-chain warehouse receipts.

- **Mining Economics Post-Fork**: Current block rewards insufficient (~$0.004/block). Miners mining for future appreciation. Dual-mining possibilities limited by memory constraints. Testnet showing ~5.8 MH/s on RX 580 (vs. 25 MH/s on ETH). Multiple pool implementations emerging (Herominers, WoolyPooly, SRBMiner).

- **ErgoMixer Privacy Tool**: Non-custodial, non-interactive mixer using Sigma protocols. Currently ~90k ERG in mixer. Users reporting stuck funds when mixing amounts don't align with ring requirements. Ring size changes and patience needed for multistep mixes.

- **Smart Contract Development & Auditing**: Formal verification possible but limited external Ethereum auditors familiar with eUTXO and ErgoTree. Internal developer audits planned. Playable simulations via Ergo Playground proposed as safety mechanism.

- **Node Operation and Synchronization**: Full node sync takes ~6 hours. Testnet available for Autolykos v2 testing. Configuration issues (keystores, memory settings) common. ErgoBootstrap and server-based deployments recommended.

---

## Important Decisions or Announcements

- [@kushti, msg#80084, 2021-01-25]: HotBit deposits and withdrawals opened.
- [@unknown, msg#80120, 2021-01-25]: PoW update set for block ~417,792 (estimated ~Feb 1).
- [@richi, msg#80302, 2021-01-25]: AgeUSD ready but not yet connected to Ergo; connection expected soon after hardfork.
- [@kushti, msg#81491, 2021-01-29]: 4.0.3 node version released later that day.
- [@filippounits, msg#80477, 2021-01-25]: Ergo node 4.0.2 released; not necessary to update but recommended for testnet.
- [@Aleksandr Sh, msg#81900, 2021-01-30]: WoolyPooly started testnet with EU/SOLO pools (erg.woolypooly.com:3100/3101).
- [@kushti, msg#82232, 2021-01-31]: The Hardening protocol upgrade estimated ~45-48 hours away (block #417,792).
- [@chrom, msg#82194, 2021-01-31]: Comprehensive feature list posted—eUTXO, Autolykos, Storage rent, Sigma protocols, NIPoPoWs, etc.

---

## Technical Q&A Worth Preserving

- **Q** (@unknown): Can one mine Ergo with a 4GB GPU?
  **A** (@S. Dbros, msg#80243): Not yet; minimum 2GB soon, eventual target 4-8GB. Requirements will grow over time.

- **Q** (@[PLANETSTAKE], msg#80201): Will new algo use only 2GB, enabling dual-mining on 8GB cards?
  **A** (@unknown, msg#80216): Possible if dual-miner developed, but memory requirements will grow over time.

- **Q** (@Gazza, msg#80701): How does ERG token have value if it's PoW and miners get all transaction fees?
  **A** (@wunderbaer, msg#80708): Same question applies to Bitcoin and Ethereum. Value comes from DeFi application usage and ERG as gas; staking isn't required for value.

- **Q** (@Gazza, msg#80705): How do ERG mining rewards compare to Cardano staking rewards?
  **A** (@Richi, msg#80711): With AgeUSD, users can stake ERGs to provide reserves and collect fees (coming soon).

- **Q** (@Antonio, msg#81127): Getting `shutdownHook2` timeout error on Ubuntu 18.04 node.
  **A** (@kushti, msg#81129): Run with `-Xmx3G` flag: `java -jar -Xmx3G ergo.jar --mainnet -c mainnet.conf`

- **Q** (@c8, msg#81294): Can a PoW chain be pool-resistant if it has smart contracts?
  **A** (@c8, msg#81294): No; smart contracts enable workarounds to pool resistance (miners can form smart contract pools).

- **Q** (@unknown, msg#81800): ErgoMixer funds stuck after import from Magnum; what to do?
  **A** (@MHS_SAM, msg#81800): Wait for 250-ERG box to withdraw to Yoroi, then remix remainder OR change ring size (10→1 in sequence, but expect high fees).

- **Q** (@Bardamug, msg#81911): Can Yoroi interact with Auction House for locked ERG?
  **A** (@V, msg#81914): Yes, Yoroi can be used for both Auction House and ErgoUtils.

- **Q** (@unknown, msg#82126): Why be a ReserveCoin provider if ERG price falls?
  **A** (@unknown, msg#82126): Risk-adjusted return positive if you believe ERG appreciates. ReserveCoin holders benefit from autocorrelation (long upside), unlike Uniswap LPs who face impermanent loss.

- **Q** (@Tim, msg#81775): Is hashrate comparable between Ethereum and Ergo mining (e.g., 100 MH/s ETH = 100 MH/s ERG)?
  **A** (not directly answered; context suggests different memory/algorithm requirements make comparison difficult).

---

## Links Shared

- [https://www.ergoforum.org/t/autolykos-v-2-details/480]: Autolykos v2 technical details and memory requirements.
- [https://ergoplatform.org/en/mining/]: Ergo mining calculator (after fork).
- [https://github.com/ergoplatform/ergo/wiki/Mining-Ergo-for-Fun-and-Profit]: Official mining guide.
- [https://adanorthpool.medium.com/ergo-nvidia-miner-on-windows-10-windows-wsl-with-stratum-pool-66374aabad34]: Windows NVIDIA miner compilation guide.
- [https://adanorthpool.medium.com/ergostratumproxy-on-windows-wsl-for-mining-ergo-cryptocyrrency-to-a-mining-pool-2b42814cc474]: Stratum proxy setup guide (updated for v2).
- [https://github.com/Emurgo/age-usd/blob/main/docs/stories.md]: AgeUSD non-technical explanation with examples (Alice & Bob).
- [https://ergoauctions.org/]: Ergo Auction House NFT marketplace.
- [https://t.me/ergo_mining]: Ergo mining community Telegram.
- [https://t.me/ergopoker]: Ergo Poker Club (Saturday tournaments).
- [https://twitter.com/ergoplatformorg/status/1354918270298677249]: CoinMarketCal poll (Ergo won vs. Ethereum, TomoChain).
- [https://ergo.herominers.com/]: Herominers Ergo pool and miner downloads.
- [https://www.thingiverse.com/thing:4743551]: Ergo logo STL file for 3D printing.
- [https://www.youtube.com/watch?v=zG-rxMCDIa0]: Full Ergo Summit 2021 video (5h 13m).

---

## Unresolved Questions

- **AgeUSD vs. Other Algorithmic Stablecoins**: What is AgeUSD's specific competitive advantage versus other algo stables on Ethereum? (@mensrea, msg#82156, @Mercury, msg#82157). Claimed advantages (simplicity, transparency, low fees, oracle pools) not definitively compared.

- **Ergo Node Sync Time Variance**: Why does testnet sync take 4+ hours while some report ~6 hours? (@S. Dbros, msg#81786). No authoritative answer provided; likely depends on disk I/O and network.

- **Checkpoint Implementation**: Should Ergo implement blockchain checkpoints to prevent costly reorgs (like ETC)? (@V, msg#81415, @c8, msg#81414). kushti not present to confirm technical feasibility.

- **CoinMarketCal Poll Legitimacy**: Is CoinMarketCal's reach (43k followers claimed) significant for adoption? (@Unknown, msg#81870, @Unknown, msg#81977). Debated as "fluff" vs. social proof; no consensus reached.

- **GPU Memory OC for Autolykos v2**: Should miners overclock GPU RAM to improve Autolykos v2 performance? (@unknown, msg#81580). Implied but not confirmed.

- **Mainnet Mining Start Date**: Exact block height and date for public mainnet mining unclear; estimated Feb 1-3 but not finalized during this week.

---

## Community Sentiment & Culture Notes

- **High engagement on technical topics**: kushti, Eysteinh, Antonio, and others actively debugging node and mining issues.
- **Generosity via tip bot**: Frequent spontaneous tips (5-20 ERG) for good explanations and effort; kushti heavily tipping helpful contributors.
- **Youth participation**: 11-year-old Kimmy holding ERG and planning to mine; kushti supportive and tipping.
- **Cardano synergy celebrated**: Multiple SPO pool operators (Eysteinh, Anton) bridging Cardano and Ergo communities without tribal conflict.
- **CoinMarketCal poll hype**: Community rallied to vote Ergo #2 (behind Ethereum, ahead of TomoChain); victory attributed partly to Cardano community support.
- **Transparency valued**: kushti and team actively answering technical questions, providing tips, and requesting full logs for debugging.