const aynsyncHandler = require("express-async-handler")
const Gasto = require("../models/gastosModel")

const getMovimientos = aynsyncHandler (async (req, res) => {
    const movimientos = await Gasto.find({})
    res.status(200).json(movimientos)
})

const addMovimientos = aynsyncHandler (async (req, res) => {
    if(!req.body.descripcion) {
        res.status
        throw new Error('Teclea la descripcion')
    }
    if(!req.body.importe) {
        res.status(400)
        throw new Error('Teclea el importe')
    }

    const movimiento = await Gasto.create({
        descripcion: req.body.descripcion,
        importe: req.body.importe
    })

    if (movimiento) {
        res.status(201).json(movimiento)
    } else {
        res.status(500)
        throw new Error('Error al crear el movimiento')
    }
})

const deleteMovimientos = aynsyncHandler (async (req, res) => {
    const movimiento = await Gasto.findById(req.params.id)

    if (!movimiento) {
        res.status(404)
        throw new Error('Movimiento no encontrado')
    } else {
        await Gasto.deleteOne(movimiento)
        res.status(200).json({message: 'Movimiento eliminado'})
    }
})

module.exports = {
    getMovimientos,
    addMovimientos,
    deleteMovimientos
}