const fs = require("fs");
const http = require("http");

// const inputRead = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(inputRead);
// const inputWrite = `Things we know about avacado:${inputRead} written at ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", inputWrite);

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) {
//     console.log(err);
//   }
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       fs.writeFile("./txt/data3.txt", `${data1}\n${data2}\n${data3}`, (err) => {
//         console.log("file written");
//       });
//     });
//   });
// });
const server = http.createServer((req, res) => {
  res.end("hello world from server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is running at port 8000");
});
