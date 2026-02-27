# Ergo Developer Chat Summary — 2023-W15

## Key Topics Discussed

- **NFT Minting Tooling & Documentation**: Multiple developers (Dan Friedman, mgPai) working on NFT bulk minting infrastructure for Ergo. Discussion centered on language choice (Scala vs. JavaScript), base58 encoding requirements, and mnemonic parsing issues in the mgPai NFT minter tool.

- **AppKit OkHttp Thread Lifecycle Issue**: Satergo dev reporting that AppKit's Retrofit/OkHttp3 integration keeps non-daemon HTTP2 threads alive for 5+ minutes after application window closes. Blocking issue for proper application shutdown.

- **AppKit Token Selection & Exception Handling**: NotEnoughTokensException in AppKit returns empty tokenBalances map despite correct usage patterns. Unclear if related to zero token balance, testnet wallet context, or AppKit version regression.

- **Testnet Infrastructure & Node Management**: Discussion of testnet node management in Satergo wallet—previously removed from UI due to poor testnet stability (freezes, downtime). Workaround documented: manual blockchain folder removal and node-info.json network type editing.

- **Developer Channel Moderation & Workflow**: stenolog raised concern about non-technical chatter in dev channel fragmenting focus of core developers isolating sporadic bugs. Glasgow disagreed with characterization but acknowledged issue existed.

- **Scala Language Feature Clarification**: Dan Friedman asked whether Scala supports lazy evaluation like Haskell (unresolved in chat).

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#12335, 2023-04-13]: Testnet UI toggle support was removed due to poor testnet stability requiring separate node versions; documented workaround available for manual testnet configuration.

- [@Aberg Satergo dev, msg#12338, 2023-04-13]: Proposed reintroducing testnet UI network selector toggle in next release (pending decision).

- [@Austen Milbarge // GreasyCEX, msg#12577, 2023-04-16]: GreasyCEX/ErgoCube initiative to create centralized giveaway/bounty showcase page; requesting community post info and tag @HQ3rr and Austen.

- [@Dan Friedman, msg#12416, 2023-04-14]: Minting NFTs with ERG for now; planning hybrid token launch using Rosen Bridge in near term.

## Technical Q&A Worth Preserving

- **Q** (@Dan Friedman, msg#12224): Point to example of minting NFT in Scala showing how to mint and write to registers?
  **A** (@Unknown, msg#12323): https://github.com/mgpai22/ergo-nft-bulk-minter

- **Q** (@Dan Friedman, msg#12309-12310): What is best stack to mint NFT through code? No luck with Scala or JS. What does everyone use? Node? Python?
  **A** (@Luivatra, msg#12311): Have you successfully sent a simple transaction first? Recommended starting with 0.1 ERG transfer p2pk→p2pk before NFT minting (special transaction type).

- **Q** (@Dan Friedman, msg#12382-12388): NFT minting threw exception expecting Base58 encoding for token name. Do I need to manually encode strings to Base58?
  **A** (@Dan Friedman, msg#12395): Resolved by rebuilding JAR; issue was not Base58 encoding but dependency/compilation problem.

- **Q** (@Dan Friedman, msg#12401): Is there a parsing character for the mnemonic or is it spaces?
  **A** (@Dan Friedman, msg#12403): Spaces are the delimiter; mnemonic index out of bounds error indicates array access problem, not delimiter issue.

- **Q** (@Aberg Satergo dev, msg#12566): AppKit uses Retrofit/OkHttp3. OkHttp Http2 thread doesn't close after window closes. How to access AppKit's OkHttp instance to close it or make daemon?
  **A** (@MrStahlfelge | Won't DM, msg#12571): Instantiate REST API client with custom OkHttp instance (recommended practice anyway to avoid multiple thread pools). Check OkHttp docs and Ergo Wallet app for example.

- **Q** (@Aberg Satergo dev, msg#12604): Why is NotEnoughTokensException tokenBalances map empty?
  **A** (@Glasgow｜WON'T DM, msg#12605): Exception designed to report missing tokens, not found tokens. However, Aberg clarified (msg#12606) they're using it correctly but map remains empty—suspected causes: zero token balance, testnet context, or AppKit version regression (unresolved).

- **Q** (@Dan Friedman, msg#12388): Do I need to manually encode any strings to Base58?
  **A** (@Dan Friedman, msg#12391, paraphrasing Occam's Razor): Rebuilt JAR resolved all encoding issues; was a compilation/dependency problem, not manual encoding requirement.

- **Q** (@Luigi🇵🇸, msg#12537): Is there a tutorial to add ErgoPay to a Unity project?
  **A** (No response in chat segment.)

- **Q** (@Aberg Satergo dev, msg#12580): How to create an AppKit instance with a custom OkHttp instance? (Not looking for generic OkHttp docs.)
  **A** (@MrStahlfelge | Won't DM, msg#12578): Check Ergo Wallet app source code for implementation example (no dedicated AppKit documentation).

## Links Shared

- [https://testnet.ergofaucet.org/](https://testnet.ergofaucet.org/): Testnet ERG faucet for acquiring testnet tokens
- [https://github.com/mgpai22/ergo-nft-bulk-minter](https://github.com/mgpai22/ergo-nft-bulk-minter): NFT bulk minting tool with Scala/Java implementation
- [https://github.com/square/okhttp/issues/4029](https://github.com/square/okhttp/issues/4029): OkHttp GitHub issue on HTTP2 thread lifecycle; suggests daemon thread workaround (OkHttp 4+ only)
- [InputBoxesSelectionException Documentation](https://github.com/ergoplatform/ergo-appkit/blob/autodocs/.autodoc/docs/markdown/common/src/main/java/org/ergoplatform/appkit/InputBoxesSelectionException.md): AppKit exception handling reference
- [SelectTokensHelper Documentation](https://github.com/ergoplatform/ergo-appkit/blob/autodocs/.autodoc/docs/markdown/common/src/main/java/org/ergoplatform/appkit/SelectTokensHelper.md): Token selection utility reference

## Unresolved Questions

- **Scala lazy evaluation**: Does Scala support lazy evaluation like Haskell? (@Dan Friedman, msg#12562 — no response recorded)
- **AppKit NotEnoughTokensException tokenBalances empty**: Root cause unclear—zero balance? testnet context? AppKit regression? (@Aberg Satergo dev, msg#12606 — flagged as needing investigation)
- **AppKit documentation availability**: Confusion about whether AppKit has official documentation separate from OkHttp docs. (@Aberg Satergo dev, msg#12579-12580 — highlighted gap)
- **ErgoPay Unity integration**: No tutorial available yet for integrating ErgoPay into Unity projects (@Luigi🇵🇸, msg#12537)
- **Testnet UI toggle reintroduction**: Decision pending on whether to restore testnet network selector to Satergo UI in next release (@Aberg Satergo dev, msg#12338)