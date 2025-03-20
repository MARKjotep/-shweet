import { isStr, reCamel } from "../@";
import { isNum, PROXY } from "../proxy";
import { Value } from "shweet";

class JUST<T extends PROXY<T>> extends PROXY<
  T,
  { aljust: string; _auto: string }
> {
  protected prop: string = "";
  constructor({
    prefix = "",
    data = {
      aljust: "justifyContent",
      _auto: "auto",
    },
    values = {},
  } = {}) {
    super({ prefix, data, values });
    this.prop = this.data.aljust;
  }
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
}

class SPACE<T extends PROXY<T>> extends JUST<T> {
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
  get SELF() {
    const nm = reCamel(this.data.aljust).split("-")[0];

    return new STRECHED<T>({
      values: this._value,
      data: {
        aljust: `${nm}Self`,
        _auto: "auto",
      },
    });
    //
  }
}

class STRECHED<T extends PROXY<T>> extends JUST<T> {
  get stretch() {
    this._value = {
      [this.prop]: "stretch",
    };
    return this;
  }
  get baseline() {
    this._value = {
      [this.prop]: "baseline",
    };
    return this;
  }
  get auto() {
    this._value = {
      [this.prop]: this.data._auto,
    };
    return this;
  }
}

export class TEMP extends PROXY<TEMP> {
  protected prop: string = "gridTemplate";

  get none() {
    this._value = {
      [this.prop]: "none",
    };
    return this;
  }
  get noArea() {
    this._value = {
      gridTemplateAreas: "none",
    };
    return this;
  }
  get noColumns() {
    this._value = {
      gridTemplateColumns: "none",
    };
    return this;
  }
  get noRows() {
    this._value = {
      gridTemplateRows: "none",
    };
    return this;
  }
  areas(...area: any[][]) {
    //
    this._value = {
      gridTemplateAreas: Value(
        area.map((mp) => Value(mp.map((mpp) => (mpp ? mpp : ".")))),
        {
          quote: true,
        },
      ),
    };
    return this;
  }
  col(...cols: any[]) {
    //
    this._value = {
      gridTemplateColumns: cols,
    };
    return this;
  }
  row(...cols: any[]) {
    //
    this._value = {
      gridTemplateRows: cols,
    };
    return this;
  }
}

export class AUTO extends PROXY<AUTO> {
  protected prop: string = "gridTemplate";

  col(...cols: any[]) {
    //
    this._value = {
      gridAutoColumns: cols,
    };
    return this;
  }
  row(...cols: any[]) {
    //
    this._value = {
      gridAutoRows: cols,
    };
    return this;
  }
  get rowFlow() {
    this._value = {
      gridAutoFlow: "row",
    };
    return this;
  }
  get colFlow() {
    this._value = {
      gridAutoFlow: "column",
    };
    return this;
  }
  get dense() {
    this._value = {
      gridAutoFlow: "dense",
    };
    return this;
  }
  get rowDense() {
    this._value = {
      gridAutoFlow: "row dense",
    };
    return this;
  }
  get colDense() {
    this._value = {
      gridAutoFlow: "column dense",
    };
    return this;
  }
}

interface areacfg {
  rowS: any;
  rowE: any;
  colS: any;
  colE: any;
}

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

  // return new SPACE(TH, prop, sce, sce[0]);
};

const toGAP = (TH: GAP, value: number, gap: string = "gap") => {
  TH._value = {
    [gap]: value,
  };
  return TH as GRID;
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

export class GAP extends PROXY<GRID> {
  constructor({ prefix = "", data = {}, values = {} } = {}) {
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

export class GRID extends GAP {
  constructor({ prefix = "", data = {}, values = {} } = {}) {
    super({ prefix, data, values });
    if (!prefix) {
      this._value = {
        display: "grid",
      };
    }
  }
  get ALIGN() {
    return new SPACE<GRID>({
      values: this._value,
      data: {
        aljust: "alignContent",
        _auto: "flex-start",
      },
    });
  }
  get JUSTIFY() {
    return new SPACE<GRID>({
      values: this._value,
    });
  }
  get TEMPLATE() {
    return new TEMP({
      values: this._value,
    });
  }
  get AUTO() {
    return new AUTO({
      values: this._value,
    });
  }
  get SELF() {
    return new STRECHED<GRID>({
      values: this._value,
      data: {
        aljust: "placeSelf",
        _auto: "auto",
      },
    });
    //
  }
  grid(val: any) {
    this._value = {
      grid: val,
    };
    return this;
  }
  template(val1: any, val2?: any): this {
    //
    const v1 = Value(val1, { rem: true });
    const v2 = Value(val2, { rem: true });

    this._value = {
      gridArea: v2 ? v1 + " / " + v2 : v1,
    };
    return this;
  }
  area(area: string | areacfg): this {
    //
    let val: string = "";
    if (isStr(area)) {
      val = area;
    } else {
      const { rowS, rowE, colS, colE } = area;
      val = Value([rowS, colS, rowE, colE], {
        delimeter: " / ",
      });
    }
    this._value = {
      gridArea: val,
    };
    return this;
  }
  col(start: any, end: any) {
    this._value = {
      gridColumn: Value([start, "/", end]),
    };
    return this;
  }
  colStart(start: any) {
    this._value = {
      gridColumnStart: start,
    };
    return this;
  }
  colEnd(end: any) {
    this._value = {
      gridColumnStart: end,
    };
    return this;
  }
  row(start: any, end: any) {
    this._value = {
      gridRow: Value([start, "/", end]),
    };
    return this;
  }
  rowStart(start: any) {
    this._value = {
      gridRow: start,
    };
    return this;
  }
  rowEnd(end: any) {
    this._value = {
      gridRow: end,
    };
    return this;
  }
  get autoColumn() {
    this._value = {
      gridColumn: "auto / auto",
    };
    return this;
  }
}
