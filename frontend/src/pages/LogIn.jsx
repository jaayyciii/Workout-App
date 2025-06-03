import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function LogIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(user.email, user.password);
    setUser({ email: "", password: "" });
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
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
      <button disabled={isLoading}> Log In </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
