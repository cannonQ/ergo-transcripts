---
title: "Ergo Developer Chat — 2023-W34"
date_start: "2023-08-21"
date_end: "2023-08-27"
type: telegram_weekly
channel: developer
week: "2023-W34"
source: telegram
message_count: 68
categories: [technical, ecosystem, wallet, nft]
key_terms: [block height, extraction, stability, mgpai, dApps, frontend, UX, local instances, combined index, Ergo Explorer, pull requests, language support, Indonesian, Ergo Wallet, pull request, workflow, review, difficulty adjustment, statistics, post-merge data]
---
# Ergo Developer Chat Summary — 2023-W34

## Key Topics Discussed

- **Block height and timestamp dependencies in chain speed optimization**: Discussion of how applications relying on block height vs. timestamp are affected by changes to block time, and the implications for emission contracts and security considerations.

- **Frontend aggregation and dApp indexing**: Proposal to create a unified package of all Ergo dApp frontend interfaces for local instance deployment, recognizing that dApps interact on-chain while frontends serve UX purposes.

- **API endpoint performance for token lookups**: Investigation into unspent box queries by token ID, with requests for mempool integration to reduce load on explorers and centralized API services.

- **Satergo and Nautilus theming**: Technical discussion of CSS override capabilities in desktop wallets, including missing dark theme support in Nautilus and custom theme file deployment.

- **Ergo Explorer internationalization**: Follow-up on merged PRs adding language support, with discovery that Indonesian language switcher was not appearing on the live web interface despite backend implementation.

## Important Decisions or Announcements

- [@Yulius Kristianto (cg listing boss), msg#16770, 2023-08-22]: Multiple PRs merged into Ergo Explorer frontend by Dmitry, but Indonesian language switcher not yet live on public deployment.

- [@qx(), msg#16965-16977, 2023-08-27]: Instructions provided for Satergo GreasyCex theme deployment via custom.css file placement in root directory (corrected after initial misstatement about file locations).

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#16810): Where can I find the contracts for Auction House V3, specifically the Dutch auction contract?
  **A** (@Luivatra, msg#16811-16813): Implied availability but context incomplete; Luivatra noted using similar contracts for tree cloning and staking snapshots, suggesting contracts are discoverable in repository.

- **Q** (@Pulsarz, msg#16853-16872): Need for an endpoint returning unspent boxes containing a specific token, ideally with mempool visibility.
  **A** (@Pulsarz, analysis): Current workaround requires manual mempool extraction; a public scan endpoint with token filtering and mempool integration would reduce explorer load and enable lighter node operation with extraIndex.

- **Q** (@qx(), msg#16891-16908): API timeout issue on `/api/v1/boxes/unspent/byTokenId/...` endpoint at Cornell node (api.ergo.aap.cornell.edu).
  **A** (@qx(), msg#16908): Confirmed timeout occurs on both browser HTTPS and local machine HTTP requests; root cause investigation ongoing.

- **Q** (@Aberg Satergo dev, msg#16981): Does Nautilus have dark theme support?
  **A** (@qx(), msg#16986): No dark theme in Nautilus; every transaction requires workaround due to bright UI.

## Links Shared

- [https://github.com/ergoplatform/ergo-wallet-app/pull/174](https://github.com/ergoplatform/ergo-wallet-app/pull/174): Ergo Wallet App PR pending review by MrStahlfelge (as of 2023-08-21).

- [https://github.com/Luivatra/ergotipper-tokens/pull/18](https://github.com/Luivatra/ergotipper-tokens/pull/18): Community NFT trading P2P method via tipper bots, enabling card set collection (2023-08-23).

- [https://api.ergo.aap.cornell.edu/api/v1/boxes/unspent/byTokenId/1028de73d018f0c9a374b71555c5b8f1390994f2f41633e7b9d68f77735782ee?offset=3200&limit=100](https://api.ergo.aap.cornell.edu/api/v1/boxes/unspent/byTokenId/1028de73d018f0c9a374b71555c5b8f1390994f2f41633e7b9d68f77735782ee?offset=3200&limit=100): Token box query endpoint experiencing timeout issues.

## Unresolved Questions

- **Ergo Explorer language switcher deployment**: Indonesian language support merged in backend but not visible on public Ergo Explorer interface; deployment or build configuration issue unresolved.

- **API endpoint timeout root cause**: `/boxes/unspent/byTokenId/` endpoint timing out on Cornell node; whether issue is framework default, server configuration, or data volume remains undetermined.

- **Mempool-aware token box endpoint**: No official endpoint yet available that combines unspent box filtering by token with mempool visibility; requested as TBD for reducing explorer infrastructure burden.

- **Nautilus dark theme**: Acknowledged as missing but no roadmap mentioned for implementation.