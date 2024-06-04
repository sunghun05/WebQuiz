const main = document.querySelector(".title");
const title = document.querySelector('.head');
const bar = document.querySelector('#mar');
const login = document.querySelector('#login');
let f_s;
let wheel = [0, ];
let len ;
// let sum = 0;

window.addEventListener('wheel', (event) => {
    // console.log(bar.getBoundingClientRect().top);
    f_s = title.style.fontSize;
    let status = event.deltaY;
    len = wheel.length;
    wheel.push(status);
    // title.style.margin = '0px';
    if(wheel[len] < 0 && bar.getBoundingClientRect().top >= 100){//down
        // title.style.margin = '0px';
        title.style.visibility = 'visible';
        title.style.fontSize = "200px";

    } else if (wheel[len] > 0){//up
        /*title.style.margin = '0px';*/
        main.display = '-webkit-inline-box';
        title.style.fontSize = "60px";
    }
})


