function financeiro() {
    let ganhoAnual;
    let gastoAnual;

    for (let i = 1; i <= 12; i++) {
        let ganho = parseFloat(prompt("Informe o ganho bruto do mês: "));
        let gasto = parseFloat(prompt("Informe o gasto do mês: "));

        if (!isNaN(ganho)) {
            ganhoAnual += ganho;
        } else {
            alert("Por favor, digite um número válido!");
        }

        if (!isNaN(gasto)) {
            gastoAnual += gasto;
        } else {
            alert("Por favor, digite um número válido!");
        }
    }

    alert ("O ganho bruto anual da sua empresa foi de: " + ganhoAnual);
    alert ("O gasto anual da sua empresa foi de: " + gastoAnual);

    let saldo = ganhoAnual - gastoAnual; 

    alert ("O saldo da sua empresa foi de: " + saldo);

    if (saldo >= 0) {
        alert ("A empresa teve lucro.");
    }else{
        alert ("A empresa teve prejuízo");
    }





}