# Ergo General Chat — 2021-W15 Summary
## Period: 2021-04-12 to 2021-04-18

---

## Key Topics Discussed

- **SigmaUSD v2 "Bearwhale" situation**: A large holder took a short position in SigmaUSD by minting ~900k SigUSD at an average of $2.58 ERG, attempting to manipulate price downward. Community tracked whale's movements and discussed strategies. By week's end whale was down 57,221 ERG with ERG price pushing past $3.80, putting short position at risk. Reserve ratio remained below 400% preventing SigRSV redemptions during most of the week.

- **Yoroi dApp Connector beta release**: Emurgo released test builds of Yoroi Nightly and dApp Connector for Chrome/Firefox, implementing EIP-12 standard. This enables MetaMask-like functionality for Ergo dApps. Community widely shared and celebrated this development as major step for ecosystem accessibility.

- **Major media coverage**: Ergo featured in Cointelegraph article "Life Beyond Ethereum: What Layer One Blockchains Are Bringing to DeFi" alongside BSC and Cardano. Article highlighted eUTXO model, NiPoPoWs, storage rent, and potential Cardano partnership. Chinese AMA with Jinse Finance reached ~80,000 attendees.

- **Exchange listing challenges**: Hotbit had ERG withdrawal issues throughout the week due to "miner dust" problems and node maintenance. kushti pushed for resolution. Community discussed preference for organic growth over expensive Binance listing fees and potential manipulation risks.

- **Ergo-Cardano relationship clarifications**: Extended discussions about how AgeUSD protocol will work on Cardano (separate reserve with ADA collateral), oracle pool integration, potential ErgoDex Plutus port via Catalyst Fund5 proposal, and shared liquidity pools. Community debated whether Cardano adoption of Ergo innovations would create demand for ERG.

- **Mining optimization discussions**: Community shared settings for various GPU models, discussed profitability calculations, and pool options. ERGO moved into top 5 on WhatToMine. Discussions about single GPU viability (1070 yields ~4-5 ERG/week at 55-58 MH/s, 80W).

- **Roadmap and development updates**: Blog post on multi-stage contracts published. kushti mentioned upcoming sidechain research paper (May). Discussions about speed improvements including sub-blocks, microblocks, and potential optimizations. Developer call scheduled for Wednesday on Discord with DEX roadmap updates expected.

---

## Important Decisions or Announcements

