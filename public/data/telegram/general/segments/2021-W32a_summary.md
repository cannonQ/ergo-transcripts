# Ergo General Chat — 2021-W32a Summary
**Period:** 2021-08-09 to 2021-08-11

---

## Key Topics Discussed

- **ErgoDEX Beta Launch:** The primary event of the period. ErgoDEX beta went live on 2021-08-11 at https://beta.ergodex.io/. Users required Yoroi Nightly + Yoroi-Ergo dApp Connector extensions. Test tokens (WT_ERG and WT_ADA, 10k each) were distributed via a faucet at `https://gettoken.ergopool.io/dexToken/address/YOUR_ADDRESS`. Real ERG was still required for transaction fees even in beta.

- **Cardano Catalyst Fund5 Funding for ErgoDEX:** ErgoDEX was funded via leftover funds (~$91,000 of ~$92,500 available) after the top two projects in the DeFi category were funded. ErgoDEX was the highest-voted unfunded project; "Planting Roots in Africa" was above it but asked for more than the remaining envelope.

- **KuCoin Listing Campaign:** KuCoin was running a $30,000 ERG prize pool listing campaign ending August 12. The withdrawal fee on KuCoin was 1 ERG (vs. 0.1 ERG on CoinEx), generating community discussion. Armeanio was in communication with KuCoin about reducing the fee; it was subsequently reduced to 0.01 ERG.

- **SigmaUSD / SigRSV Dynamics and ErgoDEX Interaction:** Armeanio discussed how SigmaUSD's utility would evolve with ErgoDEX — minting SigmaUSD to buy assets on the DEX rather than just for shorting/longing ERG. The key metric discussed was "velocity" of SigmaUSD: how many times it changes hands between mint and redemption, with more DEX asset listings expected to extend this lifecycle.

- **Ergo Manifesto Hindi Translation:** RETRO (REROLABS) completed a Hindi translation of the Ergo Manifesto and shared it with Armeanio, Glasgow, and Peppers CK. Community members tipped generously; Glasgow tipped 15 ERG.

- **BitMart Withdrawal Issues:** Multiple users reported ERG withdrawals blocked on BitMart with outdated prices (showing ~$6.6-$7.3 while market was ~$12+). Armeanio identified as point of contact for exchange-level escalation.

- **Ergo Scaling Discussion (via AMA context):** Glasgow summarized Ergo's scaling roadmap in the chat: L0 node optimizations (20-50x possible), L1 extension section supporting BitcoinNG-style microblocks and sharding, L2 support for Lightning Network, Rainbow Network, Zero-Knowledge Contingent Payments, FairSwap/FastSwap.

---

## Important Decisions or Announcements

