
const express = require("express")
const tasks = require("./controller/routes/task")
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express()

port = 5000

// middleware
app.use(express.json())
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server is listening on port ${port}`))

    } catch (error) {
        console.log(error);
    }
}
start()