# Ergo General Chat — 2020-W51 Summary

## Key Topics Discussed

- **Autolykos v2 & Protocol Upgrade**: Hard fork scheduled for ~27 January 2021 to disable pool resistance and enable efficient mining on 2GB cards, FPGAs, and GPUs. Changes use Wagner algorithm similar to Equihash but with community-driven optimization. Code preview to be released Monday (2020-12-21) for audit.

- **Headless dApp Framework**: EMURGO released framework and tutorials enabling developers to build multiple UI/UX frontends on top of shared smart contracts, decentralizing dApp development similar to Uniswap's model.

- **Oracle Pools & Chainlink Partnership**: Ergo Oracle Pools v1 (EF + community) and v2 (Dexy Gold with GORT rewards) being developed; Chainlink partnership discussed for proof-of-reserve on warehouse receipts and trade financing via Winter Protocol.

- **Stablecoin Development**: SigmaUSD expected at/around Ergo Summit (23 Jan 2021); mechanism involves collateralization via smart contracts.

- **Ergo Summit (23 Jan 2021, 2pm UTC)**: One-day event with developer presentations; protocol upgrade and stablecoin announcements expected. URL: ergosummit.org

- **Scalability Roadmap**: Sub-block confirmation protocols (Bitcoin-NG, Flux-like) being evaluated; sidechaining considered; stateless clients for Raspberry Pi nodes in development; faster confirmations via soft-fork planned for 2021.

- **Storage Rent & Light Clients**: Ergo designed for stateless verification; NIPoPoWs enable efficient proof of work for light clients without full blockchain history.

