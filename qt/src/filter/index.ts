import { $$, oItems } from "../@";
import { getShadow, shadowCFG } from "../box";
import { PROXY } from "../proxy";
import { f } from "shweet";

interface filters {
  dropShadow?: shadowCFG;
  url?: string;
  blur?: number;
  hueRotate?: number;
  brightness?: number;
  contrast?: number;
  grayscale?: number;
  invert?: number;
  opacity?: number;
  saturate?: number;
  sepia?: number;
}

const fstr = ["dropShadow", "url"];

export class FILTER extends PROXY<FILTER, {}> {
  protected filters: Set<string> = new Set();
  protected prop: string = "filter";
  //
  get none() {
    this._value = {
      [this.prop]: "none",
    };
    return this;
  }
  filter(filter: filters = {}) {
    oItems(filter).forEach(([k, v]) => {
      //
      if (k === "dropShadow") {
        //
        const vv = getShadow(v);
        this.filters.add(f.dropShadow(vv));
      } else if (k === "url") {
        this.filters.add(f.url(v));
      } else if (k === "blur") {
        this.filters.add(f.blur(`${v}px`));
      } else if (k === "hueRotate") {
        this.filters.add(f.hueRotate(v));
      } else {
        const fnc = f[k as keyof f] as (v: any) => string;
        if (fnc) {
          this.filters.add(fnc(`${v}%`));
        }
      }
    });

    this._value = {
      [this.prop]: [...this.filters],
    };
    return this;
  }
}

export class BACKFILTER extends PROXY<FILTER, {}> {
  protected filters: Set<string> = new Set();
  //
  get none() {
    this._value = {
      backdropFilter: "none",
      webkitBackdropFilter: "none",
    };
    return this;
  }
  filter(filter: filters = {}) {
    oItems(filter).forEach(([k, v]) => {
      //
      if (k === "dropShadow") {
        //
        const vv = getShadow(v);
        this.filters.add(f.dropShadow(vv));
      } else if (k === "url") {
        this.filters.add(f.url(v));
      } else if (k === "blur") {
        this.filters.add(f.blur(`${v}px`));
      } else if (k === "hueRotate") {
        this.filters.add(f.hueRotate(v));
      } else {
        const fnc = f[k as keyof f] as (v: any) => string;
        if (fnc) {
          this.filters.add(fnc(`${v}%`));
        }
      }
    });

    this._value = {
      backdropFilter: [...this.filters],
      webkitBackdropFilter: [...this.filters],
    };
    return this;
  }
}
