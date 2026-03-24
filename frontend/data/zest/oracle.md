# Oracles

### What are oracles? <a href="#what-are-oracles" id="what-are-oracles"></a>

Zest Protocol’s smart contracts require accurate pricing data for all assets supplied on the platform. To achieve this, the protocol relies on oracles to deliver real-time asset price feeds.

Zest integrates with the **Pyth** [oracle network](https://pyth.network/price-feeds?asset-type=crypto&status=online), an industry-leading oracle solution incubated by Jump Trading. Renowned for its reliability and precision, Pyth provides up-to-date token price data directly to Zest’s smart contracts.

When it comes to secure and robust pricing infrastructure, it doesn’t get stronger than Pyth.

{% hint style="success" %}
**Responsibilities of an oracle**

- Updates, stores, and distributes up-to-date token prices relevant to the system.
- Ensures UI always displays the latest prices for listed assets on Zest
- Make sure loan liquidations are accurate and efficient
  {% endhint %}

## Oracle Integration

Zest Protocol integrates with **Pyth Oracle** to source real-time token prices, leveraging its robust security architecture to ensure accurate pricing and reliable risk management.

The protocol’s smart contracts routinely fetch and update price data for all supported assets. This ensures that the UI reflects up-to-date information and that liquidations are executed smoothly, accurately, and efficiently.

To maintain price integrity, Zest Protocol incorporates several key safeguards:

– **Staleness Protection:** \
Price staleness occurs when an oracle returns outdated data. To mitigate this, Zest enforces a stricter staleness threshold than Pyth’s default, limiting the maximum allowed price age to **3 minutes**.

– **Confidence Intervals:**\
Pyth price feeds include **confidence intervals** to express the potential variation in asset values. Zest applies a conservative approach when valuing assets and liabilities:\
\
• For **assets**, the **lower bound** of the 95% confidence interval is used\
• For **liabilities**, the **upper bound** of the 95% confidence interval is applied

This methodology ensures prudent, risk-aware pricing across the protocol.
