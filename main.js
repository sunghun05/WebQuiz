const main = document.querySelector(".title");
const title = document.querySelector('.head');
const bar = document.querySelector('#mar');
const login = document.querySelector('#login');
const b = document.querySelectorAll(".button");
let f_s;
let wheel = [0, ];
let len ;

let sum = 0;
window.addEventListener('wheel', (event) => {
    console.log(bar.getBoundingClientRect().top);
    f_s = title.style.fontSize;
    let status = event.deltaY;
    len = wheel.length;
    wheel.push(status);


    if(wheel[len] < 0 && bar.getBoundingClientRect().top >= 60){//down

        title.style.visibility = 'visible';
        title.style.fontSize = "150px";

    } else if (wheel[len] > 0){//up
        main.display = '-webkit-inline-box';
        title.style.fontSize = "xx-large";
    }
    if(bar.getBoundingClientRect().top < 0){

    }
})
b.addEventListener('click', (ev) => {
    console.log(b.value);
})

