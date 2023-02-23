let conatin = document.getElementById("conatin");
const getdata = () => {
  fetch("http://localhost:8080/hotel/all")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
getdata();

const apart = () => {
  fetch("http://localhost:8080/hotel/aphotel")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
apart();

const villa = () => {
  fetch("http://localhost:8080/hotel/villa")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
villa();

const Breakfast = () => {
  fetch("http://localhost:8080/hotel/breakfast")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
Breakfast();


const lunch1 = () => {
    fetch("http://localhost:8080/hotel/lunch")
      .then((res) => res.json())
      .then((res) => {
        //    console.log(res)
        display(res.data);
      })
      .catch((err) => console.log(err));
  };
  lunch1();

  const dinn = () => {
    fetch("http://localhost:8080/hotel/dinner")
      .then((res) => res.json())
      .then((res) => {
        //    console.log(res)
        display(res.data);
      })
      .catch((err) => console.log(err));
  };
  dinn();

const nine1 = () => {
  fetch("http://localhost:8080/hotel/gt9")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
nine1();

const juhu1 = () => {
    fetch("http://localhost:8080/hotel/beach")
      .then((res) => res.json())
      .then((res) => {
        //    console.log(res)
        display(res.data);
      })
      .catch((err) => console.log(err));
  };
  juhu1();


  const way = () => {
    fetch("http://localhost:8080/hotel/gate")
      .then((res) => res.json())
      .then((res) => {
        //    console.log(res)
        display(res.data);
      })
      .catch((err) => console.log(err));
  };
  way();

const eight1 = () => {
  fetch("http://localhost:8080/hotel/gt8")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
eight1();

const seven1 = () => {
  fetch("http://localhost:8080/hotel/gt7")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
seven1();

const paylater = () => {
  fetch("http://localhost:8080/hotel/refundable")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
paylater();

const low = () => {
    fetch("http://localhost:8080/hotel/low")
      .then((res) => res.json())
      .then((res) => {
        //    console.log(res)
        display(res.data);
      })
      .catch((err) => console.log(err));
  };
  low();


  const high = () => {
    fetch("http://localhost:8080/hotel/high")
      .then((res) => res.json())
      .then((res) => {
        //    console.log(res)
        display(res.data);
      })
      .catch((err) => console.log(err));
  };
  high();

const refund = () => {
  fetch("http://localhost:8080/hotel/reserve")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
refund();
function display(data) {
  conatin.innerHTML = null;
  data.forEach((element) => {
    // console.log(element)
    let card = document.createElement("div");
    let card2 = document.createElement("div");
    let card3 = document.createElement("div");
    let other = document.createElement("div");
    let pricediv = document.createElement("div");
    card2.setAttribute("id", "card2");
    card3.setAttribute("id", "card3");
    card.setAttribute("id", "card");
    other.setAttribute("id", "other");
    pricediv.setAttribute("id", "pricediv");
    let title = document.createElement("h2");
    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    let hotel_type = document.createElement("p");
    let price = document.createElement("h2");
    let rating = document.createElement("p");
    let payment_type = document.createElement("p");
    let meal = document.createElement("p");
    let location = document.createElement("p");
    location.setAttribute("id", "location");
    card2.addEventListener("click",()=>{
  localStorage.setItem("element",JSON.stringify(element))
  window.location.href="./hotelinfo.html"
})
 
    title.innerText = element.name;
    rating.innerText = element.ratings+"/10 Ratings";
    payment_type.innerText = element.payment_type;
    meal.innerText = element.meal+" included";
    location.innerText = element.location;
    hotel_type.innerText = element.hotel_type;
    price.innerText = "$"+element.price;
    pricediv.append(price,rating,meal)
    other.append(title,
      location,
      
      payment_type,
     
      
      hotel_type)
    card.append(
      other ,pricediv
     
    );
    card3.append(image)
    card2.append(card3, card);
    conatin.append(card2);

  });
}
window.addEventListener("load", getdata);
let checkmark = document.getElementById("all");
let checkmark1 = document.getElementById("all1");
let checkmark2 = document.getElementById("all2");
let checkmark3 = document.getElementById("all3");
let low_hight = document.getElementById("low");
let high_low = document.getElementById("high");
checkmark.addEventListener("click", getdata);
low_hight.addEventListener("click", low);
high_low.addEventListener("click", high);
checkmark1.addEventListener("click", getdata);
checkmark2.addEventListener("click", getdata);
checkmark3.addEventListener("click", getdata);
let apart1 = document.getElementById("apart");
let apart2 = document.getElementById("aapart");
let juhu = document.getElementById("juhu");
let gateway = document.getElementById("gateway");
let breakfast = document.getElementById("breakfast1");
let lunch = document.getElementById("lunch");
let dinner = document.getElementById("dinner");
apart1.addEventListener("click", apart);
apart2.addEventListener("click", apart);
let villa1 = document.getElementById("villa");
let villa2 = document.getElementById("vvilla");
villa1.addEventListener("click", villa);
villa2.addEventListener("click", villa);
let breakf = document.getElementById("breakfast");
breakf.addEventListener("click", Breakfast);
lunch.addEventListener("click", lunch1);
gateway.addEventListener("click", way);
dinner.addEventListener("click", dinn);
breakfast.addEventListener("click", Breakfast);
let nine = document.getElementById("9+");
let eight = document.getElementById("8+");
let seven = document.getElementById("7+");
let paylater1 = document.getElementById("paylater");
let refund1 = document.getElementById("refund");
nine.addEventListener("click", nine1);
eight.addEventListener("click", eight1);
juhu.addEventListener("click", juhu1);

seven.addEventListener("click", seven1);
refund1.addEventListener("click", paylater);
paylater1.addEventListener("click", refund);

let search = document.getElementById("search");

