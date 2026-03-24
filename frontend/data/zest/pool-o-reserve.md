# pool-0-reserve

### Core Functions

1. **set-flashloan-fee-total**
   - Sets the total fee for flash loans for a specific asset.
2. **set-flashloan-fee-protocol**
   - Sets the protocol fee for flash loans for a specific asset.
3. **set-origination-fee-prc**
   - Sets the origination fee percentage for a specific asset.
4. **set-health-factor-liquidation-treshold**
   - Sets the health factor liquidation threshold.
5. **set-user-reserve-data**
   - Sets user reserve data for a specific user and reserve.
6. **set-user-assets**
   - Sets user assets data for a specific user.
7. **update-state-on-deposit**
   - Updates the state when a user deposits assets.
8. **update-state-on-flash-loan**
   - Updates the state after a flash loan is executed.
9. **update-state-on-repay**
   - Updates the state when a user repays a loan.
10. **update-state-on-redeem**
    - Updates the state when a user redeems assets.
11. **update-state-on-liquidation**
    - Updates the state during the liquidation process.
12. **update-state-on-borrow**
    - Updates the state when a user borrows assets.
13. **transfer-to-user**
    - Transfers assets to a user.
14. **set-user-reserve-as-collateral**
    - Sets a user's reserve as collateral.
15. **mint-to-treasury**
    - Mints assets to the treasury.
16. **transfer-to-reserve**
    - Transfers assets to the reserve.
17. **set-user-index**
    - Sets the user index for a specific user and asset.
18. **calculate-user-global-data**
    - Calculates global data for a specific user.
19. **aggregate-user-data**
    - Aggregates user data for calculating global parameters.
20. **update-reserve-interest-rates-and-timestamp**
    - Updates the reserve interest rates and timestamp.
21. **update-cumulative-indexes**
    - Updates cumulative indexes for a specific asset.

### Input Parameters

#### 1. set-flashloan-fee-total

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| asset     | principal | The asset to set the fee for. |
| fee       | uint      | The fee amount to set.        |

#### 2. set-flashloan-fee-protocol

| Parameter | Type      | Description                            |
| --------- | --------- | -------------------------------------- |
| asset     | principal | The asset to set the protocol fee for. |
| fee       | uint      | The protocol fee amount to set.        |

#### `set-origination-fee-prc`

Sets the origination fee percentage for a specific asset.

| Parameter | Type        | Description           |
| --------- | ----------- | --------------------- |
| `asset`   | `principal` | The asset identifier. |
| `fee`     | `uint`      | The origination fee.  |

#### `get-health-factor-liquidation-threshold`

Gets the health factor liquidation threshold.

_No input parameters_

#### `set-health-factor-liquidation-treshold`

Sets the health factor liquidation threshold.

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| `hf`      | `uint` | The health factor liquidation threshold. |

#### `set-user-reserve-data`

Sets the reserve data for a user.

| Parameter | Type        | Description             |
| --------- | ----------- | ----------------------- |
| `user`    | `principal` | The user identifier.    |
| `reserve` | `principal` | The reserve identifier. |
| `data`    | `tuple`     | The reserve data.       |

#### `set-user-assets`

Sets the assets for a user.

| Parameter | Type        | Description          |
| --------- | ----------- | -------------------- |
| `user`    | `principal` | The user identifier. |
| `data`    | `tuple`     | The assets data.     |

#### `set-configurator`

Sets the configurator address.

| Parameter          | Type        | Description                   |
| ------------------ | ----------- | ----------------------------- |
| `new-configurator` | `principal` | The new configurator address. |

#### `set-lending-pool`

Sets the lending pool address.

| Parameter          | Type        | Description                   |
| ------------------ | ----------- | ----------------------------- |
| `new-lending-pool` | `principal` | The new lending pool address. |

#### `set-liquidator`

Sets the liquidator address.

| Parameter        | Type        | Description                 |
| ---------------- | ----------- | --------------------------- |
| `new-liquidator` | `principal` | The new liquidator address. |

#### `set-admin`

Sets the admin address.

| Parameter   | Type        | Description            |
| ----------- | ----------- | ---------------------- |
| `new-admin` | `principal` | The new admin address. |

#### `set-approved-contract`

Sets an approved contract status.

