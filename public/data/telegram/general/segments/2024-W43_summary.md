# Ergo General Chat — 2024-W43 Summary

## Key Topics Discussed

- **Rosen Bridge Expansion**: BSC integration actively in development on GitHub; Ethereum already live. Team working toward multi-chain strategy including Solana, Sui, Base, Kaspa, and all EVM chains.

- **rsERG Listings**: rsERG successfully verified on Uniswap and added to CoinGecko; efforts underway to add Cardano pool info and get listed on additional DEXes (1inch, SundaeSwap). Marketing challenge around liquidity depth on secondary chains.

- **MewFinance LP Initiative**: Community-driven liquidity program launching with small-scale presales and token bridging. rsSNEK integration served as proof-of-concept; MewMart escrow features for peer-to-peer trading discussed. Mew Kitties NFT collection presale live with tier-based benefits.

- **Hummingbot Integration**: Mew partnering with Rosen for automated trading and market-making on Ergo DEXes; aims to enable self-service liquidity management without middle parties.

- **Protocol Development Roadmap**: 6.0 finalization on track, voting proposed for December. Sub-blocks code planning begun; focus on real-world utility rather than performance metrics alone. Sidechain discussion framed around application-specific needs (merged mining, credentials, privacy).

- **SigmaUSD Scalability & Djed Comparison**: Current bank can handle ~$1M swaps at ~$26k USD cost. Djed (Cardano equivalent) metrics referenced. Arbitrage opportunities between treasury price and pool price noted; risk mitigation emphasized.

- **Storage Rent & Coin Recycling**: ERG lost to invalid addresses are recycled via storage rent (demurrage), ensuring true fixed supply unlike Bitcoin; demonstrated as security & UX advantage.

- **Lithos Protocol Commodity Stablecoins**: Lithium-backed algorithmic stablecoin announced (redeemable 1:1 when physical mining available). Silver support oracle fork funded by Armeanio; broader commodities vision for Gluon-based tokens.

- **RoseNet Testing Initiative**: p2p communication layer for Rosen guards entering final test phase; seeking global decentralized node operators (8GB+ RAM, 8+ cores, stable internet) for ~24-hour test to improve bridging speed and prevent stuck events.

---

## Important Decisions or Announcements

