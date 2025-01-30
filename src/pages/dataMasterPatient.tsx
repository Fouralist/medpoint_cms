import React, { useEffect } from 'react';    
import './cssFile-Main/Main.css'; 
import './cssFile-Table/table.css'; 
import { useData } from '../data/patientContext.tsx';  
import { supabase } from '../connection /Supabase.ts'; 
import { FaRegEdit } from "react-icons/fa"; 
import { MdDelete } from "react-icons/md";


const DataPatient: React.FC = () =>{  

  const { tableData, setTableData } = useData();

  useEffect(() => {

    if (tableData.length === 0) { // Fetch only if data is empty
      const fetchData = async () => {
        const { data, error } = await supabase
        .from('medpoint_patient')
        .select('*');  

        if (error) {
          console.error(error);
        } else {
          setTableData(data); // Store data in the context
        }
      };

      fetchData();
    }
  }, [tableData, setTableData]);

  return (
    
    <div className="content-container"> 
      <div className="dashboard-title">
        <h2 className="text-2xl font-bold">Data Master Patient</h2>
      </div> 
      <div className="my-contentTable">
        <table>
          <thead>
            <tr>
              <th className="id">ID</th>
              <th className="name">Name</th>
              <th className="age">Age</th>
              <th className="contact">Contact</th>
              <th className="adress">Address</th>
              <th className="act">Action</th>
            </tr>
          </thead> 
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name_patient}</td>
                <td>{row.age_patient}</td>
                <td>{row.contact_patient}</td>
                <td>{row.address_patient}</td>
                <td className="action">
                  <button className="btn-edit"><FaRegEdit /></button>
                  <button className="btn-delete"><MdDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default DataPatient;