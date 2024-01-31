import { config } from "dotenv"
import { envConfig } from "../constants/config.js"
import { MongoClient, ServerApiVersion } from "mongodb"
config()


export class DatabaseService {
  uri = `mongodb+srv://${envConfig.dbUsername}:${envConfig.dbPassword}@cluster0.qofi8wl.mongodb.net/?retryWrites=true&w=majority`
  client
  db

  constructor() {
    this.client = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })
    this.db = this.client.db(envConfig.dbName)
  }

  async connect() {
    try {
      await this.client.connect();
      await this.db.command({ ping: 1 })
      console.log(`Connected successfully to database ${envConfig.dbName}`)
      console.log(`mongodb+srv://${envConfig.dbUsername}:${envConfig.dbPassword}@cluster0.qofi8wl.mongodb.net/?retryWrites=true&w=majority`)
    } catch (error) {
      console.log(error)
    }
  }


}