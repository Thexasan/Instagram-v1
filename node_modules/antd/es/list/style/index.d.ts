import type { CSSProperties } from 'react';
export interface ComponentToken {
    contentWidth: number;
    itemPaddingLG: string;
    itemPaddingSM: string;
    itemPadding: string;
    headerBg: string;
    footerBg: string;
    emptyTextPadding: CSSProperties['padding'];
    metaMarginBottom: CSSProperties['marginBottom'];
    avatarMarginRight: CSSProperties['marginRight'];
    titleMarginBottom: CSSProperties['marginBottom'];
    descriptionFontSize: number;
}
declare const _default: (prefixCls: string) => import("../../theme/internal").UseComponentStyleResult;
export default _default;
