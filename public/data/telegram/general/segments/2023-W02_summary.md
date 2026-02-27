# Ergo General Chat — 2023-W02 Summary

## Key Topics Discussed

- **Ledger Support in Developer Mode**: Ledger hardware wallet integration for Ergo reached developer mode, allowing users to store and transact ERG with hardware security. Limitation of 20 distinct tokens per single TX noted; no official audit scheduled yet.

- **Emission Reduction ("Mini-Halving")**: Block reward reduced from 45 ERG to 42 ERG per block on 2023-01-09. Aggressive algorithmic supply suppression continues every ~3 months, reaching ~21 ERG/block by mid-2025.

- **Rosen Bridge Development & Partnerships**: Multi-chain bridge infrastructure progressed with Chainlink partnership announced for Oracle Pool v1 and Dexy Gold reward distribution (GORT rewards). Winter Protocol integration for trustless proof-of-reserve warehouse receipts discussed.

- **SigmaUSD (SigmaUSD) Stability & Redemption Issues**: Users reported transaction failures, stuck refunds, and oracle price range rejections. Workaround: TokenJay UI recommended over sigmausd.io; proxy address refund mechanism verified as functional.

- **SigmaFi Lending Protocol (Private Beta)**: Collateralized lending using stake keys as collateral demonstrated. 77 LOVE collateral for 1 ERG loan shown; liquidation requires lender signature; loan deadline stored in smart contract R7 register (BigInt). Public testnet availability pending.

- **GetBlok Mining Pool Shutdown & Analysis**: Pool discontinued after ~1 month. UI/UX issues and hashrate separation (subpool isolation preventing hashrate aggregation) cited as adoption barriers for smaller miners.

- **Presearch Grant for Ergo Marketing**: EF secured $50k in Presearch advertising credits + homepage takeover (~$45k value) + social partnerships. Ergo logo + keyword bidding strategy to launch late January; late Feb/March suggested for homepage placement.

- **Yield Farming UI Release (Spectrum Finance)**: Fully decentralized reward distribution via smart contracts launched. Distinct from ErgoPad staking (token-for-token returns); YF incentivizes liquidity provision with SPF tokens during IDO bootstrap phase.

- **Paideia DAO Governance Platform**: Optimistic governance model proposed for improved DAO scalability; treasury, staking, proposal, and fundraising features in development.

- **NIPoPoW (Non-Interactive Proofs of Proof-of-Work) Implementation**: kushti flagged Feb target for bootstrapping implementation; related to sidechain pegging and trustless relay mechanisms.

- **SigmaUSD Fee Structure (2.25%)**: 0.25% routed to frontend, remainder to reserve benefiting SigRSV holders. kushti advised withdrawing SigRSV when RR > 400% (zero-sum game dynamics).

- **Sigmanauts Transparency & Governance**: Debate over meeting access, membership visibility, and DAO governance structure. Decision to post recorded meeting transcripts to increase accessibility; ErgCube platform suggested for member list publication.

- **Storage Rent Mechanism & Demurrage**: kushti discussed how storage rent (demurrage) will increase effective emission vs. 2025 projections; emphasized over-collateralization insights for LETS (Local Exchange Trading Systems) in Africa/Asia.

## Important Decisions or Announcements

