import { med, VarType, f } from "shweet";

const rand = (min = 6, max?: number) => {
  if (!max) return Math.floor(Math.random() * min);
  return Math.round(Math.random() * (max - min) + min);
};

export const clr = {
  aliceBlue: "#F0F8FF",
  antiqueWhite: "#FAEBD7",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000000",
  blanchedAlmond: "#FFEBCD",
  blue: "#0000FF",
  blueViolet: "#8A2BE2",
  brown: "#A52A2A",
  burlyWood: "#DEB887",
  cadetBlue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerBlue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#00FFFF",
  darkBlue: "#00008B",
  darkCyan: "#008B8B",
  darkGoldenrod: "#B8860B",
  darkGray: "#A9A9A9",
  darkGreen: "#006400",
  darkKhaki: "#BDB76B",
  darkMagenta: "#8B008B",
  darkOliveGreen: "#556B2F",
  darkOrange: "#FF8C00",
  darkOrchid: "#9932CC",
  darkRed: "#8B0000",
  darkSalmon: "#E9967A",
  darkSeaGreen: "#8FBC8B",
  darkSlateBlue: "#483D8B",
  darkSlateGray: "#2F4F4F",
  darkTurquoise: "#00CED1",
  darkViolet: "#9400D3",
  deepPink: "#FF1493",
  deepSkyBlue: "#00BFFF",
  dimGray: "#696969",
  dodgerBlue: "#1E90FF",
  fireBrick: "#B22222",
  floralWhite: "#FFFAF0",
  forestGreen: "#228B22",
  fuchsia: "#FF00FF",
  gainsboro: "#DCDCDC",
  ghostWhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  green: "#008000",
  greenYellow: "#ADFF2F",
  honeyDew: "#F0FFF0",
  hotPink: "#FF69B4",
  indianRed: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderBlush: "#FFF0F5",
  lawnGreen: "#7CFC00",
  lemonChiffon: "#FFFACD",
  lightBlue: "#ADD8E6",
  lightCoral: "#F08080",
  lightCyan: "#E0FFFF",
  lightGoldenrodYellow: "#FAFAD2",
  lightGray: "#D3D3D3",
  lightGreen: "#90EE90",
  lightPink: "#FFB6C1",
  lightSalmon: "#FFA07A",
  lightSeaGreen: "#20B2AA",
  lightSkyBlue: "#87CEFA",
  lightSlateGray: "#778899",
  lightSteelBlue: "#B0C4DE",
  lightYellow: "#FFFFE0",
  lime: "#00FF00",
  limeGreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#FF00FF",
  maroon: "#800000",
  mediumAquamarine: "#66CDAA",
  mediumBlue: "#0000CD",
  mediumOrchid: "#BA55D3",
  mediumPurple: "#9370DB",
  mediumSeaGreen: "#3CB371",
  mediumSlateBlue: "#7B68EE",
  mediumSpringGreen: "#00FA9A",
  mediumTurquoise: "#48D1CC",
  mediumVioletRed: "#C71585",
  midnightBlue: "#191970",
  mintCream: "#F5FFFA",
  mistyRose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajoWhite: "#FFDEAD",
  navy: "#000080",
  oldLace: "#FDF5E6",
  olive: "#808000",
  oliveDrab: "#6B8E23",
  orange: "#FFA500",
  orangeRed: "#FF4500",
  orchid: "#DA70D6",
  paleGoldenrod: "#EEE8AA",
  paleGreen: "#98FB98",
  paleTurquoise: "#AFEEEE",
  paleVioletRed: "#DB7093",
  papayaWhip: "#FFEFD5",
  peachPuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderBlue: "#B0E0E6",
  purple: "#800080",
  rebeccaPurple: "#663399",
  red: "#FF0000",
  rosyBrown: "#BC8F8F",
  royalBlue: "#4169E1",
  saddleBrown: "#8B4513",
  salmon: "#FA8072",
  sandyBrown: "#F4A460",
  seaGreen: "#2E8B57",
  seaShell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyBlue: "#87CEEB",
  slateBlue: "#6A5ACD",
  slateGray: "#708090",
  snow: "#FFFAFA",
  springGreen: "#00FF7F",
  steelBlue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFFFFF",
  whiteSmoke: "#F5F5F5",
  yellow: "#FFFF00",
  yellowGreen: "#9ACD32",

  /**
   * in Colors
   */
  transparent: "transparent",
  initial: "initial",
  inherit: "inherit",
  current: "currentColor",
  random(opacity?: any): string {
    const rit = Object.entries(clr);

    const rnd = rand(0, rit.length - 1);
    const xmp = [
      "transparent",
      "initial",
      "inherit",
      "current",
      "random",
      "hex2rbga",
    ];
    let [kk, vv] = rit[rnd];

    while (xmp.includes(kk)) {
      const rnd = rand(0, rit.length - 1);
      [kk, vv] = rit[rnd];
    }

    let _vv = String(vv);

    if (opacity !== undefined) {
      return clr.hex2rbga(_vv, opacity);
    }

    return _vv;
  },
  hex2rbga: (hexCode: string, opacity: any = 100) => {
    if (["transparent", "initial", "inherit", "currentColor"].includes(hexCode))
      return hexCode;

    let hex = hexCode.replace("#", "");
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    if (opacity > 1 && opacity <= 100) {
      opacity = opacity;
    }

    return f.rgba(r, g, b, opacity !== undefined ? `${opacity}%` : undefined);
  },
};

