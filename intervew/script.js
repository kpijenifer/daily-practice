
 let input=document.getElementById(password).value;
let pass=document.getElementById(accr).value;



function stage(){
    let sum=0;
    let v=["a","e","i","o","u"];
     for(i=0;i<pass.length;i++){
        for(j=0;j<v.length;j++){
           if(pass[i]==v[i]) {
               sum++
           }
        }
     }
}
let login=document.getElementById(prisom).addEventListener(click,stage);
console.log(accr);
let password=document.getElementById(password).addEventListener(click,stage);