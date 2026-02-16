import { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [tab, setTab] = useState("signin");

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Commit your thoughts.</h2>
          <p>Sign in to manage your versioned documentation.</p>
        </div>

        <div className="auth-tabs">
          <button
            className={tab === "signin" ? "active" : ""}
            onClick={() => setTab("signin")}
          >
            Sign In
          </button>
          <button
            className={tab === "signup" ? "active" : ""}
            onClick={() => setTab("signup")}
          >
            Create Account
          </button>
        </div>

        {tab === "signup" && (
          <input type="text" placeholder="Name" className="auth-input" />
        )}

        <input type="email" placeholder="Email address" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />

        <div className="forgot">
          {tab === "signin" && <span>Forgot password?</span>}
        </div>

        <button className="auth-main-btn">
          {tab === "signin" ? "Sign In" : "Sign Up"}
        </button>

        <div className="divider">OR CONTINUE WITH</div>

        <div className="social-buttons">
          <button className="social-btn">GitHub</button>
          <button className="social-btn">Google</button>
        </div>

        <div className="auth-footer">
          Privacy Policy · Terms of Service · Help Center
        </div>
      </div>
    </div>
  );
};

export default SignIn;
