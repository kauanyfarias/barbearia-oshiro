const html = document.documentElement;
const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme") || "light";
html.dataset.theme = savedTheme;
toggle.checked = savedTheme === "dark";

toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";

    html.dataset.theme = theme;
    localStorage.setItem("theme", theme);
});