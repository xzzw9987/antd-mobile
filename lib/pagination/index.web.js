'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../button/index.web');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../flex/index.web');

var _index4 = _interopRequireDefault(_index3);

var _getLocale = require('../_util/getLocale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:jsx-no-multiline-js */
var Pagination = function (_React$Component) {
    (0, _inherits3['default'])(Pagination, _React$Component);

    function Pagination(props) {
        (0, _classCallCheck3['default'])(this, Pagination);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {
            current: props.current
        };
        return _this;
    }

    (0, _createClass3['default'])(Pagination, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                current: nextProps.current
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(p) {
            this.setState({
                current: p
            });
            if (this.props.onChange) {
                this.props.onChange(p);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this,
                _classNames2;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                mode = _props.mode,
                total = _props.total,
                simple = _props.simple;

            var current = this.state.current;
            var locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'Pagination', function () {
                return require('./locale/zh_CN');
            });
            var prevText = locale.prevText,
                nextText = locale.nextText;

            var markup = _react2['default'].createElement(
                _index4['default'],
                null,
                _react2['default'].createElement(
                    _index4['default'].Item,
                    { className: prefixCls + '-wrap-btn ' + prefixCls + '-wrap-btn-prev' },
                    _react2['default'].createElement(
                        _index2['default'],
                        { inline: true, disabled: current <= 0, onClick: function onClick() {
                                return _this2.onChange(current - 1);
                            } },
                        prevText
                    )
                ),
                this.props.children ? _react2['default'].createElement(
                    _index4['default'].Item,
                    null,
                    this.props.children
                ) : !simple && _react2['default'].createElement(
                    _index4['default'].Item,
                    { className: prefixCls + '-wrap', 'aria-live': 'assertive' },
                    _react2['default'].createElement(
                        'span',
                        { className: 'active' },
                        current + 1
                    ),
                    '/',
                    _react2['default'].createElement(
                        'span',
                        null,
                        total
                    )
                ),
                _react2['default'].createElement(
                    _index4['default'].Item,
                    { className: prefixCls + '-wrap-btn ' + prefixCls + '-wrap-btn-next' },
                    _react2['default'].createElement(
                        _index2['default'],
                        { inline: true, disabled: current >= total - 1, onClick: function onClick() {
                                return _this2.onChange(_this2.state.current + 1);
                            } },
                        nextText
                    )
                )
            );
            if (mode === 'number') {
                markup = _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-wrap' },
                    _react2['default'].createElement(
                        'span',
                        { className: 'active' },
                        current + 1
                    ),
                    '/',
                    _react2['default'].createElement(
                        'span',
                        null,
                        total
                    )
                );
            } else if (mode === 'pointer') {
                var arr = [];
                for (var i = 0; i < total; i++) {
                    var _classNames;

                    arr.push(_react2['default'].createElement(
                        'div',
                        { key: 'dot-' + i, className: (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrap-dot', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrap-dot-active', i === current), _classNames)) },
                        _react2['default'].createElement('span', null)
                    ));
                }
                markup = _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-wrap' },
                    arr
                );
            }
            var cls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls, true), (0, _defineProperty3['default'])(_classNames2, className, !!className), _classNames2));
            return _react2['default'].createElement(
                'div',
                { className: cls, style: style },
                markup
            );
        }
    }]);
    return Pagination;
}(_react2['default'].Component);

exports['default'] = Pagination;

Pagination.defaultProps = {
    prefixCls: 'am-pagination',
    mode: 'button',
    current: 0,
    simple: false,
    onChange: function onChange() {}
};
Pagination.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];