const express = require('express')


const ProductsServices = require('../services/product.services')


const router = express.Router()

const service = new ProductsServices()



router.get('/', (req, res) => {
  const products = service.find()
  res.json(products);
});



router.get('/filter', (req, res) => {
  res.send('yo soy un filtro')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
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


router.post('/', (req, res) => {
  const body = req.body
  const newProduct = service.create(body)
  res.status(201).json(newProduct)
})

router.put('/:id', (req,res) => {
  const { id } = req.params.id
  const body = req.body
  res.json({
    message: 'update',
    data: body,
    id,
  })
})

router.patch('/:id', (req,res) => {
  const { id } = req.params
  const body = req.body
  const product = service.update(id, body)
  res.json(product)
})

router.delete('/:id', (req,res) => {
  const { id } = req.params
  const product = service.delete(id)
  res.json(product)
})




module.exports = router