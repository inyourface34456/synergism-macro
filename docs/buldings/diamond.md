# Diamond Buildings Module Documentation

## Types
```typescript
type buyQuant = "crystalone" | "crystalten" | "crystalhundred" | "crystalthousand" | "crystal10k" | "crystal100k";
```

## Building Purchase Functions
- `buyRefinery()`: Purchase a Refinery (buydiamond1)
- `buyCoalPlant()`: Purchase a Coal Plant (buydiamond2)
- `buyCoalRig()`: Purchase a Coal Rig (buydiamond3)
- `buyPikaxe()`: Purchase a Pickaxe (buydiamond4)
- `buyPandorasBox()`: Purchase Pandora's Box (buydiamond5)

## Building Availability Checks
All return `true` if buyable, `false` if not, and `0` if error occurs
- `isRefineryBuyable()`
- `isCoalPlantBuyable()`
- `isCoalRigBuyable()`
- `isPikaxeBuyable()`
- `isPandorasBoxBuyable()`

## Diamond Upgrades
- `buyDiamondUpgrade1()`: Purchase Diamond Upgrade 1
- `buyDiamondUpgrade2()`: Purchase Diamond Upgrade 2
- `buyDiamondUpgrade3()`: Purchase Diamond Upgrade 3
- `buyDiamondUpgrade4()`: Purchase Diamond Upgrade 4
- `buyDiamondUpgrade5()`: Purchase Diamond Upgrade 5

## Auto-Buy Toggle Functions
- `toggleAutobuyRefinery()`: Toggle auto-buy for Refineries (toggle10)
- `toggleAutobuyCoalPlant()`: Toggle auto-buy for Coal Plants (toggle11)
- `toggleAutobuyCoalRig()`: Toggle auto-buy for Coal Rigs (toggle12)
- `toggleAutobuyPickaxe()`: Toggle auto-buy for Pickaxes (toggle13)
- `toggleAutobuyPandoraBox()`: Toggle auto-buy for Pandora's Boxes (toggle14)

## Prestige Functions
- `setAutoPrestige(num: string)`: Set auto prestige amount
- `toggleAutoPrestige()`: Toggle auto prestige (toggle15)
- `toggleAutoPrestigeMode()`: Toggle between TIME and AMOUNT modes
- `isAutoPrestigeEnabled()`: Check if auto prestige is enabled
  - Returns: `true` if enabled (green border)
  - Returns: `false` if disabled (red border)
  - Returns: `0` if error occurs
- `getAutoPrestigeMode()`: Get current auto prestige mode
  - Returns: `"amount"` or `"time"`
  - Returns: `0` if error occurs

## Quantity Setting Function
`setDiamondBuyQuant(quant: buyQuant)`: Sets diamond purchase quantity
- Returns: void
- Returns early and logs error if quantity selector not found
- Valid quantities: "crystalone", "crystalten", "crystalhundred", "crystalthousand", "crystal10k", "crystal100k"