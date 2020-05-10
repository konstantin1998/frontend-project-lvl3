"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _differenceCreator = _interopRequireDefault(require("./differenceCreator"));

var _formatters = _interopRequireDefault(require("./formatters"));

var _parsers = _interopRequireDefault(require("./parsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const extractType = filePath => {
  const dotIndex = 1;
  return _path.default.extname(filePath).slice(dotIndex);
};

const compare = (fileBeforePath, fileAfterPath, outputFormat) => {
  const inputFileType = extractType(fileAfterPath);
  const objBefore = (0, _parsers.default)(_fs.default.readFileSync(fileBeforePath).toString(), inputFileType);
  const objAfter = (0, _parsers.default)(_fs.default.readFileSync(fileAfterPath).toString(), inputFileType);
  const fileDiff = (0, _differenceCreator.default)(objBefore, objAfter);
  return (0, _formatters.default)(fileDiff, outputFormat);
};

var _default = compare;
exports.default = _default;