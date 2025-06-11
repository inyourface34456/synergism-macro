import { makeClicker, makeCheckIfAvalible, Type } from "../utils"

export let buyGeneratorUpgrade1 = makeClicker("upg101", "Generator Upgrade 1");
export let isGeneratorUpgrade1Buyable = makeCheckIfAvalible("upg101", Type.Upgrade);

export let buyGeneratorUpgrade2 = makeClicker("upg102", "Generator Upgrade 2");
export let isGeneratorUpgrade2Buyable = makeCheckIfAvalible("upg102", Type.Upgrade);

export let buyGeneratorUpgrade3 = makeClicker("upg103", "Generator Upgrade 3");
export let isGeneratorUpgrade3Buyable = makeCheckIfAvalible("upg103", Type.Upgrade);

export let buyGeneratorUpgrade4 = makeClicker("upg104", "Generator Upgrade 4");
export let isGeneratorUpgrade4Buyable = makeCheckIfAvalible("upg104", Type.Upgrade);

export let buyGeneratorUpgrade5 = makeClicker("upg105", "Generator Upgrade 5");
export let isGeneratorUpgrade5Buyable = makeCheckIfAvalible("upg105", Type.Upgrade);

export let buyGeneratorUpgrade6 = makeClicker("upg106", "Generator Upgrade 6");
export let isGeneratorUpgrade6Buyable = makeCheckIfAvalible("upg106", Type.Upgrade);

export let buyGeneratorUpgrade7 = makeClicker("upg107", "Generator Upgrade 7");
export let isGeneratorUpgrade7Buyable = makeCheckIfAvalible("upg107", Type.Upgrade);

export let buyGeneratorUpgrade8 = makeClicker("upg108", "Generator Upgrade 8");
export let isGeneratorUpgrade8Buyable = makeCheckIfAvalible("upg108", Type.Upgrade);

export let buyGeneratorUpgrade9 = makeClicker("upg109", "Generator Upgrade 9");
export let isGeneratorUpgrade9Buyable = makeCheckIfAvalible("upg109", Type.Upgrade);

export let buyGeneratorUpgrade10 = makeClicker("upg110", "Generator Upgrade 10");
export let isGeneratorUpgrade10Buyable = makeCheckIfAvalible("upg110", Type.Upgrade);

export let buyGeneratorUpgrade11 = makeClicker("upg111", "Generator Upgrade 11");
export let isGeneratorUpgrade11Buyable = makeCheckIfAvalible("upg111", Type.Upgrade);

export let buyGeneratorUpgrade12 = makeClicker("upg112", "Generator Upgrade 12");
export let isGeneratorUpgrade12Buyable = makeCheckIfAvalible("upg112", Type.Upgrade);

export let buyGeneratorUpgrade13 = makeClicker("upg113", "Generator Upgrade 13");
export let isGeneratorUpgrade13Buyable = makeCheckIfAvalible("upg113", Type.Upgrade);

export let buyGeneratorUpgrade14 = makeClicker("upg114", "Generator Upgrade 14");
export let isGeneratorUpgrade14Buyable = makeCheckIfAvalible("upg114", Type.Upgrade);

export let buyGeneratorUpgrade15 = makeClicker("upg115", "Generator Upgrade 15");
export let isGeneratorUpgrade15Buyable = makeCheckIfAvalible("upg115", Type.Upgrade);

export let buyGeneratorUpgrade16 = makeClicker("upg116", "Generator Upgrade 16");
export let isGeneratorUpgrade16Buyable = makeCheckIfAvalible("upg116", Type.Upgrade);

export let buyGeneratorUpgrade17 = makeClicker("upg117", "Generator Upgrade 17");
export let isGeneratorUpgrade17Buyable = makeCheckIfAvalible("upg117", Type.Upgrade);

export let buyGeneratorUpgrade18 = makeClicker("upg118", "Generator Upgrade 18");
export let isGeneratorUpgrade18Buyable = makeCheckIfAvalible("upg118", Type.Upgrade);

export let buyGeneratorUpgrade19 = makeClicker("upg119", "Generator Upgrade 19");
export let isGeneratorUpgrade19Buyable = makeCheckIfAvalible("upg119", Type.Upgrade);

export let buyGeneratorUpgrade20 = makeClicker("upg120", "Generator Upgrade 20");
export let isGeneratorUpgrade20Buyable = makeCheckIfAvalible("upg120", Type.Upgrade);

export let toggleGeneratorUpgradeAutoBuy = makeClicker("generatorsAutoUpgrade", "Generator Auto Upgrade");

export function getGeneratorAutoUpgraderStatus() {
    let id: HTMLButtonElement = document.getElementById("generatorsAutoUpgrade") as HTMLButtonElement;

    if (!id) {
        console.error(`Cannot find the Generator auto upgrade button, or somethings is worng: ${id}`);
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