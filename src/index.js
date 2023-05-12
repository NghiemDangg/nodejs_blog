const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 8686

//HTTP Logger
app.use(morgan('combined'))
// Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => res.send('hello'))

app.listen(port, () => console.log(`Express app listening at http://localhost:${port}`))
