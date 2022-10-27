import Producto from "../models/producto";

export const listarProductos = async (req, res) => {
  try {
    //Bsucar todos los productos en la BD
    const listaProductos = await Producto.find();
    //responder al usuario que todo salio bien
    res.status(200).json(listaProductos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al intentar buscar los productos",
    });
  }
};

export const crearProducto = async(req, res) => {
  try {
    //extraer del body los datos
    console.log(req.body);
    //agregar la validacion correspondiente
    const productoNuevo = new Producto(req.body);
    //guardar ese producto en la BD
    await productoNuevo.save();
    //responder al usuario que todo salio bien
    res.status(201).json({
        mensaje: 'El producto fue correctamente creado'
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje: 'Error al intentar agregar un producto'
    })
  }
}

export const editarProducto = async(req, res) =>{
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "El producto fue editado correctamente"
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      message: "Error el producto solicitado no pudo ser modificado"
    })
  }
}

export const borrarProducto = async(req, res) =>{
  try {
    //buscar el producto por id para borrar
    await Producto.findByIdAndDelete(req.params.id);
    // responder al frontedn si pude elminiar el producot
    res.status(200).json({
      message: "El producto fue correctamente eliminiado"
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      message: "Error al borrar producto"
    })
  }
}