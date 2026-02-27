# Ergo General Chat — 2025-W34 Summary

## Key Topics Discussed

- **LST (Liquid Staking Token) Protocol Design on PoW**: Discussion on whether an LST protocol could work on Ergo given proof-of-work constraints, and whether perps or other high-fee DeFi protocols could generate yield to power staking rewards. Consensus: feasible if fee-generating protocols (perps, yield tokenization) redirect fees into LST yield pools, creating a DeFi flywheel.

- **Storage Rent and Perpetual Contracts**: Analysis of whether smart contracts designed to self-refresh could circumvent storage rent mechanics. Conclusion: refresh transactions still require mining fees (currently lower than storage rent), but miners will eventually price rationally; contracts that don't execute will incur higher storage rent on larger boxes.

- **Fee Architecture and Protocol Sustainability**: Debate over platform fees for Spectrum DEX and other dApps. Key point: removing UI fees via self-hosted clients undermines infrastructure funding; proposed solution is DAO-enforced contract-level fees that apply regardless of UI choice, ensuring builders and offchain bots remain funded.

- **Ergo Mixer Adoption and Privacy Integration**: Discussion that Ergo's mixer exists but has poor UX and low awareness (estimated <1% of users know about it). Suggestion: integrate mixer as optional 3rd-party dApp in wallets with 1-click functionality; privacy tools are non-custodial and core to Ergo's design, not a regulatory liability.

