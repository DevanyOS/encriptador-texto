let textArea = document.querySelector(".text_box");
let encript = document.querySelector(".text_encript");
let background = document.querySelector(".text_encript");
let button = document.querySelector(".copy");

let text1 = document.querySelector(".text_one");
let text2 = document.querySelector(".text_two");


let  text1Original = text1.style.color;
let  text2Original = text2.style.color;
let  encriptOriginal = encript.style.backgroundImage;

//Funcion de boton Encriptar
function btnEncriptar(){
    let textoEncriptado = encriptar(textArea.value)
    encript.value = textoEncriptado;
    textArea.value = "";
    encript.style.backgroundImage = "none";
    text1.style.color = "transparent";
    text2.style.color = "transparent";
    button.textContent = "Copiar";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

//Funcion boton Desencriptar
function btnDesencriptar(){
    let textoEncriptado = desencriptar(textArea.value)
    encript.value = textoEncriptado;
    textArea.value = "";
    encript.style.backgroundImage = "none";
    text1.style.color = "transparent";
    text2.style.color = "transparent";
    button.textContent = "Copiar";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

//Funcion copiar al portapapeles

function copyText(){
    let inputText = document.getElementById("encript");

    inputText.select();
    inputText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputText.value);

    button.textContent = 'Copiado'
}

//Funcion limpiar

function btnLimpiar(){
    text1.style.color = text1Original;
    text2.style.color = text1Original;
    encript.style.backgroundImage = encriptOriginal;
    encript.value = "";
    textArea.value = "";
    button.textContent = "Copiar";
}

    

