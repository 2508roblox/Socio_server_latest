"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.envConfig = void 0;
var _dotenv = _interopRequireWildcard(require("dotenv"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
_dotenv["default"].config();

// if (!env) {
//   console.log(`Bạn chưa cung cấp biến môi trường NODE_ENV (ví dụ: development, production)`)
//   console.log(`Phát hiện NODE_ENV = ${env}`)
//   process.exit(1)
// }

// console.log(`Phát hiện NODE_ENV = ${env}, vì thế app sẽ dùng file môi trường là ${envFilename}`)

// if (!fs.existsSync(path.resolve(envFilename))) {
//   console.log(`Không tìm thấy file môi trường ${envFilename}`)
//   console.log(`Lưu ý: App không dùng file .env, ví dụ môi trường là development thì app sẽ dùng file .env.development`)
//   console.log(`Vui lòng tạo file ${envFilename} và tham khảo nội dung ở file .env.example`)
//   process.exit(1)
// }
var envHandle = function envHandle() {
  var env = process.env.NODE_ENV || 'development';
  var envFilename = ".env.".concat(env);
  console.log("check env", envFilename);
  (0, _dotenv.config)({
    path: envFilename
  });
  return {
    port: process.env.PORT || '4000',
    host: process.env.HOST,
    mongoDBPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbTweetsCollection: process.env.DB_TWEETS_COLLECTION,
    dbUsersCollection: process.env.DB_USERS_COLLECTION,
    dbHashtagsCollection: process.env.DB_HASHTAGS_COLLECTION,
    dbBookmarksCollection: process.env.DB_BOOKMARKS_COLLECTION,
    dbLikesCollection: process.env.DB_LIKES_COLLECTION,
    dbRefreshTokensCollection: process.env.DB_REFRESH_TOKENS_COLLECTION,
    dbFollowersCollection: process.env.DB_FOLLOWERS_COLLECTION,
    dbVideoStatusCollection: process.env.DB_VIDEO_STATUS_COLLECTION,
    dbConversationCollection: process.env.DB_CONVERSATION_COLLECTION,
    passwordSecret: process.env.PASSWORD_SECRET,
    jwtSecretAccessToken: process.env.JWT_SECRET_ACCESS_TOKEN,
    jwtSecretRefreshToken: process.env.JWT_SECRET_REFRESH_TOKEN,
    jwtSecretEmailVerifyToken: process.env.JWT_SECRET_EMAIL_VERIFY_TOKEN,
    jwtSecretForgotPasswordToken: process.env.JWT_SECRET_FORGOT_PASSWORD_TOKEN,
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    emailVerifyTokenExpiresIn: process.env.EMAIL_VERIFY_TOKEN_EXPIRES_IN,
    forgotPasswordTokenExpiresIn: process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    awsRegion: process.env.AWS_REGION,
    sesFromAddress: process.env.SES_FROM_ADDRESS
  };
};
var envConfig = exports.envConfig = envHandle();
// export const isProduction = env === 'production'