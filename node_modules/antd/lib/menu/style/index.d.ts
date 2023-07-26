import type { FullToken, UseComponentStyleResult } from '../../theme/internal';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    dropdownWidth: number;
    zIndexPopup: number;
    /** @deprecated Use `groupTitleColor` instead */
    colorGroupTitle: string;
    groupTitleColor: string;
    /** @deprecated Use `itemBorderRadius` instead */
    radiusItem: number;
    itemBorderRadius: number;
    /** @deprecated Use `subMenuItemBorderRadius` instead */
    radiusSubMenuItem: number;
    subMenuItemBorderRadius: number;
    /** @deprecated Use `itemColor` instead */
    colorItemText: string;
    itemColor: string;
    /** @deprecated Use `itemHoverColor` instead */
    colorItemTextHover: string;
    itemHoverColor: string;
    /** @deprecated Use `horizontalItemHoverColor` instead */
    colorItemTextHoverHorizontal: string;
    horizontalItemHoverColor: string;
    /** @deprecated Use `itemSelectedColor` instead */
    colorItemTextSelected: string;
    itemSelectedColor: string;
    /** @deprecated Use `horizontalItemSelectedColor` instead */
    colorItemTextSelectedHorizontal: string;
    horizontalItemSelectedColor: string;
    /** @deprecated Use `itemDisabledColor` instead */
    colorItemTextDisabled: string;
    itemDisabledColor: string;
    /** @deprecated Use `dangerItemColor` instead */
    colorDangerItemText: string;
    dangerItemColor: string;
    /** @deprecated Use `dangerItemHoverColor` instead */
    colorDangerItemTextHover: string;
    dangerItemHoverColor: string;
    /** @deprecated Use `dangerItemSelectedColor` instead */
    colorDangerItemTextSelected: string;
    dangerItemSelectedColor: string;
    /** @deprecated Use `dangerItemActiveBg` instead */
    colorDangerItemBgActive: string;
    dangerItemActiveBg: string;
    /** @deprecated Use `dangerItemSelectedBg` instead */
    colorDangerItemBgSelected: string;
    dangerItemSelectedBg: string;
    /** @deprecated Use `itemBg` instead */
    colorItemBg: string;
    itemBg: string;
    /** @deprecated Use `itemHoverBg` instead */
    colorItemBgHover: string;
    itemHoverBg: string;
    /** @deprecated Use `subMenuItemBg` instead */
    colorSubItemBg: string;
    subMenuItemBg: string;
    /** @deprecated Use `itemActiveBg` instead */
    colorItemBgActive: string;
    itemActiveBg: string;
    /** @deprecated Use `itemSelectedBg` instead */
    colorItemBgSelected: string;
    itemSelectedBg: string;
    /** @deprecated Use `horizontalItemSelectedBg` instead */
    colorItemBgSelectedHorizontal: string;
    horizontalItemSelectedBg: string;
    /** @deprecated Use `activeBarWidth` instead */
    colorActiveBarWidth: number;
    activeBarWidth: number;
    /** @deprecated Use `activeBarHeight` instead */
    colorActiveBarHeight: number;
    activeBarHeight: number;
    /** @deprecated Use `activeBarBorderWidth` instead */
    colorActiveBarBorderSize: number;
    activeBarBorderWidth: number;
    itemMarginInline: number;
    horizontalItemHoverBg: string;
    horizontalItemBorderRadius: number;
}
export interface MenuToken extends FullToken<'Menu'> {
    menuItemHeight: number;
    menuHorizontalHeight: number;
    menuItemPaddingInline: number;
    menuArrowSize: number;
    menuArrowOffset: string;
    menuPanelMaskInset: number;
    menuSubMenuBg: string;
}
declare const _default: (prefixCls: string, injectStyle: boolean) => UseComponentStyleResult;
export default _default;
