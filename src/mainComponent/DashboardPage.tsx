import React, { useEffect, useState } from 'react';
import { supabase } from '../connection /Supabase'; 
import '../mainComponent/cssFile/cssDashboard.css';  
import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardComponent/DashboardHeader';
import DashboardSidebar from './DashboardComponent/DashboardSidebar'; 

const DashboardPage: React.FC = () => {
    const [user, setUser] = useState<any>(null); 
    const [username, setUsername] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData?.session?.user) {
          setUser(sessionData.session.user);  
          console.log('Component Mounted')
          
          const { data: Profiles, error } = await supabase 
            .from('Profiles')
            .select('username')
            .eq('id', sessionData.session.user.id)
            .single(); 

          if (Profiles) {
            setUsername(Profiles.username);
          } 
         else if (error) { 
          console.error('Error fetching profile:', error.message);
          }
        }
      };

      fetchUser(); 

      return () => {
        console.log('Component Unmounted');
        setUser(null); 
        setUsername(null);
      };

    }, []); 
  
    if (!user) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="layout-container">
            <header className="header">
                <DashboardHeader username={username || ''} />
            </header>
            <div className="main-layout">
                <DashboardSidebar username= {username || ''}  />
                <div className="content">
                    <Outlet /> 
                </div>
            </div>
        </div>
  );
};
  
  export default DashboardPage;