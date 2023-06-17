const colors = ["green", "yellow", "purple", "brown", "orange", "pink", "#d87093"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    console.log(randomColor);

    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}