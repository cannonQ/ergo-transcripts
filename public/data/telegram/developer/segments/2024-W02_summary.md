# Ergo Developer Chat Summary — 2024-W02

## Key Topics Discussed

- **ergonodes.net infrastructure upgrade**: Aberg updated the server from an obsolete web library to a modern one, enabling future HTTPS support without user-facing changes [@Aberg Satergo dev, msg#23947, 2024-01-10].

- **Ergo website repository organization**: Community clarified the location of the official Ergo website repository and noted that the site is being refreshed, with new content structure in `/content/locales/` [@Glasgow｜WON'T DM, msg#23990; Yulius Kristianto, msg#23995-23996, 2024-01-11].

- **Developer activity metrics**: Ergo ranked in top 100 ecosystems with 58 monthly active developers and 17 full-time contributors, placing above Tron in the Electric Capital developer report [@Glasgow｜WON'T DM, msg#24160, 2024-01-18].

- **Block time and consensus**: kushti provided theoretical context on block timing in proof-of-work systems, referencing GKL-15 and PSS-16 papers on how propagation delays and verifier's dilemma constrain block intervals, independent of UTXO vs. account accounting models [@kushti khushi, msg#24263-24265, 2024-01-23].

- **Stealth address implementation**: Aberg began reimplementing stealth address logic from JavaScript into Java, seeking guidance on cryptographic operations (ECPoint multiplication and serialization) [@Aberg Satergo dev, msg#24201, 24366, 2024-01-19, 2024-01-27].

- **Address derivation discrepancy**: Flying Pig reported that addresses derived from the same seed in the node matched only the first address but diverged on subsequent addresses compared to Nautilus, prompting kushti to suggest checking for mnemonic passphrase or derivation flag settings [@Flying Pig (™), msg#24185; kushti khushi, msg#24186-24187, 2024-01-18].

- **Register serialization in Python**: Flying Pig worked on deserializing Ergo registers to numbers in Python, specifically querying r4 and r5 representations in SigmaUSD bank boxes [@Flying Pig (™), msg#24344-24352, 2024-01-25-26].

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#23990, 2024-01-11]: The Ergo website is currently being refreshed; contributors should hold off on pointing to the old site repository.

- [@Glasgow｜WON'T DM, msg#24155, 2024-01-18]: Ergo repositories are listed in the Electric Capital crypto-ecosystems database, though some recent repos were excluded due to a policy change on missing repositories.

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig, msg#24112): What is the key difference between a stealth address and multiple covert addresses? If I send ERG to a stealth address and later spend it from my wallet, isn't there a link between the inbound and outbound transaction, defeating privacy?
  **A**: Not answered in the chat; remains an open technical question.

- **Q** (@Flying Pig, msg#24166): What does `rebroadcastCount = 3` in node settings do? Is an epoch a block, and does the node rebroadcast 3 mempool transactions per epoch? Which transactions?
  **A**: Not definitively answered in the chat; technical clarification needed.

- **Q** (@Flying Pig, msg#24185): Node and Nautilus derive addresses differently from the same seed—only the first address matches. Why?
  **A** (@kushti khushi, msg#24186-24187): Check for a mnemonic passphrase or old derivation flag; neither was confirmed as the cause.

- **Q** (@Flying Pig, msg#24344-24345): How do you deserialize Ergo registers to numbers using Python? What do r4 and r5 represent in a SigmaUSD bank box?
  **A** (@Flying Pig, msg#24357): Flying Pig forked a serialization library to add deserialization for registers; r4 and r5 values were worked out via iterative testing.

- **Q** (@Aberg Satergo dev, msg#24366): In Java (BouncyCastle), after multiplying an ECPoint by a BigInteger, how do you convert the result back to a BigInteger?
  **A**: Not answered; deferred to anon_br Σ for cryptography guidance [@anon_br Σ, msg#24203].

- **Q** (@Unknown, msg#24359): Is there any open-source code for Ergo–Waves network integration?
  **A** (@Glasgow｜WON'T DM, msg#24360; kushti khushi, msg#24361): Waves team developed a closed-source gateway. A Go library with Ergo transaction functions was opensourced by a Waves developer but is not widely indexed; location unknown [@Unknown, msg#24362].

## Links Shared

- [https://github.com/ergoplatform/website/tree/master/content/en](https://github.com/ergoplatform/website/tree/master/content/en): Old Ergo website repository (content folder).

- [https://github.com/ergoplatform/ergoweb/tree/master/content/locales](https://github.com/ergoplatform/ergoweb/tree/master/content/locales): New/current Ergo website repository with locale-specific content.

- [https://github.com/electric-capital/crypto-ecosystems/blob/master/data/ecosystems/e/ergo.toml](https://github.com/electric-capital/crypto-ecosystems/blob/master/data/ecosystems/e/ergo.toml): Electric Capital crypto-ecosystems database entry for Ergo; used in developer activity reports.

- [https://www.developerreport.com/developer-report](https://www.developerreport.com/developer-report): Electric Capital Developer Report aggregator.

- [https://www.developerreport.com/ecosystems/ergo](https://www.developerreport.com/ecosystems/ergo): Ergo's developer report showing 58 monthly active devs and ranking in top 100 ecosystems.

- [https://vxtwitter.com/chepurnoy/status/1748078907775922294](https://vxtwitter.com/chepurnoy/status/1748078907775922294): kushti's Twitter post [@kushti khushi, msg#24177, 2024-01-18].

- [https://ergoplatform.org/en/blog/2020-11-09-first-steps-towards-interoperability-with-cardano-oracles/](https://ergoplatform.org/en/blog/2020-11-09-first-steps-towards-interoperability-with-cardano-oracles/): Ergo blog post on Cardano oracle interoperability [@cafebedouin.org, msg#24248, 2024-01-23].

- [https://eprint.iacr.org/2016/454.pdf](https://eprint.iacr.org/2016/454.pdf): PSS16 paper on proof-of-work security and block delay tradeoffs [@kushti khushi, msg#24265, 2024-01-23].

## Unresolved Questions

- **Stealth address privacy model**: How effective is stealth addressing if on-chain transaction linking remains visible post-withdrawal? [@Flying Pig, msg#24112].

- **Node rebroadcast behavior**: Precise definition of `rebroadcastCount` and which mempool transactions are selected for rebroadcasting [@Flying Pig, msg#24166].

- **Address derivation mismatch**: Root cause of divergence between node and Nautilus address derivation from the same seed (beyond first address) [@Flying Pig, msg#24185].

- **Java ECPoint serialization**: How to convert BouncyCastle ECPoint (result of scalar multiplication) back to BigInteger representation [@Aberg Satergo dev, msg#24366].

- **Waves integration library**: Location and status of the Go library for Ergo transaction handling, opensourced by Waves developer [@Unknown, msg#24362].