- [@kushti, msg#118266, 2021-04-15]: Announced plans to collect donations for exchange listings and other development, to be posted on forums after bearwhale situation resolves
- [@kushti, msg#117336, 2021-04-13]: Confirmed pushing Hotbit to reopen ERG withdrawals, noting no technical problems exist
- [@kushti, msg#119009-119010, 2021-04-16]: Confirmed old Hotbit withdrawal transactions remain locked but new ones should work
- [@Glasgow, msg#118321, 2021-04-15]: Comprehensive promotional message created summarizing Ergo value props, comparing to LINK market cap (107x-168x potential), linking resources
- [@Armeanio, msg#119597-119598, 2021-04-17]: Stated main goal is "Smart Contracts for the People. Low cost, simple and secure DeFi. Real decentralized p2p finance."
- [@Dmitry_Usov, msg#117841-117842, 2021-04-14]: Emurgo's Cardano Connector (MetaMask-like) also submitted to Catalyst Fund5, community encouraged to support

---

## Technical Q&A Worth Preserving

- **Q** (@LBZ_TRADING, msg#119517): What is Ergo used for, except to test projects for ADA?
  **A** (@Gazza, msg#119703): DEX with blockchain interoperability is the holy grail - the stablecoin is needed for the DEX, Cardano isn't necessary for Ergo's success. It's not what Cardano can do for us, it's what we can do for Cardano.

- **Q** (@Olli_Tiainen, msg#119709): Could the DEX work without an Ergo stablecoin? Could it work without a Cardano stablecoin?
  **A** (@Gazza, msg#119713): If cross-chain swaps work, could use other stablecoins like USDT or DAI, but SigmaUSD fixes issues with these. We don't need to think about this scenario since the stablecoin is released and working.

- **Q** (@Klaus, msg#119711): How will AgeUSD protocol work with ADA regarding staking?
  **A** (@Gazza, msg#119716): Reserve holders would have to gain more than 5.5% guaranteed staking returns, and large reserves come with staking power and potential security risks.

- **Q** (@Joey_Z, msg#118091): Can anyone give quick synopsis on the "whale" situation?
  **A** (@Glasgow, msg#118066-118067): He's minting lots of SigmaUSD and dumping/hacking/DOSing/etc. So he's shorting and manipulating. Has 500 ERG in reserve, down 100k ERG in v2.

- **Q** (@WhiskyWizzy, msg#119057): Can I call ERGO a better "chainlink" on the Cardano platform?
  **A** (@Unknown, msg#119062): Yes and yes.

- **Q** (multiple users): How does SigmaRSV work regarding rewards?
  **A** (@Dan, msg#118292-118295): Rewards appear as ERG. When you withdraw, you get the added ERG. The SigRSV to ERG ratio changes over time. Example: if you minted at 1 ERG = 800 SigRSV, and it's now 1 ERG = 750 SigRSV, you get more ERG back when redeeming.

- **Q** (@WhiskyWizzy, msg#119528): Mining with single GPU GTX 1070 seems not worth it - estimated 3.5 ERG a week.
  **A** (@ponte, msg#119536): I mine with single 1070, get 4-5 ERG per week at 55-58 MH/s, consuming less than 80W. Helps secure network I believe in, pays for electricity.

- **Q** (@claeys, msg#119662): How does ERG oracles and Chainlink compare to API3?
  **A**: No direct answer provided in this segment.

- **Q** (multiple users): Why isn't SigmaUSD being minted?
  **A** (@Liago, msg#118273): Battle with whale ongoing. See @SigmaUSD channel for details.

---

## Links Shared

- [https://twitter.com/BiKiEnglish/status/1381808331677786112]: BiKi exchange announcement about ERG
- [https://cointelegraph.com/news/life-beyond-ethereum-what-layer-one-blockchains-are-bringing-to-defi]: Major Cointelegraph article featuring Ergo alongside BSC and Cardano
- [https://www.reddit.com/r/ergonauts/comments/mpz1rh/jinse_finance_ama_responses/]: Jinse Finance AMA responses with kushti (reached ~80k attendees)
- [https://cardano.ideascale.com/a/dtd/ErgoDex-Plutus-Port/352410-48088]: Catalyst Fund5 proposal for ErgoDex Plutus port (repeatedly shared for voting)
- [https://www.ergoforum.org/t/test-release-of-dapp-connector/988]: Yoroi dApp Connector test release announcement
- [https://ergoplatform.org/en/blog/2021-04-16-multi-stage-contracts/]: Blog post on multi-stage contracts
- [https://www.reddit.com/r/ergonauts/comments/mrm0g1/bearwhale_update_150420/]: Bearwhale update tracking short position
- [https://www.reddit.com/r/ergonauts/comments/msmzy0/bearwhale_update_170420/]: Follow-up bearwhale update
- [https://thecryptodrip.com/ergo-deep-dive/]: Mr. Goose's comprehensive Ergo deep dive article
- [https://twitter.com/the_hoskinsons/status/1383202063002243072]: Twitter poll for Simpsons character featuring kushti (community pushed to vote)
- [https://ergonaut.space/en/Cardano]: Ergo-Cardano relationship documentation
- [https://veriumfellow.medium.com/what-will-ergo-bring-to-cardano-2f7ae911a9bd]: Article on Ergo-Cardano synergies
- [https://ergoplatform.org/en/blog/2020_04_24_atomic_swaps/]: Atomic swaps technical documentation
- [https://thecoinperspective.com/?c=ERG]: Market cap comparison tool
- [https://curiaregiscrypto.medium.com/ergo-nomic-oracle-feeds-87776414491a]: Nomic Oracle Feeds explanation
- [https://finbold.com/the-firm-behind-cardano-launches-dapp-connector-to-incentivize-defi-developers/]: News coverage of dApp connector
- [https://finance.yahoo.com/news/cardano-sees-first-ever-stablecoin-200000851.html]: Yahoo Finance article on AgeUSD being first stablecoin on Cardano (mentions Ergo)

---

## Unresolved Questions

- Exact timeline for ErgoDex full release remains unclear - sometimes described as "imminent," other times "next year." Community awaits specific roadmap promised by kushti.
- Ledger hardware wallet support timeline confirmed as "3 months away" but no specific date given.
- Mobile Yoroi wallet for ERG - working on "mobile bindings," Emurgo may be funding, but no release date provided.
- Exact implementation details of AgeUSD on Cardano remain unknown - will have separate reserve with ADA, but specifics about oracle integration and cross-chain functionality pending.
- Whether new exchange listings are imminent - discussions under NDA, kushti mentioned preparing for exchange listing donations/fundraising but timing unclear.
- Transactions per second capacity for DEX - @claeys asked but got incomplete answer about sidechains potentially enabling "very very high" throughput.
- Storage rent mechanism details and long-term sustainability model not fully explained in discussions.
- Specific timeline for sidechain research publication mentioned for "May" but no precise date.

---

**Week Highlights**: Major media exposure via Cointelegraph, Yoroi dApp connector release, large Chinese AMA, successful community mobilization against SigmaUSD bearwhale, and growing debate about Ergo's unique value proposition relative to Cardano partnership. Price moved from ~$2.80 to ~$3.80 despite broader crypto market volatility.