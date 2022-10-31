let a="jenifermech7@gmail.com";

let s=["a","e","i","o","u"];
let sum=0;

for(i=0;i<a.length;i++){
    for(j=0;j<s.length;j++){
        if(a[i]==s[j]){
         sum++;
        }
        
    }
}
console.log(sum);




// let b=parseInt(prompt("enter the number"));
let b = "2013"
debugger

if(b%4==0 || b%4==4 ){
    console.log("leap year")
}
else{
    console.log("not leap year")
}
