import {sumCartPrice} from "../content";

export class Builder {

    static createNewElement(tag, classEl = null, innerEl = null, attrEl = null, imgEl = null, currency = null) {
        let el = document.createElement(tag);
        el.className = (classEl) ? classEl : "";
        el.innerHTML = (innerEl) ? innerEl : "";
        el.style.backgroundImage = imgEl;

        if (attrEl) {
            attrEl.map((atteEl) => el.setAttribute(atteEl.name, atteEl.value));
        }
        return el
    }

    static appChild(parrent, children) {
        children.map((el) => {
            parrent.appendChild(el)
        });
        return parrent
    }


    createCard(products) {
        let shoeBox = Builder.createNewElement("div", "box_shoe", null, null, null);
        shoeBox.style.backgroundImage = "url(images/" + products.imgEl + ")";
        let coast = Builder.createNewElement("p", "main_coast_shoe", "$" + products.price, null);
        let boxSale = Builder.createNewElement("div", "boxSale", countPercent(products.priceDown, products.price), null);

        let coastDown = Builder.createNewElement("p", "down_coast_shoe", products.priceDown, null);

        let sex = Builder.createNewElement("p", "sex_box_shoe", products.sex, null);
        let title = Builder.createNewElement("h5", "name_box_shoe", products.name);

        let showItem = Builder.createNewElement("div", "show_more", "show more", [{
            "name": "data-name",
            "value": products.nameData
        }], null)

        let shoeBoxFull = Builder.appChild(shoeBox, [coast, coastDown, sex, title, boxSale, showItem])
        return shoeBoxFull
    }

    //////

    /////

    createPouPup(product) {
        // Left box //
        let pTitle = Builder.appChild(Builder.createNewElement("p", "title_poupap desPouPup"), [Builder.createNewElement("span", "spanFirst", "Title: "), Builder.createNewElement("span", null, product.name)]);
        let pSex = Builder.appChild(Builder.createNewElement("p", "sex_poupap desPouPup"), [Builder.createNewElement("span", "spanFirst", "Sex: "), Builder.createNewElement("span", null, product.sex)]);
        let pSize = Builder.appChild(Builder.createNewElement("p", "size_poupap desPouPup"), [Builder.createNewElement("span", "spanFirst", "Size: "), Builder.createNewElement("span", null, product.size)]);
        let pDescr = Builder.appChild(Builder.createNewElement("p", "description_poupap desPouPup"), [Builder.createNewElement("span", "spanFirst", "Description: "), Builder.createNewElement("span", null, product.desc)]);
        let buttonBuy = Builder.createNewElement("button", "buton_buy", "BUY NOW", [{
            "name": "id",
            "value": "buton_buy"
        }, {"name": "data-name", "value": product.nameData}]);
        let leftBox = Builder.appChild(Builder.createNewElement("div", "content_PouPap_box_left"), [pTitle, pSex, pSize, pDescr, buttonBuy]);
        // Right box //
        let exitButton = Builder.appChild(Builder.createNewElement("div", "exit_button", null, [{
            "name": "id",
            "value": "exit_button"
        }]), [Builder.createNewElement("div", "lineOne"), Builder.createNewElement("div", "lineSecond")]);
        let rightBox = Builder.appChild(Builder.createNewElement("div", "content_PouPap_box_right", null, [{
            "name": "id",
            "value": "content_PouPap_box_right"
        }]), [exitButton, Builder.createNewElement("div", "main_price_shoe_pou_pup", "$" + product.price), Builder.createNewElement("div", "first_price_shoe_pou_pup", product.priceDown), Builder.createNewElement("div", "sale_price_shoe_pou_pup", countPercent(product.priceDown, product.price)), Builder.createNewElement("div", "cart_wrap_box", null, [{
            "name": "id",
            "value": "cart_wrap_box"
        }])]);
        rightBox.style.backgroundImage = "url(images/" + product.imgEl + ")"

        let pouPupContent = Builder.appChild(Builder.createNewElement("div", "content_PouPap"), [leftBox, rightBox]);
        let pouPup = document.getElementById("PouPap").innerHTML = "";
        pouPup = Builder.appChild(document.getElementById("PouPap"), [pouPupContent]);

        return pouPup
    }