- **Sub-blocks Devnet Relaunch**: kushti announced sub-blocks devnet relaunched with updated seed node (http://213.239.193.208:9058/info). Seeking community participation to tweak parameters, test difficulty levels, and gather scientific observations for potential block speed improvements.

- **Autolykos DAO Manifesto and Seed Round**: Aco Šmrkas announced Autolykos DAO seed round live on MewFinance, offering $LYKOS tokens for 1st DAO members. Manifesto emphasizes decentralization and community-driven mining governance.

- **Infrastructure DAO and Celaut Hosting**: Ergo NEWS posted article on Infrastructure DAO decentralizing node hosting and tooling. Josemi proposed Celaut as ideal solution for decentralized static site hosting (GitHub Pages + optional user-configurable indexer).

- **Feeless Spectrum DEX Fork (ErgoDEX Local)**: Patato released standalone executable running Spectrum DEX locally with zero platform fees (blockchain fees only), initially for Linux. Full decentralization question remains: offchain execution bots and backend remain centralized unless community runs them.

- **PoW Security vs PoS Criticisms**: kushti and Armeanio addressed Justin Bons' claim that PoW chains are vulnerable like Monero. Refutation: Monero wasn't 51% attacked and controlled; PoS security is weaker (rewriting history costless); new PoS chains launch weekly with genesis dumping inflation. Ergo created for resilience; needs multi-centered R&D and more infra devs.

- **Community Engagement and Growth Strategy**: Discussion on Ergo's visibility vs hype-driven projects. Suggestions: flood Twitter with daily posts, join Sigmanauts Mining Pool for ERG + bonus tokens, use PoCoP program for social media engagement rewards. Caution: consistency must match substance to avoid alienating innovative builders.

---

## Important Decisions or Announcements

- [@Aco Šmrkas, msg#572027-572028, 2025-08-20]: Autolykos DAO manifesto published and seed round live on MewFinance; become 1st DAO members via $LYKOS token contribution.

- [@kushti khushi, msg#572039-572040, 2025-08-20]: Dev chat announcement; link: https://t.me/Ergo Developers and Discord development channel.

- [@kushti khushi, msg#572325, 2025-08-22]: Sub-blocks devnet relaunched with updated seed node: http://213.239.193.208:9058/info

- [@Ergo NEWS $ERG, msg#572131, 2025-08-21]: Ergo Infrastructure DAO article published, decentralizing node hosting and ecosystem maintenance from central control.

- [@Andy L, msg#572098, 2025-08-21]: Weekly Update and AMA cancelled due to participant unavailability; replacement with community calls under discussion.

- [@Patato, msg#572183, 2025-08-21]: ErgoDEX Local (feeless Spectrum DEX fork) launched; zero platform fees, complete local privacy, portable standalone executable; Linux AppImage available at https://github.com/moon-miner/Feeless-Ergodex-standalone

- [@Pgr456, msg#572222-572223, 2025-08-21]: In discussion with Spectrum team on taking over/DAO-ifying ErgoDEX; next step: new pool contracts enforcing DAO fee for all interactions (UI, bot, direct).

- [@Chris Ray, msg#572521, 2025-08-24]: EXLE offering 5k ERG bounty for completion of ~75% finished Svelte dApp project; end-to-end testing required for release.

- [@kushti khushi, msg#572460, 2025-08-23]: Welcomed returning miners/developers; directed to Better Money Labs' "Call for Action: Building Peer-to-Peer Economies and Free Banking on Ergo" (https://www.ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221)

---

## Technical Q&A Worth Preserving

- **Q** (@DiscordBridge/yea.ok 🍉, msg#571790-571807): Can an LST protocol work on Ergo (PoW), and can perps or other protocols generate yield to power staking?
  
  **A** (@DiscordBridge/yea.ok 🍉, HQΣr): LST feasible if high-fee protocols (perps, yield tokenization) redirect fees to staking reward pool. MewFinance ecosystem already offers delegation and rewards distribution; can build lock-based APR on top. Full flywheel: fees → LST yield → continued dApps composability.

- **Q** (@DiscordBridge/Jim, msg#572383): What prevents perpetual contracts from disrupting storage rent's desired effects?
  
  **A** (@kushti khushi, msg#572386-572388): Contracts can refresh (e.g., every 3 years) but refresh requires transaction broadcast and mining fee. Mining fee currently lower than storage rent, but rational miners will price accordingly. Miners not yet fully rational in practice, so contracts can temporarily delay rent effects. Larger contract boxes also incur higher storage rent if not executed.

- **Q** (@DiscordBridge/arkadia, msg#572215-572217): Isn't UI fee separation just a choice—don't most users avoid self-hosting?
  
  **A** (@HQΣr, msg#572216, Pgr456, msg#572223): True; most users won't run local copies and will pay for convenience. Solution: DAO-enforced contract-level fees (e.g., 0.3% on pools) apply to all interactions regardless of UI, ensuring infrastructure and offchain bot funding remains sustainable.

- **Q** (@J. P. Costa, msg#572340-572341): Nautilus can't detect Ledger; error "No device selected" in USB request; works fine on other chains (Eternl/Cardano).
  
  **A**: No answer recorded; marked as known/unknown issue by Mia (Discord).

- **Q** (@DiscordBridge/arkadia, msg#572398): What noob-friendly resources exist to explain Ergo to new people?
  
  **A** (@Patato, msg#572399): Docs at https://docs.ergoplatform.com/ are technically solid. (@Patato, msg#572400): ChatGPT is surprisingly knowledgeable about Ergo and good for Q&A. (@Unknown, msg#572405): Torto's infographics are engaging and visually striking (https://x.com/TortoDelivery).

- **Q** (@HQΣr, msg#572528): Does token minter support ergopay?
  
  **A** (@Josemi, msg#572531): No; uses Nautilus only. (@Josemi, msg#572538): Tool was built for its specific function; implementing additional wallet support deemed lower priority. Users can disconnect/reconnect wallets via Nautilus settings if needed.

---

## Links Shared

- [https://vxtwitter.com/ERG_Armeanio/status/1957526501164720224]: Armeanio post (content not detailed in chat).

- [https://github.com/ErgoDevs/Ergo-Bounties]: Ergo development bounties list; directed to developers seeking work.

- [https://youtu.be/WaDKMbIcsYg]: Autolykos DAO Manifesto video.

- [https://fund.mewfinance.com/contribute]: Autolykos seed round contribution page.

- [https://github.com/moon-miner/feeless-Ergodex-run-script]: Feeless Spectrum DEX script (legit, created by Patato with Claude AI; tested by Josemi).

- [https://github.com/moon-miner/Feeless-Ergodex-standalone]: ErgoDEX Local standalone executable (zero platform fees, local privacy).

- [https://x.com/chepurnoy/status/1958239051968135518]: kushti post on Autolykos DAO fundraising speed (5 hours vs 14 days requested).

- [https://x.com/erg_armeanio/status/1958227970000392673]: Armeanio post (content not detailed).

- [https://ergoraffle.com/raffle/show/4a577b31b15934c857786708248cb098a4ddbb2e01b0e7ae7b2730cf0b009b46]: Ergo Raffle.

- [https://www.ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221]: Better Money Labs call for action on peer-to-peer economies and free banking on Ergo.

- [https://x.com/chepurnoy/status/1958596816716583305]: kushti post on multi-centered R&D and infra dev needs.

- [https://x.com/DouglasTuman/status/1956731633073000730]: Douglas Tuman thread on PoW resilience and "do nothing" option for chain attacks.

- [https://x.com/pixiekate13/status/1958696275777659067]: Discussion of Ronin chain and idle GPU mining opportunity.

- [https://youtu.be/OblhcGkHdfg?si=MMD8668mYlvN58om]: YouTube video reviewed (seemingly bearish Ergo analysis; blogger expertise questioned).

- [https://github.com/spectrum-finance/ergo-dex-backend]: Spectrum DEX backend repository (mentioned in context of decentralization discussion).

- [https://x.com/justin_bons/status/1957848483249201639]: Justin Bons tweet (deleted) claiming PoW vulnerability; refuted by kushti and Armeanio.

- [https://x.com/TortoDelivery]: Torto's infographics (visual Ergo education content).

- [https://x.com/erg_armeanio/status/1959450989850918992]: Armeanio post (content not detailed).

- [https://ergo-basics.github.io/token-minter]: Simple token minter utility (no ErgoPay support, Nautilus-only).

- [https://x.com/chepurnoy/status/1959726009353187736]: kushti post on social media penetration and hashtag strategy.

---

## Unresolved Questions

- **Storage Rent Exploit via Contracts**: If rational miners eventually price refresh transactions below storage rent fees, could perpetual self-refreshing contracts become economically viable indefinitely? How will on-chain economics settle?

- **Mixer Adoption and Privacy Regulatory Risk**: Integration of mixer as default/optional wallet feature—are there regulatory or centralization liability concerns preventing this? Who decides when/how to promote it?

- **ErgoDEX DAO Transition Timeline**: Pgr456 in discussion with Spectrum team on DAO takeover and new pool contracts; when will this formally launch? What's the governance model?

- **Sub-blocks Parameter Testing**: Who will lead and coordinate sub-blocks testnet parameter tweaking? What is success criteria for block speed improvements, and when is mainnet upgrade planned?

- **Celaut Hosting Viability**: Is Celaut mature enough for production Ergo dApp hosting? What are failure modes vs traditional VPS/GitHub Pages?

- **Mining R&D Direction**: kushti flagged need for multi-centered R&D and GPU-centered development. What specific work packages or funding exist? Should community pool resources?

- **Community Growth Strategy**: Multiple suggestions (Twitter flooding, PoCoP, Sigmanauts pool, infographics). Is there coordination or prioritization from EF or community leads?

- **Ledger + Nautilus Integration**: J. P. Costa reported Ledger detection failure in Nautilus (USB device selection error). Is this a known bug? What's the fix status?

---

## Notes

- **Tone & Dynamics**: Week was moderately active with strong participation from kushti, Armeanio, HQΣr, and community builders (Patato, Josemi). Positive discussion of Ergo fundamentals (eUTXO, NIPoPoWs, Lithos, Sigma protocols) and ecosystem resilience. Some skepticism of broader crypto landscape (VCs, PoS chains, scams).

- **Action Items**: Sub-blocks testnet recruiting; infrastructure DAO rollout; dApp sustainability fee models; mixer UX/integration; community growth initiatives.

- **Ecosystem Health**: Strong signal from OG 2010–2015 Bitcoin developers potentially joining Ergo (kushti msg#572473). Autolykos DAO seed successfully launched. Multiple development bounties and tools in flight (token minter, feeless DEX, Svelte dApp).