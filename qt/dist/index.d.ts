import * as shweet from 'shweet';
import { Medyas, CSSinR, KFCSS, CSSValue } from 'shweet';

declare class PROXY<T extends Medyas<T>, Q = Record<string, any>> extends Medyas<T, Q> {
    protected prop: string;
    protected propFN?: (p: string) => string;
    protected valFN?: (val: any) => any;
    protected string: boolean;
    protected replacer: string;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}

declare class PROP extends PROXY<PROP, {}> {
    protected prop: string;
    protected properties: Set<string>;
    none: this;
    all: this;
    colors: this;
    font: this;
    background: this;
    opacity: this;
    shadow: this;
    transform: this;
    protected valFN: (val: string) => string[];
    property(...val: any[]): this;
}
declare class TIMING extends PROXY<TIMING, {
    prop: string;
}> {
    ease: this;
    ease_in: this;
    ease_out: this;
    ease_in_out: this;
    linear: this;
    step_start: this;
    step_end: this;
    protected propFN: () => string;
    cubicBezier(x1: any, y1: any, x2: any, y2: any): this;
    steps(n: number, position: "start" | "end" | "no" | "jump-start" | "jump-end" | "jump-none" | "jump-both"): this;
}
declare class DELAY_DUR extends PROXY<DELAY_DUR, {
    prop: string;
}> {
    [k: number]: this;
    0.25: this;
    0.5: this;
    0.75: this;
    1: this;
    1.5: this;
    2: this;
    2.5: this;
    3: this;
    3.5: this;
    4: this;
    4.5: this;
    5: this;
    protected valFN: (val: string) => string;
    protected propFN: () => string;
}
declare class TRANS_ANIM extends PROXY<TRANS_ANIM, {
    isAnim: boolean;
}> {
    [k: number]: this;
    0.25: this;
    0.5: this;
    0.75: this;
    1: this;
    1.5: this;
    2: this;
    2.5: this;
    3: this;
    3.5: this;
    4: this;
    4.5: this;
    5: this;
    prop: string;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            isAnim: boolean;
        } | undefined;
        values?: {} | undefined;
    });
    protected valFN: (val: string) => string;
    protected propFN: () => string;
    get TIMING(): TIMING;
    get DELAY(): DELAY_DUR;
    get DURATION(): DELAY_DUR;
    get none(): this;
    value(val: any): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}
declare class TRANSITION extends TRANS_ANIM {
    get PROPERTY(): PROP;
    property(...val: any[]): PROP;
}

declare class PRESET extends Medyas<PRESET, {
    kf: KFCSS;
}> {
    constructor({ prefix, data, values }: {
        prefix?: string | undefined;
        data?: {
            kf: {};
        } | undefined;
        values?: {} | undefined;
    });
    get bounce(): this;
    get ping(): this;
    get pulse(): this;
    get spin(): this;
}
declare class DIRECTION extends PROXY<DIRECTION> {
    protected prop: string;
    normal: this;
    reverse: this;
    alternate: this;
    alternate_reverse: this;
}
declare class FILL extends PROXY<FILL> {
    protected prop: string;
    none: this;
    forwards: this;
    backwards: this;
    both: this;
}
declare class ITER extends PROXY<ITER, {}> {
    protected prop: string;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    get infinite(): this;
}
declare class ANIM extends Medyas<ANIM, {}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    animation(val: CSSinR): this;
    name(name: string): this;
    duration(n: number): this;
    get paused(): this;
    get running(): this;
}
declare class ANIMATION extends TRANS_ANIM {
    SET(kf: KFCSS): PRESET;
    name(name: string): ANIM;
    animation(val: CSSinR): ANIM;
    get DIRECTION(): DIRECTION;
    get FILL(): FILL;
    get ITERATION(): ITER;
}

