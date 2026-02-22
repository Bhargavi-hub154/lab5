import { useState, useEffect } from "react";

const SignUp = ({ setIsAuthenticated }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const [isValid, setIsValid] = useState(false);

  // Derived State Logic
  useEffect(() => {
    const valid =
      form.name &&
      form.email &&
      form.password.length >= 6 &&
      form.password === form.confirm;

    setIsValid(valid);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsAuthenticated(true);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirm"
        placeholder="Confirm Password"
        onChange={handleChange}
      />

      <button disabled={!isValid} className="submit-btn">
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
