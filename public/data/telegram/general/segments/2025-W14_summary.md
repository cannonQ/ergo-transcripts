# Ergo General Chat — 2025-W14 Summary

## Key Topics Discussed

- **Emission Contract and Block Rewards**: kushti explained that ERG is emitted via a smart contract (unlike other cryptocurrencies), with miners receiving 30 ERG per block plus 12M reemission tokens, resulting in a net 18 ERG redemption per EIP-27. DXPool maintains approximately 15% of the network's hashrate.

- **Node Synchronization Issues**: J. P. Costa reported a full node on Ubuntu 5.0.25 stuck at 99.84% sync. kushti requested diagnostic logs to investigate potential warnings or errors blocking completion.

- **Keystone Hardware Wallet Integration**: kushti shared that the Keystone team is reviewing PRs for Ergo support, with 2 of 3 PRs already merged. Ergo will be included in the Keystone cypherpunk firmware alongside Bitcoin, Zcash, and Monero. Progress tracked at https://github.com/KeystoneHQ/keystone3-firmware/pull/1676

- **MewFinance Q1 2025 Update**: HQΣr announced quarterly business update with SigmaUSD minting activity on MewBank demonstrating ongoing platform usage and user adoption.

- **Sigmanauts Mining Pool Demurrage Rewards**: Marc the Shark reported 150 ERG distributed as demurrage rewards for the previous week from Sigmanauts mining pool.

- **Sub-blocks P2P Implementation**: kushti indicated sub-blocks peer-to-peer logic is substantially complete and seeking community help to host a devnet node on public IP for testing sub-block message propagation.

- **SkyHarbor v2 Frontend Open Source**: Quokka released SkyHarbor v2 frontend as open source. CannonQ noted community funding enabled this release, with secondary benefits including 50 SkyHarbor sailor skins distributed in Cyberverse to promote ecosystem adoption.

- **Kraken CEX Listing Strategy**: qx() confirmed the fastest pathway to Kraken listing is through rsERG on Cardano, requiring significant increases in liquidity pools and holder count (from current 660 to ~6,600+ holders). Wrapped Flux on EVM has 10,000 holders as a benchmark. Kraken is currently focused on Cardano updates.

- **Speed Improvements for Ergo**: kushti announced discussions about potential speed improvements, with several draft proposals to be reviewed post-Ergoversary. Multiple approaches (sub-blocks, sidechains, faster confirmations protocols) are under consideration depending on concrete application needs and security trade-offs.

## Important Decisions or Announcements

