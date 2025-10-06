import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('tiny'))


app.post('/mint', (req, res) => {
  res.json({ message: 'Minting tokens...' })
})

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})