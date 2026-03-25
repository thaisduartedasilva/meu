function picoleteria(){

    alert(
        "Sabores disponíveis de picolé:" +
        "\n a - Chocolate" +
        "\n b - Morango" +
        "\n c - Creme" +
        "\n d - Manga" +
        "\n e - Melancia" +
        "\n f - Vanilla Ice" +
        "\n g - Céu Azul" +
        "\n h - Brownie" +
        "\n i - Hawaiano"
    );


    let codigo = prompt ("Informe o código do picole que você deseja: ");

    if (codigo === "a"){
        alert ("O picole de Chocolate custa R$1.50");

    } else if (codigo === "b"){
        alert ("O picole de Morango custa R$2.50");

    } else if (codigo === "c"){
        alert ("O picole de Creme custa R$2.50");

    } else if (codigo === "d"){
        alert ("O picole de Manga custa R%3.20");

    } else if (codigo === "e"){
        alert ("O picole de Melancia custa R$3.40");

    } else if (codigo === "f"){
        alert ("O picole de Vanilla Ice custa R$3.00");

    } else if (codigo === "g"){
        alert ("O picole de Céu Azul custa R$3.60");

    } else if (codigo === "h"){
        alert ("O picole de Brownie custa R$4.00");

    } else{
        alert ("O picole de Hawaiano custa R$5.00");

    }
}