import React, { useEffect } from 'react';   
import "./cssFile-Main/Main.css";  
import './cssFile-Table/table.css'; 
import { useData } from '../data/doctorContext';
import { supabase } from '../connection /Supabase';  
import { FaRegEdit } from "react-icons/fa"; 
import { MdDelete } from "react-icons/md";

const DataDoctor: React.FC = () => {
  const { tableData, setTableData } = useData();

  useEffect(() => {
    if (tableData.length === 0) { // Fetch only if data is empty
      const fetchData = async () => {
        const { data, error } = await supabase
        .from('medpoint_doctor')
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
        <h2 className="text-2xl font-bold">Data Master Doctor</h2>
      </div> 
      <div className="my-contentTable">
        <table>
          <thead>
            <tr>
              <th className="id">ID</th>
              <th className="name">Name</th>
              <th className="occ">IDoccupation</th>
              <th className="contact">Contact</th>
              <th className="user">User ID</th>
              <th className="avatar">AvatarLink</th>
              <th className="act">Action</th>
            </tr>
          </thead> 
          <tbody>
                {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name_doctor}</td>
                  <td>{row.id_occupation}</td>
                  <td>{row.contact_doctor}</td>
                  <td>{row.user_id}</td>
                  <td>{row.avatar_profile}</td>
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

export default DataDoctor;