export function autoColor(color: string[]) {
  const [c1, c2] = color;

  return (alpha: VarType | number = 100) => {
    return med(clr.hex2rbga(c1, alpha), {
      dark: clr.hex2rbga(c2, alpha),
    });
  };
}

//
export const black = autoColor(["#000000", "#ffffff"]);
export const white = autoColor(["#ffffff", "#000000"]);
export const transparent = autoColor(["transparent", "transparent"])();
export const current = autoColor(["currentColor", "currentColor"])();

export const blue = {
  50: autoColor(["#eff6ff", "#172554"]),
  100: autoColor(["#dbeafe", "#1e3a8a"]),
  200: autoColor(["#bfdbfe", "#1e40af"]),
  300: autoColor(["#93c5fd", "#1d4ed8"]),
  400: autoColor(["#60a5fa", "#2563eb"]),
  500: autoColor(["#3b82f6", "#60a5fa"]),
  600: autoColor(["#2563eb", "#93c5fd"]),
  700: autoColor(["#1d4ed8", "#bfdbfe"]),
  800: autoColor(["#1e40af", "#dbeafe"]),
  900: autoColor(["#1e3a8a", "#eff6ff"]),
  950: autoColor(["#172554", "#f8fbff"]),
};

export const green = {
  50: autoColor(["#f0fdf4", "#052e16"]),
  100: autoColor(["#dcfce7", "#14532d"]),
  200: autoColor(["#bbf7d0", "#166534"]),
  300: autoColor(["#86efac", "#15803d"]),
  400: autoColor(["#4ade80", "#16a34a"]),
  500: autoColor(["#22c55e", "#4ade80"]),
  600: autoColor(["#16a34a", "#86efac"]),
  700: autoColor(["#15803d", "#bbf7d0"]),
  800: autoColor(["#166534", "#dcfce7"]),
  900: autoColor(["#14532d", "#f0fdf4"]),
  950: autoColor(["#052e16", "#f6fff9"]),
};

export const red = {
  50: autoColor(["#fef2f2", "#450a0a"]),
  100: autoColor(["#fee2e2", "#7f1d1d"]),
  200: autoColor(["#fecaca", "#991b1b"]),
  300: autoColor(["#fca5a5", "#b91c1c"]),
  400: autoColor(["#f87171", "#dc2626"]),
  500: autoColor(["#ef4444", "#f87171"]),
  600: autoColor(["#dc2626", "#fca5a5"]),
  700: autoColor(["#b91c1c", "#fecaca"]),
  800: autoColor(["#991b1b", "#fee2e2"]),
  900: autoColor(["#7f1d1d", "#fef2f2"]),
  950: autoColor(["#450a0a", "#fffbfb"]),
};

