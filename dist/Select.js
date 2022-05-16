"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Select = _ref => {
  let {
    name,
    data,
    updateSelect
  } = _ref;
  const optionContainerClassName = 'doubeck-select-option-container-' + name;
  const optionContainerQuery = '.doubeck-select-option-container-' + name;
  const [title, setTitle] = (0, _react.useState)(name.charAt(0).toUpperCase() + name.slice(1));

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
    const selectedValue = e.target.outerText.toLowerCase();
    updateSelect(selectedValue, name);
    setTitle(e.target.outerText);
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
  }, title, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: '2rem'
    }
  }, "\u21D5")), options);
};

var _default = Select;
exports.default = _default;