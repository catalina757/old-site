let divCard = document.getElementsByClassName("card");
let currentPage = 0;

function moveForward() {
    divCard[currentPage].classList.add("hidden");
    currentPage++;
}

function moveBackward() {
    currentPage--;
    divCard[currentPage].classList.remove("hidden");
}

function moveToLast() {
    for (let i = 0; i < divCard.length-1; i++) {
        divCard[i].classList.add("hidden");
    }
    currentPage = divCard.length-1;
}

function moveToFirst() {
    for (let i = 0; i < divCard.length-1; i++) {
        divCard[i].classList.remove("hidden");
    }
    currentPage = divCard.length-divCard.length;
}