// visuals

var display = {
    displayMana: document.getElementById("spanmana"),
    displayManaPerSecond: document.getElementById("spanmanapersecond"),
    displayManaPerClick: document.getElementById("spanmanaperclick"),


    updateDisplay: function() {
        this.displayMana.innerHTML = Math.floor(Math.ceil(gameData.mana));
        this.displayManaPerSecond.innerHTML = gameData.getScorePerSecond().toFixed(1);
        this.displayManaPerClick.innerHTML = gameData.manaPerClick.toFixed(1);
    },

    updateSummon: function() {
        document.getElementById("summonsTab").innerHTML = "";
        for (i = 0; i < summon.name.length; i++) {
            document.getElementById("summonsTab").innerHTML += '<table class="shopButton unselectable" onclick="summon.purchase('+i+')"><tr><td id="image"><img src="assets/'+summon.image[i]+'"></td><td id="nameAndCost"><img src="assets/asset_indev_mana.png" class="a"><p>'+summon.name[i]+'</p><p id="spancost"><span>'+summon.cost[i]+'</span></p></td><td id="amount"><span>'+summon.count[i]+'</span></td></tr></table>'
        }
    }
};

book.addEventListener("animationend", function() {
    book.classList.add("b");
}, false);



strt.onmousedown = function() {
    if (book.classList.contains("b") != true) {
        let startmenu = document.getElementById("startmenu")
        let leftmain = document.getElementById("leftmain")
        book.classList.add("a");
        booksound.play();
        startmenu.classList.add("fadeoutc")
        startmenu.addEventListener("animationend", function() {
           startmenu.classList.add("hidden");
           leftmain.classList.remove("hidden")
           leftmain.classList.add("fadeinc")
        }, false);
        }
};