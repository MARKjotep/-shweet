import { Medyas, f } from "shweet";
import { COLOR, RANDOM } from "../color";
import { PROXY } from "../proxy";

/*
-------------------------
block
color
collapse
image
inline
-------------------------
*/

const borStyle = (TH: RULE, style: string) => {
  TH._value = {
    columnRuleStyle: style,
  };
  return TH;
};

export class RULE extends Medyas<RULE, {}> {
  constructor({ prefix = "", data = {}, values = {} } = {}) {
    super({ prefix, data, values });
    //
  }
  color(color: any) {
    this._value = {
      columnRuleColor: color,
    };
    return this;
  }
  width(width: any) {
    this._value = {
      columnRuleWidth: width,
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

  get COLOR() {
    return new COLOR({
      values: this._value,
      data: { prop: "columnRuleColor" },
    });
  }

  //
}

export class COUNTR extends PROXY<COUNTR, { prop: string }> {
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
  constructor({ prefix = "", data = { prop: "" }, values = {} } = {}) {
    super({ prefix, data, values });
    this.prop = this.data.prop;
  }
}

export class COLUMN extends Medyas<COLUMN, { wh: string; first: string }> {
  constructor({ prefix = "", data = {}, values = {} } = {}) {
    super({ prefix, data, values });
  }
  width(width: any) {
    this._value = {
      columnRuleWidth: width,
    };
    return this;
  }
  get COUNT() {
    return new COUNTR({ values: this._value, data: { prop: "columnCount" } });
  }
  count(count: any) {
    this._value = {
      columnCount: count,
    };
    return this;
  }
  get GAP() {
    return new COUNTR({ values: this._value, data: { prop: "columnGap" } });
  }
  gap(gap: any) {
    this._value = {
      columnGap: gap,
    };
    return this;
  }
  get balance() {
    this._value = {
      columnFill: "balance",
    };
    return this;
  }
  get auto() {
    this._value = {
      columnFill: "auto",
    };
    return this;
  }
  get span() {
    this._value = {
      columnSpan: "all",
    };
    return this;
  }
  get noSpan() {
    this._value = {
      columnSpan: "none",
    };
    return this;
  }
  rule(rule: any) {
    this._value = {
      columnRule: rule,
    };
    return this;
  }
  get RULE() {
    return new RULE({ values: this._value });
  }
}
