import type { CSSObject } from '@ant-design/cssinjs';
export type ComponentToken = {
    starColor: string;
    starSize: number;
    starHoverScale: CSSObject['transform'];
    starBg: string;
};
declare const _default: (prefixCls: string) => import("../../theme/internal").UseComponentStyleResult;
export default _default;
