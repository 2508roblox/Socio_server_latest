import express from 'express';
import { envConfig } from './constants/config.js'
import { DatabaseService } from './services/database.services.js';
let db = new DatabaseService()
// await db.connect()
const app = express();




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(envConfig.port, () => {
  console.log(`Example app listeningat http://localhost:${envConfig.port}`);
});