window.addEventListener("load", next);
document.addEventListener("DOMContentLoaded", main);
let throwsLeft: number;

function main() {
    document.getElementsByTagName("Button")[0].addEventListener("click", roll);
    document.getElementsByTagName("Button")[1].addEventListener("click", next);
}

function roll() {
    let imgs: HTMLCollectionOf<Element> = document.getElementsByClassName("cube");
    let stays: HTMLCollectionOf<Element> = document.getElementsByTagName("input");
    let imgNums: number[] = [1, 1, 1, 1, 1];
    if (throwsLeft > 0) {
        for (let i = 0; i < imgNums.length; i++) {
            (stays.item(i) as HTMLInputElement)!.disabled = false;
            imgNums[i] *= Math.random() * 6 + 1;
            if (!(stays.item(i) as HTMLInputElement)!.checked) {
                imgs.item(i)!.setAttribute("src", `imgs/${Math.floor(imgNums[i])}.jpg`);
                (imgs.item(i)as HTMLElement)!.style.transform=`rotate(${Math.random()*360}deg)`;
                (imgs.item(i)as HTMLElement)!.style.marginTop =`${Math.random()*25}%`

            }
        }
        throwsLeft--;
        document.getElementsByTagName("Button")[0].textContent = `Throws left: ${throwsLeft}`;

        if (throwsLeft ===0) {
            (document.getElementsByTagName("Button")[0] as HTMLButtonElement).disabled = true;
        }

    }
}

function next() {
    let imgs: HTMLCollectionOf<Element> = document.getElementsByClassName("cube");
    let stays: HTMLCollectionOf<Element> = document.getElementsByTagName("input");
    throwsLeft = 3;
    document.getElementsByTagName("Button")[0].textContent = `Throws left: ${throwsLeft}`;
    (document.getElementsByTagName("Button")[0] as HTMLButtonElement).disabled = false;

    for (let i = 0; i < imgs.length; i++) {
        imgs.item(i)!.setAttribute("src", `imgs/6.jpg`);
        (stays.item(i) as HTMLInputElement)!.checked = false;
        (stays.item(i) as HTMLInputElement)!.disabled = true;
        (imgs.item(i)as HTMLElement)!.style.transform=`rotate(0deg)`;
        (imgs.item(i)as HTMLElement)!.style.marginTop =`0`

    }
}