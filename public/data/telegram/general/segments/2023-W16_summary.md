# Ergo General Chat — 2023-W16 Summary

## Key Topics Discussed

- **SigmaFi P2P Lending Protocol**: Peer-to-peer collateralized lending using ERG as collateral and SigmaUSD as borrowed stablecoin. TVL grew from ~31k to 70k+ USD during the week. No liquidation mechanism — lenders receive either repaid SigmaUSD + interest or the ERG collateral, regardless of price movements. Non-interactive, headless, zero oracle feeds.

- **Spectrum Finance Yield Farming**: Public testing completed successfully with minimal issues. Team requesting final round of testing (stake/unstake) before mainnet launch.

- **Rosen Bridge Progress**: Development continuing; public testnet mentioned as "getting there." Chainlink partnership using proof-of-reserve and proxy functions for on-chain warehouse receipts for decentralized trade financing.

- **ChainCash Protocol**: Decentralized monetary system allowing creation of IOU notes backed by various digital assets (ERG, SigmaUSD, DexyGold, wrapped tokens, etc.). Acceptance/rejection of tokens depends on individual participant evaluation of collateral quality.

- **Ergo Explorer Redesign Raffle**: Spectrum Finance fundraising 15k ERG+ goal to develop new UI/design. Discussion of performance issues (search function, addresses with high tx count). Indexed node functionality proposed as potential replacement frontend.

- **Block Speed / Network Optimization Proposals**: kushti outlined potential improvements (sub-blocks, sidechains, layer 2 solutions). Parameters like block height and timestamp dependencies would need reconsideration. Community testnet interest exists; kushti invited interested parties to join optimization research.

- **SigmaUSD Supply Constraints**: Only ~643k SigmaUSD in existence; minting locked. Richi noted upper-side depeg risk as demand grows. Armeanio proposed SigmaGold as experimental playground before potential SigmaUSD v3 update.

- **ERGnomes NFT 420 Special Series**: Three themed 420-special NFTs (Potpillar for average users, dev-focused design, psychedelic degen edition) auctioning on 4/20. Community interest in secondary market for bonds (SigmaFi loan positions as tradeable NFTs).

- **ErgoPad Ecosystem Updates**: Listing on 7SeasExchange (KYC-free CEX). CoinGecko native asset listing campaign — community organizing coordinated tweets/retweets to pressure CoinGecko for Ergo asset integration and price tracking.

- **GPU Mining Discussion**: Minor mention of British miners damaging GPUs; GPU vs CPU mining ongoing.

- **Node Infrastructure**: ogre project (TypeScript Ergo node client targeting web/browser & mobile platforms for smart devices) introduced. Aberg interested in web platform implementation perspective.

---

## Important Decisions or Announcements

