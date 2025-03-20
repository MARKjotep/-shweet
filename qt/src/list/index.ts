import { PROXY } from "../proxy";

export class LIST extends PROXY<LIST, { wh: string; first: string }> {
  protected prop: string = "listStyleType";

  declare disc: this;
  declare armenian: this;
  declare circle: this;
  declare cjk_ideographic: this;
  declare decimal: this;
  declare decimal_leading_zero: this;
  declare georgian: this;
  declare hebrew: this;
  declare hiragana: this;
  declare hiragana_iroha: this;
  declare katakana: this;
  declare katakana_iroha: this;
  declare lower_alpha: this;
  declare lower_greek: this;
  declare lower_latin: this;
  declare lower_roman: this;
  declare none: this;
  declare square: this;
  declare upper_alpha: this;
  declare upper_greek: this;
  declare upper_latin: this;
  declare upper_roman: this;
  //
  [k: number]: this;
  declare 1: this;
  image(img: any) {
    this._value = {
      listStyleImage: img,
    };
    return this;
  }
  get noImage() {
    this._value = {
      listStyleImage: "none",
    };
    return this;
  }
  get inside() {
    this._value = {
      listStylePosition: "inside",
    };
    return this;
  }
  get outside() {
    this._value = {
      listStylePosition: "outside",
    };
    return this;
  }
}
