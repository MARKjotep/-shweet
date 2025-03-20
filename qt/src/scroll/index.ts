import { f } from "shweet";
import { MP } from "../marginPadding";
import { PROXY } from "../proxy";

export class SCROLL extends PROXY<SCROLL, {}> {
  get MARGIN() {
    return new MP({
      values: this._value,
      data: { mp: "scrollMargin", side: "" },
    });
  }
  get PADDING() {
    return new MP({
      values: this._value,
      data: { mp: "scrollPadding", side: "" },
    });
  }
  get SNAP() {
    return new SNAP({
      values: this._value,
      data: { mp: "scrollPadding", side: "" },
    });
  }
  get auto() {
    this._value = {
      scrollBehavior: "auto",
    };
    return this;
  }
  get smooth() {
    this._value = {
      scrollBehavior: "smooth",
    };
    return this;
  }
  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    this._value = {
      scrollBehavior: f.var(val, optional),
    };
    return this;
  }
}

class SNAP extends PROXY<SNAP, {}> {
  //

  get normalStop() {
    this._value = {
      scrollSnapStop: "normal",
    };
    return this;
  }
  get alwaysStop() {
    this._value = {
      scrollSnapStop: "always",
    };
    return this;
  }

  get noType() {
    this._value = {
      scrollSnapType: "none",
    };
    return this;
  }
  get x() {
    this._value = {
      scrollSnapType: "x",
    };
    return this;
  }
  get y() {
    this._value = {
      scrollSnapType: "y",
    };
    return this;
  }
  get block() {
    this._value = {
      scrollSnapType: "block",
    };
    return this;
  }
  get inline() {
    this._value = {
      scrollSnapType: "inline",
    };
    return this;
  }
  get both() {
    this._value = {
      scrollSnapType: "both",
    };
    return this;
  }
  get mandatory() {
    this._value = {
      scrollSnapType: "mandatory",
    };
    return this;
  }
  get proximity() {
    this._value = {
      scrollSnapType: "proximity",
    };
    return this;
  }

  get none() {
    this._value = {
      scrollSnapAlign: "none",
    };
    return this;
  }
  get start() {
    this._value = {
      scrollSnapAlign: "start",
    };
    return this;
  }
  get end() {
    this._value = {
      scrollSnapAlign: "end",
    };
    return this;
  }
  get center() {
    this._value = {
      scrollSnapAlign: "center",
    };
    return this;
  }
  align(align: any) {
    this._value = {
      scrollSnapAlign: align,
    };
    return this;
  }
  type(stop: any) {
    this._value = {
      scrollSnapAlign: stop,
    };
    return this;
  }
}
