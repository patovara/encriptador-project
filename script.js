let textoUsuario = document.getElementById('principal__textoUsuario');
let msjEncriptado = document.getElementById('mensaje-encriptado__mensajeUsuario');
let msjAlerta = document.getElementById('mensaje-encriptado__alerta');
const expCondicion = '^[a-z !ñ]+$';
// const expCondicion =  '/^[a-z]+$/';

const encriptar = (event) => {
    event.preventDefault();
    msjAlerta.textContent="";
    msjEncriptado.value="";
    let texto = textoUsuario.value;

    if(texto.match(expCondicion)!= null){
        let cadenas = texto.split(' ');
        let nuevaCadena = [];

        for(let cadena of cadenas){
            cadena = cadena.replaceAll('e','enter');
            cadena = cadena.replaceAll('i','imes');
            cadena = cadena.replaceAll('a','ai');
            cadena = cadena.replaceAll('o','ober');
            cadena = cadena.replaceAll('u','ufat');

            nuevaCadena.push(cadena);
            
        }
        let salidaTexto = nuevaCadena.join(' ');
        msjEncriptado.textContent = salidaTexto;
        msjAlerta.textContent = "";
    }else{
        msjAlerta.textContent = 'Revise bien la escritura, no se aceptan mayusculas, ni acentos.';
        return;
    }
}


const desencriptar = (event) => {
    event.preventDefault();
    msjEncriptado.value="";
    msjAlerta.textContent="";
    let texto = textoUsuario.value;

    if(texto.match(expCondicion)!= null){
        let cadenas = texto.split(' ');
        let nuevaCadena = [];

        for(let cadena of cadenas){
            cadena = cadena.replaceAll('enter','e');
            cadena = cadena.replaceAll('imes','i');
            cadena = cadena.replaceAll('ai','a');
            cadena = cadena.replaceAll('ober','o');
            cadena = cadena.replaceAll('ufat','u');
            
            nuevaCadena.push(cadena);
        }
        let salidaTexto = nuevaCadena.join(' ');
        msjEncriptado.textContent = salidaTexto;
    }else{
        msjAlerta.textContent = 'Revise bien la escritura, no se aceptan mayusculas, ni acentos.';
        return;
    }
}