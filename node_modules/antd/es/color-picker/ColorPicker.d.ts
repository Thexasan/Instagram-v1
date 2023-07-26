import type { ColorPickerProps as RcColorPickerProps } from '@rc-component/color-picker';
import type { CSSProperties } from 'react';
import React from 'react';
import type { PopoverProps } from '../popover';
import type { Color } from './color';
import type { ColorFormat, PresetsItem, TriggerPlacement, TriggerType } from './interface';
export interface ColorPickerProps extends Omit<RcColorPickerProps, 'onChange' | 'value' | 'defaultValue' | 'panelRender'> {
    value?: Color | string;
    defaultValue?: Color | string;
    children?: React.ReactNode;
    open?: boolean;
    disabled?: boolean;
    placement?: TriggerPlacement;
    trigger?: TriggerType;
    format?: keyof typeof ColorFormat;
    allowClear?: boolean;
    presets?: PresetsItem[];
    arrow?: boolean | {
        pointAtCenter: boolean;
    };
    styles?: {
        popup?: CSSProperties;
    };
    rootClassName?: string;
    onOpenChange?: (open: boolean) => void;
    onFormatChange?: (format: ColorFormat) => void;
    onChange?: (value: Color, hex: string) => void;
    onClear?: () => void;
    getPopupContainer?: PopoverProps['getPopupContainer'];
    autoAdjustOverflow?: PopoverProps['autoAdjustOverflow'];
}
type CompoundedComponent = React.FC<ColorPickerProps> & {
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};
declare const ColorPicker: CompoundedComponent;
declare const PurePanel: any;
export default ColorPicker;