    createBoxWish(cartCount) {

        let cartWrapBox = document.getElementById("cart_wrap_box");
        let cartBox = Builder.appChild(Builder.createNewElement("div", "cartBox", null, [{
            "name": "id",
            "value": "cartBox"
        }]), [Builder.createNewElement("i", "fas fa-cart-arrow-down"), Builder.createNewElement("p", "cordCount", cartCount.length)]);
        return cartWrapBox.appendChild(cartBox)
    }

    ///////////////////////

    createTableOfOrders(prod, numOfArr) {
        let ListOfOrdersWrap = document.getElementById("box_of_cart_wrap");

        for(let i = 0; i < prod.length; i++){


        }


        let SelectSize = Builder.createNewElement("select", "select_size");
        for (let i = 0; i < prod[numOfArr].size.length; i++) {
            let x = Builder.createNewElement("option", "option", prod[numOfArr].size[i]);
            SelectSize.appendChild(x)
        }
        let itemSizeBox = Builder.appChild(Builder.createNewElement("div", "item_of_card_desc item_of_card_size"),[Builder.createNewElement("span"), SelectSize])
        let itemOfCardTitle =  Builder.appChild(Builder.createNewElement("div", "item_of_card_desc item_of_card_title"),[Builder.createNewElement("span", null, "Title: "), Builder.createNewElement("span", "item_of_card_second_text", prod[numOfArr].name)]);
        let itemOfCardPrice =  Builder.appChild(Builder.createNewElement("div", "item_of_card_desc item_of_card_price"),[Builder.createNewElement("span", null, "Price: "), Builder.createNewElement("span", "item_of_card_second_text", prod[numOfArr].price)])
        let buttonRemoveItem = Builder.createNewElement("div", "remove_item_card");

        let CardBlockLeft = Builder.appChild(Builder.createNewElement("div", "item_of_card_block_left"), [itemOfCardTitle, itemOfCardPrice, itemSizeBox, buttonRemoveItem]);
        let CardBlockRight = Builder.appChild(Builder.createNewElement("div", "item_of_card_block_right"), [Builder.appChild(Builder.createNewElement("div", "item_of_card_desc item_of_card_title"), [Builder.createNewElement("span", null, "Description: "), Builder.createNewElement("span", "item_of_card_second_text", prod[numOfArr].desc)])])

        let cartItem = Builder.appChild(Builder.createNewElement("div", "item_of_card"), [CardBlockLeft, Builder.createNewElement("div", "item_of_card_block_centre"), CardBlockRight]);
        let cartItemBlockTop = Builder.appChild(Builder.createNewElement("div", "cartItem"), [cartItem])
///


        let commonGoods = Builder.appChild(Builder.createNewElement("p"), [Builder.createNewElement("span", "item_block_bottom_desc_first", "GOODS:"), Builder.createNewElement("span", "item_block_bottom_desc_second", prod.length + "items")])
        let commonSum = Builder.appChild(Builder.createNewElement("p"), [Builder.createNewElement("span", "item_block_bottom_desc_first", "SUM: "), Builder.createNewElement("span", "item_block_bottom_desc_second", "$ " + sumCartPrice(prod))])

        let cartItemBlockBottom = Builder.appChild(Builder.createNewElement("div", "item_block_bottom" ), [commonGoods, commonSum] )





        console.log(cartItemBlockBottom)
    }


    findeEl(classElemetns) {
        let el = document.getElementsByClassName(classElemetns);
        return el = Array.from(el)
    }
}


function countPercent(price, newPrice) {
    let x = Math.ceil(100 - newPrice * 100 / price);
    return +x
}