declare class SCB<T extends PROXY<T>> {
    protected TH: T;
    protected prop: string;
    protected startEnd: [string, string];
    protected _none: string;
    protected _auto: string;
    constructor(TH: T, prop: string, startEnd?: [string, string], _none?: string, _auto?: string);
    get start(): T;
    get center(): T;
    get end(): T;
    get none(): T;
}
declare class SPACE$1<T extends PROXY<T>> extends SCB<T> {
    get around(): T;
    get between(): T;
    get even(): T;
}
declare class STRECHED$1<T extends PROXY<T>> extends SCB<T> {
    get stretch(): T;
    get baseline(): T;
    get auto(): T;
}
declare class _GAPN$1 extends PROXY<_GAPN$1> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
}
declare class GAP$1 extends PROXY<Flex, {
    direction: string;
    reversed: boolean;
}> {
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            direction: string;
            reversed: boolean;
        } | undefined;
        values?: {} | undefined;
    });
    gap(gap: number): Flex;
    get gap0(): Flex;
    get gap1(): Flex;
    get gap2(): Flex;
    get gap3(): Flex;
    get gap4(): Flex;
    get gap5(): Flex;
    rowGap(gap: number): Flex;
    colGap(gap: number): Flex;
    get GAP(): _GAPN$1;
}
declare class ALIGN$1 extends PROXY<ALIGN$1, {}> {
    protected prop: string;
    get baseline(): this;
    get stretch(): this;
    get center(): this;
    get start(): this;
    get end(): this;
}
declare class JUST$1 extends PROXY<JUST$1, {}> {
    protected prop: string;
    get start(): this;
    get center(): this;
    get end(): this;
    get none(): this;
    get around(): this;
    get between(): this;
    get even(): this;
}
declare class Flex extends GAP$1 {
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            direction: string;
            reversed: boolean;
        } | undefined;
        values?: {} | undefined;
    });
    get ALIGN(): ALIGN$1;
    get JUSTIFY(): JUST$1;
    get BASELINE(): SPACE$1<Flex>;
    get STRETCH(): SPACE$1<Flex>;
    get CENTER(): SPACE$1<Flex>;
    get START(): SPACE$1<Flex>;
    get END(): SPACE$1<Flex>;
    get column(): this;
    get columnReverse(): this;
    get row(): this;
    get rowReverse(): this;
    get wrap(): this;
    get noWrap(): this;
    get wrapReverse(): this;
    get WRAPPED(): SPACE$1<Flex>;
    get SELF(): STRECHED$1<Flex>;
    shrink(value?: number): this;
    grow(value?: number): this;
    basis(value?: number): this;
    flex(grow: number, shrink: number, basis: string): this;
}

declare class WH extends PROXY<WH, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            wh: string;
            first: string;
        } | undefined;
        values?: {} | undefined;
    });
    get pr100(): this;
    get auto(): this;
    get screen(): this;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    /**
     * value
     * @param val number
     */
    value(val: any): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}
declare class HWIDTH extends PROXY<HWIDTH, {}> {
    get pr100(): this;
    get auto(): this;
    get screen(): this;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    /**
     * value
     * @param val number
     */
    value(val: any): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}

declare class MP extends PROXY<MP, {
    mp: string;
    side: string;
}> {
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    protected propFN: () => string;
    get auto(): this;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    value(val: any): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
    get TOP(): MP;
    get RIGHT(): MP;
    get LEFT(): MP;
    get BOTTOM(): MP;
    get BLOCK(): INLINEBLOCK;
    get INLINE(): INLINEBLOCK;
}
declare class INLINEBLOCK extends PROXY<INLINEBLOCK, {
    bin: string;
    side: "";
}> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            bin: string;
            side: string;
        } | undefined;
        values?: {} | undefined;
    });
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    get END(): INLINEBLOCK;
    get START(): INLINEBLOCK;
}

