const express = require('express')

//Config
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  