- **Mixer Integration**: Auction bid successfully made from mixer (msg#70094), demonstrating privacy-preserving DeFi functionality.

- **NFT/Auction House**: ErgoUtils and auction platform (ergoauctions.org) live; simple UI for issuing tokens and NFTs; art auctions ongoing.

- **Erngo-Cardano Interoperability**: Yoroi wallet integration; EMURGO backing; Charles Hoskinson mentioned bringing Ergo into January Cardano update (msg#69985, 69990); Oracle Pools remain Ergo's primary contribution alongside other oracle solutions (API3, Chainlink, Wolfram).

- **Mining Distribution**: Concerns raised about miner concentration post-hardfork; discussion of Autolykos v2 reducing hardware advantage; emergence of solo mining opportunity for ETH miners migrating post-ETH 2.0.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#69230, 2020-12-14]: New content initiative for protocol and app materials announced; videos on mixer and node setup coming.

- [@kushti khushi, msg#70233, 2020-12-18]: Protocol upgrade code complete; preview release Monday with audit window before deployment.

- [@kushti khushi, msg#70070, 2020-12-17]: Scalability roadmap confirmed — stateless clients for RPis, sub-block protocols (Bitcoin-NG/Flux-like), and soft-fork implementation planned for 2021.

- [@kushti khushi, msg#70113, 2020-12-17]: JS template (React + ErgoLib) for headless dApps coming; anon-real publishing open-source framework.

- [@kushti khushi, msg#70109, 2020-12-17]: Spec for Autolykos v1/v2 differences to be released before Monday; Stratum protocol and open-source miners coming post-summit.

- [@UpwindStrategy | King de' Medici, msg#70288-70298, 2020-12-18]: Article published: "Oracle Special - what does that mean for Cardano and Ergo" on Medium; shared to Twitter for competition entry (500 ERG prize for top articles).

- [@Richi [MANA], msg#70238-70241, 2020-12-18]: Oracle ecosystem multi-solution: Ergo, API3, Chainlink, Wolfram Blockchain Labs all integrated; Cardano building framework for choice.

- [@kushti khushi, msg#70481, 2020-12-20]: Twitter announcement of protocol details (likely Autolykos v2 spec).

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#70009): "Question to devs/admins: how scalable is the Ergo blockchain?"  
  **A** (@kushti khushi, msg#70070): Scalability is multi-faceted. Currently: stateless clients for Raspberry Pi full nodes. Planned 2021: sub-block confirmation protocols (Bitcoin-NG or Flux-like) via soft-fork for faster confirmations; sidechaining consideration.

- **Q** (@Unknown, msg#70071): "Would a sub-block protocol be similar to microblocks with Waves, or something else?"  
  **A** (@kushti khushi, msg#70076): Bitcoin-NG or Flux-like protocol. Several papers exist; need to determine best fit for Ergo and possible sidechain combination (msg#70080).

- **Q** (@Unknown, msg#70114): "Since ErgoScript is not Turing complete but different scripts for different actions make it Turing complete, how many scripts needed for a DEX?"  
  **A** (implicit in design): Multiple scripts required; anon-real publishing React template to simplify dApp construction.

- **Q** (@Unknown, msg#69905): "What requirements must a blockchain have to host crypto domains? Can Ergo host?"  
  **A** (@kushti khushi, msg#70100): Yes. With NIPoPoWs, Ergo can efficiently prove .erg names to those not storing full blockchain; developer previously considered replacing HNS with Ergo contracts but now focused on other Ergo work.

- **Q** (@Unknown, msg#69846): "How different is Equihash from Autolykos?"  
  **A** (@kushti khushi, msg#69914): Not much; same Wagner algorithm is best known for both.

- **Q** (@Unknown, msg#69552): [Re: Pool resistance hard fork] "Is it a hard fork or soft fork?"  
  **A** (@Unknown, msg#69557): Code is hard-forked but chain remains same; no new token (unlike BTC→BCH). Classification nuanced but consensus-level change requires hard fork designation.

- **Q** (@Unknown, msg#70195): "Like Cardano has hard-fork combinator, what does Ergo have to prevent chain split?"  
  **A** (referenced msg#69557): See prior discussion on hard fork mechanism; specifics deferred.

- **Q** (@chrom, msg#69633): "If I win an NFT auction, how do I receive it? Is it its own token? Will it store to my wallet?"  
  **A** (@Dmitry Usov, msg#69657): You receive it to the wallet address from which you bid.

---

## Links Shared

- [ergosummit.org](http://ergosummit.org/): Ergo Summit 2021 event page (23 Jan, 2pm UTC)
- [ergoutils.org](https://ergoutils.org/#/general): Token issuance via smart contract proxy service
- [ergoauctions.org](https://ergoauctions.org/#/auction/active): Live NFT art auctions
- [github.com/Emurgo/ergo-headless-dapp-framework](https://github.com/Emurgo/ergo-headless-dapp-framework): React + ErgoLib dApp template with tutorials
- [twitter.com/ergoplatformorg/status/1338229646241001473](https://twitter.com/ergoplatformorg/status/1338229646241001473): Protocol & apps materials initiative announcement
- [twitter.com/ergoplatformorg/status/1338535655626985474](https://twitter.com/ergoplatformorg/status/1338535655626985474): Ergo Summit announcement
- [youtube.com/watch?v=temmjyKpsEU](https://www.youtube.com/watch?v=temmjyKpsEU): EMURGO/Robert Kornacki headless dApps discussion
- [youtube.com/watch?v=OAHFHrHq3Oc](https://www.youtube.com/watch?v=OAHFHrHq3Oc): Ergo DeFi video (voice-over community project)
- [ergoforum.org/t/autolykos-v-2-details/480](https://www.ergoforum.org/t/autolykos-v-2-details/480): Autolykos v2 technical details
- [ergoplatform.org/en/blog/2020-12-18-2021-the-next-battlegrounds-for-defi/](https://ergoplatform.org/en/blog/2020-12-18-2021-the-next-battlegrounds-for-defi/): Blog post on 2021 DeFi landscape (msg#70216)
- [veriumfellow.medium.com/oracle-special-4e36cfa6a852](https://veriumfellow.medium.com/oracle-special-4e36cfa6a852): "Oracle Special" article by Verium fellow on Cardano/Ergo oracles
- [explorer.ergoplatform.com/en/transactions/99630b8773f3d8b5e67014f831866bd3162f66bfa7540083ebd9485f7d140e5a](https://explorer.ergoplatform.com/en/transactions/99630b8773f3d8b5e67014f831866bd3162f66bfa7540083ebd9485f7d140e5a): Auction bid from mixer (privacy-preserving DeFi example)

---

## Unresolved Questions

- **Ledger Hardware Wallet Support**: Multiple requests (msg#70497) about Ledger integration; no response from devs.

- **New Exchange Listings**: Community repeatedly asking for major exchange listings (HotBit, Gate.io, TIDEX mentioned); only Citex discussed; status unclear.

- **Emission vs Price Suppression**: Discussion whether miner dump pressure suppresses price; concern about unfair advantage for optimized GPU miners (msg#69518, 69542); no definitive dev response on mining centralization risk post-hardfork.

- **Pool Resistance Reversal Rationale**: While technical details confirmed, some community confusion remains about why a desirable decentralization feature is being disabled — stated reason is to attract ETH miners post-ETH 2.0, but long-term centralization implications not fully addressed in chat.

- **Charles Hoskinson/Cardano Mentions**: Community concerns about lack of Ergo mentions in Charles' recent oracle video (msg#70503); announcement of January Cardano update mention (msg#69985) suggests resolution pending but not confirmed.

- **Wolfram Blockchain Labs Partnership**: Announced alongside Cardano/Nervos (msg#69932, 69945) but scope and Ergo involvement unclear; multiple users questioning whether Ergo is being sidelined.

- **HEX Comparison**: Tangential debate (msg#70031-70059) about HEX token design vs Ergo; no Ergo dev response.

- **Stablecoin Release Date**: Expected at Summit but no firm date announced; msg#70270 indicates active development but timeline TBD.

---

## Community Sentiment & Meta-Discussion

- Strong enthusiasm for technical foundations (research-backed, peer-reviewed approach).
- Frustration with lack of marketing/exchange listings relative to competitors.
- Appreciation for developer transparency and community integration (grants, contests, open-source tools).
- Skepticism toward hype-driven altcoins and rug pulls; Ergo valued for substance over speculation.
- Concerns about centralization risks being traded off for near-term miner adoption.