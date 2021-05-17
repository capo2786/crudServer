var express = require('express');


const Perfiles = require('../models/perfiles.model');



// POST CREAR CLIENTE
const crearPerfil = (req, res) => {
    // Crear un cliente
    const perfiles = new Perfiles(req.body);

    // GUARDAR UNA OPCION EN MongoDB
    perfiles.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json({
                msg: err.message
            });
        });
};


// todos las opciones
const getPerfiles = (req, res) => {
    Perfiles.find()
        .then(perfiles => {
            res.json(perfiles);
        }).catch(err => {
            res.status(500).send({
                msg: err.message
            });
        });
};

const getIdPerfil =  (req, res) => {
    Perfiles.findById(req.params._id)
        .then(curso => {
            if (!curso) {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            res.json(curso);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            return res.status(500).json({
                msg: "Error retrieving Opciones with id " + req.params._id
            });
        });
};




// ACTUALIZAR OPCION
const actualizarPerfil =  (req, res) => {
    //Encuentra un cliente y actualízalo
    Perfiles.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(perfiles => {
            if (!perfiles) {
                return res.status(404).json({
                    msg: "Opciones no encontradas con id " + req.params.perfilesId
                });
            }
            res.json(perfiles);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).json({
                    msg: "Opciones no encontradas con id " + req.params.perfilesId
                });
            }
            return res.status(500).json({
                msg: "Error al actualizar las opciones con id " + req.params.perfilesId
            });
        });
};

//ELIMINAR OPCION
const eliminarPerfil = (req, res) => {
    Perfiles.findByIdAndRemove(req.params._id)
        .then(perfiles => {
            if (!perfiles) {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            res.json({ msg: "Opciones deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            return res.status(500).json({
                msg: "Could not delete opciones with id " + req.params._id
            });
        });
};


module.exports = {

    crearPerfil,
    getPerfiles,
    getIdPerfil,
    actualizarPerfil,
    eliminarPerfil
}