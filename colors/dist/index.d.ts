import * as shweet from 'shweet';
import { VarType } from 'shweet';

declare const clr: {
    aliceBlue: string;
    antiqueWhite: string;
    aqua: string;
    aquamarine: string;
    azure: string;
    beige: string;
    bisque: string;
    black: string;
    blanchedAlmond: string;
    blue: string;
    blueViolet: string;
    brown: string;
    burlyWood: string;
    cadetBlue: string;
    chartreuse: string;
    chocolate: string;
    coral: string;
    cornflowerBlue: string;
    cornsilk: string;
    crimson: string;
    cyan: string;
    darkBlue: string;
    darkCyan: string;
    darkGoldenrod: string;
    darkGray: string;
    darkGreen: string;
    darkKhaki: string;
    darkMagenta: string;
    darkOliveGreen: string;
    darkOrange: string;
    darkOrchid: string;
    darkRed: string;
    darkSalmon: string;
    darkSeaGreen: string;
    darkSlateBlue: string;
    darkSlateGray: string;
    darkTurquoise: string;
    darkViolet: string;
    deepPink: string;
    deepSkyBlue: string;
    dimGray: string;
    dodgerBlue: string;
    fireBrick: string;
    floralWhite: string;
    forestGreen: string;
    fuchsia: string;
    gainsboro: string;
    ghostWhite: string;
    gold: string;
    goldenrod: string;
    gray: string;
    green: string;
    greenYellow: string;
    honeyDew: string;
    hotPink: string;
    indianRed: string;
    indigo: string;
    ivory: string;
    khaki: string;
    lavender: string;
    lavenderBlush: string;
    lawnGreen: string;
    lemonChiffon: string;
    lightBlue: string;
    lightCoral: string;
    lightCyan: string;
    lightGoldenrodYellow: string;
    lightGray: string;
    lightGreen: string;
    lightPink: string;
    lightSalmon: string;
    lightSeaGreen: string;
    lightSkyBlue: string;
    lightSlateGray: string;
    lightSteelBlue: string;
    lightYellow: string;
    lime: string;
    limeGreen: string;
    linen: string;
    magenta: string;
    maroon: string;
    mediumAquamarine: string;
    mediumBlue: string;
    mediumOrchid: string;
    mediumPurple: string;
    mediumSeaGreen: string;
    mediumSlateBlue: string;
    mediumSpringGreen: string;
    mediumTurquoise: string;
    mediumVioletRed: string;
    midnightBlue: string;
    mintCream: string;
    mistyRose: string;
    moccasin: string;
    navajoWhite: string;
    navy: string;
    oldLace: string;
    olive: string;
    oliveDrab: string;
    orange: string;
    orangeRed: string;
    orchid: string;
    paleGoldenrod: string;
    paleGreen: string;
    paleTurquoise: string;
    paleVioletRed: string;
    papayaWhip: string;
    peachPuff: string;
    peru: string;
    pink: string;
    plum: string;
    powderBlue: string;
    purple: string;
    rebeccaPurple: string;
    red: string;
    rosyBrown: string;
    royalBlue: string;
    saddleBrown: string;
    salmon: string;
    sandyBrown: string;
    seaGreen: string;
    seaShell: string;
    sienna: string;
    silver: string;
    skyBlue: string;
    slateBlue: string;
    slateGray: string;
    snow: string;
    springGreen: string;
    steelBlue: string;
    tan: string;
    teal: string;
    thistle: string;
    tomato: string;
    turquoise: string;
    violet: string;
    wheat: string;
    white: string;
    whiteSmoke: string;
    yellow: string;
    yellowGreen: string;
    /**
     * in Colors
     */
    transparent: string;
    initial: string;
    inherit: string;
    current: string;
    random(opacity?: any): string;
    hex2rbga: (hexCode: string, opacity?: any) => string;
};
declare function autoColor(color: string[]): (alpha?: VarType | number) => shweet.media;
declare const black: (alpha?: VarType | number) => shweet.media;
declare const white: (alpha?: VarType | number) => shweet.media;
declare const transparent: shweet.media;
declare const current: shweet.media;
declare const blue: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const green: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const red: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const yellow: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const orange: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const purple: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const gray: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const indigo: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const pink: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const teal: {
    50: (alpha?: VarType | number) => shweet.media;
    100: (alpha?: VarType | number) => shweet.media;
    200: (alpha?: VarType | number) => shweet.media;
    300: (alpha?: VarType | number) => shweet.media;
    400: (alpha?: VarType | number) => shweet.media;
    500: (alpha?: VarType | number) => shweet.media;
    600: (alpha?: VarType | number) => shweet.media;
    700: (alpha?: VarType | number) => shweet.media;
    800: (alpha?: VarType | number) => shweet.media;
    900: (alpha?: VarType | number) => shweet.media;
    950: (alpha?: VarType | number) => shweet.media;
};
declare const _blue: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _green: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _red: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _yellow: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _orange: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _purple: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _gray: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _indigo: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _pink: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};
declare const _teal: {
    50: {
        l: string;
        d: string;
    };
    100: {
        l: string;
        d: string;
    };
    200: {
        l: string;
        d: string;
    };
    300: {
        l: string;
        d: string;
    };
    400: {
        l: string;
        d: string;
    };
    500: {
        l: string;
        d: string;
    };
    600: {
        l: string;
        d: string;
    };
    700: {
        l: string;
        d: string;
    };
    800: {
        l: string;
        d: string;
    };
    900: {
        l: string;
        d: string;
    };
    950: {
        l: string;
        d: string;
    };
};

export { _blue, _gray, _green, _indigo, _orange, _pink, _purple, _red, _teal, _yellow, autoColor, black, blue, clr, current, gray, green, indigo, orange, pink, purple, red, teal, transparent, white, yellow };
