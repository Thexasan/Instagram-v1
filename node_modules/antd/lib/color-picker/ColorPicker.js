"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _useMergedState = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireWildcard(require("react"));
var _PurePanel = _interopRequireDefault(require("../_util/PurePanel"));
var _context = require("../config-provider/context");
var _popover = _interopRequireDefault(require("../popover"));
var _theme = _interopRequireDefault(require("../theme"));
var _ColorPickerPanel = _interopRequireDefault(require("./ColorPickerPanel"));
var _ColorTrigger = _interopRequireDefault(require("./components/ColorTrigger"));
var _useColorState = _interopRequireDefault(require("./hooks/useColorState"));
var _index = _interopRequireDefault(require("./style/index"));
var _util = require("./util");
const ColorPicker = props => {
  const {
    value,
    defaultValue,
    format,
    allowClear = false,
    presets,
    children,
    trigger = 'click',
    open,
    disabled,
    placement = 'bottomLeft',
    arrow = true,
    style,
    className,
    rootClassName,
    styles,
    onFormatChange,
    onChange,
    onClear,
    onOpenChange,
    getPopupContainer,
    autoAdjustOverflow = true
  } = props;
  const {
    getPrefixCls,
    direction
  } = (0, _react.useContext)(_context.ConfigContext);
  const {
    token
  } = _theme.default.useToken();
  const [colorValue, setColorValue] = (0, _useColorState.default)(token.colorPrimary, {
    value,
    defaultValue
  });
  const [popupOpen, setPopupOpen] = (0, _useMergedState.default)(false, {
    value: open,
    postState: openData => !disabled && openData,
    onChange: onOpenChange
  });
  const [colorCleared, setColorCleared] = (0, _react.useState)(false);
  const prefixCls = getPrefixCls('color-picker', _util.customizePrefixCls);
  const [wrapSSR, hashId] = (0, _index.default)(prefixCls);
  const rtlCls = {
    [`${prefixCls}-rtl`]: direction
  };
  const mergeRootCls = (0, _classnames.default)(rootClassName, rtlCls);
  const mergeCls = (0, _classnames.default)(mergeRootCls, className, hashId);
  const mergePopupCls = (0, _classnames.default)(prefixCls, rtlCls);
  const popupAllowCloseRef = (0, _react.useRef)(true);
  const handleChange = (data, type, pickColor) => {
    let color = (0, _util.generateColor)(data);
    if (colorCleared) {
      setColorCleared(false);
      const hsba = color.toHsb();
      // ignore alpha slider
      if (colorValue.toHsb().a === 0 && type !== 'alpha') {
        hsba.a = 1;
        color = (0, _util.generateColor)(hsba);
      }
    }
    if (!value) {
      setColorValue(color);
    }
    // Only for drag-and-drop color picking
    if (pickColor) {
      popupAllowCloseRef.current = false;
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(color, color.toHexString());
  };
  const handleClear = () => {
    setColorCleared(true);
    onClear === null || onClear === void 0 ? void 0 : onClear();
  };
  const handleChangeComplete = () => {
    popupAllowCloseRef.current = true;
  };
  const popoverProps = {
    open: popupOpen,
    trigger,
    placement,
    arrow,
    rootClassName,
    getPopupContainer,
    autoAdjustOverflow
  };
  const colorBaseProps = {
    prefixCls,
    color: colorValue,
    allowClear,
    colorCleared,
    disabled,
    presets,
    format,
    onFormatChange
  };
  return wrapSSR( /*#__PURE__*/_react.default.createElement(_popover.default, Object.assign({
    style: styles === null || styles === void 0 ? void 0 : styles.popup,
    onOpenChange: visible => {
      if (popupAllowCloseRef.current) {
        setPopupOpen(visible);
      }
    },
    content: /*#__PURE__*/_react.default.createElement(_ColorPickerPanel.default, Object.assign({}, colorBaseProps, {
      onChange: handleChange,
      onChangeComplete: handleChangeComplete,
      onClear: handleClear
    })),
    overlayClassName: mergePopupCls
  }, popoverProps), children || /*#__PURE__*/_react.default.createElement(_ColorTrigger.default, {
    open: popupOpen,
    className: mergeCls,
    style: style,
    color: colorValue,
    prefixCls: prefixCls,
    disabled: disabled,
    colorCleared: colorCleared
  })));
};
if (process.env.NODE_ENV !== 'production') {
  ColorPicker.displayName = 'ColorPicker';
}
const PurePanel = (0, _PurePanel.default)(ColorPicker, 'color-picker', /* istanbul ignore next */
prefixCls => prefixCls, props => Object.assign(Object.assign({}, props), {
  placement: 'bottom',
  autoAdjustOverflow: false
}));
ColorPicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
var _default = ColorPicker;
exports.default = _default;