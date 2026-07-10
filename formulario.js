// SERVIÇOS
// Pega todos os cards de serviços 
const cards = document.querySelectorAll(".card");

// Para cada card, adiciona um evento de clique
cards.forEach(card => {
    card.addEventListener("click", () => {

        // Remove a classe "ativo" de todos os cards (garante apenas 1 selecionado)
        cards.forEach(c => c.classList.remove("ativo"));

        // Adiciona a classe "ativo" no card clicado
        card.classList.add("ativo");
    });
});


// DATAS DE AGENDAMENTO
// Pega todos os botões de datas disponíveis
const datas = document.querySelectorAll(".datas button");

// Para cada data, adiciona evento de clique
datas.forEach(data => {
    data.addEventListener("click", () => {

        // Remove "ativo" de todas as datas
        datas.forEach(d => d.classList.remove("ativo"));

        // Marca apenas a data clicada como ativa
        data.classList.add("ativo");
    });
});


// HORÁRIOS
// Pega todos os botões de horários disponíveis
const horarios = document.querySelectorAll(".horarios button");

// Para cada horário, adiciona evento de clique
horarios.forEach(horario => {
    horario.addEventListener("click", () => {

        // Remove "ativo" de todos os horários
        horarios.forEach(h => h.classList.remove("ativo"));

        // Marca apenas o horário clicado como ativo
        horario.classList.add("ativo");
    });
});


// ===== BOTÃO AGENDAR =====
// Quando clicar no botão "Agendar"
document.getElementById("agendar").addEventListener("click", () => {

    // Pega o serviço selecionado 
    const servicoEl = document.querySelector(".card.ativo h3");

    // Pega a data 
    const dataEl = document.querySelector(".datas .ativo");

    // Pega o horário 
    const horarioEl = document.querySelector(".horarios .ativo");

    // Pega os valores dos inputs de nome e telefone
    const nome = document.getElementById("nome")?.value;
    const telefone = document.getElementById("telefone")?.value;

    // Validação: verifica se tudo foi preenchido/selecionado
    if (!servicoEl || !dataEl || !horarioEl || !nome || !telefone) {
        alert("Selecione serviço, data, horário e preencha seus dados!");
        return; // interrompe o código se faltar algo
    }

    // Cria um objeto com todas as informações do agendamento
    const agendamento = {
        servico: servicoEl.textContent,
        data: dataEl.textContent,
        horario: horarioEl.textContent,
        nome: nome,
        telefone: telefone
    };

    // Salva o agendamento no localStorage (para usar na próxima página)
    localStorage.setItem("agendamento", JSON.stringify(agendamento));

    // Marca que o usuário vai para página de confirmação
    localStorage.setItem("voltouConfirmacao", "true");

    // Redireciona para página de confirmação
    window.location.href = "confirmacao.html";
});


// ===== RESET AO VOLTAR DA CONFIRMAÇÃO =====
// Executa quando a página carrega
window.addEventListener("load", () => {

    // Verifica se o usuário voltou da página de confirmação
    const voltou = localStorage.getItem("voltouConfirmacao");

    if (voltou === "true") {

        // Remove a marca de retorno
        localStorage.removeItem("voltouConfirmacao");

        // Remove todas as seleções ativas
        document.querySelectorAll(".ativo").forEach(el => {
            el.classList.remove("ativo");
        });

        // Define o primeiro card como padrão ativo novamente
        document.querySelector(".card")?.classList.add("ativo");
    }
});