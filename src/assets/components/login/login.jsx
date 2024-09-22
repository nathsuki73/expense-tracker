import './login.css'; // Import the CSS for the Login component

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
