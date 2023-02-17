function ()
let column_1 = [5,9,2,10,7,4,8,5,10,5,10,2,7,1,8,8,9,6,10,4,8,4,3,4,2,9,2,9,6,4];
let column_2 = [1,3,4,1,1,7,8,6,7,1,4,10,8,6,6,8,2,5,6,2,2,8,9,7,2,3,6,9,6,7];
let column_3 = [];
let column_4 = [];

sum = 0;
for (i = 0; i<a.length; i++){
  sum = sum + a[i];
}

const result = {
  sumTotal : sum,
  column_1 : a
}

result.sumTotal
console.log ("Sum=" + result.sumTotal)
