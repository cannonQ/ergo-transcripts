---
title: "Ergo General Chat — 2023-W47"
date_start: "2023-11-20"
date_end: "2023-11-26"
type: telegram_weekly
channel: general
week: "2023-W47"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W47 Summary

## Key Topics Discussed

- **Paideia DAO Public Beta Launch**: Public beta testing went live with bPaideia tokens airdropped to stakers. High trading volume reported on Spectrum DEX with +14-21% price movement; community encouraged to report bugs via Discord support tickets.

- **Rosen Bridge Development**: Watchers will submit reports on-chain with Ergo acting as transparent backend. End users experience ADA <> ETH transfers. RSN token locked as collateral alongside ERG for Watcher participation and reward earning.

- **Storage Rent & Demurrage Discussion**: Extensive conversation on dynamic loss rates, exponential demurrage models, and frequency of collection. Proposals discussed include 50% initial demurrage (deemed too high), percentage-based vs. flat-fee models, and exponential increase after 30-50 years of box dormancy.

- **TabbyPOS Real-World Adoption**: POS device for ERG merchant payments launched in Malaysia with card-loading capability. Targeting local merchant integration and potential merchant-issued loyalty tokens on-chain.

- **Ergo Speed Improvements (Sub-blocks/S-blocks)**: Community interest in discussing microblocks, sidechains, and layer 2 solutions post-Ergoversary. Concerns raised about block time dependencies in contracts and worst-case security scenarios. No timeline confirmed.

- **CMC Listing Description**: Successfully updated to emphasize ERG's demurrage feature and link to documentation. Text refinement completed; CSS overlay improvements proposed for follow-up.

- **Mining Decentralization Concerns**: Discussion of pool concentration (2miners holding significant hash %), ASIC resistance vs. FPGA capability, and potential protocol incentives (max pool share limits at 25%). Autolykos confirmed ASIC-resistant but not FPGA-resistant; FPGAs with HBM seen as viable future hardware.

- **Exchange Listing Barriers**: T1 exchanges (Kraken, Binance) require $120k–$500k+ fees plus sustained 200k–500k daily volume minimums or face delisting. No DEX listing pathway being actively pursued despite wrapped Cardano/ERC-20 bridge discussions.

- **Chainlink Partnership for Palmyra**: Using proof of reserve via proxy function in Winter Protocol for on-chain warehouse receipts tied to IoT devices (cameras, weight/motion sensors). Decentralized trade financing use case; Ergo oracles to be developed for native implementation.

- **GORT Token Appreciation**: Oracle Pool v2 reward token GORT distributed to community members. Staking GORT on ErgoPad yields ~0.5 ERG/month per 398k AHT staked; fees increasing from 2% to 3%.

- **Demurrage as Ergo's Niche**: @dayumbbbb framed Ergo as "Demurrage Money for the First Time (done right)"; broader discussion of how demurrage prevents coin loss, enables circulation-secured currencies, and contrasts with PoS (where staking avoids demurrage via validator participation).

- **TabbyPOS Impersonation Scam Warnings**: Multiple fake wallet recovery messages circulating. Community reinforced cardinal rule: never share seed phrases; no dev requests private keys.

## Important Decisions or Announcements

