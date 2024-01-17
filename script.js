function checkAnswers() {
    const answer1 = document.querySelector('input[name="question1"]:checked');

    if (answer1 && answer1.value === 'a') {
        // Replace 'YOUR_CODE_1' with the desired code for this answer
        const generatedCode = 'YOUR_CODE_1';
        document.getElementById('generatedCode').innerText = generatedCode;
        document.getElementById('codeSection').style.display = 'block';
        document.getElementById('backgroundMusic').pause();
    } else {
        alert('Incorrect answers. Please try again.');
    }
}
