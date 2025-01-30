// DataContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DataContextType {
  tableData: any[];
  setTableData: (data: any[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DoctorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tableData, setTableData] = useState<any[]>([]);

  return (
    <DataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use data context
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
