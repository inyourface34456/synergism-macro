import {makeClicker, makeCheckIfAvalible, makeSetAuto, makeCheckIfAutomated, Layer, Type} from "../utils"

type buyQuant = "crystalone" | "crystalten" | "crystalhundred" | "crystalthousand" | "crystal10k" | "crystal100k";

export let buyRefinery = makeClicker("buydiamond1", "Refineries");
export let buyCoalPlant = makeClicker("buydiamond2", "Coal Plant");
export let buyCoalRig = makeClicker("buydiamond3", "Coal Rig");
export let buyPikaxe = makeClicker("buydiamond4", "Pikaxe");
export let buyPandorasBox = makeClicker("buydiamond5", "Pandoras Box");
export let isRefineryBuyable = makeCheckIfAvalible("buydiamond1", Type.Bulding);
export let isCoalPlantBuyable = makeCheckIfAvalible("buydiamond2", Type.Bulding);
export let isCoalRigBuyable = makeCheckIfAvalible("buydiamond3", Type.Bulding);
export let isPikaxeBuyable = makeCheckIfAvalible("buydiamond4", Type.Bulding);
export let isPandorasBoxBuyable = makeCheckIfAvalible("buydiamond5", Type.Bulding);
export let buyPrestigeUpgrade1 = makeClicker("buycrystalupgrade1", "Diamond Upgrade 1")
export let buyPrestigeUpgrade2 = makeClicker("buycrystalupgrade2", "Diamond Upgrade 2")
export let buyPrestigeUpgrade3 = makeClicker("buycrystalupgrade3", "Diamond Upgrade 3")
export let buyPrestigeUpgrade4 = makeClicker("buycrystalupgrade4", "Diamond Upgrade 4")
export let buyPrestigeUpgrade5 = makeClicker("buycrystalupgrade5", "Diamond Upgrade 5")
export let isPrestigeUpgrade1Automated = makeCheckIfAutomated("buycrystalupgrade1", Layer.Pristige);
export let isPrestigeUpgrade2Automated = makeCheckIfAutomated("buycrystalupgrade2", Layer.Pristige);
export let isPrestigeUpgrade3Automated = makeCheckIfAutomated("buycrystalupgrade3", Layer.Pristige);
export let isPrestigeUpgrade4Automated = makeCheckIfAutomated("buycrystalupgrade4", Layer.Pristige);
export let isPrestigeUpgrade5Automated = makeCheckIfAutomated("buycrystalupgrade5", Layer.Pristige);
export let toggleAutobuyRefinery = makeClicker("toggle10", "Auto Refineries");
export let toggleAutobuyCoalPlant = makeClicker("toggle11", "Auto Coal Plant");
export let toggleAutobuyCoalRig = makeClicker("toggle12", "Auto Coal Rig");
export let toggleAutobuyPickaxe = makeClicker("toggle13", "Auto Pikaxe");
export let toggleAutobuyPandoraBox = makeClicker("toggle14", "Auto Pandoras Boxes");
export let setAutoPrestige  = makeSetAuto("prestigeamount", "Auto Prestige");
export let toggleAutoPrestige = makeClicker("toggle15", "Toggle Auto Prestige");
export let toggleAutoPrestigeMode = makeClicker("prestigeautotoggle", "Auto Prestige Mode Toggle");


export function isAutoPrestigeEnabled() {
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

export function getAutoPrestigeMode() {
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

export function setDiamondBuyQuant(quant: buyQuant) {
    switch (quant) {
        case "crystalone":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "crystalten":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "crystalhundred":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "crystalthousand":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "crystal10k":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "crystal100k":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        default:
            console.error("invalid input")
            return;
    }
}