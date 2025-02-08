function showWish(type) {
    let wishText = '';
    if (type === 'wish1') {
        wishText = "Wishing you a day filled with love and cheer! 🎉";
    } else if (type === 'wish2') {
        wishText = "You're not getting older, you're just becoming a classic! 😂";
    } else if (type === 'wish3') {
        wishText = "May your year be filled with joy and happiness! ❤️";
    }
    
    document.getElementById('wish-output').innerText = wishText;
    document.getElementById('question-section').style.display = 'block';
    askQuestion();
}

function askQuestion() {
    const questions = [
        "Do you feel loved today?",
        "Are you ready to celebrate?",
        "Is there cake waiting for you?",
    ];
    
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question-text').innerText = randomQuestion;
}

function answerQuestion(answer) {
    if (answer === 'yes') {
        alert("Yay! That's what we love to hear! 🎈");
    } else {
        alert("Don't worry, we're here to make it special! 💖");
    }
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('wish-output').innerText = ''; // Clear the wish output
}