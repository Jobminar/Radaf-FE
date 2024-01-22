import React, { useState } from 'react';

const LettedAgree = () => {
  const [formData, setFormData] = useState({
    landlord1: '',
    landlord2: '',
    field1: '',
    field2: '',
    field12: '',
    largeTextField: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

   
  };

  return (
    <div style={{ margin: '2%',fontFamily:"Roboto" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <label>Landlord 1:</label>
            <br />
            <textarea style={{fontSize:"15px"}} name="landlord1" value={formData.landlord1} onChange={handleChange} rows={2} cols={40} />
          </div>
          <div>
            <label>Landlord 2:</label>
            <br />
            <textarea style={{fontSize:"15px"}}
            name="landlord2"
            value={formData.landlord2}
            onChange={handleChange}
            rows={2}
            cols={40}
          />
          </div>
        </div>

        <label>
          Field 1:
          <input type="text" name="field1" value={formData.field1} onChange={handleChange} />
        </label>

        <label>
          Field 2:
          <input type="text" name="field2" value={formData.field2} onChange={handleChange} />
        </label>

        <label>
          Large Text Field:
          <textarea
            name="largeTextField"
            value={formData.largeTextField}
            onChange={handleChange}
            rows={5}
            cols={40}
          />
        </label>

        <label>
          Field 12:
          <input type="text" name="field12" value={formData.field12} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LettedAgree;
