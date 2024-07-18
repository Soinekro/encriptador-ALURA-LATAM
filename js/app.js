var texto = document.getElementById("texto");
var btn_encrypt = document.getElementById("btn-encrypt");
var btn_decrypt = document.getElementById("btn-decrypt");
var btn_copy = document.getElementById("btn-copy");

const keys = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encriptar() {
  let texto = document.getElementById("texto").value;
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let letter = texto[i];
    textoEncriptado += letterToEncryp(letter);
  }
  //h4 con id texto-salida reemplazar por div
  document.getElementById("texto-salida").innerHTML = textoEncriptado;
}

function desencriptar() {
  // console.log(wordToDecrypt("ai"));
  let texto = document.getElementById("texto").value;
  //recorrer la variable keys
  result = Object.keys(keys).forEach((key) => {
    let value = keys[key];
    texto = texto.replace(new RegExp(value, "g"), key);
  });
  document.getElementById("texto-salida").innerHTML = texto;
}

function letterToEncryp(letter) {
  return getResult(keys[letter], letter);
}

function wordToDecrypt(letter) {
  let result = Object.keys(keys).find((key) => keys[key] === letter);
  return getResult(result, letter);
}

function getResult(result, r_default) {
  return result || r_default;
}

function copyText() {
  let texto = document.getElementById("texto-salida").innerText;
  navigator.clipboard.writeText(texto);
}
