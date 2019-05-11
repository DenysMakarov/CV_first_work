import {Builder} from "./build";
import {current, per_page} from "../content";
let createCards = new Builder();



export function firstI(current, per_page) {
    return current * per_page;
};

export function secondI(i, array_products, current, per_page) {
    return i < current * per_page + per_page && i < array_products.length;
};

export function createPag(prod, paginationBox) {
    for (let i = 0; i < Math.ceil(prod.length / per_page); i++) {
        paginationBox.appendChild(Builder.createNewElement("div", "pag_item", i + 1, [{"name": "data-name", "value": i}]));
    }
};

export function renderProducts(array_products, current, per_page, boxContent) {
    document.getElementById("range_content_box").innerHTML = "";
    for (let i = firstI(current, per_page); secondI(i, array_products, current, per_page); i++) {
        boxContent.appendChild(createCards.createCard(array_products[i]))
    }
    // console.log(boxContent)
}

//// FILTER
export let sex = "sex", man = "man", woman = "woman", children ="children"
export function filterProd(products, sex,  targetName) {
    let fillProd;
    fillProd = products.filter(el => el.sex == targetName);
    return fillProd;
}



