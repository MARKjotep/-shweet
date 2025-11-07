import { media, Medyas, f } from "shweet";
import { COLOR } from "../color";
import { isNum, PROXY } from "../proxy";

/*
-------------------------
block
color
collapse
image
inline
-------------------------
*/

export class ATTACH extends PROXY<ATTACH, {}> {
  protected prop: string = "backgroundAttachment";
  //
  declare fixed: this;
  declare local: this;
  declare scroll: this;
}

export class BLEND extends PROXY<BLEND, {}> {
  protected prop: string = "backgroundBlendMode";
  //
  declare normal: this;
  declare multiply: this;
  declare screen: this;
  declare overlay: this;
  declare darken: this;
  declare lighten: this;
  declare color_dodge: this;
  declare saturation: this;
  declare color: this;
  declare luminosity: this;
}

export class CLIPOR extends PROXY<CLIPOR, { name: string }> {
  //
  declare border_box: this;
  declare padding_box: this;
  declare content_box: this;
  declare text: this;
  protected valFN = (val: any) => {
    if (this.prop === "backgroundClip" && val === "text") {
      //
      this._value = {
        webkitBackgroundClip: val,
      };
    }
    return val;
  };
  constructor({ prefix = "", data = { name: "" }, values = {} } = {}) {
    super({ prefix, data, values });
    this.prop = this.data.name;
  }
}

export class SIZE extends PROXY<SIZE> {
  protected prop: string = "backgroundSize";
  //
  [k: number]: this;
  declare 0: this;
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

  get auto() {
    const ppp = [this.data.mp, this.data.side].join("");
    this._value = {
      [this.prop]: "auto",
    };
    return this;
  }
  get cover() {
    this._value = {
      [this.prop]: "cover",
    };
    return this;
  }
  get contain() {
    this._value = {
      [this.prop]: "contain",
    };
    return this;
  }

  /**
   * Pixel
   * @param val number
   */
  px(val: number) {
    this._value = {
      [this.prop]: `${val}px`,
    };
    return this;
  }
  /**
   * Rem
   * @param val number
   */
  rm(val: number) {
    this._value = {
      [this.prop]: val,
    };
    return this;
  }

  value(val: any) {
    this._value = {
      [this.prop]: val,
    };
    return this;
  }
}

export class POSITION extends PROXY<POSITION> {
  protected prop: string = "backgroundPosition";
  protected replacer: string = " ";
  declare center: this;
  declare top: this;
  declare bottom: this;
  declare left: this;
  declare right: this;
  declare left_top: this;
  declare left_center: this;
  declare left_bottom: this;
  declare right_top: this;
  declare right_center: this;
  declare right_bottom: this;
  declare center_top: this;
  declare center_center: this;
  declare center_bottom: this;

  value(val: any) {
    this._value = {
      [this.prop]: val,
    };
    return this;
  }
  XY(x: any, y?: any) {
    this._value = {
      [this.prop]: [x, y],
    };
    return this;
  }
}

export class IMAGE extends PROXY<IMAGE, {}> {
  protected prop: string = "backgroundImage";
  //
  url(url: string) {
    this._value = {
      [this.prop]: f.url(url),
    };
    return this;
  }
  conic(...v: any[]) {
    this._value = {
      [this.prop]: f.conicGradient(...v),
    };
    return this;
  }
  repeatingConic(...v: any[]) {
    this._value = {
      [this.prop]: f.repeatingConicGradient(...v),
    };
    return this;
  }
  linear(...v: any[]) {
    this._value = {
      [this.prop]: f.linearGradient(...v),
    };
    return this;
  }
  repeatingLinear(...v: any[]) {
    this._value = {
      [this.prop]: f.repeatingLinearGradient(...v),
    };
    return this;
  }
  radial(...v: any[]) {
    this._value = {
      [this.prop]: f.radialGradient(...v),
    };
    return this;
  }
  repeatingRadial(...v: any[]) {
    this._value = {
      [this.prop]: f.repeatingRadialGradient(...v),
    };
    return this;
  }
  get none() {
    this._value = {
      [this.prop]: `none`,
    };
    return this;
  }
  value(val: any) {
    this._value = {
      [this.prop]: val,
    };
    return this;
  }
  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    this._value = {
      [this.prop]: f.var(val, optional),
    };
    return this;
  }
}

//

export class BACKGROUND {
  get ATTACH() {
    return new ATTACH();
  }
  get BLEND() {
    return new BLEND();
  }
  get CLIP() {
    return new CLIPOR({ data: { name: "backgroundClip" } });
  }
  get ORIGIN() {
    return new CLIPOR({ data: { name: "backgroundOrigin" } });
  }
  get COLOR() {
    return new COLOR({ data: { prop: "backgroundColor" } });
  }
  get SIZE() {
    return new SIZE();
  }
  get IMAGE() {
    return new IMAGE();
  }
  get POSITION() {
    return new POSITION();
  }
  get random() {
    return new COLOR({ data: { prop: "backgroundColor" } }).random;
  }
  color(color: any) {
    return new COLOR({ data: { prop: "backgroundColor" } }).color(color);
  }
}
