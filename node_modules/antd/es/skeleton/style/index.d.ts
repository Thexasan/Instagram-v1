export type ComponentToken = {
    /** @deprecated use gradientFromColor instead. */
    color: string;
    /** @deprecated use gradientToColor instead. */
    colorGradientEnd: string;
    gradientFromColor: string;
    gradientToColor: string;
    titleHeight: number;
    blockRadius: number;
    paragraphMarginTop: number;
    paragraphLiHeight: number;
};
declare const _default: (prefixCls: string) => import("../../theme/internal").UseComponentStyleResult;
export default _default;
