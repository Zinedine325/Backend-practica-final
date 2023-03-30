const { Router } = require('express');
const { models } = require('../db/index');
const router = Router();

// Raíz
router.get('/', async(req, res) => {
    try {
        let LstProductos = await models.productos.findAll();
        res.json(LstProductos);
    } catch(error){
        console.log(error);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        let producto = await models.productos.findByPk(id);
        res.json(producto);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async(req, res) =>{
    try {
        const { body } = req;
        let producto = await models.productos.create(body);
        res.json(producto);
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const { body } = req;

        const update = await models.productos.update(body, {
            where : {
                Id : id
            }
        });
        let producto = await models.productos.findByPk(id);
        res.json(producto);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        await models.productos.destroy({
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