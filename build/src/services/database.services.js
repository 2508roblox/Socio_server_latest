"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatabaseService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _dotenv = require("dotenv");
var _config = require("../constants/config.js");
var _mongodb = require("mongodb");
(0, _dotenv.config)();
var DatabaseService = exports.DatabaseService = /*#__PURE__*/function () {
  function DatabaseService() {
    (0, _classCallCheck2["default"])(this, DatabaseService);
    (0, _defineProperty2["default"])(this, "uri", "mongodb+srv://".concat(_config.envConfig.dbUsername, ":").concat(_config.envConfig.dbPassword, "@cluster0.qofi8wl.mongodb.net/?retryWrites=true&w=majority"));
    (0, _defineProperty2["default"])(this, "client", void 0);
    (0, _defineProperty2["default"])(this, "db", void 0);
    this.client = new _mongodb.MongoClient(this.uri, {
      serverApi: {
        version: _mongodb.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    });
    this.db = this.client.db(_config.envConfig.dbName);
  }
  (0, _createClass2["default"])(DatabaseService, [{
    key: "connect",
    value: function () {
      var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.client.connect();
            case 3:
              _context.next = 5;
              return this.db.command({
                ping: 1
              });
            case 5:
              console.log("Connected successfully to database ".concat(_config.envConfig.dbName));
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 8]]);
      }));
      function connect() {
        return _connect.apply(this, arguments);
      }
      return connect;
    }()
  }]);
  return DatabaseService;
}();