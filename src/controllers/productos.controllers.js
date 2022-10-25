
export const listarProductos = (req, res) =>{
    res.send("Aqui tengo que retornar un arreglo de productos")
}

export const crearProducto = (req, res) =>{
    //extraer del body los datos
    console.log(req.body)
    //agregar validacion correspondiente
    //guardar ese producto en la BD
    res.send("esto es una prueba de peticion post")
}