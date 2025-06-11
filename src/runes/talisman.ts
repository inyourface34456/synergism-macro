import {makeClicker} from "../utils"

type TaliBuyQuant = "talismanTen" | "talismanTwentyFive" | "talismanFifty" | "talismanHundred"

export let buyTalismanShard = makeClicker("buyTalismanItem1", "Talisman Fragment");
export let buyCommonShard = makeClicker("buyTalismanItem2", "Common Shard");
export let buyUncommonShard = makeClicker("buyTalismanItem3", "Uncommon Shard");
export let buyRareShard = makeClicker("buyTalismanItem4", "Rare Shard");
export let buyEpicShard = makeClicker("buyTalismanItem5", "Epic Shard");
export let buyLegendaryShard = makeClicker("buyTalismanItem6", "Lengendary Shard");
export let buyMythicalShard = makeClicker("buyTalismanItem7", "Mythical Shard");
export let buyAllShards = makeClicker("buyTalismanAll", "Buy All");

export let fotiftyExemption = makeClicker("leveluptalisman1", "Fortify Exemption");
export let enhanceExemption = makeClicker("enhancetalisman1", "Enhance Exemption");
export let fotiftyChronos = makeClicker("leveluptalisman2", "Fortify Chronos");
export let enhanceChronos = makeClicker("enhancetalisman2", "Enhance Chronos");
export let fotiftyMidas = makeClicker("leveluptalisman3", "Fortify Midas");
export let enhanceMidas = makeClicker("enhancetalisman3", "Enhance Midas");
export let fotiftyMetaphysics = makeClicker("leveluptalisman4", "Fortify Metaphysics");
export let enhanceMetaphysics = makeClicker("enhancetalisman4", "Enhance Metaphysics");
export let fotiftyPolymath = makeClicker("leveluptalisman5", "Fortify Polymath");
export let enhancePolymath = makeClicker("enhancetalisman5", "Enhance Polymath");
export let fotiftyMortuusEst = makeClicker("leveluptalisman6", "Fortify Mortuus Est");
export let enhanceMortuusEst = makeClicker("enhancetalisman6", "Enhance Mortuus Est");
export let fotiftyPlastic = makeClicker("leveluptalisman7", "Fortify Plastic");
export let enhancePlastic = makeClicker("enhancetalisman7", "Enhance Plastic");

export let toggleAutoEnhance = makeClicker("toggleautoenhance", "Auto Fortify");
export let toggleAutoFortify = makeClicker("toggleautofortify", "Auto Enhance");

export function getAutoEnhanceStatus() {
    let id: HTMLButtonElement = document.getElementById("toggleautoenhance") as HTMLButtonElement;

    if (!id) {
        console.error(`Cannot find the Auto Enhance button, or somethings is worng: ${id}`);
        return 0;
    } else if (id?.style.borderColor === "red") {
        return false;
    } else if (id?.style.borderColor === "green") {
        return true;
    } else {
        console.error(`color is not red or green, color is ${id?.style.borderColor}`);
        return 0;
    }
}

export function getAutoFortifyStatus() {
    let id: HTMLButtonElement = document.getElementById("toggleautofortify") as HTMLButtonElement;

    if (!id) {
        console.error(`Cannot find the Auto Fortify button, or somethings is worng: ${id}`);
        return 0;
    } else if (id?.style.borderColor === "red") {
        return false;
    } else if (id?.style.borderColor === "green") {
        return true;
    } else {
        console.error(`color is not red or green, color is ${id?.style.borderColor}`);
        return 0;
    }
}

export function setTalismanBuildQuant(quant: TaliBuyQuant) {
    switch (quant) {
        case "talismanTen":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;

        case "talismanTwentyFive":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;

        case "talismanFifty":
            var but = document.getElementById(quant);

            if (but) {
                but.click()
            } else {
                console.error(`could not find Quanity selector`)
            }

            return;

        case "talismanHundred":
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