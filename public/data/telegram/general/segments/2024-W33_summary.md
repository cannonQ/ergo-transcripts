# Ergo General Chat Summary — 2024-W33
**Period:** 2024-08-12 to 2024-08-18  
**Messages Reviewed:** 305  
**Key Participants:** kushti, Armeanio, qx(), Glasgow, mgPai, Bruno, HQΣr, Aberg

---

## Key Topics Discussed

- **Rosen Bridge Ethereum ↔ Ergo Bridge Testing**: First end-to-end testnet bridge from Ethereum to Ergo completed successfully. Multiple commitment and trigger transactions documented with explorer links. Armeanio noted round-robin endpoint testing and mentioned Cardano ↔ Ethereum bridge as potential next target [@Armeanio, msg#508441-508446].

- **Bridge Asset Standards & USDC Freezing**: Discussion of why Circle's USDC requires a freeze function incompatible with UTXO chains like Ergo and Cardano. Community consensus that permissionless synthetic stablecoins (SigmaUSD, Gluon Gold, Dexy Gold) offer better alignment with UTXO model philosophy [@Glasgow, @bitcoincashautist, msg#508814-508826].

- **Algorithmic Mining Table Size Increase**: Autolykos mining table increased to 4.3 GB. Users with older GPUs (3070, 3060 Ti, 1660 Super) experiencing issues with NBMiner; kushti recommended switching to GMiner or T-Rex [@kushti, @Mike, msg#508931-508939].

- **Sub-Blocks / Microblocks Scalability**: Implementation still work-in-progress. Glasgow provided links to forum discussion and GitHub branch (`weak-blocks`). kushti and others discussing feasibility given contract dependencies on block height and timestamp [@bitcoincashautist, @Glasgow, msg#508700-508704].

- **ErgoHack IX (October 2024)**: Ninth Ergo Hackathon announced for October 2024. Focus on developer tools, dApps, and marketing ideas. Registration opening next week [@Ergo NEWS, msg#508869].

- **ErgExplorer VPS Fund 2024**: Annual funding goal 530 ERG (~$397.50). Reached 85.47% funded (453 ERG) with 25 contributors before final push to 100% [@kushti, msg#509340-509341, @HQΣr, msg#509387].

---

## Important Decisions or Announcements

- [@Armeanio, msg#508444, 2024-08-12]: "First end to end test on testnet" — Rosen Bridge Ethereum-to-Ergo bridge completed testnet validation with full transaction documentation.

- [@kushti, msg#508931, 2024-08-16]: Autolykos table size increased to 4.3 GB; users advised to upgrade mining software (GMiner or T-Rex recommended over NBMiner).

- [@Ergo NEWS, msg#508869, 2024-08-16]: ErgoHack IX scheduled for October 2024; registration opens next week. Community invited to propose projects and marketing initiatives.

- [@qx(), msg#508732, 2024-08-15]: Live roundtable AMA planned with Joe (Armeanio), Dan, mgPai, Marc the Shark, and others to address community questions.

- [@HQΣr, msg#509387, 2024-08-18]: ErgExplorer Annual VPS Fund 2024 fully funded with 30 contributors (530 ERG goal reached).

---

## Technical Q&A Worth Preserving

**Mining & Protocol Changes**

- **Q** (@Mike, msg#508929): "Is there something wrong with ergo mining today? All rigs stopped mining so was wondering if there is something with the network"  
  **A** (@kushti, msg#508931): "There was table size increase, please change mining software if you have issues" → Table size now 4.3 GB; switch to GMiner or T-Rex if NBMiner fails [@kushti, msg#508936].

**Sub-Blocks Implementation**

- **Q** (@bitcoincashautist, msg#508700): "did you guys implement subblocks already?"  
  **A** (@Glasgow, msg#508701): "WIP" with links to forum discussion and GitHub branch `weak-blocks`. Implementation still under development [@Glasgow].

**Cross-Chain Bridge Specifications**

- **Q** (@bitcoincashautist, msg#508795): "hey what does Rosen Bridge bridge? can it bridge a token from one network to a token to another network?"  
  **A** (@HQΣr, msg#508797): "Currently, it does 3 chains: BTC, ergo, Cardano" and has a list of supported assets [@HQΣr, msg#508801].

- **Q** (@bitcoincashautist, msg#508800): "how come nobody's bridged USDC to Cardano?"  
  **A** (@Glasgow, msg#508814): "There's no native USDC, as neither Cardano or Ergo support the freeze function USDC needs, would need to create another standard" [@Glasgow].

**Stablecoin Design Philosophy**

- **Q** (@bitcoincashautist, msg#508822): How do synthetic stables work compared to collateral-backed stables?  
  **A** (@bitcoincashautist, msg#508822): "it essentially decentralizes the backing by delegating it to all the people doing arb trades" — eliminates single-point failure of custodial freezing [@bitcoincashautist].

**Wallet & UTXO Considerations**

- **Q** (@Patato, msg#508622): "how can i get a list of random wallets who hold ergs in amounts between xx to yy?"  
  **A** (@Aco, msg#508624): "try here https://sigmaspace.io/en/rich-list" [@Aco].

- **Q** (@Patato, msg#508628-508631): "wich kind of adresses are ones wich start with 2pxnLshTr... ? is it smart contract adress? better to exclude them from a csv list for airdrop, right?"  
  **A** (@Patato, msg#508632): "i better will exclude them" (implicit: yes, smart contract addresses should be excluded) [@Patato].

---

## Links Shared

- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/11](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/11): Ergo scalability plan discussion including sub-blocks [@Glasgow, msg#508701].

- [https://github.com/ergoplatform/ergo/tree/weak-blocks](https://github.com/ergoplatform/ergo/tree/weak-blocks): Work-in-progress branch for weak-blocks/microblocks implementation [@Glasgow, msg#508701].

- [https://sigmaspace.io/en/rich-list](https://sigmaspace.io/en/rich-list): Rich list tool for viewing Ergo wallet holdings by amount [@Aco, msg#508624].

- [https://www.gluon.gold/](https://www.gluon.gold/): Gluon Gold-pegged stablecoin soft launch [@Glasgow, msg#508825].

- [https://dexy-test.dexygold.com/](https://dexy-test.dexygold.com/): Dexy Gold testnet (gold-pegged synthetic stablecoin) [@Glasgow, msg#508825].

- [https://docs.ergoplatform.com/uses/sidechains/sigma-chains/#sidechain-constructions](https://docs.ergoplatform.com/uses/sidechains/sigma-chains/#sidechain-constructions): Ergo sidechain construction documentation [@Glasgow, msg#508880].

- [https://explorer.ergoplatform.com/en/transactions/...](https://explorer.ergoplatform.com/en/transactions/): Multiple commitment and event transactions from Rosen Bridge Ethereum testnet (10 transaction hashes documented in msg#508441).

- [https://www.crypto51.app/](https://www.crypto51.app/): Cost-to-reorg calculator for PoW chains [@bitcoincashautist, msg#508865].

- [https://docs.google.com/document/d/1PF1XD6qXAdFKidPxuvJR5wuiECume2xHXJ2frZjAAU0/edit?usp=sharing](https://docs.google.com/document/d/1PF1XD6qXAdFKidPxuvJR5wuiECume2xHXJ2frZjAAU0/edit?usp=sharing): YouTube content creator outreach list for Ergo community engagement [@Jack Σ, msg#508498].

---

## Unresolved Questions

- **USDC on UTXO Chains**: Circle requires freeze function; no consensus solution yet for bringing USDC natively to Ergo/Cardano. Workaround is synthetic stables (Gluon Gold, Dexy Gold on testnet) [@Glasgow, bitcoincashautist, msg#508814-508825].

- **Rosen Bridge Multi-Chain Expansion**: EVM testings ongoing; Solana planned. Status of BCH and Doge bridges unclear — noted as "might be next after Bitcoin Runes" but no timeline [@HQΣr, msg#508808-508809].

- **Sub-Blocks Deployment**: Scalability improvements (microblocks, faster blocks) discussed but actual deployment depends on contract ecosystem compatibility review. Forum discussion ongoing [@kushti, Glasgow, msg#508700-508704].

- **Mining Software Compatibility**: NBMiner appears incompatible with new 4.3 GB table size; GMiner/T-Rex confirmed working. Longer-term mining software landscape unclear [@kushti, Mike, msg#508931-508939].

- **Block Height vs. Timestamp Dependencies**: Multiple dApps and contracts may rely on block height or timestamp; speeding up blocks could break contracts. Full impact analysis flagged as needed [@kushti, msg#508976-508977].