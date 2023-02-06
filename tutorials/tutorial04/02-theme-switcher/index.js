const changeTheme = (themeName) => {
    document.querySelector('body').className = themeName;
};

const changeTheme1 = (ev) => {
    console.log(ev);
    const btn = ev.currentTarget;
    console.log(btn.dataset);
    document.querySelector('body').className = btn.dataset.theme;
    btn.innerHTML = btn.dataset.secret;
};


// const oceanTheme = ev => {
//    // your code here.
// };

// const desertTheme = ev => {
//    // your code here.
// };

// const highContrastTheme = ev => {
//     // your code here.
// }; 

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/