# Mythos Buildings Module Documentation

## Types
```typescript
type buyQuant = "mythosone" | "mythosten" | "mythoshundred" | "mythosthousand" | "mythos10k" | "mythos100k";
```

## Building Purchase Functions
- `buyAugments()`: Purchase Augments (buymythos1)
- `buyEnchantments()`: Purchase Enchantments (buymythos2)
- `buyWizards()`: Purchase Wizards (buymythos3)
- `buyOracles()`: Purchase Oracles (buymythos4)
- `buyGrandmasters()`: Purchase Grandmasters (buymythos5)

## Building Availability Checks
All return `true` if buyable, `false` if not, and `0` if error occurs
- `isAugmentsBuyable()`
- `isEnchantmentsBuyable()`
- `isWizardsBuyable()`
- `isOraclesBuyable()`
- `isGrandmastersBuyable()`

## Auto-Buy Toggle Functions
- `toggleAutobuyAugments()`: Toggle auto-buy for Augments (toggle16)
- `toggleAutobuyEnchantments()`: Toggle auto-buy for Enchantments (toggle17)
- `toggleAutobuyWizards()`: Toggle auto-buy for Wizards (toggle18)
- `togglAutobuyeOracles()`: Toggle auto-buy for Oracles (toggle19)
- `toggleAutobuyGrandmasters()`: Toggle auto-buy for Grandmasters (toggle20)

## Transcension Functions
- `setAutoTranscend(num: string)`: Set auto transcend amount
- `toggleAutoTranscend()`: Toggle auto transcend (toggle21)
- `toggleAutoTranscendeMode()`: Toggle between TIME and AMOUNT modes
- `isAutoTranscendEnabled()`: Check if auto transcend is enabled
  - Returns: `true` if enabled (green border)
  - Returns: `false` if disabled (red border)
  - Returns: `0` if error occurs
- `getAutoTranscendMode()`: Get current auto transcend mode
  - Returns: `"amount"` or `"time"`
  - Returns: `0` if error occurs

## Quantity Setting Function
`setMythosBuyQuant(quant: buyQuant)`: Sets mythos purchase quantity
- Returns: void
- Returns early and logs error if quantity selector not found
- Valid quantities: "mythosone", "mythosten", "mythoshundred", "mythosthousand", "mythos10k", "mythos100k"