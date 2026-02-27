# Ergo General Chat — 2019-W40 Summary

## Key Topics Discussed

- **CoinMarketCap (CMC) and CoinGecko listings**: CMC initially had incorrect ticker (ERGO instead of ERG), broken Tidex link, and wrong supply figures. Multiple corrections needed including logo, whitepaper link, Telegram link, source code link, and proper tags. CoinGecko recommended as superior alternative.

- **Exchange listings and market activity**: Hotbit launched ERG trading on October 9, 2019 with deposit and ERG/BTC pair. However, immediate reports of withdrawal issues (inactive withdrawal button) and low liquidity. P2P2B and other exchanges reported serious withdrawal delays and missing transactions.

- **Oracle design and implementation**: Discussion of 8-trusted-party oracle architecture to reduce collusion risk and single-point-of-failure coding errors. Question raised about aggregating oracle pattern vs. distributed contract logic for reading results.

- **Wallet integration and derivation paths**: Questions about importing wallet seeds into Magnum wallet, with discussion of derivation path requirements from node API. Magnum noted as local wallet cooperating with Ledger and Trezor, with basic token support expected.

- **Blockchain fee markets and spam protection**: Extensive technical discussion on mempool management, spam transaction behavior, fee estimation, and node-level filters to prevent spammer propagation.

## Important Decisions or Announcements

- [@Unknown, msg#14022, 2019-10-02]: Hotbit announced ERG listing starting 2019-10-09 15:00 UTC+8 with deposit and ERG/BTC trading pair opening
- [@Unknown, msg#14134, 2019-10-08]: Hotbit official launch notice confirming October 9th opening with deposit and trading pair activation
- [@Jason Davies, msg#14250, 2019-10-11]: CMC updated Ergo description; circulating supply correction still pending
- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#14272, 2019-10-13]: WeChat community resources shared for Chinese community engagement

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#14025): "I'd like to try to import a wallet seed into Magnum wallet. Anything I should be aware of? What's the standard deviation path from the node?"
  **A** (@Ilya Oskin, msg#14026-14027): Derivation path is obtained from node response when deriving new key via API endpoint (https://github.com/ergoplatform/ergo/blob/898aa239c3da080760f6a9a3c4547711179bd862/src/main/resources/api/openapi.yaml#L1841). Needed if you require keys different from root.

- **Q** (@Unknown, msg#14000): "Are you saying there will be an 'aggregating oracle' which takes all 8 of the actual oracles and then just spits out the final result so that other contracts can read the result? Or are you saying each contract should implement such logic themselves?"
  **A** (implicit from msg#13987 context): 8 trusted parties running oracles reduces collusion likelihood and single-point coding error failure modes. Architecture pattern (aggregating vs. distributed) appears unresolved in this segment.

- **Q** (@Unknown, msg#14193): "@kushti_ru 50%+ of blocks mined within 1024 blocks epoch need to be for raising the limit and then limit will be higher of 1% in next epoch, is that correct?"
  **A** (not provided in segment, flagged as unanswered)

## Links Shared

- [https://twitter.com/ergoplatformorg/status/1178577553789014016]: Unknown context (shared 2019-09-30)
- [https://twitter.com/ergoplatformorg/status/1178715047398400000]: Unknown context (shared 2019-09-30)
- [https://www.ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73]: scalahub question on fee payment mechanisms in ErgoMix
- [https://twitter.com/ergoplatformorg/status/1180340119099850753]: Unknown context (shared 2019-10-04)
- [https://twitter.com/Hotbit_news/status/1179366976046714881]: Hotbit ERG listing announcement (2019-10-02)
- [https://twitter.com/Hotbit_news/status/1181492203035643904]: Hotbit trading pair announcement (2019-10-08)
- [https://twitter.com/Hotbit_news/status/1181528994581114880]: Hotbit related announcement (2019-10-08)
- [https://twitter.com/ergoplatformorg/status/1181583225115820037]: Ergo Foundation announcement (2019-10-08)
- [https://ergoplatform.org/en/blog/2019_07_09_after_launch/]: Post-launch Ergo analysis blog (shared 2019-10-09)
- [https://www.ergoforum.org/t/hotbit-ama-10-10-2019-transcript/107]: Hotbit AMA transcript (2019-10-10)
- [https://twitter.com/ergoplatformorg/status/1182228109694779392]: Ergo Foundation announcement (2019-10-10)
- [https://twitter.com/ergoplatformorg/status/1182899030675918848]: Ergo Foundation announcement (2019-10-12)

## Unresolved Questions

- **Oracle aggregation pattern**: Whether the 8-oracle system uses a single aggregating contract or distributed per-contract logic remains unspecified (msg#14000)
- **Difficulty adjustment mechanism**: Exact logic for 50%+ block threshold triggering 1% limit increase within 1024-block epoch (msg#14193, unanswered)
- **Hotbit withdrawal functionality**: Root cause and timeline for inactive withdrawal button not explained (msg#14223-14226)
- **P2PB2B exchange reliability**: Widespread withdrawal failures reported but no official response from exchange or Ergo team (msg#14231-14242)
- **Magnum wallet token support**: Timeline for token support implementation unclear (msg#14030)

---

**Note**: This week shows early exchange listing activity and infrastructure maturation challenges. The oracle discussion indicates active protocol design work, but many exchange issues appear to be third-party platform problems rather than protocol-level concerns. Community engagement is growing with Chinese WeChat integration announced.