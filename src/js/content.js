import {Data} from "./modules/data";
let products = Data.loadProducts();

import {Builder} from "./modules/build";
let createCards = new Builder();

// import {createPag} from "./modules/render_content";
// import {cheangePag} from "./modules/render_content";
// import {render} from "./modules/render_content";

// import {RenderContent} from "./modules/render_content";
// let renderContent = new RenderContent;



let boxContent = document.getElementById("range_content_box");
let paginationBox = document.getElementById("pag_box");
console.log(boxContent)
export let per_page = 6;
export let current = 0;


render(products);
createPag(products);
cheangePag(products);


function firstI() {
    return current * per_page;
};

function secondI(i, array_products) {
    return i < current * per_page + per_page && i < array_products.length;
};

///////
function render(array_products) {
    document.getElementById("range_content_box").innerHTML = "";
    for (let i = firstI(); secondI(i, array_products); i++) {
        boxContent.appendChild(createCards.createCard(products[i]))
    }
    console.log(boxContent)
}
///////
function createProducts() {
    for (let i = 0; i < products.length; i++) {
        productsBox.appendChild(createCards.createCard(products[i]))
    }
}
///////
function createPag(prod) {
    for (let i = 0; i < Math.ceil(prod.length / per_page); i++) {
        paginationBox.appendChild(Builder.createNewElement("div", "pag_item", i + 1, [{"name": "data-name", "value": i}]));
    }
}

function cheangePag(prod){
    Array.from(document.getElementsByClassName("pag_item")).map((el)=>{
        el.addEventListener("click", (e)=>{
            current = el.dataset.name;
            render(prod);
            console.log("current "+current)
        })
    })
}


