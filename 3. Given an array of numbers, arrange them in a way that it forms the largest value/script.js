
// // // ethum oru methed
// let v=[54, 546, 548, 60];
// let sum='';

  
// for(i=v.length-1;i>=0;i--){
//     sum+=v[i];
    
// }
// console.log(sum)


// // ethu oru methed
// let a=[54,546,548,60];


// let k=a.reverse();
// k=a.join("");
// console.log(k);



// console.log(66);




let arr=[0,1,2,3,4,5];
let count=0;
debugger

for(i=0;i<arr.length;i++){
    if(arr[i]!=0){
        arr[count++]=arr[i] ;
       console.log(arr[i]);
    }
    
}
while(count>=arr[i]){
     arr[count++]=0;
    
}
console.log(arr);












array1=[[1,3],[2,7],[5,6],[1,1],[5,7]];
newarray=[];
sum=0;
for(i=0;i<array1.length;i++){
   
    for(j=0;j<array1[i].length;j++){
        sum=sum+array1[i][j]
    }
   
     console.log(sum);
    
     if(sum%2==0){
     newarray.push(array1[i]);   
    }
    sum=0;
}
console.log(newarray);











