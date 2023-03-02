let colors = ["red", "yellow", "green", "blue", "purple", "pink"];

function randomColor(){
    let random = Math.floor(Math.random() * colors.length);
    let selectedColor = colors[random];
    document.body.style.backgroundColor = selectedColor;
    colorName(selectedColor);
}

function colorName(color){
    let span = document.querySelector("span");
    span.textContent = color[0].toUpperCase() + color.slice(1);
}