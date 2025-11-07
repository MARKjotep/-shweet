import { media, Medyas, KFCSS, f, CSSinR } from "shweet";
import { TRANS_ANIM } from "../transitionAnim";
import { PROXY } from "../proxy";

class PRESET extends Medyas<PRESET, { kf: KFCSS }> {
  constructor({ prefix = "", data = { kf: {} }, values = {} }) {
    super({ prefix, data, values });
  }
  get bounce() {
    const name = "bounce";
    this._value = {
      animation: [name, "1s", "infinite"],
    };

    this.data.kf[name] = {
      "10%, 100%": {
        transform: f.translateY("0%"),
        animationTimingFunction: f.cubicBezier(0.8, 0, 1, 1),
      },
      "50%": {
        transform: f.translateY("20%"),
        animationTimingFunction: f.cubicBezier(0, 0, 0.2, 1),
      },
    };
    return this;
  }
  get ping() {
    const name = "ping";
    this._value = {
      animation: [name, "1s", f.cubicBezier(0, 0, 0.2, 1), "infinite"],
    };

    this.data.kf[name] = {
      "100%, 75%": {
        transform: f.scale(1.5),
        opacity: 0,
      },
    };
    return this;
  }
  get pulse() {
    const name = "pulse";
    this._value = {
      animation: [name, "1s", f.cubicBezier(0.4, 0, 0.6, 1), "infinite"],
    };

    this.data.kf[name] = {
      "50%": {
        opacity: 0.5,
      },
    };
    return this;
  }
  get spin() {
    const name = "spin";
    this._value = {
      animation: [name, "1s", "linear", "infinite"],
    };

    this.data.kf[name] = {
      "100%": {
        transform: f.rotate(360),
      },
    };
    return this;
  }
}

class DIRECTION extends PROXY<DIRECTION> {
  protected prop: string = "animationDirection";
  declare normal: this;
  declare reverse: this;
  declare alternate: this;
  declare alternate_reverse: this;
}

class FILL extends PROXY<FILL> {
  protected prop: string = "animationFillMode";
  declare none: this;
  declare forwards: this;
  declare backwards: this;
  declare both: this;
}

class ITER extends PROXY<ITER, {}> {
  protected prop: string = "animationIterationCount";
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

  get infinite() {
    this._value = {
      [this.prop]: "infinite",
    };
    return this;
  }
}

export class ANIM extends Medyas<ANIM, {}> {
  constructor({ prefix = "", data = {}, values = {} } = {}) {
    super({ prefix, data, values });
  }
  animation(val: CSSinR) {
    this._value = {
      animation: val,
    };

    return this;
  }
  name(name: string) {
    this._value = {
      animationName: name,
    };

    return this;
  }
  duration(n: number) {
    this._value = {
      animationDuration: n,
    };

    return this;
  }
  get paused() {
    this._value = {
      animationPlayState: "paused",
    };
    return this;
  }
  get running() {
    this._value = {
      animationPlayState: "running",
    };
    return this;
  }
}

export class ANIMATION extends TRANS_ANIM {
  SET(kf: KFCSS) {
    return new PRESET({ data: { kf: kf } });
  }
  name(name: string) {
    return new ANIM({
      values: this._values,
    }).name(name);
  }
  animation(val: CSSinR) {
    return new ANIM({
      values: this._values,
    }).animation(val);
  }
  get DIRECTION() {
    return new DIRECTION({
      values: this._values,
    });
  }
  get FILL() {
    return new FILL({
      values: this._values,
    });
  }
  get ITERATION() {
    return new ITER({
      values: this._values,
    });
  }
}
