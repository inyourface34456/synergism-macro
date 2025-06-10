var macroCmds = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    ascendBuyQuant: () => ascendBuyQuant,
    buyAccel: () => buyAccel,
    buyAccelBoost: () => buyAccelBoost,
    buyAlchemies: () => buyAlchemies,
    buyAugments: () => buyAugments,
    buyBentTime: () => buyBentTime,
    buyCoalPlant: () => buyCoalPlant,
    buyCoalRig: () => buyCoalRig,
    buyCoinMint: () => buyCoinMint,
    buyCoinUpgrade1: () => buyCoinUpgrade1,
    buyCoinUpgrade10: () => buyCoinUpgrade10,
    buyCoinUpgrade11: () => buyCoinUpgrade11,
    buyCoinUpgrade12: () => buyCoinUpgrade12,
    buyCoinUpgrade13: () => buyCoinUpgrade13,
    buyCoinUpgrade14: () => buyCoinUpgrade14,
    buyCoinUpgrade15: () => buyCoinUpgrade15,
    buyCoinUpgrade16: () => buyCoinUpgrade16,
    buyCoinUpgrade17: () => buyCoinUpgrade17,
    buyCoinUpgrade18: () => buyCoinUpgrade18,
    buyCoinUpgrade19: () => buyCoinUpgrade19,
    buyCoinUpgrade2: () => buyCoinUpgrade2,
    buyCoinUpgrade20: () => buyCoinUpgrade20,
    buyCoinUpgrade21: () => buyCoinUpgrade21,
    buyCoinUpgrade22: () => buyCoinUpgrade22,
    buyCoinUpgrade23: () => buyCoinUpgrade23,
    buyCoinUpgrade24: () => buyCoinUpgrade24,
    buyCoinUpgrade25: () => buyCoinUpgrade25,
    buyCoinUpgrade3: () => buyCoinUpgrade3,
    buyCoinUpgrade4: () => buyCoinUpgrade4,
    buyCoinUpgrade5: () => buyCoinUpgrade5,
    buyCoinUpgrade6: () => buyCoinUpgrade6,
    buyCoinUpgrade7: () => buyCoinUpgrade7,
    buyCoinUpgrade8: () => buyCoinUpgrade8,
    buyCoinUpgrade9: () => buyCoinUpgrade9,
    buyDiamondUpgrade1: () => buyDiamondUpgrade1,
    buyDiamondUpgrade2: () => buyDiamondUpgrade2,
    buyDiamondUpgrade3: () => buyDiamondUpgrade3,
    buyDiamondUpgrade4: () => buyDiamondUpgrade4,
    buyDiamondUpgrade5: () => buyDiamondUpgrade5,
    buyDot: () => buyDot,
    buyElement: () => buyElement,
    buyEnchantments: () => buyEnchantments,
    buyGalacticNuclei: () => buyGalacticNuclei,
    buyGrandmasters: () => buyGrandmasters,
    buyHilbertSpace: () => buyHilbertSpace,
    buyInvestment: () => buyInvestment,
    buyMult: () => buyMult,
    buyOracles: () => buyOracles,
    buyPandorasBox: () => buyPandorasBox,
    buyPikaxe: () => buyPikaxe,
    buyPrinter: () => buyPrinter,
    buyProton: () => buyProton,
    buyPulsar: () => buyPulsar,
    buyQuasar: () => buyQuasar,
    buyRefinery: () => buyRefinery,
    buyThreeSpace: () => buyThreeSpace,
    buyVector: () => buyVector,
    buyWizards: () => buyWizards,
    buyWorker: () => buyWorker,
    coinBuyQuant: () => coinBuyQuant,
    constentUpgrade1: () => constentUpgrade1,
    constentUpgrade10: () => constentUpgrade10,
    constentUpgrade2: () => constentUpgrade2,
    constentUpgrade3: () => constentUpgrade3,
    constentUpgrade4: () => constentUpgrade4,
    constentUpgrade5: () => constentUpgrade5,
    constentUpgrade6: () => constentUpgrade6,
    constentUpgrade7: () => constentUpgrade7,
    constentUpgrade8: () => constentUpgrade8,
    constentUpgrade9: () => constentUpgrade9,
    diamondBuyQuant: () => diamondBuyQuant,
    getAutoParticleMode: () => getAutoParticleMode,
    getAutoPrestigeMode: () => getAutoPrestigeMode,
    getAutoTessBuyMode: () => getAutoTessBuyMode,
    getAutoTranscendMode: () => getAutoTranscendMode,
    getAutoUpgraderStatus: () => getAutoUpgraderStatus,
    isAccelBoostBuyable: () => isAccelBoostBuyable,
    isAccelBuyable: () => isAccelBuyable,
    isAlchemiesBuyable: () => isAlchemiesBuyable,
    isAugmentsBuyable: () => isAugmentsBuyable,
    isAutoParticleEnabled: () => isAutoParticleEnabled,
    isAutoPrestigeEnabled: () => isAutoPrestigeEnabled,
    isAutoTessBuldingEnabled: () => isAutoTessBuldingEnabled,
    isAutoTranscendEnabled: () => isAutoTranscendEnabled,
    isBentTimebuyable: () => isBentTimebuyable,
    isCoalPlantBuyable: () => isCoalPlantBuyable,
    isCoalRigBuyable: () => isCoalRigBuyable,
    isCoinMintBuyable: () => isCoinMintBuyable,
    isCoinUpgrade10Buyable: () => isCoinUpgrade10Buyable,
    isCoinUpgrade11Buyable: () => isCoinUpgrade11Buyable,
    isCoinUpgrade12Buyable: () => isCoinUpgrade12Buyable,
    isCoinUpgrade13Buyable: () => isCoinUpgrade13Buyable,
    isCoinUpgrade14Buyable: () => isCoinUpgrade14Buyable,
    isCoinUpgrade15Buyable: () => isCoinUpgrade15Buyable,
    isCoinUpgrade16Buyable: () => isCoinUpgrade16Buyable,
    isCoinUpgrade17Buyable: () => isCoinUpgrade17Buyable,
    isCoinUpgrade18Buyable: () => isCoinUpgrade18Buyable,
    isCoinUpgrade19Buyable: () => isCoinUpgrade19Buyable,
    isCoinUpgrade1Buyable: () => isCoinUpgrade1Buyable,
    isCoinUpgrade20Buyable: () => isCoinUpgrade20Buyable,
    isCoinUpgrade21Buyable: () => isCoinUpgrade21Buyable,
    isCoinUpgrade22Buyable: () => isCoinUpgrade22Buyable,
    isCoinUpgrade23Buyable: () => isCoinUpgrade23Buyable,
    isCoinUpgrade24Buyable: () => isCoinUpgrade24Buyable,
    isCoinUpgrade25Buyable: () => isCoinUpgrade25Buyable,
    isCoinUpgrade2Buyable: () => isCoinUpgrade2Buyable,
    isCoinUpgrade3Buyable: () => isCoinUpgrade3Buyable,
    isCoinUpgrade4Buyable: () => isCoinUpgrade4Buyable,
    isCoinUpgrade5Buyable: () => isCoinUpgrade5Buyable,
    isCoinUpgrade6Buyable: () => isCoinUpgrade6Buyable,
    isCoinUpgrade7Buyable: () => isCoinUpgrade7Buyable,
    isCoinUpgrade8Buyable: () => isCoinUpgrade8Buyable,
    isCoinUpgrade9Buyable: () => isCoinUpgrade9Buyable,
    isConstantUpgrade10Bought: () => isConstantUpgrade10Bought,
    isConstantUpgrade1Automated: () => isConstantUpgrade1Automated,
    isConstantUpgrade2Automated: () => isConstantUpgrade2Automated,
    isConstantUpgrade3Automated: () => isConstantUpgrade3Automated,
    isConstantUpgrade4Automated: () => isConstantUpgrade4Automated,
    isConstantUpgrade5Automated: () => isConstantUpgrade5Automated,
    isConstantUpgrade6Automated: () => isConstantUpgrade6Automated,
    isConstantUpgrade7Automated: () => isConstantUpgrade7Automated,
    isConstantUpgrade8Automated: () => isConstantUpgrade8Automated,
    isConstantUpgrade9Bought: () => isConstantUpgrade9Bought,
    isDiamondUpgrade1Automated: () => isDiamondUpgrade1Automated,
    isDiamondUpgrade2Automated: () => isDiamondUpgrade2Automated,
    isDiamondUpgrade3Automated: () => isDiamondUpgrade3Automated,
    isDiamondUpgrade4Automated: () => isDiamondUpgrade4Automated,
    isDiamondUpgrade5Automated: () => isDiamondUpgrade5Automated,
    isDotbuyable: () => isDotbuyable,
    isElementbuyable: () => isElementbuyable,
    isEnchantmentsBuyable: () => isEnchantmentsBuyable,
    isGalacticNucleibuyable: () => isGalacticNucleibuyable,
    isGrandmastersBuyable: () => isGrandmastersBuyable,
    isHilbertSpacebuyable: () => isHilbertSpacebuyable,
    isInvestmentBuyable: () => isInvestmentBuyable,
    isMultBuyable: () => isMultBuyable,
    isOraclesBuyable: () => isOraclesBuyable,
    isPandorasBoxBuyable: () => isPandorasBoxBuyable,
    isPikaxeBuyable: () => isPikaxeBuyable,
    isPrinterBuyable: () => isPrinterBuyable,
    isProtonbuyable: () => isProtonbuyable,
    isPulsarbuyable: () => isPulsarbuyable,
    isQuasarbuyable: () => isQuasarbuyable,
    isRefineryBuyable: () => isRefineryBuyable,
    isThreeSpacebuyable: () => isThreeSpacebuyable,
    isVectorbuyable: () => isVectorbuyable,
    isWizardsBuyable: () => isWizardsBuyable,
    isWorkerBuyable: () => isWorkerBuyable,
    mythosBuyQuant: () => mythosBuyQuant,
    reincarnateBuyQuant: () => reincarnateBuyQuant,
    setAutoBuyTess: () => setAutoBuyTess,
    setAutoParticle: () => setAutoParticle,
    setAutoPrestige: () => setAutoPrestige,
    setAutoTranscend: () => setAutoTranscend,
    setCoinBuyQuant: () => setCoinBuyQuant,
    setDiamondBuyQuant: () => setDiamondBuyQuant,
    setMythosBuyQuant: () => setMythosBuyQuant,
    setParticleBuyQuant: () => setParticleBuyQuant,
    setTessBuildQuant: () => setTessBuildQuant,
    togglAutobuyeOracles: () => togglAutobuyeOracles,
    toggleAutoBuyTess: () => toggleAutoBuyTess,
    toggleAutoParticle: () => toggleAutoParticle,
    toggleAutoParticleMode: () => toggleAutoParticleMode,
    toggleAutoPrestige: () => toggleAutoPrestige,
    toggleAutoPrestigeMode: () => toggleAutoPrestigeMode,
    toggleAutoTessBuyMode: () => toggleAutoTessBuyMode,
    toggleAutoTranscend: () => toggleAutoTranscend,
    toggleAutoTranscendeMode: () => toggleAutoTranscendeMode,
    toggleAutobuyAccel: () => toggleAutobuyAccel,
    toggleAutobuyAccelBoost: () => toggleAutobuyAccelBoost,
    toggleAutobuyAlchemies: () => toggleAutobuyAlchemies,
    toggleAutobuyAugments: () => toggleAutobuyAugments,
    toggleAutobuyBentTime: () => toggleAutobuyBentTime,
    toggleAutobuyCoalPlant: () => toggleAutobuyCoalPlant,
    toggleAutobuyCoalRig: () => toggleAutobuyCoalRig,
    toggleAutobuyCoinMint: () => toggleAutobuyCoinMint,
    toggleAutobuyDot: () => toggleAutobuyDot,
    toggleAutobuyElement: () => toggleAutobuyElement,
    toggleAutobuyEnchantments: () => toggleAutobuyEnchantments,
    toggleAutobuyGalacticNuclei: () => toggleAutobuyGalacticNuclei,
    toggleAutobuyGrandmasters: () => toggleAutobuyGrandmasters,
    toggleAutobuyHilbertSpace: () => toggleAutobuyHilbertSpace,
    toggleAutobuyInvestment: () => toggleAutobuyInvestment,
    toggleAutobuyMult: () => toggleAutobuyMult,
    toggleAutobuyPandoraBox: () => toggleAutobuyPandoraBox,
    toggleAutobuyPickaxe: () => toggleAutobuyPickaxe,
    toggleAutobuyPrinter: () => toggleAutobuyPrinter,
    toggleAutobuyProton: () => toggleAutobuyProton,
    toggleAutobuyPulsar: () => toggleAutobuyPulsar,
    toggleAutobuyQuasar: () => toggleAutobuyQuasar,
    toggleAutobuyRefinery: () => toggleAutobuyRefinery,
    toggleAutobuyThreeSpace: () => toggleAutobuyThreeSpace,
    toggleAutobuyVector: () => toggleAutobuyVector,
    toggleAutobuyWizards: () => toggleAutobuyWizards,
    toggleAutobuyWorker: () => toggleAutobuyWorker,
    toggleCoinUpgradeAutoBuy: () => toggleCoinUpgradeAutoBuy
  });

  // src/utils.ts
  function makeClicker(id, disId) {
    const element = document.getElementById(id);
    return function() {
      if (element) {
        element.click();
      } else {
        console.error(`cannot find the ${disId} button"`);
      }
    };
  }
  function checkClassList(id, className) {
    let element = document.getElementById(id);
    if (!element) {
      console.error(`cannot find the element ${id}`);
      return 0;
    } else if (element && element.classList.contains(className)) {
      return true;
    } else {
      return false;
    }
  }
  function makeCheckIfAvalible(id, type) {
    switch (type) {
      case 0 /* Bulding */:
        return function() {
          let res = checkClassList(id, "buildingPurchaseBtnAvailable");
          if (res === 0) {
            return 0;
          } else if (res) {
            return true;
          } else {
            return false;
          }
        };
      case 1 /* Upgrade */:
        return function() {
          let res = checkClassList(id, "green-background");
          if (res === 0) {
            return 0;
          } else if (res) {
            return true;
          } else {
            return false;
          }
        };
    }
  }
  function makeCheckIfAutomated(id, layer) {
    switch (layer) {
      case 1 /* Ascend */:
        return function() {
          let res = checkClassList(id, "constUpgradeAuto");
          if (res === 0) {
            return 0;
          } else if (res) {
            return true;
          } else {
            return false;
          }
        };
      case 0 /* Pristige */:
        return function() {
          let res = document.getElementById(id);
          if (res && res.style.backgroundColor === "green") {
            return true;
          } else if (!(res == null ? void 0 : res.style.backgroundColor)) {
            return false;
          }
        };
    }
  }
  function makeSetAuto(id, disId) {
    return function(num) {
      let elm = document.getElementById(id);
      if (elm) {
        elm.value = num;
      } else {
        console.error(`cannot find ${disId}`);
      }
    };
  }

  // src/buildings/coin.ts
  var workerId = "buycoin1";
  var investmentId = "buycoin2";
  var printerId = "buycoin3";
  var coinMintId = "buycoin4";
  var alchemiesId = "buycoin5";
  var accelId = "buyaccelerator";
  var multId = "buymultiplier";
  var accelBoostId = "buyacceleratorboost";
  var buyWorker = makeClicker(workerId, "Worker");
  var buyInvestment = makeClicker(investmentId, "Investment");
  var buyPrinter = makeClicker(printerId, "Printer");
  var buyCoinMint = makeClicker(coinMintId, "Coin Mint");
  var buyAlchemies = makeClicker(alchemiesId, "Alchemy");
  var buyAccel = makeClicker(accelId, "Accelorator");
  var buyMult = makeClicker(multId, "Multplier");
  var buyAccelBoost = makeClicker(accelBoostId, "Accel. Boost");
  var isWorkerBuyable = makeCheckIfAvalible(workerId, 0 /* Bulding */);
  var isInvestmentBuyable = makeCheckIfAvalible(investmentId, 0 /* Bulding */);
  var isPrinterBuyable = makeCheckIfAvalible(printerId, 0 /* Bulding */);
  var isCoinMintBuyable = makeCheckIfAvalible(coinMintId, 0 /* Bulding */);
  var isAlchemiesBuyable = makeCheckIfAvalible(alchemiesId, 0 /* Bulding */);
  var isAccelBuyable = makeCheckIfAvalible(accelId, 0 /* Bulding */);
  var isMultBuyable = makeCheckIfAvalible(multId, 0 /* Bulding */);
  var isAccelBoostBuyable = makeClicker(accelBoostId, "Accel. Boost");
  var toggleAutobuyWorker = makeClicker("toggle1", "Auto Worker");
  var toggleAutobuyInvestment = makeClicker("toggle2", "Auto Investment");
  var toggleAutobuyPrinter = makeClicker("toggle3", "Auto Printer");
  var toggleAutobuyCoinMint = makeClicker("toggle4", "Auto Coin Mint");
  var toggleAutobuyAlchemies = makeClicker("toggle5", "Auto Alchemy");
  var toggleAutobuyAccel = makeClicker("toggle6", "Auto Accelorator");
  var toggleAutobuyMult = makeClicker("toggle7", "Auto Multplier");
  var toggleAutobuyAccelBoost = makeClicker("toggle8", "Auto Accel. Boost");
  function setCoinBuyQuant(quant) {
    switch (quant) {
      case "coinone":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "cointen":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "coinhundred":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "cointhousand":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "coin10k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "coin100k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      default:
        console.error("invalid input");
        return;
    }
  }

  // src/buildings/diamond.ts
  var buyRefinery = makeClicker("buydiamond1", "Refineries");
  var buyCoalPlant = makeClicker("buydiamond2", "Coal Plant");
  var buyCoalRig = makeClicker("buydiamond3", "Coal Rig");
  var buyPikaxe = makeClicker("buydiamond4", "Pikaxe");
  var buyPandorasBox = makeClicker("buydiamond5", "Pandoras Box");
  var isRefineryBuyable = makeCheckIfAvalible("buydiamond1", 0 /* Bulding */);
  var isCoalPlantBuyable = makeCheckIfAvalible("buydiamond2", 0 /* Bulding */);
  var isCoalRigBuyable = makeCheckIfAvalible("buydiamond3", 0 /* Bulding */);
  var isPikaxeBuyable = makeCheckIfAvalible("buydiamond4", 0 /* Bulding */);
  var isPandorasBoxBuyable = makeCheckIfAvalible("buydiamond5", 0 /* Bulding */);
  var buyDiamondUpgrade1 = makeClicker("buycrystalupgrade1", "Diamond Upgrade 1");
  var buyDiamondUpgrade2 = makeClicker("buycrystalupgrade2", "Diamond Upgrade 2");
  var buyDiamondUpgrade3 = makeClicker("buycrystalupgrade3", "Diamond Upgrade 3");
  var buyDiamondUpgrade4 = makeClicker("buycrystalupgrade4", "Diamond Upgrade 4");
  var buyDiamondUpgrade5 = makeClicker("buycrystalupgrade5", "Diamond Upgrade 5");
  var isDiamondUpgrade1Automated = makeCheckIfAutomated("buycrystalupgrade1", 0 /* Pristige */);
  var isDiamondUpgrade2Automated = makeCheckIfAutomated("buycrystalupgrade2", 0 /* Pristige */);
  var isDiamondUpgrade3Automated = makeCheckIfAutomated("buycrystalupgrade3", 0 /* Pristige */);
  var isDiamondUpgrade4Automated = makeCheckIfAutomated("buycrystalupgrade4", 0 /* Pristige */);
  var isDiamondUpgrade5Automated = makeCheckIfAutomated("buycrystalupgrade5", 0 /* Pristige */);
  var toggleAutobuyRefinery = makeClicker("toggle10", "Auto Refineries");
  var toggleAutobuyCoalPlant = makeClicker("toggle11", "Auto Coal Plant");
  var toggleAutobuyCoalRig = makeClicker("toggle12", "Auto Coal Rig");
  var toggleAutobuyPickaxe = makeClicker("toggle13", "Auto Pikaxe");
  var toggleAutobuyPandoraBox = makeClicker("toggle14", "Auto Pandoras Boxes");
  var setAutoPrestige = makeSetAuto("prestigeamount", "Auto Prestige");
  var toggleAutoPrestige = makeClicker("toggle15", "Toggle Auto Prestige");
  var toggleAutoPrestigeMode = makeClicker("prestigeautotoggle", "Auto Prestige Mode Toggle");
  function isAutoPrestigeEnabled() {
    let elm = document.getElementById("toggle15");
    if (elm && elm.style.borderColor === "red") {
      return false;
    } else if (elm && elm.style.borderColor === "green") {
      return true;
    } else {
      console.error("Cannont find auto prestige button");
      return 0;
    }
  }
  function getAutoPrestigeMode() {
    let elm = document.getElementById("prestigeautotoggle");
    if (elm && elm.innerText === "Mode: AMOUNT") {
      return "amount";
    } else if (elm && elm.innerText === "Mode: TIME") {
      return "time";
    } else {
      console.error(`Either cannot reconzie the text, or cannot find the element.  Element obj: ${elm}`);
      return 0;
    }
  }
  function setDiamondBuyQuant(quant) {
    switch (quant) {
      case "crystalone":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystalten":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystalhundred":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystalthousand":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystal10k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "crystal100k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      default:
        console.error("invalid input");
        return;
    }
  }

  // src/buildings/mythos.ts
  var buyAugments = makeClicker("buymythos1", "Augments");
  var isAugmentsBuyable = makeCheckIfAvalible("buymythos1", 0 /* Bulding */);
  var toggleAutobuyAugments = makeClicker("toggle16", "Augments Auto Buy");
  var buyEnchantments = makeClicker("buymythos2", "Enchantments");
  var isEnchantmentsBuyable = makeCheckIfAvalible("buymythos2", 0 /* Bulding */);
  var toggleAutobuyEnchantments = makeClicker("toggle17", "Enchantmants Auto Buy");
  var buyWizards = makeClicker("buymythos3", "Wizards");
  var isWizardsBuyable = makeCheckIfAvalible("buymythos3", 0 /* Bulding */);
  var toggleAutobuyWizards = makeClicker("toggle18", "Wizards Auto Buy");
  var buyOracles = makeClicker("buymythos4", "Oracles");
  var isOraclesBuyable = makeCheckIfAvalible("buymythos4", 0 /* Bulding */);
  var togglAutobuyeOracles = makeClicker("toggle19", "Oracles Auto Buy");
  var buyGrandmasters = makeClicker("buymythos5", "Grandmasters");
  var isGrandmastersBuyable = makeCheckIfAvalible("buymythos5", 0 /* Bulding */);
  var toggleAutobuyGrandmasters = makeClicker("toggle20", "Grandmasters Auto Buy");
  var setAutoTranscend = makeSetAuto("transcendamount", "Auto Transcend");
  var toggleAutoTranscend = makeClicker("toggle21", "Toggle Auto Transcend");
  var toggleAutoTranscendeMode = makeClicker("transcendautotoggle", "Auto Transcend Mode Toggle");
  function isAutoTranscendEnabled() {
    let elm = document.getElementById("toggle20");
    if (elm && elm.style.borderColor === "red") {
      return false;
    } else if (elm && elm.style.borderColor === "green") {
      return true;
    } else {
      console.error("Cannont find auto Transcend button");
      return 0;
    }
  }
  function getAutoTranscendMode() {
    let elm = document.getElementById("transcendautotoggle");
    if (elm && elm.innerText === "Mode: AMOUNT") {
      return "amount";
    } else if (elm && elm.innerText === "Mode: TIME") {
      return "time";
    } else {
      console.error(`Either cannot reconzie the text, or cannot find the element.  Element obj: ${elm}`);
      return 0;
    }
  }
  function setMythosBuyQuant(quant) {
    switch (quant) {
      case "mythosone":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "mythosten":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "mythoshundred":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "mythosthousand":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "mythos10k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "mythos100k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      default:
        console.error("invalid input");
        return;
    }
  }

  // src/buildings/reincarnate.ts
  var buyProton = makeClicker("buyparticles1", "Proton");
  var isProtonbuyable = makeCheckIfAvalible("buyparticles1", 0 /* Bulding */);
  var toggleAutobuyProton = makeClicker("toggle22", "Proton Auto Buy");
  var buyElement = makeClicker("buyparticles2", "Element");
  var isElementbuyable = makeCheckIfAvalible("buyparticles2", 0 /* Bulding */);
  var toggleAutobuyElement = makeClicker("toggle23", "Element Auto Buy");
  var buyPulsar = makeClicker("buyparticles3", "Pulsars");
  var isPulsarbuyable = makeCheckIfAvalible("buyparticles3", 0 /* Bulding */);
  var toggleAutobuyPulsar = makeClicker("toggle24", "Pulsar Auto Buy");
  var buyQuasar = makeClicker("buyparticles4", "Quarsars");
  var isQuasarbuyable = makeCheckIfAvalible("buyparticles4", 0 /* Bulding */);
  var toggleAutobuyQuasar = makeClicker("toggle25", "Quasar Auto Buy");
  var buyGalacticNuclei = makeClicker("buyparticles5", "Galactic Nuclei");
  var isGalacticNucleibuyable = makeCheckIfAvalible("buyparticles5", 0 /* Bulding */);
  var toggleAutobuyGalacticNuclei = makeClicker("toggle26", "Galactic Nuclei Auto Buy");
  var setAutoParticle = makeSetAuto("reincarnationamount", "Auto Reincarnate");
  var toggleAutoParticle = makeClicker("toggle27", "Toggle Auto Reincarnate");
  var toggleAutoParticleMode = makeClicker("reincarnateautotoggle", "Auto Particle Mode Toggle");
  function isAutoParticleEnabled() {
    let elm = document.getElementById("toggle27");
    if (elm && elm.style.borderColor === "red") {
      return false;
    } else if (elm && elm.style.borderColor === "green") {
      return true;
    } else {
      console.error("Cannont find auto Particle button");
      return 0;
    }
  }
  function getAutoParticleMode() {
    let elm = document.getElementById("reincarnateautotoggle");
    if (elm && elm.innerText === "Mode: AMOUNT") {
      return "amount";
    } else if (elm && elm.innerText === "Mode: TIME") {
      return "time";
    } else {
      console.error(`Either cannot reconzie the text, or cannot find the element.  Element obj: ${elm}`);
      return 0;
    }
  }
  function setParticleBuyQuant(quant) {
    switch (quant) {
      case "particleone":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "particlesten":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "particlehundred":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "particlethousand":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "particle10k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "particle100k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      default:
        console.error("invalid input");
        return;
    }
  }

  // src/buildings/ascend.ts
  var buyDot = makeClicker("buyTesseracts1", "Dot");
  var isDotbuyable = makeCheckIfAvalible("buyTesseracts1", 0 /* Bulding */);
  var toggleAutobuyDot = makeClicker("tesseractAutoToggle1", "Auto Buy Dot");
  var buyVector = makeClicker("buyTesseracts2", "Vector");
  var isVectorbuyable = makeCheckIfAvalible("buyTesseracts2", 0 /* Bulding */);
  var toggleAutobuyVector = makeClicker("tesseractAutoToggle2", "Auto Buy Vector");
  var buyThreeSpace = makeClicker("buyTesseracts3", "Three-Space");
  var isThreeSpacebuyable = makeCheckIfAvalible("buyTesseracts3", 0 /* Bulding */);
  var toggleAutobuyThreeSpace = makeClicker("tesseractAutoToggle3", "Auto Buy Three-Space");
  var buyBentTime = makeClicker("buyTesseracts4", "Bent Time");
  var isBentTimebuyable = makeCheckIfAvalible("buyTesseracts4", 0 /* Bulding */);
  var toggleAutobuyBentTime = makeClicker("tesseractAutoToggle4", "Auto Buy Bent Time");
  var buyHilbertSpace = makeClicker("buyTesseracts5", "Hilbert Space");
  var isHilbertSpacebuyable = makeCheckIfAvalible("buyTesseracts5", 0 /* Bulding */);
  var toggleAutobuyHilbertSpace = makeClicker("tesseractAutoToggle5", "Auto Buy Hilbert Space");
  var setAutoBuyTess = makeSetAuto("tesseractAmount", "Auto Buy Tess");
  var toggleAutoBuyTess = makeClicker("tesseractautobuytoggle", "Toggle Auto Reincarnate");
  var toggleAutoTessBuyMode = makeClicker("tesseractautobuymode", "Auto Particle Mode Toggle");
  var constentUpgrade1 = makeClicker("buyConstantUpgrade1", "Constant Upgrade 1");
  var constentUpgrade2 = makeClicker("buyConstantUpgrade2", "Constant Upgrade 2");
  var constentUpgrade3 = makeClicker("buyConstantUpgrade3", "Constant Upgrade 3");
  var constentUpgrade4 = makeClicker("buyConstantUpgrade4", "Constant Upgrade 4");
  var constentUpgrade5 = makeClicker("buyConstantUpgrade5", "Constant Upgrade 5");
  var constentUpgrade6 = makeClicker("buyConstantUpgrade6", "Constant Upgrade 6");
  var constentUpgrade7 = makeClicker("buyConstantUpgrade7", "Constant Upgrade 7");
  var constentUpgrade8 = makeClicker("buyConstantUpgrade8", "Constant Upgrade 8");
  var constentUpgrade9 = makeClicker("buyConstantUpgrade9", "Constant Upgrade 9");
  var constentUpgrade10 = makeClicker("buyConstantUpgrade10", "Constant Upgrade 10");
  var isConstantUpgrade1Automated = makeCheckIfAutomated("buyConstantUpgrade1", 1 /* Ascend */);
  var isConstantUpgrade2Automated = makeCheckIfAutomated("buyConstantUpgrade2", 1 /* Ascend */);
  var isConstantUpgrade3Automated = makeCheckIfAutomated("buyConstantUpgrade3", 1 /* Ascend */);
  var isConstantUpgrade4Automated = makeCheckIfAutomated("buyConstantUpgrade4", 1 /* Ascend */);
  var isConstantUpgrade5Automated = makeCheckIfAutomated("buyConstantUpgrade5", 1 /* Ascend */);
  var isConstantUpgrade6Automated = makeCheckIfAutomated("buyConstantUpgrade6", 1 /* Ascend */);
  var isConstantUpgrade7Automated = makeCheckIfAutomated("buyConstantUpgrade7", 1 /* Ascend */);
  var isConstantUpgrade8Automated = makeCheckIfAutomated("buyConstantUpgrade8", 1 /* Ascend */);
  var isConstantUpgrade9Bought = makeCheckIfAutomated("buyConstantUpgrade9", 1 /* Ascend */);
  var isConstantUpgrade10Bought = makeCheckIfAutomated("buyConstantUpgrade10", 1 /* Ascend */);
  function isAutoTessBuldingEnabled() {
    let elm = document.getElementById("tesseractautobuytoggle");
    if (elm && elm.style.borderColor === "red") {
      return false;
    } else if (elm && elm.style.borderColor === "green") {
      return true;
    } else {
      console.error("Cannont find auto tess bulding buy button");
      return 0;
    }
  }
  function getAutoTessBuyMode() {
    let elm = document.getElementById("tesseractautobuymode");
    if (elm && elm.innerText === "Mode: AMOUNT") {
      return "amount";
    } else if (elm && elm.innerText === "Mode: PRECENTAGE") {
      return "precentage";
    } else {
      console.error(`Either cannot reconzie the text, or cannot find the element.  Element obj: ${elm}`);
      return 0;
    }
  }
  function setTessBuildQuant(quant) {
    switch (quant) {
      case "tesseractone":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "tesseractten":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "tesseracthundred":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "tesseractthousand":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "tesseract10k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      case "tesseract100k":
        var but = document.getElementById(quant);
        if (but) {
          but.click();
        } else {
          console.error(`could not find Quanity selector`);
        }
        return;
      default:
        console.error("invalid input");
        return;
    }
  }

  // src/upgrades/coin.ts
  var buyCoinUpgrade1 = makeClicker("upg1", "Coin Upgrade 1");
  var isCoinUpgrade1Buyable = makeCheckIfAvalible("upg1", 1 /* Upgrade */);
  var buyCoinUpgrade2 = makeClicker("upg2", "Coin Upgrade 2");
  var isCoinUpgrade2Buyable = makeCheckIfAvalible("upg2", 1 /* Upgrade */);
  var buyCoinUpgrade3 = makeClicker("upg3", "Coin Upgrade 3");
  var isCoinUpgrade3Buyable = makeCheckIfAvalible("upg3", 1 /* Upgrade */);
  var buyCoinUpgrade4 = makeClicker("upg4", "Coin Upgrade 4");
  var isCoinUpgrade4Buyable = makeCheckIfAvalible("upg4", 1 /* Upgrade */);
  var buyCoinUpgrade5 = makeClicker("upg5", "Coin Upgrade 5");
  var isCoinUpgrade5Buyable = makeCheckIfAvalible("upg5", 1 /* Upgrade */);
  var buyCoinUpgrade6 = makeClicker("upg6", "Coin Upgrade 6");
  var isCoinUpgrade6Buyable = makeCheckIfAvalible("upg6", 1 /* Upgrade */);
  var buyCoinUpgrade7 = makeClicker("upg7", "Coin Upgrade 7");
  var isCoinUpgrade7Buyable = makeCheckIfAvalible("upg7", 1 /* Upgrade */);
  var buyCoinUpgrade8 = makeClicker("upg8", "Coin Upgrade 8");
  var isCoinUpgrade8Buyable = makeCheckIfAvalible("upg8", 1 /* Upgrade */);
  var buyCoinUpgrade9 = makeClicker("upg9", "Coin Upgrade 9");
  var isCoinUpgrade9Buyable = makeCheckIfAvalible("upg9", 1 /* Upgrade */);
  var buyCoinUpgrade10 = makeClicker("upg10", "Coin Upgrade 10");
  var isCoinUpgrade10Buyable = makeCheckIfAvalible("upg10", 1 /* Upgrade */);
  var buyCoinUpgrade11 = makeClicker("upg11", "Coin Upgrade 11");
  var isCoinUpgrade11Buyable = makeCheckIfAvalible("upg10", 1 /* Upgrade */);
  var buyCoinUpgrade12 = makeClicker("upg12", "Coin Upgrade 12");
  var isCoinUpgrade12Buyable = makeCheckIfAvalible("upg11", 1 /* Upgrade */);
  var buyCoinUpgrade13 = makeClicker("upg13", "Coin Upgrade 13");
  var isCoinUpgrade13Buyable = makeCheckIfAvalible("upg12", 1 /* Upgrade */);
  var buyCoinUpgrade14 = makeClicker("upg14", "Coin Upgrade 14");
  var isCoinUpgrade14Buyable = makeCheckIfAvalible("upg13", 1 /* Upgrade */);
  var buyCoinUpgrade15 = makeClicker("upg15", "Coin Upgrade 15");
  var isCoinUpgrade15Buyable = makeCheckIfAvalible("upg14", 1 /* Upgrade */);
  var buyCoinUpgrade16 = makeClicker("upg16", "Coin Upgrade 16");
  var isCoinUpgrade16Buyable = makeCheckIfAvalible("upg15", 1 /* Upgrade */);
  var buyCoinUpgrade17 = makeClicker("upg17", "Coin Upgrade 17");
  var isCoinUpgrade17Buyable = makeCheckIfAvalible("upg16", 1 /* Upgrade */);
  var buyCoinUpgrade18 = makeClicker("upg18", "Coin Upgrade 18");
  var isCoinUpgrade18Buyable = makeCheckIfAvalible("upg17", 1 /* Upgrade */);
  var buyCoinUpgrade19 = makeClicker("upg19", "Coin Upgrade 19");
  var isCoinUpgrade19Buyable = makeCheckIfAvalible("upg18", 1 /* Upgrade */);
  var buyCoinUpgrade20 = makeClicker("upg20", "Coin Upgrade 20");
  var isCoinUpgrade20Buyable = makeCheckIfAvalible("upg19", 1 /* Upgrade */);
  var buyCoinUpgrade21 = makeClicker("upg121", "Coin Upgrade 21");
  var isCoinUpgrade21Buyable = makeCheckIfAvalible("upg121", 1 /* Upgrade */);
  var buyCoinUpgrade22 = makeClicker("upg122", "Coin Upgrade 22");
  var isCoinUpgrade22Buyable = makeCheckIfAvalible("upg122", 1 /* Upgrade */);
  var buyCoinUpgrade23 = makeClicker("upg123", "Coin Upgrade 23");
  var isCoinUpgrade23Buyable = makeCheckIfAvalible("upg123", 1 /* Upgrade */);
  var buyCoinUpgrade24 = makeClicker("upg124", "Coin Upgrade 24");
  var isCoinUpgrade24Buyable = makeCheckIfAvalible("upg124", 1 /* Upgrade */);
  var buyCoinUpgrade25 = makeClicker("upg125", "Coin Upgrade 25");
  var isCoinUpgrade25Buyable = makeCheckIfAvalible("upg125", 1 /* Upgrade */);
  var toggleCoinUpgradeAutoBuy = makeClicker("coinAutoUpgrade", "Coin Auto Upgrade");
  function getAutoUpgraderStatus() {
    let id = document.getElementById("coinAutoUpgrade");
    if (!id) {
      console.error(`Cannot find the coin auto upgrade button, or somethings is worng: ${id}`);
      return 0;
    } else if ((id == null ? void 0 : id.style.borderColor) === "red") {
      return false;
    } else if ((id == null ? void 0 : id.style.borderColor) === "green") {
      return true;
    }
  }

  // src/buyQuants.ts
  var coinBuyQuant = {
    one: "coinone",
    ten: "cointen",
    hundered: "coinhundred",
    onek: "cointhousand",
    tenk: "coin10k",
    hunderedk: "coin100k"
  };
  var diamondBuyQuant = {
    one: "crystalone",
    ten: "crystalten",
    hundered: "crystalhundred",
    onek: "crystalthousand",
    tenk: "crystal10k",
    hunderedk: "crystal100k"
  };
  var mythosBuyQuant = {
    one: "mythosone",
    ten: "mythosten",
    hundered: "mythoshundred",
    onek: "mythosthousand",
    tenk: "mythos10k",
    hunderedk: "mythos100k"
  };
  var reincarnateBuyQuant = {
    one: "particleone",
    ten: "particlesten",
    hundered: "particlehundred",
    onek: "particlethousand",
    tenk: "particle10k",
    hunderedk: "particle100k"
  };
  var ascendBuyQuant = {
    one: "tesseractone",
    ten: "tesseractten",
    hundered: "tesseracthundred",
    onek: "tesseractthousand",
    tenk: "tesseract10k",
    hunderedk: "tesseract100k"
  };
  return __toCommonJS(index_exports);
})();
