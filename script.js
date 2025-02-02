const toggleButton = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.body.classList.add(currentTheme);
    toggleButton.classList.add(currentTheme);
    toggleButton.textContent = currentTheme === "dark-mode" ? "☀️" : "🌙";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
        toggleButton.textContent = "☀️";
        toggleButton.classList.add("dark-mode");
        toggleButton.classList.remove("light-mode");
    } else {
        localStorage.removeItem("theme");
        toggleButton.textContent = "🌙";
        toggleButton.classList.add("light-mode");
        toggleButton.classList.remove("dark-mode");
    }
});

document.querySelectorAll(".project-button").forEach(button => {
    button.addEventListener("click", () => {
        const projectName = button.closest(".project-card").dataset.project;
        if (projectName) {
            window.location.href = `${projectName}.html`;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add("show");
        }, index * 200);
    });
});
