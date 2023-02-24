// Check if a string is alphabetic
function isAlphabetic(str) {
    return /^[a-zA-Z\s]+$/.test(str);
}

// Check existance of a float in a string
function floatRegex(str){
    return /-?\d+(\.\d+)/.test(str);
}

function onlyNumbers(str){
    return /^[\d,\s]*$/.test(str);
}

export function nombre(name){
    if(isAlphabetic(name)){
        if(name.length > 1 && name.length < 16){
            return "Nombre de bebida valido";
        }
        if(name.length < 2){
            return "El nombre solo tiene menos de dos caracteres";
        }
        if(name.length > 15){
            return "El nombre tiene mas de quince carcateres";
        }
    }
    return "Nombre no es alfabetico";
}

export function tamanoBebida(lista){
    if(floatRegex(lista)){
        return "Tamaño invalido, no puedes utilizar decimales";
    }
    if(!onlyNumbers(lista)){
        return "Tamaño invalido, no puedes utilizar letras";
    }
    var arr = lista.split(",")
    var val = parseInt(arr[0]);
    if(arr.length < 6 && arr.length > 0){
        for(var i = 0; i < arr.length; i++){
            if(parseInt(arr[i + 1]) < val){
                return "La lista de tamaños no se encuentra en orden ascendente";
            }
            if(parseInt(arr[i]) < 1){
                return "Tamaño por debajo del limite 1";
            }
            if(parseInt(arr[i]) > 48){
                return "Tamaño por encima del limite 48";
            }
            val = parseInt(arr[i + 1]);
        }
        return "Tamaño valido";
    }
    return "Tamaño invalido";    
}

export function validarBebida(string){
    var params = string.split(",")
    var name = params[0]
    var tamano = params.slice(1)
    var strTamano = ""
    tamano.forEach(element => {
        strTamano += element + "," 
    });
    if(tamano.length > 0 && nombre(name) == "Nombre de bebida valido" && tamanoBebida(strTamano) == "Tamaño valido"){
        return "Bebida valida";
    }
    return "No se definio un tamaño en la bebida"
}

