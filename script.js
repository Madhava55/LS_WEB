// script.js
function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let score = 0;
    const totalQuestions = 3;

    const answers = {
        q1: 'a',
        q2: 'a',
        q3: 'b'
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const answer = quizForm[`q${i}`].value;
        if (answer === answers[`q${i}`]) {
            score++;
        }
    }

    resultDiv.innerHTML = `
        <h2>Your Score: ${score}/${totalQuestions}</h2>
        <p>Correct Answers:</p>
        <ul>
            <li>1. Who is the current president of the United States? - Joe Biden</li>
            <li>2. What is the capital of France? - Paris</li>
            <li>3. Which company developed the COVID-19 vaccine named 'Comirnaty'? - Pfizer-BioNTech</li>
        </ul>
    `;
}
