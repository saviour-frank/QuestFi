# Collateral Risk

To mint USDh, clients have to deposit Bitcoin, which is the collateral that backs the delta-neutral derivatives position. This collateral needs to be kept safe and managed appropriately in order to ensure USDh's stability. This involves two primary risks.

### **Custody Risk**

Even though the collateral that is deposited to Hermetica is held by established large-scale crypto custodians, the risk exists that these custodians become iliquid. This might be due to a hack or other malicious activity.

#### **Mitigation**

In order to mitigate this risk, Hermetica uses a variety of custody providers. In the event of a failure on the part of any single provider, the loss will be contained.

### **Collateral Management Risk**

Hermetica's operational complexity comes from the fact that it has to make sure that its USDh liability is fully hedged. An operational failure may lead to an uncovered positions and hence lead to a value loss for USDh.

#### **Mitigation**

To minimize this possibility, our risk engine runs risk checks every 100 milliseconds and reconciles our liability against our assets. Hermetica runs multiple risk engines in parallel across multiple geographic locations and cloud providers in order mitigate the possibility of a third party failure.
