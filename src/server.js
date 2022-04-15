import express from "express"
import { mapOrder } from "*/utils/sorts"
const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', (req, res) => {
  res.end('<h1>Helloooooo</h1>')
})

app.listen(port, hostname, () => {
  console.log(`Run at ${hostname} : ${port}`)
})