declare class CLIST<T extends PROXY<T>> extends PROXY<T, {
    prop: string;
}> {
    protected prop: string;
    aliceblue: this;
    antiquewhite: this;
    aqua: this;
    aquamarine: this;
    azure: this;
    beige: this;
    bisque: this;
    black: this;
    blanchedalmond: this;
    blue: this;
    blueviolet: this;
    brown: this;
    burlywood: this;
    cadetblue: this;
    chartreuse: this;
    chocolate: this;
    coral: this;
    cornflowerblue: this;
    cornsilk: this;
    crimson: this;
    cyan: this;
    darkblue: this;
    darkcyan: this;
    darkgoldenrod: this;
    darkgray: this;
    darkgreen: this;
    darkmagenta: this;
    darkorange: this;
    darkorchid: this;
    darkred: this;
    darksalmon: this;
    darkslategray: this;
    darkturquoise: this;
    deeppink: this;
    deepskyblue: this;
    dimgray: this;
    dodgerblue: this;
    firebrick: this;
    forestgreen: this;
    gainsboro: this;
    ghostwhite: this;
    gold: this;
    goldenrod: this;
    gray: this;
    green: this;
    honeydew: this;
    hotpink: this;
    indianred: this;
    indigo: this;
    ivory: this;
    khaki: this;
    lavender: this;
    lavenderblush: this;
    lawngreen: this;
    lemonchiffon: this;
    lightblue: this;
    lightcoral: this;
    lightcyan: this;
    lightgoldenrodyellow: this;
    lightgray: this;
    lightgreen: this;
    lightskyblue: this;
    lightslategray: this;
    lightsteelblue: this;
    lightyellow: this;
    lime: this;
    linen: this;
    maroon: this;
    mediumaquamarine: this;
    mediumblue: this;
    mediumorchid: this;
    mediumseagreen: this;
    mediumslateblue: this;
    mediumspringgreen: this;
    mediumturquoise: this;
    mediumvioletred: this;
    midnightblue: this;
    mintcream: this;
    mistyrose: this;
    moccasin: this;
    navajowhite: this;
    oldlace: this;
    olive: this;
    olivedrab: this;
    orange: this;
    orangered: this;
    orchid: this;
    palegoldenrod: this;
    palegreen: this;
    paleturquoise: this;
    palevioletred: this;
    papayawhip: this;
    peachpuff: this;
    peru: this;
    pink: this;
    plum: this;
    powderblue: this;
    purple: this;
    rebeccapurple: this;
    red: this;
    rosybrown: this;
    royalblue: this;
    saddlebrown: this;
    salmon: this;
    sandybrown: this;
    seagreen: this;
    seashell: this;
    sienna: this;
    silver: this;
    skyblue: this;
    slategray: this;
    snow: this;
    springgreen: this;
    steelblue: this;
    tan: this;
    teal: this;
    thistle: this;
    tomato: this;
    turquoise: this;
    violet: this;
    wheat: this;
    white: this;
    whitesmoke: this;
    yellow: this;
    yellowgreen: this;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            prop: string;
        } | undefined;
        values?: {} | undefined;
    });
}
declare class AUTODARK extends CLIST<AUTODARK> {
    protected valFN: (p: string) => shweet.media;
    get random(): this;
}
declare class AUTOLIGHT extends CLIST<AUTOLIGHT> {
    protected valFN: (p: string) => shweet.media;
    get random(): this;
}
declare class COLOR extends CLIST<COLOR> {
    protected valFN: (p: string) => string;
    color(color: any): this;
    rgba(R: any, G: any, B: any, A?: any): this;
    get random(): this;
    get transparent(): this;
    get inherit(): this;
    get initial(): this;
    get current(): this;
    get AUTOLIGHT(): AUTOLIGHT;
    get AUTODARK(): AUTODARK;
    get MIX(): MIX;
}
declare class MIX extends PROXY<MIX, {
    prop: string;
}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            prop: string;
        } | undefined;
        values?: {} | undefined;
    });
    srgb(color1: any | [any, any], color2: any | [any, any]): this;
    srgb_linear(color1: any | [any, any], color2: any | [any, any]): this;
    display_p3(color1: any | [any, any], color2: any | [any, any]): this;
    a98_rgb(color1: any | [any, any], color2: any | [any, any]): this;
    prophoto_rgb(color1: any | [any, any], color2: any | [any, any]): this;
    rec2020(color1: any | [any, any], color2: any | [any, any]): this;
    lab(color1: any | [any, any], color2: any | [any, any]): this;
    oklab(color1: any | [any, any], color2: any | [any, any]): this;
    xyz(color1: any | [any, any], color2: any | [any, any]): this;
    xyz_d50(color1: any | [any, any], color2: any | [any, any]): this;
    xyz_d65(color1: any | [any, any], color2: any | [any, any]): this;
    hsl(color1: any | [any, any], color2: any | [any, any]): this;
    hwb(color1: any | [any, any], color2: any | [any, any]): this;
    lch(color1: any | [any, any], color2: any | [any, any]): this;
    and(color1: any | [any, any], color2: any | [any, any]): this;
    oklch(color1: any | [any, any], color2: any | [any, any]): this;
}

