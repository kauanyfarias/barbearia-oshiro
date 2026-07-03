const onlineInfo = document.getElementById("online-info");

let hoje = new Date();

if (hoje.getDay() == 0 && (hoje.getHours() >= 9 && hoje.getHours() < 19)) {
    onlineInfo.firstElementChild.classList.add("offline");
    onlineInfo.innerText += "Fechado";
} else {
    onlineInfo.firstElementChild.classList.add("online");
    onlineInfo.innerHTML += "Aberto";
}
