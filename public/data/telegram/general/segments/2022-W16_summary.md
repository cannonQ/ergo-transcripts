---
title: "Ergo General Chat — 2022-W16"
date_start: "2022-04-18"
date_end: "2022-04-24"
type: telegram_weekly
channel: general
week: "2022-W16"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W16 Summary

## Key Topics Discussed

- **Wallet Issues & Recovery**: Yoroi experiencing widespread functionality problems; users advised to restore seed phrases in Nautilus, SafeW, or Ergo Mobile Wallet. Seed phrases are universal across Ergo wallets, not wallet-specific.

- **EIP-27 Activation & Block Reward Reduction**: Testnet fixed, final review underway. Activation height proposed at 777,217 (~June 21st). Block reward reduces by 12 ERG with EIP-27; next 3 ERG reduction at block ~784,800 (~72 days away).

- **Ledger Hardware Wallet Support**: Tesseract team resumed work; Ledger protocol v7 received by Nautilus wallet developers. Implementation ongoing but no firm release date ("operative word is soon").

- **Node Setup on M1 Mac**: KVSync branch merged into v4.0.26. Set `maxConnections = 10` for optimal performance on Apple Silicon.

- **ErgoExplorer Availability**: Brief outage reported and resolved; netdata configuration had broken nginx.

- **Proof of Work vs Proof of Stake**: Extended debate on security models. Arguments made that PoW requires verifiable randomness; PoS tends to centralize wealth. No consensus reached on which is superior long-term.

- **NFT Metadata & Multi-Wallet Issuance**: Question raised whether a single NFT assetID can be distributed across multiple wallets (e.g., for open seating vs assigned seating events). Appears technically feasible with ErgoScript but no detailed resolution provided.

- **ErgoHack Fest Announced**: Massive rewards; mentors list TBD. No specific theme announced yet.

---

## Important Decisions or Announcements

