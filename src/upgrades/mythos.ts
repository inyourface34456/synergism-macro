import { makeClicker, makeCheckIfAvalible, Type } from "../utils"

export let buyMythosUpgrade1 = makeClicker("upg41", "Mythos Upgrade 1");
export let isMythosUpgrade1Buyable = makeCheckIfAvalible("upg41", Type.Upgrade);

export let buyMythosUpgrade2 = makeClicker("upg42", "Mythos Upgrade 2");
export let isMythosUpgrade2Buyable = makeCheckIfAvalible("upg42", Type.Upgrade);

export let buyMythosUpgrade3 = makeClicker("upg43", "Mythos Upgrade 3");
export let isMythosUpgrade3Buyable = makeCheckIfAvalible("upg43", Type.Upgrade);

export let buyMythosUpgrade4 = makeClicker("upg44", "Mythos Upgrade 4");
export let isMythosUpgrade4Buyable = makeCheckIfAvalible("upg44", Type.Upgrade);

export let buyMythosUpgrade5 = makeClicker("upg45", "Mythos Upgrade 5");
export let isMythosUpgrade5Buyable = makeCheckIfAvalible("upg45", Type.Upgrade);

export let buyMythosUpgrade6 = makeClicker("upg46", "Mythos Upgrade 6");
export let isMythosUpgrade6Buyable = makeCheckIfAvalible("upg46", Type.Upgrade);

export let buyMythosUpgrade7 = makeClicker("upg47", "Mythos Upgrade 7");
export let isMythosUpgrade7Buyable = makeCheckIfAvalible("upg47", Type.Upgrade);

export let buyMythosUpgrade8 = makeClicker("upg48", "Mythos Upgrade 8");
export let isMythosUpgrade8Buyable = makeCheckIfAvalible("upg48", Type.Upgrade);

export let buyMythosUpgrade9 = makeClicker("upg49", "Mythos Upgrade 9");
export let isMythosUpgrade9Buyable = makeCheckIfAvalible("upg49", Type.Upgrade);

export let buyMythosUpgrade10 = makeClicker("upg50", "Mythos Upgrade 10");
export let isMythosUpgrade10Buyable = makeCheckIfAvalible("upg50", Type.Upgrade);

export let buyMythosUpgrade11 = makeClicker("upg51", "Mythos Upgrade 11");
export let isMythosUpgrade11Buyable = makeCheckIfAvalible("upg51", Type.Upgrade);

export let buyMythosUpgrade12 = makeClicker("upg52", "Mythos Upgrade 12");
export let isMythosUpgrade12Buyable = makeCheckIfAvalible("upg52", Type.Upgrade);

export let buyMythosUpgrade13 = makeClicker("upg53", "Mythos Upgrade 13");
export let isMythosUpgrade13Buyable = makeCheckIfAvalible("upg53", Type.Upgrade);

export let buyMythosUpgrade14 = makeClicker("upg54", "Mythos Upgrade 14");
export let isMythosUpgrade14Buyable = makeCheckIfAvalible("upg54", Type.Upgrade);

export let buyMythosUpgrade15 = makeClicker("upg55", "Mythos Upgrade 15");
export let isMythosUpgrade15Buyable = makeCheckIfAvalible("upg55", Type.Upgrade);

export let buyMythosUpgrade16 = makeClicker("upg56", "Mythos Upgrade 16");
export let isMythosUpgrade16Buyable = makeCheckIfAvalible("upg56", Type.Upgrade);

export let buyMythosUpgrade17 = makeClicker("upg57", "Mythos Upgrade 17");
export let isMythosUpgrade17Buyable = makeCheckIfAvalible("upg57", Type.Upgrade);

export let buyMythosUpgrade18 = makeClicker("upg58", "Mythos Upgrade 18");
export let isMythosUpgrade18Buyable = makeCheckIfAvalible("upg58", Type.Upgrade);

export let buyMythosUpgrade19 = makeClicker("upg59", "Mythos Upgrade 19");
export let isMythosUpgrade19Buyable = makeCheckIfAvalible("upg59", Type.Upgrade);

export let buyMythosUpgrade20 = makeClicker("upg60", "Mythos Upgrade 20");
export let isMythosUpgrade20Buyable = makeCheckIfAvalible("upg60", Type.Upgrade);

export let toggleMythosUpgradeAutoBuy = makeClicker("transcendAutoUpgrade", "Mythos Auto Upgrade");

export function getMythosAutoUpgraderStatus() {
    let id: HTMLButtonElement = document.getElementById("transcendAutoUpgrade") as HTMLButtonElement;

    if (!id) {
        console.error(`Cannot find the Mythos auto upgrade button, or somethings is worng: ${id}`);
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