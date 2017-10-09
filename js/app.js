function cipher(secret){

    var newPhrase = "";
    //recorremos todo  el string

    for(var j = 0; j < secret.length; j++){

        var toAscci = secret.charCodeAt(j); //convierte el string ingresado a su equivalente en Ascii en la posicion i

        if( toAscci > 64 && toAscci < 91) // formula para mayusculas
            newPhrase += String.fromCharCode((toAscci - 65 + 33) % 26 + 65);
        else  // para minusculas
            newPhrase += String.fromCharCode((toAscci - 97 + 33) % 26 + 97);

    }

    return newPhrase;
}


function decipher(secret){
    var newPhrase = "";

    for(var i = 0; i < secret.length; i++){

        var toAscci = secret.charCodeAt(i); //convierte el string ingresado a su equivalente en Ascii en la posicion i

        if( toAscci > 64 && toAscci < 91) //para mayusculas
            newPhrase += String.fromCharCode((toAscci - 65 - 33 + 26*2) % 26 + 65);//26*2 porque recorre el abecedario dos veces para decifrar
        else  //paraminusculas
            newPhrase += String.fromCharCode((toAscci - 97 - 33 + 26*2) % 26 + 97);

    }

    return newPhrase;

}




var phrase = prompt ('Ingrese un texto a cifrar');
document.write(cipher(phrase));


var phrase = prompt ('Ingrese un texto a descifrar');
document.write(decipher(phrase));



//validacion para cifrar solo que escribe tres veces ingrese texto cuando no se ingresa un valor correcto
/*
for(var i = 0; i < phrase.length; i++){
    if((phrase.charCodeAt(i) > 64 && phrase.charCodeAt(i) < 91) || (phrase.charCodeAt(i) > 96 && phrase.charCodeAt(i) < 123))
        document.write(cipher(phrase));
    else
        document.write("Ingrese solo texto");

}


/*
//validacion para decifrar
var phrase = prompt('Ingrese un texto cifrado');

for(var i = 0; i < phrase.length; i++){

    if((phrase.charCodeAt(i) > 64 && phrase.charCodeAt(i) < 91) || (phrase.charCodeAt(i) > 96 && phrase.charCodeAt(i) < 123))
        document.write(decipher(phrase));
    else {
        document.write("Ingrese solo texto");
    }
} */
