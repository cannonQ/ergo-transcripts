---
title: "Ergo General Chat — 2023-W20"
date_start: "2023-05-15"
date_end: "2023-05-21"
type: telegram_weekly
channel: general
week: "2023-W20"
source: telegram
message_count: 2092
categories: [governance, bridges, technical, wallet, defi, ecosystem, mining, community, marketing]
key_terms: [ETC, twitter account, Charles Hoskinson, POW alliance, custody, community vote, rosen bridge, watchers, guards, cardano, koios, rollup, watcher commitment, babel fees, token fees, nautilus, sigUSD, ERG requirement, UX, storage rent]
---
# Ergo General Chat — 2023-W20 Summary
**Period:** 2023-05-15 to 2023-05-21

---

## Key Topics Discussed

- **Storage Rent Terminology and Education**: Extended discussion about renaming "storage rent" to better communicate its purpose. Suggestions included "Inactivity Fee," "Idle Fee," "Demurrage," and "Fixed Supply Commission." @louissignet argued that storage rent is actually a monetary policy tool (demurrage) rather than just a technical storage cost, and that Ergo is the only chain guaranteeing truly fixed *circulating* supply (not just emission). @cafebedouin and @Benny noted that demurrage traditionally refers to the cost of storing/holding currency and is appropriate terminology.

- **Babel Fees User Experience**: @louissignet successfully onboarded a friend by sending SigmaUSD to a fresh wallet and having them send it back without needing ERG, demonstrating Babel Fees. However, testing revealed a UX issue in Nautilus: users get an error about needing ERG if they add assets before selecting the Babel fee token. @Capt_Nemo confirmed the feature works but needs better wallet integration. @anon_br explained that the minimum ERG for box creation comes from the Babel swap itself, not the user's wallet.

- **ETC Twitter Account Controversy**: Major ongoing debate about Ergo Foundation continuing to use the former Ethereum Classic Twitter account (given by Charles Hoskinson). @anon1111 led criticism arguing it's unethical, damages reputation, and limits organic reach. @Armeanio defended the decision and proposed converting it to a PoW Alliance account shared by multiple proof-of-work projects. Community polls showed mixed results with low participation. Anon1111 eventually deleted his Telegram account after extended debate.

- **Explorer Development**: @AcoSmrkas launched Erg Explorer (ergexplorer.com), a new block explorer with faster address loading and improved transaction input/output visualization. Received tips and donations from community including @kushti_ru (1M COMET), demonstrating community support for independent tooling development.

- **Ledger Hardware Wallet Concerns**: Discussion of Ledger's new "Recover" feature that splits and backs up seed phrases to third parties. Community consensus was that this breaks the trust model of hardware wallets. @FlyingPig noted he won't update his Nano X firmware. Alternatives discussed included Trezor (waiting for top 50 ranking), Tangem (integrating Ergo), and Ergo Mobile cold wallet setup.

- **Emission Reduction and Mining Economics**: @kushti_ru noted next emission reduction from 39 to 3 ERG per block expected around July 9, 2023. Discussion of whether this threatens network security. @kushti_ru and @qx() explained that with constant demand, 13x reduced supply should result in ~13x price increase maintaining similar hashrate, plus additional miner revenue from storage rent, MEV, and potential FIMOs (Fair Initial Mining Offerings).

- **Oracle Pool v2 Progress**: @kushti_ru explained v2 allows oracle members to rotate (sell their NFT position), has more flexible rewards especially with buyback contracts, and both Dexy and SigmaUSD Gold protocols will use buyback contracts that benefit oracles. @Dan Friedman mentioned potentially using capital from token sale to build out Ergo oracle infrastructure.

- **Sidechain Design Discussion**: @kushti_ru stated Ergo sidechains will be merge-mined and support trustless pegging through smart contracts, similar to but better than BIP-301. Emission contract will reward mainchain miners for delivering sidechain data. Different from Bitcoin's approach with potentially clearer security model. Opens opportunity for CPU/GPU miners to earn from multiple chains simultaneously.

---

## Important Decisions or Announcements

