"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Select = _ref => {
  let {
    name,
    data,
    value,
    updateSelect
  } = _ref;
  const options = data.map(select => /*#__PURE__*/_react.default.createElement("option", {
    key: select.name
  }, select.name));
  return /*#__PURE__*/_react.default.createElement("select", {
    name: name,
    value: value,
    onChange: e => updateSelect(e.target.value, name)
  }, options);
};

var _default = Select;
exports.default = _default;