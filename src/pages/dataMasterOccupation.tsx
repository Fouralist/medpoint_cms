import React, { useEffect } from 'react';   
import './cssFile-Main/Main.css';  
import './cssFile-Table/table.css'; 
import { useData } from '../data/occupationContext';
import { supabase } from '../connection /Supabase'; 
import { FaRegEdit } from "react-icons/fa"; 
import { MdDelete } from "react-icons/md";

const DataOccupation: React.FC = () =>{  

  const { tableData, setTableData } = useData(); 

  useEffect(() => {

    if (tableData.length === 0) { // Fetch only if data is empty
      const fetchData = async () => {
        const { data, error } = await supabase
        .from('medpoint_doctor_occupation')
        .select('*')
        .order('id', {ascending: true});
        
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
        <h2 className="text-2xl font-bold">Data Master Occupation</h2>
      </div> 
      <div className="my-contentTable"> 
        <table>
          <thead>
              <tr>
                  <th className="id">ID</th>
                  <th className="spec">Specialist</th> 
                  <th className="act">Action</th>
              </tr>
          </thead>
          <tbody>
              {tableData.map((row, index) => (
              <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.specialist}</td>
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

export default DataOccupation;