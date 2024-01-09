// Use named imports for React hooks
import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Paper } from '@mui/material';

import axios from 'axios';

const Listings = () => {
  const [saleListings, setSaleListings] = useState([]);


  
    const fetchListings = async () => {
      try {
        const url = `https://raddaf-be.onrender.com/listing-property/get-listings?purpose=Sale`;
        const response = await axios.get(url);
        const { data } = response;
        setSaleListings(data);
        console.log(saleListings);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    useEffect(() => {
      fetchListings();
    }, []);

  // Use implicit return for arrow function
  return (
    <div style={{ padding: '20px' }}>
      <Button variant="contained" color="primary" onClick={fetchListings}>
        Fetch Sale Listings
      </Button>
      <Typography variant="h4" gutterBottom>
        Sale Listings
      </Typography>
      <Grid container spacing={3}>
        {saleListings.map((listing) => (
          <Grid item xs={12} key={listing._id}>
            <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="body1">
            Images:
            {listing.images.map((image, index) => (
                <div key={index}>
                <img src={image.Value} alt={`Image ${index}`} />
                </div>
            ))}
            </Typography>
              <Typography variant="h6">{listing.propertyDescription}</Typography>
              <Typography variant="body1">
                Property Type: {listing.propertyType.join(', ')}
              </Typography>
              <Typography variant="body1">
                No of Bedrooms: {listing.noOfBedrooms}
              </Typography>
              <Typography variant="body1">
                No of Bathrooms: {listing.noOfBathrooms}
              </Typography>
              <Typography variant="body1">
               noOfToiletss: {listing.noOfToilets}
              </Typography>
              <Typography variant="body1">
               parkingCapacity: {listing.parkingCapacity}
              </Typography>

              {/* Add more information as needed */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Listings;