- [@kushti, msg#553421, 2025-04-06]: **Emission reduction successfully completed.** "Happy emission reduction! It is done!"

- [@kushti, msg#553431, 2025-04-06]: **Ergo 6.0.0-RC4 released.** Mainnet successfully synced with 6.0 candidate; another RC to be released same day.

- [@kushti, msg#553459, 2025-04-06]: **Ergo protocol reference client 6.0.0-RC4 officially released** with mainnet synchronization capability. https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC4

- [@HQΣr, msg#553032, 2025-04-01]: **MewFinance Q1 2025 business update published.** https://medium.com/@themewfinance/mew-finance-quarterly-business-update-q1-2025-f864bb9b9454

- [@qx(), msg#553172, 2025-04-03]: **rsERG on Cardano confirmed as primary Kraken listing pathway**, requiring community LP building and holder growth efforts.

- [@qx(), msg#553467, 2025-04-06]: **docs.ergoplatform.org redirect fixed and now operational.**

- [@Quokka, msg#553317, 2025-04-04]: **SkyHarbor v2 frontend released as open source.** https://github.com/skyharbor-market/frontend-skyharbor-ts

- [@Andy L, msg#553087, 2025-04-02]: **Weekly Ergo AMA scheduled for 2025-04-03 at 13:00 UTC.** https://youtube.com/live/zUbGEVH1Bks

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#552940): "What is this transaction?" [referring to emission contract invocation]
  **A** (@kushti, msg#552943-msg#552951): This is a mining reward distribution via the emission contract. Miners receive 30 ERG plus 12M reemission tokens per block; only 18 ERG can be redeemed initially. This is an EIP-27 outcome. See https://docs.ergoplatform.com/mining/standards/eip27/ and https://github.com/ergoplatform/eips/blob/master/eip-0027.md. For basic emission contract details, refer to Section 2.6 of the ErgoScript documentation.

- **Q** (@J. P. Costa, msg#552964-msg#552977): Full node sync stuck at 99.84% on Ubuntu 5.0.25 with extra index enabled and custom node name. What is blocking sync?
  **A** (@kushti, msg#552991-msg#552995): Run `cat ergo.log | grep WARN` and `cat ergo.log | grep ERR` to diagnose. Share logs via pastebin, GitHub issue, or DM for analysis.

- **Q** (@Major Popsicle, msg#553155): "Did Ergo actually get a contract with terms from Kraken? If so, are the basics shareable?"
  **A** (@Glasgow, msg#553162-msg#553166): Ergo was shortlisted late last year but Kraken switched teams. No contract proposal exists. Dan Friedman is an advisor (not a formal role holder) and was involved in preventing bad deals. There is deliberately opaque communication from CEX exchanges about listing requirements.

- **Q** (@Major Popsicle, msg#553181): Where do we stand on Cardano rsERG holder count?
  **A** (@qx(), msg#553195-msg#553196): Currently 660 holders on Cardano. A 10x increase is speculated as necessary to meet Kraken listing criteria (target ~6,600 holders based on Wrapped Flux EVM benchmark of 10,000).

## Links Shared

- [https://docs.ergoplatform.com/mining/standards/eip27/]: EIP-27 emission contract standard specification
- [https://github.com/ergoplatform/eips/blob/master/eip-0027.md]: EIP-27 GitHub specification
- [https://storage.googleapis.com/ergo-cms-media/docs/ErgoScript.pdf]: ErgoScript documentation (Section 2.6 covers emission contract)
- [https://miningpoolstats.stream/ergo]: Ergo mining pool statistics (DXPool at 15% hashrate)
- [https://x.com/chepurnoy/status/1906839203905679792]: kushti's Twitter post on forum activity
- [https://medium.com/@themewfinance/mew-finance-quarterly-business-update-q1-2025-f864bb9b9454]: MewFinance Q1 2025 business update
- [https://x.com/NeuralYogi/status/1907092306773053483]: Sigmanauts mining pool demurrage rewards announcement
- [https://github.com/KeystoneHQ/keystone3-firmware/pull/1676]: Keystone firmware PR tracking Ergo support integration
- [https://github.com/skyharbor-market/frontend-skyharbor-ts]: SkyHarbor v2 frontend open source repository
- [https://cardanoscan.io/token/04b95368393c821f180deee8229fbd941baaf9bd748ebcdbf7adbb147273455247?tab=topholders]: rsERG Cardano token holder exploration tool
- [https://docs.google.com/document/d/1czr8APUC8IQp4HkV2XOF--kXSIbsUSa3hGvIBuowLag/edit?usp=sharing]: Dmitriy B.'s MLM-style marketing proposal concept
- [https://x.com/sigmanaut/status/1907882969781641605]: Sigmanauts mining pool activity announcement
- [https://youtube.com/shorts/rqf8ueYAd6g]: HQΣr's BMW drifting video
- [https://lacewallet.banxa.com/]: Lace wallet Banxa on-ramp for Cardano
- [https://x.com/NeuralYogi/status/1908304699981521410]: Marc the Shark Vibe Coding Friday night session
- [https://x.com/Mew_finance/status/1908518965980061701]: MewFinance social media engagement post
- [https://x.com/chepurnoy/status/1908635437649867175]: kushti's Twitter post on protocol development
- [https://x.com/NeuralYogi/status/1908689192185450947]: Marc the Shark community engagement post
- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC4]: Ergo 6.0.0-RC4 release page
- [https://x.com/egzonfejzullahi/status/1909069998414606449?s=46]: Community engagement post

## Unresolved Questions

- **Node sync completion**: Root cause of J. P. Costa's node being stuck at 99.84% sync remains unresolved pending log analysis.

- **Sub-blocks devnet testing**: kushti seeking volunteer with public IP to host devnet node for sub-blocks P2P testing; unclear if volunteer has been found.

- **Speed improvements direction**: Multiple proposals exist for speeding up Ergo (sub-blocks, sidechains, faster confirmations), but no concrete decision made on which approach(es) to prioritize. kushti indicated discussion would be revived post-Ergoversary with community input on which paths to pursue.

- **Kraken listing timeline**: While rsERG on Cardano is confirmed as the pathway, Kraken is still working on Cardano infrastructure updates. No concrete timeline for when listing discussions can resume.

- **CEX communication clarity**: Major Popsicle raised ongoing frustration with lack of transparency from centralized exchanges regarding listing requirements, but the community acknowledged CEXes deliberately obscure these terms and that efforts to extract clearer requirements from Kraken have been exhausted.

- **rsERG holder growth strategy**: Community identified need to grow from 660 to ~6,600 holders but specific execution plan (airdrop mechanics, incentive structures) left TBD. HQΣr suggested using ctools.mewfinance.com for airdrop distribution as one potential tool.