const express = require('express')
const router = express.Router()

router.get('/:categoryId/productos/:productoId', (req, res) => {
  const { categoryId, productoId } = req.params;
  res.json({
    categoryId,
    productoId,
  });
});

module.exports = router
