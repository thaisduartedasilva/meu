function ordenacao(){
    let numeros = [];

    for (let i = 1; i <= 4; i++) {
        let numero = parseFloat(prompt("Informe o número " + i + ": "));

        if (!isNaN(numero)) {
            numeros.push(numero); 
        } else {
            alert("Por favor, digite um número válido!");
            i--; 
        }
    }

    numeros.sort((a, b) => b - a);

    alert(numeros);
}