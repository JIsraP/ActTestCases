import { nombre, tamanoBebida, validarBebida } from "../main";

describe('Plan de pruebas', () => {
    test('Longitud de nombre entre 2 y 15', () =>{
        expect(nombre("Coca cola")).toBe("Nombre de bebida valido");
        expect(nombre("q")).toBe("El nombre solo tiene menos de dos caracteres");
        expect(nombre("el nombre es demasiado largo")).toBe("El nombre tiene mas de quince carcateres");
    });

    test('Valor tamaño de la bebida entre 1 y 48', () => {
        expect(tamanoBebida("2, 3, 6, 8")).toBe("Tamaño valido");
        expect(tamanoBebida("2, 32, 8, 3, 7, 9, 10")).toBe("Tamaño invalido");
        expect(tamanoBebida("0, 2, 3, 8")).toBe("Tamaño por debajo del limite 1");
        expect(tamanoBebida("1,2,6,50")).toBe("Tamaño por encima del limite 48");
        expect(tamanoBebida("50,6,50")).toBe("La lista de tamaños no se encuentra en orden ascendente");
    });

    test('Definir si la bebida es valida', () => {
        expect(validarBebida("Coca Cola, 1,2,4")).toBe("Bebida valida");
        expect(validarBebida("Coca Cola")).toBe("No se definio un tamaño en la bebida");
    });
});
