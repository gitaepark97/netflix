const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')

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

app.use('/api/auth', authRoute)
app.user('/api/users', userRoute)

app.listen(process.env.PORT, () => {
  console.log('Backend server is running')
})
