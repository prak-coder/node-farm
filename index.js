const fs = require("fs");
const inputRead = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inputRead);
const inputWrite = `Things we know about avacado:${inputRead} written at ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", inputWrite);
