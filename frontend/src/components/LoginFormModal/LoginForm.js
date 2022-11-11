import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./LoginFormModal.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;

        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }

        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const handleDemoLogin = e => {
    e.preventDefault();
    return dispatch(sessionActions.login({
      email: 'demo@user.com',
      password: 'password'
    }))
  }

  return (
    <div className="account_form_modal">
      <h1>Login</h1>
      <form 
        className="login_form flex-col"
        onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label className="flex-col">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="flex-col">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button 
          className="modal_button"
          type="submit">
          Login
        </button>
        <p className="or">OR</p>
        <button 
          className="modal_button"
          type="submit"
          onClick={handleDemoLogin}>
          Use Demo Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;