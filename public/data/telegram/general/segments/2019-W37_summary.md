---
title: "Ergo General Chat — 2019-W37"
date_start: "2019-09-09"
date_end: "2019-09-15"
type: telegram_weekly
channel: general
week: "2019-W37"
source: telegram
message_count: 63
categories: [ecosystem, technical, bridges, governance]
key_terms: [GJ.COM, exchange listing, scam concerns, withdrawal issues, EFYT vs ERG, P2PB2B, exchange launch, deposit, withdrawal, trading live, ViteX, price, volume, trading pairs, price oracle, VWAP, CoinMarketCap, data reliability, exchange data, crowdfunding CLI]
---
# Ergo General Chat — 2019-W37 Summary

## Key Topics Discussed

- **Exchange listings and integration**: GJ.COM listed ERG without coordination with Ergo team in <24 hours, raising community concerns about legitimacy. P2PB2B became the largest trading volume exchange for Ergo at the time.
- **Price oracle and data sourcing**: Discussion of whether Ergo team should run their own price ticker for ERG/BTC rather than relying on CoinMarketCap or CoinGecko, including concerns about data trustworthiness for ErgoScript contracts.
- **Ergo crowdfunding CLI tooling**: v0.1.0 release announced with precompiled binaries for x86 Linux, ARM Linux, and Windows; EIP-1 expected to bring further updates.
- **Node resource usage**: Query about full node (v3.1.0) memory allocation reaching 13GB, flagged as a potential concern.

## Important Decisions or Announcements

- [@Unknown, msg#13602, 2019-09-13]: Ergo crowdfunding CLI tool reached v0.1.0 with precompiled binaries released: https://github.com/robkorn/ergo-crowdfunding-cli/releases/tag/v0.1.0
- [@Jason Davies, msg#13573, 2019-09-13]: P2PB2B confirmed as the largest exchange by trading volume for Ergo.
- [@Kookster, msg#13594, 2019-09-13]: Trading confirmed live on P2PB2B.

## Technical Q&A Worth Preserving

- **Q** (@Dmitry V, msg#13625): Is it normal for an Ergo full node (v3.1.0) to allocate 13GB of RAM?
  **A**: No explicit response provided in this segment; flagged as unresolved.

- **Q** (@Jason Davies, msg#13581): How does CoinMarketCap calculate price, and what concerns exist for Ergo scripts relying on such data?
  **A** (@Jason Davies, msg#13581): CMC attempts to exclude outliers to prevent fake data from influencing prices, but this raises concerns if ErgoScript contracts depend on price feeds. Community may need to run independent price calculations.

- **Q** (@Jason Davies, msg#13582): How frequently will the oracle update price data?
  **A**: No explicit response; appears to be speculative ("something like 24 hours?").

## Links Shared

- [https://twitter.com/chepurnoy/status/1171765632410341377]: Tweet from kushti (2019-09-11)
- [https://twitter.com/ramics_asso/status/1171971207794528258]: Community tweet (2019-09-12)
- [https://twitter.com/ergoplatformorg/status/1172078223485808640]: Official Ergo platform tweet (2019-09-12)
- [https://twitter.com/p2pb2b/status/1172593194825068549]: P2PB2B announcement of ERG trading (2019-09-13)
- [https://www.feixiaohao.com/exchange/gj/]: Exchange ranking reference cited by Haiyan
- [https://www.mytoken.io/exchange/gj.com]: Exchange tracking reference cited by Haiyan
- [https://github.com/robkorn/ergo-crowdfunding-cli/releases/tag/v0.1.0]: Ergo crowdfunding CLI v0.1.0 release

## Unresolved Questions

- Full node RAM allocation at 13GB (v3.1.0) — legitimacy unclear
- GJ.COM exchange legitimacy and integration speed — raised as suspicious by community but defended by Haiyan without clear resolution
- CoinGecko listing status for ERG — asked but not answered in segment
- Oracle update frequency — speculated but not confirmed
- TIDEX withdrawal delays — reported but not addressed by core team