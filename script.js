document.addEventListener("DOMContentLoaded", function () {
    launchBalloons(); // Call balloon function when page loads
});

function launchBalloons() {
    const balloonContainer = document.createElement("div");
    balloonContainer.classList.add("balloons");

    for (let i = 0; i < 8; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 90 + "%";
        balloon.style.animationDuration = Math.random() * 3 + 5 + "s";
        balloonContainer.appendChild(balloon);
    }

    document.body.appendChild(balloonContainer);
}

function showWish(type) {
    let wishText = '';
    if (type === 'wish1') {
        wishText = "Wishing you a day filled with love and cheer! May god bless you and fulfil your all wishes🎉";
    } else if (type === 'wish2') {
        wishText = "You're not getting older, you're just becoming a classic! 😂";
    } else if (type === 'wish3') {
        wishText = "Once again happy birthday sakshi jha May your year be filled with joy and happiness! ❤️";
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
        alert("Awww! That's what I love to hear! 🎈");
    } else {
        alert("Don't worry, I am here to make it special! 💖");
    }
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('wish-output').innerText = ''; // Clear the wish output
}
