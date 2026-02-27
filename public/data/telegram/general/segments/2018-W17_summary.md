## Key Topics Discussed

- **EFYT Token Swap Mechanics**: Discussion of the planned swap from EFYT (pre-mainnet) to Ergo mainnet tokens. The swap is non-automatic and requires manual action during an announced window; early indicators suggest a 1:2 split (1 EFYT → 1 Data + 1 Money token).

- **Ergo as Bitcoin Replacement**: High-level positioning of Ergo as a Bitcoin improvement with focus on difficulty redesign, fee mechanics, simplicity (hash functions and Sigma protocols only), bounded script verification time, light full nodes with full-node security guarantees, and soft-forkability.

- **Mining Emission & Team Allocation**: Clarification that the 10% team allocation from mining rewards runs for the entire mining period (not time-limited like Zcash), with rewards decreasing over time. Total first-year supply: 19,710,000 ERG; total supply: ~97.7M ERG.

- **Light Nodes & Mobile Mining**: Discussion of feasibility of mobile mining. Consensus that "light nodes" are about efficient blockchain access via alternative methods rather than competitive mobile PoW mining, given hardware limitations.

- **Early Investor Distribution & Transparency Concerns**: Questions raised about large early EFYT holdings (100K+) transferred directly from team wallet, with concerns about potential price manipulation by early recipients engaging in active trading.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2748, 2018-04-24]: Confirmed swap ratio of 1 EFYT = 1 Data token + 1 Money token (described as "the plan thus far").

- [@Unknown, msg#2764, 2018-04-28]: Team allocation of 10% mining rewards spans entire mining period with decreasing rewards over time (contrasts with ZCash's 2-year allocation).

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#2820, 2018-04-29]: Clarified that 19M first-year supply target is measured as "1 year after MainNet is launched."

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#2756): "I'm having trouble understanding what ergo is. Could someone help me? In laymen terms preferably"
  **A** (@Unknown, msg#2757 summarized): Ergo is presented as "Better ethereum"—a coin built for simplicity, easy upgradeability, safe smart contracts via checks and balances, and potential for phone mining. Directed to whitepaper and YouTube resources.

- **Q** (@Unknown, msg#2759): "So you will get 10% from each block for the whole mining time (8 years)? Or you will get it in 2 years like ZCash?"
  **A** (@Unknown, msg#2764): Team gets 10% throughout entire mining period; rewards decrease over time (not fixed 2-year window).

- **Q** (@Unknown, msg#2767): How do "light nodes" relate to mobile mining feasibility?
  **A** (@Unknown, msg#2767): Light nodes are about efficient blockchain access via novel methods rather than competitive mobile PoW. Mobile mining is theoretically possible but practically difficult due to hardware competition against more powerful devices.

- **Q** (@Unknown, msg#2771–2808): Why do top-tier wallets hold 100K+ EFYT if max trading volume was 60K? Are these whales engaging in price manipulation?
  **A** (@Terri, msg#2783, #2795, #2809): Early investors and angel backers received direct allocations (not accumulated via trading). Large holders trading is "simple trading"/normal market behavior, comparable to ICO allocations. If concern is about manipulation, waiting for PoW mining launch should stabilize markets.

- **Q** (@Unknown, msg#2815): Can P2SH (pay-to-script-hash) be implemented in Ergo?
  **A** (@Unknown, msg#2815): "P2SH is also possible in sigma-state language" (direct confirmation).

## Links Shared

- [https://twitter.com/ergoplatformorg/status/988814079862112256](https://twitter.com/ergoplatformorg/status/988814079862112256): Ergo platform announcement (2018-04-24).
- [https://twitter.com/ZcashFoundation/status/987526970102738944](https://twitter.com/ZcashFoundation/status/987526970102738944): Zcash Foundation context for comparison on team allocation models.
- [https://techcrunch.com/2018/04/24/mobilecoin-moxie-marlinspike-binance-labs/](https://techcrunch.com/2018/04/24/mobilecoin-moxie-marlinspike-binance-labs/): MobileCoin announced as potential competition (2018-04-24).
- [https://ergoplatform.org/news_emission_curve.html](https://ergoplatform.org/news_emission_curve.html): Official Ergo emission curve documentation.
- [https://nodes.wavesnodes.com](https://nodes.wavesnodes.com): Waves blockchain explorer used for EFYT whale-wallet investigation.
- [https://twitter.com/chepurnoy/status/989852528534843394](https://twitter.com/chepurnoy/status/989852528534843394): kushti's Twitter post (linked 2018-04-28).

## Unresolved Questions

- **Early Investor Identities & Intentions**: Community member raised concerns about who the large EFYT holders (100K+ wallets) are and whether their active trading constitutes price manipulation. No definitive answer provided on specific identities or intentions; directed to ask community manager.

- **Mobile Mining Viability**: While feasibility was discussed, concrete timeline or technical roadmap for mobile mining support was not provided.

- **Fee Estimation API Status**: No mention in this week's chat, but relevant gap for future discussion given Ergo's fee redesign focus.