declare class BORDER extends Medyas<BORDER, {
    side: string;
}> {
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            side: string;
        } | undefined;
        values?: {} | undefined;
    });
    value(border: any): this;
    color(color: any): this;
    width(width: any): this;
    image(source: string, ...etc: any[]): this;
    get solid(): BORDER;
    get dotted(): BORDER;
    get none(): BORDER;
    get hidden(): BORDER;
    get dashed(): BORDER;
    get double(): BORDER;
    get groove(): BORDER;
    get ridge(): BORDER;
    get inset(): BORDER;
    get outset(): BORDER;
    get TOP(): BORDER;
    get RIGHT(): BORDER;
    get LEFT(): BORDER;
    get BOTTOM(): BORDER;
    get b1(): this;
    get bRed(): this;
    get random(): this;
    get bRandom(): this;
    get COLOR(): COLOR;
}
declare class RADIUS extends PROXY<RADIUS, {}> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    v(val: any | any[]): void;
    get tL(): RADIUS;
    get tR(): RADIUS;
    get bR(): RADIUS;
    get bL(): RADIUS;
    x(val: any): this;
    y(val: any): this;
    get b0(): this;
    get b0p5(): this;
    get b1(): this;
    get b1p5(): this;
    get b2(): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    value(val: any): this;
}

declare class CURSOR extends PROXY<CURSOR, {}> {
    protected prop: string;
    alias: this;
    all_scroll: this;
    auto: this;
    cell: this;
    col_resize: this;
    context_menu: this;
    copy: this;
    crosshair: this;
    default: this;
    e_resize: this;
    ew_resize: this;
    grab: this;
    grabbing: this;
    help: this;
    move: this;
    n_resize: this;
    ne_resize: this;
    nesw_resize: this;
    ns_resize: this;
    nw_resize: this;
    nwse_resize: this;
    no_drop: this;
    none: this;
    not_allowed: this;
    pointer: this;
    progress: this;
    row_resize: this;
    s_resize: this;
    se_resize: this;
    sw_resize: this;
    text: this;
    vertical_text: this;
    w_resize: this;
    wait: this;
    zoom_in: this;
    zoom_out: this;
}
declare class DISPLAY extends PROXY<DISPLAY> {
    protected prop: string;
    inline: this;
    block: this;
    contents: this;
    flex: this;
    grid: this;
    inline_block: this;
    inline_flex: this;
    inline_grid: this;
    inline_table: this;
    list_item: this;
    run_in: this;
    table: this;
    table_caption: this;
    table_column_group: this;
    table_header_group: this;
    table_footer_group: this;
    table_row_group: this;
    table_cell: this;
    table_column: this;
    table_row: this;
    none: this;
}
declare class POSITION$1 extends PROXY<POSITION$1> {
    protected prop: string;
    static: this;
    absolute: this;
    fixed: this;
    relative: this;
    sticky: this;
}
declare class OVERFLOW extends Medyas<OVERFLOW, {
    xy: string;
}> {
    xy: string;
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            xy: string;
        } | undefined;
        values?: {} | undefined;
    });
    get visible(): this;
    get hidden(): this;
    get scroll(): this;
    get auto(): this;
    get X(): OVERFLOW;
    get Y(): OVERFLOW;
}
declare class OPACITY extends PROXY<OPACITY> {
    protected prop: string;
    [k: number]: this;
    1: this;
    0.9: this;
    0.8: this;
    0.7: this;
    0.6: this;
    0.5: this;
    0.4: this;
    0.3: this;
    0.2: this;
    0.1: this;
    0: this;
    protected valFN: (p: any) => any;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
}
declare class ZINDEX extends PROXY<ZINDEX> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
}
declare class WHITESPACE extends PROXY<WHITESPACE> {
    protected prop: string;
    normal: this;
    nowrap: this;
    pre: this;
    pre_line: this;
    pre_wrap: this;
}
declare class VISIBLE extends PROXY<VISIBLE> {
    get visible(): this;
    get hidden(): this;
    get collapse(): this;
}
declare class VERTICAL extends PROXY<VERTICAL> {
    protected prop: string;
    baseline: this;
    sub: this;
    super: this;
    top: this;
    text_top: this;
    middle: this;
    bottom: this;
    text_bottom: this;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
}
declare class SELECT extends PROXY<SELECT> {
    get select(): this;
    get none(): this;
}
declare class POINTER extends PROXY<POINTER> {
    get auto(): this;
    get none(): this;
}
declare class LINEHEIGHT extends PROXY<LINEHEIGHT> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
}
declare class OVERSCROLL extends PROXY<OVERSCROLL, {}> {
    get auto(): this;
    get contain(): this;
    get none(): this;
    get XAuto(): this;
    get XContain(): this;
    get XNone(): this;
    get YAuto(): this;
    get YContain(): this;
    get YNone(): this;
    get INLINEAuto(): this;
    get INLINEContain(): this;
    get INLINENone(): this;
    get BLOCKAuto(): this;
    get BLOCKContain(): this;
    get BLOCKNone(): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}

