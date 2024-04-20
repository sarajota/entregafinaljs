document.getElementById("calcular").addEventListener("click", function () {
   

    localStorage.setItem("nombre", document.getElementById("nombre").value)

    let usuarios = [];
    let nombre = localStorage.getItem("nombre");
    usuarios.push(nombre);
    
    let datosBiometricos = {
        altura: Number(document.getElementById("altura").value),
        peso: Number(document.getElementById("peso").value),
    };
    
    localStorage.setItem("datosBiometricos", JSON.stringify(datosBiometricos));

    if (datosBiometricos.altura >= 0 && datosBiometricos.altura <= 2.5) {
        let imc = calcularImc(datosBiometricos.peso, datosBiometricos.altura);
        let mensaje;
        if (imc < 18.5) {
            mensaje = "Bajo peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            mensaje = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            mensaje = "Sobrepeso";
        } else {
            mensaje = "Obesidad";
        }

        let resultado = "Hola " + usuarios[usuarios.length - 1] + "\n" + "Tu IMC es " + imc + " lo que indica que tu peso esta en la categoria " + mensaje + " para adultos de tu estatura";
        document.querySelector("h2").innerText = resultado;
        
    } else {
        Swal.fire({
            title: "ERROR",
            text: "La altura debe estar expresada en metros",
            icon: "error"
            });
    }
});

function calcularImc(peso, altura) {
    return peso / (altura * altura);
} 

