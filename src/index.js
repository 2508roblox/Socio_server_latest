import express from 'express';
import { envConfig } from './constants/config.js'
import connectDB from './services/database.services.js';
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
import messageRouter from './routes/message.routes.js';
import morgan from 'morgan';
import chalk from 'chalk';
// swagger
import swaggerUi from "swagger-ui-express";
import YAML  from 'yamljs'
//
export const morganMiddleware = morgan(function (tokens, req, res) {
  return [
    '\n',
    chalk.hex('#ff4757').bold('🍄  Morgan --> '),
    chalk.hex('#34ace0').bold(tokens.method(req, res)),
    chalk.hex('#ffb142').bold(tokens.status(req, res)),
    chalk.hex('#ff5252').bold(tokens.url(req, res)),
    chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
    chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
    chalk.yellow(tokens['remote-addr'](req, res)),
    chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
    chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
    '\n',
  ].join(' ');
});


dotenv.config();
const app = express();

connectDB();

// Use Swagger
const swaggerDocument = YAML.load('./src/api.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Use Morgan with the custom logger
app.use(morganMiddleware);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// authentication endpoint
app.get('/', function (req, res) {
  return res.send(
    'Server started'
  );
});
app.use('/api/v1/auth', authRouter);
// posts endpoint
app.use('/api/v1/posts', postsRouter);
// conversation endpoint
app.use('/api/v1/conversations', conversationRouter);
// friends endpoint
app.use('/api/v1/friends', friendRouter);
// users endpoint
app.use('/api/v1/users', userRouter);
// messages endpoint
app.use('/api/v1/messages', messageRouter);


//error middleware
app.use(notFound);
app.use(errorHandler);




app.listen(envConfig.port, () => {
  console.log(`App is running at http://localhost:${envConfig.port}`);

});


//    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                      _ooOoo_
//                     o8888888o
//                     88" . "88
//                     (| -_- |)
//                     O\\  =  /O
//                  ____/ \`---\`\\____
//                .'  \\\\|     |//  \`.
//               /  \\\\_|||-:- |||||- \\
//              |    | \\\\\\  -  /// |  |
//              | \\_|  ''\\---/''  |    |
//              \\  .-\\__  \`-\`  ___/-. /
//            ___\`. .'  /--.--\\  \`. . __
//         ."" '<  \`.___\\_<|>_/___.'  >'"".
//        | | :  \`- \\ \`.;\`\\ _ /\`;.\`/ -  \` : |
//        \\  \\ \`-.   \\_ __\\ /__ _/   .-\` /  /
//   ======\`-.____\`-.___\\_____/___.-\`____.-'======
//                      \`=---=\`
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//      PHẬT ĐỘ   KHÔNG LỖI   KHÔNG BUG
//   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@