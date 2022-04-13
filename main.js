var ver = 0001;

// Sounds and visuals

var book = document.getElementById("book");
var strt = document.getElementById("strt")

var booksound = new Audio("assets/book.mp3")
booksound.volume = 0.5;
var glowsound = new Audio("assets/glow.wav")


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

window.onload = function() {
    display.updateDisplay();
    display.updateSummon();
}

var elements = {
    book: document.getElementById("book")
}

var summon = {
    name: [
        "Slime",
        "Fairy"
    ],
    description: [
        "Slimey Creatures that arent very intellegent, generates 0.2 mana per second",
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

    purchase: function(index) {
        if (gameData.mana >= this.cost[index]) {
            let presssound = new Audio("assets/press.mp3")
            presssound.volume = 0.5;
            presssound.play()
            gameData.mana -= this.cost[index];
            this.count[index] += 1;
            this.cost[index] = Math.ceil(this.cost[index] * 1.10)
            display.updateDisplay();
            display.updateSummon();
        }
    }
}



elements.book.onmousedown = function() {
    if (elements.book.classList.contains("b") != true) {return}
    gameData.mana += gameData.manaPerClick;
    display.updateDisplay();
}


function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

setInterval (function() {
    gameData.mana += gameData.getScorePerSecond();
    display.updateDisplay();
}, 1000);