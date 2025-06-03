import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(user.email, user.password);
    setUser({ email: "", password: "" });
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label> Email: </label>
      <input
        type="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
      />
      <label> Password: </label>
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
      />
      <button disabled={isLoading}> Sign up </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
