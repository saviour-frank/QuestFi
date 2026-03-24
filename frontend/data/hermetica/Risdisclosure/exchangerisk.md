# Exchange Risk

In order to maintain the stability of the position backing USDh, Hermetica hedges the fiat exposure on a centralized derivatives exchange. In the scenario that the exchanges becomes unavailable due to a bankruptcy, hack or operational failure, the USDh liability may become un-hedged.

#### **Mitigation**

**Off-Exchange Settlement**: Hermetica uses off-exchange settlement systems that allow us to hold collateral off of the exchange. In the event of an exchange failure, only unsettled PnL would be lost. This loss should be easily covered by the Hermetica Insurance Fund.

**Exchange Diversification**: Since we consider exchange failure one of the highest risk components of Hermetica's operation, we execute our hedges across a variety of exchanges in order to diversify. In the event that any one of the exchanges fails we are able to cover our exposure on any of the other exchanges. The lost PnL is covered by the [Hermetica Reserve Fund](https://docs.hermetica.fi/usdh/hermetica-reserve-fund).
