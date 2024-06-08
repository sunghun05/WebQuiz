const main = document.querySelector(".title");
const title = document.querySelector('.head');
const bar = document.querySelector('#mar');
let f_s;

window.addEventListener('scroll', (event) => {
    // console.log(bar.getBoundingClientRect().top);
    f_s = title.style.fontSize;
    if(bar.getBoundingClientRect().top > 200){//down
        //console.log("up")
        title.style.fontSize = "200px";
    }
    if (bar.getBoundingClientRect().top <= 200){//up
        //console.log("down")

        title.style.fontSize = "60px";
    }
})

