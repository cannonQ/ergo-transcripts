---
title: SigmaUSD Protocol State of Affairs
description: 'ErgoForum discussion: SigmaUSD Protocol State of Affairs'
tags:
- addresses
- box
- collateral
- dort
- duckpools
- ergoforum
- native-tokens
- oracle-pools
- rosen-bridge
- sigmafi
- sigmausd
- spectrum
- storage-rent
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/sigmausd-protocol-state-of-affairs/5028
created: '2024-12-23'
last_activity: '2024-12-23'
posts_count: 1
views: 76
likes: 3
glossary_hits:
- Addresses
- Box
- Collateral
- DORT
- Duckpools
- Native tokens
- Oracle pools
- Rosen Bridge
- SigmaFi
- SigmaUSD
- Spectrum
- Storage rent
---

# SigmaUSD Protocol State of Affairs

> **Forum thread:** [https://ergoforum.org/t/sigmausd-protocol-state-of-affairs/5028](https://ergoforum.org/t/sigmausd-protocol-state-of-affairs/5028)
> **Category:** Uncategorized | **Created:** 2024-12-23 | **Posts:** 1 | **Views:** 76

**Related concepts:** Addresses, Box, Collateral, DORT, Duckpools, Native tokens, Oracle pools, Rosen Bridge, SigmaFi, SigmaUSD, Spectrum, Storage rent

---

### Post #1 — @glasgowm (2024-12-23)

Quick summary of the ongoing proposed updates to SigUSD

**SigmaUSD Protocol State of Affairs**

### **Overview**

The SigmaUSD protocol is evolving to address current challenges and unlock future potential. Recent decisions by key holders, following community discussions, have introduced critical updates, including the implementation of minting limits and solutions to the storage rent issue. These updates aim to enhance the protocol’s stability, resilience, and usability. Planned improvements to the oracle infrastructure, governance mechanisms, and economic safeguards further position SigmaUSD for sustainable growth within the Ergo ecosystem.

---

### **Challenges**

#### **Oracle Infrastructure**

* **Resilience Concerns:** Operating with a minimum of four operators, often barely meeting the threshold, raises risks of downtime and manipulation.
* **Incentive Issues:** The current use of v1 oracles, which lack a built-in incentive structure, leads to operator attrition as there is no direct reward mechanism for participation.
* **Transparency Issues:** CoinGecko’s volume-weighted price feed lacks clear exchange weighting formulas, potentially introducing biases.
* **Technical Barriers:** Operators require development troubleshooting skills, and need resources comparable to running Rosen watchers.
* **Downtime Vulnerabilities:** Recent periods of oracle inactivity (7-8 hours) highlight fragility.
* **Market Manipulation Risks:** Only ~$2,000 is required to cause a 2% price slip in low-liquidity exchanges, such as [Gate.io](http://Gate.io) and KuCoin.

#### **Economic Activity Patterns**

* Large SigUSD mints during BTC downturns (e.g., the “Bearwhale” incident) demonstrate the risks of significant mints on market stability.
* Reserve ratios reaching up to 700% suggest robust collateral but highlight inefficiencies and sell-off risks by SigRSV holders.
* Documented oracle lag exploitation has impacted substantial ERG values, with large mints/redeems (20-50k) potentially affecting 100k-250k ERG in value.

#### **Storage Rent Issue**

* Insufficient ERG allocation to the update script box could lead to storage rent collection, potentially disabling future updates by April 25, 2025.

#### **Liquidity and Integration Challenges**

* Active secondary markets on platforms like Spectrum Finance, SigmaFi lending, and DuckPools are providing liquidity opportunities but require broader analysis for stability and accessibility.
* Integration with Rosen Bridge for Cardano is underutilized due to small liquidity pools, limiting cross-chain adoption.

---

### **Proposed Updates**

#### **Protocol Update**

* **Minting Limits:** Key holders [voted](https://www.ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874) to implement a 0.5% per epoch cap to mitigate reserve-draining risks and improve protocol stability.
* **Implementation Plan:**
  1. Deploy the updated contract on the **testnet** for validation.
  2. Roll out on the **mainnet** after successful testing.
* **Key Holders:** Luivatra, anon-real, anon2020s, mgpai, and kushti.

#### **Storage Rent Issue**

* **Resolution:** Key holders also voted to allocate additional ERG to the update script box to avoid storage rent collection and ensure its longevity for decades.
* **Optional Key Burning:** Discussions included burning update keys to eliminate future modification risks, enhancing security.

#### **Oracle Improvements**

The following suggest was posted by kushti (21/12/24)

* **Transition to Oracle Pool v2:**
  + Introduce a new update NFT and revise contracts to remove token checks.
  + Align operator rewards with the new DORT token to create sustainable incentives.
  + Increase operator participation to enhance infrastructure resilience.

And the following was posted by kushti today:

> For USD pool v2, I think to do update and running an oracle only. There is need to run all the business things around USD oracles and apps (then silver I guess). Getting DORT dev rewards ? But also there could be other options.

---

For more information and discussion, visit the [Ergo Forum](https://www.ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874) , explore updates at [github.com/ergoplatform/sips](https://github.com/ergoplatform/sips) or join the discussion on Telegram/Discord
