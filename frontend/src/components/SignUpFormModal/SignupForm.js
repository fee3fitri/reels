import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "../LoginFormModal/LoginFormModal.css"

const SignUpForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.signup({ email, name, password }))
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
    <div className="account_form_modal flex-col">
      <i className="fa-solid fa-xmark"
          onClick={() => setShowModal(false)}></i>
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label className="flex-col">
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="flex-col">
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label className="flex-col">
          Password
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button 
          className="modal_button block"
          type="submit">
          Signup
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

export default SignUpForm;