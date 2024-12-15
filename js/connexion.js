document.getElementById('connexion').addEventListener('submit', function(event) {
    event.preventDefault();

    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');
    const responseMessage = document.getElementById('responseMessage');

    let isValid = true;
    let message = '';

    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
    
    const pseudoError = document.getElementById('pseudoError');
    if (pseudo.value.trim().length < 6) {
        isValid = false;
        pseudoError.style.display = 'block';
        pseudoError.textContent = 'Le pseudo doit comporter au moins 6 caractères.';
    }

    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        isValid = false;
        emailError.style.display = 'block';
        emailError.textContent = 'L\'email n\'est pas valide.';
    }

    const passwordError = document.getElementById('passwordError');
    if (password.value.length < 8) {
        isValid = false;
        passwordError.style.display = 'block';
        passwordError.textContent = 'Le mot de passe doit comporter au moins 8 caractères.';
    }

    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.textContent = 'Les mots de passe ne correspondent pas.';
    }

    const termsError = document.getElementById('termsError');
    if (!terms.checked) {
        isValid = false;
        termsError.style.display = 'block';
        termsError.textContent = 'Vous devez accepter les conditions.';
    }

    if (isValid) {
        responseMessage.style.color = 'green';
        responseMessage.innerHTML = 'Formulaire envoyé avec succès !';
    } else {
        responseMessage.style.color = 'red';
        responseMessage.innerHTML = 'Veuillez corriger les erreurs.';
    }
});
