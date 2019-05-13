import {Data} from "./modules/data";
let products = Data.loadProducts();

import {Builder} from "./modules/build";
let createCards = new Builder();

import {sex, man, woman, children} from "./modules/render_content"; ////

/////////
// import {createPag} from "./modules/render_content";
// import {renderProducts} from "./modules/render_content";
// import {fillterProducts} from "./modules/render_content";
// import {filterProd} from "./modules/render_content";
// import {search} from "./modules/render_content";
/////////
import {renderProd} from "./modules/render_content";
import {renderPag} from "./modules/render_content";
import {optionSex} from "./modules/render_content";
import {searchProd} from "./modules/render_content";


//// => all import from render_content

let boxContent = document.getElementById("range_content_box");
let paginationBox = document.getElementById("pag_box");

let changeMan = document.getElementById("buttom_man");
let changeWoman = document.getElementById("buttom_woman");
let changeAll = document.getElementById("buttom_all");
// let searchForm = document.getElementById("search");
// let btn_search = document.getElementById("btn_search")

let x = [];
let mainProd = x.concat(products);


export let per_page = 6;
export let current = 0;


function shareRender(products, boxContent, paginationBox) {
    renderProd(products, boxContent);
    renderPag(products, paginationBox);
    cheangePag(products);
}



shareRender(mainProd, boxContent, paginationBox);
searchProd(mainProd, boxContent, paginationBox, current);



///////
// function searchProd(prod, paginationBox) {
//     let btn_search = document.getElementById("btn_search");
//     let searchForm = document.getElementById("search");
//     current = 0;
//
//     let searchProd;
//
//     btn_search.addEventListener("click", (e)=>{
//         if (searchForm.value == ""){
//             console.log("nothing")
//         } else{
//             paginationBox.innerHTML ="";
//             console.log(prod);
//             let searchRegExp = new RegExp(searchForm.value, "i");
//             let x;
//             x = prod.filter(el => searchRegExp.test(el.name));
//             //
//             console.log(x);
//             renderProd(x);
//             renderPag(x, paginationBox);
//         }
//     })
// }
///////
export function cheangePag(prod){
    Array.from(document.getElementsByClassName("pag_item")).map((el)=>{
        el.addEventListener("click", (e)=>{
            current = el.dataset.name;
            renderProd(prod);    // from modules
            console.log("current "+current)
            searchProd(prod, boxContent, paginationBox);
        })
    })
}

changeMan.addEventListener("click",(e)=>{
    current =0; mainProd = optionSex(products, man);  // from modules
    shareRender(mainProd, boxContent, paginationBox);
    searchProd(mainProd, boxContent, paginationBox)
    return mainProd
});

changeWoman.addEventListener("click",(e)=>{
    current =0; mainProd = optionSex(products, woman);  // from modules
    shareRender(mainProd, boxContent, paginationBox);
    searchProd(mainProd, boxContent, paginationBox)
    return mainProd
});

changeAll.addEventListener("click",(e)=>{
    // paginationBox.innerHTML ="";
    mainProd = products;
    shareRender(mainProd, boxContent, paginationBox);
    searchProd(mainProd, boxContent, paginationBox)
    console.log(mainProd)
});

let buttom_test = document.getElementById("buttom_test")
    buttom_test.addEventListener("click", (e)=>{
        console.log(mainProd);
        console.log(current)
    })

// let x = filterProd(products, sex, man)
// console.log(x)
