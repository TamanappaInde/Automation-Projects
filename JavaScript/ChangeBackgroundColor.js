
const colors = ["red","blue", "green", "brown"];

function changeColor(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

