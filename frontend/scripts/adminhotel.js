let conatin = document.getElementById("conatin");
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


function display(data) {
    conatin.innerHTML = null;
    data.forEach((element) => {
        // console.log(element)
        let card = document.createElement("div");
        let card2 = document.createElement("div");
        let card4 = document.createElement("div");
        let create = document.createElement('button')
        create.innerText = "Create New"
        create.setAttribute("id", "create");
        let edited = document.createElement('button')
        edited.innerText = "Edit"
        edited.setAttribute("id", "edit");
        edited.addEventListener("click", function () {
     
            localStorage.setItem("ID",element._id)
            window.location.href="./updateform.html"
          });
        let del = document.createElement('button')
        del.innerText = "Delete"
        del.addEventListener("click", function () {
        handleDelete(element._id);
        })
        del.setAttribute("id", "del");
        let card3 = document.createElement("div");
        let other = document.createElement("div");
        let pricediv = document.createElement("div");
        card2.setAttribute("id", "card2");
        card4.setAttribute("id", "card4");
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
            localStorage.setItem("element", JSON.stringify(element))
            // window.location.href = "./hotelinfo.html"
        })

        title.innerText = element.name;
        rating.innerText = element.ratings + "/10 Ratings";
        payment_type.innerText = element.payment_type;
        meal.innerText = element.meal + " included";
        location.innerText = element.location;
        hotel_type.innerText = element.hotel_type;
        price.innerText = "$" + element.price;
        pricediv.append(edited,del,price, rating, meal)
        other.append(title,
            location,

            payment_type,


            hotel_type)
        card.append(
            other, pricediv

        );
        // card4.append(edit,del)
        card3.append(image)
        card2.append(card3, card,card4);
        conatin.append(card2);

    });
}
async function handleDelete(id) {
    await fetch(`https://bronze-katydid-gown.cyclic.app/hotel/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // "Authorization":localStorage.getItem("token")
      },
    });
    window.location.reload();
  }
window.addEventListener("load", getdata);


