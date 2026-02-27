# Ergo General Chat — 2020-W50 Summary

## Key Topics Discussed

- **NFT Creation & Standards**: Multiple users asked about associating images with NFTs and listing on ergoauctions.org. kushti clarified that no current UI exists for image attachment; image hashes are stored in issuing transaction registers, and EIP standards are needed before broader UI support.

- **Wallet Infrastructure**: Discussion of available wallets (Yoroi, ErgoWallet, ErgoMixer), with kushti noting ErgoWallet is "pretty raw" requiring mnemonic re-entry on each run. Ledger integration grant was approved in May but remains incomplete; @jasondavies requested for ETA.

- **Node Synchronization & UTXO Change**: Users reported issues with full node sync times (~1 day on slower connections, ~4.8GB folder size) and change UTXOs not appearing in expected addresses after transactions. kushti confirmed change goes to the sending address but acknowledged potential derivation path issues with Yoroi vs. legacy wallets.

- **Stable Coin & DeFi Strategy**: kushti solicited community input on expectations for stablecoins and DEXes. Discussion centered on liquidity bootstrapping, comparison to Waves/DCR/NXT DEXes, and whether farming mechanisms are necessary. Armeanio cautioned that yield farming feels like "solution looking for a problem" without real utility.

- **Ergo-Cardano Interoperability**: Charles Hoskinson mentioned in a surprise AMA (2020-12-12) that he will hold a meeting "this month" regarding an Ergo stablecoin. Community speculates this could involve USDT-ERG pair liquidity or cross-chain integration with Cardano; Richi noted Yoroi's 50k users as potential bridge.

- **Storage Rent & Emission**: kushti stated total supply will be ~97.4M ERG, to be issued before July 1, 2027. Discussion of storage rent as sole ERG utility for state cleanup, distinct from transaction fees.

- **Privacy & Regulation**: France announced mandatory KYC for crypto transactions (2020-12-09). kushti noted we're approaching "edge where everyone will decide: KYC or true crypto." Discussion of mixer availability and P2P exchanges as workarounds.

- **Mining & Merge-Mining**: kushti mentioned sidechain constructions will be published soon on forum; discussed merge-mined sidechain emission contracts and trustless pegging via smart contracts, referencing BIP 301 patterns.

- **DDoS Attack Discussion**: Response to "21% attack" article—kushti clarified known "whale TX" attacks miners don't exploit. Fee markets and mempool filters (min fee, propagation rate caps) can mitigate spam; version 4.0.44+ has spam limits per peer.

- **Community Groups & Localization**: Multiple language communities being formed (Russian, Persian, Vietnamese, Indonesian, Chinese, Japanese active; Spanish moderated by filippounit but inactive). kushti requested help establishing Dutch and other regional groups.

---

## Important Decisions or Announcements

