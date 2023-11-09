var products = document.querySelectorAll(".products h5")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#showPrice")
var div2 = document.querySelector("#div2")
var totalprice = 0
products.forEach(function(item){
  item.onclick = function(){
    totalprice += +(item.getAttribute("price"))
    div1.innerHTML += item.textContent + " / "
    div1.style.fontSize = "18px"
    div1.style.fontWeight = "bolder"
div1.style.border = "2px solid rgb(228, 212, 203)"
div1.style.borderRadius = "10px"
div1.style.display = "inline-block"
if (div1.innerHTML != ""){
  btn1.style.visibility = "visible"
}
  }
}
)
btn1.onclick = function(){
div2.innerHTML=(totalprice)
div2.style.fontSize = "20px"
div2.style.fontWeight = "bolder"
div2.style.border = "2px solid rgb(228, 212, 203)"
div2.style.display = "inline-block"
div2.style.borderRadius = "10px"
div2.style.marginTop = "10px"
}
