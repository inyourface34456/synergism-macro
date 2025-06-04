# Coin Buildings Module Documentation

## Types
```typescript
type buyCoinQuant = "coinone" | "cointen" | "coinhundred" | "cointhousand" | "coin10k" | "coin100k";
```

## Building Purchase Functions
- `buyWorker()`: Clicks the Worker purchase button
- `buyInvestment()`: Clicks the Investment purchase button
- `buyPrinter()`: Clicks the Printer purchase button
- `buyCoinMint()`: Clicks the Coin Mint purchase button
- `buyAlchemies()`: Clicks the Alchemy purchase button
- `buyAccel()`: Clicks the Accelerator purchase button
- `buyMult()`: Clicks the Multiplier purchase button
- `buyAccelBoost()`: Clicks the Accelerator Boost purchase button

## Building Availability Check Functions
All these functions return `true` if building can be purchased, `false` if not, and `0` if there's an error
- `isWorkerBuyable()`
- `isInvestmentBuyable()`
- `isPrinterBuyable()`
- `isCoinMintBuyable()`
- `isAlchemiesBuyable()`
- `isAccelBuyable()`
- `isMultBuyable()`
- `isAccelBoostBuyable()`

## Auto-Buy Toggle Functions
- `toggleAutobuyWorker()`: Toggles auto-buy for Workers (toggle1)
- `toggleAutobuyInvestment()`: Toggles auto-buy for Investments (toggle2)
- `toggleAutobuyPrinter()`: Toggles auto-buy for Printers (toggle3)
- `toggleAutobuyCoinMint()`: Toggles auto-buy for Coin Mints (toggle4)
- `toggleAutobuyAlchemies()`: Toggles auto-buy for Alchemies (toggle5)
- `toggleAutobuyAccel()`: Toggles auto-buy for Accelerators (toggle6)
- `toggleAutobuyMult()`: Toggles auto-buy for Multipliers (toggle7)
- `toggleAutobuyAccelBoost()`: Toggles auto-buy for Accelerator Boosts (toggle8)

## Quantity Setting Function
`setCoinBuyQuant(quant: buyCoinQuant)`: Sets the purchase quantity for coin buildings
- Returns: void
- Returns early and logs error if quantity selector not found
- Valid quantities: "coinone", "cointen", "coinhundred", "cointhousand", "coin10k", "coin100k"