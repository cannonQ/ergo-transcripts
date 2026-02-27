# Ergo General Chat — 2020-W28 Summary

## Key Topics Discussed

- **Pool Collateral & ErgoPool**: New testing of pool collateral contracts identified on-chain; ErgoPool.io launched as first decentralized mining pool for Ergo.

- **4.0 Hard Fork Planning**: Minimal HF featuring proof-of-work improvements, parameter adjustments, security fixes, and contractual layer soft-fork capability. Code expected completion by end of week with testnet restart planned.

- **3.3.0 Release & Features**: Version 3.3.0 with externally provided scans (applications) support completed and being tested with Oracle Pools implementation. Distributed signatures under review.

- **Oracle Pools Development**: Oracle Pools research advancing with EMURGO partnership. Robert Kornacki presented new UTXO-based oracle model combining lessons from existing projects. Two versions in development: v1 (community/foundation-run) and v2 (for Dexy Gold with GORT rewards).

- **Stablecoin Partnerships**: Potential joint venture with IOHK and EMURGO to develop non-USD-backed stablecoin with depreciating value (storage rent/demurrage) model. Ergs would be locked in CDP contracts as backing.

- **Exchange Listings Strategy**: Targeting ~1 listing per month on non-tier-1 exchanges while negotiating with tier-1 exchanges on favorable terms. Tier-1 discussions ongoing; no fee-based listing approach planned. Community effort on voting/visibility needed.

- **Foundation Reorganization**: Proposal to restructure Ergo Foundation with active contributors as members and irregular contributors receiving monthly rewards. Candidates: @bobertk (EMURGO representative), @filippounits, @mhs_sam for initial wave.

- **Development Fund Sustainability**: Treasury lasting ~18 months. Monthly operational cost ~$10-20K USD. Post-DevFund planning includes crowdfunding, DAOs (Moloch-style), and community investment cooperatives. Smart Paper initiative (interactive educational content) proposed to begin piece-by-piece.

- **Marketing Coordination Proposal**: Current marketing chaotic and underutilized. Proposal for dedicated marketing coordinators, targeted campaigns, news wire distribution (BitcoinPRBuzz identified), and coordination with Indonesia community for amplification.

- **Network Speed Improvements**: Discussion of potential future optimizations including micro-blocks (sub-blocks), sidechains, and layer 2 solutions. No consensus on immediate implementation; dependent on concrete application workload patterns.

- **Mixer & Privacy Tools**: Ergo's mixer praised as solid implementation. Windows/Mac binaries requested for accessibility. Development continuing.

- **Developer Onboarding**: New developers joining ecosystem. Multi-stage protocol off-chain/on-chain development workflow published on forum. Discord recommended for dev-focused discussions.

- **Node Setup & Synchronization**: Community assistance provided for full node setup troubleshooting; config file directory specification and log level adjustment (DEBUG/INFO/WARN/ERROR) documented.

---

## Important Decisions or Announcements

