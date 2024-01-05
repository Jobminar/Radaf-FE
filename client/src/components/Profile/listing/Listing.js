import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../listing/listing.css";
import { images } from "../listing/Data";
import { data } from "../listing/Data";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Icon } from "@mui/material";
import bed from "../listing/bed.jpg";
import group from "../listing/Group.jpg";
import vector from "../listing/Vector1.jpg";
import car from "../listing/car.jpg";
import share from "../listing/share.jpg";

const Listing = () => {
  const [age, setAge] = React.useState("");
  const [color, setColor] = useState("white");

  const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClick = () => {
    setColor((prevColor) => (prevColor === "white" ? "red" : "white"));
  };

  const first = () => {
    setCount(count - 1);
  };
  // const second = () => {
  //   setCount(count + 1);
  // };

  // const first1 = () => {
  //   setCount1(count1 - 1);
  // };
  // const second1 = () => {
  //   setCount1(count1 + 1);
  // };

  // const first2 = () => {
  //   setCount2(count2 - 1);
  // };
  // const second2 = () => {
  //   setCount2(count2 + 1);
  // };

  // const first3 = () => {
  //   setCount3(count3 - 1);
  // };
  // const second3 = () => {
  //   setCount3(count3 + 1);
  // };

  return (
    <div>
      <div className="h2">
        <h1>My listing request for</h1>
        <div>
          <FormControl
            sx={{
              m: 1,
              minWidth: 280,
              width: "55%",
              backgroundColor: "#9E5C08",
              borderRadius: "40px",
              boxShadow: "none",
              height: "auto",
            }}
          >
            <InputLabel
              id="demo-simple-select-autowidth-label"
              sx={{ display: "none" }}
            >
              Sale
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              displayEmpty
              renderValue={(value) => (value ? value : "Sale")}
              sx={{
                border: "#BE6B2E",
                background: "#BE6B2E",
                color: "white",
                fontFamily: "bold",
              }}
            >
              <MenuItem value={10}>Rental</MenuItem>
              <MenuItem value={21}>Rental</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="main1">
        <div className="image-section">
          <div className="main-image-section">
            {images.slice(0, 1).map((ele) => (
              <div key={ele.id} className="main-image">
                <img
                  className="main-image-large"
                  src={ele.img}
                  alt={ele.title}
                />
                <Icon onClick={handleClick}>
                  <FavoriteIcon
                    sx={{
                      position: "absolute",
                      top: "191px",
                      left: "572px",
                      fontSize: 55,
                      color: color,
                      cursor: "pointer",
                    }}
                  />
                </Icon>
              </div>
            ))}
          </div>
          <div className="sub-images">
            {images.slice(1).map((ele) => (
              <div className="grid" key={ele.id}>
                <img src={ele.img} alt={ele.title} className="grid-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="content-section1">
          {data.map((ele, ind) => (
            <div className="content-inside" key={ind}>
              <h1>
                <b>{ele.month}PCM(~190PW)</b>
              </h1>
              <h2>{ele.sale}</h2>
              <p>{ele.description}</p>

              <div className="icons">
                <div>
                  <img src={bed} alt="bed" />
                   <span><b>{count}</b></span>
                </div>
                <div>
                  <img src={group} alt="group" />
                  <span><b>{count}</b></span>
                </div>
                <div>
                  <img src={vector} alt="vector1" />
                  <span><b>{count}</b></span>
                </div>
                <div>
                  <img src={car} alt="car" />
                  <span><b>{count}</b></span>
                </div>

                <div>
                  <img src={share} alt="share" />
                </div>
              </div>
            
            </div>
            
          ))}
            <button className="button1">Contact with agent</button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
