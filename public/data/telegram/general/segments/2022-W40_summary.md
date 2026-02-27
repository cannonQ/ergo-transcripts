# Ergo General Chat — 2022-W40 Summary
**Period:** 2022-10-03 to 2022-10-09

---

## Key Topics Discussed

- **EIP-37 Hard Fork Activation**: EIP-37 successfully activated on 2022-10-03, implementing faster difficulty adjustment (128-block epochs instead of 1024, 50% max adjustment per epoch). Initial difficulty dropped from ~16PH to 8.31PH, then adjusted to 4.41PH in subsequent epochs. Block times stabilized around 120 seconds as intended, though some volatility remained during adjustment periods.

- **Twitter Account Controversy**: Charles Hoskinson transferred the @eth_classic Twitter account (670k followers) to Ergo Foundation, who rebranded it as @ergoplatformorg while returning the handle "eth_classic" to ETC community. This sparked significant debate within both communities about ethics and governance. Glasgow stated the Foundation discussed it and saw it as a marketing opportunity, though community opinion was divided (~2/3 supportive, ~1/3 opposed).

- **AVL Tree Security**: BSC bridge hack ($600M) was traced to AVL tree implementation vulnerability. Kushti confirmed Ergo's AVL+ tree implementation uses domain prefixing to prevent extension attacks, and verification is done at protocol level via ErgoScript rather than in contracts, making it more secure and easier to test.

- **Rosen Bridge Progress**: Rosen Bridge repositories made public on GitHub (github.com/orgs/rosen-bridge/repositories). Soft launch in progress with watchers/guards being deployed. Version 3.1 released with bug fixes, users advised to update. Manual TX refunds being processed for slashed permits.

- **Node 5.0 Development**: Node 5.0 expected in 7-10 days, implementing JIT costing which will simplify complex contract development. After 5.0, work continues on UTXO set bootstrapping and NIPoPoWs. Discussion began on 6.0 features including unsigned 256-bit BigInts, Merkle trees for extension values, and L2 optimizations.

- **ChainCash Proposal**: Kushti published ChainCash proposal on forum - a spender-signed currency system on Ergo enabling new payment patterns and privacy features.

---

## Important Decisions or Announcements

