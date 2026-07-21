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
