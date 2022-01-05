const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successfull'))
  .catch(err => {
    console.log(err)
  })

app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log('Backend server is running')
})