| Parameter  | Type        | Description              |
| ---------- | ----------- | ------------------------ |
| `contract` | `principal` | The contract identifier. |
| `enabled`  | `bool`      | The status to set.       |

#### `set-optimal-utilization-rate`

Sets the optimal utilization rate for an asset.

| Parameter | Type        | Description                   |
| --------- | ----------- | ----------------------------- |
| `asset`   | `principal` | The asset identifier.         |
| `rate`    | `uint`      | The optimal utilization rate. |

#### `set-base-variable-borrow-rate`

Sets the base variable borrow rate for an asset.

| Parameter | Type        | Description                    |
| --------- | ----------- | ------------------------------ |
| `asset`   | `principal` | The asset identifier.          |
| `rate`    | `uint`      | The base variable borrow rate. |

#### `set-variable-rate-slope-1`

Sets the variable rate slope 1 for an asset.

| Parameter | Type        | Description                |
| --------- | ----------- | -------------------------- |
| `asset`   | `principal` | The asset identifier.      |
| `rate`    | `uint`      | The variable rate slope 1. |

#### `set-variable-rate-slope-2`

Sets the variable rate slope 2 for an asset.

| Parameter | Type        | Description                |
| --------- | ----------- | -------------------------- |
| `asset`   | `principal` | The asset identifier.      |
| `rate`    | `uint`      | The variable rate slope 2. |

#### `set-liquidation-close-factor-percent`

Sets the liquidation close factor percent for an asset.

| Parameter | Type        | Description                           |
| --------- | ----------- | ------------------------------------- |
| `asset`   | `principal` | The asset identifier.                 |
| `rate`    | `uint`      | The liquidation close factor percent. |

#### `get-optimal-utilization-rate`

Gets the optimal utilization rate for an asset.

| Parameter | Type        | Description           |
| --------- | ----------- | --------------------- |
| `asset`   | `principal` | The asset identifier. |

#### `get-base-variable-borrow-rate`

Gets the base variable borrow rate for an asset.

| Parameter | Type        | Description           |
| --------- | ----------- | --------------------- |
| `asset`   | `principal` | The asset identifier. |

#### `get-variable-rate-slope-1`

Gets the variable rate slope 1 for an asset.

| Parameter | Type        | Description           |
| --------- | ----------- | --------------------- |
| `asset`   | `principal` | The asset identifier. |

#### `get-variable-rate-slope-2`

Gets the variable rate slope 2 for an asset.

| Parameter | Type        | Description           |
| --------- | ----------- | --------------------- |
| `asset`   | `principal` | The asset identifier. |

#### `is-borroweable-isolated`

Checks if an asset is borrowable in isolation mode.

| Parameter | Type        | Description           |
| --------- | ----------- | --------------------- |
| `asset`   | `principal` | The asset identifier. |

#### `get-borroweable-isolated`

Gets the list of assets borrowable in isolation.

_No input parameters_

#### `is-isolated-type`

Checks if an asset is an isolated type.

| Parameter | Type        | Description           |
| --------- | ----------- | --------------------- |
| `asset`   | `principal` | The asset identifier. |

#### `set-borroweable-isolated`

Sets the assets that can be borrowed in isolation mode.

| Parameter    | Type                 | Description                  |
| ------------ | -------------------- | ---------------------------- |
| `new-assets` | `list 100 principal` | List of new isolated assets. |

#### `remove-isolated-asset`

Removes an asset from the isolated assets list.

| Parameter | Type        | Description              |
| --------- | ----------- | ------------------------ |
| `asset`   | `principal` | The asset to be removed. |

#### `set-isolated-asset`

Sets an asset as an isolated asset.

| Parameter | Type        | Description          |
| --------- | ----------- | -------------------- |
| `asset`   | `principal` | The asset to be set. |

#### `is-borrowing-assets`

Checks if a user is borrowing any assets.

| Parameter | Type        | Description          |
| --------- | ----------- | -------------------- |
| `user`    | `principal` | The user identifier. |

#### `is-in-isolation-mode`

Checks if a user is in isolation mode.

| Parameter | Type        | Description          |
| --------- | ----------- | -------------------- |
| `who`     | `principal` | The user identifier. |

#### `get-assets-used-as-collateral`

