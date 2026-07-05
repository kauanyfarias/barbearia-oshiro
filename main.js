function abrirWhatsapp()
{
    /* valores */
    let numero = 5511947018631;
    let mensagem = "Olá! Quero agendar um horários na Barbearia. Vocês têm horário disponivel hoje?";

    /* a url vai mandar do whatsapp e com isso mais o numero, mais o texto e a (mensagem) */
    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

    /* abrindo uma aba no navegador */
    window.open(url, "_blank");
}

// Ajustes AOS

function ajustarAOS() {
    const fotoEspaco1 = document.getElementById('foto-espaco-1');
    const fotoEspaco2 = document.getElementById('foto-espaco-2');
    const fotoEspaco3 = document.getElementById('foto-espaco-3');

    const larguraTela = window.innerWidth;

    if (larguraTela < 768) {
        fotoEspaco1.setAttribute('data-aos', 'fade-right');
        fotoEspaco2.setAttribute('data-aos', 'fade-left');
        fotoEspaco3.setAttribute('data-aos', 'fade-right');

        fotoEspaco1.setAttribute('data-aos-anchor-placement', 'center-bottom');
        fotoEspaco2.setAttribute('data-aos-anchor-placement', 'center-bottom');
        fotoEspaco3.setAttribute('data-aos-anchor-placement', 'center-bottom');
    } else {
        fotoEspaco1.setAttribute('data-aos', 'fade-right');
        fotoEspaco2.setAttribute('data-aos', 'fade-down');
        fotoEspaco3.setAttribute('data-aos', 'fade-up');

        fotoEspaco1.setAttribute('data-aos-anchor-placement', 'center-bottom');
        fotoEspaco2.setAttribute('data-aos-anchor-placement', 'bottom-bottom');
        fotoEspaco3.setAttribute('data-aos-anchor-placement', 'top-bottom');
    }
}

ajustarAOS();

window.addEventListener('resize', ajustarAOS);
