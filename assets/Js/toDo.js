const input = document.querySelector("input");
const button = document.querySelector("button");
const info = document.querySelector(".info");
const list = document.querySelector(".list")
let data = [];
button.addEventListener("click", function () {
  let value = input.value;
  data.push(value);
  
  let result = data.map(function (el,index) {
    if(value == ""){
      alert("Zehmet olmasa her hansısa məlumat daxil edin")
    }
    else{
     return `<li>${index+1+")"} ${el}</li>`
  }).join("") 
    }
  list.innerHTML = result;
  input.value = ""
  
});
