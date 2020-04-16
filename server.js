const express = require('express')
const { db } = require('./database/db')
const taskRoute = require('./routes/route')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/Public'))
app.use('/tasks', taskRoute)

const port = process.env.PORT || 8080;

db.sync()
  .then(() => {
    app.listen(port, function(){
        console.log("Listening to port "+port)
    })
  })
  .catch((err) => {
    console.error(err)
  })

