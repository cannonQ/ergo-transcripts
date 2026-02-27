# Ergo General Chat — 2022-W30 Summary

## Key Topics Discussed

- **Babel Fees Protocol**: Fully implemented on Nautilus wallet. Enables users to pay transaction fees in arbitrary tokens via an order book mechanism rather than exclusively in ERG. Liquidity providers set exchange rates and profit from the convenience premium. [@Capt. Nemo, msg#291293, 2022-07-26]

- **Dexy Stablecoin (v2)**: Market-driven emission contracts and alternative stabilization mechanisms (burn as last resort) discussed. First Dexy instance will be pegged to gold price with Oracle Pool v2. Natural protection from bank runs through limited minting and known security bounds. [@kushti, msg#291298, msg#291305, msg#291332]

- **Oracle Pool v2 Economics**: Rewards no longer create UTXO dust; paid via dedicated token instead. GORT rewards mentioned for Dexy Gold instance. [@kushti, msg#291330, 2022-07-26]

- **Decentralized Grid Trading on Ergo**: Smart contracts can create sell orders requiring buy orders at lower prices to unlock, enabling arbitrage grid strategies. Off-chain bots execute and profit from order execution. [@kushti, msg#291312-msg#291320, 2022-07-26]

- **Ergo Raffle Bot (kaching)**: Initial bug fixed where failed raffle notifications were sent incorrectly due to API/DB sync delays. Now handles unconfirmed transactions, fork handling, and prevents double bidding. [@nirvanush/@notmork, msg#291271, msg#291551, msg#291588]

- **Node v4.0.35 Peer Connectivity Issues**: Multiple node operators reported peer connections fluctuating or dropping (1-20 range, normally 30+). Reverting to v4.0.34 resolved the issue for some. Public node recovered to 120+ peers without restart, suggesting potential network-wide issue. [@Flying Pig, msg#291884, msg#291940, 2022-07-28 to 2022-07-29]

- **Hardware Wallet Support**: Ledger integration stalled (team not responding). Trezor currently accepts no new coins and requires top 100 market cap status. Complex ErgoScript interpreter reimplementation required on device due to Ergo's unique signing model. [@MrStahlfelge, msg#292090-msg#292094; @Aberg, msg#292103-msg#292108]

- **NIPoPoWs & Zero-Knowledge Proofs**: Bulletproofs discussed as trustless alternative to SNARKs for verifiable credentials and range proofs. Implementation in ErgoScript being explored to enable variety of ZK protocols on-chain. [@kushti, msg#291280-msg#291309, 2022-07-26]

- **Market-Driven Emission Contracts**: Treasuries could unlock tokens based on price performance (augmented bonding curves alternative). Time-locked grids proposed to prevent immediate dumps. [@kushti, msg#291292, msg#291382, 2022-07-26]

- **Satergo Wallet**: Major UI redesign ongoing. Supports offline wallet creation, Ledger integration being developed. Portable (single-file executable), deterministic builds. [@Aberg, msg#291211, msg#292022]

- **Palmyra / Chainlink Partnership**: On-chain warehouse receipts for decentralized trade financing using proof of reserve. Commodity oracles (camera, weight sensors, motion sensors) to verify actual reserves. Plan to build native Ergo oracles and utilize multiple oracle sources (not Chainlink-exclusive). [@Armeanio/@Dan, msg#291374-msg#291499, 2022-07-26]

- **Ergo Nodes & Syncing**: Version 4.0.35 introduced issues; false positives on "node is synced" reported. WiFi connections cause nodes to stop while appearing synced. Node size ~24.4GB. [@Unknown, msg#291927-msg#291934, 2022-07-28 to 2022-07-29]

- **Trade House / Order Book DEX**: qx() explained advantages: total transparency of depth/liquidity, full slippage control, partial order fills supported. Contrasts with AMM-based DEX (Spectrum). Implementation supports one-to-one peer-to-peer matching. [@qx(), msg#291134-msg#291640, 2022-07-26 to 2022-07-27]

- **Storage Rent Mechanics**: Long-term coin preservation questioned; storage rent eventually recirculates parked coins (unlike Satoshi's locked BTC). Implications for fair distribution and tokenomics. [@Ron/@Unknown, msg#292412-msg#292417, 2022-07-30 to 2022-07-31]

## Important Decisions or Announcements

- [@Capt. Nemo, msg#291293, 2022-07-26]: Babel Fees fully implemented on Nautilus; ready to start testnet beta testing phase.

- [@kushti, msg#291493, 2022-07-26]: Published forum post on decentralized grid trading: https://www.ergoforum.org/t/decentralized-grid-trading-on-ergo/3750

- [@Armeanio, msg#292496, 2022-07-31]: Accepted congratulations with "Gracias por todo" (confirmed participation in Gemlink community vote outcome).

- [@CW, msg#291126, 2022-07-25]: Community discussion scheduled on Dexy, Babel Fees, and DeFi (Tuesday, July 26, 1pm UTC).

- [@CW, msg#291955-msg#291958, 2022-07-29]: Weekly dev updates available; roadmap at ergoplatform.org/en/ecosystem/#Roadmap; Node 5.0, Oracles v2, Babel Fees, wallets, AppKit, Dexy in progress.

- [@nirvanush/@notmork, msg#291551, 2022-07-27]: Ergo Raffle Bot bug fix deployed; prevents duplicate failure notifications via safer error handling.

- [@Aberg, msg#291676, 2022-07-27]: Node update recommended; Satergo offers 1-click updates.

- [@Unknown, msg#292297, 2022-07-30]: Craftt skills marketplace project coming to Ergo (details not yet public).

## Technical Q&A Worth Preserving

- **Q** (@Unknown): How do Babel Fees determine exchange rates?
  **A** (@Capt. Nemo, msg#291308, 2022-07-26): Liquidity providers set price at moment of Babel box creation, analogous to token buy order book. Market establishes equilibrium. [@Capt. Nemo, msg#291338]: Babel Fees have own liquidity mechanism, separate from Spectrum DEX.

- **Q** (@Unknown): Can Babel boxes use Spectrum AMM pools as fee source?
  **A** (@Capt. Nemo, msg#291338, 2022-07-26): No, Babel Fees have independent liquidity mechanism, though any dApp can implement Babel protocol.

- **Q** (@Capt. Nemo): Should Babel Fees support optional two-sided order books?
  **A** (@Capt. Nemo, msg#291380, 2022-07-26): Two-sided books would make it a different beast but usable in both ways (one/two-sided).

- **Q** (@CW): How do economic incentives differ between Oracle Pool v1 and v2?
  **A** (@kushti, msg#291330, 2022-07-26): Rewards not creating UTXO dust in v2; paid via dedicated token.

- **Q** (@Ilya): Can trustless collaboration be implemented for treasure hunt reward splitting?
  **A** (@kushti, msg#291436, 2022-07-26): Implementation highly dependent on setting; multisig or other mechanisms possible.

- **Q** (@kii): Is there still an ERG cost for Babel Fees despite token payment?
  **A** (@Capt. Nemo, msg#291301, 2022-07-26): Yes, swap happens under-the-hood between transaction token and ERG.

- **Q** (@Unknown): What incentives exist for Babel box liquidity providers?
  **A** (@Capt. Nemo, msg#291351, 2022-07-26): Babel boxes sell convenience; LPs can set prices above market and profit. [@kushti, msg#291348]: When market is thin, should have OK premium to justify entry.

- **Q** (@Chris Ray): How difficult to build collateralized lending (Compound/Aave style) in eUTXO?
  **A** (@kushti, msg#291367-msg#291368, 2022-07-26): Probably possible; other designs may be more optimal or interesting for UTXO model.

- **Q** (@Unknown): Will Ergo wallet work for bridged Cardano natives?
  **A** (@MrStahlfelge, msg#291432, 2022-07-26): When it is a token, it is supported.

- **Q** (@MrStahlfelge): Why does node wallet derivation differ from other wallets?
  **A** (@MrStahlfelge, msg#291593, 2022-07-27): Node supports pre-EIP3 derivation while other wallets follow EIP3 standard.

- **Q** (@Unknown): How long until 1 ERG is consumed by storage rent?
  **A** (@Unknown, msg#292417, 2022-07-31): Calculation depends on storage rent parameters; will eventually recirculate into economy (not permanent loss like Satoshi coins).

- **Q** (@Odiseus): How to verify node (4.0.35) is working properly with 30 peers synced?
  **A** (@Odiseus, msg#291934, 2022-07-29): WiFi connections cause nodes to appear synced while stopped; wired connections solve issue. Node size ~24.4GB.

- **Q** (@DrTwentyOne): How to generate seed phrase offline from source code?
  **A** (@Aberg, msg#292254, 2022-07-30): Use Satergo (portable, runnable from source with 1 command, runs same on Mac/Ubuntu). [@MrStahlfelge, msg#292249]: Ergo Wallet App, Satergo, Mobile Wallet, Nautilus all open source.

- **Q** (@DrTwentyOne): Can Satergo be trusted 100% for seed phrase generation?
  **A** (@Aberg, msg#292293, 2022-07-30): Generation is as random as it gets; impossible to guess seed. [@Unknown, msg#292296]: 12-word seed has 340,282,366,920,938,463,463,374,607,431,768,211,456 possible combinations.

- **Q** (@Rj): Can multiple transactions execute simultaneously?
  **A** (@Gazza, msg#291991, 2022-07-29): Yes, but only one can execute per block; others queue.

- **Q** (@Odiseus): Why might incoming tokens trigger wallet approval concerns?
  **A** (@Cheese, msg#292528, 2022-07-31): Tokens already arrive in wallet; preventing receipt would require new transaction (costing fees). Tokens on Ergo are native assets, no malicious code risk. [@Ilya, msg#292530]: From tech perspective impossible; wallet is UI to blockchain data. Would cost fees to move unwanted tokens out.

- **Q** (@qx()): Alternative security model for compromised wallets?
  **A** (@qx(), msg#292533-msg#292539, 2022-07-31): Proxy wallet approach: all sends go to proxy address with recipient in memo. Dual-factor approval required via secondary key wallet. Could add SMS service. Recovery via secondary wallet if number lost.

## Links Shared

- [https://www.ergoforum.org/t/market-driven-emission-contracts/3749]: Market-driven token unlocks for treasuries (kushti's proposal post).

- [https://www.ergoforum.org/t/decentralized-grid-trading-on-ergo/3750]: Decentralized grid trading smart contract patterns.

- [https://ergoplatform.org/en/blog/2022-03-17-mining-ergo-on-windows/]: Mining Ergo on Windows guide.

- [https://twitter.com/ergoplatformorg/status/1551516288094130176]: Ergo Foundation Twitter announcement (Nasdaq article mention).

- [https://twitter.com/ergoplatformorg/status/1551563019204710405]: Additional Ergo Foundation tweet.

- [https://twitter.com/MrStahlfelge/status/1551898294040858624]: Mobile cold wallet announcement (tested on Pi, good cold wallet option).

- [https://ergoraffle.com/]: Ergo Raffle platform (Bear Market Lottery winner raffle example).

- [https://github.com/zkastn/ergo-raffle-bot]: Ergo Raffle Bot source code (with bug fixes for July 27 notification issues).

- [https://ergoplatform.org/en/ecosystem/#Roadmap]: Official Ergo roadmap.

- [https://youtube.com/playlist?list=PL8-KVrs6vXLRB4zFqJBo7bGmg6ziQUgdp]: Weekly dev update playlist.

- [https://twitter.com/sigmanaut/status/1552399716830560257]: Sigmanauts mining pool update.

- [https://twitter.com/sigmanaut/status/1552778781630541827]: Additional Sigmanauts announcement.

- [https://twitter.com/sigmanaut/status/1552874962155089920]: Further Sigmanauts update.

- [https://twitter.com/cwkoo_my/status/1552912436499320835]: Crypto Wolf announcement (health dashboard/dynamic endpoints).

- [https://sigmaverse.io/]: Ergo ecosystem directory.

- [https://twitter.com/MiningRabid/status/1553180944982388736]: GPU mining poll (Ergo vs RVN vs ETC; Ergo in 3rd place, community voting ongoing).

- [https://youtu.be/ICf0mHB6dfY]: Live stream link (CW, 2022-07-28).

- [https://twitter.com/ergoauction/status/1552700159326298112]: Auction House updates.

- [https://docs.ergonation.org/]: ΣID documentation (pseudonymous soulbound NFT use cases).

- [https://a16zcrypto.com/state-of-crypto-report-a16z-2022/]: a16z crypto state-of-crypto report (web3 adoption timeline; 1B users by 2031 projected).

- [https://medium.com/@anetaBTC/mine-neta-on-ergo-877b67c921c5]: AnetaBTC NETA mining on Ergo guide (Fair Initial Mining Offering).

- [https://twitter.com/gemlinkt/status/1553718007209365504]: Gemlink project (community voting result announced).

- [https://gleam.io/BarHe/ergopad-1000-for-3000-contest]: ErgoPad Gleam contest (7 days remaining at time of posting).

- [https://twitter.com/ergoplatformorg/status/1553547569405444096]: Ergo Foundation announcement (late week).

- [https://open.spotify.com/episode/7j9xqWj9OQB10M4GXNVgks?si=UmBBORabQjKGQlCf3nPJCg]: Dev update podcast episode.

## Unresolved Questions

- **Ledger Support Status**: Ledger team integration stalled; no timeline given. [@MrStahlfelge, msg#292052, 2022-07-29]

- **Trezor Integration Blockers**: Currently accepting no new coins; requires top 100 market cap. Complex ErgoScript reimplementation needed on device. [@Aberg, msg#292103-msg#292108, 2022-07-29]

- **Node v4.0.35 Peer Drops**: Root cause unknown; affects multiple operators. Revert to v4.0