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