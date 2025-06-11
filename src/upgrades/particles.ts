import { makeClicker, makeCheckIfAvalible, Type } from "../utils"

export let buyParticleUpgrade1 = makeClicker("upg61", "Particle Upgrade 1");
export let isParticleUpgrade1Buyable = makeCheckIfAvalible("upg61", Type.Upgrade);

export let buyParticleUpgrade2 = makeClicker("upg62", "Particle Upgrade 2");
export let isParticleUpgrade2Buyable = makeCheckIfAvalible("upg62", Type.Upgrade);

export let buyParticleUpgrade3 = makeClicker("upg63", "Particle Upgrade 3");
export let isParticleUpgrade3Buyable = makeCheckIfAvalible("upg63", Type.Upgrade);

export let buyParticleUpgrade4 = makeClicker("upg64", "Particle Upgrade 4");
export let isParticleUpgrade4Buyable = makeCheckIfAvalible("upg64", Type.Upgrade);

export let buyParticleUpgrade5 = makeClicker("upg65", "Particle Upgrade 5");
export let isParticleUpgrade5Buyable = makeCheckIfAvalible("upg65", Type.Upgrade);

export let buyParticleUpgrade6 = makeClicker("upg66", "Particle Upgrade 6");
export let isParticleUpgrade6Buyable = makeCheckIfAvalible("upg66", Type.Upgrade);

export let buyParticleUpgrade7 = makeClicker("upg67", "Particle Upgrade 7");
export let isParticleUpgrade7Buyable = makeCheckIfAvalible("upg67", Type.Upgrade);

export let buyParticleUpgrade8 = makeClicker("upg68", "Particle Upgrade 8");
export let isParticleUpgrade8Buyable = makeCheckIfAvalible("upg68", Type.Upgrade);

export let buyParticleUpgrade9 = makeClicker("upg69", "Particle Upgrade 9");
export let isParticleUpgrade9Buyable = makeCheckIfAvalible("upg69", Type.Upgrade);

export let buyParticleUpgrade10 = makeClicker("upg70", "Particle Upgrade 10");
export let isParticleUpgrade10Buyable = makeCheckIfAvalible("upg70", Type.Upgrade);

export let buyParticleUpgrade11 = makeClicker("upg71", "Particle Upgrade 11");
export let isParticleUpgrade11Buyable = makeCheckIfAvalible("upg71", Type.Upgrade);

export let buyParticleUpgrade12 = makeClicker("upg72", "Particle Upgrade 12");
export let isParticleUpgrade12Buyable = makeCheckIfAvalible("upg72", Type.Upgrade);

export let buyParticleUpgrade13 = makeClicker("upg73", "Particle Upgrade 13");
export let isParticleUpgrade13Buyable = makeCheckIfAvalible("upg73", Type.Upgrade);

export let buyParticleUpgrade14 = makeClicker("upg74", "Particle Upgrade 14");
export let isParticleUpgrade14Buyable = makeCheckIfAvalible("upg74", Type.Upgrade);

export let buyParticleUpgrade15 = makeClicker("upg75", "Particle Upgrade 15");
export let isParticleUpgrade15Buyable = makeCheckIfAvalible("upg75", Type.Upgrade);

export let buyParticleUpgrade16 = makeClicker("upg76", "Particle Upgrade 16");
export let isParticleUpgrade16Buyable = makeCheckIfAvalible("upg76", Type.Upgrade);

export let buyParticleUpgrade17 = makeClicker("upg77", "Particle Upgrade 17");
export let isParticleUpgrade17Buyable = makeCheckIfAvalible("upg77", Type.Upgrade);

export let buyParticleUpgrade18 = makeClicker("upg78", "Particle Upgrade 18");
export let isParticleUpgrade18Buyable = makeCheckIfAvalible("upg78", Type.Upgrade);

export let buyParticleUpgrade19 = makeClicker("upg79", "Particle Upgrade 19");
export let isParticleUpgrade19Buyable = makeCheckIfAvalible("upg79", Type.Upgrade);

export let buyParticleUpgrade20 = makeClicker("upg80", "Particle Upgrade 20");
export let isParticleUpgrade20Buyable = makeCheckIfAvalible("upg80", Type.Upgrade);

export let toggleParticleUpgradeAutoBuy = makeClicker("reincarnateAutoUpgrade", "Particle Auto Upgrade");

export function getParticleAutoUpgraderStatus() {
    let id: HTMLButtonElement = document.getElementById("reincarnateAutoUpgrade") as HTMLButtonElement;

    if (!id) {
        console.error(`Cannot find the Particle auto upgrade button, or somethings is worng: ${id}`);
        return 0;
    } else if (id?.style.borderColor === "red") {
        return false;
    } else if (id?.style.borderColor === "green") {
        return true;
    }
}