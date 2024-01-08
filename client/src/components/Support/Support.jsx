// import "./Support.css"

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const [selectedOption, setSelectedOption] = React.useState('');
//   const [otherText, setOtherText] = React.useState('');


//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
  

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleCall = () => {
//     window.location.href = "tel:040-123456";
//   };

//   const handleMail = () => {
//     window.location.href = "mailto:Jobminar123@info.com";
//   };

//   const handleOtherTextChange = (event) => {
//     setOtherText(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handlesubmit=()=>{
//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         phoneNumber: document.getElementById('phone number').value,
//         contactMethod: selectedOption,
//         otherText: selectedOption === 'other' ? otherText : '',
//         message: document.getElementById('message').value,
//       };
//       /*
//       axios.post("api/url",formData)
//       .then(response=>{
//         console.log("for data sent",formData)
//       })
//       .catch(error){
//         console.log("error while sending data",error)
//       }
//       */
//     console.log(formData)
//     setOpen(false)
//   }

//   return (
//     <React.Fragment>
//         <div className="cont">
//                 <h1>Support</h1>
//                 <div className="mai" style={{margin:"30px"}}>
//                     <div className="sma" onClick={handleClickOpen}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="white" className="ico bi bi-house-door-fill" viewBox="0 0 16 16">
//                             <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
//                         </svg>
//                         <div className="sm">
//                             <p style={{fontWeight:"bold",fontSize:"20px"}}>Request call back</p><br/><p>Compelte online form</p>
//                         </div>
//                     </div>
                    
//                     <div className="sma" onClick={handleCall}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="white" className="ico bi bi-telephone-fill" viewBox="0 0 16 16">
//                             <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
//                         </svg>
//                         <div className="sm">
//                             <p style={{fontWeight:"bold",fontSize:"20px"}}>Contact us any time</p> <br/><p>landline: 040-123456<br/>landline: 040-123456</p>
//                         </div>
//                     </div>
//                     <div className="sma" onClick={handleMail}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="white" className="ico bi bi-envelope-fill" viewBox="0 0 16 16">
//                             <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
//                         </svg>
//                         <div className="sm">
//                         <p style={{fontWeight:"bold",fontSize:"20px"}}>Send us an Email</p><br/><p>Jobminar123@info.com</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         {/* <div> */}
//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button> */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Request call back</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Complete this form
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Name"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="email"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="phone number"
//             label="phone number"
//             type="text"
//             fullWidth
//             variant="standard"
//           />

//         <Select
//         autoFocus
//         label="Contact Method"
//         defaultValue="Subject"
//         className="sel"
//             value={selectedOption}
//             onChange={handleSelectChange}
//             fullWidth
//             placeholder="Contact method"
//             variant="standard"
//             margin="dense"
//             id="contact-method"
            
//             >
//         <MenuItem value="Valuation">Valuation</MenuItem>
//         <MenuItem value="letting information">Letting information</MenuItem>
//         <MenuItem value="other">Other</MenuItem>
//         </Select>

//         {selectedOption === 'other' && (
//             <TextField
//               autoFocus
//               margin="dense"
//               id="other"
//               label="Other (please specify)"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={otherText}
//               onChange={handleOtherTextChange}
//             />
//           )}
          
//           <TextField
//             autoFocus
//             margin="dense"
//             id="message"
//             label="message"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handlesubmit}>Submit</Button>
//         </DialogActions>
//       </Dialog>
//       {/* </div> */}
//     </React.Fragment>
//   );
// }





import "./Support.css";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const [selectedOption, setSelectedOption] = React.useState("");
  const [otherText, setOtherText] = React.useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCall = () => {
    window.location.href = "tel:040-123456";
  };

  const handleMail = () => {
    window.location.href = "mailto:Jobminar123@info.com";
  };

  const handleOtherTextChange = (event) => {
    setOtherText(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

const handlesubmit = async () => {
  try {
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phone number").value,
      contactMethod: selectedOption,
      otherText: selectedOption === "Other" ? otherText : "",
      message: document.getElementById("message").value,
    };
    // const formData = {
    //   name: document.getElementById("name").value,
    //   email: document.getElementById("email").value,
    //   phoneNumber: document.getElementById("phone number").value,
    //   contactMethod: selectedOption,
    //   otherText: document.getElementById("other").value,
    //   // selectedOption === "Other" ? otherText : "",
    //   message: document.getElementById("message").value,
    // };
    // const formData = {
    //   name: document.getElementById("name").value,
    //   email: document.getElementById("email").value,
    //   phoneNumber: document.getElementById("phone number").value,
    //   contactMethod: selectedOption,
    //   otherText: document.getElementById("other").value,
    //   message: document.getElementById("message").value,
    // };
    
    // const formData = {
    //   name: document.getElementById("name").value,
    //   email: document.getElementById("email").value,
    //   phoneNumber: document.getElementById("phoneNumber").value,
    //   contactMethod: selectedOption,
    //   otherText: selectedOption === "Other" ? otherText : "",
    //   message: document.getElementById("message").value,
    // };
    

    // Send the form data to the server using fetch
    const response = await fetch("https://raddaf-be.onrender.com/callback-agents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(formData),
      
    });
    console.log(formData)
    console.log(response.json())

    if (response.ok) {
      const responseData = await response.json();
      console.log("Form data sent:", formData);
      console.log("Server response:", responseData);
      setOpen(false);
    } else {
      console.error("Failed to send form data. Server responded with:", response.status, response.statusText);
      // Handle errors or display an error message to the user
    }
  } catch (error) {
    console.error("Error while sending data:", error);
    // Handle errors or display an error message to the user
  }
};

  return (
    <React.Fragment>
      <div className="cont">
        <h1>Support</h1>
        <div className="mai" style={{ margin: "30px" }}>
          <div className="sma" onClick={handleClickOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              fill="white"
              className="ico bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
            <div className="sm">
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                Request call back
              </p>
              <br />
              <p>Compelte online form</p>
            </div>
          </div>

          <div className="sma" onClick={handleCall}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              fill="white"
              className="ico bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <div className="sm">
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                Contact us any time
              </p>{" "}
              <br />
              <p>
                landline: 040-123456
                <br />
                landline: 040-123456
              </p>
            </div>
          </div>
          <div className="sma" onClick={handleMail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="16"
              fill="white"
              className="ico bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <div className="sm">
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                Send us an Email
              </p>
              <br />
              <p>Jobminar123@info.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div> */}
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request call back</DialogTitle>
        <DialogContent>
          <DialogContentText>Complete this form</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone number"
            label="phone number"
            type="text"
            fullWidth
            variant="standard"
          />

          <Select
            autoFocus
            label="Contact Method"
            defaultValue="Subject"
            className="sel"
            value={selectedOption}
            onChange={handleSelectChange}
            fullWidth
            placeholder="Contact method"
            variant="standard"
            margin="dense"
            id="contact-method"
          >
            <MenuItem value="Valuation">Valuation</MenuItem>
            <MenuItem value="letting information">Letting information</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>

          {selectedOption === "Other" && (
            <TextField
              autoFocus
              margin="dense"
              id="other"
              label="Other (please specify)"
              type="text"
              fullWidth
              variant="standard"
              value={otherText}
              onChange={handleOtherTextChange}
            />
          )}

          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="message"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlesubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      {/* </div> */}
    </React.Fragment>
  );
}
