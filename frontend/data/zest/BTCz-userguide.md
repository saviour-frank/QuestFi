# BTCz User Guide

{% hint style="info" %}
**Zest Protocol’s BTCz product is currently being phased out as part of a broader protocol refocus.**

**The team is now prioritising sBTC and the Borrow markets. As such, BTCz will be deprecated in the near future.**

**When BTC staking becomes possible on Stacks, a new version of BTCz may be introduced in a future iteration.**
{% endhint %}

## Depositing BTC

Head to the "BTCz" tab at [app.zestprotocol.com](https://app.zestprotocol.com) and connect a wallet compatible with both Bitcoin & Stacks.

We currently support all of the leading wallets: [Leather](https://leather.io/), [Xverse](https://www.xverse.app/), [OKX Wallet](https://www.okx.com/web3), [Asigna](https://asigna.io/), and [Orange Wallet](https://chromewebstore.google.com/detail/orange-wallet/glmhbknppefdmpemdmjnjlinpbclokhn?hl=en&authuser=0)

{% embed url="<https://www.loom.com/share/608776ecda034ba29e0dc2b9e4930e47?sid=af5bd96a-db69-4d77-b441-179cda71e708>" %}

Click **“Deposit BTC”** to initiate the process. This step requires a standard BTC send transaction, which typically confirms within **10–30 minutes**, depending on Bitcoin block times.

Once your BTC transaction confirms, you have to finalise the deposit with a Stacks transaction. Click **“Finalise BTC Deposit on Stacks”** and approve the transaction in your wallet.

## Finalise BTC Deposit on Stacks

{% embed url="<https://www.loom.com/share/8d2fff80d34e465db7d0c3a46186a1ef?sid=a9b73e1a-fe66-41f8-8040-a970042c8a09>" %}

After the Stacks transaction is confirmed, your **BTCz** will be minted and reflected in your wallet.

BTCz will passively generate yield as it sits in your wallet and can be used across DeFi like any other SIP10 token.

## Positions

<figure><img src="https://563839015-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGfC8dsUgiIuFFUi3sa84%2Fuploads%2FiMvl1UUFBZG8A1PzkV5H%2Fimage.png?alt=media&#x26;token=80ed37e2-b5c7-4603-9d63-6dbf5b6231fd" alt=""><figcaption></figcaption></figure>

All BTC-related positions, deposits, and pending transactions are displayed in the **“Positions”** section of your dashboard.

This section includes:\
– Status indicators for each deposit or withdrawal\
– Links to corresponding transactions on both **Bitcoin** and **Stacks**\
– Highlighted action buttons based on what’s currently available

## BTCz Withdrawal -> Bitcoin Mainnet

{% embed url="<https://www.loom.com/share/d85a2d6b449842e7933dd70dfc1d0636?sid=d2a2cc28-d4d0-4ef2-bcee-a6257004e978>" %}

BTCz available for withdrawal will appear in your **Positions** tab.\
To begin the withdrawal process:

1. Click **“Withdraw BTC”**
2. Approve the transaction on Stacks

Once confirmed, the withdrawal enters a time-based process governed by the Stacks consensus cycle.

<figure><img src="https://563839015-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGfC8dsUgiIuFFUi3sa84%2Fuploads%2FORrMykwcJpTGfr09VSu8%2Fimage.png?alt=media&#x26;token=878902e7-52c8-4c4c-93b7-e8973bf8965e" alt=""><figcaption></figcaption></figure>

Withdrawals from BTCz follows the 2-week [Stacks consensus cycles.](https://docs.stacks.co/concepts/stacks-101/proof-of-transfer)

The process is as follows:

1. User withdraws their BTCz from Zest Protocol
2. Zest Protocol unstakes user's BTC from Babylon
3. BTC is returned to the user within 3-weeks depending on the current position within the Stacks consensus cycle.
   1. If withdrawal is initiated between Bitcoin block 1-1200 of a given Stacks cycle, the withdrawal will be processed by the end of current cycle (i.e. in 1-2 weeks).
   2. If withdrawal is initiated after Bitcoin block 1200 of a given Stacks cycle, the withdrawal will be processed by the end of the next cycle (i.e. in 2-3 weeks).&#x20;

Your withdrawal applet will automatically calculate this and tell you the approximate amount of time your BTC will take to return to you.

No further action is required once the withdrawal transaction confirms. BTC will hit your wallet after the specified time has elapsed.
