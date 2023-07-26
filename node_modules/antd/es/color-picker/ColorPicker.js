import classNames from 'classnames';
import useMergedState from "rc-util/es/hooks/useMergedState";
import React, { useContext, useRef, useState } from 'react';
import genPurePanel from '../_util/PurePanel';
import { ConfigContext } from '../config-provider/context';
import Popover from '../popover';
import theme from '../theme';
import ColorPickerPanel from './ColorPickerPanel';
import ColorTrigger from './components/ColorTrigger';
import useColorState from './hooks/useColorState';
import useStyle from './style/index';
import { customizePrefixCls, generateColor } from './util';
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
  } = useContext(ConfigContext);
  const {
    token
  } = theme.useToken();
  const [colorValue, setColorValue] = useColorState(token.colorPrimary, {
    value,
    defaultValue
  });
  const [popupOpen, setPopupOpen] = useMergedState(false, {
    value: open,
    postState: openData => !disabled && openData,
    onChange: onOpenChange
  });
  const [colorCleared, setColorCleared] = useState(false);
  const prefixCls = getPrefixCls('color-picker', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const rtlCls = {
    [`${prefixCls}-rtl`]: direction
  };
  const mergeRootCls = classNames(rootClassName, rtlCls);
  const mergeCls = classNames(mergeRootCls, className, hashId);
  const mergePopupCls = classNames(prefixCls, rtlCls);
  const popupAllowCloseRef = useRef(true);
  const handleChange = (data, type, pickColor) => {
    let color = generateColor(data);
    if (colorCleared) {
      setColorCleared(false);
      const hsba = color.toHsb();
      // ignore alpha slider
      if (colorValue.toHsb().a === 0 && type !== 'alpha') {
        hsba.a = 1;
        color = generateColor(hsba);
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
  return wrapSSR( /*#__PURE__*/React.createElement(Popover, Object.assign({
    style: styles === null || styles === void 0 ? void 0 : styles.popup,
    onOpenChange: visible => {
      if (popupAllowCloseRef.current) {
        setPopupOpen(visible);
      }
    },
    content: /*#__PURE__*/React.createElement(ColorPickerPanel, Object.assign({}, colorBaseProps, {
      onChange: handleChange,
      onChangeComplete: handleChangeComplete,
      onClear: handleClear
    })),
    overlayClassName: mergePopupCls
  }, popoverProps), children || /*#__PURE__*/React.createElement(ColorTrigger, {
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
const PurePanel = genPurePanel(ColorPicker, 'color-picker', /* istanbul ignore next */
prefixCls => prefixCls, props => Object.assign(Object.assign({}, props), {
  placement: 'bottom',
  autoAdjustOverflow: false
}));
ColorPicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
export default ColorPicker;