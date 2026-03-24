# Mint Mechanism

## Overview

**Minting USDh** is the process of creating new stablecoins, while **redeeming USDh** is the process of exchanging these stablecoins for Bitcoin.

## How USDh is Created

USDh is minted directly through Hermetica. It is issued on Bitcoin Layer 1 through Runes and Bitcoin Layer 2 through Stacks.

Any registered business or individual in an approved jurisdiction who has completed Hermetica's KYC and AML processes can mint USDh by depositing Bitcoin.

The Approved Participants can also redeem USDh directly through Hermetica. Hermetica then unwinds the derivatives position and returns the collateral to the redeeming party.

{% hint style="success" %}
Other users can purchase USDh through open DeFi markets without completing KYC/KYB.
{% endhint %}

## Infrastructure

<figure><img src="https://2201013687-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fxp26OjT5H1o55M1QMDI4%2Fuploads%2F6QDqb1tA1zcNIAOdKDXG%2FOverall%20Process%20of%20USDh.PNG?alt=media&#x26;token=2599dddb-f861-49cf-aa02-587413b39989" alt=""><figcaption><p>Overall Process of USDh</p></figcaption></figure>

All Bitcoin in the protocol is held at institutional-grade custodians [Copper](https://copper.co/) and [Ceffu](https://www.ceffu.com/).

Their off-exchange settlement (OES) solutions allow Hermetica to mirror funds onto the centralized exchanges trading venues, while holding our assets in a bankruptcy remote Trust off of the exchange's balance sheet.

Hermetica trades on the 4 biggest centralized futures exchanges which represent a total of over $20B in BTCUSD perp open interest. These exchanges are:

1. [Binance](https://www.binance.com)
2. [ByBit](https://www.bybit.com)
3. [Bitget](https://www.bitget.com/)
4. [OKX](https://www.okx.com)

The short perpetual futures position delta-hedges the BTC in the protocol and locks in the dollar value, which is in turn represented on-chain as USDh.

{% hint style="info" %}
While we currently use the exchanges listed above, we are always exploring new exchange partners to further diversify our dependencies.
{% endhint %}

{% hint style="success" %}
For more information about our use of institutional custodians and OES providers, please refer to the [Security Mechanisms section](https://docs.hermetica.fi/usdh/how-it-works/security-mechanisms).
{% endhint %}
