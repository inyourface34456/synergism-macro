let coin1 = document.getElementById("buycoin1");

export function buyWorker() {
    if (coin1) {
        coin1.click()
    } else {
        console.log("Cannot find worker button");
    }
}