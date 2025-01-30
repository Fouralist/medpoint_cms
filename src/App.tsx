import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import { UserProvider } from "./data/userContext"; 
import { DoctorProvider } from "./data/doctorContext"; 
import { PatientProvider } from "./data/patientContext"; 
import { OccupationProvider } from "./data/occupationContext";
import LoginPage from './mainComponent/LoginPage';  
import DashboardPage from "./mainComponent/DashboardPage";
import Dashboard from "./pages/dashboard"; 
import DataDoctor from "./pages/dataMasterDoctor";    
import DataPatient from "./pages/dataMasterPatient";
import DataOccupation from "./pages/dataMasterOccupation";

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