- [@kushti, msg#39004, 2020-07-08]: Core development complete: 3.3.0 with externally provided scans done and tested; distributed signatures under review; 4.0 HF minimal with PoW improvements, parameters, security fixes, and contractual layer soft-fork room.

- [@kushti, msg#39007, 2020-07-08]: 4.0 code expected completion this week with two upgrade paths (from 3.2.x and 3.3.x). Testnet restart next week; activation protocol consideration pending miner readiness.

- [@kushti, msg#39006, 2020-07-08]: Apps status: Oracle Pools in development, Yoroi wallet integration ongoing with EMURGO, DEX backend testing starting in 2 weeks, token mixing tested on mainnet.

- [@kushti, msg#39026-39029, 2020-07-08]: Post-3.3.0 roadmap: airdrop for node runners (mainnet), GPU mining release, Oracle Pools launch, then full DeFi ecosystem.

- [@kushti, msg#39033, 2020-07-08]: Endorsement of depreciating stablecoin (storage rent/demurrage) model with rewards to creators rather than charges; combined with lottery app.

- [@kushti, msg#39106, 2020-07-08]: Smart Paper approved as educational initiative — interactive multimedia (text + pictures + video) presentation of Ergo concepts, modeled on nipopows.com example.

- [@Unknown, msg#39020, 2020-07-08]: Marketing proposal forthcoming next week covering coordinators, targeted campaigns, and promotional grants availability.

- [@Unknown, msg#39153, 2020-07-09]: Forum thread opened on long-term treasury/dev funds sustainability: https://www.ergoforum.org/t/ensuring-long-term-development-success-of-ergo/273

- [@kushti, msg#39315, 2020-07-12]: Exchange listing strategy: ~1 listing/month on non-tier-1 exchanges; tier-1 negotiations ongoing.

---

## Technical Q&A Worth Preserving

- **Q** (@Marco, msg#39079): Node stuck in "active synchronization" despite reaching current block height; 250MB log file — is this normal?
  **A** (@Unknown, msg#39080-39084): Log size normal at DEBUG level; change to INFO with Java flag `-Dlogback.stdout.level=INFO`. Synchronization complete when `fullHeight` and `headersHeight` match at http://127.0.0.1:9053/swagger#/info/getNodeInfo.

- **Q** (@Marco, msg#39091): Node not syncing — returns `previousFullHeaderId: null`, `fullHeight: null`, `headersHeight: null`.
  **A** (@Unknown, msg#39093-39094): Node hasn't started sync; check config file. May appear stuck temporarily after restart but should begin syncing.

- **Q** (@Marco, msg#39100): Is `directory = "D:/ergo_folder/.ergo"` required in config file?
  **A** (@Unknown, msg#39101): Use defaults from tutorial.

- **Q** (@Unknown, msg#39030): Does airdrop reward mainnet node runners only or include private networks?
  **A** (@kushti, msg#39034, msg#39039): Mainnet only; private networks without public IP address qualify.

- **Q** (@Vive, msg#38786): Is ERG a DeFi token?
  **A** (@Unknown, msg#38789): Yes, believed to be DeFi-focused.

- **Q** (@MMMM, msg#39430): Is Ergo PoW?
  **A** (@Unknown, msg#39436): Yes, PoW. Reference: https://ergoplatform.org/en/blog/2019_05_20-curve/

- **Q** (@Buccoooo, msg#39401-39402): How can Ergo replace Chainlink?
  **A** (@Unknown, msg#39435): List of differences compiled by EMURGO research: https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263

- **Q** (@AlctoinFacts, msg#39417): Mobile wallet supporting Ergo?
  **A** (@kushti, msg#39419): Magnum Wallet currently supports Ergo; others in development.

- **Q** (@dan, msg#39146): How to swap EFYT tokens on Waves for ERG?
  **A** (@kushti, msg#39142, msg#39147): Swapping available until July 1, 2021. EFYT/ERG pair on exchange; 40K buy wall at 1.00.

---

## Links Shared

- [https://explorer.ergoplatform.com/en/transactions/daf24d9c327264f477078b3f63d9bc7ffe9b4ab3c316c98ebbb7ac0da3bf709f]: Transaction showing new script testing (pool collateral related).

- [https://www.crypto-news-flash.com/cardano-iohk-will-aidrop-kanye-west-coin-stablecoin-in-the-works/]: IOHK AMA statement on potential ERGO + EMURGO joint venture stablecoin.

- [https://www.ergoforum.org/t/multi-stage-protocol-off-chain-on-chain-development-workflow/269]: Multi-stage protocol off-chain/on-chain development workflow documentation.

- [https://messari.io/article/cosmos-polkadot-and-terra-unveil-anchor-a-new-defi-lending-protocol]: Anchor Protocol (lending) — community interest in Ergo equivalent with mixer integration.

- [https://www.adatainment.com/index.php?page=video_search_ama&query=Ergo]: Video backlog of Charles Hoskinson discussing Ergo.

- [https://twitter.com/ergoplatformorg/status/1280135507071156224]: Official Ergo Twitter announcement (context not detailed in transcript).

- [https://twitter.com/chepurnoy/status/1282461736214437889]: kushti/Alex Chepurnoy announcement (context not detailed in transcript).

- [https://www.youtube.com/watch?v=NfSrNxA-MPo]: EMURGO Research video — "Oracle Pools: A New Oracle Model for UTXO-based Blockchains" featuring Robert Kornacki.

- [https://www.slideshare.net/AlexChepurnoy/ergo-presentation-tokyo]: Slides from Asian Roadshow 2019 (kushti presentation on Ergo fundamentals).

- [https://nipopows.com/]: Interactive multimedia reference example for Smart Paper initiative.

- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: EMURGO research comparison: Oracle Pools vs. Chainlink and other oracle models.

- [https://www.ergoforum.org/t/ensuring-long-term-development-success-of-ergo/273]: Forum thread on long-term treasury and development fund sustainability.

- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Full node setup guide (referenced for troubleshooting).

- [https://bitcoinprbuzz.com]: News wire service identified for Ergo press distribution.

- [https://decrypto.org/seminar/]: Seminar featuring light wallet technology supported by Ergo (Greek team).

- [https://twitter.com/cz_binance/status/1277273890830479361?s=20]: Binance listing request mechanism via community voting/visibility.

---

## Unresolved Questions

- **Miner GPU/NVIDIA/AMD binary availability**: @kushti flagged need for public open-source miners before hard fork; coordination with BigEvilSoloMiner to re-open public pool pending (msg#39008-39013).

- **Difficulty drop post-fork**: Risk that difficulty could drop significantly after 4.0 activation, slowing network. Promotion among mining communities needed to ensure miner participation (msg#39010-39013).

- **Tier-1 exchange timeline**: Negotiations with Binance, Coinbase, Kraken, etc. ongoing but no confirmed timeline or conditions published (msg#39315).

- **Ledger wallet support**: Announced for 2020 in roadmap (msg#39884) but no detailed ETA provided.

- **Crowdfunding UI**: Announced for 2020 but details and implementation timeline not specified (msg#39884).

- **Node airdrop mechanics**: Criteria for "running mainnet node" eligibility not fully detailed; lottery app design also unspecified (msg#39026-39036).

- **DAOs/crowdfunding mechanism design**: Post-DevFund sustainability dependent on implementing working DAOs and investment cooperatives, but structure and timeline TBD (msg#39825, msg#39866).

- **Marketing proposal specifics**: Proposal draft referenced for next week but exact budget, coordinator roles, and campaign themes not yet public (msg#39020, msg#39052).

- **Smart Paper scope & timeline**: Initiative approved but no detailed outline or writer assignments specified (msg#39106, msg#39065-39066).

- **Sidechain/layer 2 prioritization**: Discussion suggests investigation but no decision on which optimization path (micro-blocks, sidechains, layer 2) to pursue first (msg#38883, msg#39186-39195).