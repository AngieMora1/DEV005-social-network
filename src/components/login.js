import { loginConfig } from '../lib/loginConfig';

function login(navigateTo) {
  const formularioLogin = document.createElement('div');
  formularioLogin.className = 'formularioLogin';

  formularioLogin.innerHTML += '';
  formularioLogin.innerHTML += `
  <div class="loginDiv">
  <div class="imgLogin">
  <h2 class="messageLogin" id="imgLogin">Iniciar Sesión</h2>
  </div>
  <form class="credencialesdiv" id="formulario">
  <input type="email" class="loginCorreo" placeholder="Correo Electrónico" required>
  <input type="password" class="loginContra" placeholder="Contraseña" required>
  <button class="buttonReturn" type="submit">Ingresar</button>
  </form>
  <span class="mensajelogin">¿No tienes una cuenta?
  <p class="texto-register-login"><strong>Regístrate</strong></p></span>
  </div>`;

  const mensajelogin = formularioLogin.querySelector('.mensajelogin');
  mensajelogin.addEventListener('click', () => {
    navigateTo('/register');
  });

  const buttonReturn = formularioLogin.querySelector('.buttonReturn');
  buttonReturn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.querySelector('.loginCorreo').value;
    const password = document.querySelector('.loginContra').value;
    loginConfig(email, password)
      .then(() => {
        navigateTo('/muro');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert('no está registrado');
        } else if (error.code === 'auth/wrong-password') {
          alert('contraseña incorrecta');
        } else {
          console.log(error.message);
        }
        return error;
      });
  });

  return formularioLogin;
}

export default login;
