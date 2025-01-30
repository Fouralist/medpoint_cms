import React, { useEffect } from "react";
import Card from "./dashboardCard/card.tsx"; 
import { supabase } from "../connection /Supabase.ts";
import "./cssFile-Main/Main.css"; 
import "./cssFile-Card/card.css"; 
import { FaUserMd, FaUserInjured, FaBriefcaseMedical, FaChartLine } from 'react-icons/fa';

const Dashboard: React.FC = () => { 

  const [doctorCount, setDoctorCount] = React.useState<number>(0);

  useEffect(() => {
    const fetchDoctorCount = async () => {
     
        const { data, error,count } = await supabase
          .from('medpoint_doctor')
          .select('*', { count: 'exact' }); 

        if (data) {
          setDoctorCount(count || 0); 
        } else {
          throw error;
    }; 
  };

    fetchDoctorCount();
  }, []); 

  const [patientCount, setPatientCount] = React.useState<number>(0);

  useEffect(() => {
    const fetchPatientCount = async () => {
        const { data, error,count } = await supabase
          .from('medpoint_patient')
          .select('*', { count: 'exact' }); 

          if (data) {
            setPatientCount(count || 0); 
          } else {
            throw error;
      }; 
    };
  
      fetchPatientCount();
    }, []);  

    const [occupationCount, setOccupationCount] = React.useState<number>(0);

  useEffect(() => {
    const fetchOccupationCount = async () => {
        const { data, error,count } = await supabase
          .from('medpoint_doctor_occupation')
          .select('*', { count: 'exact' }); 

          if (data) {
            setOccupationCount(count || 0); 
          } else {
            throw error;
      }; 
    };
  
      fetchOccupationCount();
    }, []);  

    const [scheduleCount, setScheduleCount] = React.useState<number>(0);

  useEffect(() => {
    const fetchScheduleCount = async () => {
        const { data, error,count } = await supabase
          .from('medpoint_doctor_schedule')
          .select('*', { count: 'exact' }); 

          if (data) {
            setScheduleCount(count || 0); 
          } else {
            throw error;
      }; 
    };
  
      fetchScheduleCount();
    }, []); 

  return (

    <div className="content-container">
      <div className="dashboard-title">
        <h2 className="text-2xl font-bold">Welcome to the Dashboard</h2>
      </div> 
      <div className="dashboard-cards">
      <Card
          title="Doctors"
          value={doctorCount}
          icon={<FaUserMd />}
          description="Total number of registered doctors."
        />
        <Card
          title="Patients"
          value={patientCount}
          icon={<FaUserInjured />}
          description="Total number of registered patients."
        />
        <Card
          title="Occupations"
          value={occupationCount}
          icon={<FaBriefcaseMedical />}
          description="Total number of doctor occupations."
        />
        <Card
          title="Schedule"
          value={scheduleCount}
          icon={<FaChartLine />}
          description="Doctor available scheduled this month."
        />
      </div>
    </div>
  
  );
};

export default Dashboard;