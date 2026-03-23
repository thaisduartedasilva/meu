function parImpar(){
    let numeroF;

    let numero = parseInt(prompt("Informe um número inteiro: "));

   if (!isNaN(numero)) { 
        if (numero % 2 === 0){
            numeroF = numero - 1;
            alert ("Agora você tem um número Impar: " + numeroF);

        }else{
            numeroF = numero + 1;
            alert ("Agora você tem um número Par: " + numeroF);

        }
   }else{
    alert("Por favor, digite um número válido!");
   }

}