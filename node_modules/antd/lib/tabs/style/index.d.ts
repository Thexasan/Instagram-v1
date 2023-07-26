import type { FullToken } from '../../theme/internal';
export interface ComponentToken {
    zIndexPopup: number;
    cardBg: string;
    cardHeight: number;
    cardPadding: string;
    cardPaddingSM: string;
    cardPaddingLG: string;
    titleFontSize: number;
    titleFontSizeLG: number;
    titleFontSizeSM: number;
    inkBarColor: string;
    horizontalMargin: string;
    horizontalItemGutter: number;
    horizontalItemMargin: string;
    horizontalItemMarginRTL: string;
    horizontalItemPadding: string;
    horizontalItemPaddingLG: string;
    horizontalItemPaddingSM: string;
    verticalItemPadding: string;
    verticalItemMargin: string;
    itemActiveColor: string;
    itemHoverColor: string;
    itemSelectedColor: string;
    cardGutter: number;
}
export interface TabsToken extends FullToken<'Tabs'> {
    tabsCardPadding: string;
    dropdownEdgeChildVerticalPadding: number;
    tabsNavWrapPseudoWidth: number;
    tabsActiveTextShadow: string;
    tabsDropdownHeight: number;
    tabsDropdownWidth: number;
    tabsHorizontalItemMargin: string;
    tabsHorizontalItemMarginRTL: string;
}
declare const _default: (prefixCls: string) => import("../../theme/internal").UseComponentStyleResult;
export default _default;
