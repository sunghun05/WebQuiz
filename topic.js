const topicBu = document.querySelectorAll('.button');
const backGround = document.getElementById("mar");
const topics = new Array('math', 'nature', 'universe', 'korean', 'english', 'dutch');
let topic;
topicBu[0].addEventListener('click', (e) => {
    topic = topics[0];
    console.log(topic);
})
topicBu[1].addEventListener('click', (e) => {
    topic = topics[1];
    console.log(topic);
})
topicBu[2].addEventListener('click', (e) => {
    topic = topics[2];
    console.log(topic);
})
topicBu[3].addEventListener('click', (e) => {
    topic = topics[3];
    console.log(topic);
})
topicBu[4].addEventListener('click', (e) => {
    topic = topics[4];
    console.log(topic);
})
topicBu[5].addEventListener('click', (e) => {
    topic = topics[5];
    console.log(topic);
})
function backgroundChanger(){
    switch(topic){
        case 0 : //math
            backGround.style.backgroundImage = "url()"
        case 1 : //nature
            backGround.style.backgroundImage = "url()"
        case 2 : //universe
            backGround.style.backgroundImage = "url()"
        case 3 : //korean
            backGround.style.backgroundImage = "url()"
        case 4 : //english
            backGround.style.backgroundImage = "url()"
        case 5 : //dutch
            backGround.style.backgroundImage = "url()"

    }
}