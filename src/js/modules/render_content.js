import {Builder} from "./build";
// import {current, per_page} from "../content";
let createCards = new Builder();

// import {cheangePag} from "../content";
// import {searchForm, btn_search} from "../content";


export let per_page = 6;
export let current = 0;
export let sex = "sex", man = "man", woman = "woman", children ="children";
let changeMan = document.getElementById("buttom_man");
let changeWoman = document.getElementById("buttom_woman");
let changeAll = document.getElementById("buttom_all");


// export function firstI(current, per_page) {
//     return current * per_page;
// };
//
// export function secondI(i, prod, current, per_page) {
//     return i < current * per_page + per_page && i < prod.length;
// };

///////////////////////////////////////////////////////////////

// export function renderProd(prod) {
//     document.getElementById("range_content_box").innerHTML = "";
//     for (let i = firstI(current, per_page); secondI(i, prod, current, per_page); i++) {
//         document.getElementById("range_content_box").appendChild(createCards.createCard(prod[i]))
//     }
// }
// export function renderPag(prod, paginationBox) {
//     document.getElementById("pag_box").innerHTML = "";
//     for (let i = 0; i < Math.ceil(prod.length / per_page); i++) {
//         document.getElementById("pag_box").appendChild(Builder.createNewElement("div", "pag_item", i + 1, [{"name": "data-name", "value": i}]));
//     }
// }


// export function optionSex(prod, sexTarget) {
//     let filterProd = prod.filter(el => el.sex == sexTarget);
//     return filterProd
// }

/////

// export function cheangePag(prod, paginationBox){
//     Array.from(document.getElementsByClassName("pag_item")).map((el)=>{
//         el.addEventListener("click", (e)=>{
//             current = el.dataset.name;
//             renderProd(prod);    // from modules
//             console.log("current "+current)
//             searchProd(prod, paginationBox);
//         })
//     })
// }


//// SEARCH
// export function searchProd(prod) {
//     let btn_search = document.getElementById("btn_search");
//     let searchForm = document.getElementById("search");
//     let paginationBox = document.getElementById("pag_box");
//
//     let searchProd;
//
//     btn_search.addEventListener("click", (e)=>{
//         if (searchForm.value == ""){
//             console.log("nothing")
//         } else{
//             current = 0;
//             paginationBox.innerHTML ="";
//             console.log(prod);
//             let searchRegExp = new RegExp(searchForm.value, "i");
//             searchProd = prod.filter(el => searchRegExp.test(el.name));
//             //
//                 console.log(searchProd);
//                 renderProd(searchProd);
//                 renderPag(searchProd, paginationBox);
//             cheangePag(searchProd, paginationBox)
//         }
//     })
// }

