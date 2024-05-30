const title = document.querySelector('.head');
let f_s;

let wheel = [0, ];
let len ;
window.addEventListener('wheel', (event) => {
    f_s = title.style.fontSize;
    let status = event.deltaY;
    len = wheel.length;
    wheel.push(status);
    console.log(wheel);
    
    if(wheel[len] < 0){//down
        
        title.style.fontSize = "150px";
        console.log("down");
        
    } else if (wheel[len] > 0){//up
        
        title.style.fontSize = "large";
    }
})
