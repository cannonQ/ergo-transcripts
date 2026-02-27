# Ergo General Chat — 2021-W35 Summary
## Period: 2021-08-30 to 2021-09-05

---

## Key Topics Discussed

- **KuCoin AMA with Ergo team (2021-08-30)**: Major AMA session held with kushti, Glasgow, and Armeanio covering Ergo's key features (eUTXO model, NIPoPoWs, storage rent, Sigma protocols), oracle pools architecture, ErgoDEX combining orderbook and AMM models, NFT royalty rights, and ErgoScript capabilities. Discussed fair launch vs VC funding model and proof-of-work rationale. Full recap published by KuCoin.

- **ErgoRaffle mainnet launch (2021-08-31)**: Beta version of ErgoRaffle dApp went live, enabling decentralized crowdfunding campaigns with smart contract-based raffle prizes. Multiple community raffles created including successful campaigns for UI/UX development (overfunded at 300+ ERG) and special education funding (175 ERG goal reached). Built using multi-stage contracts with configurable prize percentages.

- **eUTXO concurrency and off-chain architecture (2021-09-04)**: Extensive technical discussion clarifying how eUTXO model handles concurrency through off-chain computation and on-chain validation. Key explanation from mhs_sam: "In the eUTXO model, only the smart contract validation is onchain and other parts of the smart contract are offchain...The validation can be very fast and scalable." Addressed FUD from Cardano Minswap testnet issues. ErgoDEX already handling multiple transactions per block successfully.

- **Ergo SDK JS extraction (2021-09-03)**: kushti announced Ergo SDK JS has been extracted into separate package after battle-testing in ErgoDEX Beta, with ongoing ErgoLabs support. Available at github.com/ergolabs/ergo-sdk-js for developer use.

- **ERGnomes Series 1 NFT drop (2021-09-03)**: First major coordinated NFT sale on Ergo platform sold out, generating significant transaction volume that temporarily stressed the network, demonstrating need for layer 2 solutions for high-frequency simple transactions versus complex smart contracts.

- **Storage rent mechanism clarifications**: Multiple discussions explaining storage rent resets with any transaction, miners can claim rent from unmoved UTXOs after 4 years, and rent is ~0.13 ERG made available for re-mining rather than deducted from wallets.

---

## Important Decisions or Announcements

