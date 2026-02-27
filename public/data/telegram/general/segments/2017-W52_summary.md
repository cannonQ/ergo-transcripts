# Ergo General Chat — Week 2017-W52 Summary

## Key Topics Discussed

- **EFYT Token Economics and Swap Mechanism**: Early discussion about the conversion rate from EFYT (Ergo First Year Token) to the mainnet ERG token. The 1:1 exchange was initially proposed but community concern about dilution (10x supply difference) led to reconsideration of alternatives like 1:1.x swaps or dual-chain models (MoneyChain/DataChain).

- **Testnet Status and Node Setup**: Community members reported difficulty running testnet nodes, with configuration issues around network binding, port forwarding, and peer discovery. Version 0.1.4 was announced as pending release after New Year holidays.

- **Ergo vs. Waves Relationship**: Clarification that Ergo and Waves are complementary rather than competitive projects. Both teams share history from NXT era; Waves provides the DEX for EFYT trading while Ergo develops its own mainchain. Waves features highlighted: 100 tps, built-in DEX, Sigma protocol collaboration.

- **Light Node Mining and Mobile Access**: Core value proposition emphasized — enabling full nodes and mining on mobile devices through light node architecture, reducing hardware barriers to decentralization.

- **Blockchain-as-Database and Storage Rent**: Users asked about "data storage" capabilities; clarified that Ergo's focus is on light nodes accessing relevant blockchain subsets (via Aspen protocol) rather than general-purpose storage like Storj.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#922, 2017-12-27]: Version 0.1.4 of testnet to be released this week (after holidays).

- [@Terri, msg#924, 2017-12-27]: Funding model: developer fee integrated into mining rather than ICO.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#956, 2017-12-28]: 1:1 EFYT-to-ERG swap not set in stone; considering alternatives including 1:1.x swap or MoneyChain/DataChain dual-emission model to reward early adopters fairly.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1089, 2017-12-30]: Core development team expanded to 7 members; team update announcement coming after holidays.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1035, 2017-12-30]: Mainnet launch timeline to be clearer by end of January 2018; depends on node stability.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖚𝖙կշօ, msg#1239, 2017-12-31]: EFYT-to-ERG swap will occur after MainNet is ready; clearer picture expected by end of Q1 2018.

## Technical Q&A Worth Preserving

- **Q** (@PHBA | VietStaking Validator, msg#1009): Running testnet node with 0 peers — what's wrong?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1012-1017): Check Docker IP configuration and public IP accessibility. Try accessing `http://<yourPublicIP>:9051/swagger`. Note: testnet nodes may have been shut down for holidays; explorer also down.

- **Q** (@PHBA | VietStaking Validator, msg#1179): What's the difference between `scorex-bindAddress` and `network-bindAddress` in config?
  **A** (@hawky, msg#1187-1188): REST API uses one for endpoint calls; network one handles blockchain sync protocol. Network binding is more critical for syncing.

- **Q** (@PHBA | VietStaking Validator, msg#1191-1193): Should I set network.bindAddress to public IP, and do I need port forwarding?
  **A** (@hawky, msg#1192-1195): Yes, and yes — implement port forwarding from `<public IP>:9001` to `<private IP>:9001`.

- **Q** (@Unknown, msg#1222): Do I need to own WAVES to pay exchange fees on WavesDEX?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1223): Yes, 0.003 WAVES required per buy/sell order.

- **Q** (@creeea, msg#1163): What makes Ergo unique?
  **A** (@PHBA | VietStaking Validator, msg#1164): Ability to run full light nodes on mobile devices.

- **Q** (@PHBA | VietStaking Validator, msg#1227): Why create Ergo separately from Cardano rather than incorporate into it?
  **A** (@𝖒𝖊𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#1228): Ergo founded in Scala/Scorex; having independent vision and focused team ensures better execution toward a specific goal.

## Links Shared

- [https://github.com/ergoplatform/ergo/commits/master]: Active Ergo development repository (demonstrates development velocity).

- [https://www.ergoplatform.org/qa_2017_06_09.html]: Q&A session 2 with discussion of MoneyChain/DataChain model.

- [https://youtu.be/PHY7JnLrK5o]: Video explaining Aspen protocol and light node data access model.

- [https://github.com/ergoplatform/ergo/wiki/How-to-install-Ergo-node-on-Windows]: Testnet node installation guide.

- [https://github.com/ergoplatform/ergo/wiki/Node-Configuration-File]: Node configuration reference.

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT token info and issuing wallet tracker on Waves blockchain.

- [https://beta.wavesplatform.com/]: Waves Beta DEX UI.

- [https://research.kudelskisecurity.com/2017/10/10/audit-report-of-the-waves-platform/]: Kudelski Security audit report for Waves (passed with flying colors).

- [https://twitter.com/ergoplatformorg/status/947539608325312514]: Ergo Twitter announcement (shared for retweet).

- [https://github.com/ScorexFoundation/Scorex/commits/master]: Scorex foundation repository (active development).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/commits/master]: SigmaState interpreter repository.

## Unresolved Questions

- **Swap Rate Finalization** (msg#956, #970): The exact conversion mechanism (1:1, 1:1.x, MoneyChain/DataChain, or snapshot-based) remains undecided. Community suggested using ATH-based multiplier or average of pre-spike and final ATH, but no decision confirmed.

- **Airdrop Possibility** (msg#1106, #1110, #1112): Whether additional airdrops to EFYT holders will occur, and if so, when and to which token holders, left as "option under consideration."

- **Mainnet Launch Date** (msg#1033, #1239): Hard date impossible to pin down; debugging speed unpredictable. Best estimate: clearer picture by end of Q1 2018.

- **Full Supply Distribution** (msg#1103): How exactly the remaining ~99.5 million ERG (of 100 million total) will enter circulation through mining — timing and emission schedule not detailed.

- **Future ICO Plans** (msg#1117, #1119): Team exploring alternatives to traditional ICO for coin propagation but no concrete mechanism announced.