# Ergo General Chat — 2021-W14 Summary

## Key Topics Discussed

- **SigmaUSD Stabilization & Reserve Mechanics**: Discussion of reserve ratio dynamics, collateralization thresholds (400%-800%), and fee redistribution. Reserve ratio dropped below 800% bootstrap cap, enabling SigmaRSV minting. High demand from a single short position caused rapid reserve depletion.

- **Yoroi Wallet Synchronization Issues**: Multiple users reported wallet balance sync problems mid-week. Issues were resolved by 2021-04-06, related to Yoroi backend strain from NFT activity.

- **ErgoSwap/ErgoDEX Development**: Roadmap publication expected Monday/Tuesday (2021-04-12/13). dApp connector nearly ready. Liquidity mining planned. UI and dApp connector identified as critical blockers for proper contract interaction (e.g., SigmaUSD auctions).

- **ErgoNomes NFT Auction Launch**: Community-driven NFT project launched on ergoauctions.org. Auction house contract supports partial order fills and multi-sig control.

- **Hotbit Exchange Maintenance Crisis**: Extended maintenance (2021-04-08 to 2021-04-09) caused widespread withdrawal delays and user panic. Addressed with 14-day VIP6 membership compensation. CoinEx recommended as alternative (0.1 ERG withdrawal fee vs. 1-2 ERG on competitors).

- **Privacy & Mixing**: ErgoMixer operation clarified — covert addresses can receive offline; mixing runs only when node is online. Two transactions required for SigmaUSD auctions via Yoroi (limitation being addressed).

- **Storage Rent & Long-Term Holding**: Users must transact at least once every 4 years to prevent storage rent reclamation. Even 1 ERG transaction sufficient to reset the timer.

- **Cardano Interoperability**: eUTXO model similarity enables ErgoDEX port to Cardano. Not 1:1 parity but contracts are conceptually transferable. Gravity protocol discussed for multi-chain DEX.

- **Scaling & TPS**: Hydra layer 2, sidechains, and merge mining discussed as medium-term scaling solutions. Current mainchain insufficient for Visa-level throughput alone.

- **Chinese Market Interest**: Speculated pump correlation with Chinese exchange activity and upcoming media appearances. KuCoin listing rumors (unconfirmed).

## Important Decisions or Announcements

- [@kushti, msg#116209, 2021-04-10]: ErgoSwap roadmap to be published Monday/Tuesday; dApp connector required for proper auction/DEX UX.
- [@kushti, msg#116212, 2021-04-10]: dApp connector will enable SigmaUSD auctions with single transaction (vs. current 2 manual transactions).
- [@kushti, msg#116485-491, 2021-04-11]: Investigating pump cause; suspected China-related activity but awaiting peer confirmation.
- [@kushti, msg#116760-761, 2021-04-08]: Hotbit processing complete; miners' dust issue resolved across all known exchanges.
- [@Armeanio, msg#115966, 2021-04-09]: Rewriting Ergo Vision social contract/manifesto with kushti.
- [@Foeniculum NFTs, msg#115881, 2021-04-09]: ErgoNomes NFT project officially launched and listed.
- [@Crypto Rich, msg#116297, 2021-04-07]: Interview with kushti released; covered ErgoDEX multi-chain via Gravity.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): How do you send ERG + tokens together to a smart contract?
  **A** (@Klaus, @Unknown): Two transactions required — first send tokens, then ERG. Auction house workflow exemplifies this.

- **Q** (@Dave P): Can I provide liquidity with ERG to earn passive income?
  **A** (@Unknown): ErgoDEX/ErgoSwap liquidity mining planned but not yet live. SigmaRSV is only current option (reserve position, not traditional LP).

- **Q** (@The Ancient Kraken): What's the ELI5 of SigmaRSV?
  **A** (@Chris Ray): Reserve Telegram channel `@SigmaUSD` best resource; complex mechanics require reading protocol docs.

- **Q** (@Unknown): How is SigmaRSV value calculated relative to ERG?
  **A** (@Klaus, @Glasgow): Depends on reserve history (fees, mints, redeems). Formula in AgeUSD GitHub; not easily calculable in real-time. Ratio designed to maintain SigmaUSD at $1 peg.

- **Q** (@Unknown): What happens if reserve ratio goes below 400%?
  **A** (@Klaus): SigmaRSV becomes illiquid (cannot redeem for ERG). Acts as perpetual call option on future reserves. Last sigmausd redeemer pays fees that accumulate for future recovery.

- **Q** (@Unknown): Does Ergo support Ledger/Trezor hardware wallets?
  **A** (@Dmitry Usov, msg#115084): In active development. Yoroi desktop version works with seed phrases; hardware wallet integration not yet available.

- **Q** (@Unknown): What's a covert address in ErgoMixer?
  **A** (@Unknown): Privacy-enhanced address for receiving ERG; harder to link to identity than posting main address publicly. Can receive offline; mixing only occurs when node runs.

- **Q** (@MHS_SAM): Must mixer node stay running during active mix?
  **A** (@MHS_SAM): Node can be stopped; covert address accumulates funds offline. Mixing/withdrawal can happen anytime; not forced to wait for completion.

- **Q** (@N R): How do I add custom ERG tokens to Yoroi?
  **A** (@Glasgow, @c8): Use https://ergoutils.org/#/token or https://ab6x.com/tokens/ to look up token IDs. Yoroi natively supports eUTXO assets; Trust Wallet doesn't support ERG properly.

- **Q** (@Unknown): How long for ERG deposit to Hotbit?
  **A** (@Unknown): Typically 1-5 minutes; extended delays mid-crisis. Hotbit had accumulated backlog post-maintenance; CoinEx recommended (0.1 ERG fee, faster processing).

- **Q** (@Unknown): Exchange fees comparison for ERG withdrawal?
  **A** (@Glasgow, @Adriano): CoinEx ~0.1 ERG, Hotbit ~1 ERG, Gate.io ~2 ERG. Exchanges pocket difference above network cost.

- **Q** (@Ilya Oskin): Will ErgoDEX be available on Cardano?
  **A** (@Ilya Oskin): ErgoDEX will be ported to Cardano. Liquidity likely not 100% shared; cross-chain swaps possible but separate order books probable.

- **Q** (@Unknown): What's the ErgoWallet.io interface bug showing WebAssembly error?
  **A** (@Glasgow): Community-developed tech preview; firewall/Windows Defender may block it. Contact `@ergosupport` for debugging.

## Links Shared

- [https://ergoplatform.org/en/exchanges/]: Comprehensive exchange listing with liquidity rankings.
- [https://ergonaut.space/SigmaUSD]: SigmaUSD mechanics & reserve ratio tracking.
- [https://ergonaut.space/en/ErgoMixer]: ErgoMixer tutorial and setup guide.
- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226]: kushti's scaling roadmap (Hydra, sidechains, layer 2).
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Oracle pools vs. Chainlink comparison.
- [https://ergoplatform.org/en/blog/2021-04-06-ergodex-model-amm-and-order-book-type-exchange/]: ErgoDEX AMM + order book architecture.
- [https://ergoplatform.org/en/blog/2021-04-08-heres-how-ergo-seeks-to-boost-interoperability-for-cardanos-eutxo-model/]: eUTXO interoperability deep dive.
- [https://curiaregiscrypto.medium.com/sigmausd-vs-the-competition-e70b23fe37a3]: SigmaUSD competitive analysis by Armeanio.
- [https://curiaregiscrypto.medium.com/ergo-nomic-oracle-feeds-87776414491a]: Oracle feed mechanisms (Armeanio).
- [https://curiaregiscrypto.medium.com/bitcoin-vs-ergo-the-path-forward-66f3f868a68d]: Ergo's evolution from Bitcoin design.
- [https://explorer.ergoplatform.com/en/addresses/9hyDXH72HoNTiG2pvxFQwxAhWBU8CrbvwtJDtnYoa4jfpaSk1d3]: Whale SigmaUSD short position tracker.
- [https://ab6x.com/tokens/]: Token lookup and metadata explorer.
- [https://ergoutils.org/#/token]: Token ID reference tool.
- [https://ergoauctions.org/ (referenced as ergnomes.io)]: NFT auction house.
- [https://t.me/SigmaUSD]: SigmaUSD-specific Telegram channel with reserve tracking.
- [https://t.me/ergosupport]: Technical support channel.
- [https://discord.gg/jjRP2uNAv5]: Ergo Discord (development & support).
- [https://github.com/Emurgo/yoroi-ergo-connector]: Yoroi dApp connector source (MetaMask-like API).
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Full node setup documentation.

## Unresolved Questions

- **ErgoDEX Cross-Chain Liquidity Share**: Exact mechanism for shared liquidity between Ergo and Cardano instances unclear; separate order books likely but not finalized.
- **Hardware Wallet Timeline**: Ledger/Trezor support stated as "in development" with no ETA provided.
- **Large Exchange Listing (NDA)**: kushti indicated talks with "large exchange" but covered by NDA; KuCoin rumors unconfirmed.
- **SigmaRSV Redemption During Crisis**: Edge case behavior if reserve depletes to near-zero during sustained short attack not fully explained to community.
- **ErgoSwap Liquidity Mining Details**: Rewards structure and APY mechanics not yet published; expected with roadmap release.
- **Scaling to Visa-Level TPS**: Theoretical; no concrete timeline for layer 2 deployment or sidechain production readiness.