# Ergo General Chat — 2025-W18 Summary

## Key Topics Discussed

- **Infrastructure & Database Access**: Distributed indexed node access becoming available to ecosystem developers. @qx() offered PostgreSQL database access to @Aco for ErgoExplorer improvements, enabling new on-chain analytics capabilities (token transaction counts, etc.).

- **Mobile Wallet Adoption & App Store Distribution**: Critical friction point identified for ecosystem growth. Current barriers include lack of DUNS numbers, Apple signature requirements, and JIT runtime restrictions. Proposed solutions include Marshall Islands DAO structure (~$5k setup + yearly costs) to enable anonymous developer app signing.

- **BRICK Token Adoption**: Student payment system gaining traction with 311 transactions and ~$1,000 in claimed savings to date (as of 2025-04-29).

- **Sub-blocks Protocol Development**: Confirmed as coming soon. Discussion of post-subblocks core development goals, Sigmachains development support, and extending Sigma to offchain/sidechain environments flagged as priorities for developer chat.

- **Token Economics & Liquidity vs. Development Funding**: Extensive debate on whether tokens are necessary for projects. Consensus emerging that while tokens can bootstrap liquidity, they create value-leak problems. Referenced successful models: Dexy Gold (no value-leaking token), SigmaUSD (no token), Spectrum contracts (continue providing value despite token depreciation).

- **Offline Payment Mechanisms**: Technical exploration of peer-to-peer payments without internet connectivity. Requires time-locked UTXO contracts with DAG resolution by timestamp and slashed ERG for double-spend punishment. @kushti developing forum post on this mechanism.

- **Dexy Gold & Stablecoin Design**: Active development with 0.1% service fee and 0.3% pool fee structure. Discussed as most interesting "secure" yield opportunity without value bleed except UI fee. Open questions remain on how bank rebalances liquidity pool when gold price changes.

- **Developer Tooling & Low-Code dApp Development**: @lovable.dev identified as enabling rapid UI generation for contracts. @Marc the Shark demonstrated workflow: PRD → LLM prompt → Lovable UI → Cursor for contract integration. Noted as viable path for building interfaces for deployed but unused contracts (Dexy, Gluon, etc.).

- **Rosen Bridge Treasury Proposals**: @Armeanio published Rosen Treasury Proposals 1-3, moving out of "Rosenlite" era with Rosenet upgrade. Focus on SPO (stake pool operator) partner rewards and bridge visibility growth.

- **Marketing vs. Building**: Debate on whether external PR agency investment is justified. Counterargument: best marketing is shipping working applications; KPI-based evaluation required if pursued. Consensus that current bottleneck is UI/DevX, not awareness.

---

## Important Decisions or Announcements

