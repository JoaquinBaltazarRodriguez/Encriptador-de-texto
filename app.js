
    
function encriptar (){

   
    let entrada = document.getElementById('tomar').value;
    let parrafo = document.getElementById('des');
    let subtitulo = document.getElementById('subtitulo');


    if(entrada ==""){
        
        subtitulo.innerHTML = 'Ningún mensaje fue encontrado.';
        parrafo.innerHTML = 'Ingresa el texto que deseas encriptar o desencriptar.';
        imagen.style.display = 'none';
    }else{  
        imagen.style.display = 'none';
        subtitulo.innerHTML = '';
        parrafo.innerHTML = encriptarTexto(entrada);
    }

}

function desencriptar (){

   console.log('esta desencriptando');
    let entrada = document.getElementById('tomar').value;
    let parrafo = document.getElementById('des');
    let subtitulo = document.getElementById('subtitulo');


    if(entrada ==""){
        
        subtitulo.innerHTML = 'Ningún mensaje fue encontrado.';
        parrafo.innerHTML = 'Ingresa el texto que deseas encriptar o desencriptar.';
        imagen.style.display = 'none';
    }else{  
        imagen.style.display = 'none';
        subtitulo.innerHTML = '';
        parrafo.innerHTML = desencriptarTexto(entrada);
    }
}

function encriptarTexto(texto) {
   
    const mapaEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    
    let textoEncriptado = texto.split('').map(letra => {
        return mapaEncriptacion[letra] || letra;
    }).join('');

    return textoEncriptado;
}



function desencriptarTexto(texto) {
    const mapaEncriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };


    let textoDesencriptado = texto.split('').map(letra => {
        return mapaEncriptacion[letra] || letra;
    }).join('');

    return textoDesencriptado;
}
    


