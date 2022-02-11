let group = [{
        name: "Tài khoản Netflix Premium for 1 user",
        price: "79.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686",
    },
    {
        name: "Gói gia hạn Spotify Premium 01 năm",
        price: "299.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/Spotify 1 nam.png?hash=1623646056",
    },
    {
        name: "Discord Nitro 3 tháng",
        price: "149.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh 1406/New/Discord Nitro 3 thang.png?hash=1625106596",
    },
    {
        name: "Tài khoản Grammarly Premium 1 năm",
        price: "490.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Grammarly Premium 1 năm.png?hash=1623645444",
    },
    {
        name: "Tài khoản Amazon Prime Gaming",
        price: "29.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh-san-pham/Tien/Prime Gaming 15 ngày-58286.png?hash=1644403116",
    },
    {
        name: "PUBG 1000 G-COIN",
        price: "225.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Tien/Anh SP/7.7/G COIN 1000.png?hash=1625652188",
    },
    {
        name: "Tài khoản Adobe Photography",
        price: "169.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Phi/Adobe Photography 3 thang-79975.png?hash=1634037039",
    },
    {
        name: "Steam Wallet Code 100 TWD",
        price: "93.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Steam wallet new/STEAM 100 TWD.png?hash=1622878183",
    },
    {
        name: "Steam Wallet Code 40 HKD",
        price: "128.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Steam wallet new/STEAM 120 HKD.png?hash=1622878183",
    },
    {
        name: "Steam Wallet Code 200 ARS",
        price: "64.000đ",
        photoURL: "https://cdn.divineshop.vn/image/catalog/Anh 1406/New/STEAM 200 ARS.png?hash=1624949235",
    },
];
let container = document.getElementsByClassName("container");
for (let i = 0; i < group.length; i++) {
    let itemBox = document.createElement("div");
    itemBox.className = "item";
    let img = document.createElement("img");
    img.src = group[i].photoURL;
    img.className = "poster " + (i + 1);
    let name = document.createElement("h3");
    name.innerHTML = group[i].name;
    name.style = "font-size: 20px; color: black; text-align: center";
    let price = document.createElement("h4");
    price.innerHTML = group[i].price;
    price.style = "font-size: 20px; color: red; padding-left: 60px; display:flex";
    let button = document.createElement("button");
    button.innerHTML = 'Mua hàng'
    button.style = ""

    itemBox.appendChild(img);
    itemBox.appendChild(name);
    itemBox.appendChild(price);

    itemBox.appendChild(document.createElement("br"));
    itemBox.appendChild(button);
    container[0].appendChild(itemBox);

}
console.log(container[0]);