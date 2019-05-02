
//
//
export class CreateClasses {


    createClasses(arrSlider,current) {
        arrSlider[current-1].classList.add("slide_l");
        arrSlider[current-2].classList.add("slide_ll");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[current+1].classList.add("slide_r");
        arrSlider[current+2].classList.add("slide_rr");
    }

    createLeftPosition(arrSlider,current){
        arrSlider[current-1].classList.add("slide_l");
        arrSlider[current+1].classList.add("slide_r");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[current+2].classList.add("slide_rr");
        arrSlider[arrSlider.length-1].classList.add("slide_ll");
    }

    createLeftLeftPosition(arrSlider,current){
        arrSlider[arrSlider.length-1].classList.add("slide_l");
        arrSlider[current+1].classList.add("slide_r");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[current+2].classList.add("slide_rr");
        arrSlider[arrSlider.length-2].classList.add("slide_ll");
    }
    createLastLeftPosition(arrSlider,current){
        arrSlider[current-1].classList.add("slide_l");
        arrSlider[0].classList.add("slide_r");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[1].classList.add("slide_rr");
        arrSlider[current-2].classList.add("slide_ll");
    }
    createPreLastLeftPosition(arrSlider,current){
        arrSlider[current-1].classList.add("slide_l");
        arrSlider[current+1].classList.add("slide_r");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[0].classList.add("slide_rr");
        arrSlider[current-2].classList.add("slide_ll");
    }

}


