import { foodItem } from "./fooditems.js"


let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween:30,
    centeredSlides: true,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop: true,
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;

function orderNow(){
    var orderNow1 = element.order.ordernow;

    if(orderNow1.value = true){
        alert("Logout successfully");
        window.location.href = "/index.html"
    }
    return false;
}




// Food Items



function displayItems(){
    var dishes = document.getElementById('dishes');
    var menu = document.getElementById('menu');

    const dishesData = foodItem.filter((item) => item.category=='dishes');
    const menuData = foodItem.filter((item) => item.category=='menu');

    dishesData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var box = document.createElement('div');
        box.setAttribute('id', 'box')

        var star = document.createElement('i');
        star.setAttribute('class','fas fa-star');
        star.setAttribute('id','rating');
        star.innerHTML= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fas fa-heart add-to-cart');
        heart.setAttribute('id',item.id);

        box.appendChild(star);
        box.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('h3');
        itemName.setAttribute('id', 'item-name');
        itemName.innerHTML = item.name;

        var itemPrice = document.createElement('span');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Rs.' + item.price;

        itemCard.appendChild(box);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        dishes.appendChild(itemCard);
    })

    menuData.map(item => {
        
        var itemMenu = document.createElement('div');
        itemMenu.setAttribute('id', 'item-menu');

        var box = document.createElement('div');
        box.setAttribute('id', 'box')

        var star = document.createElement('i');
        star.setAttribute('class','fas fa-star');
        star.setAttribute('id','rating');
        star.innerHTML= ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fas fa-heart add-to-cart');
        heart.setAttribute('id',item.id);

        box.appendChild(star);
        box.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var taste = document.createElement('p')
        taste.setAttribute('id', 'item-taste');

        var itemName = document.createElement('h3');
        itemName.setAttribute('id', 'item-name');
        itemName.innerHTML = item.name;

        var itemPrice = document.createElement('span');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Rs.' + item.price;

        itemMenu.appendChild(box);
        itemMenu.appendChild(img);
        itemMenu.appendChild(itemName)
        itemMenu.appendChild(itemName);
        itemMenu.appendChild(itemPrice);

        menu.appendChild(itemMenu);
    })
}
displayItems();

const categoryListData = [...new Map(foodItem.map(item => [item['category'],item])).values()];
console.log(categoryListData);



// cart data

document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart)
    item.innerText = 'Cart';
})

var cartData = [];

function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = foodItem.find(element => element.name == itemToAdd);

    console.log(itemObj);

    var index = cartData.indexOf(itemObj);
    if(index == -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData, itemObj];
        console.log(cartData);
    }
    else if(index > -1){
        alert("Added to cart!");
    }

    document.getElementById('cart-plus').innerText = ' ' + cartData.length;

    totalAmount();
    cartItems();
 
}

function cartItems(){
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ' ';

    cartData.map(item => {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        var rowData3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item ');
        btn1.innerText = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);


    })

    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click',incrementItem);
    })
    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click',decrementItem);
    })
}

var currPrice = 0;

function incrementItem(){
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incObj = cartData.find(element => element.name == itemToInc);

    incObj.quantity += 1;

    currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity-1))/(incObj.quantity-1);

 

    incObj.price = currPrice * incObj.quantity;
    totalAmount();
    cartItems();
}

var flag = false;

function decrementItem(){
    let iteToDec = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.name == iteToDec);
    let ind = cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1))/(decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currPrice * decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML = ' ' + cartData.length;

        if(cartData.length < 1 && flag){
            document.getElementById('dishes').classList.toggle('dishes');
            document.getElementById('menu').classList.toggle('menu');
            document.getElementById('cart').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item in cart");
        }
    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum=0;
    cartData.map(item => {
        sum += item.price;
    })
    document.getElementById('total-item').innerText = 'Total Item :' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Price : Rs.'+ sum;

}

document.getElementById('cart-plus').addEventListener('click', cartToggle);

function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('dishes').classList.toggle('dishes');
        document.getElementById('menu').classList.toggle('menu');
        document.getElementById('cart').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
    }
    else{
        alert("Cart is empty");
    }
}


