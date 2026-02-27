# Ergo Developer Chat — 2023-W41 Summary

## Key Topics Discussed

- **Re-emission mechanism and contracts**: Discussion of how re-emission tokens are injected at consensus level, how miners must include them in reward boxes, and how pay-to-re-emission contracts work with periodic merging and ERG withdrawal at 3 ERG per block [@Glasgow, msg#19841].

- **AppKit box selection and token handling**: Multiple developers identified that AppKit has issues with change amount calculation when handling multiple instances of the same token in a single box, and confirmed the node allows this scenario [@Luivatra, msg#19829-19836].

- **API pagination and offset handling**: Discussion of how Ergo Explorer API uses offset/limit parameters, and the caveat that order book endpoints sort newest-first, which can cause pagination issues when new entries arrive [@Luivatra, msg#19871-19872].

- **Multi-input transaction construction**: Developers explored building transactions that spend from both contract addresses (P2S) and user-controlled addresses simultaneously, confirming that transaction signing can only occur with a single prover, but multiple boxes can be selected as inputs [@Flying Pig, msg#19973-19982].

- **Token price discovery methods**: Multiple approaches discussed for Satergo wallet: querying Spectrum API pools directly, using on-chain data via pool_id lookups, and CoinGecko/centralized exchange APIs. Consensus that pulling directly from chain is most robust [@Aberg/HQΣr, msg#20043-20055].

- **Stealth address privacy and generation**: Discussion of whether stealth addresses protect against attacker-generated address enumeration; question raised but not fully resolved [@Aberg, msg#20058-20067].

- **Mempool spam protection**: Confirmation that mempool implements cumulative cost tracking per peer across all contracts in submitted transactions, and will stop accepting transactions from a peer after threshold exceeded [@kushti, msg#20166-20168].

- **Block time variance in PoW**: Discussion of whether block time variance (30 sec to 10 min observed) can be reduced; kushti shared Bobtail proposal but expressed skepticism [@kushti, msg#20226-20228].

- **Spectrum Network consensus updates**: White paper updated with PoS-based global synchronization mechanism, improved VRF lottery selection, and detailed block validation/chain selection algorithms [@kushti, msg#20150].

---

## Important Decisions or Announcements

- [@Glasgow, msg#19841, 2023-10-09]: Re-emission contract mechanics formally documented with reference to EIP-0027.

- [@Aberg, msg#20105, 2023-10-18]: Satergo update released on GitHub with light node setup support and improved toggle switch animations.

- [@kushti, msg#20150, 2023-10-18]: Spectrum Network white paper v1 released with significant consensus mechanism improvements.

- [@HQΣr, msg#20251, 2023-10-22]: Request for removal of old AuctionCoin LP to prevent user confusion.

---

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig): When using the node to create unsigned transactions, does it only scan the main wallet for available boxes, or does it also scan derived wallet addresses?
  **A** (@kushti): [Not directly answered; kushti asked for more details. Issue flagged but resolution not documented in this segment.]

- **Q** (@Aberg): How can stealth address generation be prevented from allowing an attacker to enumerate 10,000+ addresses derived from a single stealth address to deanonymize all transactions?
  **A** (@kushti): [Question raised but not resolved in this chat segment.]

- **Q** (@Flying Pig): Can a single transaction spend from both a contract address (P2S) and a user address, with the contract input unsigned and user input signed?
  **A** (@koukarin): Technically a transaction can only be signed by one address, so you must create separate transactions per signer. However, @Flying Pig clarified the contract doesn't require signing, only the user address does (using `prover_index`), and multiple boxes can be inputs. Resolution: Use specific box IDs rather than addresses as inputs [@Flying Pig/Luivatra, msg#19973-19982].

- **Q** (@Aberg): What is the best way to get current token prices for wallet display in Satergo?
  **A** (@HQΣr): Multiple options: (1) query on-chain Spectrum pool data via `/boxes/unspent/byTokenId/{pool_id}` and calculate from token/ERG ratio; (2) use Spectrum API `/v1/amm/pools/stats`; (3) use CoinGecko for ERG price and convert; (4) use ergcube.com/prices.php for hourly prices. Fastest is Explorer API method [@HQΣr, msg#20044-20055].

- **Q** (@Aberg): How are many address generation attacks prevented?
  **A** (@kushti): [Partial answer] R4 register stores nanoerg per USD price as long value, but the full context of prevention mechanism was not detailed [@kushti, msg#20076].

- **Q** (@Aberg): How do I get the pool_id for a token?
  **A** (@HQΣr): Use Spectrum API endpoint: https://api.spectrum.fi/v1/amm/pools/stats [@HQΣr, msg#20055].

---

## Links Shared

- [EIP-0027 Re-emission Specification](https://github.com/ergoplatform/eips/blob/master/eip-0027.md#contracts): Formal specification of re-emission contract mechanics, consensus rules, and withdrawal conditions.

- [Spectrum Network White Paper v1](https://spectrum.fi/spectrum_wp_v1.pdf): Updated consensus protocol with PoS-based synchronization, improved VRF lottery, block validation and chain selection algorithms.

- [Spectrum Finance API - Pool Stats](https://api.spectrum.fi/v1/amm/pools/stats): Endpoint for retrieving current pool data including token pairs and liquidity.

- [Ergo Token List Repository](https://github.com/spectrum-finance/ergo-token-list/blob/main/src/tokens.json): GitHub repository for verified token list; PRs needed to add or remove tokens.

- [Bobtail: Proof-of-Work Target for Variance Reduction](https://arxiv.org/abs/1709.08750): Academic paper proposing mechanism to minimize blockchain mining variance (noted by kushti as a proposal he is skeptical of).

---

## Unresolved Questions

- **Derived wallet address scanning**: Whether the node's unsigned TX creation API scans derived wallet addresses or only the main wallet address [@Flying Pig, msg#19995].

- **Stealth address enumeration resistance**: Whether stealth addresses can be protected against attacker-generated address enumeration without revealing identity [@Aberg, msg#20058-20067].

- **Block time variance reduction**: Whether Ergo should implement variance-reduction mechanisms like Bobtail; kushti expressed skepticism but no decision was reached [@kushti, msg#20208].

- **Explorer API health**: Brief incident where HQΣr received 400 errors from axios queries; resolved by corrupted blockheight file rebuild, but root cause unclear [@HQΣr, msg#20153-20156].