export const yellow = {
  50: autoColor(["#fefce8", "#422006"]),
  100: autoColor(["#fef9c3", "#713f12"]),
  200: autoColor(["#fef08a", "#854d0e"]),
  300: autoColor(["#fde047", "#a16207"]),
  400: autoColor(["#facc15", "#ca8a04"]),
  500: autoColor(["#eab308", "#fde047"]),
  600: autoColor(["#ca8a04", "#fef08a"]),
  700: autoColor(["#a16207", "#fef9c3"]),
  800: autoColor(["#854d0e", "#fefce8"]),
  900: autoColor(["#713f12", "#fffaeb"]),
  950: autoColor(["#422006", "#fffdf6"]),
};

export const orange = {
  50: autoColor(["#fff7ed", "#431407"]),
  100: autoColor(["#ffedd5", "#7c2d12"]),
  200: autoColor(["#fed7aa", "#9a3412"]),
  300: autoColor(["#fdba74", "#c2410c"]),
  400: autoColor(["#fb923c", "#ea580c"]),
  500: autoColor(["#f97316", "#fdba74"]),
  600: autoColor(["#ea580c", "#febc89"]),
  700: autoColor(["#c2410c", "#fed7aa"]),
  800: autoColor(["#9a3412", "#ffedd5"]),
  900: autoColor(["#7c2d12", "#fff7ed"]),
  950: autoColor(["#431407", "#fffcf5"]),
};

export const purple = {
  50: autoColor(["#faf5ff", "#3b0764"]),
  100: autoColor(["#f3e8ff", "#581c87"]),
  200: autoColor(["#e9d5ff", "#6b21a8"]),
  300: autoColor(["#d8b4fe", "#7e22ce"]),
  400: autoColor(["#c084fc", "#9333ea"]),
  500: autoColor(["#a855f7", "#c084fc"]),
  600: autoColor(["#9333ea", "#d8b4fe"]),
  700: autoColor(["#7e22ce", "#e9d5ff"]),
  800: autoColor(["#6b21a8", "#f3e8ff"]),
  900: autoColor(["#581c87", "#faf5ff"]),
  950: autoColor(["#3b0764", "#f9f1ff"]),
};

export const gray = {
  50: autoColor(["#f9fafb", "#030712"]),
  100: autoColor(["#f3f4f6", "#111827"]),
  200: autoColor(["#e5e7eb", "#1f2937"]),
  300: autoColor(["#d1d5db", "#374151"]),
  400: autoColor(["#9ca3af", "#4b5563"]),
  500: autoColor(["#6b7280", "#9ca3af"]),
  600: autoColor(["#4b5563", "#d1d5db"]),
  700: autoColor(["#374151", "#e5e7eb"]),
  800: autoColor(["#1f2937", "#f3f4f6"]),
  900: autoColor(["#111827", "#f9fafb"]),
  950: autoColor(["#030712", "#ffffff"]),
};

export const indigo = {
  50: autoColor(["#eef2ff", "#1e1b4b"]),
  100: autoColor(["#e0e7ff", "#312e81"]),
  200: autoColor(["#c7d2fe", "#3730a3"]),
  300: autoColor(["#a5b4fc", "#4338ca"]),
  400: autoColor(["#818cf8", "#4f46e5"]),
  500: autoColor(["#6366f1", "#818cf8"]),
  600: autoColor(["#4f46e5", "#a5b4fc"]),
  700: autoColor(["#4338ca", "#c7d2fe"]),
  800: autoColor(["#3730a3", "#e0e7ff"]),
  900: autoColor(["#312e81", "#eef2ff"]),
  950: autoColor(["#1e1b4b", "#f8fafc"]),
};

export const pink = {
  50: autoColor(["#fdf2f8", "#500724"]),
  100: autoColor(["#fce7f3", "#831843"]),
  200: autoColor(["#fbcfe8", "#9d174d"]),
  300: autoColor(["#f9a8d4", "#be185d"]),
  400: autoColor(["#f472b6", "#db2777"]),
  500: autoColor(["#ec4899", "#f472b6"]),
  600: autoColor(["#db2777", "#f9a8d4"]),
  700: autoColor(["#be185d", "#fbcfe8"]),
  800: autoColor(["#9d174d", "#fce7f3"]),
  900: autoColor(["#831843", "#fdf2f8"]),
  950: autoColor(["#500724", "#fff1f5"]),
};

