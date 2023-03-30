const { Router } = require('express');
const { models } = require('../db/index');
const router = Router();

// Raíz
router.get('/', async(req, res) => {
    try {
        let LstProveedores = await models.proveedores.findAll();
        res.json(LstProveedores);
    } catch(error){
        console.log(error);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        let proveedor = await models.proveedores.findByPk(id);
        res.json(proveedor);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async(req, res) =>{
    try {
        const { body } = req;
        let proveedor = await models.proveedores.create(body);
        res.json(proveedor);
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const { body } = req;

        const update = await models.proveedores.update(body, {
            where : {
                Id : id
            }
        });
        let proveedor = await models.proveedores.findByPk(id);
        res.json(proveedor);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        await models.proveedores.destroy({
            where : {
                Id : id
            }
        });
        
        res.json("ok");
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;