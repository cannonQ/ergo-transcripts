---
title: "Ergo General Chat — 2019-W04"
date_start: "2019-01-21"
date_end: "2019-01-27"
type: telegram_weekly
channel: general
week: "2019-W04"
source: telegram
message_count: 109
categories: [governance, ecosystem, mining, technical, community, marketing]
key_terms: [mainnet, 2.0, launch, timeline, weeks away, EFYT, Waves DEX, token distribution, OTC, liquidity, solo mining, testnet, node setup, GPU miners, configuration, Scorex, documentation, tutorial, SyncInfoMessageSpec, Scala]
---
# Ergo General Chat — 2019-W04 Summary
**Period:** 2019-01-23 to 2019-02-10  
**Participants:** 13 | **Messages:** 109

---

## Key Topics Discussed

- **EFYT Token Distribution & Purpose**: Discussion of the Ergo Foundation for Young Technologists (EFYT) token on Waves blockchain, its role in funding Ergo development (salaries, office rent), and OTC acquisition options. [@Dmitry, msg#5817]

- **Mainnet Launch Timeline**: Community anticipation that mainnet release was "only couple weeks away" (early Feb 2019), with one participant estimating "within 4 weeks" as of Feb 7. [@Unknown, msg#5771; msg#5875]

- **Solo Mining Setup on Testnet**: Technical question about configuring solo mining in Ergo testnet, with response pointing to node setup documentation and mining parameter configuration in `application.conf`. GPU miners noted as not yet available. [@Евгений, msg#5788; @Unknown, msg#5789]

- **Scorex Framework Documentation**: Developer seeking thorough Scorex documentation and examples; community pointed to GitHub tutorial, presentations, and toy blockchain implementations for learning. [@Gozzy, msg#5793-msg#5803]

- **Ergo's Cryptographic Advantages**: Discussion of Ergo's unique features including NIPoPoWs from genesis, scalable sidechains, support for Sigma protocols, ring signatures, cheap mixing, and 2-of-3 multisig without signer disclosure—capabilities noted as difficult or impossible in Ethereum. [@Unknown, msg#5839-msg#5854]

- **Colored Coins / Token Support**: Confirmation that Ergo supports creation of colored coins (tokens) and will enable scalable sidechains and NIPoPoWs from launch. [@Unknown, msg#5839]

---

## Important Decisions or Announcements

- **EFYT Token Funding Model Clarified**: [@Dmitry, msg#5817, 2019-02-06]: "EFYT token is used to fund Ergo development, sometimes we sell EFYT tokens OTC to such investors to pay salaries, rent office and so on."

- **Mainnet Readiness Signal**: [@Unknown, msg#5875, 2019-02-07]: "If I see all the progress here, I personally think mainnet will come within 4 weeks"

---

## Technical Q&A Worth Preserving

- **Q** (@Евгений, msg#5788): How do I set up solo mining in the Ergo testnet? (Detailed beginner's instructions requested)  
  **A** (@Unknown, msg#5789): Set up a full Ergo node ([chepurnoy.org blog](http://chepurnoy.org/blog/2019/01/how-to-set-up-and-configure-full-ergo-node/)), then enable mining by changing the mining parameter to `true` in the config file ([GitHub application.conf](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf)). GPU miners are not yet available.

- **Q** (@Gozzy, msg#5793): Is there thorough documentation of Scorex?  
  **A** (@Dmitry, msg#5799): Check the [Scorex tutorial PDF](https://github.com/ScorexFoundation/ScorexTutorial/blob/master/scorex.pdf) and [presentation videos](https://youtu.be/m-yGbvsDjkA), though they differ from some learning goals. Also offered: a [toy blockchain for students](https://github.com/blockchaindevelopersclass/practice2019) as supplementary material.

- **Q** (@Nikolai, msg#5838): Does Ergo allow you to create colored coins?  
  **A** (@Unknown, msg#5839): Yes. Ergo will have NIPoPoWs from the start, scalable sidechains will become reality, and tokens are supported.

- **Q** (@Unknown, msg#5812): What blockchain project is Ergo similar to, for comparison purposes? (Asked in context of mainnet launch marketing)  
  *(Question asked but not directly answered in this segment)*

---

## Links Shared

- [EFYT Token on Waves DEX](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): Historical EFYT token trading pair

- [Ergo Platform Token Distribution Info](https://ergoplatform.org/news_token_distribution.html): Official explanation of EFYT token purpose and distribution

- [Ergo Platform Token Details](https://ergoplatform.org/news_token.html): Additional token documentation

- [How to Set Up and Configure Full Ergo Node](http://chepurnoy.org/blog/2019/01/how-to-set-up-and-configure-full-ergo-node/): Mining setup guide by Dmitry Chepurnoy

- [Ergo GitHub Repository - application.conf](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf): Mining parameter configuration file

- [Scorex Tutorial PDF](https://github.com/ScorexFoundation/ScorexTutorial/blob/master/scorex.pdf): Scorex framework learning material

- [Scorex Presentation Video](https://youtu.be/m-yGbvsDjkA): Blockchain framework introduction

- [Toy Blockchain for Students](https://github.com/blockchaindevelopersclass/practice2019): Supplementary blockchain implementation example

- [RadicalxChange Foundation Overview](https://twitter.com/ergoplatformorg): Posted by @Unknown; discusses egalitarian mechanism design and crypto community connections (Vitalik Buterin, etc.)

---

## Unresolved Questions

- **EFYT vs. Mainnet Token Strategy**: Uncertainty about whether to purchase EFYT on Waves DEX or wait for mainnet launch; community advised that Waves is "only option" if holding before mainnet, but no clear guidance on conversion mechanics post-launch. [@Mu, msg#5747-msg#5748; @𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#5750]

- **OTC Purchase Details**: Request for direct purchase of EFYT from team; DM was offered but no public confirmation of terms or process. [@0xSeb, msg#5811; @Dmitry, msg#5813]

- **Comparative Blockchain Analysis**: Question about what existing blockchain project Ergo most resembles (e.g., Ardor) left without direct answer, though Ergo's unique features (Sigma, NIPoPoWs, sidechains) were highlighted separately. [@Unknown, msg#5812]

---