- [@Armeanio, msg#202470-202472, 2021-09-03]: ViaWallet integration announced with cautionary note - no native asset support yet, recommended for miners or ERG-only users with small transfers during testing phase.

- [@Armeanio, msg#203319, 2021-09-05]: Two new mining pools added to distribute hashrate: ergo.fairhash.org and tulipfarm.one. Nanopool hashrate dropping below 40% for first time.

- [@Angie H, msg#201766, 2021-09-02]: ErgoRaffle Beta officially announced via blog post at ergoplatform.org/en/blog/2021-09-02-ergo-raffle/

- [@Ilya Oskin, msg#201505, 2021-09-03]: ErgoDEX can execute hundreds of operations per block currently, with v5 update enabling several thousand ops/block. Significantly faster than current Ergo version for reference.

- [@kushti khushi, msg#202179, 2021-09-03]: Ergo SDK JS extracted into separate package after ErgoDEX Beta testing, with ErgoLabs providing continuous support and updates.

---

## Technical Q&A Worth Preserving

- **Q** (@Andreas, msg#202697): Since Ergo is based on eUTXO model, why is there a need for a centralized backend solution for batching in ErgoDEX?
  **A** (@Glasgow｜WON'T DM, msg#202698-202699): It's scalable by design because it does it off-chain. Quote from mhs_sam: "In the eUTXO model, only the smart contract validation is onchain and other parts of the smart contract are offchain...The offchain part can be written in a range of completely centralized to completely decentralized. For example, in ergomixer, the offchain part is decentralized too...or in ergoauctions, sigmausd, and ergoraffles, the offchain part is not decentralized. yet we consider all of them dapps."

- **Q** (@MatrixMaarten, msg#202752): Is the offchain part trustless?
  **A** (@Ilya Oskin, msg#202760): It is. But there is a possibility to commit fraud for the party running off-chain part. There are a few workarounds to this issue also.

- **Q** (@SS, msg#202268): Does anyone know will there be any risk creating/restoring a wallet using the same seed as one created for ADA?
  **A** (@MrStahlfelge, msg#202274): No technical risk, but the risk involved is like using the same password for different services: as long as the passwords are safe everything is alright, but if your password is somehow leaked it is for all services. Would recommend using different seeds.

- **Q** (@Unknown, msg#202147): Do we have to use Yoroi nightly for ErgoDEX?
  **A** (@Ilya Oskin, msg#202154): For liquidity pools: 1) Right, 2) Profit depends on pool (e.g. SigUSD/ERG profit for two days is ~0.34%), 3) No, funds are locked in pool until you redeem.

- **Q** (@Unknown, msg#202933): The offchain part for ErgoDex should eventually be decentralized due to regulation. Is this possible?
  **A** (@Glasgow｜WON'T DM, msg#202934): ErgoDex is reasonably decentralised. The only risk now is mitigated by a governance token to change the off-chain part.

- **Q** (@Maxim, msg#202845): What risks putting ergos in sigRSV for couple of years?
  **A** (@Unknown, msg#202848): You'll get less erg if the conversion ratio goes higher. Check the sigUSD group for details.

- **Q** (@Unknown, msg#202900): What is an oracle in layman's terms?
  **A** (@Affable Villain, msg#202909): An oracle inputs off-chain data to the blockchain.

---

## Links Shared

- [https://www.kucoin.com/blog/en_US/kucoin-ama-with-ergo]: Full recap of KuCoin AMA with Ergo team on August 30
- [https://ergoplatform.org/en/blog/2021-08-04-the-ergonaut-handbook/]: Ergonaut Handbook - comprehensive starting resource
- [https://beta.ergoraffle.com]: Beta ErgoRaffle dApp for decentralized crowdfunding
- [https://ergoplatform.org/en/blog/2021-09-02-ergo-raffle/]: Official ErgoRaffle blog post announcement
- [https://github.com/ergolabs/ergo-sdk-js]: Newly extracted Ergo SDK JS package
- [https://beta.ergodex.io/]: Live ErgoDEX beta for testing swaps and liquidity provision
- [https://ergo.watch/sigmausd]: SigmaUSD statistics and monitoring
- [https://twitter.com/_KtorZ_/status/1433505600252567559]: Thread on eUTXO concurrency solutions
- [https://np.reddit.com/r/cardano/comments/pf25jk/without_hydra_cardano_probably_wont_be_faster/hb1s8z6/]: Reddit discussion on Cardano scaling and eUTXO model
- [https://ergo.fairhash.org/]: New mining pool announced
- [http://tulipfarm.one/]: New mining pool announced
- [https://sigmaverse.io/]: Comprehensive list of Ergo dApps and projects
- [https://ergoplatform.org/en/hall_of_fame/]: Ergo team and contributors page

---

## Unresolved Questions

- **Ledger hardware wallet support**: Alpha version released for developers (msg#202547), but no timeline for public release. Multiple users asking for updates throughout the week.

- **ERGX governance token details**: Mockup images showing "ERGX" in ErgoDEX UI sparked speculation about governance token (msg#201926-202937). Ilya Oskin confirmed need for governance token to choose who runs off-chain protocol parts, but no official tokenomics or distribution details announced.

- **iOS wallet development**: Confirmed in development (msg#201903-201907), but no release timeline provided. Android wallet passed 5,000 downloads milestone.

- **Cardano oracle pool integration**: Discussion about read-only data inputs potentially being added to Cardano (msg#202930-202932), which would enable Ergo oracle pools to work with Cardano smart contracts, but no confirmed timeline.

- **ErgoDEX Cardano launch timing**: Community speculation about Sept 12-13 Alonzo launch correlation with ErgoDEX on Cardano, but Ilya previously stated not aiming for that date (msg#199851). No official timeline confirmed.

- **Exchange listings beyond KuCoin**: Multiple requests for Binance/Coinbase listings. Community consensus is to grow organically first per manifesto principles rather than pay listing fees. No announcements of upcoming listings.