import { media, Medyas, f, med } from "shweet";
import { isNum, PROXY } from "../proxy";

export class CURSOR extends PROXY<CURSOR, {}> {
  protected prop: string = "cursor";
  //
  declare alias: this;
  declare all_scroll: this;
  declare auto: this;
  declare cell: this;
  declare col_resize: this;
  declare context_menu: this;
  declare copy: this;
  declare crosshair: this;
  declare default: this;
  declare e_resize: this;
  declare ew_resize: this;
  declare grab: this;
  declare grabbing: this;
  declare help: this;
  declare move: this;
  declare n_resize: this;
  declare ne_resize: this;
  declare nesw_resize: this;
  declare ns_resize: this;
  declare nw_resize: this;
  declare nwse_resize: this;
  declare no_drop: this;
  declare none: this;
  declare not_allowed: this;
  declare pointer: this;
  declare progress: this;
  declare row_resize: this;
  declare s_resize: this;
  declare se_resize: this;
  declare sw_resize: this;
  declare text: this;
  declare vertical_text: this;
  declare w_resize: this;
  declare wait: this;
  declare zoom_in: this;
  declare zoom_out: this;
}

export class DISPLAY extends PROXY<DISPLAY> {
  protected prop: string = "display";
  //
  declare inline: this;
  declare block: this;
  declare contents: this;
  declare flex: this;
  declare grid: this;
  declare inline_block: this;
  declare inline_flex: this;
  declare inline_grid: this;
  declare inline_table: this;
  declare list_item: this;
  declare run_in: this;
  declare table: this;
  declare table_caption: this;
  declare table_column_group: this;
  declare table_header_group: this;
  declare table_footer_group: this;
  declare table_row_group: this;
  declare table_cell: this;
  declare table_column: this;
  declare table_row: this;
  declare none: this;
}

export class POSITION extends PROXY<POSITION> {
  protected prop: string = "position";
  //
  declare static: this;
  declare absolute: this;
  declare fixed: this;
  declare relative: this;
  declare sticky: this;
}

export class OVERFLOW extends Medyas<OVERFLOW, { xy: string }> {
  xy: string = "";
  constructor({
    prefix = "",
    data = {
      xy: "",
    },
    values = {},
  } = {}) {
    super({ prefix, data, values });
    //
    this.xy = ["overflow", data.xy].join("");
  }
  get visible() {
    this._value = {
      [this.xy]: "visible",
    };
    return this;
  }
  get hidden() {
    this._value = {
      [this.xy]: "hidden",
    };
    return this;
  }
  get scroll() {
    this._value = {
      [this.xy]: "scroll",
    };
    return this;
  }
  get auto() {
    this._value = {
      [this.xy]: "auto",
    };
    return this;
  }
  get X() {
    return new OVERFLOW({
      prefix: this._prefix,
      values: this["_values"],
      data: { xy: "X" },
    });
  }
  get Y() {
    return new OVERFLOW({
      prefix: this._prefix,
      values: this["_values"],
      data: { xy: "Y" },
    });
  }
}

export class OPACITY extends PROXY<OPACITY> {
  protected prop: string = "opacity";
  //
  [k: number]: this;
  declare 1: this;
  declare 0.9: this;
  declare 0.8: this;
  declare 0.7: this;
  declare 0.6: this;
  declare 0.5: this;
  declare 0.4: this;
  declare 0.3: this;
  declare 0.2: this;
  declare 0.1: this;
  declare 0: this;
  protected valFN = (p: any) => {
    const num = Number(p);
    if (num && num > 1) {
      return `${p}%`;
    }
    return p;
  };
  /**
   * Percent
   * @param val number
   */
  pr(val: number) {
    this._value = {
      opacity: `${val}%`,
    };
    return this;
  }
}

export class ZINDEX extends PROXY<ZINDEX> {
  protected prop: string = "zIndex";
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
}

export class WHITESPACE extends PROXY<WHITESPACE> {
  protected prop: string = "whiteSpace";
  //
  declare normal: this;
  declare nowrap: this;
  declare pre: this;
  declare pre_line: this;
  declare pre_wrap: this;
}

export class VISIBLE extends PROXY<VISIBLE> {
  //
  get visible() {
    //
    this._value = {
      visibility: "visible",
    };
    return this;
  }
  get hidden() {
    //
    this._value = {
      visibility: "hidden",
    };
    return this;
  }
  get collapse() {
    //
    this._value = {
      visibility: "collapse",
    };
    return this;
  }
}

export class VERTICAL extends PROXY<VERTICAL> {
  //
  protected prop: string = "verticalAlign";
  declare baseline: this;
  declare sub: this;
  declare super: this;
  declare top: this;
  declare text_top: this;
  declare middle: this;
  declare bottom: this;
  declare text_bottom: this;

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

  /**
   * Pixel
   * @param val number
   */
  px(val: number) {
    this._value = {
      verticalAlign: `${val}px`,
    };
    return this;
  }
  /**
   * Percent
   * @param val number
   */
  pr(val: number) {
    this._value = {
      verticalAlign: `${val}%`,
    };
    return this;
  }
}

export class SELECT extends PROXY<SELECT> {
  //
  get select() {
    //
    this._value = {
      userSelect: "auto",
    };
    return this;
  }
  get none() {
    //
    this._value = {
      userSelect: "none",
    };
    return this;
  }
}

export class POINTER extends PROXY<POINTER> {
  //
  get auto() {
    //
    this._value = {
      pointerEvents: "auto",
    };
    return this;
  }
  get none() {
    //
    this._value = {
      pointerEvents: "none",
    };
    return this;
  }
}

export class LINEHEIGHT extends PROXY<LINEHEIGHT> {
  protected prop: string = "lineHeight";
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

export class OVERSCROLL extends PROXY<OVERSCROLL, {}> {
  //
  get auto() {
    this._value = {
      overscrollBehavior: "auto",
    };
    return this;
  }
  get contain() {
    this._value = {
      overscrollBehavior: "contain",
    };
    return this;
  }
  get none() {
    this._value = {
      overscrollBehavior: "none",
    };
    return this;
  }
  get XAuto() {
    this._value = {
      overscrollBehaviorX: "auto",
    };
    return this;
  }
  get XContain() {
    this._value = {
      overscrollBehaviorX: "contain",
    };
    return this;
  }
  get XNone() {
    this._value = {
      overscrollBehaviorX: "none",
    };
    return this;
  }
  get YAuto() {
    this._value = {
      overscrollBehaviorY: "auto",
    };
    return this;
  }
  get YContain() {
    this._value = {
      overscrollBehaviorY: "contain",
    };
    return this;
  }
  get YNone() {
    this._value = {
      overscrollBehaviorY: "none",
    };
    return this;
  }
  get INLINEAuto() {
    this._value = {
      overscrollBehaviorInline: "auto",
    };
    return this;
  }
  get INLINEContain() {
    this._value = {
      overscrollBehaviorInline: "contain",
    };
    return this;
  }
  get INLINENone() {
    this._value = {
      overscrollBehaviorInline: "none",
    };
    return this;
  }
  get BLOCKAuto() {
    this._value = {
      overscrollBehaviorBlock: "auto",
    };
    return this;
  }
  get BLOCKContain() {
    this._value = {
      overscrollBehaviorBlock: "contain",
    };
    return this;
  }
  get BLOCKNone() {
    this._value = {
      overscrollBehaviorBlock: "none",
    };
    return this;
  }
  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    this._value = {
      overscrollBehavior: f.var(val, optional),
    };
    return this;
  }
}
