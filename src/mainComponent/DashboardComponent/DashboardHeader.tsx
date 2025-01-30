import React from 'react'; 
import '../../mainComponent/cssFile/cssDashboard.css'; 
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  username: string; // Nama pengguna yang akan ditampilkan
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ username }) => { 
    const navigate = useNavigate();
  return (
    <header className="dashboard-header">
      <div className="header-logo">
        <img src="https://cdn.brandfetch.io/idlDJEs63X/w/200/h/47/theme/dark/logo.png?c=1bfwsmEH20zzEfSNTed" alt="Logo" className="logo" />
      </div>
      <nav className="header-nav">
        <span className="welcome-message">Hi!</span>
        <button className="logout-button" onClick={() => window.confirm('Are you sure you want to logout?') ? navigate('/') : null}>
          Logout 
        </button>
      </nav>
    </header>
  );
};

export default DashboardHeader;