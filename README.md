# Celo Simple Storage (Mainnet)

Ejemplo mínimo de contrato inteligente desplegado y **verificado** en **Celo mainnet**.

- **Contrato:** `contracts/SimpleStorage.sol`  
- **Red:** Celo (mainnet) — EVM: **Cancun**  
- **Solidity:** `0.8.24` con optimización `200`  
- **Dirección en mainnet:** `0x92053eB2F54F2DC06418a02F362135350715BE6f`  
- **Verificado en Blockscout:** https://celo.blockscout.com/address/0x92053eB2F54F2DC06418a02F362135350715BE6f?tab=contract

## Funciones
- `setValue(uint256 newValue)` — Guarda un valor en cadena.
- `getValue()` — Lee el valor guardado.

## Cómo volver a verificar (referencia)
- Compiler: `v0.8.24+commit.e11b9ed9`
- EVM: `cancun`
- Optimization: `true` con `200 runs`

## Licencia
MIT — ver archivo [`LICENSE`](./LICENSE).

## Changelog
- v0.1.0: initial release (verified on Celo mainnet).
