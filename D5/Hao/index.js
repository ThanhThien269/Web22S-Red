let group = [{
    name: "LMHT",
    price: 150000,
    photoURL: "./3.jpg"
},
 {   name: "PUBG",
    price: 175000,
    photoURL: "./1.jpg",
},
   { name: "GS",
    price: 200000,
    photoURL: "./4.jpg",
},

{
    name: "Ark",
    price: 650000,
    photoURL: "./5.jpg",
},
{
    name: "GTA 5",
    price: 700000,
    photoURL: "./6.jpg",
},
];

let container = document.getElementsByClassName("container");
let menuContainer = document.getElementsByClassName("menu");
for(let i = 0; i < group.length;i++){
    // let itemBox = document.createElement("div");
    // itemBox.innerHTML = group[i].name;
    let itemBox1 = document.createElement("div");
    itemBox1.className = 'item';

    let name = document.createElement("h3");
    name.innerHTML = group[i].name;
    name.style = "font-size:50px; color:#FF0000";

    let price = document.createElement("h4");

    let img = document.createElement("img");
    img.src= group[i].photoURL;
    img.className="poster "+i;  

    // img.height = 100;
    // img.width = 100;
    price.innerHTML = group[i].price;

    let buyBtn = document.createElement("button");
    buyBtn.innerHTML = "Mua";

    itemBox1.appendChild(name);
    itemBox1.appendChild(price);
    itemBox1.appendChild(img);
    itemBox1.appendChild(buyBtn);

    menuContainer[0].appendChild(itemBox1);
}console.log(menuContainer[0]);