# Ergo General Chat — Week 2022-W13 Summary
**Period:** 2022-03-28 to 2022-04-03  
**Total Messages:** 1084

---

## Key Topics Discussed

- **Blockchain Stuck State (2022-03-28):** Network stalled at block #716475 for approximately 1+ hour; a multi-output transaction from an airdrop caused block production to halt. Devs were investigating. Issue resolved after investigation.

- **Wallet Issues (Yoroi Degradation):** Yoroi extension repeatedly failing to load, hanging indefinitely, or cycling through load screens. Community unanimously recommended migration to Nautilus wallet as the stable alternative. SafeW also mentioned as functional.

- **Network Congestion & Fee Market:** Large multi-output airdrop transactions (e.g., from token drops) created mempool spam; discussion of spam protection features in reference client v4.0.44+, minimum fee propagation rates, and fee estimation API (not widely used by applications).

- **Emission Reduction (EIP-27):** First full block reward reduction from 75 ERG to 63 ERG occurred on 2022-04-03; next reduction to 51 ERG scheduled ~9 hours after that. Currently on testnet; soft fork activation expected around block height 724,000.

- **NIPoPoWs Introduction:** Ergo blog post and community discussion on Non-Interactive Proofs of Proof-of-Work. Discovered/developed by Andrew Miller, Prof. Kiayias, and Dionysis Zindros; Ergo will be first to implement in practice. Expected delivery this year.

- **ErgoPulse Recording (Dubai):** kushti, Armeanio, and Dan Friedman recorded with Charles Hoskinson in Dubai; video being edited for April 4th release.

- **Rosen Bridge Status:** Cross-chain bridge work ongoing; not rushed due to eUTXO complexity. Mentioned in Cardano context (Frosty & Pete discussing).

- **Oracle Pools v1 & v2:** v1 includes EF members and external contributors; v2 running for Dexy Gold with GORT rewards. Plan to build out native Ergo oracles beyond current two instances and integrate with Palmyra.

- **Palmyra / Winter Protocol Integration:** Dan Friedman discussed on-chain warehouse receipts using Chainlink oracles + IoT devices (cameras, weight sensors, motion sensors) for decentralized trade financing. Not a zero-sum game with other oracle solutions; planning to allocate capital to build Ergo Oracle infrastructure.

- **Exchange Listings:** Two exchanges in integration stage (under NDA). Marketing manager and new community manager hired. General messaging: "coming soon."

- **SigmaUSD/SigRSV Redemption Issues:** Users experiencing failed swaps requiring manual refunds; competing with bots using 0.1 ERG fees; Ergodex alternative often worked better. Minotaur wallet mentioned as option to avoid assembler issues.

- **Mining Pool Issues (2022-03-29):** Memory requirement increase at block height caused nbminer rejection of shares; different miners (T-Rex, etc.) unaffected. Nanopool withdrawals suspended. Community advised switching to other pools.

- **EU Wallet KYC Proposal (2022-03-31):** European Parliament Committee voted for non-custodial wallet KYC requirement; final vote April 2022. kushti noted legal ambiguity regarding anon dev liability.

- **Token Spam (MiGoreng/MewMart):** Airdrop test created unwanted tokens in all wallets; can be burned via https://tokenminter.ergo.ga/burn.html or blocked at wallet level (not yet implemented in all wallets).

---

## Important Decisions or Announcements

