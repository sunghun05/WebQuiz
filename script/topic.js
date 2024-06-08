const topicBu = document.querySelectorAll('.button');
// const backGround = document.querySelector('#tpcimg');
const topics = new Array('math', 'nature', 'universe', 'korean', 'english', 'capital');
const tpname = document.querySelector('#tpname');
const blogin = document.querySelector('#Blogin');
const login = document.querySelector('#login');

let logg = [];
let qna;
let a;

const container = document.querySelectorAll('.container');
let i = 0;
let j = 0;

//init
let topic = topics[0];
tpname.innerHTML = topic;
blogin.style.visibility = 'hidden';

createQuestion(topic);

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
    container[0].innerHTML = "";

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

        console.log(rand);
        console.log(logg);

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

    container[0].insertAdjacentHTML("beforeend",
        `<div class="quiz">${i}topic : ${data[rand].question}<br><br><br>
            <div class="ans">
                <form id="f${i}">
                    
                </form>
            </div>
        </div>`);
    let ans = document.querySelector(`#f${i}`)
    for(j=0; j<4; j++) {
        ans.insertAdjacentHTML("beforeend",
            `<input type="radio" name="quiz${j}" value="1">
                        <span class="select">${j} : ${data[rand].options[j]}</span><br><br>`
        );
    }
}

login.addEventListener('click', loginGui)

function loginGui() {
    blogin.style.visibility = 'visible';
}
