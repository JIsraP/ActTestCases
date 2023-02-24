import { nombre, tamanoBebida, validarBebida } from "../main";

describe('Nombre de bebida valido', () => {
    test('Longitud entre 2 y 15', () => {
        expect(nombre("Coca cola")).toBe("Nombre de bebida valido");
        expect(nombre("Te chai")).toBe("Nombre de bebida valido");
        expect(nombre("Frapuchino")).toBe("Nombre de bebida valido");
    })
})

describe('Nombre de bebida invalido', () => {
    test('Nombre no es alfabetico', () => {
        expect(nombre("12")).toBe("Nombre no es alfabetico")
        expect(nombre("-")).toBe("Nombre no es alfabetico")
        expect(nombre("!")).toBe("Nombre no es alfabetico")
    })
    test('Longitud incorrecta < 2 chars', () => {
        expect(nombre("q")).toBe("El nombre solo tiene menos de dos caracteres")
        expect(nombre(" ")).toBe("El nombre solo tiene menos de dos caracteres")
        expect(nombre("z")).toBe("El nombre solo tiene menos de dos caracteres")
    })
    test('Longitud incorrecta > 15 chars', () => {
        expect(nombre("el nombre es demasiado largo")).toBe("El nombre tiene mas de quince carcateres")
        expect(nombre("iphone catorce pro max")).toBe("El nombre tiene mas de quince carcateres")
        expect(nombre("Silla azul del tec con rueditas")).toBe("El nombre tiene mas de quince carcateres")
    })     
})

describe('Tamaño de bebida valido', () => {
    test('Valor tamaño de la bebida entre 1 y 48', () => {
        expect(tamanoBebida("2, 3, 6, 8")).toBe("Tamaño valido");
        expect(tamanoBebida("1, 20, 30, 48")).toBe("Tamaño valido");
        expect(tamanoBebida("5, 10, 15, 20")).toBe("Tamaño valido");
    })    
})

describe('Tamaño de bebida invalido', () => {
    test('La lista de tamaño > 5', () => {
        expect(tamanoBebida("2, 32, 8, 3, 7, 9, 10")).toBe("Tamaño invalido");
        expect(tamanoBebida("2, 5, 1, 2, 0, 1, 10")).toBe("Tamaño invalido");  
        expect(tamanoBebida("2, 0, 0, 3, 7, 3, 9")).toBe("Tamaño invalido");  
    })    
    test('Elemento en lista de tamaño < 1', () => {
        expect(tamanoBebida("0, 2, 3, 8")).toBe("Tamaño por debajo del limite 1");
        expect(tamanoBebida("-1, 4, 5, 8")).toBe("Tamaño por debajo del limite 1");
        expect(tamanoBebida("-6, 2, 3, 8")).toBe("Tamaño por debajo del limite 1");
    })
    test('Elemento en lista de tamaño > 48', () => {
        expect(tamanoBebida("1,2,6,50")).toBe("Tamaño por encima del limite 48");
        expect(tamanoBebida("1,2,6,100")).toBe("Tamaño por encima del limite 48");
        expect(tamanoBebida("1,2,6,500")).toBe("Tamaño por encima del limite 48");
    })
    test('Lista en orden no ascendente', () => {
        expect(tamanoBebida("50,6,50")).toBe("La lista de tamaños no se encuentra en orden ascendente");
        expect(tamanoBebida("5,100,50")).toBe("La lista de tamaños no se encuentra en orden ascendente");
        expect(tamanoBebida("30,20,50")).toBe("La lista de tamaños no se encuentra en orden ascendente");
    })
    test('Lista con decimales', () => {
        expect(tamanoBebida("4, 3.4, 6, 2")).toBe("Tamaño invalido, no puedes utilizar decimales");
        expect(tamanoBebida("0.1, 3.4, 6, 2")).toBe("Tamaño invalido, no puedes utilizar decimales");  
        expect(tamanoBebida("4, 3, 0.6, 2")).toBe("Tamaño invalido, no puedes utilizar decimales");  
    })
    test('Lista no numerica', () => {
        expect(tamanoBebida("b, 3, 6, 3")).toBe("Tamaño invalido, no puedes utilizar letras");
        expect(tamanoBebida("2, 3, /, 3")).toBe("Tamaño invalido, no puedes utilizar letras");  
        expect(tamanoBebida("2, (), 6, 3")).toBe("Tamaño invalido, no puedes utilizar letras");  
    })
})

describe('Bebida valida', () => {
    test('Nombre y tamaños correctos', () => {
        expect(validarBebida("Coca Cola, 1,2,4")).toBe("Bebida valida");
        expect(validarBebida("Frapuchino, 1, 5, 10, 48")).toBe("Bebida valida");
        expect(validarBebida("Te chai, 1")).toBe("Bebida valida");
    })
})

describe('Bebida invalida', () => {
    test('Nombre correcto, pero tamaño incorrecto', () => {
        expect(validarBebida("Coca Cola")).toBe("Bebida invalida");
        expect(validarBebida("Coca Cola, 0")).toBe("Bebida invalida");
        expect(validarBebida("Coca Cola, /")).toBe("Bebida invalida");
    })
    test('Nombre incorrecto, pero tamaño valido', () => {
        expect(validarBebida("El nombre es demasiado largo, 1,2,4")).toBe("Bebida invalida");
        expect(validarBebida("iphone doce pro max, 1, 5, 10, 48")).toBe("Bebida invalida");
        expect(validarBebida("Silla azul del tec con rueditas, 1")).toBe("Bebida invalida");
    })

})
