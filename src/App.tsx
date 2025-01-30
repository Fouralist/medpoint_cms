import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import { UserProvider } from "./data/userContext.tsx"; 
import { DoctorProvider } from "./data/doctorContext.tsx"; 
import { PatientProvider } from "./data/patientContext.tsx"; 
import { OccupationProvider } from "./data/occupationContext.tsx";
import LoginPage from './mainComponent/LoginPage.tsx';  
import DashboardPage from "./mainComponent/DashboardPage.tsx";
import Dashboard from "./pages/dashboard.tsx"; 
import DataDoctor from "./pages/dataMasterDoctor.tsx";    
import DataPatient from "./pages/dataMasterPatient.tsx";
import DataOccupation from "./pages/dataMasterOccupation.tsx";

const App: React.FC = () => {
  return ( 
    <UserProvider> 
        <DoctorProvider> 
            <PatientProvider> 
                <OccupationProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/dashboardpage" element={<DashboardPage />}> 
                                <Route path="/dashboardpage/admin" element={<Dashboard />} />
                                <Route path="/dashboardpage/datamasterdoctor" element={<DataDoctor />} />
                                <Route path="/dashboardpage/datamasterpatient" element={<DataPatient />} />
                                <Route path="/dashboardpage/datamasteroccupation" element={<DataOccupation />} />
                            </Route>
                        </Routes>
                    </Router>
                </OccupationProvider>
            </PatientProvider>
        </DoctorProvider>
    </UserProvider>
    ); 
};

export default App;
