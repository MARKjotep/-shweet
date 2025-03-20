import { f, med } from "shweet";
import { PROXY } from "../proxy";
import { isArr } from "../@";

//

const rand = (min = 6, max?: number) => {
  if (!max) return Math.floor(Math.random() * min);
  return Math.round(Math.random() * (max - min) + min);
};

export const RANDOM = () => {
  const rit = Object.values(_clr);
  const rnd = rand(0, rit.length - 1);
  return rit[rnd];
};

const _clr: Record<string, [string, string]> = {
  aliceblue: ["#F0F8FF", "#2F4F4F"],
  antiquewhite: ["#FAEBD7", "#8B4513"],
  aqua: ["#00FFFF", "#008080"],
  aquamarine: ["#7FFFD4", "#008B8B"],
  azure: ["#F0FFFF", "#191970"],
  beige: ["#F5F5DC", "#556B2F"],
  bisque: ["#FFE4C4", "#A0522D"],
  black: ["#000000", "#FFFFFF"],
  blanchedalmond: ["#FFEBCD", "#8B4513"],
  blue: ["#0000FF", "#4169E1"],
  blueviolet: ["#8A2BE2", "#9932CC"],
  brown: ["#A52A2A", "#A0522D"],
  burlywood: ["#DEB887", "#CD853F"],
  cadetblue: ["#5F9EA0", "#2F4F4F"],
  chartreuse: ["#7FFF00", "#32CD32"],
  chocolate: ["#D2691E", "#8B4513"],
  coral: ["#FF7F50", "#FF6347"],
  cornflowerblue: ["#6495ED", "#4682B4"],
  cornsilk: ["#FFF8DC", "#B8860B"],
  crimson: ["#DC143C", "#8B0000"],
  cyan: ["#00FFFF", "#008B8B"],
  darkblue: ["#00008B", "#0000CD"],
  darkcyan: ["#008B8B", "#48D1CC"],
  darkgoldenrod: ["#B8860B", "#DAA520"],
  darkgray: ["#A9A9A9", "#696969"],
  darkgreen: ["#006400", "#228B22"],
  darkmagenta: ["#8B008B", "#800080"],
  darkorange: ["#FF8C00", "#D2691E"],
  darkorchid: ["#9932CC", "#BA55D3"],
  darkred: ["#8B0000", "#B22222"],
  darksalmon: ["#E9967A", "#F08080"],
  darkslategray: ["#2F4F4F", "#778899"],
  darkturquoise: ["#00CED1", "#40E0D0"],
  deeppink: ["#FF1493", "#C71585"],
  deepskyblue: ["#00BFFF", "#1E90FF"],
  dimgray: ["#696969", "#A9A9A9"],
  dodgerblue: ["#1E90FF", "#4682B4"],
  firebrick: ["#B22222", "#A52A2A"],
  forestgreen: ["#228B22", "#006400"],
  gainsboro: ["#DCDCDC", "#708090"],
  ghostwhite: ["#F8F8FF", "#2F4F4F"],
  gold: ["#FFD700", "#B8860B"],
  goldenrod: ["#DAA520", "#CD853F"],
  gray: ["#808080", "#696969"],
  green: ["#008000", "#006400"],
  honeydew: ["#F0FFF0", "#3CB371"],
  hotpink: ["#FF69B4", "#C71585"],
  indianred: ["#CD5C5C", "#A52A2A"],
  indigo: ["#4B0082", "#7B68EE"],
  ivory: ["#FFFFF0", "#FAFAD2"],
  khaki: ["#F0E68C", "#6B8E23"],
  lavender: ["#E6E6FA", "#D8BFD8"],
  lavenderblush: ["#FFF0F5", "#DB7093"],
  lawngreen: ["#7CFC00", "#32CD32"],
  lemonchiffon: ["#FFFACD", "#BDB76B"],
  lightblue: ["#ADD8E6", "#4682B4"],
  lightcoral: ["#F08080", "#CD5C5C"],
  lightcyan: ["#E0FFFF", "#5F9EA0"],
  lightgoldenrodyellow: ["#FAFAD2", "#BDB76B"],
  lightgray: ["#D3D3D3", "#708090"],
  lightgreen: ["#90EE90", "#3CB371"],
  lightskyblue: ["#87CEFA", "#4682B4"],
  lightslategray: ["#778899", "#708090"],
  lightsteelblue: ["#B0C4DE", "#5F9EA0"],
  lightyellow: ["#FFFFE0", "#BDB76B"],
  lime: ["#00FF00", "#228B22"],
  linen: ["#FAF0E6", "#8B4513"],
  maroon: ["#800000", "#B22222"],
  mediumaquamarine: ["#66CDAA", "#008080"],
  mediumblue: ["#0000CD", "#00008B"],
  mediumorchid: ["#BA55D3", "#9932CC"],
  mediumseagreen: ["#3CB371", "#2E8B57"],
  mediumslateblue: ["#7B68EE", "#4B0082"],
  mediumspringgreen: ["#00FA9A", "#006400"],
  mediumturquoise: ["#48D1CC", "#008B8B"],
  mediumvioletred: ["#C71585", "#8B008B"],
  midnightblue: ["#191970", "#000080"],
  mintcream: ["#F5FFFA", "#3CB371"],
  mistyrose: ["#FFE4E1", "#DB7093"],
  moccasin: ["#FFE4B5", "#CD853F"],
  navajowhite: ["#FFDEAD", "#A0522D"],
  oldlace: ["#FDF5E6", "#D2B48C"],
  olive: ["#808000", "#556B2F"],
  olivedrab: ["#6B8E23", "#006400"],
  orange: ["#FFA500", "#FF8C00"],
  orangered: ["#FF4500", "#FF6347"],
  orchid: ["#DA70D6", "#BA55D3"],
  palegoldenrod: ["#EEE8AA", "#DAA520"],
  palegreen: ["#98FB98", "#3CB371"],
  paleturquoise: ["#AFEEEE", "#5F9EA0"],
  palevioletred: ["#DB7093", "#C71585"],
  papayawhip: ["#FFEFD5", "#8B4513"],
  peachpuff: ["#FFDAB9", "#CD853F"],
  peru: ["#CD853F", "#A0522D"],
  pink: ["#FFC0CB", "#DB7093"],
  plum: ["#DDA0DD", "#9932CC"],
  powderblue: ["#B0E0E6", "#5F9EA0"],
  purple: ["#800080", "#4B0082"],
  rebeccapurple: ["#663399", "#4B0082"],
  red: ["#FF0000", "#8B0000"],
  rosybrown: ["#BC8F8F", "#A52A2A"],
  royalblue: ["#4169E1", "#191970"],
  saddlebrown: ["#8B4513", "#A0522D"],
  salmon: ["#FA8072", "#CD5C5C"],
  sandybrown: ["#F4A460", "#CD853F"],
  seagreen: ["#2E8B57", "#006400"],
  seashell: ["#FFF5EE", "#D2B48C"],
  sienna: ["#A0522D", "#8B4513"],
  silver: ["#C0C0C0", "#696969"],
  skyblue: ["#87CEEB", "#4682B4"],
  slategray: ["#708090", "#2F4F4F"],
  snow: ["#FFFAFA", "#778899"],
  springgreen: ["#00FF7F", "#3CB371"],
  steelblue: ["#4682B4", "#191970"],
  tan: ["#D2B48C", "#CD853F"],
  teal: ["#008080", "#008B8B"],
  thistle: ["#D8BFD8", "#DDA0DD"],
  tomato: ["#FF6347", "#B22222"],
  turquoise: ["#40E0D0", "#00CED1"],
  violet: ["#EE82EE", "#9932CC"],
  wheat: ["#F5DEB3", "#8B4513"],
  white: ["#FFFFFF", "#000000"],
  whitesmoke: ["#F5F5F5", "#696969"],
  yellow: ["#FFFF00", "#DAA520"],
  yellowgreen: ["#9ACD32", "#556B2F"],
};

