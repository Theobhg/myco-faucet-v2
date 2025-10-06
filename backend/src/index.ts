import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'

const PORT = process.env.PORT || 3334

const app = express()

app.use(morgan('tiny'))


app.post('/mint', (req, res) => {
  res.json({ message: 'Minting tokens...' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})