let group =[
    {
        photourl: "./assets/images/FiFA21.jpg",
        name: "EA SPORT FIFA 21 Champions Edition", 
        price: "1.750.000đ",
    }, 
    {
        photourl: "./assets/images/Battlefield4.jpg",
        name: "Tài khoản Battlefield 4 (Origin)",
        price: "500.000đ",
    },
    {
        photourl: "./assets/images/DevilMayCry5.jpg",
        name: "Devil May Cry 5 - 1000000 Red Orbs",
        price:  "273.000đ",
    },
    {
        photourl: "./assets/images/GTA5online.jpg",
        name: "GTA Grand Thieft Auto V: Premium Online Edition",
        price: "225.000đ",
    },
    {
        photourl: "./assets/images/Blasphemous.jpg",
        name: "Blasphemous",
        price: "296.000đ",
    },
    {
        photourl:"./assets/images/Pubg.jpg",
        name: "PUBG",
        price: "700.000đ",
    },
    {
        photourl:"./assets/images/genshin.jpg",
        name: "Genshin Impact",
        price: "Free",
    },
    {
        photourl:"./assets/images/Forza.jpg",
        name: "Forza horizon 5",
        price: "1.000.000đ",
    },
    {
        photourl:"./assets/images/Subnautica.jpg",
        name: "Subnautica",
        price: "900.000đ",
    },
    {
        photourl: "./assets/images/Awayout.jpg",
        name: "A way out",
        price: "600.000đ",
    },

];
let container = document.getElementsByClassName('container');
for(let i = 0; i<group.length; i++){
    let itemBox = document.createElement("div");
    itemBox.className = 'item';
    dispatchEvent.className = 'item ' + (i+1);
    let img = document.createElement("img");
    img.src = group[i].photourl;
    img.className = 'poster ' + (i+1);
    let name =document.createElement("h3");
    name.innerHTML=group[i].name;
    name.style = "font-size: 20px; text-align: center";
    let price = document.createElement("h4");
    price.innerHTML = group[i].price;
    let contentBox = document.createElement("div");
    contentBox.className = 'content-box ' + (i+1);
    // let button = document.createElement("button");
    price.style = "font-size: 20px; color: red";
    itemBox.appendChild(img);
    itemBox.appendChild(name);
    itemBox.appendChild(price);

    itemBox.appendChild(document.createElement("br"));
    // itemBox.appendChild(button);
    container[0].appendChild(itemBox);

}
console.log(container[0]);
