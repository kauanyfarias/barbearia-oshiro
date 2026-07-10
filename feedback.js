const reviews = [
  {
    instagram: "@joaocorta",
    name: "João Victor",
    photo: "./imagens/feedback/pexels-aaron-rodriguez-86846351-16769531.jpg",
    comment: "Já faz um tempo que corto aqui. Os caras acertam o corte toda vez, nem preciso explicar muito mais.",
    stars: 5
  },
  {
    instagram: "@pedrin.021",
    name: "Pedro Henrique",
    photo: "./imagens/feedback/pexels-anderson-1417365503-35894361.jpg",
    comment: "Cheguei por indicação de um amigo e agora só corto aqui. Atendimento sempre firmeza.",
    stars: 5
  },
  {
    instagram: "@leo_sampa",
    name: "Leonardo Souza",
    photo: "./imagens/feedback/pexels-brunodiasfoto-38444171.jpg",
    comment: "Degradê ficou na régua. Dá pra ver que os caras têm experiência. 🔥",
    stars: 5
  },
  {
    instagram: "@caio_na_area",
    name: "Caio Augusto",
    photo: "./imagens/feedback/pexels-cesar-o-neill-26650613-31133320.jpg",
    comment: "Ambiente tranquilo, papo bom e corte melhor ainda.",
    stars: 5
  },
  {
    instagram: "@gui.almeidah",
    name: "Guilherme Almeida",
    photo: "./imagens/feedback/pexels-cesar-o-neill-26650613-32612438.jpg",
    comment: "Primeira vez que vim e já saí marcando o próximo horário.",
    stars: 5
  },
  {
    instagram: "@brunozl",
    name: "Bruno Lima",
    photo: "./imagens/feedback/pexels-david-nicolas-72939733-8477304.jpg",
    comment: "Preço justo e serviço muito caprichado. Vale cada real.",
    stars: 5
  },
  {
    instagram: "@rafa.mtz",
    name: "Rafael Martins",
    photo: "./imagens/feedback/pexels-diego-torrijos-393934430-17068494.jpg",
    comment: "Gostei porque o barbeiro foi trocando ideia e entendendo exatamente o corte que eu queria.",
    stars: 5
  },
  {
    instagram: "@diegoprado_",
    name: "Diego Prado",
    photo: "./imagens/feedback/pexels-donadie-36222126.jpg",
    comment: "Sempre muito bem atendido. Até meu filho já virou cliente.",
    stars: 5
  },
  {
    instagram: "@henriquefps",
    name: "Henrique Ferreira",
    photo: "./imagens/feedback/pexels-ekam-juneja-61080223-9370782.jpg",
    comment: "Não moro tão perto, mas continuo vindo porque o atendimento compensa.",
    stars: 5
  },
  {
    instagram: "@matheus.rios",
    name: "Matheus Rios",
    photo: "./imagens/feedback/pexels-hannah-barata-776560167-27890311.jpg",
    comment: "Os detalhes da barba ficaram muito bem feitos. Curti demais.",
    stars: 5
  },
  {
    instagram: "@vini.cardoso",
    name: "Vinícius Cardoso",
    photo: "./imagens/feedback/pexels-jibarofoto-1793305.jpg",
    comment: "Lugar simples, organizado e com uma energia muito boa.",
    stars: 5
  },
  {
    instagram: "@lucas.nobrega",
    name: "Lucas Nóbrega",
    photo: "./imagens/feedback/pexels-joao-vinicius-771722796-23368640.jpg",
    comment: "Saí pronto pra um casamento. Minha esposa elogiou assim que cheguei em casa 😂",
    stars: 5
  },
  {
    instagram: "@andrecostta",
    name: "André Costa",
    photo: "./imagens/feedback/pexels-kuiyibo-16293405.jpg",
    comment: "Já tentei cortar em outros lugares, mas sempre acabo voltando pra cá.",
    stars: 5
  },
  {
    instagram: "@thiagocx",
    name: "Thiago Carvalho",
    photo: "./imagens/feedback/pexels-manuel-velasco-331486339-14100931.jpg",
    comment: "Os caras respeitam o horário e o corte fica sempre do jeito que eu gosto.",
    stars: 5
  },
  {
    instagram: "@renato_moraes",
    name: "Renato Moraes",
    photo: "./imagens/feedback/pexels-mariya-klyachko-1585911434-27351849.jpg",
    comment: "Barbeiro gente boa demais. Parece que você está conversando com um amigo. 👊🏽",
    stars: 5
  },
  {
    instagram: "@felipe.ramos_",
    name: "Felipe Ramos",
    photo: "./imagens/feedback/pexels-marlon-alves-2016519-15299288.jpg",
    comment: "Achei a barbearia pelo Google e a nota faz sentido. Serviço excelente.",
    stars: 5
  },
  {
    instagram: "@edu.alvesz",
    name: "Eduardo Alves",
    photo: "./imagens/feedback/pexels-miguel-bautista-labrador-2148681384-37865534.jpg",
    comment: "Sempre cheio, mas dá pra entender o motivo. O trabalho é muito bom.",
    stars: 5
  },
  {
    instagram: "@maarceloo",
    name: "Marcelo Dias",
    photo: "./imagens/feedback/pexels-miguel-rodriguez-leon-279978609-13085048.jpg",
    comment: "Atendimento muito bom e corte bem feito. Recomendo pra qualquer um do bairro. 🔥👊🏽",
    stars: 5
  },
  {
    instagram: "@ricardogms",
    name: "Ricardo Gomes",
    photo: "./imagens/feedback/pexels-pessoas-uem-503045317-16105554.jpg",
    comment: "Esperei um pouquinho porque estava movimentado, mas fui muito bem atendido. Voltarei com certeza.",
    stars: 4
  },
  {
    instagram: "@alex.ferraz",
    name: "Alex Ferraz",
    photo: "./imagens/feedback/pexels-pessoas-uem-503045317-16160859.jpg",
    comment: "Gostei bastante do corte. Só marcaria um horário mais cedo da próxima vez porque enche rápido.",
    stars: 4
  }
];

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

function feedbacksAleatorios() {
    const review1 = reviews.splice(getRandom(), 1)[0];
    const review2 = reviews.splice(getRandom(), 1)[0];
    const review3 = reviews.splice(getRandom(), 1)[0];

    configReview(card1, review1);
    configReview(card2, review2);
    configReview(card3, review3);
}

function getRandom() {
    const randomNum = Math.random();

    return Math.floor(reviews.length * randomNum);
}

function configReview(element, review) {
    if (element instanceof HTMLElement) {
        element.firstElementChild.setAttribute("src", `${review.photo}`);

        element.getElementsByClassName("feedback-nome")[0].innerHTML = review.name;
        element.getElementsByClassName("feedback-insta")[0].innerHTML = review.instagram;
        
        const stars = element.getElementsByClassName("bi-star-fill");

        for (let i = 0; i < review.stars; i++) {
            stars[i].classList.add("active-star");
        }
        
        element.getElementsByClassName("feedback-mensagem")[0].firstElementChild.innerHTML = review.comment;
    }
}

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

feedbacksAleatorios();

proximo.addEventListener("click", depois);
anterior.addEventListener("click", antes);