export const teal = {
  50: autoColor(["#f0fdfa", "#042f2e"]),
  100: autoColor(["#ccfbf1", "#134e4a"]),
  200: autoColor(["#99f6e4", "#115e59"]),
  300: autoColor(["#5eead4", "#0f766e"]),
  400: autoColor(["#2dd4bf", "#0d9488"]),
  500: autoColor(["#14b8a6", "#2dd4bf"]),
  600: autoColor(["#0d9488", "#5eead4"]),
  700: autoColor(["#0f766e", "#99f6e4"]),
  800: autoColor(["#115e59", "#ccfbf1"]),
  900: autoColor(["#134e4a", "#f0fdfa"]),
  950: autoColor(["#042f2e", "#fafffc"]),
};

export const _blue = {
  50: { l: "#eff6ff", d: "#172554" },
  100: { l: "#dbeafe", d: "#1e3a8a" },
  200: { l: "#bfdbfe", d: "#1e40af" },
  300: { l: "#93c5fd", d: "#1d4ed8" },
  400: { l: "#60a5fa", d: "#2563eb" },
  500: { l: "#3b82f6", d: "#60a5fa" },
  600: { l: "#2563eb", d: "#93c5fd" },
  700: { l: "#1d4ed8", d: "#bfdbfe" },
  800: { l: "#1e40af", d: "#dbeafe" },
  900: { l: "#1e3a8a", d: "#eff6ff" },
  950: { l: "#172554", d: "#f8fbff" },
};
export const _green = {
  50: { l: "#f0fdf4", d: "#052e16" },
  100: { l: "#dcfce7", d: "#14532d" },
  200: { l: "#bbf7d0", d: "#166534" },
  300: { l: "#86efac", d: "#15803d" },
  400: { l: "#4ade80", d: "#16a34a" },
  500: { l: "#22c55e", d: "#4ade80" },
  600: { l: "#16a34a", d: "#86efac" },
  700: { l: "#15803d", d: "#bbf7d0" },
  800: { l: "#166534", d: "#dcfce7" },
  900: { l: "#14532d", d: "#f0fdf4" },
  950: { l: "#052e16", d: "#f6fff9" },
};
export const _red = {
  50: { l: "#fef2f2", d: "#450a0a" },
  100: { l: "#fee2e2", d: "#7f1d1d" },
  200: { l: "#fecaca", d: "#991b1b" },
  300: { l: "#fca5a5", d: "#b91c1c" },
  400: { l: "#f87171", d: "#dc2626" },
  500: { l: "#ef4444", d: "#f87171" },
  600: { l: "#dc2626", d: "#fca5a5" },
  700: { l: "#b91c1c", d: "#fecaca" },
  800: { l: "#991b1b", d: "#fee2e2" },
  900: { l: "#7f1d1d", d: "#fef2f2" },
  950: { l: "#450a0a", d: "#fffbfb" },
};
export const _yellow = {
  50: { l: "#fefce8", d: "#422006" },
  100: { l: "#fef9c3", d: "#713f12" },
  200: { l: "#fef08a", d: "#854d0e" },
  300: { l: "#fde047", d: "#a16207" },
  400: { l: "#facc15", d: "#ca8a04" },
  500: { l: "#eab308", d: "#fde047" },
  600: { l: "#ca8a04", d: "#fef08a" },
  700: { l: "#a16207", d: "#fef9c3" },
  800: { l: "#854d0e", d: "#fefce8" },
  900: { l: "#713f12", d: "#fffaeb" },
  950: { l: "#422006", d: "#fffdf6" },
};
export const _orange = {
  50: { l: "#fff7ed", d: "#431407" },
  100: { l: "#ffedd5", d: "#7c2d12" },
  200: { l: "#fed7aa", d: "#9a3412" },
  300: { l: "#fdba74", d: "#c2410c" },
  400: { l: "#fb923c", d: "#ea580c" },
  500: { l: "#f97316", d: "#fdba74" },
  600: { l: "#ea580c", d: "#febc89" },
  700: { l: "#c2410c", d: "#fed7aa" },
  800: { l: "#9a3412", d: "#ffedd5" },
  900: { l: "#7c2d12", d: "#fff7ed" },
  950: { l: "#431407", d: "#fffcf5" },
};
export const _purple = {
  50: { l: "#faf5ff", d: "#3b0764" },
  100: { l: "#f3e8ff", d: "#581c87" },
  200: { l: "#e9d5ff", d: "#6b21a8" },
  300: { l: "#d8b4fe", d: "#7e22ce" },
  400: { l: "#c084fc", d: "#9333ea" },
  500: { l: "#a855f7", d: "#c084fc" },
  600: { l: "#9333ea", d: "#d8b4fe" },
  700: { l: "#7e22ce", d: "#e9d5ff" },
  800: { l: "#6b21a8", d: "#f3e8ff" },
  900: { l: "#581c87", d: "#faf5ff" },
  950: { l: "#3b0764", d: "#f9f1ff" },
};
export const _gray = {
  50: { l: "#f9fafb", d: "#030712" },
  100: { l: "#f3f4f6", d: "#111827" },
  200: { l: "#e5e7eb", d: "#1f2937" },
  300: { l: "#d1d5db", d: "#374151" },
  400: { l: "#9ca3af", d: "#4b5563" },
  500: { l: "#6b7280", d: "#9ca3af" },
  600: { l: "#4b5563", d: "#d1d5db" },
  700: { l: "#374151", d: "#e5e7eb" },
  800: { l: "#1f2937", d: "#f3f4f6" },
  900: { l: "#111827", d: "#f9fafb" },
  950: { l: "#030712", d: "#ffffff" },
};
export const _indigo = {
  50: { l: "#eef2ff", d: "#1e1b4b" },
  100: { l: "#e0e7ff", d: "#312e81" },
  200: { l: "#c7d2fe", d: "#3730a3" },
  300: { l: "#a5b4fc", d: "#4338ca" },
  400: { l: "#818cf8", d: "#4f46e5" },
  500: { l: "#6366f1", d: "#818cf8" },
  600: { l: "#4f46e5", d: "#a5b4fc" },
  700: { l: "#4338ca", d: "#c7d2fe" },
  800: { l: "#3730a3", d: "#e0e7ff" },
  900: { l: "#312e81", d: "#eef2ff" },
  950: { l: "#1e1b4b", d: "#f8fafc" },
};
export const _pink = {
  50: { l: "#fdf2f8", d: "#500724" },
  100: { l: "#fce7f3", d: "#831843" },
  200: { l: "#fbcfe8", d: "#9d174d" },
  300: { l: "#f9a8d4", d: "#be185d" },
  400: { l: "#f472b6", d: "#db2777" },
  500: { l: "#ec4899", d: "#f472b6" },
  600: { l: "#db2777", d: "#f9a8d4" },
  700: { l: "#be185d", d: "#fbcfe8" },
  800: { l: "#9d174d", d: "#fce7f3" },
  900: { l: "#831843", d: "#fdf2f8" },
  950: { l: "#500724", d: "#fff1f5" },
};
export const _teal = {
  50: { l: "#f0fdfa", d: "#042f2e" },
  100: { l: "#ccfbf1", d: "#134e4a" },
  200: { l: "#99f6e4", d: "#115e59" },
  300: { l: "#5eead4", d: "#0f766e" },
  400: { l: "#2dd4bf", d: "#0d9488" },
  500: { l: "#14b8a6", d: "#2dd4bf" },
  600: { l: "#0d9488", d: "#5eead4" },
  700: { l: "#0f766e", d: "#99f6e4" },
  800: { l: "#115e59", d: "#ccfbf1" },
  900: { l: "#134e4a", d: "#f0fdfa" },
  950: { l: "#042f2e", d: "#fafffc" },
};
