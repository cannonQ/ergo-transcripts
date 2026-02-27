# Ergo General Chat — Week 2019-W17 Summary

## Key Topics Discussed

- **GPU vs CPU Mining Efficiency**: Discussion on mining hardware selection, with confirmation that GPU mining is significantly more efficient than CPU mining, particularly using NVIDIA cards with 8GB VRAM for Autolykos.

- **Node Setup and Configuration**: Multiple users sought guidance on setting up full nodes, configuring mining parameters, and understanding API key hashing for the testnet environment.

- **Mining on Testnet**: Users attempted to mine on testnet but encountered issues with CPU-only mining at high difficulty levels; guidance provided on remote GPU configuration for server setups.

- **CUDA Miner Compilation Issues**: Several users reported GPU detection errors and compilation failures on Ubuntu when building the Autolykos GPU miner, with driver/CUDA version compatibility identified as the root cause.

- **EFYT Token Mechanics**: Explanation that EFYT functions as futures for early investors, with 10% of first-year mining supply (projected 1,971,000 ERG) designated as swap source.

## Important Announcements

- [@Dmitry, msg#6812, 2019-04-25]: Testnet coins distributed to user address `3Wyfe1zqMYybUfwDhCc7uuPHpjnpA9iSQeXQuYcqxD2HycTBCdaw` for testing purposes.
- [@Andrey Andreev, msg#6828, 2019-04-25]: Testnet ERG distributed to address `3WxVHVfLqyvZgFMsTCnCLY8SkHA2XBBWLS8vdNsauwuWGD93xZLv`.

## Technical Q&A Worth Preserving

- **Q** (@李 思琦, msg#6723): GPU miner and CPU miner — which one is more efficient?  
  **A** (@Dmitry, msg#6724): GPU is much more efficient.

- **Q** (@李 思琦, msg#6780): Does the "2-8 GB of memory" requirement in Autolykos refer to RAM or VRAM?  
  **A** (@Dmitry, msg#6789): vRAM for sure.

- **Q** (@李 思琦, msg#6783): Connected to testnet with `mining = true` but received no coins. Configuration issue?  
  **A** (@Dmitry, msg#6790): Requires GPU configuration for actual mining. Can send test coins manually if needed. Reference: https://github.com/ergoplatform/ergo/wiki/Mining

- **Q** (@李 思琦, msg#6791-6793): No GPU available (server only). Can mining proceed?  
  **A** (@Dmitry, msg#6794-6795): CPU mining at current difficulty is not viable. Option: configure remote GPU on external hardware (e.g., laptop) connected to node.

- **Q** (@Rejinderi, msg#6761-6763): Port forwarding and static IP required to run a node?  
  **A** (@Unknown, msg#6776): Nope, neither is required.

- **Q** (@Unknown, msg#6824-6825): CUDA miner compilation errors on Ubuntu — any known issues?  
  **A** (@Andrey Andreev, msg#6830-6831): libcurl downgrade required on Ubuntu. Reference commit `7a89253b` tested successfully on GTX 1050 Ti 4GB. See: https://github.com/ergoplatform/Autolykos-GPU-miner/issues/15#issuecomment-485994809

- **Q** (@Unknown, msg#6836): GPU works elsewhere but Autolykos produces "Error checking GPU error" on Ubuntu. Driver: 396.24, CUDA 10.1.  
  **A** (@Andrey Andreev, msg#6840): Driver/CUDA version incompatibility. Refer to official compatibility matrix: https://docs.nvidia.com/deploy/cuda-compatibility/index.html#binary-compatibility__table-toolkit-driver

- **Q** (@Unknown, msg#6848): Autolykos GPU miner finds solution then idles with "Average curling time" message; GPU at 0% utilization despite blocks on testnet.  
  **A** (@Dmitry, msg#6849): Request full log for diagnosis. (User provided pastebin: https://pastebin.com/EaLzXRKD)

## Links Shared

- [https://twitter.com/chepurnoy/status/1120328276201943041]: Core development announcement (msg#6722).
- [https://ergoplatform.org/news_emission_curve.html]: Emission curve documentation (msg#6760).
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Full node setup guide (msg#6738).
- [http://127.0.0.1:9052/swagger]: Local node Swagger API for hash generation and seed utilities (msg#6740).
- [https://github.com/ergoplatform/Autolykos-GPU-miner/issues/15#issuecomment-485994809]: libcurl Ubuntu compilation workaround (msg#6831).
- [https://docs.nvidia.com/deploy/cuda-compatibility/index.html#binary-compatibility__table-toolkit-driver]: NVIDIA CUDA driver compatibility matrix (msg#6840).
- [https://pastebin.com/EaLzXRKD]: GPU miner error log (msg#6851).

## Unresolved Questions

- **GPU Miner Idle State** (msg#6848-6851): Autolykos GPU miner behavior of finding solution then idling at 0% utilization pending log review — root cause not confirmed in chat segment.

---

**Summary**: Week 2019-W17 was dominated by testnet mining setup questions, with focus on GPU hardware requirements, driver compatibility, and node configuration. No protocol-level announcements or feature discussions. Activity centered on user onboarding to mining infrastructure.