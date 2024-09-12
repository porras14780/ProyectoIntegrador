function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '') {
        alert('Ingrese un nombre de usuario');
    } else {
        alert('Bienvenido a Pets And Friends');
    }
}
