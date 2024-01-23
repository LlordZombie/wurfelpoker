window.addEventListener("load",next);
document.addEventListener("DOMContentLoaded", main);

function main() {
    document.getElementsByTagName("Button")[0].addEventListener("click", roll);
    document.getElementsByTagName("Button")[1].addEventListener("click", next);
}

function roll() {
    let imgs: HTMLCollectionOf<Element> = document.getElementsByClassName("cube");
    let stays: HTMLCollectionOf<Element> = document.getElementsByTagName("input");
    let imgNums: number[] = [1, 1, 1, 1, 1, 1];
    for (let i = 0; i < imgNums.length; i++) {
        imgNums[i] *= Math.random() * 6 + 1;
        if (!(stays.item(i) as HTMLInputElement)!.checked) {
            imgs.item(i)!.setAttribute("src", `imgs/${Math.floor(imgNums[i])}.jpg`);
        }
    }
}

function next() {
    let imgs: HTMLCollectionOf<Element> = document.getElementsByClassName("cube");
    let stays: HTMLCollectionOf<Element> = document.getElementsByTagName("input");
    for (let i = 0; i < imgs.length; i++) {
        imgs.item(i)!.setAttribute("src", `imgs/6.jpg`);
        (stays.item(i) as HTMLInputElement)!.checked= false;
    }
}