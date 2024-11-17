document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullname = this.fullname.value.trim();
    const email = this.email.value.trim();
    const confirmEmail = this.confirmEmail.value.trim();
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    if (email !== confirmEmail) {
        alert('Los correos electrónicos no coinciden.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Guardar los datos en LocalStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ fullname, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Se ha registrado correctamente.');
    window.location.href = 'login.html'; // Redirige al login
});
