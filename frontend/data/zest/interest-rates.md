# Interest Rates Mechanism and Risk Management

## Zest Interest Rates Mechanism

Borrowing rates on Zest Protocol adjust dynamically based on key pool metrics:

– **Utilization Rate:**\
Represents the proportion of funds currently lent out. It is calculated as the amount borrowed divided by the total pool size (borrowed + available).\
\&#xNAN;_Example:_ If 70% of the pool is in use, the utilization rate is 70%.

– **Target Utilization Rate:**\
The optimal usage level the protocol aims to maintain. At this threshold, interest rates are are calibrated to promote balanced activity between lenders and borrowers.

– **Interest Rate at Target Utilization:**\
The borrowing rate applied when the pool is operating at its target utilization—designed to support steady borrowing demand while maintaining pool stability.

– **Maximum Borrowing Rate:**\
As utilization exceeds the target threshold, borrowing rates increase progressively until they reach a capped maximum. This mechanism encourages repayments and helps protect pool liquidity.

To explore interest rate behaviour for a specific asset, navigate to the **Borrow Stacks Market**, click **‘Asset Overview’**, then select **‘Details’**.

Scroll down to view a chart showing current utilization, the target rate, and how borrowing rates adjust based on pool usage.

<figure><img src="https://563839015-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGfC8dsUgiIuFFUi3sa84%2Fuploads%2FN75tPhVzbFKj2An65TTz%2FScreenshot%202025-04-23%20at%2014.31.44.png?alt=media&#x26;token=ba30cd09-64d3-4194-ad5b-fc813f0c34d0" alt=""><figcaption></figcaption></figure>

## Zest Risk Management

Zest Protocol applies careful consideration to the assets it supports, classifying them into three distinct categories based on risk and liquidity:

– **Collateral Assets:**\
These assets can be supplied, borrowed, and used as collateral—subject to protocol-defined parameters. This category includes highly liquid tokens such as **STX**, **sBTC**, and **LSTs** (**stSTXbtc**, which is collateral-only), selected for their strong on-chain DEX liquidity.

– **Borrow-Only Assets:**\
These assets can be borrowed but are not eligible to serve as collateral. Examples include **aeUSDC**, **USDA**, **aUSD**, and **USDh**.

– **E-Mode Assets:**\
Assets with deep liquidity and strong price correlation, allowing for elevated borrowing limits when used within E-Mode. This group includes **STX**, **stSTX**, and **stSTXbtc** (collateral-only).

Asset classification is guided by key factors such as:\
– Depth of **on-chain liquidity**\
– The **potential price impact** of forced liquidations\
– The **efficiency** with which liquidators can execute sales

This framework underpins the protocol’s risk management strategy, ensuring sound and sustainable lending markets.
