import { isNum, PROXY } from "../proxy";

const underd = ["break_all", "keep_all"];
export class WORD extends PROXY<WORD, { wh: string; first: string }> {
  //

  declare break_all: this;
  declare keep_all: this;

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
  protected propFN = (p: string) => {
    if (underd.includes(p as string)) {
      return "wordBreak";
    }
    return "wordSpacing";
  };
  protected valFN = isNum;

  get normalBreak() {
    this._value = {
      wordBreak: "normal",
    };
    return this;
  }
  get normalWrap() {
    this._value = {
      wordWrap: "normal",
    };
    return this;
  }
  get break() {
    this._value = {
      wordWrap: "break-word",
    };
    return this;
  }
}
