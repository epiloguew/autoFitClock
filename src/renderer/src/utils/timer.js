// import fs from "fs";
// import path from "path";
const { readFile } = require("fs");
const { join } = require("path");
export const appointTimer = () => {
  const path = join(
    __dirname,
    "../../src/renderer/src/assets/timer/appoint.txt"
  );
  readFile(path, (err, data) => {
    if (err) throw err;
    console.log(data.toString(), "ss");
  });
  return;
};
