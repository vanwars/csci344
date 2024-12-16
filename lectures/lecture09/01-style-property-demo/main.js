const changeBg = (sel, color) => {
    document.querySelector(sel).style.backgroundColor = color;
};

const clearBgs = () => {
    const divs = document.querySelectorAll('.my-section');
    for (const div of divs) {
        div.style.backgroundColor = 'transparent';
    }

    // document.querySelector("#section1").style.backgroundColor = "transparent";
    // document.querySelector("#section2").style.backgroundColor = "transparent";
    // document.querySelector("#section3").style.backgroundColor = "transparent";
    // document.querySelector("#section4").style.backgroundColor = "transparent";
};
