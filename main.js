function ()
let column_1 = [5,9,2,10,7,4,8,5,10,5,10,2,7,1,8,8,9,6,10,4,8,4,3,4,2,9,2,9,6,4];
let column_2 = [1,3,4,1,1,7,8,6,7,1,4,10,8,6,6,8,2,5,6,2,2,8,9,7,2,3,6,9,6,7];
let column_3 = [82,59,64,64,87,44,76,52,62,100,43,41,51,45,56,82,64,89,75,93,69,94,83,70,46,53,83,88,85,89];
let column_4 = [70,49,44,44,99,41,93,68,91,85,40,84,74,94,97,74,49,81,93,45,87,54,45,62,53,73,42,41,99,40];

sum_1 = 0;
for (i = 0; i<a.length; i++){
  sum_1 = sum_1 + a[i];
}

sum_2 = 0;
for (i = 0; i<b.length; i++){
  sum_2 = sum_2 + b[i];
}

sum_3 = 0;
for (i = 0; i<c.length; i++){
  sum_3 = sum_3 + c[i];
}

sum_4 = 0;
for (i = 0; i<d.length; i++){
  sum_4 = sum_4 + d[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4]
const result = {
  sumTotal : sums,
  column_1 : a,
  column_2 : b,
  column_3 : c,
  column_4 : d
}

result.sumTotal
console.log("Sums=" + result.sumTotal)
