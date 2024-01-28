import express from 'express';
import { envConfig } from './constants/config.js'
import { DatabaseService } from './services/database.services.js';
import { errorHandler, notFound } from './middlewares/error.middleware.js';
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

dotenv.config();
let db = new DatabaseService()
const app = express();
await db.connect()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// authentication endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// posts endpoint
// friends endpoint
// conversation endpoint
// authentication endpoint


//error middleware
app.use(notFound);
app.use(errorHandler);




app.listen(envConfig.port, () => {
  console.log(`Example app listeningat http://localhost:${envConfig.port}`);
});