Gets the assets used as collateral by a user.

| Parameter | Type        | Description          |
| --------- | ----------- | -------------------- |
| `who`     | `principal` | The user identifier. |

#### `get-isolated-asset`

Gets the isolated asset for a user in isolation mode.

| Parameter | Type        | Description          |
| --------- | ----------- | -------------------- |
| `who`     | `principal` | The user identifier. |

#### `add-supplied-asset-ztoken`

Adds an asset to the supplied assets list for a user when a zToken is involved.

| Parameter | Type        | Description            |
| --------- | ----------- | ---------------------- |
| `who`     | `principal` | The user identifier.   |
| `asset`   | `principal` | The asset to be added. |

#### `remove-supplied-asset-ztoken`

Removes an asset from the supplied assets list for a user when a zToken is involved.

| Parameter | Type        | Description              |
| --------- | ----------- | ------------------------ |
| `who`     | `principal` | The user identifier.     |
| `asset`   | `principal` | The asset to be removed. |

#### `update-state-on-deposit`

Updates the state of a reserve based on a deposit action.

| Parameter          | Type        | Description                                    |
| ------------------ | ----------- | ---------------------------------------------- |
| `asset`            | `<ft>`      | The asset being deposited.                     |
| `who`              | `principal` | The user making the deposit.                   |
| `amount-deposited` | `uint`      | The amount of the asset being deposited.       |
| `is-first-deposit` | `bool`      | Indicates if this is the user's first deposit. |

#### `update-state-on-flash-loan`

Updates the state after a flash loan operation.

| Parameter                    | Type        | Description                           |
| ---------------------------- | ----------- | ------------------------------------- |
| `receiver`                   | `principal` | The recipient of the flash loan.      |
| `asset`                      | `<ft>`      | The asset involved in the flash loan. |
| `available-liquidity-before` | `uint`      | Available liquidity before the loan.  |
| `income`                     | `uint`      | Income generated from the flash loan. |
| `protocol-fee`               | `uint`      | Protocol fee for the flash loan.      |

#### `update-state-on-repay`

Updates the state of a reserve based on a repay action.

| Parameter                   | Type        | Description                             |
| --------------------------- | ----------- | --------------------------------------- |
| `asset`                     | `<ft>`      | The asset being repaid.                 |
| `who`                       | `principal` | The user making the repayment.          |
| `payback-amount-minus-fees` | `uint`      | The repayment amount minus any fees.    |
| `origination-fee-repaid`    | `uint`      | The origination fee that was repaid.    |
| `balance-increase`          | `uint`      | The increase in balance from interest.  |
| `repaid-whole-loan`         | `bool`      | Indicates if the whole loan was repaid. |

#### `update-state-on-redeem`

Updates the state of a reserve based on a redeem action.

| Parameter                  | Type        | Description                                          |
| -------------------------- | ----------- | ---------------------------------------------------- |
| `asset`                    | `<ft>`      | The asset being redeemed.                            |
| `who`                      | `principal` | The user performing the redemption.                  |
| `amount-claimed`           | `uint`      | The amount of the asset being redeemed.              |
| `user-redeemed-everything` | `bool`      | Indicates if the user has redeemed all their assets. |

#### `update-state-on-liquidation`

Updates the state of reserves involved in a liquidation process.

| Parameter                       | Type        | Description                                      |
| ------------------------------- | ----------- | ------------------------------------------------ |
| `principal-reserve`             | `<ft>`      | The principal reserve in the liquidation.        |
| `collateral-reserve`            | `<ft>`      | The collateral reserve in the liquidation.       |
| `borrower`                      | `principal` | The borrower undergoing liquidation.             |
| `liquidator-addr`               | `principal` | The address of the liquidator.                   |
| `principal-amount-to-liquidate` | `uint`      | The amount of principal being liquidated.        |
| `collateral-to-liquidate`       | `uint`      | The amount of collateral being liquidated.       |
| `fee-liquidated`                | `uint`      | The fee associated with the liquidation.         |
| `liquidated-collateral-for-fee` | `uint`      | The amount of collateral used for the fee.       |
| `balance-increase`              | `uint`      | The increase in balance due to interest accrual. |
| `purchased-all-collateral`      | `bool`      |                                                  |
