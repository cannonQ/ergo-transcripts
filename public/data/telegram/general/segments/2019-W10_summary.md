# Ergo General Chat — 2019-W10 Summary

## Key Topics Discussed

- **Mainnet Launch Timeline**: TestNet 2.0 scheduled for March 14th with all mainnet features; mainnet launch estimated for May 2019 after security audit, wallet integration, and wide testing (~2 months).

- **GPU Mining Readiness**: Miners enquiring about start date for mining; GPU miner announcements deferred until ready. Payment networks to come later.

- **Token Swap and Emission**: EFYT token swap confirmed as 1 EFYT → 1 ERG + 1 ERGOdata; maximum circulating supply ~19m per token in first year. Emission curve details available.

- **ASIC Resistance & Pool Mining**: ASIC resistance confirmed as first and most important step; mining pool resistance acknowledged as complex topic with ongoing algorithm configuration and chain evolution adjustments planned.

- **Node Configuration & Wallet Implementation**: Initial wallet implementation in-memory only; external multicurrency wallet integration in progress; 1-2 wallets expected before mainnet. Swagger-based address generation available via ErgoScript routes (p2s, p2sh).

- **DApp Development**: Community interest confirmed for building DApps on Ergo; working examples promised soon.

- **Documentation**: ErgoScript PDF whitepaper draft released for community review; node configuration manual and tutorials being prepared before mainnet launch.

---

## Important Decisions or Announcements

- [@Dmitry, msg#6054, 2019-03-07T03:47]: TestNet 2.0 will launch March 14th with all mainnet features; mainnet launch targeted for May 2019 after ~2 months of testing, security audit, wallet integration, and marketing.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#6129, 2019-03-14T10:23]: Token swap confirmed: 1 EFYT → 1 ERGOcash + 1 ERGOdata (terminology: ERGOcash later standardized as ERG).

- [@𝖒𝖊𝖊𝖉𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#6141, 2019-03-14T19:12]: Ergo v2.0.0 released on GitHub; sigmastate-interpreter v2.0 released.

- [@Dmitry, msg#6164, 2019-03-16T07:18]: Initial build-in wallet with in-memory storage ready; final wallet implementation to begin within a week; external multicurrency wallet integrations planned before mainnet.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#6070): Could we build dApps on Ergo Network?  
  **A** (@Dmitry, msg#6073): "For sure) I hope we'll have working examples quite soon"

- **Q** (@Unknown, msg#6160-6161): Is there a wallet in ergo.conf, or should I turn it off?  
  **A** (@Unknown, msg#6163): "At the moment you would need to generate your own through swagger, by changing dlogSecretsNumber you can set amount of addresses, there are also routes to generate p2s and p2sh addresses from ErgoScript"

- **Q** (@Unknown, msg#6167): Is swagger endpoint 0.0.0.0:9052?  
  **A** (implicit): Endpoint referenced but not explicitly confirmed in thread.

- **Q** (@Unknown, msg#6168-6169): Getting startup errors with equihash powType in config  
  **A** (@Dmitry, msg#6174-6176): "You don't need to provide all sections in the config, only the fields you need. Check [testnet application.conf]. Empty config should also work."

- **Q** (@Amir Boziev, msg#6192): How to configure api-key-hash parameter and hashing algorithm?  
  **A** (@Unknown, msg#6194): "blake2b for api key hash"

---

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v1.9.1]: TestNet setup download (v1.9.1)
- [https://github.com/ergoplatform/ergo/wiki]: Ergo setup and configuration guide
- [https://twitter.com/ergoplatformorg/status/1103597129333989376]: Official project announcements (referenced multiple times)
- [https://twitter.com/chepurnoy/status/1105501885732016128]: Tweet from kushti (Alexander Chepurnoy)
- [https://docs.ergoplatform.com/ErgoScript.pdf]: ErgoScript whitepaper draft (v2.0) for community review
- [https://github.com/ergoplatform/ergo/releases/tag/v2.0.0]: Ergo v2.0.0 release
- [https://github.com/ScorexFoundation/sigmastate-interpreter/releases/tag/v2.0]: Sigma state interpreter v2.0
- [https://www.magicalcryptoconference.com]: Magical Crypto Conference (May 11-12, NY) — speaker application form locked
- [http://chepurnoy.org/blog/2019/01/how-to-set-up-and-configure-full-ergo-node/]: Node configuration tutorial
- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/nodeTestnet/application.conf]: TestNet application.conf reference
- [https://docs.ergoplatform.com]: Papers and documentation repository
- [https://ergoplatform.org/news_emission_curve.html]: Token emission curve details
- [https://github.com/ergoplatform/ergo/tree/master/papers/yellow/main.pdf]: Yellow Paper (note: reportedly broken link at time of chat)

---

## Unresolved Questions

- **Mining Pool Resistance**: [@𝖒𝖊𝖙𝖘𝖔𝖞𝖙𝖆𝖑𝖎𝖘𝖊𝖙կշօ, msg#6133, 2019-03-14T10:43] acknowledged that "perfect" mining pool resistance protocol is "unrealistic"; ongoing adjustments planned as chain evolves.

- **Wallet Encryption**: Wallet implementation details and encryption status in initial version flagged as TBD; tutorials promised before launch.

- **Swagger Endpoint Confirmation**: User confirmation of swagger endpoint (0.0.0.0:9052) not explicitly verified in chat.

- **Magical Crypto Conference Participation**: [@Unknown, msg#6147-6149] suggested Ergo team participation at May 2019 conference; [@𝖒𝖊𝖜𝖈𝖆𝖈𝖆𝖑𝖎𝖘𝖞կշօ, msg#6153] noted speaker form was locked, leaving attendance TBD.