---
title: 'Exploring a Normie.tech x Ergo Integration: Fiat On-Ramps, SigUSD, and the
  Path to the Stablecoin Multiverse'
description: 'ErgoForum discussion: Exploring a Normie.tech x Ergo Integration: Fiat
  On-Ramps, SigUSD, and the Path to the Stablecoin Multiverse'
tags:
- collateral
- duckpools
- ergo-foundation
- ergoforum
- ergohack
- eutxo
- gluon
- mew-finance
- native-tokens
- rosen-bridge
- sigmausd
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/exploring-a-normie-tech-x-ergo-integration-fiat-on-ramps-sigusd-and-the-path-to-the-stablecoin-multiverse/5120
created: '2025-03-29'
last_activity: '2025-05-25'
posts_count: 13
views: 216
likes: 30
glossary_hits:
- Collateral
- Duckpools
- ERGOHACK
- Ergo Foundation
- Gluon
- Mew Finance
- Native tokens
- Rosen Bridge
- SigmaUSD
- Transaction
- eUTXO
---

# Exploring a Normie.tech x Ergo Integration: Fiat On-Ramps, SigUSD, and the Path to the Stablecoin Multiverse

> **Forum thread:** [https://ergoforum.org/t/exploring-a-normie-tech-x-ergo-integration-fiat-on-ramps-sigusd-and-the-path-to-the-stablecoin-multiverse/5120](https://ergoforum.org/t/exploring-a-normie-tech-x-ergo-integration-fiat-on-ramps-sigusd-and-the-path-to-the-stablecoin-multiverse/5120)
> **Category:** Uncategorized | **Created:** 2025-03-29 | **Posts:** 13 | **Views:** 216

**Related concepts:** Collateral, Duckpools, ERGOHACK, Ergo Foundation, Gluon, Mew Finance, Native tokens, Rosen Bridge, SigmaUSD, Transaction, eUTXO

---

### Post #1 — @fitz (2025-03-29)

Hello Ergo Community,

I’m excited to discuss potential integrations between Normie.tech and the Ergo ecosystem, specifically aimed at enhancing usability, accelerating adoption, and expanding utility for Ergo-based projects.

![](//cdck-file-uploads-canada1.s3.dualstack.ca-central-1.amazonaws.com/flex030/uploads/ergoforum/optimized/2X/4/46297d1d9e2dadac9c145e004d9c4977d89c91f2_2_690x388.png)
[normie.tech](https://normie.tech)

### [Normie](https://normie.tech)

Send fiat directly into your smart contracts.

### Brief Overview of Normie.tech:

Normie.tech provides a seamless fiat-to-stablecoin gateway, allowing users unfamiliar with crypto to easily make payments via credit or debit cards, with recipients instantly receiving stablecoins.

### Proposed Integration Opportunities:

**1. Fiat-to-Crypto for dApps:**

Enable users to directly purchase tokenized assets using fiat currency, while seamlessly settling payments to producers and asset owners in stablecoins. Normie.tech instantly converts fiat into crypto, creating a frictionless onboarding experience for users and immediate stablecoin settlements for dApp creators and service providers — especially for use cases like Real-World Assets (RWAs) and decentralized physical infrastructure (DePIN).

**2. SigUSD Stablecoin Integration:**

Integrate Normie.tech with Ergo’s decentralized stablecoin, SigUSD. Users could easily acquire SigUSD directly from fiat, significantly reducing onboarding friction and accelerating adoption within the Ergo and potentially Cardano communities.

**3. Decentralized Liquidity via Duckpools:**

Rather than Normie.tech directly holding large reserves of SigUSD, it could tap into decentralized liquidity pools such as Duckpools. In this scenario, Normie.tech functions as a payment router, instantly sourcing stablecoin liquidity from decentralized pools upon processing fiat payments.

### Example Transaction Flow:

* A customer uses fiat currency (via Normie.tech) to purchase an RWA offered through an Ergo-based dApp.
* Normie.tech immediately processes the payment, initially settling from its USDC reserves, and simultaneously triggers a SigUSD withdrawal from a decentralized liquidity provider like Duckpools.
* The recipient (merchant or dApp creator) instantly receives payment in SigUSD, ensuring fast, seamless crypto settlements.

### Additional Cross-Chain Integration via Rosen Bridge:

Integrating Rosen Bridge could further enhance functionality:

* Enable cross-chain stablecoin liquidity routing, allowing Normie.tech to access stablecoin pools across multiple blockchains.
* Facilitate the wrapping of popular stablecoins (e.g., USDC, DAI) from Ethereum or other chains, delivering wrapped tokens directly to Ergo.
* Expand market reach by enabling users to purchase RWAs and DePIN assets across various blockchain ecosystems seamlessly.

### Looking Ahead:

These ideas aim not only to improve user experience and unlock new use cases — but to support the broader vision of a more open, modular financial future. By enabling fiat on-ramps into decentralized stablecoins like SigUSD and embracing composability across ecosystems via Rosen Bridge, this collaboration could contribute to the reemergence of the free banking movement — and help build the foundation for a robust stablecoin multiverse.

Please let me know if you have any thoughts, or where I could be mistaken on possible integration ideas.

Thank you, Fitz  
A Normie.tech cofounder

---

### Post #2 — @fitz (2025-03-29)

### :white_check_mark: Example Flow: Normie + Rosen + Duckpools + Ergo

1. **User pays $100 via credit card through Normie.tech**

* No crypto wallet required
* Fiat is received in Normie’s bank account

2. **Normie triggers settlement in SigUSD on Ergo**

* But Normie doesn’t hold a big reserve of SigUSD

3. **Normie pulls SigUSD from Duckpools on Ergo**

* Duckpools acts as a decentralized liquidity backend
* Normie might have a smart contract agreement to repay fiat equivalents to Duckpools regularly

4. **Normie (or its settlement agent) wraps USDC → SigUSD via Rosen Bridge**

* If the fiat is first turned into USDC, Rosen can bridge that USDC to Ergo and convert to SigUSD
* Or Rosen can help the process go in reverse: User pays → USDC → Rosen → SigUSD → Duckpools/recipient

5. **Recipient (solar panel provider on Ergo) receives $100 in SigUSD**

* Instant stablecoin settlement
* User didn’t even know crypto was involved

---

### :handshake: Why This Matters

This creates a **chain-agnostic fiat settlement layer**:

* Normie coordinates fiat payments
* Duckpools provides decentralized stablecoin liquidity on Ergo
* Rosen enables cross-chain delivery of stablecoins like SigUSD or wrapped assets
* Ergo becomes a backend smart layer that powers the flow, even if the user is elsewhere

---

### Post #3 — @Grayman (2025-03-31)

I am allergic to USDC. I recently read about a sandwich attack that drained 95% of $200k+ being transferred from USDC to USDT.

EVM is a big nope for me.

Fees are difficult to understand in your scheme. Who is taking the loss here?

---

### Post #5 — @fitz (2025-04-01)

Thats a great question, and a genuine concern for our startup Normie.tech, the goal is trying to orchestrate a platform with numerous stablecoins/reserve coins, so yes using a usdc reserve is risky it seems like. So i am trying think of workarounds to this, partially the reason why I think getting the ergo ecosystem involved would be so beneficial.

---

### Post #6 — @fitz (2025-04-01)

Thank you too for that response.

---

### Post #7 — @Ody (2025-04-01)

I think using USDM (<https://moneta.global/>) as a starting point instead of USDC and a clear fee structure would be better …

---

### Post #8 — @Grayman (2025-04-01)

Ody might have your solution. USDM is a collateralized stablecoin on Cardano, which is eutxo so more predictable and not subject to hacks and games available to EVM grifters.

It does beg the question of why not do all of this on Cardano, but they don’t have gold or silver stablecoins (AFAIK), and their fee per tx is generally a lot bigger than in Ergo.

Ergo is probably ideal for the backend of what you are doing. This is the approach that Palmyra is taking for managing RWA tokenization and tracking, thanks to the affordability of NFT management on Ergo.

In any case, being transparent about fees is a must or the end user would be very suspicious. Credit card companies are a bitch to deal with, so the end user should expect to bear some cost in doing the transaction. But also, if I were to use this product, I want to know that you can actually make money as a company, otherwise my funds might get erased if you go out of business. You could publish the contracts and methods (open source) so that customers feel like they don’t depend on you for retrieval of funds… that is the approach that Mew Finance takes.

But for most normie customers, they would rather be assured of your business survival before they use your product. This is normal and reasonable. They will see you as holding their funds, even though it is the blockchain that does that work. So you need to be upfront about fees and methods.

I like the idea.

---

### Post #9 — @fitz (2025-04-03)

Thank you again for those response, I’ve also just thought of and now developing a project called **Pillur**, which offers a simple way for people to buy digital vouchers that represent a claim to stablecoin value, such as $25 in **USDM**. The key difference is that Pillur doesn’t send stablecoins directly or hold wallets. Instead, it sells a digital product — a voucher — which can be redeemed through an automated portal. The redemption process is built in from the start: once a user receives the voucher (via email or NFT), they can go to the redemption site, enter the code, connect their wallet, and receive USDM on-chain. The goal is to start with a reserve I manage and eventually open up the redemption backend to decentralized liquidity pools like Duckpools. Pillur separates the fiat purchase from crypto delivery for legal and compliance clarity — making it easier to onboard people without triggering transmission rules or custodial risks. Would it be a ridiculous idea to think that something like this might fill a real gap for people or platforms that want to gift or distribute stablecoins without requiring users to first understand wallets, swaps, or seed phrases? USDM’s transparency, Cardano-native design, and regulated structure make it a natural fit for this. Curious to hear thoughts, feedback, or where this might plug in well with existing stablecoin ecosystems on Ergo or Cardano. Thank you.

---

### Post #10 — @kushti (2025-04-22)

Would b interesting to have a voucher which could be redeemed against different reserves: SigUSD, ERG, rsBTC, GAU (Gluon Gold) etc. Such a voucher could be created and transferred offchain. If you need for help with contracts please lemme know.

---

### Post #11 — @fitz (2025-05-14)

Hey Kushti,  
Yes, if you don’t mind, i would take some help with getting ahead here.  
Thank you.

---

### Post #12 — @fitz (2025-05-23)

Hey Kushti, quick update. I submitted a project for ErgoHack called **Slipkit**, and it was inspired by our earlier discussion about off-chain transferable vouchers. It is an open-source toolkit that lets developers create, distribute, and redeem off-chain value slips backed by on-chain assets like SigUSD, ERG, rsBTC, and GAU. Each slip is a code that can be shared and later redeemed through a smart contract. The goal is to make stable value portable, programmable, and easy to use in real-world and community settings

---

### Post #13 — @kushti (2025-05-25)

I think Basis [Basis, a foundational on-chain reserve approach to support a variety of offchain protocols](https://www.ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153) modification can be used , there is no need for tracker for the p2p setting.

---

### Post #14 — @kushti (2025-05-25)

If any help is needed, please let me know!
