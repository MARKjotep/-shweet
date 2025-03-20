import { Medyas, f } from "shweet";
import { COLOR, RANDOM } from "../color";

/*
-------------------------
block
color
collapse
image
inline
-------------------------
*/

const borStyle = (TH: OUTLINE, style: string) => {
  TH._value = {
    outlineStyle: style,
  };
  return TH;
};

export class OUTLINE extends Medyas<OUTLINE, {}> {
  constructor({ prefix = "", data = {}, values = {} } = {}) {
    super({ prefix, data, values });
    //
  }
  color(color: any) {
    this._value = {
      outlineColor: color,
    };
    return this;
  }
  width(width: any) {
    this._value = {
      outlineWidth: width,
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
  // SET
  get b1() {
    this._value = {
      outline: "1px solid currentColor",
    };
    return this;
  }
  get bRed() {
    this._value = {
      outline: "1px solid red",
    };
    return this;
  }
  get bRandom() {
    this._value = {
      outline: ["1px solid", RANDOM()[0]],
    };
    return this;
  }

  get COLOR() {
    return new COLOR({
      values: this._value,
      data: { prop: "outlineColor" },
    });
  }

  //

  off(off: number) {
    return toOff(this, off);
  }
  get off0() {
    return toOff(this, 0);
  }
  get off1() {
    return toOff(this, 1);
  }
  get off2() {
    return toOff(this, 2);
  }
  get off3() {
    return toOff(this, 3);
  }
  get off4() {
    return toOff(this, 4);
  }
  get off5() {
    return toOff(this, 5);
  }
}

const toOff = (TH: OUTLINE, value: number) => {
  TH._value = {
    outlineOffset: value,
  };
  return TH as OUTLINE;
};
