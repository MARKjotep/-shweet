import { f } from "shweet";
import { isNum, PROXY } from "../proxy";

export class MP extends PROXY<MP, { mp: string; side: string }> {
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
  protected propFN = () => {
    return [this.data.mp, this.data.side].join("");
  };

  get auto() {
    this._value = {
      [this.propFN()]: "auto",
    };
    return this;
  }

  /**
   * Pixel
   * @param val number
   */
  px(val: number) {
    this._value = {
      [this.propFN()]: `${val}px`,
    };
    return this;
  }
  /**
   * Rem
   * @param val number
   */
  rm(val: number) {
    this._value = {
      [this.propFN()]: val,
    };
    return this;
  }

  value(val: any) {
    this._value = {
      [this.propFN()]: val,
    };
    return this;
  }

  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    this._value = {
      [this.propFN()]: f.var(val, optional),
    };
    return this;
  }

  /*
  -------------------------
  
  -------------------------
  */

  get TOP() {
    return new MP({
      values: this["_values"],
      data: { mp: this.data.mp, side: "Top" },
    });
  }
  get RIGHT() {
    return new MP({
      values: this["_values"],
      data: { mp: this.data.mp, side: "Right" },
    });
  }
  get LEFT() {
    return new MP({
      values: this["_values"],
      data: { mp: this.data.mp, side: "Left" },
    });
  }
  get BOTTOM() {
    return new MP({
      values: this["_values"],
      data: { mp: this.data.mp, side: "Bottom" },
    });
  }
  get BLOCK() {
    return new INLINEBLOCK({
      values: this["_values"],
      data: { bin: this.data.mp + "Block", side: "" },
    });
  }
  get INLINE() {
    return new INLINEBLOCK({
      values: this["_values"],
      data: { bin: this.data.mp + "Inline", side: "" },
    });
  }
}

export class INLINEBLOCK extends PROXY<INLINEBLOCK, { bin: string; side: "" }> {
  protected prop: string = "";
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

  constructor({ prefix = "", data = { bin: "", side: "" }, values = {} } = {}) {
    super({ prefix, data, values });
    this.prop = [this.data.bin, this.data.side].join("");
  }

  /**
   * Pixel
   * @param val number
   */
  px(val: number) {
    this._value = {
      [this.data.bin]: `${val}px`,
    };
    return this;
  }
  /**
   * Percent
   * @param val number
   */
  pr(val: number) {
    this._value = {
      [this.data.bin]: `${val}%`,
    };
    return this;
  }
  /**
   * Rem
   * @param val number
   */
  rm(val: number) {
    this._value = {
      [this.data.bin]: val,
    };
    return this;
  }
  get END() {
    return new INLINEBLOCK({
      values: this["_values"],
      data: { bin: this.data.bin, side: "End" },
    });
  }
  get START() {
    return new INLINEBLOCK({
      values: this["_values"],
      data: { bin: this.data.bin, side: "Start" },
    });
  }
}
