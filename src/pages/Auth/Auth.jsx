import { useState } from "react";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <SignIn /> : <CreateAccount />}

      <div style={{ textAlign: "center" }}>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create new account" : "Already have an account"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
