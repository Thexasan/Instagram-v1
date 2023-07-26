import type { NoticeProps } from 'rc-notification/lib/Notice';
import * as React from 'react';
import type { IconType } from './interface';
export declare const TypeIcon: {
    info: React.JSX.Element;
    success: React.JSX.Element;
    error: React.JSX.Element;
    warning: React.JSX.Element;
    loading: React.JSX.Element;
};
export declare function getCloseIcon(prefixCls: string, closeIcon?: React.ReactNode): string | number | true | Iterable<React.ReactNode> | React.JSX.Element;
export interface PureContentProps {
    prefixCls: string;
    icon?: React.ReactNode;
    message?: React.ReactNode;
    description?: React.ReactNode;
    btn?: React.ReactNode;
    type?: IconType;
    role?: 'alert' | 'status';
}
export declare function PureContent({ prefixCls, icon, type, message, description, btn, role, }: PureContentProps): React.JSX.Element;
export interface PurePanelProps extends Omit<NoticeProps, 'prefixCls' | 'eventKey'>, Omit<PureContentProps, 'prefixCls' | 'children'> {
    prefixCls?: string;
}
