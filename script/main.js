const main = document.querySelector(".title");
const title = document.querySelector('.head');
const bar = document.querySelector('#mar');
const login = document.querySelector('#login');
let f_s;
// let wheel = [0, ];

window.addEventListener('scroll', (event) => {
    console.log(bar.getBoundingClientRect().top);
    f_s = title.style.fontSize;
    // let status = event.deltaY;
    // len = wheel.length;
    // wheel.push(status);
    // title.style.margin = '0px';
    if(bar.getBoundingClientRect().top >= 140){//down
        // title.style.margin = '0px';
        // title.style.visibility = 'visible';
        title.style.fontSize = "200px";

    }
    if (bar.getBoundingClientRect().top <= 250){//up
        /*title.style.margin = '0px';*/
        // main.display = '-webkit-inline-box';
        title.style.fontSize = "60px";
    }
})

