import { f, CSSValue } from "shweet";
import { isNum, PROXY } from "../proxy";

export interface TRANSX<T = CSSValue> {
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

export class TRANSFORM extends PROXY<TRANSFORM, {}> {
  origin(...origin: [string, string?, string?]) {
    this._value = {
      transformOrigin: origin,
    };

    return this;
  }
  get flat() {
    this._value = {
      transformStyle: "flat",
    };
    return this;
  }
  get preserve3d() {
    this._value = {
      transformStyle: "preserve-3d",
    };
    return this;
  }
  get none() {
    this._value = {
      transform: "none",
    };
    return this;
  }

  transform(tran: TRANSX) {
    const transi: any[] = [];
    Object.entries(tran).forEach(([pr, vl]) => {
      if (pr in f) {
        const fn = f[pr as keyof f] as Function;
        transi.push(fn(vl));
      }
    });

    if (transi.length) {
      this._value = {
        transform: transi,
      };
    }
    //
    return this;
  }

  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    this._value = {
      transform: f.var(val, optional),
    };
    return this;
  }
}

export class PERSPECTIVE extends PROXY<PERSPECTIVE, {}> {
  protected prop: string = "perspective";
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
  //
  get none() {
    this._value = {
      perspective: "none",
    };
    return this;
  }
  x(axis: any) {
    this._value = {
      perspectiveOrigin: axis,
    };

    return this;
  }
  y(axis: any) {
    this._value = {
      perspectiveOrigin: axis,
    };

    return this;
  }
}
