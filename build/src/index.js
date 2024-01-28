"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _config = require("./constants/config.js");
var _databaseServices = require("./services/database.services.js");
var _errorMiddleware = require("./middlewares/error.middleware.js");
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _postsRoutes = _interopRequireDefault(require("./routes/posts.routes.js"));
var _conversationsRoutes = _interopRequireDefault(require("./routes/conversations.routes.js"));
var _friendRequestsRoutes = _interopRequireDefault(require("./routes/friendRequests.routes.js"));
var _usersRoutes = _interopRequireDefault(require("./routes/users.routes.js"));
_dotenv["default"].config();
var db = new _databaseServices.DatabaseService();
var app = (0, _express["default"])();
await db.connect();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());

// authentication endpoint
app.use('/api/v1/auth', _authRoutes["default"]);
app.use('/api/v1/posts', _postsRoutes["default"]);
app.use('/api/v1/conversations', _conversationsRoutes["default"]);
app.use('/api/v1/friends', _friendRequestsRoutes["default"]);
app.use('/api/v1/users', _usersRoutes["default"]);
app.use('/api/v1/messages', messageRouter);
// posts endpoint
// friends endpoint
// conversation endpoint
// authentication endpoint

//error middleware
app.use(_errorMiddleware.notFound);
app.use(_errorMiddleware.errorHandler);
app.listen(_config.envConfig.port, function () {
  console.log("Example app listeningat http://localhost:".concat(_config.envConfig.port));
});