const onlineInfo = document.getElementById("online-info");

function estaAberto () {
    let hoje = new Date();
    
    if (hoje.getDay() == 0 || (hoje.getHours() < 9 || hoje.getHours() >= 19)) {
        onlineInfo.firstElementChild.classList.add("offline");
        onlineInfo.querySelector("#online-status").innerText = "Fechado";
    } else {
        onlineInfo.firstElementChild.classList.add("online");
        onlineInfo.querySelector("#online-status").innerText = "Aberto";
    }

    setInterval(estaAberto, 1000);
}

estaAberto();
