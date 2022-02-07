app.get('/categories/:categoryId/productos/:productoId', (req, res) => {
  const { categoryId, productoId } = req.params;
  res.json({
    categoryId,
    productoId,
  });
});
