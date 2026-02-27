# Ergo General Chat — 2019-W22
## Summary
Low-activity week dominated by new user onboarding questions about purchasing Ergo First Year Token (EFYT) on Waves DEX, testnet mining setup, and API configuration. Limited technical depth; primarily procedural guidance.

---

## Key Topics Discussed

- **EFYT Purchase on Waves DEX**: Multiple users asked how to buy Ergo First Year Token. The process requires creating a Waves wallet, funding with BTC, and accessing the built-in Waves DEX to trade for EFYT.

- **Testnet Mining & Hardware Requirements**: Discussion of GPU mining with RTX 580, GTX 1070 rigs; CUDA support confirmed. Pool-resistance of Autolykos algorithm emphasized to prevent mining centralization.

- **Wallet API Authentication**: Users troubleshooting Swagger UI access; requires setting `scorex.restApi.apiKeyHash` in config and passing `api_key` header (not body parameter) in requests. Blake2b hashing via `/utils/hashBlake2b` endpoint documented.

- **Multi-GPU Mining Configuration**: Miner automatically detects and utilizes multiple GPUs; `keepPrehash` flag can be set to true but auto-disables if insufficient VRAM (<8GB available).

- **Mining Reward Variance & Solo Mining**: Dmitry provided expected hashrate model: ~40k GPUs mining generates ~1 block/week per individual miner, comparable to pool payout rates but enforces solo mining to resist centralization.

- **ErgoScript Learning Resources**: Testnet playground available; Scala examples in GitHub repo; JS SDK referenced; PDF tutorials (ErgoScript.pdf, AdvancedErgoScriptTutorial.pdf) and blog posts published on ergoplatform.org.

- **Mainnet Launch Timeline**: Scheduled for June 20th, 2019 (subject to setbacks).

---

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#7513, 2019-06-01]: Mainnet launch scheduled for June 20th, 2019, assuming no further setbacks.

