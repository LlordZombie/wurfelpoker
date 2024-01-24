"use strict";
window.addEventListener("load", next);
document.addEventListener("DOMContentLoaded", main);
let throwsLeft;
function main() {
    document.getElementsByTagName("Button")[0].addEventListener("click", roll);
    document.getElementsByTagName("Button")[1].addEventListener("click", next);
}
function roll() {
    let imgs = document.getElementsByClassName("cube");
    let stays = document.getElementsByTagName("input");
    let imgNums = [1, 1, 1, 1, 1, 1];
    if (throwsLeft > 0) {
        for (let i = 0; i < imgNums.length; i++) {
            stays.item(i).disabled = false;
            imgNums[i] *= Math.random() * 6 + 1;
            if (!stays.item(i).checked) {
                imgs.item(i).setAttribute("src", `imgs/${Math.floor(imgNums[i])}.jpg`);
                imgs.item(i).style.transform = `rotate(${Math.random() * 360}deg)`;
                imgs.item(i).style.marginTop = `${Math.random() * 25}%`;
            }
        }
        throwsLeft--;
        document.getElementsByTagName("Button")[0].textContent = `Throws left: ${throwsLeft}`;
        if (throwsLeft === 0) {
            document.getElementsByTagName("Button")[0].disabled = true;
        }
    }
}
function next() {
    let imgs = document.getElementsByClassName("cube");
    let stays = document.getElementsByTagName("input");
    throwsLeft = 3;
    document.getElementsByTagName("Button")[0].textContent = `Throws left: ${throwsLeft}`;
    document.getElementsByTagName("Button")[0].disabled = false;
    for (let i = 0; i < imgs.length; i++) {
        imgs.item(i).setAttribute("src", `imgs/6.jpg`);
        stays.item(i).checked = false;
        stays.item(i).disabled = true;
        imgs.item(i).style.transform = `rotate(0deg)`;
        imgs.item(i).style.marginTop = `0`;
    }
}
//# sourceMappingURL=script.js.map