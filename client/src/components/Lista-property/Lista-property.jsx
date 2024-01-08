// // import upload from '../Images/upload-image.jpeg'
// import backarrow from "../Images/backarrow.png";
// import { useState } from "react";
// import "./Lista-property.css";
// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// // mui
// // import InputLabel from '@mui/material/InputLabel';
// import MenuItem from "@mui/material/MenuItem";
// // import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// // import { Button } from '@mui/material';
// import InputAdornment from "@mui/material/InputAdornment";
// import TextField from "@mui/material/TextField";
// // rooms have added
// import SingleBedIcon from "@mui/icons-material/SingleBed";
// import BathtubIcon from "@mui/icons-material/Bathtub";
// import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
// import toiletlogo from "../Images/toilet-logo.png";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import uploadimage from "../Images/uploadimagesmall.png";
// import Imageupload from "../Images/upload-image.jpeg";

// const Listaproperty = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [formValues, setFormValues] = useState({
//     propertyDescription: "",
//     propertytype: "",
//     selectsaleorrent: "",
//     receptionlength: "",
//     receptionwidth: "",
//     kitchenlength: "",
//     kitchenwidth: "",
//     masterBedroomlength: "",
//     masterBedroomwidth: "",
//     bedroomlength: "",
//     bedroomwidth: "",
//     numberOfRooms: "",
//     numberOfBathrooms: "",
//     numberOfToilets: "",
//     numberOfParkingSpaces: "",
//     hospitalDistance: "",
//     hospitalName: "",
//     schoolDistance: "",
//     schoolName: "",
//     busStationDistance: "",
//     busStationName: "",
//     propertyscheduling: null,
//     contactDetails: {
//       name: "",
//       email: "",
//       mobileNumber: "",
//       subject: "",
//     },
//     propertyTitleDeals: null,
//     fittingsContentForm: null,
//     EPC: null,
//     Leasehold: null,
//     TA6: null,
//     LocalAuthoritySearch: null,
//     PropertyValuationReport: null,
//     FloorPlan: null,

