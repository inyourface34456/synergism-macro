# Reincarnation Buildings Module Documentation

## Types
```typescript
type buyQuant = "particleone" | "particlesten" | "particlehundred" | "particlethousand" | "particle10k" | "particle100k";
```

## Building Purchase Functions
- `buyProton()`: Purchase a Proton (buyparticles1)
- `buyElement()`: Purchase an Element (buyparticles2)
- `buyPulsar()`: Purchase a Pulsar (buyparticles3)
- `buyQuasar()`: Purchase a Quasar (buyparticles4)
- `buyGalacticNuclei()`: Purchase Galactic Nuclei (buyparticles5)

## Building Availability Checks
All return `true` if buyable, `false` if not, and `0` if error occurs
- `isProtonbuyable()`
- `isElementbuyable()`
- `isPulsarbuyable()`
- `isQuasarbuyable()`
- `isGalacticNucleibuyable()`

## Auto-Buy Toggle Functions
- `toggleAutobuyProton()`: Toggle auto-buy for Protons (toggle22)
- `toggleAutobuyElement()`: Toggle auto-buy for Elements (toggle23)
- `toggleAutobuyPulsar()`: Toggle auto-buy for Pulsars (toggle24)
- `toggleAutobuyQuasar()`: Toggle auto-buy for Quasars (toggle25)
- `toggleAutobuyGalacticNuclei()`: Toggle auto-buy for Galactic Nuclei (toggle26)

## Particle/Reincarnation Functions
- `setAutoParticle(num: string)`: Set auto reincarnation amount
- `toggleAutoParticle()`: Toggle auto reincarnation (toggle27)
- `toggleAutoParticleMode()`: Toggle between TIME and AMOUNT modes
- `isAutoParticleEnabled()`: Check if auto particle is enabled
  - Returns: `true` if enabled (green border)
  - Returns: `false` if disabled (red border)
  - Returns: `0` if error occurs
- `getAutoParticleMode()`: Get current auto particle mode
  - Returns: `"amount"` or `"time"`
  - Returns: `0` if error occurs or element/text not recognized

## Quantity Setting Function
`setParticleBuyQuant(quant: buyQuant)`: Sets particle purchase quantity
- Returns: void
- Returns early and logs error if quantity selector not found
- Valid quantities:
  - "particleone": Buy 1
  - "particlesten": Buy 10
  - "particlehundred": Buy 100
  - "particlethousand": Buy 1,000
  - "particle10k": Buy 10,000
  - "particle100k": Buy 100,000