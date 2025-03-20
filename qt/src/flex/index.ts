import { isNum, PROXY } from "../proxy";

class SCB<T extends PROXY<T>> {
  constructor(
    protected TH: T,
    protected prop: string,
    protected startEnd: [string, string] = ["flex-start", "flex-end"],
    protected _none: string = "flex-start",
    protected _auto: string = "auto",
  ) {}
  get start(): T {
    this.TH._value = {
      [this.prop]: this.startEnd[0],
    };
    return this.TH;
  }
  get center(): T {
    this.TH._value = {
      [this.prop]: "center",
    };
    return this.TH;
  }
  get end(): T {
    this.TH._value = {
      [this.prop]: this.startEnd[1],
    };
    return this.TH;
  }
  get none(): T {
    this.TH._value = {
      [this.prop]: this._none,
    };
    return this.TH;
  }
}

class SPACE<T extends PROXY<T>> extends SCB<T> {
  get around(): T {
    this.TH._value = {
      [this.prop]: "space-around",
    };
    return this.TH;
  }
  get between(): T {
    this.TH._value = {
      [this.prop]: "space-between",
    };
    return this.TH;
  }
  get even(): T {
    this.TH._value = {
      [this.prop]: "space-evenly",
    };
    return this.TH;
  }
}

class STRECHED<T extends PROXY<T>> extends SCB<T> {
  get stretch(): T {
    this.TH._value = {
      [this.prop]: "stretch",
    };
    return this.TH;
  }
  get baseline(): T {
    this.TH._value = {
      [this.prop]: "baseline",
    };
    return this.TH;
  }
  get auto(): T {
    this.TH._value = {
      [this.prop]: this._auto,
    };
    return this.TH;
  }
}

//
export const startEnd = <T extends PROXY<T>>(
  TH: T,
  value: string,
  prop = "justifyContent",
  sce: [string, string] = ["flex-start", "flex-end"],
) => {
  //
  const { direction, reversed } = TH["data"];

  const isRow = direction === "row";

  if (isRow) {
    TH._value = {
      alignItems: value,
    };
  } else {
    if (reversed) {
      sce.reverse();
    }
    TH._value = {
      alignItems: value,
    };
  }

  if (isRow && reversed) {
    sce.reverse();
  }

  return new SPACE(TH, prop, sce, sce[0]);
};

const toGAP = (TH: GAP, value: number, gap: string = "gap") => {
  TH._value = {
    [gap]: value,
  };
  return TH as Flex;
};

export class _GAPN extends PROXY<_GAPN> {
  protected prop: string = "gap";
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
}

class GAP extends PROXY<Flex, { direction: string; reversed: boolean }> {
  constructor({
    prefix = "",
    data = {
      direction: "row",
      reversed: false,
    },
    values = {},
  } = {}) {
    super({ prefix, data, values });
  }
  gap(gap: number) {
    return toGAP(this, gap);
  }
  get gap0() {
    return toGAP(this, 0);
  }
  get gap1() {
    return toGAP(this, 1);
  }
  get gap2() {
    return toGAP(this, 2);
  }
  get gap3() {
    return toGAP(this, 3);
  }
  get gap4() {
    return toGAP(this, 4);
  }
  get gap5() {
    return toGAP(this, 5);
  }
  rowGap(gap: number) {
    return toGAP(this, gap, "rowGap");
  }
  colGap(gap: number) {
    return toGAP(this, gap, "columnGap");
  }
  get GAP() {
    return new _GAPN({
      values: this._value,
    });
  }
}

class ALIGN extends PROXY<ALIGN, {}> {
  protected prop: string = "alignItems";
  get baseline() {
    this._value = {
      [this.prop]: "baseline",
    };
    return this;
  }
  get stretch() {
    this._value = {
      [this.prop]: "stretch",
    };
    return this;
  }
  get center() {
    this._value = {
      [this.prop]: "center",
    };
    return this;
  }
  get start() {
    this._value = {
      [this.prop]: "flex-start",
    };
    return this;
  }
  get end() {
    this._value = {
      [this.prop]: "flex-end",
    };
    return this;
  }
}

export class JUST extends PROXY<JUST, {}> {
  protected prop: string = "justifyContent";
  get start() {
    this._value = {
      [this.prop]: "flex-start",
    };
    return this;
  }
  get center() {
    this._value = {
      [this.prop]: "center",
    };
    return this;
  }
  get end() {
    this._value = {
      [this.prop]: "flex-end",
    };
    return this;
  }
  get none() {
    this._value = {
      [this.prop]: "none",
    };
    return this;
  }
  get around() {
    this._value = {
      [this.prop]: "space-around",
    };
    return this;
  }
  get between() {
    this._value = {
      [this.prop]: "space-between",
    };
    return this;
  }
  get even() {
    this._value = {
      [this.prop]: "space-evenly",
    };
    return this;
  }
}

export class Flex extends GAP {
  constructor({
    prefix = "",
    data = {
      direction: "row",
      reversed: false,
    },
    values = {},
  } = {}) {
    super({ prefix, data, values });
    if (!prefix) {
      this._value = {
        display: "flex",
      };
    }
  }
  get ALIGN() {
    return new ALIGN({
      values: this._value,
    });
  }
  get JUSTIFY() {
    return new JUST({
      values: this._value,
    });
  }
  get BASELINE() {
    return startEnd<Flex>(this, "baseline");
  }
  get STRETCH() {
    return startEnd<Flex>(this, "stretch");
  }
  get CENTER() {
    return startEnd<Flex>(this, "center");
  }
  get START() {
    return startEnd<Flex>(this, "flex-start");
  }
  get END() {
    return startEnd<Flex>(this, "flex-end");
  }
  //
  get column() {
    this.data.direction = "column";
    this.data.reversed = false;
    this._value = {
      flexDirection: "column",
    };
    return this;
  }
  get columnReverse() {
    this.data.direction = "column";
    this.data.reversed = true;
    this._value = {
      flexDirection: "column-reverse",
    };
    return this;
  }
  get row() {
    this.data.direction = "row";
    this.data.reversed = false;
    this._value = {
      flexDirection: "row",
    };
    return this;
  }

  get rowReverse() {
    this.data.direction = "row";
    this.data.reversed = true;
    this._value = {
      flexDirection: "row-reverse",
    };
    return this;
  }

  //
  get wrap() {
    this._value = {
      flexWrap: "wrap",
    };
    return this;
  }
  get noWrap() {
    this._value = {
      flexWrap: "nowrap",
    };
    return this;
  }
  get wrapReverse() {
    this._value = {
      flexWrap: "wrap-reverse",
    };
    return this;
  }
  //
  get WRAPPED() {
    return new SPACE(
      //
      this as Flex,
      "alignContent",
      ["flex-start", "flex-end"],
      "stretch",
    );
  }
  get SELF() {
    return new STRECHED(
      //
      this as Flex,
      "alignSelf",
      ["flex-start", "flex-end"],
      "auto",
    );
  }
  //
  shrink(value: number = 1) {
    this._value = {
      flexShrink: value,
    };
    return this;
  }
  grow(value: number = 1) {
    this._value = {
      flexGrow: value,
    };
    return this;
  }
  basis(value: number = 1) {
    this._value = {
      flexBasis: value,
    };
    return this;
  }
  flex(grow: number, shrink: number, basis: string) {
    this._value = {
      flex: [String(grow), String(shrink), basis.toString()],
    };
    return this;
  }
  //
}
