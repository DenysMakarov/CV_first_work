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

let x = [];
let mainProd = x.concat(products);


function shareRender(mainProd) {
    renderProd(mainProd);
    renderPag(mainProd);
    cheangePag(mainProd);
    searchProd(mainProd);
    setTimeout(e => showEmount(),10)
}

shareRender(mainProd);


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
}

function renderPag(prod) {
    paginationBox.innerHTML = "";
    for (let i = 0; i < Math.ceil(prod.length / per_page); i++) {
        paginationBox.appendChild(Builder.createNewElement("div", "pag_item", i + 1, [{
            "name": "data-name",
            "value": i
        }]));
    }
}

function cheangePag(prod) {
    Array.from(document.getElementsByClassName("pag_item")).map((el) => {
        el.addEventListener("click", (e) => {
            current = el.dataset.name;
            renderProd(prod);
            console.log("current " + current);
            // searchProd(prod, paginationBox);
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
    console.log(mainProd)
});


function search(prod) {
    current = 0; paginationBox.innerHTML = "";
    let searchRegExp = new RegExp(searchForm.value, "i");
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
            search(prod)
        }
    });

    searchForm.addEventListener("keypress", (e)=>{
        if(e.keyCode == 13){
            search(prod)
        }
    });
}




function showEmount() {
    document.getElementById("amountItem").innerHTML = "";
    document.getElementById("amountItem").innerHTML = "Amount " + mainProd.length
}

/////////////////////////////

let buttom_test = document.getElementById("buttom_test")
buttom_test.addEventListener("click", (e) => {
    console.log(mainProd);
    console.log(current)
})