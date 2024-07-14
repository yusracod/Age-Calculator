document.querySelector('.calculate-button').addEventListener('click', function() {
    const dobInput = document.querySelector('.age-dob-input').value;
    if (dobInput) {
        const dob = new Date(dobInput);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        document.querySelector('.age-result').textContent = `Your age is: ${age}`;
    } else {
        document.querySelector('.age-result').textContent = 'Please select your birth date';
    }
});
