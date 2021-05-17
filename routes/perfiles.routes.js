const { Router } = require('express');

const mtdoPerfil = require('../controllers/perfiles.controller')

const router = Router();

//informe largo
router.post('/',mtdoPerfil.crearPerfil);
router.get('/',mtdoPerfil.getPerfiles);
router.get('/:_id',mtdoPerfil.getIdPerfil);
router.put('/',mtdoPerfil.actualizarPerfil);
router.delete('/:_id',mtdoPerfil.eliminarPerfil);




module.exports = router;