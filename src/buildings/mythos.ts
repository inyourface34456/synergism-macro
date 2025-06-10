import {makeClicker, makeCheckIfAvalible, makeSetAuto, Type} from "../utils"

type buyQuant = "mythosone" | "mythosten" | "mythoshundred" | "mythosthousand" | "mythos10k" | "mythos100k";

export let buyAugments = makeClicker("buymythos1", "Augments");
export let isAugmentsBuyable = makeCheckIfAvalible("buymythos1", Type.Bulding);
export let toggleAutobuyAugments = makeClicker("toggle16", "Augments Auto Buy");
export let buyEnchantments = makeClicker("buymythos2", "Enchantments");
export let isEnchantmentsBuyable = makeCheckIfAvalible("buymythos2", Type.Bulding);
export let toggleAutobuyEnchantments = makeClicker("toggle17", "Enchantmants Auto Buy");
export let buyWizards = makeClicker("buymythos3", "Wizards");
export let isWizardsBuyable = makeCheckIfAvalible("buymythos3", Type.Bulding);
export let toggleAutobuyWizards = makeClicker("toggle18", "Wizards Auto Buy");
export let buyOracles = makeClicker("buymythos4", "Oracles");
export let isOraclesBuyable = makeCheckIfAvalible("buymythos4", Type.Bulding);
export let togglAutobuyeOracles = makeClicker("toggle19", "Oracles Auto Buy");
export let buyGrandmasters = makeClicker("buymythos5", "Grandmasters");
export let isGrandmastersBuyable = makeCheckIfAvalible("buymythos5", Type.Bulding);
export let toggleAutobuyGrandmasters = makeClicker("toggle20", "Grandmasters Auto Buy");
export let setAutoTranscend = makeSetAuto("transcendamount", "Auto Transcend");
export let toggleAutoTranscend = makeClicker("toggle21", "Toggle Auto Transcend");
export let toggleAutoTranscendeMode = makeClicker("transcendautotoggle", "Auto Transcend Mode Toggle");

export function isAutoTranscendEnabled() {
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

export function getAutoTranscendMode() {
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

export function setMythosBuyQuant(quant: buyQuant) {
    switch (quant) {
        case "mythosone":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;
        case "mythosten":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "mythoshundred":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "mythosthousand":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "mythos10k":
            var but = document.getElementById(quant);
            
            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }
            
            return;
        case "mythos100k":
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