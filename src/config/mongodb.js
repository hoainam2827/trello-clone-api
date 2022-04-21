import { MongoClient } from 'mongodb'
import {env} from '*/config/environment'

const uri = env.MONGODB_URI
// khai báo biến db
let dbInstance = null
// Hàm connect db
export const connectDB = async () => {
  //tạo client
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  // connect the client to the server
  await client.connect()

  // gán dbInstance bằng database lấy từ đối tượng client saukhi connect database server
  // dbInstance đã đc connect đến db
  dbInstance = client.db(env.DATABASE_NAME)
}

//get db instance
export const getDB = () => {
  if(!dbInstance) throw new Error('Must connect to database fisrt!')
  return dbInstance
}
// const listDatabase = async (client) => {
//   const databasesList = await client.db().admin().listDatabases()
//   console.log(databasesList)
// }