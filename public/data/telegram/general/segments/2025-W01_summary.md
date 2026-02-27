# Ergo General Chat — 2025-W01 Summary

## Key Topics Discussed

- **Block Reward Emission Reduction Schedule**: Community tracking the scheduled reductions from 21 ERG → 18 ERG → 15 ERG → 12 ERG → 9 ERG → 6 ERG over five reductions in 2025. First reduction to 18 ERG at block 1,432,800 (~3.7 days from Jan 1) ([msg#537397](https://t.me/c/msg#537397)).

- **Storage Rent (Demurrage) Activation**: Discussion of storage rent mechanics becoming increasingly relevant as emissions decline. Sigmanauts Mining Pool distributing storage rent tokens (PHP meme token) to miners based on average hashrate participation ([msg#537006](https://t.me/c/msg#537006), [msg#537353](https://t.me/c/msg#537353)).

- **Sub-blocks EIP Development**: kushti actively working on sub-blocks EIP for improved P2P network performance, inspired by Prism, parallel PoW, and Tailstorm designs ([msg#536972](https://t.me/c/msg#536972), [msg#537663](https://t.me/c/msg#537663), [msg#537989](https://t.me/c/msg#537989)).

- **2025 Protocol Roadmap**: kushti outlined planned ecosystem expansions: most performant real P2P network using sub-blocks, additional stablecoins (Gluon/Dexy/Djed gold/lithium/silver/USD variants), secure cross-chain bridges, peer-to-peer DEX for fiat/BTC, decentralized PoW mining via Lithos, off-chain stablecoin payment layers, and p2p digital banking on Ergo and cross-chain assets ([msg#537596](https://t.me/c/msg#537596)).

- **MewFinance Ecosystem Expansion**: Multiple new features in development — buy/sell offers interface, MewMart escrow capabilities, "MewBoxes" (smart contract asset organization without address proliferation), and potential support for Rosen Bridge integration ([msg#537688](https://t.me/c/msg#537688), [msg#537690](https://t.me/c/msg#537690), [msg#537716](https://t.me/c/msg#537716)).

- **Emission Reduction Watch Party**: Community planning social event around January 4th emission reduction milestone, with Chris Ray organizing Twitter Spaces event starting 1pm UTC with WalrusDAO and other community participants ([msg#536984](https://t.me/c/msg#536984), [msg#536993](https://t.me/c/msg#536993), [msg#537001](https://t.me/c/msg#537001)).

- **Mining Pool Education**: Discussion of need for mining education, with TMR.erg offering to design formal mining course. Sigmanauts pool focus on slow-and-steady growth with roadmap presented to Ergo Foundation for funding ([msg#537846](https://t.me/c/msg#537846), [msg#537849](https://t.me/c/msg#537849), [msg#537864](https://t.me/c/msg#537864)).

- **Testnet 6.0 Configuration Testing**: kushti seeking passionate community members to spin up testnet nodes, tweak block time/difficulty parameters, and conduct scientific observations comparing configurations ([msg#537498](https://t.me/c/msg#537498) context, [msg#537663](https://t.me/c/msg#537663) context).

- **Rosen Bridge Integration & ErgRX Concept**: Chris Ray proposing "ErgRX" — a trusted bridging service utilizing Rosen Bridge for faster cross-chain swaps compared to SimpleSwap, focusing on atomic swap realization across chains ([msg#537721](https://t.me/c/msg#537721), [msg#537723](https://t.me/c/msg#537723)).

- **Wallet Consolidation & Storage Rent Clock**: Explanation that box consolidation via dApps restarts storage rent timer; users consolidating scattered boxes into single box resets demurrage clock ([msg#537832](https://t.me/c/msg#537832), [msg#537833](https://t.me/c/msg#537833)).

- **Keystone Hardware Wallet Status**: Asked when Keystone would be ready; timeline indicated as "depends on funding" with accelerated completion possible via MewFinance purchases ([msg#537586](https://t.me/c/msg#537586), [msg#537590](https://t.me/c/msg#537590)).

## Important Decisions or Announcements

- [@kushti, msg#537241, 2024-12-31]: Affirmed plan for emission reduction watch parties every three months is a good idea.

- [@kushti, msg#537334, 2024-12-31]: Posted philosophical New Year message emphasizing freedom, decentralization, and individual responsibility in challenging coercive systems.

- [@cannon_q, msg#537397, 2025-01-01]: Announced official block reward reduction schedule: 18→15→12→9→6 ERG reductions across 365 days of 2025.

- [@HQΣr, msg#537011, 2024-12-30]: Announced PHP (meme token) relaunch by Sigmanauts Mining Pool with 1B supply claimed via storage rent (80% to LP, 15% to mining pool bonus).

- [@kushti, msg#537596, 2025-01-02]: Outlined 2025 protocol and ecosystem priorities including sub-blocks, new stablecoins, secure bridges, p2p DEX, Lithos mining, and p2p digital banking.

- [@Andy L, msg#537461, 2025-01-01]: Weekly Update and AMA returning January 2 at 14 UTC ([YouTube link provided](https://youtube.com/live/Kvi5lIOrO00)).

- [@Chris Ray, msg#537716, 2025-01-02]: Called for developers interested in Rosen Bridge integration to join "HackX" hackathon; team recruitment ongoing via Ergo Discord #i-need-a-team.

- [@cannon_q, msg#537859, 2025-01-03]: Announced new website for PHP token: demurrage.fun.

- [@kushti, msg#538166, 2025-01-05]: Announced emission reduction celebration starting Friday (Jan 10) or Thursday (Jan 9) (timing confirmed by qx() for Friday).

## Technical Q&A Worth Preserving

- **Q** (@ThatOtherFella, msg#537560): Is it safe to change hoprounds in config file while an active mix is running?
  **A** (@cannon_q, msg#537564): Yes, that is fine.

- **Q** (@ThatOtherFella, msg#537561): What is a good amount to set for hops? 5, 10, 20?
  **A** (@Patato, msg#537572): Hops are applied after all mix iterations complete. Restart mixer after config change. Preference-dependent; can randomize per withdrawal. Note: one user experienced bug where last mix ignored hop config.

- **Q** (@ThatOtherFella, msg#537576): How can I confirm hops worked? Check on explorer?
  **A** (@ThatOtherFella, msg#537577 self-answer): Shows under active mixes.

- **Q** (@vidicmu, msg#537945): There are bots that front-run DEX trades; any idea how to beat them?
  **A** (unresolved — no response in chat segment).

- **Q** (@E M, msg#537820): "Failed to process ergopay tax" error when using Terminus on iOS trying to contribute to MEW fund?
  **A** (@cannon_q, msg#537828): May need to consolidate wallet — click "dApps" → "Box Consolidation" in Terminus to consolidate scattered boxes.

- **Q** (@E M, msg#537826): If I send ERG directly from Terminus to MEW fund address without using interface, will I still receive tokens?
  **A** (@HQΣr, msg#537831): No, you won't.

- **Q** (@Jase, msg#537985): Sent 1 ERG 30 mins ago with 1 confirmation but not appearing in Kucoin. How long does deposit take?
  **A** (@HQΣr, msg#537986): Kucoin requires 10 confirmations (note: @Jase then corrected to 30 confirmations per Kucoin interface, msg#537988).

- **Q** (@qx(), msg#537516): New testnet (painet 2.0) spun up at end of November — any issues with old Watcher instances?
  **A** (@HQΣr, msg#537517): Watchers sometimes break; worth checking periodically. kushti's nodes break more frequently.

- **Q** (@cannon_q, msg#537804): Is MEW restricting token distribution if one wallet accumulates 20%+ of PHP supply?
  **A** (@cannon_q, msg#537804): MEW does not block such actions; considering sending back extras to prevent concentration.

- **Q** (@E M, msg#537825): Can I send 4 ERG directly to MEW fund contract address from Terminus?
  **A** (@E M self-resolution, msg#537830): Box consolidation fixed it (confirming msg#537828 advice worked).

- **Q** (@cafebedouin.org, msg#537315): How is 5.1.1 node sync performance progressing since Christmas?
  **A** (@cafebedouin.org, msg#537319): Slow going since Christmas night (i7-8700, 16GB RAM, old SATA drive likely the bottleneck).

## Links Shared

- [Ergo Platform Twitter Post (Ergoversary)](https://x.com/ergo_platform/status/1874267984350572992): qx() highlighting community pride in achievements ([msg#537384](https://t.me/c/msg#537384)).

- [Rosen Bridge Events](https://app.rosen.tech/events): Chris Ray referencing Ethereum-Cardano, Bitcoin-Cardano, and Ergo hub routes ([msg#538217](https://t.me/c/msg#538217)).

- [Ergo Forum: BISQ-like DEX for Fiat/BTC Trading](https://www.ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078): kushti proposing peer-to-peer on-ramp discussion ([msg#537596](https://t.me/c/msg#537596), [msg#537541](https://t.me/c/msg#537541)).

- [MewFinance Presale](https://fund.mewfinance.com): PHP token LP raise site, progress tracked at 87.29% of 1,000 ERG target ([msg#537006](https://t.me/c/msg#537006), [msg#537836](https://t.me/c/msg#537836)).

- [Weekly Update & AMA YouTube](https://youtube.com/live/Kvi5lIOrO00): January 2, 2025 14 UTC ([msg#537461](https://t.me/c/msg#537461)).

- [Transaction Explorer](https://explorer.ergoplatform.com/en/transactions/cafd4b165ab66be67ee7a68d7996e42ece3c3e58d251ccdfe5f3490d2136e300): Rosen Watcher NFT minting issue transaction ([msg#538116](https://t.me/c/msg#538116)).

- [Ergo Italian Community Art Competition](https://x.com/ErgoplatformIta/status/1875843634253431294): Announced via Luigi🇵🇸, more details on li3re.com ([msg#538064](https://t.me/c/msg#538064)).

- [Sub-blocks Development Tweet](https://vxtwitter.com/chepurnoy/status/1875522222284272112): kushti sharing sub-blocks progress update ([msg#537989](https://t.me/c/msg#537989)).

- [Ergo Platform Twitter (Jan 5)](https://x.com/ergo_platform/status/1876056716351255014): Emission reduction event announcement ([msg#538175](https://t.me/c/msg#538175)).

- [eBay Buyer Fees Discussion](https://www.reddit.com/r/Ebay/comments/1hskil0/rip_ebay_new_buyer_fees/): qx() sharing as argument for MewFinance alternative ([msg#538029](https://t.me/c/msg#538029)).

## Unresolved Questions

- **Cardano Price Action Parity**: kushti questioning why Ergo should follow Cardano price movements — context implied but not explicitly resolved ([msg#537597](https://t.me/c/msg#537597)).

- **Real-World Assets (RWAs)**: kushti suggested RWAs as possible 2025 direction but left open for discussion ([msg#537599](https://t.me/c/msg#537599)).

- **Deep Liquidity Stablecoin Pairs**: Unknown user flagged need for mixer-integrated wallets and deep liquidity on Gluon Gold/SigmaUSD pairs — not assigned to developer ([msg#537607](https://t.me/c/msg#537607)).

- **Front-running Bot Mitigation**: vidicmu raised concern about DEX bots front-running trades; no technical solution provided in chat ([msg#537945](https://t.me/c/msg#537945)).

- **Auction House NFT Minting Bug**: Rosen Watchers reported collection token disappearance during failed minting transaction (cafd4b16...). cannon_q suggests possible batching issue on backend, but root cause unresolved ([msg#538113](https://t.me/c/msg#538113), [msg#538114](https://t.me/c/msg#538114), [msg#538116](https://t.me/c/msg#538116)).

- **HackX Theme & Scope**: Chris Ray proposing hackathon theme around "integration with matured known systems" and atomic swaps — kushti response pending on official theme ([msg#537719](https://t.me/c/msg#537719)).

- **Keystone Hardware Wallet Completion Timeline**: Maximum pain estimate given as "another 3 months" but timeline contingent on funding acceleration ([msg#537598](https://t.me/c/msg#537598)).

- **Emission Reduction Party Exact Time**: Friday (Jan 10) confirmed but specific UTC time TBD as of chat end ([msg#538177](https://t.me/c/msg#538177), [msg#538193](https://t.me/c/msg#538193)).