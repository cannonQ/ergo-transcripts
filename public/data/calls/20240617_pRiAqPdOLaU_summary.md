# Ergo Blockchain Community Call Summary
**Date:** June 17, 2024  
**Topic:** Moria Finance | Lgd and MGpai | ErgoHack VIII

## Executive Summary

Luca and mgPai presented their ErgoHack VIII project called Moria Finance, a financial platform designed for managing individual or corporate funds using smart contract wallets and multisig functionality. The team of five developers (Luca, mgPai, Anastasia, Apollo, Dimitri, and Captain Nemo) successfully implemented a multisig service based on EIP-42 protocol with modifications for their use case. The project features a comprehensive backend using PostgreSQL with Supabase, a custom Nautilus wallet fork with specialized signing methods, and a Lord of the Rings-themed frontend built with Next.js.

The demonstration showed a complete multisig transaction workflow, from wallet creation to transaction signing and blockchain submission. The platform allows multiple signers to coordinate transactions through a database-driven system that tracks commitments and signatures. Future enhancements will include real-time chat messaging, notifications, ErgoPay support, and the ability to upload and sign standalone unsigned transactions.

## Key Discussion Points

• **Technical Architecture**: Implementation of multisig protocol following EIP-42 with direct address usage instead of derivation index zero
• **Database Design**: Four main entities (confirmed users, multisig wallets, unsigned transactions, signed transactions) with relational structure
• **Wallet Integration**: Custom Nautilus fork with two new methods: `generateCommitmentsForTransaction` and `signTransactionMulti`
• **Backend Infrastructure**: PostgreSQL with Supabase for secure authentication and ErgoPay/Ergo Mobile Wallet services
• **Frontend Design**: Lord of the Rings Moria theme with black, grey, and gold color scheme using Next.js
• **Live Demo**: Complete walkthrough of creating multisig wallet, funding it, creating transaction, and multi-party signing process

## Decisions Made

• Code will remain closed source for now
• Captain Nemo will add the custom signing methods to official Nautilus wallet in new v3 manifest release
• Future implementation of Supabase Realtime for live chat and notifications
• Plans to add fees for wallet creation to prevent database spam
• ErgoPay support deferred until Ergo Mobile Wallet can be forked with required signing methods

## Notable Quotes

> "So you can think of it like every time you want to create a new multisig wallet, think of it as like a Slack channel or Discord channel, and then you can include all the members that are the signers, then you guys can all communicate with each other." - **Luca**

> "Moria is the city in the Lord of the Rings where the dwarves lived and they became royalty by mining material. Therefore, the design was based on a black and grey scheme with gold additions." - **mgPai**

> "We basically did this over a weekend." - **mgPai**

## Participants

• **Luca** - Project lead and presenter, handled database architecture and backend design  
• **mgPai** - Co-presenter, responsible for Nautilus fork development and frontend implementation  
• **Team Members** (mentioned): Anastasia, Apollo, Dimitri, and Captain Nemo