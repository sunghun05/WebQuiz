const topicBu = document.querySelectorAll('.button');
const topics = Array('math', 'nature', 'universe', 'korean', 'english', 'capital');
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
// const ans = document.querySelector('.ans');

let logg = [];
let result = [];
let a;
let oploc;
let answers;

let mathScore = 0;
let natureScore = 0;
let universeScore = 0;
let engScore = 0;
let koreanScore = 0;
let capitalScore = 0;

let isLoad;
let ischecked;


const container = document.querySelectorAll('.container');
let i = 0;
let j = 0;

//init
let topic = topics[0];
tpname.innerHTML = topic;

window.addEventListener('load', (event) => {
    createQuestion(topic);
})
topicBu[0].addEventListener('click', (e) => {
    topic = topics[0];
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

async function createQuestion(topic) {
    // let ans;
    isLoad = false;
    container[0].innerHTML = "";

    answers = [];   //정답 선지 저장
    logg = [];
    let rand;

    for(i=0; i<5; i++) {
        a = [];
        do {
            rand = Math.floor(Math.random() * 10);
            if(logg.includes(rand)){continue;}
            else{break;}
        }while (true)

        logg.push(rand);

        // console.log(rand);
        // console.log(logg);

        switch (topic) {
            case 'capital':
                a = await getCap();
                create(a, rand);
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
    //

}
async function getMath() {
    try {
        const res = await fetch('../sources/data/math.json');
        return await res.json();
    } catch (error) {console.error("Error", error);}
}
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

function create(data, rand){
    oploc = [];   //선지 랜덤 섞기

    let rndloc;
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
        </div>`);
    let ans = document.querySelector(`#f${i}`)
    for(j=0; j<4; j++) {
        // console.log(data[rand].options[oploc[j]], 'op', oploc[j], j);
        // console.log(data[rand].answer,'an');
        ans.insertAdjacentHTML("beforeend",
            `<input type="radio" id='quiz${j}' name="quiz" value="${j}">
                        <label for="quiz${j}"> ${data[rand].options[oploc[j]]}</label><br><br>`
        );
        if(data[rand].options[oploc[j]] === data[rand].answer){     //생성된 선택지와 답을 비교하여 답의 위치 저장
            answers.push(j);

        }
    }
    isLoad = true;
    // console.log(answers);
}
function check(){

    console.log("checking");

    result = [];
    let isWrong = false;

    switch(topic){
        case 'math':mathScore = 0;break;
        case 'nature':natureScore = 0;break;
        case 'universe':universeScore = 0;break;
        case 'english':engScore = 0;break;
        case 'korean':koreanScore = 0;break;
        case 'capital':capitalScore = 0;break;
    }

    for (let i=0; i<5; i++){
        if(q[i].quiz.value === undefined || q[i].quiz.value === ""){
            isWrong = true;
        }else {
            result.push(parseInt(q[i].quiz.value));
            for(let j=0; j<4; j++) {
                q[i].quiz[j].disabled = true;
            }
        }
    }
    if(isWrong === true){alert("answer all question");}
    else
    {
        for (let j = 0; j < result.length; j++) {     //정답 배열과 사용자가 선택한 답이 저장된 배열을 순회하면서 비교
            // console.log(j);
            if (result[j] === answers[j]) {               //값을 비교하여 맞으면 점수 +1
                switch(topic){
                    case 'math':mathScore += 1;break;
                    case 'nature':natureScore += 1;break;
                    case 'universe':universeScore += 1;break;
                    case 'english':engScore += 1;break;
                    case 'korean':koreanScore += 1;break;
                    case 'capital':capitalScore += 1;break;
                }
            }
        }

        showAns();
        // createQuestion(topic);
        // log();
    }

}
function showAns() {
    // container[0]
    for (let l=0; l<5; l++) {
        let ans = document.querySelector(`#box${l}`);
        if(ans.childNodes.length == 3) {
            console.log('3')
            ans.insertAdjacentHTML("beforeend",
                `<div style="color:red;">정답 : ${answers[l] + 1}번</div>`)
        }else{}
        // q[l].quiz[l].disabled = true;
    }

}
function scoreLog(){
    _math.innerHTML = `math :    ${mathScore} 정답률 : ${mathScore/5*100}`;
    _korean.innerHTML = `korean  : ${koreanScore} 정답률 : ${koreanScore/5*100}`;
    _english.innerHTML = `english  : ${engScore} 정답률 : ${engScore/5*100}`;
    _capital.innerHTML = `capital  : ${capitalScore} 정답률 : ${capitalScore/5*100}`;
    _universe.innerHTML = `universe  : ${universeScore}정답률 : ${universeScore/5*100}`;
    _nature.innerHTML = `nature  : ${natureScore} 정답률 : ${natureScore/5*100}`;
}

submit.addEventListener('click', check);

login.addEventListener('click', log);

cross.addEventListener('click', log);

blogin.style.display = "none";

function log() {
    if(blogin.style.display === "block"){
        blogin.style.display = "none";
    }else {
        blogin.style.display = "block";
        scoreLog();
    }
}


