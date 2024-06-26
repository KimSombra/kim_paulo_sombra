//---itemData Database--->
var itemData = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
    "Flower 1",
    "Flower 2",
    "Flower 3",
    "Flower 4",
    "Flower 5",
    "Choco 1",
    "Choco 2",
    "Choco 3",
    "Choco 4",
    "Choco 5",
    "Package 1",
    "Package 2",
    "Package 3",
    "Package 4",
    "Package 5",
    
];

var priceData = [
    300,
    600,
    700,
    1000,
    1500,
    1500,
    2000,
    3500,
    4000,
    5660,
    300,
    600,
    960,
    1010,
    1500,
    1300,
    1600,
    1900,
    2100,
    3000
];

//CRUD FUNCTION---->

//--Read Function---->
function showTable() {
    var tabel = document.getElementById("table");
    tabel.innerHTML = "<tr><th>No</th><th>Item</th><th>Price</th><th width= '10%'>Count</th><th width= '30%'>Action</th></tr>";
    for (let i = 0; i < itemData.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='editItem(" + i + ")'>Edit Item</button>";
        var btnEditPrice = "<button class='btn-editPrice' href='#' onclick='editPrice(" + i + ")'>Edit Price</button>";
        var btnDelete = "<button class='btn-remove' href='#' onclick='remove(" + i + ")'>Delete</button>";
        var countTemp = `<input type='text' class='form-count' id='item${i}' />`
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + itemData[i] + "</td><td>" + priceData[i] + "</td><td>"+ countTemp +"</td><td>" + btnEdit + "   " + btnEditPrice + "   " + btnDelete + "</tr>";
    }
}
showTable();

//---Create Function----->
function add() {
    var inputItem = document.querySelector("input[name=item]").value;
    var inputPrice = document.querySelector("input[name=price]").value;
    if (inputItem == "" || inputPrice == "") {
        alert("Please fill the form completely")
    } else {
        itemData.push(inputItem);
        priceData.push(inputPrice);
        showTable();
        inputItem.value = "";
        inputPrice.value = "";
    }
    
}

//-----Update Function------>
function editItem(id) {
    var newItem = prompt("Input the new item:", itemData[id]);
    if (newItem === null) {
        newItem = itemData[id]
    } else {
        itemData[id] = newItem;
    }
    showTable();
}

function editPrice(id) {
    var newPrice = prompt("Input the new price:", priceData[id]);
    if (newPrice === null) {
        newPrice = priceData[id];
    } else {
        priceData[id] = newPrice;
    }
    showTable();
}

//----Delete Function---->
function remove(id) {
    itemData.pop(id);
    priceData.pop(id);
    showTable();
}

//----CASHIER FUNCTION---->

//---Count Total Item---->
function itemCount() {
    let count = 0;
    let countTemp;
    for (let i = 0; i < itemData.length; i++) {
        countTemp = Number(document.getElementById(`item${i}`).value);
        count += countTemp;
    }
    return count
}

//----Count Discount Percentage---->
function discPercent(totalPrice) {
    let discount = 0;
    if (totalPrice >= 2500) {
        discount = 5;
    } else if (totalPrice >= 2000) {
        discount = 4;
    } else if (totalPrice >= 1500) {
        discount = 3;
    } else if (totalPrice >= 1000) {
        discount = 2;
    } else if (totalPrice >= 5000) {
        discount = 1;
    }
    return discount;
}

//----Count Discount Value---->
function discPrice(totalPrice, discount) {
    return totalPrice * (discount/100);
}

//---Count Total Price---->
function totPrice() {
    let priceTemp;
    let countTemp;
    let totalPrice = 0
    for(let i = 0; i < itemData.length; i++) {
        priceTemp = Number(priceData[i]);
        countTemp = Number(document.getElementById(`item${i}`).value);
        totalPrice += priceTemp * countTemp;
    }
    return totalPrice;
}
 
//----Count Final Price---->
function finalTotal(totalPrice, discountPrice) {
    return totalPrice - discountPrice;
}

//----Execute All Function----->
function process() {

    const totalPrice = totPrice();
    const count = itemCount();
    const discPercentage = discPercent(totalPrice);
    const discValue = discPrice(totalPrice, discPercentage);
    const finalPrice = finalTotal(totalPrice, discValue)

    //-----Show the element ----->
    document.getElementById('item-total').value = `Item Total : ${count} Items`;
    document.getElementById('discount-total').value = `Discount Total : ${discPercentage}%`;
    document.getElementById('discount-value').value = `Discount Value : Rp${discValue},-`
    document.getElementById('price-total').value = `Price Total : Rp${finalPrice},-`;
}