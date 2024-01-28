import express from 'express';
import { envConfig } from './constants/config.js'
import { DatabaseService } from './services/database.services.js';
import { errorHandler, notFound } from './middlewares/error.middleware.js';
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.routes.js';
import postsRouter from './routes/posts.routes.js';
import conversationRouter from './routes/conversations.routes.js';
import friendRouter from './routes/friendRequests.routes.js';
import userRouter from './routes/users.routes.js';

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
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/conversations', conversationRouter);
app.use('/api/v1/friends', friendRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/messages', messageRouter);
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