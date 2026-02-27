## Key Topics Discussed

- **EIP-37 Hard Fork Voting and Activation**: The week was dominated by discussion and voting on EIP-37, which proposes reducing difficulty adjustment epochs from 1024 blocks to 128 blocks and limiting difficulty changes to 50% per epoch. Voting started earlier than initially planned (block 844294 instead of 844800) after release of node version 4.0.103. The proposal required 232 yes votes out of the last 256 blocks (90% threshold) to activate, with checks every 128 blocks.

- **Post-Merge Difficulty Issues**: Extended discussion of the difficulty spike following the Ethereum merge, which brought massive hashrate influx to Ergo. Block times stretched to 60+ minutes in some cases, causing transaction delays and miner profitability issues. The community debated whether the old DAA discouraged or encouraged coin hopping, with consensus that it became less effective after Ergo became outsourceable.

- **Rosen Bridge Soft Launch**: Announcement that Rosen Bridge soft launch process started, initially on Ergo and Cardano mainnets using test tokens. A few watchers/guards controlled by the team initially, with plans to onboard other entities. All bridge tokens during soft launch period will be burnt before full launch.

- **Mining Pool Governance**: GetBlok.io implemented proof-of-vote system allowing individual miners to vote on EIP-37 through GBGT governance tokens, rather than pool operator deciding unilaterally. This caused some delay as they waited for miner voting window to complete before switching pool's vote to yes.

- **Node Version Updates**: Multiple node versions released during the week - 4.0.100 (activation code), 4.0.101 (auto-vote yes for pools), and 4.0.103 (immediate voting capability). Exchanges, pools, and infrastructure providers needed to upgrade to avoid being on wrong chain after fork.

- **Difficulty Adjustment Algorithm Trade-offs**: Technical discussion about security implications of faster difficulty adjustment, including potential timestamp manipulation attacks and the 50% change cap. Consensus that 128-block epochs with 2-minute target block time provide ~1 hour interval, sufficient for security while being much more responsive than previous 8-epoch average over 8192 blocks.

- **Marketing and Visibility Concerns**: Community discussion about Ergo's visibility and marketing approach, with debate about fair launch constraints versus need for exposure. Discussion of how fair launch projects lack VC marketing budgets and must rely on earned media and word-of-mouth rather than paid campaigns.

## Important Decisions or Announcements

