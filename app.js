
require('dotenv').config()
const PORT = process.env.PORT || 3000
require('express-async-errors');
const express = require('express')

const app = express()

const notfound = require('./middleware/notfound')
const router = require('./routers/route')
const errorhandlemiddleware = require('./middleware/custom-error')
const connectDB = require('./connect/db')
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1',router)

app.use(notfound)
app.use(errorhandlemiddleware)

const start = async () => {
    try {
        await connectDB
        console.log("Connected");
        app.listen(PORT, () =>{
            console.log(`Server listening on port ${PORT}`);
        })
    } catch (error) {
    console.log(error); 
    }
}

start()

