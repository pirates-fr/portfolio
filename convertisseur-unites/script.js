const units = {
    longueur: { 
        "millimètre": 1000, "centimètre": 100, "décimètre": 10, "mètre": 1, "décamètre": 0.1, 
        "hectomètre": 0.01, "kilomètre": 0.001 
    },
    poids: { 
        "milligramme": 1000000, "centigramme": 100000, "décigramme": 10000, "gramme": 1000, 
        "décagramme": 100, "hectogramme": 10, "kilogramme": 1, "tonne": 0.001 
    },
    température: { 
        "degré Celsius (°C)": "celsius", "kelvin (K)": "kelvin"
    },
    volume: { 
        "millilitre": 1000, "centilitre": 100, "décilitre": 10, "litre": 1, "décalitre": 0.1, 
        "hectolitre": 0.01, "kilolitre": 0.001, "mètre cube": 0.001 
    },
    surface: { 
        "millimètre carré": 1000000, "centimètre carré": 10000, "décimètre carré": 100, 
        "mètre carré": 1, "décamètre carré": 0.01, "hectomètre carré": 0.0001, 
        "kilomètre carré": 0.000001, "hectare": 0.0001, "are": 0.01 
    },
    vitesse: { 
        "mètre/seconde": 1, "kilomètre/heure": 3.6 
    },
    temps: { 
        "milliseconde": 1000, "seconde": 1, "minute": 1 / 60, "heure": 1 / 3600, 
        "jour": 1 / 86400, "semaine": 1 / 604800, "mois (30 jours)": 1 / 2592000, 
        "année (365 jours)": 1 / 31536000 
    },
    énergie: { 
        "joule": 1, "kilojoule": 0.001, "calorie": 0.239, "kilocalorie": 0.000239, 
        "watt-heure": 0.000278, "kilowatt-heure": 0.000000278 
    },
    pression: { 
        "pascal": 1, "hectopascal": 0.01, "kilopascal": 0.001, "bar": 0.00001, 
        "atmosphère": 0.00000986923, "millimètre de mercure": 0.00750062 
    }
};

function updateUnitOptions() {
    const unitType = document.getElementById("unitType").value;
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    for (let unit in units[unitType]) {
        fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
        toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    }
}

function convert() {
    const value = parseFloat(document.getElementById('inputValue').value);
    const unitType = document.getElementById('unitType').value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (isNaN(value)) {
        document.getElementById('result').innerText = 'Veuillez entrer une valeur valide.';
        return;
    }

    if (unitType === "température") {
        result = convertTemperature(value, fromUnit, toUnit);
    } else {
        result = convertGeneric(value, unitType, fromUnit, toUnit);
    }

    document.getElementById('result').innerText = `Résultat : ${result}`;
}

function convertGeneric(value, unitType, fromUnit, toUnit) {
    if (fromUnit === toUnit) return `${value} ${toUnit}`;
    const baseValue = value / units[unitType][fromUnit];
    const convertedValue = baseValue * units[unitType][toUnit];
    
    return `${formatNumber(convertedValue)} ${toUnit}`;
}

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return `${value} ${toUnit}`;
    if (fromUnit === "degré Celsius (°C)" && toUnit === "kelvin (K)") 
        return `${formatNumber(value + 273.15)} K`;
    if (fromUnit === "kelvin (K)" && toUnit === "degré Celsius (°C)") 
        return `${formatNumber(value - 273.15)} °C`;
    
    return "Conversion impossible";
}

function formatNumber(num) {
    return parseFloat(num.toFixed(10)).toString();
}

window.onload = updateUnitOptions;