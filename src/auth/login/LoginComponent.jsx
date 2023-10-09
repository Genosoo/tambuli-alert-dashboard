// Login.js
import LoginImg from '../../assets/home.svg';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Login() {


  return (
    <div className="loginContainer">
      <div className="loginLeftContent">
        <div className="loginDetailWrapper">
          <h4>Report an incident now to help keep our</h4>
          <h1>COMMUNITY SAFE</h1>
        </div>
        <img src={LoginImg} alt="login image" />
      </div>

      <div className="loginRightContent">
        <form >
          <img src={Logo} alt="logo" />
          <h2>Login</h2>
          <span>Registered users can login to access the system</span>
          <input
            className="credInput"
            type="email"
            name="email"
            placeholder="Enter Email Address"
          />
          <input
            className="credInput"
            type="password"
            name='password'
            placeholder="Enter Password"
          />

          <label>
            <div className="rememberBox">
              <input
                type="checkbox"
              />
              <p>Remember me.</p>
            </div>

            <Link to="/">Forgot password?</Link>
          </label>

          <div className="loginBtnWrapper">

            <Link to="/tambuli-alert" >
              <button className="button btn-1" type='submit'>
                  Sign In
                </button>
              </Link>
            <Link to="/register" className="button btn-2">
              Register
            </Link>
          </div>
          {/* {message && <p>{message}</p>} */}
        </form>
      </div>
    </div>
  );
}
