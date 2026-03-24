# Stability Mechanism

## Overview

Maintaining stability of the USD peg is crucial for the success of any stablecoin.

The price of USDh, like any other asset, is determined by market supply and demand. Depegging occurs when there’s an imbalance between buyers and sellers.

## Peg Maintenance

Since Approved Participants (APs) can mint and redeem USDh for one USD from the protocol, they are incentivized to arbitrage any imbalance and bring the USDh price back in line with the peg.

A hypothetical example:

If there are too many sellers and the price of USDh drops below its $1 peg, APs can buy the token at a discount and then immediately redeem $1 worth of assets from the protocol for profit.

If USDh trades above its $1 peg, APs can mint USDh for $1 and sell it into the market for an immediate profit.

As long as the protocol's assets meet or exceed the liabilities, the system can effectively maintain the peg.

## Risk Management System

The USDh protocol maintains its USD peg by ensuring that USDh liabilities never exceed the dollar value of the Bitcoin assets in the protocol. This is accomplished by maintaining a short perpetual futures position that fully hedges the BTC, removing any BTCUSD price exposure. An operational failure may lead to a mismatch between assets and futures positions and a potential value loss for USDh.

To minimize this possibility, our risk engine runs checks every 100 milliseconds and reconciles our liabilities with assets and perpetual futures positions. Hermetica runs multiple risk engines in parallel across multiple geographic locations and cloud providers in order mitigate the possibility of a third party failure.

## Hermetica Reserve Fund

The Hermetica Reserve Fund is a reserve of assets maintained by Hermetica to safeguard against negative funding rate environments as well as other unforeseen adverse events.

The Reserve Fund mechanism takes a portion of the protocol yield generated in positive funding rate environments and sets it aside for periods of negative funding.&#x20;

For more information about the Hermetica Reserve Fund, please visit this page:

{% content-ref url="../hermetica-reserve-fund" %}
[hermetica-reserve-fund](https://docs.hermetica.fi/usdh/hermetica-reserve-fund)
{% endcontent-ref %}
