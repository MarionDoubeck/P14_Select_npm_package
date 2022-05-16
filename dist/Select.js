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
    updateSelect
  } = _ref;
  const optionContainerClassName = 'doubeck-select-option-container-' + name;
  const optionContainerQuery = '.doubeck-select-option-container-' + name;

  const openMenu = () => {
    const options = document.querySelectorAll("".concat(optionContainerQuery));

    if (!options[0].classList.contains('hidden')) {
      closeMenu();
      return;
    }

    options.forEach(option => option.classList.remove('hidden'));
  };

  const closeMenu = () => {
    const options = document.querySelectorAll("".concat(optionContainerQuery));

    if (options[0].classList.contains('hidden')) {
      openMenu();
      return;
    }

    options.forEach(option => option.classList.add('hidden'));
  };

  const validate = e => {
    e.preventDefault();
    updateSelect(e.target.value, name);
    closeMenu();
  };

  const options = data.map(option => /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(optionContainerClassName, " hidden"),
    key: option.name,
    onClick: e => validate(e),
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "doubeck-select-option"
  }, option.name)));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "doubeck-select-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "doubeck-select-title",
    onClick: openMenu
  }, name.charAt(0).toUpperCase() + name.slice(1), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '2rem'
    }
  }, "\u21D5")), options);
};

var _default = Select;
exports.default = _default;