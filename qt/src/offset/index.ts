import { CSSValue } from "shweet";
import { isNum, PROXY } from "../proxy";

export interface OFFX<T = CSSValue> {
  anchor?: T;
  distance?: T;
  path?: T;
  position?: T;
  rotate?: T;
}

export class ANCHOR extends PROXY<ANCHOR> {
  protected prop: string = "offsetAnchor";
  protected replacer: string = " ";
  //
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

export class SIZE extends PROXY<SIZE> {
  protected prop: string = "offsetDistance";
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

export class OFFSET extends PROXY<OFFSET, {}> {
  protected prop: string = "";

  offset(offset: OFFX) {
    const { path, anchor } = offset;
    //
    return this;
  }
  //
  get auto() {
    this._value = {
      offset: "auto",
    };
    return this;
  }
  get autoPosition() {
    this._value = {
      offsetPosition: "auto",
    };
    return this;
  }
  get autoRotate() {
    this._value = {
      offsetRotate: "auto",
    };
    return this;
  }
  get autoAnchor() {
    this._value = {
      offsetAnchor: "auto",
    };
    return this;
  }
  get ANCHOR() {
    return new ANCHOR();
  }
  get DISTANCE() {
    return new SIZE();
  }
  path(path: any) {
    //

    this._value = {
      offsetPath: path,
    };

    return this;
  }
  get noPath() {
    this._value = {
      offsetPath: "none",
    };
    return this;
  }
  get normal() {
    this._value = {
      offsetPosition: "normal",
    };
    return this;
  }
  position(position: any) {
    this._value = {
      offsetPosition: position,
    };
    return this;
  }
  rotate(rotate: any) {
    this._value = {
      offsetRotate: rotate,
    };
    return this;
  }
}

new OFFSET().path({});
