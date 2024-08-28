
function encriptar() {
    let texto = document.getElementById('input-text').value;
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    mostrarResultado(textoEncriptado);
}


function desencriptar() {
    let texto = document.getElementById('input-text').value;
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    mostrarResultado(textoDesencriptado);
}


function mostrarResultado(resultado) {
    let output = document.getElementById('output');
    output.innerHTML = '<p>' + resultado + '</p>';
    document.querySelector('.initial-image').style.display = 'none';
}


function copiarTexto() {
    let texto = document.getElementById('output').innerText;
    navigator.clipboard.writeText(texto)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar el texto: ', err));
}
