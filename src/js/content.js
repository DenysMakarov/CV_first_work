import {Data} from "./modules/data";
let products = Data.loadProducts();

import {Builder} from "./modules/build";
let createCards = new Builder();

import {sex, man, woman, children} from "./modules/render_content"; ////

import {createPag} from "./modules/render_content";
import {renderProducts} from "./modules/render_content";
import {filterProd} from "./modules/render_content";


let boxContent = document.getElementById("range_content_box");
let paginationBox = document.getElementById("pag_box");
// console.log(boxContent);
export let per_page = 6;
export let current = 0;


renderProducts(products, current, per_page, boxContent); // from modules
createPag(products, paginationBox); // from modules
cheangePag(products);




///////
// export function renderProducts(array_products) {
//     document.getElementById("range_content_box").innerHTML = "";
//     for (let i = firstI(current, per_page); secondI(i, array_products, current, per_page); i++) {
//         boxContent.appendChild(createCards.createCard(products[i]))
//     }
//     console.log(boxContent)
// }
///////

///////
function cheangePag(prod){
    Array.from(document.getElementsByClassName("pag_item")).map((el)=>{
        el.addEventListener("click", (e)=>{
            current = el.dataset.name;
            renderProducts(prod, current, per_page, boxContent);
            console.log("current "+current)
        })
    })
}



/////// TEST

let cMan = document.getElementById("buttom_man").addEventListener("click",(e)=>{
    fill(products, sex, man);
});

let cWan = document.getElementById("buttom_woman").addEventListener("click",(e)=>{
    fill(products, sex, woman);
});



function fill(products, sex, gander){

    let productFilter = filterProd(products, sex, gander);
    paginationBox.innerHTML = ""
    console.log(productFilter)
    renderProducts(productFilter, current, per_page, boxContent);
    createPag(productFilter, paginationBox); // from modules
    cheangePag(productFilter);

}

fill(products, sex, woman);




