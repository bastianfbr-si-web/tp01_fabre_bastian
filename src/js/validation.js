    function validateForm() {
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();
        var isValid = true;

        // Réinitialiser les messages d'erreur précédents
        $('.error').remove();

        // Vérifier la correspondance des mots de passe
        if (password !== confirmPassword) {
            $('#confirm-password').after('<div class="error" style="color: red;">Les mots de passe ne correspondent pas.</div>');
            isValid = false;
        }

        // Empêcher la soumission du formulaire si des erreurs ont été trouvées
        return isValid;
    }