const changeElementStyle = (newColor, selector) => {
    let el = document.querySelector(selector);
    el.style.backgroundColor = newColor;
    el.style.fontSize = "50px";
};
