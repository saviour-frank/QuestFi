# pool-vault

List of Core Functions:

1. `transfer`: Transfers a specified amount of tokens to a recipient.
2. `get-contract-owner`: Retrieves the current contract owner.
3. `set-contract-owner`: Sets a new contract owner.
4. `is-contract-owner`: Checks if a given principal is the contract owner.
5. `is-approved-contract`: Checks if a contract is approved to interact with this contract.

Detailed Tables:

#### `transfer`

Transfers a specified amount of tokens to a recipient.

| Parameter   | Type        | Description                             |
| ----------- | ----------- | --------------------------------------- |
| `amount`    | `uint`      | The amount of tokens to be transferred. |
| `recipient` | `principal` | The principal to receive the tokens.    |
| `f-t`       | `<ft>`      | The fungible token to transfer.         |

#### `get-contract-owner`

Retrieves the current contract owner.

_No parameters._

#### `set-contract-owner`

Sets a new contract owner.

| Parameter | Type        | Description                    |
| --------- | ----------- | ------------------------------ |
| `owner`   | `principal` | The new owner of the contract. |

#### `is-contract-owner`

Checks if a given principal is the contract owner.

| Parameter | Type        | Description                           |
| --------- | ----------- | ------------------------------------- |
| `caller`  | `principal` | The principal to check for ownership. |

#### `is-approved-contract`

Checks if a contract is approved to interact with this contract.

| Parameter  | Type        | Description                         |
| ---------- | ----------- | ----------------------------------- |
| `contract` | `principal` | The contract to check for approval. |
