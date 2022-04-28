require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express ()

const db = mongoose.connection

mongoose.connect (process.env.DATABASE_URL, {useNewUrlParser: true})

db.on('error', (error) => console.error (error))
db.once('open', () => console.log('You are connected'))

app.use(express.json())
const loosersRouter = require('./routes/loosers')
app.use('/loosers', loosersRouter)



app.listen(3000, () =>
  console.log('Hey man!')
);