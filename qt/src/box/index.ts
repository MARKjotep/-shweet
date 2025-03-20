import { PROXY } from "../proxy";
import { Value, f } from "shweet";

export interface shadowCFG {
  x: any;
  y: any;
  color: any;
  blur?: any;
  spread?: any;
  inset?: boolean;
}

export const getShadow = (s: shadowCFG) => {
  const { x, y, blur, spread, color, inset } = s;
  return Value([x, y, blur, spread, color, inset ? "inset" : undefined], {
    rem: true,
  });
};

export class SHADOW extends PROXY<SHADOW, {}> {
  protected shadows = new Set<string>();
  value(shadow: any) {
    this.shadows.add(Value(shadow, { rem: true }));
    //
    this._value = {
      boxShadow: [...this.shadows].join(", "),
    };
    return this;
  }
  set(shadow: shadowCFG) {
    //

    const vv = getShadow(shadow);
    this.shadows.add(vv);

    this._value = {
      boxShadow: [...this.shadows].join(", "),
    };

    return this;
  }
  get none() {
    //
    this._value = {
      boxShadow: "none",
    };
    return this;
  }

  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    this._value = {
      boxShadow: f.var(val, optional),
    };
    return this;
  }
}

export class BOX extends PROXY<BOX, {}> {
  //

  get slice() {
    this._value = {
      webkitBoxDecorationBreak: "slice",
      boxDecorationBreak: "slice",
    };
    return this;
  }
  get clone() {
    this._value = {
      webkitBoxDecorationBreak: "clone",
      boxDecorationBreak: "clone",
    };
    return this;
  }
  get content() {
    this._value = {
      boxSizing: "content-box",
    };
    return this;
  }
  get border() {
    this._value = {
      boxSizing: "border-box",
    };
    return this;
  }
}
