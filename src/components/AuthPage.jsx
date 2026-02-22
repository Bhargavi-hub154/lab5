import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthPage = ({ setIsAuthenticated }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="container">
      <div className="left">
        <h1>Welcome :)</h1>
        <p>
          Create a free account to access all features! <br />
          Join our community and start your journey.
        </p>
        <button onClick={() => setIsSignUp(!isSignUp)} className="switch-btn">
          {isSignUp ? "Already have an account? Sign In" : "New here? Sign Up"}
        </button>
      </div>

      <div className="right">
        {isSignUp ? (
          <SignUp setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <SignIn setIsAuthenticated={setIsAuthenticated} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
