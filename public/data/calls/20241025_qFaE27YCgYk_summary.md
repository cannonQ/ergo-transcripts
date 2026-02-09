# Ergo Community Call Summary

**Call Date:** October 25, 2024  
**Call Title:** Communicating with Ergo | Alex Chepurnoy | ErgoHack 9

## Executive Summary

This technical demonstration by Alex Chepurnoy (kushti) focused on building a simple Ergo application using only the Node and ErgoScript compiler. The session walked through creating a basic ring signature implementation that provides a simple form of obfuscation for transactions. The demonstration covered the complete workflow from script creation to implementation, including setting up custom scans to track outputs and testing the functionality with actual ERG transactions.

The tutorial served as an educational foundation for developers interested in building more sophisticated applications on Ergo, showcasing how custom scans are widely used across the Ergo ecosystem by applications like stablecoin banks, Ergo Auctions, Anon Reels, and Proxy Services.

## Key Discussion Points

• **Ring Signature Implementation**: Created a simple script using two public keys from the wallet that preserves zero-knowledge properties
• **Custom Scan Registration**: Demonstrated how to register custom scans to track outputs not handled by default node tracking
• **ErgoScript Compilation**: Used web-based ErgoScript playground to compile scripts into Pay2Script addresses
• **Wallet Integration**: Configured scans with "forced" wallet interaction to automatically add found outputs to the wallet
• **Testing Workflow**: Complete end-to-end testing including sending 1 ERG to the script and spending it back
• **Advanced Methods**: Introduction to additional wallet methods for complex applications (UTXO by binary, generate signed/unsigned transactions)
• **Real-world Applications**: Examples of custom scan usage in production Ergo applications

## Decisions Made

• No formal decisions were made during this technical demonstration
• The session was educational/tutorial in nature rather than decision-oriented

## Notable Quotes

> "And this ring signature is actually a true ring signature, not one out of two multisig as in Bitcoin, so this ring signature is preserving zero-knowledge property, so from spending an output with this script pretending. The output is not known which key was used actually." - **kushti**

> "So it's quite popular way to find outputs around. Alternative methods are using JDE, so JSON development environment, or also Explorer, which is how ErgoMixer backend is working, for example." - **kushti**

> "So you can use it as a very simple and stupid form of obfuscation. And by using custom scans you can do more complex applications using just a node." - **kushti**

## Participants

• **kushti (Alex Chepurnoy)** - Presenter and primary speaker, demonstrating the technical implementation