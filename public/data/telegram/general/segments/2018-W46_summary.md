# Ergo General Chat Summary — 2018-W46

## Key Topics Discussed

- **Autolykos PoW Algorithm**: New proof-of-work algorithm under construction, designed to be GPU-friendly and ASIC-resistant. Testnet 2 will feature Autolykos; GPU miner implementation planned post-testnet 2 with community help.

- **Mining Pool Design & Solo Mining Economics**: Discussion of whether traditional pools are feasible given Autolykos' privacy-preserving design. Solo miners can expect same average rewards as pool miners, just at longer intervals (e.g., 4 GPUs = ~1 block/year). Trusted pools with deposits or friend groups remain possible alternatives.

- **Scala Language Choice**: Community concerns about using Scala for core development; discussion of barrier to entry for contributors. Counter-argument that Scala has strong finance/data science adoption and ecosystem will grow with project adoption.

- **Token Emission & Economics**: 10% project tax of first-year supply (1,971,000 tokens) will fund development; existing EFYT tokens will swap 1:1 to native ERG post-mining. First 2 years have fixed emission; reduction every 3 months thereafter.

- **GitHub Contribution & Development**: Project code available across multiple repositories (ergoplatform/ergo, scorex, sigmastate-interpreter, scrypto). Issues marked "help wanted" for contributors.

## Important Decisions or Announcements

- [@Dmitry, msg#5067, 2018-11-15]: New PoW algorithm under construction; will be released soon via pull request #548.

- [@Dmitry, msg#5073, 2018-11-15]: GPU miner implementation planned to start after Testnet 2 with community help.

- [@Unknown, msg#5252, 2018-12-01]: Autolykos confirmed as the PoW algorithm for Testnet 2.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5237, 2018-11-30]: Twitter announcement references voting mechanism (link provided).

## Technical Q&A Worth Preserving

- **Q** (@Rumato Estorsky, msg#5176-5180): Does Autolykos require computation only within a single datacenter to prevent outsourcing (which would risk private key disclosure)? Would small miners with 4-8 GPUs be squeezed out?
  
  **A** (@Dmitry, msg#5188): Solo miners receive same average reward as pool miners, just less frequently. Using Ethereum as example: 4 GPUs ≈ 1 block/year, 57 GPUs ≈ 1 block/month. At scale, mining becomes a lottery. Alternatives exist: trusted pools among friends or pools with deposits to prevent reward theft. This design should encourage 1 block/month+ solo miners over traditional pools.

- **Q** (@Rumato Estorsky, msg#5070): Will new PoW algorithm work properly on GPU? Is there miner software available, or only CPU mining in node?
  
  **A** (@Dmitry, msg#5073): GPU miner implementation will begin after Testnet 2, mostly with community help.

- **Q** (@StakeWithJenni.com, msg#5192): How is the project funded?
  
  **A** (@Unknown, msg#5193): Funded via EFYT token (similar to Zcash's private investor model but public). 10% of first-year mining supply (~1,971,000 EFYT) becomes 1:1 swap to native ERG and "Σ-Data" tokens.

- **Q** (@Rumato Estorsky, msg#5065): Where is project code? How to contribute? How to run PoW on Linux?
  
  **A** (@Dmitry, msg#5066): Code at ergoplatform/ergo GitHub; supporting frameworks in scorex, sigmastate-interpreter, and scrypto repos. Check issues marked "help wanted". (@Dmitry, msg#5074): Contact directly with expertise for contribution discussion.

## Links Shared

- [https://github.com/ergoplatform/ergo](https://github.com/ergoplatform/ergo): Main Ergo project repository
- [https://github.com/scorexfoundation/scorex](https://github.com/scorexfoundation/scorex): Base framework for consensus and blockchain
- [https://github.com/ScorexFoundation/sigmastate-interpreter/](https://github.com/ScorexFoundation/sigmastate-interpreter/): Smart contract language implementation
- [https://github.com/input-output-hk/scrypto](https://github.com/input-output-hk/scrypto): Cryptographic primitives
- [https://github.com/ergoplatform/ergo/pull/548](https://github.com/ergoplatform/ergo/pull/548): Pull request for new PoW algorithm
- [https://ergoplatform.org/news_emission_curve.html](https://ergoplatform.org/news_emission_curve.html): Emission schedule and inflation details
- [https://www.ergoplatform.org/qa_2018_02_06.html](https://www.ergoplatform.org/qa_2018_02_06.html): Q&A session with airdrop discussion
- [http://wavesexplorer.com/tx/BLruST2C4jAhkzTMZZwe8YASovVGPtqR5pqfrVzbiGHt](http://wavesexplorer.com/tx/BLruST2C4jAhkzTMZZwe8YASovVGPtqR5pqfrVzbiGHt): Token burn transaction (3,029,000 tokens to match emission curve)
- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): EFYT token supply tracker
- [https://bitcointalk.org/index.php?topic=2076657.msg44133595#msg44133595](https://bitcointalk.org/index.php?topic=2076657.msg44133595#msg44133595): Swap details announcement
- [https://twitter.com/ergoplatformorg/status/1063504147616550914](https://twitter.com/ergoplatformorg/status/1063504147616550914): Platform update tweet
- [https://youtu.be/VDinjJJpGGc](https://youtu.be/VDinjJJpGGc): Ergo discussion recording (~4 hours)
- [https://twitter.com/ergoplatformorg/status/1063780846220517376](https://twitter.com/ergoplatformorg/status/1063780846220517376): Event announcement
- [https://twitter.com/ergoplatformorg/status/1066257802698600448](https://twitter.com/ergoplatformorg/status/1066257802698600448): Project update
- [https://twitter.com/ergoplatformorg/status/1068622203829329920](https://twitter.com/ergoplatformorg/status/1068622203829329920): Voting mechanism announcement
- [https://twitter.com/TheWavesGuy/status/1068958333594415105](https://twitter.com/TheWavesGuy/status/1068958333594415105): External endorsement

## Unresolved Questions

- **Mining Reward Distribution at Scale**: Long-term viability of small independent miners once network difficulty becomes prohibitively high remains theoretical; actual mechanisms TBD post-mainnet.

- **Scala Ecosystem Growth**: Will Scala developer community grow alongside Ergo adoption, or will the language become a long-term maintenance bottleneck? (Noted as speculative.)

- **EFYT Token Distribution**: Remaining unsold EFYT holdings and timing of additional sales before mainnet remain unannounced [@Unknown, msg#5226].

- **Testnet 2 Reward Details**: Specific reward structure for bug-finding bounties on Testnet 2 not detailed; referenced as available through GitHub contributions.