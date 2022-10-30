import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obetenerProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const rutas = Router();

rutas.route("/productos")
.get(listarProductos)
.post([
  check("nombreProducto")
  .notEmpty()
  .withMessage("Campo obligatorio")
  .isLength({min:2, max:50})
  .withMessage("El nombre del producto debe tener entre 2 y 50 caracteres"),
  check("precio")
  .notEmpty()
  .withMessage("Campo obligatorio")
  .isNumeric()
  .withMessage("EL precio debe ser un numero")
  .custom((valor)=>{
    if(valor >= 1 && valor <= 1000){
      return true
    }else{
      throw new Error("El precio debe estar entre 1 y 1000")
    }
  }),
  check("imagen")
  .notEmpty()
  .withMessage("Campo obligatorio")
  .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
  .withMessage("Ingresar URL valida"),
  check("categoria")
  .notEmpty()
  .withMessage("Campo obligatorio")
  .isIn(["Bebida caliente", "Bebida fria", "Dulce", "Salado"])
  .withMessage("Campo obligatorio")
],crearProducto);

rutas.route("/productos/:id")
.get(obetenerProducto)
.put([
  check("nombreProducto")
  .notEmpty()
  .withMessage("Campo obligatorio")
  .isLength({min:2, max:50})
  .withMessage("El nombre del producto debe tener entre 2 y 50 caracteres"),
  check("precio")
  .notEmpty()
  .withMessage("Campo obligatorio")
  .isNumeric()
  .withMessage("El precio debe ser un numero")
  .custom((valor)=>{
    if(valor >= 1 && valor <= 1000){
      return true
    }else{
      throw new Error("EL precio debe estar entre 1 y 1000")
    }
  })
],editarProducto)
.delete(borrarProducto);

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
