let conatin = document.getElementById("conatin");
let breakf = document.getElementById("breakfast");
let search = document.getElementById("search");
let nine = document.getElementById("9+");
let eight = document.getElementById("8+");
let seven = document.getElementById("7+");
let paylater1 = document.getElementById("paylater");
let refund1 = document.getElementById("refund");
let villa1 = document.getElementById("villa");
let villa2 = document.getElementById("vvilla");
let apart1 = document.getElementById("apart");
let apart2 = document.getElementById("aapart");
let juhu = document.getElementById("juhu");
let gateway = document.getElementById("gateway");
let breakfast = document.getElementById("breakfast1");
let lunch = document.getElementById("lunch");
let dinner = document.getElementById("dinner");
let checkmark = document.getElementById("all");
let checkmark1 = document.getElementById("all1");
let checkmark2 = document.getElementById("all2");
let checkmark3 = document.getElementById("all3");
let select1 = document.getElementById("select");
const getdata = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/all")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};
getdata();

const apart = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/aphotel")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const villa = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/villa")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const Breakfast = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/breakfast")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const lunch1 = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/lunch")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const dinn = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/dinner")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const nine1 = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/gt9")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const juhu1 = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/beach")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const way = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/gate")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const eight1 = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/gt8")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const seven1 = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/gt7")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const paylater = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/refundable")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

const low = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/low")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

const select = (e) => {
  console.log(e.target.value);
  if (e.target.value == "") {
    getdata();
  } else if (e.target.value == "low") {
    low();
  } else {
    high();
  }
};
const search1 = (e) => {
  setTimeout(() => {
    fetch(`https://bronze-katydid-gown.cyclic.app/hotel/search?name=${e.target.value}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        display(res.data);
      })
      .catch((err) => console.log(err));
  }, 300);
};
const high = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/high")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

const refund = () => {
  fetch("https://bronze-katydid-gown.cyclic.app/hotel/reserve")
    .then((res) => res.json())
    .then((res) => {
      //    console.log(res)
      display(res.data);
    })
    .catch((err) => console.log(err));
};

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
    card2.addEventListener("click", () => {
      localStorage.setItem("element", JSON.stringify(element));
      window.location.href = "./hotelinfo.html";
    });

    title.innerText = element.name;
    rating.innerText = element.ratings + "/10 Ratings";
    payment_type.innerText = element.payment_type;
    meal.innerText = element.meal + " included";
    location.innerText = element.location;
    hotel_type.innerText = element.hotel_type;
    price.innerText = "$" + element.price;
    pricediv.append(price, rating, meal);
    other.append(
      title,
      location,

      payment_type,

      hotel_type
    );
    card.append(other, pricediv);
    card3.append(image);
    card2.append(card3, card);
    conatin.append(card2);
  });
}
window.addEventListener("load", getdata);
checkmark.addEventListener("click", getdata);
select1.addEventListener("change", select);
checkmark1.addEventListener("click", getdata);
checkmark2.addEventListener("click", getdata);
checkmark3.addEventListener("click", getdata);
apart1.addEventListener("click", apart);
apart2.addEventListener("click", apart);
villa1.addEventListener("click", villa);
villa2.addEventListener("click", villa);
breakf.addEventListener("click", Breakfast);
lunch.addEventListener("click", lunch1);
gateway.addEventListener("click", way);
dinner.addEventListener("click", dinn);
breakfast.addEventListener("click", Breakfast);
nine.addEventListener("click", nine1);
eight.addEventListener("click", eight1);
juhu.addEventListener("click", juhu1);
search.addEventListener("change", search1);
seven.addEventListener("click", seven1);
refund1.addEventListener("click", paylater);
paylater1.addEventListener("click", refund);
