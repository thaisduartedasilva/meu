function vogalConsoante(){

    let letra = prompt("Insira uma letra do alfabeto: ").toLowerCase();

    let vogais = ["a", "e", "i", "o", "u"];

    if (vogais.includes(letra)){
        alert ("A letra informada é uma vogal.");
    }else{
        alert ("A letra informada é uma consoante.")
    }
}