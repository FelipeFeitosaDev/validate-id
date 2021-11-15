//creating immediate function
(function(){

//querying elements 
const inputCPF = document.querySelector("input");
const button = document.querySelector("button");

//adding listeners 
button.addEventListener("click", (e) => {
  e.preventDefault();

  const stringNumbers = inputCPF.value.replace(/\D+/g, "");
  
})


})()
