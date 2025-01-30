import React, { ReactNode, useState } from 'react';
import { supabase } from '../connection /Supabase';
import '../mainComponent/cssFile/cssLogin.css'; 
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

// TextInput Component
interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  type: string;
  error?: string;  
  icon?: ReactNode;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
  type,
  error, 
  icon, 
  onKeyDown,
}) => {
  return (
    <div className="text-input">
      {label && <label className="text-input-label">{label}</label>}
      <div className="text-input-wrapper"> 
      {icon && <span className="text-input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}  
          onKeyDown={onKeyDown}
          className={`text-input-field ${error ? 'text-input-error' : ''}`}
        />
      </div>
      {error && <p className="text-input-error-message">{error}</p>}
    </div>
  );
};

// Login Page Component
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      alert('Login successful!');  
      navigate('/dashboardpage');
    } catch (err) {
      setError('missing email or password');
    }
  }; 

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  }

  return (
    // Login Page Container
    <div className="login-page">

      {/* login form */}
      <div className="login-container"> 

      <img 
        src="https://cdn.brandfetch.io/idlDJEs63X/w/200/h/47/theme/dark/logo.png?c=1bfwsmEH20zzEfSNTed" 
        alt=""
        className="logo-medpoint" />

        <h1 className="login-title">Welcomes to Medpoint</h1> 
        
        <p className="login-subtitle">Enter with your email and password</p> 
        

        <TextInput
          value={email}
          onChange={setEmail}
          placeholder="Email"
          label="Email"
          type="email" 
          icon={<FaEnvelope/>}  
          onKeyDown={handleKeyDown}
        />
        <TextInput
          value={password}
          onChange={setPassword}
          placeholder="Password"
          label="Password"
          type="password"   
          disabled={!email}
          icon={<FaLock/>} 
          onKeyDown={handleKeyDown}
        />

        {error && <p className="login-error">{error}</p>}

        <button onClick={handleLogin} className="login-button" >
          Login Now
        </button> 
      </div>
      
      {/* side login */}
      <div className="side-login">
          <h1>Your Personal Healthcare Assistant</h1>
        </div>

    </div>
  );
};

export default LoginPage;
