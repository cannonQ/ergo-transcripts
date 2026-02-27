# Ergo General Chat — 2019-W12 Summary
**Period:** 2019-03-18 to 2019-03-24  
**Participants:** 13 (including kushti, Dmitry, Andrey Andreev)

---

## Key Topics Discussed

- **Mainnet Launch Announcement**: Ergo mainnet launch planned for May 26, 2019, contingent on successful security audit completion.

- **CPU & GPU Mining**: CPU mining available immediately via full node setup with `mining = true` config. GPU miner to be released before mainnet (targeted for that or next week).

- **ErgoData as Future Sidechain**: ErgoData originally conceived as separate blockchain with same technology but different parameters; now postponed to 2-3 years post-mainnet and planned as sidechain rather than independent chain, pending demand and sidechain infrastructure maturity.

- **Token Issuance Without ERC-721 Standard**: One token per transaction issuable for free with max supply of 1 per token. No standard class system exists yet to group similar tokens, but one may emerge in future.

- **Smart Contract Examples**: Available examples cover oracles, crowdfunding, atomic swaps (cross-chain and single-chain token swaps), mixing, and basic contracts. More complex examples (cold wallets, Rock-Paper-Scissors game, ICO scenarios, LETS system) in progress.

- **Sponsored Transactions & Custom Fees**: Sponsored transactions (where fee paid by custom token) implementable via exchange contract pattern. All outputs require minimum ERG amount; transaction fees can be 0 but outputs cannot be.

- **Off-Chain Solutions & Sidechains**: Lightning network-style off-chain solutions and community-driven sidechains to be supported; protocol designed for flexible sidechain implementation. Community members already working on early-stage sidechain implementations.

- **Batch Transaction Broadcasting**: No dedicated API for batch broadcasting, but broadcasting sequentially with no delays achieves same practical effect. Single-block inclusion possible via custom contract logic but requires miner-specific mempool collection rules.

- **Storage Scaling via UTXO Set Optimization**: Approach avoids bloat by using persistent updateable storage with contract verification but only digest + ~40 bytes stored in UTXO set. Storage rent removes dust; light clients enable full-node guarantees without UTXO storage.

- **Comparable Blockchain Projects**: Bitcoin (soft-forkability), Coda (light clients), Grin (FlyClient similarity to NIPoPoWs), ZCash (Equihash similarity but stricter parameters and pool-resistant design). ErgoScript language claimed as unique.

- **Waves DEX Integration**: Planned listing on Waves DEX to simplify EFYT/ERG swapping; no other platform cooperation announced at time of discussion.

- **Wallet & Configuration Updates**: Wallet setup to be improved before mainnet (secure seed storage currently requires plain-text config entry). Swagger API available at `ip:9052/swagger` by default.

---

## Important Decisions or Announcements

