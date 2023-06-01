import './Login_Page.css'
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

interface LoginFormState {
  email: string;
  password: string;
  showPassword: boolean;
}

const LoginForm: React.FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, password: e.target.value });
  };

  const handleTogglePassword = () => {
    setFormState({ ...formState, showPassword: !formState.showPassword });
  };

  return (
    <div>
 <img className='petal'  src="../Images/img.png" alt=" no" />
<h1 className='greeting'> <span> Welcome</span>
          <span className='back'> Back!</span> 
          </h1>
          <p className='greetingDesc'>Glad to see you, Again!</p>    
      <input
        type="email"
        id="email"
        value={formState.email}
        onChange={handleEmailChange}
        placeholder='   Enter your email'
      />

      <div className="password-input">
        <input
          type={formState.showPassword ? 'text' : 'password'}
          id="password"
          value={formState.password}
          onChange={handlePasswordChange}
          placeholder='  Enter your password'
        />
        <button className="password-toggle"  onClick={handleTogglePassword}>
          {formState.showPassword ? ( <VscEyeClosed /> ) : (<VscEye /> ) }
        </button>
      </div>
      <a href="/forgot Password" className='forgotpass'>Forgot Password ?</a>
      <button className='login'>Log In</button>
      <span className='createAcc'>Don’t have an account yet? <a  className='signUp' href="signUp">Sign Up </a> </span>
    </div>
  );
};






function Login_Page() {
  return (
    <div >
        <img className='Sideimg' src="../Images/rec.png" alt="" />
        <img className='imgoptn' src="../Images/Frame1.png" alt=" no" />
        <h1 className='quote'>100% Uptime😎  </h1>
        <p className='quotedesc'>Zero Infrastructure Management</p>
        <img className='group' src="../Images/Group1.png" alt="Hello" />
        <a className='Link' href="https://aesthisia.com/"><img className='Linklogo' src="../Images/Vector.png" alt="Vector" />aesthisia.com</a>
        <a href="https://www.linkedin.com/company/aesthisia/"><img src="../Images/linkedin.png" alt="LinkedIn" className="linkedin" /></a>
        <a href="https://www.facebook.com/aesthisia/"><img src="../Images/fb.png" alt="Facebook" className="fb" /></a>
        <a href="https://www.instagram.com/aesthisia/"><img src="../Images/insta.png" alt="Instagram" className="insta" /></a>
    
    <span>
    
    <LoginForm/>
      </span>   

    </div>
  );
}

export default Login_Page;
