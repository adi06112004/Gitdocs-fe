import "./Auth.css";

const SignIn = () => {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>
    </div>
  );
};

export default SignIn;
