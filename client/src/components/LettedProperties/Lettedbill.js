import React, { useState } from 'react';
import sampled from "./sampled.js";
import { useNavigate } from 'react-router-dom';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Pageundercuntruction from './Pageundercuntruction.js';

const Lettedbill = () => {
  const navigate=useNavigate()
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({
    gas: null,
    Electric: null,
    Water: null,
    'Council Tax': null,
    'Rental Invoice': null,
  });
  const agent = () => {
    navigate('/bookafreevaluation');
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleFileUpload = (file, fieldName) => {
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };

  const formSubmit = async (item) => {
    try {
      const formData = new FormData();
      console.log(formData)
      Object.keys(selectedFiles).forEach((fieldName) => {
        formData.append(fieldName, selectedFiles[fieldName]);
      });


      const response = await fetch('https://raddaf-be.onrender.com/uploadBills', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Files uploaded successfully');
        console.log('Files uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div style={{ margin: "3%" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ paddingTop: "10px" }}>Sort By</h1>
        <select
          value={selectedOption}
          onChange={(e) => handleSelect(e.target.value)}
          style={{ background: "#BE6B2E", marginLeft: "25px", color: "white", border: "none", width: "234px", height: "40", padding: "20px", fontSize: "18px", borderRadius: "10px", marginTop: "20px" }}
        >
          <option value="Bills">Bills</option>
          {[ 'Documents'].map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {selectedOption=== "Documents"? (
        <Pageundercuntruction/>
      ):(
      <div>
        <table className="custom-table" style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Month</th>
              <th>Gas</th>
              <th>Electric</th>
              <th>Water</th>
              <th>Council Tax</th>
              <th>Rental Invoice</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {sampled.map((item) => (
              <tr key={item.SNo}>
                <td>{item.SNo}</td>
                <td>{item.Month}</td>
                <td>
                  <label>
                    <FileUploadIcon />
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e.target.files[0], 'gas')}
                      style={{ display: 'none' }}
                    />
                  </label>
                </td>
                <td>
                  <label>
                    <FileUploadIcon />
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e.target.files[0], 'Electric')}
                      style={{ display: 'none' }}
                    />
                  </label>
                </td>
                <td>
                  <label>
                    <FileUploadIcon />
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e.target.files[0], 'Water')}
                      style={{ display: 'none' }}
                    />
                  </label>
                </td>
                <td>
                  <label>
                    <FileUploadIcon />
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e.target.files[0], 'Council Tax')}
                      style={{ display: 'none' }}
                    />
                  </label>
                </td>
                <td>
                  <label>
                    <FileUploadIcon />
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e.target.files[0], 'Rental Invoice')}
                      style={{ display: 'none' }}
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", margin: "20px 0px 20px" }}>
        <div onClick={agent} style={{ backgroundColor: "#BE6B2E",display:"flex",alignItems: "center",paddingTop:"0px", width: "170px", height: "40px", border: "none", textAlign: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "white",borderRadius:"25px", marginRight: "7px",marginLeft:"7px", padding: "5px" }} width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg><p style={{paddingBottom:"0px",color:"white"}}> Contact Agent</p>
        </div>
      </div>
    </div>
  );
};

export default Lettedbill;
