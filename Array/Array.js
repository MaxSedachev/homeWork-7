export function sumAllElements(){
let arr = [2,4,6,8,10,12,14,16,18,20];
let sum=0;
arr.forEach(function(el){
    sum=sum+el
});
console.log(sum);
};

sumAllElements();