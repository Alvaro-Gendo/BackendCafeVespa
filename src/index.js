import express from "express";

//crear una instancia de expres
const app = express();

//creamos una variable
app.set("port", process.env.PORT || 4000);
//usar el puerto
app.listen(app.get("port"), () =>{
    console.log("Puerto " + app.get("port"))
})

console.log("hola mundo")