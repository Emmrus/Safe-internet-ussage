// JavaScript to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// JavaScript to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
let currentSection = 1;
let lives = 3;
let currentQuestionIndex = 0;

const quizQuestions = [
    { question: "What should you do to keep your password safe?", answers: [ "Use long, complex passwords", "Share it with friends" ], correct: 0 },
    { question: "What should you avoid on social media?", answers: [ "Sharing personal information", "Posting pictures with friends" ], correct: 0 },
    { question: "How can you avoid online scams?", answers: [ "Click on unknown links", "Verify the website before making purchases" ], correct: 1 },
    { question: "What is phishing?", answers: [ "A scam where people try to get your personal info", "A fun online game" ], correct: 0 },
    { question: "How often should you update your passwords?", answers: [ "Every few months", "Never" ], correct: 0 },
    { question: "What should you do if you receive a suspicious email?", answers: [ "Click the link to find out more", "Delete it immediately" ], correct: 1 },
    { question: "What is two-factor authentication?", answers: [ "A second layer of security", "A type of malware" ], correct: 0 },
    { question: "Which of the following is safe to share online?", answers: [ "Your favorite color", "Your bank account details" ], correct: 0 },
    { question: "What should you do if someone you don’t know sends you a friend request?", answers: [ "Ignore or decline it", "Accept it" ], correct: 0 },
    { question: "Which of these is the safest way to browse the web?", answers: [ "Use a VPN and secure browser", "Click on random links" ], correct: 0 }
];

function unlockSection(sectionNumber) {
    document.getElementById(`section${currentSection}`).style.display = 'none';
    currentSection = sectionNumber;
    document.getElementById(`section${currentSection}`).style.display = 'block';
    
    // Update progress bar
    let progressBar = document.getElementById("progressBar");
    let progress = (sectionNumber - 1) * 20;
    progressBar.style.width = progress + "%";
}
 // Trigger streamers when reaching the congratulations section
 if (sectionNumber === 6) {
    triggerStreamers();
}
// Function to show streamers
function triggerStreamers() {
    const streamerContainer = document.getElementById("streamerContainer");
    streamerContainer.style.display = 'block'; // Show the streamer container

    for (let i = 0; i < 30; i++) { // Add 30 streamers
        const streamer = document.createElement("div");
        streamer.classList.add("streamer");

        // Randomly position each streamer across the screen
        streamer.style.left = Math.random() * 100 + "vw";
        
        // Randomly assign colors to each streamer
        const colors = ["#FF69B4", "#FFD700", "#4CAF50", "#FF4500", "#00CED1"];
        streamer.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Add the streamer to the container
        streamerContainer.appendChild(streamer);
    }
}

    
function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert("Correct! Moving to the next question.");
        loadNextQuestion();
    } else {
        loseLife();
    }
}

function loseLife() {
    lives--;
    let livesDisplay = document.getElementById("lives");
    livesDisplay.textContent = "❤️".repeat(lives);
    
    if (lives === 0) {
        alert("Game over! You need to reread the sections.");
        location.reload(); // Restart the page
    }
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        let questionData = quizQuestions[currentQuestionIndex];
        document.getElementById("question").textContent = questionData.question;
        let answerButtons = document.getElementsByClassName("answer-button");
        answerButtons[0].textContent = questionData.answers[0];
        answerButtons[1].textContent = questionData.answers[1];
        answerButtons[0].setAttribute('onclick', `checkAnswer(${questionData.correct === 0})`);
        answerButtons[1].setAttribute('onclick', `checkAnswer(${questionData.correct === 1})`);
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    unlockSection(6);
}

// Function to show streamers when the Celebrate button is clicked
function triggerStreamers() {
    const streamerContainer = document.getElementById("streamerContainer");
    streamerContainer.style.display = 'block'; // Show the streamer container

    // Remove existing streamers first to avoid duplicates
    streamerContainer.innerHTML = '';

    for (let i = 0; i < 30; i++) { // Add 30 streamers
        const streamer = document.createElement("div");
        streamer.classList.add("streamer");

        // Randomly position each streamer across the screen
        streamer.style.left = Math.random() * 100 + "vw";
        
        // Randomly assign colors to each streamer
        const colors = ["#FF69B4", "#FFD700", "#4CAF50", "#FF4500", "#00CED1"];
        streamer.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Add the streamer to the container
        streamerContainer.appendChild(streamer);
    }

    // Hide streamers after a few seconds (optional)
    setTimeout(() => {
        streamerContainer.style.display = 'none';
    }, 5000); // Hide after 5 seconds
}

// Start by displaying the first section
unlockSection(1);
quizQuestions.sort(() => Math.random() - 0.5);