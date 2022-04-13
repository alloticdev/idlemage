// Game stuff

var gameData = {
    mana: 0,
    manaPerClick: 1,
    getScorePerSecond: function() {
        var manaPerSecond = 0;
        for (i = 0; i < summon.name.length; i++) {
            manaPerSecond += summon.income[i] * summon.count[i];
        }
        return manaPerSecond
    }
};

window.onload = function() {
    display.updateDisplay();
    display.updateSummon();
}



elements.book.onmousedown = function() {
    if (elements.book.classList.contains("b") != true) {return}
    gameData.mana += gameData.manaPerClick;
    display.updateDisplay();
}