- [@kushti, msg#266918, 2022-04-03]: "Another planned emission reduction passed, we are now on 63 ERG per block"

- [@Glasgow, msg#266813-814, 2022-04-03]: First full -12 ERG reduction (previous was only -1.5 ERG due to foundation allocation split); EIP-27 proposal timeline confirmed

- [@Armeanio, msg#265371, 2022-03-28]: Clarified NIPoPoWs as "compression technique" minimizing computational resources

- [@Dan Friedman (via Chris Ray proxy), msg#265406, 2022-03-28]: ErgoLend microlending model replicable in any country; showed Denicio example in Kenya

- [@Armeanio, msg#266266, 2022-04-01]: Weekly AMA with Armeanio (Dan & kushti in Dubai); addressed EU wallet ban, bridge timelines, exchange status

- [@Glasgow, msg#266495, 2022-04-02]: "All exchanges have been approached. 2 in the integration stage."

- [@Glasgow, msg#266279, 2022-04-01]: Recommended smaller mining pools for decentralization

- [@Glasgow, msg#266350, 2022-04-01]: "Integrations ongoing, new site almost done, new community marketing manager too. Soon."

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Can I restore my Yoroi seed phrase in Nautilus?  
  **A** (@HQΣr & @Unknown, msg#265039-044): Yes, seed phrases are universal across all Ergo wallets. Restore with seed phrase in Nautilus and funds will appear.

- **Q** (@ralph Craig): How do I set slippage on Ergodex?  
  **A** (@Unknown, msg#265300-302): Look for a cog icon or advanced options before making the swap. Recommend 3-5% for low-liquidity pools (mentioned 2 for nitro).

- **Q** (@Unknown): How does one compete with bots on SigmaUSD redemption?  
  **A** (@Glasgow, msg#266826): Bots are using 0.1 ERG fee. Tried 0.5 ERG without success; Ergodex pools often work better. Minotaur wallet can avoid assembler issues.

- **Q** (@Unknown): What is the block height for soft fork activation?  
  **A** (@Unknown & @Glasgow, msg#266877, 266952): Target ~724,000 blocks (exact pending test results).

- **Q** (@Unknown): How much will the next emission reduction be?  
  **A** (@Glasgow, msg#266806-807): 12 ERG immediately (63 to 51), with another 3 ERG reduction ~9 hours later.

- **Q** (@Unknown): Is there a way to opt-out of token spam airdrops?  
  **A** (@Glasgow, msg#266891): Can be blocked on wallet level (not yet universal implementation).

- **Q** (@Unknown): How do I burn unwanted tokens?  
  **A** (@Glasgow, msg#266894): Use https://tokenminter.ergo.ga/burn.html

- **Q** (@Unknown): Will Ergo Oracles work for Cardano?  
  **A** (@Glasgow, msg#266781-782): They can already work but inefficiently until Cardano adds data-inputs; other oracle solutions on ADA doing it inefficiently now.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2022-03-29-proof-of-work-energy-and-ergo/]: Article on PoW energy usage and Ergo's efficiency vs Bitcoin

- [https://curiaregiscrypto.medium.com/ergo-why-proof-of-work-47c9b25fae70]: Medium article on why Ergo uses PoW

- [https://www.ergoforum.org/t/dexy-usd-simplest-stablecoin-design/1430]: Dexy Protocol stablecoin design forum post

- [https://jimmyhoffa.github.io/SimpleErgoDocs/]: SimpleDocs layman's course (community resource, separate from DeCo)

- [https://github.com/ergoplatform]: Ergo GitHub (EIP discussion & sidechain constructions)

- [https://twitter.com/ergoplatformorg/status/1508531878642724864]: Announcement (exact content not shown; likely major news)

- [https://ergoplatform.org/en/blog/2022-04-01-nipopows-on-ergo-innovations-in-blockchain/]: NIPoPoWs blog post with original paper references (Andrew Miller, Kiayias, Zindros)

- [https://ergoexplorer.com/en/mempool]: Mempool viewer

- [https://tokenminter.ergo.ga/burn.html]: Token burn utility

- [https://ergo.watch/emission]: Emission schedule tracker

- [https://www.ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778]: Forum post on emission reduction details & EIP-27 retargeting

- [https://hackmd.io/@abchris/S1dHZcwyc]: ErgoHack Oracle Ergo for Cardano documentation (from recent ErgoHack)

- [https://ergopad.io]: ErgoPad staking interface (210+ APY mentioned, 10 ERGOPAD minimum)

- [https://t.me/ergopad_chat]: ErgoPad community Telegram

- [https://t.me/ergo_mining]: Ergo mining community Telegram

- [https://t.me/ergolend]: ErgoLend community Telegram

- [https://t.me/NautilusWallet]: Nautilus wallet official Telegram

- [https://t.me/ergoplatform_ptbr]: Portuguese Ergo community

- [https://t.me/ergoplatform_ES]: Spanish Ergo community

- [https://youtu.be/LVWAfPcy4ys]: Interview (Frosty, likely Rosen Bridge discussion)

- [https://youtu.be/D1KyicQ6l-Q]: ErgoPulse video link (announced for 2022-04-04 12 UTC)

- [https://youtu.be/k9a3SYV6FJA]: Another video release announcement (2022-04-03 12 UTC)

---

## Unresolved Questions

- **Yoroi Long-Term Viability:** Community consensus that Yoroi is broken and unsafe, but no official statement on whether IOHK will fix it or if Ergo Foundation will formally recommend deprecation.

- **TosiDrop Network Readiness:** Community expressed concern that massive multi-output airdrops (like TosiDrop) could halt block production again; Glasgow mentioned 96 KB per TX limit and need for tx chaining, but no formal guidance issued on airdrop size limits.

- **Storage Rent / State Bloat:** Not explicitly discussed this week, but implied as concern in context of large airdrops and mempool congestion.

- **EIP-27 Testnet Timeline:** No hard date given for when testnet testing will conclude or community vote will occur before mainnet activation.

- **Ledger Support:** Mentioned by Armeanio in AMA as "coming soon" but no timeline or technical update provided.

- **Exact Exchange Names & Timeline:** Two exchanges named under NDA; no public statement on which ones or expected launch dates.

- **Chainlink Partnership Scope:** Dan discussed Palmyra integration; unclear if other Ergo dApps will adopt Chainlink or if this is Palmyra-exclusive.

- **Nautilus NFT Viewing:** Feature in progress; some NFTs loading on Nautilus, others not (image loading issues noted 2022-04-01).

---

## Notable Community Sentiment

- **Wallet Migration:** Nearly unanimous community push away from Yoroi. Nautilus adoption accelerating.
- **Bullish on Upcoming Events:** ErgoPulse with Charles Hoskinson (4/4), Ergoversary campaign, and exchange listings generating positive momentum.
- **Patience on Bridges & Oracles:** Community accepting that complexity of eUTXO bridges justifies slower rollout.
- **Regulatory Awareness:** Constructive discussion on EU KYC wallet ban; kushti & Armeanio provided thoughtful responses on decentralization resilience.