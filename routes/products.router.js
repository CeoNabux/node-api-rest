const express = require('express')


const ProductsServices = require('../services/product.services')


const router = express.Router()

const service = new ProductsServices()



router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products);
});



router.get('/filter', async (req, res) => {
  res.send('yo soy un filtro')
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await service.findOne(id)
  res.json(product)
})

// filter has been taken as an id
//that makes out previous api crash with no data
//so we need to solve it with the next example
//the filter has to be before the section of products id
// and not before it
//EXAMPLE WITH ERROR
// app.get('/products/filter', (req, res) => {
  //   res.send('yo soy un filtro')
  // })


router.post('/', async(req, res) => {
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json(newProduct)
})

router.patch('/:id', async(req,res) => {
  const { id } = req.params
  const body = req.body
  const product = await service.update(id, body)
  res.json(product)
})

router.delete('/:id', async (req,res) => {
  const { id } = req.params
  const product = await service.delete(id)
  res.json(product)
})




module.exports = router