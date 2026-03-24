# Zest Borrow Contracts Overview

## Contracts Overview

The Zest Borrow contracts are divided into 6 directories:

- [Maths](https://github.com/Zest-Protocol/zest-contracts/tree/main/onchain/contracts/borrow/math) includes helper functions for yield and interest related calculations.
- [Mocks](https://github.com/Zest-Protocol/zest-contracts/tree/main/onchain/contracts/borrow/mocks) holds examples of the lp-tokens, oracles, and read-only calls to fetch protocol related data.
- [Pool](https://github.com/Zest-Protocol/zest-contracts/tree/main/onchain/contracts/borrow/pool) holds pool logic contracts.
- [Token](https://github.com/Zest-Protocol/zest-contracts/tree/main/onchain/contracts/borrow/token) the token directory.
- [Traits](https://github.com/Zest-Protocol/zest-contracts/tree/main/onchain/contracts/borrow/traits) traits used by protocol.
- [Vaults](https://github.com/Zest-Protocol/zest-contracts/tree/main/onchain/contracts/borrow/vaults) holds reserve and configuration / admin functions.

The contracts in the above directories fall into 4 categories of function:

- [Reserve and configuration](#reserve-and-configuration)
- [Pool logic](#pool-logic)
- [Tokenization](#tokenization)
- [Misc](#misc)

## Reserve and configuration

### [pool-0-reserve](https://app.gitbook.com/o/KHk5UTOOAeJS7gxni0Zq/s/GfC8dsUgiIuFFUi3sa84/~/changes/8/borrow-contracts/reserve-and-configuration/pool-0-reserve)

The `pool-0-reserve.clar` contract is engineered to manage lending pool operations, encompassing functions like `set-user-reserve-data` and `get-user-reserve-data` for user-specific reserve tracking, and `calculate-interest-rates` for dynamic interest rate adjustments based on pool metrics. It facilitates borrowing through `update-state-on-borrow` and manages repayments via `update-state-on-repay`, ensuring the integrity of user and pool states. Liquidation is handled by `update-state-on-liquidation`, maintaining the pool's health. Administrative controls are provided through functions like `set-lending-pool`, `set-configurator`, and `set-admin`. Utility functions like `calculate-user-global-data` and `get-user-asset-data` offer comprehensive data aggregation and asset-specific user data retrieval, supporting the contract's core functionality in maintaining Zest as a secure, decentralized lending platform.

### [pool-reserve-data](https://app.gitbook.com/o/KHk5UTOOAeJS7gxni0Zq/s/GfC8dsUgiIuFFUi3sa84/~/changes/8/borrow-contracts/reserve-and-configuration/pool-reserve-data)

The `pool-reserve-data.clar` contract maintains various parameters and states essential for the operation of lending and borrowing. It stores and manages flash loan fees, health factor liquidation thresholds, protocol treasury addresses, and reserve vaults. The contract allows approved entities to update and retrieve user reserve data, reserve states, and user assets. It controls interest rates, reserve factors, and liquidation parameters, ensuring secure and controlled access to modify these critical values.

### [pool-vault](https://app.gitbook.com/o/KHk5UTOOAeJS7gxni0Zq/s/GfC8dsUgiIuFFUi3sa84/~/changes/8/borrow-contracts/reserve-and-configuration/pool-vault)

The `pool-vault.clar` contract facilitates asset transfers, managing the flow of assets within the system. It supports a transfer function that allows approved contracts to move specified amounts of a fungible token to a recipient. The contract maintains an owner and a list of approved contracts, ensuring that only authorized entities can initiate transfers. It provides functions to check contract ownership and verify if a contract is approved, maintaining a secure environment for asset operations.

## Pool Logic

### [pool-borrow](https://app.gitbook.com/o/KHk5UTOOAeJS7gxni0Zq/s/GfC8dsUgiIuFFUi3sa84/~/changes/8/borrow-contracts/pool-logic/pool-borrow)

The `pool-borrow.clar` contract handles the core functionalities related to borrowing, supplying, withdrawing, and repaying assets. It includes functions to:

1. **Supply**: Users can supply assets to the pool, which may then be used as collateral depending on the asset's configuration within the system.
2. **Withdraw**: Allows users to withdraw their supplied assets, subject to the constraints imposed by their current borrowing status and the pool's available liquidity.
3. **Borrow**: Users can borrow assets from the pool, with the amount being determined by their collateral value and the asset's borrowing conditions.
4. **Repay**: Borrowers can repay their loans to adjust their borrowing balance and overall health factor.
5. **Liquidation Call**: This function facilitates the liquidation process when a user's position becomes undercollateralized.
6. **Flashloan**: Offers flash loan functionality, allowing users to borrow and repay within a single transaction while paying a fee.
7. **Configurations**: The contract includes various settings related to collateral usage, borrowing caps, interest rates, and other parameters crucial for the lending and borrowing mechanics.

The contract ensures that only authorized operations are performed.

### [liquidation-manager](https://app.gitbook.com/o/KHk5UTOOAeJS7gxni0Zq/s/GfC8dsUgiIuFFUi3sa84/~/changes/8/borrow-contracts/pool-logic/liquidation-manager)

The `liquidation-manager` contract is a focused component designed to manage the liquidation process within Zest. It interacts with various assets, user balances, and oracles to assess and execute liquidations based on predefined criteria. Key functionalities include:

- `liquidation-call`: Executes the liquidation of undercollateralized positions, ensuring that the health factor is below the threshold and that the collateral is appropriately valued and available for liquidation.
- `calculate-user-global-data`: Aggregates a user's financial data across the platform to determine their eligibility for liquidation.
- `calculate-available-collateral-to-liquidate`: Determines the amount of collateral available for liquidation in relation to the user's debt, taking into account the asset's price and liquidation thresholds.
- Administrative functions: Include setting and querying reserve states, user reserve data, and collateral balances to facilitate liquidation decisions.

The contract ensures that liquidations are conducted fairly and efficiently.

## Tokenization

Examples of tokens associated with the protocol during testnet can be seen in the mocks directory of the contracts repository. However, in mainnet for the moment these only include LP-tokens for the assets that can currently be supplied.&#x20;

- [Z-stSTX](https://explorer.hiro.so/token/SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.zststx?chain=mainnet)
- [Z-aeUSDC](https://explorer.hiro.so/token/SP2VCQJGH7PHP2DJK7Z0V48AGBHQAW3R3ZW1QF4N.zaeusdc?chain=mainnet)

**The LP-tokens are currently not transferrable, and are used purely for accounting purposes.**&#x20;

## Misc

### math

The `math.clar` contract provides a suite of mathematical operations and constants to support various calculations for Zest Borrow operations, including:

1. **Multiplication and Division**: Functions to multiply and divide numbers with precision handling.
2. **Fixed-Precision Operations**: Methods to perform arithmetic operations on numbers with a specific decimal precision.
3. **Percentage Calculations**: Function to calculate a percentage of a number with precision adjustments.
4. **Conversion Functions**: Utilities to convert numbers between different precisions or to fixed precision.
5. **Taylor Series Expansion**: An implementation of the Taylor series to estimate exponential functions up to the 6th degree.
6. **Utility Functions**: Includes checks for odd/even numbers and getters for various constants like `e`, `one-8`, `seconds-in-year`, and `seconds-in-block`.

This contract is crucial for accurate financial computations, ensuring consistent precision and rounding throughout the lending operations.

### fees-calculator

The `fees-calculator.clar` contract provides functionalities related to fee calculation within the lending platform. It includes functions to:

1. **Get Origination Fee Percentage**: Retrieves the origination fee percentage for a specified asset from the pool reserve data.
2. **Multiply Percentage**: A utility function that multiplies a given amount by a percentage, accounting for the asset's decimal precision.
3. **Calculate Origination Fee**: Determines the origination fee for a given amount of an asset borrowed by a user, based on the asset's origination fee percentage and its decimal precision.

These functions are essential for calculating the fees associated with borrowing, ensuring that users are charged appropriately when they take out loans.

### oracle

The `oracle.clar` contract is responsible for managing asset price information within the platform. It includes functionalities to:

1. **Get Asset Price**: Fetches the current price of a specified asset. Prices are stored with a fixed precision of 8 decimals.
2. **Set Price**: Allows updating the price of a given asset in the contract's storage.
3. **Tickers Storage**: Utilizes a data map to store the asset prices, indexed by the asset's contract principal.
