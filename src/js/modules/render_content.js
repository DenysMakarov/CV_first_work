import {Builder} from "./build";
let createCards = new Builder();


export function createPag(prod, paginationBox, per_page) {
    for (let i = 0; i < Math.ceil(prod.length / per_page); i++) {
        paginationBox.appendChild(Builder.createNewElement("div", "pag_item", i + 1, [{"name": "data-name", "value": i}]));
    }
}

export function cheangePag(prod, current){
    Array.from(document.getElementsByClassName("pag_item")).map((el)=>{
        el.addEventListener("click", (e)=>{
            current = el.dataset.name;
            render(prod);
            console.log("current "+current)
        })
    })
}

export function render(array_products, boxContent) {
    document.getElementById("range_content_box").innerHTML = "";
    for (let i = firstI(); secondI(i, array_products); i++) {
        boxContent.appendChild(createCards.createCard(products[i]))
    }
    console.log(boxContent)
}


function firstI() {
    return current * per_page;
};

function secondI(i, array_products) {
    return i < current * per_page + per_page && i < array_products.length;
};

