import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../connection /Supabase.ts';


interface UserContextType {
  username: string | null;
  setUsername: (username: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Fetch username from Supabase when the component mounts
    const fetchUsername = async () => {
      const user = await supabase.auth.getUser();
      if (user.data.user) {
        const { data, error } = await supabase
          .from('Profiles')
          .select('username')
          .single();

        if (error) {
          console.error(error);
        } else {
          setUsername(data.username);
        }
      }
    };

    fetchUsername();
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};