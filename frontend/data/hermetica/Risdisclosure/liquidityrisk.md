# Liquidity Risk

When minting USDh, Hermetica has to make sure that there is enough liquidity in the futures market to execute a delta-neutral trade. If for any reason Hermetica is not able to source enough liquidity to either increase or unwind a derivative position, it will not be able to either mint or redeem USDh tokens. Naturally this will lead to a loss.

#### **Mitigation**

In order to avoid any liquidity issues,Hermetica reserves the right to restrict minting of new USDh if it deems derivative markets to be too iliquid to absorb more short open interest. We have conducted extensive analysis of historical liquidity data across the largest derivative exchanges to measure the liquidity risk effectively.
