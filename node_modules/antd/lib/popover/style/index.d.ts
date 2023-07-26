import type { FullToken } from '../../theme/internal';
export interface ComponentToken {
    width: number;
    minWidth: number;
    zIndexPopup: number;
}
export type PopoverToken = FullToken<'Popover'> & {
    popoverBg: string;
    popoverColor: string;
    popoverPadding: number | string;
};
declare const _default: (prefixCls: string) => import("../../theme/internal").UseComponentStyleResult;
export default _default;
