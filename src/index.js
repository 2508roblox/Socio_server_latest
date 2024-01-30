import express from 'express';
import { envConfig } from './constants/config.js'
import { DatabaseService } from './services/database.services.js';
import { errorHandler, notFound } from './middlewares/error.middleware.js';
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.routes.js';

console.log(
  `
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     _ooOoo_
                    o8888888o
                    88" . "88
                    (| -_- |)
                    O\\  =  /O
                 ____/ \`---\`\\____
               .'  \\\\|     |//  \`.
              /  \\\\_|||-:- |||||- \\
             |    | \\\\\\  -  /// |  |
             | \\_|  ''\\---/''  |    |
             \\  .-\\__  \`-\`  ___/-. /
           ___\`. .'  /--.--\\  \`. . __
        ."" '<  \`.___\\_<|>_/___.'  >'"".
       | | :  \`- \\ \`.;\`\\ _ /\`;.\`/ -  \` : | 
       \\  \\ \`-.   \\_ __\\ /__ _/   .-\` /  /
  ======\`-.____\`-.___\\_____/___.-\`____.-'======
                     \`=---=\`
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     PHẬT ĐỘ   KHÔNG LỖI   KHÔNG BUG
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`
);
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
app.get('/', function (req, res) {
  return res.send(
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n" +
    "                    _ooOoo_\n" +
    "                   o8888888o\n" +
    "                   88\" . \"88\n" +
    "                   (| -_- |)\n" +
    "                   O\\  =  /O\n" +
    "                ____/ \`---\`\\____\n" +
    "              .'  \\\\|     |//  \`.\n" +
    "             /  \\\\_|||-:- |||||- \\\n" +
    "            |    | \\\\\\  -  /// |  |\n" +
    "            | \\_|  ''\\---/''  |    |\n" +
    "            \\  .-\\__  \`-\`  ___/-. /\n" +
    "          ___\`. .'  /--.--\\  \`. . __\n" +
    "       .\"\" '<  \`.___\\_<|>_/___.'  >'\"\".\n" +
    "      | | :  \`- \\ \`.;\`\\ _ /\`;.\`/ -  \` : |\n" +
    "      \\  \\ \`-.   \\_ __\\ /__ _/   .-\` /  /\n" +
    " ======\`-.____\`-.___\\_____/___.-\`____.-'======\n" +
    "                    \`=---=\`\n" +
    " ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n" +
    "    PHẬT ĐỘ   KHÔNG LỖI   KHÔNG BUG\n" +
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  );
});
app.use('/auth', authRouter);
// posts endpoint
// friends endpoint
// conversation endpoint
// authentication endpoint


//error middleware
app.use(notFound);
app.use(errorHandler);




app.listen(envConfig.port, () => {
  console.log(
    `
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                       _ooOoo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      O\\  =  /O
                   ____/ \`---\`\\____
                 .'  \\\\|     |//  \`.
                /  \\\\_|||-:- |||||- \\
               |    | \\\\\\  -  /// |  |
               | \\_|  ''\\---/''  |    |
               \\  .-\\__  \`-\`  ___/-. /
             ___\`. .'  /--.--\\  \`. . __
          ."" '<  \`.___\\_<|>_/___.'  >'"".
         | | :  \`- \\ \`.;\`\\ _ /\`;.\`/ -  \` : | 
         \\  \\ \`-.   \\_ __\\ /__ _/   .-\` /  /
    ======\`-.____\`-.___\\_____/___.-\`____.-'======
                       \`=---=\`
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
       PHẬT ĐỘ   KHÔNG LỖI   KHÔNG BUG
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  `
  );
});