# Isolation Mode

Isolated assets are more volatile assets that have stricter risk management parameters than non-isolated assets. Users can only enable one isolated asset as collateral at any given time. Isolated assets have a set debt ceiling\* and can be only used to borrow select assets that have been configured to be borrowable in isolation mode.&#x20;

\*Debt Ceiling for an isolated asset is the maximum amount in USD that can be borrowed against the collateral.

## Supply Isolated Asset

An isolated asset can be supplied like any other asset, however the default behaviour while supplying an isolated asset will depend on the below conditions

| Use as Collateral | Condition                                                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Enabled           | <p>- if Isolated Asset is the first asset supplied by the user<br>OR<br>- no other supplied asset is enabled as collateral by the user</p> |
| Disabled          | if any other asset is currently enabled as collateral                                                                                      |

{% hint style="info" %}
In case the user has other assets enabled as collateral, they can still supply isolated assets to capture potential yield but won’t be able to use it as collateral
{% endhint %}

## Borrow in Isolated Mode

Borrowers using an isolated asset as collateral can only use that particular asset as collateral and can only borrow assets for which the `get-borroweable-isolated` read-only call from [`pool-reserve-data`](https://docs.zestprotocol.com/start/borrow-contracts/reserve-and-configuration/pool-reserve-data) returns `true`.

{% hint style="info" %}
Borrower in Isolation Mode cannot enable any other assets including the other isolated assets as collateral.
{% endhint %}

## Exit Isolation Mode

Users can turn off isolation mode by disabling the isolated asset as collateral. This can be done only if the user has no outstanding debt.
