import React, { useState } from 'react'
import sampled from "./sampled.js";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Lettedbill = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelect = (option) => {
        setSelectedOption(option);
      };
      const options = [
        'Bill',
        'Documents'
      ];
  return (
    <div style={{margin:"3%"}}>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginBottom:"20px"}}>
          <h1 style={{paddingTop:"10px"}}>Sort By</h1>
        <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)} style={{ background: "#BE6B2E",marginLeft:"25px",color:"white", border: "none", width: "234px",height:"40", padding: "20px", fontSize: "18px",borderRadius:"10px",marginTop:"20px" }}
      >
        <option value="">Bills and Documents</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
        </div>
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
                </tr>
              </thead>
              <tbody>
                {sampled.map((item) => (
                  <tr key={item.SNo}>
                    <td>{item.SNo}</td>
                    <td>{item.Month}</td>
                    <td><FileUploadIcon/></td>
                    <td><FileUploadIcon/></td>
                    <td><FileUploadIcon/></td>
                    <td><FileUploadIcon/></td>
                    <td><FileUploadIcon/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginBottom:"20px",marginTop:"30px"}}>
          <div style={{backgroundColor:"#BE6B2E",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",width:"170px",height:"40px",border:"none",textAlign:"center",color:"white"}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"white",marginRight:"7px",padding:"5px",color:"black",borderRadius:"20px"}} width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg> Contact Agent</div>
        </div>
    </div>
  )
}

export default Lettedbill

// // import React, { useState } from 'react';
// // import sampled from "./sampled.js";
// // import FileUploadIcon from '@mui/icons-material/FileUpload';

// // const Lettedbill = () => {
// //   const [selectedOption, setSelectedOption] = useState(null);

// //   const handleSelect = (option) => {
// //     setSelectedOption(option);
// //   };
// //   const options = [
// //             'Bill',
// //             'Documents'
// //           ];

// //     const formsubmit =()=>{
      
// //     }

// //   const handleFileUpload = async (file, fieldName) => {
// //     try {
// //       console.log('File:', file);
// //     console.log('FieldName:', fieldName);
// //       const formData = new FormData();
// //       formData.append(fieldName, file);
// //       console.log(formData)

// //       const response = await fetch('https://raddaf-be.onrender.com/uploadBills', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (response.ok) {
// //         // Handle success, e.g., show a success message
// //         alert("file Uploded successfully")
// //         console.log('File uploaded successfully');
// //       } else {
// //         // Handle error, e.g., show an error message
// //         console.error('File upload failed',formData);
// //       }
// //     } catch (error) {
// //       console.error('Error uploading file:', error);
// //     }
// //   };

// //   return (
// //     <div style={{ margin: "3%" }}>
// //       <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
//         // <h1 style={{ paddingTop: "10px" }}>Sort By</h1>
//         // <select
//         //   value={selectedOption}
//         //   onChange={(e) => handleSelect(e.target.value)}
//         //   style={{ background: "#BE6B2E", marginLeft: "25px", color: "white", border: "none", width: "234px", height: "40", padding: "20px", fontSize: "18px", borderRadius: "10px", marginTop: "20px" }}
//         // >
//         //   <option value="">Bills and Documents</option>
//         //   {options.map((option, index) => (
//         //     <option key={index} value={option}>
//         //       {option}
//         //     </option>
//         //   ))}
//         // </select>
// //       </div>
// //       <div>
// //         <table className="custom-table" style={{ width: "100%", textAlign: "center" }}>
// //           <thead>
// //             <tr>
// //               <th>S.No</th>
// //               <th>Month</th>
// //               <th>Gas</th>
// //               <th>Electric</th>
// //               <th>Water</th>
// //               <th>Council Tax</th>
// //               <th>Rental Invoice</th>
// //               <th>Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {sampled.map((item) => (
// //               <tr key={item.SNo}>
// //                 <td>{item.SNo}</td>
// //                 <td>{item.Month}</td>
// //                 <td>
// //                   <label>
// //                     <FileUploadIcon />
// //                     <input
// //                       type="file"
// //                       onChange={(e) => handleFileUpload(e.target.files[0], 'gas')}
// //                       // style={{ display: 'none' }}
// //                     />
// //                   </label>
// //                 </td>
                // <td>
                //   <label>
                //     <FileUploadIcon />
                //     <input
                //       type="file"
                //       onChange={(e) => handleFileUpload(e.target.files[0], 'Electric')}
                //       // style={{ display: 'none' }}
                //     />
                //   </label>
                // </td>
                // <td>
                //   <label>
                //     <FileUploadIcon />
                //     <input
                //       type="file"
                //       onChange={(e) => handleFileUpload(e.target.files[0], 'Water')}
                //       // style={{ display: 'none' }}
                //     />
                //   </label>
                // </td>
                // <td>
                //   <label>
                //     <FileUploadIcon />
                //     <input
                //       type="file"
                //       onChange={(e) => handleFileUpload(e.target.files[0], 'Council Tax')}
                //       // style={{ display: 'none' }}
                //     />
                //   </label>
                // </td>
                // <td>
                //   <label>
                //     <FileUploadIcon />
                //     <input
                //       type="file"
                //       onChange={(e) => handleFileUpload(e.target.files[0], 'Rental Invoice')}
                //       // style={{ display: 'none' }}
                //     />
                //   </label>
                // </td>
//                 // <td>
//                 //   Submit
//                 //   <input type="submit" onClick={formsubmit} style={{display:"none"}} />
//                 // </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //       <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
// //         <button style={{ backgroundColor: "#BE6B2E", width: "170px", height: "40px", border: "none", textAlign: "center" }}>
// //           <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "white", marginRight: "7px", padding: "5px" }} width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
// //             <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
// //           </svg> Contact Agent
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Lettedbill;


// import React, { useState } from 'react';
// import sampled from "./sampled.js";
// import FileUploadIcon from '@mui/icons-material/FileUpload';

// const Lettedbill = () => {
//   const [selectedFiles, setSelectedFiles] = useState({
//     gas: null,
//     Electric: null,
//     Water: null,
//     'Council Tax': null,
//     'Rental Invoice': null,
//   });

//   const handleSelect = (option) => {
//     // Your existing code for handling the select
//   };

//   const handleFileUpload = (file, fieldName) => {
//     setSelectedFiles((prevFiles) => ({
//       ...prevFiles,
//       [fieldName]: file,
//     }));
//   };

//   const formSubmit = async () => {
//     try {
//       const formData = new FormData();

//       // Append each selected file to the formData
//       Object.keys(selectedFiles).forEach((fieldName) => {
//         formData.append(fieldName, selectedFiles[fieldName]);
//       });

//       const response = await fetch('https://raddaf-be.onrender.com/uploadBills', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         alert('Files uploaded successfully');
//         console.log('Files uploaded successfully');
//       } else {
//         console.error('File upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };

//   return (
//     <div style={{ margin: "3%" }}>
//       <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
//         {/* Your existing code for select */}
//         <h1 style={{ paddingTop: "10px" }}>Sort By</h1>
//         <select
//           value={selectedOption}
//           onChange={(e) => handleSelect(e.target.value)}
//           style={{ background: "#BE6B2E", marginLeft: "25px", color: "white", border: "none", width: "234px", height: "40", padding: "20px", fontSize: "18px", borderRadius: "10px", marginTop: "20px" }}
//         >
//           <option value="">Bills and Documents</option>
//           {options.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <table className="custom-table" style={{ width: "100%", textAlign: "center" }}>
//           {/* Your existing code for table header */}
//           <tbody>
//             {sampled.map((item) => (
//               <tr key={item.SNo}>
//                 <td>{item.SNo}</td>
//                 <td>{item.Month}</td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'gas')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'Electric')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'Water')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'Council Tax')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'Rental Invoice')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 {/* <td>
//                   Submit
//                   <input type="submit" onClick={formsubmit} style={{display:"none"}} />
//                 </td> */}
                
//                 {/* Repeat the above code block for other file types */}
//                 <td>
//                   Submit
//                   <input type="button" onClick={formSubmit} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
//         <button style={{ backgroundColor: "#BE6B2E", width: "170px", height: "40px", border: "none", textAlign: "center" }}>
//           {/* Your existing code for the button */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Lettedbill;

// import React, { useState } from 'react';
// import sampled from "./sampled.js";
// import FileUploadIcon from '@mui/icons-material/FileUpload';

// const Lettedbill = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [selectedFiles, setSelectedFiles] = useState({
//     gas: null,
//     Electric: null,
//     Water: null,
//     'Council Tax': null,
//     'Rental Invoice': null,
//   });

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleFileUpload = (file, fieldName) => {
//     setSelectedFiles((prevFiles) => ({
//       ...prevFiles,
//       [fieldName]: file,
//     }));
//   };

//   const formSubmit = async (item) => {
//     try {
//       const formData = new FormData();
//       console.log(formData)

//       // Append each selected file to the formData
//       Object.keys(selectedFiles).forEach((fieldName) => {
//         formData.append(fieldName, selectedFiles[fieldName]);
//       });


//       const response = await fetch('https://raddaf-be.onrender.com/uploadBills', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         alert('Files uploaded successfully');
//         console.log('Files uploaded successfully');
//       } else {
//         console.error('File upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };

//   return (
//     <div style={{ margin: "3%" }}>
//       <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
//         <h1 style={{ paddingTop: "10px" }}>Sort By</h1>
//         <select
//           value={selectedOption}
//           onChange={(e) => handleSelect(e.target.value)}
//           style={{ background: "#BE6B2E", marginLeft: "25px", color: "white", border: "none", width: "234px", height: "40", padding: "20px", fontSize: "18px", borderRadius: "10px", marginTop: "20px" }}
//         >
//           <option value="">Bills and Documents</option>
//           {['Bill', 'Documents'].map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <table className="custom-table" style={{ width: "100%", textAlign: "center" }}>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Month</th>
//               <th>Gas</th>
//               <th>Electric</th>
//               <th>Water</th>
//               <th>Council Tax</th>
//               <th>Rental Invoice</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sampled.map((item) => (
//               <tr key={item.SNo}>
//                 <td>{item.SNo}</td>
//                 <td>{item.Month}</td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'gas')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'Electric')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'Water')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'Council Tax')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 <td>
//                   <label>
//                     <FileUploadIcon />
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileUpload(e.target.files[0], 'Rental Invoice')}
//                       style={{ display: 'none' }}
//                     />
//                   </label>
//                 </td>
//                 {/* Repeat the above code block for other file types */}
//                 <td>
                  
//                   <button  onClick={formSubmit(item)} >Submit</button>
//                   {/* <input type="button" onClick={formSubmit} /> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "20px" }}>
//         <button style={{ backgroundColor: "#BE6B2E", width: "170px", height: "40px", border: "none", textAlign: "center" }}>
//           <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "white", marginRight: "7px", padding: "5px" }} width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
//             <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
//           </svg> Contact Agent
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Lettedbill;
