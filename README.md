# 🏆 Node JS Beginning to Mastery 🏆

## Topic Covered :-

### 1 [JavaScript Fundamentals](#javaScript-fundamentals)
### 2 [Core Modules](#Core-Modules)

## javaScript-fundamentals

Fundamentals

- JavaScript Fundamentals for Node js.
- `Conditions`, `Loops`, `Array`, `filter` and `spread operator`
- The `import` function and variables from another file.

### Conditions

```javascript
var x = 20;

if (x == 20) {
  console.log("data is matched");
} else {
  console.log("data is not matched");
}
```

### Loops

```javascript
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
```

### Array

```javascript
const arr = [2, 3, 5, 4, 6, 8, 4];

console.log(arr[1]);
```

### spread operator

```javascript
const arr = [2, 3, 5, 4, 6, 8, 4];

console.log(...arr);
```

### `import` function and variables from another file

```javascript
module.exports = {
  x: 20,
  y: 50,
};
```

```javascript
const app = require("./app");

console.log(app.x);
```

### filter

```javascript
const arr = [2, 3, 5, 4, 6, 8, 4];

const storedata = arr.filter((item) => {
  return item > 5;
});

console.log(storedata);
```
## Core-Modules
  ### What is node core in node JS?
Node has several modules compiled into its binary distribution. These are called the core modules and are referred by the module name, not the path. They get preference in loading even if a third-party module exists with the same name. For example, the following code shows how to load the core http module.

### Create files
 
```javascript
const fs = require("fs");
fs.writeFileSync("hello.txt", "hello new file")

```
### writeFileSync()
 
```javascript
const fs = require("fs");
fs.writeFileSync("hello.txt", "hello new file")
```
### Single function call
 
```javascript
const fs = require("fs").writeFileSync;
fs("abc.txt","this is a single file writeFileSync")
```

### Update files `appendFileSync()`
 
```javascript
const fs = require("fs");
fs.appendFileSync("abc.txt", "this is a second file");
```

### Read files `Buffer` "utf8"
```javascript
Example => 1

const buf_data =  fs.readFileSync("abc.txt", "utf8");
console.log(buf_data)

Example => 2

const buf_data =  fs.readFileSync("abc.txt");
const buf_new_data = buf_data.toString()
console.log(buf_new_data)
```
### Rename files renameSync()
```javascript
fs.renameSync("abc.txt","readwrite.txt")
```