- [@Dmitry, msg#6243, 2019-03-19]: **"Ergo mainnet launch is planned for May 26 if no security vulnerabilities will be found during audit process!"**

- [@Dmitry, msg#6256, 2019-03-19]: GPU miner will be available before mainnet, "probably this or next week."

- [@Dmitry, msg#6246, 2019-03-19]: "We're planning to be listed on Waves DEX (this will significantly simplify EFYT/ERG swap), no other cooperation with platforms is planned."

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#6413, 2019-03-22]: Discord group consideration postponed until after mainnet launch; Telegram and Twitter remain primary channels.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#6235): "When can we start mining? And can we mine with CPU?"  
  **A** (@Dmitry, msg#6244): Set up full node with `mining = true` config; node will start mining after initial synchronization. Configuration guide provided via link to Oskin's setup tutorial.

- **Q** (@Amir Boziev, msg#6242): "Do you have plans to add an option to generate ERC-721 alike tokens? Tokens that can't be split?"  
  **A** (@Dmitry, msg#6247): One token per transaction can be issued for free; max supply of 1 per token achieves non-fungible effect. No standard class system yet, but likely to emerge in future.

- **Q** (@Amir Boziev, msg#6248): "Is there an option to broadcast a batch of transactions at the same time? Ideally them to be included in same block?"  
  **A** (@Dmitry, msg#6253): No API method for batch broadcasting, but sequential broadcasting with no delays accomplishes same effect. Single-block inclusion possible via contract logic but requires custom miner mempool rules.

- **Q** (@Amir Boziev, msg#6254): "Is there an option to send transaction with 0 value asset?"  
  **A** (@Dmitry, msg#6259): Not possible; every transaction output must contain some amount of ERG.

- **Q** (@Unknown, msg#6255): "Will there be a manual on how to setup a wallet?"  
  **A** (@Dmitry, msg#6264): Wallet setup documentation being prepared before mainnet. Currently only plain-text seed phrase in config (section 2 of setup post).

- **Q** (@Unknown, msg#6258): "Is there a Swagger API?"  
  **A** (@Dmitry, msg#6262): Yes, available at `ip:9052/swagger` by default. Example from public node: `http://88.198.13.202:9052/swagger`.

- **Q** (@Amir Boziev, msg#6261): "Do you have intentions to build a native off-chain solution like Lightning Network? And what is your vision on community-driven sidechains?"  
  **A** (@Dmitry, msg#6266): Goal is to provide flexible protocol for sidechain implementation. Community members already working on early-stage sidechain implementations; all activity supported.

- **Q** (@Unknown, msg#6269): "What's the minimum requirements to run a node?"  
  **A** (@Dmitry, msg#6273): Full nodes run on recommended config of 4 GB RAM, 2 CPU, 80 GB SSD, but minimum not precisely measured. Depends on node regime.

- **Q** (@Amir Boziev, msg#6276): "Is there an option to send 'sponsored' transaction. The transaction which fee is paid by a custom token?"  
  **A** (@Dmitry, msg#6277): Implementable using exchange example: create contract that buys custom token for ERG; sender sells required token amount and transfers remainder in single transaction.

- **Q** (@Amir Boziev, msg#6278): "Is there no way to transfer 0.0000001 of a token?"  
  **A** (@Dmitry, msg#6279): Every output must contain some amount of ERG. Transaction fee may be 0, but minimum ERG amount required in all outputs.

- **Q** (@Unknown, msg#6329): "How many bytes for wallet seed? 32?"  
  **A** (@Unknown, msg#6330): 32 bytes is recommended default; can set higher if desired.

- **Q** (@Unknown, msg#6331): "How to get the apiKeyHash?"  
  **A** (@Unknown, msg#6333): Use Swagger endpoint `/swagger#/utils/hashBlake2b`.

---

## Links Shared

- [http://chepurnoy.org/blog/2019/01/how-to-set-up-and-configure-full-ergo-node/]: Full node setup and configuration guide by Oskin.

- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/nodeTestnet/application.conf]: Example testnet node configuration file.

- [https://docs.ergoplatform.com/ErgoScript.pdf]: ErgoScript tutorial for developers covering basic smart contract examples.

- [http://chepurnoy.org/blog/2018/10/smart-contracts-for-the-people/]: Blog post on targeted microcredit contract examples.

- [https://en.wikipedia.org/wiki/Local_exchange_trading_system]: LETS system reference for planned contract example.

- [https://wavesplatform.com/products-wallet]: Waves wallet for purchasing EFYT.

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT circulating supply tracker on Waves blockchain.

- [https://ergoplatform.org/news_emission_curve.html]: Emission curve documentation explaining token release schedule.

- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf]: Latest application configuration file (recommended over outdated GitHub lingering files).

- [https://testnet.ergoplatform.com]: Testnet block explorer for checking mining progress and balances.

- [https://twitter.com/ergoplatformorg/status/1107729639420674049]: Twitter announcement link (msg#6211).

- [https://twitter.com/ergoplatformorg/status/1108403794285608963]: Twitter announcement link (msg#6383).

- [https://twitter.com/ergoplatformorg/status/1108770860876337153]: Twitter announcement link (msg#6396).

---

## Unresolved Questions

- **ErgoData Timeline & Sidechain Architecture**: While ErgoData confirmed as future sidechain, specific technical architecture, consensus mechanism for merge-mining, and exact timeline remain TBD pending sidechain infrastructure maturity (2-3 years).

- **Token Class Standard**: Standard method to group similar non-fungible tokens (ERC-721 equivalent) acknowledged as needed but not yet defined; flagged as future development.

- **Wallet Security Implementation**: Secure wallet setup procedure, seed phrase storage, and API authentication finalized by mainnet launch still in progress.

- **Single-Block Transaction Batch Inclusion**: Feasibility of custom contract ensuring all-or-nothing single-block inclusion for transaction batches acknowledged but not yet tested.

- **Website & Documentation Updates**: Outdated material flagged on official website (msg#6421); updates in progress but prioritized below mainnet launch work.