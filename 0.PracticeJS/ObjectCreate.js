
var person = {name:"Kevin", age:32, height:175, weight:64};

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys);
console.log(values);

keys.forEach(item => {console.log(person[item])}) 

var person = {"full-name"} 