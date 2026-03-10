---
title: 'Ergo and The Autolykos Consensus Mechanism: Part II

  '
date: '2022-06-20'
author: Ergo Platform
tags:
- autolykos
- ergo-blog
- ergoscript-context
- explaining-ergo
category: blog
blog_tag: Explaining Ergo, Tooling, Mining
type: blog
source: ergo-blog
source_url: https://ergoplatform.org/en/blog/Ergo-and-The-Autolykos-Consensus-Mechanism-Part-II
glossary_hits:
- Autolykos
- ErgoScript context
---

# Ergo and The Autolykos Consensus Mechanism: Part II


> **Published:** 2022-06-20 | **Author:** Ergo Platform | **Tag:** Explaining Ergo, Tooling, Mining | **Type:** blog

**Related concepts:** Autolykos, ErgoScript context

---

Last week, we introduced an in-depth exploration of Ergo’s Autolykos consensus mechanism. With this article, we complete the second part of that discussion and dive into further details. Before reading this document, it is recommended that readers take a look at Part I.

As a reminder, here are the block mining and hash function pseudocodes. 

<em>Autolykos Block Mining Pseudocode</em>
![unnamed (4).png](https://storage.googleapis.com/ergo-cms-media/unnamed_4_41e109c76d/unnamed_4_41e109c76d.png)

<em>Blake2b256 Based Hash function</em>
![unnamed (5).png](https://storage.googleapis.com/ergo-cms-media/unnamed_5_a8db75a5d0/unnamed_5_a8db75a5d0.png)

_Lines 3, 4 – begin while loop and guessing_
 
After calculating _list R_, the miner creates a nonce guess and enters a loop to test if the nonce ultimately creates an output that is below the given target value.
 
_Lines 5, 6 – seed for generating indexes_
 
Line 5, _i = takeRight(8, H(m||nonce)) mod N_, produces an integer in [0,N). Algorithm 3 is utilized but with _m_ and the _nonce_ as inputs. Once the hash _H(m||nonce)_ is returned, the 8 least significant bytes are kept and then passed through _mod N_. As a side note, the highest possible integer value with 8 bytes is 2<sup>64</sup> – 1, and assuming _N = 2<sup>26</sup>_, an 8-byte hash _mod N_ will result in the first few digits being zero. The number of zeros in _i_ decreases as _N_ grows.
 
Line 6 produces _e_, a seed for index generating. Algorithm 3 is called with inputs _i_ (generated in line 5), _h_, and _M_. Then, the most significant byte of the numeric hash is dropped, and the remaining 31 bytes are kept as value _e_. It should also be noted that value _e_ can be retrieved from _list R_ instead of being computed since _e_ is an _r_ value.
 
_Line 7 – index generator_
 
Element index _J_ is created using Algorithm 6 with inputs _e, m,_ and _nonce_. Function genIndexes is a pseudorandom one way that returns a list of _k_ (=32) numbers in [0,N).
 
<em>genIndexes function</em>
![unnamed (6).png](https://storage.googleapis.com/ergo-cms-media/unnamed_6_987fcaba80/unnamed_6_987fcaba80.png)
 
There are a couple of extra steps that are not shown in the pseudocode such as a byteswap. The creation and application of genIndexes can be explained via the following example:

GenIndexes(_e||m||nonce_)...

_hash = Blake2b256(e||m||nonce) = [0xF963BAA1C0E8BF86, 0x317C0AFBA91C1F23, 0x56EC115FD3E46D89, 0x9817644ECA58EBFB]_
 
_hash64to32 = [0xC0E8BF86, 0xF963BAA1, 0xA91C1F23, 0x317C0AFB, 0xD3E46D89 0x56EC115F, 0xCA58EBFB, 0x9817644E]_
 
_extendedhash (i.e., byteswap and concatenate 4 bytes by repeating first 4 bytes) = [0x86BFE8C0, 0xA1BA63F9, 0x231F1CA9, 0xFB0A7C31, 0x896DE4D3, 0x5F11EC56, 0xFBEB58CA, 0x4E641798, 0x86BFE8C0]_
 
The following python code shows the process of slicing the extended hash, returning k indexes. In this example we are assuming _h_ < 614,400, thus N = 2<sup>26</sup> (67,108,864).
 
<em>Slicing and mod N[1]</em>
	for i in range(8):
    	idxs[i << 2] = r[i] % np.uint32(ItemCount)
    	idxs[(i << 2) + 1] = ((r[i] << np.uint32(8)) | (r[i + 1] >> np.uint32(24))) % np.uint32(ItemCount)
    	idxs[(i << 2) + 2] = ((r[i] << np.uint32(16)) | (r[i + 1] >> np.uint32(16))) % np.uint32(ItemCount)
    	idxs[(i << 2) + 3] = ((r[i] << np.uint32(24)) | (r[i + 1] >> np.uint32(8))) % np.uint32(ItemCount)

The main takeaway is that slicing returns _k_ indexes which are pseudorandom values derived from the seed, i.e., _e, m,_ and _nonce_.
 
_return_ [0x2BFE8C0, 0x3E8C0A1, 0xC0A1BA, 0xA1BA63, 0x1BA63F9, 0x263F923, 0x3F9231F, 0x1231F1C, 0x31F1CA9, 0x31CA9FB, 0xA9FB0A, 0x1FB0A7C, 0x30A7C31, 0x27C3189, 0x31896D, 0x1896DE4, 0x16DE4D3, 0x1E4D35F, 0xD35F11, 0x35F11EC, 0x311EC56, 0x1EC56FB,  0x56FBEB, 0x2FBEB58, 0x3EB58CA, 0x358CA4E, 0xCA4E64, 0x24E6417, 0x2641798, 0x179886, 0x39886BF,  0x86BFE8]
 
This index can be translated to values in base 10 as it refers to numbers in [0, N). For instance, 0x2BFE8C0 = 46131392, 0x3E8C0A1 = 65585313, 0xC0A1BA = 12624314, and so on. The miner uses these indexes to retrieve _k r_ values.
 
The genIndexes function prevents optimizations as it is extremely difficult, basically impossible, to find a seed such that genIndexes(seed) returns desired indexes.
 
_Line 8 – sum of r elements given k_
 
Using the index generated in _line 7_, the miner retrieves the corresponding _k (=32) r_ values from _list R_ and sums these values. This might sound confusing but let’s break it down.
 
Continuing the example above, the miner stores the following indexes:
 
{0 | 46,131,392},
{1 | 65,585,313},
{2 | 12,624,314},
{3 | 10,599,011},
…
{31 | 8,830,952}
 
Given the indexes above, the miner retrieves the following r values from _list R_ stored in memory.
 
{0 | 46,131,392} → _dropMsb(H(46,131,392||h||M))_
{1 | 65,585,313} → _dropMsb(H(65,585,313||h||M))_
{2 | 12,624,314} → _dropMsb(H(12,624,314||h||M))_
{3 | 10,599,011} → _dropMsb(H(10,599,011||h||M))_
…
{31 | 8,830,952} → _dropMsb(H(8,830,952||h||M))_
 
Note that _Takeright(31)_ operated on a 32-byte hash can also be written as _dropMsb_ – drop most significant byte.
 
Since the miner already stores _list R_ in RAM, the miner does not need to compute _k (= 32)_ Blake2b256 functions and instead looks up the values. This is a key feature of ASIC resistance. An ASIC with limited memory needs to compute 32 Blake2b256 iterations to get the values that could have been looked up in memory, and fetching from memory takes much less time. Not to mention, an ASIC with limited memory would require 32 Blake2b256 instances physically on die to achieve one hash per cycle, which would require more area and higher costs. It's simple to prove that storing _list R_ in memory is well worth the trade off. Assume the following, a GPU has a hash rate of _G_ = 100MH/s, _N = 2<sup>26</sup>, _k_ = 32, block interval _t_ = 120 seconds, and elements are looked up every 4 hashes. I like to assume that elements are looked up every 4 hashes because, for each nonce guess, multiple elements such as _i, J,_ and _H(f)_ require Algorithm 3, i.e. blake2b hash, instances. We can estimate that each r value will be used, on average, _(G * k * t)/(N*4)_ = 1430.51 times.
 
Once the 32 _r_ values are looked up, they are summed.
 
_Line 9, 10, 11, 12 – check if hash of sum is below target_
 
The sum of the 32 _r_ values is hashed using Algorithm 3, and if the output is below target _b_, the PoW is successful, _m_ and _nonce_ are returned to network nodes, and the miner is rewarded in ERG. If the sum hash is above the target, _Lines 4 – 11_ are repeated with a new nonce.
 
If you have made it this far, congratulations! After reading all of this information, you should have a good understanding of Autolykos v2! If you would like to see a visual demonstration of Autolykos, please see the graphic at the end of this document. If you would like a video explanation, you can find it [here](https://youtu.be/pPYcfLQGIHg). 

### ASIC Resistance
 
We know from Ethereum that ‘memory hard’ algorithms can be conquered by integrating memory on ASICs. Ergo is different but let’s first revise why an ASIC with limited memory is uncompetitive and why a miner needs to store _list R_. Line 8 of Autolykos block mining deters machines with limited memory. If an ASIC miner does not store _list R_, they require a lot of cores to generate the 31-byte numeric hashes on the fly. 32 _r_ values cannot be efficiently calculated using a single core loop because an output would only be generated every 32nd hash cycle. Given _J,_ to compute one nonce _per hash cycle,_ at least 32 Blake2b256 instances running _dropMsb(H(j||h||M))_ are needed. As we mentioned above, this increases die size and cost significantly. It’s clear that storing _list R_ is worthwhile because having 32, or even 16, cores is very expensive. More to the point, reading memory is faster than computing Blake instances every time a nonce is tested.
 
Let’s see if an ASIC with sufficient memory is competitive because that is more relevant to the discussion. Comparing Ethash and Autolykos, the difference is that Ethash involves N elements when hashing the nonce and header mixes 64 times, whereas Autolykos involves N elements when fetching 32 _r_ values based on indexes generated. For every tested nonce, Autolykos runs about 4 Blake2b256 instances and 32 memory fetches while Ethash runs about 65 SHA-3 like instances and 64 memory fetches. Not to mention, _k_ is currently set at 32 but this value can be increased to retrieve more _r_ values if needed. ASICs that run Ethash have a lot of room to increase SHA3 hashing speed since 65 hashes are completed per tested nonce compared to about 4 on Autolykos. The ratio of memory fetches to hash instances is much greater on Autolykos. For this reason, Autolykos is more memory hard than Ethash since memory bandwidth plays a much larger role compared to hashing speed.
 
An area where Autolykos optimization could take place is the filling of _list R_. The filling of _list R_ requires _N_ instances of a Blake2b256 function. _N_ is large and only getting larger, so that’s a lot of hashing. An ASIC could optimize the speed of Blake2b256, yielding more time for block mining since _list R_ is filled sooner. Although this can be done, filling _list R_ requires cycling through [0, N) and a GPU with 32-wide multiprocessors can already fill _list R_ very fast (in seconds). One would need an ASIC with many Blake cores to be significantly faster – again, very expensive, and probably not worthwhile since the bottleneck could become memory _write_ bandwidth (i.e., writing _list R_ to RAM rather than hashing speed).
 
The last area that can be optimized for Autolykos is memory read/write speed. Ethash ASIC miners have a slightly faster read speed compared to GPUs as the memory is clocked higher without the effect of GPU throttling. However, this difference is pretty insignificant and is expected to become more insignificant as GPUs advance. This is because the memory hardware itself is the same: DRAM. One may question if a faster memory hardware could be utilized whereby memory read and write speed is far quicker… SRAM, for instance, could be an imaginable next step in breaking memory hard algorithms, however, SRAM is not a feasible solution simply because it is less dense.
 
<em>SRAM on FPGA[2]</em>
 
![unnamed (7).png](https://storage.googleapis.com/ergo-cms-media/unnamed_7_87793f77f4/unnamed_7_87793f77f4.png)
 
The above photo is an FPGA with 8 memory chips on the front, and there are another 8 on the back. The total SRAM memory is only 576MB. Fitting sufficient SRAM on a die won’t work because the SRAM will need to be placed further from the core as it is note dense enough to fit in one layer around the core. This can result in read/write delays because electricity needs to travel longer distances even though the hardware itself is faster. Additionally, to mine Ergo, the memory requirement increases as N increases so fitting sufficient SRAM is not feasible overtime. Thus, SRAM ASICs are not worthwhile exploring even if one had enough cash to spend on SRAM itself.
 
### Blake2b256
 
One major difference between an algorithm like Autolykos and others is the use of Blake2b256. This is no coincidence. Blake relies heavily on addition operations for hash mixing instead of XOR operations. An operation like XOR can be done bit by bit whereas addition requires carry bits. Thus, Blake requires more power and core area compared to SHA algorithms, but it is still as secure and in fact, faster. As mentioned on the Blake2 website, “BLAKE2 is fast in software because it exploits features of modern CPUs, namely instruction-level parallelism, SIMD instruction set extensions, and multiple cores.”[3] Thus, while an ASIC can output Blake instances faster, the innate nature of the function limits optimizations by requiring addition and involving features found in CPUs as well as GPUs.
 
<em>Blake2b speed relative to other hash functions</em>
 
![unnamed (8).png](https://storage.googleapis.com/ergo-cms-media/unnamed_8_e6913d1172/unnamed_8_e6913d1172.png)

### Conclusion

Autolykos is a great innovation that is a necessary response to combat the rise of PoW-optimized ASIC machines. We hope this 2-part series has helped you to understand Autolykos at a more technical level and why it is more memory hard than Ethash. As Ethereum transitions to a PoS network, there will be a large community of miners looking for a place to direct their hashrate power, and Ergo should be a significant player in attracting those miners. 

If you enjoyed this article, the author invites you to check out more content via their Twitter account, **@TheMiningApple**.

![unnamed (9).png](https://storage.googleapis.com/ergo-cms-media/unnamed_9_1a59f3c52c/unnamed_9_1a59f3c52c.png)

[1] Credit to Wolf9466#9466 on Discord
[2] http://www.ldatech.com/_images/imageGallery/SBM09P-3_front.jpg
[3] https://www.blake2.net/#:~:text=A%3A%20BLAKE2%20is%20fast%20in,of%20the%20designers%20of%20BLAKE2).
