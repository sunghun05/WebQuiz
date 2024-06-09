const topicBu = document.querySelectorAll('.button');
const topics = Array('math', 'nature', 'universe', 'korean', 'english', 'capital'); //주제를 배열에 저장
const tpname = document.querySelector('#tpname');
const blogin = document.querySelector('#Blogin');
const login = document.querySelector('#login');
const q = document.forms;
const submit = document.getElementById('submit');
const cross = document.querySelector('#img');
// const scoreboard = document.querySelector('#scoreboard');
const _math = document.querySelector('#math');
const _nature = document.querySelector('#nature');
const _universe = document.querySelector('#universe');
const _korean = document.querySelector('#korean');
const _english = document.querySelector('#english');
const _capital = document.querySelector('#capital');
const container = document.querySelectorAll('.container');
// const ans = document.querySelector('.ans');

let rndnums = [];   //랜덤 숫자 저장
let result = [];    //사용자가 체크한 선지의 숫자 저장 (체점함수에서 답 리스트와 비교)
let a;                     //fetch 함수에서 전달받은 프로미스를 저장
let oploc;                 //선지를 랜덤으로 가져오기 위해 선지의 번호 저장
let answers;               //답을 배열에 저장

let mathScore = 0;  //각 점수 number로 지정, 초기화
let natureScore = 0;
let universeScore = 0;
let engScore = 0;
let koreanScore = 0;
let capitalScore = 0;

// let isLoad; //디버깅용



let i = 0;
let j = 0;

//init
let topic = topics[0];
tpname.innerHTML = topic;

window.addEventListener('load', (event) => {
    createQuestion(topic);
})
topicBu[0].addEventListener('click', (e) => {
    topic = topics[0];                                                              //메뉴에서 주제를 선택하고 감지 -> 주제 변수에 주제 저장, 주제에 관한 문제 생성 함수 실행
    tpname.innerHTML = topic;
    createQuestion(topic);
})
topicBu[1].addEventListener('click', (e) => {
    topic = topics[1];
    tpname.innerHTML = topic;
    createQuestion(topic);
})
topicBu[2].addEventListener('click', (e) => {
    topic = topics[2];
    tpname.innerHTML = topic;
    createQuestion(topic);
})
topicBu[3].addEventListener('click', (e) => {
    topic = topics[3];
    tpname.innerHTML = topic;
    createQuestion(topic);
})
topicBu[4].addEventListener('click', (e) => {
    topic = topics[4];
    tpname.innerHTML = topic;
    createQuestion(topic);
})
topicBu[5].addEventListener('click', (e) => {
    topic = topics[5];
    tpname.innerHTML = topic;
    createQuestion(topic);
})

