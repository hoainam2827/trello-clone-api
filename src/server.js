import express from "express"
import { mapOrder } from "*/utils/sorts"
import { connectDB, getDB } from "*/config/mongodb"
import {env} from '*/config/environment'
import { BoardModel } from './models/board.model'

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
  const hostname = env.APP_HOST
  const port = env.APP_PORT
  
  app.get('/test', async (req, res) => {

    // let fakeData = {
    //   title: 'Nam'
    // }
    // const newBoard = await BoardModel.createNew(fakeData)
    // console.log(newBoard)
    res.end('<h1>Helloooooo</h1>')
  })
  
  // để chạy app cho app.listen cho vào 1 port
  app.listen(port, hostname, () => {
    console.log(`Run at ${hostname} : ${port}`)
  })
}