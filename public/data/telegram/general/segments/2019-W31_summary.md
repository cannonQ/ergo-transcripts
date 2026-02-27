# Ergo General Chat — 2019-W31 Summary

## Key Topics Discussed

- **Token swap mechanics (EFYT → ERG)**: Users discussed trading EFYT on Waves platform with 1:1 conversion rate, with price flexibility for priority order filling. Manual approval required for larger Bitcoin deposits to the gateway.

- **Node setup and synchronization**: Multiple users requested guidance on wallet setup, node configuration, and blockchain synchronization. Questions about monitoring sync progress, checking balances via API, and performance optimization were raised.

- **Exchange listings**: Discussion of current trading venues (Waves platform, Tidex) and pending integrations with p2p2b. Confirmation that exchange listing plans exist but remain confidential.

- **Large token holder activity**: Community concern about a 200K ERG order on Waves, questioning whether early investors or team members had preferential access. Dmitry clarified that multiple early investors hold substantial amounts and are free to trade their tokens.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#12568, 2019-07-29]: Confirmed ERG trading pairs live on Waves platform and Tidex only at this time.

- [@Dmitry, msg#12585, 2019-07-30]: Team in contact with p2p2b exchange but no concrete launch date committed.

- [@Dmitry, msg#12626, 2019-07-31]: Clarified that large token holders are early investors with freedom to trade their positions; no unfair team advantage implied.

## Technical Q&A Worth Preserving

- **Q** (@Андрюхин, msg#12589): How do I view public/private keys after running ergo-3.0.4.jar with configuration?  
  **A** (@Dmitry V, msg#12594): Open http://localhost:9053 in your browser to access the wallet API interface.

- **Q** (@Андрюхин, msg#12600): How can I verify if my node is synchronized? Balance endpoint returns height 0.  
  **A** (implicit): Check node info endpoint and compare `headersHeight` against current network height via the Explorer. Slow initial sync is expected; restart may help.

- **Q** (@Андрюхин, msg#12639–12643): Node appears stuck at block 7095 after 2 hours; how to accelerate sync?  
  **A** (implied from context): Restart the node, confirm latest version (3.0.5), check system resources (internet bandwidth, CPU, SSD performance). No bootstrap snapshot mentioned as available.

- **Q** (@Андрюхин, msg#12664): With 100 Mbps internet, i7-4770, and NVMe SSD, why is sync slow?  
  **A** (no explicit answer provided): Issue escalated; likely network peer or node configuration issue rather than local hardware bottleneck.

- **Q** (@Unknown, msg#12610): Are there coin/hashrate calculators available?  
  **A** (no answer provided in chat).

- **Q** (@Unknown, msg#12645): Is ERG a stablecoin?  
  **A** (no answer provided in chat).

## Links Shared

- [https://ergoplatform.org/en/team/]: Team information page referenced by 𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ to provide context on development team origins (Russia-based core devs).

- [https://explorer.ergoplatform.com/en/]: Ergo Explorer referenced multiple times as the primary source for adoption metrics, transaction data, node information, and blockchain statistics.

- [https://ergoplatform.org/en/blog/2019_07_09_after_launch/]: Blog post on post-launch development referenced by 𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ to answer questions about token development trajectory.

- [https://t.me/ergoplatform/12433]: Telegram link provided for confirmation time expectations on EFYT → ERG transfers between exchanges.

- [https://twitter.com/ergoplatformorg/status/1156234837692469248]: Twitter announcement shared (content not detailed in transcript).

## Unresolved Questions

- **Bootstrap / snapshot availability**: Whether fast-sync snapshots exist to accelerate full node deployment remains unanswered; manual full sync from genesis appears to be the current path.

- **Wallet GUI availability**: Request for "easy tutorial to create a wallet" acknowledged as work-in-progress; no timeline provided.

- **Fee market / spam protection details**: No detailed discussion of fee estimation mechanisms or mempool management policies.

- **Exchange listing timeline**: p2p2b integration in progress but no target launch date; other future exchange plans remain under wraps.

---

**Summary**: Week 31 was light on technical depth, dominated by early-stage user onboarding questions, node setup friction, and clarification of token distribution fairness. No protocol changes, feature releases, or major ecosystem announcements. Community concern about large holder activity was addressed transparently.