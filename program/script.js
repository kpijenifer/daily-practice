var a = [2,4,4,5,6,7];
let len=[];
let sum=0;

// debugger
for(i=0;i<a.length;i++){
    if(!len.includes(a[i])){
     len.push(a[i]);
    // console.log(a[i]);
    }
    else{
        // console.log("extra value",a[i]);
        sum=sum+1;
    }
}
for(let i=0;i<sum;i++){ 
    len.push("_");
}
console.log(len)