- [@Dmitry, msg#7431-7432, 2019-05-28]: Multi-GPU miner automatically manages `keepPrehash` memory optimization; will disable if insufficient VRAM available.

---

## Technical Q&A Worth Preserving

- **Q** (@shn, msg#7384): Cannot access wallet API through Swagger UI; error: "supplied authentication is not authorized."  
  **A** (@Ilya Oskin, msg#7385-7387): Must set `scorex.restApi.apiKeyHash = yourKeyHash` in config file and pass `api_key` header in request (not body parameter).

- **Q** (@shn, msg#7388-7389): How to compute the Blake2b hash for API authentication?  
  **A** (@Dmitry, msg#7391): Use any Blake2b hash calculator or the node's built-in `/utils/hashBlake2b` API route. Public nodes available (not recommended for mainnet).

- **Q** (@Unknown, msg#7463): Does multi-GPU mining require configuration?  
  **A** (@Dmitry, msg#7466): No configuration needed; miner automatically detects and utilizes all GPUs.

- **Q** (@Rejinderi, msg#7430): Can `keepPrehash=true` be set on 2 GPUs with 6GB VRAM each?  
  **A** (@Dmitry, msg#7431-7432): Can always set to true; miner auto-disables if insufficient memory. Current implementation needs <8GB, so will be disabled on your GPUs.

- **Q** (@shn, msg#7395): How do small miners survive without pools? Will network centralize to big miners?  
  **A** (@Ilya Oskin, msg#7396): Autolykos PoW algorithm is pool-resistant, preventing mining pool formation. (@Unknown, msg#7404): Design reduces hardware-specific advantages and treats pool operator unity as greater centralization risk than individual large miners. Voting and soft-forking enable protocol changes without trusted parties.

- **Q** (@T, msg#7402): Don't big miners still get most rewards even without pools?  
  **A** (@Unknown, msg#7404): Pool-resistance and voting mechanisms reduce this advantage; soft-forking allows network to adapt to changing conditions without developer intervention.

- **Q** (@CryptoTeller | TREEINCAT, msg#7441): Is there a testnet to try ErgoScript (like Plutus Playground)?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#7443): Yes; Twitter link to testnet playground. GitHub repo contains Scala examples and blog posts with ErgoScript tutorials.

- **Q** (@ponte, msg#7507): Balance still 0 after mining blocks on testnet; is there a delay?  
  **A** (@ponte, msg#7508): Found answer—720 block confirmation delay. (@Unknown, msg#7509): Ensure latest version; wallet not persistent between sessions in older versions.

- **Q** (@Unknown, msg#7473): How to swap EFYT for ERG?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#7474): Not yet possible; swap will occur after mainnet launch once swap strategy is finalized.

- **Q** (@Rejinderi, msg#7519): Security risk of cloud mining on testnet?  
  **A** (@Rejinderi, msg#7519): Ergo mining requires private key exposure to mining software; hosting in cloud risks private key disclosure to hoster.

- **Q** (@Unknown, msg#7521-7522): Will Testnet 2.0.5 be released unchanged on June 20th? Do we need to redownload for mainnet or just new genesis?  
  **A** (no response recorded).

---

## Links Shared

- [https://docs.wavesplatform.com/en/waves-dex/start-trading-on-the-waves-dex.html]: Waves DEX trading guide
- [https://docs.wavesplatform.com/en/waves-client/frequently-asked-questions-faq/transfers-and-gateways/payment-gateway.html]: Waves payment gateway FAQ
- [https://client.wavesplatform.com/]: Waves client for DEX access
- [https://twitter.com/WorkFork_HQ/status/1132941053789708289]: ErgoScript/SDK announcement (referenced twice)
- [https://github.com/ScorexFoundation/sigmastate-interpreter/tree/2b4b07a17a026cc176289a843d8a24223c8176c5/src/test/scala/sigmastate/utxo/examples]: ErgoScript examples (Scala)
- [https://twitter.com/ergoplatformorg/status/1106208325191065602]: Testnet playground announcement
- [https://github.com/ScorexFoundation/sigmastate-interpreter/tree/master/src/test/scala/sigmastate/utxo/examples]: ErgoScript examples (current master)
- [http://chepurnoy.org/blog/2018/10/smart-contracts-for-the-people/]: kusHti blog post on smart contracts
- [https://github.com/ergoplatform/ergo/releases]: Latest Ergo releases
- [https://github.com/ergoplatform/ergo/wiki]: Ergo wiki documentation
- [https://ergoplatform.org/docs/ErgoScript.pdf]: ErgoScript tutorial PDF
- [https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf]: Advanced ErgoScript tutorial PDF
- [https://ergoplatform.org/blog/]: Ergo blog
- [https://twitter.com/ergoplatformorg/status/1134018885609504773]: (content not specified)
- [http://127.0.0.1:9052/swagger#/utils/hashBlake2b]: Local node Blake2b hash utility endpoint

---

## Unresolved Questions

- **Mainnet release readiness** (msg#7521-7522, @Unknown): Confirmation needed whether Testnet 2.0.5 will be released unchanged as mainnet on June 20th, and whether users must redownload or simply update genesis configuration.

- **Marketing strategy** (msg#7439-7440, @T): Inquiry about Ergo's marketing plan; response was non-committal ("You will see soon").

- **Exchange listings** (msg#7504, @Eduardo): Inquiry about talks with exchanges; no response recorded.

---

## Participant Notes

- **New developer interest**: CryptoTeller | TREEINCAT indicated UI/React expertise available ("React/Redux/CSS SPAs, Jest/Enzyme/Cypress tests") and offered to contribute; contact flagged to @DMeshkov for contribution page.
- **Community suggestion**: Proposal for welcome message pinned post with highlights and links for new users (msg#7486, msg#7496); response indicated implementation planned ("coming shortly").
- **Separate mining channel suggested** (msg#7475, @Unknown) as community grows.