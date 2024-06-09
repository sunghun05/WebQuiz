
const title = document.querySelector('.head');
const bar = document.querySelector('#mar');//보이지 않는 <hr>을 bar로 가져오고 이를 통해 화면이 얼마나 내려가있는지 측정
let f_s;    //fontSize를 지정하는 객체를 인스턴스화 (변수에 저장)

window.addEventListener('scroll', (event) => {  //스크롤 발생 이벤트 유형이 'wheel'이 아닌 이유는 모바일에서 wheel을 감지하지 못하기 때문
    // console.log(bar.getBoundingClientRect().top);
    f_s = title.style.fontSize;
    if(bar.getBoundingClientRect().top > 200){//down    화면이 특정 위치까지 올라감을 측정
        //console.log("up")
        title.style.fontSize = "200px";
    }
    if (bar.getBoundingClientRect().top <= 200){//up    화면이 특정 위치까지 내려감을 측정
        //console.log("down")

        title.style.fontSize = "60px";
    }
})

