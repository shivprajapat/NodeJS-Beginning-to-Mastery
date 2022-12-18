// const data = 20;

// console.log(data);

// var x=  20;

// if(x==20){
//   console.log("data is matched");
// }else{
//   console.log("data is not matched")
// }

// for(var i=0; i<=10; i++){
//   console.log(i)
// }

// const  arr = [2,3,5,4,6,8,4];

// console.log(arr[1]);


// Import File

// const app= require ("./app");

// console.log(app.x)


const  arr = [2,3,5,4,6,8,4];

const storedata = arr.filter((item)=>{
  return item> 5
})

console.log(storedata)