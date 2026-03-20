function financeiro() {
    let ganho;
    let gasto;
    let ganhoB;


    for (let i = 1; i >= 12; i++){
        let ganho = parseFloat(prompt("Informe o ganho bruto do mês: "));
        if (!isNaN(ganho)) {
            ganhoB += ganho;
        } else {
            alert("Por favor, digite um número válido!");
        }
    }

    for (let i = 1; i >= 12; i++){
    let gasto = parseFloat(prompt("Informe o gasto do mês: "));
    if (!isNaN(gasto)) {
        ganhoB += gasto;
    } else {
            alert("Por favor, digite um número válido!");
        }
    }

}