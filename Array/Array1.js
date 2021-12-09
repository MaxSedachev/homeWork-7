export function twiceValue(){
let arr1 = [2,4,6,8,10,12,14,16,18,20];

let newArr=arr1.map(function(el){
    let newValue=el*2;
    return newValue
    
});
// console.log(arr1);
console.log(newArr);
};

twiceValue();