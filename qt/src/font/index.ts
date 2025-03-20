import { f } from "shweet";
import { isNum, PROXY } from "../proxy";

export class SIZE extends PROXY<SIZE> {
  protected prop: string = "fontSize";
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
   * Rem
   * @param val number
   */
  rm(val: number) {
    this._value = {
      [this.prop]: val,
    };
    return this;
  }

  value(val: number) {
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
export class FONTY extends PROXY<FONTY, {}> {
  font(font: any) {
    this._value = {
      font: font,
    };
    return this;
  }
  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    this._value = {
      font: f.var(val, optional),
    };
    return this;
  }
  stretch(stretch: any) {
    this._value = {
      fontStretch: stretch,
    };
    return this;
  }
  family(family: any) {
    this._value = {
      fontFamily: family,
    };
    return this;
  }
  sizeAdjust(size: any) {
    this._value = {
      fontSizeAdjust: size,
    };
    return this;
  }
  get arial() {
    this._value = {
      fontFamily: "Arial, Helvetica, sans-serif",
    };
    return this;
  }
  get brushScript() {
    this._value = {
      fontFamily: `"Brush Script MT", cursive`,
    };
    return this;
  }
  get comicSans() {
    this._value = {
      fontFamily: `"Comic Sans MS", cursive, sans-serif`,
    };
    return this;
  }
  get courier() {
    this._value = {
      fontFamily: `"Courier New", Courier, monospace`,
    };
    return this;
  }
  get georgia() {
    this._value = {
      fontFamily: `Georgia, "Times New Roman", serif`,
    };
    return this;
  }
  get google() {
    this._value = {
      fontFamily: `"Google Sans Mono", monospace`,
    };
    return this;
  }
  get monaco() {
    this._value = {
      fontFamily: `Monaco, Consolas, "Lucida Console", monospace`,
    };
    return this;
  }
  get palatino() {
    this._value = {
      fontFamily: `"Palatino Linotype", "Book Antiqua", Palatino, serif`,
    };
    return this;
  }
  get system() {
    this._value = {
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
    };
    return this;
  }
  get timesNew() {
    this._value = {
      fontFamily: `"Times New Roman", Times, serif`,
    };
    return this;
  }
  get trebuchet() {
    this._value = {
      fontFamily: `"Trebuchet MS", Tahoma, sans-serif`,
    };
    return this;
  }
  get verdana() {
    this._value = {
      fontFamily: `Verdana, Geneva, sans-serif`,
    };
    return this;
  }

  get normalStretch() {
    this._value = {
      fontStretch: `normal`,
    };
    return this;
  }
  //

  get normalStyle() {
    this._value = {
      fontStyle: `normal`,
    };
    return this;
  }
  get italic() {
    this._value = {
      fontStyle: `italic`,
    };
    return this;
  }
  get oblique() {
    this._value = {
      fontStyle: `oblique`,
    };
    return this;
  }
  //
  get normalVariant() {
    this._value = {
      fontVariant: `normal`,
    };
    return this;
  }
  get smallCaps() {
    this._value = {
      fontVariant: `small-caps`,
    };
    return this;
  }
  caps(cap: any) {
    this._value = {
      fontVariantCaps: cap,
    };
    return this;
  }

  weight(weight: any) {
    this._value = {
      fontWeight: weight,
    };
    return this;
  }
  //
  get normalWeight() {
    this._value = {
      fontWeight: `normal`,
    };
    return this;
  }
  get bold() {
    this._value = {
      fontWeight: `bold`,
    };
    return this;
  }
  get bolder() {
    this._value = {
      fontWeight: `bolder`,
    };
    return this;
  }
  get lighter() {
    this._value = {
      fontWeight: `lighter`,
    };
    return this;
  }
  get SIZE() {
    return new SIZE({
      values: this._value,
    });
  }
}