- [@kushti, msg#556534, 2025-04-28]: Welcomed returning community member back to Ergo ecosystem.

- [@qx(), msg#556714, 2025-04-30]: ACO now has PostgreSQL access to full explorer database; "we expect great things next on ergexplorer."

- [@Armeanio, msg#557070-071, 2025-05-02]: Submitted first Rosen Treasury Proposal (RTP) to GARD's DAO; open to all for review. Planning B2 visa support letters for Colorado Springs meetup.

- [@Armeanio, msg#557073, 2025-05-02]: "With Rosenet upgrade coming we are finally ready to move out of the Rosenlite era."

- [@c8, msg#556735-756, 2025-04-30]: Proposed Marshall Islands DAO legal structure (~$5k + yearly costs) to enable anonymous developers to sign and distribute mobile apps on app stores. First step is cost verification.

- [@Armeanio, msg#557328-330, 2025-05-04]: Published Rosen Treasury Proposals 1-3 on Medium; 2 of 4 complete. Fourth delayed pending payment resolution.

---

## Technical Q&A Worth Preserving

- **Q** (@cannon_q, msg#556602): "Approx how many tx [for BRICK]? That is super dope"  
  **A** (@qx(), msg#556644): 311 txs so far (as of 2025-04-29).

- **Q** (@cannon_q, msg#556720): "Any revisit on [ErgoTipperBot] given Quai Network launched a tipper bot on Twitter?"  
  **A** (@Luivatra, msg#556751): "I am not going to spend time and money on that sorry."

- **Q** (@HQΣr, msg#557038): "As u have experienced with order books, u think it could be implemented on DEX? As far I know the SC supports them, will require just frontend no?"  
  **A** (@Luivatra, msg#557047): "Current proxy doesn't support partial filling and only trading against pool, not other proxies. So depends what you want."

- **Q** (@Grayman, msg#556855): "If I were interested in learning to develop for Android but I don't care about being anonymous, does that just leave me with lack of gumption and experience? Why anon?"  
  **A** (@c8, msg#556868): "Because that's a majority in regards to productive application output."

- **Q** (@c8, msg#556973): "Can you explain what's so hard about UI?" [regarding Gluon interface development]  
  **A** (@kushti, msg#556978): "There is need to vibe code or code SDK for new interesting solution to predictions markets by Bruno. There are UI devs, he brought a couple to Ergo dev recently."

- **Q** (@cannon_q, msg#557121-124): What constitutes "high" vs "low" service fees on DEX pairs?  
  **A** (@cannon_q, msg#557124): "When fee for service is higher than fee to LP provider." Notes LP on Spectrum pairs 0.3% while service fee on 100 ERG trade often exceeds LP payout.

- **Q** (@iVacuum, msg#556893): Described real estate debt fund company exploring blockchain for transparency (DAO voting for fund resolution, retail investor access).  
  **A** (@cannon_q, msg#556894): Drew parallel to WDunlop lending structure for large multifamily real estate.

- **Q** (@c8, msg#557242): Offline payment mechanism feasibility?  
  **A** (@c8, msg#557243-251): Yes, requires time-locked UTXO DAG resolved by timestamp, min timestamp delta, locked unspendable ERG for slashing double-spends. No special hardware needed on consumer phones. @HQΣr noted @kushti finishing forum post on this.

- **Q** (@c8, msg#557125): "i am building dexygold with 0.1% service fee, pool fee 0.3% how is that ratio?"  
  **A** (@cannon_q, msg#557133): "0.1% is low" [context: LP on Spectrum typically 0.3%, many DEX pairs 0.3% is exploitative of LPs].

- **Q** (@c8, msg#557380): "Understand dexy?"  
  **A** (@Armeanio, msg#557382): "Looking forward to seeing Dexy in the wild." [Suggests interest but not yet comprehending mechanism.]

- **Q** (@Richi, msg#557390): "How does bank interact with Liquidity pool when gold price changes? If it is an ordinary swap transaction there might be many attack vectors."  
  **A** Unresolved; @c8 acknowledged concern but deferred to Dexy design specifics.

- **Q** (@c8, msg#557372): "Any idea to contract the supply if economic energy decreases?" [for RSN token]  
  **A** (@Armeanio, msg#557373-376): "Standard is burn mechanisms." Variable emissions pegged to Rosen bridge transfer volume proposed as alternative.

---

## Links Shared

- [https://docs.ergoplatform.com/uses/sidechains/input-blocks/]: Sidechain documentation on input-blocks (@TMR.ΣRG, msg#556530).

- [https://vxtwitter.com/KeystoneWallet/status/1916877569451769920]: Keystone Wallet integration announcement (@kushti, msg#556539).

- [https://x.com/ERG_Armeanio/status/1916895897218162873]: Armeanio's Rosen-related post (@Armeanio, msg#556543).

- [https://coinmarketleague.com/coin/ergo]: CoinMarketCap League voting link (multiple shares by @Yulius for community voting).

- [https://youtube.com/live/IRflAi_vnro]: Weekly Update & AMA stream May 1st, 2025 (@Andy L, msg#556800).

- [https://x.com/ergo_platform/status/1917898839874314309]: Official Ergo platform post (@qx(), msg#556807).

- [https://x.com/Alisovsky/status/1917916162085511221]: Post by Alisovsky shared by @kushti (msg#556876, context unclear).

- [https://lovable.dev/]: AI UI generation tool enabling rapid dApp frontend development (@Marc the Shark, msg#556964).

- [https://github.com/kushti/dexy-stable/tree/master/contracts]: Dexy stablecoin contracts repository (@c8, msg#556967).

- [https://x.com/officialxyo/]: XYO Network (for proof-of-location integration) (@c8, msg#556862).

- [https://hex.com/]: HEX token staking contract design reference (@cannon_q, msg#556356).

- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-1-77c3849ed71e]: Rosen Treasury Proposal 1 (@Armeanio, msg#557328).

- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-2-f702bea21b6d]: Rosen Treasury Proposal 2 (@Armeanio, msg#557329).

- [https://curiaregiscrypto.medium.com/rosen-treasury-proposal-3-rewarding-our-spo-partners-and-growing-ergo-and-rosen-bridge-visibility-aa6900fcb7f0]: Rosen Treasury Proposal 3 – SPO partner rewards & visibility (@Armeanio, msg#557340).

---

## Unresolved Questions

- **App Store Distribution Legal Path**: Exact cost structure and feasibility of Marshall Islands DAO vs. using existing Ergo Foundation UK LTD entity (@c8 vs. @Glasgow, msg#556744-799). Decision between personal LLC, EF account, or DAO structure pending cost verification.

- **Dexy Gold Bank Rebalancing Mechanism**: How DexyBank rebalances liquidity pool when gold price changes — attack surface not yet fully explained (@Richi, msg#557390).

- **Token Supply Contraction**: Whether RSN or other Ergo tokens should have contraction mechanisms (beyond burns) if economic activity decreases (@c8, msg#557372). Proposed variable emissions pegged to bridge transfers, but no finalized design.

- **Sub-blocks Testnet Public Release**: Exact timeline for public testnet launch. @Armeanio indicated "this week" (week of 2025-05-05) in Discord, but no confirmation in chat logs.

- **Offline Payment Forum Post**: @kushti said to be finishing forum post on offline payment mechanisms; ETA not specified (@HQΣr, msg#557249).

- **Gluon UI Development**: Who will vibe-code the Gluon interface? @kushti noted UI devs available but no assignment confirmed (@kushti, msg#556978).

- **Marketing Agency Feasibility**: Should Ergo community fund external PR/marketing agency? Proposed as raffle; requires: (a) KPI-based evaluation framework, (b) 3-5 competitive proposals from agencies with deliverable scope. No decision made (@J, @c8, @Dmitriy, msg#556928-960).

- **PoW vs. PoS Long-Term Viability**: Debate unresolved on whether PoS will "crash in cryptopocalypse" making PoW coins like Ergo safe havens (@DiscordBridge/tyja, msg#557159-162).

- **Proxy Contract Universal Bot**: Feasibility of single node-integrated bot executing multiple "forward me" proxy contracts from community-curated GitHub list (@c8, msg#557399-404). DuckPools bot mentioned as precedent; broader standardization status unclear.