import { $$, $ } from "../dist";
import { med, media, CSSProps } from "sweetss";
import { describe, test, expect } from "bun:test";

const Entries = (fn: (k: any, v: any) => void, v: Record<any, any>) => {
  return Object.entries(v).forEach((kv) => {
    fn(...kv);
  });
};

describe("var Properties", () => {
  //
});
