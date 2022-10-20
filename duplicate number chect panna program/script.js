
// ethu oru methed
let js=[1,2,3,4,5,5,4,6,8,3,10];
let c=[];
let v=[];
let sum=0;



for(i=0;i<js.length;i++){
    if(!c.includes(js[i])){
      c.push(js[i]);
    }
    else{
     v.push(js[i]);
    sum=sum+js[i];
      
    }
}
console.log(sum);
console.log(v);
// ethu oru methed
let array=[1,2,3,4,5,5,4,6,8,3,10];
debugger;
for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            console.log(array[i]);
        }
    }
}




