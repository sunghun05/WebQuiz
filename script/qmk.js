function fetchQuestions() {
    fetch('https://the-trivia-api.com/v2/questions')
        .then((result) => {
            console.log(result);
        })
}