- [@Ilya Oskin, msg#185358, 2021-08-11]: ErgoDEX UI to be released in ~1 hour; waiting for test token distribution to complete.
- [@Ilya Oskin, msg#185449, 2021-08-11]: Official release of ErgoDEX beta imminent — "wait few more minutes, we will release the link officially."
- [@Ilya Oskin, msg#185476, 2021-08-11]: ErgoDEX beta live — Twitter announcement posted at https://twitter.com/ErgoDex/status/1425491577879896069
- [@Ilya Oskin, msg#184059, 2021-08-10]: ErgoDEX team setting up liquidity pools (day before launch).
- [@Ilya Oskin, msg#184063, 2021-08-10]: Confirmed beta testing would begin that day.
- [@Autolykos Megistos, msg#183373, 2021-08-09]: ErgoDEX confirmed funded via Cardano Catalyst Fund5 leftover funds — full tally results linked.
- [@Armeanio, msg#183307, 2021-08-09]: Actively trying to get KuCoin to lower the 1 ERG withdrawal fee.
- [@CW, msg#184691, 2021-08-10]: KuCoin withdrawal fee reduced to 0.01 ERG.
- [@Glasgow, msg#184314, 2021-08-10]: Tipped Pranav Vasant for Ergo video content (https://youtu.be/ZL8S7CViXvU).
- [@Glasgow, msg#185059, 2021-08-11]: Tipped REROLABS 15 ERG for completing Hindi Ergo Manifesto translation.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): What is the current TPS of Ergo?
  **A** (@Glasgow, msg#184092, 2021-08-10): TPS doesn't mean much in Ergo's context — smart contracts allow thousands of transactions to be batched. A single transaction can have hundreds of recipients. Example: https://explorer.ergoplatform.com/en/transactions/c4e5276182543b17eae4e767d60965feceaf1fd1ba1f5bde76aae751b33a6bb8

- **Q** (@Unknown, msg#184080): To use ErgoDEX, do I need ERG to complete a transaction (like ETH on Uniswap)?
  **A** (@Ilya Oskin, msg#185509, 2021-08-11): Real ERGs are required for fees even in the beta with test tokens.

- **Q** (@Unknown, msg#183957): How many transactions can the Ergo network process per second, and is there research to increase it?
  **A** (@Gazza, msg#183961, 2021-08-10): No exact value yet as it hasn't been needed. Ergo uses the UTXO model like Bitcoin, so layer 2 solutions like the Lightning Network and other Bitcoin scaling solutions can be applied relatively easily.

- **Q** (@Lorem, msg#185230): Do I need Yoroi Nightly to receive test tokens?
  **A** (@Ilya Oskin, msg#185365, 2021-08-11): Any mainnet wallet address works for receiving test tokens. However, Yoroi Nightly + dApp Connector is required to interact with the DEX UI.

- **Q** (@poko pen / others): Faucet shows "This address has already received DEX Tokens" but tokens haven't arrived — why?
  **A** (@Ilya Oskin, msg#185283, 2021-08-11): Many users are getting errors because there is a limited number of UTXOs, which limits the parallelism of token distribution. (@MHS_SAM, msg#185312): Working on deploying a new chained-transaction script to address this; fix deployed ~20 minutes later.

- **Q** (@A, msg#185332): Will the limited UTXO parallelism be an issue when using the DEX?
  **A** (@Ilya Oskin, msg#185351, 2021-08-11): No — the DEX chains all operations.

- **Q** (@Unknown, msg#184739): Will there be a way to burn ERG (e.g., via ErgoDEX fees)?
  **A** (@Unknown, msg#184746): No burning — analogous to asking if Bitcoin will be burned. Ergo uses storage rent to recycle coins rather than destroying them. Burning would artificially reduce supply and contradict the project's design philosophy.

- **Q** (@Unknown, msg#183868): Will ErgoDEX operate inside a browser wallet like PancakeSwap in Trust Wallet (mobile), or via browser extension like Metamask + Uniswap?
  **A** (@scalahub, msg#184229): It's like ETH on Uniswap — browser extension model (Yoroi Nightly + dApp Connector).

---

## Links Shared

- [https://drive.google.com/file/d/1h3-nZYZ0G66UXVd-JdIq_dpXSJAaVOZk/view]: Cardano Catalyst Fund5 full tally results showing ErgoDEX funding
- [https://www.kucoin.com/news/en-ergo-listing-campaign-enjoy-a-30000-in-erg-prize-pool]: KuCoin ERG listing campaign details — $30,000 ERG prize pool, ending August 12
- [https://beta.ergodex.io/]: ErgoDEX beta — live as of 2021-08-11
- [https://twitter.com/ErgoDex/status/1425491577879896069]: Official ErgoDEX beta launch announcement
- [https://twitter.com/ErgoDex/status/1425437277560393729]: ErgoDEX test token faucet announcement
- [https://gettoken.ergopool.io/dexToken/address/YOUR_ADDRESS]: ErgoDEX test token faucet (10k WT_ERG + 10k WT_ADA per address, one request per address)
- [https://github.com/ergolabs/ergo-dex-frontend/tree/dev]: ErgoDEX frontend repo with setup instructions (Yoroi Nightly steps)
- [https://chrome.google.com/webstore/detail/yoroi-nightly/poonlenmfdfbjfeeballhiibknlknepo]: Yoroi Nightly Chrome extension
- [https://chrome.google.com/webstore/detail/yoroi-ergo-dapp-connector/chifollcalpmjdiokipacefnpmbgjnle/related]: Yoroi-Ergo dApp Connector Chrome extension
- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Forum post on ERG staking concept via ErgoMixer liquidity provision
- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Blog post explaining ERG emission curve and supply
- [https://ergoplatform.org/en/blog/2021-07-21-ergodex-a-cross-chain-workhorse/]: Detailed ErgoDEX technical breakdown
- [https://ergoplatform.org/en/blog/2021-05-13-bearwhale-saga/]: Blog post on SigmaUSD/SigRSV oracle price update mechanism (5c per 30 min max, 12-minute intervals)
- [https://youtu.be/ZL8S7CViXvU]: Community Ergo promotional video
- [https://ergographics.tumblr.com/]: Community-created Tumblr aggregating Ergo community graphics and content
- [https://t.me/ergo_mining]: Ergo mining Telegram group
- [https://www.reddit.com/r/ergocss/comments/p271so/]: Reddit AMA recap post covering first 5 questions from the Bitcoin.com Exchange AMA

---

## Unresolved Questions

- **Ledger integration timeline:** Multiple users asked; no firm date given. Working on the Ledger app, wallet integration would follow. Community estimate "a couple of months" but unofficial.
- **ErgoDEX public beta faucet failures:** Many users reported receiving "already claimed" errors without actually receiving tokens. MHS_SAM was deploying a fix (chained transaction script) but resolution during this period was partial.
- **BitMart withdrawal blockage for Ertan Sahin:** Awaiting Armeanio to wake up and escalate; no resolution confirmed within the log period.
- **Changelly listing:** Multiple users asked; no date confirmed.
- **Binance listing:** Community consensus was not to pay listing fees; organic growth expected to force eventual listing. No timeline or active negotiations mentioned.
- **ErgoDEX "address not specified" error on swap UI:** Reported by a user (msg#185599); Ilya Oskin asked for clarification but thread ends there.