function register(navigateTo) {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'registerDiv';
  const imgRegister = document.createElement('div');
  imgRegister.className = 'imgRegister';
  const menssageRegisterRouter = document.createElement('h2');
  menssageRegisterRouter.className = 'menssageRegisterRouter';
  //Registro del correo y constraseña
  const infoRegister = document.createElement('form');
  infoRegister.className = 'infoRegister';
  const emailRegister = document.createElement('input');
  emailRegister.className = 'emailRegister';
  emailRegister.type = 'email';
  const passwordRegister = document.createElement('input');
  passwordRegister.className = 'passwordRegister';
  passwordRegister.type = 'password';
  const checkPasswordRegister = document.createElement('input');
  checkPasswordRegister.className = 'checkPasswordRegister';
  checkPasswordRegister.type = 'password';
  //Boton de guardar
  const btnSaveInformation = document.createElement('button');
  btnSaveInformation.className = 'buttonSaveInformation';
  btnSaveInformation.type = 'submit';
  /*btnSaveInformation.addEventListener('click', () => {
    navigateTo('/login');
  });*/
  //Iconos
  const iconEmail = document.createElement('div');
  iconEmail.className = 'iconEmail1';
  const iconPassword = document.createElement('div');
  iconPassword.className = 'iconPassword';
  //
  menssageRegisterRouter.textContent = 'Regístrate';
  emailRegister.placeholder = 'Iniciar sesión';
  passwordRegister.placeholder = 'Contraseña';
  checkPasswordRegister.placeholder = 'Repetir contraseña';
  btnSaveInformation.textContent = 'Guardar';

  const formRegister = register(document.getElementsByClassName('infoRegister')).lastChild;
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
  })
  registerDiv.append(imgRegister, menssageRegisterRouter, infoRegister);
  infoRegister.append(emailRegister, passwordRegister, checkPasswordRegister, btnSaveInformation);
  emailRegister.appendChild(iconEmail);
  passwordRegister.appendChild(iconPassword);
  checkPasswordRegister.appendChild(iconPassword);
  return registerDiv;
}

export default register;
