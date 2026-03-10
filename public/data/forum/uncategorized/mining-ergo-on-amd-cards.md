---
title: Mining Ergo on AMD Cards
description: 'ErgoForum discussion: Mining Ergo on AMD Cards'
tags:
- addresses
- autolykos
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/mining-ergo-on-amd-cards/61
created: '2019-08-08'
last_activity: '2019-11-07'
posts_count: 2
views: 3311
likes: 2
glossary_hits:
- Addresses
- Autolykos
- ErgoScript
- Full node
---

# Mining Ergo on AMD Cards

> **Forum thread:** [https://ergoforum.org/t/mining-ergo-on-amd-cards/61](https://ergoforum.org/t/mining-ergo-on-amd-cards/61)
> **Category:** Uncategorized | **Created:** 2019-08-08 | **Posts:** 2 | **Views:** 3311

**Related concepts:** Addresses, Autolykos, ErgoScript, Full node

---

### Post #1 — @Martin-mx (2019-08-08)

Source: <https://ergoplatform.org/en/blog/2018_08_08_amd/>

This tutorial will provide you with the information needed to get your AMD cards mining ERGO on either Windows or Linux.

Developer MH Samadani published his AMD Miner just three days after the official launch and is continuously updating it since. To keep track of his updates you can join the [Ergo Mining Telegram Channel](https://t.me/ergo_mining) and search for `#amdminer` . You can download and look into the miner [here](https://github.com/mhssamadani/ergoAMDminer).

The code is based on OpenCL and completely open source. If you are using Nvidia cards, you can find the CUDA miner [here](https://github.com/ergoplatform/Autolykos-GPU-miner/tree/master/secp256k1).

Please, be aware that it is unsafe to use any closed source miners. The mining specifics of ERGO require you to disclose your secret key to the miner so make sure who to trust before exposing any vulnerable data!

These are the reported Hashrates for AMD cards:

* rx570-8g: 22-24Mh/s
* rx580-8g: 23-25Mh/s
* rx Vega56: 24-26Mh/s

Before going any further I want to give credits to MH Samadani and his head developer [Amin Moradi](https://github.com/amin63moradi) for providing the miner and the base for this tutorial.

**Now let’s get started!**

### Configuration

Copy these files into the same folder as your executable file and add your seed string and your node’s address to `config.json` . In addition to that set `keepPrehash: true` in the same file.

* Miningkernel.cl
* Prehashkernel.cl
* Ocldecs.h
* Ocldefs.h
* Libcurl.dll( in windows)
* Config.json

### Requirements for Linux

#### 1. Install the AMDGPU-PRO driver by downloading the AMDGPU-PRO package for your specific Linux distribution from [amd.com](https://amd.com/). Unpack this file and in a terminal window run:

```ergoscript
$ amdgpu-pro-install --opencl=legacy,pal --headless
```

#### 2. Install OpenCL headers

```ergoscript
$ apt install libcurl4-openssl-dev
```

#### 3. Install OpenSSL 1.02

```ergoscript
$ apt install libssl-dev
```

### Requirements for Windows

#### 1. You need at least one AMD GPU with its driver installed [amd.com](https://amd.com/)

#### 2. Download and Install AMD APK from mhssadini’s github [here](http://amd-dev.wpengine.netdna-cdn.com/app-sdk/installers/APPSDKInstaller/3.0.130.135-GA/full/AMD-APP-SDKInstaller-v3.0.130.135-GA-windows-F-x64.exe)

#### 3. If not already available, build libcurl from sources with [Visual Studio toolchain instruction](https://medium.com/@chuy.max/compile-libcurl-on-windows-with-visual-studio-2017-x64-and-ssl-winssl-cff41ac7971d)

#### 4. Download and install OpenSSL 1.0.2 [here](https://slproweb.com/download/Win64OpenSSL-1_0_2s.exe)

### Building in Linux

#### 1. Edit the `ErgoOpenCL.cpp` in the master directory and comment `#define TEST` or uncomment `define TEST` to either build the miner or tester.

#### 2. Change the directory to `ergoAMDminer/Ubuntu` and run make.

```ergoscript
./makefile
```

#### 3. If everything was done correctly, you should now find ErgoOpenCL in `ergoAMDminer/Ubuntu/` . Go ahead and run it to start mining.

```ergoscript
./ErgoOpenCL
```

### Pre-Built Version for Windows

Download the [github](https://github.com/mhssamadani/ergoAMDminer), head over to the win64 folder and execute either `ErgoOpenCL_miner.exe` or `ErgoOpenCL_tester.exe` . If everything was set up correctly (see requirements and configuration) it should start mining.

### Building in Windows

Open `ErgoOpenCL.sln` Visual Studio. Add the OpenCL, LibCurl and OpenSSL libraries.

Include directories:

And include additional directories:

Additional library directories:

Additional dependencies:

Now, in the `ErgoOpenCL.cpp` file, comment `#define TEST` to build the miner or uncomment `define TEST` to build the tester.

If you have any additional questions, suggestions, want to send flowers to `@mhs_sam` to or simply feel like joining the community, head over to our *telegram channels* - [Ergo Mining](https://t.me/ergo_mining) or [Ergo Platform](https://t.me/ergoplatform) - and say hello.

**Happy mining!**

---

### Post #2 — @Martin-mx (2019-11-07)

AMD miner bugfix:

[github.com/mhssamadani/ergoAMDminer](https://github.com/mhssamadani/ergoAMDminer/commit/609274a82f6e7862da0399f1991b51d1588c459b)

#### [Merge pull request #19 from plutomonkey/fix-solution](https://github.com/mhssamadani/ergoAMDminer/commit/609274a82f6e7862da0399f1991b51d1588c459b)

committed 05:27PM - 07 Nov 19 UTC

[![mhssamadani](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/723b0772efd475795f5bb247ca3eb85bdbac8926.jpeg)
mhssamadani](https://github.com/mhssamadani)

[+3
-2](https://github.com/mhssamadani/ergoAMDminer/commit/609274a82f6e7862da0399f1991b51d1588c459b)

```ergoscript
Properly zero indices buffer.
```

Please update your miner:

![](https://github.githubassets.com/favicon.ico)
[GitHub](https://github.com/mhssamadani/ergoAMDminer)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/723b0772efd475795f5bb247ca3eb85bdbac8926.jpeg)

### [mhssamadani/ergoAMDminer](https://github.com/mhssamadani/ergoAMDminer)

OpenCL miner for ERGO. Contribute to mhssamadani/ergoAMDminer development by creating an account on GitHub.
