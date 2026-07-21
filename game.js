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
