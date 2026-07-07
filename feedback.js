const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

function antes() {
    anterior.removeAttribute("onclick");

    const classesCard1 = card1.classList.toString();
    const classesCard2 = card2.classList.toString();
    const classesCard3 = card3.classList.toString();

    card1.classList = classesCard2;
    card2.classList = classesCard3;
    card3.classList = classesCard1;

    reativar = () => {
        anterior.setAttribute("onclick", "antes()");
    };

    setInterval(reativar, 1000);
}

function depois() {
    proximo.removeAttribute("onclick")

    const classesCard1 = card1.classList.toString();
    const classesCard2 = card2.classList.toString();
    const classesCard3 = card3.classList.toString();

    card1.classList = classesCard3;
    card2.classList = classesCard1;
    card3.classList = classesCard2;

    reativar = () => {
        proximo.setAttribute("onclick", "depois()");
    };

    setInterval(reativar, 1000);
}
