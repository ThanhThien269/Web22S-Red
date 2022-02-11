let group =[
    {
        photourl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1313860/header.jpg?t=1610974344",
        name: "EA SPORT FIFA 21 Champions Edition", 
        price: 1750000,
    }, 
    {
        photourl: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Tien/Anh SP/7.7/tài khoản BF4.png?hash=1626925143",
        name: "Tài khoản Battlefield 4 (Origin)",
        price: 500000,
    },
    {
        photourl: "https://steamcdn-a.akamaihd.net/steam/apps/941973/header.jpg",
        name: "Devil May Cry 5 - 1000000 Red Orbs",
        price:  273000,
    },
    {
        photourl: "https://cdn.divineshop.vn/image/catalog/Anh-san-pham/gtaprev.jpg?hash=1604888770",
        name: "GTA Grand Thieft Auto V: Premium Online Edition",
        price: 22500,
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
    contentBox
}
console.log(container[0]);
