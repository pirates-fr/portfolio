let qrCode;

function generateQR() {
    const text = document.getElementById("text").value;
    const color = document.getElementById("color").value;
    if (!text) return alert("Veuillez entrer un texte ou une URL");
    
    document.getElementById("qr-container").innerHTML = "";
    
    qrCode = new QRCodeStyling({
        width: 250,
        height: 250,
        data: text,
        dotsOptions: {
            color: color,
            type: "rounded"
        },
        backgroundOptions: {
            color: "#ffffff"
        }
    });
    qrCode.append(document.getElementById("qr-container"));
}