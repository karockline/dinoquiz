let currentQuestion = 0;
    let score = 0;
    let selectedOptionIndex;

    const questions = [
        { title: "Ski trip outside the USA", options: ["./Images/q1loveland.jpg", "./Images/q1snowmass.jpg", "./Images/q1zermatt.jpg"], answerIndex: 2 },
        { title: "Camping in the dessert", options: ["./Images/q2backpacking.jpg", "./Images/q2Moab.jpg", "./Images/q2sand-dunes.jpg"], answerIndex: 1 },
        { title: "DOLA of Cherry Creek State Park", options: ["./Images/q3Dola.jpg", "./Images/q3hikecol.jpg", "./Images/q3twinlakes.jpg"], answerIndex: 0 },
        { title: "Worst company in a 14er", options: ["./Images/q4all14er.jpg", "./Images/q4cocoredcloud.jpg", "./Images/q4Shomshura.jpg"], answerIndex: 2 },
        { title: "Most intense DIY project", options: ["./Images/q5cabinet.jpg", "./Images/q5van.jpg", "./Images/q5insulation.jpg"], answerIndex: 1 },
        { title: "Which photo was taken in Whisper Sky?", options: ["./Images/q6cocoswsky.jpg", "./Images/q6famboulder.jpg", "./Images/q6lupitaboulder.jpg"], answerIndex: 0 },
        { title: "Coldest night", options: ["./Images/q7nightwhisper.jpg", "./Images/q7hikefire.jpg", "./Images/q7firesnowmass.jpg"], answerIndex: 2 },
        { title: "Winter Park", options: ["./Images/q8mtbdola.jpg", "./Images/q8mtbzoiutah.JPG", "./Images/q8winterpark.jpg"], answerIndex: 2 },
        { title: "We are NOT camping inside the house", options: ["./Images/q9balcony.jpg", "./Images/q9greenlake.jpg", "./Images/q9livingroom.jpg"], answerIndex: 1 },
        { title: "Best balcony", options: ["./Images/q10bouldbalc.jpg", "./Images/q10fedwaybal.jpg", "./Images/q10wsbalcony.jpg"], answerIndex: 2 },
        // Add more questions in a similar format
    ];
   
    function setupQuestion() {
        const currentQuestionData = questions[currentQuestion];
        const titleElement = document.getElementById('question-title');
        titleElement.textContent = currentQuestionData.title;

        const optionsContainer = document.getElementById(`options-container-1`);
        optionsContainer.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            const img = document.createElement("img");
            img.src = currentQuestionData.options[i];
            img.alt = `Option ${i + 1}`;
            img.onclick = function () {
                selectOption(i);
            };

            optionsContainer.appendChild(img);
        }
    }

    function selectOption(optionIndex) {
        // Remove the 'selected' class from all images
        const images = document.querySelectorAll('.options-container img');
        images.forEach(img => img.classList.remove('selected'));

        // Add the 'selected' class to the clicked image
        images[optionIndex].classList.add('selected');
        selectedOptionIndex = optionIndex;
    }

    function submitAnswer() {
        if (selectedOptionIndex !== undefined) {
            checkAnswer(selectedOptionIndex);
            selectedOptionIndex = undefined; // Reset selected option

            // Delay before moving to the next question
            setTimeout(() => {
                currentQuestion++;

                if (currentQuestion < questions.length) {
                    setupQuestion();
                } else {
                    showScore();
                }
            }, 800); // 2-second delay
        }
    }

    function checkAnswer(selectedOptionIndex) {
        const currentQuestionData = questions[currentQuestion];
        const correctAnswerIndex = currentQuestionData.answerIndex;

        const images = document.querySelectorAll('.options-container img');
        images[correctAnswerIndex].classList.add('correct');

        if (selectedOptionIndex === correctAnswerIndex) {
            score++;
        }
        // Update the score in real-time
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = `Score: ${score}`;
    }

    function showScore() {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = `<div id="score">Final Score: ${score} out of ${questions.length}</div>`;
    }

    // Initial quiz setup
    setupQuestion();
   
   
   /* function setupQuestion() {
        const currentQuestionData = questions[currentQuestion];
        const titleElement = document.getElementById('question-title');
        titleElement.textContent = currentQuestionData.title;

        const optionsContainer = document.getElementById(`options-container-1`);
        optionsContainer.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            const img = document.createElement("img");
            img.src = currentQuestionData.options[i];
            img.alt = `Option ${i + 1}`;
            img.onclick = function () {
                selectOption(i);
            };

            optionsContainer.appendChild(img);
        }
    }

    function selectOption(optionIndex) {
        // Remove the 'selected' class from all images
        const images = document.querySelectorAll('.options-container img');
        images.forEach(img => img.classList.remove('selected'));

        // Add the 'selected' class to the clicked image
        images[optionIndex].classList.add('selected');
        selectedOptionIndex = optionIndex;
    }

    function submitAnswer() {
        if (selectedOptionIndex !== undefined) {
            checkAnswer(selectedOptionIndex);
            selectedOptionIndex = undefined; // Reset selected option

            currentQuestion++;

            if (currentQuestion < questions.length) {
                setupQuestion();
            } else {
                showScore();
            }
        }
    }

    function checkAnswer(selectedOptionIndex) {
        const currentQuestionData = questions[currentQuestion];
        const correctAnswerIndex = currentQuestionData.answerIndex;

        const images = document.querySelectorAll('.options-container img');
        images[correctAnswerIndex].classList.add('correct');

        if (selectedOptionIndex === correctAnswerIndex) {
            score++;
        }
        // Update the score in real-time
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = `Score: ${score}`;
    }

    function showScore() {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = `<div id="score">Final Score: ${score} out of ${questions.length}</div>`;
    }

    // Initial quiz setup
    setupQuestion();

   */