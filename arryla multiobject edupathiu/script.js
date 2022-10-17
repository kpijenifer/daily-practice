let arrname=[
    {
  name:"ananth",
  Age : 22,
  dob : 10
},
{
    name:"anDSFSDFaFDnth",
    Age : 22,
    dob : 10
  },
  {
    name:"ACD",
    Age : 22,
    dob : 10
  },
  {
    name:"ABC",
    Age : 22,
    dob : 10
  }
]
arrname.forEach((element)=>{
for(let key in element){
    // console.log(element[key]);
    var head  = document.createElement("h1");
  var sm=  document.getElementById("small");
    sm.appendChild(head);
    head.innerHTML  = element[key];
}
});





