import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../mainComponent/cssFile/cssDashboard.css';
import { CgProfile } from "react-icons/cg";

interface DashboardSidebarProps {
    username: string; // Name of the user to display
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ username }) => {
    return (
        <div className="dashboard-sidebar">
            <nav className="sidebar-nav">
                <div className="profile-card">
                    <div className="profile-logo">
                        <CgProfile size={40} />
                    </div>
                    <div className="admin-text">
                        <span>{username}</span>
                    </div>
                </div>
                <NavLink 
                    to="/dashboardpage/admin" 
                    className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/dashboardpage/datamasterdoctor" 
                    className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                >
                    Data Master Doctor
                </NavLink>
                <NavLink 
                    to="/dashboardpage/datamasterpatient" 
                    className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                >
                    Data Master Patient
                </NavLink>
                <NavLink 
                    to="/dashboardpage/datamasteroccupation" 
                    className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                >
                    Data Master Occupation
                </NavLink>
            </nav>
        </div>
    );
};

export default DashboardSidebar;