declare class ATTACH extends PROXY<ATTACH, {}> {
    protected prop: string;
    fixed: this;
    local: this;
    scroll: this;
}
declare class BLEND extends PROXY<BLEND, {}> {
    protected prop: string;
    normal: this;
    multiply: this;
    screen: this;
    overlay: this;
    darken: this;
    lighten: this;
    color_dodge: this;
    saturation: this;
    color: this;
    luminosity: this;
}
declare class CLIPOR extends PROXY<CLIPOR, {
    name: string;
}> {
    border_box: this;
    padding_box: this;
    content_box: this;
    text: this;
    protected valFN: (val: any) => any;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            name: string;
        } | undefined;
        values?: {} | undefined;
    });
}
declare class SIZE$1 extends PROXY<SIZE$1> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    get auto(): this;
    get cover(): this;
    get contain(): this;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    value(val: any): this;
}
declare class POSITION extends PROXY<POSITION> {
    protected prop: string;
    protected replacer: string;
    center: this;
    top: this;
    bottom: this;
    left: this;
    right: this;
    left_top: this;
    left_center: this;
    left_bottom: this;
    right_top: this;
    right_center: this;
    right_bottom: this;
    center_top: this;
    center_center: this;
    center_bottom: this;
    value(val: any): this;
    XY(x: any, y?: any): this;
}
declare class IMAGE extends PROXY<IMAGE, {}> {
    protected prop: string;
    url(url: string): this;
    conic(...v: any[]): this;
    repeatingConic(...v: any[]): this;
    linear(...v: any[]): this;
    repeatingLinear(...v: any[]): this;
    radial(...v: any[]): this;
    repeatingRadial(...v: any[]): this;
    get none(): this;
    value(val: any): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}
declare class BACKGROUND {
    get ATTACH(): ATTACH;
    get BLEND(): BLEND;
    get CLIP(): CLIPOR;
    get ORIGIN(): CLIPOR;
    get COLOR(): COLOR;
    get SIZE(): SIZE$1;
    get IMAGE(): IMAGE;
    get POSITION(): POSITION;
    get random(): COLOR;
    color(color: any): COLOR;
}

declare class ALIGN extends PROXY<ALIGN, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    left: this;
    right: this;
    center: this;
    justify: this;
}
declare class DECOR extends PROXY<DECOR, {}> {
    solid: this;
    double: this;
    dotted: this;
    dashed: this;
    wavy: this;
    none: this;
    underline: this;
    overline: this;
    line_through: this;
    protected propFN: (p: string) => "textDecorationLine" | "textDecorationStyle";
    get COLOR(): COLOR;
    thickness(len: any): this;
    get auto(): this;
    get font(): this;
}
declare class EMPH extends PROXY<EMPH, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    over: this;
    under: this;
    left: this;
    right: this;
    none: this;
    filled: this;
    open: this;
    dot: this;
    circle: this;
    double_circle: this;
    triangle: this;
    sesame: this;
    protected propFN: (p: string) => "textEmphasisPosition" | "textEmphasisStyle";
    char(char: string): this;
    get COLOR(): COLOR;
}
declare class INDENT extends PROXY<INDENT, {
    mp: string;
    side: string;
}> {
    protected prop: string;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
}
declare class JUSTIFY extends PROXY<JUSTIFY, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    auto: this;
    inter_word: this;
    inter_character: this;
    none: this;
}
declare class ORIENTATION extends PROXY<JUSTIFY, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    mixed: this;
    upright: this;
    sideways: this;
    sideways_right: this;
    use_glyph_orientation: this;
}
declare class UNDERLINE extends PROXY<UNDERLINE, {
    wh: string;
    first: string;
}> {
    auto: this;
    under: this;
    from_font: this;
    left: this;
    right: this;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected propFN: (p: string) => "textUnderlinePosition" | "textUnderlineOffset";
    protected valFN: (val: any) => any;
    get autoOffset(): this;
}
declare class TEXT extends PROXY<TEXT> {
    get ALIGN(): ALIGN;
    get DECOR(): DECOR;
    get EMPHASIS(): EMPH;
    get INDENT(): INDENT;
    get JUSTIFY(): JUSTIFY;
    get ORIENTATION(): ORIENTATION;
    get UNDERLINE(): UNDERLINE;
    get clip(): this;
    get ellipsis(): this;
    overflow(custom: string): this;
    decor(val: CSSValue): this;
    get capitalize(): this;
    get uppercase(): this;
    get lowercase(): this;
    get noTransform(): this;
    get COLOR(): COLOR;
}

