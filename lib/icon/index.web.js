'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var warnMsg = 'Icon props.type is invalid, have you set svg-sprite-loader correctly? see https://goo.gl/kN8oiw';

var Icon = function (_React$Component) {
    (0, _inherits3['default'])(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3['default'])(this, Icon);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));

        _this.renderSvg = function () {
            var type = _this.props.type;

            var svg = void 0;
            try {
                svg = require('./style/assets/' + type + '.svg');
            } catch (e) {} finally {
                return svg;
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                className = _a.className,
                style = _a.style,
                size = _a.size,
                restProps = __rest(_a, ["type", "className", "style", "size"]);
            if (!type || typeof type !== 'string') {
                console.error(warnMsg);
                return null;
            }
            var xlinkHref = this.renderSvg();
            var outerIcon = void 0;
            if (!xlinkHref) {
                outerIcon = true;
                xlinkHref = type;
                if (!/^#/.test(type)) {
                    console.error(warnMsg);
                }
            } else {
                if (!/^#/.test(xlinkHref)) {
                    console.error(warnMsg);
                }
                xlinkHref = '#' + type;
            }
            var iconClassName = (0, _classnames2['default'])((_classNames = {
                'am-icon': true
            }, (0, _defineProperty3['default'])(_classNames, 'am-icon-' + (outerIcon ? type.substr(1) : type), true), (0, _defineProperty3['default'])(_classNames, 'am-icon-' + size, true), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames));
            return _react2['default'].createElement(
                'svg',
                (0, _extends3['default'])({ className: iconClassName, style: style }, restProps),
                _react2['default'].createElement('use', { xlinkHref: xlinkHref })
            );
        }
    }]);
    return Icon;
}(_react2['default'].Component);

exports['default'] = Icon;

Icon.defaultProps = {
    size: 'md'
};
module.exports = exports['default'];