- [@kushti, msg#68601, 2020-12-08]: "Details and timeline for coming 'Hardening' protocol upgrade are coming!"

- [@kushti, msg#68811, 2020-12-11]: Released Ergo Bootstrap tool for running node or explorer "in few clicks" — new dApp infrastructure simplification.

- [@kushti, msg#68924, 2020-12-11]: "3.3.7 postponed till Monday, it needs for more testing" — Watcher UI v2.2.1 released; users should run `docker compose pull` and `docker compose up -d`.

- [@kushti, msg#68636, 2020-12-09]: "New group! Ergo Platform Japan https://t.me/ErgoPlatform_jp"

- [@Armeanio, msg#68841, 2020-12-11]: Stated preference for DeFi to evolve "beyond yield farming and liquidity mining" toward real utility; proposed privacy tools/mixing for liquidity provision security.

- [@Unknown, msg#68468-69006]: Manual TX refund in progress for GARD's DAO related to accidental high-fee bridge transaction; permits being restored.

- [@Nik An, msg#69120, 2020-12-12]: "An entry to a serious exchange is expected in the spring" (re: Binance or major CEX listing).

---

## Technical Q&A Worth Preserving

**UTXO Change Address Handling**
- **Q** (@Scott Z, msg#68717): "Say I have a UTXO of 5 ERG in my node wallet. If I send 2.5 ERG... I get 3x UTXOs: 2.5 ERG to CoinBarn wallet, 0.001 ERG fee, and 2.499 ERG in change to new key pair. Does my node wallet track this new key pair? My laptop running the node restarted... I can't see the 2.499 ERG."
  **A** (@kushti, msg#68801-68802): "change utxo is going to your address" — issue appears to be wallet derivation path management; user should verify if change endpoint is being tracked post-restart.

**NIPoPoWs & Light Client Sync**
- **Q** (@Scott Z, msg#68373): "I wanted to run a full node to support the network. I will take a look at nipopows."
  **A** (@Dmitry Usov, msg#68372): Shared https://nipopows.com/ as feature reference. (@kushti, msg#68374): Confirmed "it's our feature." NIPoPoWs enable light-wallet sync without full node sync requirement.

**Wallet Derivation & Magnum-to-Yoroi Migration**
- **Q** (@Unknown, msg#68416): "I used my mnemonic phrase to recover my Magnum Ergo wallet into Yoroi but it creates a new empty address."
  **A** (@kushti, msg#68457): "Yoroi has different derivation. There is interesting way to move funds out of magnum using the ergomixer wallet please check a guide published today on the ergoforum" — ErgoMixer recommended as migration path.

**ErgoWallet Status**
- **Q** (@Unknown, msg#68531): "I want to test the oficial wallet of Ergo if any.. which one it is? ErgoWallet or ErgoMixer?"
  **A** (@kushti, msg#68533): "ErgoWallet is not official and pretty raw still, e.g. you need to enter mnemonics on each run. Nevertheless you can play with it" — https://ergowallet.io/

**Fee Estimation & Mempool Management**
- **Q** (@Unknown, implied from kushti's response, msg#68538+): Regarding fee markets and DDoS mitigation.
  **A** (@kushti, msg#68661-68664): "Need to check but I guess continuation of 'whale TX' attack etc. Which are known for years. But miners are not running them for some reasons. Only in ETH some miners are doing some clever things." Reference to spam attack prevention via mempool filters and version 4.0.44+ limits.

**Smart Contract Formal Verification**
- **Q** (@Unknown, msg#69096): "Can the smartcontracts in ergo be formally verified and guaranteed secure? I think this is needed for cefi and defi to come together."
  **A** (@kushti, msg#69103): "yes, some contracts already are" — https://github.com/ergoplatform/ergo-contracts

---

## Links Shared

- [https://nipopows.com/]: Overview of NIPoPoWs feature for light client support.
- [https://ergocast.io/episode/yoroi-wallet-ergo-cast-episode-4/]: Ergo Cast episode explaining Cardano-Ergo relationship via Yoroi wallet.
- [https://twitter.com/emurgo_io/status/1337041745863852032]: EMURGO Ergo Headless dApp Framework tutorial #2 announcement.
- [https://ergoplatform.org/en/blog/2020-12-11-ergo-bootstrap-streamlining-ergo-dapp-infrastructure-with-one-simple-tool/]: Ergo Bootstrap announcement — one-click node/explorer deployment.
- [https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468/6]: Magnum wallet migration guide using ErgoMixer.
- [https://www.ergoforum.org/t/unlocking-the-power-of-asynchronous-actions-in-the-eutxo-model/502]: Forum discussion on parallelization of smart contracts in eUTXO model.
- [https://github.com/ergoplatform/ergo-contracts]: Repository of formally verified Ergo contracts.
- [https://ergowallet.io/]: ErgoWallet (web-based, raw/experimental).
- [https://www.theblockcrypto.com/post/86873/blockchain-denial-of-service-attack-miners]: Article on "21% attack" / blockchain DoS (discussed by kushti).
- [https://twitter.com/iohk_charles/status/1337127634682179585]: Charles Hoskinson response on Cardano clock/time synchronization concerns.
- [https://eprint.iacr.org/2019/838]: Academic paper on "Permissionless Clock Synchronization via Proof of Stake" (Ouroboros Chronos).
- [https://www.youtube.com/watch?v=GlVU8ZiVUL0]: Charles Hoskinson AMA (2020-12-12) mentioning Ergo stablecoin meeting planned this month.
- [https://www.youtube.com/watch?v=kbECMNp8R1k]: Privacy discussion panel: Firo, Ergo, Ether-1, Pirate Chain, Komodo (2020-12-12).

---

## Unresolved Questions

- **Ledger Integration ETA**: Grant approved & half-paid in May 2020; no completion date provided as of 2020-12-12. @jasondavies tagged for update.

- **Stablecoin Timeline**: Charles Hoskinson promised "meeting this month" (December 2020) on Ergo stablecoin, but specific implementation details (USDT-ERG pair, collateralization mechanism, launch date) remain unconfirmed.

- **Exchange Listing**: Expectation of "serious exchange" (Binance implied) in "spring" (2021) per @Nik An, but no official confirmation from EF or exchanges.

- **Sidechain Construction Publication**: kushti indicated sidechain specs "will be published soon on forum" but no link/date provided by week's end.

- **Spanish Community Group**: @filippounit moderates inactive Spanish group; unclear if revival planned or resources available.

- **Staking vs. PoW Tension**: Community debate on whether introducing staking (separate token or smart contract lending) would conflict with Ergo's PoW ethos and storage rent model — kushti did not comment directly, left open.

- **Price Stagnation Context**: Multiple users noted ERG "sideways" at ~$0.35 for weeks despite bull market; @E Crypto predicted "only a matter of days before it moves higher" but no fundamental catalyst identified.