declare class OUTLINE extends Medyas<OUTLINE, {}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    color(color: any): this;
    width(width: any): this;
    get solid(): OUTLINE;
    get dotted(): OUTLINE;
    get none(): OUTLINE;
    get hidden(): OUTLINE;
    get dashed(): OUTLINE;
    get double(): OUTLINE;
    get groove(): OUTLINE;
    get ridge(): OUTLINE;
    get inset(): OUTLINE;
    get outset(): OUTLINE;
    get b1(): this;
    get bRed(): this;
    get bRandom(): this;
    get COLOR(): COLOR;
    off(off: number): OUTLINE;
    get off0(): OUTLINE;
    get off1(): OUTLINE;
    get off2(): OUTLINE;
    get off3(): OUTLINE;
    get off4(): OUTLINE;
    get off5(): OUTLINE;
}

declare class RULE extends Medyas<RULE, {}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    color(color: any): this;
    width(width: any): this;
    get solid(): RULE;
    get dotted(): RULE;
    get none(): RULE;
    get hidden(): RULE;
    get dashed(): RULE;
    get double(): RULE;
    get groove(): RULE;
    get ridge(): RULE;
    get inset(): RULE;
    get outset(): RULE;
    get COLOR(): COLOR;
}
declare class COUNTR extends PROXY<COUNTR, {
    prop: string;
}> {
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {
            prop: string;
        } | undefined;
        values?: {} | undefined;
    });
}
declare class COLUMN extends Medyas<COLUMN, {
    wh: string;
    first: string;
}> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    width(width: any): this;
    get COUNT(): COUNTR;
    count(count: any): this;
    get GAP(): COUNTR;
    gap(gap: any): this;
    get balance(): this;
    get auto(): this;
    get span(): this;
    get noSpan(): this;
    rule(rule: any): this;
    get RULE(): RULE;
}

interface TRANSX<T = CSSValue> {
    matrix?: T;
    matrix3d?: T;
    translate?: T;
    translate3d?: T;
    translateX?: T;
    translateY?: T;
    translateZ?: T;
    scale?: T;
    scale3d?: T;
    scaleX?: T;
    scaleY?: T;
    scaleZ?: T;
    rotate?: T;
    rotate3d?: T;
    rotateX?: T;
    rotateY?: T;
    rotateZ?: T;
    skew?: T;
    skewX?: T;
    skewY?: T;
    perspective?: T;
}
declare class TRANSFORM extends PROXY<TRANSFORM, {}> {
    origin(...origin: [string, string?, string?]): this;
    get flat(): this;
    get preserve3d(): this;
    get none(): this;
    transform(tran: TRANSX): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}
declare class PERSPECTIVE extends PROXY<PERSPECTIVE, {}> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    get none(): this;
    x(axis: any): this;
    y(axis: any): this;
}

declare class WORD extends PROXY<WORD, {
    wh: string;
    first: string;
}> {
    break_all: this;
    keep_all: this;
    [k: number]: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected propFN: (p: string) => "wordBreak" | "wordSpacing";
    protected valFN: (val: any) => any;
    get normalBreak(): this;
    get normalWrap(): this;
    get break(): this;
}

declare class LIST extends PROXY<LIST, {
    wh: string;
    first: string;
}> {
    protected prop: string;
    disc: this;
    armenian: this;
    circle: this;
    cjk_ideographic: this;
    decimal: this;
    decimal_leading_zero: this;
    georgian: this;
    hebrew: this;
    hiragana: this;
    hiragana_iroha: this;
    katakana: this;
    katakana_iroha: this;
    lower_alpha: this;
    lower_greek: this;
    lower_latin: this;
    lower_roman: this;
    none: this;
    square: this;
    upper_alpha: this;
    upper_greek: this;
    upper_latin: this;
    upper_roman: this;
    [k: number]: this;
    1: this;
    image(img: any): this;
    get noImage(): this;
    get inside(): this;
    get outside(): this;
}

