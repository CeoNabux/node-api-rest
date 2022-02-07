const express = require('express')

const faker = require('faker')

const router = express.Router()



router.get('/', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for(let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});



router.get('/filter', (req, res) => {
  res.send('yo soy un filtro')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
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
  res.json({
    message: 'created',
    data: body
  })
})




module.exports = router