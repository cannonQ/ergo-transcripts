# Ergo General Chat — 2019-W13 Summary

## Key Topics Discussed

- **Light nodes and node architecture**: Discussion of light node modes that validate transactions via ADProofs and NIPoPoWs, with full UTXO set required for mining. Stateless client research expected to enable light mining nodes in the future.

- **EFYT token conversion**: Clarification that EFYT tokens convert 1:1 to ERG at mainnet launch via foundation tax allocation (not mining rewards). Emission curve and circulating supply documented.

- **GPU mining support**: Ergo confirmed as GPU-friendly with GPU miner implementation underway. Tutorial expected within 1-2 weeks. Contributors familiar with C and CUDA encouraged to participate.

- **ErgoScript capabilities**: ErgoScript is both Turing-complete and secure when multiple transactions are considered, contrary to initial design intentions. Formal analysis and manual documentation available.

- **Atomic exchange in core protocol**: Ergo has atomic exchange built into protocol core, enabling decentralized interaction with different cryptocurrencies and supporting protocol-level composition examples.

- **API key authorization issues**: Node operators encountering 403 errors with API access; case sensitivity and proper secret key placement in configuration identified as common problems.

## Important Decisions or Announcements

- [@Dmitry, msg#6482-6483, 2019-03-31]: GPU miner in testing; tutorial to be released in 1-2 weeks. Seeking C/CUDA contributors.

- [@Dmitry, msg#6491, 2019-04-01]: GPU miner testing revealed testnet instability due to high block frequency and one bug found; fixing release planned.

- [@Dmitry, msg#6507, 2019-04-02]: GPU mining interfaces being finalized; tutorial to be written immediately.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): What happens to EFYT tokens once mainnet launches?
  **A** (@Unknown, msg#6460): EFYT converts to ERG from foundation tax (not mining). Reference: [Emission curve](https://ergoplatform.org/news_emission_curve.html)

- **Q** (@Unknown, msg#6462): Is holding ERG-backed Waves tokens secure long-term, or should ERGs be stored directly on Ergo?
  **A** (@Larry Salibra, msg#6463): Direct ERG holding preferred; gateway conversion creates counterparty risk.

- **Q** (@Unknown, msg#6481): Is Ergo GPU-friendly?
  **A** (@Dmitry, msg#6482): Yes, GPU-friendly. GPU miner implementation underway with tutorial coming soon.

- **Q** (@Unknown, msg#6484): Will ErgoScript be Turing-complete or safer than current options?
  **A** (@Dmitry, msg#6487): Both. Initially designed for non-Turing-completeness but proved Turing-complete when considering multiple transactions. [Formal paper](https://arxiv.org/pdf/1806.10116.pdf) and [ErgoScript manual](https://docs.ergoplatform.com/ErgoScript.pdf) available.

- **Q** (@Unknown, msg#6536-6539): API authorization returns 403 error even after correct Blake2B hash configuration.
  **A** (@Dmitry, msg#6540): apiKeyHash is case-sensitive. (@Unknown, msg#6541): Confirm authorize button clicked after entering secret in authentication window.

- **Q** (@Unknown, msg#6544-6545): Node startup reports "no addresses provided" after seed configuration; where is application log?
  **A** (@Unknown, msg#6546): Verify proper script usage via [Blake2B endpoint](http://127.0.0.1:9052/swagger#/utils/hashBlake2b); confirm seed not misplaced in apiKeyHash field.

## Links Shared

- [Twitter: Ergo testnet mining announcement](https://twitter.com/ergoplatformorg/status/1113102153420288002): Testnet GPU mining availability announced.
- [EFYT circulating supply](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): Real-time token circulation data.
- [Emission curve](https://ergoplatform.org/news_emission_curve.html): Token emission schedule documentation.
- [ErgoScript manual](https://docs.ergoplatform.com/ErgoScript.pdf): Language specification.
- [Formal Turing-completeness paper](https://arxiv.org/pdf/1806.10116.pdf): Academic analysis of ErgoScript capabilities.
- [Node setup tutorial](http://chepurnoy.org/blog/2019/01/how-to-set-up-and-configure-full-ergo-node/): Referenced by community for node configuration guidance.
- [Protocol examples (GitHub)](https://github.com/ScorexFoundation/sigmastate-interpreter/tree/2b4b07a17a026cc176289a843d8a24223c8176c5/src/test/scala/sigmastate/utxo/examples): Atomic exchange protocol composition examples.

## Unresolved Questions

- **AMD GPU support**: [@Rumato Estorsky, msg#6515-6516, 2019-04-03] questioned why mining protocol appears AMD GPU resistant, claiming most popular mining hardware ignored. No response documented.

- **Testnet instability root cause**: [@Dmitry, msg#6491, 2019-04-01] identified one bug but full resolution status unclear.

- **Node log location**: [@Unknown, msg#6545, 2019-04-07] unable to locate application log file after node startup; suggestion to verify seed placement provided but final resolution not confirmed.