- [@Glasgow, msg#270792, 2022-04-19]: kushti will announce the new activation block (for EIP-27) shortly.

- [@Glasgow, msg#270898, 2022-04-20]: EIP-27 activation height set to ~June 21st (~777,217 blocks).

- [@Glasgow, msg#270910, 2022-04-20]: Block reward reduction is 12 ERG less per block (fixed onward with EIP-27).

- [@Glasgow, msg#270796, 2022-04-19]: Ledger developer relocated due to Ukraine war, has completed bug fix; moving to private testing and app store approval.

- [@Armeanio, msg#270884, 2022-04-20]: ErgoHack fest co-presented by Ergo Foundation announced with major prize pool (Yahoo Finance coverage published).

- [@MrStahlfelge, msg#270743 & #270744, 2022-04-19]: EIP for box attachments finalized; can be used for receipts, tweets, or other metadata without protocol restriction.

- [@Unknown, msg#271522, 2022-04-23]: SafeW (Simple and Fast Ergo Wallet) now available on Chrome Web Store.

---

## Technical Q&A Worth Preserving

- **Q** (@Ole Isler, msg#270620): Can I guarantee access to SigmaUSD funds in my Yoroi wallet in the future if Yoroi fails?
  **A** (@Glasgow, msg#270624): Funds are not stored in Yoroi; they will restore when you change wallets. Your seed phrase is the key, not the wallet software.

- **Q** (@Kallo Shaman, msg#270943): If I use multiple addresses in one wallet, can others detect they're linked?
  **A** (@MrStahlfelge, msg#270944): Only with your extended public key. Without sharing it, no one knows addresses are linked.

- **Q** (@Jerry, msg#270955): Android wallet showing block height error.
  **A** (@MrStahlfelge, msg#270956): Change the node in expert settings to one from https://api.tokenjay.app/peers/list

- **Q** (@Shiv Chauhan, msg#271530 & #271534): Who runs Ergo nodes and are there financial benefits like in Flux?
  **A** (@theta_decay, msg#271533; @Unknown, msg#271536): Anyone can run a node with no direct financial benefit, but node runners can solo mine, run Ergodex bots, and operate Oracle bots for potential income as ecosystem grows.

- **Q** (@sudo Scientist, msg#270980): Can Ergo Wallet export xpub from full node?
  **A**: No direct answer given; left unresolved.

- **Q** (@Tommaso, msg#270950): Could a Pixel phone with GrapheneOS be used as a cold wallet?
  **A** (@Unknown, msg#271951): Yes, if you install ErgoWallet and disconnect from the internet.

- **Q** (@JayDee12Thr33, msg#271609): Can SafeW export transaction history in Yoroi format for tax software (Koinly)?
  **A** (@Unknown, msg#271612 & #271614): SafeW includes native token data which Koinly can't parse; Yoroi only outputs ERG transactions. No conversion tool announced.

---

## Links Shared

- [https://www.reddit.com/r/ergonauts/comments/u1emgd/psa_your_ergo_is_not_inside_yoroi_you_can_use/]: PSA explaining Yoroi seed phrase portability and alternative wallet recommendations.

- [https://docs.ergoplatform.com/dev/wallet/]: Ergo wallet documentation with setup instructions.

- [https://github.com/ergoplatform/eips/pull/58]: EIP for box attachments (used for receipts and extensible metadata).

- [https://github.com/ergoplatform/eips/pull/62]: Dexy USD EIP proposal by @scalahub (DexyUSD protocol).

- [https://ergonaut.space/en/Ergo/FAQ]: Community FAQ with PoW/PoS comparisons and design rationale.

- [https://curiaregiscrypto.medium.com/ergo-why-proof-of-work-47c9b25fae70]: Medium article defending Ergo's PoW choice.

- [https://explorer.ergoplatform.com/en/transactions/c25dc7db21ff03175a03ad271d32fa26a9305bc95145eb9c3187a8e809264c3c]: MiGoreng airdrop transaction (5k outputs).

- [https://explorer.ergoplatform.com/en/transactions/b52c9396e46a3dafdf0e533e66407716fe0125a54fd85084f62506c0397db23a]: MiGoreng airdrop transaction (5k outputs).

- [https://twitter.com/ergofoundation/status/1493278840734556161]: Comet airdrop announcement (10k outputs).

- [https://www.sigmavalley.org]: SigmaValley metaverse for NFT display.

- [https://skyharbor.io]: SkyHarbor NFT marketplace.

- [https://api.tokenjay.app/peers/list]: List of reliable Ergo node peers for wallet configuration.

- [https://docs.ergodex.io/docs/user-guides/nautilus-quick-start]: ErgoDex + Nautilus wallet integration guide.

- [https://chrome.google.com/webstore/detail/simple-and-fast-ergo-wall/fmpbldieijjehhalgjblbpgjmijencll]: SafeW wallet on Chrome Web Store.

- [https://youtu.be/rPBZwEPk5Q8]: Weekly Ergo AMA with Dan Friedman and kushti (2022-04-22, 13:00 UTC).

- [https://youtu.be/B4R0Z5GP54s]: Paideia interface walkthrough and DAO management demo.

- [https://youtu.be/meaOkh8AW9k]: Paideia video demo.

- [https://ergoplatform.org/en/blog/2019_12_02_how_to_setup/]: How to setup an Ergo full node (setup guide).

---

## Unresolved Questions

- **Ledger Support Timeline**: No firm ETA announced; "operative word is soon" as of 2022-04-21.

- **iOS Mobile Wallet Release**: Awaiting bank account approval (complex due to mixed US/Russian team + crypto regulation). No date given.

- **ErgoHack Fest Mentors & Theme**: Announced with massive rewards but mentor list and hackathon theme not yet published.

- **SafeW Transaction Export**: No tool planned to convert SafeW history to Koinly-compatible format; users must manually enter token data.

- **EIP-27 Voting**: Indicated as "the only vote" with block ~777,217 activation, but formal voting mechanism/timeline not detailed in chat.

- **Node Runner Financial Incentives**: Future benefits hinted (oracle bots, Ergodex services) but not formalized; roadmap TBD.

- **Multi-Address NFT Issuance**: Technical feasibility discussed but no final design or smart contract example provided.