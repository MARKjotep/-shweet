import { $ } from "../dist";
import { med, media, CSSinR } from "shweet";
import { describe, test, expect } from "bun:test";

const Entries = (fn: (k: any, v: any) => void, v: Record<any, any>) => {
  return Object.entries(v).forEach((kv) => {
    fn(...kv);
  });
};

describe("CSS T", () => {
  //
});

describe("CSS MISC", () => {
  //
  test("visible & hidden", () => {
    const I = $.visible.MD.hidden;
    const V = I._value;
    const P = "visibility";
    const MD = V[P];

    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries(
      (k, v) => {
        //
        expect(MD[k]).toEqual(v);
      },
      {
        xs: "visible",
        md: "hidden",
      },
    );
  });

  test("user-select", () => {
    const I = $.select.LG.none;
    const V = I._value;
    const P = "userSelect";
    const MD = V[P];

    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries(
      (k, v) => {
        //
        expect(MD[k]).toEqual(v);
      },
      {
        xs: "auto",
        lg: "none",
      },
    );
  });
});

describe("TRANSITION", () => {
  //

  test("delay", () => {
    const I = $.TRANSITION.DELAY[1].XXL[2.5];
    const V = I._value;
    const P = "transitionDelay";
    const MD = V[P];

    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries(
      (k, v) => {
        //
        expect(MD[k]).toEqual(v);
      },
      {
        xs: "1s",
        xxl: "2.5s",
      },
    );
  });
  test("duration", () => {
    const I = $.TRANSITION.DURATION[1].XXL[2.5];
    const V = I._value;
    const P = "transitionDuration";
    const MD = V[P];

    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries(
      (k, v) => {
        //
        expect(MD[k]).toEqual(v);
      },
      {
        xs: "1s",
        xxl: "2.5s",
      },
    );
  });

  test("property", () => {
    const I = $.TRANSITION.PROPERTY.background.LG.none;
    const V = I._value;
    const P = "transitionProperty";
    const MD = V[P];

    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries(
      (k, v) => {
        //

        expect(MD[k]).toEqual(v);
      },
      {
        xs: ["background"],
        lg: ["none"],
      },
    );
  });
  test("timing", () => {
    const I = $.TRANSITION.TIMING.ease.LG.ease_out;
    const V = I._value;
    const P = "transitionTimingFunction";
    const PV = {
      xs: "ease",
      lg: "ease-out",
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });
});

describe("ANIMATION", () => {
  //

  test("delay", () => {
    const I = $.ANIMATION.DELAY[1].XXL[2.5];
    const V = I._value;
    const P = "animationDelay";
    const MD = V[P];

    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries(
      (k, v) => {
        //
        expect(MD[k]).toEqual(v);
      },
      {
        xs: "1s",
        xxl: "2.5s",
      },
    );
  });
  test("duration", () => {
    const I = $.ANIMATION.DURATION[1].XXL[2.5];
    const V = I._value;
    const P = "animationDuration";
    const MD = V[P];

    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries(
      (k, v) => {
        //
        expect(MD[k]).toEqual(v);
      },
      {
        xs: "1s",
        xxl: "2.5s",
      },
    );
  });

  test("timing", () => {
    const I = $.ANIMATION.TIMING.ease.LG.ease_out;
    const V = I._value;
    const P = "animationTimingFunction";
    const PV = {
      xs: "ease",
      lg: "ease-out",
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });

  test("direction", () => {
    const I = $.ANIMATION.DIRECTION.alternate.LG.normal;
    const V = I._value;
    const P = "animationDirection";
    const PV = {
      xs: "alternate",
      lg: "normal",
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });

  test("fill", () => {
    const I = $.ANIMATION.FILL.both.LG.backwards;
    const V = I._value;
    const P = "animationFillMode";
    const PV = {
      xs: "both",
      lg: "backwards",
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });

  test("iteration", () => {
    const I = $.ANIMATION.ITERATION[10].LG.infinite;
    const V = I._value;
    const P = "animationIterationCount";
    const PV = {
      xs: "10",
      lg: "infinite",
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });

  test("iteration", () => {
    const I = $.ANIMATION.name("hello").LG.name("hello");
    const V = I._value;

    const P = "animationName";
    const PV = {
      xs: "hello",
      lg: "hello",
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });
});
//

describe("BACKGROUND", () => {
  //
  test("attachment", () => {
    const I = $.BG.ATTACH.fixed.LG.local;
    const V = I._value;

    const P = "backgroundAttachment";
    const PV = {
      xs: "fixed",
      lg: "local",
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });

  test("blend", () => {
    const I = $.BG.BLEND.normal.LG.multiply;
    const V = I._value;

    const P = "backgroundBlendMode";
    const PV = {
      xs: "normal",
      lg: "multiply",
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });
});

describe("RADIUS", () => {
  //
  test("radius", () => {
    const I = $.RADIUS[0].LG[10];
    const V = I._value;
    const P = "borderRadius";
    const PV = {
      xs: "0",
      lg: 10,
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });

  test("topLeft", () => {
    const I = $.RADIUS.tL[2].LG.tL[3];
    const V = I._value;
    const P = "borderTopLeftRadius";
    const PV = {
      xs: 2,
      lg: 3,
    };
    const MD = V[P];
    expect(V).toContainKey(P);
    expect(MD).toBeInstanceOf(media);

    Entries((k, v) => {
      //
      expect(MD[k]).toEqual(v);
    }, PV);
  });
});

const II: CSSinR = {};
