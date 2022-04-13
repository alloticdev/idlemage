// summons

var summon = {
    name: [
        "Slime",
        "Fairy"
    ],
    description: [
        "Slimey creatures that arent very intellegent, generates 0.2 mana per second",
        "Small intellegent creatures that generate 1 mana per second"
    ],
    image: [
        "slime.png",
        "fairy.png"
    ],
    count: [0, 0],
    income: [
        0.2,
        1
    ],
    cost: [
        20,
        80
    ],


    // purchase summon
    purchase: function(index) {
        if (gameData.mana >= this.cost[index]) {
            let presssound = new Audio("assets/press.mp3");
            presssound.volume = 0.5;
            presssound.play();
            gameData.mana -= this.cost[index];
            this.count[index] += 1;
            this.cost[index] = Math.ceil(this.cost[index] * 1.10);
            display.updateDisplay();
            display.updateSummon();
        }
    }
}