- [@kushti_ru, msg#390649, 2023-05-18]: Next emission reduction expected around July 9, 2023 (mid-July), moving from current ~39 ERG to lower emission tier.

- [@MHS_SAM, msg#390236, 2023-05-19]: Rosen Bridge update - working on finalizing APIs and UI for website, watchers, and guards; making executables plug-and-play. Watcher now includes "redeem commitment" feature if commitment doesn't merge into event trigger after sufficient confirmations.

- [@Armeanio, msg#390988, 2023-05-21]: Proposed converting ETC/Ergo Twitter account to PoW Alliance focused on mining and proof-of-work projects, with tweetdeck access for multiple projects. Initial proposal made to ETC in 2022 but no resolution.

- [@kushti_ru, msg#390723, 2023-05-20]: Published paper with code for sidechain construction, awaiting frontend/web development. Sidechains will be merge-mined with trustless pegging via smart contracts.

---

## Technical Q&A Worth Preserving

- **Q** (@louissignet): Can you send tokens using only Babel Fees, without any ERG in the wallet?
  **A** (@anon_br, @Capt_Nemo): Yes, but UX issue in Nautilus - you must select Babel fee token *before* adding assets to send, otherwise you get error. The 0.001 ERG minimum for box creation comes from the Babel swap itself (swapping token for ERG), not from user's wallet.

- **Q** (@DanFriedman): Why does Ergo need storage rent?
  **A** (@kushti_ru): Blockchain as database is expensive and inefficient - makes sense only for data used in financial applications/contracts. Without storage rent, UTXO set growth becomes major issue (see Gavin Andresen's 2015 "UTXO uh-oh" post). Storage rent helps collect dust and enables truly fixed supply through demurrage.

- **Q** (@community): Will hashrate stay stable when emission drops to 3 ERG?
  **A** (@kushti_ru, @qx()): With same external demand, 13x reduced supply should result in ~13x price increase, maintaining similar hashrate. Plus additional revenue from storage rent, MEV, and FIMOs. Current emission is ~39 ERG per block.

- **Q** (@WomboGamboa): What is significance of Palmyra/Chainlink partnership?
  **A** (@Dan Friedman): Using Chainlink proof-of-reserve and oracles for on-chain warehouse receipts in Winter Protocol for decentralized trade financing. IoT devices (camera, weight/motion sensors) provide continuous proof of physical commodity reserves. Also considering building out Ergo oracle infrastructure with raised capital.

- **Q** (@community): Can storage rent rate be changed by miners?
  **A** (@kushti_ru, @louissignet): Storage rent amount is currently 0.14 ERG per box after 4 years, based on UTXO size in bytes. Rate is set at box creation time. Changing would require hard fork with 90% consensus. Dynamic rate allows response to supply shocks but creates planning uncertainty.

- **Q** (@Aberg): How do merge-mined sidechains work for miners?
  **A** (@kushti_ru): Miners earn both ERG and sidechain tokens by delivering sidechain data to Ergo mainchain. Emission contract rewards mainchain miners. Sidechains use trustless pegging via smart contracts. Opens CPU/GPU mining opportunities on sidechains while maintaining Ergo mainchain security.

---

## Links Shared

- [https://www.ergexplorer.com/]: New Ergo block explorer by @AcoSmrkas with faster address loading and improved TX visualization
- [https://ergo.watch/emission]: Emission schedule tracker showing next reduction expected July 9, 2023
- [https://ergoplatform.org/en/blog/Babel%20Fees%20on%20Ergo:%20How-To%20Guide/]: Guide for using Babel Fees to pay transaction fees in tokens instead of ERG
- [https://medium.com/going-byzantine/ethereum-storage-rent-a2b89e96bd35]: 2019 article on Ethereum storage rent motivation (still relevant)
- [https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary]: Peter Todd's analysis of how "fixed supply" chains trend toward zero circulating supply
- [https://en.wikipedia.org/wiki/Demurrage_(currency)]: Wikipedia article on demurrage as cost of holding currency
- [https://t.me/ErgExplorer]: Telegram group for new Erg Explorer project
- [https://twitter.com/IOHK_Charles/status/1659528285783506945]: Charles Hoskinson calling ETC a "scam" in Twitter drama
- [https://sigmaverse.io]: @NoahErgo curated directory of Ergo ecosystem projects
- [https://ergcube.com]: @HQ3rr's aggregator/directory for Ergo ecosystem with stats and project listings

---

## Unresolved Questions

- **Storage Rent Branding**: No consensus reached on whether to rename "storage rent" to better communicate its purpose as monetary policy tool vs. technical storage cost. Suggestions included Inactivity Fee, Idle Fee, Demurrage, Fixed Supply Commission.

- **Twitter Account Resolution**: Extensive debate about keeping vs. returning vs. converting ETC Twitter account to PoW Alliance. No decision announced. @Armeanio proposed PoW Alliance approach but execution details and other project participation unclear.

- **Oracle Pool v2 Adoption Timeline**: Discussion of Oracle Pool v2 features but no timeline given for when projects will migrate from v1 or when v2 becomes primary infrastructure.

- **Trezor Hardware Wallet Support**: Mentioned as "when top 50" but no specific outreach or timeline discussed. Community seeking non-Ledger alternatives after Recover controversy.

- **Layer 2 Privacy Solutions**: Discussion of privacy needs and L2 potential but no specific proposals or projects mentioned for Ergo. Lightning privacy solutions noted as taking ~10 years on Bitcoin.

- **Babel Fees dApp Integration**: @Capt_Nemo mentioned building library to make Babel Fees easier for dApps but noted no adoption yet. Unclear what's blocking wider implementation.