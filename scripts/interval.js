// intervals

var mainGameLoop = setInterval (function() {
    gameData.mana += gameData.getScorePerSecond();
    display.updateDisplay();
}, 1000);