---
title: Issuing a new token using Kiosk
description: 'ErgoForum discussion: Issuing a new token using Kiosk'
tags:
- addresses
- appkit
- box
- context-extension
- eip
- eip-4
- ergo-explorer
- ergoforum
- ergoscript-context
- kiosk
- native-tokens
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/issuing-a-new-token-using-kiosk/234
created: '2020-06-08'
last_activity: '2020-06-08'
posts_count: 1
views: 846
likes: 1
glossary_hits:
- Addresses
- AppKit
- Box
- Context extension
- EIP
- EIP-4
- Ergo Explorer
- ErgoScript context
- Kiosk
- Native tokens
- Transaction
---

# Issuing a new token using Kiosk

> **Forum thread:** [https://ergoforum.org/t/issuing-a-new-token-using-kiosk/234](https://ergoforum.org/t/issuing-a-new-token-using-kiosk/234)
> **Category:** Uncategorized | **Created:** 2020-06-08 | **Posts:** 1 | **Views:** 846

**Related concepts:** Addresses, AppKit, Box, Context extension, EIP, EIP-4, Ergo Explorer, ErgoScript context, Kiosk, Native tokens, Transaction

---

### Post #1 — @scalahub (2020-06-08)

[Kiosk](https://github.com/scalahub/Kiosk) has been updated to use (a mod of) appkit for signing.  
This gives us the ability to do almost everything Ergo provides. The only thing missing is the ability to set context variables for inputs being spent. Hopefully this will be added in the coming weeks.

This post will demonstrate how to create a token using Kiosk. The token issuance will follow the [EIP-0004 standard](https://github.com/ergoplatform/eips/blob/master/eip-0004.md). In summary, the EIP suggests that token details be stored in R4, R5 and R6 as shown in the following figure.  

[![EIP-0004](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/fdb755c23ebfda55878a56e99baf39ca225c7e4b_2_690x127.png)

EIP-00041459×269 35.5 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/fdb755c23ebfda55878a56e99baf39ca225c7e4b.png "EIP-0004")

Get the latest version of Kiosk from github and run it using `sbt run`. Once you have Kiosk up and running, open the URL <http://localhost:8080> in your browser and follow the steps given below.

**Step 1.** Clear the existing environment variables  

[![delete_all_env_variables](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/b5a5b15097066ea1fb8863e0a2321603ac6c27ba_2_345x101.png)

delete\_all\_env\_variables718×211 15.8 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/b5a5b15097066ea1fb8863e0a2321603ac6c27ba.png "delete_all_env_variables")

**Step 2.** Set the environment variables `name`, `description` and `decimals` as per the EIP. We will create a new token called EUR.  

[![create_name](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/e0faaef80f15aaf28ca3001522df576df385e6cc_2_345x181.png)

create\_name744×391 21.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e0faaef80f15aaf28ca3001522df576df385e6cc.png "create_name")

  

[![create_description](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/93ec3aa5547930708d499c7b3d9adf4d69c6deff_2_345x171.png)

create\_description738×366 23.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/93ec3aa5547930708d499c7b3d9adf4d69c6deff.png "create_description")

  

[![create_decimals](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/e26caeeb6745bc496e8e48af9f5e899c173ecf1b_2_345x176.png)

create\_decimals724×371 21.6 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e26caeeb6745bc496e8e48af9f5e899c173ecf1b.png "create_decimals")

**Step 3:** Verify that the variables are correctly created  

[![check_env_variables](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/5378ccb84c21f9d23551f1e6fee3b8fc27928d26_2_517x157.png)

check\_env\_variables1210×370 40.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/5378ccb84c21f9d23551f1e6fee3b8fc27928d26.png "check_env_variables")

**Step 4:** Using block explorer find the `boxId` of the box you will spend to create this token. In our example this was `cfd0ee0bc5390ec12e0827d9d0c4d4a95ff3f3c484c7cf3845126daf18d32d6b`.  
The id of the token to be issued is the same as this `boxId`.  
*Important:* You must know the secret key of the address corresponding to this box. Please reply below if you need help in creating such an address.

**Step 5:** Create a new box with the new tokens using the variables `name`, `description` and `decimals` created earlier, and using any address where you want to send the tokens to  

[![create_output_box](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/0bd6f612558be73f256ff1c38263aab33c26ab2d_2_379x500.png)

create\_output\_box902×1188 102 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/0bd6f612558be73f256ff1c38263aab33c26ab2d.png "create_output_box")

  
In our example, we are using the address of the box being spent.

**Step 6:** Send a transaction with the above created box as the output and the above `boxId` representing the input  

[![send_tx](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/b17e6dc580345dd0dd69e19e60d78e857b449051_2_369x500.png)

send\_tx1309×1771 285 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/b17e6dc580345dd0dd69e19e60d78e857b449051.png "send_tx")

  
You can use any address as the change address. In our example this is the address corresponding to the above `boxId`, which turns out tp be `9hTh4u6CDXktMQb9BoRo5nTPnmFN8G5u4PUCURvoUCXmtaaDYdw`.

The sent transaction can be viewed on the block explorer [here](https://explorer.ergoplatform.com/en/transactions/a356bb0d9b6d70c8af99fff8e16c2ccfff0988f1c884ec0143071285e5322cfe).  
The above address may still have some fractional Ergs, which are free for anyone to claim using the private key from the screenshot.

The issued token can be viewed [here](https://explorer.ergoplatform.com/en/issued-tokens?limit=120&offset=120), as shown in the following screenshot.  

[![explorer_token](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/ed2ce46b24a3e64af0650eccca5da14037eff3c0_2_690x264.png)

explorer\_token3443×1321 214 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/ed2ce46b24a3e64af0650eccca5da14037eff3c0.png "explorer_token")
