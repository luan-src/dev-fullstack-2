const express = require('express')
const port = 3000

const app = express()
app.use(express.json())

const carsRoutes = require('./routes/carsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const carsData = require('./data/carsData') 

app.use('', carsRoutes)
app.use('', usersRoutes)

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`)
})