- [@kushti, msg#328027-028, 2022-09-28]: First block voting yes for EIP-37 mined at block 844294, earlier than expected start at block 844800
- [@kushti, msg#328046, 2022-09-29]: GetBlok.io implemented proof-of-vote for EIP-37, allowing individual miners to vote via governance tokens
- [@Armeanio, msg#328573-574, 2022-09-27]: Node version 4.0.101 released with auto-vote yes capability for mining pools
- [@kushti, msg#328109, 2022-09-28]: Multiple pools (2miners, Woolypooly, Nanopool) upgraded to version 4.0.103 enabling immediate voting
- [@kushti, msg#327026, 2022-09-28]: Rosen Bridge soft launch process started on Ergo and Cardano mainnets with test tokens
- [@Armeanio, msg#327958, 2022-09-26]: EIP-37 update published on Medium explaining difficulty adjustment situation and proposed changes
- [@kushti, msg#327840, 2022-09-29]: EIP-37 voting and activation details posted to Ergo forum
- [@Armeanio, msg#329033, 2022-10-01]: Ergo Foundation allocating additional 36 ERG per block bonus to miners until EIP-37 activation to incentivize continued mining during difficult epoch
- [@Ergo_NEWS, msg#327998, 2022-09-29]: Announcement of Ergoversary (3rd anniversary) celebrations and reflection on 5811 developer commits over past year
- [@Ergo_NEWS, msg#328407, 2022-09-27]: ErgoHack V announced in partnership with Flux, Alephium, and Djed Alliance, focused on mining and minting theme with largest prize pool to date

## Technical Q&A Worth Preserving

- **Q** (@JotaJs, msg#328810): Does the vote of someone mining with Raspberry Pi have same value as someone with RTX?
  **A** (@Glasgow, msg#328811): Voting is based on percentage of blocks mined, so more hashpower = more voting weight

- **Q** (@Unknown, msg#327961): Is it possible for algorithm to track how much network hashrate is coming from single source like pool or large farm?
  **A** (@kushti, msg#327964-966): Pools self-report hashrate via APIs to sites like miningpoolstats and can report anything. No reliable decentralized way to track this as anyone can use multiple IPs/nodes

- **Q** (@Marty, msg#328102): Is node version 103 required for non-miners or can we leave on 101 to follow hard fork?
  **A** (@kushti, msg#328104): Any version >= 100 is sufficient for non-mining nodes

- **Q** (@Man, msg#328750): If HF passes, do ERG holders need to do anything except buy from CEX as always?
  **A** (implied): No action needed from holders, only infrastructure (nodes, exchanges, pools) needs to update

- **Q** (@Oleg, msg#329029): After EIP-37 enabled, does difficulty recount last 8 epochs with 128 blocks or start new 8 epochs?
  **A** (@nostalgia, msg#329048): Still 8 epoch average, but each epoch will be 128 blocks instead of 1024, making adjustment 8x faster

- **Q** (@Unknown, msg#329792): Once HF activates, will it take 128 more blocks to reset difficulty or reset immediately?
  **A** (@Unknown, msg#329795): Historical calculation done immediately upon passing using new formula to calculate new difficulty right away

- **Q** (@MrStahlfelge, msg#326886): When will node owners receive compensation?
  **A** (discussion): Controversial suggestion - node maintainers contribute significantly but currently receive no share of fees. Suggestion of 0.1-1% of tx fees, though acknowledged as unlikely to happen

- **Q** (@Unknown, msg#328289-290): Where to view current values for miner governance parameters?
  **A** (referenced): Parameters table at https://docs.ergoplatform.com/mining/governance/#parameters-table

- **Q** (@Jesper, msg#329614-615): What was reason for 50% difficulty change cap in EIP-37?
  **A** (discussion): Cap prevents extreme difficulty swings but with 128-block epochs means ~7.5 hours to catch up to hashrate surge vs 24 hours with old DAA, while also smoothing difficulty drops when hashrate leaves

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/1845]: Initial EIP-37 pull request for review
- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.100]: Node version 4.0.100 release with EIP-37 activation code
- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.101]: Node version 4.0.101 with auto-vote yes for pools
- [https://github.com/ergoplatform/ergo/pull/1847]: Auto voting PR for pools
- [https://github.com/ergoplatform/ergo/pull/1852]: Node version 4.0.103 for immediate voting
- [https://votes.sigmaspace.io/]: Real-time EIP-37 voting tracker created by community
- [https://docs.google.com/spreadsheets/d/1bsq36vUh3j_I4Uy4s1oSFMWKWxB3gW3YvcsFFFXIvM8/]: Pool support tracking for EIP-37
- [https://cds.oette.info/ergo_diff.htm]: Difficulty and block time tracking chart
- [https://www.ergoforum.org/t/eip-37-hard-fork-voting-and-activation-details/3989]: Official EIP-37 voting and activation details on forum
- [https://www.ergoforum.org/t/hard-fork-upgrades-wish-list/3888/15]: Hard fork upgrades wishlist thread
- [https://www.ergoforum.org/t/decentralized-grid-trading-on-ergo/3750/3]: Proposal for decentralized grid trading DAO
- [http://ergonodes.net/charts]: Node version distribution and network stats
- [https://www.getblok.io/how-to-connect/]: GetBlok.io connection guide for miners
- [https://www.getblok.io/2022/09/27/proof-of-vote-eip-37/]: Article explaining GetBlok's proof-of-vote implementation for EIP-37
- [https://cryptoslate.com/researchers-say-they-discovered-consensus-level-attack-on-ethereum-miners-cheating-the-system-to-earn-more/]: Article about F2Pool gaming Ethereum difficulty and timestamps
- [https://cointelegraph.com/news/45-of-eth-validators-now-complying-with-us-sanctions-labrys-ceo]: Article on Ethereum validator censorship compliance
- [https://ergoplatform.org/en/blog/Ergo-Node-v.5.0-The-Next-Evolution-of-the-Ergo-Platform]: Node 5.0 announcement with JIT costing improvements
- [https://youtu.be/PtfgEr32Nng]: Ergo Pulse episode on GuapSwap
- [https://youtu.be/wJAP5i5mllE]: Weekly update and AMA livestream
- [https://youtu.be/UIvCHM7UxmQ]: Video about EIP-37 and voting process
- [https://twitter.com/GetBlok_io/status/1575494525136826368]: GetBlok announcement of proof-of-vote implementation

## Unresolved Questions

- Whether the 50% difficulty change cap should apply equally to increases and decreases, or if asymmetric caps would be beneficial for preventing attacks while allowing faster recovery from hashrate drops

- Optimal parameters for difficulty adjustment algorithm - whether 128 blocks is the right epoch length or if different intervals would provide better security/responsiveness tradeoff

- How to incentivize running full nodes when they receive no rewards but provide essential infrastructure - suggestion of 0.1-1% of tx fees to open API nodes left unresolved

- Whether faster difficulty adjustment reduces the effectiveness against timestamp manipulation attacks, though general consensus that 128 blocks at 2-minute target (~1 hour) provides sufficient security margin

- Long-term implications of whether EIP-37 fully prevents coin hopping or just reduces its profitability - debate about whether old DAA actually discouraged hopping or just made it more profitable for large miners

- Best governance processes for future EIPs - suggestion of bounties/prizes for successful EIP proposals from community (not just foundation) to encourage broader participation in protocol improvements

- Whether Ergo should pursue wrapped token listings on other chains to increase visibility and liquidity, debated in context of fair launch philosophy vs practical needs for growth