class CLIST<T extends PROXY<T>> extends PROXY<T, { prop: string }> {
  protected prop = "";
  //
  declare aliceblue: this;
  declare antiquewhite: this;
  declare aqua: this;
  declare aquamarine: this;
  declare azure: this;
  declare beige: this;
  declare bisque: this;
  declare black: this;
  declare blanchedalmond: this;
  declare blue: this;
  declare blueviolet: this;
  declare brown: this;
  declare burlywood: this;
  declare cadetblue: this;
  declare chartreuse: this;
  declare chocolate: this;
  declare coral: this;
  declare cornflowerblue: this;
  declare cornsilk: this;
  declare crimson: this;
  declare cyan: this;
  declare darkblue: this;
  declare darkcyan: this;
  declare darkgoldenrod: this;
  declare darkgray: this;
  declare darkgreen: this;
  declare darkmagenta: this;
  declare darkorange: this;
  declare darkorchid: this;
  declare darkred: this;
  declare darksalmon: this;
  declare darkslategray: this;
  declare darkturquoise: this;
  declare deeppink: this;
  declare deepskyblue: this;
  declare dimgray: this;
  declare dodgerblue: this;
  declare firebrick: this;
  declare forestgreen: this;
  declare gainsboro: this;
  declare ghostwhite: this;
  declare gold: this;
  declare goldenrod: this;
  declare gray: this;
  declare green: this;
  declare honeydew: this;
  declare hotpink: this;
  declare indianred: this;
  declare indigo: this;
  declare ivory: this;
  declare khaki: this;
  declare lavender: this;
  declare lavenderblush: this;
  declare lawngreen: this;
  declare lemonchiffon: this;
  declare lightblue: this;
  declare lightcoral: this;
  declare lightcyan: this;
  declare lightgoldenrodyellow: this;
  declare lightgray: this;
  declare lightgreen: this;
  declare lightskyblue: this;
  declare lightslategray: this;
  declare lightsteelblue: this;
  declare lightyellow: this;
  declare lime: this;
  declare linen: this;
  declare maroon: this;
  declare mediumaquamarine: this;
  declare mediumblue: this;
  declare mediumorchid: this;
  declare mediumseagreen: this;
  declare mediumslateblue: this;
  declare mediumspringgreen: this;
  declare mediumturquoise: this;
  declare mediumvioletred: this;
  declare midnightblue: this;
  declare mintcream: this;
  declare mistyrose: this;
  declare moccasin: this;
  declare navajowhite: this;
  declare oldlace: this;
  declare olive: this;
  declare olivedrab: this;
  declare orange: this;
  declare orangered: this;
  declare orchid: this;
  declare palegoldenrod: this;
  declare palegreen: this;
  declare paleturquoise: this;
  declare palevioletred: this;
  declare papayawhip: this;
  declare peachpuff: this;
  declare peru: this;
  declare pink: this;
  declare plum: this;
  declare powderblue: this;
  declare purple: this;
  declare rebeccapurple: this;
  declare red: this;
  declare rosybrown: this;
  declare royalblue: this;
  declare saddlebrown: this;
  declare salmon: this;
  declare sandybrown: this;
  declare seagreen: this;
  declare seashell: this;
  declare sienna: this;
  declare silver: this;
  declare skyblue: this;
  declare slategray: this;
  declare snow: this;
  declare springgreen: this;
  declare steelblue: this;
  declare tan: this;
  declare teal: this;
  declare thistle: this;
  declare tomato: this;
  declare turquoise: this;
  declare violet: this;
  declare wheat: this;
  declare white: this;
  declare whitesmoke: this;
  declare yellow: this;
  declare yellowgreen: this;
  constructor({ prefix = "", data = { prop: "" }, values = {} } = {}) {
    super({ prefix, data, values });
    this.prop = this.data.prop;
  }
}

