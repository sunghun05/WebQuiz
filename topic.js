const topicBu = document.querySelectorAll('.button');
// const backGround = document.getElementById("mar");
const backGround = document.querySelector('#tpcimg');
const topics = new Array('math', 'nature', 'universe', 'korean', 'english', 'dutch');
const tpname = document.querySelector('#tpname');

//init
let topic = topics[0];
tpname.innerHTML = topic;

topicBu[0].addEventListener('click', (e) => {
    topic = topics[0];
    tpname.innerHTML = topic;
    //console.log(topic);
    // backgroundChanger(0);
})
topicBu[1].addEventListener('click', (e) => {
    topic = topics[1];
    tpname.innerHTML = topic;
    //console.log(topic);
    // backgroundChanger(1);
})
topicBu[2].addEventListener('click', (e) => {
    topic = topics[2];
    tpname.innerHTML = topic;
    //console.log(topic);
    // backgroundChanger(2);
})
topicBu[3].addEventListener('click', (e) => {
    topic = topics[3];
    tpname.innerHTML = topic;
    //console.log(topic);
    // backgroundChanger(3);
})
topicBu[4].addEventListener('click', (e) => {
    topic = topics[4];
    tpname.innerHTML = topic;
    //console.log(topic);
    // backgroundChanger(4);
})
topicBu[5].addEventListener('click', (e) => {
    topic = topics[5];
    tpname.innerHTML = topic;
    //console.log(topic);
    // backgroundChanger(5);
})
function backgroundChanger(a){
    switch(a){
        case 0 : //math
            backGround.style.backgroundImage = "url('sources/math.jpg')";
            backGround.style.backgroundSize = 'cover';
            break;
        case 1 : //nature
            backGround.style.backgroundImage = "url('sources/nature.jpg')";
            backGround.style.backgroundSize = 'cover';
            break;
        case 2 : //universe
            backGround.style.backgroundImage = "url('sources/universe.jpeg')";
            backGround.style.backgroundSize = 'cover';
            break;
        case 3 : //korean
            backGround.style.backgroundImage = "url('sources/korean.jpg')";
            backGround.style.backgroundSize = 'cover';
            break;
        case 4 : //english
            backGround.style.backgroundImage = "url('sources/english.jpg')";
            backGround.style.backgroundSize = 'cover';
            break;
        case 5 : //dutch
            backGround.style.backgroundImage = "url()";
            backGround.style.backgroundSize = 'cover';
            break;

    }
}