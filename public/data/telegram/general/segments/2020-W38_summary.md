---
title: "Ergo General Chat — 2020-W38"
date_start: "2020-09-14"
date_end: "2020-09-20"
type: telegram_weekly
channel: general
week: "2020-W38"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2020-W38 Summary

## Key Topics Discussed

- **P2S vs P2SH Contract Deployment Models**: Discussion of contract serialization approaches—P2S stores contracts on-chain in the address/UTXO itself, while P2SH (Cardano model) stores only the hash and requires users to submit contracts off-chain. [@Unknown, msg#52453–52454]

- **Storage Rent & UTXO Spam Prevention**: Ergo's storage rent mechanism naturally discourages UTXO spam; Foundation should potentially sponsor data-intensive applications to increase UTXO set bloat for testing. [@kushti, msg#52498–52500]

- **Oracle Pool Data Point Copying Prevention**: Hash submission with salt during the hash submission period prevents other oracles from simply copying and rebroadcasting datapoints. [@scalahub, msg#52596]

- **Block Size & Computational Cost Limits**: Max block size increased to >1M bytes (~100% since mainnet launch); current TPS bottleneck is computational cost limit per block (3x increase since launch), which miners continue to raise organically via softforks. [@kushti, msg#52575–52581]

- **Softfork Activation via Miner Voting**: Known parameters can be activated through simple voting without formal governance proposals—miners incrementally raise computational cost limits and block size without explicit consensus steps. [@kushti, msg#52589]

- **Yoroi Integration Progress**: Sebastien Gllmt confirmed Ergo support coming to Yoroi Nightly by end of week (2020-09-19); full support expected shortly after. This will enable browser wallet with smart contract support and improved UX vs. desktop nodes. [@Sebastien, msg#53011, msg#52984]

- **Multi-Asset Phase (Colored Coins)**: New protocol release enables multi-asset support; moving beyond single-token transactions. [@Sebastien, msg#52908]

- **Oracle Pool Utility Model**: All transaction fees, oracle compensation, and eventual stake-slashing collateral require ERG; no oracle pool operation possible without ERG for on-chain settlement and rent. [@Unknown, msg#52791, msg#52744]

- **Exchange Listing & Liquidity Constraints**: Ergo Foundation DevFund (2.5M ERG / ~$2M at then-current rates) insufficient to cover major exchange listing fees (~$250–300k for Binance = ~500k ERG). Community must rely on organic demand and smaller exchange listings until price appreciation and liquidity naturally attract tier-1 exchanges. [@Damon AndTheSea, msg#52772]

- **Rich List & Explorer Backend**: Rich list data loads dynamically on each visit; backend caches may apply but UI shows previous data until new data loads, maintaining responsiveness. [@Dmitry Usov, msg#52656–52667]

---

## Important Decisions or Announcements

- [@kushti, msg#52501, 2020-09-14]: ZK Treasury project released version 0.1 with updated unit tests and executable jar files.

- [@kushti, msg#52574, 2020-09-14]: Explorer backend 3.1.0 released.

- [@Unknown, msg#52530–52531, 2020-09-14]: Emurgo Research published "Unlocking The Potential Of The UTXO Model" whitepaper documenting smart contract advantages in UTXO systems, crediting kushti and Chepurnoy.

- [@kushti, msg#52605, 2020-09-15]: Weekly Ergo developers chat scheduled for Wednesday 1PM UTC over Discord #development channel.

- [@Dmitry Usov, msg#52606–52613, 2020-09-15]: Rich list deployed on Ergo Explorer with SQL optimization planned; backend developed by Oskin1.

- [@Sebastien, msg#52908, 2020-09-18]: Yoroi multi-asset phase (colored coin support) launched; ERG integration coming to Yoroi Nightly by end of week.

- [@Sebastien, msg#53011, 2020-09-19]: Yoroi Nightly will have "fairly comprehensive" Ergo support by end of week (2020-09-19).

- [@kushti, msg#52889, 2020-09-17]: GitHub issue #1194 opened to improve binary distribution for Ergo node, addressing one-click install friction.

---

## Technical Q&A Worth Preserving

- **Q** (@Gregg из Аризоны, msg#52486): How do you avoid contract spam? Won't every deployed contract remain a UTXO forever?
  **A** (@Unknown, msg#52494): Ergo has storage rent and garbage collection mechanisms.

- **Q** (@Gregg из Аризоны, msg#52592): Why submit a hash (with salt) of datapoints during the hash submission period in Oracle Pools?
  **A** (@scalahub, msg#52596): So other oracles cannot simply copy the data point and rebroadcast it. [@Unknown, msg#52598]: Datapoint copying prevention measure.

- **Q** (@Gregg из Аризоны, msg#52701): Isn't the script in the Oracle UTXO large? Won't that consume memory when transmitted to subsequent spending UTXOs?
  **A** (@Unknown, msg#52702–52705): The Datapoint stage script is short (see datapoint.es). Live epoch script is the most complex but still compact. Scripts are destroyed when old UTXOs are spent and new ones created, so not a memory burden. NIPoPoWs integration will eventually eliminate history size as a concern.

- **Q** (@Cheng.alph, msg#52582): Miners increase parameters without explicit proposals—how does that differ from traditional DAO voting?
  **A** (@kushti, msg#52589): That's how softforks activate in Ergo—for known parameters, simple voting enables consensus without formal governance overhead.

- **Q** (@mensrea, msg#52588): What's the connection between Ergo and Scorex?
  **A** (@scalahub, msg#52590, msg#52595): Scorex is a "barebones" blockchain framework created by kushti; Ergo uses it as a library but is a complete blockchain, not Scorex itself.

- **Q** (@Dmitry Usov, msg#52815): What features are missing from the node/panel interface?
  **A** (@Dmitry Usov, msg#52817–52828): Proposed showing ERG balance in USD via Oracle Pool data; adding CoinGecko price/volume at dashboard considered but privacy concerns noted; settled on showing "20 ERG + 12 assets" in dashboard with details in wallet page.

- **Q** (@Unknown, msg#52844): Can we get one-click node installation for all major OSs?
  **A** (@kushti, msg#52889): GitHub issue #1194 opened to improve binary distribution; requires discussion with core developers on packaging solutions.

- **Q** (@Bag Holder, msg#52720): Is ERG required to manage and operate Oracle Pools?
  **A** (@Kookster, msg#52722–52746): dApps pay small transaction fees in ERG to access Oracle Pool data; collateral for pools funded in native currency. [@Unknown, msg#52791]: All tx fees, oracle compensation, and stake-slashing collateral require ERG—no operation possible without ERG.

- **Q** (@Skeeter Valentine, msg#52690–52692): If I send ERG to a used address but my wallet now shows a different address, did I lose my ERG?
  **A** (@Jonesy, msg#52695, msg#52697): Give it 15 minutes—Hotbit transfers sometimes take time despite showing 100% completion. [@Skeeter, msg#52700]: Confirmed funds arrived after waiting.

---

## Links Shared

- [https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md]: Emurgo Research whitepaper on UTXO model advantages for smart contracts.

- [https://twitter.com/emurgo_io/status/1305522352118259712?s=20]: Emurgo tweet announcing UTXO whitepaper.

- [https://explorer.ergoplatform.com/en/addresses/9gt6qyTtxrLSkpU4HAxearigmJPZ6KVK8qgHQgkQTpJS2ovjtQp]: Address with 300K ERG accumulated by miner.

- [https://explorer.ergoplatform.com/en/rich-list]: Ergo Explorer rich list view.

- [https://ergoplatform.org/en/blog/2019_04_22-lets/]: Committee-based local exchange trading systems application.

- [http://chepurnoy.org/blog/2018/10/smart-contracts-for-the-people/]: Smart contracts for targeted financial help.

- [https://t.me/ergo_mining]: Ergo Mining Telegram group.

- [https://discord.com/invite/gYrVrjS]: Ergo Discord (includes #mining channel).

- [https://www.ergoforum.org/t/zero-knowledge-treasury-on-top-of-ergo/354]: ZK Treasury forum post.

- [https://github.com/ergoplatform/oracle-core/blob/master/smart-contracts/data_point.es]: Oracle datapoint stage ErgoScript.

- [https://github.com/ergoplatform/oracle-core/blob/master/smart-contracts/live_epoch.es]: Oracle live epoch stage ErgoScript (most complex).

- [https://github.com/ergoplatform/explorer-backend/releases/tag/3.1.0]: Explorer backend 3.1.0 release.

- [https://github.com/ergoplatform/explorer-backend/releases/tag/3.2.0]: Explorer backend 3.2.0 release.

- [https://ergoplatform.org/en/blog/2020-09-17-defi-finance-but-not-always-decentralised/]: Blog post on DeFi centralization risks.

- [https://github.com/ergoplatform/ergo/wiki/Mining-Ergo-for-Fun-and-Profit]: Mining guide.

- [https://twitter.com/chepurnoy/status/1306716083563487233]: Chepurnoy's tweet (context unclear from excerpt).

- [https://twitter.com/SebastienGllmt/status/1306879148313522176]: Sebastien's announcement of Yoroi multi-asset support progress.

- [https://cardano.ideascale.com]: Project Catalyst ideascale platform for Cardano C-Fund proposals.

- [https://iohk.io/en/blog/posts/2020/09/16/project-catalyst-introducing-our-first-public-fund-for-cardano-community-innovation/]: Project Catalyst announcement.

- [https://waves.exchange/trade/EFYT_ERG]: EFYT/ERG trading pair on Waves DEX.

- [https://twitter.com/CryptoRichYT/status/1307717189655564288]: Crypto Rich's video interview with Robert (kushti).

- [https://github.com/ergoplatform/ergo/issues/1194]: GitHub issue for improved binary node distribution.

---

## Unresolved Questions

- **Hardfork & Ledger Support Timeline**: When will the first hardfork and Ledger integration arrive? [@Unknown, msg#52546]. **Status**: kushti noted HF discussions ongoing; unlikely this month, minimal end-user impact. [@kushti, msg#52804]

- **Goguen Summit Date**: When will Cardano's Goguen summit occur, triggering potential exchange listings and partnerships? [@Unknown, msg#53097]. **Status**: No date announced; Richi speculates few days/weeks after summit. [@Richi, msg#53094]

- **DEX Release Timeline**: When will Ergo's decentralized exchange launch? [@Jonesy, msg#53014]. **Status**: December or later. [@Unknown, msg#53016]

- **Anonymous Script Purpose**: A new large P2S script appeared on-chain (msg#53136–53139)—what is its purpose? Speculation included Yoroi, Binance listing, or Coinbase integration, but kushti offered no clarification beyond "DM check."

- **Ledger/Trezor Hardware Wallet Support**: Community expressed desire for hardware wallet integration (especially Ledger/Trezor). [@deepred, msg#52962, msg#52969]. **Status**: Separate process from Yoroi; some indicate potential for Ledger support similar to Cardano via Yoroi, but no timeline confirmed.

---

**Notes:**
- This week saw significant progress on Yoroi integration and multi-asset support, representing major UX and protocol milestones.
- Exchange listing remains constrained by liquidity and DevFund capacity, not technology readiness.
- Storage rent and softfork governance mechanics were clearly explained, distinguishing Ergo's approach from traditional DAO models.
- The community's focus shifted toward wallet availability and smaller exchange liquidity as prerequisites to major listings.