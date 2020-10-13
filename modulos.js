const MiLibreria = {

    // mi forEach
    // El forEach()método llama a una función una vez para cada elemento de una matriz, en orden.
    // Nota: la función no se ejecuta para elementos de matriz sin valores.
    porCada : function(articulos, callBack) {
        for (let articulo of articulos ) {
            callBack(articulo)
        }
    },

    // El método filter () crea una matriz llena de todos los elementos de la matriz que pasan una prueba (proporcionada como función).
    // Nota: filter () no ejecuta la función para elementos de matriz sin valores.
    // Nota: filter () no cambia la matriz original.
    filtra : function(articulos, callBack) {
        let res = []
        for (let articulo of articulos ) {
            if (callBack(articulo)){
                res.push(articulo)
            }         
        }
        return res
    },

    // El map()método crea una nueva matriz con el resultado de llamar a una función para cada elemento de la matriz.
    // El map()método llama a la función proporcionada una vez para cada elemento de una matriz, en orden.
    // Nota: map() no ejecuta la función para elementos de matriz sin valores.
    // Nota: este método no cambia la matriz original.
    mapea : function(articulos, callBack) {
        let res = []
        for (let articulo of articulos ) {
            res.push(callBack(articulo))
        }
        return res
    },

    // El find()método devuelve el valor del primer elemento de una matriz que pasa una prueba (proporcionado como función).
    // El método find () ejecuta la función una vez para cada elemento presente en la matriz:
    // Si encuentra un elemento de matriz donde la función devuelve un valor verdadero , find () devuelve el valor de ese elemento de matriz (y no verifica los valores restantes)
    // De lo contrario, devuelve indefinido
    // Nota: find () no ejecuta la función para matrices vacías.
    // Nota: find () no cambia la matriz original.
    encuentra : function(articulos, callBack) {
        for (let articulo of articulos ) {
            if (callBack(articulo)){
                return articulo
            }    
        }
    },

    // El findIndex()método devuelve el índice del primer elemento de una matriz que pasa una prueba (proporcionado como función).
    // El método findIndex () ejecuta la función una vez para cada elemento presente en la matriz:
    // Si encuentra un elemento de matriz donde la función devuelve un valor verdadero , findIndex () devuelve el índice de ese elemento de matriz (y no verifica los valores restantes)
    // De lo contrario, devuelve -1
    // Nota: findIndex () no ejecuta la función para elementos de matriz sin valores.
    // Nota: findIndex () no cambia la matriz original.
    encuentraIndice : function(articulos, callBack) {
        let index = 0
        for (let articulo of articulos ) {
            if (callBack(articulo)){
                return index
            } else {
                index ++
            }
        }
        return -1
    },

    // Devuelve verdadero si el valor está presente en la lista . Utiliza indexOf internamente,
    // si la lista es una matriz. Utilice fromIndex para comenzar su búsqueda en un índice determinado.
    contiene : function(articulos, valor) {
        for (let articulo of articulos ) {
            if (articulo === valor) {
                return true
            }else continue
        }
        return false
    },

    // extraer una lista de valores de propiedad
    extrae : function(arrayObjects, property) {
        let res = []
        for (let object of arrayObjects ) {
            res.push(object[property])
        }
        return res
    },

    // Devuelve una copia de la matriz con todas las instancias de los valores eliminados.
    sin : function(articulos, ...theArgs) {
        let res = []
        let aux = 0
        for(let articulo of articulos){
            for(let arg of theArgs){
                if (arg == articulo){
                    aux += 1
                }
            }
            if(aux){
                aux = 0
            }else{
                res.push(articulo)
            }
        }
        return res
    },
}

export default MiLibreria;