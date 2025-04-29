/*
Rutas de usuarios / evento
host + /api/events
*/

const { Router } = require('express');
const { check }  = require('express-validator');
const {isDate} = require('../helpers/isDate')
const validarCampos  = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');


const router = Router();

router.use(validarJWT);


//Obtener evento
router.get('/', getEventos)


//Crear evento
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalizar evento es obligatoria').custom(isDate),
        validarCampos
    ],
     crearEvento
);


//Actualizar evento
router.put('/:id', actualizarEvento)



//Eliminar evento
router.delete('/:id', eliminarEvento)


module.exports = router;