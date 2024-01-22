// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// const CombinedDateTimePicker = () => {
//   return (
//     <>
//     <center style={{padding:"20px",margin:"20px"}}>
//     <h1>Book Viewing</h1>
//           <p>If you wish to book a viewing for this property, please select the option below</p>
//           <h4>*Please note date.time are tentative and will be confirmed by one of our teams</h4>
//     </center>
//     <div style={{display:"flex",justifyContent:"center",height: '100vh' }}>
//       <div style={{ margin: '3%' }}>
//         <center>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={['Date', 'Time']}>
//               {/* <div style={{ marginLeft: '10%' }}> */}
//                 <DatePicker label="Choose a Date" />
//                 <TimePicker label="Choose a Time" />
//               {/* </div> */}
//             </DemoContainer>
//           </LocalizationProvider>

//         </center>
//       </div>
//     </div>
//     </>
//   );
// }

// export default CombinedDateTimePicker;

// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// const CombinedDateTimePicker = () => {
//   const isSlotAvailable = (date, time) => {
//     const selectedDateTime = date && time ? date.set('hour', time.hour()).set('minute', time.minute()) : null;

//     // Define the restricted time slots
//     const restrictedSlots = [
//       { start: '2024-01-21T08:00:00', end: '2024-01-21T09:00:00' },
//       { start: '2024-01-21T10:00:00', end: '2024-01-21T11:00:00' },
//       { start: '2024-01-21T17:00:00', end: '2024-01-21T18:00:00' },
//     ];

//     // Check if the selectedDateTime falls within any restricted slots
//     return !restrictedSlots.some(slot => selectedDateTime.isBetween(slot.start, slot.end));
//   };

//   const renderDay = (date, _value, DayProps) => {
//     if (!isSlotAvailable(date, null)) {
//       // Disable the day if the slot is not available
//       DayProps.disabled = true;
//     }
//     return <DayProps.label />;
//   };

//   const renderTime = (time, _value, TimeProps) => {
//     const selectedDate = _value || AdapterDayjs.date();

//     if (!isSlotAvailable(selectedDate, time)) {
//       // Disable the time if the slot is not available
//       TimeProps.disabled = true;
//     }
//     return <TimeProps.label />;
//   };

//   return (
//     <>
//       <center style={{ padding: "20px", margin: "20px" }}>
//         <h1>Book Viewing</h1>
//         <p>If you wish to book a viewing for this property, please select the option below</p>
//         <h4>*Please note date and time are tentative and will be confirmed by one of our teams</h4>
//       </center>
//       <div style={{ display: "flex", justifyContent: "center", height: '100vh' }}>
//         <div style={{ margin: '3%' }}>
//           <center>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DemoContainer components={['Date', 'Time']}>
//                 <DatePicker
//                   label="Choose a Date"
//                   renderDay={renderDay}
//                 />
//                 <TimePicker
//                   label="Choose a Time"
//                   renderTime={renderTime}
//                 />
//               </DemoContainer>
//             </LocalizationProvider>
//           </center>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CombinedDateTimePicker;

// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// const CombinedDateTimePicker = () => {
//   const [selectedDate, setSelectedDate] = React.useState(null);

//   const isSlotAvailable = (date, time) => {
//     const selectedDateTime = date && time ? date.set('hour', time.hour()).set('minute', time.minute()) : null;

//     // Define the restricted time slots
//     const restrictedSlots = [
//       { start: '2024-01-21T08:00:00', end: '2024-01-21T09:00:00' },
//       { start: '2024-01-21T10:00:00', end: '2024-01-21T11:00:00' },
//       { start: '2024-01-21T17:00:00', end: '2024-01-21T18:00:00' },
//     ];

//     // Check if the selectedDateTime falls within any restricted slots
//     return !restrictedSlots.some(slot => selectedDateTime.isBetween(slot.start, slot.end));
//   };

//   const renderDay = (date, _value, DayProps) => {
//     if (!isSlotAvailable(date, null)) {
//       // Disable the day if the slot is not available
//       DayProps.disabled = true;
//     }
//     return <DayProps.label />;
//   };

//   const renderTime = (time, _value, TimeProps) => {
//     const selectedDateObj = _value || AdapterDayjs.date();

