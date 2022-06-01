import { useState } from 'react';
import RegisterView from '../views/RegisterView'
import { useHistory } from 'react-router';

export default function Register() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  function validatePassword() {
    const passwordCharacters = password.split('');
    const specialCharacters = ["!", "@", "*", "/", "?", "-", "_", "$", "&", "#", "(", ")", ".", ","];

    if (password.length < 8) {
      setErrorMessage('O campo password deve ter 8 ou mais caracteres!')
      return false;
    }

    if (!specialCharacters.some(c => passwordCharacters.includes(c))) {
      setErrorMessage('A senha deve conter ao menos um caractere especial!');
      return false;
    }

    if (!passwordCharacters.some(c => !isNaN(parseInt(c)))) {
      setErrorMessage('A senha deve conter ao menos um caractere numérico!');
      return false;
    }

    if (!passwordCharacters.some(c => c.toUpperCase() !== c.toLocaleLowerCase())) {
      setErrorMessage('A senha deve conter ao menos uma letra!');
      return false;
    }
    return true;
  }

  function handleClick(e) {
    e.preventDefault();
    setErrorMessage('');

    if (!user) {
      return setErrorMessage('O campo usuário é obrigatório!')
    }

    if (!password) {
      return setErrorMessage('O campo password é obrigatório!')
    }

    const isPasswordValid = validatePassword();
    if (!isPasswordValid) {
      return;
    }

    if (!passwordConfirmation) {
      return setErrorMessage('O campo de confirmação de password é obrigatório!')
    }

    if (passwordConfirmation !== password) {
      return setErrorMessage('A confirmação de password deve ser igual ao password!')
    }

    let users = JSON.parse(localStorage.getItem('users'));
    if (!users) {
      users = [];
    }

    const newUser = {
      user,
      password
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users))
    history.push('/leads');
  }

  return (
    <RegisterView
      handleClick={handleClick}
      setUser={setUser}
      setPassword={setPassword}
      setPasswordConfirmation={setPasswordConfirmation}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    />
  )
}