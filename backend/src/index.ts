import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import { mintAndTransfer } from './web3-provider'

const PORT = process.env.PORT || 3334

const app = express()

app.use(morgan('tiny'))


app.post('/mint', async (req, res) => {
 try {
  const tx = await mintAndTransfer(req.body.to)
  res.json({ message: 'Minting tokens...', tx })
 } catch (error) {
  res.status(500).json({ message: 'Error minting tokens' })
 }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})