- [@kushti khushi, msg#452965, 2023-11-21]: Asked community which DAOs they want to run; consensus on testing single DAO (Ergcube) before opening broader testing.
- [@Unknown, msg#452536, 2023-11-20]: Paideia Public Beta testing live at app.paideia.im/Paideia/proposal; bPaideia airdrop distributed to stakers.
- [@Ergo NEWS $ERG, msg#452761, 2023-11-21]: ErgoHack VII voting phase open; community ranks projects on innovation, market impact, and ecosystem alignment. Deadline: Friday 5pm UTC. Voting form: https://tally.so/r/mRDzZ4
- [@kushti khushi, msg#453384, 2023-11-23]: Ergo protocol reference client 5.0.16 released. https://github.com/ergoplatform/ergo/releases/tag/v5.0.16
- [@Glasgow｜WON'T DM, msg#452469, 2023-11-20]: Ledger Live integration not planned; devs working on final fix for existing integration to exit dev mode.
- [@Armeanio, msg#453239, 2023-11-22]: Proposing experimental ideas for miners; nothing serious yet—exploring feasibility of sidechain constructions and merge-mined pegging mechanisms.

## Technical Q&A Worth Preserving

- **Q** (@Michael Souza, msg#453492): Used Yoroi recovery seed in Ergo Wallet App but balance shows zero. Which wallet can recover Yoroi seeds?
  **A** (@Glasgow｜WON'T DM, msg#453389): No direct answer given; Glasgow noted Ledger integration exists but recovery seed compatibility varies by wallet.

- **Q** (@Unknown, msg#453418): Any article explaining Ergo sub-blocks?
  **A** (@Unknown, msg#453419): No direct response in chat; topic deferred to broader speed improvements discussion.

- **Q** (@dayumbbbb, msg#453169-170): Do stealth address payments always result in the same final address? Is unlocking receiver-side via shared secret?
  **A** (implicit): Discussion incomplete but confirms stealth addresses use shared-secret-based unlocking mechanism.

- **Q** (@Me, msg#453983): What are decentralized grid bots? (referenced in kushti video at 1:47)
  **A**: No explicit answer in chat; flagged as unresolved.

- **Q** (@HQΣr, msg#454268): Are normal users able to fetch storage rent, or is mining required for recollection?
  **A** (implied by @qx(), msg#454321+): Function unclear; implied users cannot directly claim demurrage boxes, miners/contracts control recollection.

- **Q** (@Mint LkV, msg#453375): Does a pool owning most hash affect decentralization? Can pools use power however they want?
  **A** (@Glasgow｜WON'T DM, msg#453386): Decentralization is a spectrum, not binary. Selfish mining is biggest risk; no financial incentive for 2miners to 51% attack a small chain—they'd lose more than gain.

- **Q** (@Me, msg#453657): How difficult is getting Ergo listed on T1 exchanges like Kraken?
  **A** (@Dan Friedman, msg#453657-659): Listing requires $120k–$500k+ fee + 200k–500k daily volume minimum. Failure to maintain volume = delisting + fee retained. No amount of community letters will change this—purely money & volume game.

- **Q** (@Mint LkV, msg#453742): If price stays flat until 2026 when block reward drops to 3 ERG, can miners sustain operations? (Currently 33 ERG/block ≈ $28,500/day reward)
  **A** (@Rj, msg#453746): Framed incorrectly—assume ERG price scales with demand. If demand holds, 3 ERG/block at higher price = similar reward. Real metric: electricity cost per kWh > 0.06$/kWh → unprofitable even today.

- **Q** (@Mar Bondicat, msg#453245): Is FPGA mining possible for Autolykos?
  **A** (@Mar Bondicat, msg#453245): FPGA possible but expensive; Autolykos is ASIC-resistant (not ASIC-impossible)—ASICs perform ~same as GPU, not worth building. FPGAs with HBM viable as soft circuits can be updated.

- **Q** (@Me, msg#454000): Someone DM'd offering to mix ERG for me—should I send private keys?
  **A** (@qx(), msg#453999): No. Run local jar file on Linux directly; will create mixer video tutorial.

- **Q** (@Me, msg#453995): Can ergomixer .exe run on Linux via Wine?
  **A** (@qx(), msg#453996): Use jar file directly on Linux instead.

- **Q** (@Me, msg#453256-257): When Ergo integrates MetaMask, can I store ERG on MetaMask using Trezor hardware wallet across chains like EVM assets?
  **A**: No direct answer; unclear if cross-chain seed support planned.

## Links Shared

- [https://docs.ergoplatform.com/dev/get-started/](https://docs.ergoplatform.com/dev/get-started/): Ergo development resources & getting started guide.
- [https://docs.ergoplatform.com/mining/setup/join/](https://docs.ergoplatform.com/mining/setup/join/): Mining setup & pool join resources.
- [https://tally.so/r/mRDzZ4](https://tally.so/r/mRDzZ4): ErgoHack VII community voting form.
- [https://explorer.ergoplatform.com/](https://explorer.ergoplatform.com/): Ergo Explorer.
- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.16](https://github.com/ergoplatform/ergo/releases/tag/v5.0.16): Ergo reference client 5.0.16 release.
- [https://app.paideia.im/Paideia/proposal](https://app.paideia.im/Paideia/proposal): Paideia DAO Public Beta.
- [https://www.ergoforum.org/t/an-update-of-the-storage-model-demurrage/4568](https://www.ergoforum.org/t/an-update-of-the-storage-model-demurrage/4568): Forum discussion on storage model & demurrage proposals.
- [https://www.ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429](https://www.ergoforum.org/t/artifical-economic-intelligence-on-ergo-blockchain/4429): AEI (Artificial Economic Intelligence) on Ergo proposal.
- [https://youtu.be/QxnOlzS9y8Q](https://youtu.be/QxnOlzS9y8Q): @qx() video on buying crypto & swapping to ERG in USA (<5 min).
- [https://youtu.be/XoJT7aR7o4w](https://youtu.be/XoJT7aR7o4w): SigmaOptions video tutorial.
- [https://t.me/paideiaDAO](https://t.me/paideiaDAO): Paideia DAO Telegram.
- [https://t.me/ergo_mining](https://t.me/ergo_mining): Ergo mining Telegram channel.
- [https://www.youtube.com/watch?v=7q3Jq_OvhKY](https://www.youtube.com/watch?v=7q3Jq_OvhKY): @Glasgow ledger hardware wallet setup video.
- [https://t.me/ErgoSocials](https://t.me/ErgoSocials): Ergo community marketing Telegram.
- [https://www.ergopad.io/](https://www.ergopad.io/): ErgoPad launchpad (AHT staking for GORT rewards).
- [https://app.spectrum.fi/](https://app.spectrum.fi/): Spectrum DEX.
- [https://x.com/PaideiaDAO/status/1726483271624929611](https://x.com/PaideiaDAO/status/1726483271624929611): Paideia beta launch announcement.

## Unresolved Questions

- **Sub-block/S-block Implementation Timeline**: Community discussed speed improvements but no concrete timeline. Dependencies on block height/timestamp contracts unclear; security implications in worst-case scenarios flagged but not resolved.
- **Storage Rent Collection Mechanics**: Whether non-mining users can directly claim demurrage boxes vs. only miners/smart contracts having access—answer unclear.
- **Demurrage Parameters**: Exact rates, exponential growth timeline (30 vs. 50 years?), and percentage vs. flat-fee model still under discussion. No proposal finalized.
- **Ledger Tangem Integration**: Status of Ergo implementation in Tangem wallets unknown; last update July 2023. @Glasgow noted waiting to hear back from Tangem; they prioritize community demand.
- **T1 Exchange Listings (Kraken, Binance)**: Confirmed as purely fee + volume driven ($120k–$500k+ upfront). Community letters ineffective. No active negotiation path disclosed.
- **Wrapped Cardano ERG Bridge Risk**: Debate ongoing whether wrapped tokens on Cardano DEXes create unacceptable UX friction (users accidentally sending to wrong chain). No consensus reached.
- **Futures-Only Listing Strategy**: Mentioned as potentially faster path than spot listing, but no exchanges confirmed pursuing this.
- **Kushti's Long-term Commitment**: Anecdotally, he stated "not going anywhere, next question" but no formal public statement on succession planning or protocol completion timeline.
- **DAO Funding/Marketing DAO Model**: @Rj proposed sovereign wealth fund model (VC-like DAO buying tokens, selling at 10x+); feasibility and governance structure unresolved.
- **Chainlink Oracle Pool Integration**: Dan Friedman outlined Palmyra partnership but native Ergo oracle development funding & timeline TBD.
- **CMC "Top 19 Loser" Tag Persistence**: 2+ weeks of erroneous ranking; cause attributed to possible "targeted attack" but unconfirmed. Technical root cause unclear.