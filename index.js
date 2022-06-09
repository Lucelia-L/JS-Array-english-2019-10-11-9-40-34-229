// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array);



// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i=0; i<a.length; i++){
    a[i] = a[i]*2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join("+"));
console.log(colors.join(","));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(let i=0; i<a.length; i++){
    for(let j=i+1; j<a.length; j++){
        if(a[i] < a[j]){
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
        
    }
}
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var map = {};
for(let i=0; i<a.length; i++){
    if(map.hasOwnProperty(a[i])){
        map[a[i]] ++;
    }else{
        map[a[i]] = 1;
    }
}
var freNum, max=0;
for(let key in map){
    if(map[key]>max){
        freNum = key;
        max = map[key];
    }
}
console.log(freNum);