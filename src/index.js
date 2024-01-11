import express from 'express';
const app = express();
import { envConfig } from './constants/config.js'
console.log(envConfig)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(envConfig.port, () => {
  console.log(`Example app listeningat http://localhost:${envConfig.port}`);
});