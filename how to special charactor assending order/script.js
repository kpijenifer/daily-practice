let arr="a,b&c";
let b=[];
// console.log(arr);


for(i=0;i<arr.length;i++){
  if(arr[i]>='a'&&arr[i]<='z'){
    console.log(arr[i] )  
  }
  else{
   b.push(arr[i]);
 

   


  }
}
let text="";

   for(let X of b){
    console.log(text+X);
    // b.pop(b[i]);
    // b.unshift(X);
    b.unshift(",");
    b.pop("$");
    
}
for(i=0;i<b.length;i++){
    
}

// let x=arr.split("");
// let y=x.reverse();
// let z =y.join("");
// console.log(z);





// console.log(b)


// for(i=0;i<b.length;i++){

//     if(b[i]>)
//     //     b.reverse(b[i]);
//     //    b.unshift(b[i]);

    
// }
// console.log(b);