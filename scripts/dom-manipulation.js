const numberSlot = document.getElementsByClassName("number")[0];
const buttonElement = document.getElementById("button");

document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    numberSlot.innerHTML = count;
    buttonElement.addEventListener("click", () => {
        count ++;
        numberSlot.innerHTML = count;
        console.log(count);
        if (count % 2 === 0) {
            numberSlot.style.color ="red";
        } else {
            numberSlot.style.color ="blue";
        }
        if (count % 2 === 0) {
            buttonElement.backroun.Color ="green"
        } else {
            buttonElement.backroun.Color ="yellow"
        }
    });
})       