async function createQuestion(topic) {  //선택된 주제를 인수로 전달받음
    // let ans;
    // isLoad = false;
    container[0].innerHTML = "";        //문제들을 생성하고 표시하기 전에 문제를 담는 컨테이너를 비움

    answers = [];   //정답 선지 저장 (초기화)
    rndnums = [];      //랜덤 숫자들을 저장 (초기화)
    let rand;       //랜덤 숫자

    for(i=0; i<5; i++) {
        a = [];         //프로미스(json 파일 데이터) 저장 배열
        do {
            rand = Math.floor(Math.random() * 10);      //json 파일에 저장되어있는 10개의 문제 중 한개를 고르기 위함
            if(rndnums.includes(rand)){continue;}           //중복된 숫자가 없을 때 까지 반복(while) 모든 랜덤 수를 이렇게 뽑는다.
            else{break;}                                    //중복되는지 확인하기 위해 .includes() 사용
        }while (true)

        rndnums.push(rand);             //랜덤 숫자가 중복되지 않을 때 까지 반복하므로 if문 없이 배열에 생성된 랜덤 숫자 push

        // console.log(rand);
        // console.log(rndnums);

        switch (topic) {                //주제에 따라 실행되는 함수가 다르다
            case 'capital':
                a = await getCap();     //getCap() 함수는 json파일에서 수도 관련 문제를 가져온다. 하지만 가져오는 함수는 비동기 함수이고 실행이 완료되기 전에 for문이 모두 돌아버리는 문제가 발생
                create(a, rand);        //await으로 파일 로드를 기다린 후 실행해야한다.
                break;
            case 'english':
                a = await getEng();
                create(a, rand);
                break;
            case 'korean':
                a = await getKor();
                create(a, rand);
                break;
            case 'math':
                // console.log(i+'i');
                // console.log(a);
                a = await getMath();
                create(a, rand);
                break;
            case 'nature':
                a = await getNature();
                create(a, rand);
                break;
            case 'universe':
                a = await getUniverse();
                create(a, rand);
                break;
        }
    }
}
async function getMath() {
    try {
        const res = await fetch('../sources/data/math.json');       //for문의 루프를 기다리기 위해 비동기 함수로 선언하고 await을 이용
        return await res.json();                                                    //가져온 json파일은 json형식에 맞게 parsing 필요
    } catch (error) {console.error("Error", error);}                                //에러에 대한 예외처리지만 웹에서 가져오는 api가 아니고 파일이 있으므로 역할을 하지는 않는다.
}                                                                                   //주제에 따라 각각 함수로 나눈 이유는 함수여야만 프로미스를 리턴할 수 있기 때문이라고 생각했다.
async function getNature() {
    try {
        const res = await fetch('../sources/data/nature.json');
        return await res.json();
    } catch (error) {console.error("Error", error);}
}
async function getUniverse() {
    try {
        const res = await fetch('../sources/data/universe.json');
        return await res.json();
    } catch (error) {console.error("Error", error);}
}
async function getKor() {
    try {
        const res = await fetch('../sources/data/korean.json');
        return await res.json();
    } catch (error) {console.error("Error", error);}
}
async function getEng() {
    try {
        const res = await fetch('../sources/data/english.json');
        return await res.json();
    } catch (error) {console.error("Error", error);}
}
async function getCap() {
    try {
        const res = await fetch('../sources/data/capital.json');
        return await res.json();
    } catch (error) {console.error("Error", error);}
}

