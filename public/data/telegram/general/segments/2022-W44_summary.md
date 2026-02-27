# Ergo General Chat Summary — 2022-W44 (Oct 31 – Nov 6)

## Key Topics Discussed

- **Rosen Bridge Status**: Multiple mentions of imminent mainnet launch. @HQΣr reported (msg#341955): "Very close to be live. I'm expecting it to be tomorrow. Can't promise however." Also noted: serious health issues and bugs mostly fixed.

- **ErgoWell Project**: Introduced as a crowdfunding/venture investment platform on Ergo. Allows investors to search projects, invest, and receive rewards; allows venture owners to raise money. Links provided: https://github.com/mhssamadani/ErgoWell

- **Node 5.0.2 Release**: @chrom announced (msg#342182) Ergo Protocol Reference Client 5.0.2 released with Babel Fees, AppKit updates, and Orosen Bridge progress.

- **Node/Explorer Indexing Issue (2022-11-06)**: Array casting bug (longs to bytes) caused explorer to hang. @Aberg identified root cause (msg#343216); blocks continued to be produced but indexing was broken. Awaited fix by dev team.

- **EIP-38 Mining Voting Proposal**: Discussion of voting mechanism for protocol changes. @Şerafettin raised concerns about mining pool voting monopoly vs. individual miner choice. @qx() clarified distinction between smart pool solution (no hard fork) vs. hard fork solution; proposed that hard fork is preferable to avoid pool bifurcation.

- **Lithos Protocol & Storage Rent**: Referenced in Palmyra context but no detailed updates this week.

- **Spectrum DEX Liquidity & Trade House**: Ongoing discussion of order book vs. AMM models. @qx() praised Spectrum (msg#342496) for supporting both partial fills and peer-to-peer control; users can set precise execution conditions without slippage concerns.

- **Palmyra/ZenGate (now called Palmyra)**: @Dan Friedman outlined partnership with Chainlink for proof-of-reserve-backed warehouse receipts for decentralized trade financing. Uses Oracle Pools v1 (EF + community) and v2 (running for Dexy Gold with GORT rewards). Plan to invest in building native Ergo oracles.

- **CyberVerse (Pixel-Based Game)**: Community-driven open-world game with blockchain integration (NFTs, custom tokens, in-game marketplace). IDO on ErgoPad with audioNFT airdrops for staker/seed round participants.

- **Sigmanauts Program**: Held governance meeting (2022-11-06). Agenda: Voting app demo, mission statement drafting, subcommittee structure (Governance meets Sundays 2pm UTC), treasury management, formal roles/responsibilities documentation, Twitter strategy.

- **Hardware Wallet Support**: @ApophisRO asked about Ledger/Trezor integration (msg#341717–#341727). Answer: no native support yet, but integration planned for future. Cold storage wallets recommended. @Glasgow mentioned (msg#342139) Tesseract team working on update to get Ledger working.

- **Token Minting**: @qx() confirmed (msg#341752) Ergo Utils (.token endpoint) still works for regular token minting; Auction House now handles NFT minting as well.

- **Community Exchange Listings**: @Unknown (Latoken growth manager) approached for Ergo listing. Community feedback mixed; @Armeanio noted (msg#341958) Latoken historically charged fees for open-source integration, refused in the past. @Dmitry Usov warned (msg#341960) "All my friends tell me they are scammers."

- **Mining & Difficulty**: @HQΣr asked (msg#341892) about merge-mined miners and difficulty issues. General consensus: network hash continues, profitability depends on hardware efficiency and electricity costs. Solo mining option available.

- **Babel Fees**: Mentioned in weekly update (msg#343103) but no detail provided this week.

## Important Decisions or Announcements

- [@chrom, msg#342182, 2022-11-03]: Ergo Protocol Reference Client 5.0.2 Released with Babel Fees, Node 5.0.2, Rosen Bridge, AppKit, Oracles v2, Sigma Updates.

- [@Armeanio, msg#342190, 2022-11-03]: AMA is about to start live on YouTube.

- [@Dan Friedman, msg#342233, 2022-11-03]: Thanks for participating in Telegram AMA; live AMA went well.

- [@kushti, msg#342727, 2022-11-05]: Will give talk at Web3 Dubai Meetup (https://www.meetup.com/web3dubai/events/289496284/); considering Ergo Meetup in Bangalore, India Jan/Feb.

- [@Dan Friedman, msg#342782, 2022-11-05]: Made limited merchandise run for US summits; more coming soon. Planned to meet @kushti in Dubai on 2022-11-12.

- [@Glasgow, msg#342132, 2022-11-03]: Weekly Developer Update (youtu.be/ZDO-41oIBOI) and podcast episode posted; Medium article by Sigmanauts documenting updates.

- [@qx(), msg#343182, 2022-11-06]: Sigmanauts Meeting notes published. Governance committee meets Sundays 2pm UTC. Mission statement and Sigmanaut role definition to be drafted and voted on.

## Technical Q&A Worth Preserving

- **Q** (@Ian Lee, msg#341527): "If people able to get the key, your asset will loss right?" (regarding Ledger security)  
  **A** (@chrom, msg#341529–#341530): "Main point is you're never typing out your seed phrase with a hardware wallet. You're right if someone knows your seed phrase then you're screwed."

- **Q** (@Unknown, msg#342029): "What is the difference between slippage tolerance and price impact?"  
  **A** (@Unknown, msg#342151–#342153 / @qx()): Slippage tolerance is the setting you configure; price impact is the actual discrepancy that occurs when trading on shallow vs. deep liquidity pools. Example: shallow pools move price with individual trades; deep pools require massive volume to move price.

- **Q** (@ApophisRO, msg#341717): "Are there any wallets that support ledger or trezor for ERGO?"  
  **A** (@Unknown, msg#341724–#341726): Reference to cold wallets; Minotaur, Nautilus, and Satergo available. Ledger/Trezor integration in development (per @Glasgow, msg#342139).

- **Q** (@Jon, msg#343069): "When sending whole amount from Android wallet I get 'transaction requested exceeds the input boxes limit'"  
  **A** (@MrStahlfelge, msg#343111–#343112): "You have too much input and need to reduce the amount. Go to dApps → box consolidation to see how many boxes you have."

- **Q** (@Şerafettin, msg#342957–#342958): "Why can't individual miners vote Yes/No on protocol changes instead of following pool's decision?"  
  **A** (@qx(), msg#342959, @qx(), msg#343043–#343044): EIP-38 (smart pool voting) would split hash between Yes/No pools, reducing chances for both. Hard fork solution preferred because it avoids bifurcation. Miners must understand contracts to participate meaningfully; otherwise, pool operators make effective decisions.

- **Q** (@Compost Man, msg#343123): "When will Spectrum tokens be distributed?"  
  **A** (@Gazza, msg#343132): "Soon..." (no concrete date given).

- **Q** (@Chris Ray, msg#343239–#343240): "What is everyone's take on the Paideia demo? Starting to dig into it for Exle"  
  [No substantive answer provided in chat; flagged for follow-up.]

- **Q** (@qx(), msg#342899): "When rapid-fire tipping, does your bot check the node's mempool before attempting the next tx?"  
  **A** (@Luivatra, msg#342920): "Bot reads mempool from explorer but submits tx to node. If you tip fast, previous tip hasn't reached explorer mempool yet, so it tries to spend the same UTXO again. Double-spend error now caught (wasn't before)."

- **Q** (@Phillip Scheindlinger, msg#341241): "Transferred ERG from Trade Ogre to wallet, says incoming but 30 mins later nothing appears"  
  **A** (@qx(), msg#346246–#346251): Explorer had a data type casting bug (longs→bytes array) causing indexing to hang. Blocks still being produced; issue is visibility only. Awaiting dev fix.

## Links Shared

- [https://ergoutils.org/#/token]: Token and NFT minting utility (working as of 2022-11-01).
- [https://ergoraffle.com/raffle/show/754e...06f1]: Christmas present raffle for poor kids (2022-11-01).
- [https://ergoraffle.com/raffle/show/0e51...fdf5]: "Style, Christmas and community" raffle (kushti pants fundraiser, 2022-11-05).
- [https://github.com/mhssamadani/ErgoWell]: ErgoWell crowdfunding/venture investment project (2022-11-03).
- [https://sigmaverse.io/all-projects/?category=dApps]: Directory of Ergo dApps (2022-11-01).
- [https://youtu.be/czgQ5ALPggw]: Azorus demo (swamp audio dev progress, 2022-11-31).
- [https://github.com/gsblabsio/azorus/blob/main/SUMMARY.md]: Azorus blockchain data analytics tool summary (2022-11-01).
- [https://www.meetup.com/web3dubai/events/289496284/]: Web3 Dubai Meetup where kushti will speak (2022-11-05).
- [https://docs.ergoplatform.com/events/ergohack/#ergohackv]: ErgoHack projects directory (2022-11-02).
- [https://my.ergoport.dev/graphs/hash-16-11.gif]: Ergo mining hashrate graph (2022-11-03).
- [https://ergoplatform.org/en/get-erg/#Exchanges]: Official Ergo exchange/DEX listing page (2022-11-04).
- [https://youtu.be/ZDO-41oIBOI]: Weekly Developer Update video (2022-11-06).
- [https://sigmanauts.medium.com/ergo-weekly-developer-update-6-november-2022-ad7a130869e9]: Sigmanauts Medium article on weekly dev updates (2022-11-06).
- [https://docs.google.com/document/d/1Jc_WzaAPgZNalRizfN49FbSOSKzW9gkF-tmv6f9a0BU/edit]: Sigmanauts Meeting Notes & Agenda (2022-11-06).
- [https://dalek.zone/w/quqExPoNiabYLKFx1FqUsf]: EIP-38 ErgoHack V entry documentation (2022-11-05).
- [https://www.ergoforum.org/t/reproducible-assets/4040]: Ergo Forum discussion on reproducible assets (@kushti, 2022-11-06).
- [https://www.skyharbor.io/]: SkyHarbor NFT marketplace (2022-11-05).

## Unresolved Questions

- **Ledger/Trezor Native Support**: Timeline unclear. @Glasgow mentioned Tesseract team is working on it but no ETA given (msg#342139).

- **Spectrum Token Distribution**: @Gazza said "Soon..." (msg#343132) but no concrete date or mechanism explained.

- **EIP-38 Voting Status**: Unclear whether EIP-38 was formally voted on or rejected. @Şerafettin asked (msg#342955–#343050) if EIP-38 was voted No and whether EIP-39 will include mining-choice mechanisms. @qx() was unsure if code was even created (msg#343052). Arohbe was tagged for clarification but no response captured.

- **Paideia Demo Feedback**: @Chris Ray asked (msg#343239–#343240) for community take on Paideia demo for Exle project; no substantive feedback provided.

- **Wrapped Ergo on Ethereum**: @MrStahlfelge mentioned (msg#342770) wrapped Ergo exists on Ethereum; @Foeniculum joked (msg#342771) "ethereum people wish they had ergo on ethereum." No discussion of utility or plans.

- **Babel Fees Implementation Details**: Announced in node release (msg#343103) but no technical discussion or rollout timeline provided.

- **Oracle Pools v2 Rollout**: @Dan mentioned v2 running for Dexy Gold with GORT rewards but "thinking of V2" (msg#342342). Unclear if v2 is already live or still in beta.

---

## Notable Community Events

- **Ergoversary (Ergo Anniversary)**: Multiple references to upcoming Ergo anniversary video content and celebrations (msgs throughout week).
- **Web3 Dubai Meetup (Nov 5–13, 2022)**: kushti attending; meeting with @Dan Friedman on Nov 12.
- **ErgoHack V Results Coming Soon**: @qx() ran quiz (msg#341549) guessing next ErgoHack number (VI confirmed, msg#341557).
- **Sigmanauts Governance Committee**: Formalized weekly meetings (Sundays 2pm UTC) to draft mission statement, define roles, manage treasury.