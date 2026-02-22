import { useState } from "react";

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email && password.length >= 6; // derived directly

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsAuthenticated(true);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Sign In</h2>

      <input
        type="email"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={!isValid} className="submit-btn">
        Login
      </button>
    </form>
  );
};

export default SignIn;
