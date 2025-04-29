/*
Rutas de usuarios / auth
host + /api/auth
*/

const {Router} = require('express')
const {check} =require('express-validator')
const validarCampos = require('../middlewares/validarCampos')
const {validarJWT}= require('../middlewares/validar-jwt')
const router = Router();

const {crearUsuario,loginUsuario,revalidarToken} = require('../controllers/auth');

router.post(
'/new',
        [ //middleware
        check('name','el nombre es obligatorio').not().isEmpty(),
        check('email','el email es obligatorio').isEmail(),
        check('password','el password debe tener al menos 6 caractereres').isLength({min:6}),
        validarCampos
        ],
crearUsuario);
 
router.post(
'/',
       [ //middleware 
        check('email','el email es obligatorio').isEmail(),
        check('password','el password debe tener al menos 6 caractereres').isLength({min:6}),
        validarCampos        
       ],
loginUsuario);

router.get('/renew',validarJWT, revalidarToken)


module.exports = router;