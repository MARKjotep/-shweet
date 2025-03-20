import { Shweet, f, ps } from "shweet";
import { clr, autoColor, blue } from "../src";

const { c, save } = new Shweet({
  __filename,
  name: "i",
});

c.hello = {
  color: clr.saddleBrown,
  background: autoColor(["#fff", "#000"])(),
  backgroundColor: blue[500],
};

save({
  dir: __dirname,
});
