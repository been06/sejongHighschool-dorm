import './../styles/login.css';

function Login() {
  return (
    <div class="Login">
      <h1 class="login-text">LOGIN</h1>
      <form action="http://localhost:8000" method="post" class="login-form">
        <div class="login-input">
          <input type="text" placeholder="ID" name="id" required />
          <input type="password" placeholder="Password" name="password" required />
        </div>
        <input type="submit" value="Login" class="login-button" />
      </form>
    </div>
  );
}

export default Login;
