# Ascension Buildings Module Documentation

## Dependencies
```typescript
import { makeClicker, makeCheckIfAvalible, makeSetAuto, makeCheckIfAutomated, Layer } from "../utils";
```

## Tesseract Building Functions

### Purchase Functions
- `buyDot()`: Purchase Dot
- `buyVector()`: Purchase Vector
- `buyThreeSpace()`: Purchase Three-Space
- `buyBentTime()`: Purchase Bent Time
- `buyHilbertSpace()`: Purchase Hilbert Space

### Availability Checks
All return `true` if buyable, `false` if not, and `0` if error occurs
- `isDotbuyable()`
- `isVectorbuyable()`
- `isThreeSpacebuyable()`
- `isBentTimebuyable()`
- `isHilbertSpacebuyable()`
- `isConstantUpgrade9Bought()`
- `isConstantUpgrade10Bought()`

### Auto-Buy Toggle Functions
- `toggleAutobuyDot()`: Toggle auto-buy for Dot
- `toggleAutobuyVector()`: Toggle auto-buy for Vector
- `toggleAutobuyThreeSpace()`: Toggle auto-buy for Three-Space
- `toggleAutobuyBentTime()`: Toggle auto-buy for Bent Time
- `toggleAutobuyHilbertSpace()`: Toggle auto-buy for Hilbert Space

## Constant Upgrade Functions

### Purchase Functions
- `constentUpgrade1()`: Purchase Constant Upgrade 1
- `constentUpgrade2()`: Purchase Constant Upgrade 2
- `constentUpgrade3()`: Purchase Constant Upgrade 3
- `constentUpgrade4()`: Purchase Constant Upgrade 4
- `constentUpgrade5()`: Purchase Constant Upgrade 5
- `constentUpgrade6()`: Purchase Constant Upgrade 6
- `constentUpgrade7()`: Purchase Constant Upgrade 7
- `constentUpgrade8()`: Purchase Constant Upgrade 8
- `constentUpgrade9()`: Purchase Constant Upgrade 9
- `constentUpgrade10()`: Purchase Constant Upgrade 10

### Automation Checks
- `isConstantUpgrade1Automated`: Check if Constant Upgrade 1 is automated
- `isConstantUpgrade2Automated`: Check if Constant Upgrade 2 is automated
- `isConstantUpgrade3Automated`: Check if Constant Upgrade 3 is automated
- `isConstantUpgrade4Automated`: Check if Constant Upgrade 4 is automated
- `isConstantUpgrade5Automated`: Check if Constant Upgrade 5 is automated
- `isConstantUpgrade6Automated`: Check if Constant Upgrade 6 is automated
- `isConstantUpgrade7Automated`: Check if Constant Upgrade 7 is automated
- `isConstantUpgrade8Automated`: Check if Constant Upgrade 8 is automated

## Auto-Buy Functions
- `setAutoBuyTess(num: string)`: Set auto buy amount
- `toggleAutoBuyTess()`: Toggle auto buying (tesseractautobuytoggle)
- `toggleAutoTessBuyMode()`: Toggle between AMOUNT/PERCENTAGE modes (tesseractautobuymode)

### Status Check Functions
- `isAutoTessBuldingEnabled()`: Check if auto tesseract building is enabled
  - Returns: `true` if enabled (green border)
  - Returns: `false` if disabled (red border)
  - Returns: `0` if error occurs
- `getAutoTessBuyMode()`: Get current auto tesseract buy mode
  - Returns: `"amount"` or `"percentage"`
  - Returns: `0` if error occurs or element/text not recognized