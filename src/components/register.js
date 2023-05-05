// eslint-disable-next-line import/no-named-as-default
import registerConfig from '../lib/registerConfig.js';

function register(navigateTo) {
  const formularioRegister = document.createElement('div');
  formularioRegister.className = 'formularioRegister';

  formularioRegister.innerHTML += `
  <div class="registerDiv"> 
   <div class="imgRegister"> 
    <h2 class="menssageRegisterRouter">Regístrate</h2>
   </div>
    <form class="infoRegister" id="formulario">
      <input type="email" class="emailRegister" id="emailregister" placeholder="Iniciar sesión" required> 
        <input type="password" class="passwordRegister" id="passwordregister" placeholder="Contraseña" required>
            <button class="buttonSaveInformation" type="submit">Guardar</button>
    </form>
  </div>`;

  // TODO: botón para registrar
  const buttonSaveInformation = formularioRegister.querySelector('.buttonSaveInformation');
  buttonSaveInformation.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.querySelector('.emailRegister').value;
    const password = document.querySelector('.passwordRegister').value;
    registerConfig(email, password)
      .then(() => {
        navigateTo('/login');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-user') {
          alert('correo en uso');
        } else if (error.code === 'auth/invalid-email') {
          alert('correo invalido');
        } else if (error.code === 'auth/weak-password') {
          alert('contraseña muy corta');
        } else {
          alert('otro problema');
        }
        return error;
      });
  });

  return formularioRegister;
}

export default register;
