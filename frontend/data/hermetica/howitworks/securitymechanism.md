# Security Mechanisms

## Off-Exchange Settlement

#### Overview

Hermetica can scale USDh to $5b+ in TVL (at current Open Interest (OI)) because it can tap into Centralized Finance (CeFi) perpetual futures liquidity in a trust-minimized way.

Historically, centralized exchanges have been vulnerable to hacks and sudden bankruptcies. Therefore, it's crucial to mitigate the counterparty risks associated with trading on these platforms.

#### Infrastructure

When users deposit collateral to mint USDh, the funds are moved directly to top-tier, institutional-grade, fully licensed Off-Exchange Settlement (OES) custodians. This ensures that users' collateral is never held by a single party or directly on an exchange.

Our OES custodians allow us to mirror funds to centralized exchanges for trading purposes without requiring the funds to be held directly on the exchange. This design means collateral can be recovered by Hermetica in the event of an exchange outage, hack, or other failure.

The only funds exposed to the exchange are any unsettled Profit and Loss (PnL) from open positions. Regular settlements and diversification across the five major derivatives trading venues ensure this PnL remains small. In the event of an exchange failure, Hermetica would only lose unsettled PnL from open positions while the bulk of the collateral remains secure in custody wallets.

Additionally, Hermetica cannot singlehandedly control funds. The protocol employs institutional-grade custodians like Copper and Ceffu to securely store all collateral, leveraging Multi-Party Computation (MPC) wallets to eliminate single points of failure.

These custodians have maintained a perfect track record with no hacks or loss of customer funds since their inception.

The collateral is safeguarded within a bankruptcy-remote trust for the entire lifecycle of USDh. The custodian’s infrastructure involves a 2-of-3 multi-signer schema, where Hermetica Labs, the custodian, and a third party hold a key. Hermetica’s key is protected with a 4-of-8 multi-approver scheme.&#x20;

{% hint style="info" %}
Our current OES providers are [Copper](https://copper.co/) and [Ceffu](https://www.ceffu.com/). In the future we plan to add more custodians to further diversify our dependencies.
{% endhint %}

## Audits

Hermetica is dedicated to developing highly secure and professionally audited smart contract infrastructure.

To this end, we conduct regular comprehensive security audits with independent third-party services like [Clarity Alliance](https://github.com/Clarity-Alliance/audits/blob/main/Clarity%20Alliance%20-%20Hermetica.pdf) and [Strata Labs](https://drive.google.com/file/d/1uq7weWjH2_nQr8fyqLvbQ7GR8Bhps4Hz/view). Hermetica ensures that its infrastructure remains resilient against an evolving security threat landscape.

Review the completed audit reports from [Clarity Alliance](https://github.com/Clarity-Alliance/audits/blob/main/Clarity%20Alliance%20-%20Hermetica.pdf) and [Strata Labs](https://drive.google.com/file/d/1uq7weWjH2_nQr8fyqLvbQ7GR8Bhps4Hz/view) for more information on Hermetica's security audits.
