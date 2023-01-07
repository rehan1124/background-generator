let css = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let bodyBg = document.querySelector("body");
const colorGenBtn = document.querySelector("#color-gen");

css.textContent = `linear-gradient(to right, ${color1.value} , ${color2.value})`;

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    // html color code starts with #
    let color = '#';
    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (var i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }

    return color;
}


function changeBackground(){
    // console.log(color1.value);
    bodyBg.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    css.textContent = bodyBg.style.background;
    colorGenBtn.style.background = bodyBg.style.background;
}

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

colorGenBtn.addEventListener("click", function(){
    const newColor1 = generateRandomColor();
    const newColor2 = generateRandomColor();
    const newBgGradient = `linear-gradient(to right, ${newColor1} , ${newColor2})`;
    color1.value = newColor1;
    color2.value = newColor2;
    bodyBg.style.background = newBgGradient;
    css.textContent = newBgGradient;
    colorGenBtn.style.background = newBgGradient;
})

