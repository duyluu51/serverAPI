const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()
const port = (process.env.PORT || 5000)
require('dotenv').config()

// Rounter
const route = require('./src/routes');

// Thiết lập file tĩnh
app.use(express.static(path.join(__dirname, 'public')))
app.use(
    express.urlencoded({
        extended: true,
    }),
)


app.use(cors())
app.use(methodOverride('_method'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ sayHi: 'Testing hello from server, nice to meet you!' })
})

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    // Thiết lập kết nối đến db
    const db = require('./src/config/db')
    // Connect to db
    db.connect()
})