function calcularIMC (){


    //Entrada de dados
    let pesoKG = document.getElementById("peso").value;
    let alturaM = document.getElementById("altura").value;
    
    // Processamento
    let valorIMC = (pesoKG / (alturaM * alturaM));

    if (valorIMC < 25 && valorIMC > 18.5) {
        classificacaoIMC = "Peso Ideal";
    } 

    if (valorIMC <= 18.5) {
        classificacaoIMC = "Abaixo do Peso Ideal";
    }

    if (valorIMC >= 25) {
        classificacaoIMC = "Sobrepeso";
    }
    
    document.getElementById("resultado").textContent = "ValorIMC: " + valorIMC;

    document.getElementById("classificacaoIMC").textContent = classificacaoIMC;

}
    // Saida
    