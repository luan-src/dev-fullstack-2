const express = require("express")
const app = express()
const port = 3000

const tasksRoutes = require('./routes/tasks')

app.use('/api', tasksRoutes)

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`)
})
