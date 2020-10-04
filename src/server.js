const express = require('express')
const port = 4000
const app = express();
const database = require('./config/database')
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(express.json());

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})