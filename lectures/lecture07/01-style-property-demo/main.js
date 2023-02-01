
const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
};

const makeBlue = () => {
    // your code here...
    document.querySelector('#section2').style.backgroundColor = 'blue';
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
};

const makeRainbow = () => {
    // your code here...
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const sections = document.querySelectorAll('.my-section')
    for (let i = 0; i < sections.length; i++) {
        const num = i % colors.length;
        sections[i].style.backgroundColor = colors[num];
    }
};

// const makeRainbow = () => {
//     // your code here...
//     document.querySelector('#section1').style.backgroundColor = 'red';
//     document.querySelector('#section2').style.backgroundColor = 'orange';
//     document.querySelector('#section3').style.backgroundColor = 'green';
//     document.querySelector('#section4').style.backgroundColor = 'blue';
// };

