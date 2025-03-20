import { Medyas, f } from "shweet";

export const isNum = (val: any) => {
  let nv = Number(val);
  if (nv) {
    return nv;
  }
  return val;
};

export class PROXY<T extends Medyas<T>, Q = Record<string, any>> extends Medyas<
  T,
  Q
> {
  protected prop: string = "";
  protected propFN?: (p: string) => string;
  protected valFN?: (val: any) => any;
  protected string: boolean = true;
  protected replacer: string = "-";

  constructor({ prefix = "", data = {}, values = {} } = {}) {
    super({ prefix, data, values });

    return new Proxy(this, {
      get(target: PROXY<T, Q>, p: string, receiver: any) {
        if (p in target && typeof (target as any)[p] !== "undefined") {
          return (target as any)[p];
        } else if (target.prop || target.propFN) {
          let prop = target.prop;

          if (target.propFN) {
            prop = target.propFN(p);
          }
          //
          let val = p;
          if (target.string) {
            val = p.replaceAll("_", target.replacer);
          }

          if (target.valFN) {
            val = target.valFN(val);
          }
          target._value = {
            [prop]: val,
          };
        }

        return receiver;
      },
      set(target: PROXY<T, Q>, p: string, newValue: any) {
        if (p in target && typeof (target as any)[p] !== "function") {
          (target as any)[p] = newValue;

          return true;
        }
        return false;
      },
    });
  }

  /**
   * variable
   * @param val string
   */
  var(val: string, optional?: any) {
    if (this.prop) {
      this._value = {
        [this.prop]: f.var(val, optional),
      };
    }
    return this;
  }
}

class TEMPLATE extends PROXY<TEMPLATE, {}> {
  protected prop: string = "";
  //
  [k: number]: this;
  declare 1: this;
}