const AutoRANDOM = (rev: boolean = false) => {
  const rit = Object.values(_clr);
  const rnd = rand(0, rit.length - 1);
  let CLR = rit[rnd];
  if (rev) {
    CLR.reverse();
  }
  return med(CLR[0], { dark: CLR[1] });
};

export class AUTODARK extends CLIST<AUTODARK> {
  //
  protected valFN = (p: string) => {
    const CLR = _clr[String(p)];
    return med(CLR[1], { dark: CLR[0] });
  };
  get random() {
    this._value = {
      [this.prop]: AutoRANDOM(true),
    };
    return this;
  }
}

export class AUTOLIGHT extends CLIST<AUTOLIGHT> {
  //
  protected valFN = (p: string) => {
    const CLR = _clr[String(p)];
    return med(CLR[0], { dark: CLR[1] });
  };

  get random() {
    this._value = {
      [this.prop]: AutoRANDOM(),
    };
    return this;
  }
}

export class COLOR extends CLIST<COLOR> {
  //
  protected valFN = (p: string) => {
    return _clr[p][0];
  };

  color(color: any) {
    this._value = {
      [this.prop]: color,
    };
    return this;
  }
  rgba(R: any, G: any, B: any, A?: any) {
    this._value = {
      [this.prop]: f.rgba(R, G, B, A),
    };
    return this;
  }
  get random() {
    this._value = {
      [this.prop]: RANDOM()[0],
    };
    return this;
  }
  get transparent() {
    this._value = {
      [this.prop]: "transparent",
    };
    return this;
  }
  get inherit() {
    this._value = {
      [this.prop]: "inherit",
    };
    return this;
  }
  get initial() {
    this._value = {
      [this.prop]: "initial",
    };
    return this;
  }
  get current() {
    this._value = {
      [this.prop]: "currentColor",
    };
    return this;
  }
  get AUTOLIGHT() {
    return new AUTOLIGHT({
      values: this._value,
      data: { prop: this.data.prop },
    });
  }
  get AUTODARK() {
    return new AUTODARK({
      values: this._value,
      data: { prop: this.data.prop },
    });
  }
  get MIX() {
    return new MIX({
      values: this._value,
      data: { prop: this.data.prop },
    });
  }
}

