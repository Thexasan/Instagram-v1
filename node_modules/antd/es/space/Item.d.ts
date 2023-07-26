import * as React from 'react';
export interface ItemProps {
    className: string;
    children: React.ReactNode;
    index: number;
    direction?: 'horizontal' | 'vertical';
    marginDirection: 'marginLeft' | 'marginRight';
    split?: React.ReactNode;
    wrap?: boolean;
    style?: React.CSSProperties;
}
export default function Item({ className, direction, index, marginDirection, children, split, wrap, style: customStyle, }: ItemProps): React.JSX.Element | null;