declare class SIZE extends PROXY<SIZE> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
    /**
     * Pixel
     * @param val number
     */
    px(val: number): this;
    /**
     * Percent
     * @param val number
     */
    pr(val: number): this;
    /**
     * Rem
     * @param val number
     */
    rm(val: number): this;
    value(val: number): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}
declare class FONTY extends PROXY<FONTY, {}> {
    font(font: any): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
    stretch(stretch: any): this;
    family(family: any): this;
    sizeAdjust(size: any): this;
    get arial(): this;
    get brushScript(): this;
    get comicSans(): this;
    get courier(): this;
    get georgia(): this;
    get google(): this;
    get monaco(): this;
    get palatino(): this;
    get system(): this;
    get timesNew(): this;
    get trebuchet(): this;
    get verdana(): this;
    get normalStretch(): this;
    get normalStyle(): this;
    get italic(): this;
    get oblique(): this;
    get normalVariant(): this;
    get smallCaps(): this;
    caps(cap: any): this;
    weight(weight: any): this;
    get normalWeight(): this;
    get bold(): this;
    get bolder(): this;
    get lighter(): this;
    get SIZE(): SIZE;
}

interface shadowCFG {
    x: any;
    y: any;
    color: any;
    blur?: any;
    spread?: any;
    inset?: boolean;
}
declare class SHADOW extends PROXY<SHADOW, {}> {
    protected shadows: Set<string>;
    value(shadow: any): this;
    set(shadow: shadowCFG): this;
    get none(): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}
declare class BOX extends PROXY<BOX, {}> {
    get slice(): this;
    get clone(): this;
    get content(): this;
    get border(): this;
}

declare class SCROLL extends PROXY<SCROLL, {}> {
    get MARGIN(): MP;
    get PADDING(): MP;
    get SNAP(): SNAP;
    get auto(): this;
    get smooth(): this;
    /**
     * variable
     * @param val string
     */
    var(val: string, optional?: any): this;
}
declare class SNAP extends PROXY<SNAP, {}> {
    get normalStop(): this;
    get alwaysStop(): this;
    get noType(): this;
    get x(): this;
    get y(): this;
    get block(): this;
    get inline(): this;
    get both(): this;
    get mandatory(): this;
    get proximity(): this;
    get none(): this;
    get start(): this;
    get end(): this;
    get center(): this;
    align(align: any): this;
    type(stop: any): this;
}

declare class JUST<T extends PROXY<T>> extends PROXY<T, {
    aljust: string;
    _auto: string;
}> {
    protected prop: string;
    constructor({ prefix, data, values, }?: {
        prefix?: string | undefined;
        data?: {
            aljust: string;
            _auto: string;
        } | undefined;
        values?: {} | undefined;
    });
    get start(): this;
    get center(): this;
    get end(): this;
    get none(): this;
}
declare class SPACE<T extends PROXY<T>> extends JUST<T> {
    get around(): this;
    get between(): this;
    get even(): this;
    get SELF(): STRECHED<T>;
}
declare class STRECHED<T extends PROXY<T>> extends JUST<T> {
    get stretch(): this;
    get baseline(): this;
    get auto(): this;
}
declare class TEMP extends PROXY<TEMP> {
    protected prop: string;
    get none(): this;
    get noArea(): this;
    get noColumns(): this;
    get noRows(): this;
    areas(...area: any[][]): this;
    col(...cols: any[]): this;
    row(...cols: any[]): this;
}
declare class AUTO extends PROXY<AUTO> {
    protected prop: string;
    col(...cols: any[]): this;
    row(...cols: any[]): this;
    get rowFlow(): this;
    get colFlow(): this;
    get dense(): this;
    get rowDense(): this;
    get colDense(): this;
}
interface areacfg {
    rowS: any;
    rowE: any;
    colS: any;
    colE: any;
}
declare class _GAPN extends PROXY<_GAPN> {
    protected prop: string;
    [k: number]: this;
    0: this;
    1: this;
    2: this;
    3: this;
    4: this;
    5: this;
    6: this;
    7: this;
    8: this;
    9: this;
    10: this;
    protected valFN: (val: any) => any;
}
declare class GAP extends PROXY<GRID> {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    gap(gap: number): GRID;
    get gap0(): GRID;
    get gap1(): GRID;
    get gap2(): GRID;
    get gap3(): GRID;
    get gap4(): GRID;
    get gap5(): GRID;
    rowGap(gap: number): GRID;
    colGap(gap: number): GRID;
    get GAP(): _GAPN;
}
declare class GRID extends GAP {
    constructor({ prefix, data, values }?: {
        prefix?: string | undefined;
        data?: {} | undefined;
        values?: {} | undefined;
    });
    get ALIGN(): SPACE<GRID>;
    get JUSTIFY(): SPACE<GRID>;
    get TEMPLATE(): TEMP;
    get AUTO(): AUTO;
    get SELF(): STRECHED<GRID>;
    grid(val: any): this;
    template(val1: any, val2?: any): this;
    area(area: string | areacfg): this;
    col(start: any, end: any): this;
    colStart(start: any): this;
    colEnd(end: any): this;
    row(start: any, end: any): this;
    rowStart(start: any): this;
    rowEnd(end: any): this;
    get autoColumn(): this;
}

