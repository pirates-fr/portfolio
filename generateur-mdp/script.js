function generatePassword() {
    let length = parseInt(document.getElementById("length").value, 10);
    if (isNaN(length) || length < 8 || length > 32) {
        alert("Veuillez choisir une longueur entre 8 et 32 caractères.");
        return;
    }

    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    let chars = "";
    if (useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (chars === "") {
        alert("Veuillez sélectionner au moins un type de caractère !");
        return;
    }

    let password = "";
    let mandatoryChars = [];

    function getRandomChar(set) {
        return set.charAt(Math.floor(Math.random() * set.length));
    }

    if (useUppercase) mandatoryChars.push(getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
    if (useLowercase) mandatoryChars.push(getRandomChar("abcdefghijklmnopqrstuvwxyz"));
    if (useNumbers) mandatoryChars.push(getRandomChar("0123456789"));
    if (useSymbols) mandatoryChars.push(getRandomChar("!@#$%^&*()_+[]{}|;:,.<>?"));

    for (let i = mandatoryChars.length; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    password = (password + mandatoryChars.join("")).split("").sort(() => Math.random() - 0.5).join("");

    const passwordField = document.getElementById("password");
    passwordField.value = password;

    passwordField.style.opacity = "0";
    setTimeout(() => {
        passwordField.style.opacity = "1";
    }, 100);
}

document.getElementById("copy-btn").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    if (passwordField.value === "") return;

    passwordField.select();
    navigator.clipboard.writeText(passwordField.value)
        .then(() => {
            this.innerText = "✅ Copié !";
            setTimeout(() => {
                this.innerText = "Cliquez pour copier";
            }, 2000);
        })
        .catch(() => {
            this.innerText = "❌ Erreur";
        });
});