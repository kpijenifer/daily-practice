let a="codecode";
let arryname=[];
let sum=0;
let arr=a.split("");


for(i=0;i<arr.length;i++){
   arryname.push(arr);
   arryname.reverse();
//    arryname.join("");



}
// console.log(arryname);
for(i=0;i<arryname.length;i++){
    sum=sum+arryname[i];
}
console.log(sum);
// for(i=0;i<arryname.length;i++){
//     arryname.reverse();
    
// }
// console.log(arryname);


