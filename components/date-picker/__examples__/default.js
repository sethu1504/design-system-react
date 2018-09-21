"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _iconSettings = require("../../../../components/icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _datePicker = require("../../../../components/date-picker");

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Example = (0, _createReactClass2.default)({
  displayName: 'DatepickerExample',
  render: function render() {
    var _this = this;

    return _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_datePicker2.default, {
      onChange: function onChange(event, data) {
        if (_this.props.action) {
          var dataAsArray = Object.keys(data).map(function (key) {
            return data[key];
          });

          _this.props.action('onChange').apply(void 0, [event, data].concat(_toConsumableArray(dataAsArray)));
        } else if (console) {
          console.log('onChange', event, data);
        }
      },
      onCalendarFocus: function onCalendarFocus(event, data) {
        if (_this.props.action) {
          var dataAsArray = Object.keys(data).map(function (key) {
            return data[key];
          });

          _this.props.action('onCalendarFocus').apply(void 0, [event, data].concat(_toConsumableArray(dataAsArray)));
        } else if (console) {
          console.log('onCalendarFocus', event, data);
        }
      }
    }));
  }
});
exports.default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime