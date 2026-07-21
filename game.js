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
