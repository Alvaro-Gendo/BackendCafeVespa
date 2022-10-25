import { Router } from "express"; 
import { crearProducto, listarProductos } from "../controllers/productos.controllers";

const rutas = Router();

rutas.route("/productos").get(listarProductos).post(crearProducto)



export default rutas;




// app.get("/productos", (ruq, res)=>{
//     res.send("Aqui tengo que retornar un arreglo de productos")
// });
// app.post("/productos", (ruq, res)=>{
//     res.send("Esto es una prueba de GET")
// });
// app.get("/productos2", (ruq, res)=>{
//     res.send("aqui devolvemos un producto")
// });