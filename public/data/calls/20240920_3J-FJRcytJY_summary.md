---
title: "Ergo PoW Blockchain - Weekly Update & AMA - September 19th 2024"
date: "2024-09-20"
type: video_summary
call_type: ama
source: youtube
source_url: https://youtube.com/watch?v=3J-FJRcytJY
video_id: 3J-FJRcytJY
duration_minutes: 42
speakers: [AI, kushti]
topics: [weekly-updates, translations, developer-chat, telegram, ergoforum, ergonames, commit-reveal, front-running-protection, avl-trees, go-programming]
companion_files: [20240920_3J-FJRcytJY_transcript.txt, 20240920_3J-FJRcytJY_qa.json, 20240920_3J-FJRcytJY_decisions.json, 20240920_3J-FJRcytJY_topics.json]
---
# Ergo Blockchain Community Call Summary
**Date:** September 20, 2024  
**Call Title:** Ergo PoW Blockchain - Weekly Update & AMA - September 19th 2024

## Executive Summary

This weekly community call featured core developer kushti and contributor mgPai discussing significant developments across the Ergo ecosystem. The call highlighted substantial progress on Ergonames development, with mgPai successfully completing end-to-end testing of the complex naming system that includes anti-front-running protection and recursive subdomain functionality. kushti provided updates on Node 6.0 development, announcing the upcoming release of DevNet 1 with support for new data structures, signed big integers, and higher-order functions, positioning Ergo closer to mainnet release.

The discussion also covered kushti's early-stage work on sub-blocks (input blocks and ordering blocks) following his forum proposal, which will require security analysis and formal proofs before implementation. Both developers emphasized the importance of non-breaking updates to maintain community cohesion and highlighted the growing ecosystem of projects including various DEXs, the upcoming Ethereum bridge via Rosen Bridge, and multiple DeFi applications nearing launch.

## Key Discussion Points

• **Ergonames Progress**: Complex naming system with 6-7 interconnected contracts supporting recursive subdomains and commit-reveal scheme to prevent front-running attacks
• **Node 6.0 Development**: DevNet 1 release imminent with new data structures, cryptographic support, and higher-order functions; moving toward public testnet
• **Sub-blocks Research**: Early development of dual-block system (input/ordering blocks) inspired by Prism, requiring security proofs before implementation
• **Community Translation**: Weekly updates now being translated into Russian, Spanish, Vietnamese with more languages planned
• **University Outreach**: mgPai leading efforts to onboard computer science students through campus hackathons and development opportunities
• **Mining Focus**: Discussion of Ergo's competitive position in GPU mining landscape and potential for attracting miners from less valuable projects
• **Ecosystem Growth**: Updates on Trade House DEX launch, Dexy synthetic assets, ChainCash P2P system, and pending Ethereum bridge
• **Development Tools**: Emphasis on AI-assisted development and improved user interfaces across applications

## Decisions Made

• DevNet 1 release scheduled for same day as call
• Weekly text updates will continue expansion to additional national languages
• University hackathon sponsorship discussions ongoing with positive outlook
• ErgPy updates deprioritized until mgPai completes Ergonames, Phoenix HODL coin, and Sigmanauts project
• Potential bounties for Python bindings through Ergo Devs DAO under consideration

## Notable Quotes

> "I think updates should be non-breaking... because well, after all, well, it's kind of a dirty story, right? When some part of community is deciding to push for protocol updates, right? Without getting concerned from everyone... So then, yeah, well, I think updates should be non-breaking." - **kushti** on maintaining community cohesion

> "So you can be your own bank in regards to all the aspects of free banking. So you can mint your money, but then they are recognized in the Ergo network and then you can immediately use them in applications doing trustless derivatives." - **kushti** on Ergo's mining capabilities

> "I think working on Ergo gives them an opportunity to put something unique, right? That the recruiters or anyone who haven't seen the recruiters are going to be like, oh, what's Ergo? What does it mean to contribute to a node?" - **mgPai** on student recruitment opportunities

## Participants

• **kushti** - Core developer and protocol architect
• **mgPai** - Developer working on Ergonames, Phoenix Finance, and university outreach initiatives
• **Community members** - Various participants asking questions via chat