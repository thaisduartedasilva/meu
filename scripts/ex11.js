function pagamentoVariavel(){
    let salario;
    let desconto;

    let nome = prompt("Informe o seu nome: ");
    let bruto = parseFloat(prompt("Informe o seu salário bruto: "));

    if (bruto <= 1000.00){
        desconto = (bruto * 0.08);
        salario = bruto - desconto;
        alert (nome + " o seu salário burto era de " + bruto + ", com o desconto de 8% do INSS, foi descontado do seu salário " + desconto + " reais, o seu salário liquido é de: " + salario);

    } else if (bruto >= 1000.01 && bruto <= 1500.00 ){ 
        desconto = (bruto * 0.085);
        salario = bruto - desconto;
        alert (nome + " o seu salário burto era de " + bruto + ", com o desconto de 8.5% do INSS, foi descontado do seu salário " + desconto + " reais, o seu salário liquido é de: " + salario);

    } else {
        desconto = (bruto * 0.09);
        salario = bruto - desconto;
        alert (nome + " o seu salário burto era de " + bruto + ", com o desconto de 9% do INSS, foi descontado do seu salário " + desconto + " reais, o seu salário liquido é de: " + salario);

    }
}