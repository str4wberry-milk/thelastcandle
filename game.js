// ===================================
// EASTER EGG MEMORY SYSTEM
// ===================================


const secrets = {


    lanternClicked: 
    localStorage.getItem("lanternClicked"),


    treeTouched:
    localStorage.getItem("treeTouched"),


    goldenLeaf:
    localStorage.getItem("goldenLeaf"),


    forgottenCandle:
    localStorage.getItem("forgottenCandle")


};





function unlockSecret(name){


    localStorage.setItem(
        name,
        "true"
    );


    console.log(
        "Secret unlocked:",
        name
    );


}



// ===================================
// FORGOTTEN CANDLE SECRET
// ===================================



function checkForgottenCandle(){


const lantern =
localStorage.getItem(
"lanternClicked"
);



const leaf =
localStorage.getItem(
"goldenLeaf"
);




if(
lantern &&
leaf &&
!localStorage.getItem(
"forgottenCandle"
)

){


createForgottenCandle();


}

}





function createForgottenCandle(){


const candle =
document.createElement("div");



candle.className =
"forgotten-candle";



candle.innerHTML = `

<div class="forgotten-flame"></div>

<div class="forgotten-base"></div>

`;



document
.querySelector(".world")
.appendChild(candle);



unlockSecret(
"forgottenCandle"
);



showMessage(
"There was another flame."
);


}




setInterval(
checkForgottenCandle,
3000
);
if(
localStorage.getItem(
"forgottenCandle"
)
){

createForgottenCandle();

}

// ===================================
// GOLDEN LEAF EVENT
// ===================================



if(
localStorage.getItem("goldenLeaf")
){


document.body.classList.add(
"golden-found"
);


}

function createGoldenLeaf(){


if(
localStorage.getItem("goldenLeaf")
){

return;

}




const leaf =
document.createElement("div");



leaf.className =
"golden-leaf";


leaf.innerHTML =
"🍂";



leaf.style.left =
(50 + Math.random()*30)
+ "%";



document
.querySelector(".world")
.appendChild(leaf);





leaf.addEventListener(
"click",
()=>{


unlockSecret(
"goldenLeaf"
);



document.body.classList.add(
"golden-found"
);



showMessage(
"A small light found you."
);



leaf.remove();


});


}




// rare appearance


setInterval(()=>{


if(Math.random() > .6){


createGoldenLeaf();


}


},15000);
// ===================================
// RETURNING TRAVELER SYSTEM
// ===================================


const welcome =
document.querySelector(".welcome-container");


const hasVisited =
localStorage.getItem("lastCandleVisited");



if(hasVisited){


    welcome.innerHTML =
    "Welcome back, traveler.";


    document.body.classList.add(
        "returning"
    );


}

// ===================================
// MENU BUTTONS
// ===================================


const buttons = document.querySelectorAll("nav button");

const screen = document.querySelector("#title-screen");




// FOLLOW THE LIGHT

buttons[0].addEventListener("click",()=>{


    console.log("Beginning journey...");


    // later:
    // start game loading screen here


});





// SANCTUARY

buttons[1].addEventListener("click",()=>{


    console.log("Entering sanctuary...");


    // later:
    // open sanctuary area


});







// END JOURNEY

buttons[2].addEventListener("click",()=>{


    // remember the traveler

    localStorage.setItem(
        "lastCandleVisited",
        "true"
    );



    // begin ending effect


    screen.classList.add(
        "fade-light"
    );



    setTimeout(()=>{


        console.log(
            "The journey has ended."
        );


        // later:
        // show ending scene


    },2500);

  
    buttons[2].addEventListener("click",()=>{


    localStorage.setItem(
        "lastCandleVisited",
        "true"
    );


});



});

const followButton =
document.querySelector(".selected");

const screen =
document.querySelector("#title-screen");



followButton.addEventListener(
"click",
()=>{


screen.classList.add(
"fade-light"
);



setTimeout(()=>{


console.log(
"The journey begins..."
);


// game loading starts here


},2500);



});

const buttons = document.querySelectorAll("nav button");


buttons[0].addEventListener("mouseenter",()=>{

    document.body.classList.remove("light-dark");

    document.body.classList.add("light-bright");

});



buttons[1].addEventListener("mouseenter",()=>{

    document.body.classList.remove("light-dark");

    document.body.classList.remove("light-bright");

});



buttons[2].addEventListener("mouseenter",()=>{

    document.body.classList.remove("light-bright");

    document.body.classList.add("light-dark");

});



buttons.forEach(button=>{

    button.addEventListener("mouseleave",()=>{

        document.body.classList.remove("light-bright");

        document.body.classList.remove("light-dark");

    });

});

const lantern =
document.querySelector(".lantern");



let lanternClicks = 0;



lantern.addEventListener(
"click",
()=>{


    lanternClicks++;



    if(lanternClicks >= 7){


        unlockSecret(
        "lanternClicked"
        );



        showMessage(
        "I was waiting."
        );


    }


});

const tree =
document.querySelector(".tree");


let treeClicks = 0;



tree.addEventListener(
"click",
()=>{


treeClicks++;



if(treeClicks === 1){


showMessage(
"The tree is silent."
);


}



if(treeClicks === 3){


unlockSecret(
"treeTouched"
);



showMessage(
"It remembers your footsteps."
);



}



});

function showMessage(text){


const message =
document.createElement("div");



message.className =
"secret-message";



message.innerText =
text;



document.body.appendChild(
message
);



setTimeout(()=>{


message.remove();


},4000);


}
