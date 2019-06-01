import {Data} from "./modules/data";
let products = Data.loadProducts();

import {Builder} from "./modules/build";
let createCards = new Builder();

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
    countPercent_AddCurrency()
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
        document.getElementById("amountItem").innerHTML = "Amount " + mainProd.length
    }else{
        document.getElementById("amountItem").innerHTML = "unfortunately nothing has found"
    }
}

/////////////////////////////

let buttom_test = document.getElementById("buttom_test");
buttom_test,addEventListener("click", (e) => {

    // console.log(mainProd);
    // console.log(current)
})


// add currency and precent !!!!!!
function countPercent_AddCurrency() {
    let saleForBlock = Array.from(document.getElementsByClassName("boxSale"));
    for(let i = 0; i < saleForBlock.length; i++){
        if (saleForBlock[i].innerHTML == -Infinity){
            saleForBlock[i].style.display = "none"
        }
        else{
            saleForBlock[i].innerHTML= "-" + saleForBlock[i].innerHTML +"%"
        }
    }
    let firstPriceAdd = Array.from(document.getElementsByClassName("down_coast_shoe"));
    for(let i = 0; i < firstPriceAdd.length; i++){
        if (firstPriceAdd[i].innerHTML != " "){
            firstPriceAdd[i].innerHTML = "$" + firstPriceAdd[i].innerHTML
        }
    }
}

let x = Array.from(document.getElementsByClassName("show_more"));
for(let i = 0; i < x.length; i++){
    x[i].setAttribute("data-name", i)
}

