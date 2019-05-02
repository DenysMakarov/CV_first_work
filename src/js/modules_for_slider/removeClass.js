export class RemoveClass {
    removeCl(arrEl) {
        for (let i = 0; i < arrEl.length; i++) {
            arrEl[i].classList.remove("slide_l");
            arrEl[i].classList.remove("slide_r");
            arrEl[i].classList.remove("centre_slide");
            arrEl[i].classList.remove("slide_ll");
            arrEl[i].classList.remove("slide_rr");
        }
    }
    // removeClassPag(pag){
    //     pag.classList.remove("active_pag");
    // }
}

