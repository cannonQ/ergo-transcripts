# Ergo Blockchain Community Call Summary
**Date:** June 25, 2025  
**Topic:** Ergomempool Visualiser | 2ndTL Mining | ErgoHack 10

## Executive Summary

2ndTL Mining presented his ErgoHack 10 submission - an Ergo Mempool Visualizer - a web application that provides real-time visualization of Ergo blockchain transactions waiting in the mempool before being mined into blocks. The application displays live block information, transaction visualization, and includes interactive features allowing users to connect their Nautilus wallet and send test transactions that appear highlighted in the mempool view. Despite being developed by a non-professional developer over just a few days, the project successfully integrates with Ergo's blockchain infrastructure and demonstrates practical wallet connectivity and transaction submission capabilities.

The project showcases the accessibility of Ergo's development ecosystem, utilizing existing tools like the dApp connector, Ergo documentation APIs, and community resources. The application is hosted on the decentralized Flux network and is open-sourced on GitHub, embodying the collaborative spirit of the Ergo community while providing a valuable tool for visualizing network activity and transaction flow.

## Key Discussion Points

• **Ergo Mempool Visualizer Features:**
  - Real-time display of pending transactions in visual block format
  - Live block information showing mining pools, transaction counts, fees, and block sizes
  - Interactive wallet connectivity through Nautilus integration
  - Transaction highlighting for user-submitted transactions
  - Test transaction and donation functionality

• **Technical Implementation:**
  - Built using Python/Flask with JavaScript frontend
  - Integrates with Ergo blockchain APIs and explorer
  - Uses Nautilus dApp connector for wallet functionality
  - Hosted on decentralized Flux network with multiple global instances
  - Open-sourced on GitHub for community contribution

• **Development Tools and AI Usage:**
  - Extensive use of local AI models (Qwen 2.5 Coder, DeepSeek) via Ollama
  - VS Code with Continue extension for AI-assisted development
  - Self-hosted AI models running on gaming PC with 7900 XTX GPU
  - Minimal use of Claude AI's free tier

• **Community Resources Utilized:**
  - Ergo dApp connector documentation
  - Fleet SDK components
  - Community member's transaction building guide
  - Sigma Spaces integration for transaction details

## Decisions Made

• The application will remain open-source on GitHub for community contributions and improvements
• Future enhancements may include better visual animations (Tetris-style blocks), percentage indicators for block fullness, and migration away from Flask/Python to more modern web frameworks
• Links currently point to Sigma Spaces for detailed transaction views until custom views are developed

## Notable Quotes

> "I'm not really a developer. The real developers probably looking at this thing and saying, oh, this is the worst thing ever, but I'm super proud of it, created it. But again, it's not the end, it's really the start." - **2ndTL Mining**

> "It's pretty cool. At least I am super excited, I know, for real developers. And I'm not a real developer. By nature, I don't develop in my day job." - **2ndTL Mining**

> "It was super fun for the last couple of days to work with some of the Ergo tooling and create something that, at least for me, I think is super cool. It visualizes the Ergo mempool and I can also send an interact and send transactions on the Ergo blockchain." - **2ndTL Mining**

## Participants

• **2ndTL Mining** - Presenter, Developer/Creator of Ergo Mempool Visualizer, ErgoHack 10 participant, Sigmanauts mining pool member