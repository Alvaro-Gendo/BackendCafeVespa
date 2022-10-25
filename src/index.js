import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import productosRutas from "./routes/productos.routes";
import "./database"
//crear una instancia de expres
const app = express();

//creamos una variable
app.set("port", process.env.PORT || 4000);
//usar el puerto
app.listen(app.get("port"), () =>{
    console.log("Puerto " + app.get("port"))
})

//middlewares: funciones que se ejecutan antes de las rutas
//da informacion extra de la terminal
app.use(morgan("dev"));
//permitir peticiones remotas
app.use(cors());
//middlewares para interpretar los objetos json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estatito
app.use(express.static(path.join(__dirname, "../public")));
// console.log(path.join(__dirname, "../public"))

//rutas:nombre de dominio + -----(lo que sigue a continuacion)/ parametro req= request(solicitud) res= response(respuestas)
//http://localhost:4000/prueba
app.use("/apicafe", productosRutas)