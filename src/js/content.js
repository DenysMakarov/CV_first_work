import {Data} from "./modules/data";
let products = Data.loadProducts();

import {Builder} from "./modules/build";
let createCards = new Builder();
let createPouPup = new Builder();
let creatCart = new Builder();
let createTableOfOrders = new Builder();

let per_page = 6;
let current = 0;


let boxContent = document.getElementById("range_content_box");
let paginationBox = document.getElementById("pag_box");

let changeMan = document.getElementById("buttom_man");
let changeWoman = document.getElementById("buttom_woman");
let changeChildren = document.getElementById("buttom_children");

let changeAll = document.getElementById("buttom_all");
let sex = "sex", man = "man", woman = "woman", children = "children";
let searchForm = document.getElementById("search");
let btn_search = document.getElementById("btn_search");


// console.log(products[0].nameData);
// console.dir(products[1]);






let copyProd = [];
let mainProd = copyProd.concat(products);


function shareRender(prod) {
    renderProd(prod);
    renderPag(prod);
    cheangePag(prod);
    setTimeout(e => showEmount(),10)
}

shareRender(mainProd);
searchProd(mainProd);

///////     FUNCTIONS
function firstI() {
    return current * per_page;
};

function secondI(i, prod) {
    return i < current * per_page + per_page && i < prod.length;
};


function renderProd(prod) {
    boxContent.innerHTML = "";
    for (let i = firstI(); secondI(i, prod); i++) {
        boxContent.appendChild(createCards.createCard(prod[i]))
    }
    countPercent_AddCurrency("boxSale","down_coast_shoe");
    setNameForPoupPup()
}

function renderPag(prod) {
    paginationBox.innerHTML = "";
    for (let i = 0; i < Math.ceil(prod.length / per_page); i++) {
        paginationBox.appendChild(Builder.createNewElement("div", "pag_item", i + 1, [{
            "name": "data-name",
            "value": i
        }]));
    }
    if (prod.length>0) {
        paginationBox.firstChild.classList.add("active_pag")
    }
}

function cheangePag(prod) {
    let countPag = Array.from(document.getElementsByClassName("pag_item"));
    countPag.map((el) => {
        el.addEventListener("click", (e) => {
            current = el.dataset.name;
            renderProd(prod);
            console.log("current " + current);
            // searchProd(prod, paginationBox);
            for(let i = 0; i < countPag.length; i++){
                countPag[i].classList.remove("active_pag");
            }
            e.target.classList.add("active_pag");

        })
    })
}

function optionSex(prod, sexTarget) {
    let filterProd = prod.filter(el => el.sex == sexTarget);
    return filterProd
}


changeMan.addEventListener("click", (e) => {
    current = 0;
    mainProd = optionSex(products, man);
    shareRender(mainProd);
    searchProd(mainProd);
    return mainProd
});
changeWoman.addEventListener("click", (e) => {
    current =0;
    mainProd = optionSex(products, woman);  // from modules
    shareRender(mainProd);
    searchProd(mainProd);
    return mainProd
});
changeChildren.addEventListener("click", (e) => {
    current =0;
    mainProd = optionSex(products, children);  // from modules
    shareRender(mainProd);
    searchProd(mainProd);
    return mainProd
});
changeAll.addEventListener("click", (e) => {
    // paginationBox.innerHTML ="";
    mainProd = products;
    shareRender(mainProd);
    searchProd(mainProd);
});


function search(prod) {
    current = 0; paginationBox.innerHTML = "";
    let searchRegExp = new RegExp(searchForm.value, ["ig"]);
    prod = prod.filter(el => searchRegExp.test(el.name));
    shareRender(prod);
    return mainProd = prod;
}

function searchProd(prod) {
    let searchProd;
    btn_search.addEventListener("click", (e) => {
        if (searchForm.value == "") {
            // boxContent.innerHTML ="hDJLHSDJKhLHJKD"
        } else {
            search(prod);
            console.log("kjjkj")
        }
        setNameForPoupPup()

    });

    searchForm.addEventListener("keypress", (e)=>{
        if(e.keyCode == 13){
            search(prod);
            console.log("kjjkj")
        }
    });
}




