

export class Builder {

    static createNewElement(tag, classEl=null, innerEl=null, attrEl=null, imgEl=null, currency = null){
        let el = document.createElement(tag);
        el.className = (classEl) ? classEl : "";


        el.innerHTML = (innerEl) ? innerEl : "";
        el.style.backgroundImage = imgEl;

        if (attrEl) {
            attrEl.map((atteEl) => el.setAttribute(atteEl.name, atteEl.value));
        }
        return el
    }

    static appChild(parrent, children){
        children.map((el)=>{ parrent.appendChild(el) });
        return parrent
    }


    createCard(products) {
        let shoeBox = Builder.createNewElement("div", "box_shoe", null, null, null );
        shoeBox.style.backgroundImage = "url(images/"+products.imgEl+")";
        let coast = Builder.createNewElement("p", "main_coast_shoe", "$"+products.price, null);
        let boxSale = Builder.createNewElement("div", "boxSale", countPercent(products.priceDown, products.price), null);

        let coastDown = Builder.createNewElement("p", "down_coast_shoe", products.priceDown, null);

        let sex = Builder.createNewElement("p", "sex_box_shoe", products.sex, null);
        let title = Builder.createNewElement("h5", "name_box_shoe", products.name);

        let showItem = Builder.createNewElement("div", "show_more", "show more", null, null)

        let shoeBoxFull = Builder.appChild(shoeBox, [coast,coastDown, sex, title, boxSale, showItem])
        return shoeBoxFull
    }

    findeEl(classElemetns){
        let el = document.getElementsByClassName(classElemetns);
        return el = Array.from(el)
    }
}



function countPercent(price, newPrice){
  let x =  Math.ceil(100 - newPrice * 100 / price);
  return +x
}