- [@Gazza, msg#382803, 2023-04-17]: Spectrum yield farming public test completed successfully; final testing push requested before mainnet.

- [@Unknown, msg#382805, 2023-04-17]: ErgoPad listing on 7SeasExchange live (EPOS/USDT pair).

- [@Unknown, msg#382824, 2023-04-17]: ErgoPOS rebranding to TabbyPOS with tabby cat logo (token $EPOS unchanged).

- [@Gazza, msg#382991, 2023-04-18]: Spectrum Finance raffle for Ergo Explorer redesign; 15k+ ERG fundraising goal announced.

- [@qx(), msg#382931, 2023-04-17]: "Sigma Update: Paideia Episode" video in production with Luivatra discussing AVL tree implementation.

- [@Armeanio, msg#383800, 2023-04-22]: SigmaGold potentially launching before SigmaUSD v3 update; used as experimental playground.

- [@Gazza, msg#383498, 2023-04-21]: Spectrum airdrop distributed to wallets (details TBD).

- [@Unknown, msg#383175, msg#383178, 2023-04-19]: CoinGecko native asset listing campaign initiated; community organizing coordinated social media pressure.

- [@Pulsarz, msg#383760, 2023-04-22]: SigmaFi loan alerts moved to dedicated Telegram channel (t.me/SigmaFiAlert).

---

## Technical Q&A Worth Preserving

**Q** (@Anonrlx, msg#383327): "What is the real use case? Why would I need to borrow 200 SigUSD if I'm ready to put the same value 130 ERG as collateral?"

**A** (@qx(), msg#383330-335): Borrower can use SigmaUSD to buy more ERG immediately. When ERG appreciates in 12 months, sell portion to repay SigmaUSD and keep remaining ERG (leverage play). Alternative: non-degen use case — borrow long-term for real expenses (e.g., car purchase) while keeping ERG holdings intact, accumulate ERG through income, repay after term.

---

**Q** (@Anonrlx, msg#383342): "What happens if you liquidate a staking key collateral? Do you lose your ErgoPad?"

**A** (@qx(), msg#383344; @Unknown, msg#383346-347): Someone else claims the staking with that key. If liquidated, the user loses the key and associated staking rewards, but can retrieve the key if they repay the loan before liquidation.

---

**Q** (@Luivatra, msg#383269-272): "I don't understand how collateral is 108% — is it compared to the loan request + interest?"

**A** (@Unknown, msg#373273-274): Interest is deducted from collateral at loan creation time. Collateral ratio compares (total collateral - interest) to (loan amount + interest).

---

**Q** (@gg, msg#383422): "How's the collateral ratio calculated for SigmaFi?"

**A** (@qx(), msg#383424, 383430): Interest is factored into collateral calculation. Deduction from collateral input occurs upfront to account for potential liquidation scenarios.

---

**Q** (@TMR.ΣRG, msg#384113-127): "Does SigmaFi have liquidation if collateral value falls below a certain point?"

**A** (@qx(), msg#384121-122): No liquidation. SigmaFi is headless and relies on zero oracle feeds. Lender receives either repaid SigmaUSD + full interest or ERG collateral, regardless of ERG price movement.

---

**Q** (@Anonrlx, msg#383345): "What if I use a vesting key as collateral? Do I lose my pad for instance?"

**A** (@Unknown, msg#383347): If you use vesting key as collateral and don't repay the loan, you risk losing it during liquidation.

---

**Q** (@Pulsarz, msg#383106-107): "Why is the [Ergo Explorer] search function so slow? Checking if something is an address is easy and doesn't need to scan the db."

**A** (@Unknown, msg#383104, 383108): Bookmark https://explorer.ergoplatform.com/addresses/ and append address to end for instant lookup. Search optimization should not be difficult; implied opportunity for contribution.

---

**Q** (@Marty ErgoPad, msg#383573-574): "Is it possible to recover mnemonics if you have full node access, API key, and wallet password?"

**A** (@Aberg, msg#383576, 383580): No — the node stores only the private key, not the seed phrase. You can obtain the private key for smart contract work, but not the original seed phrase.

---

**Q** (@gg, msg#383847): "Are P2P loans like SigmaFi not possible on the account model? Is that a myth or real?"

**A** (@qx(), msg#383848-849): Real — kushti stated it in an interview. Not possible in truly on-chain, headless form as Ergo implements it. [@qx() provided 5-min video link at 1696s mark: https://youtu.be/M1u7EiketqM?t=1696]

---

**Q** (@Ole Isler, msg#383773): "How can I save SigmaRSV from Yoroi wallet to Nautilus?"

**A** (@Ole Isler, msg#383776): Process confirmed working after attempting transfer.

---

**Q** (@Goodbyeuphoria, msg#383351): "Is this how the rich avoid capital gains — like using Tesla as collateral for loans?"

**A** (@qx(), msg#383367): Borrowed money is not treated as income by IRS. However (@theta_decay, msg#383368): unpaid loan balance is treated as taxable income if forgiven.

---

## Links Shared

- [https://spectrumlabs.medium.com/yield-farming-public-test-a-guide-for-participants-8c5a01ac69d4]: Spectrum Finance yield farming public test guide & participants info.

- [https://twitter.com/RosenBridge_erg/status/1647083850932326400]: Rosen Bridge update announcement.

- [https://ergoraffle.com/raffle/show/04fa9591862e1ac5e297fe529af1474590c61ff54f93f77c92501968243f96cb]: Spectrum Finance Ergo Explorer redesign raffle.

- [https://github.com/ross-weir/ogre]: TypeScript Ergo node client library (browser/web/Deno/native) targeting smart device platforms.

- [https://sigmafi.gitbook.io/sigmafi-docs/]: SigmaFi protocol documentation.

- [https://sigmafi.app]: SigmaFi peer-to-peer lending interface.

- [https://www.duckpools.io/]: DuckPools lending pool platform (full release launching soon).

- [https://skyharbor.io]: SkyHarbor NFT marketplace mentioned.

- [https://www.youtube.com/watch?v=NxIlIpO6ZVI]: ChainCash explanatory video by kushti.

- [https://docs.ergoplatform.com/uses/chaincash/]: ChainCash protocol documentation.

- [https://youtu.be/M1u7EiketqM?t=1696]: kushti interview segment on UTXO vs account model (5-min clip on P2P lending).

- [https://twitter.com/OptimFi]: Optim Finance (Cardano equivalent to SigmaFi), referenced for comparison.

- [https://t.me/addlist/ehmdM5lX5oA1OTZk]: Aberg's shared Ergo chats folder (8 community chats: General, News, Dev, Trading, Baseless, Support, Agora, Marketing).

- [https://ergocube-com.translate.goog/...]: ErgoCube translated to multiple languages via Google Translate.

- [https://youtu.be/bZbjJUXuu98]: 2ndTLMining's overview video explaining ErgoPad.

---

## Unresolved Questions

- **Ergo Explorer Performance**: Slow search and address lookup with high tx counts remains ongoing issue. Indexed node functionality proposed but no committed timeline. Spectrum raffle conditional on funding.

- **SigmaUSD Supply Growth**: With only 643k SigmaUSD in circulation and minting locked, unclear how demand will be satisfied. Richi flagged upper-side depeg risk; no resolution on v3 timeline or SigmaGold relationship.

- **SigmaFi Liquidation Mechanism**: Multiple participants flagged absence of automatic liquidation as a risk for lenders. No protocol changes announced; acknowledged as potential future improvement.

- **Block Speed Optimization**: kushti opened discussion on sub-blocks, sidechains, layer 2 solutions, but no consensus or committed direction. Community testnet proposed; needs champion/organizer.

- **ERG Exchange Listings**: Kraken listing effort resulted in rejection. CoinGecko native asset support campaign ongoing but response unclear.

- **Ledger App Stable Release**: Discussion of Ergo Ledger app availability (stable but not in normal mode). No timeline given for official mainnet release.

- **ChainCash Specifics**: Token acceptance/rejection criteria for IOU notes defined as participant-driven, but no reference implementation or oracle integration pattern clarified.

- **Secondary Market for SigmaFi Bonds**: Vinicius proposed trading SigmaFi loan positions as NFTs (synthetic puts/calls). Acknowledged as possible but not yet implemented.

- **SigmaFi UI Improvements**: ErgoMonitor tracking and remaining-time calculators suggested but no dev commitment.

---