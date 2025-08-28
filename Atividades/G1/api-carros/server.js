const express = require('express')
const carsRoutes = require('./routes/carsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const db = require('./database/db')
const port = 3000

const app = express()
app.use(express.json())

app.use('', carsRoutes)
app.use('', usersRoutes)

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})