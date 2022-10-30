import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './LoginForm.css';


const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.sessionUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({email, password}))
      .catch(async res => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text;
        }

        if (data?.errors) {
          setErrors(data.errors);
        } else if (data) {
          setErrors([data]);
        } else {
          setErrors([res.statusText]);
        }
      });
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
      </form>
    </>
  )
}

export default LoginFormPage;