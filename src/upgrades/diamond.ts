import { makeClicker, makeCheckIfAvalible, Type } from "../utils"

export let buyDiamondUpgrade1 = makeClicker("upg21", "Diamond Upgrade 1");
export let isDiamondUpgrade1Buyable = makeCheckIfAvalible("upg21", Type.Upgrade);

export let buyDiamondUpgrade2 = makeClicker("upg22", "Diamond Upgrade 2");
export let isDiamondUpgrade2Buyable = makeCheckIfAvalible("upg22", Type.Upgrade);

export let buyDiamondUpgrade3 = makeClicker("upg23", "Diamond Upgrade 3");
export let isDiamondUpgrade3Buyable = makeCheckIfAvalible("upg23", Type.Upgrade);

export let buyDiamondUpgrade4 = makeClicker("upg24", "Diamond Upgrade 4");
export let isDiamondUpgrade4Buyable = makeCheckIfAvalible("upg24", Type.Upgrade);

export let buyDiamondUpgrade5 = makeClicker("upg25", "Diamond Upgrade 5");
export let isDiamondUpgrade5Buyable = makeCheckIfAvalible("upg25", Type.Upgrade);

export let buyDiamondUpgrade6 = makeClicker("upg26", "Diamond Upgrade 6");
export let isDiamondUpgrade6Buyable = makeCheckIfAvalible("upg26", Type.Upgrade);

export let buyDiamondUpgrade7 = makeClicker("upg27", "Diamond Upgrade 7");
export let isDiamondUpgrade7Buyable = makeCheckIfAvalible("upg27", Type.Upgrade);

export let buyDiamondUpgrade8 = makeClicker("upg28", "Diamond Upgrade 8");
export let isDiamondUpgrade8Buyable = makeCheckIfAvalible("upg28", Type.Upgrade);

export let buyDiamondUpgrade9 = makeClicker("upg29", "Diamond Upgrade 9");
export let isDiamondUpgrade9Buyable = makeCheckIfAvalible("upg29", Type.Upgrade);

export let buyDiamondUpgrade10 = makeClicker("upg30", "Diamond Upgrade 10");
export let isDiamondUpgrade10Buyable = makeCheckIfAvalible("upg30", Type.Upgrade);

export let buyDiamondUpgrade11 = makeClicker("upg31", "Diamond Upgrade 11");
export let isDiamondUpgrade11Buyable = makeCheckIfAvalible("upg31", Type.Upgrade);

export let buyDiamondUpgrade12 = makeClicker("upg32", "Diamond Upgrade 12");
export let isDiamondUpgrade12Buyable = makeCheckIfAvalible("upg32", Type.Upgrade);

export let buyDiamondUpgrade13 = makeClicker("upg33", "Diamond Upgrade 13");
export let isDiamondUpgrade13Buyable = makeCheckIfAvalible("upg33", Type.Upgrade);

export let buyDiamondUpgrade14 = makeClicker("upg34", "Diamond Upgrade 14");
export let isDiamondUpgrade14Buyable = makeCheckIfAvalible("upg34", Type.Upgrade);

export let buyDiamondUpgrade15 = makeClicker("upg35", "Diamond Upgrade 15");
export let isDiamondUpgrade15Buyable = makeCheckIfAvalible("upg35", Type.Upgrade);

export let buyDiamondUpgrade16 = makeClicker("upg36", "Diamond Upgrade 16");
export let isDiamondUpgrade16Buyable = makeCheckIfAvalible("upg36", Type.Upgrade);

export let buyDiamondUpgrade17 = makeClicker("upg37", "Diamond Upgrade 17");
export let isDiamondUpgrade17Buyable = makeCheckIfAvalible("upg37", Type.Upgrade);

export let buyDiamondUpgrade18 = makeClicker("upg38", "Diamond Upgrade 18");
export let isDiamondUpgrade18Buyable = makeCheckIfAvalible("upg38", Type.Upgrade);

export let buyDiamondUpgrade19 = makeClicker("upg39", "Diamond Upgrade 19");
export let isDiamondUpgrade19Buyable = makeCheckIfAvalible("upg39", Type.Upgrade);

export let buyDiamondUpgrade20 = makeClicker("upg40", "Diamond Upgrade 20");
export let isDiamondUpgrade20Buyable = makeCheckIfAvalible("upg40", Type.Upgrade);

export let toggleDiamondUpgradeAutoBuy = makeClicker("prestigeAutoUpgrade", "Diamond Auto Upgrade");

export function getDiamondAutoUpgraderStatus() {
    let id: HTMLButtonElement = document.getElementById("prestigeAutoUpgrade") as HTMLButtonElement;

    if (!id) {
        console.error(`Cannot find the Diamond auto upgrade button, or somethings is worng: ${id}`);
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