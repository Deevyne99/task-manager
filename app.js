
const express = require("express")
const tasks = require("./controller/routes/task")
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/error-handler')
const app = express()

port = 3000

// middleware
app.use(express.json())
app.use(express.static('./public'))
// routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server is listening on port ${port}`))

    } catch (error) {
        console.log(error);
    }
}
start()