# Ergo Developer Chat — 2023-W06 Summary

## Key Topics Discussed

- **Block time and parameter configuration**: Discussion of whether block height vs. timestamp affects dApp behavior and emission contracts when implementing faster block confirmations. Consensus that testnet experimentation is needed to study implications scientifically.

- **ErgoTree serialization and P2P protocol parsing**: Extended technical deep-dive on parsing ErgoTransaction modifiers in the P2P protocol, specifically handling SigmaBoolean structures, ContextExtension, and constant deserialization without needing to parse all non-constant sigma values.

- **Hardened key derivation paths**: Query about whether derivation paths like `44'/429'/0'/0/0` require all components to be hardened or only intermediate ones.

- **HD wallet derivation standards**: Discussion of BIP-32 HD wallet best practices and the significance of hardened vs. non-hardened derivation paths.

- **Spectrum DEX API filtering**: Question about how to query last 24h volume using the Spectrum API's `from`/`to` filter parameters.

- **Affiliate tracking and content creator incentives**: Discussion of whether dApps can track referral information on-chain using metadata or unique tokens to reward influencers for bringing users to Ergo ecosystem DEXes.

## Important Decisions or Announcements

- [@kushti khushi, msg#10879, 2023-02-16]: Ergo protocol reference client **5.0.7 released** — https://github.com/ergoplatform/ergo/releases/tag/v5.0.7

- [@kushti khushi, msg#10682, 2023-02-08]: **ErgoHack VI — Cypherpunk Finance launched** on February 8th, focused on first-principles cryptocurrency design and privacy as a fundamental human right — https://bit.ly/3I5hYgP

- [@MaluiinPool, msg#10985, 2023-02-22]: Fluid Token developers joining the group to discuss cross-chain integration with Ergo and smart contract architecture.

## Technical Q&A Worth Preserving

- **Q** (@Aberg): When parsing ErgoTransaction modifiers in the P2P protocol, how do I skip SigmaValue parsing in ContextExtension without parsing the entire recursive SigmaBoolean structure, as kushti suggested?
  **A** (@Alex Slesarenko, msg#11056, #11066): You need to understand the exact serialization format in the ErgoTree specification (https://ergoplatform.org/docs/ErgoTree.pdf). Look at `SigmaBoolean.serializer` to understand how `ProveDlog` (a SigmaBoolean subclass) is serialized. For P2PK transactions specifically, you should only be dealing with ProveDlog opcodes which have EC points as arguments—you cannot easily skip parsing the recursive SigmaBoolean structure itself.

- **Q** (@Aberg, msg#11041): My ErgoTransaction parser fails with inconsistent errors when parsing the modifier, particularly with SigmaValue parsing in ContextExtension. Suggestions?
  **A** (@Alex Slesarenko, msg#11045, #11047): Use AppKit if possible, otherwise use serializers from Sigma. If building a P2P protocol implementation from scratch, examine the interpreter module in the develop branch and study the Sigma source code directly.

- **Q** (@Aberg, msg#11086): Is an ErgoTree header with value 0 or 16 normal? After parsing header and nConsts, the next byte (data type) is 0 which is invalid.
  **A** (@Alex Slesarenko, msg#11088): Consult the ErgoTree PDF specification. (@Aberg subsequently identified two errors in the PDF: header should be `getByte()` not `UInt`, and contains "end for" where it should say "end if".)

- **Q** (@Aberg, msg#11103): Debugged issue where custom DataInputStream extension was calling `super.read()` twice, causing every byte to be read twice and returning incorrect values. Now investigating specification accuracy.
  **A** (self-resolved): Bug was in custom byte-counting implementation. Also flagged PDF inaccuracies for upstream correction.

- **Q** (@HQΣr | Wont Dm, msg#11159, #11161): Can we create affiliate/referral tracking for content creators using smart contracts? Specifically, can metadata be attached to P2PK addresses to track "this user came from influencer X and performed action Y on DEX"?
  **A** (@Flying Pig, msg#11162): Addresses cannot store data directly. Alternative: create a faucet with unique referral links; new users receive a unique token linked to the referrer, which can then be tracked for DEX interaction. Caveat: Won't work if users employ derived addresses (private mode in Nautilus wallet).

- **Q** (@Aberg, msg#11106): What is the difference between `SType` and `RType` in the Sigma codebase? They appear in the same context but seem distinct.
  **A** (implicit from code review): `RType` relates to runtime type representation, while `SType` is the Sigma protocol type system. They serve different purposes in serialization/deserialization pipelines. Full clarification requires studying Sigma source directly.

- **Q** (@HQΣr, msg#10887): How do I query the Spectrum API to get last 24h volume? What values should I use for `from`/`to` filters?
  **A** (unresolved): No response in this segment.

- **Q** (@Aberg, msg#10951): Is a derivation path like `44'/429'/0'/0/0` considered fully hardened, or must the final component also be hardened?
  **A** (unresolved): Aberg referenced a Medium article on the topic but no authoritative response was provided in this segment.

## Links Shared

- [https://github.com/FlyingPig69/Ergo_Explorer_Queries](https://github.com/FlyingPig69/Ergo_Explorer_Queries): SQL queries to extract tokens left in ErgoPad staking contracts by address or token ID.

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.7](https://github.com/ergoplatform/ergo/releases/tag/v5.0.7): Ergo protocol reference client 5.0.7 release.

- [https://bit.ly/3I5hYgP](https://bit.ly/3I5hYgP): ErgoHack VI — Cypherpunk Finance announcement and background on cypherpunk philosophy.

- [https://medium.com/@blainemalone01/hd-wallets-why-hardened-derivation-matters-89efcdc71671](https://medium.com/@blainemalone01/hd-wallets-why-hardened-derivation-matters-89efcdc71671): Article on HD wallet hardened derivation best practices.

- [https://api.spectrum.fi/v1/docs/#operation/Pool%20stats](https://api.spectrum.fi/v1/docs/#operation/Pool%20stats): Spectrum DEX API documentation for pool statistics.

- [https://ergoplatform.org/docs/ErgoTree.pdf](https://ergoplatform.org/docs/ErgoTree.pdf): ErgoTree serialization specification (identified as containing minor inaccuracies).

## Unresolved Questions

- **Block time changes and dApp impact**: What is the safest approach to increasing block speed without breaking contracts that rely on block height or timestamp? Needs testnet validation with scientific observations.

- **P2PK ERgoTree complexity**: For P2PK transactions, are complex non-constant ErgoTrees common, or are they always simple ProveDlog structures? (@Aberg asked @morphic but resolution not shown in this segment.)

- **Sigma constant size > 1**: Is it common for the sigma constant size field to be >= 1 in real transactions? (@Aberg noted it was null for every transaction checked so far.)

- **Spectrum API `from`/`to` parameters**: Exact documentation or examples for querying 24h volume metrics.

- **HD derivation path standards**: Authoritative guidance on whether all path components must be hardened in BIP-32 paths for Ergo.