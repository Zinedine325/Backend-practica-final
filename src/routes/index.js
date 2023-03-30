const { Router } = require('express');
const router = Router();

// Raíz http://localhost/
router.get('/', (req, res) => {
    res.json({
        "Titulo" : "Api tienda"
    });
});

module.exports = router;