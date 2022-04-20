import express from "express"
import { mapOrder } from "*/utils/sorts"
import { connectDB } from "*/config/mongodb"
import {env} from '*/config/environment'
const app = express() //tạo app

const hostname = env.HOST
const port = env.PORT

connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.end('<h1>Helloooooo</h1>')
})

// để chạy app cho app.listen cho vào 1 port
app.listen(port, hostname, () => {
  console.log(`Run at ${hostname} : ${port}`)
})