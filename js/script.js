"use strict";
document.addEventListener("DOMContentLoaded", main);

function main() {
    document.getElementsByTagName("Button")[0].addEventListener("click", roll);
    document.getElementsByTagName("Button")[1].addEventListener("click", next);
}

function roll() {
    let imgs = document.getElementsByClassName("cube");
    let stays = document.getElementsByTagName("input");
    let imgNums = [1, 1, 1, 1, 1, 1];
    for (let i = 0; i < imgNums.length; i++) {
        imgNums[i] *= Math.random() * 6 + 1;
        if (!stays.item(i).checked) {
            imgs.item(i).setAttribute("src", `imgs/${Math.floor(imgNums[i])}.jpg`);
        }
    }
}

function next() {
    let imgs = document.getElementsByClassName("cube");
    let stays = document.getElementsByTagName("input");
    for (let i = 0; i < imgs.length; i++) {
        imgs.item(i).setAttribute("src", `imgs/6.jpg`);
        stays.item(i).checked = false;
    }
}

//# sourceMappingURL=script.js.map