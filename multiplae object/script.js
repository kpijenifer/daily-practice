// let obj=[
//     {
//     name:"jenifer",
//     street:"kurumbalaperi",

// },
// {
//     name:"ananth",
//     street:"valore"
// },
// {
//     name:"sruya",
//     street:"kerala"
// },
// {
//     name:"raja",
//     street:"keelapavoor"
// }

// ];

// obj.forEach(element => {
//     for(let key in element){
//         console.log(element[key])
//          list=document.createElement("li")
//          list.innerText=element[key]
//          list1=document.getElementById("order")
//          list1.appendChild(list)
         
         
       
//     }
// })


//  function colorchange(){
//     let head=document.getElementById("heading");
//     let  col=document.getElementById("color").value;
//      head.style.color=col;
// }
//   document.getElementById("btn").addEventListener("click",colorchange);


function colorchange(){
 let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
   let cor="rgb("+r+","+g+","+b+")";
  let head=document.getElementById("heading");
  head.style.color=cor;

}

document.getElementById("btn").addEventListener("click,",colorchange);




  


    

