// /api/hospitales


const { Router } = require('express');
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

const { getMedicos,
        crearMedico,
        actualizarMedico,
        borrarMedico } = require('../controllers/medicos');


router.get('/', getMedicos);

router.post('/', 
    [
        validarJWT,
        check('nombre', 'El nombre del medico es necesario').not().isEmpty(),
        check('hospital', 'El id del hospital debe de ser valido').isMongoId(),
        validarCampos
    ],
    crearMedico
);

router.put('/:id',
    [   
        validarJWT,
        check('nombre', 'El nombre del medico es necesario').not().isEmpty(),
        check('hospital', 'El id del hospital debe de ser valido').isMongoId(),
        validarCampos
    ],
    actualizarMedico
);

router.delete('/:id',
    borrarMedico
);



module.exports = router;