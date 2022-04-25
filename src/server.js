import express from "express"
import { mapOrder } from "*/utils/sorts"
import { connectDB, getDB } from "*/config/mongodb"
import {env} from '*/config/environment'
import { BoardModel } from './models/board.model'
import { apiV1 } from './routes/v1'

connectDB()
  .then(() => console.log('Connected successfully to db server'))
  //khi kn db thành công thì khởi tạo ứng dụng
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    // dừng ứng dụng
    process.exit(1)
  })

// bootServer có chức năng dùng express tạo app r khai báo router, api và listen port, host
const bootServer = () => {
  const app = express() //tạo app
  app.use(express.json()) // enable req.body data
  const hostname = env.APP_HOST
  const port = env.APP_PORT
  
  // app.get('/test', async (req, res) => {
  //   res.end('<h1>Helloooooo</h1>')
  // })

  // FLow: /v1 -> /boards (apiV1) -> / -> BoardValidation.createNew -> BoardController.createNew
  app.use('/v1', apiV1)
  // để chạy app cho app.listen cho vào 1 port
  app.listen(port, hostname, () => {
    console.log(`Run at ${hostname} : ${port}`)
  })
}