- [@kushti, msg#360384, 2023-01-09]: Emission reduced to 42 ERG per block; first block with new reward confirmed.

- [@Glasgow, msg#360705, 2023-01-09]: Confirmed Sigmanauts meetings transitioning to public transcripts; membership list and transparency improvements planned.

- [@Unknown (seedubya), msg#361105, 2023-01-10]: Presearch grant details: $50k ad credits (250k PRE tokens), homepage takeover (~$45k value), social partnerships. Recommended late Feb/March for takeover timing.

- [@qx(), msg#361396, 2023-01-11]: Twitter Spaces planned for Sigmanauts intro, meet-and-greet, and community discussion (dates TBD).

- [@kushti, msg#361390, 2023-01-11]: AMA days proposed as alternative to community chats; multiple rotating participants per chosen day.

- [@Gazza, msg#361901, 2023-01-12]: Yield Farming UI unveiled (fully decentralized, smart contract-based reward distribution).

- [@Unknown, msg#362059, 2023-01-12]: SPF IDO details announced with new UI and Spectrum Finance hosting; separate blog post with process details promised.

- [@Koutelier, msg#362685, 2023-01-15]: Removed bot/scammer accounts during DDoS-type attack on Telegram; community security reinforced.

## Technical Q&A Worth Preserving

- **Q** (@Ian Lee, msg#360484): Limitation on Ledger Ergo wallet in developer mode — can't send more than 20 different tokens in single TX?
  **A** (@Flying Pig, msg#360486): Correct — max 20 tokens per TX; can hold more in wallet but limited per-TX.

- **Q** (@Ian Lee, msg#360499): Does Ledger create new seed phrase when setting up hardware wallet on Nautilus?
  **A** (@Gazza, msg#360495): No. Ledger seed is your Ergo account. Any compatible wallet uses same seed phrase. Ledger device = security layer; you control the seed.

- **Q** (@Ian Lee, msg#360502): Can existing seed phrase be linked to Ledger?
  **A** (@Flying Pig, msg#360505): Inadvisable. Whole point of Ledger is seed phrase never touches internet-connected device. Create new seed on device itself.

- **Q** (@Unknown, msg#360512): Difference between Ledger multisig (temporary passphrase) and Trezor implementation?
  **A** (@Unknown, msg#360525): Trezor requires typing passphrase each time; Ledger uses secondary PIN. Touch screen vs. PIN trade-offs discussed.

- **Q** (@HelixEvo, msg#361131): Why would someone rent ERG via DuckPools lending instead of buying directly?
  **A** (@TMR.ΣRG, msg#361133): Leverage, avoiding taxable events (borrow stablecoins, spend, repay over time). Also referenced SigmaFi: stake key collateral unlocks liquidity without liquidating staking position.

- **Q** (@Unknown, msg#361202): Does tokenizing staked assets make sense?
  **A** (@Unknown, msg#361203): SigmaFi allows using stake key as collateral for loan; staking yield can exceed borrow rate, enabling leveraged returns without liquidating primary asset.

- **Q** (@gg, msg#361631): Transaction fee impact on confirmation speed?
  **A** (@Unknown, msg#361143-144): Higher fee incentivizes miner prioritization. Block times constant; fee provides competitive advantage when mempool full (e.g., NFT mints).

- **Q** (@Aberg, msg#361146): Are blocks actually full enough for transaction prioritization?
  **A** (@Unknown, msg#361148): During NFT mints in past, yes. Normal conditions: blocks not saturated.

- **Q** (@gg, msg#362103): Difference between yield farming and liquidity provision?
  **A** (@Unknown, msg#362104): Same base activity; farming term popularized when platform tokens incentivized liquidity (bootstrap TVL/governance/users).

- **Q** (@qx(), msg#361496): Could wallet plugin constantly remind users of loan expiration to prevent default?
  **A** (@Capt. Nemo, msg#361534-536): TG bot recommended; bond contract address provided with deadline height stored in R7 register; FleetSDK can decode via `SParse<bigint>(bondBox.additionalRegisters.R7)`.

- **Q** (@Aatrox, msg#362482): UTXO consolidation limitation on Terminus mobile (read-only mode) — ~10 box limit due to QR code size?
  **A** (@Glasgow, msg#362483): Correct; QR code constraint. Nautilus unrestricted. Terminus dApp feature allows consolidation from read-only wallet.

- **Q** (@Aatrox, msg#362490-491): Can Terminus consolidate in read-only mode?
  **A** (@Flying Pig, msg#362495): Yes — click dApps > consolidate. Shows box count and aggregates for single TX.

- **Q** (@Unknown, msg#361795): Sending 16 tokens from own wallet to itself on Ledger Nano X via SAFEW — funds lost risk?
  **A** (@Unknown, msg#361795): Successfully tested; no funds lost. Confirmed viability of ledger + SAFEW workflow.

- **Q** (@Unknown, msg#361798-801): SigmaUSD swap rejected twice; tx shows "error" and "refund pending" but only 1 of 2 conversions confirmed.
  **A** (@CW, msg#361734): Oracle price moved out of range. Recommend TokenJay app instead of sigmausd.io. Refunds process automatically.

- **Q** (@Unknown, msg#361822-835): How to identify proxy address for SigmaUSD refund?
  **A** (@CW, msg#361830-833): Use sigmausd.io/#/refund; proxy = address you sent funds to on TX. Check ErgoExplorer for TX sender/receiver details.

- **Q** (@Unknown, msg#362021): Can Nautilus work with TokenJay (ErgoPay compatibility)?
  **A** (@Unknown, msg#362038-039): SAFEW + Minotaur have ErgoPay support. Nautilus compatibility with TokenJay unclear; dApp integration best approach.

- **Q** (@Unknown, msg#362035): Does Ergo Mobile Wallet allow dApp connections?
  **A** (@Gazza, msg#362036): No. Use SAFEW or Nautilus for web dApp connectors.

## Links Shared

- [https://ergcube.com/index.php?newsid=366](https://ergcube.com/index.php?newsid=366): Ledger Ergo setup guide (developer mode).
- [https://ergo.watch/emission](https://ergo.watch/emission): Emission schedule tracker with block height/date toggle.
- [https://docs.ergoplatform.com/contribute/sigmanauts/](https://docs.ergoplatform.com/contribute/sigmanauts/): Sigmanauts application form & program info.
- [https://my.ergoport.dev/sigcan_form.html](https://my.ergoport.dev/sigcan_form.html): Direct Sigmanauts application portal.
- [https://docs.google.com/document/d/1J6PdyyxoEEqI0nEr64ZZBGU4Lkr8Cr37GqNSs4qHo7Q/edit?usp=sharing](https://docs.google.com/document/d/1J6PdyyxoEEqI0nEr64ZZBGU4Lkr8Cr37GqNSs4qHo7Q/edit): Sigmanauts Mission Statement document.
- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.5](https://github.com/ergoplatform/ergo/releases/tag/v5.0.5): Ergo protocol reference client 5.0.5 release notes.
- [https://medium.com/@koutelier/how-to-install-ergo-on-ledger-device-developer-mode-72de2bcd1055](https://medium.com/@koutelier/how-to-install-ergo-on-ledger-device-developer-mode-72de2bcd1055): Ledger Ergo installation guide (developer mode).
- [https://twitter.com/ERGnomes/status/1612897268847312896](https://twitter.com/ERGnomes/status/1612897268847312896): Bullish catalysts recap (Ledger, Rosen, emission, DeFi).
- [https://ergoplatform.org/en/blog/2021_02_26-sigmausd-released/](https://ergoplatform.org/en/blog/2021_02_26-sigmausd-released/): SigmaUSD release announcement & historical attribution.
- [https://eprint.iacr.org/2021/1069.pdf](https://eprint.iacr.org/2021/1069.pdf): Academic paper on SigmaUSD design (SigRSV/SIGUSD mechanics).
- [https://twitter.com/paideiadao/status/1612538635965833232](https://twitter.com/paideiadao/status/1612538635965833232): Paideia governance platform announcement.
- [https://github.com/ergoplatform/oracle-core/graphs/contributors](https://github.com/ergoplatform/oracle-core/graphs/contributors): Oracle Pool v1 contributor history.
- [https://github.com/Emurgo/age-usd](https://github.com/Emurgo/age-usd): AgeUSD (SigmaUSD) repository.
- [https://twitter.com/ScopeDefi/status/1612825357719044099](https://twitter.com/ScopeDefi/status/1612825357719044099): Scope DeFi poll on future features.
- [https://youtu.be/qDWnrldA95o](https://youtu.be/qDWnrldA95o): Hash It Out episode (Communities, featuring CW, Armeanio, Noah, Sisyphus).
- [https://youtu.be/A4DCTqPISMk](https://youtu.be/A4DCTqPISMk): The Sigma Update video episode.
- [https://anchor.fm/thesigmacast](https://anchor.fm/thesigmacast): The Sigmacast podcast (Hash It Out & Sigma Update archive).
- [https://app.spectrum.fi/ergo/swap](https://app.spectrum.fi/ergo/swap): Spectrum DEX swap interface.
- [https://ido.spectrum.fi/](https://ido.spectrum.fi/): Spectrum Finance IDO platform (Spectrum Protocol Finance token launch).
- [https://youtu.be/a5r4at1Ygo0](https://youtu.be/a5r4at1Ygo0): Weekly Ergo Update & AMA (Thursdays, 1 PM UTC).
- [https://youtu.be/B3iHqYrgLLg](https://youtu.be/B3iHqYrgLLg): CW weekly update video (2023-01-15).
- [https://youtu.be/asxt3bPN8io](https://youtu.be/asxt3bPN8io): Eurodollar system educational video (referenced by kushti).
- [https://www.youtube.com/watch?v=g_aSqVyJ2wE](https://www.youtube.com/watch?v=g_aSqVyJ2wE): Eurodollar system introduction video.
- [https://github.com/ThierryM1212/SigmaO](https://github.com/ThierryM1212/SigmaO): SigmaOptions (option calls on Ergo).
- [https://twitter.com/Grand_Gambit/status/1613159401623375876](https://twitter.com/Grand_Gambit/status/1613159401623375876): Grand Gambit (ergflip revamp) raffle announcement.
- [https://t.me/GrandGambit](https://t.me/GrandGambit): Grand Gambit Telegram group.
- [https://ergoplatform.org/en/get-erg/#Exchanges](https://ergoplatform.org/en/get-erg/#Exchanges): Ergo exchange listing (KuCoin, CoinEx highlighted).
- [https://twitter.com/paideiadao/status/1613312072636301314](https://twitter.com/paideiadao/status/1613312072636301314): Paideia optimistic governance explainer.
- [https://twitter.com/