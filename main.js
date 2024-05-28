const title = document.querySelector('.head h1');


let wheel = [0, ];
let len ;
window.addEventListener('wheel', (event) => {
    let status = event.deltaY;
    len = wheel.length;
    wheel.push(status);
    // console.log(wheel);
    // console.log(wheel[len]-wheel[len-1]);
    if(wheel[len]-wheel[len-1] > 0){
        console.log("up");

    } else if (wheel[len]-wheel[len-1] < 0){
        title.style.fontSize = 5+'px';
    }
})