function create(data, rand){                                                    //인수로 10개문제가 담긴 json파일과 랜덤 수를 가져옴
    oploc = [];   //선지 랜덤 섞기                                                        문제 생성 함수

    let rndloc;   //랜덤으로 선지를 가져와서 oploc에 저장
    for(let k=0; k<4; k++) {

        do {
            rndloc = Math.floor(Math.random() * 4);
            if (oploc.includes(rndloc)) {
                continue;
            } else {
                break;
            }
        } while (true)
        oploc.push(rndloc);
    }

    // console.log(oploc);
    container[0].insertAdjacentHTML("beforeend",
        `<div class="quiz">question  ${i+1}  : ${data[rand].question}<br><br><br>      
            <div class="ans" id="box${i}">
                <form id="f${i}">                                      
                    
                </form>
            </div>
        </div>`);//for 문 안에서 실행되므로 id에 번호를 넣어 요소 구분//json 파일에서 랜덤 문제를 가져옴
    let ans = document.querySelector(`#f${i}`)      //for문 안에서 실행되므로 i를 사용하여 form id를 가져옴
    for(j=0; j<4; j++) {
        // console.log(data[rand].options[oploc[j]], 'op', oploc[j], j);        //복잡한 구문 디버깅용
        // console.log(data[rand].answer,'an');
        ans.insertAdjacentHTML("beforeend",
            `<input type="radio" id='quiz${j}' name="quiz" value="${j}">
                        <label for="quiz${j}"> ${data[rand].options[oploc[j]]}</label><br><br>`
        );
        console.log(data[rand].options[oploc[j]], data[rand].answer);
        console.log(j);

        if(data[rand].options[oploc[j]].toString() == data[rand].answer){     //생성된 선택지와 답을 비교하여 답의 위치 저장
            answers.push(j);
        }
    }
    // isLoad = true;
    // console.log(answers);
}
function check(){               //채점 함수

    // console.log("checking");

    result = [];                        //사용자가 체크한 번호를 저장
    let isWrong = false;        //사용자가 체크하지 않은 문제가 있을때 true

    switch(topic){                      //초기화. 예를들어 주제가 math인데 다른 주제의 점수까지 초기화 하면 안되므로 switch문 사용
        case 'math':mathScore = 0;break;
        case 'nature':natureScore = 0;break;
        case 'universe':universeScore = 0;break;
        case 'english':engScore = 0;break;
        case 'korean':koreanScore = 0;break;
        case 'capital':capitalScore = 0;break;
    }

    for (let i=0; i<5; i++){        //문제를 체점
        if(q[i].quiz.value === undefined || q[i].quiz.value === ""){        //선택지를 체크하지 않았을때 isWrong = true
            isWrong = true;
        }else {
            result.push(parseInt(q[i].quiz.value));             //모두 체크했을 때 선택한 번호를 저장
            for(let j=0; j<4; j++) {
                q[i].quiz[j].disabled = true;                   //체점한 후 모든 선택지 비활성화
            }
        }
    }
    if(isWrong === true){alert("answer all question");}         //체크 안한 문제가 있을 시 alert
    else
    {
        for (let j = 0; j < result.length; j++) {     //정답 배열과 사용자가 선택한 답이 저장된 배열을 순회하면서 비교
            // console.log(j);
            if (result[j] === answers[j]) {               //값을 비교하여 맞으면 점수 +1
                switch(topic){                              //답이 맞았을 때 알맞는 주제에 1점 추가
                    case 'math':mathScore += 1;break;
                    case 'nature':natureScore += 1;break;
                    case 'universe':universeScore += 1;break;
                    case 'english':engScore += 1;break;
                    case 'korean':koreanScore += 1;break;
                    case 'capital':capitalScore += 1;break;
                }
            }
        }

        showAns();                          //체점 후 정답 공개
        // createQuestion(topic);
        // log();
    }

}
function showAns() {
    // container[0]
    for (let l=0; l<5; l++) {
        let ans = document.querySelector(`#box${l}`);       //선지를 나타내는 요소가 저장된 div옆에 정답 컨테이너 표시
        if(ans.childNodes.length == 3) {                                        //이미 답이 있는 상태에서 또 제출을 누르면 정답이 여러개 표시되는 문제 해결
            // console.log('3');
            ans.insertAdjacentHTML("beforeend",
                `<div style="color:red;">정답 : ${answers[l] + 1}번</div>`)    //정답표시
        }else{}
    }

}
function scoreLog(){        //log버튼에 점수 정보 표시
    _math.innerHTML = `math :    ${mathScore} 정답률 : ${mathScore/5*100}`;
    _korean.innerHTML = `korean  : ${koreanScore} 정답률 : ${koreanScore/5*100}`;
    _english.innerHTML = `english  : ${engScore} 정답률 : ${engScore/5*100}`;
    _capital.innerHTML = `capital  : ${capitalScore} 정답률 : ${capitalScore/5*100}`;
    _universe.innerHTML = `universe  : ${universeScore}정답률 : ${universeScore/5*100}`;
    _nature.innerHTML = `nature  : ${natureScore} 정답률 : ${natureScore/5*100}`;
}

submit.addEventListener('click', check);    //제출 버튼 감지 후 체점 함수 실행

login.addEventListener('click', log);       //히스토리(점수 기록창) 표시

cross.addEventListener('click', log);       //점수 기록창 닫기

blogin.style.display = "none";      //초기 점수 표시창 안보이게 설정

function log() {
    if(blogin.style.display === "block"){
        blogin.style.display = "none";      //점수 표시창이 보일땐 닫기, 안보이는 상황에서는 보이게 하여 하나의 함수에 기능 구현
    }else {
        blogin.style.display = "block";
        scoreLog();
    }
}


