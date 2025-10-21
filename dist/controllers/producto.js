import {} from "express";
import Producto from "../models/producto.js";
export const getProducts = async (req, res) => {
    const listProducts = await Producto.findAll();
    res.json(listProducts);
};
export const getProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
};
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    else {
        await product.destroy();
        res.json({
            msg: 'El producto se elimino con exito!'
        });
    }
};
export const postProduct = async (req, res) => {
    const { body } = req;
    try {
        await Producto.create(body);
        res.json({
            msg: 'El producto se registro con exito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps! Ocurrio un error, comuniquese con soporte tecnico'
        });
    }
};
export const updateProduct = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = await Producto.findByPk(id);
        if (product) {
            await product.update(body);
            res.json({
                msg: 'El producto fue actualizado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps! Ocurrio un error, comuniquese con soporte tecnico'
        });
    }
};
//# sourceMappingURL=producto.js.map