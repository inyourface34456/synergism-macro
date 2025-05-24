export function makeClicker(id: string, disId: string) {
  const element = document.getElementById(id);
  return function () {
    if (element) {
      element.click();
    } else {
      console.error(`cannot find the ${disId} button"`);
    }
  };
}

export let coinBuyQuant = {
    one: "coinone",
    ten: "cointen",
    hundered: "coinhundred",
    onek: "cointhousand",
    tenk: "coin10k",
    hunderedk: "coin100k"
};

export let diamondBuyQuant = {
    one: "crystalone",
    ten: "crystalten",
    hundered: "crystalhundred",
    onek: "crystalthousand",
    tenk: "crystal10k",
    hunderedk: "crystal100k"
};