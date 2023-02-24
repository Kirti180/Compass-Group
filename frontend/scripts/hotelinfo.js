const btn=document.getElementById('btn_rev')
const data=JSON.parse(localStorage.getItem("element"))
const title=document.getElementById('title')
const ratings=document.getElementById('ratings')
const img=document.getElementById('image')
const price=document.getElementById('price')
const price1=document.getElementById('price1')
let image = document.createElement("img");
image.setAttribute("src", data.image);
price.innerText="$"+data.price
price1.innerText="$"+data.price
title.innerText=data.name
img.append(image)
image.setAttribute("src",data.image)
ratings.innerText="Ratings "+data.ratings+"/10"
function property(){
   localStorage.setItem("price",data.price)
   window.location.href="./check.html"
}
function pay(){
   localStorage.setItem("price",data.price)
   window.location.href="./checkpay.html"
}