interface filters {
    dropShadow?: shadowCFG;
    url?: string;
    blur?: number;
    hueRotate?: number;
    brightness?: number;
    contrast?: number;
    grayscale?: number;
    invert?: number;
    opacity?: number;
    saturate?: number;
    sepia?: number;
}
declare class FILTER extends PROXY<FILTER, {}> {
    protected filters: Set<string>;
    protected prop: string;
    get none(): this;
    filter(filter?: filters): this;
}
declare class BACKFILTER extends PROXY<FILTER, {}> {
    protected filters: Set<string>;
    get none(): this;
    filter(filter?: filters): this;
}

declare class log {
    static set i(a: any);
    static set e(a: any);
    static set w(a: any);
}

declare class VAR {
    [k: string]: any;
    VARS(vars: Record<string, any>): Record<string, any>;
    get VAR(): this;
    optVAR(option: any): this;
}
declare class MISC {
    static VARS(vars: Record<string, any>): Record<string, any>;
    static optVAR(option: any): VAR;
    static get VAR(): VAR;
    static get visible(): VISIBLE;
    static get hidden(): VISIBLE;
    static get select(): SELECT;
    static get noSelect(): SELECT;
    static get pointer(): POINTER;
    static get noPointer(): POINTER;
}
declare class _ANIMATION extends MISC {
    static get TRANSITION(): TRANSITION;
    static get ANIMATION(): ANIMATION;
    static animation(val: CSSinR): ANIM;
}
declare class APPEARANCE extends _ANIMATION {
    static get BG(): BACKGROUND;
    static get COLOR(): COLOR;
    static get TEXT(): TEXT;
    static get FONT(): FONTY;
    static get FILTER(): FILTER;
    static get BACKDROP(): BACKFILTER;
    static get VALIGN(): VERTICAL;
    static get WORD(): WORD;
    static get CURSOR(): CURSOR;
    static get DISPLAY(): DISPLAY;
    static get POSITION(): POSITION$1;
    static get RADIUS(): RADIUS;
    static get BORDER(): BORDER;
    static get OUTLINE(): OUTLINE;
    static get COLUMN(): COLUMN;
    static get OVERFLOW(): OVERFLOW;
    static get OPACITY(): OPACITY;
    static get ZIndex(): ZINDEX;
    static get LINE(): LINEHEIGHT;
    static get WHITESPACE(): WHITESPACE;
}
declare class $ extends APPEARANCE {
    static get FLEX(): Flex;
    static get GRID(): GRID;
    static get HW(): HWIDTH;
    static get WIDTH(): WH;
    static get HEIGHT(): WH;
    static get TOP(): WH;
    static get LEFT(): WH;
    static get RIGHT(): WH;
    static get BOTTOM(): WH;
    static get MAX(): {
        readonly WIDTH: WH;
        readonly HEIGHT: WH;
        readonly BLOCK: INLINEBLOCK;
        readonly INLINE: INLINEBLOCK;
    };
    static get MIN(): {
        readonly WIDTH: WH;
        readonly HEIGHT: WH;
        readonly BLOCK: INLINEBLOCK;
        readonly INLINE: INLINEBLOCK;
    };
    static get MARGIN(): MP;
    static get PADDING(): MP;
    static get TRANSFORM(): TRANSFORM;
    static get PERSPECTIVE(): PERSPECTIVE;
    static transform(tran: TRANSX): TRANSFORM;
    static get LIST(): LIST;
    static get BOX(): BOX;
    static get SHADOW(): SHADOW;
    static get SCROLL(): SCROLL;
    static get OVERSCROLL(): OVERSCROLL;
}

export { $, log };
