let a=prompt("enter the name");
  let b=["a","e","i","o","u"];
  let s=0;
  

  for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
      if(a[i]==b[j]){
        s++;
      }
      
    }
  }
  console.log(s);