- [@HQΣr | Wont Dm 🐾 ⚡, msg#521779, 2024-10-23]: **MewFinance LP Program Announcement** — Launching presale rounds for ERG acquisition, token bridging, and LP creation; community emphasis on ecosystem strength over individual miner selling pressure.

- [@Armeanio, msg#522009 & #522014, 2024-10-24]: **Rosen Bridge Now on Ethereum; BSC Next** — Ethereum integration live. BSC integration underway; timeline unclear but code actively in GitHub.

- [@CW, msg#522376, 2024-10-25]: **Rosen Multi-Chain Roadmap Public** — Confirmed chains: Ergo, Cardano, Bitcoin, Ethereum. In-progress: BSC, Solana, Sui, Base, Dogecoin, Flux, Kaspa, privacy coins, all UTXO chains, all EVM chains, all L2s.

- [@kushti, msg#522068 & #522238, 2024-10-24]: **Protocol Evolution Strategy** — Merged one 6.0 PR; EIP finalization and community/miner voting proposed for December. Sub-blocks planning underway; sidechain vision focused on real-world applications, not crypto-only metrics.

- [@Armeanio, msg#522251-252, 2024-10-24]: **Sidechain Proposal: Merged-Mined GPU Cards** — Proposed first sidechain focus: small commodity GPUs with merged mining rewards for Ergo miners. Paideia and Rosen to oversee development and provide bootstrap funding.

- [@Armeanio, msg#522797, 2024-10-27]: **RoseNet p2p Layer Testing** — Final stages of testing for improved Rosen guard p2p communication; seeks global community node operators for decentralized network test (~24 hours, 8GB+ RAM, 8+ cores).

- [@Glasgow｜WON'T DM, msg#521551-552, 2024-10-23]: **rsERG Cross-Chain Listing Fees** — ~$1k spent so far on Uniswap/CoinGecko fees; other rs-tokens planning similar costs; note higher than some CEX listings.

- [@kushti, msg#521631-632, 2024-10-23]: **CoinGecko Spam Wave** — rsERG CoinGecko listing triggered significant spam in community channels; acknowledged as expected side effect.

- [@Bruno Woltzenlogel Paleo, msg#521572, 2024-10-23]: **Cardano Catalyst Voting Alert** — Minimum ADA for voting reduced to 25 ADA (~$10). Deadline for registration: **Nov 20**; voting opens Nov 28. Ergo-related projects eligible.

- [@cannon_q, msg#521527, 2024-10-22]: **Previous Market Maker Exit Context** — MM indicted by US Gov't on separate token; voluntarily quit to avoid liability association with Ergo.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Does Ergo have a threads account? Most people migrating from Twitter.
  **A** (@Aberg): Why migrate to Threads (owned by Meta) instead of Mastodon? More confusing UX.
  **A** (@Glasgow｜WON'T DM): Mastodon is less known. Bsky and Threads usually get exodus; recently for allowing blocked users to read content.

- **Q** (@Shiv Chauhan): Can Zephyr protocol's PoW-based stablecoin reward model work on Ergo? Any loopholes/risks?
  **A** (@kushti, msg#522036): Not yet in Ergo. Could work in sidechain context. Alternatives: lock sidechain block rewards in LP, reward miners with vested LP tokens. Connecting protocol core with dapp not ideal for generic DeFi platform.

- **Q** (@Unknown): How does DuckPools liquidation work? 135% collateral ratio confusing.
  **A** (@Pulsarz): If collateral value drops below 135%, liquidation risk triggers. Example: borrow $100 USD, need $135 USD collateral minimum. If it falls below that threshold, liquidation occurs. Liquidation fee is 30%.

- **Q** (@Derek): Hodlbox site down — did I lose my ERG?
  **A** (@kushti, msg#522555): Use https://savonarolalabs.github.io/hodlbox-xyz (GitHub-hosted backup). Don't click unknown Discord/Telegram links.

- **Q** (@Unknown): How to arbitrage SigmaUSD? Price discrepancies between CEX and treasury?
  **A** (@Unknown, msg#522593-595): Traders arb between SigmaUSD and SigmaRSV daily. Arb exists between treasury price vs. liquidity pool price. High risk — study AgeUSD mechanics before attempting.

- **Q** (@Unknown): What happens if I send ERG to typo'd/invalid address?
  **A** (@qx(), msg#522625-631): Nautilus validates addresses in real time and prevents bad sends. Some dApps (TradeOgre) let invalid txs through but usually refund. Unlike Bitcoin/ETH, **ERG lost to invalid addresses is recycled via demurrage (storage rent)**, ensuring true fixed supply.

- **Q** (@Unknown): Can I validate every ERG locked on Rosen Bridge is 1:1 matched with issued rsERG? Risk of double-spend?
  **A** (@Unknown, msg#522638): Manual validation possible via Rosen docs. Monitor multisig contract addresses and transaction history: https://docs.ergoplatform.com/eco/rosen/rosen-guard

- **Q** (@Unknown): Is SigmaUSD scalable for $1M+ swaps? Can it be CEX listed?
  **A** (@qx(), msg#522590): Current Sigmanauts bank ~$26k USD cost for $1M swap. SigmaUSD is decentralized; anyone can list, but design intent is not CEX-dependent. Collateral from reserve holders.

- **Q** (@Jack Σ): Seen BSC integration in GitHub — how easy to add vs. Ethereum?
  **A** (@Jack Σ, msg#521237): "Pro developers" built Ethereum well; BSC integration should be relatively straightforward.

---

## Links Shared

- [https://ergohack.io/register/]: ErgoHack 9 registration (closed Oct 23, 2024).

- [https://docs.ergoplatform.com/ef/ef-treasury/#holdings]: Ergo Foundation treasury holdings and asset breakdown.

- [https://www.taptools.io/charts/token/5cb6e093f8a900f82ad299c807511b9faf2273adbac58cf4a35a4c99.72734552475f4144415f4e4654]: rsERG-ADA liquidity pool chart and metrics on Cardano.

- [https://docs.projectcatalyst.io/]: Cardano Catalyst voting documentation and wallet support list.

- [https://github.com/Uniswap/default-token-list/]: Uniswap token list PR submissions (rsERG issue filed).

- [https://help.1inch.io/en/articles/4878336-how-to-get-a-token-listed-on-1inch]: 1inch token listing requirements ($200k liquidity minimum).

- [https://bonding-curve-research-group.gitbook.io/bonding-curve-research-group-library/from-static-to-dynamic-supply-tokens]: Bonding curve research for augmented supply token design.

- [https://savonarolalabs.github.io/hodlbox-xyz]: HodlBox recovery interface (GitHub-hosted).

- [https://docs.ergoplatform.com/eco/rosen/rosen-guard]: Rosen Bridge guard contract monitoring and validation guide.

- [https://mewfinance.com/kitties]: Mew Kitties NFT collection info and presale page.

- [https://t.me/spectrum_labs_community]: Spectrum DEX community Telegram.

- [https://github.com/mgpai22/ergpy/blob/main/examples/example_5_bulk_mint_with_royalty.py]: mgPai ErgPy bulk minting example (fixed 2 weeks prior, broken again during week).

- [https://vxtwitter.com/chepurnoy/status/1849867724417274204]: kushti video on protocol evolution posted Oct 25.

---

## Unresolved Questions

- **Sub-blocks Timeline**: kushti indicated "probable Q2 2025" landing but noted proposal finalization needed first to understand codebase rework scope. No hard ETA confirmed.

- **First Sidechain Identity**: Armeanio proposed GPU card-focused sidechain but marked as "idea" not commitment. No clear first application chosen; kushti emphasized "meaning" required — no sidechain work will proceed without real-world utility justification.

- **Hummingbot Ergo Integration Status**: @Glasgow mentioned "almost done" but exact completion date TBD. Feature scope for Spectrum/MewDex integration unclear.

- **Market Maker Recruitment**: New MM expected to "fill books ASAP" after indictment-related exit. Mexc backup MM timeline: "like 10 days" (as of Oct 24). Dependent on KYC requirements.

- **rsERG Cardano Listing on Uniswap**: rsERG appears on CoinGecko but Cardano pool not yet displayed by Uniswap UI despite policyID submitted. Glasgow to email Uniswap for clarification.

- **SundaeSwap rsERG Trading**: rsERG visible on TapTools and LP exists, but cannot execute swaps on SundaeSwap frontend even with policyID input. Cause unresolved; possibly UX/filtering issue.

- **Privacy Feature Roadmap**: @LouisLibre raised Mimblewimble and Confidential Transactions for tokens as post-sub-blocks ideas. No EF/core team response or prioritization indicated.

- **Ergo Threads/Bluesky Presence**: Discussed as marketing gap but no decision on resource allocation or community ambassador program structure.

---

## Notable Context

- **Market Maker Change**: Old MM (indicted by US Gov't on unrelated token scheme) exited voluntarily. Community acknowledged as responsible self-removal to avoid FUD; new MM procurement underway.

- **Spam & Growth Signal**: CoinGecko listing triggered flood of spam to admins, treated as expected side effect of increased visibility rather than crisis.

- **Community-Led Initiatives**: MewFinance LP program, Rosen p2p testing, rsERG ecosystem expansion framed as community + project collaboration, not top-down EF mandates.

- **Crypto Industry Skepticism**: kushti repeatedly criticized memecoin casino, VC-backed chains, and marketing-over-substance trends; emphasized focus on real-world problems and applications vs. crypto-native metrics.