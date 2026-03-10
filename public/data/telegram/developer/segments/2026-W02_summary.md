---
title: "Ergo Developer Chat — 2026-W02"
date_start: "2026-01-05"
date_end: "2026-01-11"
type: telegram_weekly
channel: developer
week: "2026-W02"
source: telegram
message_count: 131
categories: [technical, defi, wallet, ecosystem, governance, community]
key_terms: [Matrix, input blocks, ordering blocks, whitepaper, testnet, devnet, Rust node, header sync, p2p scoring, blacklisting, Claude AI, USE, stablecoin, cross-chain, Binance Chain, DefiLlama, CoinGecko, oracle pools, CoinGecko API, user-agent]
---
# Ergo Developer Chat — 2026-W02 Summary

## Key Topics Discussed

- **Matrix Whitepaper & Input/Ordering Blocks**: Matrix implementation mostly complete with whitepaper published. Broad testing needed before public testnet activation and code splitting into reviewable PRs. [@kushti, msg#37696, 2026-01-07]

- **Oracle Core Updates**: CoinCap API outages and CoinGecko user-agent requirements caused pool failures. Oracle Core 2.0.5 and 2.0.6 released with fixes and additional data feeds for robustness. [@kushti, msg#37744, msg#37754, 2026-01-09-10]

- **USE Stablecoin Cross-Chain Deployment**: USE analytics deployed at cruxfinance.io/use-analytics; cross-chain liquidity on Binance Smart Chain now live. Needs DefiLlama, CoinGecko, and other exchange registrations. [@Richi, msg#37704, 2026-01-07]

- **Token Minting Non-Standard Behavior**: Discussion of minting transactions splitting tokens across multiple outputs (non-EIP-004 standard), which exploits explorer display inconsistencies. Consensus-level rules allow this but create confusion. [@Josemi/@kushti, msg#37753-37768, 2026-01-10-11]

- **Rust Node Implementation**: Claude AI-assisted Rust node development underway with header syncing working; blacklisting issues from malformed messages being debugged. Still needs indexed node implementation and mining functionality. [@Luivatra, msg#37722-37734, 2026-01-07-08]

- **ErgoDevs 2026 DAO Scope & Treasury**: ~4,671 ERG remaining in multi-sig + 470 ERG equivalent PHP donations after spending 2,400 ERG on Dexy offchain work, sigma-rust maintenance, and Ergo Wallet updates. Need to plan bounties and 2026 priorities. [@cannon_q, msg#37700, 2026-01-07]

- **Ergo Wallet Statement Tool**: Monthly portfolio statement generator released with T2T/N2T LP pricing; backend opening soon with no tracking cookies. Historical token pricing, DEX pool data, and CyberVerse NFT/FT metadata catalogued (15,000+ items). [@cannon_q, msg#37705-37708, 2026-01-07]

- **Infrastructure Outages**: Cornell central switch failure in infra closet caused ergo.aap.cornell.edu downtime requiring resync. infra-p2p.ergoplatform.com dashboard also affected. Redundancy improvements flagged. [@qx(), msg#37787-37818, 2026-01-11]

## Important Decisions or Announcements

- [@kushti, msg#37699, 2026-01-07]: Three 2025 crowdfunding campaigns raised 23,000 ERG with 2,400 ERG spent to date on Dexy LP offchain work, sigma-rust maintenance, and Ergo Wallet updates.

- [@kushti, msg#37702, 2026-01-07]: Current state: many unreviewed PRs from Unstoppable Hackathon and LLM contributors; enough good PRs for releases 6.0.2 & 6.0.3; Matrix implementation mostly done; need for updated Ergo Wallet and Minotaur publication; sufficient ERG for bounties.

- [@kushti, msg#37715, 2026-01-07]: Request to add USE mint capability to mobile wallets (Ergo Wallet or Minotaur); bounty assignment being considered.

- [@kustti, msg#37744, 2026-01-09]: Oracle Core 2.0.5 released with CoinGecko user-agent fix; additional data feeds added for robustness in PR #343.

- [@kushti, msg#37754, 2026-01-10]: Oracle Core 2.0.6 released.

- [@qx(), msg#37815-37818, 2026-01-11]: Cornell explorer/node restored after 20-min install from peer replica; planned rewrite of Sigmanauts dashboard and InfraDAO dashboard to run fully on IPFS using HTML/JavaScript instead of Perl.

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#37753): When minting a token, how can it end up in two output boxes simultaneously? Example shows token with equal emission amounts in Output(0) and Output(1).
  **A** (@kushti, msg#37755): Non-ERG token preservation rule checks (tokens in outputs) ≤ (tokens in inputs). If token ID equals the ID of the first input (minting tx), preservation is not checked. Only these two consensus-level rules exist; EIP minting standards assume single output but are app-level only.

- **Q** (@Josemi, msg#37756): If emission appears in two outputs, shouldn't total emission be 200000004 instead of 100000002?
  **A** (@kushti, msg#37761): Minting standard (EIP) assumes single output. Explorer assumes all tokens are standard. These are app-level rules only; Explorer should skip non-standard tokens rather than display incorrect totals.

- **Q** (@Luivatra, msg#37736): How fast is header sync on the normal node nowadays?
  **A** (@kushti, msg#37740): 700k headers in 40 minutes is good; reference client probably not faster.

- **Q** (@Luivatra, msg#37722, reply): Building Rust node with Claude Code, debugging p2p part causing blacklisting.
  **A** (@kushti, msg#37739): Can try custom devnet with penalty threshold set high (e.g., `scorex.network.penaltyScoreThreshold = 1000000`) to avoid blacklisting during testing.

- **Q** (@Josemi, msg#37781): Why doesn't Nautilus work with specific transaction? Pop-up opens but password form doesn't appear.
  **A** (@HQΣr/@Aco, msg#37785/@37786): Bad transaction built; also check Nautilus wallets exist and weren't wiped by Chrome update. (@Luivatra, msg#37794): Check browser extension console, not website console.

- **Q** (@Josemi, msg#37795): Solution found — chained transactions require signing each TX separately one-per-one.

- **Q** (@kushti, msg#37813, reply to Luca's "useful trick" comment on multi-output minting): Should EIP allow multiple outputs but only one with registers?

- **Q** (@kushti, msg#37814): For initial sidechain implementation, should we use Scala or Rust?

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2287]: PR ready for review (Cheese Enthusiast)
- [https://github.com/ergoplatform/ergo/pull/2244]: PR needing review from multiple developers
- [https://github.com/ergoplatform/ergo/blob/weak-blocks/papers/inputblocks/main.pdf]: Matrix whitepaper (input/ordering blocks)
- [https://github.com/rustinmyeye/sigmanauts-mining-dashboard-android]: Sigmanauts mining pool dashboard Android app
- [https://github.com/ergoplatform/ergodocs/pull/75]: PR for Nautilus on Android guide
- [https://github.com/arkadianet/erg-vanity-gpu]: OpenCL GPU vanity address generator (320k addresses/sec on 3080 Ti)
- [https://ergo-wallet-statement.vercel.app/]: Ergo Wallet Monthly Statement tool (bank-statement-style portfolio view)
- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.5]: Oracle Core 2.0.5 release (CoinGecko fix)
- [https://github.com/ergoplatform/oracle-core/pull/343]: Oracle Core additional data feeds PR
- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.6]: Oracle Core 2.0.6 release
- [https://github.com/error1100/oracle-stats]: Vibe-coded oracle pool v2 status page (USD, XAU pools; self-hostable)
- [https://error1100.github.io/oracle-stats/]: Oracle stats deployed on GitHub Pages
- [https://github.com/Luivatra/ergo-rust-node]: Fully vibe-coded Rust Ergo node (headers syncing; indexed node and mining partial)
- [https://github.com/ErgoTester/defillama-server/blob/Add-DexyProtocol/coins/src/adapters/markets/dexyProtocol/dexy.ts]: DefiLlama Dexy Protocol adapter PR
- [https://github.com/ErgoTester/DefiLlama-Adapters/blob/Add-USE/projects/use/index.js]: DefiLlama USE adapter PR
- [https://github.com/ErgoTester/DefiLlama-Adapters/blob/Add-DexyGold/projects/dexygold/index.js]: DefiLlama Dexy Gold adapter PR
- [https://cruxfinance.io/use-analytics]: USE stablecoin analytics dashboard
- [https://github.com/rustinmyeye/ErgoNodeAndroid]: Ergo Node on Android (NIPoPoWs node)
- [https://github.com/StabilityNexus/BenefactionPlatform-Ergo/blob/main/src/lib/ergo/actions/submit.ts#L185]: Benefaction Platform transaction code (Nautilus integration issue)
- [https://x.com/degens_worldX/status/2008760727339741482?s=20]: Referenced Degens.World post

## Unresolved Questions

- **Token minting display standards** (@kushti, msg#37767): Should Explorer skip non-standard multi-output minting tokens, or display correct aggregated emission amounts? Discussion ongoing with no resolution from prior discussions.

- **EIP-004 Multi-Output Allowance** (@kushti, msg#37813): Should EIP allow multiple outputs in minting but restrict registers to one output only?

- **Sidechain Implementation Language** (@kushti, msg#37814): Scala or Rust for initial sidechain implementation?

- **Ergo Wallet Mobile Publication**: Need to identify solution for publishing updated Ergo Wallet and Minotaur across app stores.

- **USE Mobile Wallet Integration**: Bounty size and timeline for adding USE minting to Ergo Wallet or Minotaur not finalized.

- **Matrix Whitepaper Feedback**: Still waiting for community feedback on published Matrix whitepaper before broad testnet rollout.

- **Rust Node Blacklisting**: Malformed message handling causing permanent peer blacklisting on static IPs — needs investigation into whether this is overly strict for development/testing.