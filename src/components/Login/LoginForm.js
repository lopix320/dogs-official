import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json.token);
        setToken(json.token);
      });
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="username"
          type="text"
          value={username}
          setState={setUsername}
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          value={password}
          setState={setPassword}
        />
        <Button>Entrar</Button>
        {/* <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        /> */}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
};

export default LoginForm;
