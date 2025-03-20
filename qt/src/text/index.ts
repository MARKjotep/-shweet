import { CSSinR, CSSValue } from "shweet";
import { COLOR } from "../color";
import { isNum, PROXY } from "../proxy";

class ALIGN extends PROXY<ALIGN, { wh: string; first: string }> {
  protected prop: string = "textAlign";
  //
  declare left: this;
  declare right: this;
  declare center: this;
  declare justify: this;
}

const line = ["none", "underline", "overline", "line_through"];
export class DECOR extends PROXY<DECOR, {}> {
  declare solid: this;
  declare double: this;
  declare dotted: this;
  declare dashed: this;
  declare wavy: this;
  //
  declare none: this;
  declare underline: this;
  declare overline: this;
  declare line_through: this;

  protected propFN = (p: string) => {
    if (line.includes(p as string)) {
      return "textDecorationLine";
    }
    return "textDecorationStyle";
  };

  get COLOR() {
    return new COLOR({
      values: this._value,
      data: { prop: "textDecorationColor" },
    });
  }

  thickness(len: any) {
    this._value = {
      textDecorationThickness: len,
    };
    return this;
  }
  get auto() {
    this._value = {
      textDecorationThickness: "auto",
    };
    return this;
  }
  get font() {
    this._value = {
      textDecorationThickness: "from-font",
    };
    return this;
  }
}

const position = ["over", "under", "left", "right"];
class EMPH extends PROXY<EMPH, { wh: string; first: string }> {
  protected prop: string = "textEmphasis";
  //
  declare over: this;
  declare under: this;
  declare left: this;
  declare right: this;

  declare none: this;
  declare filled: this;
  declare open: this;
  declare dot: this;
  declare circle: this;
  declare double_circle: this;
  declare triangle: this;
  declare sesame: this;

  protected propFN = (p: string) => {
    if (position.includes(p as string)) {
      return "textEmphasisPosition";
    }
    return "textEmphasisStyle";
  };
  char(char: string) {
    this._value = {
      textEmphasisStyle: `"${char}"`,
    };
    return this;
  }
  get COLOR() {
    return new COLOR({
      values: this._value,
      data: { prop: "textEmphasisColor" },
    });
  }
}

export class INDENT extends PROXY<INDENT, { mp: string; side: string }> {
  protected prop: string = "textIndent";
  //
  [k: number]: this;
  declare 1: this;
  declare 2: this;
  declare 3: this;
  declare 4: this;
  declare 5: this;
  declare 6: this;
  declare 7: this;
  declare 8: this;
  declare 9: this;
  declare 10: this;
  protected valFN = isNum;
}

class JUSTIFY extends PROXY<JUSTIFY, { wh: string; first: string }> {
  protected prop: string = "textJustify";
  //
  declare auto: this;
  declare inter_word: this;
  declare inter_character: this;
  declare none: this;
}

class ORIENTATION extends PROXY<JUSTIFY, { wh: string; first: string }> {
  protected prop: string = "textOrientation";
  //
  declare mixed: this;
  declare upright: this;
  declare sideways: this;
  declare sideways_right: this;
  declare use_glyph_orientation: this;
}

const under = ["auto", "under", "from_font", "left", "right"];
class UNDERLINE extends PROXY<UNDERLINE, { wh: string; first: string }> {
  //
  declare auto: this;
  declare under: this;
  declare from_font: this;
  declare left: this;
  declare right: this;

  [k: number]: this;
  declare 1: this;
  declare 2: this;
  declare 3: this;
  declare 4: this;
  declare 5: this;
  declare 6: this;
  declare 7: this;
  declare 8: this;
  declare 9: this;
  declare 10: this;
  protected propFN = (p: string) => {
    if (under.includes(p as string)) {
      return "textUnderlinePosition";
    }
    return "textUnderlineOffset";
  };
  protected valFN = isNum;
  get autoOffset() {
    this._value = {
      textUnderlineOffset: "auto",
    };
    return this;
  }
}

/*
-------------------------
TODO
SHADOW -- make the box shadow extensible
-------------------------
*/
export class TEXT extends PROXY<TEXT> {
  get ALIGN() {
    return new ALIGN();
  }
  get DECOR() {
    return new DECOR();
  }
  get EMPHASIS() {
    return new EMPH();
  }
  get INDENT() {
    return new INDENT();
  }
  get JUSTIFY() {
    return new JUSTIFY();
  }
  get ORIENTATION() {
    return new ORIENTATION();
  }
  get UNDERLINE() {
    return new UNDERLINE();
  }
  get clip() {
    this._value = {
      textOverflow: "clip",
    };
    return this;
  }
  get ellipsis() {
    this._value = {
      textOverflow: "ellipsis",
    };
    return this;
  }
  overflow(custom: string) {
    this._value = {
      textOverflow: `"${custom}"`,
    };
    return this;
  }
  decor(val: CSSValue) {
    this._value = {
      textDecoration: val,
    };
    return this;
  }
  get capitalize() {
    this._value = {
      textTransform: "capitalize",
    };
    return this;
  }
  get uppercase() {
    this._value = {
      textTransform: "uppercase",
    };
    return this;
  }
  get lowercase() {
    this._value = {
      textTransform: "lowercase",
    };
    return this;
  }
  get noTransform() {
    this._value = {
      textTransform: "none",
    };
    return this;
  }
  get COLOR() {
    return new COLOR({
      values: this._value,
      data: { prop: "color" },
    });
  }
}