//     if (!isSlotAvailable(selectedDateObj, time)) {
//       // Disable the time if the slot is not available
//       TimeProps.disabled = true;
//     }
//     return <TimeProps.label />;
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleBooking = () => {
//     // Perform your API call with the selected date
//     if (selectedDate) {
//         console.log(selectedDate)
//       // Replace 'your-api-endpoint' with the actual API endpoint
//     //   fetch('your-api-endpoint', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify({ selectedDate: selectedDate.toISOString() }),
//     //   })
//     //     .then(response => response.json())
//     //     .then(data => {
//     //       // Handle API response as needed
//     //       console.log('API response:', data);
//     //     })
//     //     .catch(error => {
//     //       console.error('Error during API call:', error);
//     //     });
//     }
//   };

//   return (
//     <>
//       <center style={{ padding: "20px", margin: "20px" }}>
//         <h1>Book Viewing</h1>
//         <p>If you wish to book a viewing for this property, please select the option below</p>
//         <h4>*Please note date and time are tentative and will be confirmed by one of our teams</h4>
//       </center>
//       <div style={{ display: "flex", justifyContent: "center", height: '100vh' }}>
//         <div style={{ margin: '3%' }}>
//           <center>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DemoContainer components={['Date', 'Time']}>
//                 <DatePicker
//                   label="Choose a Date"
//                   renderDay={renderDay}
//                   onChange={handleDateChange}
//                 />
//                 <TimePicker
//                   label="Choose a Time"
//                   renderTime={renderTime}
//                 />
//               </DemoContainer>
//             </LocalizationProvider>
//             <button onClick={handleBooking}>Book Now</button>
//           </center>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CombinedDateTimePicker;

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

const CombinedDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const isSlotAvailable = (date, time) => {
    const selectedDateTime = date && time ? date.set('hour', time.hour()).set('minute', time.minute()) : null;

    const restrictedSlots = [
      { start: '2024-01-21T08:00:00', end: '2024-01-21T09:00:00' },
      { start: '2024-01-21T10:00:00', end: '2024-01-21T11:00:00' },
      { start: '2024-01-21T17:00:00', end: '2024-01-21T18:00:00' },
    ];

    return !restrictedSlots.some(slot => selectedDateTime.isBetween(slot.start, slot.end));
  };

  const isRestrictedDay = (date) => {
    return !isSlotAvailable(date, null);
  };

  const isRestrictedTime = (time, _value) => {
    const selectedDateObj = _value || AdapterDayjs.date();
    return !isSlotAvailable(selectedDateObj, time);
  };

  const renderDay = (date, _value, DayProps) => {
    if (isRestrictedDay(date)) {
      DayProps.style = { backgroundColor: 'red', color: 'white' };
    }
    return <DayProps.label />;
  };

  const renderTime = (time, _value, TimeProps) => {
    const selectedDateObj = _value || AdapterDayjs.date();

    if (isRestrictedTime(time, _value)) {
      TimeProps.style = { backgroundColor: 'red', color: 'white' };
    }
    return <TimeProps.label />;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(date)
  };

  const handleBooking = () => {
    setIsSubmitted(true);
    if (selectedDate && selectedTime) {
      const combinedDateTime = selectedDate
        .set('hour', selectedTime.hour())
        .set('minute', selectedTime.minute());
      console.log(JSON.stringify({ selectedDateTime: combinedDateTime.toISOString() }));
    }
  };
  const formattedDateTime = selectedDate && selectedTime
    ? selectedDate
        .set('hour', selectedTime.hour())
        .set('minute', selectedTime.minute())
        .format('DD-MM-YYYY [time] hh:mm:ss a')
    : '';
  return (
    <>
      <center style={{ padding: "20px", margin: "20px" }}>
        <h1 style={{fontSize:"36px",fontWeight:"bold"}}>Book Viewing</h1>
        <br/>
        <p style={{fontSize:"20px"}}>If you wish to book a viewing for this property, please select the option below</p>
        <br/>
        <h4 style={{fontSize:"16px"}}>*Please note date and time are tentative and will be confirmed by one of our teams</h4>
      </center>
      <div style={{ display: "flex", justifyContent: "center", height: '100vh' }}>
        <div style={{ margin: '3%' }}>
          <center>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['Date', 'Time']}>
                <DatePicker
                  label="Choose a Date"
                  renderDay={renderDay}
                  onChange={handleDateChange}
                />
                <TimePicker
                  label="Choose a Time"
                  renderTime={renderTime}
                />
              </DemoContainer>
            </LocalizationProvider>
            <div style={{marginTop:"20%",marginBottom:"10%"}}>
              <button style={{width:"258px",height:"54px",borderColor:"#9E4D00",borderStyle:"solid",marginRight:"10px",borderRadius:"5px",fontSize:"20px"}}>CANCEL</button>
              <button onClick={handleBooking} style={{width:"258px",backgroundColor:"#9E4D00",color:"white",height:"54px",borderRadius:"5px",fontSize:"20px"}} >CONFIRM</button>
            {/* <button onClick={handleBooking}>Book Now</button> */}
            {/* style={{marginTop:"20px",backgroundColor:"#9E4D00",borderRadius:"4px",paddingTop:"15px",color:"white",padding:"20PX",fontSize:"20px",paddingBottom:"15px"}} */}
            {/* {isSubmitted && selectedDate && (
              <p>Selected Date: {selectedDate.toISOString()}</p>
            )} */}
            </div>
            {isSubmitted && selectedDate && (
              <p>Selected Date: {formattedDateTime}</p>
            )}
          </center>
        </div>
      </div>
    </>
  );
}

export default CombinedDateTimePicker;
