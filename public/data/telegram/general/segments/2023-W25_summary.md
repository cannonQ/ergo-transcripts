---
title: "Ergo General Chat — 2023-W25"
date_start: "2023-06-19"
date_end: "2023-06-25"
type: telegram_weekly
channel: general
week: "2023-W25"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W25 Summary

## Key Topics Discussed

- **Layer 2 Solutions for Ergo**: Discussion on whether Ergo can support L2 constructions like Lightning Network for Bitcoin. kushti confirmed multiple options are possible: Hydra, state channels, CoinPool, Ark, plasma, rollups, and sidechains. Spectrum is working on an interesting sidechain with a whitepaper forthcoming. [@kushti, msg#399238, 2023-06-19]

- **Storage Rent (Demurrage) Activation**: Activation scheduled for block 1,051,200 (July 20th, 2023). After this, miners can charge storage rent or spend boxes fully if value doesn't cover rent. qx() created a spreadsheet tracking addresses that will be hit with storage rent but lack sufficient ERG to cover it. [@qx(), msg#399591, 2023-06-20]

- **Mempool Protection and Spam Attacks**: kushti reviewed recent Ethereum research on resource exhaustion attacks (ConditionalExhaust, MemPurge, GhostTX) and confirmed Ergo already has mempool protection from heavy transactions from single peers. Discussion of fee markets and spam protection mechanisms in version 4.0.44. [@kushti, msg#399249, 2023-06-19]

- **Demurrage Marketing**: dayumbbbb conducted extensive grassroots advocacy at the Monero Konferenco, positioning Ergo's demurrage as equivalent to Monero's tail emission—both achieving 0% inflation. Argument that demurrage becomes a feature/monetary policy framing rather than a "tax burden" (storage rent terminology). [@dayumbbbb, msg#399466, msg#400114-400128, 2023-06-20 to 2023-06-23]

- **SigmaFi Sigma Bonds Mechanics**: Detailed Q&A on collateral ratio calculations, interest inclusion, and bond structure. Key clarification: collateral percentage = `(collateral / (loan + interest)) * 100`. Discussion of potential auto-liquidation, NFT memorabilia, and bond messages for project funding. [@qx(), @Me, msg#400251-400252, 2023-06-23]

- **Ergo Developer Tooling**: kushti announced Edge (AppKit simplification library) and ergo-play-boilerplate (Scala Play framework boilerplate) repos. Edge reported to improve development efficiency ~4x (crowdfund project built in ~80 hours). Seeking community contributions for maintenance and improvement. [@kushti, msg#400508, 2023-06-25]

- **Block Time & Timestamp Dependencies**: Discussion on speeding up block times: faster blocks affect contracts relying on block height vs. timestamp. Some contracts tied to block delay would need revision. Proposal to run 6.0 testnet with parameter tweaking to study effects scientifically. [@kushti, 2023-06-20]

- **Quantum Computing & PoW Security**: kushti clarified that Ergo's Autolykos (k-sum problem) remains secure against quantum adversaries despite better asymptotic algorithms—quantum computers would still face exponential complexity. Parameters are large enough to resist quantum attacks. [@kushti, msg#399532-399533, 2023-06-20]

- **SigmaUSD/SigmaRSV Integration**: Discussion of SigmaFi bond calculator accuracy, pricing inconsistencies on sigma.fi interface, and collateral ratio edge cases. Clarification that interest must be included in collateral calculations for default scenarios. [@Me, @qx(), 2023-06-23]

- **Ergoversary Video Production & Summit Prep**: kushti completed 48 minutes of Ergoversary summit video content and returned to active development. Planning for June 30th community chat ahead of summit. [@kushti, msg#400133, 2023-06-23]

## Important Decisions or Announcements

- [@kushti, msg#399238, 2023-06-19]: Confirmed L2 solutions research ongoing; Spectrum sidechain whitepaper "soon"
- [@Unknown, msg#399340, 2023-06-19]: Ergoversary promotion campaign live—tweet #ergoversary for prize draw
- [@kushti, msg#399549-399550, 2023-06-20]: Proposed big community chat June 30th ahead of Ergo Summit (July 1st)
- [@CW, msg#399808, 2023-06-22]: Weekly AMA/update livestream scheduled Thursday, June 22, 1 PM UTC
- [@Unknown, msg#399888, 2023-06-22]: Crux Finance project page live on ErgoPad with IDO dates
- [@Unknown, msg#399673, 2023-06-21]: DuckPools ready for private testing; ERG pool contracts, SigUSD pool 1.5 weeks later
- [@Bowen, msg#399864, 2023-06-22]: Successfully withdrew ERG from HotBit exchange to KuCoin via Ergo network (resolved)
- [@soysor, msg#400062, 2023-06-22]: BitDomains actively developed; AVL tree JavaScript implementation for decentralized subdomains
- [@Unknown, msg#400474, 2023-06-25]: Crux Finance roadmap published
- [@Unknown, msg#400412, 2023-06-24]: Ergo manifesto translated into Lao language; translator (Lee) tip address provided

## Technical Q&A Worth Preserving

- **Q** (@Shiv Chauhan, msg#399230): Can Ergo be used as a layer 2 solution like Lightning Network for Bitcoin given its eUTXO design?
  **A** (@kushti, msg#399238): Yes. Multiple L2 options possible: Hydra, state channels, CoinPool, Ark, plasma, rollups. Spectrum developing interesting sidechain (WP incoming).

- **Q** (@Ian Lee, msg#399576): When does block 1,051,200 (storage rent activation) occur?
  **A** (@Unknown, msg#399577): After block 1,051,200 (July 20th, 2023), miners can charge storage rent or spend boxes fully if value insufficient.

- **Q** (@Ian Lee, msg#399579): Is there a way to check wallets about to hit storage rent deadline?
  **A** (@qx(), msg#399584-399591): Use `/ep boxage ANYADDRESS` on ErgoPort bot; comprehensive spreadsheet of addresses with insufficient ERG to cover rent: https://docs.google.com/spreadsheets/d/1v4m-XAh6_uVKA1eTHm-elE0M-pRFikfPj8trQE8mars/

- **Q** (@Me, msg#400194): Are collateral percentage calculations on SigmaFi incorrect at 115%?
  **A** (@qx(), msg#400251-400252): Correct formula: `(collateral / (loan + interest)) * 100`. Interest must be added to loan amount, not collateral. Price fluctuation of ERG affects ratio.

- **Q** (@Me, msg#400209): How much collateral needed for 10 ERG loan at 10% interest?
  **A** (@qx(), msg#400208-400210): 11 ERG collateral to cover 10 ERG loan + 1 ERG interest. Lender must receive interest even in default scenario.

- **Q** (@Me, msg#400383): How does SigmaFi lending appear in wallet? Is it a "key"?
  **A** (@Me, msg#400384): Not specified directly; appears as loan box. Storage rent applies per-box at ~0.14 ERG every 4 years on regular box.

- **Q** (@Glasgow, msg#399384): How does storage rent work with consolidated vs. non-consolidated boxes?
  **A** (@Glasgow, msg#399384-399385): ~0.14 ERG fee every 4 years per box. Withdrawing only 1 coin doesn't consolidate all boxes. Nautilus & mobile wallet have consolidation built-in.

- **Q** (@eπ, msg#399470): Could quantum computing mine GPU-mined crypto? Is it good/bad for Ergo?
  **A** (@kushti, msg#399532-399533): PoW not usually primary concern with quantum. Ergo's k-sum problem remains exponential-complexity even with quantum algorithms. Parameters large enough to resist.

- **Q** (@ChRoNiC, msg#399995): Which wallets support 12-word seed phrases?
  **A** (@kushti, msg#399997): Nautilus, Minotaur, Ergo Wallet, SafeW

- **Q** (@soysor, msg#400085-400088): Can domains be burned in BitDomains?
  **A** (@soysor, msg#400088): No burning mechanism currently; domains owned forever unless traded. Contract preserves NFT during transactions.

## Links Shared

- [https://eprint.iacr.org/2023/956]: Ethereum resource exhaustion attack paper (ConditionalExhaust, MemPurge, GhostTX) [@kushti, msg#399247, 2023-06-19]
- [https://ergcube.com/index.php]: Ergo Foundation treasury tracker (address: 4L1ktFSzm3SH...) [@HQΣr, msg#399282, 2023-06-19]
- [https://docs.google.com/spreadsheets/d/1v4m-XAh6_uVKA1eTHm-elE0M-pRFikfPj8trQE8mars/]: Storage rent impact addresses (insufficient ERG) [@qx(), msg#399591, 2023-06-20]
- [https://t.me/ergoport]: ErgoPort bot for box age lookups `/ep boxage` [@qx(), msg#399584, 2023-06-20]
- [https://docs.ergoplatform.com/mining/rent/]: Storage rent documentation [@Unknown, msg#399577, 2023-06-20]
- [https://edxmarkets.com/]: EDX Markets (third-party crypto exchange) [@Glasgow, msg#399485, 2023-06-20]
- [https://ergo.watch/metrics/cexs]: CEX address tracking [@Unknown, msg#399521, 2023-06-20]
- [https://indigoprotocol.io/]: Indigo Protocol (Cardano synthetic assets, model for potential Ergo equivalent) [@TMR.ΣRG, msg#400419, 2023-06-24]
- [https://hyve.works/]: Hyve freelance job board (reference for Ergo job board idea) [@TMR.ΣRG, msg#400420, 2023-06-24]
- [https://github.com/Ergo-Lend/edge]: Edge AppKit library [@kushti, msg#400508, 2023-06-25]
- [https://github.com/kii-dot/ergo-play-boilerplate]: Ergo Play boilerplate (Scala) [@kushti, msg#400508, 2023-06-25]
- [https://github.com/bitdomains/contracts]: BitDomains contract repo [@soysor, msg#400062, 2023-06-22]
- [https://github.com/ergoplatform/ergo-lib-wasm/tree/main/packages/authenticated-avl-tree]: AVL Tree JavaScript implementation [@soysor, msg#400062, 2023-06-22]
- [https://userpage.fu-berlin.de/~roehrigw/kennedy/english/Interest-and-inflation-free-money.pdf]: Douthwaite paper on inflation-free money systems [@kushti, msg#400007, 2023-06-22]
- [https://royalsocietypublishing.org/doi/full/10.1098/rsos.180817]: 2018 research on Bitcoin dust and UTXO set growth [@kushti, msg#399947, 2023-06-22]
- [https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary]: Peter Todd on Monero tail emission as non-inflationary [@dayumbbbb, msg#400122, 2023-06-23]
- [https://linktr.ee/ergoplatformitalia]: Italian Ergo community linktree [@Luigi🇵🇸, msg#400472, 2023-06-25]
- [https://marosahealingcenter.com]: Ayahuasca retreat accepting SigmaUSD [@Me, msg#400305, 2023-06-23]

## Unresolved Questions

- **Demurrage Terminology**: Community debate whether to standardize on "demurrage" (original Gesellian term, more academically precise) vs. "storage rent" (more accessible to blockchain developers). dayumbbbb advocates for "demurrage" due to superior marketing framing. [@dayumbbbb, @Pulsarz, msg#399973, 2023-06-22]

- **Reddit Community Revitalization**: @Unknown raised concern that lack of Reddit activity makes Ergo appear dormant to casual investors. Proposed grassroots Reddit discussion initiative but no concrete action plan emerged. [@Unknown, msg#399901-399909, 2023-06-22]

- **ErgoNames / AdaHandle Partnership Status**: Aberg noted that AdaHandle partnership announcement was followed by zero deliverables. ErgoNames development ongoing (frontrunning fixes, UI/UX in Figma). Unclear why AdaHandle ceased participation. [@Aberg, msg#399823-399824, 2023-06-22]

- **6.0 Testnet Parameters Study**: kushti proposed community-led 6.0 testnet with tweaked block times and difficulty; seeking passionate volunteers to run testnet, collect scientific observations, and compare to current mainnet. No signup list confirmed. [@kushti, 2023-06-20]

- **SigmaFi Auto-Liquidation & NFT Memorabilia**: @Me requested auto-liquidation upon bond term expiry and NFT receipts for bonds. Raised concern that NFTs could create wallet dependency risk if user loses access. No implementation timeline given. [@Me, msg#400172-400227, 2023-06-23]

- **Ergo Commune / Ayahuasca Retreat Economic Model**: Humorous but substantive discussion of building an autonomous community in Amazon using multisig governance; intertwined with serious discussion of psychedelic medicine as mental health treatment. No action items. [@Me, @Unknown, msg#400330-400358, 2023-06-23]

- **Oracle Pool v2 & Dexy Gold**: Dan mentioned "running for Dexy Gold" with GORT rewards; mentioned building out native Ergo oracles with capital from token sale. Specifics on timeline/deployment unclear. [@Dan Friedman, 2023-06-20]