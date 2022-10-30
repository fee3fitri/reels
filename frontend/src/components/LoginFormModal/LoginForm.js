import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css";

function LoginForm() {
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
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <div className="login_form_page">
      <div className="flex-row justify-between">
        <h1>Log In</h1>
        <i class="fa-solid fa-xmark"></i>
      </div>
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
          className="login_button"
          type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;