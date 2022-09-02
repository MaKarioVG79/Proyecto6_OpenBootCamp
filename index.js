



// Lista de compras con minimo 5 articulos .
let listaCompra = ["harina", "pan", "sal", "azucar", "avena"];
console.log(listaCompra)

listaCompra.push("Aceite de Girasol");
console.log(listaCompra)

const list1= listaCompra.slice(0, 5);
console.log(list1);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliVistas = [ 

    {titulo: "Avatar",
    director: "James Cameron", 
    fecha: "2009"},
   
    {titulo: "Avengers: Endgame",
    director: "Anthony y Joe Russo",
    fecha: "2019"},

    {titulo: "Titanic",
    director: "James Camero",
    fecha: "1997"}

];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const result = peliVistas.filter(peliVistas => peliVistas.fecha > 2010);
console.log(result);


//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

function soloDirectores({director}){
    return `${director}`
}

let direc = peliVistas.map(soloDirectores)
console.log(direc);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

function soloTitulos ({titulo}) {
    return `${titulo}`
}

let soloTitulo = peliVistas.map(soloTitulos)
console.log(soloTitulo); 

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

console.log(direc.concat(soloTitulo))

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const dosListas = [...direc, ...soloTitulo];
console.log(dosListas);
