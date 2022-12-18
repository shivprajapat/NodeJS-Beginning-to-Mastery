# 🏆 Node JS Beginning to Mastery 🏆

## Topic Covered :-

### Package Name

- redux
- react-redux

### 1 [JavaScript Fundamentals](#javaScript-fundamentals)

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
