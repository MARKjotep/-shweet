import { Medyas } from "shweet";
import { COLOR, RANDOM } from "../color";
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

const borStyle = (TH: BORDER, style: string) => {
  const PR = ["border", TH["data"].side, "Style"].join("");
  TH._value = {
    [PR]: style,
  };
  return TH;
};

export class BORDER extends Medyas<BORDER, { side: string }> {
  constructor({
    prefix = "",
    data = {
      side: "",
    },
    values = {},
  } = {}) {
    super({ prefix, data, values });
    //
  }
  value(border: any) {
    const PR = ["border", this.data.side].join("");
    this._value = {
      [PR]: border,
    };
    return this;
  }
  color(color: any) {
    const PR = ["border", this.data.side, "Color"].join("");
    this._value = {
      [PR]: color,
    };
    return this;
  }
  width(width: any) {
    const PR = ["border", this.data.side, "Width"].join("");
    this._value = {
      [PR]: width,
    };
    return this;
  }
  image(source: string, ...etc: any[]) {
    const PR = ["border", this.data.side, "Image"].join("");
    this._value = {
      [PR]: [source, ...etc.map(String)],
    };
    return this;
  }
  get solid() {
    return borStyle(this, "solid");
  }
  get dotted() {
    return borStyle(this, "dotted");
  }
  get none() {
    return borStyle(this, "none");
  }
  get hidden() {
    return borStyle(this, "hidden");
  }
  get dashed() {
    return borStyle(this, "dashed");
  }
  get double() {
    return borStyle(this, "double");
  }
  get groove() {
    return borStyle(this, "groove");
  }
  get ridge() {
    return borStyle(this, "ridge");
  }
  get inset() {
    return borStyle(this, "inset");
  }
  get outset() {
    return borStyle(this, "outset");
  }
  get TOP() {
    return new BORDER({
      values: this["_values"],
      data: { side: "Top" },
    });
  }
  get RIGHT() {
    return new BORDER({
      values: this["_values"],
      data: { side: "Right" },
    });
  }
  get LEFT() {
    return new BORDER({
      values: this["_values"],
      data: { side: "Left" },
    });
  }
  get BOTTOM() {
    return new BORDER({
      values: this["_values"],
      data: { side: "Bottom" },
    });
  }
  // SET
  get b1() {
    const PR = ["border", this.data.side, ""].join("");
    this._value = {
      [PR]: "1px solid currentColor",
    };
    return this;
  }
  get bRed() {
    const PR = ["border", this.data.side, ""].join("");
    this._value = {
      [PR]: "1px solid red",
    };
    return this;
  }
  get bRandom() {
    const PR = ["border", this.data.side, ""].join("");
    this._value = {
      [PR]: ["1px solid", RANDOM()[0]],
    };
    return this;
  }

  get COLOR() {
    const PR = ["border", this.data.side, "Color"].join("");
    return new COLOR({
      values: this._value,
      data: { prop: PR },
    });
  }
}

function PROX<T extends PROXY<T>>(this: T, prop: string): T {
  return new Proxy(this, {
    get(target: T, p: string) {
      const tm = Number(p);
      if (tm) {
        target._value = {
          [prop]: tm,
        };
      }

      return target;
    },
  });
}

export class RADIUS extends PROXY<RADIUS, {}> {
  protected prop: string = "borderRadius";
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

  v(val: any | any[]) {
    this._value = {
      borderRadius: val,
    };
  }
  get tL() {
    return PROX.call(
      this as PROXY<RADIUS, {}>,
      "borderTopLeftRadius",
    ) as RADIUS;
  }
  get tR() {
    return PROX.call(
      this as PROXY<RADIUS, {}>,
      "borderTopRightRadius",
    ) as RADIUS;
  }
  get bR() {
    return PROX.call(
      this as PROXY<RADIUS, {}>,
      "borderBottomRightRadius",
    ) as RADIUS;
  }
  get bL() {
    return PROX.call(
      this as PROXY<RADIUS, {}>,
      "borderBottomLeftRadius",
    ) as RADIUS;
  }
  x(val: any) {
    this._value = {
      borderTopLeftRadius: val,
      borderTopRightRadius: val,
    };
    return this;
  }
  y(val: any) {
    this._value = {
      borderBottomLeftRadius: val,
      borderBottomRightRadius: val,
    };
    return this;
  }
  get b0() {
    this._value = {
      borderRadius: 0,
    };
    return this;
  }
  get b0p5() {
    this._value = {
      borderRadius: 0.5,
    };
    return this;
  }
  get b1() {
    this._value = {
      borderRadius: 1,
    };
    return this;
  }
  get b1p5() {
    this._value = {
      borderRadius: 1.5,
    };
    return this;
  }
  get b2() {
    this._value = {
      borderRadius: 2,
    };
    return this;
  }
  /**
   * Percent
   * @param val number
   */
  pr(val: number) {
    this._value = {
      [this.prop]: `${val}%`,
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
