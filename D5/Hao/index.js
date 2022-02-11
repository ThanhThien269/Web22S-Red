let group = [{
    name: "LMHT",
    price: "150.000",
    photoURL: "./img/3.jpg"
},
 {   name: "PUBG",
    price: "750.000",
    photoURL: "./img/1.jpg",
},
   { name: "GS",
    price: "200.000",
    photoURL: "./img/4.jpg",
},

{
    name: "Ark",
    price: "650.000",
    photoURL: "./img/5.jpg",
},
{
    name: "GTA 5",
    price: "700.000",
    photoURL: "./img/6.jpg",
},
{
    name: "Pokemon",
    price: "600.000",
    photoURL: "./img/2.jpg",
},
{
    name: "Sifu",
    price: "750.000",
    photoURL: "./img/7.jpg",
},
{
    name: "Left4Dead ",
    price: "1.000.000",
    photoURL: "./img/8.jpg",
},
{
name: "NARAKA: BLADEPOINT",
    price: "1.000.000",
    photoURL: "./img/9.jpg",

},
{
name: "Cyberpunk 2077",
    price: "340.000",
    photoURL: "./img/10.jpg",

},
{
    name: "Call of Duty: Black Ops III",
        price: "1.400.000",
        photoURL: "./img/11.jpg",
    
    },
    {
        name: "NBA 2K21",
            price: "1.340.000",
            photoURL: "./img/12.jpg",
        
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
    name.style = "font-size:30px; color:#FF0000";

    let price = document.createElement("h4");

    let img = document.createElement("img");
    img.src= group[i].photoURL;
    img.className="poster "+i;  

    // img.height = 100;
    // img.width = 100;
    price.innerHTML = group[i].price;

    let buyBtn = document.createElement("button");
    buyBtn.innerHTML = "Mua";
    itemBox1.appendChild(img);
    itemBox1.appendChild(price);
    itemBox1.appendChild(name);
   
    
    itemBox1.appendChild(buyBtn);

    menuContainer[0].appendChild(itemBox1);
}console.log(menuContainer[0]);