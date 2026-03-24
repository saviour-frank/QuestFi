# Backing Mechanism

USDh is fully backed by BTC and issued natively on Runes and Stacks.

{% hint style="success" %}
**Attestations**

Hermetica publishes monthly custodian attestations that detail the protocol's assets and liabilities:

- [January 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-january-2025)
- [February 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-february-2025)
- [March 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-march-2025)
- [April 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-april-2025)
- [May 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-may-2025)
- [June 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-june-2025)
- [July 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-july-2025)
- [August 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-august-2025)
- [September 2025](https://www.blog.hermetica.fi/p/custodian-attestations-of-assets-backing-usdh-september-2025)
  {% endhint %}

## Assets

### Custodians

The BTC assets backing the protocol are securely held in institutional-grade custodians. All assets used to margin trades are stored in the off-exchange settlement solutions of Copper (Clearloop) and Ceffu (MirrorX) .

The custodians deposit addresses show the protocol inflows from minting transactions:

- Ceffu 1: [141Pg9KB1fLgqY3vTABhrKoKyQDD7jjj9a](https://mempool.space/address/141Pg9KB1fLgqY3vTABhrKoKyQDD7jjj9a)
- Ceffu 2: [16GCfT1bnJR6yZy5uZiBKDAc4HMyF2e9dS](https://mempool.space/address/16GCfT1bnJR6yZy5uZiBKDAc4HMyF2e9dS)
- Copper: [bc1qag4ur2guhalkl8hxx6uy9v0pq4e3l2sxlst9v5](https://mempool.space/address/bc1qag4ur2guhalkl8hxx6uy9v0pq4e3l2sxlst9v5)

## Liabilities

### Runes

The Runes protocol requires the entire token supply to be defined in the initial etching transaction. Both USDh and sUSDh have a total supply of 1 quadrillion tokens, stored in the protocol's reserve. Tokens enter circulation through minting and staking.

The circulating supply is verifiable on-chain by subtracting the tokens held in the reserve and protocol wallets from the total supply:\
\
`Circulating supply = 1 quadrillion - reserve wallet - protocol wallets`

<details>

<summary>USDh &#x26; sUSDh Runes Protocol Wallets and Token Etchings</summary>

**Protocol Wallets**

- Reserve Wallet: [bc1q24t48s4lyks0309u9arqtqcrj5txc73pf6xfuxcfdgznz92wewvs8lr8re](https://ordinals.com/address/bc1q24t48s4lyks0309u9arqtqcrj5txc73pf6xfuxcfdgznz92wewvs8lr8re)
- Protocol Wallet 1: [bc1ppd9xd0dgnt88wfxv4fudy407y4mvq8ar62r5xw9yrlzsfxxcr96sskfd2w](https://ordinals.com/address/bc1ppd9xd0dgnt88wfxv4fudy407y4mvq8ar62r5xw9yrlzsfxxcr96sskfd2w)
- Protocol Wallet 2: [bc1p7s7qa93gckae09lmvxpqm6j7xeva6a0pstu53397s7te86jeygxss0f0a4](https://ordinals.com/address/bc1p7s7qa93gckae09lmvxpqm6j7xeva6a0pstu53397s7te86jeygxss0f0a4)

**Token Etchings**

- USDh Token Etching: [USDH•USDH•USDH•USDH](https://ordinals.com/rune/USDH%E2%80%A2USDH%E2%80%A2USDH%E2%80%A2USDH)
- sUSDH Token Etching: [SUSDH•SUSDH•SUSDH•SUSDH](https://ordinals.com/rune/SUSDH%E2%80%A2SUSDH%E2%80%A2SUSDH%E2%80%A2SUSDH)

</details>

### Stacks

USDh token contract: [SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1](https://explorer.hiro.so/txid/SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1?chain=mainnet)

The circulating supply is verifiable on-chain by calling the `get-total-supply` method in the [USDh token contract](https://explorer.hiro.so/txid/SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1?chain=mainnet).

{% hint style="success" %}
On the [block explorer](https://explorer.hiro.so/txid/SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.susdh-token-v1?chain=mainnet) the `get-total-supply` function can be called under the `Available functions` tab to independently verify USDh's circulating supply on Stacks.
{% endhint %}
