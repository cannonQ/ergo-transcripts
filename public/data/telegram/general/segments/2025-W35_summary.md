# Ergo General Chat — Week 2025-W35
## Summary

This week focused on DEX improvements, DeFi protocol design, ecosystem development initiatives, and community event planning, with discussion of technical architecture decisions and foundation resource management.

---

## Key Topics Discussed

- **Multi-swap transactions in single TX**: Discussion of whether Spectrum DEX pools can support multiple swaps in one transaction for arbitrage (e.g., ERG → SigmaUSD → SigmaRSV → ERG). Current pool contract design expects the first output to be the successor pool box, creating technical constraints. [@Pgr456, @Pulsarz, @HQΣr, msg#572591-572600, 2025-08-25]

- **Pool contract redesign (n2t vs t2t)**: Exploration of separate pool types—regular AMM pools with DAO + LP provider fees, and royalty pools with additional project fees (inspired by Splash on Cardano). Discussion of fee handling for token-to-token vs native-to-token swaps. [@Pgr456, msg#572577-572586, 2025-08-25]

- **Sub-blocks and sidechain development**: kushti flagged the need for developer insights as sub-blocks and sidechains are coming. Multiple contributors noted they are busy but willing to contribute to the Ergo Book once current projects close. [@kushti, @Armeanio, @cannon_q, msg#572798, #572815-820, 2025-08-28]

- **Ergo Book project**: Proposed title: *"Ergo Book: a handbook on separating money from state"*. Contributors are overcommitted; Russian translation offered by @Dmitriy B. [@kushti, msg#572816, 2025-08-28]

- **Community calls replacing Ergo AMA**: kushti proposed replacing the weekly "Ergo AMA" format with community calls, noting the AMA framing is "quite misleading." [@kushti, msg#572801-802, 2025-08-28]

- **Separation of money from state and free banking**: kushti emphasized returning to first principles: separation of money from state and free banking. Private stablecoins by corporations are just the beginning. VC-backed chains are losing credibility with retail; Ergo's decentralized narrative backed by technology is a differentiator. [@kushti, msg#572722-726, 2025-08-27]

- **Ergo meetup in Colorado (October 2026)**: Announced for Colorado Springs at a local non-profit venue. Chris Ray offered to prepare Korean BBQ, Shabu Shabu, and sushi for Saturday dinner. Preliminary headcount needed first week of October. [@Armeanio, @Chris Ray, msg#572957-969, 2025-08-30]

- **Ergo Foundation Bitcoin holdings**: Discussion of whether EF should diversify ~0.334 BTC (from 1.334264 total) into SigmaUSD at near-ATH prices. Response: BTC reserves are used for large operational expenses (MM bills, ledger audits) to avoid large ERG dumps. [@yea.ok, @Glasgow, msg#572873-884, 2025-08-29]

- **dApp security and trust framework**: Josemi posted forum proposal on Sigmaverse security improvements, including KYC/KYA popup standards. Feedback flagged that KYA popups can be falsified. [@Josemi, @Chris Ray, msg#572609-616, 2025-08-25]

- **Digital currency settlement infrastructure**: kushti highlighted ECB's 2023 Digital Euro prototype report, noting UTXO is used in their NEXT settlement engine. Observation: UTXO is the best foundation for programmable money. [@kushti, msg#573014, 2025-08-31]

---

## Important Decisions or Announcements

- [@kushti, msg#572801-802, 2025-08-28]: Proposal to replace weekly "Ergo AMA" with community calls; current format is considered misleading.

- [@cannon_q, msg#572606-607, 2025-08-25]: Created new channel/TG group for Spectrum DEX improvements discussion and GitHub issue tracking.

- [@Armeanio, msg#572961, 2025-08-30]: Colorado meetup venue confirmed as local non-profit with kitchen facilities available for Saturday dinner preparation.

- [@kushti, msg#572730, 2025-08-27]: Minotaur wallet updates announced: QR code padding removal, Lykos icon addition, paste button instead of scan, export/import in progress.

- [@Josemi, msg#572609, 2025-08-25]: Posted Sigmaverse dApp security proposal on forum requesting community feedback.

- [@HQΣr, msg#573053, 2025-08-31]: "Ergo Hunt" game for paper wallets announced at wallets.mewfinance.com (in development).

---

## Technical Q&A Worth Preserving

- **Q** (@Pulsarz): How can we support arbitrage in a single transaction, e.g., ERG → SigmaUSD → SigmaRSV → ERG? Right now that requires 3 separate TXs, making simultaneous execution difficult. [msg#572599, 2025-08-25]  
  **A** (@kushti): "I guess just support for custom output index is needed" [msg#572643, 2025-08-26]

- **Q** (@Pulsarz): Can we do multiple swaps in one TX? [@Pgr456's pool contract expects first output to be the successor pool box to verify values match. [msg#572591, 2025-08-25]  
  **A** (@HQΣr): "Multiple swaps in one tx are doable" [msg#572595, 2025-08-25]. (@Pgr456 suggested) "could change it by searching for the successor by pool NFT and only allowing one pool to be used once per tx" [msg#572594, 2025-08-25]

- **Q** (@DiscoverErgo): How does demurrage affect rsERG? [msg#572983, 2025-08-30]  
  **A** (@cannon_q): "Shouldn't, wallet is refreshed with transactions" [msg#572985, 2025-08-30]

- **Q** (@gravemind): Is RPi5 a good option for running a full Ergo node? [msg#572901, 2025-08-29]  
  **A** (@TheStophe): "3b+ can handle it with an $80 500 Gb external ssd you can get off amazon" [msg#572914, 2025-08-29]. Provided GitHub link: https://github.com/jkrek17/Ergo and noted jkrek17's implementation is "a really great option" [msg#572915-916, 2025-08-29]

- **Q** (@DiscoverErgo): Best DEX on Cardano for buying rsERG (liquidity)? [msg#572943, 2025-08-30]  
  **A** (@HQΣr): "Splash" [msg#572946, 2025-08-30]

- **Q** (@Patato): Why was I banned from Ergo Development channel? [msg#572839, 2025-08-28]  
  **A** (@kushti): "Weird. Looks like tg level ban... I dont have admin or mod rights in Ergo Development, cant check chat logs" [msg#572840-844, 2025-08-28]. (@Affable Villain noted) "Reported as a 'false positive' to telegram" — likely triggered by ChatGPT-generated text with unusual symbols [msg#572851-854, 2025-08-28]

---

## Links Shared

- [https://www.economicpolicyjournal.com/2012/12/50-reasons-for-separation-of-money-state.html]: Economic policy article on money-state separation [@kushti, msg#572614, 2025-08-25]

- [https://www.ergoforum.org/t/sigmaverse-update/5222]: Sigmaverse dApp security proposal by Josemi [@Josemi, msg#572609, 2025-08-25]

- [https://youtube.com/@ergocointoday]: New YouTube channel dedicated to Ergo (@kushti) [@kushti, msg#572659, 2025-08-26]

- [https://github.com/ccgarant/ergo-full-node-raspi/tree/main/resources]: Ergo full node Raspberry Pi setup guide [@cannon_q, msg#572911, 2025-08-29]

- [https://github.com/jkrek17/Ergo]: Alternative Ergo full node Raspberry Pi implementation [@TheStophe, msg#572915, 2025-08-29]

- [https://www.ecb.europa.eu/pub/pdf/other/ecb.prototype_summary20230526~71d0b26d55.en.pdf]: ECB Digital Euro prototype report (2023) showing UTXO usage in settlement engine [@kushti, msg#573014, 2025-08-31]

- [https://x.com/marklg/status/1960899125794222136?t=CDXBo7x8J4gY4PeGz0eIDg&s=19]: Interest in Ergo chat with Kraken's head of consumer business [@Affable Villain, msg#572782, 2025-08-27]

- [wallets.mewfinance.com]: Ergo Hunt paper wallet game in development [@HQΣr, msg#573053, 2025-08-31]

---

## Unresolved Questions

- **Sub-block and sidechain technical specification**: kushti flagged need for developer insights but specific architecture decisions remain TBD pending completion of current projects. [@kushti, msg#572798, 2025-08-28]

- **Ergo Book publication timeline and contributor assignments**: Multiple contributors noted overcommitment; specific chapter assignments and deadlines not finalized. Russian translation support offered but coordination pending. [@kushti, @cannon_q, @Armeanio, msg#572815-820, 2025-08-28]

- **Pool contract refactoring scope**: Whether to implement custom output index support, NFT-based pool successor search, and sub-block support simultaneously or iteratively. Consensus that migration requires major update, not incremental changes. [@Pgr456, @Pulsarz, msg#572597-600, 2025-08-25]

- **Kraken partnership status**: Interest in Ergo AMA with Kraken's Mark Glasgow flagged but no confirmation of timing or scope. [@Affable Villain, msg#572782, 2025-08-27]

- **Ergo Hunt game completion**: HQ3rr noted paper wallet game in development at MewFinance but no release date announced. [@HQΣr, msg#573053, 2025-08-31]