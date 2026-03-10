---
title: "Ergo General Chat — 2022-W27"
date_start: "2022-07-04"
date_end: "2022-07-10"
type: telegram_weekly
channel: general
week: "2022-W27"
source: telegram
message_count: 524
categories: [defi, technical, wallet, mining, ecosystem, governance, nft, community]
key_terms: [SigUSD, SigRSV, AgeUSD, reserve ratio, minting, redemption, PayPal, fiat, on-ramp, sigUSD, KYC, liquidity, Satergo, full node, node setup, REST API, https, wallet, Nautilus, EXLE]
---
# Ergo General Chat Summary — 2022-W27

## Key Topics Discussed

- **UTXO Token Limit Issue**: A critical bug was discovered affecting wallets holding more than 255 different tokens in a single box/UTXO. The issue originated in transaction-building tools (Nautilus), not the protocol itself. Wallets are implementing mitigations to split outputs across multiple boxes automatically.

- **Node Infrastructure & Public REST API**: Discussion on exposing Ergo nodes via HTTPS for light wallet clients. Only ~32 nodes are publicly reachable via REST API; many others are behind firewalls. A PR exists to allow nodes to advertise their URLs, but concerns raised about centralization and the need for a directory.

- **Mining Pool Development**: Interest in building custom mining pools raised; GetBlock and other pools use centralized solutions rather than pure smart contracts for fee distribution. MiningCore mentioned as an alternative.

- **SigmaUSD & SigmaRSV Mechanics**: Multiple discussions on collateralization ratios (400%, 800%), redemption mechanics, and the relationship between SigmaUSD (stable) and SigmaRSV (leveraged). Noted that SigRSV is "long the reserve, not necessarily the price of ERG."

- **Fiat On/Off-Ramps**: Exploration of legal and technical feasibility of SigmaUSD-for-fiat checkout pages using PayPal or similar services. Consensus that it's legally possible but faces challenges from payment processors and regional crypto regulation.

- **Market Maker Concerns**: Kairon Labs' admission to maintaining short positions while providing market-making services raised questions about conflicts of interest. Armeanio confirmed they are shorting majors, not ERG specifically.

- **Layer 2 & Scaling Discussion**: Long-form explanation of why Layer 2 solutions depend on Layer 1 security; discussion of sidechains, merge-mining constructions, and potential faster block times (impact on timestamp-based logic vs. block-height-based logic flagged as concern).

- **Trade House & Order Books**: Detailed discussion of Trade House's significance as an order book DEX (vs. AMM-style liquidity pools), highlighting full control over slippage and price discovery vs. impermanent loss risks.

---

## Important Decisions or Announcements

