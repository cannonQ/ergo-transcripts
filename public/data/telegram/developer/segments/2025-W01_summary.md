# Ergo Developer Chat Summary — 2025-W01

## Key Topics Discussed

- **Node infrastructure and performance benchmarking**: mgPai performed detailed benchmarks comparing Linode ($192/month, 8 CPU, 32GB RAM) vs Hetzner ARM ($30/month, 16 core, 32GB RAM) for full node + indexer sync. Linode achieved 25-hour full sync with 2-hour indexer sync; Hetzner achieved 15-hour full sync with 2-hour indexer sync. Key finding: production-grade indexed nodes require substantial resources (minimum 8 core, 32GB RAM recommended); undersized servers (1 core, 4GB RAM) are unreasonable for production use.

- **SigmaUSD contract improvements**: Discussion on moving away from hard-coded fixed index boxes. Proposal to use filtering logic (e.g., filtering by NFT tokens or output tokens) instead of `OUTPUTS(1)` direct indexing, enabling UI/app flexibility in transaction construction. kushti suggested context variables as an alternative to maintain backward compatibility.

- **Nautilus wallet UX friction**: Password requirement on every transaction identified as major friction point blocking adoption, particularly for high-volume small-value transactions (Hashmon minting at 0.2 ERG, pump.fun-style token creation, Trade House trading). c8 proposed Nautilus fork with two versions: secure variant (passwords per session) and "degen Nautilus" (reduced friction).

- **2025 Ergo ecosystem roadmap**: kushti outlined priorities including sub-blocks for P2P network performance (inspired by Prism, parallel PoW, Tailstorm), additional stablecoins (Gluon, Dexy, Djed variants in gold/lithium/silver/USD), improved bridges/cross-chain, p2p DEX for fiat/BTC onramps, Lithos decentralized mining, off-chain stablecoin payments, and ChainCash p2p banking.

- **App state update transparency**: c8 identified two critical app layers: (1) interface simplicity/clarity, and (2) transparent real-time state updates via mempool subscription. Noted mempool subscription is mandatory for proper app experience; c8 building SigmaUSD UI with this in place.

- **Documentation accessibility**: Amiri_uk_59812 raised request to convert Ergo whitepapers from PDF to Mkdocs format to enable AI-powered explainer implementation (LetMeExplain.AI). Currently whitepapers at https://docs.ergoplatform.com/documents/ are PDF-only.

## Important Decisions or Announcements

- [@kushti, msg#32396, 2024-12-31]: Happy New Year announcement to core and ecosystem developers. Regular Wednesday chat suspended for New Year; free-chat encouraged.

- [@kushti, msg#32429, 2025-01-03]: "Ok I've done code for updating to self, going to try it in the testnet and then we can do update to self in the mainnet" — self-update contract implementation in progress for testnet validation.

- [@c8, msg#32441, 2025-01-04]: SigmaUSD UI release planned "this month" (January 2025) with mempool subscription state updates integrated.

- [@c8, msg#32421, 2025-01-02]: Two open-sourced UI reference implementations published for community use:
  - Trade House replacement: https://github.com/SavonarolaLabs/crystal-pool
  - Gluon.gold reference: https://github.com/SavonarolaLabs/gluongold

## Technical Q&A Worth Preserving

- **Q** (@krasaviceblasen, msg#32392): Should SigmaUSD contract move away from fixed index box references to enable flexible transaction composition by dApps/UIs?
  **A** (@kushti, msg#32394): "Why not use provided via context vars indices?" — Suggested context variables as cleaner approach for dynamic box ordering without contract code changes.

- **Q** (@c8, msg#32381–32391): Can a fully indexed node run on minimal hardware ($4.59/month, ~1 core, 4GB RAM)?
  **A** (@mgpai, msg#32387–32389): "It kinda works" but unreasonable for production. Benchmarks show minimum viable config is 8-core + 32GB RAM for acceptable sync times (~25 hours full + 2-hour indexer on Linode; ~15 hours full on Hetzner ARM).

- **Q** (@jossemii, msg#32432–32434): Where should large on-chain data (images, multiple images in boxes) be stored if on-chain storage is expensive?
  **A** (@HQΣr, msg#32435): "Then yes, ipfs" — IPFS recommended for off-chain data with on-chain references.

- **Q** (@HQΣr, msg#32436): Is STuple supported in FleetSDK?
  **A** (@jossemii, msg#32438): "I used it in Bene for a short time… I would say it didn't give me any problems" — STuple is functional in FleetSDK with no reported issues.

- **Q** (@kushti, msg#32422): Are emission contracts already implemented and published in ErgoScript?
  **A**: No direct response in log, flagged as open question for @luivatra and @cheeseenthusiast.

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2193]: Node indexer improvement PR — kushti flagged for review weeks prior, mgpai acknowledged missing message.

- [https://github.com/SavonarolaLabs/crystal-pool]: Crystal Pool — Trade House UI replacement with improved UX, published as reference implementation.

- [https://github.com/SavonarolaLabs/gluongold]: Gluon.gold reference implementation — c8's UI suggestion for Gluon integration.

- [https://github.com/StabilityNexus/BenefactionPlatform-Ergo/blob/bce670acb873e0aae9f8b312d5514d5fa337ecc9/src/lib/ergo/actions/submit.ts#L124]: Bene project demonstrating STuple usage in FleetSDK.

- [https://docs.ergoplatform.com/documents/]: Ergo whitepaper repository (currently PDF-only); subject of documentation format migration request.

- [https://vxtwitter.com/chepurnoy/status/1875522222284272112]: kushti social media link (content not detailed in chat).

- [https://www.ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078]: Ergo Forum discussion on p2p DEX for fiat/BTC onramps.

## Unresolved Questions

- **Emission contract implementation status**: kushti asked if emission contracts are "done in ErgoScript published somewhere" (msg#32422). No response logged; clarification pending from @luivatra or @cheeseenthusiast.

- **Whitepaper documentation migration**: Amiri_uk_59812 raised technical feasibility of converting PDFs to Mkdocs for LetMeExplain.AI integration (msg#32423). Glasgow asked clarifying question (msg#32424) but resolution not documented.

- **Password authentication alternatives for Nautilus**: Multiple options discussed (session timeout, opt-in/out, biometric/hardware key support) but no concrete design decision recorded. c8 proposed fork strategy as pragmatic path forward pending further research by @anon_BR.

---

**Summary**: Week 2025-W01 focused on infrastructure optimization (node benchmarking results), UX friction identification (Nautilus password requirements), contract flexibility improvements (SigmaUSD indexing), and 2025 roadmap articulation. Notable outputs: detailed node performance benchmarks, SigmaUSD contract refinement direction, two open-sourced UI references, and SigmaUSD UI release timeline. No major breaking changes announced; incremental progress on testnet self-update contracts and ecosystem tooling.