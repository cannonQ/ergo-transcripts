---
title: "Ergo General Chat — 2019-W46"
date_start: "2019-11-11"
date_end: "2019-11-17"
type: telegram_weekly
channel: general
week: "2019-W46"
source: telegram
message_count: 87
categories: [ecosystem, technical, bridges, defi, governance, marketing, community]
key_terms: [exchanges, Tidex, ProBit, CoinMarketCap, Utrum Crypto Playbook, node, miner, AMD, CUDA, ergo.node.miningPubKeyHex, wallet, desktop wallet, NiPoPoW, FlyClient, cross-chain swaps, velvet forks, opcodes, interoperability, smart contracts, DAO hack]
---
# Ergo General Chat Summary — 2019-W46
**Period:** 2019-11-12 to 2019-12-01  
**Active Participants:** 18  
**Tone:** Community support, technical setup questions, research exploration

---

## Key Topics Discussed

- **NIPoPoWs and cross-chain interoperability:** Discussion of Ergo's existing NIPoPoW implementation and its potential as a foundation for light-client protocols (FlyClient) and cross-chain relay mechanisms. Noted that this could position Ergo as infrastructure for trustless cross-chain communication.

- **Testnet faucet and manual distribution:** Testnet ERG distribution was not yet ready for public use; contributors like Andrey Andreev manually seeded test addresses for developers working locally on testnet.

- **Smart contract applications:** Mentions of proof-of-activity contracts, lottery mechanics, and off-chain execution with on-chain verification as emerging design patterns worth exploring.

- **Community moderation:** Discussion of anti-spam bots (Combot, Shieldy) and their value for managing growing chat activity.

---

## Important Decisions or Announcements

- [@Unknown, msg#14963, 2019-11-27]: New Asian tour rescheduled due to regional conditions; announcement pending when situation stabilizes.

- [@Andrey Andreev, msg#15039, 2019-11-30]: Testnet faucet exists but remains under active development; manual distribution being used as interim solution for developers.

---

## Technical Q&A Worth Preserving

- **Q** (@IVAN, msg#14856–14857): Where to retrieve `ergo.node.miningPubKeyHex` and how to sync miner with node?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#14858): Read documentation from msg#9975 onwards in the Ergo Telegram channel.

- **Q** (@Pepeger, msg#15033): Testnet faucet status and requirements for obtaining test ERG for transaction signing?  
  **A** (@Andrey Andreev, msg#15039, msg#15044): Faucet under active development; manual distribution available. Provided 10 test ERG to address `3WywqB19PtvCTogmGYRX3eKad2iiCjNJkeYGFiSjVEGRbFUJ4dPK` via tx `00189870ec9d5b05bc6994d92e19e5455167bea130ac36436f9184fd9716b204`.

- **Q** (@Alex Spector, msg#15053): Mining guide for Ergo on Hive, AMD hardware?  
  **A** (@filippounits, msg#15064): Referenced equivalent setup guide for Decred on Raspberry Pi as model.

- **Q** (@Unknown, msg#14861): Could the DAO hack occur using Ergo smart contracts?  
  **A** (implicit): No direct response in thread, but context suggests Ergo's model differs fundamentally, though debate continued offline.

---

## Links Shared

- [https://utrum.io/cryptos/Ergo/ERG](https://utrum.io/cryptos/Ergo/ERG): Utrum Crypto Playbook listing with community content submission and verification badge opportunities.

- [https://coinmarketcap.com/currencies/ergo#markets](https://coinmarketcap.com/currencies/ergo#markets): Market data and exchange listings.

- [https://www.youtube.com/channel/UC7cht_rw6ofX3wTirrQG8kw](https://www.youtube.com/channel/UC7cht_rw6ofX3wTirrQG8kw): Official Ergo YouTube channel.

- [https://eprint.iacr.org/2018/643](https://eprint.iacr.org/2018/643) and [https://eprint.iacr.org/2019/226](https://eprint.iacr.org/2019/226): Academic papers on light-client protocols (FlyClient context); relevance to Ergo's NIPoPoW infrastructure.

- [https://github.com/crossclaim/btcrelay-sol](https://github.com/crossclaim/btcrelay-sol): Ethereum-side cross-chain relay work mentioned as parallel development.

- [https://www.ergoforum.org/t/proof-of-activity-as-a-smart-contract/132](https://www.ergoforum.org/t/proof-of-activity-as-a-smart-contract/132): Proof-of-activity contract design thread.

- [https://www.ergoforum.org/t/a-lottery-on-top-of-ergo/137/2](https://www.ergoforum.org/t/a-lottery-on-top-of-ergo/137/2): On-chain lottery smart contract design discussion.

- [https://www.ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134](https://www.ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134): Discussion of email client for censorship-resistant environments.

- [https://github.com/ergoplatform/eips/blob/master/eip-0001.md](https://github.com/ergoplatform/eips/blob/master/eip-0001.md): Ergo Improvement Proposal framework.

- [https://github.com/ergoplatform/faucet](https://github.com/ergoplatform/faucet): Python testnet faucet client (noted as requiring additional signer).

- [https://github.com/barryWhiteHat/roll_up](https://github.com/barryWhiteHat/roll_up): Zero-knowledge rollup research (@pietrod reference for contract execution scaling).

- [https://medium.com/@_Checkmatey_/running-a-decred-raspberry-pi-node-ac605b70c652](https://medium.com/@_Checkmatey_/running-a-decred-raspberry-pi-node-ac605b70c652): Raspberry Pi node setup reference (model for Ergo guides).

- [https://uniswap.io/](https://uniswap.io/): Mentioned as leading DEX design example for intuitive UX and underlying architecture.

- [https://twitter.com/ergoplatformorg/status/1195493261730861057](https://twitter.com/ergoplatformorg/status/1195493261730861057): Official Ergo social media announcement.

- [https://twitter.com/ergoplatformorg/status/1199011967505256448](https://twitter.com/ergoplatformorg/status/1199011967505256448): Follow-up official announcement.

- [https://twitter.com/AssociateCrypto/status/1200562886604517376](https://twitter.com/AssociateCrypto/status/1200562886604517376): Community article coverage.

---

## Unresolved Questions

- **Cross-chain swap progress:** @pietrod inquired about status of cross-chain swap development mentioned in community; @Unknown acknowledged work exists but noted lack of recent updates. @kushti_ru cited for deeper knowledge but no direct response recorded.

- **Velvet forks as obstacle:** @pietrod flagged velvet forks as potential blocker for trustless cross-chain implementations; discussion continued offline.

- **Mainstream adoption trade-offs:** @Unknown (msg#14882–14883) raised concern about airdrop-driven adoption creating short-term speculators rather than genuine users; debate left open on optimal incentive mechanisms.

- **Fee market dynamics under spam:** Discussed theoretically but practical implications on Ergo not fully resolved in this segment.

- **Off-chain execution scaling:** @Unknown (msg#14904–14905) noted theoretical feasibility but flagged as future path requiring further development.

---

## Notes

- **Low technical depth:** Most exchanges were setup-oriented (testnet access, mining guides) rather than protocol deep-dives. Heavy lifting deferred to forums and offline discussions.
- **Active manual support:** Andrey Andreev and Dmitry Usov provided hands-on testnet ERG distribution and configuration support, establishing precedent for contributor onboarding.
- **Market context:** Exchange listings (Tidex, Probit) noted; no major trading infrastructure announcements.