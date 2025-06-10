import { makeClicker, makeCheckIfAvalible, Type } from "../utils"


export let buyCoinUpgrade1 = makeClicker("upg1", "Coin Upgrade 1");
export let isCoinUpgrade1Buyable = makeCheckIfAvalible("upg1", Type.Upgrade);

export let buyCoinUpgrade2 = makeClicker("upg2", "Coin Upgrade 2");
export let isCoinUpgrade2Buyable = makeCheckIfAvalible("upg2", Type.Upgrade);

export let buyCoinUpgrade3 = makeClicker("upg3", "Coin Upgrade 3");
export let isCoinUpgrade3Buyable = makeCheckIfAvalible("upg3", Type.Upgrade);

export let buyCoinUpgrade4 = makeClicker("upg4", "Coin Upgrade 4");
export let isCoinUpgrade4Buyable = makeCheckIfAvalible("upg4", Type.Upgrade);

export let buyCoinUpgrade5 = makeClicker("upg5", "Coin Upgrade 5");
export let isCoinUpgrade5Buyable = makeCheckIfAvalible("upg5", Type.Upgrade);

export let buyCoinUpgrade6 = makeClicker("upg6", "Coin Upgrade 6");
export let isCoinUpgrade6Buyable = makeCheckIfAvalible("upg6", Type.Upgrade);

export let buyCoinUpgrade7 = makeClicker("upg7", "Coin Upgrade 7");
export let isCoinUpgrade7Buyable = makeCheckIfAvalible("upg7", Type.Upgrade);

export let buyCoinUpgrade8 = makeClicker("upg8", "Coin Upgrade 8");
export let isCoinUpgrade8Buyable = makeCheckIfAvalible("upg8", Type.Upgrade);

export let buyCoinUpgrade9 = makeClicker("upg9", "Coin Upgrade 9");
export let isCoinUpgrade9Buyable = makeCheckIfAvalible("upg9", Type.Upgrade);

export let buyCoinUpgrade10 = makeClicker("upg10", "Coin Upgrade 10");
export let isCoinUpgrade10Buyable = makeCheckIfAvalible("upg10", Type.Upgrade);

export let buyCoinUpgrade11 = makeClicker("upg11", "Coin Upgrade 11");
export let isCoinUpgrade11Buyable = makeCheckIfAvalible("upg11", Type.Upgrade);

export let buyCoinUpgrade12 = makeClicker("upg12", "Coin Upgrade 12");
export let isCoinUpgrade12Buyable = makeCheckIfAvalible("upg12", Type.Upgrade);

export let buyCoinUpgrade13 = makeClicker("upg13", "Coin Upgrade 13");
export let isCoinUpgrade13Buyable = makeCheckIfAvalible("upg13", Type.Upgrade);

export let buyCoinUpgrade14 = makeClicker("upg14", "Coin Upgrade 14");
export let isCoinUpgrade14Buyable = makeCheckIfAvalible("upg14", Type.Upgrade);

export let buyCoinUpgrade15 = makeClicker("upg15", "Coin Upgrade 15");
export let isCoinUpgrade15Buyable = makeCheckIfAvalible("upg15", Type.Upgrade);

export let buyCoinUpgrade16 = makeClicker("upg16", "Coin Upgrade 16");
export let isCoinUpgrade16Buyable = makeCheckIfAvalible("upg16", Type.Upgrade);

export let buyCoinUpgrade17 = makeClicker("upg17", "Coin Upgrade 17");
export let isCoinUpgrade17Buyable = makeCheckIfAvalible("upg17", Type.Upgrade);

export let buyCoinUpgrade18 = makeClicker("upg18", "Coin Upgrade 18");
export let isCoinUpgrade18Buyable = makeCheckIfAvalible("upg18", Type.Upgrade);

export let buyCoinUpgrade19 = makeClicker("upg19", "Coin Upgrade 19");
export let isCoinUpgrade19Buyable = makeCheckIfAvalible("upg19", Type.Upgrade);

export let buyCoinUpgrade20 = makeClicker("upg20", "Coin Upgrade 20");
export let isCoinUpgrade20Buyable = makeCheckIfAvalible("upg20", Type.Upgrade);

export let buyCoinUpgrade21 = makeClicker("upg121", "Coin Upgrade 21");
export let isCoinUpgrade21Buyable = makeCheckIfAvalible("upg121", Type.Upgrade);

export let buyCoinUpgrade22 = makeClicker("upg122", "Coin Upgrade 22");
export let isCoinUpgrade22Buyable = makeCheckIfAvalible("upg122", Type.Upgrade);

export let buyCoinUpgrade23 = makeClicker("upg123", "Coin Upgrade 23");
export let isCoinUpgrade23Buyable = makeCheckIfAvalible("upg123", Type.Upgrade);

export let buyCoinUpgrade24 = makeClicker("upg124", "Coin Upgrade 24");
export let isCoinUpgrade24Buyable = makeCheckIfAvalible("upg124", Type.Upgrade);

export let buyCoinUpgrade25 = makeClicker("upg125", "Coin Upgrade 25");
export let isCoinUpgrade25Buyable = makeCheckIfAvalible("upg125", Type.Upgrade);

export let toggleCoinUpgradeAutoBuy = makeClicker("coinAutoUpgrade", "Coin Auto Upgrade");

export function getAutoUpgraderStatus() {
    let id: HTMLButtonElement = document.getElementById("coinAutoUpgrade") as HTMLButtonElement;

    if (!id) {
        console.error(`Cannot find the coin auto upgrade button, or somethings is worng: ${id}`);
        return 0;
    } else if (id?.style.borderColor === "red") {
        return false;
    } else if (id?.style.borderColor === "green") {
        return true;
    }
}