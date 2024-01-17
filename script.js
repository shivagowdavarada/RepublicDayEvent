function generateCode() {
    const answer1 = document.getElementById('answer1').value.trim().toLowerCase();
    const answer2 = document.getElementById('answer2').value.trim().toLowerCase();

    if (answer1 === 'blue' && answer2 === 'paris') {
        const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        document.getElementById('generatedCode').innerText = generatedCode;
        document.getElementById('codeSection').style.display = 'block';
    } else {
        alert('Incorrect answers. Please try again.');
    }
}
