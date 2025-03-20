import { f } from "shweet";
import { PROXY } from "../proxy";

const props: Record<string, string[]> = {
  none: ["none"],
  all: ["all"],
  colors: ["background-color", "border-color", "color", "fill", "stroke"],
  font: ["font", "color"],
  background: ["background"],
  opacity: ["opacity"],
  shadow: ["box-shadow"],
  transform: ["transform"],
  dimension: ["height", "width", "margin", "padding"],
};

export class PROP extends PROXY<PROP, {}> {
  protected prop: string = "transitionProperty";
  protected properties: Set<string> = new Set();
  //
  declare none: this;
  declare all: this;
  declare colors: this;
  declare font: this;
  declare background: this;
  declare opacity: this;
  declare shadow: this;
  declare transform: this;

  protected valFN = (val: string) => {
    const vals = props[val];
    //
    vals.forEach((v) => {
      this.properties.add(v);
    });
    return [...this.properties];
  };
  property(...val: any[]) {
    val.forEach((v) => {
      this.properties.add(v);
    });
    this._value = {
      transitionProperty: [...this.properties],
    };
    return this;
  }
}

//

export class TIMING extends PROXY<TIMING, { prop: string }> {
  declare ease: this;
  declare ease_in: this;
  declare ease_out: this;
  declare ease_in_out: this;
  declare linear: this;
  declare step_start: this;
  declare step_end: this;
  //
  protected propFN = () => {
    return this.data.prop;
  };
  cubicBezier(x1: any, y1: any, x2: any, y2: any) {
    this._value = {
      [this.propFN()]: f.cubicBezier(x1, y1, x2, y2),
    };
    return this;
  }
  steps(
    n: number,
    position:
      | "start"
      | "end"
      | "no"
      | "jump-start"
      | "jump-end"
      | "jump-none"
      | "jump-both",
  ) {
    this._value = {
      [this.propFN()]: f.steps(n, position),
    };

    return this;
  }
}

export class DELAY_DUR extends PROXY<DELAY_DUR, { prop: string }> {
  [k: number]: this;
  declare 0.25: this;
  declare 0.5: this;
  declare 0.75: this;
  declare 1: this;
  declare 1.5: this;
  declare 2: this;
  declare 2.5: this;
  declare 3: this;
  declare 3.5: this;
  declare 4: this;
  declare 4.5: this;
  declare 5: this;

  protected valFN = (val: string) => {
    return `${val}s`;
  };
  protected propFN = () => {
    return this.data.prop;
  };
}

/*
-------------------------

-------------------------
*/

/*
-------------------------
CLASS ALL
-------------------------
*/

export class TRANS_ANIM {
  constructor(private isAnim: boolean = false) {}
  get TIMING() {
    return new TIMING({
      data: {
        prop: this.isAnim
          ? "animationTimingFunction"
          : "transitionTimingFunction",
      },
    });
  }
  get DELAY() {
    return new DELAY_DUR({
      data: { prop: this.isAnim ? "animationDelay" : "transitionDelay" },
    });
  }
  get DURATION() {
    return new DELAY_DUR({
      data: { prop: this.isAnim ? "animationDuration" : "transitionDuration" },
    });
  }
}

export class TRANSITION extends TRANS_ANIM {
  get PROPERTY() {
    return new PROP();
  }
}
