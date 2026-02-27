# Ergo General Chat — 2023-W07 Summary

## Key Topics Discussed

- **Rosen Bridge stress testing**: Bridge underwent concurrent transaction stress tests, discovered minor bugs being fixed before public testnet launch [@HQΣr, msg#368008, 2023-02-15]

- **Minotaur Wallet 1.1.3 release**: Version includes bug fixes and BIP39 package updates requiring database deletion and wallet restoration for versions older than 1.1.1. Multisig feature available with proposed signing service for cosigning [@kushti khushi, msg#368033, 2023-02-15]

- **Yoroi wallet sunset**: Yoroi support for Ergo ending by end of February; users must migrate to Nautilus, Satergo, or other compatible wallets [@CW, msg#367989, 2023-02-15]

- **Ergo Node 5.0.7 release**: Supports additional indexes for transactions, tokens, UTXOs reducing explorer dependency; includes various infrastructure improvements [@kushti khushi, msg#368250, 2023-02-16]

- **SigmaFi launch**: New lending protocol launched a couple weeks prior to this week [@Glasgow, msg#368799, 2023-02-19]

- **ErgoHack VI progress**: Hackathon running through February 22 with Cypherpunk Finance focus; contestants building privacy-focused tools [@Ergo NEWS, msg#367716, 2023-02-13]

- **NIPoPoWs, Dexy, Sigma Rust, AppKit updates**: Weekly developer update covering core protocol improvements and tooling [@Ergo NEWS, msg#368715, 2023-02-19]

- **Mining profitability pressure**: Conflux chain gaining hashrate from profit-hopping miners, creating sell pressure on ERG [@Benny, msg#368862, 2023-02-19]

- **Minimum Attack Vector (MAV) concerns**: Community raised concerns about low MAV (~19-36 mining pools) with custodial pool dependency; non-custodial pool-of-pools had to shut down [@0077, msg#368835-368851, 2023-02-19]

- **SEC/regulatory risk assessment**: Discussion of Howey test applicability to Lithos Protocol; no direct SEC liability yet for Ergo as it's not listed on US marketplaces [@Armeanio, msg#368866-368870, 2023-02-19]

- **PoW vs PoS environmental debate**: Extended discussion on energy efficiency, mining as heating utility, and ideological frameworks for blockchain consensus choices [@Klaus, Armeanio, et al., msg#368530-368676, 2023-02-18]

- **UTXO block size analysis**: Community question on why Ergo blocks have larger transaction sizes (400 tx → 1M+) compared to Litecoin/Bitcoin ratios; unresolved [@K Chan, msg#368655, 2023-02-18]

- **Marketing concerns**: Recurring "wen marketing" theme; EF confirmed ongoing negotiations with major partners, VCs, angel investors; pitch deck sent to dozens of firms [@Glasgow, msg#368222-368224, 2023-02-16]

- **Layer 2 architecture**: Plans discussed for L2 as settlement layer with most activity happening off L1; eUTXO allows more parallelization than EVM chains but won't meet Ethereum-scale demand [@Klaus, msg#368301, 2023-02-16]

## Important Decisions or Announcements

- [@CW, msg#367989, 2023-02-15]: Yoroi support for Ergo ending by end of February 2023
- [@kushti khushi, msg#368033, 2023-02-15]: Minotaur 1.1.3 released with multisig feature; bounties available for signing service implementation
- [@kushti khushi, msg#368250, 2023-02-16]: Ergo Protocol Reference Client 5.0.7 released
- [@Glasgow, msg#368222, 2023-02-16]: EF has sent pitch decks to dozens of major investment firms and VCs; confirmed negotiations ongoing with centralized exchange, dev firm, and other partners
- [@Glasgow, msg#368223, 2023-02-16]: Deck may be refreshed and released to community later as all-in-one Ergo pitch
- [@CW, msg#368360, 2023-02-17]: Presearch staking setup initiated; account received, compiling keyword list to deploy weekend/next week; $25k total budget for clicks

## Technical Q&A Worth Preserving

- **Q** (@Bitbay, msg#368075): Can Ergo wallets be respawned using only the seed like other coins?
  **A** (@TMR.ΣRG, msg#368078): All you do is restore the wallet from seed — standard BIP39 recovery applies
  
- **Q** (@K Chan, msg#368655): Why are Ergo blocks so large (400 tx → 1M+) compared to Litecoin (100kb → 200tx) or Bitcoin (2M → 2k tx)?
  **A** (unresolved): No satisfactory explanation provided in chat
  
- **Q** (@Jack Σ, msg#368530): If Ergo had Bitcoin's hashrate, would energy use be 1/3 or 1/10 of BTC?
  **A** (@Armeanio, msg#368536-539): Not an apples-to-apples comparison; GPU vs ASIC efficiency differences make this question undefined. Different mining algorithms produce different hardware/power curves
  
- **Q** (@eπ, msg#368261): Has any transaction been censored on Ethereum? Do high fees indicate network value?
  **A** (@Glasgow, msg#368265): Tons of Ethereum transactions censored; provided MEV Watch link. (@TMR.ΣRG, msg#368262): Supply/demand dictate price; more supply and tech improvements will reduce fees
  
- **Q** (@eπ, msg#368557): Is hashrate or node count more important for PoW network security? What's a healthy ratio?
  **A** (@Armeanio, msg#368558): Both important. (@eπ, msg#368559): Follows up asking if there's a healthy range or "bigger is better"
  **A** (partially resolved): (@eπ, msg#368592): "Enough that more than that is waste of resources. Less is not secure"
  
- **Q** (@0077, msg#368835): With 183k P2PK wallets and 36 Autolykos v2 miners, does MAV of ~19 create attack vector risk?
  **A** (unresolved): Acknowledged as important but no on-chain expert provided analysis
  
- **Q** (@K Chan, msg#368692): Why is block #943634 only 37 transactions but 3115KB in size?
  **A** (unresolved): No explanation provided
  
- **Q** (@HelixEvo, msg#368794): What website details all Ergo nodes on the network?
  **A** (@Glasgow, msg#368795): http://ergonodes.net/ (note: data was stale as of 2023-02-15)

## Links Shared

- [https://bit.ly/3E3odPM]: ErgoHack VI Cypherpunk Finance overview and project list
- [https://youtu.be/TsQd9EI8sxs]: Ergo educational video (referenced as resource)
- [https://youtu.be/OAgeTE9Op2s]: Hash It Out episode on crypto regulation (SEC recent actions)
- [https://youtu.be/9vZBfvGl-ZI]: ErgoHack VI - Mobile Full Node project by Noah
- [https://youtu.be/h-nqqFd3dAs]: ErgoHack VI - UX Challenges in Web3 by Big Pampa
- [https://www.youtube.com/live/YbwppHgAlT4]: Weekly Ergo Update & AMA (Feb 16, 2023)
- [https://youtu.be/su4ycu8UkeU]: Weekly Developer Update (Feb 19, 2023)
- [https://rss.com/podcasts/erg/]: Ergo podcast feed
- [https://ergoplatform.org/en/news/Yoroi-to-End-Support-for-Ergo-Wallet/]: Yoroi sunset announcement
- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.7]: Node 5.0.7 release notes
- [https://docs.ergoplatform.com/events/ergohack/]: ErgoHack VI documentation and projects
- [https://github.com/ergoplatform/explorer-backend/issues/250]: Explorer bug report affecting Rosen Bridge
- [https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v1.1.3]: Minotaur 1.1.3 release
- [https://ergoraffle.com/raffle/show/b312c002a0b1671a0089fabc2d1a028e5938d46b1b2180d7e480e760526408ce]: ErgoHack community vote fund donation page
- [https://sigmafi.app]: SigmaFi lending protocol
- [https://miningpoolstats.stream/ergo]: Ergo mining pool statistics
- [http://ergonodes.net/]: Ergo node network monitor
- [https://www.mevwatch.info/]: Ethereum MEV/censorship statistics
- [https://www.coindesk.com/tech/2022/10/14/censored-ethereum-blocks-hit-the-51-threshold-over-the-past-24-hours/]: Ethereum censorship reporting
- [https://ergoplatform.org/en/ecosystem/]: Ergo ecosystem roadmap (updated during this week)
- [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4282385]: SSRN paper on SEC legal cases (Ripple, LBRY analysis)
- [https://ergoplatform.org/en/blog/Ledger-Launches-Ergo-Support-in-Developer-Mode/]: Ledger hardware wallet Ergo support announcement
- [https://satergo.com/]: Satergo wallet with node functionality
- [https://twitter.com/jespow/status/1627415364111040513]: Jesse Powell analysis on regulatory challenges (referenced by Benny)
- [https://twitter.com/youIyouADA/status/1627443169163120640]: Howey test discussion thread

## Unresolved Questions

- **Block size efficiency**: Why Ergo transaction blocks are proportionally larger than Bitcoin/Litecoin equivalents — no technical explanation provided
- **MAV security threshold**: Whether 36 mining pools supporting 183k wallets represents inadequate decentralization; community concerns raised but no expert assessment offered [@0077, msg#368835-368871]
- **Ledger full support**: Status and timeline for production-grade Ledger support (only developer mode currently available) [@ApophisRO, msg#368408-368440]
- **Binance listing prospects**: Community speculation ongoing but no confirmed timeline or status from EF
- **Layer 2 specification**: Technical design details for Ergo L2 still being drafted; multiple approaches being discussed (microblocks vs sidechains vs other) [@kushti in earlier context from AMA]
- **Howey test compliance**: Exact legal framework for Lithos Protocol to avoid security classification under US law; referenced but not finalized [@0077, msg#368858-368864]
- **Non-custodial pool-of-pools revival**: What happened to the shutdown pool-of-pools and whether it will be revived [@0077, msg#368851]