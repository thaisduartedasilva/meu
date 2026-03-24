function pagamento(){
    let salario;

    let nome = prompt("Informe o seu nome: ");
    let bruto = parseFloat(prompt("Informe o seu salário bruto: "));

    salario = bruto - (bruto * 0.08);

    alert (nome + " o seu salário burto era de " + bruto + ", com o desconto de 8% do INSS, o seu salário liquido é de: " + salario);
    
}