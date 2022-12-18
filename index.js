// writeFileSync()

const fs = require("fs");
// fs.writeFileSync("hello.txt", "hello new file")

// console.log("hello",__dirname)
// console.log("hello",__filename)

// const fs = require("fs").writeFileSync;
// fs("abc.txt","this is a single file writeFileSync")

// appendFileSync()

// const fs = require("fs");
// fs.appendFileSync("abc.txt", "this is a second file");

// Buffer "utf8"
// const buf_data =  fs.readFileSync("abc.txt", "utf8");
// console.log(buf_data)

// Example => 1
// const buf_data =  fs.readFileSync("abc.txt", "utf8");
// console.log(buf_data)

// Example => 2
// const buf_data =  fs.readFileSync("abc.txt");
// const buf_new_data = buf_data.toString()

// console.log(buf_new_data)

fs.renameSync("abc.txt","readwrite.txt")