import { log, $ } from "../src";
import { f, med, media } from "shweet";
import { PROXY } from "../src/proxy";

// const basic = [
//   "length",
//   "name",
//   "prototype",
//   "toString",
//   "apply",
//   "call",
//   "bind",
//   "arguments",
//   "caller",
//   "constructor",
//   "toLocaleString",
//   "valueOf",
//   "hasOwnProperty",
//   "propertyIsEnumerable",
//   "isPrototypeOf",
//   "__defineGetter__",
//   "__defineSetter__",
//   "__lookupGetter__",
//   "__lookupSetter__",
//   "__proto__",
// ];
// export function getAllProperties(obj: any, excl: string[] = []) {
//   const BB = [...basic, ...excl];
//   let props = new Set();
//   do {
//     Object.getOwnPropertyNames(obj).forEach((prop) => {
//       if (BB.includes(prop)) return;
//       props.add(prop);
//     });
//   } while ((obj = Object.getPrototypeOf(obj)));

//   return [...props];
// }

// const excl: string[] = ["transform", "VARS", "optVAR", "VAR", "animation"];

// const PROPS = getAllProperties($, excl);

// PROPS.forEach((pr) => {
//   const PR: PROXY<any> = $[pr as keyof $];

//   if (PR instanceof PROXY) {
//     const VL = PR.var("hello")._value;
//     if (!Object.keys(VL).length) {
//       $$.p = [pr, VL];
//     }
//     return;
//   }
// });

log.i = $.TRANSITION[0.5].property("all");
