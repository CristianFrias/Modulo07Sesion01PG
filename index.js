const { Client, Pool } = require("pg")

//  INICIO OPCIÓN 01 CLIENT *****
// const cliente = new Client({
//     user: 'postgres',
//     password: 'postgres',
//     port: 5432,
//     database: 'dvdrental',
//     host: 'localhost'
// })

// cliente.connect();

// cliente.query("SELECT * FROM actor LIMIT 10", (error, resultado) => {
//     console.table(resultado.rows);
//     cliente.end() // SIEMPRE CERRAR LA CONEXIÓN PARA QUE TERMINAL "SUELTE" LA CONSULTA
// })
//  FIN OPCIÓN 01 CLIENT *****


//  INICIO OPCIÓN 02 POOL *****
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'dvdrental',
    host: 'localhost',
    // idleTimeoutMillis: 3_000 // TIEMPO QUE LE DAMOS A LA CONSULTA PARA QUE FINALICE
})

// pool.connect(); NO ES NECESARIO

pool.query("SELECT * FROM actor LIMIT 10", (error, resultado) => {
    if (error){
        return console.log(error.message);
    }
    console.log({ error });
    console.table(resultado.rows);
})