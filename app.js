const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// get the button element
const btn = document.getElementById("btn");
// get the color element
const color = document.querySelector(".color");

// add event listener in the button
btn.addEventListener("click", () => {
    // get a random number entre 0 y 3
    const randomNumber = getRandomNumber();
    // set the background color
    const colorPicked= colors[randomNumber];
    // color del body
    document.body.style.backgroundColor = colorPicked;
    // color del texto
    color.textContent = colorPicked;
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}