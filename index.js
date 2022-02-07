const express = require('express');
const routerApi = require('./routes/index')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')


const app = express()
const port = 5000;

// this express method help us to capture de body from the requests
// we receive from post method on the url
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hoa mi server en exoress');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hoa soy una nueva ruta');
});


routerApi(app)


// THE MIDDLEWARES have to be called after the routing
// and the secuence has to be according what the middleware method next
// was created
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log('Mi port' + port);
});
