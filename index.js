const express = require('express');
const faker = require('faker')
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hoa mi server en exoress');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hoa soy una nueva ruta');
});


app.get('/products', (req, res) => {
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



app.get('/products/filter', (req, res) => {
  res.send('yo soy un filtro')
})

app.get('/products/:id', (req, res) => {
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


  app.get('/users', (req, res) => {
  const{limit, offset} = req.query
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }
})

app.get('/categories/:categoryId/productos/:productoId', (req,res) => {
  const { categoryId, productoId } = req.params
  res.json({
    categoryId,
    productoId
  })
})

app.listen(port, () => {
  console.log('Mi port' + port);
});
