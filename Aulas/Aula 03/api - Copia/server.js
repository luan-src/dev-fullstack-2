const express = require('express')
const app = express()
const port = 3000
const data = require('./data/data')
const router = express.Router()

//const routeTasks = require('./routes/tasks')

app.use(express.json())

//app.use('/tasks', routeTasks)

router.get('/', (req, res) => {
    res.send('API working')
})

app.listen(port, () => {
    console.log("Running server.js")
})