const inMix = (
  prop: string,
  inter: string,
  color1: any | [any, any],
  color2: any | [any, any],
) => {
  return {
    [prop]: f.colorMix(
      `in ${inter}`,
      isArr(color1) ? color1 : [color1],
      isArr(color2) ? color2 : [color2],
    ),
  };
};

export class MIX extends PROXY<MIX, { prop: string }> {
  constructor({ prefix = "", data = { prop: "" }, values = {} } = {}) {
    super({ prefix, data, values });
    this.prop = this.data.prop;
  }
  srgb(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "srgb", color1, color2);
    return this;
  }
  srgb_linear(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "srgb-linear", color1, color2);
    return this;
  }
  display_p3(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "display-p3", color1, color2);
    return this;
  }
  a98_rgb(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "a98-rgb", color1, color2);
    return this;
  }
  prophoto_rgb(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "prophoto-rgb", color1, color2);
    return this;
  }
  rec2020(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "rec2020", color1, color2);
    return this;
  }
  lab(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "lab", color1, color2);
    return this;
  }
  oklab(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "oklab", color1, color2);
    return this;
  }
  xyz(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "xyz", color1, color2);
    return this;
  }
  xyz_d50(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "xyz-d50", color1, color2);
    return this;
  }
  xyz_d65(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "xyz-d65", color1, color2);
    return this;
  }
  hsl(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "hsl", color1, color2);
    return this;
  }
  hwb(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "hwb", color1, color2);
    return this;
  }
  lch(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "lch", color1, color2);
    return this;
  }
  and(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "and", color1, color2);
    return this;
  }
  oklch(color1: any | [any, any], color2: any | [any, any]) {
    this._value = inMix(this.prop, "oklch", color1, color2);
    return this;
  }
}