- [@Glasgow, msg#287575, 2022-07-06]: Weekly Update and AMA moved to **Thursdays at 13:00 UTC** (from previous schedule).

- [@Aberg Satergo dev, msg#287457, 2022-07-06]: **Satergo v0.0.3 released** — 50% smaller binary, node operations via UI, transaction history, price charts (24h–Max), optimized multi-address selection, token icons, keyboard navigation.

- [@MrStahlfelge, msg#287969, 2022-07-09]: **Mobile wallet confirmed safe** — will not create boxes with >100 tokens; splits outputs automatically if sufficient ERG available.

- [@Unknown, msg#288031, 2022-07-10]: New Ergo blog post published (Twitter link shared).

- [@Ilya, msg#287465, 2022-07-06]: **ErgoDex swap notifications** added to Twitter kaching bot.

---

## Technical Q&A Worth Preserving

- **Q** (@npks, msg#287781): Wallet recommendations for Ergo with Ledger Nano X support?
  **A** (@Unknown, msg#287783): Nautilus and Satergo support Ledger integration.

- **Q** (@Unknown, msg#287455): Easiest way to run a node?
  **A** (@Gazza, msg#287456): Satergo wallet allows full node in a few clicks with wallet access.

- **Q** (@Unknown, msg#287738): Benefit of running public HTTPS node vs. private?
  **A** (@MrStahlfelge, msg#287741): Can be used by light wallets to access blockchain state. Goal is to deprecate centralized explorers.

- **Q** (@Unknown, msg#287744): How do light wallets discover public nodes?
  **A** (@MrStahlfelge, msg#287749): At present they cannot. PR open to allow nodes to advertise URLs in settings so light wallets can build a list.

- **Q** (@BillyΣ, msg#287705): How to build custom mining pool with smart contract fee distribution?
  **A** (@Unknown, msg#287707-710): Most pools use centralized solutions; GetBlock made custom contracts (source not publicly available). Best place to ask is Discord's "set up your mining pool" channel.

- **Q** (@Richi, msg#287593): Do miners have to accept native asset/ERG rate or reject transaction?
  **A** (@Richi, msg#287593): If miners see rate as unacceptable, transaction not included; must resubmit.

- **Q** (@Unknown, msg#287541): How many Ergo nodes truly running?
  **A** (@MrStahlfelge, msg#287542): ~32 reachable via REST API; 200+ listed but most behind firewalls or with non-functional REST API on port 9053.

- **Q** (@€rgonauta, msg#288042): Where do storage rent fees (0.0011 ERG per transaction) go?
  **A** (@Flying Pig, msg#288045): To miners.

- **Q** (@Unknown, msg#288057): Is the >255 token issue a chain bug or token design problem?
  **A** (@Luivatra, msg#288058): Bug in transaction-building tools (e.g., Nautilus), not the chain or token design itself.

- **Q** (@Unknown, msg#288024): Why can't hold >255 tokens in one wallet?
  **A** (@CW, msg#288025-026): It's per UTXO (box), not per wallet. Wallets can have multiple boxes/addresses to hold more.

- **Q** (@Kazzimkoc, msg#287387): Help with Ergo node + mining setup?
  **A** (@Glasgow, msg#287391-392): Join @ergo_mining Telegram; see docs at ergoplatform.com/mining/setup/solo/ for solo mining.

---

## Links Shared

- [github.com/ergonames](https://github.com/ergonames): ErgoNames project for domain naming.
- [medium.com/ada-handle](https://medium.com/ada-handle/ada-handle-partners-with-ergo-2b14e42116e): AdaHandle partnership with Ergo (Feb 2022, possibly outdated).
- [github.com/Satergo/Satergo/releases](https://github.com/Satergo/Satergo/releases): Satergo wallet releases.
- [github.com/ergoplatform/ergo/releases/tag/v4.0.33](https://github.com/ergoplatform/ergo/releases/tag/v4.0.33): Node v4.0.33 release notes (HTTPS config required).
- [babygrenade.github.io/ergo-tokenautics-frontend](https://babygrenade.github.io/ergo-tokenautics-frontend/?token=SigUSD): Token distribution visualization for SigmaUSD.
- [babygrenade.github.io/ergo-tokenautics-frontend (SigmaRSV)](https://babygrenade.github.io/ergo-tokenautics-frontend/?token=SigmaRSV): Token distribution visualization for SigmaRSV.
- [sigusd.abchris.xyz](https://sigusd.abchris.xyz/): SigmaUSD/SigmaRSV calculator tool.
- [ergoplatform.com/contribute/](https://docs.ergoplatform.com/contribute/): Developer contribution guidelines.
- [docs.ergoplatform.com/mining/setup/solo/](https://docs.ergoplatform.com/mining/setup/solo/): Solo mining setup documentation.
- [satergo.com](https://satergo.com/): Satergo wallet official site.
- [twitter.com/tosidrop/status/1544350468650008576](https://twitter.com/tosidrop/status/1544350468650008576): TosiHack 2022 announcement.
- [medium.com/@tosidrop/build-the-dip-tosihack-2022](https://medium.com/@tosidrop/build-the-dip-tosihack-2022-b68dbc638b7c): TosiHack 2022 details.
- [cointelegraph.com/.../liquid-markets-are-healthy](https://cointelegraph.com/news/liquid-markets-are-healthy-markets-says-kairon-labs-co-founder): Kairon Labs market maker article discussing short positions.
- [cardano.ideascale.com/c/idea/421661](https://cardano.ideascale.com/c/idea/421661): Ergodex Catalyst proposal for Spectrum L2 funding.
- [5c3i0k2q3p5.typeform.com/tosihack](https://5c3i0k2q3p5.typeform.com/tosihack): TosiHack registration form.
- [docs.ergoplatform.com/dev/wallet/](https://docs.ergoplatform.com/dev/wallet/): Ergo wallet documentation.
- [node.ergo.watch](https://node.ergo.watch): Public Ergo node (alternative to ergo.nodospyder.io).
- [github.com/ergoMixer/ergoMixBack](https://github.com/ergoMixer/ergoMixBack/blob/master/mixer/reference.conf): ErgoMixer reference nodes (line 29).
- [open.spotify.com/episode/2Nn7QpwgvqsNYNxqWQ7O4q](https://open.spotify.com/episode/2Nn7QpwgvqsNYNxqWQ7O4q): Dev update podcast (newest episode).
- [youtu.be/v3iAddcacxM](https://youtu.be/v3iAddcacxM): Weekly AMA/Update video stream link.

---

## Unresolved Questions

- **UTXO Token Limit Fix Timeline**: When will the full fix be deployed across Nautilus, Satergo, and Ergo mobile wallet? (@Chris Ray flagged this as urgent for projects like EXLE that issue many NFTs).

- **Public Node Discovery**: How will light wallets discover public nodes once PR for URL advertising is merged? Is a centralized directory acceptable, or decentralized discovery needed?

- **Tier 1 Exchange Listing ETA**: Multiple asks about when Ergo will be listed on a tier 1 CEX. Response: NDA prevents disclosure; "waiting game" continues.

- **Fiat On-Ramp Feasibility**: Legal framework for SigmaUSD-for-fiat checkout pages remains unclear; PayPal/payment processor acceptance unconfirmed.

- **Layer 2 Block Time Impact**: If block times are decreased, what systems (timestamp-based logic, dApps, emissions contracts) would be affected? Flagged by kushti as requiring careful analysis.

- **Market Maker Accountability**: Whether Ergo Foundation has formally addressed Kairon Labs' short positions and conflict-of-interest concerns raised in June 2022.

- **Mining Pool Smart Contracts**: Are there publicly available ErgoScript examples for decentralized mining pool fee distribution, or do all pools rely on centralized solutions?

---

**Note**: This week was moderately active with significant technical bug discovery and infrastructure discussions. Price speculation, exchange listings, and off-topic conversations were filtered out per guidelines. The UTXO token limit issue is the most critical unresolved technical matter.