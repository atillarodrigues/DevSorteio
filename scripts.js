function drawNumber () {
    const min =  Math.ceil(document.querySelector("#input-min").value);
    const max = Math.floor(document.querySelector("#input-max").value);

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira valores válidos para o mínimo e máximo.");
        return;
    }
    if (min > max) {
        alert("O valor mínimo não pode ser maior que o valor máximo.");
        return;
    }

    const drawNumber = Math.floor(Math.random() * (max - min + 1) + min)
    document.getElementById("result").innerHTML = `${drawNumber}`;
    console.log("funcionou")
    
}