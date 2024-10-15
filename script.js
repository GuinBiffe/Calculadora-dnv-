function calcularImc() {
    // Obter os valores de altura e peso
    const altura = parseFloat(document.getElementById('altura').value) / 100; // converter cm para metros
    const peso = parseFloat(document.getElementById('peso').value);

    // Calcular IMC
    if (altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        
        // Exibir o resultado
        alert(`Seu IMC é: ${imc.toFixed(2)}`);
    } else {
        alert('Por favor, insira valores válidos para altura e peso.');
    }
}

