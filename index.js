document.getElementById("botao_resultado").onclick = function () {
    var num_inicial = parseFloat(document.getElementById("numero_inicial").value);
    var num_final = parseFloat(document.getElementById("numero_final").value);
    document.getElementById('resultado').innerHTML = " ";
    var cont = 0;
    for(i = 0; num_inicial <= num_final; i++){
        cont++;
        // console.log(num_inicial);
        document.getElementById('resultado').innerHTML += "<li>" + num_inicial + "</li>";
        num_inicial++;
        
    }
    contador = cont;
    document.getElementById('contador').innerHTML = "<p>" + "FORAM GERADOS" + " " + "<strong>" + contador + "</strong>" + " " +"NÚMEROS" + "</p>" ;
    
}


// copiar números pra área de transferência
document.getElementById("copiar").onclick = function()  {
    var num_inicial = parseFloat(document.getElementById("numero_inicial").value);
    var num_final = parseFloat(document.getElementById("numero_final").value);

    for(i = 0; num_inicial <= num_final; i++){
        
        console.log(num_inicial); 
        var resultado_novo = document.getElementById("resultado_novo").innerHTML += num_inicial + "\n";
        num_inicial++;
        
        
    }
    resul = resultado_novo.split(" ");
    resul.sort();
    resultado_novo = resul.join("\n");
    resultado_separado = resultado_novo
    // alert(resultado_separado);
    var resultado_novo = document.getElementById("resultado_novo").innerHTML = resultado_separado;

    let inputTest = document.createElement("textarea");
    inputTest.value = resultado_novo;
    

    document.body.appendChild(inputTest);

    inputTest.select();
    document.execCommand('copy');
    document.body.removeChild(inputTest); 
    alert("Copiado");  
}

document.getElementById("atualizar").onclick = function(){
    location.reload();
}
