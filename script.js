const toggleButton = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if(currentTheme) {
    document.body.classList.add(currentTheme);
    toggleButton.textContent = currentTheme === "dark-mode" ? "☀️" : "🌙";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
        toggleButton.textContent = "☀️";
    } else {
        localStorage.removeItem("theme");
        toggleButton.textContent = "🌙";
    }
});

const projectButtons = document.querySelectorAll('.bot-discord');

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'bot-discord.html';
    });
});