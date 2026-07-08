const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

function antes() {
    anterior.removeEventListener("click", antes);

    const classesCard1 = card1.classList.toString();
    const classesCard2 = card2.classList.toString();
    const classesCard3 = card3.classList.toString();

    card1.className = classesCard2;
    card2.className = classesCard3;
    card3.className = classesCard1;

    reativar = () => {
        anterior.addEventListener("click", antes);
    };

    setInterval(reativar(), 1000);
}

function depois() {
    proximo.removeEventListener("click", depois);

    const classesCard1 = card1.classList.toString();
    const classesCard2 = card2.classList.toString();
    const classesCard3 = card3.classList.toString();

    card1.className = classesCard3;
    card2.className = classesCard1;
    card3.className = classesCard2;

    reativar = () => {
        proximo.addEventListener("click", depois);
    };

    setInterval(reativar(), 1000);
}

proximo.addEventListener("click", depois);
anterior.addEventListener("click", antes);