function showEmount() {
    document.getElementById("amountItem").innerHTML = "";
    if (mainProd.length>0) {
        document.getElementById("amountItem").innerHTML = "AMOUNT ON THIS PAGE: " + mainProd.length
    }else{
        document.getElementById("amountItem").innerHTML = "unfortunately nothing has found"
    }
}

/////////////////////////////



// add currency and percent !!!!!!
function countPercent_AddCurrency(boxSale, down_coast_shoe) {
    let saleForBlock = Array.from(document.getElementsByClassName(boxSale));
    for(let i = 0; i < saleForBlock.length; i++){
        if (saleForBlock[i].innerHTML == -Infinity){
            saleForBlock[i].style.display = "none"
        }
        else{
            saleForBlock[i].innerHTML= "-" + saleForBlock[i].innerHTML +"%"
        }
    }
    let firstPriceAdd = Array.from(document.getElementsByClassName(down_coast_shoe));
    for(let i = 0; i < firstPriceAdd.length; i++){
        if (firstPriceAdd[i].innerHTML != " "){
            firstPriceAdd[i].innerHTML = "$" + firstPriceAdd[i].innerHTML
        }
    }
}




////////////////////////
////////////////////////
//      //      //      // => about how CAN USE Event through ","

// let buttom_test = document.getElementById("buttom_test");
// buttom_test,addEventListener("click", (e) => {
//     let y = Array.from(document.getElementsByClassName("show_more"));
//     console.log(y[2].dataset.name)
// })

let cartCount =[]

function setNameForPoupPup() {
    let buttonsShowMore = Array.from(document.getElementsByClassName("show_more"));
    buttonsShowMore = buttonsShowMore.map((el)=>{
        el.addEventListener("click",(e)=>{
            for(let i = 0; i < products.length; i++){
                if (products[i].nameData == el.dataset.name){
                    createPouPup.createPouPup(products[i]);
                    // build Poupup =>
                    countPercent_AddCurrency(" sale_price_shoe_pou_pup", "first_price_shoe_pou_pup")
                    document.getElementById("PouPap").style.display = "block";
                    (function () {
                        document.getElementById("exit_button").addEventListener("click", (e)=>{
                            document.getElementById("PouPap").style.display = "none";
                        });
                        creatCart.createBoxWish(cartCount)
                    })();
                    // build Card =>
                    let buttonsBuy = document.getElementById("buton_buy");
                    buttonsBuy.addEventListener("click", (e)=>{
                        document.getElementById("cart_wrap_box").innerHTML=" ";
                        for(let i = 0; i < products.length; i++){
                            if (products[i].nameData == buttonsBuy.dataset.name){
                                cartCount.push(products[i]);
                                creatCart.createBoxWish(cartCount);
                                let navItemCart = document.getElementById("cart_summarise_prise").innerHTML = "$" +sumCartPrice(cartCount) // => top cart;
                                let navItemCart425px = document.getElementById("cart_summarise_prise425").innerHTML = "$" +sumCartPrice(cartCount) // => top cart;
                            }
                        }
                    });
                }
            }
        })
    })
}

// function => count common sum in cart   => ??? did not succeeded only use reduce ???
function sumCartPrice(cartCount){
    let x = [];
    let y = cartCount.map((el)=>{
        x.push(el.price)
    });
    x = x.reduce(function (a,b) {
        return a+b
    });
    return x
}




let testArr =[
    {"name":"Puma Duplex W", "price": 234.50, "priceDown": 255.00, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_6.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]},
    {"name":"Puma Duplex Split", "price": 57.50, "priceDown": 145.00, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_7.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [38, 41, 42]},
    {"name":"Nike Nexus", "price": 67.50, "priceDown": 87.50, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_8.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [43, 45]}
]

// function createListOfOrder(testArr){
//     for(let i = 0; i < testArr.length; i++){
//         console.log("jhkjh");
//         f(testArr, i);
//     }
// }
// createListOfOrder(testArr)


    createTableOfOrders.createTableOfOrders(testArr, 0);










// function f(testArr, numOfArr) {
//     for(let i = 0; i < testArr[numOfArr].size.length; i++){
//         let x= Builder.createNewElement("div", null, testArr[numOfArr].size[i]);
//         console.log(x)
//     }
// }



console.log(testArr[1].size)