- [@kushti, msg#330169, 2022-10-05]: Node 5.0 release expected in 7-10 days with JIT costing improvements
- [@kushti, msg#330377, 2022-10-05]: Node 6.0 discussion to begin after 5.0 finalization in 1-2 weeks
- [@Glasgow｜WON'T DM, msg#336185, 2022-10-08]: Foundation members/officers discussed Twitter account decision, agreed marketing opportunity outweighed concerns despite hesitation
- [@Armeanio, msg#330071, 2022-10-03]: EIP-37 hard fork completed successfully
- [@kushti, msg#330169, 2022-10-05]: Rosen Bridge repos now public on GitHub
- [@HQΣr | Wont Dm, msg#336186, 2022-10-08]: Rosen Bridge version 3.1 released with bug fixes, Watcher UI 2.2.1 available
- [@Ahmad, msg#337304, 2022-10-09]: Block reward emission reduction to 45 ERG in less than 24 hours

---

## Technical Q&A Worth Preserving

- **Q** (@Wombo22): Can you explain what bulletproofs are?
  **A** (@kushti): Bulletproofs are zero-knowledge proof technique allowing specific statements to be proven in zero-knowledge (e.g., range proofs in Monero). Can also prove generic statements as alternative to SNARKs, with no trusted setup. Working to have verification done in ErgoScript, which would enable variety of zero-knowledge protocols alongside Ergo contracts including hybrid contracts with on-chain verification while avoiding sensitive data disclosure.

- **Q** (@Steven): How does merge-mined sidechain work from mining perspective?
  **A** (@kushti): Will publish sidechain constructions soon on forum. Merge-mined sidechain delivers sidechain data with trustless pegging via smart contracts. Emission contract can reward mainchain miners for delivering sidechain data. Unlike BIP 301, uses trustless relay to update sidechain data on Ergo mainchain with proof of work verification.

- **Q** (@Luke Graysmith): Can same DDoS attack that hit another chain happen on Ergo?
  **A** (@kushti): Many spam attack vectors against p2p and mempool fixed quietly in recent months. Node has limits on unconfirmed transactions cost between blocks to avoid spam. Since version 4.0.44, nodes limit transactions downloaded from single peer. Fee markets handle spam - users can raise fees to get priority. Mempool filters and minimum propagation fee rates can be adjusted by node operators.

- **Q** (@community): What happens to spammer transactions in mempool if not picked up?
  **A** (@kushti): Transactions eventually flush from mempool after time if miners don't pick them up due to higher-fee transactions. There's fee estimation API in node (not widely used yet) showing needed fee for next blocks. Some mempool filters available including raising minimum propagation fee rates.

- **Q** (@Dobri Dobrev): Why k1pool asking $50 "integration fee"?
  **A** (@community consensus): Not normal behavior, use different pool like woolypooly or getblok. K1pool is separate business Ergo doesn't control.

- **Q** (@Fred Clark Jr): Why need to run node to solo mine?
  **A** (@community): Without node blockchain doesn't work. Solo pool helps avoid running own node but they run node on their end. No reason to use solo pool and pay fee when can run own node.

- **Q** (@Ben): What's difference between Ergo and Cardano for dApp development?
  **A** (@Ilya): PoW vs PoS doesn't matter for most uses. Ergo easier to build on due to better dev experience - easier to hire Scala devs than Haskell/Plutus. Cardano has bigger ecosystem = more potential customers and easier VC funding. Ergo smaller = easier to differentiate and market product.

---

## Links Shared

- [https://cds.oette.info/ergo_diff.htm]: Live difficulty tracking dashboard
- [https://miningpoolstats.stream/ergo]: Accurate network hashrate statistics
- [https://github.com/orgs/rosen-bridge/repositories]: Rosen Bridge public repositories
- [https://www.ergoforum.org/t/chaincash-a-spender-signed-currency-on-ergo/4015]: ChainCash proposal by kushti
- [https://ergoplatform.org/en/blog/2021-11-17-bitcoin-taproot-upgrade-and-ergos-sigma-protocols/]: Bitcoin Taproot and Ergo Sigma protocols interoperability
- [https://spectrumlabs.medium.com/b71b2bcf1fb]: Spectrum DEX update on Medium
- [https://ergcube.com/index.php?newsid=32]: ErgCube article on Twitter account situation
- [https://twitter.com/samczsun/status/1578167198203289600]: Thread analyzing BNB bridge AVL tree exploit
- [https://fineberga.substack.com/p/ergo-is-the-spiritual-successor-to]: Article on Ergo as spiritual successor
- [https://votes.sigmaspace.io/]: Voting platform for Ergo proposals

---

## Unresolved Questions

- **Community Governance Structure**: Twitter account situation revealed gaps in community input on Foundation decisions. Multiple users requested better transparency, formal communication channels, and clearer voting mechanisms for contentious non-technical decisions. Foundation response pending beyond Glasgow's initial explanation.

- **Exchange Issues**: KuCoin deposits/withdrawals suspended for ~10 days due to dust accumulation (60,000 UTXOs) and node issues. Resumed 2022-10-08 for deposits, withdrawals being worked on. TradeOgre also had ERG suspended.

- **Node 6.0 Feature Prioritization**: Discussion started on what to include in 6.0 (unsigned 256-bit BigInts, Merkle trees, L2 optimizations, new opcodes) but no decisions finalized. Community input requested on simplifications for L2 protocols.

- **Oracle Pool Funding**: Dan mentioned considering using Palmyra raised capital to build out Ergo Oracle Pools (currently only 2 operators) to make them more secure and useful, but no concrete plans announced.

- **Storage Rent Implementation**: Mobile wallet dev has suggestions for rewarding node operators potentially through storage rent mechanism, but details not discussed. Support in protocol/API ready, client library support unclear.

- **Miner Decentralization**: 2miners continues to have largest pool share despite centralization concerns. GetBlok promoting smartpool with subpool system but adoption slow. No consensus on how to incentivize pool decentralization.