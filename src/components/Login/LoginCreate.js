import React from 'react';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginCreate = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" />
        <Input label="Email" type="text" />
        <Input label="Senha" type="password" />
        <Button>Cadastrar</Button>
      </form>
    </div>
  );
};

export default LoginCreate;
