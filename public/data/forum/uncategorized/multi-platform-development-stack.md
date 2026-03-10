---
title: Multi Platform Development Stack
description: 'ErgoForum discussion: Multi Platform Development Stack'
tags:
- ergo-explorer
- ergoforum
- ergohack
- ergoscript
- minotaur-wallet
- sigma-rust
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/multi-platform-development-stack/2874
created: '2021-10-28'
last_activity: '2021-10-28'
posts_count: 1
views: 1171
likes: 7
glossary_hits:
- ERGOHACK
- Ergo Explorer
- ErgoScript
- Minotaur Wallet
- sigma-rust
---

# Multi Platform Development Stack

> **Forum thread:** [https://ergoforum.org/t/multi-platform-development-stack/2874](https://ergoforum.org/t/multi-platform-development-stack/2874)
> **Category:** Uncategorized | **Created:** 2021-10-28 | **Posts:** 1 | **Views:** 1171

**Related concepts:** ERGOHACK, Ergo Explorer, ErgoScript, Minotaur Wallet, sigma-rust

---

### Post #1 — @mhs_sam (2021-10-28)

In this article, a new method is presented in order to develop tools for Ergo on both mobile devices and desktop computers. Here, ordinary requirements for tool developments are briefly discussed.

The main goal is to be able to run the same code on different platforms. The idea has been implemented in a software stack. In this stack, at the first step of code development, the *typescript* programming language and *React.ts* library are used.

The common procedure for building a React typescript project is to use the following command:

```ergoscript
create-react-app <app-name> --template typescript
```

Blockchain operations are performed using the *sigma-rust* package. The details can be observed in the following repository

```ergoscript
https://github.com/ergoplatform/sigma-rust
```

The application created using `create-react-app` command does not support *WebAssembly (Wasm)*. A basic solution is to `eject` the code and modify *webpack* configuration in order to support Wasm. However, this solution is not recommended, since the developer will have to manage the build process on his/her own. A preferred solution is to use *react-app-rewired* or *craco*.

One either has to install these libraries and apply the required settings to the project or use a template where the settings are already configured. We suggest using the following template to build the project In this stack, It is recommended to create the project using the following command:

```ergoscript
create-react-app <app-name> --template ts-rewired
```

In order to connect to the blockchain, it is recommended to use *erg-sdk-js* library, which has good interfaces for communicating with explorer and also provides access to *sigma-rust*. Using the above-mentioned stack, any app that works on the blockchain can be easily run inside the browser.

On mobile devices running Android or iOS, it is recommended to use *Capacitor* package in order to create native applications based on the React codes.

Capacitor can be set up as follows:

```ergoscript
npm i -s @capacitor/core

npx cap init
```

To add support for Android and iOS, run the following command:

```ergoscript
npm i -s @capacitor/android

npx cap add android

npm i -s @capacitor/ios

npx cap add ios
```

One of the advantages of using capacitor is its active community which provides a wide range of tools for working with hardware.

For example, *@capacitor-community/react-hooks*, provides access to hardware in the same way available in *react-hooks*. In addition, in order to simplify the development procedure and standardize the capacitor build procedure, on desktop computers, an executable application based on React codes can be created using *@capacitor-community/electron*.

In order to connect to the database, it is recommended to use *@capacitor-community/sqlite*. There is a problem in code development using *@capacitor-community/sqlite*: this library is restricted to be used in the *capacitor* platform, which needs to be built before being executed on mobile or computer.

Since running each build usually takes about one minute, test and debugging processes may take a lot of time. In order to solve this problem and accelerate the development process, the application of *sql.js* library is proposed. This library is a Sqlite emulator, which in fact creates a sqlite database in RAM and also stores it on *localStorage*. The localStorage space is limited to 5 MB. This restriction is not a concern during development.

Finally, an *object-relational mapping (ORM)* is suggested to simplify the usage of the database. For this purpose, the application of *typeorm* is recommended. This library supports both the above-mentioned databases. The developer only needs to design a proper data model that fulfills the project requirements. *Typeorm* automatically updates the database during development. Moreover, It allows creating database migrations.

As an example of using this stack, ***minotaur-wallet*** is being developed based on it (ERGO HACK II participant). The first version is going to be released in a few weeks.

*Credit for this article goes to ‘Esmail Mohammadi’ [@vorujack](/u/vorujack)*
