# Yield Mechanism

## Overview

The yield for sUSDh is generated through funding rate payments from short perpetual futures positions, used to stabilize the dollar value of USDh.

This mechanism leverages the dynamics of the futures market to provide consistent returns.

## Funding Rates

#### What is the Funding Rate?

In the futures market, the **funding rate** serves as a mechanism to align the price of perpetual futures contracts with the underlying spot price of the asset. Perpetual futures, unlike traditional futures contracts, have no expiration date. Therefore, the funding rate acts as a continuous adjustment tool.

When the futures price trades above the spot price, the funding rate increases, making it more costly to maintain long positions. This incentivizes traders to exit their long positions or new short positions to enter the market, bringing the futures price back in line with the spot price.

#### How Funding Rates Influence Yield

The **yield for USDh** comes from the structural **demand for long leverage in Bitcoin**, a common characteristic of high-beta assets with significant volatility.

As long as there is strong demand for leveraged long positions, the futures market tends to trade above spot prices. This results in higher funding rates, which pay Hermetica's short positions, thereby generating yield for USDh stakers.

The funding rate calculations on centralized exchanges include a positive base to account for the cost of capital. As a result, funding rates are positive even in a steady state of the same amount of shorts and longs in the system, further underlying the sustainability of the USDh yield mechanism&#x20;

#### Yield Distribution

USDh yield is distributed to stakers (sUSDh holders) on a daily basis.

**Historical Performance**

Refer to this section of the docs for more information on the historical performance:

{% content-ref url="../historical-performance" %}
[historical-performance](https://docs.hermetica.fi/usdh/historical-performance)
{% endcontent-ref %}

{% hint style="info" %}
In the event funding rate payments are negative, the funds in the [Hermetica Reserve Fund](https://app.gitbook.com/o/yqsrEF2PdPdJxaRpgr41/s/xp26OjT5H1o55M1QMDI4/~/changes/4/tokens/usdh-and-susdh/hermetica-insurance-fund) are used. This ensures USDh yield is always neutral or positive.
{% endhint %}
