import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const MakeOffer = ({ open, handleClose, loading, formData, handleChange, handleSubmit, selectedProperty }) => {
  return (
    < div>
    <Dialog open={open} onClose={handleClose}>
        <div style={{borderStyle:"solid",borderColor:"#E9A361",borderWidth:"3px"}}>
      <DialogTitle >
        <center style={{fontSize:"24px"}}><h1>Make an Offer</h1></center>
        <div style={{fontSize:"16px"}}>
            <p>Please check/complete the following before selecting continue.</p>
            <p>Required fields are marked by </p>
            <p>Offer For : {selectedProperty && selectedProperty.place}</p>
            <p>Asking Price : {selectedProperty && selectedProperty.price}</p>
            <p>Offer Amount </p>
            <p>Enter Any conditions below </p>
        </div>
      </DialogTitle>
      <DialogContent>
        <TextareaAutosize
            autoFocus
            margin="dense"
            minRows={7}
            id="condition"
            name="condition"
            label="Conditions"
            type="text"
            fullWidth
            style={{ width: '99%' ,fontSize:"18px"}}
            value={formData.condition}
            onChange={handleChange}
            rows={5}
            columns={5}
        />
      </DialogContent>
      
        <center>
        <Button  style={{width:"88%",backgroundColor:"#E9A361",marginBottom:"10px",fontSize:"20px",color:"white"}} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
        {/* <p style={{padding:"30px 0px 15px 0px",fontSize:"16px"}}>Powered by Estates IT @2023</p> */}
        </center>
      
      </div>
    </Dialog>
    </div>
  );
};

export default MakeOffer;