//     // Add more fields as needed
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     if (name === "selectValue") {
//       setSelectedOption(value);
//     }
//   };

//   const handleContactDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevState) => ({
//       ...prevState,
//       contactDetails: {
//         ...prevState.contactDetails,
//         [name]: value,
//       },
//     }));
//   };

//   const handleDateChange = (newValue) => {
//     setFormValues((prevState) => ({
//       ...prevState,
//       propertyscheduling: newValue,
//     }));
//   };

//   const handleInputFilter = (e) => {
//     const { name, value, type, checked } = e.target;

//     // For radio inputs, handle checked state to capture the value
//     const inputValue = type === "radio" ? (checked ? value : "") : value;

//     setFormValues((prevState) => ({
//       ...prevState,
//       [name]: inputValue,
//     }));
//   };

//   //     console.log('Form values:', formValues);
//   //     // Perform actions based on formValues changes
//   // }, [formValues]);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Prepare FormData
//   //   const formData = new FormData();
//   //   console.log("the final formdata line 123", formData);
//   //   formData.append("purpose", formValues.selectsaleorrent);
//   //   console.log(
//   //     "Type of selectsaleorrent:",
//   //     typeof formValues.selectsaleorrent
//   //   );

//   //   console.log("Appended purpose:", formValues.selectsaleorrent);

//   //   formData.append(" propertyType", formValues.propertytype);
//   //   console.log("Appended propertyType", formValues.propertytype);
//   //   console.log(
//   //     "  typeof Appended propertyType",
//   //     typeof formValues.propertytype
//   //   );
//   //   formData.append(
//   //     "images",
//   //     "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
//   //   );
//   //   console.log(
//   //     "Appended images:",
//   //     "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
//   //   );

//   //   formData.append(
//   //     "propertyDocuments",
//   //     JSON.stringify(formValues.propertyTitleDeals)
//   //   );
//   //   console.log("Appended propertyDocuments:", formValues.propertyTitleDeals);
//   //   console.log(
//   //     "typeof Appended propertyDocuments:",
//   //     typeof formValues.propertyTitleDeals
//   //   );

//   //   formData.append("fittingAndContentsForm", formValues.fittingsContentForm);
//   //   console.log(
//   //     "Appended fittingAndContentsForm:",
//   //     formValues.fittingsContentForm
//   //   );
//   //   console.log(
//   //     "typeof Appended fittingAndContentsForm:",
//   //     typeof formValues.fittingsContentForm
//   //   );

//   //   formData.append("energyPerformanceCertificate", formValues.EPC);
//   //   console.log("Appended energyPerformanceCertificate:", formValues.EPC);
//   //   console.log(
//   //     "typeof Appended energyPerformanceCertificate:",
//   //     typeof formValues.EPC
//   //   );
//   //   formData.append(
//   //     "leaseholdInformation",
//   //     JSON.stringify(formValues.Leasehold)
//   //   );
//   //   console.log("Appended leaseholdInformation:", formValues.Leasehold);
//   //   console.log(
//   //     "typeof Appended leaseholdInformation:",
//   //     typeof formValues.Leasehold
//   //   );

//   //   formData.append("propertyInfoForm", formValues.TA6);
//   //   console.log("Appended propertyInfoForm:", formValues.TA6);
//   //   console.log("typeof Appended propertyInfoForm:", typeof formValues.TA6);

//   //   formData.append("localAuthoritySearch", formValues.LocalAuthoritySearch);
//   //   console.log(
//   //     "Appended localAuthoritySearch:",
//   //     formValues.LocalAuthoritySearch
//   //   );
//   //   console.log(
//   //     "typeof Appended localAuthoritySearch:",
//   //     typeof formValues.LocalAuthoritySearch
//   //   );

//   //   formData.append(
//   //     "propertyValuationReport",
//   //     JSON.stringify(formValues.PropertyValuationReport)
//   //   );
//   //   console.log(
//   //     "Appended propertyValuationReport:",
//   //     formValues.PropertyValuationReport
//   //   );
//   //   console.log(
//   //     "typeof Appended propertyValuationReport:",
//   //     typeof formValues.PropertyValuationReport
//   //   );

//   //   formData.append("floorplan", formValues.FloorPlan);
//   //   console.log("Appended floorplan:", formValues.FloorPlan);
//   //   console.log("typeof Appended floorplan:", typeof formValues.FloorPlan);

//   //   formData.append("propertyDescription", formValues.propertyDescription);
//   //   console.log(
//   //     "Appended propertyDescription:",
//   //     formValues.propertyDescription
//   //   );
//   //   console.log(
//   //     "typeof Appended propertyDescription:",
//   //     typeof formValues.propertyDescription
//   //   );
//   //   // Append other form values similarly...
//   //   formData.append("receptionlength", formValues.receptionlength);
//   //   console.log("Appended receptionlength:", formValues.receptionlength);
//   //   console.log(
//   //     "typeof Appended receptionlength:",
//   //     typeof formValues.receptionlength
//   //   );

//   //   formData.append("receptionwidth", formValues.receptionwidth);
//   //   console.log("Appended receptionwidth:", formValues.receptionwidth);
//   //   console.log(
//   //     "typeof Appended receptionwidth:",
//   //     typeof formValues.receptionwidth
//   //   );

//   //   formData.append("kitchenlength", formValues.kitchenlength);
//   //   console.log("Appended kitchenlength:", formValues.kitchenlength);
//   //   console.log(
//   //     "typeof Appended kitchenlength:",
//   //     typeof formValues.kitchenlength
//   //   );

//   //   formData.append("kitchenwidth", formValues.kitchenwidth);
//   //   console.log("Appended kitchenwidth:", formValues.kitchenwidth);
//   //   console.log(
//   //     "typeof Appended kitchenwidth:",
//   //     typeof formValues.kitchenwidth
//   //   );

//   //   formData.append("masterBedroomlength", formValues.masterBedroomlength);
//   //   console.log(
//   //     "Appended masterBedroomlength:",
//   //     formValues.masterBedroomlength
//   //   );
//   //   console.log(
//   //     "typeof Appended masterBedroomlength:",
//   //     typeof formValues.masterBedroomlength
//   //   );

//   //   formData.append("masterBedroomwidth", formValues.masterBedroomwidth);
//   //   console.log("Appended masterBedroomwidth:", formValues.masterBedroomwidth);
//   //   console.log(
//   //     "typeof Appended masterBedroomwidth:",
//   //     typeof formValues.masterBedroomwidth
//   //   );

//   //   formData.append("bedroomlength", formValues.bedroomlength);
//   //   console.log("Appended bedroomlength:", formValues.bedroomlength);
//   //   console.log(
//   //     "typeof Appended bedroomlength:",
//   //     typeof formValues.bedroomlength
//   //   );

//   //   formData.append("bedroomwidth", formValues.bedroomwidth);
//   //   console.log("Appended bedroomwidth:", formValues.bedroomwidth);
//   //   console.log(
//   //     "typeof Appended bedroomwidth:",
//   //     typeof formValues.bedroomwidth
//   //   );

//   //   formData.append("noOfBedrooms", formValues.numberOfRooms);
//   //   console.log("Appended noOfBedrooms:", formValues.numberOfRooms);
//   //   console.log(
//   //     "typeof Appended noOfBedrooms:",
//   //     typeof formValues.numberOfRooms
//   //   );

//   //   formData.append("noOfBathrooms", formValues.numberOfBathrooms);
//   //   console.log("Appended noOfBathrooms:", formValues.numberOfBathrooms);
//   //   console.log(
//   //     "typeof Appended noOfBathrooms:",
//   //     typeof formValues.numberOfBathrooms
//   //   );

//   //   formData.append("noOfToilets", formValues.numberOfToilets);
//   //   console.log("Appended noOfToilets:", formValues.numberOfToilets);
//   //   console.log(
//   //     "typeof Appended noOfToilets:",
//   //     typeof formValues.numberOfToilets
//   //   );

//   //   formData.append("parkingCapacity", formValues.numberOfParkingSpaces);
//   //   console.log("Appended parkingCapacity:", formValues.numberOfParkingSpaces);
//   //   console.log(
//   //     "typeof Appended parkingCapacity:",
//   //     typeof formValues.numberOfParkingSpaces
//   //   );
//   //   // contact details
//   //   //name
//   //   formData.append("contactDetails.name", formValues.contactDetails.fullname);
//   //   console.log(
//   //     "typeof Appended contactDetails.fullname:",
//   //     typeof formValues.contactDetails.fullname
//   //   );
//   //   // email
//   //   formData.append("contactDetails.email", formValues.contactDetails.email);
//   //   console.log(
//   //     "typeof Appended contactDetails.email:",
//   //     typeof formValues.contactDetails.email
//   //   );
//   //   // mobile number
//   //   formData.append(
//   //     "contactDetails.mobileNumber",
//   //     formValues.contactDetails.mobileNumber
//   //   );
//   //   console.log(
//   //     "Appended contactDetails.mobileNumber:",
//   //     formValues.contactDetails.mobileNumber
//   //   );
//   //   console.log(
//   //     "typeof Appended contactDetails.mobileNumber:",
//   //     typeof formValues.contactDetails.mobileNumber
//   //   );
//   //   // subject
//   //   formData.append(
//   //     "contactDetails.subject",
//   //     formValues.contactDetails.subject
//   //   );
//   //   console.log(
//   //     "Appended contactDetails.subject:",
//   //     formValues.contactDetails.subject
//   //   );

//   //   console.log(
//   //     "typeof Appended contactDetails.subject:",
//   //     typeof formValues.contactDetails.subject
//   //   );

//   //   // formData.append("specialConditions", formValues.specialConditions);
//   //   // console.log("Appended specialConditions:", formValues.specialConditions);

//   //   formData.append("nearby.hospital.distance", formValues.hospitalDistance);
//   //   console.log(
//   //     "Appended nearby.hospital.distance:",
//   //     formValues.hospitalDistance
//   //   );
//   //   console.log(
//   //     "typeof Appended nearby.hospital.distance:",
//   //     typeof formValues.hospitalDistance
//   //   );
//   //   // hospital school station
//   //   formData.append("nearby.hospital.name", formValues.hospitalName);
//   //   console.log("Appended nearby.hospital.name:", formValues.hospitalName);
//   //   console.log(
//   //     "typeof Appended nearby.hospital.name:",
//   //     typeof formValues.hospitalName
//   //   );

//   //   formData.append("nearby.school.distance", formValues.schoolDistance);
//   //   console.log("Appended nearby.school.distance:", formValues.schoolDistance);
//   //   console.log(
//   //     "typeof Appended nearby.school.distance:",
//   //     typeof formValues.schoolDistance
//   //   );

//   //   formData.append("nearby.school.name", formValues.schoolName);
//   //   console.log("Appended nearby.school.name:", formValues.schoolName);
//   //   console.log(
//   //     "typeof Appended nearby.school.name:",
//   //     typeof formValues.schoolName
//   //   );

//   //   formData.append(
//   //     "typeof nearby.busStation.distance",
//   //     typeof formValues.busStationDistance
//   //   );
//   //   console.log(
//   //     "typeof Appended nearby.busStation.distance:",
//   //     typeof formValues.busStationDistance
//   //   );
//   //   console.log(
//   //     "typeof Appended nearby.busStation.distance:",
//   //     typeof formValues.busStationDistance
//   //   );

//   //   formData.append("nearby.busStation.name", formValues.busStationName);
//   //   console.log("Appended nearby.busStation.name:", formValues.busStationName);
//   //   console.log(
//   //     "typeof Appended nearby.busStation.name:",
//   //     typeof formValues.busStationName
//   //   );

//   //   formData.append("scheduleDateTime", formValues.propertyscheduling);
//   //   console.log("Appended scheduleDateTime:", formValues.propertyscheduling);
//   //   console.log(
//   //     "typeof Appended scheduleDateTime:",
//   //     typeof formValues.propertyscheduling
//   //   );

//   //   console.log("Final FormData before submission:", formData);

//   //   try {
//   //     console.log("now the we are going to submit the form", formData);

//   //     // Your existing fetch code for sending data to the backend
//   //     const response = await fetch(
//   //       "http://localhost:3000/listing-property/create",
//   //       {
//   //         method: "POST",
//   //         body: formData,
//   //       }
//   //     );

//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       // Handle successful response
//   //       console.log("Property created successfully:", data);
//   //     } else {
//   //       // Handle error response
//   //       const errorData = await response.json();
//   //       console.error("Error creating property:", errorData);
//   //     }
//   //   } catch (error) {
//   //     // Handle fetch error
//   //     console.error("Fetch error:", error);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     // Basic form fields
//     formData.append("userType", "User");
//     formData.append("purpose", formValues.selectsaleorrent);
//     formData.append("propertyType", formValues.propertytype);
//     formData.append("propertyDescription", formValues.propertyDescription);

//     // Property dimensions
//     formData.append(
//       "propertyDimensions.reception.rlength",
//       parseFloat(formValues.receptionlength)
//     );
//     formData.append(
//       "propertyDimensions.reception.Width",
//       parseFloat(formValues.receptionwidth)
//     );
//     formData.append(
//       "propertyDimensions.kitchen.rlength",
//       parseFloat(formValues.kitchenlength)
//     );
//     formData.append(
//       "propertyDimensions.kitchen.Width",
//       parseFloat(formValues.kitchenwidth)
//     );
//     formData.append(
//       "propertyDimensions.masterBedroom.rlength",
//       parseFloat(formValues.masterBedroomlength)
//     );
//     formData.append(
//       "propertyDimensions.masterBedroom.width",
//       parseFloat(formValues.masterBedroomwidth)
//     );
//     formData.append(
//       "propertyDimensions.bedroom.rlength",
//       parseFloat(formValues.bedroomlength)
//     );
//     formData.append(
//       "propertyDimensions.bedroom.width",
//       parseFloat(formValues.bedroomwidth)
//     );

//     // Numeric fields
//     formData.append("noOfBedrooms", parseInt(formValues.numberOfRooms, 10));
//     formData.append(
//       "noOfBathrooms",
//       parseInt(formValues.numberOfBathrooms, 10)
//     );
//     formData.append("noOfToilets", parseInt(formValues.numberOfToilets, 10));
//     formData.append(
//       "parkingCapacity",
//       parseInt(formValues.numberOfParkingSpaces, 10)
//     );

//     // Contact details
//     formData.append("contactDetails.name", formValues.contactDetails.name);
//     formData.append("contactDetails.email", formValues.contactDetails.email);
//     formData.append(
//       "contactDetails.mobileNumber",
//       formValues.contactDetails.mobileNumber
//     );
//     formData.append(
//       "contactDetails.subject",
//       formValues.contactDetails.subject
//     );

//     // Images
//     if (formValues.images) {
//       for (const image of formValues.images) {
//         formData.append("images", image);
//       }
//     }

//     // Property documents
//     if (formValues.propertyTitleDeals) {
//       if (Array.isArray(formValues.propertyTitleDeals)) {
//         for (const document of formValues.propertyTitleDeals) {
//           formData.append("propertyTitleDeals", document);
//         }
//       } else {
//         formData.append("propertyTitleDeals", formValues.propertyTitleDeals);
//       }
//     }
//     // Other document types (if needed)
//     formData.append("fittingContentForm", formValues.fittingsContentForm);
//     formData.append("energyPerformanceCertificate", formValues.EPC);
//     formData.append("leaseHoldInformation", formValues.Leasehold);
//     formData.append("propertyInfoForm", formValues.TA6);
//     formData.append("localAuthoritySearch", formValues.LocalAuthoritySearch);
//     formData.append(
//       "propertyValuationReport",
//       formValues.PropertyValuationReport
//     );
//     formData.append("floorPlan", formValues.FloorPlan);

//     // Nearby details
//     formData.append(
//       "nearby.hospital.distance",
//       parseFloat(formValues.hospitalDistance)
//     );
//     formData.append("nearby.hospital.name", formValues.hospitalName);
//     formData.append(
//       "nearby.school.distance",
//       parseFloat(formValues.schoolDistance)
//     );
//     formData.append("nearby.school.name", formValues.schoolName);
//     formData.append(
//       "nearby.busStation.distance",
//       parseFloat(formValues.busStationDistance)
//     );
//     formData.append("nearby.busStation.name", formValues.busStationName);

//     // Schedule date time
//     formData.append("ScheduleDateTime", formValues.propertyscheduling);

//     try {
//       const response = await fetch(
//         "http://localhost:3000/listing-property/create",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Property created successfully:", data);
//       } else {
//         const errorData = await response.json();
//         console.error("Error creating property:", errorData);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   const handleSkip = () => {
//     if (
//       !formValues.contactDetails.name ||
//       !formValues.contactDetails.email ||
//       !formValues.contactDetails.mobileNumber ||
//       !formValues.contactDetails.subject
//     ) {
//       alert("Please fill in all contact details.");
//     } else {
//     }
//   };

//   const fileInputTitleDealsRef = useRef(null);
//   const fileInputFittingsContentRef = useRef(null);
//   const fileInputEPCRef = useRef(null);
//   const fileInputLeaseholdRef = useRef(null);
//   const fileInputTA6dRef = useRef(null);
//   const fileInputLocalAuthoritySearchdRef = useRef(null);
//   const fileInputPropertyValuationReportRef = useRef(null);
//   const fileInputFloorPlanRef = useRef(null);

//   const [fileUploads, setFileUploads] = useState({
//     propertyTitleDealsUploaded: false,
//     fittingsContentFormUploaded: false,
//     EPCUploaded: false,
//     LeaseholdUploaded: false,
//     TA6Uploaded: false,
//     LocalAuthoritySearchUploaded: false,
//     PropertyValuationReportUploaded: false,
//     FloorPlanUploaded: false,
//   });

//   const handleFileChange = (event, className) => {
//     const uploadedFile = event.target.files[0];

//     const updatedFileUploads = {
//       ...fileUploads,
//       [`${className}Uploaded`]: uploadedFile !== undefined,
//     };

//     setFileUploads(updatedFileUploads);

//     const updatedFormValues = {
//       ...formValues,
//       [className]: uploadedFile,
//     };

//     setFormValues(updatedFormValues);
//   };

//   return (
//     <div className="Lista-property-con">
//       {/* list head */}
//       <div className="list-head">
//         <img
//           src={backarrow}
//           alt="back-arrow"
//           onClick={() => {
//             navigate("/");
//           }}
//         />
//         <h1>List a Property</h1>
//         <div>
//           <FormControl sx={{ m: 1, minWidth: 250 }}>
//             <Select
//               // displayEmpty
//               inputProps={{ "aria-label": "Without label" }}
//               sx={{
//                 backgroundColor: "#9E5C08",
//                 color: "white",
//                 "&:hover": {
//                   backgroundColor: "#9E5C08",
//                 },
//                 "&:focus": {
//                   backgroundColor: "#9E5C08",
//                   borderColor: "blue", // Change border color on focus
//                 },
//                 "& .MuiSelect-icon": {
//                   color: "white",
//                 },
//               }}
//               name="selectsaleorrent"
//               value={formValues.selectsaleorrent}
//               onChange={handleInputChange}
//             >
//               <MenuItem value="Sale" onClick={() => setSelectedOption("Sale")}>
//                 Sale
//               </MenuItem>
//               <MenuItem
//                 value="Tolet"
//                 onClick={() => setSelectedOption("Tolet")}
//               >
//                 Tolet
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//       </div>
//       {/* filter section */}
//       <div className="filter-section">
//         <div className="for-sale-filter">
//           {selectedOption === "Sale" && (
//             <div className="commercial-residential">
//               <div className="custom-radio">
//                 <input
//                   type="radio"
//                   id="Commercial"
//                   name="propertytype"
//                   value="Commercial"
//                   onChange={handleInputFilter}
//                   checked={formValues.propertytype === "Commercial"}
//                 />
//                 <label htmlFor="Commercial">Commercial</label>
//               </div>
//               <div className="custom-radio">
//                 <input
//                   type="radio"
//                   id="Residential"
//                   name="propertytype"
//                   value="Residential"
//                   onChange={handleInputFilter}
//                   checked={formValues.propertytype === "Residential"}
//                 />
//                 <label for="Residential">Residential</label>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="to-let-filter">
//           {selectedOption === "Tolet" && (
//             <div className="to-let-filter-sub">
//               {/* Commercial / residential */}

//               <div class="commercial-residential-rental">
//                 <div className="custom-radio">
//                   <input
//                     type="radio"
//                     id="Commercial"
//                     name="propertytype"
//                     value="Commercial"
//                     style={{ color: "#9E5C08" }}
//                   />
//                   <label for="Commercial">Commercial</label>
//                 </div>
//                 <div className="custom-radio">
//                   <input
//                     type="radio"
//                     id="Residential"
//                     name="propertytype"
//                     value="Residential"
//                   />
//                   <label for="Residential">Residential</label>
//                 </div>
//               </div>

//               {/* let only / management only / introduce only  */}

//               <div class="onlytype">
//                 <div className="custom-radio">
//                   <input
//                     type="radio"
//                     id="letonly"
//                     name="onlytype"
//                     value="letonly"
//                   />
//                   <label for="letonly">Let only</label>
//                 </div>
//                 <div className="custom-radio">
//                   <input
//                     type="radio"
//                     id="Managementonly"
//                     name="onlytype"
//                     value="Managementonly"
//                   />
//                   <label for="Managementonly">Management only </label>
//                 </div>
//                 <div className="custom-radio">
//                   <input
//                     type="radio"
//                     id="Introduceonly"
//                     name="onlytype"
//                     value="Introduceonly"
//                   />
//                   <label for="Introduceonly">Introduce only</label>
//                 </div>
//               </div>

//               {/* including bills / excluding bills */}
//               <div className="billsonly">
//                 <div className="custom-radio">
//                   <input
//                     type="radio"
//                     id="includingbills"
//                     name="bills"
//                     value="includingbills"
//                   />
//                   <label for="includingbills">Including Bills</label>
//                 </div>
//                 <div className="custom-radio">
//                   <input
//                     type="radio"
//                     id="excludingbills"
//                     name="bills"
//                     value="excludingbills"
//                   />
//                   <label for="excludingbills">Excluding Bills </label>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Image & document */}
//       <div className="image-document">
//         <div className="image-upload">
//           <div className="image-upload-sub">
//             <Imageupload />
//           </div>
//         </div>
//         {/* Hidden file input element */}
//         <div className="documents-main">
//           {/* 1 */}
//           <div className="documents-sub-1">
//             <input
//               type="file"
//               ref={fileInputTitleDealsRef}
//               onChange={(e) => handleFileChange(e, "propertyTitleDeals")}
//               style={{ display: "none" }}
//             />
//             <div
//               className="documents-sub"
//               onClick={() => fileInputTitleDealsRef.current.click()}
//             >
//               <input
//                 type="checkbox"
//                 checked={fileUploads.propertyTitleDealsUploaded}
//                 readOnly
//               />
//               <div className="property-title-deals">property-title-deals</div>
//               <img src={uploadimage} alt="uploadimage" />
//             </div>
//           </div>
//           {/* 2 */}
//           <div className="documents-sub-1">
//             <input
//               type="file"
//               ref={fileInputFittingsContentRef}
//               onChange={(e) => handleFileChange(e, "fittingsContentForm")}
//               style={{ display: "none" }}
//             />
//             <div
//               className="documents-sub"
//               onClick={() => fileInputFittingsContentRef.current.click()}
//             >
//               <input
//                 type="checkbox"
//                 checked={fileUploads.fittingsContentFormUploaded}
//                 readOnly
//               />
//               <div className="Fittings-content-form">Fittings-content-form</div>
//               <img src={uploadimage} alt="uploadimage" />
//             </div>
//           </div>
//           {/* 3 */}
//           <div className="documents-sub-1">
//             <input
//               type="file"
//               ref={fileInputEPCRef}
//               onChange={(e) => handleFileChange(e, "EPC")}
//               style={{ display: "none" }}
//             />
//             <div
//               className="documents-sub"
//               onClick={() => fileInputEPCRef.current.click()}
//             >
//               <input
//                 type="checkbox"
//                 checked={fileUploads.EPCUploaded}
//                 readOnly
//               />
//               <div className="EPC">Energy Performance Certificate (EPC)</div>
//               <img src={uploadimage} alt="uploadimage" />
//             </div>
//           </div>
//           {/* 4 */}
//           <div className="documents-sub-1">
//             <input
//               type="file"
//               ref={fileInputLeaseholdRef}
//               onChange={(e) => handleFileChange(e, "Leasehold")}
//               style={{ display: "none" }}
//             />
//             <div
//               className="documents-sub"
//               onClick={() => fileInputLeaseholdRef.current.click()}
//             >
//               <input
//                 type="checkbox"
//                 checked={fileUploads.LeaseholdUploaded}
//                 readOnly
//               />
//               <div className="Leasehold">Leasehold Information</div>
//               <img src={uploadimage} alt="uploadimage" />
//             </div>
//           </div>
//           {/* 5 */}
//           <div className="documents-sub-1">
//             <input
//               type="file"
//               ref={fileInputTA6dRef}
//               onChange={(e) => handleFileChange(e, "TA6")}
//               style={{ display: "none" }}
//             />
//             <div
//               className="documents-sub"
//               onClick={() => fileInputTA6dRef.current.click()}
//             >
//               <input
//                 type="checkbox"
//                 checked={fileUploads.TA6Uploaded}
//                 readOnly
//               />
//               <div className="TA6">Property Info Form ( TA6 )</div>
//               <img src={uploadimage} alt="uploadimage" />
//             </div>
//           </div>
//           {/* 6 */}
//           <div className="documents-sub-1">
//             <input
//               type="file"
//               ref={fileInputLocalAuthoritySearchdRef}
//               onChange={(e) => handleFileChange(e, "LocalAuthoritySearch")}
//               style={{ display: "none" }}
//             />
//             <div
//               className="documents-sub"
//               onClick={() => fileInputLocalAuthoritySearchdRef.current.click()}
//             >
//               <input
//                 type="checkbox"
//                 checked={fileUploads.LocalAuthoritySearchUploaded}
//                 readOnly
//               />
//               <div className="LocalAuthoritySearch">
//                 Local Authority Search{" "}
//               </div>
//               <img src={uploadimage} alt="uploadimage" />
//             </div>
//           </div>
//           {/* 7 */}
//           <div className="documents-sub-1">
//             <input
//               type="file"
//               ref={fileInputPropertyValuationReportRef}
//               onChange={(e) => handleFileChange(e, "PropertyValuationReport")}
//               style={{ display: "none" }}
//             />
//             <div
//               className="documents-sub"
//               onClick={() =>
//                 fileInputPropertyValuationReportRef.current.click()
//               }
//             >
//               <input
//                 type="checkbox"
//                 checked={fileUploads.PropertyValuationReportUploaded}
//                 readOnly
//               />
//               <div className="PropertyValuationReport">
//                 Property Valuation Report{" "}
//               </div>
//               <img src={uploadimage} alt="uploadimage" />
//             </div>
//           </div>
//           {/* 8 */}
//           <div className="documents-sub-1">
//             <input
//               type="file"
//               ref={fileInputFloorPlanRef}
//               onChange={(e) => handleFileChange(e, "FloorPlan")}
//               style={{ display: "none" }}
//             />
//             <div
//               className="documents-sub"
//               onClick={() => fileInputFloorPlanRef.current.click()}
//             >
//               <input
//                 type="checkbox"
//                 checked={fileUploads.FloorPlanUploaded}
//                 readOnly
//               />
//               <div className="FloorPlan">Floor Plan </div>
//               <img src={uploadimage} alt="uploadimage" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* list tail */}
//       <div className="list-tail">
//         <div className="property-description">
//           <h1>Property Description: </h1>
//           <p>
//             A well-written description of the property, highlighting its key
//             features and benefits.
//           </p>
//           <textarea
//             name="propertyDescription"
//             value={formValues.propertyDescription}
//             onChange={handleInputChange}
//             placeholder="Type something about property..."
//             rows={6}
//             cols={37}
//             style={{
//               padding: "8px",
//               borderRadius: "4px",
//               // border: '1px solid #ccc',
//               resize: "none",
//               margin: "0.1rem 0rem",
//               background: "#FFECDE",
//               fontSize: "20px",
//               outline: "none",
//             }}
//           />
//         </div>
//         {/* property dimensions */}
//         <div className="property-dimensions">
//           <h1>Property Dimensions</h1>
//           <div className="property-dimensions-main">
//             <div className="property-dimensions-sub">
//               Reception
//               <div className="dimensions-lw">
//                 <input
//                   type="text"
//                   name="receptionlength"
//                   value={formValues.receptionlength}
//                   onChange={handleInputChange}
//                   placeholder="length"
//                 />
//                 <p>Mtr</p>
//                 <input
//                   type="text"
//                   name="receptionwidth"
//                   value={formValues.receptionwidth}
//                   onChange={handleInputChange}
//                   placeholder="width"
//                 />
//                 <p>Mtr</p>
//               </div>
//             </div>
//             <div className="property-dimensions-sub">
//               Kitchen
//               <div className="dimensions-lw">
//                 <input
//                   type="text"
//                   name="kitchenlength"
//                   value={formValues.kitchenlength}
//                   onChange={handleInputChange}
//                   placeholder="length"
//                 />
//                 <p>Mtr</p>
//                 <input
//                   type="text"
//                   name="kitchenwidth"
//                   value={formValues.kitchenwidth}
//                   onChange={handleInputChange}
//                   placeholder="width"
//                 />
//                 <p>Mtr</p>
//               </div>
//             </div>
//             <div className="property-dimensions-sub">
//               Master Bedroom
//               <div className="dimensions-lw">
//                 <input
//                   type="text"
//                   name="masterBedroomlength"
//                   value={formValues.masterBedroomlength}
//                   onChange={handleInputChange}
//                   placeholder="length"
//                 />
//                 <p>Mtr</p>
//                 <input
//                   type="text"
//                   name="masterBedroomwidth"
//                   value={formValues.masterBedroomwidth}
//                   onChange={handleInputChange}
//                   placeholder="width"
//                 />
//                 <p>Mtr</p>
//               </div>
//             </div>
//             <div className="property-dimensions-sub">
//               Bedroom
//               <div className="dimensions-lw">
//                 <input
//                   type="text"
//                   name="bedroomlength"
//                   value={formValues.bedroomlength}
//                   onChange={handleInputChange}
//                   placeholder="length"
//                 />
//                 <p>Mtr</p>
//                 <input
//                   type="text"
//                   name="bedroomwidth"
//                   value={formValues.bedroomwidth}
//                   onChange={handleInputChange}
//                   placeholder="width"
//                 />
//                 <p>Mtr</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* property details */}
//         <div className="rooms-info">
//           <h1>Property Details</h1>
//           <div className="rooms-info-sub">
//             <div>
//               <SingleBedIcon sx={{ fontSize: "40px" }} />
//               <input
//                 type="text"
//                 name="numberOfRooms"
//                 value={formValues.numberOfRooms}
//                 onChange={handleInputChange}
//                 pattern="-?\d*"
//               />
//             </div>
//             <div>
//               <BathtubIcon sx={{ fontSize: "40px" }} />
//               <input
//                 type="text"
//                 name="numberOfBathrooms"
//                 value={formValues.numberOfBathrooms}
//                 onChange={handleInputChange}
//                 pattern="-?\d*"
//               />
//             </div>
//             <div>
//               <img src={toiletlogo} alt="toilet" style={{ width: "40px" }} />
//               <input
//                 type="text"
//                 name="numberOfToilets"
//                 value={formValues.numberOfToilets}
//                 onChange={handleInputChange}
//                 pattern="-?\d*"
//               />
//             </div>
//             <div>
//               <DirectionsCarFilledIcon sx={{ fontSize: "40px" }} />
//               <input
//                 type="text"
//                 name="numberOfParkingSpaces"
//                 value={formValues.numberOfParkingSpaces}
//                 onChange={handleInputChange}
//                 pattern="-?\d*"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* near by con */}
//       <div className="nearby-con">
//         <h1>Near by</h1>
//         <div className="nearby-sub-con">
//           <div className="access">
//             <p>Hospital</p>
//             <input
//               className="accesskm"
//               type="text"
//               name="hospitalDistance"
//               value={formValues.hospitalDistance}
//               onChange={handleInputChange}
//             />
//             <p>KM</p>
//             <input
//               placeholder="name of the hospital"
//               className="nameofaccess"
//               name="hospitalName"
//               value={formValues.hospitalName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="access">
//             <p>School</p>
//             <input
//               className="accesskm"
//               type="text"
//               name="schoolDistance"
//               value={formValues.schoolDistance}
//               onChange={handleInputChange}
//             />
//             <p>KM</p>
//             <input
//               placeholder="name of the school"
//               className="nameofaccess"
//               name="schoolName"
//               value={formValues.schoolName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="access">
//             <p>Bus station</p>
//             <input
//               className="accesskm"
//               type="text"
//               name="busStationDistance"
//               value={formValues.busStationDistance}
//               onChange={handleInputChange}
//             />
//             <p>KM</p>
//             <input
//               placeholder="name of the Bus station"
//               className="nameofaccess"
//               name="busStationName"
//               value={formValues.busStationName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="property-viewing-schedule">
//             <h1>Property scheduling</h1>
//             <LocalizationProvider
//               dateAdapter={AdapterDayjs}
//               className="customLocalizationProvider"
//             >
//               <DatePicker
//                 className="customDatePicker"
//                 value={formValues.propertyscheduling}
//                 onChange={(newValue) => {
//                   handleDateChange(newValue);
//                   handleInputChange({
//                     target: {
//                       name: "propertyscheduling",
//                       value: newValue,
//                     },
//                   });
//                 }}
//               />
//             </LocalizationProvider>
//           </div>
//         </div>
//       </div>
//       {/* contact details */}
//       <div className="contact-details">
//         <h1>Contact details</h1>
//         <div className="contact-sub-details">
//           <div>
//             <p>Name</p>
//             <TextField
//               // label="With normal TextField"
//               id="filled-start-adornment"
//               required
//               sx={{
//                 m: 0,
//                 width: "20rem",
//                 "& .MuiFilledInput-root": {
//                   background: "#FFECDE", // Set background color
//                   "&:hover": {
//                     background: "#FFECDE", // Maintain background color on hover
//                   },
//                   "&.Mui-focused": {
//                     border: "none", // Remove border on focus
//                     boxShadow: "none", // Remove box shadow on focus
//                   },
//                 },
//               }}
//               variant="filled"
//               name="name"
//               value={formValues.contactDetails.name}
//               onChange={handleContactDetailsChange}
//             />
//           </div>
//           <div>
//             <p>mail id:</p>
//             <TextField
//               // label="With normal TextField"
//               id="filled-start-adornment"
//               required
//               sx={{
//                 m: 0,
//                 width: "20rem",
//                 "& .MuiFilledInput-root": {
//                   background: "#FFECDE", // Set background color
//                   "&:hover": {
//                     background: "#FFECDE", // Maintain background color on hover
//                   },
//                   "&.Mui-focused": {
//                     border: "none", // Remove border on focus
//                     boxShadow: "none", // Remove box shadow on focus
//                     borderBlockStyle: "#FFECDE",
//                   },
//                 },
//               }}
//               variant="filled"
//               name="email"
//               value={formValues.contactDetails.email}
//               onChange={handleContactDetailsChange}
//             />
//           </div>
//           <div>
//             <p>Mobile No:</p>
//             <TextField
//               // label="With normal TextField"
//               id="filled-start-adornment"
//               required
//               sx={{
//                 m: 0,
//                 width: "20rem",
//                 "& .MuiFilledInput-root": {
//                   background: "#FFECDE", // Set background color
//                   "&:hover": {
//                     background: "#FFECDE", // Maintain background color on hover
//                   },
//                   "&.Mui-focused": {
//                     border: "none", // Remove border on focus
//                     boxShadow: "none", // Remove box shadow on focus
//                     borderBlockStyle: "#FFECDE",
//                   },
//                 },
//               }}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">+91 |</InputAdornment>
//                 ),
//               }}
//               variant="filled"
//               name="mobileNumber"
//               value={formValues.contactDetails.mobileNumber}
//               onChange={handleContactDetailsChange}
//             />
//           </div>
//           <div>
//             <p>Subject :</p>
//             <TextField
//               // label="With normal TextField"
//               id="filled-start-adornment"
//               required
//               sx={{
//                 m: 0,
//                 width: "20rem",
//                 "& .MuiFilledInput-root": {
//                   background: "#FFECDE", // Set background color
//                   "&:hover": {
//                     background: "#FFECDE", // Maintain background color on hover
//                   },
//                   "&.Mui-focused": {
//                     border: "none", // Remove border on focus
//                     boxShadow: "none", // Remove box shadow on focus
//                     borderBlockStyle: "#FFECDE",
//                   },
//                 },
//               }}
//               variant="filled"
//               name="subject"
//               value={formValues.contactDetails.subject}
//               onChange={handleContactDetailsChange}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="buttons">
//         <button onClick={handleSkip}>Skip</button>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Listaproperty;
