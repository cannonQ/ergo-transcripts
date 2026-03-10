---
title: Ergo Governance and Parameters
description: 'ErgoForum discussion: Ergo Governance and Parameters'
tags:
- box
- data-input
- eip
- emission-schedule
- ergoforum
- ergoscript-context
- native-tokens
- soft-fork
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-governance-and-parameters/4400
created: '2023-07-05'
last_activity: '2023-08-01'
posts_count: 9
views: 475
likes: 12
glossary_hits:
- Box
- Data input
- EIP
- Emission schedule
- ErgoScript context
- Native tokens
- Soft fork
- Storage rent
- Transaction
---

# Ergo Governance and Parameters

> **Forum thread:** [https://ergoforum.org/t/ergo-governance-and-parameters/4400](https://ergoforum.org/t/ergo-governance-and-parameters/4400)
> **Category:** Uncategorized | **Created:** 2023-07-05 | **Posts:** 9 | **Views:** 475

**Related concepts:** Box, Data input, EIP, Emission schedule, ErgoScript context, Native tokens, Soft fork, Storage rent, Transaction

---

### Post #1 — @RealisticClock (2023-07-05)

**Introduction**

Governance and protocol parameters on Ergo are not dictated by a central authority but rather determined by the consensus of its miners. [Ergo’s governance](https://docs.ergoplatform.com/mining/governance/) (1) model allows miners to exercise their voting power to shape and modify various parameters that define the operation of the protocol. From instruction costs to block size limits, storage fees, and even the block version, anyone has the ability have to propose a change. Miners then vote on changes that impact the network. This approach ensures that the long-term economic security and flexibility of Ergo are in the hands of those who actively participate in securing and maintaining the blockchain.

**What are the Protocol Parameters:**

1. Storage fee factor (per byte storage period)

   The storage fee factor (per byte storage period) is a parameter that determines the cost users must pay for storing data on the blockchain. It represents the rate at which fees are charged per byte of data stored over a specific period of time. The purpose of this parameter is to incentivize efficient use of storage space on the blockchain and discourage unnecessary or excessive data storage.
2. Minimum monetary value of a box

   The minimum monetary value of a box is a parameter that sets the minimum amount of money that can be stored in a box. A box in Ergo represents an output of a transaction and holds a certain amount of cryptocurrency. This parameter ensures that each box on the blockchain contains a minimum value of money, preventing the creation of boxes with negligible or insignificant amounts.
3. Maximum block size

   The maximum block size is a parameter that limits the amount of data that can be included in a single block. It prevents blocks from becoming too large, which could negatively impact network performance and scalability. By enforcing a maximum block size, this ensures that blocks remain manageable for efficient validation and propagation across the network
4. Maximum cumulative computational cost of a block

   The maximum cumulative computational cost of a block is a parameter that limits the total amount of computational work that can be performed within a single block. This parameter ensures that the computational workload within a block remains reasonable and prevents excessive resource usage that could lead to network congestion or delays.
5. Token access cost

   Token access cost is a parameter that determines the cost associated with accessing or using tokens within the network. It incentivizes efficient token usage and discourages unnecessary or spammy token operations. By setting a token access cost, it ensures that token-related operations are performed in a responsible and cost-effective manner, promoting the efficient functioning of the network.
6. Cost per one transaction input

   The Cost per one transaction input is a parameter that determines the computational cost associated with each input used in a transaction. It incentivizes users to consolidate their inputs and create more efficient transactions, reducing network congestion and improving overall performance. This parameter plays a crucial role in Ergo’s economic model, promoting transaction efficiency and contributing to the network’s security and scalability.
7. Cost per one data input

   The Cost per one data input is a parameter that determines the computational cost associated with each data input in a transaction. It encourages users to be mindful of the data they include and discourages excessive storage or spam. This promotes efficient resource usage and helps maintain the network’s storage capacity and security.
8. Cost per one transaction output

   The Cost per one transaction output is a parameter that determines the computational cost associated with each output created in a transaction. It incentivizes users to create transactions with a reasonable number of outputs and discourages excessive output creation. This parameter plays a role in optimizing transaction throughput, reducing network congestion, and contributing to the overall performance and security of the blockchain.
9. Soft-fork (increasing version of a block)

   A soft fork is a type of upgrade in a blockchain protocol that introduces new rules or restrictions while remaining compatible with older versions. It involves making the rules more stringent, but still within the limits of the previous protocol. Nodes running older software can continue to validate transactions using the new rules, but nodes running the updated software enforce the changes. Soft forks are aimed at improving the blockchain’s functionality, security, or addressing specific issues. They maintain network consensus as long as a majority of nodes adopt the new rules. Soft forks are less disruptive than hard forks and allow for a smoother transition.
10. Hardfork

    A hard fork happens when a blockchain network undergoes a major and permanent change that splits it into two separate chains. This happens because new rules introduced in the update are not compatible with the old ones. This often involves making fundamental changes to the consensus mechanism, data structures, or other core aspects of the blockchain. As a result, people who use the old version of the blockchain software cannot interact with the new chain, and vice versa. A hard fork occurs when there are important changes to how the blockchain works, like adding new features, fixing problems, or resolving disagreements among users.

**Process**

Many parameters in Ergo can be changed on-the-fly via miners voting. In addition to the protocol parameters, most things on Ergo can be changed through a soft-forking protocol, which requires 90% miner support. However, critical changes like altering the maximum supply are excluded from this process.

Fundamental changes require voting for a block version that lasts for 32 epochs and requires more than 90% of miners to support the change. A simple majority would be enough for Everyday changes, which are less critical changes. Miners can vote for two everyday changes and one foundational change per block by including vote identifiers in the block header.

To better understand the process, [Paizo](https://deadit.github.io/paizo/) (2) was a tool that was created to help test how governance on Ergo blockchain works.

**Exploring the Implications of Parameter Changes**

1. Storage fee factor (per byte storage period)

   For the Storage fee factor (per byte storage period) parameter in Ergo, the default value is 1,250,000 bytes. The step value, which determines the increment or decrement when changing the parameter, is 25,000 bytes. The minimum value for this parameter is 0 bytes, and the maximum value is 2,500,000 bytes.

   * Increase in Storage Fee Factor: If the Storage Fee Factor is increased, it means that the cost of storing data on the blockchain would go up. This can impact smart contracts that rely on persistent data storage, as higher costs may affect their execution and interaction. Miners would receive higher fees for including transactions or smart contracts that require more storage space. This increase in cost may incentivize users to be more mindful of the data they store on the blockchain, as it becomes more expensive to do so.
   * Decrease in Storage Fee Factor: If the Storage Fee Factor is decreased, it means that the cost of storing data on the blockchain would be reduced. Miners would receive lower fees for including transactions or smart contracts that require storage space. This decrease in cost may encourage users to store more data on the blockchain, as it becomes more affordable to do so.

   Changing the Storage fee factor in Ergo, which determines the cost per byte of storage over a specific period, can have several outcomes. The specific implications would depend on the magnitude of the change and the behaviour of users and miners in response to the new cost dynamics. That’s why finding the right balance in adjusting the Storage fee factor is crucial to ensure efficient resource utilization and a sustainable network.
2. Minimum monetary value of a box

   The default value for the Minimum monetary value of a box parameter in Ergo is 360 bytes. The steps, or increment size, for this parameter is 10 bytes. The minimum value is 0 bytes, and the maximum value is 10,000 bytes.

   * Increase in Minimum Monetary Value: If the Minimum Monetary Value is increased, it means that any box on the blockchain must contain at least the specified minimum value. This increase would impose a higher threshold for the amount of value that can be stored in a box. As a result, transactions or smart contracts that attempt to create boxes with a lower value than the new minimum would be considered invalid by the protocol. This change could have implications for the granularity of transactions and the minimum transaction amounts that can be processed on the network.
   * Decrease in Minimum Monetary Value: If the Minimum Monetary Value is decreased, it means that the minimum amount of value required in a box would be reduced. This change would lower the threshold for the minimum value of boxes on the blockchain. Transactions or smart contracts that create boxes with values below the new minimum would still be valid. This adjustment may provide more flexibility in handling smaller value transactions on the network.

   Minimum monetary value of a box: This parameter sets a minimum threshold for the value of a transaction box which can impact the economic dynamics of the blockchain. It can influence the cost of transactions, the divisibility of assets, and the minimum threshold for participation in certain activities. The specific implications would depend on the magnitude of the change and its effects on the network’s overall functionality and economic behaviour.
3. Maximum block size

   The default value for the Maximum block size parameter in Ergo is 524,288 bytes. There is no defined step value thus resulting in the step value being: max[(current value/100],1) bytes. The minimum is 16384 bytes and the maximum value is 1,073,741,823 bytes.

   * Increase in Maximum Block Size: If the Maximum Block Size is increased, it means that blocks can contain a larger amount of data and transactions. This change would allow for more transactions to be included in a single block, potentially increasing the transaction throughput and capacity of the Ergo network. It can also accommodate larger transactions or more complex smart contracts that require more space. However, larger block sizes can have implications for network scalability, as larger blocks may take longer to propagate through the network and increase storage and bandwidth requirements for participating nodes.
   * Decrease in Maximum Block Size: If the Maximum Block Size is decreased, it means that blocks would have a smaller limit on the amount of data they can contain. This change would restrict the number of transactions that can be included in a block and potentially reduce the transaction throughput and capacity of the Ergo network. It could also limit the size of smart contracts or data that can be stored on the blockchain. However, smaller block sizes can have benefits in terms of network efficiency, as smaller blocks are quicker to propagate through the network and require fewer resources for storage and bandwidth.

   Maximum block size: This parameter determines the maximum size of a block on the Ergo blockchain. The adjustment is a trade-off between transaction capacity, network scalability, and resource requirements. It aims to balance the need for processing a higher number of transactions while considering the limitations of network infrastructure. The specific implications would depend on the magnitude of the change, the transaction volume on the network, and the capacity of the participating nodes to handle the increased or decreased block sizes.
4. Maximum cumulative computational cost of a block

   The default value for the Maximum cumulative computational cost of a block is 1,000,000 bytes. There is no defined step value or maximum value thus resulting in the step value being: max[(current value/100],1) bytes and the maximum value being: 1,073,741,823 bytes. The minimum value is 16384 bytes.

   * Increase in Maximum Cumulative Computational Cost: If the Maximum Cumulative Computational Cost is increased, it means that blocks can accommodate more computationally intensive transactions. This change would allow for more complex smart contracts or transactions that require a higher amount of computational resources to be included in a block. It can enable the execution of more sophisticated operations and computations on the Ergo network. However, increasing the maximum computational cost can also have implications for network performance and scalability, as it may require more processing power from participating nodes to validate and execute these computationally intensive transactions.
   * Decrease in Maximum Cumulative Computational Cost: If the Maximum Cumulative Computational Cost is decreased, it means that blocks would have a lower limit on the amount of computational resources they can consume. This change would impose restrictions on the complexity and resource requirements of transactions included in a block. It may limit the execution of computationally intensive operations or smart contracts that exceed the new reduced limit. However, decreasing the maximum computational cost can also enhance network stability and prevent potential abuse or denial-of-service attacks that could overload the network with excessively resource-intensive transactions.

   Maximum cumulative computational cost of a block: This parameter limits the computational resources that can be used by transactions within a block. The adjustment is a trade-off between allowing more complex transactions and ensuring the efficiency and security of the Ergo network. It aims to strike a balance between computational capabilities, network performance, and the ability of participating nodes to process transactions. The specific implications would depend on the magnitude of the change, the complexity of transactions on the network, and the computational capacity of the nodes in the network.
5. Token access cost

   The default value for the token access cost is 100 bytes. There is no defined step value, minimum value or maximum value thus resulting in the step value being: max[(current value/100],1) bytes, the minimum value being 0 bytes the maximum value being: 1,073,741,823 bytes.

   * Increase in Token Access Cost: If the Token Access Cost is increased, it means that the cost of accessing and interacting with tokens on the Ergo blockchain would be higher. This change would make it more expensive to perform operations such as transferring tokens, creating new tokens, or executing smart contracts that involve tokens. Increasing the cost may be implemented to discourage excessive token operations, prevent spam or frivolous token transfers, or promote more efficient use of token functionality.
   * Decrease in Token Access Cost: If the Token Access Cost is decreased, it means that the cost of accessing and interacting with tokens on the Ergo blockchain would be lower. This change would reduce the fees associated with token-related operations, making it more affordable and accessible to perform token transfers, create new tokens, or execute token-related smart contracts. Decreasing the cost may encourage broader token usage, facilitate token-based applications, and promote token-based economic activities on the Ergo network.

   Token access cost: This parameter affects the cost associated with interacting with tokens on the Ergo blockchain. The adjustment of the Token Access Cost parameter is aimed at finding an equilibrium between promoting token usability and preventing abuse or excessive token operations. It seeks to strike a balance between incentivizing token-related activities and maintaining a sustainable and efficient blockchain network. The specific implications would depend on the magnitude of the change, the token usage patterns, and the economic dynamics of the Ergo ecosystem.
6. Cost per one transaction input

   The default value for the Cost per one transaction input cost is 2000 bytes. There is no defined step value, minimum value or maximum value thus resulting in the step value being: max[(current value/100],1) bytes, the minimum value being 0 bytes the maximum value being: 1,073,741,823 bytes.

   * Increase in Cost per one transaction input: If the Cost per one transaction input is increased, it means that the cost of including transaction inputs in a transaction would be higher. This change would make it more expensive to spend UTXOs (unspent transaction outputs) as inputs in a transaction. Increasing the cost may be implemented to discourage large or complex transactions that involve a high number of inputs, as they require more computational resources and storage space to process.
   * Decrease in Cost per one transaction input: If the Cost per one transaction input is decreased, it means that the cost of including transaction inputs in a transaction would be lower. This change would reduce the fees associated with spending UTXOs as inputs, making it more affordable to include multiple inputs in a transaction. Decreasing the cost may encourage consolidation of UTXOs and enable more efficient spending patterns, as transactions with multiple inputs can be more compact and streamlined.

   Cost per one transaction input: This parameter determines the cost associated with using transaction inputs in a transaction. The adjustment is a trade-off between incentivizing efficient transaction structuring and preventing potential abuse or spam attacks that could flood the network with transactions containing numerous inputs. It aims to strike a balance between transaction complexity, network scalability, and the economic cost of transaction inputs. The specific implications would depend on the magnitude of the change, the transaction patterns on the Ergo network, and the overall transaction volume and capacity of the network.
7. Cost per one data input

   The default value for the Cost per one data input cost is 100 bytes. There is no defined step value, minimum value or maximum value thus resulting in the step value being: max[(current value/100],1) bytes, the minimum value being 0 bytes the maximum value being: 1,073,741,823 bytes.

   * Increase in Cost per one data input: If there is an increase in the Cost per one data input, it means the price for including extra data in a transaction becomes more expensive. This increase can make people think twice before adding unnecessary or excessive information because they would have to pay more for it. It encourages users to be mindful of the data they include, promoting more efficient and streamlined use of resources.
   * Decrease in Cost per one data input: if the Cost per one data input decreases, it means the price for including extra data becomes cheaper. This decrease may incentivize users to include more information or metadata in their transactions because it is now more affordable.

   Cost per one data input: This parameter sets the cost that users must pay for each additional data input included in their transaction. It helps regulate the amount of data that can be included in a transaction and ensures that the blockchain resources are used efficiently. It can facilitate the inclusion of additional details or expand the possibilities for more extensive data utilization on the Ergo blockchain. The specific effects would depend on the extent of the change and how users and miners adapt their behaviour to the new cost dynamics.
8. Cost per one transaction output

   The default value for the Cost per one transaction output cost is 100 bytes. There is no defined step value, minimum value or maximum value thus resulting in the step value being: max[(current value/100],1) bytes, the minimum value being 0 bytes the maximum value being: 1,073,741,823 bytes.

   * Increase in Cost per one transaction output: If the Cost per one transaction output is increased, it means that the cost of creating new transaction outputs would be higher. This change would make it more expensive to include multiple output boxes in a transaction. Increasing the cost may be implemented to discourage the creation of large or complex transactions with numerous outputs, as they require more computational resources and storage space to process.
   * Decrease in Cost per one transaction output: If the Cost per one transaction output is decreased, it means that the cost of creating new transaction outputs would be lower. This change would reduce the fees associated with including multiple output boxes in a transaction, making it more affordable to create transactions with multiple outputs. Decreasing the cost may encourage more diverse and granular transaction outputs, enabling more fine-grained asset transfers and complex transaction structures.

   Cost per one transaction output: This parameter determines the cost associated with creating new transaction outputs. The adjustment is a trade-off between incentivizing efficient transaction structuring and preventing potential abuse or spam attacks that could flood the network with transactions containing numerous outputs. It aims to strike a balance between transaction complexity, network scalability, and the economic cost of transaction outputs. The specific implications would depend on the magnitude of the change, the transaction patterns on the Ergo network, and the overall transaction volume and capacity of the network.
9. Soft-Fork

   Ergo’s governance model empowers miners to actively participate in shaping the protocol through on-chain voting. This system allows for the dynamic adjustment of various parameters. The ability to propose and vote for both foundational and everyday changes grants miners significant influence over the long-term economic security and operational aspects of the Ergo network.
10. Hardfork

    Hard forks can be initiated for various reasons, such as introducing new features, improving security, addressing scalability issues, or resolving disagreements within the community. Unlike a soft fork, which maintains backward compatibility, a hard fork typically requires all participants to upgrade their software to the new version in order to continue participating in the network. It’s important to note that during a hard fork, there may be temporary network disruptions and the need for consensus among the participants to adopt the new rules. Additionally, users should exercise caution to ensure they are following the correct chain and using compatible software to interact with the upgraded network.

**Conclusion:**

Ergo’s governance model empowers miners to actively participate in shaping the protocol through on-chain voting. This system also allows for the dynamic adjustment of various parameters. The ability to propose and vote for both foundational and everyday changes grants miners significant influence over the long-term economic security and operational aspects of the Ergo network.

References:

1. [Governance - ErgoDocs](https://docs.ergoplatform.com/mining/governance/) (1)
2. [React App](https://deadit.github.io/paizo/) (2)

---

### Post #2 — @RealisticClock (2023-07-05)

Would love to hear some feedback, corrections, etc.

---

### Post #3 — @Grayman (2023-07-06)

I will work through this later and provide better feedback.  
I just read it quickly and I can say that it is well written, organized, and thorough.

It also made me want to return to this later and think more carefully. So, well done on that score.

---

### Post #4 — @RealisticClock (2023-07-07)

thank you! Wanted to create a something for the layman/miners to help better understand governance and the parameter they have control over. So open to any suggestions on making this better/simpler and easy to understand.

* add hardfork, and the steps/min & max to the what are the parameters sections.
* work on cost per one data input

---

### Post #5 — @glasgowm (2023-07-07)

Looks pretty good! Bit hard to read but might just be this platform. Could probably be a section on the docs ![:wink:](https://emoji.discourse-cdn.com/twitter/wink.png?v=12 ":wink:")

---

### Post #6 — @RealisticClock (2023-07-15)

Finished up on the missing information. The units for each parameter possibly all bytes, but could be wrong. Anything else, anyone thinks should be added, let me know!

---

### Post #7 — @Ccgarant (2023-08-01)

Nice write up. I thought soft-forks required 51% not 90%? Also, is this miner voting based on hash rate (90% of the controlling hash rate) or by pool count? Thanks!

---

### Post #8 — @RealisticClock (2023-08-01)

Thanks! Soft forks require a supermajority (90%+). Also, miner voting based off hashrate.

Resources:

Soft Fork Supermajority: [Governance - ErgoDocs](https://docs.ergoplatform.com/mining/governance/#proposing-a-change-and-voting-for-it) (Voting for a soft fork section) or [Quick update on Ergo's EIP-27, Emission Soft Fork - YouTube](https://www.youtube.com/watch?v=3EBXpwiprEQ)

Mining Voting: [Ergo EIP-37, voting and miner governance - YouTube](https://www.youtube.com/watch?v=hQTiWT46F10)

---

### Post #9 — @Ccgarant (2023-08-01)

Thank you kindly! I will dig in. My quick read, 90% of blocks in a given X epoch(s) with header indicating Y vote.
