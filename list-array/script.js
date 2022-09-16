//list-array

//javascript array values push into html list element

let li=document.getElementsByClassName("list");
   let array=[1,2,3,4];
   for(i=0;i<array.length;i++){
	   li[i].innerHTML=array[i];
   }