function vogalConsoante(){

    let letra = prompt("Incira uma letra do alfabeto: ");

    let vogais = ["a", "e", "i", "o", "u"];

    if (vogais !== (letra)){
        alert ("A letra informada é uma consoante.");
    }else{
        alert ("A letra informada é uma vogal.")
    }
}