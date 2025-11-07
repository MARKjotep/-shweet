import { CSSinR, f } from "shweet";
import { Flex } from "./flex";
import { HWIDTH, WH } from "./widthHeight";
import { INLINEBLOCK, MP } from "./marginPadding";
import { RADIUS, BORDER } from "./border";
import {
  CURSOR,
  DISPLAY,
  OVERFLOW,
  POSITION,
  OPACITY,
  ZINDEX,
  WHITESPACE,
  VISIBLE,
  VERTICAL,
  SELECT,
  LINEHEIGHT,
  OVERSCROLL,
  POINTER,
} from "./appearance";
import { TRANSITION } from "./transitionAnim";
import { ANIMATION } from "./animation";
import { BACKGROUND } from "./background";
import { COLOR } from "./color";
import { TEXT } from "./text";
import { OUTLINE } from "./outline";
import { COLUMN } from "./column";
import { PERSPECTIVE, TRANSFORM, TRANSX } from "./transform";
import { WORD } from "./word";
import { LIST } from "./list";
import { FONTY } from "./font";
import { BOX, SHADOW } from "./box";
import { SCROLL } from "./scroll";
import { reCamel } from "./@";
import { GRID } from "./grid";
import { BACKFILTER, FILTER } from "./filter";

/*
-------------------------

-------------------------
*/

export { log } from "./@";

class VAR {
  [k: string]: any;
  VARS(vars: Record<string, any>) {
    return Object.entries(vars).reduce<Record<string, any>>((a, [k, v]) => {
      a[`--${reCamel(k)}`] = v;
      return a;
    }, {});
  }
  get VAR() {
    return new Proxy(this, {
      get(target, p: string, receiver) {
        const TP = target[p as any];
        if (TP) {
          return TP;
        }
        return f.var(p);
      },
    });
  }
  optVAR(option: any) {
    return new Proxy(this, {
      get(target, p: string, receiver) {
        const TP = target[p as any];
        if (TP) {
          return TP;
        }
        return f.var(p, option);
      },
    });
  }
}

class MISC {
  static VARS(vars: Record<string, any>) {
    return new VAR().VARS(vars);
  }
  static optVAR(option: any) {
    return new VAR().optVAR(option);
  }
  static get VAR() {
    return new VAR().VAR;
  }

  static get visible() {
    return new VISIBLE().visible;
  }
  static get hidden() {
    return new VISIBLE().hidden;
  }
  static get select() {
    return new SELECT().select;
  }
  static get noSelect() {
    return new SELECT().none;
  }
  static get pointer() {
    return new POINTER().auto;
  }
  static get noPointer() {
    return new POINTER().none;
  }
}

class _ANIMATION extends MISC {
  static get TRANSITION() {
    return new TRANSITION();
  }
  static get ANIMATION() {
    return new ANIMATION({ data: { isAnim: true } });
  }
  static animation(val: CSSinR) {
    return new ANIMATION({ data: { isAnim: true } }).animation(val);
  }
}

class APPEARANCE extends _ANIMATION {
  static get BG() {
    return new BACKGROUND();
  }
  static get COLOR() {
    return new COLOR({ data: { prop: "color" } });
  }
  static get TEXT() {
    return new TEXT();
  }
  static get FONT() {
    return new FONTY();
  }
  static get FILTER() {
    return new FILTER();
  }
  static get BACKDROP() {
    return new BACKFILTER();
  }
  static get VALIGN() {
    return new VERTICAL();
  }
  static get WORD() {
    return new WORD();
  }
  static get CURSOR() {
    return new CURSOR();
  }
  static get DISPLAY() {
    return new DISPLAY();
  }
  static get POSITION() {
    return new POSITION();
  }
  static get RADIUS() {
    return new RADIUS();
  }
  static get BORDER() {
    return new BORDER();
  }
  static get OUTLINE() {
    return new OUTLINE();
  }
  static get COLUMN() {
    return new COLUMN();
  }
  static get OVERFLOW() {
    return new OVERFLOW();
  }
  static get OPACITY() {
    return new OPACITY();
  }
  static get ZIndex() {
    return new ZINDEX();
  }
  static get LINE() {
    return new LINEHEIGHT();
  }
  static get WHITESPACE() {
    return new WHITESPACE();
  }
}

export class $ extends APPEARANCE {
  static get FLEX() {
    return new Flex();
  }
  static get GRID() {
    return new GRID();
  }

  static get HW() {
    return new HWIDTH();
  }
  static get WIDTH() {
    return new WH({ data: { wh: "width", first: "" } });
  }
  static get HEIGHT() {
    return new WH({ data: { wh: "height", first: "" } });
  }
  static get TOP() {
    return new WH({ data: { wh: "top", first: "" } });
  }
  static get LEFT() {
    return new WH({ data: { wh: "left", first: "" } });
  }
  static get RIGHT() {
    return new WH({ data: { wh: "right", first: "" } });
  }
  static get BOTTOM() {
    return new WH({ data: { wh: "bottom", first: "" } });
  }
  static get MAX() {
    return {
      get WIDTH() {
        return new WH({ data: { wh: "maxWidth", first: "w" } });
      },
      get HEIGHT() {
        return new WH({ data: { wh: "maxHeight", first: "h" } });
      },
      get BLOCK() {
        return new INLINEBLOCK({
          data: { bin: "maxBlockSize", side: "" },
        });
      },
      get INLINE() {
        return new INLINEBLOCK({
          data: { bin: "maxInlineSize", side: "" },
        });
      },
    };
  }
  static get MIN() {
    return {
      get WIDTH() {
        return new WH({ data: { wh: "minWidth", first: "w" } });
      },
      get HEIGHT() {
        return new WH({ data: { wh: "minHeight", first: "h" } });
      },
      get BLOCK() {
        return new INLINEBLOCK({
          data: { bin: "minBlockSize", side: "" },
        });
      },
      get INLINE() {
        return new INLINEBLOCK({
          data: { bin: "minInlineSize", side: "" },
        });
      },
    };
  }
  static get MARGIN() {
    return new MP({ data: { mp: "margin", side: "" } });
  }
  static get PADDING() {
    return new MP({ data: { mp: "padding", side: "" } });
  }
  static get TRANSFORM() {
    return new TRANSFORM();
  }

  static get PERSPECTIVE() {
    return new PERSPECTIVE();
  }
  static transform(tran: TRANSX) {
    return new TRANSFORM().transform(tran);
  }
  static get LIST() {
    return new LIST();
  }
  static get BOX() {
    return new BOX();
  }
  static get SHADOW() {
    return new SHADOW();
  }
  static get SCROLL() {
    return new SCROLL();
  }
  static get OVERSCROLL() {
    return new OVERSCROLL();
  }
}
