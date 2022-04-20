import { MongoClient } from 'mongodb'
import {env} from '*/config/environment'

const uri = env.MONGODB_URI

export const connectDB = async () => {
  //tạo client
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  try {
    // connect the client to the server
    await client.connect()

    await listDatabase(client)
  } finally{
    await client.close()
  }
}

const listDatabase = async (client) => {
  const databasesList = await client.db().admin().listDatabases()
  console.log(databasesList)
}